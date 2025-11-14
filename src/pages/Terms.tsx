import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Terms of Service</h1>
            <p className="text-center text-muted-foreground">Last updated: November 14, 2025</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl prose prose-slate dark:prose-invert">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Shoppix, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use our platform.
            </p>

            <h2>2. Use of Service</h2>
            <p>
              Shoppix provides an online marketplace platform that enables users to buy and sell products. You agree to use the service only for lawful purposes and in accordance with these Terms.
            </p>
            <p>You agree not to:</p>
            <ul>
              <li>Use the service in any way that violates any applicable law or regulation</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use of the service</li>
              <li>Attempt to gain unauthorized access to any portion of the service</li>
              <li>Use automated systems to access the service without our permission</li>
            </ul>

            <h2>3. User Accounts</h2>
            <p>
              To use certain features of Shoppix, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>

            <h2>4. Buyer Obligations</h2>
            <p>
              As a buyer, you agree to provide accurate information, pay for all purchases, and comply with all applicable laws. You understand that transactions are between you and the vendor.
            </p>

            <h2>5. Vendor Obligations</h2>
            <p>
              Vendors must provide accurate product descriptions, fulfill orders promptly, handle returns according to policy, and maintain appropriate business licenses and permits.
            </p>

            <h2>6. Payments</h2>
            <p>
              All payments are processed through secure third-party payment processors. Shoppix does not store your full payment information. Prices are set by vendors and may be subject to change.
            </p>

            <h2>7. Shipping and Delivery</h2>
            <p>
              Vendors are responsible for shipping products. Delivery times are estimates only. Shoppix is not responsible for shipping delays caused by vendors or carriers.
            </p>

            <h2>8. Returns and Refunds</h2>
            <p>
              Returns are handled according to individual vendor policies and our general return policy. Buyers have 30 days to return most items in their original condition.
            </p>

            <h2>9. Intellectual Property</h2>
            <p>
              The Shoppix platform, including all content, features, and functionality, is owned by Shoppix and protected by intellectual property laws. You may not reproduce or distribute any part of the service without permission.
            </p>

            <h2>10. Prohibited Items</h2>
            <p>
              Certain items may not be sold on Shoppix, including but not limited to: illegal items, counterfeit goods, weapons, hazardous materials, and items that violate intellectual property rights.
            </p>

            <h2>11. Dispute Resolution</h2>
            <p>
              We encourage buyers and vendors to resolve disputes directly. If resolution cannot be reached, Shoppix may assist in mediation. Any unresolved legal disputes will be subject to arbitration.
            </p>

            <h2>12. Limitation of Liability</h2>
            <p>
              Shoppix is not liable for any indirect, incidental, special, or consequential damages arising from your use of the service. Our total liability shall not exceed the amount paid by you in the past 12 months.
            </p>

            <h2>13. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of material changes via email or platform notification. Continued use of the service constitutes acceptance of modified terms.
            </p>

            <h2>14. Termination</h2>
            <p>
              We may terminate or suspend your account at any time for violation of these terms. Upon termination, your right to use the service will immediately cease.
            </p>

            <h2>15. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at legal@shoppix.com or through our Contact page.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
