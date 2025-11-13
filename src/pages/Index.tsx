import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { FlashDealsSection } from "@/components/home/FlashDealsSection";
import { FeaturedProductsSection } from "@/components/home/FeaturedProductsSection";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CategoriesSection />
        <FlashDealsSection />
        <FeaturedProductsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
