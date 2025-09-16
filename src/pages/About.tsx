import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-32">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Appliance Bright</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted destination for premium home appliances and electronics in India. 
            We bring you the latest technology from top brands with exceptional service and nationwide delivery.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Appliance Bright has been revolutionizing homes across India with cutting-edge appliances and electronics. 
              From kitchen essentials to home comfort solutions, we've built our reputation on quality, reliability, and customer satisfaction.
            </p>
            <p className="text-gray-600 mb-4">
              We partner with leading brands like Samsung, LG, Sony, Whirlpool, Bosch, Panasonic, and many more to bring you 
              the finest selection of refrigerators, washing machines, air conditioners, televisions, and kitchen appliances. 
              Every product is carefully selected to meet our high standards for performance and durability.
            </p>
            <p className="text-gray-600">
              Our commitment extends beyond just selling appliances. We provide comprehensive installation services, 
              warranty support, and after-sales service to ensure your complete satisfaction with every purchase.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold">Making Homes</h3>
              <p className="text-gray-600">Smart & Comfortable</p>
            </div>
          </div>
        </div>

        {/* Product Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold mb-2">Home Appliances</h3>
                <p className="text-gray-600">
                  Air conditioners, washing machines, water purifiers, ceiling fans, and vacuum cleaners for modern living.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🍳</div>
                <h3 className="text-xl font-bold mb-2">Kitchen Appliances</h3>
                <p className="text-gray-600">
                  Refrigerators, microwaves, OTG ovens, induction cooktops, air fryers, and mixer grinders for your culinary needs.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">📺</div>
                <h3 className="text-xl font-bold mb-2">Electronics</h3>
                <p className="text-gray-600">
                  Smart TVs, QLED displays, Android TVs with the latest technology for entertainment and connectivity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-xl font-bold mb-2">Premium Brands</h3>
                <p className="text-gray-600">
                  Samsung, LG, Sony, Whirlpool, Bosch, and other trusted brands.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="text-xl font-bold mb-2">Pan-India Delivery</h3>
                <p className="text-gray-600">
                  Fast and secure delivery across metro cities and remote areas.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold mb-2">Installation Service</h3>
                <p className="text-gray-600">
                  Professional installation by authorized technicians.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-2">Warranty Support</h3>
                <p className="text-gray-600">
                  Comprehensive warranty coverage and after-sales service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24+</div>
              <p className="text-gray-600">Product Categories</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <p className="text-gray-600">Premium Brands</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-gray-600">Customer Support</p>
            </div>
          </div>
        </div>

        {/* Featured Brands */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Brand Partners</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {[
              "Samsung", "LG", "Sony", "Whirlpool", "Bosch", "Panasonic", 
              "Bajaj", "Prestige", "Philips", "Godrej", "IFB", "Mi",
              "Blue Star", "Haier", "TCL", "Crompton", "Kent", "Morphy Richards",
              "Havells", "Carrier", "Pigeon", "Eureka Forbes", "Voltas"
            ].slice(0, 12).map((brand, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <p className="font-semibold text-gray-700">{brand}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions about our products or need assistance? Our expert team is here to help you find the perfect appliance for your home.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl mb-2">📞</div>
              <p className="font-semibold">Call Us</p>
              <p className="text-gray-600">+91 12345 67890</p>
            </div>
            <div>
              <div className="text-2xl mb-2">📧</div>
              <p className="font-semibold">Email Us</p>
              <p className="text-gray-600">support@appliancebright.com</p>
            </div>
            <div>
              <div className="text-2xl mb-2">📍</div>
              <p className="font-semibold">Visit Us</p>
              <p className="text-gray-600">Mumbai, Maharashtra</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
