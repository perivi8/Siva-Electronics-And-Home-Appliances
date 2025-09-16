import PageLayout from '@/components/PageLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageSquare, Clock, Wrench, Shield, Truck, HeadphonesIcon } from "lucide-react";

const SupportCenter = () => {
  const faqs = [
    {
      question: "How can I track my appliance order?",
      answer: "You can track your order by logging into your account and visiting the 'My Orders' section. You'll receive SMS and email updates with tracking information once your appliance has been dispatched. For large appliances, our delivery team will call you 24 hours before delivery."
    },
    {
      question: "Do you provide installation services for appliances?",
      answer: "Yes, we provide professional installation services for all major appliances including air conditioners, washing machines, refrigerators, and water purifiers. Our certified technicians will install your appliance and provide a demonstration. Installation charges vary by product and location."
    },
    {
      question: "What is your warranty and service policy?",
      answer: "All our appliances come with manufacturer warranty ranging from 1-10 years depending on the product. We also provide extended warranty options. Our authorized service centers across India handle warranty claims and repairs using genuine spare parts."
    },
    {
      question: "What is your return and exchange policy?",
      answer: "We offer a 7-day return policy for small appliances and 3-day return policy for large appliances from the date of delivery. Items must be unused, in original packaging with all accessories. For defective products, we offer free replacement within the warranty period."
    },
    {
      question: "Do you deliver to my location?",
      answer: "We deliver across India including metro cities, tier-2 cities, and remote areas. Delivery charges and timelines vary by location and product size. Large appliances require special delivery arrangements which our team will coordinate with you."
    },
    {
      question: "How do I get my appliance serviced?",
      answer: "For warranty service, contact our customer care or visit our website to book a service request. Our authorized technicians will visit your location for repairs. For out-of-warranty service, we provide paid maintenance services through our service network."
    }
  ];

  const supportServices = [
    {
      title: "Installation Support",
      description: "Professional installation by certified technicians",
      icon: Wrench,
      details: "Air conditioners, washing machines, water purifiers, and more"
    },
    {
      title: "Warranty Service",
      description: "Comprehensive warranty support and repairs",
      icon: Shield,
      details: "Genuine spare parts and authorized service centers"
    },
    {
      title: "Delivery Support",
      description: "Safe delivery and setup across India",
      icon: Truck,
      details: "Special handling for large appliances and fragile items"
    },
    {
      title: "Technical Support",
      description: "Expert guidance for product usage and troubleshooting",
      icon: HeadphonesIcon,
      details: "Product demonstrations and usage tips"
    }
  ];

  return (
    <PageLayout 
      title="Support Center"
      description="Get expert help for your appliances. We're here to assist with installation, warranty, repairs, and any questions about your home appliances."
    >
      <div className="space-y-12">
        {/* Support Services Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportServices.map((service, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
                <p className="text-xs text-muted-foreground">{service.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Help Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Support</h3>
                    <p className="text-sm text-muted-foreground">support@appliancebright.com</p>
                    <p className="text-xs text-muted-foreground mt-1">Response time: 4-6 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Customer Care</h3>
                    <p className="text-sm text-muted-foreground">+91 12345 67890</p>
                    <p className="text-xs text-muted-foreground mt-1">Mon-Sat: 9AM - 8PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Service Helpline</h3>
                    <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                    <p className="text-xs text-muted-foreground mt-1">For installation & repair services</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">WhatsApp Support</h3>
                    <p className="text-sm text-muted-foreground">+91 87654 32109</p>
                    <p className="text-xs text-muted-foreground mt-1">Quick queries and order updates</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
            <p className="text-sm text-muted-foreground">
              Need help with your appliance? Our expert team is here to assist you.
            </p>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                  <Input id="phone" placeholder="+91 98765 43210" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="category" className="text-sm font-medium">Query Type</label>
                  <select id="category" className="w-full p-2 border border-gray-300 rounded-md">
                    <option value="">Select category</option>
                    <option value="installation">Installation Support</option>
                    <option value="warranty">Warranty Claim</option>
                    <option value="delivery">Delivery Issue</option>
                    <option value="product">Product Information</option>
                    <option value="service">Service Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="Brief description of your query" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Please provide details about your appliance model, purchase date, and specific issue..." 
                  className="min-h-[150px]" 
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit">Send Message</Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Support Hours and Emergency */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Support Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Monday - Saturday: 9:00 AM - 8:00 PM IST<br />
                    Sunday: 10:00 AM - 6:00 PM IST<br />
                    Public Holidays: Limited support available
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Emergency Service</h3>
                  <p className="text-sm text-muted-foreground">
                    24/7 Emergency Helpline: +91 99999 88888<br />
                    For urgent appliance breakdowns<br />
                    (Air conditioners, refrigerators, water purifiers)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Service Centers */}
        <Card>
          <CardHeader>
            <CardTitle>Authorized Service Centers</CardTitle>
            <p className="text-sm text-muted-foreground">
              Find our authorized service centers across India for warranty and repair services.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Metro Cities</h4>
                <p className="text-sm text-muted-foreground">
                  Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Tier-2 Cities</h4>
                <p className="text-sm text-muted-foreground">
                  Jaipur, Lucknow, Indore, Bhopal, Coimbatore, Kochi, Nagpur, Surat
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Service Network</h4>
                <p className="text-sm text-muted-foreground">
                  500+ authorized service centers across India with trained technicians and genuine spare parts.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default SupportCenter;
