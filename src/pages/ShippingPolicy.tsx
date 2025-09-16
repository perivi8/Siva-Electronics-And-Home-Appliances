import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ShippingPolicy = () => {
  const navigate = useNavigate();
  
  return (
    <div className="pt-12">
      <div className="container mx-auto px-4 py-4 max-w-4xl">
        <div className="mb-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="mb-3"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Back
          </Button>
          <h1 className="text-3xl font-bold">Shipping Policy</h1>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: September 16, 2024
          </p>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">1. Shipping Destinations</h2>
            <p className="mb-3">
              We currently ship to all major cities and towns across India. For remote locations, additional shipping charges may apply. Please check your delivery address during checkout to confirm service availability.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">2. Processing Time</h2>
            <p className="mb-3">
              All orders are processed within 1-2 business days (excluding weekends and public holidays) after receiving your order confirmation email. You will receive an email with tracking information once your order has been shipped.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">3. Delivery Timeframes</h2>
            <p className="mb-3">
              Delivery times may vary depending on your location and the shipping method selected at checkout. Standard delivery times are as follows:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-2">
              <li><strong>Metro Cities:</strong> 2-4 business days</li>
              <li><strong>Other Major Cities:</strong> 3-6 business days</li>
              <li><strong>Tier 2 & 3 Cities:</strong> 4-8 business days</li>
              <li><strong>Remote Areas:</strong> 7-12 business days</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              *These are estimated delivery times and may vary due to circumstances beyond our control such as weather conditions, transportation delays, or customs clearance.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">4. Shipping Methods & Rates</h2>
            <p className="mb-3">
              We offer the following shipping options:
            </p>
            <div className="bg-muted/30 p-4 rounded-lg mb-3">
              <h3 className="font-semibold text-lg mb-2">Standard Shipping (3-7 business days)</h3>
              <p>Free on orders above ₹2,999 | ₹99 for orders below ₹2,999</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg mb-3">
              <h3 className="font-semibold text-lg mb-2">Express Shipping (1-3 business days)</h3>
              <p>Flat ₹199 for all orders</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Same Day Delivery (Select Pincodes)</h3>
              <p>Available in select areas for ₹299. Order before 12 PM for same day delivery.</p>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">5. Order Tracking</h2>
            <p className="mb-3">
              Once your order has been shipped, you will receive a shipping confirmation email with a tracking number and a link to track your package. You can also track your order by logging into your account on our website.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">6. Failed Deliveries</h2>
            <p className="mb-3">
              If a delivery attempt is unsuccessful due to an incorrect address, recipient not available, or refusal to accept the package, the package will be returned to our facility. Additional shipping fees will apply for re-delivery.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">7. Damaged or Lost Shipments</h2>
            <p className="mb-3">
              While we take great care in packaging your orders, if you receive a damaged package, please contact our customer service within 48 hours of delivery. For lost shipments, please allow 7 business days from the expected delivery date before reporting.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">8. International Shipping</h2>
            <p className="mb-3">
              We currently do not offer international shipping. We only ship within India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Contact Us</h2>
            <p className="mb-2">
              If you have any questions about our shipping policy, please contact our customer service team:
            </p>
            <p className="mt-2">
              Email: shipping@appliancebright.com<br />
              Phone: +91 98765 43210 (10 AM - 7 PM, Monday to Saturday)<br />
              Live Chat: Available on our website during business hours
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              *Our customer service team will respond to all inquiries within 24-48 business hours.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
