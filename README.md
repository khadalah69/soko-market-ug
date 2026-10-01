# Soko Market

A responsive, dependency-free storefront starter for an e-commerce marketplace, built with HTML, CSS, and vanilla JavaScript.

## Run locally

Open `index.html` in a modern browser. Product imagery and web fonts are loaded from external URLs, so those assets need an internet connection. The storefront itself does not require a build step or package installation.

## Included

- Responsive homepage with category navigation and product highlights.
- Product catalog with live search, category, maximum-price, and rating filters, plus sorting.
- Prices displayed in Ugandan shillings (UGX), with an expanded electronics catalog including Bluetooth speakers, a soundbar, a smart TV, a laptop, and a camera.
- Shopping cart with quantity controls, a subtotal, free-delivery threshold, and browser-local cart persistence.
- Client-side registration form with basic browser validation.
- Wishlist toggles and a newsletter signup demo.
- Browser-local demo admin dashboard for adding, editing, and removing catalog products.
- Flutterwave checkout backend for Ugandan MTN MoMo and Airtel Money, with D1 order records, provider-side transaction verification, and signed-webhook handling.

## Production integration

This is a frontend foundation, not a production commerce backend. Registration currently validates in the browser and creates a temporary, in-memory demo account; it does not transmit or persist the submitted password. Replace that flow with a server-backed identity provider before accepting accounts. Likewise, connect product inventory, orders, delivery, and a compliant payment provider before accepting purchases. Cart contents are stored in this browser's local storage and are not synchronized across devices.

Product prices and the free-delivery threshold are illustrative UGX demo values, not live merchant prices or exchange-rate conversions.

The admin dashboard is intentionally a local demo, not an authenticated management system: anyone who can open the storefront can edit its catalog in that browser. Catalog edits use local storage and do not publish to other shoppers. Never use this demo panel as a live admin tool without replacing it with server-side authentication, authorization, and a persistent product API.

## Free static hosting

The storefront can be hosted as a static site on a free provider subdomain, for example GitHub Pages (`*.github.io`), Cloudflare Pages (`*.pages.dev`), or Netlify (`*.netlify.app`). Publishing requires a provider account and a deployment destination. Static hosting does not turn the demo registration, admin panel, cart, or checkout into secure shared backend services.

## Uganda mobile money

The payment backend uses Flutterwave's Uganda mobile money collection endpoint for **MTN** and **Airtel**, and a Cloudflare Worker with a D1 order database. The Worker calculates totals from its own server-side UGX product-price table; it never accepts a payment amount or a secret key from the browser. It verifies transaction status, reference, exact amount, and currency with Flutterwave before reporting an order as paid. Flutterwave's webhook is checked against the configured `verif-hash` secret and its transaction is independently verified.

**Payments are not active on GitHub Pages until the Worker, D1 database, Flutterwave merchant account, and webhook have been configured.** Never place Flutterwave secret keys in `app.js`, `payment-config.js`, or any other public file, and never send keys or mobile money PINs in chat.

### Deploy the payment backend

1. Install a current Node.js LTS release and open a terminal in the project folder.
2. Run `npm install`, then `npx wrangler login` and authenticate with your own Cloudflare account.
3. Run `npm run db:create`. Wrangler creates the D1 database and writes its ID to `wrangler.jsonc`.
4. Run `npm run db:init` to create the order table.
5. From the terminal, securely add your Flutterwave **live secret key** and the **webhook secret hash** configured in your Flutterwave dashboard:

   ```text
   npx wrangler secret put FLW_SECRET_KEY
   npx wrangler secret put FLW_WEBHOOK_SECRET_HASH
   ```

   Paste each value only into Wrangler's interactive secret prompt. Do not add them to files or GitHub.
6. Run `npm run deploy`. Wrangler prints the Worker URL.
7. Set `window.SOKO_PAYMENTS_API_URL` in `payment-config.js` to that public Worker URL, for example `https://soko-market-ug.<your-workers-subdomain>.workers.dev`, then publish the updated storefront.
8. In the Flutterwave dashboard, add `https://soko-market-ug.<your-workers-subdomain>.workers.dev/api/flutterwave/webhook` as the webhook URL and configure the matching webhook secret hash. Use Flutterwave test keys and test transactions before switching to live payments.

Use a private terminal and your own accounts for merchant onboarding, deployment, and secrets. Deploying does not itself activate collections until Flutterwave enables and configures your merchant account. Order records contain a buyer's name, email, mobile number, and basket for payment processing; define appropriate access, retention, and privacy practices before production use.
