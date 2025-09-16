import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background pt-32">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us more about your inquiry..." 
                  className="min-h-[120px]"
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">👥</div>
                  <div>
                    <h3 className="font-semibold">Company</h3>
                    <p className="text-gray-600">Siva Electronics And Home Appliances</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">OPP. TO 21, J.K.PLAZA, PALLIPAT MAIN ROAD,<br />PODHATUR PETTAI, Tiruvallur,<br />Tamil Nadu, 631208</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+91 9943691712 / +91 6383791917</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">✉️</div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">sivahomeappliances033@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">👤</div>
                  <div>
                    <h3 className="font-semibold">Contact Person</h3>
                    <p className="text-gray-600">R C Karthik</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Other Ways to Reach Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Live Chat</span>
                  <Button variant="outline" size="sm">Start Chat</Button>
                </div>
                <div className="flex justify-between items-center">
                  <span>Schedule a Call</span>
                  <Button variant="outline" size="sm">Book Now</Button>
                </div>
                <div className="flex justify-between items-center">
                  <span>FAQ</span>
                  <Button variant="outline" size="sm">View FAQ</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">Facebook</Button>
                  <Button variant="outline" size="sm">Twitter</Button>
                  <Button variant="outline" size="sm">Instagram</Button>
                  <Button variant="outline" size="sm">LinkedIn</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
