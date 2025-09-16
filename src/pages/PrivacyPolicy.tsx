import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
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
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg font-semibold text-accent mb-6">
            Your Privacy, Our Responsibility
          </p>

          <p className="mb-8">
            At Siva Electronics, we respect your trust and are committed to protecting your personal information. As a retailer and service provider of home appliances and electronics, we ensure that all customer data is collected, stored, and used responsibly—aligned with the Indian IT Act and international data protection principles such as GDPR.
          </p>

          <p className="mb-8">
            This Privacy Policy explains what data we collect, how we use it, how we safeguard it, and your rights as a valued customer.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-4">When you interact with us (online store, service requests, or in-store purchases), we may collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full Name</li>
              <li>Contact Information (phone number, email address)</li>
              <li>Billing & Shipping Address</li>
              <li>Order & Payment Details (via secure third-party gateways)</li>
              <li>Service/Repair Requests & Warranty Information</li>
              <li>Device & Browser Data (for website analytics)</li>
              <li>Cookies & Tracking Data (for personalized experiences)</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              We collect only the information necessary to provide reliable products and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Why We Collect Your Information</h2>
            <p className="mb-4">Your data is used for legitimate business purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Processing orders and managing deliveries</li>
              <li>Handling installation, service, and warranty requests</li>
              <li>Providing updates on purchases, repairs, or support queries</li>
              <li>Sending optional promotional offers and product launches (with your consent)</li>
              <li>Improving our website, products, and customer experience</li>
              <li>Meeting legal, tax, and regulatory obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Protect Your Information</h2>
            <p className="mb-4">We implement strong safeguards to ensure your data is protected at all times:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>SSL Encryption for all online transactions</li>
              <li>Secure Payment Gateways – we never store card or UPI details</li>
              <li>Firewall & Access Controls on servers</li>
              <li>Restricted Data Access – only authorized staff handle sensitive data</li>
              <li>Periodic Audits to maintain compliance and security standards</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights & Choices</h2>
            <p className="mb-4">You have full control of your data. At any time, you may:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request a copy of your personal data held by us</li>
              <li>Ask for updates or corrections to your information</li>
              <li>Request deletion of your data (subject to legal requirements)</li>
              <li>Opt out of promotional messages (email, SMS, WhatsApp)</li>
              <li>Raise concerns about data handling practices</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              We aim to respond to verified requests within 30 days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Sharing</h2>
            <p className="mb-4">We do not sell or rent your personal information. Data may be shared only with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Courier/logistics partners (for delivery of appliances)</li>
              <li>Authorized service technicians (for repair & warranty)</li>
              <li>Payment processors (for secure transactions)</li>
              <li>Government/regulatory bodies (when legally required)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Policy Updates</h2>
            <p className="mb-4">
              This Privacy Policy may be updated from time to time to reflect changes in our business practices, technology, or legal requirements. The revised version will always be available on our website with the updated "Last Revised" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">For questions, concerns, or privacy requests, please contact:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold">Siva Electronics</p>
              <p>📍 OPP. TO 21, J.K.PLAZA, PALLIPAT MAIN ROAD, PODHATUR PETTAI, Tiruvallur, Tamil Nadu, 631208</p>
              <p>📞 +91 9943691712 / +91 6383791917</p>
              <p>📧 Email: contact@sivaappliances.shop</p>
              <p>🌐 Website: http://sivaappliances.shop/</p>
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              <p>Last Updated: August 2025</p>
              <p>© 2025 Siva Electronics. All Rights Reserved.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
