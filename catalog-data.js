(() => {
  const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=80`;
  const photos = {
    phone: photo("photo-1592899677977-9c10ca588bbd"),
    phoneAlt: photo("photo-1709744722656-9b850470293f"),
    iphone: photo("photo-1726587912121-ea21fcc57ff8"),
    samsung: photo("photo-1738830234395-a351829a1c7b"),
    pixel: photo("photo-1724322535079-11b08f7f5c88"),
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
    clothing: photo("photo-1584865288642-42078afe6942"),
    dress: photo("photo-1539109136881-3be0616acf4b"),
    bag: photo("photo-1553062407-98eeb64c6a62"),
    chair: photo("photo-1503602642458-232111445657"),
    bedroom: photo("photo-1505693416388-ac5ce068fe85"),
    shelf: photo("photo-1615884241431-d07c87e30ab2"),
    basket: photo("photo-1645542554266-b275c100103c"),
    cookware: photo("photo-1511224931379-b4e4324ea7fc"),
    containers: photo("photo-1786417340764-b918ff6e8562"),
    mouse: photo("photo-1527864550417-7fd91fc51a46"),
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
    ["Infinix", "Hot 50 Pro+", 820000], ["OnePlus", "Nord 4", 1890000],
    ["Apple", "iPhone 17", 3690000], ["Apple", "iPhone 17 Pro", 4590000],
    ["Apple", "iPhone 17 Pro Max", 4990000], ["Apple", "iPhone 16", 3390000],
    ["Apple", "iPhone 15", 2890000], ["Apple", "iPhone 15 Plus", 3290000],
    ["Apple", "iPhone 15 Pro", 3590000], ["Apple", "iPhone 15 Pro Max", 4190000],
    ["Samsung", "Galaxy S24", 3190000], ["Samsung", "Galaxy S24+", 3690000],
    ["Samsung", "Galaxy S24 Ultra", 3990000], ["Samsung", "Galaxy Z Fold6", 4990000],
    ["Samsung", "Galaxy Z Flip6", 3690000], ["Samsung", "Galaxy A26 5G", 890000],
    ["Samsung", "Galaxy A16 5G", 650000], ["Google", "Pixel 8", 2290000],
    ["Google", "Pixel 8 Pro", 3190000], ["Google", "Pixel 8a", 1890000],
    ["Google", "Pixel 7a", 1490000], ["Xiaomi", "Xiaomi 15", 3290000],
    ["Xiaomi", "Xiaomi 14T", 2190000], ["Xiaomi", "Redmi Note 13", 690000],
    ["Xiaomi", "Redmi Note 13 Pro", 1090000], ["Xiaomi", "POCO X6", 990000],
    ["Xiaomi", "POCO X6 Pro", 1390000], ["Xiaomi", "POCO F7", 1890000],
    ["Tecno", "Camon 30", 990000], ["Tecno", "Camon 30 Pro", 1390000],
    ["Tecno", "Spark 30 Pro", 690000], ["Tecno", "Phantom V Fold2", 3690000],
    ["Infinix", "Note 40 Pro", 890000], ["Infinix", "Note 50", 790000],
    ["Infinix", "Zero 40", 1190000], ["Infinix", "Hot 50", 590000],
    ["OnePlus", "OnePlus 13", 3890000], ["OnePlus", "OnePlus 13R", 2890000],
    ["OnePlus", "OnePlus 12", 3290000], ["OnePlus", "Nord 3", 1690000],
    ["OnePlus", "Nord CE4", 1490000], ["Nothing", "Phone (2a)", 1590000],
    ["Nothing", "Phone (3a)", 1990000], ["Motorola", "Edge 50 Fusion", 1690000],
    ["Motorola", "Moto G85", 1090000], ["OPPO", "Reno12 5G", 1890000],
    ["vivo", "V40 5G", 2190000]
  ];
  const phoneVariants = [
    ["128GB storage", 0], ["256GB storage", 180000], ["512GB storage", 420000]
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
    ["Xiaomi", "Mi Power Bank 20K USB-C", 245000, "powerbank"],
    ["Logitech", "MX Master 3S Wireless Mouse", 399000, "mouse"]
  ];
  const genericVariants = ["Black", "White", "Silver", "Blue", "Graphite", "Rose", "Green", "Navy", "Sand", "Red"];
  function phonePhotoKey(brand, name) {
    if (brand === "Apple" && name === "iPhone 16 Pro") return "iphone";
    if (brand === "Samsung" && name === "Galaxy S25 Ultra") return "samsung";
    if (brand === "Google" && /Pixel 9 Pro/.test(name)) return "pixel";
    return "phoneAlt";
  }
  const otherModels = {
    "Fashion": [
      ["Stride", "Everyday Running Sneakers", 130000, "sneaker"],
      ["Moyo", "Linen Blend Weekend Dress", 99000, "dress"],
      ["Moyo", "Classic Cotton T-Shirt", 45000, "clothing"],
      ["Stride", "Lightweight Walking Shoes", 145000, "sneaker"],
      ["Moyo", "Relaxed Fit Chino Trousers", 89000, "clothing"],
      ["Moyo", "Everyday Canvas Backpack", 79000, "bag"]
    ],
    "Home & Living": [
      ["Habitat", "Oak & Weave Accent Chair", 527000, "chair"],
      ["Habitat", "Soft Glow Ceramic Table Lamp", 168000, "lamp"],
      ["Habitat", "Cotton Duvet Cover Set", 185000, "bedroom"],
      ["Habitat", "Modern Floating Wall Shelf", 119000, "shelf"],
      ["Habitat", "Woven Storage Basket Set", 85000, "basket"],
      ["Daywell", "Stainless Steel Cookware Set", 245000, "cookware"]
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
      ["Daywell", "Reusable Food Storage Container Set", 39000, "containers"],
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
      phoneModels.map(([brand, name, price]) => [
        brand,
        name,
        price,
        phonePhotoKey(brand, name)
      ]),
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
      genericVariants.map((name, index) => [`${index < 5 ? "Standard" : "Value"} listing ${index + 1}`, index < 5 ? 0 : 25000]),
      189
    );
    for (const [category, models] of Object.entries(otherModels)) {
      addVariants(
        category,
        models,
        genericVariants.slice(0, 5).map((_, index) => [`Sample listing ${index + 1}`, index * 3000]),
        23
      );
    }
    return products;
  }

  globalThis.SOKO_CATALOG = { buildExpansion };
})();
