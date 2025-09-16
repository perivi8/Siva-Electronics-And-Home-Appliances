import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, Heart, Share2, Minus, Plus } from 'lucide-react';
import { getProductById, products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();

  const product = id ? getProductById(id) : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-background pt-32">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Button onClick={() => navigate('/shop')}>Back to Shop</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast({
        title: "Login Required",
        description: "Please login to add items to your cart",
        variant: "destructive",
      });
      return;
    }

    addToCart(product, quantity);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  const handleAddToWishlist = () => {
    if (!isAuthenticated) {
      toast({
        title: "Login Required",
        description: "Please login to add items to your wishlist",
        variant: "destructive",
      });
      return;
    }

    if (!product) return;

    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from Wishlist",
        description: `${product.name} has been removed from your wishlist`,
      });
    } else {
      addToWishlist(product.id);
      toast({
        title: "Added to Wishlist",
        description: `${product.name} has been added to your wishlist`,
      });
    }
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

  // Product-specific images based on product ID
  const getProductImages = () => {
    if (product.subImages && product.subImages.length > 0) {
      return [product.image, ...product.subImages];
    }
    // Fallback: use main image repeated if no sub-images are available
    return [
      product.image,
      product.image,
      product.image,
      product.image
    ];
  };

  const productImages = getProductImages();

  // Generate a random discount between 5% and 25% (in multiples of 5)
  const getRandomDiscount = () => {
    const discounts = [5, 10, 15, 20, 25];
    return discounts[Math.floor(Math.random() * discounts.length)];
  };

  const discount = getRandomDiscount();
  const originalPrice = product.price;
  const discountedPrice = Math.round(originalPrice * (1 - discount / 100));

  // Get related products (excluding current product)
  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background pt-32">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <span className="text-gray-500 cursor-pointer" onClick={() => navigate('/')}>Home</span>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-500 cursor-pointer" onClick={() => navigate('/shop')}>Shop</span>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-500 cursor-pointer" onClick={() => navigate('/categories')}>
            {product.category}
          </span>
          <span className="mx-2 text-gray-500">/</span>
          <span className="font-medium">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-white rounded-xl overflow-hidden mb-4 relative">
              <div className="absolute top-3 left-3 z-10">
                <div className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
                  {discount}% OFF
                </div>
              </div>
              <img 
                src={productImages[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-contain p-4"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  className={`aspect-square w-full bg-white rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index 
                      ? 'border-primary scale-105' 
                      : 'border-transparent hover:border-gray-200 hover:scale-100'
                  }`}
                  onClick={() => {
                    setSelectedImage(index);
                  }}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-2">{product.category}</Badge>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-primary">
                  {formatPrice(discountedPrice)}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  {formatPrice(originalPrice)}
                </span>
                <span className="bg-red-100 text-red-600 text-sm font-medium px-2 py-0.5 rounded">
                  {discount}% OFF
                </span>
              </div>
              <p className="text-sm text-gray-600">Inclusive of all taxes • Free delivery available</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Description</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button 
                  className="flex-1" 
                  size="lg"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" onClick={handleAddToWishlist}>
                  <Heart className={`w-5 h-5 ${product && isInWishlist(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Product Features */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Brand: {product.brand}</li>
                  <li>• Category: {product.category}</li>
                  <li>• Rating: {product.rating}/5 stars</li>
                  <li>• Customer Reviews: {product.reviews}</li>
                  <li>• Free Installation Available</li>
                  <li>• 1 Year Manufacturer Warranty</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information Tabs */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Specifications</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Brand:</span>
                  <span>{product.brand}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span>{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Warranty:</span>
                  <span>1 Year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Installation:</span>
                  <span>Available</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Delivery & Returns</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Free delivery in 5-7 business days</p>
                <p>• Express delivery available</p>
                <p>• 30-day return policy</p>
                <p>• Easy exchange process</p>
                <p>• Installation service available</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Customer Support</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• 24/7 customer support</p>
                <p>• Live chat assistance</p>
                <p>• Phone support available</p>
                <p>• Email support</p>
                <p>• Service center network</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => {
                const relatedDiscount = getRandomDiscount();
                const relatedOriginalPrice = relatedProduct.price;
                const relatedDiscountedPrice = Math.round(relatedOriginalPrice * (1 - relatedDiscount / 100));
                
                return (
                  <Card 
                    key={relatedProduct.id}
                    className="cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => navigate(`/product/${relatedProduct.id}`)}
                  >
                    <div className="relative">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-48 object-contain p-4"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                      <div className="absolute top-2 left-2">
                        <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          {relatedDiscount}% OFF
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-sm md:text-base line-clamp-2 h-10">
                        {relatedProduct.name}
                      </h3>
                      <div className="mt-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-primary">
                            {formatPrice(relatedDiscountedPrice)}
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            {formatPrice(relatedOriginalPrice)}
                          </span>
                        </div>
                        <div className="flex items-center mt-1">
                          {renderStars(relatedProduct.rating)}
                          <span className="text-xs text-gray-500 ml-1">({relatedProduct.reviews})</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
