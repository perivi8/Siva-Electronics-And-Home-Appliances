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
          <p className="text-lg font-semibold text-accent mb-6">
            Safe, Reliable, and On-Time Delivery of Your Appliances
          </p>

          <p className="mb-8">
            At Appliance Bright, we are committed to delivering your home appliances and electronics securely and within the promised time frame. This Shipping Policy outlines our procedures for order processing, delivery, charges, and customer support.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Order Processing Time</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Orders are processed within 2–4 business days after payment confirmation.</li>
              <li>Orders placed on Sundays or public holidays are processed on the next working day.</li>
              <li>In the case of high-demand or out-of-stock products, customers will be notified with revised timelines or offered alternatives.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Shipping Destinations & Delivery Timelines</h2>
            <h3 className="text-lg font-semibold mb-3">Domestic Shipping (India)</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Metro Cities:</strong> 3–7 business days after dispatch</li>
              <li><strong>Non-Metro Cities:</strong> 5–10 business days after dispatch</li>
              <li><strong>Remote/Rural Areas:</strong> 7–12 business days after dispatch</li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-3">International Shipping</h3>
            <p className="mb-4">At present, international shipping is not available. If launched in the future, timelines and charges will be updated accordingly.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Shipping Charges</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Shipping charges vary based on product category, weight, dimensions, and destination.</li>
              <li>Large appliances (e.g., refrigerators, washing machines, air conditioners) may incur special handling charges due to size and logistics.</li>
              <li>Free shipping offers may be available during promotions or for orders above a certain value.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Packaging & Handling</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All appliances are packed in manufacturer-approved packaging to ensure safe transit.</li>
              <li>Fragile items (televisions, glass panels, electronics) are double-cushioned and clearly labeled.</li>
              <li>Customers are advised to check packaging at the time of delivery. If tampering or damage is visible, the delivery should be reported immediately.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Tracking Your Order</h2>
            <p className="mb-4">Once dispatched, you will receive:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>A tracking number via SMS/email</li>
              <li>A tracking link for real-time shipment updates</li>
            </ul>
            <p className="text-sm text-muted-foreground">Please allow 24–48 hours for tracking details to update after dispatch.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Installation & Assembly</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>For select appliances, installation/assembly is included and carried out by authorized technicians.</li>
              <li>Installation timelines may differ from delivery timelines, depending on technician availability.</li>
              <li>Customers will be informed at checkout whether installation is included or charged separately.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Delays & Exceptions</h2>
            <p className="mb-4">While we strive for prompt delivery, delays may occur due to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Courier/logistics disruptions</li>
              <li>Regional holidays or strikes</li>
              <li>Extreme weather or natural calamities</li>
              <li>Customer unavailability at the time of delivery</li>
            </ul>
            <p>In such cases, our support team will keep you informed and assist with rescheduling.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Need Help With Shipping?</h2>
            <p className="mb-4">For shipping-related questions, please contact:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold">Appliance Bright</p>
              <p> 123 Appliance Street, Mumbai, Maharashtra 400001, India</p>
              <p> +91 12345 67890</p>
              <p> Email: support@appliancebright.com</p>
              <p> Website: www.appliancebright.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
