import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CheckCircle, MapPin, CreditCard, Banknote, Building2, Truck } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface DeliveryDetails {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  landmark: string;
}

interface CardDetails {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardHolderName: string;
}

interface BankDetails {
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  accountHolderName: string;
}

type PaymentMethod = 'credit-card' | 'debit-card' | 'net-banking' | 'cod';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, getTotalItems, clearCart } = useCart();
  const { user, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cod');
  const [deliveryDetails, setDeliveryDetails] = useState<DeliveryDetails>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    landmark: ''
  });
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolderName: ''
  });
  const [bankDetails, setBankDetails] = useState<BankDetails>({
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    accountHolderName: ''
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleInputChange = (field: keyof DeliveryDetails, value: string) => {
    setDeliveryDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCardDetailsChange = (field: keyof CardDetails, value: string) => {
    setCardDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBankDetailsChange = (field: keyof BankDetails, value: string) => {
    setBankDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    const requiredDelivery = ['fullName', 'email', 'phone', 'address', 'city', 'state', 'pincode'];
    const deliveryValid = requiredDelivery.every(field => deliveryDetails[field as keyof DeliveryDetails].trim() !== '');
    
    if (!deliveryValid) return false;

    // Validate payment method specific fields
    if (paymentMethod === 'credit-card' || paymentMethod === 'debit-card') {
      const requiredCard = ['cardNumber', 'expiryDate', 'cvv', 'cardHolderName'];
      return requiredCard.every(field => cardDetails[field as keyof CardDetails].trim() !== '');
    }
    
    if (paymentMethod === 'net-banking') {
      const requiredBank = ['bankName', 'accountNumber', 'ifscCode', 'accountHolderName'];
      return requiredBank.every(field => bankDetails[field as keyof BankDetails].trim() !== '');
    }
    
    return true; // COD doesn't need additional validation
  };

  const getPaymentMethodName = (method: PaymentMethod) => {
    switch (method) {
      case 'credit-card': return 'Credit Card';
      case 'debit-card': return 'Debit Card';
      case 'net-banking': return 'Net Banking';
      case 'cod': return 'Cash on Delivery';
      default: return method;
    }
  };

  const handleConfirmOrder = () => {
    if (!validateForm()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Generate order ID
    const newOrderId = `ORD${Date.now()}`;
    setOrderId(newOrderId);

    // Create order object
    const order = {
      id: newOrderId,
      items: cartItems.map(item => ({
        ...item,
        image: item.image // Ensure image property is included
      })),
      deliveryDetails,
      paymentMethod: {
        type: paymentMethod,
        name: getPaymentMethodName(paymentMethod),
        details: paymentMethod === 'credit-card' || paymentMethod === 'debit-card' 
          ? { ...cardDetails, cardNumber: cardDetails.cardNumber.replace(/\d(?=\d{4})/g, '*') } // Mask card number
          : paymentMethod === 'net-banking' 
          ? { ...bankDetails, accountNumber: bankDetails.accountNumber.replace(/\d(?=\d{4})/g, '*') } // Mask account number
          : null
      },
      totalAmount: getTotalPrice(),
      totalItems: getTotalItems(),
      orderDate: new Date().toISOString(),
      status: 'Confirmed',
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days from now
    };

    // Save order to localStorage
    const existingOrders = JSON.parse(localStorage.getItem(`orders_${user}`) || '[]');
    existingOrders.push(order);
    localStorage.setItem(`orders_${user}`, JSON.stringify(existingOrders));

    // Clear cart
    clearCart();

    // Show confirmation
    setIsConfirmed(true);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    toast({
      title: "Order Confirmed!",
      description: `Your order ${newOrderId} has been placed successfully`,
    });
  };

  const renderPaymentDetails = () => {
    if (paymentMethod === 'credit-card' || paymentMethod === 'debit-card') {
      return (
        <div className="space-y-4">
          <div>
            <Label htmlFor="cardHolderName">Card Holder Name *</Label>
            <Input
              id="cardHolderName"
              value={cardDetails.cardHolderName}
              onChange={(e) => handleCardDetailsChange('cardHolderName', e.target.value)}
              placeholder="Enter card holder name"
            />
          </div>
          <div>
            <Label htmlFor="cardNumber">Card Number *</Label>
            <Input
              id="cardNumber"
              value={cardDetails.cardNumber}
              onChange={(e) => handleCardDetailsChange('cardNumber', e.target.value)}
              placeholder="1234 5678 9012 3456"
              maxLength={19}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiryDate">Expiry Date *</Label>
              <Input
                id="expiryDate"
                value={cardDetails.expiryDate}
                onChange={(e) => handleCardDetailsChange('expiryDate', e.target.value)}
                placeholder="MM/YY"
                maxLength={5}
              />
            </div>
            <div>
              <Label htmlFor="cvv">CVV *</Label>
              <Input
                id="cvv"
                type="password"
                value={cardDetails.cvv}
                onChange={(e) => handleCardDetailsChange('cvv', e.target.value)}
                placeholder="123"
                maxLength={4}
              />
            </div>
          </div>
        </div>
      );
    }

    if (paymentMethod === 'net-banking') {
      return (
        <div className="space-y-4">
          <div>
            <Label htmlFor="accountHolderName">Account Holder Name *</Label>
            <Input
              id="accountHolderName"
              value={bankDetails.accountHolderName}
              onChange={(e) => handleBankDetailsChange('accountHolderName', e.target.value)}
              placeholder="Enter account holder name"
            />
          </div>
          <div>
            <Label htmlFor="bankName">Bank Name *</Label>
            <Select onValueChange={(value) => handleBankDetailsChange('bankName', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Bank" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sbi">State Bank of India</SelectItem>
                <SelectItem value="hdfc">HDFC Bank</SelectItem>
                <SelectItem value="icici">ICICI Bank</SelectItem>
                <SelectItem value="axis">Axis Bank</SelectItem>
                <SelectItem value="kotak">Kotak Mahindra Bank</SelectItem>
                <SelectItem value="pnb">Punjab National Bank</SelectItem>
                <SelectItem value="canara">Canara Bank</SelectItem>
                <SelectItem value="bob">Bank of Baroda</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="accountNumber">Account Number *</Label>
            <Input
              id="accountNumber"
              value={bankDetails.accountNumber}
              onChange={(e) => handleBankDetailsChange('accountNumber', e.target.value)}
              placeholder="Enter account number"
            />
          </div>
          <div>
            <Label htmlFor="ifscCode">IFSC Code *</Label>
            <Input
              id="ifscCode"
              value={bankDetails.ifscCode}
              onChange={(e) => handleBankDetailsChange('ifscCode', e.target.value)}
              placeholder="Enter IFSC code"
            />
          </div>
        </div>
      );
    }

    if (paymentMethod === 'cod') {
      return (
        <div className="text-center py-8">
          <Truck className="w-16 h-16 mx-auto text-green-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Cash on Delivery</h3>
          <p className="text-gray-600">Pay when your order is delivered to your doorstep</p>
          <p className="text-sm text-gray-500 mt-2">No additional charges for COD</p>
        </div>
      );
    }

    return null;
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background pt-32">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Please Login</h1>
            <p className="text-gray-600 mb-6">You need to login to checkout</p>
            <Button onClick={() => navigate('/')}>Return to Home</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (cartItems.length === 0 && !isConfirmed) {
    return (
      <div className="min-h-screen bg-background pt-32">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-6">Add some products to checkout</p>
            <Button onClick={() => navigate('/shop')}>Continue Shopping</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-background pt-32">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="w-24 h-24 mx-auto text-green-500 mb-6" />
            <h1 className="text-3xl font-bold text-green-600 mb-4">Order Confirmed!</h1>
            <p className="text-xl text-gray-600 mb-2">Thank you for your order</p>
            <p className="text-lg font-semibold mb-6">Order ID: {orderId}</p>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Delivery Details</h3>
                <div className="text-left space-y-2">
                  <p><strong>Name:</strong> {deliveryDetails.fullName}</p>
                  <p><strong>Phone:</strong> {deliveryDetails.phone}</p>
                  <p><strong>Address:</strong> {deliveryDetails.address}</p>
                  <p><strong>City:</strong> {deliveryDetails.city}, {deliveryDetails.state} - {deliveryDetails.pincode}</p>
                  <p><strong>Estimated Delivery:</strong> 7 business days</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4 justify-center">
              <Button onClick={() => navigate('/orders')}>View My Orders</Button>
              <Button variant="outline" onClick={() => navigate('/shop')}>Continue Shopping</Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-32">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Delivery Details and Payment */}
          <div className="space-y-6">
            {/* Delivery Details Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Delivery Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={deliveryDetails.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={deliveryDetails.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={deliveryDetails.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Textarea
                    id="address"
                    value={deliveryDetails.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Enter your complete address"
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={deliveryDetails.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Select onValueChange={(value) => handleInputChange('state', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select State" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="maharashtra">Maharashtra</SelectItem>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="karnataka">Karnataka</SelectItem>
                        <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                        <SelectItem value="gujarat">Gujarat</SelectItem>
                        <SelectItem value="rajasthan">Rajasthan</SelectItem>
                        <SelectItem value="west-bengal">West Bengal</SelectItem>
                        <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="pincode">Pincode *</Label>
                    <Input
                      id="pincode"
                      value={deliveryDetails.pincode}
                      onChange={(e) => handleInputChange('pincode', e.target.value)}
                      placeholder="Pincode"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="landmark">Landmark (Optional)</Label>
                  <Input
                    id="landmark"
                    value={deliveryDetails.landmark}
                    onChange={(e) => handleInputChange('landmark', e.target.value)}
                    placeholder="Nearby landmark"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <RadioGroup value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as PaymentMethod)}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <Label htmlFor="credit-card" className="flex items-center gap-2 cursor-pointer">
                        <CreditCard className="w-5 h-5 text-blue-600" />
                        <span>Credit Card</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <RadioGroupItem value="debit-card" id="debit-card" />
                      <Label htmlFor="debit-card" className="flex items-center gap-2 cursor-pointer">
                        <CreditCard className="w-5 h-5 text-green-600" />
                        <span>Debit Card</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <RadioGroupItem value="net-banking" id="net-banking" />
                      <Label htmlFor="net-banking" className="flex items-center gap-2 cursor-pointer">
                        <Building2 className="w-5 h-5 text-purple-600" />
                        <span>Net Banking</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="flex items-center gap-2 cursor-pointer">
                        <Banknote className="w-5 h-5 text-orange-600" />
                        <span>Cash on Delivery</span>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>

                {/* Payment Details Form */}
                <div className="mt-6">
                  {renderPaymentDetails()}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center py-2 border-b">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <div className="flex justify-between">
                    <span>Subtotal ({getTotalItems()} items)</span>
                    <span className="font-medium">{formatPrice(getTotalPrice())}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t">
                    <span>Total</span>
                    <span className="text-primary">{formatPrice(getTotalPrice())}</span>
                  </div>
                </div>

                <Button 
                  className="w-full mt-6" 
                  size="lg"
                  onClick={handleConfirmOrder}
                >
                  Confirm Order
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
