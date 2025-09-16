import PageLayout from '@/components/PageLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Truck, Clock, Package, MapPin, CheckCircle, AlertCircle } from "lucide-react";

const ShippingInfo = () => {
  const shippingOptions = [
    {
      name: "Standard Shipping",
      price: "Free",
      deliveryTime: "4-7 business days",
      icon: <Truck className="h-6 w-6 text-blue-500" />,
      features: [
        "Free on orders over ₹2000",
        "Tracking included",
        "Signature not required",
        "No weekend delivery"
      ]
    },
    {
      name: "Express Shipping",
      price: "₹199",
      deliveryTime: "2-3 business days",
      icon: <Clock className="h-6 w-6 text-green-500" />,
      features: [
        "Guaranteed 3-day delivery",
        "Priority processing",
        "Tracking included",
        "Weekend delivery available"
      ]
    },
    {
      name: "Same Day Delivery",
      price: "₹499",
      deliveryTime: "Same day",
      icon: <Package className="h-6 w-6 text-purple-500" />,
      features: [
        "Order by 12 PM for same-day delivery",
        "Available in metro cities only",
        "Real-time tracking",
        "Signature required"
      ]
    }
  ];

  const deliveryZones = [
    { zone: "Metro Cities (Mumbai, Delhi, Bangalore, etc.)", deliveryTime: "1-2 business days", price: "Free" },
    { zone: "Tier 1 Cities (Pune, Hyderabad, Chennai, etc.)", deliveryTime: "2-3 business days", price: "₹99" },
    { zone: "Tier 2 Cities (Jaipur, Lucknow, Kochi, etc.)", deliveryTime: "3-5 business days", price: "₹199" },
    { zone: "Tier 3 Cities & Towns", deliveryTime: "5-7 business days", price: "₹299" },
    { zone: "Remote Areas & Villages", deliveryTime: "7-10 business days", price: "₹499" }
  ];

  return (
    <PageLayout 
      title="Shipping Information"
      description="Fast, reliable shipping options to get your order to you quickly and securely"
    >
      <div className="space-y-8">
        {/* Shipping Options */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Shipping Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {shippingOptions.map((option, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      {option.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{option.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{option.deliveryTime} • {option.price}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button className="w-full">Select {option.name}</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Order Tracking */}
        <Card>
          <CardHeader>
            <CardTitle>Track Your Order</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-w-2xl">
              <p className="text-muted-foreground">
                Enter your order number and email address to track your package in real-time.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2 space-y-2">
                  <label htmlFor="orderNumber" className="text-sm font-medium">Order Number *</label>
                  <Input id="orderNumber" placeholder="e.g., ORD-123456" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email *</label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>
              <Button>Track Order</Button>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-amber-500" />
                Can't find your order? Check your email for the confirmation or contact our support team.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Delivery Zones */}
        <Card>
          <CardHeader>
            <CardTitle>Delivery Zones & Times</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Delivery Zone</th>
                    <th className="text-left py-3 px-4">Estimated Delivery Time</th>
                    <th className="text-right py-3 px-4">Shipping Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {deliveryZones.map((zone, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">{zone.zone}</td>
                      <td className="py-3 px-4">{zone.deliveryTime}</td>
                      <td className="py-3 px-4 text-right">{zone.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Delivery Area Information
              </h4>
              <p className="text-sm text-muted-foreground">
                We currently deliver to all major cities and towns across India. For remote locations, please contact our customer service team for rates and availability. Some remote areas may have additional delivery charges or longer delivery times.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Delivery Process */}
        <Card>
          <CardHeader>
            <CardTitle>Delivery Process</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h3 className="font-semibold">Order Confirmation</h3>
                <p className="text-sm text-muted-foreground mt-1">You'll receive an order confirmation email with details.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h3 className="font-semibold">Order Processing</h3>
                <p className="text-sm text-muted-foreground mt-1">We prepare your items for shipping (1-2 business days).</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h3 className="font-semibold">Shipped</h3>
                <p className="text-sm text-muted-foreground mt-1">Your order is on its way with tracking information.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">4</span>
                </div>
                <h3 className="font-semibold">Delivered</h3>
                <p className="text-sm text-muted-foreground mt-1">Your order arrives at your doorstep.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Shipping Information */}
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-700 flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Important Shipping Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Signature Requirements</h4>
              <p className="text-sm text-amber-800">
                Orders over ₹5000 require a signature upon delivery. If no one is available, the carrier will leave a notice and attempt redelivery.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Shipping Delays</h4>
              <p className="text-sm text-amber-800">
                During peak seasons or due to weather conditions, some deliveries may experience delays. We appreciate your understanding.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Undeliverable Packages</h4>
              <p className="text-sm text-amber-800">
                Packages that are undeliverable due to incorrect address will be returned to us, and a restocking fee may apply for reshipment.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* International Shipping */}
        <Card>
          <CardHeader>
            <CardTitle>International Shipping</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                We offer international shipping to select countries. International orders may be subject to import taxes, customs duties, and fees which are the responsibility of the customer.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">International Delivery Times</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Canada: 5-10 business days</li>
                    <li>• UK & Europe: 7-14 business days</li>
                    <li>• Australia & New Zealand: 10-15 business days</li>
                    <li>• Asia: 7-21 business days</li>
                    <li>• Rest of World: 10-21 business days</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">International Shipping Fees</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Calculated at checkout based on weight and destination</li>
                    <li>• Includes tracking and insurance</li>
                    <li>• Duties and taxes not included</li>
                    <li>• Free shipping available for orders over ₹20000 to select countries</li>
                  </ul>
                </div>
              </div>
              <Button variant="outline">Contact Us for International Shipping</Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">Siva Electronics And Home Appliances</h3>
                <p className="text-muted-foreground">Your trusted partner for quality home appliances</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Address
                </h4>
                <p className="text-sm">
                  OPP. TO 21, J.K.PLAZA,<br />
                  PALLIPAT MAIN ROAD,<br />
                  PODHATUR PETTAI,<br />
                  Tiruvallur, Tamil Nadu - 631208
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Contact Numbers
                </h4>
                <div className="space-y-1 text-sm">
                  <p>+91 9943691712</p>
                  <p>+91 6383791917</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Email
                </h4>
                <a href="mailto:sivahomeappliances033@gmail.com" className="text-sm text-primary hover:underline">
                  sivahomeappliances033@gmail.com
                </a>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Contact Person</h4>
                <p className="text-sm">R C Karthik</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default ShippingInfo;
