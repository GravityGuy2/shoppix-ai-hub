import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-[hsl(185,85%,45%)] to-[hsl(185,90%,60%)]" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Shoppix
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted marketplace for quality products from verified vendors worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 ease-in-out">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 ease-in-out">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 ease-in-out">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 ease-in-out">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/help" className="hover:text-primary transition-smooth">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="hover:text-primary transition-smooth">
                  Track Order
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-primary transition-smooth">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-smooth">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-4">About Shoppix</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-primary transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/vendor" className="hover:text-primary transition-smooth">
                  Become a Vendor
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-primary transition-smooth">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/press" className="hover:text-primary transition-smooth">
                  Press & Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/terms" className="hover:text-primary transition-smooth">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary transition-smooth">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-primary transition-smooth">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/security" className="hover:text-primary transition-smooth">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Shoppix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
