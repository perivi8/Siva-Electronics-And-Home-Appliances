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
          <p className="text-muted-foreground mb-6">
            Last updated: September 16, 2024
          </p>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
            <p className="mb-3">
              Welcome to Appliance Bright. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
            <p className="mb-3">
              We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-2">
              <li>Identity Data (name, username, title, date of birth, gender)</li>
              <li>Contact Data (billing address, delivery address, email address, telephone numbers)</li>
              <li>Financial Data (payment card details, bank account details)</li>
              <li>Transaction Data (details about payments to and from you, products you've purchased)</li>
              <li>Technical Data (IP address, login data, browser type, time zone setting, location)</li>
              <li>Profile Data (username and password, purchases, orders, feedback, survey responses)</li>
              <li>Usage Data (information about how you use our website, products, and services)</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">How We Use Your Data</h2>
            <p className="mb-3">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-2">
              <li>To register you as a new customer</li>
              <li>To process and deliver your orders</li>
              <li>To manage our relationship with you</li>
              <li>To enable you to participate in a prize draw, competition, or complete a survey</li>
              <li>To administer and protect our business and this website</li>
              <li>To deliver relevant website content and advertisements to you</li>
              <li>To use data analytics to improve our website, products/services, marketing, and customer experiences</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
            <p className="mb-3">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Your Legal Rights</h2>
            <p className="mb-3">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-2">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p className="mt-2">
              Email: privacy@appliancebright.com<br />
              Phone: +1 (555) 123-4567<br />
              Address: 123 Appliance Street, Tech City, TC 12345, Country
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
