import { ProductCard } from "@/components/products/ProductCard";

const featuredProducts = [
  {
    id: "5",
    name: "Mechanical Gaming Keyboard",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    rating: 4.9,
    reviews: 2341,
    isNew: true,
    vendor: "GamersHub",
  },
  {
    id: "6",
    name: "Noise Cancelling Headphones",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    rating: 4.8,
    reviews: 1876,
    vendor: "AudioMax",
  },
  {
    id: "7",
    name: "Portable SSD 1TB",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500",
    rating: 4.7,
    reviews: 654,
    isNew: true,
    vendor: "DataStore",
  },
  {
    id: "8",
    name: "Wireless Mouse Pro",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
    rating: 4.6,
    reviews: 943,
    vendor: "TechGear",
  },
  {
    id: "9",
    name: "USB-C Hub Adapter",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500",
    rating: 4.5,
    reviews: 432,
    vendor: "ConnectPro",
  },
  {
    id: "10",
    name: "HD Webcam 1080p",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500",
    rating: 4.4,
    reviews: 765,
    vendor: "StreamGear",
  },
  {
    id: "11",
    name: "Bluetooth Speaker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    rating: 4.7,
    reviews: 1234,
    vendor: "SoundWave",
  },
  {
    id: "12",
    name: "Phone Stand Holder",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500",
    rating: 4.3,
    reviews: 543,
    vendor: "GadgetZone",
  },
];

export const FeaturedProductsSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground">Hand-picked products for you</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
