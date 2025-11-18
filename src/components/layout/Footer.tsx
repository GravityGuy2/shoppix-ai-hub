import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                Shoppix
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Your trusted marketplace for quality products from verified vendors worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-cyan-500 transition-all duration-300 ease-in-out">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-cyan-500 transition-all duration-300 ease-in-out">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-cyan-500 transition-all duration-300 ease-in-out">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-cyan-500 transition-all duration-300 ease-in-out">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/help" className="hover:text-cyan-500 transition-all duration-300 ease-in-out">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="hover:text-cyan-500 transition-all duration-300 ease-in-out">
                  Track Order
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-cyan-500 transition-all duration-300 ease-in-out">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-500 transition-all duration-300 ease-in-out">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-4">About Shoppix</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/about" className="hover:text-cyan-500 transition-all duration-300 ease-in-out">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/vendor" className="hover:text-cyan-500 transition-all duration-300 ease-in-out">
                  Become a Vendor
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-cyan-500 transition-all duration-300 ease-in-out">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/press" className="hover:text-cyan-500 transition-all duration-300 ease-in-out">
                  Press & Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/terms" className="hover:text-cyan-500 transition-all duration-300 ease-in-out">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-cyan-500 transition-all duration-300 ease-in-out">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-cyan-500 transition-all duration-300 ease-in-out">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/security" className="hover:text-cyan-500 transition-all duration-300 ease-in-out">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Shoppix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
