import PageLayout from '@/components/PageLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckCircle, AlertCircle, Clock, FileText, XCircle } from "lucide-react";

const WarrantyInfo = () => {
  const warrantyTypes = [
    {
      name: "Standard Warranty",
      duration: "1 Year",
      coverage: "Parts and labor for manufacturing defects",
      icon: <FileText className="h-6 w-6 text-blue-500" />,
      features: [
        "Coverage for manufacturing defects",
        "Authorized service center repairs",
        "Replacement of defective parts",
        "In-home service for large appliances"
      ]
    },
    {
      name: "Extended Warranty",
      duration: "Up to 5 Years",
      coverage: "Extended protection beyond standard warranty",
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      features: [
        "Extends standard warranty coverage",
        "Additional 1-4 years of protection",
        "Priority customer service",
        "No deductibles or hidden fees"
      ]
    },
    {
      name: "Limited Warranty",
      duration: "Varies",
      coverage: "Specific component coverage",
      icon: <AlertCircle className="h-6 w-6 text-amber-500" />,
      features: [
        "Covers specific components only",
        "Varies by product category",
        "Check product documentation",
        "May require registration"
      ]
    }
  ];

  const warrantyExclusions = [
    "Damage from misuse, abuse, or neglect",
    "Normal wear and tear",
    "Acts of nature (floods, lightning, power surges)",
    "Unauthorized repairs or modifications",
    "Commercial or rental use (unless specified)",
    "Consumable parts (filters, light bulbs, etc.)",
    "Cosmetic damage"
  ];

  return (
    <PageLayout 
      title="Warranty Information"
      description="Comprehensive warranty coverage for your peace of mind"
    >
      <div className="space-y-8">
        {/* Warranty Overview */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Your Warranty Coverage</h2>
                <p className="text-muted-foreground">
                  All our products come with a manufacturer's warranty against defects in materials and workmanship. 
                  The standard warranty period varies by product category, typically ranging from 1 to 2 years from the date of purchase.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Warranty Types */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Types of Warranties</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {warrantyTypes.map((warranty, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      {warranty.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{warranty.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{warranty.duration} • {warranty.coverage}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {warranty.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Warranty Registration */}
          <Card>
            <CardHeader>
              <CardTitle>Warranty Registration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Register your product to activate your warranty and receive important product updates and safety notifications.
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="productModel" className="text-sm font-medium">Product Model Number *</label>
                  <Input id="productModel" placeholder="e.g., ABC123" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="serialNumber" className="text-sm font-medium">Serial Number *</label>
                  <Input id="serialNumber" placeholder="Located on the product label" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="purchaseDate" className="text-sm font-medium">Purchase Date *</label>
                  <Input id="purchaseDate" type="date" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="invoiceNumber" className="text-sm font-medium">Invoice/Order Number</label>
                  <Input id="invoiceNumber" placeholder="For warranty verification" />
                </div>
                <Button className="w-full">Register Product</Button>
              </div>
            </CardContent>
          </Card>

          {/* Warranty Claim Process */}
          <Card>
            <CardHeader>
              <CardTitle>Warranty Claim Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <span className="font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Gather Information</h3>
                    <p className="text-muted-foreground text-sm">
                      Collect your product's model number, serial number, and proof of purchase.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <span className="font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Contact Support</h3>
                    <p className="text-muted-foreground text-sm">
                      Call our support line or submit a claim through our online portal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <span className="font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Diagnosis</h3>
                    <p className="text-muted-foreground text-sm">
                      Our technician will diagnose the issue to determine if it's covered under warranty.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <span className="font-bold text-primary">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Resolution</h3>
                    <p className="text-muted-foreground text-sm">
                      We'll repair, replace, or refund as per the warranty terms.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Warranty Exclusions */}
        <Card>
          <CardHeader>
            <CardTitle>What's Not Covered</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {warrantyExclusions.map((exclusion, index) => (
                <div key={index} className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{exclusion}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-amber-500" />
                Important Note
              </h4>
              <p className="text-sm text-muted-foreground">
                This warranty gives you specific legal rights, and you may also have other rights which vary from state to state. 
                Some states do not allow limitations on how long an implied warranty lasts, so the above limitation may not apply to you.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Warranty Status Check */}
        <Card>
          <CardHeader>
            <CardTitle>Check Warranty Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-w-lg">
              <p className="text-muted-foreground">
                Enter your product's serial number to check the remaining warranty period and coverage details.
              </p>
              <div className="flex gap-2">
                <Input placeholder="Enter serial number" />
                <Button>Check Status</Button>
              </div>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Most warranty checks are instant. Some products may require manual verification.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default WarrantyInfo;
