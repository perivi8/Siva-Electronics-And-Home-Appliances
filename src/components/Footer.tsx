import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-section text-dark-section-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-dark-section-foreground">Siva Electronics</h3>
            <p className="text-dark-section-foreground/80">
              Your trusted partner for premium home appliances and electronics. 
              Quality products, competitive prices, exceptional service.
            </p>
            <div className="space-y-2">
              <p className="text-dark-section-foreground/70 text-sm flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                sivahomeappliances033@gmail.com
              </p>
              <p className="text-dark-section-foreground/70 text-sm flex items-center">
                <span className="mr-2">📞</span>
                +91 9943691712 / +91 6383791917
              </p>
              <p className="text-dark-section-foreground/70 text-sm">
                OPP. TO 21, J.K.PLAZA, PALLIPAT MAIN ROAD, PODHATUR PETTAI, Tiruvallur, Tamil Nadu, 631208
              </p>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-dark-section-foreground hover:text-accent">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-dark-section-foreground hover:text-accent">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-dark-section-foreground hover:text-accent">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-dark-section-foreground hover:text-accent">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-dark-section-foreground">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-dark-section-foreground/70 hover:text-accent transition-colors" onClick={scrollToTop}>
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-dark-section-foreground/70 hover:text-accent transition-colors" onClick={scrollToTop}>
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-dark-section-foreground/70 hover:text-accent transition-colors" onClick={scrollToTop}>
                  Deals
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-dark-section-foreground/70 hover:text-accent transition-colors" onClick={scrollToTop}>
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-dark-section-foreground/70 hover:text-accent transition-colors" onClick={scrollToTop}>
                  Brands
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-dark-section-foreground">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-dark-section-foreground/70 hover:text-accent transition-colors" onClick={scrollToTop}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-dark-section-foreground/70 hover:text-accent transition-colors" onClick={scrollToTop}>
                  Support Center
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-dark-section-foreground/70 hover:text-accent transition-colors" onClick={scrollToTop}>
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-dark-section-foreground/70 hover:text-accent transition-colors" onClick={scrollToTop}>
                  Warranty Info
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-dark-section-foreground/70 hover:text-accent transition-colors" onClick={scrollToTop}>
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-dark-section-foreground">Stay Updated</h4>
            <p className="text-dark-section-foreground/80">
              Subscribe to get special offers, free giveaways, and updates on new products.
            </p>
            <div className="space-y-2">
              <div className="flex">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
                <Button variant="cta" className="ml-2">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-dark-section-foreground/70 text-sm">
              2024 ElectroStore. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
              <Link 
                to="/privacy-policy" 
                className="text-dark-section-foreground/70 hover:text-accent transition-colors text-sm"
                onClick={scrollToTop}
              >
                Privacy Policy
              </Link>
              <span className="text-dark-section-foreground/50">•</span>
              <Link 
                to="/terms-conditions" 
                className="text-dark-section-foreground/70 hover:text-accent transition-colors text-sm"
                onClick={scrollToTop}
              >
                Terms & Conditions
              </Link>
              <span className="text-dark-section-foreground/50">•</span>
              <Link 
                to="/shipping-policy" 
                className="text-dark-section-foreground/70 hover:text-accent transition-colors text-sm"
                onClick={scrollToTop}
              >
                Shipping Policy
              </Link>
              <span className="text-dark-section-foreground/50">•</span>
              <Link 
                to="/cancellation-refund" 
                className="text-dark-section-foreground/70 hover:text-accent transition-colors text-sm"
                onClick={scrollToTop}
              >
                Cancellation & Refund
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;