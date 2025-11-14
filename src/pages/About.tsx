import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ShoppingBag, Users, Globe, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">About Shoppix</h1>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
              Your trusted marketplace connecting millions of buyers with thousands of quality vendors worldwide
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10M+</div>
                <div className="text-muted-foreground">Products</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-muted-foreground">Vendors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5M+</div>
                <div className="text-muted-foreground">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  At Shoppix, we're on a mission to democratize e-commerce by providing a platform where anyone can buy and sell products globally with ease and confidence.
                </p>
                <p className="text-lg text-muted-foreground">
                  We leverage cutting-edge technology, including AI-powered recommendations and smart search, to create the most personalized and efficient shopping experience possible.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border bg-card hover-lift">
                  <ShoppingBag className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Quality Products</h3>
                  <p className="text-sm text-muted-foreground">Curated selection from verified vendors</p>
                </div>
                <div className="p-6 rounded-xl border bg-card hover-lift">
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Community First</h3>
                  <p className="text-sm text-muted-foreground">Building trust between buyers and sellers</p>
                </div>
                <div className="p-6 rounded-xl border bg-card hover-lift">
                  <Globe className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Global Reach</h3>
                  <p className="text-sm text-muted-foreground">Connect with customers worldwide</p>
                </div>
                <div className="p-6 rounded-xl border bg-card hover-lift">
                  <Award className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Excellence</h3>
                  <p className="text-sm text-muted-foreground">Committed to outstanding service</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2024, Shoppix began with a simple vision: to create an e-commerce platform that puts both buyers and sellers first. We recognized that the traditional online marketplace model often favored large corporations over small businesses and individual entrepreneurs.
                </p>
                <p>
                  Today, Shoppix has grown into a thriving global marketplace where millions of transactions happen daily. Our AI-powered platform helps customers discover products they love while enabling vendors of all sizes to reach new audiences and grow their businesses.
                </p>
                <p>
                  We're constantly innovating—from image-based search to personalized recommendations—to make online shopping more intuitive, secure, and enjoyable for everyone.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
