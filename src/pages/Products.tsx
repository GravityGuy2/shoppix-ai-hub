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
import { allProducts } from "@/data/mockProducts";


const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [priceRange, setPriceRange] = useState([0, 300000]);
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
        <div className="flex items-center justify-between text-sm text-gray-600">
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
