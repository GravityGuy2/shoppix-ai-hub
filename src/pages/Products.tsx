import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Filter, SlidersHorizontal } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";

const allProducts = [
  // Electronics
  { id: "prod-1", name: "Wireless Headphones Pro", price: 89.99, originalPrice: 129.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", rating: 4.8, reviews: 342, onSale: true, category: "electronics", vendor: "TechGear" },
  { id: "prod-2", name: "Smart Watch Series 5", price: 299.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", rating: 4.6, reviews: 218, isNew: true, category: "electronics", vendor: "TechGear" },
  { id: "prod-3", name: "4K Action Camera", price: 199.99, originalPrice: 279.99, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500", rating: 4.7, reviews: 156, onSale: true, category: "electronics", vendor: "AudioMax" },
  { id: "prod-4", name: "Bluetooth Speaker", price: 59.99, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500", rating: 4.5, reviews: 289, category: "electronics", vendor: "AudioMax" },
  
  // Fashion
  { id: "prod-5", name: "Classic Leather Jacket", price: 149.99, originalPrice: 249.99, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500", rating: 4.9, reviews: 402, onSale: true, category: "fashion", vendor: "StyleHub" },
  { id: "prod-6", name: "Designer Sneakers", price: 119.99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", rating: 4.8, reviews: 567, isNew: true, category: "fashion", vendor: "StyleHub" },
  { id: "prod-7", name: "Slim Fit Jeans", price: 69.99, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500", rating: 4.6, reviews: 234, category: "fashion", vendor: "DenimCo" },
  { id: "prod-8", name: "Cotton T-Shirt Pack", price: 39.99, originalPrice: 59.99, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500", rating: 4.7, reviews: 891, onSale: true, category: "fashion", vendor: "BasicWear" },
  
  // Home & Living
  { id: "prod-9", name: "Modern Table Lamp", price: 79.99, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500", rating: 4.5, reviews: 167, category: "home", vendor: "HomeLux" },
  { id: "prod-10", name: "Decorative Wall Clock", price: 49.99, originalPrice: 79.99, image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500", rating: 4.6, reviews: 203, onSale: true, category: "home", vendor: "HomeLux" },
  { id: "prod-11", name: "Throw Pillow Set", price: 34.99, image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500", rating: 4.8, reviews: 445, isNew: true, category: "home", vendor: "CozyHome" },
  { id: "prod-12", name: "Kitchen Utensil Set", price: 44.99, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500", rating: 4.7, reviews: 312, category: "home", vendor: "ChefMaster" },
  
  // Gaming
  { id: "prod-13", name: "Gaming Keyboard RGB", price: 129.99, originalPrice: 179.99, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500", rating: 4.9, reviews: 523, onSale: true, category: "gaming", vendor: "GamersHub" },
  { id: "prod-14", name: "Pro Gaming Mouse", price: 79.99, image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500", rating: 4.8, reviews: 678, category: "gaming", vendor: "GamersHub" },
  { id: "prod-15", name: "Gaming Headset", price: 99.99, image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=500", rating: 4.7, reviews: 421, isNew: true, category: "gaming", vendor: "AudioMax" },
  { id: "prod-16", name: "Mechanical Controller", price: 149.99, originalPrice: 199.99, image: "https://images.unsplash.com/photo-1592840062661-eeb9e76d3c2a?w=500", rating: 4.6, reviews: 289, onSale: true, category: "gaming", vendor: "GamersHub" },
  
  // Watches
  { id: "prod-17", name: "Luxury Automatic Watch", price: 599.99, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500", rating: 4.9, reviews: 187, isNew: true, category: "watches", vendor: "TimeKeeper" },
  { id: "prod-18", name: "Sport Chronograph", price: 249.99, originalPrice: 349.99, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500", rating: 4.7, reviews: 298, onSale: true, category: "watches", vendor: "TimeKeeper" },
  { id: "prod-19", name: "Classic Leather Watch", price: 179.99, image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=500", rating: 4.8, reviews: 432, category: "watches", vendor: "Elegance" },
  { id: "prod-20", name: "Minimalist Steel Watch", price: 139.99, image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=500", rating: 4.6, reviews: 356, category: "watches", vendor: "ModernTime" },
  
  // Beauty
  { id: "prod-21", name: "Skincare Gift Set", price: 89.99, originalPrice: 129.99, image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500", rating: 4.8, reviews: 621, onSale: true, category: "beauty", vendor: "GlowLab" },
  { id: "prod-22", name: "Makeup Brush Set", price: 49.99, image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500", rating: 4.7, reviews: 478, category: "beauty", vendor: "BeautyPro" },
  { id: "prod-23", name: "Hair Styling Tools", price: 79.99, image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=500", rating: 4.6, reviews: 334, isNew: true, category: "beauty", vendor: "StylePro" },
  { id: "prod-24", name: "Fragrance Collection", price: 119.99, originalPrice: 159.99, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500", rating: 4.9, reviews: 512, onSale: true, category: "beauty", vendor: "Essence" },
  
  // Baby & Kids
  { id: "prod-25", name: "Baby Stroller Pro", price: 299.99, image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=500", rating: 4.8, reviews: 267, category: "baby", vendor: "BabyFirst" },
  { id: "prod-26", name: "Wooden Toy Set", price: 59.99, originalPrice: 89.99, image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500", rating: 4.7, reviews: 445, onSale: true, category: "baby", vendor: "ToyWorld" },
  { id: "prod-27", name: "Kids Backpack", price: 34.99, image: "https://images.unsplash.com/photo-1577741314755-048d8525d31e?w=500", rating: 4.6, reviews: 389, isNew: true, category: "baby", vendor: "KidStyle" },
  { id: "prod-28", name: "Baby Monitor Camera", price: 129.99, image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500", rating: 4.9, reviews: 201, category: "baby", vendor: "SafeBaby" },
  
  // Books
  { id: "prod-29", name: "Bestseller Novel Collection", price: 44.99, originalPrice: 64.99, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500", rating: 4.8, reviews: 892, onSale: true, category: "books", vendor: "BookHaven" },
  { id: "prod-30", name: "Educational Encyclopedia", price: 79.99, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500", rating: 4.7, reviews: 156, category: "books", vendor: "LearnHub" },
  { id: "prod-31", name: "Cookbook Collection", price: 39.99, image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=500", rating: 4.9, reviews: 523, isNew: true, category: "books", vendor: "ChefReads" },
  { id: "prod-32", name: "Children's Story Books", price: 29.99, image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=500", rating: 4.6, reviews: 678, category: "books", vendor: "KidsRead" },
];

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState("popularity");

  const filteredProducts = useMemo(() => {
    return categoryParam 
      ? allProducts.filter(p => p.category === categoryParam)
      : allProducts;
  }, [categoryParam]);

  const FilterSidebar = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5" />
          Filters
        </h3>
      </div>

      {/* Price Range */}
      <div className="space-y-4">
        <h4 className="font-medium">Price Range</h4>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={500}
          step={10}
          className="w-full"
        />
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-3">
        <h4 className="font-medium">Categories</h4>
        {["Electronics", "Fashion", "Home", "Gaming"].map((cat) => (
          <div key={cat} className="flex items-center space-x-2">
            <Checkbox id={cat} />
            <label htmlFor={cat} className="text-sm cursor-pointer">
              {cat}
            </label>
          </div>
        ))}
      </div>

      {/* Rating */}
      <div className="space-y-3">
        <h4 className="font-medium">Rating</h4>
        {[4, 3, 2, 1].map((rating) => (
          <div key={rating} className="flex items-center space-x-2">
            <Checkbox id={`rating-${rating}`} />
            <label htmlFor={`rating-${rating}`} className="text-sm cursor-pointer">
              {rating}+ Stars
            </label>
          </div>
        ))}
      </div>

      {/* Availability */}
      <div className="space-y-3">
        <h4 className="font-medium">Availability</h4>
        <div className="flex items-center space-x-2">
          <Checkbox id="in-stock" />
          <label htmlFor="in-stock" className="text-sm cursor-pointer">
            In Stock Only
          </label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 capitalize">
              {categoryParam ? categoryParam.replace('-', ' & ') : 'All'} Products
            </h1>
            <p className="text-muted-foreground">{filteredProducts.length} products found</p>
          </div>

          <div className="flex items-center gap-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>

            {/* Mobile Filter */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Filter className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterSidebar />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6 p-6 bg-card rounded-xl shadow-soft">
              <FilterSidebar />
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-12">
              <Button variant="outline">Previous</Button>
              <Button variant="outline">1</Button>
              <Button>2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
