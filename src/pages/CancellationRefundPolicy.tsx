import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const CancellationRefundPolicy = () => {
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
          <h1 className="text-3xl font-bold">Cancellation & Refund Policy</h1>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: September 16, 2024
          </p>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">1. Order Cancellation</h2>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">1.1 Before Shipment</h3>
              <p>
                You may cancel your order within 24 hours of placing it, provided the order has not yet been shipped. To cancel your order:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Go to 'My Orders' in your account</li>
                <li>Select the order you wish to cancel</li>
                <li>Click on 'Cancel Order' and follow the prompts</li>
                <li>You will receive a confirmation email once cancellation is processed</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-6">1.2 After Shipment</h3>
              <p>
                If your order has already been shipped, you may still be able to cancel it if you act quickly. Please contact our customer service immediately at <a href="mailto:support@appliancebright.com" className="text-accent hover:underline">support@appliancebright.com</a> or call us at +91 98765 43210.
              </p>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">2. Returns Policy</h2>
            <div className="space-y-4">
              <p>
                We accept returns within 7 days of delivery for most items, provided they are in their original condition with all tags and packaging intact. Some products may have different return policies as specified on their product pages.
              </p>
              
              <h3 className="text-lg font-semibold">2.1 Items Eligible for Return</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Products with manufacturing defects</li>
                <li>Wrong items received</li>
                <li>Damaged during transit</li>
                <li>Significantly not as described</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-6">2.2 Non-Returnable Items</h3>
              <p>The following items cannot be returned unless they arrive damaged or defective:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gift cards</li>
                <li>Downloadable software products</li>
                <li>Personal care appliances (unless defective)</li>
                <li>Products marked as "Final Sale" or "Non-Returnable"</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-6">2.3 How to Initiate a Return</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Log in to your account and go to 'My Orders'</li>
                <li>Select the item(s) you wish to return</li>
                <li>Choose a return reason and submit your request</li>
                <li>Once approved, you'll receive a Return Authorization Number and return instructions</li>
                <li>Pack the item securely with all original packaging and accessories</li>
                <li>Affix the return label to the package and drop it off at the designated courier location</li>
              </ol>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">3. Refund Process</h2>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">3.1 Refund Methods</h3>
              <p>Refunds will be issued to the original payment method used for the purchase. The time it takes for the refund to reflect in your account may vary depending on your payment method:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Credit/Debit Cards: 5-10 business days</li>
                <li>Net Banking: 3-7 business days</li>
                <li>UPI: 1-3 business days</li>
                <li>Wallet: 1-2 business days</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-6">3.2 Refund Amount</h3>
              <p>The refund amount will include the product price plus any applicable taxes. Original shipping charges are non-refundable unless the return is due to our error or a defective product.</p>
              
              <h3 className="text-lg font-semibold mt-6">3.3 Processing Time</h3>
              <p>Once we receive your return, it will take approximately 3-5 business days to process. You will receive an email notification once your refund has been processed.</p>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">4. Replacement Policy</h2>
            <p>We offer free replacement for products that are damaged, defective, or different from what you ordered. To request a replacement:</p>
            <ol className="list-decimal pl-6 space-y-2 mt-4">
              <li>Contact our customer service within 48 hours of delivery</li>
              <li>Provide your order number and details of the issue</li>
              <li>We may request photos or videos of the damaged/defective product</li>
              <li>Once approved, we'll ship the replacement item at no additional cost</li>
            </ol>
            <p className="mt-4 text-sm text-muted-foreground">
              *Note: Replacement is subject to product availability. If the product is out of stock, we will issue a full refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
            <p className="mb-2">
              If you have any questions about our cancellation and refund policy, please contact our customer service team:
            </p>
            <p className="mt-2">
              Email: returns@appliancebright.com<br />
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

export default CancellationRefundPolicy;
