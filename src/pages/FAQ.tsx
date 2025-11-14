import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is Shoppix?",
          a: "Shoppix is a global e-commerce marketplace that connects buyers with vendors worldwide. We offer millions of products across various categories with AI-powered features for a personalized shopping experience."
        },
        {
          q: "How do I create an account?",
          a: "Click the 'Login / Sign Up' button in the navigation bar and follow the registration process. You'll need to provide your email, create a password, and verify your email address."
        },
        {
          q: "Is shopping on Shoppix safe?",
          a: "Yes! We use industry-standard encryption for all transactions, verify all vendors, and offer buyer protection on eligible purchases. Your personal and payment information is always secure."
        }
      ]
    },
    {
      category: "Orders & Shipping",
      questions: [
        {
          q: "How can I track my order?",
          a: "Once your order ships, you'll receive a tracking number via email. You can also track orders from your account dashboard under 'My Orders'."
        },
        {
          q: "What are the shipping costs?",
          a: "Shipping costs vary by vendor, product size, weight, and destination. The exact shipping fee will be calculated at checkout before you confirm your purchase."
        },
        {
          q: "How long does delivery take?",
          a: "Delivery times depend on the vendor's location and your shipping address. Typical delivery ranges from 3-7 business days for domestic orders and 7-21 days for international orders."
        },
        {
          q: "Can I change my shipping address?",
          a: "You can update your shipping address before the order is shipped. Contact the vendor immediately or update it in your order details if the option is available."
        }
      ]
    },
    {
      category: "Payments",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Stripe, and other regional payment methods like Paystack and Flutterwave."
        },
        {
          q: "Is my payment information secure?",
          a: "Absolutely. We use PCI-compliant payment processors and never store your full credit card information on our servers."
        },
        {
          q: "Can I use multiple payment methods?",
          a: "Currently, you can only use one payment method per order. However, you can use wallet balance in combination with other payment methods."
        }
      ]
    },
    {
      category: "Returns & Refunds",
      questions: [
        {
          q: "What is your return policy?",
          a: "Most items can be returned within 30 days of delivery if they're unused and in original packaging. Some categories have different return windows - check the product page for specific details."
        },
        {
          q: "How do I request a refund?",
          a: "Go to your order history, select the order, and click 'Request Return/Refund'. Follow the prompts to submit your request. The vendor will review and respond within 48 hours."
        },
        {
          q: "When will I receive my refund?",
          a: "After your return is approved, refunds are processed within 5-7 business days to your original payment method or Shoppix wallet."
        }
      ]
    },
    {
      category: "For Vendors",
      questions: [
        {
          q: "How do I become a vendor?",
          a: "Visit our 'Become a Vendor' page and complete the application form. Our team will review your application and contact you within 3-5 business days."
        },
        {
          q: "What are the fees for selling?",
          a: "We charge a small commission on each sale (typically 5-15% depending on category) plus payment processing fees. There are no upfront costs to list products."
        },
        {
          q: "How do I get paid?",
          a: "Payments are processed automatically and transferred to your vendor wallet after the buyer confirms receipt or the review period expires (typically 7-14 days after delivery)."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about shopping on Shoppix
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {faqs.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-bold mb-6">{section.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {section.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${index}-${faqIndex}`}>
                      <AccordionTrigger className="text-left">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
