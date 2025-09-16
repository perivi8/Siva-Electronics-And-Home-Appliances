import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useToast } from "@/hooks/use-toast";

const Deals = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Get the 8 most discounted products
  const deals = [...products]
    .sort((a, b) => (b.originalPrice - b.price) / b.originalPrice - (a.originalPrice - a.price) / a.originalPrice)
    .slice(0, 8)
    .map(product => ({
      ...product,
      discount: Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100),
      timeLeft: `${Math.floor(Math.random() * 5) + 1} days left`
    }));

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.stopPropagation();
    
    if (!isAuthenticated) {
      toast({
        title: "Login Required",
        description: "Please login to add items to your cart",
        variant: "destructive",
      });
      return;
    }
    
    addToCart(product);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  const toggleWishlist = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    
    if (!isAuthenticated) {
      toast({
        title: "Login Required",
        description: "Please login to add items to your wishlist",
        variant: "destructive",
      });
      return;
    }

    if (isInWishlist(productId)) {
      removeFromWishlist(productId);
      toast({
        title: "Removed from Wishlist",
        description: "Item removed from your wishlist",
      });
    } else {
      addToWishlist(productId);
      toast({
        title: "Added to Wishlist",
        description: "Item added to your wishlist",
      });
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : i < rating
            ? 'fill-yellow-200 text-yellow-200'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <PageLayout 
      title="Hot Deals & Special Offers"
      description="Don't miss out on these amazing deals! Limited time offers on your favorite appliances and electronics."
    >
      <div className="space-y-8">
        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {deals.map((product) => (
            <Card 
              key={product.id} 
              className="hover:shadow-lg transition-shadow cursor-pointer group flex flex-col h-full relative"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              {/* Wishlist Heart - Top Left */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 left-4 z-10 bg-white/80 hover:bg-white rounded-full w-8 h-8"
                onClick={(e) => toggleWishlist(e, product.id)}
              >
                <Heart 
                  className={`w-4 h-4 ${
                    isInWishlist(product.id) 
                      ? "fill-red-500 text-red-500" 
                      : "text-gray-600"
                  }`} 
                />
              </Button>

              {/* Discount Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-red-500">
                  {product.discount}% OFF
                </Badge>
              </div>

              <CardHeader className="p-4">
                <div className="aspect-square bg-white rounded-lg mb-4 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors min-h-[3.5rem]">
                    {product.name}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-primary">
                        {formatPrice(product.price)}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      Save {formatPrice(product.originalPrice - product.price)}
                    </div>
                    <div className="text-xs text-amber-600">
                      {product.timeLeft}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <div className="p-4 pt-0">
                <Button 
                  className="w-full"
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Deals;
