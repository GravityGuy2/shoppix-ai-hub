import { ProductCard } from "@/components/products/ProductCard";
import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

const flashDeals = [
  {
    id: "1",
    name: "Wireless Earbuds Pro",
    price: 49.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
    rating: 4.5,
    reviews: 1253,
    onSale: true,
    vendor: "TechGear",
  },
  {
    id: "2",
    name: "Smart Watch Series 5",
    price: 199.99,
    originalPrice: 349.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    rating: 4.8,
    reviews: 876,
    onSale: true,
    vendor: "TimeZone",
  },
  {
    id: "3",
    name: "Premium Backpack",
    price: 39.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    rating: 4.6,
    reviews: 543,
    onSale: true,
    vendor: "TravelPro",
  },
  {
    id: "4",
    name: "4K Action Camera",
    price: 149.99,
    originalPrice: 299.99,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
    rating: 4.7,
    reviews: 432,
    onSale: true,
    vendor: "PhotoHub",
  },
];

export const FlashDealsSection = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 23, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">⚡ Flash Deals</h2>
            <p className="text-muted-foreground">Limited time offers - up to 50% off!</p>
          </div>
          
          <div className="hidden md:flex items-center gap-2 px-6 py-3 bg-secondary/10 rounded-xl">
            <Clock className="h-5 w-5 text-secondary" />
            <div className="flex gap-2 text-2xl font-bold">
              <span>{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-muted-foreground">:</span>
              <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-muted-foreground">:</span>
              <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flashDeals.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
