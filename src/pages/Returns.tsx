import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle, Package, RefreshCw } from "lucide-react";

const Returns = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Returns & Refunds</h1>
            <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto">
              We want you to love your purchase. If you're not satisfied, we're here to help.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="hover-lift">
                <CardContent className="pt-6 text-center">
                  <Package className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">30-Day Returns</h3>
                  <p className="text-sm text-muted-foreground">Most items can be returned within 30 days</p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="pt-6 text-center">
                  <RefreshCw className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Easy Process</h3>
                  <p className="text-sm text-muted-foreground">Simple online return requests</p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="pt-6 text-center">
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Full Refunds</h3>
                  <p className="text-sm text-muted-foreground">Get your money back or exchange</p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="pt-6 text-center">
                  <XCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Free Returns</h3>
                  <p className="text-sm text-muted-foreground">On eligible items</p>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Return Policy</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    At Shoppix, we want you to be completely satisfied with your purchase. If for any reason you're not happy, you can return most items within 30 days of delivery for a full refund or exchange.
                  </p>
                  <p>
                    Items must be returned in their original condition, unworn or unused, with tags attached, and in their original packaging. Some categories have different return windows—please check the product page for specific details.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">How to Return an Item</h2>
                <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                  <li>Log in to your Shoppix account and go to "My Orders"</li>
                  <li>Select the order containing the item you want to return</li>
                  <li>Click "Request Return" and select the reason for return</li>
                  <li>Choose whether you want a refund or exchange</li>
                  <li>Print the prepaid return label (if provided)</li>
                  <li>Pack the item securely in its original packaging</li>
                  <li>Drop off at any authorized shipping location</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Eligible for Return</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border-success/50">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold mb-1">Returnable Items:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Clothing and accessories</li>
                            <li>• Electronics in original packaging</li>
                            <li>• Home and garden items</li>
                            <li>• Books and media (unopened)</li>
                            <li>• Toys and games (unopened)</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-destructive/50">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3 mb-3">
                        <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold mb-1">Non-Returnable Items:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Personal care items</li>
                            <li>• Perishable goods</li>
                            <li>• Digital products</li>
                            <li>• Custom or personalized items</li>
                            <li>• Final sale items</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Refund Process</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Once your return is received and inspected by the vendor, we'll send you an email notification. If approved, your refund will be processed automatically within 5-7 business days.
                  </p>
                  <p>
                    Refunds will be issued to your original payment method or Shoppix wallet, depending on your preference. Please note that it may take additional time for your bank or credit card company to process the refund.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Exchanges</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    If you need a different size or color, the fastest way is to return the original item and place a new order for the item you want. This ensures you get the new item as quickly as possible.
                  </p>
                  <p>
                    Some vendors may offer direct exchanges. Check with the specific vendor through your order page for their exchange policy.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Damaged or Defective Items</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    If you receive a damaged or defective item, please contact us immediately through your order page. Take photos of the damage and packaging for faster processing.
                  </p>
                  <p>
                    We'll work with the vendor to resolve the issue quickly, either by sending a replacement at no cost or issuing a full refund including return shipping.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Late or Missing Refunds</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    If you haven't received your refund within the expected timeframe:
                  </p>
                  <ol className="space-y-2 list-decimal list-inside">
                    <li>Check your bank account or credit card statement again</li>
                    <li>Contact your bank or credit card company—it may take time to officially post</li>
                    <li>If you've done all of this and still haven't received your refund, contact us at refunds@shoppix.com</li>
                  </ol>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Need Help?</h3>
                <p className="text-muted-foreground">
                  If you have questions about returns or need assistance with a return request, our customer service team is here to help. Contact us at support@shoppix.com or call +1 (800) 123-4567.
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

export default Returns;
