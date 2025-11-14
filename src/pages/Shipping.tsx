import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Clock, Globe, DollarSign } from "lucide-react";

const Shipping = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Shipping Information</h1>
            <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto">
              Fast, reliable delivery to your doorstep from vendors worldwide
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="hover-lift">
                <CardContent className="pt-6 text-center">
                  <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Multiple Carriers</h3>
                  <p className="text-sm text-muted-foreground">Trusted shipping partners worldwide</p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="pt-6 text-center">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Real-Time Tracking</h3>
                  <p className="text-sm text-muted-foreground">Track your order every step</p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="pt-6 text-center">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Global Delivery</h3>
                  <p className="text-sm text-muted-foreground">Ship to 100+ countries</p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="pt-6 text-center">
                  <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Competitive Rates</h3>
                  <p className="text-sm text-muted-foreground">Best shipping prices</p>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Shipping Methods</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Standard Shipping</h3>
                      <p className="text-muted-foreground mb-2">
                        <strong>Delivery Time:</strong> 5-7 business days (domestic), 10-21 business days (international)
                      </p>
                      <p className="text-muted-foreground mb-2">
                        <strong>Cost:</strong> Varies by vendor, product, and destination
                      </p>
                      <p className="text-muted-foreground">
                        Our most economical shipping option. Perfect for non-urgent orders.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Express Shipping</h3>
                      <p className="text-muted-foreground mb-2">
                        <strong>Delivery Time:</strong> 2-3 business days (domestic), 5-7 business days (international)
                      </p>
                      <p className="text-muted-foreground mb-2">
                        <strong>Cost:</strong> Higher rates apply
                      </p>
                      <p className="text-muted-foreground">
                        Faster delivery for urgent orders. Priority processing and expedited shipping.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Free Shipping</h3>
                      <p className="text-muted-foreground mb-2">
                        <strong>Delivery Time:</strong> Same as standard shipping
                      </p>
                      <p className="text-muted-foreground mb-2">
                        <strong>Eligibility:</strong> Available on select products or minimum order values
                      </p>
                      <p className="text-muted-foreground">
                        Look for the "Free Shipping" badge on product pages. Minimum order requirements vary by vendor.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">How Shipping Costs Are Calculated</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Shipping costs on Shoppix are determined by several factors:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong>Product weight and dimensions:</strong> Larger and heavier items cost more to ship</li>
                    <li><strong>Shipping distance:</strong> Longer distances typically result in higher shipping costs</li>
                    <li><strong>Vendor location:</strong> Each vendor sets their own shipping rates based on their location</li>
                    <li><strong>Shipping method:</strong> Express shipping costs more than standard shipping</li>
                    <li><strong>Destination:</strong> International shipping includes customs and duty fees</li>
                  </ul>
                  <p>
                    The exact shipping cost will be calculated at checkout before you complete your purchase. You'll see all fees transparently before confirming your order.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Order Processing Time</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    After you place an order, vendors typically need 1-3 business days to process and prepare your items for shipment. Processing times may be longer during peak seasons or for custom/personalized items.
                  </p>
                  <p>
                    You'll receive an email notification when your order ships, including a tracking number to monitor your delivery.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Tracking Your Order</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Track your order in real-time through your Shoppix account:
                  </p>
                  <ol className="space-y-2 list-decimal list-inside">
                    <li>Log in to your account and go to "My Orders"</li>
                    <li>Select the order you want to track</li>
                    <li>View the current status and estimated delivery date</li>
                    <li>Click on the tracking number for detailed shipping updates</li>
                  </ol>
                  <p>
                    You can also track orders using the tracking number provided in your shipping confirmation email on the carrier's website.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">International Shipping</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We ship to over 100 countries worldwide. International orders may be subject to:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong>Customs duties and taxes:</strong> Determined by your country's customs office</li>
                    <li><strong>Import restrictions:</strong> Some items cannot be shipped to certain countries</li>
                    <li><strong>Longer delivery times:</strong> International shipping takes 10-21 business days</li>
                    <li><strong>Currency conversion:</strong> Prices shown in USD, converted at checkout</li>
                  </ul>
                  <p>
                    You are responsible for any customs duties, taxes, or fees charged by your country. These charges are not included in the product or shipping cost.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Delivery Issues</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    If you experience any delivery problems, please contact us immediately:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong>Lost packages:</strong> Contact us if tracking shows delivered but you didn't receive it</li>
                    <li><strong>Damaged items:</strong> Report damage within 48 hours of delivery with photos</li>
                    <li><strong>Delayed shipments:</strong> We'll help track down your package and provide updates</li>
                    <li><strong>Wrong address:</strong> Contact us immediately if you entered an incorrect address</li>
                  </ul>
                  <p>
                    We work with vendors and carriers to resolve any shipping issues quickly and ensure you receive your order.
                  </p>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Questions About Shipping?</h3>
                <p className="text-muted-foreground">
                  Our customer service team is available to help with any shipping questions or concerns. Contact us at shipping@shoppix.com or call +1 (800) 123-4567.
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

export default Shipping;
