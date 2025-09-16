import PageLayout from '@/components/PageLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, XCircle, Clock, Package } from "lucide-react";

const ReturnsExchanges = () => {
  const returnPolicy = [
    {
      title: "30-Day Return Policy",
      description: "You have 30 days from the delivery date to return your item(s) for a refund or exchange.",
      icon: <CheckCircle className="h-6 w-6 text-green-500" />
    },
    {
      title: "Condition of Items",
      description: "Items must be in new, unused condition with all original packaging and tags attached.",
      icon: <Package className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Non-Returnable Items",
      description: "Certain items like special orders, clearance items, and opened software cannot be returned.",
      icon: <XCircle className="h-6 w-6 text-red-500" />
    },
    {
      title: "Processing Time",
      description: "Refunds are typically processed within 5-7 business days after we receive your return.",
      icon: <Clock className="h-6 w-6 text-amber-500" />
    }
  ];

  return (
    <PageLayout 
      title="Returns & Exchanges"
      description="Hassle-free returns and exchanges within 30 days"
    >
      <div className="space-y-8">
        {/* Return Policy Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Our Return Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {returnPolicy.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* How to Return */}
        <Card>
          <CardHeader>
            <CardTitle>How to Return an Item</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold">Initiate Your Return</h3>
                  <p className="text-muted-foreground text-sm">Fill out the return form below or contact our support team with your order number and reason for return.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold">Package Your Item</h3>
                  <p className="text-muted-foreground text-sm">Securely pack the item in its original packaging with all accessories and documentation.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold">Ship the Package</h3>
                  <p className="text-muted-foreground text-sm">Use the return shipping label provided or ship to our return center address.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold">Receive Refund/Exchange</h3>
                  <p className="text-muted-foreground text-sm">Once received and inspected, we'll process your refund or ship your exchange.</p>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Return Form */}
        <Card>
          <CardHeader>
            <CardTitle>Start a Return</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="orderNumber" className="text-sm font-medium">Order Number *</label>
                  <Input id="orderNumber" placeholder="Enter your order number" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email *</label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Return or Exchange? *</label>
                <div className="flex gap-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="returnType" value="return" className="text-primary" required />
                    <span>Return for Refund</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="returnType" value="exchange" className="text-primary" />
                    <span>Exchange Item</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="reason" className="text-sm font-medium">Reason for Return *</label>
                <select 
                  id="reason" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  required
                >
                  <option value="">Select a reason</option>
                  <option value="wrong-item">Wrong item received</option>
                  <option value="defective">Item is defective/damaged</option>
                  <option value="not-as-described">Not as described</option>
                  <option value="better-price">Found better price</option>
                  <option value="no-longer-needed">No longer needed</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="details" className="text-sm font-medium">Additional Details</label>
                <Textarea 
                  id="details" 
                  placeholder="Please provide any additional information about your return..." 
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" required />
                  <span className="text-sm text-muted-foreground">
                    I have read and agree to the <a href="/return-policy" className="text-primary hover:underline">Return Policy</a> and understand that return shipping may be my responsibility unless the return is due to our error.
                  </span>
                </label>
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full md:w-auto">Submit Return Request</Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold">How long does it take to process a return?</h3>
              <p className="text-muted-foreground text-sm mt-1">
                Once we receive your return, please allow 3-5 business days for processing. Refunds are typically issued within 5-7 business days after we receive and inspect the returned item(s).
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Do I have to pay for return shipping?</h3>
              <p className="text-muted-foreground text-sm mt-1">
                Customers are responsible for return shipping costs unless the return is due to our error (e.g., wrong item shipped, defective item). A return shipping label will be provided for exchanges.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">What if my item is damaged or defective?</h3>
              <p className="text-muted-foreground text-sm mt-1">
                If you received a damaged or defective item, please contact our support team immediately. We'll provide a prepaid return label and process a replacement or refund as soon as possible.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default ReturnsExchanges;
