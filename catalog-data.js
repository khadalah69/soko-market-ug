(() => {
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
    ["Apple", "iPad Air 11-inch", 2390000,],
    ["Samsung", "Galaxy Tab S10 FE", 2190000,],
    ["Lenovo", "IdeaPad Slim 3 15-inch", 2490000,],
    ["HP", "Pavilion 15 Laptop", 3290000,],
    ["ASUS", "Vivobook 15", 2890000,],
    ["JBL", "Tune 770NC Wireless Headphones", 549000,],
    ["Sony", "WH-CH720N Wireless Headphones", 799000,],
    ["Anker", "Soundcore Space One Headphones", 649000,],
    ["JBL", "Flip 6 Portable Bluetooth Speaker", 649000,],
    ["JBL", "Charge 5 Portable Bluetooth Speaker", 899000,],
    ["Sony", "ULT Field 1 Bluetooth Speaker", 599000,],
    ["Samsung", "Crystal UHD 55-inch Smart TV", 1890000,],
    ["LG", "UHD AI ThinQ 50-inch Smart TV", 1690000,],
    ["Hisense", "QLED 55-inch Smart TV", 1990000,],
    ["Apple", "AirPods 4 Wireless Earbuds", 699000,],
    ["Samsung", "Galaxy Buds3 Pro", 899000,],
    ["Anker", "Soundcore Liberty 4 NC Earbuds", 399000,],
    ["Apple", "Apple Watch SE GPS", 1190000,],
    ["Samsung", "Galaxy Watch7", 1390000,],
    ["Canon", "EOS R50 Mirrorless Camera", 3890000,],
    ["Sony", "Alpha ZV-E10 Mirrorless Camera", 3590000,],
    ["Sony", "PlayStation 5 Slim Digital Edition", 2190000,],
    ["Nintendo", "Switch OLED Model", 1690000,],
    ["Xiaomi", "Mi Power Bank 20K USB-C", 245000,],
    ["Logitech", "MX Master 3S Wireless Mouse", 399000,]
  ];
  const genericVariants = ["Black", "White", "Silver", "Blue", "Graphite", "Rose", "Green", "Navy", "Sand", "Red"];
  const otherModels = {
    "Fashion": [
      ["Stride", "Everyday Running Sneakers", 130000,],
      ["Moyo", "Linen Blend Weekend Dress", 99000,],
      ["Moyo", "Classic Cotton T-Shirt", 45000,],
      ["Stride", "Lightweight Walking Shoes", 145000,],
      ["Moyo", "Relaxed Fit Chino Trousers", 89000,],
      ["Moyo", "Everyday Canvas Backpack", 79000,]
    ],
    "Home & Living": [
      ["Habitat", "Oak & Weave Accent Chair", 527000,],
      ["Habitat", "Soft Glow Ceramic Table Lamp", 168000,],
      ["Habitat", "Cotton Duvet Cover Set", 185000,],
      ["Habitat", "Modern Floating Wall Shelf", 119000,],
      ["Habitat", "Woven Storage Basket Set", 85000,],
      ["Daywell", "Stainless Steel Cookware Set", 245000,]
    ],
    "Beauty": [
      ["Glow Lab", "Daily Glow Skincare Set", 94000,],
      ["Glow Lab", "Vitamin C Brightening Serum", 54000,],
      ["Glow Lab", "Gentle Hydrating Face Cleanser", 39000,],
      ["Glow Lab", "Daily SPF 50 Sunscreen", 48000,],
      ["Moyo", "Shea Butter Body Lotion", 32000,],
      ["Glow Lab", "Overnight Moisture Cream", 57000,]
    ],
    "Supermarket": [
      ["Kahawa Co.", "Fresh Roast Coffee Beans 1kg", 42000,],
      ["Daywell", "Insulated Everyday Water Bottle", 28000,],
      ["Kahawa Co.", "Ugandan Arabica Ground Coffee 500g", 26000,],
      ["Daywell", "Reusable Food Storage Container Set", 39000,],
      ["Kahawa Co.", "Dark Roast Coffee Pods 10-pack", 18000,],
      ["Daywell", "Glass Water Bottle with Sleeve", 22000,]
    ]
  };

  function buildExpansion() {
    const products = [];
    function addVariants(category, models, variants, count, priceForVariant) {
      for (let modelIndex = 0, categoryCount = 0; categoryCount < count; modelIndex += 1, categoryCount += 1) {
        const model = models[modelIndex % models.length];
        const cycle = Math.floor(modelIndex / models.length);
        const [brand, name, basePrice] = model;
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
          image: "",
          featured: products.length + 27
        });
      }
    }
    addVariants(
      "Phones & Tablets",
      phoneModels,
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
