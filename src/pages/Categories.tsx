import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import CategoryGrid from "@/components/CategoryGrid";

const Categories = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const categoryGridRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (categoryName: string) => {
    navigate(`/shop?category=${encodeURIComponent(categoryName)}`);
  };

  const categories = [
    {
      name: "Kitchen Appliances",
      description: "Refrigerators, Ovens, Dishwashers, and more",
      image: "/src/assets/category-appliances.jpg",
      productCount: 45
    },
    {
      name: "Electronics",
      description: "Smartphones, Laptops, Tablets, and accessories",
      image: "/src/assets/category-electronics.jpg",
      productCount: 32
    },
    {
      name: "TV & Audio",
      description: "Smart TVs, Sound Systems, and entertainment",
      image: "/src/assets/category-tv.jpg",
      productCount: 28
    },
    {
      name: "Home & Garden",
      description: "Vacuum cleaners, Air conditioners, and outdoor equipment",
      image: "/src/assets/category-appliances.jpg",
      productCount: 38
    },
    {
      name: "Small Appliances",
      description: "Coffee makers, Blenders, Toasters, and kitchen gadgets",
      image: "/src/assets/category-electronics.jpg",
      productCount: 52
    },
    {
      name: "Gaming",
      description: "Gaming consoles, Accessories, and entertainment systems",
      image: "/src/assets/category-tv.jpg",
      productCount: 24
    }
  ];

  useEffect(() => {
    // Scroll to category grid when component mounts or when location changes
    if (categoryGridRef.current) {
      window.scrollTo({
        top: categoryGridRef.current.offsetTop - 100, // Offset for header
        behavior: "smooth"
      });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Shop by Category</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through our wide range of product categories to find exactly what you're looking for.
            </p>
          </div>
          
          <div ref={categoryGridRef}>
            <CategoryGrid />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
