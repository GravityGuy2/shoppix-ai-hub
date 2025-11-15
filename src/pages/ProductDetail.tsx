import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Heart, ShoppingCart, Truck, Shield, RefreshCw, MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800",
    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800",
    "https://images.unsplash.com/photo-1577174881658-0f30157d0458?w=800",
  ];

  const reviews = [
    {
      id: 1,
      author: "John Doe",
      rating: 5,
      date: "2 days ago",
      comment: "Excellent product! Sound quality is amazing and battery life is incredible.",
      helpful: 24,
    },
    {
      id: 2,
      author: "Jane Smith",
      rating: 4,
      date: "1 week ago",
      comment: "Great headphones, but the case could be better. Overall very satisfied with the purchase.",
      helpful: 12,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src={images[selectedImage]}
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-smooth ${
                    selectedImage === idx ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-3">Electronics</Badge>
              <h1 className="text-4xl font-bold mb-4">Premium Wireless Headphones Pro</h1>
              <p className="text-lg text-muted-foreground">by AudioMax</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(1,876 reviews)</span>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-5xl font-bold text-primary">₦65,000</span>
              <span className="text-2xl text-muted-foreground line-through">₦89,000</span>
              <Badge className="badge-sale">36% OFF</Badge>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Experience exceptional sound quality with our Premium Wireless Headphones. 
              Featuring active noise cancellation, 40-hour battery life, and premium comfort 
              for all-day wear.
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="font-medium">Quantity:</span>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button size="lg" className="flex-1 gradient-primary">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            <Button size="lg" variant="outline" className="w-full">
              Buy Now
            </Button>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">2 Year Warranty</span>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCw className="h-5 w-5 text-primary" />
                <span className="text-sm">30-Day Returns</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6 space-y-4">
            <h3 className="text-2xl font-bold">Product Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              Immerse yourself in superior sound quality with our Premium Wireless Headphones Pro. 
              Engineered with advanced audio technology, these headphones deliver crystal-clear highs 
              and deep, powerful bass. The active noise cancellation feature blocks out unwanted ambient 
              noise, allowing you to focus on your music, podcasts, or calls.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Designed for comfort and durability, the soft memory foam ear cushions and adjustable 
              headband provide a perfect fit for extended listening sessions. With an impressive 40-hour 
              battery life, you can enjoy uninterrupted audio for days on end.
            </p>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Driver Size", value: "40mm" },
                  { label: "Frequency Response", value: "20Hz - 20kHz" },
                  { label: "Impedance", value: "32 Ω" },
                  { label: "Battery Life", value: "40 hours" },
                  { label: "Charging Time", value: "2 hours" },
                  { label: "Bluetooth Version", value: "5.2" },
                  { label: "Weight", value: "250g" },
                  { label: "Warranty", value: "2 years" },
                ].map((spec) => (
                  <div key={spec.label} className="flex justify-between p-4 bg-muted rounded-lg">
                    <span className="font-medium">{spec.label}</span>
                    <span className="text-muted-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Customer Reviews</h3>
              <Button>Write a Review</Button>
            </div>
            
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="p-6 bg-card rounded-xl shadow-soft">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.author}`} />
                      <AvatarFallback>{review.author[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">{review.author}</p>
                          <p className="text-sm text-muted-foreground">{review.date}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'fill-gray-200 text-gray-200'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                      <Button variant="ghost" size="sm">
                        👍 Helpful ({review.helpful})
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
