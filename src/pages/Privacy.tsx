import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Privacy Policy</h1>
            <p className="text-center text-muted-foreground">Last updated: November 14, 2025</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl prose prose-slate dark:prose-invert">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul>
              <li>Account information (name, email, phone number)</li>
              <li>Payment information (processed securely by third parties)</li>
              <li>Shipping addresses and delivery preferences</li>
              <li>Communications with vendors and customer support</li>
              <li>Reviews, ratings, and other user-generated content</li>
            </ul>

            <h2>2. Automatically Collected Information</h2>
            <p>
              When you use Shoppix, we automatically collect certain information:
            </p>
            <ul>
              <li>Device and browser information</li>
              <li>IP address and location data</li>
              <li>Browsing behavior and search queries</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your account and orders</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Personalize your shopping experience with AI recommendations</li>
              <li>Improve our platform and develop new features</li>
              <li>Detect and prevent fraud and security issues</li>
              <li>Send marketing communications (with your consent)</li>
            </ul>

            <h2>4. Information Sharing</h2>
            <p>We may share your information with:</p>
            <ul>
              <li><strong>Vendors:</strong> To fulfill your orders and handle returns</li>
              <li><strong>Service Providers:</strong> Payment processors, shipping companies, and analytics providers</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>6. Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access and update your account information</li>
              <li>Request deletion of your personal data</li>
              <li>Opt-out of marketing communications</li>
              <li>Disable cookies through your browser settings</li>
              <li>Request a copy of your data</li>
            </ul>

            <h2>7. Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content. You can control cookie preferences through your browser settings.
            </p>

            <h2>8. Third-Party Links</h2>
            <p>
              Our platform may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. Please review their privacy policies before providing any information.
            </p>

            <h2>9. Children's Privacy</h2>
            <p>
              Shoppix is not intended for children under 13 years of age. We do not knowingly collect personal information from children. If we discover we have collected information from a child, we will delete it promptly.
            </p>

            <h2>10. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for international transfers.
            </p>

            <h2>11. Data Retention</h2>
            <p>
              We retain your information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time.
            </p>

            <h2>12. Changes to Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes via email or platform notification. Your continued use of Shoppix constitutes acceptance of the updated policy.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <ul>
              <li>Email: privacy@shoppix.com</li>
              <li>Phone: +1 (800) 123-4567</li>
              <li>Address: 123 Commerce Street, San Francisco, CA 94105</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
