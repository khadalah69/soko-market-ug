const defaultProducts = [
  { id: "phone-a", name: "Nova X Pro 256GB — Midnight", category: "Phones & Tablets", brand: "Nova", price: 1850000, oldPrice: 2280000, rating: 4.8, reviews: 124, badge: "BESTSELLER", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=700&q=80", featured: 1 },
  { id: "headphones-a", name: "Studio Wireless Headphones", category: "Electronics", brand: "Soundcore", price: 255000, oldPrice: 342000, rating: 4.7, reviews: 86, badge: "−25%", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80", featured: 2 },
  { id: "sneakers-a", name: "Everyday Runner Sneakers", category: "Fashion", brand: "Stride", price: 130000, oldPrice: 177000, rating: 4.6, reviews: 53, badge: "−26%", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80", featured: 3 },
  { id: "chair-a", name: "Oak & Weave Accent Chair", category: "Home & Living", brand: "Habitat", price: 527000, oldPrice: 655000, rating: 4.8, reviews: 31, badge: "−20%", image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=700&q=80", featured: 4 },
  { id: "skincare-a", name: "Daily Glow Skincare Set", category: "Beauty", brand: "Glow Lab", price: 94000, oldPrice: 118000, rating: 4.5, reviews: 72, badge: "POPULAR", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=80", featured: 5 },
  { id: "coffee-a", name: "Fresh Roast Coffee Beans 1kg", category: "Supermarket", brand: "Kahawa Co.", price: 42000, oldPrice: 50000, rating: 4.9, reviews: 204, badge: "LOCAL PICK", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=700&q=80", featured: 6 },
  { id: "watch-a", name: "Active Smartwatch Series 5", category: "Electronics", brand: "Tempo", price: 342000, oldPrice: 456000, rating: 4.4, reviews: 48, badge: "−25%", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80", featured: 7 },
  { id: "lamp-a", name: "Soft Glow Ceramic Table Lamp", category: "Home & Living", brand: "Habitat", price: 168000, oldPrice: 211000, rating: 4.7, reviews: 39, badge: "−20%", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80", featured: 8 },
  { id: "tablet-a", name: "Tab Air 10.9” 128GB — Silver", category: "Phones & Tablets", brand: "Nova", price: 1112000, oldPrice: 1282000, rating: 4.6, reviews: 63, badge: "−13%", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=80", featured: 9 },
  { id: "bottle-a", name: "Insulated Everyday Water Bottle", category: "Supermarket", brand: "Daywell", price: 28000, oldPrice: 37000, rating: 4.3, reviews: 91, badge: "UNDER 30K", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=700&q=80", featured: 10 },
  { id: "dress-a", name: "Weekend Linen Blend Dress", category: "Fashion", brand: "Moyo", price: 99000, oldPrice: 142000, rating: 4.5, reviews: 28, badge: "−30%", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=700&q=80", featured: 11 },
  { id: "serum-a", name: "Vitamin C Brightening Serum", category: "Beauty", brand: "Glow Lab", price: 54000, oldPrice: 68000, rating: 4.6, reviews: 57, badge: "TOP RATED", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=80", featured: 12 },
  { id: "speaker-a", name: "Boom Portable Bluetooth Speaker", category: "Electronics", brand: "Soundcore", price: 189000, oldPrice: 249000, rating: 4.8, reviews: 97, badge: "BESTSELLER", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=80", featured: 13 },
  { id: "speaker-b", name: "Pocket Mini Waterproof Speaker", category: "Electronics", brand: "JBL", price: 89000, oldPrice: 125000, rating: 4.6, reviews: 68, badge: "−29%", image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=700&q=80", featured: 14 },
  { id: "soundbar-a", name: "Cinema Soundbar with Subwoofer", category: "Electronics", brand: "Sony", price: 399000, oldPrice: 499000, rating: 4.7, reviews: 42, badge: "−20%", image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=700&q=80", featured: 15 },
  { id: "tv-a", name: "4K Smart TV 50-inch", category: "Electronics", brand: "Vision", price: 1290000, oldPrice: 1590000, rating: 4.6, reviews: 55, badge: "−19%", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=700&q=80", featured: 16 },
  { id: "laptop-a", name: "Everyday Laptop 15-inch, 16GB RAM", category: "Electronics", brand: "Lenovo", price: 2450000, oldPrice: 2890000, rating: 4.7, reviews: 36, badge: "−15%", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80", featured: 17 },
  { id: "camera-a", name: "Pocket Digital Camera with Zoom", category: "Electronics", brand: "Canon", price: 650000, oldPrice: 790000, rating: 4.5, reviews: 24, badge: "−18%", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80", featured: 18 }
];

const categories = ["Phones & Tablets", "Electronics", "Fashion", "Home & Living", "Beauty", "Supermarket"];
const maximumPrice = 5000000;
const freeDeliveryThreshold = 150000;
const money = new Intl.NumberFormat("en-UG", { maximumFractionDigits: 0 });
const storageKey = "soko-market-cart";
const catalogStorageKey = "soko-market-catalog";
let products = loadProducts();
const state = { query: "", category: "All", maxPrice: maximumPrice, topRated: false, sort: "featured", cart: loadCart(), saved: new Set() };
const productGrid = document.querySelector("#product-grid");
const categoryFilters = document.querySelector("#category-filters");
const filterPanel = document.querySelector(".filters");
const overlay = document.querySelector("#overlay");
const cartDrawer = document.querySelector("#cart-drawer");
const authModal = document.querySelector("#auth-modal");
const adminModal = document.querySelector("#admin-modal");
let toastTimer;
let currentUser = null;

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
    return saved;
  } catch (error) {
    console.error("Could not load the saved product catalog.", error);
    showToast("Saved products could not be loaded. The original catalog is shown.");
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
  productGrid.innerHTML = visible.map((product) => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img class="product-image" src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}" loading="lazy">
        <span class="product-badge">${product.badge}</span>
        <button class="wishlist-button ${state.saved.has(product.id) ? "is-saved" : ""}" type="button" data-save="${product.id}" aria-label="${state.saved.has(product.id) ? "Remove from" : "Add to"} wishlist">♡</button>
      </div>
      <div class="product-info">
        <span class="product-category">${escapeHTML(product.category)} · ${escapeHTML(product.brand)}</span>
        <h3 class="product-name">${escapeHTML(product.name)}</h3>
        <div class="product-rating"><span>★★★★★</span> ${product.rating} (${product.reviews})</div>
        <div class="price-row"><strong class="product-price">${formatPrice(product.price)}</strong><span class="old-price">${formatPrice(product.oldPrice)}</span><span class="discount">${Math.round((1 - product.price / product.oldPrice) * 100)}% off</span></div>
        <button class="add-button" type="button" data-add="${product.id}"><span aria-hidden="true">＋</span> Add to cart</button>
      </div>
    </article>`).join("");
  document.querySelector("#result-count").textContent = `${visible.length} ${visible.length === 1 ? "find" : "finds"} to love`;
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
        <div class="quantity-control"><button type="button" data-quantity="${product.id}" data-change="-1" aria-label="Decrease quantity">−</button><span>${item.quantity}</span><button type="button" data-quantity="${product.id}" data-change="1" aria-label="Increase quantity">＋</button></div>
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
  filterPanel.classList.remove("mobile-open");
  document.body.style.overflow = "";
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
      <img src="${escapeHTML(product.image)}" alt="">
      <div class="admin-product-details"><strong>${escapeHTML(product.name)}</strong><span>${escapeHTML(product.category)} · ${escapeHTML(product.brand)}</span><span>${formatPrice(product.price)}</span></div>
      <div class="admin-row-actions"><button type="button" data-admin-edit="${escapeHTML(product.id)}">Edit</button><button type="button" data-admin-delete="${escapeHTML(product.id)}" aria-label="Delete ${escapeHTML(product.name)}">Delete</button></div>
    </article>`).join("");
}

function clearFilters() {
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
  state.query = document.querySelector("#search-input").value;
  renderProducts();
  document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#search-input").addEventListener("input", (event) => {
  state.query = event.target.value;
  renderProducts();
});
document.querySelector("#sort-select").addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProducts();
});
categoryFilters.addEventListener("change", (event) => {
  if (!event.target.matches("input[type=checkbox]")) return;
  state.category = event.target.checked ? event.target.value : "All";
  renderCategoryFilters();
  renderProducts();
});
document.querySelector("#price-filter").addEventListener("input", (event) => {
  state.maxPrice = Number(event.target.value);
  document.querySelector("#max-price-label").textContent = money.format(state.maxPrice);
  renderProducts();
});
document.querySelector("#rating-filter").addEventListener("change", (event) => {
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
  state.category = link.dataset.navCategory;
  renderCategoryFilters();
  renderProducts();
}));
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
    item.quantity += Number(quantityButton.dataset.change);
    if (item.quantity <= 0) state.cart = state.cart.filter((entry) => entry !== item);
  }
  saveCart();
  renderCart();
});
document.querySelector("#checkout-button").addEventListener("click", () => showToast("Checkout is a demo. Connect a secure payment provider to accept orders."));
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
  const image = new URL(String(data.get("image")));
  if (image.protocol !== "https:") {
    showToast("Use a secure HTTPS URL for product images.");
    return;
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
    image: image.href,
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
