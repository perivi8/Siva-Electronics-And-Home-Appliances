import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-electronics.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/shop');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 md:pt-44 lg:pt-48">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium Electronics Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Next-Gen
              <span className="block text-accent">Electronics</span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed">
              Discover cutting-edge technology and premium home appliances. 
              Transform your lifestyle with our curated collection of the latest innovations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" className="group" onClick={handleShopNow}>
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="hero" size="lg" className="group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/20">
              <div className="text-black">
                <div className="text-3xl font-bold text-accent">10K+</div>
                <div className="text-sm text-black/80 font-medium">Happy Customers</div>
              </div>
              <div className="text-black">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-black/80 font-medium">Premium Products</div>
              </div>
              <div className="text-black">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-black/80 font-medium">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;