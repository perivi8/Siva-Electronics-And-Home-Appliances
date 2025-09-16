import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Package, 
  CheckCircle, 
  Clock, 
  Truck, 
  MapPin, 
  Phone, 
  Calendar,
  Search,
  ArrowLeft
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface Order {
  id: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    brand: string;
    category: string;
  }>;
  deliveryDetails: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    landmark: string;
  };
  paymentMethod?: {
    type: string;
    name: string;
  };
  totalAmount: number;
  totalItems: number;
  orderDate: string;
  status: string;
  estimatedDelivery: string;
}

interface TrackingStatus {
  status: string;
  title: string;
  description: string;
  timestamp: string;
  completed: boolean;
}

const TrackOrder = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [orderIdInput, setOrderIdInput] = useState('');
  const [order, setOrder] = useState<Order | null>(null);
  const [trackingStatuses, setTrackingStatuses] = useState<TrackingStatus[]>([]);

  const orderIdFromParams = searchParams.get('orderId');

  useEffect(() => {
    if (orderIdFromParams) {
      setOrderIdInput(orderIdFromParams);
      handleTrackOrder(orderIdFromParams);
    }
  }, [orderIdFromParams]);

  const generateTrackingStatuses = (order: Order): TrackingStatus[] => {
    const orderDate = new Date(order.orderDate);
    const estimatedDelivery = new Date(order.estimatedDelivery);
    const currentDate = new Date();
    
    // Calculate progress based on time elapsed
    const totalTime = estimatedDelivery.getTime() - orderDate.getTime();
    const elapsedTime = currentDate.getTime() - orderDate.getTime();
    const progress = Math.min(elapsedTime / totalTime, 1);

    const statuses: TrackingStatus[] = [
      {
        status: 'confirmed',
        title: 'Order Confirmed',
        description: 'Your order has been confirmed and is being prepared',
        timestamp: order.orderDate,
        completed: true
      },
      {
        status: 'processing',
        title: 'Processing',
        description: 'Your order is being processed and packed',
        timestamp: new Date(orderDate.getTime() + (totalTime * 0.2)).toISOString(),
        completed: progress > 0.2
      },
      {
        status: 'shipped',
        title: 'Shipped',
        description: 'Your order has been shipped and is on the way',
        timestamp: new Date(orderDate.getTime() + (totalTime * 0.5)).toISOString(),
        completed: progress > 0.5
      },
      {
        status: 'out-for-delivery',
        title: 'Out for Delivery',
        description: 'Your order is out for delivery and will arrive soon',
        timestamp: new Date(orderDate.getTime() + (totalTime * 0.8)).toISOString(),
        completed: progress > 0.8
      },
      {
        status: 'delivered',
        title: 'Delivered',
        description: 'Your order has been delivered successfully',
        timestamp: order.estimatedDelivery,
        completed: progress >= 1
      }
    ];

    return statuses;
  };

  const handleTrackOrder = (orderId?: string) => {
    const searchOrderId = orderId || orderIdInput;
    
    if (!searchOrderId.trim()) {
      toast({
        title: "Order ID Required",
        description: "Please enter an order ID to track",
        variant: "destructive",
      });
      return;
    }

    if (!isAuthenticated || !user) {
      toast({
        title: "Login Required",
        description: "Please login to track your orders",
        variant: "destructive",
      });
      return;
    }

    const savedOrders = localStorage.getItem(`orders_${user}`);
    if (savedOrders) {
      const orders: Order[] = JSON.parse(savedOrders);
      const foundOrder = orders.find(order => order.id === searchOrderId);
      
      if (foundOrder) {
        setOrder(foundOrder);
        setTrackingStatuses(generateTrackingStatuses(foundOrder));
      } else {
        toast({
          title: "Order Not Found",
          description: "No order found with this ID",
          variant: "destructive",
        });
        setOrder(null);
        setTrackingStatuses([]);
      }
    } else {
      toast({
        title: "No Orders Found",
        description: "You don't have any orders yet",
        variant: "destructive",
      });
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusIcon = (status: string, completed: boolean) => {
    if (completed) {
      return <CheckCircle className="w-6 h-6 text-green-500" />;
    }
    
    switch (status) {
      case 'confirmed':
        return <Package className="w-6 h-6 text-blue-500" />;
      case 'processing':
        return <Clock className="w-6 h-6 text-yellow-500" />;
      case 'shipped':
      case 'out-for-delivery':
        return <Truck className="w-6 h-6 text-purple-500" />;
      case 'delivered':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      default:
        return <Clock className="w-6 h-6 text-gray-400" />;
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background pt-32">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Please Login</h1>
            <p className="text-gray-600 mb-6">You need to login to track your orders</p>
            <Button onClick={() => navigate('/')}>Return to Home</Button>
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
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" onClick={() => navigate('/orders')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Orders
          </Button>
          <h1 className="text-3xl font-bold">Track Your Order</h1>
        </div>

        {/* Order ID Search */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Enter Order ID
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="orderId">Order ID</Label>
                <Input
                  id="orderId"
                  value={orderIdInput}
                  onChange={(e) => setOrderIdInput(e.target.value)}
                  placeholder="Enter your order ID (e.g., ORD1234567890)"
                />
              </div>
              <div className="flex items-end">
                <Button onClick={() => handleTrackOrder()}>
                  Track Order
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {order && (
          <div className="space-y-8">
            {/* Order Details */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Order #{order.id}</CardTitle>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Placed on {formatDate(order.orderDate)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Package className="w-4 h-4" />
                        <span>{order.totalItems} items</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary">{formatPrice(order.totalAmount)}</p>
                    <Badge className="bg-green-100 text-green-800 mt-1">
                      {order.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Tracking Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Order Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {trackingStatuses.map((status, index) => (
                    <div key={status.status} className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        {getStatusIcon(status.status, status.completed)}
                        {index < trackingStatuses.length - 1 && (
                          <div className={`w-0.5 h-12 mt-2 ${status.completed ? 'bg-green-500' : 'bg-gray-300'}`} />
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className={`font-semibold ${status.completed ? 'text-green-700' : 'text-gray-500'}`}>
                              {status.title}
                            </h3>
                            <p className={`text-sm ${status.completed ? 'text-gray-700' : 'text-gray-400'}`}>
                              {status.description}
                            </p>
                          </div>
                          {status.completed && (
                            <span className="text-xs text-gray-500">
                              {formatDate(status.timestamp)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Delivery Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Delivery Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium">{order.deliveryDetails.fullName}</p>
                    <p className="text-sm text-gray-600">{order.deliveryDetails.address}</p>
                    <p className="text-sm text-gray-600">
                      {order.deliveryDetails.city}, {order.deliveryDetails.state} - {order.deliveryDetails.pincode}
                    </p>
                    {order.deliveryDetails.landmark && (
                      <p className="text-sm text-gray-600">Near: {order.deliveryDetails.landmark}</p>
                    )}
                    <div className="flex items-center gap-2 pt-2">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <p className="text-sm text-gray-600">{order.deliveryDetails.phone}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Order Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-sm">📱</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-sm">{formatPrice(item.price * item.quantity)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default TrackOrder;
