import PageLayout from '@/components/PageLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Import brand logos
import sLogo from '@/assets/s.jpg';
import qLogo from '@/assets/q.jpg';
import pLogo from '@/assets/p.png';
import rLogo from '@/assets/r.jpg';
import tLogo from '@/assets/t.jpg';
import uLogo from '@/assets/u.jpg';

const Brands = () => {
  const brands = [
    { 
      name: 'Samsung', 
      logo: pLogo, 
      products: 42,
      description: 'Innovative technology for modern living'
    },
    { 
      name: 'LG', 
      logo: qLogo, 
      products: 35,
      description: 'Life\'s good with smart home solutions'
    },
    { 
      name: 'Sony', 
      logo: rLogo, 
      products: 28,
      description: 'Make. Believe. Premium electronics'
    },
    { 
      name: 'Whirlpool', 
      logo: sLogo, 
      products: 31,
      description: 'Every day, care'
    },
    { 
      name: 'Panasonic', 
      logo: tLogo, 
      products: 24,
      description: 'A Better Life, A Better World'
    },
    { 
      name: 'Bosch', 
      logo: uLogo, 
      products: 19,
      description: 'Invented for life'
    },
  ];

  return (
    <PageLayout 
      title="Our Trusted Brands"
      description="Explore products from our trusted brand partners offering quality and innovation."
    >
      <div className="space-y-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                <div className="w-32 h-32 mb-4 flex items-center justify-center p-2">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-1">{brand.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{brand.products} products</p>
                <p className="text-xs text-muted-foreground mt-auto">{brand.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center pt-8 border-t">
          <h2 className="text-2xl font-bold mb-4">Looking for a specific brand?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always adding new brands to our collection. Let us know if you're looking for something specific!
          </p>
          <Button>Contact Us</Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Brands;
