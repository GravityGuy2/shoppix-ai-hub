import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-500/10 via-white to-purple-500/10">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Shopping Experience</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Discover Amazing Products from{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
              Trusted Vendors
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Shop millions of products at unbeatable prices. Get fast delivery, secure payments, and personalized recommendations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:opacity-90 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg text-white" asChild>
              <Link to="/products">
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg" asChild>
              <Link to="/vendor">Become a Vendor</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-500">10M+</div>
              <div className="text-sm text-gray-600">Products</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-500">50K+</div>
              <div className="text-sm text-gray-600">Vendors</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-500">2M+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
