import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { items, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    // Shipping Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    
    // Payment Information
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
    
    // Order Preferences
    deliveryInstructions: ''
  });

  const [activeStep, setActiveStep] = useState(1); // 1: Shipping, 2: Payment, 3: Review
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order submission
    console.log('Order submitted:', formData);
    clearCart();
    navigate('/checkout/order-confirm');
  };

  const shippingCost = 50;
  const tax = getCartTotal() * 0.18;
  const totalAmount = getCartTotal() + shippingCost + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-8 sm:py-12 lg:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Your cart is empty</h2>
              <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">Add some delicious products to proceed with checkout!</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link 
                  to="/amruthdhan" 
                  className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors duration-300 text-sm sm:text-base"
                >
                  Explore AmruthDhan
                </Link>
                <Link 
                  to="/famadda" 
                  className="bg-amber-500 hover:bg-amber-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors duration-300 text-sm sm:text-base"
                >
                  Discover FamAdda
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-6 sm:py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Checkout</h1>
          <button 
            onClick={() => navigate('/cart')}
            className="text-green-600 hover:text-green-700 font-medium text-sm sm:text-base px-3 py-2 border border-green-200 rounded-lg hover:bg-green-50 transition-colors"
          >
            Back to Cart
          </button>
        </div>

        {/* Progress Steps - Mobile Optimized */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-between max-w-md mx-auto">
            {['Shipping', 'Payment', 'Review'].map((step, index) => (
              <div key={step} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 ${
                  activeStep > index + 1 
                    ? 'bg-green-600 border-green-600 text-white'
                    : activeStep === index + 1
                    ? 'border-green-600 bg-white text-green-600'
                    : 'border-gray-300 bg-white text-gray-400'
                } font-semibold text-sm sm:text-base`}>
                  {activeStep > index + 1 ? '✓' : index + 1}
                </div>
                <span className={`ml-2 font-medium text-sm sm:text-base ${
                  activeStep >= index + 1 ? 'text-green-600' : 'text-gray-400'
                } hidden sm:block`}>
                  {step}
                </span>
                {index < 2 && (
                  <div className={`w-8 sm:w-12 h-1 mx-2 sm:mx-4 ${
                    activeStep > index + 1 ? 'bg-green-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
              {activeStep === 1 && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Shipping Information</h2>
                  <form className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                          placeholder="First name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                          placeholder="Last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                          placeholder="Email address"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                          placeholder="Phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                        placeholder="Full address"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                          placeholder="City"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                          placeholder="State"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Pincode</label>
                        <input
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                          placeholder="Pincode"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Instructions</label>
                      <textarea
                        name="deliveryInstructions"
                        value={formData.deliveryInstructions}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                        placeholder="Any special delivery instructions..."
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveStep(2)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300 text-sm sm:text-base"
                    >
                      Continue to Payment
                    </button>
                  </form>
                </div>
              )}

              {activeStep === 2 && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Payment Method</h2>
                  
                  {/* Payment Method Selection - Mobile Grid */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                    {[
                      { id: 'card', label: 'Card', icon: '💳', fullLabel: 'Credit/Debit Card' },
                      { id: 'upi', label: 'UPI', icon: '📱', fullLabel: 'UPI' },
                      { id: 'cod', label: 'COD', icon: '💰', fullLabel: 'Cash on Delivery' },
                      { id: 'netbanking', label: 'Net Bank', icon: '🏦', fullLabel: 'Net Banking' }
                    ].map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setPaymentMethod(method.id)}
                        className={`p-3 sm:p-4 border-2 rounded-lg text-center transition-all duration-200 ${
                          paymentMethod === method.id
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-300 hover:border-green-300'
                        }`}
                      >
                        <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                          <span className="text-xl sm:text-2xl">{method.icon}</span>
                          <div>
                            <div className="font-medium text-gray-800 text-xs sm:text-sm hidden sm:block">
                              {method.fullLabel}
                            </div>
                            <div className="font-medium text-gray-800 text-xs sm:text-sm sm:hidden">
                              {method.label}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Card Payment Form */}
                  {paymentMethod === 'card' && (
                    <form className="space-y-4 sm:space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleChange}
                            required
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            required
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                            placeholder="123"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name on Card</label>
                        <input
                          type="text"
                          name="nameOnCard"
                          value={formData.nameOnCard}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                          placeholder="Full name on card"
                        />
                      </div>
                    </form>
                  )}

                  <div className="flex space-x-3 sm:space-x-4 mt-6">
                    <button
                      type="button"
                      onClick={() => setActiveStep(1)}
                      className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 px-4 rounded-lg font-medium transition-colors duration-300 text-sm sm:text-base"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveStep(3)}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300 text-sm sm:text-base"
                    >
                      Review Order
                    </button>
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Review Your Order</h2>
                  
                  {/* Order Summary - Mobile Optimized */}
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
                        <img src={item.image} alt={item.name} className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded flex-shrink-0" />
                        <div className="flex-grow min-w-0">
                          <h4 className="font-semibold text-gray-800 text-sm sm:text-base truncate">{item.name}</h4>
                          <p className="text-gray-600 text-xs sm:text-sm">Quantity: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-green-600 text-sm sm:text-base">₹{item.price * item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Shipping Info Review */}
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Shipping Address</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {formData.firstName} {formData.lastName}<br />
                      {formData.address}<br />
                      {formData.city}, {formData.state} - {formData.pincode}<br />
                      {formData.phone}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="flex items-start space-x-2 mb-4 sm:mb-6">
                      <input type="checkbox" id="agreeTerms" required className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <label htmlFor="agreeTerms" className="text-xs sm:text-sm text-gray-700">
                        I agree to the <Link to="/terms" className="text-green-600 hover:text-green-700">Terms and Conditions</Link>
                      </label>
                    </div>

                    <div className="flex space-x-3 sm:space-x-4">
                      <button
                        type="button"
                        onClick={() => setActiveStep(2)}
                        className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 px-4 rounded-lg font-medium transition-colors duration-300 text-sm sm:text-base"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300 text-sm sm:text-base"
                      >
                        Place Order
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 sticky top-24">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Order Summary</h3>
              
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">₹{getCartTotal()}</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">₹{shippingCost}</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">₹{tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-2 sm:pt-3">
                  <div className="flex justify-between text-base sm:text-lg font-bold">
                    <span>Total</span>
                    <span>₹{totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges - Mobile Optimized */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between sm:justify-center sm:space-x-4 lg:space-x-6 text-gray-500">
                  <div className="text-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1">
                      <span className="text-green-600 text-xs sm:text-sm">🔒</span>
                    </div>
                    <span className="text-xs">Secure</span>
                  </div>
                  <div className="text-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1">
                      <span className="text-green-600 text-xs sm:text-sm">🚚</span>
                    </div>
                    <span className="text-xs">Fresh</span>
                  </div>
                  <div className="text-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1">
                      <span className="text-green-600 text-xs sm:text-sm">⭐</span>
                    </div>
                    <span className="text-xs">Quality</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* Mobile Bottom Bar for Quick Actions */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-40">
              <div className="flex justify-between items-center">
                  <div>
                      <div className="text-sm text-gray-600">Total</div>
                      <div className="text-lg font-bold text-green-600">₹{totalAmount.toFixed(2)}</div>
                  </div>
                  <button
                      onClick={() => {
                          if (activeStep === 3) {
                              // Create a mock event object for handleSubmit
                              const mockEvent = {
                                  preventDefault: () => { }
                              };
                              handleSubmit(mockEvent);
                          } else {
                              setActiveStep(activeStep + 1);
                          }
                      }}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex-1 ml-4 max-w-48 text-sm"
                  >
                      {activeStep === 3 ? 'Place Order' : 'Continue'}
                  </button>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Checkout;