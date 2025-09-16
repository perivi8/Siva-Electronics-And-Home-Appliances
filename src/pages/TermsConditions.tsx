import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsConditions = () => {
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
          <h1 className="text-3xl font-bold">Terms & Conditions</h1>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-8">
            Last Updated: August 2025
          </p>

          <p className="mb-6">
            Welcome to Siva Electronics. By accessing our website, purchasing our products, or booking our services, you agree to the following Terms & Conditions. These terms govern all sales, services, warranties, and interactions with Siva Electronics.
          </p>

          <p className="mb-8 font-medium text-amber-600">
            If you do not agree with these terms, we recommend you discontinue use of our services.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. General Use of Website & Services</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>By using our services, you confirm that you are at least 18 years old or using under the supervision of a parent/guardian.</li>
              <li>You agree to provide accurate, complete details when placing orders or booking services.</li>
              <li>Any misuse, fraudulent activity, or violation of these terms may result in suspension of service.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Products & Pricing</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>We offer a wide range of home appliances and electronics, including but not limited to refrigerators, washing machines, air conditioners, televisions, and small appliances.</li>
              <li>Product descriptions and specifications are displayed as accurately as possible. Minor differences (e.g., design/color variations due to lighting or screen settings) may occur.</li>
              <li>Prices are listed in Indian Rupees (INR ₹) and may change due to market fluctuations or policy updates without prior notice.</li>
              <li>We reserve the right to correct errors in product listings, descriptions, or pricing, even after orders are placed.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Orders & Payments</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Orders are confirmed only upon successful payment.</li>
              <li>We accept payments via UPI, debit/credit cards, net banking, wallets, and EMI (if applicable).</li>
              <li>We do not store payment details; transactions are processed securely by verified third-party gateways.</li>
              <li>In case of payment errors, duplicates, or discrepancies, please contact our support team immediately.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Shipping & Delivery</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>We ship products across India using trusted courier/logistics providers.</li>
              <li>Estimated delivery times are provided at checkout but may vary depending on location and product availability.</li>
              <li>Tracking details will be shared once an order is dispatched.</li>
              <li>Appliance Bright is not liable for delivery delays caused by third-party logistics, weather, or unforeseen events.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Installation, Warranty & Service</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Select products include installation services, which may be provided by Appliance Bright or the manufacturer's authorized team.</li>
              <li>Warranty terms vary by product and manufacturer and will be communicated at the time of purchase.</li>
              <li>Warranty does not cover damage due to misuse, improper installation (if done by non-authorized personnel), or unauthorized repairs.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Cancellations & Returns</h2>
            <p className="mb-4">Orders may be cancelled within 2 hours of purchase, provided the product has not yet been shipped.</p>
            <p className="mb-2">Returns are accepted only for:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Damaged products received</li>
              <li>Incorrect products shipped</li>
              <li>Verified manufacturing defects</li>
            </ul>
            <p>For detailed procedures, refer to our <Link to="/cancellation-refund" className="text-accent hover:underline">Cancellation & Refund Policy</Link>.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. User Responsibilities</h2>
            <p className="mb-2">By engaging with Appliance Bright, you agree not to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide false or misleading order/service information</li>
              <li>Tamper with products or misuse warranty claims</li>
              <li>Copy, reproduce, or misuse our content, branding, or trademarks</li>
              <li>Circumvent our payment or order systems for fraudulent purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
            <p className="mb-4">
              All content on our website—including product images, descriptions, logos, and branding—is the intellectual property of Appliance Bright. Unauthorized reproduction or commercial use is prohibited.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
            <p className="mb-2">Appliance Bright is not liable for:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Indirect or incidental damages arising from product use</li>
              <li>Delays in delivery or installation caused by third parties</li>
              <li>Product issues resulting from misuse, neglect, or unauthorized alterations</li>
            </ul>
            <p className="mb-4">Our liability is limited to the value of the product/service purchased.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Governing Law & Jurisdiction</h2>
            <p className="mb-4">
              These Terms & Conditions are governed by the laws of India. Any disputes will fall under the jurisdiction of the courts in Tiruvallur, Tamil Nadu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
            <p className="mb-4">For queries, assistance, or clarifications, please contact:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold">Siva Electronics</p>
              <p>📍 OPP. TO 21, J.K.PLAZA, PALLIPAT MAIN ROAD, PODHATUR PETTAI, Tiruvallur, Tamil Nadu, 631208</p>
              <p>📞 +91 9943691712 / +91 6383791917</p>
              <p>📧 Email: contact@sivaappliances.shop</p>
              <p>🌐 Website: http://sivaappliances.shop/</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
