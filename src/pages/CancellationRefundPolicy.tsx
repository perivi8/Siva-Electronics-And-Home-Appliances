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
          <p className="text-lg font-semibold text-accent mb-6">
            Fair, Transparent, and Customer-Friendly
          </p>

          <p className="mb-8">
            At Siva Electronics, customer satisfaction is our priority. While we strive to deliver high-quality appliances and services, we understand that cancellations or refunds may occasionally be required. This policy outlines how we handle such requests in a clear and transparent manner.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Order Cancellations</h2>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Cancellation Window:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Orders can be cancelled within 2 hours of purchase, provided they have not yet been processed, packed, or dispatched.</li>
                <li>Once an order has been shipped or handed over to the courier, cancellations are no longer possible.</li>
                <li>To cancel an order, customers must contact our support team with their Order ID.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Returns & Replacements</h2>
            <div className="space-y-4">
              <p>We accept returns or offer replacements in the following situations:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Product received is damaged in transit.</li>
                <li>Wrong item delivered.</li>
                <li>Verified manufacturing defects within warranty terms.</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-6">Conditions for Returns:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Return requests must be raised within 48 hours of delivery.</li>
                <li>The product must be unused, with all original packaging, manuals, and accessories intact.</li>
                <li>Installation-based appliances (e.g., ACs, washing machines) must not be uninstalled without authorization from Siva Electronics or the manufacturer.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Non-Returnable Items</h2>
            <p className="mb-4">We cannot accept returns/refunds for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Products damaged due to customer misuse, negligence, or unauthorized installation.</li>
              <li>Items without original packaging or invoice.</li>
              <li>Opened consumables or accessories (filters, batteries, etc.).</li>
              <li>Custom orders or special bulk requests.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Refund Process</h2>
            <div className="space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Once approved, refunds are initiated within 3–5 business days.</li>
                <li>Refunds are processed via the original payment method (UPI, bank transfer, card, etc.).</li>
                <li>Depending on the payment provider, refunds may take 5–10 business days to reflect in your account.</li>
                <li>In certain cases, refunds may be issued as store credit or replacement based on customer preference.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Warranty & Service Claims</h2>
            <div className="space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Most appliances come with a manufacturer's warranty. Warranty claims must be processed directly with the authorized service center.</li>
                <li>For installation or service issues handled by Siva Electronics, customers can reach out to our support team for assistance.</li>
                <li>Refunds are not applicable for issues covered under warranty but will be handled through repair/replacement as per manufacturer policy.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Exceptions</h2>
            <p className="mb-4">Refunds/cancellations are not applicable in cases of:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Delays caused by logistics/courier providers beyond our control.</li>
              <li>Customer unavailability during scheduled delivery/installation.</li>
              <li>Price fluctuations after order placement.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
            <p className="mb-4">For cancellation, return, or refund assistance, please contact:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold">Siva Electronics</p>
              <p>📍 OPP. TO 21, J.K.PLAZA, PALLIPAT MAIN ROAD, PODHATUR PETTAI, Tiruvallur, Tamil Nadu, 631208</p>
              <p>📞 +91 9943691712 / +91 6383791917</p>
              <p>📧 Email: contact@sivaappliances.shop</p>
              <p>🌐 Website: http://sivaappliances.shop/</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Our team is available Mon–Sat, 10 AM – 7 PM IST.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CancellationRefundPolicy;
