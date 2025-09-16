import React, { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ShoppingCart, User, Search, LogOut, Package, Heart } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { products, searchProducts } from "@/data/products";
import LoginModal from "./LoginModal";

const Header = () => {
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const { getTotalItems } = useCart();
  const { getTotalWishlistItems } = useWishlist();

  const handleProfileClick = () => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowSuggestions(value.length > 0);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setShowSuggestions(false);
      setSearchQuery("");
    }
  };

  const handleSuggestionClick = (productId: string) => {
    navigate(`/product/${productId}`);
    setShowSuggestions(false);
    setSearchQuery("");
  };

  const handleCategoriesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      const categorySection = document.getElementById('shop-by-category');
      if (categorySection) {
        categorySection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const categorySection = document.getElementById('shop-by-category');
        if (categorySection) {
          categorySection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const getSuggestions = () => {
    if (searchQuery.length < 2) return [];
    const filtered = searchProducts(searchQuery).slice(0, 5);
    return filtered;
  };

  const cartItemCount = getTotalItems();
  const wishlistItemCount = getTotalWishlistItems();

  return (
    <>
      <header className="bg-white shadow-sm border-b fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between py-2 text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <span>📞 +91 9943691712 / +91 6383791917</span>
              <span>✉️ sivahomeappliances033@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>👤 R C Karthik</span>
              <Link to="/support" className="hover:text-primary">Support</Link>
            </div>
          </div>

          {/* Main header */}
          <div className="flex flex-wrap items-center justify-between py-4 gap-4">
            {/* Logo - Full width on mobile, auto on larger screens */}
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2 mr-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">SE</span>
              </div>
              <span className="text-lg md:text-xl font-bold text-gray-900 whitespace-nowrap">Siva Electronics</span>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center space-x-8">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `font-medium transition-colors ${
                    isActive 
                      ? 'text-primary border-b-2 border-primary pb-1' 
                      : 'hover:text-primary'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/shop" 
                className={({ isActive }) => 
                  `font-medium transition-colors ${
                    isActive 
                      ? 'text-primary border-b-2 border-primary pb-1' 
                      : 'hover:text-primary'
                  }`
                }
              >
                Shop
              </NavLink>
              <NavLink 
                to="/categories" 
                onClick={handleCategoriesClick}
                className={({ isActive }) => 
                  `transition-colors ${
                    isActive 
                      ? 'text-primary border-b-2 border-primary pb-1' 
                      : 'hover:text-primary'
                  }`
                }
              >
                Categories
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `transition-colors ${
                    isActive 
                      ? 'text-primary border-b-2 border-primary pb-1' 
                      : 'hover:text-primary'
                  }`
                }
              >
                About
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `transition-colors ${
                    isActive 
                      ? 'text-primary border-b-2 border-primary pb-1' 
                      : 'hover:text-primary'
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>

            {/* Search bar - Takes available space */}
            <div className="order-last md:order-none w-full md:w-auto md:flex-1 md:max-w-xl mx-0 md:mx-4 relative">
              <form onSubmit={handleSearchSubmit} className="w-full">
                <div className="relative w-full">
                  <Input
                    placeholder="Search for appliances, electronics..."
                    className="pl-10 pr-4 w-full"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onFocus={() => setShowSuggestions(searchQuery.length > 0)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
              </form>
              
              {/* Search Suggestions */}
              {showSuggestions && getSuggestions().length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-50 mt-1">
                  {getSuggestions().map((product) => (
                    <div
                      key={product.id}
                      className="px-4 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                      onClick={() => handleSuggestionClick(product.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white rounded flex items-center justify-center overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.currentTarget.src = '/placeholder.svg';
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{product.name}</p>
                          <p className="text-xs text-gray-500">{product.category} • {product.brand}</p>
                        </div>
                        <span className="text-sm font-medium text-primary">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Wishlist */}
              <Button
                variant="ghost"
                size="sm"
                className="relative"
                onClick={() => navigate("/wishlist")}
              >
                <Heart className="w-5 h-5" />
                {wishlistItemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {wishlistItemCount}
                  </Badge>
                )}
              </Button>

              {/* Cart */}
              <Button
                variant="ghost"
                size="sm"
                className="relative"
                onClick={() => navigate("/cart")}
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {cartItemCount}
                  </Badge>
                )}
              </Button>

              {/* Profile/Login */}
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span className="hidden md:inline">{user?.name}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onClick={() => navigate('/orders')}>
                      <Package className="w-4 h-4 mr-2" />
                      My Orders
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button variant="ghost" size="sm" onClick={handleProfileClick}>
                  <User className="w-5 h-5 mr-2" />
                  Login
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
};

export default Header;