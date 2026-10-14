const defaultProducts = [
  { id: "phone-a", name: "Nova X Pro 256GB — Midnight", category: "Phones & Tablets", brand: "Nova", price: 1850000, oldPrice: 2280000, rating: 4.8, reviews: 124, badge: "BESTSELLER", image: "", featured: 1 },
  { id: "headphones-a", name: "Studio Wireless Headphones", category: "Electronics", brand: "Soundcore", price: 255000, oldPrice: 342000, rating: 4.7, reviews: 86, badge: "−25%", image: "", featured: 2 },
  { id: "sneakers-a", name: "Everyday Runner Sneakers", category: "Fashion", brand: "Stride", price: 130000, oldPrice: 177000, rating: 4.6, reviews: 53, badge: "−26%", image: "", featured: 3 },
  { id: "chair-a", name: "Oak & Weave Accent Chair", category: "Home & Living", brand: "Habitat", price: 527000, oldPrice: 655000, rating: 4.8, reviews: 31, badge: "−20%", image: "", featured: 4 },
  { id: "skincare-a", name: "Daily Glow Skincare Set", category: "Beauty", brand: "Glow Lab", price: 94000, oldPrice: 118000, rating: 4.5, reviews: 72, badge: "POPULAR", image: "", featured: 5 },
  { id: "coffee-a", name: "Fresh Roast Coffee Beans 1kg", category: "Supermarket", brand: "Kahawa Co.", price: 42000, oldPrice: 50000, rating: 4.9, reviews: 204, badge: "LOCAL PICK", image: "", featured: 6 },
  { id: "watch-a", name: "Active Smartwatch Series 5", category: "Electronics", brand: "Tempo", price: 342000, oldPrice: 456000, rating: 4.4, reviews: 48, badge: "−25%", image: "", featured: 7 },
  { id: "lamp-a", name: "Soft Glow Ceramic Table Lamp", category: "Home & Living", brand: "Habitat", price: 168000, oldPrice: 211000, rating: 4.7, reviews: 39, badge: "−20%", image: "", featured: 8 },
  { id: "tablet-a", name: "Tab Air 10.9” 128GB — Silver", category: "Phones & Tablets", brand: "Nova", price: 1112000, oldPrice: 1282000, rating: 4.6, reviews: 63, badge: "−13%", image: "", featured: 9 },
  { id: "bottle-a", name: "Insulated Everyday Water Bottle", category: "Supermarket", brand: "Daywell", price: 28000, oldPrice: 37000, rating: 4.3, reviews: 91, badge: "UNDER 30K", image: "", featured: 10 },
  { id: "dress-a", name: "Weekend Linen Blend Dress", category: "Fashion", brand: "Moyo", price: 99000, oldPrice: 142000, rating: 4.5, reviews: 28, badge: "−30%", image: "", featured: 11 },
  { id: "serum-a", name: "Vitamin C Brightening Serum", category: "Beauty", brand: "Glow Lab", price: 54000, oldPrice: 68000, rating: 4.6, reviews: 57, badge: "TOP RATED", image: "", featured: 12 },
  { id: "speaker-a", name: "Boom Portable Bluetooth Speaker", category: "Electronics", brand: "JBL", price: 189000, oldPrice: 249000, rating: 4.8, reviews: 97, badge: "BESTSELLER", image: "", featured: 13 },
  { id: "speaker-b", name: "Pocket Mini Waterproof Speaker", category: "Electronics", brand: "JBL", price: 89000, oldPrice: 125000, rating: 4.6, reviews: 68, badge: "−29%", image: "", featured: 14 },
  { id: "soundbar-a", name: "Cinema Bookshelf Speaker", category: "Electronics", brand: "Audio", price: 399000, oldPrice: 499000, rating: 4.7, reviews: 42, badge: "−20%", image: "", featured: 15 },
  { id: "tv-a", name: "4K Smart TV 50-inch", category: "Electronics", brand: "Vision", price: 1290000, oldPrice: 1590000, rating: 4.6, reviews: 55, badge: "−19%", image: "", featured: 16 },
  { id: "laptop-a", name: "Everyday Laptop 15-inch, 16GB RAM", category: "Electronics", brand: "Lenovo", price: 2450000, oldPrice: 2890000, rating: 4.7, reviews: 36, badge: "−15%", image: "", featured: 17 },
  { id: "camera-a", name: "Pocket Digital Camera with Zoom", category: "Electronics", brand: "Canon", price: 650000, oldPrice: 790000, rating: 4.5, reviews: 24, badge: "−18%", image: "", featured: 18 },
  { id: "iphone-16-a", name: "iPhone 16 Pro 128GB", category: "Phones & Tablets", brand: "Apple", price: 3250000, oldPrice: 3690000, rating: 4.8, reviews: 112, badge: "POPULAR", image: "assets/products/iphone-16-pro.jpg", photoCredit: "Kyu3a", photoSource: "https://commons.wikimedia.org/wiki/File:Back_of_iPhone_16_Pro_-_1.jpg", photoLicense: "CC BY-SA 4.0", photoLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", featured: 19 },
  { id: "galaxy-s25-a", name: "Galaxy S25 Ultra 256GB", category: "Phones & Tablets", brand: "Samsung", price: 3890000, oldPrice: 4290000, rating: 4.8, reviews: 93, badge: "NEW ARRIVAL", image: "assets/products/galaxy-s25-ultra.jpg", photoCredit: "Alvis Jean", photoSource: "https://commons.wikimedia.org/wiki/File:Samsung_Galaxy_S25_Ultra_Titanium_Silverblue.jpg", photoLicense: "CC BY-SA 4.0", photoLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", featured: 20 },
  { id: "galaxy-a56-a", name: "Galaxy A56 5G 256GB", category: "Phones & Tablets", brand: "Samsung", price: 1490000, oldPrice: 1690000, rating: 4.7, reviews: 81, badge: "BESTSELLER", image: "", featured: 21 },
  { id: "redmi-note-14-a", name: "Redmi Note 14 Pro 5G 256GB", category: "Phones & Tablets", brand: "Xiaomi", price: 1190000, oldPrice: 1390000, rating: 4.6, reviews: 76, badge: "GREAT VALUE", image: "", featured: 22 },
  { id: "pixel-9a-a", name: "Pixel 9a 128GB", category: "Phones & Tablets", brand: "Google", price: 2190000, oldPrice: 2490000, rating: 4.7, reviews: 48, badge: "POPULAR", image: "", featured: 23 },
  { id: "ps5-slim-a", name: "PlayStation 5 Slim Digital Edition", category: "Electronics", brand: "Sony", price: 2190000, oldPrice: 2490000, rating: 4.9, reviews: 67, badge: "GAMER PICK", image: "", featured: 24 },
  { id: "airpods-pro-a", name: "AirPods Pro (2nd generation) with USB-C", category: "Electronics", brand: "Apple", price: 890000, oldPrice: 1050000, rating: 4.8, reviews: 84, badge: "TOP RATED", image: "", featured: 25 },
  { id: "anker-powerbank-a", name: "Mi Power Bank 20K USB-C", category: "Electronics", brand: "Xiaomi", price: 245000, oldPrice: 299000, rating: 4.7, reviews: 59, badge: "TRAVEL PICK", image: "", featured: 26 },
  ...globalThis.SOKO_CATALOG.buildExpansion()
];

const defaultProductIds = new Set(defaultProducts.map((product) => product.id));
const categories = ["Phones & Tablets", "Electronics", "Fashion", "Home & Living", "Beauty", "Supermarket"];
const maximumPrice = 5000000;
const freeDeliveryThreshold = 150000;
const money = new Intl.NumberFormat("en-UG", { maximumFractionDigits: 0 });
const storageKey = "soko-market-cart";
const catalogStorageKey = "soko-market-catalog";
const paymentsApiBase = (window.SOKO_PAYMENTS_API_URL
  || (location.hostname.endsWith(".workers.dev") ? location.origin : "")).replace(/\/+$/, "");
let products = loadProducts();
const state = { query: "", category: "All", maxPrice: maximumPrice, topRated: false, sort: "featured", cart: loadCart(), saved: new Set() };
const productGrid = document.querySelector("#product-grid");
const categoryFilters = document.querySelector("#category-filters");
const filterPanel = document.querySelector(".filters");
const overlay = document.querySelector("#overlay");
const cartDrawer = document.querySelector("#cart-drawer");
const authModal = document.querySelector("#auth-modal");
const adminModal = document.querySelector("#admin-modal");
const checkoutModal = document.querySelector("#checkout-modal");
let toastTimer;
let currentUser = null;
let activePaymentReference = "";
let paymentPollCount = 0;
let paymentPollTimer;
const productPageSize = 36;
let visibleProductLimit = productPageSize;

function formatPrice(value) {
  return `UGX ${money.format(value)}`;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function loadProducts() {
  try {
    const saved = JSON.parse(localStorage.getItem(catalogStorageKey) || "null");
    if (saved === null) return [...defaultProducts];
    if (!Array.isArray(saved)) throw new TypeError("Saved catalog must be a list.");
    const validIds = new Set();
    for (const product of saved) {
      if (!product || typeof product.id !== "string" || typeof product.name !== "string"
        || !categories.includes(product.category) || typeof product.brand !== "string"
        || !Number.isFinite(product.price) || !Number.isFinite(product.oldPrice)
        || !Number.isFinite(product.rating) || !Number.isFinite(product.reviews)
        || typeof product.image !== "string" || !Number.isFinite(product.featured)
        || validIds.has(product.id)) {
        throw new TypeError("Saved catalog contains an invalid or duplicate product.");
      }
      validIds.add(product.id);
    }
    return [...defaultProducts, ...saved.filter((product) => !defaultProductIds.has(product.id))];
  } catch (error) {
    console.error("Could not load the saved product catalog.", error);
    showToast("Saved products could not be loaded. The default catalog is shown.");
    return [...defaultProducts];
  }
}

function saveProducts() {
  try {
    localStorage.setItem(catalogStorageKey, JSON.stringify(products));
    return true;
  } catch (error) {
    console.error("Could not save the product catalog.", error);
    showToast("Changes couldn't be saved on this device. Check available browser storage.");
    return false;
  }
}

function loadCart() {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey) || "[]");
    if (!Array.isArray(value)) return [];
    return value.filter((item) => item && products.some((product) => product.id === item.id) && Number.isInteger(item.quantity) && item.quantity > 0)
      .map(({ id, quantity }) => ({ id, quantity }));
  } catch (error) {
    console.error("Could not read the saved shopping cart.", error);
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state.cart));
  } catch (error) {
    console.error("Could not save the shopping cart.", error);
    showToast("Your cart couldn't be saved on this device.");
  }
}

function renderCategoryFilters() {
  categoryFilters.innerHTML = categories.map((category) => {
    const total = products.filter((product) => product.category === category).length;
    return `<label class="filter-option"><input type="checkbox" value="${category}" ${state.category === category ? "checked" : ""}><span>${category}</span><span class="filter-total">${total}</span></label>`;
  }).join("");
}

function filteredProducts() {
  const query = state.query.trim().toLocaleLowerCase();
  const visible = products.filter((product) => {
    const matchesQuery = !query || `${product.name} ${product.category} ${product.brand}`.toLocaleLowerCase().includes(query);
    return matchesQuery
      && (state.category === "All" || product.category === state.category)
      && product.price <= state.maxPrice
      && (!state.topRated || product.rating >= 4.5);
  });
  const comparators = {
    featured: (a, b) => a.featured - b.featured,
    "price-asc": (a, b) => a.price - b.price,
    "price-desc": (a, b) => b.price - a.price,
    rating: (a, b) => b.rating - a.rating
  };
  return visible.sort(comparators[state.sort]);
}

function renderProducts() {
  const visible = filteredProducts();
  const displayed = visible.slice(0, visibleProductLimit);
  productGrid.innerHTML = displayed.map((product) => `
    <article class="product-card">
      <div class="product-image-wrap">
        ${product.image
    ? `<img class="product-image" src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}" loading="lazy">`
    : `<div class="product-photo-placeholder" role="img" aria-label="Product photo unavailable"><span aria-hidden="true">▧</span><strong>Photo not provided</strong></div>`}
        <span class="product-badge">${product.badge}</span>
        <button class="wishlist-button ${state.saved.has(product.id) ? "is-saved" : ""}" type="button" data-save="${product.id}" aria-label="${state.saved.has(product.id) ? "Remove from" : "Add to"} wishlist">♡</button>
      </div>
      <div class="product-info">
        <span class="product-category">${escapeHTML(product.category)} · ${escapeHTML(product.brand)}</span>
        <h3 class="product-name">${escapeHTML(product.name)}</h3>
        ${product.photoCredit && product.photoSource && product.photoLicense && product.photoLicenseUrl
    ? `<div class="photo-credit">Photo: <a href="${escapeHTML(product.photoSource)}" target="_blank" rel="noopener noreferrer">${escapeHTML(product.photoCredit)} / Wikimedia Commons</a> · <a href="${escapeHTML(product.photoLicenseUrl)}" target="_blank" rel="noopener noreferrer">${escapeHTML(product.photoLicense)}</a></div>`
    : ""}
        <div class="product-rating"><span>★★★★★</span> ${product.rating} (${product.reviews})</div>
        <div class="price-row"><strong class="product-price">${formatPrice(product.price)}</strong><span class="old-price">${formatPrice(product.oldPrice)}</span><span class="discount">${Math.round((1 - product.price / product.oldPrice) * 100)}% off</span></div>
        <button class="add-button" type="button" data-add="${product.id}"><span aria-hidden="true">＋</span> Add to cart</button>
      </div>
    </article>`).join("");
  document.querySelector("#result-count").textContent = visible.length > displayed.length
    ? `Showing ${displayed.length} of ${visible.length} finds`
    : `${visible.length} ${visible.length === 1 ? "find" : "finds"} to love`;
  const loadMoreButton = document.querySelector("#load-more-products");
  loadMoreButton.hidden = displayed.length >= visible.length;
  loadMoreButton.textContent = `Load ${Math.min(productPageSize, visible.length - displayed.length)} more products`;
  document.querySelector("#empty-state").hidden = visible.length > 0;
  productGrid.hidden = visible.length === 0;
  updateFilterCount();
}

function updateFilterCount() {
  const count = Number(state.category !== "All") + Number(state.maxPrice < maximumPrice) + Number(state.topRated) + Number(Boolean(state.query));
  document.querySelector("#active-filter-count").textContent = count ? `(${count})` : "";
}

function setCategory(category) {
  state.category = category;
  visibleProductLimit = productPageSize;
  renderCategoryFilters();
  renderProducts();
  document.querySelectorAll(".category-card").forEach((card) => card.classList.toggle("selected", card.dataset.category === category));
  document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" });
}

function renderCart() {
  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + products.find((product) => product.id === item.id).price * item.quantity, 0);
  document.querySelector("#cart-count").textContent = count;
  document.querySelector("#drawer-count").textContent = `(${count})`;
  document.querySelector("#cart-empty").hidden = count > 0;
  document.querySelector("#cart-summary").hidden = count === 0;
  document.querySelector("#cart-items").innerHTML = state.cart.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
    return `<article class="cart-line">
      <img src="${escapeHTML(product.image)}" alt="">
      <div class="cart-line-info"><strong>${escapeHTML(product.name)}</strong><span>${formatPrice(product.price)}</span>
        <div class="quantity-control"><button type="button" data-quantity="${product.id}" data-change="-1" aria-label="Decrease quantity">−</button><span>${item.quantity}</span><button type="button" data-quantity="${product.id}" data-change="1" aria-label="Increase quantity" ${item.quantity >= 10 ? "disabled" : ""}>＋</button></div>
      </div>
      <div class="cart-line-total"><span>${formatPrice(product.price * item.quantity)}</span><button class="remove-item" type="button" data-remove="${product.id}">Remove</button></div>
    </article>`;
  }).join("");
  document.querySelector("#cart-subtotal").textContent = formatPrice(subtotal);
  const remaining = freeDeliveryThreshold - subtotal;
  document.querySelector("#shipping-note").textContent = remaining > 0 ? `Add ${formatPrice(remaining)} more for free delivery.` : "You've unlocked free delivery!";
}

function addToCart(id) {
  const item = state.cart.find((entry) => entry.id === id);
  if (item?.quantity >= 10) {
    showToast("The maximum quantity for each item is 10.");
    return;
  }
  if (item) item.quantity += 1;
  else state.cart.push({ id, quantity: 1 });
  saveCart();
  renderCart();
  showToast(`${products.find((product) => product.id === id).name} added to your cart.`);
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 2800);
}

function openDialog(dialog) {
  overlay.hidden = false;
  dialog.hidden = false;
  document.body.style.overflow = "hidden";
  const focusable = dialog.querySelector("button, input");
  if (focusable) focusable.focus();
}

function closeDialogs() {
  overlay.hidden = true;
  cartDrawer.hidden = true;
  authModal.hidden = true;
  adminModal.hidden = true;
  checkoutModal.hidden = true;
  filterPanel.classList.remove("mobile-open");
  document.body.style.overflow = "";
  clearTimeout(paymentPollTimer);
}

function checkoutTotal() {
  return state.cart.reduce((total, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}

function openCheckout() {
  if (!state.cart.length) return;
  cartDrawer.hidden = true;
  const form = document.querySelector("#mobile-money-form");
  form.hidden = false;
  document.querySelector("#payment-status").hidden = true;
  form.elements.name.value = currentUser?.name ?? "";
  form.elements.email.value = currentUser?.email ?? "";
  document.querySelector("#payment-total").textContent = formatPrice(checkoutTotal());
  document.querySelector("#checkout-description").textContent = paymentsApiBase
    ? "Choose your network. We'll send you to Flutterwave to authorize the payment."
    : "Secure mobile money checkout becomes available once the payment backend is deployed.";
  const submitButton = document.querySelector("#mobile-money-submit");
  submitButton.disabled = !paymentsApiBase;
  submitButton.innerHTML = 'Continue to payment <span>→</span>';
  openDialog(checkoutModal);
}

function showPaymentStatus(title, message, status) {
  document.querySelector("#mobile-money-form").hidden = true;
  document.querySelector("#payment-status").hidden = false;
  document.querySelector("#payment-status-title").textContent = title;
  document.querySelector("#payment-status-message").textContent = message;
  document.querySelector("#payment-status-icon").textContent = status === "successful" ? "✓" : status === "failed" ? "×" : "◌";
  document.querySelector("#payment-status-icon").classList.toggle("is-success", status === "successful");
  document.querySelector("#payment-status-icon").classList.toggle("is-failed", status === "failed");
  document.querySelector("#check-payment-again").hidden = status !== "pending" && status !== "unknown";
  document.querySelector("#payment-done").hidden = status !== "successful" && status !== "failed";
}

async function checkPaymentStatus(txRef) {
  if (!paymentsApiBase) {
    showPaymentStatus("Payment backend not connected", "Checkout is unavailable until the secure payment backend has been deployed and configured.", "failed");
    return;
  }
  showPaymentStatus("Checking your payment", "Waiting for the mobile money network to confirm your payment. This can take a moment.", "pending");
  try {
    const response = await fetch(`${paymentsApiBase}/api/payments/${encodeURIComponent(txRef)}`, {
      headers: { Accept: "application/json" },
      cache: "no-store"
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "We couldn't check the payment yet.");
    if (result.status === "successful") {
      state.cart = [];
      saveCart();
      renderCart();
      showPaymentStatus("Payment confirmed", "Your UGX mobile money payment was verified. Thank you for shopping with Soko.", "successful");
      return;
    }
    if (result.status === "failed") {
      showPaymentStatus("Payment not completed", "The mobile money provider did not confirm the payment. Your cart is still here if you want to try again.", "failed");
      return;
    }
    showPaymentStatus("Payment still processing", "Approve the payment on your phone. If you've already approved it, wait a moment and check again.", "pending");
    paymentPollCount += 1;
    if (paymentPollCount < 12) paymentPollTimer = setTimeout(() => checkPaymentStatus(txRef), 5000);
  } catch (error) {
    console.error("Could not check the mobile money payment status.", error);
    showPaymentStatus("Unable to confirm yet", error.message || "Check your connection and try again.", "unknown");
  }
}

function resetAdminForm() {
  document.querySelector("#admin-product-form").reset();
  document.querySelector("#admin-product-id").value = "";
  document.querySelector("#admin-form-title").textContent = "Add a product";
  document.querySelector("#admin-save-button").innerHTML = 'Add product <span>＋</span>';
  document.querySelector("#admin-cancel-edit").hidden = true;
}

function renderAdmin() {
  document.querySelector("#admin-product-count").textContent = products.length;
  document.querySelector("#admin-electronics-count").textContent = products.filter((product) => product.category === "Electronics").length;
  document.querySelector("#admin-list-count").textContent = `${products.length} items`;
  document.querySelector("#admin-product-list").innerHTML = products
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((product) => `<article class="admin-product-row">
      ${product.image
    ? `<img src="${escapeHTML(product.image)}" alt="">`
    : `<div class="admin-photo-placeholder" aria-label="Product photo unavailable">No photo</div>`}
      <div class="admin-product-details"><strong>${escapeHTML(product.name)}</strong><span>${escapeHTML(product.category)} · ${escapeHTML(product.brand)}</span><span>${formatPrice(product.price)}</span></div>
      <div class="admin-row-actions"><button type="button" data-admin-edit="${escapeHTML(product.id)}">Edit</button><button type="button" data-admin-delete="${escapeHTML(product.id)}" aria-label="Delete ${escapeHTML(product.name)}">Delete</button></div>
    </article>`).join("");
}

function clearFilters() {
  visibleProductLimit = productPageSize;
  state.query = "";
  state.category = "All";
  state.maxPrice = maximumPrice;
  state.topRated = false;
  document.querySelector("#search-input").value = "";
  document.querySelector("#price-filter").value = state.maxPrice;
  document.querySelector("#max-price-label").textContent = money.format(state.maxPrice);
  document.querySelector("#rating-filter").checked = false;
  document.querySelector("#sort-select").value = "featured";
  state.sort = "featured";
  renderCategoryFilters();
  renderProducts();
  document.querySelectorAll(".category-card").forEach((card) => card.classList.remove("selected"));
}

document.querySelector("#search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  visibleProductLimit = productPageSize;
  state.query = document.querySelector("#search-input").value;
  renderProducts();
  document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#search-input").addEventListener("input", (event) => {
  visibleProductLimit = productPageSize;
  state.query = event.target.value;
  renderProducts();
});
document.querySelector("#sort-select").addEventListener("change", (event) => {
  visibleProductLimit = productPageSize;
  state.sort = event.target.value;
  renderProducts();
});
categoryFilters.addEventListener("change", (event) => {
  if (!event.target.matches("input[type=checkbox]")) return;
  visibleProductLimit = productPageSize;
  state.category = event.target.checked ? event.target.value : "All";
  renderCategoryFilters();
  renderProducts();
});
document.querySelector("#price-filter").addEventListener("input", (event) => {
  visibleProductLimit = productPageSize;
  state.maxPrice = Number(event.target.value);
  document.querySelector("#max-price-label").textContent = money.format(state.maxPrice);
  renderProducts();
});
document.querySelector("#rating-filter").addEventListener("change", (event) => {
  visibleProductLimit = productPageSize;
  state.topRated = event.target.checked;
  renderProducts();
});
document.querySelector("#clear-filters").addEventListener("click", clearFilters);
document.querySelector("#empty-clear").addEventListener("click", clearFilters);
document.querySelector("#category-cards").addEventListener("click", (event) => {
  const card = event.target.closest("[data-category]");
  if (card) setCategory(card.dataset.category);
});
document.querySelectorAll("[data-nav-category]").forEach((link) => link.addEventListener("click", () => {
  visibleProductLimit = productPageSize;
  state.category = link.dataset.navCategory;
  renderCategoryFilters();
  renderProducts();
}));
document.querySelector("#load-more-products").addEventListener("click", () => {
  visibleProductLimit += productPageSize;
  renderProducts();
});
productGrid.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  if (addButton) addToCart(addButton.dataset.add);
  const saveButton = event.target.closest("[data-save]");
  if (saveButton) {
    const { save: id } = saveButton.dataset;
    if (state.saved.has(id)) state.saved.delete(id);
    else state.saved.add(id);
    renderProducts();
    showToast(state.saved.has(id) ? "Saved to your wishlist." : "Removed from your wishlist.");
  }
});
document.querySelector("#cart-button").addEventListener("click", () => {
  renderCart();
  openDialog(cartDrawer);
});
document.querySelector("#close-cart").addEventListener("click", closeDialogs);
document.querySelector("#continue-shopping").addEventListener("click", closeDialogs);
document.querySelector("#cart-items").addEventListener("click", (event) => {
  const quantityButton = event.target.closest("[data-quantity]");
  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) state.cart = state.cart.filter((item) => item.id !== removeButton.dataset.remove);
  if (quantityButton) {
    const item = state.cart.find((entry) => entry.id === quantityButton.dataset.quantity);
    if (Number(quantityButton.dataset.change) > 0 && item.quantity >= 10) {
      showToast("The maximum quantity for each item is 10.");
      return;
    }
    item.quantity += Number(quantityButton.dataset.change);
    if (item.quantity <= 0) state.cart = state.cart.filter((entry) => entry !== item);
  }
  saveCart();
  renderCart();
});
document.querySelector("#checkout-button").addEventListener("click", openCheckout);
document.querySelector("#close-checkout").addEventListener("click", closeDialogs);
document.querySelector("#payment-done").addEventListener("click", closeDialogs);
document.querySelector("#check-payment-again").addEventListener("click", () => {
  paymentPollCount = 0;
  checkPaymentStatus(activePaymentReference);
});
document.querySelector("#mobile-money-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  if (!paymentsApiBase) {
    showToast("The secure payment backend hasn't been deployed and connected yet.");
    return;
  }
  const submitButton = document.querySelector("#mobile-money-submit");
  submitButton.disabled = true;
  submitButton.textContent = "Starting secure checkout…";
  try {
    const response = await fetch(`${paymentsApiBase}/api/checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        items: state.cart.map(({ id, quantity }) => ({ id, quantity })),
        expectedTotal: checkoutTotal(),
        name: form.elements.name.value.trim(),
        email: form.elements.email.value.trim(),
        phone: form.elements.phone.value.trim().replace(/[\s-]/g, ""),
        network: form.elements.network.value
      })
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "We couldn't start your payment. Please try again.");
    const redirect = new URL(result.redirect_url);
    if (redirect.protocol !== "https:") throw new Error("The payment provider returned an insecure checkout link.");
    activePaymentReference = result.tx_ref;
    window.location.assign(redirect.href);
  } catch (error) {
    console.error("Could not start the Uganda mobile money payment.", error);
    showToast(error.message || "Payment is temporarily unavailable.");
    submitButton.disabled = false;
    submitButton.innerHTML = 'Continue to payment <span>→</span>';
  }
});
document.querySelector("#account-button").addEventListener("click", () => openDialog(authModal));
document.querySelector("#footer-account").addEventListener("click", () => openDialog(authModal));
document.querySelector("#admin-button").addEventListener("click", () => {
  const categorySelect = document.querySelector("#admin-product-category");
  categorySelect.innerHTML = categories.map((category) => `<option value="${escapeHTML(category)}">${escapeHTML(category)}</option>`).join("");
  renderAdmin();
  resetAdminForm();
  openDialog(adminModal);
});
document.querySelector("#close-admin").addEventListener("click", closeDialogs);
document.querySelector("#admin-cancel-edit").addEventListener("click", resetAdminForm);
document.querySelector("#admin-product-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const imageValue = String(data.get("image")).trim();
  let image = "";
  if (imageValue) {
    const imageUrl = new URL(imageValue);
    if (imageUrl.protocol !== "https:") {
      showToast("Use a secure HTTPS URL for product images.");
      return;
    }
    image = imageUrl.href;
  }
  const price = Number(data.get("price"));
  const oldPrice = Number(data.get("oldPrice"));
  if (oldPrice < price) {
    showToast("The previous price must be at least the current price.");
    return;
  }
  const existingId = document.querySelector("#admin-product-id").value;
  const existing = products.find((product) => product.id === existingId);
  const product = {
    id: existingId || `custom-${crypto.randomUUID()}`,
    name: String(data.get("name")).trim(),
    category: String(data.get("category")),
    brand: String(data.get("brand")).trim(),
    price,
    oldPrice,
    rating: existing?.rating ?? 4.5,
    reviews: existing?.reviews ?? 0,
    badge: existing?.badge ?? "NEW",
    image,
    featured: existing?.featured ?? Math.max(...products.map((entry) => entry.featured), 0) + 1
  };
  const previousProducts = products;
  products = existing
    ? products.map((entry) => entry.id === existingId ? product : entry)
    : [...products, product];
  if (!saveProducts()) {
    products = previousProducts;
    return;
  }
  resetAdminForm();
  renderProducts();
  renderCategoryFilters();
  renderAdmin();
  showToast(existing ? "Product updated." : "Product added to the catalog.");
});
document.querySelector("#admin-product-list").addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-admin-edit]");
  const deleteButton = event.target.closest("[data-admin-delete]");
  if (editButton) {
    const product = products.find((entry) => entry.id === editButton.dataset.adminEdit);
    if (!product) return;
    document.querySelector("#admin-product-id").value = product.id;
    document.querySelector("#admin-product-name").value = product.name;
    document.querySelector("#admin-product-category").value = product.category;
    document.querySelector("#admin-product-brand").value = product.brand;
    document.querySelector("#admin-product-price").value = product.price;
    document.querySelector("#admin-product-old-price").value = product.oldPrice;
    document.querySelector("#admin-product-image").value = product.image;
    document.querySelector("#admin-form-title").textContent = "Edit product";
    document.querySelector("#admin-save-button").innerHTML = 'Save changes <span>→</span>';
    document.querySelector("#admin-cancel-edit").hidden = false;
    document.querySelector("#admin-product-name").focus();
  }
  if (deleteButton) {
    const product = products.find((entry) => entry.id === deleteButton.dataset.adminDelete);
    if (!product || !window.confirm(`Remove "${product.name}" from this browser's demo catalog?`)) return;
    const previousProducts = products;
    products = products.filter((entry) => entry.id !== product.id);
    if (!saveProducts()) {
      products = previousProducts;
      return;
    }
    state.cart = state.cart.filter((item) => item.id !== product.id);
    saveCart();
    renderProducts();
    renderCategoryFilters();
    renderCart();
    renderAdmin();
    showToast("Product removed from the catalog.");
  }
});
document.querySelector("#close-auth").addEventListener("click", closeDialogs);
document.querySelector("#sign-in-button").addEventListener("click", () => showToast("Sign-in becomes available when a secure account service is connected."));
overlay.addEventListener("click", closeDialogs);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDialogs();
});
document.querySelector("#register-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  currentUser = { name: form.elements.name.value.trim(), email: form.elements.email.value.trim() };
  document.querySelector("#account-label").textContent = currentUser.name.split(/\s+/)[0];
  closeDialogs();
  form.reset();
  showToast(`Welcome to Soko, ${currentUser.name.split(/\s+/)[0]}! This demo account is temporary.`);
});
document.querySelector("#newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  showToast("Thanks for joining us! Newsletter sign-up is a demo.");
});
document.querySelector("#mobile-filter-button").addEventListener("click", () => {
  overlay.hidden = false;
  filterPanel.classList.add("mobile-open");
  document.body.style.overflow = "hidden";
});
document.querySelector("#current-year").textContent = new Date().getFullYear();

renderCategoryFilters();
renderProducts();
renderCart();
const paymentReturn = new URLSearchParams(location.search);
const returnedPaymentReference = paymentReturn.get("tx_ref");
if (paymentReturn.get("payment") === "return" && returnedPaymentReference && /^[a-f0-9-]{36}$/.test(returnedPaymentReference)) {
  history.replaceState(null, "", `${location.pathname}${location.hash}`);
  activePaymentReference = returnedPaymentReference;
  paymentPollCount = 0;
  showPaymentStatus("Checking your payment", "Verifying the payment with the provider. This can take a moment.", "pending");
  openDialog(checkoutModal);
  checkPaymentStatus(returnedPaymentReference);
}
