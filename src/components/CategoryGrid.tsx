import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

// Import new category images
import catA from "@/assets/a.jpg";
import catB from "@/assets/b.jpg";
import catC from "@/assets/c.jpg";
import catD from "@/assets/d.jpg";
import catE from "@/assets/e.jpg";
import catF from "@/assets/f.jpg";

const categories = [
  {
    id: "Electronics",
    name: "Electronics",
    description: "Laptops, Smartphones, Tablets & More",
    image: catA,
    productCount: "250+ Products",
  },
  {
    id: "Home Appliances",
    name: "Home Appliances",
    description: "Refrigerators, Washing Machines, Microwaves",
    image: catB,
    productCount: "180+ Products",
  },
  {
    id: "Kitchen Appliances",
    name: "Kitchen Appliances",
    description: "Mixer Grinders, OTG, Microwave Ovens",
    image: catC,
    productCount: "120+ Products",
  },
  {
    id: "TV",
    name: "TVs & Entertainment",
    description: "Smart TVs, LED TVs, Sound Systems",
    image: catD,
    productCount: "50+ Products",
  },
  {
    id: "Refrigerator",
    name: "Refrigerators",
    description: "Single Door, Double Door, Side by Side",
    image: catE,
    productCount: "40+ Products",
  },
  {
    id: "Air Conditioner",
    name: "Air Conditioners",
    description: "Split AC, Window AC, Inverter AC",
    image: catF,
    productCount: "35+ Products",
  },
];

const CategoryGrid = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/shop?category=${encodeURIComponent(categoryId)}`);
  };

  const handleViewAllCategories = () => {
    navigate('/shop');
  };

  return (
    <section id="shop-by-category" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated categories featuring the latest technology 
            and premium appliances for your modern lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className="group relative overflow-hidden bg-card shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-105 cursor-pointer"
              onClick={() => handleCategoryClick(category.id)}
            >
              <CardContent className="p-0">
                {/* Category Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  
                  {/* Product Count Badge */}
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {category.productCount}
                  </div>
                </div>

                {/* Category Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-white/90 mb-4">
                    {category.description}
                  </p>
                  
                  <Button 
                    variant="hero" 
                    className="group/btn opacity-90 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCategoryClick(category.id);
                    }}
                  >
                    Browse Category
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="group"
            onClick={handleViewAllCategories}
          >
            View All Categories
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;