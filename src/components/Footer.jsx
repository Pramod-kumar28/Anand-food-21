import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { path: "/", label: "Home", icon: "fas fa-home" },
    { path: "/amruthdhan", label: "AmruthDhan", icon: "fas fa-wine-bottle" },
    { path: "/famadda", label: "FamAdda", icon: "fas fa-utensils" },
    { path: "/about", label: "About", icon: "fas fa-info-circle" },
    { path: "/contact", label: "Contact", icon: "fas fa-envelope" }
  ];

  const contactInfo = [
    { icon: "fas fa-map-marker-alt", text: "H.No. 131/A, 2nd Floor, MLA Colony, Beside Vamsiram Banjara Abodes, Road No.12, Lane 14, Banjara Hills, Hyderabad-500034." },
    { icon: "fas fa-phone", text: "+91 98765 43210" },
    { icon: "fas fa-envelope", text: "info@anandgroup.org" },
    { icon: "fas fa-clock", text: "Mon - Sun: 7:00 AM - 10:00 PM" }
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", url: "#", color: "hover:bg-blue-600" },
    { icon: "fab fa-twitter", url: "#", color: "hover:bg-blue-400" },
    { icon: "fab fa-instagram", url: "#", color: "hover:bg-pink-600" },
    { icon: "fab fa-linkedin-in", url: "#", color: "hover:bg-blue-800" },
    { icon: "fab fa-youtube", url: "#", color: "hover:bg-red-600" }
  ];

  const openLegalModal = (type) => {
    setActiveModal(type);
  };

  const closeLegalModal = () => {
    setActiveModal(null);
  };

  const legalContent = {
    Privacy: {
      title: "Privacy Policy",
      content: `
        <div class="space-y-4">
          <p class="text-gray-700"><strong>Last Updated:</strong> ${currentYear}</p>
          
          <div>
            <h4 class="text-lg font-semibold text-green-800 mb-2">Information We Collect</h4>
            <ul class="list-disc list-inside space-y-1 text-gray-600">
              <li>Personal identification and contact information</li>
              <li>Delivery addresses and preferences</li>
              <li>Order history and product preferences</li>
              <li>Payment information (securely processed)</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-green-800 mb-2">How We Use Your Information</h4>
            <ul class="list-disc list-inside space-y-1 text-gray-600">
              <li>Process and deliver your orders</li>
              <li>Provide personalized product recommendations</li>
              <li>Communicate order updates and offers</li>
              <li>Ensure food safety and quality standards</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-green-800 mb-2">Data Protection</h4>
            <p class="text-gray-600">We implement strict security measures to protect your personal information. All payment data is encrypted and handled by secure payment processors.</p>
          </div>
        </div>
      `
    },
    Terms: {
      title: "Terms of Service",
      content: `
        <div class="space-y-4">
          <p class="text-gray-700"><strong>Effective Date:</strong> ${currentYear}</p>
          
          <div>
            <h4 class="text-lg font-semibold text-green-800 mb-2">Ordering & Delivery</h4>
            <ul class="list-disc list-inside space-y-1 text-gray-600">
              <li>Orders must be placed through our official channels</li>
              <li>Delivery times may vary based on location and availability</li>
              <li>Freshness and quality are guaranteed for all products</li>
              <li>Cancellation policies vary by product type</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-green-800 mb-2">Product Quality</h4>
            <ul class="list-disc list-inside space-y-1 text-gray-600">
              <li>All products are 100% pure and authentic</li>
              <li>Freshness is guaranteed with specialized packaging</li>
              <li>Regional delicacies maintain original taste and quality</li>
              <li>Quality checks at every stage of production</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-green-800 mb-2">Returns & Refunds</h4>
            <p class="text-gray-600">We guarantee complete satisfaction. If you're not happy with any product, contact us within 24 hours of delivery for a replacement or refund.</p>
          </div>
        </div>
      `
    },
    Disclaimer: {
      title: "Disclaimer",
      content: `
        <div class="space-y-4">
          <div>
            <h4 class="text-lg font-semibold text-green-800 mb-2">Food Safety & Quality</h4>
            <p class="text-gray-600">All our products undergo stringent quality checks and are prepared under hygienic conditions. However, customers with specific allergies or dietary restrictions should review product ingredients carefully.</p>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-green-800 mb-2">Freshness Guarantee</h4>
            <p class="text-gray-600">While we take every measure to ensure product freshness during delivery, external factors like weather conditions and traffic may occasionally affect delivery times.</p>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-green-800 mb-2">Regional Authenticity</h4>
            <p class="text-gray-600">Our regional delicacies are sourced directly from their places of origin. We strive to maintain authentic taste, but minor variations may occur due to seasonal ingredient availability.</p>
          </div>
        </div>
      `
    }
  };

  return (
    <>
      {/* Main Footer */}
      <footer className="bg-blue-900 text-white px-4">
        <div className="container mx-auto px-4">
          <div className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Company Info - Completely Left Aligned */}
              <div className="text-left">
                <div className="flex flex-col items-start space-y-4">
                  {/* Branding Section */}
                  <div className="flex items-center space-x-1">
                    <div className="flex items-center space-x-1">
                      <div className="w-14 h-14 rounded-full border-2 border-amber-200 overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src="/images/CEO.png"
                          alt="Anand Foods Founder"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="w-12 h-12 flex-shrink-0 rounded-full overflow-hidden">
                        <img
                          src="/images/logo.png"
                          alt="Anand Foods"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="-ml-3">
                      {/* Desktop View */}
                      <h2 className="hidden lg:block text-md font-bold leading-tight">
                        <span className="text-amber-400">ANAND</span> 
                        <span className="text-white"> FOODS</span>
                      </h2>
                      {/* Mobile View */}
                      <h2 className="lg:hidden text-[15px] font-bold leading-tight -pl-2">
                        <span className="text-amber-400">ANAND</span> 
                        <span className="text-white"> FOODS</span>
                      </h2>
                      <p className="text-amber-200 text-[10px] md:text-xs italic mt-1">"Pure Goodness in Every Drop & Bite"</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Delivering trust, tradition, and quality with every order. Experience the gold standard of pure buffalo milk 
                    and authentic regional flavors from across India, directly to your home.
                  </p>

                  {/* Social Links */}
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className={`w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                      >
                        <i className={social.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Links - Completely Left Aligned */}
              <div className="text-left">
                <h3 className="text-lg font-bold mb-6 text-amber-500">Quick Links</h3>
                <div className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="flex items-center space-x-3 text-gray-300 hover:text-amber-400 transition-all duration-200 group justify-start"
                    >
                      {/* <i className={`${link.icon} text-amber-400 group-hover:scale-110 transition-transform duration-200`}></i> */}
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Info - Completely Left Aligned */}
              <div className="text-left">
                <h3 className="text-lg font-bold mb-6 text-amber-500">Contact Info</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 group justify-start">
                      <i className={`${item.icon} text-amber-400 mt-1 group-hover:scale-110 transition-transform duration-200`}></i>
                      <span className="text-gray-300 text-sm leading-relaxed">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar - Left Aligned on Mobile */}
          <div className="border-t border-green-700 py-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
              <div className="text-left">
                <p className="text-gray-400 text-sm">
                  © {currentYear} <span className="text-amber-400 font-semibold">Anand Foods</span>. All rights reserved.
                </p>
              </div>

              <div className="flex flex-wrap justify-start lg:justify-center gap-6">
                <button
                  onClick={() => openLegalModal("Privacy")}
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => openLegalModal("Terms")}
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  Terms of Service
                </button>
                <button
                  onClick={() => openLegalModal("Disclaimer")}
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  Disclaimer
                </button>
              </div>

              <div className="text-left lg:text-right">
                <p className="text-gray-500 text-sm">
                  Designed by <a href="https://designcareermetrics.com/" className="text-amber-400">Design Career Metrics</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modals */}
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  {legalContent[activeModal]?.title}
                </h3>
                <button
                  onClick={closeLegalModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: legalContent[activeModal]?.content }}
              />
              
              <div className="flex justify-end mt-6">
                <button
                  onClick={closeLegalModal}
                  className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Back to Top Button - Conditionally Rendered */}
      {/* {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-amber-500 text-white rounded-full shadow-2xl hover:bg-amber-600 transition-all duration-300 flex items-center justify-center z-40 hover:scale-110"
          aria-label="Back to top"
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      )} */}
    </>
  );
};

export default Footer;