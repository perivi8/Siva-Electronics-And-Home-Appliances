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
            Last updated: September 16, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Appliance Bright. These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms and our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Account Registration</h2>
            <p className="mb-4">
              To access certain features of our website, you may be required to create an account. You agree to provide accurate and complete information and to keep this information current. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Products and Pricing</h2>
            <p className="mb-4">
              We make every effort to display our products and their prices as accurately as possible. However, we cannot guarantee that your device's display will be accurate. We reserve the right to modify prices at any time without notice. All prices are in Indian Rupees (₹) unless otherwise stated.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Orders and Payment</h2>
            <p className="mb-4">
              All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, including errors in product descriptions or pricing. Payment must be received before we can process and ship your order.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Shipping and Delivery</h2>
            <p className="mb-4">
              We will make every effort to deliver products within the estimated delivery times. However, delivery times are estimates only and cannot be guaranteed. We are not liable for any delays in delivery that are beyond our reasonable control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Returns and Refunds</h2>
            <p className="mb-4">
              Please refer to our <Link to="/return-policy" className="text-accent hover:underline">Return Policy</Link> for detailed information about returns and refunds. We accept returns within 7 days of delivery for most items, provided they are in their original condition and packaging.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
            <p className="mb-4">
              All content on this website, including text, graphics, logos, images, and software, is the property of Appliance Bright or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">
              To the fullest extent permitted by law, Appliance Bright shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Your access to or use of or inability to access or use the services</li>
              <li>Any conduct or content of any third party on the services</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              <li>Any other matter relating to the services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the website after such modifications constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mt-2">
              Email: legal@appliancebright.com<br />
              Phone: +91 12345 67890<br />
              Address: 123 Appliance Street, Mumbai, Maharashtra 400001, India
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
