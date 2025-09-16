import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { products, searchProducts, getProductsByCategory } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useToast } from "@/hooks/use-toast";

const Shop = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();

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

  // Get unique brands from products
  const getUniqueBrands = () => {
    const brands = [...new Set(products.map(product => product.brand))];
    return brands.sort();
  };

  // Initialize state from URL parameters
  useEffect(() => {
    const page = parseInt(searchParams.get('page') || '1');
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category') || 'all';
    const brand = searchParams.get('brand') || 'all';
    const rating = searchParams.get('rating') || 'all';
    const sort = searchParams.get('sort') || 'featured';
    
    setCurrentPage(page);
    setSearchQuery(search);
    setSelectedCategory(category);
    setSelectedBrand(brand);
    setSelectedRating(rating);
    setSortBy(sort);
  }, [searchParams]);

  // Filter and sort products
  const getFilteredProducts = () => {
    let filteredProducts = [...products];

    // Apply search filter
    if (searchQuery) {
      filteredProducts = searchProducts(searchQuery);
    }

    // Apply category filter
    if (selectedCategory !== "all") {
      filteredProducts = filteredProducts.filter(product => {
        const productCategory = product.category.toLowerCase();
        const selectedCat = selectedCategory.toLowerCase();
        const productName = product.name.toLowerCase();

        // First check for exact category match
        if (productCategory === selectedCat) {
          return true;
        }
        
        // Handle specific subcategory mappings
        switch (selectedCategory) {
          case "TV":
            return productCategory.includes("electronics") && 
                  (productName.includes("tv") || productName.includes("television"));
          case "Refrigerator":
            return productCategory.includes("kitchen") && 
                  (productName.includes("refrigerator") || productName.includes("fridge"));
          case "Washing Machine":
            return productCategory.includes("home") && 
                  productName.includes("washing machine");
          case "Air Conditioner":
            // More specific matching for air conditioners
            return (productCategory.includes("home") || productCategory.includes("appliances")) && 
                  (productName.includes("split ac") || 
                   productName.includes("window ac") ||
                   (productName.includes("ac ") && 
                    !productName.includes("mac ") && // Exclude products with 'mac' in name
                    !productName.includes("pack ") && // Exclude products with 'pack' in name
                    !productName.includes("back ") && // Exclude products with 'back' in name
                    !productName.includes("black ") && // Exclude products with 'black' in name
                    !productName.includes("jack ") // Exclude products with 'jack' in name
                   ) ||
                   (productName.includes("air conditioner") && 
                    !productName.includes("air conditioner cover") &&
                    !productName.includes("air conditioner stand")
                   )
                  );
          case "Microwave":
            return productCategory.includes("kitchen") && 
                  (productName.includes("microwave") || productName.includes("otg") || 
                   productName.includes("oven"));
          case "Water Purifier":
            return productCategory.includes("kitchen") && 
                  (productName.includes("water purifier") || productName.includes("purifier"));
          case "Small Appliances":
            return productCategory.includes("kitchen") && 
                  (productName.includes("kettle") || productName.includes("mixer") || 
                   productName.includes("grinder") || productName.includes("air fryer") || 
                   productName.includes("induction") || productName.includes("fan") || 
                   productName.includes("vacuum"));
          default:
            // Fallback to partial matching if no specific case matches
            return productCategory.includes(selectedCat) || 
                  selectedCat.includes(productCategory);
        }
      });
    }

    // Apply brand filter
    if (selectedBrand !== "all") {
      filteredProducts = filteredProducts.filter(product => 
        product.brand.toLowerCase() === selectedBrand.toLowerCase()
      );
    }

    // Apply rating filter
    if (selectedRating !== "all") {
      const minRating = parseFloat(selectedRating);
      filteredProducts = filteredProducts.filter(product => 
        product.rating >= minRating
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filteredProducts.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      case "rating":
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filteredProducts;
  };

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
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

  const filteredProducts = getFilteredProducts();
  
  // Pagination calculations
  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Update URL when filters change and reset to page 1
  const updateURL = (newPage: number, newSearch?: string, newCategory?: string, newBrand?: string, newRating?: string, newSort?: string) => {
    const params = new URLSearchParams();
    params.set('page', newPage.toString());
    if (newSearch !== undefined) params.set('search', newSearch);
    else if (searchQuery) params.set('search', searchQuery);
    if (newCategory !== undefined) params.set('category', newCategory);
    else if (selectedCategory !== 'all') params.set('category', selectedCategory);
    if (newBrand !== undefined) params.set('brand', newBrand);
    else if (selectedBrand !== 'all') params.set('brand', selectedBrand);
    if (newRating !== undefined) params.set('rating', newRating);
    else if (selectedRating !== 'all') params.set('rating', selectedRating);
    if (newSort !== undefined) params.set('sort', newSort);
    else if (sortBy !== 'featured') params.set('sort', sortBy);
    
    setSearchParams(params);
  };

  // Reset to page 1 when filters change
  useEffect(() => {
    if (currentPage !== 1) {
      updateURL(1);
    }
  }, [searchQuery, selectedCategory, selectedBrand, selectedRating, sortBy]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      updateURL(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    updateURL(1, value);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    updateURL(1, undefined, value);
  };

  const handleBrandChange = (value: string) => {
    setSelectedBrand(value);
    updateURL(1, undefined, undefined, value);
  };

  const handleRatingChange = (value: string) => {
    setSelectedRating(value);
    updateURL(1, undefined, undefined, undefined, value);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    updateURL(1, undefined, undefined, undefined, undefined, value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-28 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Page header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Shop All Products</h1>
            <p className="text-gray-600 mb-6">Discover our complete range of appliances and electronics</p>
            
            {/* Filters and Search */}
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <Input 
                placeholder="Search products..." 
                className="lg:w-1/5"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
              />
              <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                <SelectTrigger className="lg:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Electronics">Electronics</SelectItem>
                  <SelectItem value="Home Appliances">Home Appliances</SelectItem>
                  <SelectItem value="Kitchen Appliances">Kitchen Appliances</SelectItem>
                  <SelectItem value="TV">TVs & Entertainment</SelectItem>
                  <SelectItem value="Refrigerator">Refrigerators</SelectItem>
                  <SelectItem value="Washing Machine">Washing Machines</SelectItem>
                  <SelectItem value="Air Conditioner">Air Conditioners</SelectItem>
                  <SelectItem value="Microwave">Microwaves & OTG</SelectItem>
                  <SelectItem value="Water Purifier">Water Purifiers</SelectItem>
                  <SelectItem value="Small Appliances">Small Appliances</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedBrand} onValueChange={handleBrandChange}>
                <SelectTrigger className="lg:w-48">
                  <SelectValue placeholder="Brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Brands</SelectItem>
                  {getUniqueBrands().map((brand) => (
                    <SelectItem key={brand} value={brand.toLowerCase()}>
                      {brand}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedRating} onValueChange={handleRatingChange}>
                <SelectTrigger className="lg:w-48">
                  <SelectValue placeholder="Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ratings</SelectItem>
                  <SelectItem value="4.5">4.5★ & up</SelectItem>
                  <SelectItem value="4.0">4.0★ & up</SelectItem>
                  <SelectItem value="3.5">3.5★ & up</SelectItem>
                  <SelectItem value="3.0">3.0★ & up</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={handleSortChange}>
                <SelectTrigger className="lg:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results count and pagination info */}
          <div className="mb-6 flex justify-between items-center">
            <p className="text-gray-600">
              Showing {startIndex + 1}-{Math.min(endIndex, totalProducts)} of {totalProducts} product{totalProducts !== 1 ? 's' : ''}
              {searchQuery && ` for "${searchQuery}"`}
              {selectedCategory !== "all" && ` in ${selectedCategory}`}
              {selectedBrand !== "all" && ` from ${selectedBrand}`}
              {selectedRating !== "all" && ` with ${selectedRating}+ stars`}
            </p>
            {totalPages > 1 && (
              <p className="text-sm text-gray-500">
                Page {currentPage} of {totalPages}
              </p>
            )}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <Card 
                key={product.id} 
                className="hover:shadow-lg transition-shadow cursor-pointer group flex flex-col h-full relative"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                {/* Wishlist Heart - Top Right */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white rounded-full w-8 h-8"
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
                </CardHeader>
                
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{product.category}</Badge>
                    {parseInt(product.id) > products.length - 8 && (
                      <Badge className="bg-green-500">New</Badge>
                    )}
                  </div>
                  
                  <h3 className="font-semibold mb-1 line-clamp-2 h-12">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2 min-h-[2.5rem]">
                      {product.description}
                    </p>
                    <Button 
                      className="w-full"
                      onClick={(e) => handleAddToCart(e, product)}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No results message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search or filter criteria
              </p>
              <Button onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedBrand("all");
                setSelectedRating("all");
                setSortBy("featured");
                updateURL(1, "", "all", "all", "all", "featured");
              }}>
                Clear Filters
              </Button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 mb-20">
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>
                
                {[1, 2, 3].map((pageNum) => (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    onClick={() => handlePageChange(pageNum)}
                    className="min-w-[40px]"
                    disabled={pageNum > totalPages}
                    style={{ 
                      opacity: pageNum > totalPages ? 0.3 : 1,
                      cursor: pageNum > totalPages ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {pageNum}
                  </Button>
                ))}
                
                {currentPage > 3 && (
                  <>
                    <span className="px-2 text-gray-500">...</span>
                    <Button
                      variant="default"
                      onClick={() => handlePageChange(currentPage)}
                      className="min-w-[40px]"
                    >
                      {currentPage}
                    </Button>
                  </>
                )}
                
                <Button 
                  variant="outline" 
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-2"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
