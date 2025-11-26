import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const OrderConfirmation = () => {
  const { clearCart, items: cartItems, getCartTotal } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [orderDetails, setOrderDetails] = useState(null);
  const [countdown, setCountdown] = useState(5);
  const hasGeneratedOrder = useRef(false);

  useEffect(() => {
    // Prevent multiple generations
    if (hasGeneratedOrder.current) return;
    
    hasGeneratedOrder.current = true;

    // Generate order details only once
    const generateOrderDetails = () => {
      const orderId = `ANF${Date.now().toString().slice(-8)}`;
      const estimatedDelivery = new Date();
      estimatedDelivery.setDate(estimatedDelivery.getDate() + 2);
      
      return {
        orderId,
        orderDate: new Date().toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        estimatedDelivery: estimatedDelivery.toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        items: [...cartItems], // Create a copy of cart items
        total: getCartTotal() + 50 + (getCartTotal() * 0.18),
        shippingAddress: {
          name: "John Doe",
          address: "123 Food Street, Anand Nagar",
          city: "Mumbai",
          state: "Maharashtra",
          pincode: "400001",
          phone: "+91 98765 43210"
        },
        paymentMethod: "Credit Card",
        paymentStatus: "Paid"
      };
    };

    // Clear cart and generate order details
    const orderData = generateOrderDetails();
    setOrderDetails(orderData);
    clearCart();

    // Auto redirect countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []); // Empty dependency array to run only once

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your order details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto py-8 sm:py-12">
        {/* Success Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <svg className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
            Order Confirmed!
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-2">
            Thank you for your order with Anand Foods
          </p>
          <p className="text-sm sm:text-base text-gray-500">
            Order ID: <span className="font-semibold text-green-600">{orderDetails.orderId}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Order Summary Card */}
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Order Summary</h2>
              
              <div className="space-y-4 sm:space-y-6">
                {orderDetails.items.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded flex-shrink-0"
                    />
                    <div className="flex-grow min-w-0">
                      <h3 className="font-semibold text-gray-800 text-sm sm:text-base truncate">{item.name}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600 text-sm sm:text-base">₹{item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Total */}
              <div className="border-t border-gray-200 mt-4 sm:mt-6 pt-4 sm:pt-6">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-600">Order Date</span>
                    <span className="font-semibold">{orderDetails.orderDate}</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-600">Estimated Delivery</span>
                    <span className="font-semibold text-green-600">{orderDetails.estimatedDelivery}</span>
                  </div>
                  <div className="flex justify-between text-base sm:text-lg font-bold pt-2 border-t border-gray-200">
                    <span>Total Paid</span>
                    <span className="text-green-600">₹{orderDetails.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Information Card */}
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Delivery Information</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Shipping Address</h3>
                  <div className="text-gray-600 text-sm sm:text-base">
                    <p className="font-medium">{orderDetails.shippingAddress.name}</p>
                    <p>{orderDetails.shippingAddress.address}</p>
                    <p>{orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state}</p>
                    <p>Pincode: {orderDetails.shippingAddress.pincode}</p>
                    <p className="mt-2">📞 {orderDetails.shippingAddress.phone}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Payment Details</h3>
                  <div className="text-gray-600 text-sm sm:text-base">
                    <p><span className="font-medium">Method:</span> {orderDetails.paymentMethod}</p>
                    <p><span className="font-medium">Status:</span> 
                      <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        {orderDetails.paymentStatus}
                      </span>
                    </p>
                    <p className="mt-2 text-xs sm:text-sm text-gray-500">
                      A confirmation email has been sent to your registered email address.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Next Steps */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 sticky top-24">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">What's Next?</h3>
              
              <div className="space-y-4">
                {/* Timeline */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-sm sm:text-base">Order Confirmed</p>
                      <p className="text-gray-600 text-xs sm:text-sm">We've received your order</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-sm sm:text-base">Preparing Your Order</p>
                      <p className="text-gray-600 text-xs sm:text-sm">Freshness guaranteed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-600 text-xs">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-sm sm:text-base">Out for Delivery</p>
                      <p className="text-gray-600 text-xs sm:text-sm">Estimated: {orderDetails.estimatedDelivery}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gray-600 text-xs">4</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-sm sm:text-base">Delivered</p>
                      <p className="text-gray-600 text-xs sm:text-sm">Enjoy your pure goodness!</p>
                    </div>
                  </div>
                </div>

                {/* Support Info */}
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Need Help?</h4>
                  <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                    <p>📞 Call: +91 98765 43210</p>
                    <p>✉️ Email: support@anandfoods.com</p>
                    <p>🕒 Support: 7AM - 10PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/famadda"
            className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors duration-300 text-center text-sm sm:text-base"
          >
            Continue Shopping
          </Link>
          <button
            onClick={() => window.print()}
            className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors duration-300 text-sm sm:text-base"
          >
            Print Receipt
          </button>
          <Link
            to="/orders"
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors duration-300 text-center text-sm sm:text-base"
          >
            View Order History
          </Link>
        </div>

        {/* Auto Redirect Notice */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            You will be redirected to the homepage in <span className="font-semibold text-green-600">{countdown}</span> seconds
          </p>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 sm:mt-12 border-t border-gray-200 pt-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-green-600 text-lg">🔒</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-800">Secure Payment</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-green-600 text-lg">🚚</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-800">Fresh Delivery</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-green-600 text-lg">⭐</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-800">Quality Guaranteed</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-green-600 text-lg">📞</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-800">24/7 Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;