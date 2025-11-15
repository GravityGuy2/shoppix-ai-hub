// All prices in Nigerian Naira (₦)
export const allProducts = [
  // Electronics
  { id: "prod-1", name: "Wireless Headphones Pro", price: 44000, originalPrice: 62000, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", rating: 4.8, reviews: 342, onSale: true, category: "electronics", vendor: "TechGear" },
  { id: "prod-2", name: "Smart Watch Series 5", price: 145000, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", rating: 4.6, reviews: 218, isNew: true, category: "electronics", vendor: "TechGear" },
  { id: "prod-3", name: "4K Action Camera", price: 98000, originalPrice: 135000, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500", rating: 4.7, reviews: 156, onSale: true, category: "electronics", vendor: "AudioMax" },
  { id: "prod-4", name: "Bluetooth Speaker", price: 29000, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500", rating: 4.5, reviews: 289, category: "electronics", vendor: "AudioMax" },
  
  // Fashion
  { id: "prod-5", name: "Classic Leather Jacket", price: 73000, originalPrice: 122000, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500", rating: 4.9, reviews: 402, onSale: true, category: "fashion", vendor: "StyleHub" },
  { id: "prod-6", name: "Designer Sneakers", price: 58000, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", rating: 4.8, reviews: 567, isNew: true, category: "fashion", vendor: "StyleHub" },
  { id: "prod-7", name: "Slim Fit Jeans", price: 34000, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500", rating: 4.6, reviews: 234, category: "fashion", vendor: "DenimCo" },
  { id: "prod-8", name: "Cotton T-Shirt Pack", price: 19500, originalPrice: 29000, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500", rating: 4.7, reviews: 891, onSale: true, category: "fashion", vendor: "BasicWear" },
  
  // Home & Living
  { id: "prod-9", name: "Modern Table Lamp", price: 38000, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500", rating: 4.5, reviews: 167, category: "home", vendor: "HomeLux" },
  { id: "prod-10", name: "Decorative Wall Clock", price: 24000, originalPrice: 38000, image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500", rating: 4.6, reviews: 203, onSale: true, category: "home", vendor: "HomeLux" },
  { id: "prod-11", name: "Throw Pillow Set", price: 17000, image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500", rating: 4.8, reviews: 445, isNew: true, category: "home", vendor: "CozyHome" },
  { id: "prod-12", name: "Kitchen Utensil Set", price: 22000, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500", rating: 4.7, reviews: 312, category: "home", vendor: "ChefMaster" },
  
  // Gaming
  { id: "prod-13", name: "Gaming Keyboard RGB", price: 63000, originalPrice: 88000, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500", rating: 4.9, reviews: 523, onSale: true, category: "gaming", vendor: "GamersHub" },
  { id: "prod-14", name: "Pro Gaming Mouse", price: 38000, image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500", rating: 4.8, reviews: 678, category: "gaming", vendor: "GamersHub" },
  { id: "prod-15", name: "Gaming Headset", price: 48000, image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=500", rating: 4.7, reviews: 421, isNew: true, category: "gaming", vendor: "AudioMax" },
  { id: "prod-16", name: "Mechanical Controller", price: 73000, originalPrice: 97000, image: "https://images.unsplash.com/photo-1592840062661-eeb9e76d3c2a?w=500", rating: 4.6, reviews: 289, onSale: true, category: "gaming", vendor: "GamersHub" },
  
  // Watches
  { id: "prod-17", name: "Luxury Automatic Watch", price: 295000, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500", rating: 4.9, reviews: 187, isNew: true, category: "watches", vendor: "TimeKeeper" },
  { id: "prod-18", name: "Sport Chronograph", price: 122000, originalPrice: 170000, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500", rating: 4.7, reviews: 298, onSale: true, category: "watches", vendor: "TimeKeeper" },
  { id: "prod-19", name: "Classic Leather Watch", price: 88000, image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=500", rating: 4.8, reviews: 432, category: "watches", vendor: "Elegance" },
  { id: "prod-20", name: "Minimalist Steel Watch", price: 68000, image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=500", rating: 4.6, reviews: 356, category: "watches", vendor: "ModernTime" },
  
  // Beauty & Health
  { id: "prod-21", name: "Skincare Gift Set", price: 35000, originalPrice: 52000, image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500", rating: 4.8, reviews: 534, onSale: true, category: "beauty", vendor: "GlowLab" },
  { id: "prod-22", name: "Makeup Brush Set", price: 24000, image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500", rating: 4.7, reviews: 891, category: "beauty", vendor: "BeautyPro" },
  { id: "prod-23", name: "Hair Styling Tool Set", price: 42000, image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500", rating: 4.6, reviews: 267, isNew: true, category: "beauty", vendor: "BeautyPro" },
  { id: "prod-24", name: "Essential Oils Collection", price: 19500, image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500", rating: 4.9, reviews: 423, category: "beauty", vendor: "NaturalGlow" },
  
  // Baby & Kids
  { id: "prod-25", name: "Baby Stroller Pro", price: 145000, image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=500", rating: 4.9, reviews: 345, isNew: true, category: "baby", vendor: "BabyFirst" },
  { id: "prod-26", name: "Wooden Toy Set", price: 29000, image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500", rating: 4.7, reviews: 298, category: "baby", vendor: "ToyWorld" },
  { id: "prod-27", name: "Kids Learning Tablet", price: 58000, originalPrice: 78000, image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500", rating: 4.8, reviews: 567, onSale: true, category: "baby", vendor: "EduTech" },
  { id: "prod-28", name: "Baby Monitor Camera", price: 38000, image: "https://images.unsplash.com/photo-1518887499668-5d4e1dc332d9?w=500", rating: 4.6, reviews: 412, category: "baby", vendor: "SafetyFirst" },
  
  // Books & Media
  { id: "prod-29", name: "Bestseller Novel Collection", price: 22000, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500", rating: 4.8, reviews: 1234, category: "books", vendor: "BookHaven" },
  { id: "prod-30", name: "Educational Book Set", price: 34000, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500", rating: 4.7, reviews: 678, category: "books", vendor: "BookHaven" },
  { id: "prod-31", name: "Audiobook Player", price: 48000, originalPrice: 68000, image: "https://images.unsplash.com/photo-1545235617-7a424c1a60cc?w=500", rating: 4.9, reviews: 234, onSale: true, category: "books", vendor: "AudioWorld" },
  { id: "prod-32", name: "Magazine Subscription Bundle", price: 19500, image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=500", rating: 4.5, reviews: 456, category: "books", vendor: "MagStore" },
];
