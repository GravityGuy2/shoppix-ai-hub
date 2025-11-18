import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Store, TrendingUp, Globe, HeadphonesIcon, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const vendorSchema = z.object({
  businessName: z.string().trim().min(1, "Business name is required").max(100, "Business name must be less than 100 characters"),
  contactName: z.string().trim().min(1, "Contact name is required").max(100, "Contact name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
  website: z.string().url("Invalid URL format").max(500, "URL must be less than 500 characters").optional().or(z.literal("")),
  description: z.string().trim().min(1, "Description is required").max(1000, "Description must be less than 1000 characters"),
});

const BecomeVendor = () => {
  const [businessName, setBusinessName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = vendorSchema.safeParse({
      businessName,
      contactName,
      email,
      phone,
      website,
      description,
    });
    
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      const errorMessage = 
        errors.businessName?.[0] ||
        errors.contactName?.[0] ||
        errors.email?.[0] ||
        errors.phone?.[0] ||
        errors.website?.[0] ||
        errors.description?.[0] ||
        "Please check your input";
      
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: errorMessage,
      });
      return;
    }
    
    setLoading(true);
    // TODO: Implement vendor application submission (Edge Function with rate limiting)
    if (import.meta.env.DEV) {
      console.log("Vendor application data:", result.data);
    }
    
    toast({
      title: "Application Submitted",
      description: "Thank you for your interest! We'll review your application and contact you soon.",
    });
    
    setBusinessName("");
    setContactName("");
    setEmail("");
    setPhone("");
    setWebsite("");
    setDescription("");
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-500/10 via-white to-purple-500/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Start Selling on Shoppix</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Join thousands of successful vendors and reach millions of customers worldwide
            </p>
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:opacity-90" asChild>
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Vendor Features</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                "Complete product management dashboard",
                "Real-time sales analytics and reports",
                "Inventory tracking and alerts",
                "Multiple payment options",
                "Integrated shipping solutions",
                "Marketing and promotion tools",
                "Customer relationship management",
                "Mobile app for on-the-go management",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Apply to Become a Vendor</h2>
                <p className="text-gray-600">
                  Fill out the form below and our team will review your application
                </p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name *</Label>
                      <Input
                        id="businessName"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactName">Contact Name *</Label>
                      <Input
                        id="contactName"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1234567890"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="website">Website (Optional)</Label>
                      <Input
                        id="website"
                        type="url"
                        placeholder="https://example.com"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Tell us about your business *</Label>
                      <Textarea
                        id="description"
                        rows={6}
                        placeholder="Describe your products, business model, and why you want to sell on Shoppix"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      />
                    </div>

                    <div className="text-sm text-gray-600">
                      By submitting this form, you agree to our{" "}
                      <Link to="/terms" className="text-cyan-500 hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-cyan-500 hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </div>

                      <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:opacity-90 text-white" disabled={loading}>
                        {loading ? "Submitting..." : "Submit Application"}
                      </Button>
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
