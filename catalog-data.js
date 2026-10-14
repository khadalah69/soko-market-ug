(() => {
  const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=80`;
  const photos = {
    phone: photo("photo-1592899677977-9c10ca588bbd"),
    phoneAlt: photo("photo-1511707171634-5f897ff02aa9"),
    phoneAlt2: photo("photo-1598327105666-5b89351aff97"),
    tablet: photo("photo-1544244015-0df4b3ffc6b0"),
    headphones: photo("photo-1505740420928-5e560c06d30e"),
    speaker: photo("photo-1608043152269-423dbba4e7e1"),
    earbuds: photo("photo-1606220945770-b5b6c2c55bf1"),
    watch: photo("photo-1523275335684-37898b6baf30"),
    laptop: photo("photo-1496181133206-80ce9b88a853"),
    tv: photo("photo-1593359677879-a4bb92f829d1"),
    camera: photo("photo-1516035069371-29a1b244cc32"),
    console: photo("photo-1606813907291-d86efa9b94db"),
    sneaker: photo("photo-1542291026-7eec264c27ff"),
    dress: photo("photo-1539109136881-3be0616acf4b"),
    shirt: photo("photo-1521572163474-6864f9cf17ab"),
    bag: photo("photo-1553062407-98eeb64c6a62"),
    chair: photo("photo-1503602642458-232111445657"),
    bedroom: photo("photo-1505693416388-ac5ce068fe85"),
    kitchen: photo("photo-1556911220-e15b29be8c8f"),
    lamp: photo("photo-1507473885765-e6ed057f782c"),
    skincare: photo("photo-1608248543803-ba4f8c70ae0b"),
    serum: photo("photo-1620916566398-39f1143ab7be"),
    coffee: photo("photo-1559056199-641a0ac8b55e"),
    bottle: photo("photo-1602143407151-7111542de6e8"),
    powerbank: photo("photo-1609091839311-d5365f9ff1c5")
  };
  const phoneModels = [
    ["Apple", "iPhone 16e", 2650000], ["Apple", "iPhone 16 Plus", 3590000],
    ["Apple", "iPhone 16 Pro", 3790000], ["Apple", "iPhone 16 Pro Max", 4490000],
    ["Samsung", "Galaxy S25", 3690000], ["Samsung", "Galaxy S25+", 4190000],
    ["Samsung", "Galaxy S25 Ultra", 4490000], ["Samsung", "Galaxy A36 5G", 1190000],
    ["Samsung", "Galaxy A56 5G", 1490000], ["Google", "Pixel 9", 2890000],
    ["Google", "Pixel 9 Pro", 4190000], ["Google", "Pixel 9a", 2190000],
    ["Xiaomi", "Redmi Note 14", 890000], ["Xiaomi", "Redmi Note 14 Pro 5G", 1190000],
    ["Xiaomi", "POCO X7 Pro", 1690000], ["Tecno", "Camon 40 Pro", 1250000],
    ["Tecno", "Spark 40 Pro", 780000], ["Infinix", "Note 50 Pro", 990000],
    ["Infinix", "Hot 50 Pro+", 820000], ["OnePlus", "Nord 4", 1890000]
  ];
  const phoneVariants = [
    ["128GB · Black", 0], ["128GB · Blue", 0], ["128GB · Silver", 0],
    ["256GB · Black", 180000], ["256GB · Blue", 180000],
    ["256GB · Silver", 180000], ["512GB · Black", 420000],
    ["512GB · Blue", 420000], ["512GB · Silver", 420000],
    ["256GB · Green", 180000]
  ];
  const electronicsModels = [
    ["Apple", "iPad Air 11-inch", 2390000, "tablet"],
    ["Samsung", "Galaxy Tab S10 FE", 2190000, "tablet"],
    ["Lenovo", "IdeaPad Slim 3 15-inch", 2490000, "laptop"],
    ["HP", "Pavilion 15 Laptop", 3290000, "laptop"],
    ["ASUS", "Vivobook 15", 2890000, "laptop"],
    ["JBL", "Tune 770NC Wireless Headphones", 549000, "headphones"],
    ["Sony", "WH-CH720N Wireless Headphones", 799000, "headphones"],
    ["Anker", "Soundcore Space One Headphones", 649000, "headphones"],
    ["JBL", "Flip 6 Portable Bluetooth Speaker", 649000, "speaker"],
    ["JBL", "Charge 5 Portable Bluetooth Speaker", 899000, "speaker"],
    ["Sony", "ULT Field 1 Bluetooth Speaker", 599000, "speaker"],
    ["Samsung", "Crystal UHD 55-inch Smart TV", 1890000, "tv"],
    ["LG", "UHD AI ThinQ 50-inch Smart TV", 1690000, "tv"],
    ["Hisense", "QLED 55-inch Smart TV", 1990000, "tv"],
    ["Apple", "AirPods 4 Wireless Earbuds", 699000, "earbuds"],
    ["Samsung", "Galaxy Buds3 Pro", 899000, "earbuds"],
    ["Anker", "Soundcore Liberty 4 NC Earbuds", 399000, "earbuds"],
    ["Apple", "Apple Watch SE GPS", 1190000, "watch"],
    ["Samsung", "Galaxy Watch7", 1390000, "watch"],
    ["Canon", "EOS R50 Mirrorless Camera", 3890000, "camera"],
    ["Sony", "Alpha ZV-E10 Mirrorless Camera", 3590000, "camera"],
    ["Sony", "PlayStation 5 Slim Digital Edition", 2190000, "console"],
    ["Nintendo", "Switch OLED Model", 1690000, "console"],
    ["Anker", "PowerCore 20K USB-C Power Bank", 245000, "powerbank"],
    ["Logitech", "MX Master 3S Wireless Mouse", 399000, "headphones"]
  ];
  const genericVariants = ["Black", "White", "Silver", "Blue", "Graphite", "Rose", "Green", "Navy", "Sand", "Red"];
  const otherModels = {
    "Fashion": [
      ["Stride", "Everyday Running Sneakers", 130000, "sneaker"],
      ["Moyo", "Linen Blend Weekend Dress", 99000, "dress"],
      ["Moyo", "Classic Cotton T-Shirt", 45000, "shirt"],
      ["Stride", "Lightweight Walking Shoes", 145000, "sneaker"],
      ["Moyo", "Relaxed Fit Chino Trousers", 89000, "shirt"],
      ["Moyo", "Everyday Canvas Backpack", 79000, "bag"]
    ],
    "Home & Living": [
      ["Habitat", "Oak & Weave Accent Chair", 527000, "chair"],
      ["Habitat", "Soft Glow Ceramic Table Lamp", 168000, "lamp"],
      ["Habitat", "Cotton Duvet Cover Set", 185000, "bedroom"],
      ["Habitat", "Modern Floating Wall Shelf", 119000, "chair"],
      ["Habitat", "Woven Storage Basket Set", 85000, "chair"],
      ["Daywell", "Stainless Steel Cookware Set", 245000, "kitchen"]
    ],
    "Beauty": [
      ["Glow Lab", "Daily Glow Skincare Set", 94000, "skincare"],
      ["Glow Lab", "Vitamin C Brightening Serum", 54000, "serum"],
      ["Glow Lab", "Gentle Hydrating Face Cleanser", 39000, "skincare"],
      ["Glow Lab", "Daily SPF 50 Sunscreen", 48000, "serum"],
      ["Moyo", "Shea Butter Body Lotion", 32000, "skincare"],
      ["Glow Lab", "Overnight Moisture Cream", 57000, "serum"]
    ],
    "Supermarket": [
      ["Kahawa Co.", "Fresh Roast Coffee Beans 1kg", 42000, "coffee"],
      ["Daywell", "Insulated Everyday Water Bottle", 28000, "bottle"],
      ["Kahawa Co.", "Ugandan Arabica Ground Coffee 500g", 26000, "coffee"],
      ["Daywell", "Reusable Food Storage Container Set", 39000, "bottle"],
      ["Kahawa Co.", "Dark Roast Coffee Pods 10-pack", 18000, "coffee"],
      ["Daywell", "Glass Water Bottle with Sleeve", 22000, "bottle"]
    ]
  };

  function buildExpansion() {
    const products = [];
    function addVariants(category, models, variants, count, priceForVariant) {
      for (let modelIndex = 0, categoryCount = 0; categoryCount < count; modelIndex += 1, categoryCount += 1) {
        const model = models[modelIndex % models.length];
        const cycle = Math.floor(modelIndex / models.length);
        const [brand, name, basePrice, imageKey] = model;
        const variantIndex = cycle % variants.length;
        const [variant, adjustment] = variants[variantIndex];
        const id = `generated-${String(products.length + 1).padStart(3, "0")}`;
        const price = Math.min(4990000, priceForVariant ? priceForVariant(model, variant, adjustment) : basePrice + adjustment);
        products.push({
          id,
          name: `${name} — ${variant}`,
          category,
          brand,
          price,
          oldPrice: Math.round(price * 1.12 / 1000) * 1000,
          rating: Number((4.3 + ((products.length * 7) % 8) / 10).toFixed(1)),
          reviews: 18 + (products.length * 17) % 180,
          badge: products.length % 4 === 0 ? "POPULAR" : products.length % 7 === 0 ? "TOP RATED" : "GREAT PICK",
          image: photos[imageKey],
          featured: products.length + 27
        });
      }
    }
    addVariants(
      "Phones & Tablets",
      phoneModels.map(([brand, name, price], index) => [brand, name, price, ["phone", "phoneAlt", "phoneAlt2"][index % 3]]),
      phoneVariants,
      193,
      (model, variant, adjustment) => {
        const [, name, basePrice] = model;
        const storageAdjustment = adjustment;
        const modelDiscount = /iPhone|Galaxy S25|Pixel 9 Pro/.test(name) && variant.startsWith("128GB")
          ? -150000 : 0;
        return Math.max(350000, basePrice + storageAdjustment + modelDiscount);
      }
    );
    addVariants(
      "Electronics",
      electronicsModels,
      genericVariants.map((name, index) => [name, index < 5 ? 0 : 25000]),
      189
    );
    for (const [category, models] of Object.entries(otherModels)) {
      addVariants(
        category,
        models,
        genericVariants.slice(0, 5).map((variant, index) => [`${variant} edition`, index * 3000]),
        23
      );
    }
    return products;
  }

  globalThis.SOKO_CATALOG = { buildExpansion };
})();
