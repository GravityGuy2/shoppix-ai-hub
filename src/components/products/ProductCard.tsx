import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  onSale?: boolean;
  vendor?: string;
}

export const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  isNew,
  onSale,
  vendor,
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-[0_0_32px_hsl(var(--primary)/0.2)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/products/${id}`} className="relative block aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out"
        />
        {onSale && discount > 0 && (
          <Badge className="absolute top-3 left-3 bg-[hsl(35,95%,60%)] text-white text-xs font-bold px-2 py-1">
            -{discount}%
          </Badge>
        )}
        {isNew && (
          <Badge className="absolute top-3 right-3 bg-[hsl(280,60%,55%)] text-white text-xs font-bold px-2 py-1">
            NEW
          </Badge>
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsWishlisted(!isWishlisted);
          }}
          className={`absolute top-3 ${isNew ? 'right-16' : 'right-3'} h-9 w-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:scale-110 transition-smooth ${
            isWishlisted ? 'text-red-500' : 'text-gray-600'
          }`}
        >
          <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>
      </Link>

      <div className="p-4 space-y-3">
        <Link to={`/products/${id}`}>
          <h3 className="font-semibold line-clamp-2 hover:text-primary transition-all duration-300 ease-in-out">
            {name}
          </h3>
        </Link>

        {vendor && (
          <p className="text-xs text-muted-foreground">by {vendor}</p>
        )}

        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'fill-gray-200 text-gray-200'
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">
            ({reviews})
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-2xl font-bold text-primary">
              ₦{price.toLocaleString()}
            </div>
            {originalPrice && originalPrice > price && (
              <div className="text-sm text-muted-foreground line-through">
                ₦{originalPrice.toLocaleString()}
              </div>
            )}
          </div>

          <Button size="sm" className="bg-gradient-to-r from-[hsl(185,85%,45%)] to-[hsl(185,90%,60%)] hover:opacity-90 text-white" asChild>
            <Link to={`/products/${id}`}>
              <ShoppingCart className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
