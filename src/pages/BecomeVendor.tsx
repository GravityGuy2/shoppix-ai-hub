import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Store, TrendingUp, Globe, HeadphonesIcon, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const BecomeVendor = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement vendor application
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Start Selling on Shoppix</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of successful vendors and reach millions of customers worldwide
            </p>
            <Button size="lg" className="gradient-primary" asChild>
              <a href="#apply">Apply Now</a>
            </Button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Sell on Shoppix?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <Store className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Easy Setup</h3>
                  <p className="text-muted-foreground">
                    Create your store in minutes with our intuitive dashboard and start selling immediately
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <Globe className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Global Reach</h3>
                  <p className="text-muted-foreground">
                    Access millions of active buyers across 100+ countries with built-in shipping solutions
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <TrendingUp className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Grow Your Business</h3>
                  <p className="text-muted-foreground">
                    AI-powered insights help you optimize pricing, inventory, and marketing strategies
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <HeadphonesIcon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
                  <p className="text-muted-foreground">
                    Dedicated vendor support team ready to help you succeed at every step
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Vendor Features</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                "Complete product management dashboard",
                "Real-time sales analytics and reports",
                "Inventory tracking and alerts",
                "Multiple payment options",
                "Promotional tools and campaigns",
                "Customer messaging system",
                "Order fulfillment support",
                "Marketing and SEO tools"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-success shrink-0 mt-1" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Apply to Become a Vendor</h2>
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name</Label>
                      <Input id="businessName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="productCategory">Product Category</Label>
                      <Input id="productCategory" placeholder="e.g., Electronics, Fashion, Home & Garden" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Tell us about your business</Label>
                      <Textarea id="description" rows={4} required />
                    </div>
                    <Button type="submit" className="w-full gradient-primary">
                      Submit Application
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      Already have an account?{" "}
                      <Link to="/auth" className="text-primary hover:underline">
                        Sign in here
                      </Link>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BecomeVendor;
