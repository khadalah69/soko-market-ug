const productPrices = new Map([
  ["phone-a", 1850000], ["headphones-a", 255000], ["sneakers-a", 130000], ["chair-a", 527000],
  ["skincare-a", 94000], ["coffee-a", 42000], ["watch-a", 342000], ["lamp-a", 168000],
  ["tablet-a", 1112000], ["bottle-a", 28000], ["dress-a", 99000], ["serum-a", 54000],
  ["speaker-a", 189000], ["speaker-b", 89000], ["soundbar-a", 399000], ["tv-a", 1290000],
  ["laptop-a", 2450000], ["camera-a", 650000]
]);

const jsonHeaders = { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" };
const maxOrderAmount = 10000000;
const maxItems = 20;
const maxQuantityPerItem = 10;

function jsonResponse(body, status, corsHeaders = {}) {
  return new Response(JSON.stringify(body), { status, headers: { ...jsonHeaders, ...corsHeaders } });
}

function constantTimeEqual(left, right) {
  if (typeof left !== "string" || typeof right !== "string") return false;
  let difference = left.length ^ right.length;
  const length = Math.max(left.length, right.length);
  for (let index = 0; index < length; index += 1) {
    difference |= (left.charCodeAt(index % Math.max(left.length, 1)) || 0)
      ^ (right.charCodeAt(index % Math.max(right.length, 1)) || 0);
  }
  return difference === 0;
}

function corsHeaders(request, env) {
  const origin = request.headers.get("Origin");
  const storefrontOrigin = new URL(env.STOREFRONT_URL).origin;
  if (origin !== storefrontOrigin) return null;
  return {
    "Access-Control-Allow-Origin": storefrontOrigin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin"
  };
}

function normalizeUgandaPhone(value) {
  if (typeof value !== "string") return null;
  const compact = value.trim().replace(/[\s-]/g, "");
  if (!/^(?:\+?256|0)?7\d{8}$/.test(compact)) return null;
  const digits = compact.replace(/^\+/, "");
  const nationalNumber = digits.startsWith("256") ? digits.slice(3) : digits.startsWith("0") ? digits.slice(1) : digits;
  return `256${nationalNumber}`;
}

async function verifyFlutterwaveTransaction(transactionId, expectedOrder, env) {
  const response = await fetch(`https://api.flutterwave.com/v3/transactions/${encodeURIComponent(transactionId)}/verify`, {
    headers: { Authorization: `Bearer ${env.FLW_SECRET_KEY}`, Accept: "application/json" }
  });
  if (!response.ok) throw new Error(`Flutterwave transaction verification returned ${response.status}.`);
  const body = await response.json();
  const transaction = body?.data;
  const amount = Number(transaction?.amount);
  const isPaid = body?.status === "success"
    && transaction?.status === "successful"
    && transaction?.tx_ref === expectedOrder.tx_ref
    && transaction?.currency === "UGX"
    && Number.isFinite(amount)
    && amount === expectedOrder.amount;
  return { isPaid, status: transaction?.status, transaction };
}

async function updateOrderFromProvider(transactionId, txRef, env) {
  if (!Number.isSafeInteger(Number(transactionId)) || !/^[a-f0-9-]{36}$/.test(txRef)) {
    return { error: "invalid", status: 400 };
  }
  const order = await env.DB.prepare(
    "SELECT tx_ref, amount, status FROM orders WHERE tx_ref = ?"
  ).bind(txRef).first();
  if (!order) return { error: "not_found", status: 404 };
  if (order.status === "successful") return { status: "successful" };

  const result = await verifyFlutterwaveTransaction(transactionId, order, env);
  if (result.isPaid) {
    await env.DB.prepare(
      "UPDATE orders SET status = 'successful', flutterwave_transaction_id = ?, updated_at = CURRENT_TIMESTAMP WHERE tx_ref = ? AND status != 'successful'"
    ).bind(Number(transactionId), txRef).run();
  } else if (result.status === "failed") {
    await env.DB.prepare(
      "UPDATE orders SET status = 'failed', flutterwave_transaction_id = ?, updated_at = CURRENT_TIMESTAMP WHERE tx_ref = ? AND status = 'pending'"
    ).bind(Number(transactionId), txRef).run();
  }
  const updated = await env.DB.prepare("SELECT status FROM orders WHERE tx_ref = ?").bind(txRef).first();
  return { status: updated.status };
}

async function handleCheckout(request, env, cors) {
  if (!env.FLW_SECRET_KEY || !env.FLW_WEBHOOK_SECRET_HASH || !env.STOREFRONT_URL || !env.DB) {
    return jsonResponse({ error: "Mobile money checkout is not configured yet." }, 503, cors);
  }

  const contentLength = Number(request.headers.get("Content-Length") || 0);
  if (contentLength > 16000) return jsonResponse({ error: "Checkout request is too large." }, 413, cors);

  let input;
  try {
    const text = await request.text();
    if (text.length > 16000) return jsonResponse({ error: "Checkout request is too large." }, 413, cors);
    input = JSON.parse(text);
  } catch {
    return jsonResponse({ error: "Checkout request must be valid JSON." }, 400, cors);
  }

  if (!input || !Array.isArray(input.items) || input.items.length < 1 || input.items.length > maxItems
    || typeof input.email !== "string" || input.email.length > 254
    || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim())
    || typeof input.name !== "string" || input.name.trim().length < 2 || input.name.trim().length > 100
    || !["MTN", "AIRTEL"].includes(input.network)) {
    return jsonResponse({ error: "Enter a valid name, email, network, and cart." }, 400, cors);
  }
  const phone = normalizeUgandaPhone(input.phone);
  if (!phone) return jsonResponse({ error: "Enter a valid Ugandan mobile number, such as 0772 123 456." }, 400, cors);

  const quantities = new Map();
  for (const item of input.items) {
    if (!item || typeof item.id !== "string" || !productPrices.has(item.id)
      || !Number.isSafeInteger(item.quantity) || item.quantity < 1 || item.quantity > maxQuantityPerItem) {
      return jsonResponse({ error: "Your cart has an invalid item or quantity. Refresh the shop and try again." }, 400, cors);
    }
    quantities.set(item.id, (quantities.get(item.id) || 0) + item.quantity);
    if (quantities.get(item.id) > maxQuantityPerItem) {
      return jsonResponse({ error: "The maximum quantity for each item is 10." }, 400, cors);
    }
  }

  const orderItems = [...quantities].map(([id, quantity]) => ({ id, quantity }));
  const amount = orderItems.reduce((total, item) => total + productPrices.get(item.id) * item.quantity, 0);
  if (!Number.isSafeInteger(amount) || amount < 1 || amount > maxOrderAmount) {
    return jsonResponse({ error: "This order is above the current UGX demo checkout limit." }, 400, cors);
  }
  if (!Number.isSafeInteger(input.expectedTotal) || input.expectedTotal !== amount) {
    return jsonResponse({ error: "Prices have changed. Refresh your cart and review the updated total." }, 409, cors);
  }

  const txRef = crypto.randomUUID();
  try {
    await env.DB.prepare(
      "INSERT INTO orders (tx_ref, amount, currency, status, network, buyer_name, buyer_email, buyer_phone, items_json) VALUES (?, ?, 'UGX', 'pending', ?, ?, ?, ?, ?)"
    ).bind(txRef, amount, input.network, input.name.trim(), input.email.trim().toLowerCase(), phone, JSON.stringify(orderItems)).run();

    const storefrontUrl = new URL(env.STOREFRONT_URL);
    storefrontUrl.searchParams.set("payment", "return");
    storefrontUrl.searchParams.set("tx_ref", txRef);
    const providerResponse = await fetch("https://api.flutterwave.com/v3/charges?type=mobile_money_uganda", {
      method: "POST",
      headers: { Authorization: `Bearer ${env.FLW_SECRET_KEY}`, "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        amount,
        currency: "UGX",
        email: input.email.trim().toLowerCase(),
        fullname: input.name.trim(),
        phone_number: phone,
        network: input.network,
        tx_ref: txRef,
        redirect_url: storefrontUrl.href
      })
    });
    const providerBody = await providerResponse.json();
    const redirect = providerBody?.meta?.authorization?.redirect;
    if (!providerResponse.ok || providerBody?.status !== "success" || typeof redirect !== "string") {
      await env.DB.prepare(
        "UPDATE orders SET status = 'failed', updated_at = CURRENT_TIMESTAMP WHERE tx_ref = ? AND status = 'pending'"
      ).bind(txRef).run();
      console.error("Flutterwave did not initiate the Uganda mobile money charge.", { status: providerResponse.status, message: providerBody?.message });
      return jsonResponse({ error: "Your payment could not be started. Check your number and try again." }, 502, cors);
    }
    let safeRedirect;
    try {
      safeRedirect = new URL(redirect);
    } catch {
      safeRedirect = null;
    }
    if (!safeRedirect || safeRedirect.protocol !== "https:") {
      await env.DB.prepare(
        "UPDATE orders SET status = 'failed', updated_at = CURRENT_TIMESTAMP WHERE tx_ref = ? AND status = 'pending'"
      ).bind(txRef).run();
      console.error("Flutterwave returned a non-HTTPS payment redirect.", { txRef });
      return jsonResponse({ error: "A secure payment redirect could not be created." }, 502, cors);
    }
    if (Number.isSafeInteger(Number(providerBody?.data?.id))) {
      await env.DB.prepare(
        "UPDATE orders SET flutterwave_transaction_id = ?, updated_at = CURRENT_TIMESTAMP WHERE tx_ref = ?"
      ).bind(Number(providerBody.data.id), txRef).run();
    }
    return jsonResponse({ tx_ref: txRef, redirect_url: safeRedirect.href, amount, currency: "UGX" }, 200, cors);
  } catch (error) {
    console.error("Could not create the Uganda mobile money checkout.", error);
    return jsonResponse({ error: "Checkout is temporarily unavailable. Please try again." }, 502, cors);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/flutterwave/webhook") {
      if (request.method !== "POST") return jsonResponse({ error: "Method not allowed." }, 405, { Allow: "POST" });
      const signature = request.headers.get("verif-hash");
      if (!constantTimeEqual(signature, env.FLW_WEBHOOK_SECRET_HASH)) {
        return jsonResponse({ error: "Unauthorized webhook." }, 401);
      }
      let event;
      try {
        event = await request.json();
      } catch {
        return jsonResponse({ error: "Invalid webhook payload." }, 400);
      }
      if (event?.event !== "charge.completed" || !event?.data?.tx_ref || !event?.data?.id) {
        return jsonResponse({ received: true }, 200);
      }
      try {
        const result = await updateOrderFromProvider(event.data.id, event.data.tx_ref, env);
        if (result.error === "not_found") return jsonResponse({ error: "Order not found." }, 404);
        if (result.error) return jsonResponse({ error: "Invalid transaction reference." }, 400);
        return jsonResponse({ received: true, status: result.status }, 200);
      } catch (error) {
        console.error("Could not verify the Flutterwave webhook transaction.", error);
        return jsonResponse({ error: "Payment verification failed; Flutterwave may retry this webhook." }, 502);
      }
    }

    if (!url.pathname.startsWith("/api/")) {
      return env.ASSETS.fetch(request);
    }

    const cors = corsHeaders(request, env);
    if (!cors) return jsonResponse({ error: "Origin not allowed." }, 403);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (url.pathname === "/api/checkout" && request.method === "POST") {
      return handleCheckout(request, env, cors);
    }
    const paymentMatch = url.pathname.match(/^\/api\/payments\/([a-f0-9-]{36})$/);
    if (paymentMatch && request.method === "GET") {
      if (!env.DB || !env.FLW_SECRET_KEY || !env.FLW_WEBHOOK_SECRET_HASH) {
        return jsonResponse({ error: "Payment status is not configured yet." }, 503, cors);
      }
      try {
        const order = await env.DB.prepare(
          "SELECT tx_ref, amount, status, flutterwave_transaction_id FROM orders WHERE tx_ref = ?"
        ).bind(paymentMatch[1]).first();
        if (!order) return jsonResponse({ error: "Payment reference not found." }, 404, cors);
        if (order.status === "pending" && order.flutterwave_transaction_id) {
          const result = await updateOrderFromProvider(order.flutterwave_transaction_id, order.tx_ref, env);
          return jsonResponse({ status: result.status, amount: order.amount, currency: "UGX" }, 200, cors);
        }
        return jsonResponse({ status: order.status, amount: order.amount, currency: "UGX" }, 200, cors);
      } catch (error) {
        console.error("Could not read the mobile money payment status.", error);
        return jsonResponse({ error: "Payment status is temporarily unavailable." }, 502, cors);
      }
    }
    return jsonResponse({ error: "API route not found." }, 404, cors);
  }
};
