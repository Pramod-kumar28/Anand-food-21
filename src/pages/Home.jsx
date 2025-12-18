import React from 'react';
import { Link } from 'react-router-dom';
import { amruthDhanProducts, famAddaProducts } from '../data/products';

const Home = () => {
  const featuredAmruthDhan = amruthDhanProducts.slice(0, 4);
  const featuredFamAdda = famAddaProducts.slice(0, 4);
  
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      text: "AmruthDhan milk brought back the taste of my childhood. Pure, creamy, and absolutely natural!",
      rating: 5,
      avatar: "PS"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi",
      text: "FamAdda's regional delicacies are incredible! The Kolkata Rosogolla tastes exactly like I had in my last visit.",
      rating: 5,
      avatar: "RK"
    },
    {
      id: 3,
      name: "Anita Patel",
      location: "Bangalore",
      text: "Finally, a brand that delivers authentic taste with purity. The buffalo paneer is exceptional!",
      rating: 4,
      avatar: "AP"
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Families", icon: "fas fa-users" },
    { number: "25+", label: "Cities Across India", icon: "fas fa-city" },
    { number: "50+", label: "Regional Delicacies", icon: "fas fa-utensils" },
    { number: "99%", label: "Purity Guaranteed", icon: "fas fa-check-circle" }
  ];

  const features = [
    {
      icon: "fas fa-truck",
      title: "Fast Delivery",
      description: "Fresh products delivered to your doorstep within 24 hours"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Quality Assured",
      description: "Every product undergoes 6-stage quality check process"
    },
    {
      icon: "fas fa-tractor",
      title: "Farm Fresh",
      description: "Direct from trusted farms and authentic regional kitchens"
    },
    {
      icon: "fas fa-handshake",
      title: "Trusted Source",
      description: "Sourced directly from original creators and certified farms"
    }
  ];

const regions = [
  {
    name: "North India",
    specialties: ["Bikaneri Bhujia", "Kashmiri Kahwa Tea", "Bal Mithai (Uttarakhand)", "Patiala Shahi Ladoo", "Amritsari Papad"],
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop",
    color: "from-orange-500 to-red-500",
    description: "Authentic snacks, sweets, and teas from Punjab, Rajasthan, Kashmir, Himachal, and Uttarakhand - sourced directly from original makers."
  },
  {
    name: "South India",
    specialties: ["Mysore Pak", "Filter Coffee Powder", "Kerala Banana Chips", "Athreyapuram Putharekulu", "Mangaluru Buns Mix"],
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&h=300&fit=crop",
    color: "from-green-500 to-blue-500",
    description: "Iconic sweets, snacks, and instant mixes from Tamil Nadu, Kerala, Andhra, Telangana, and Karnataka in their original packaged form."
  },
  {
    name: "East India",
    specialties: ["Bengali Rosogolla (Jar)", "Assam Tea Leaves", "Bihar's Sattu Powder", "Odisha's Chhena Poda", "Silchar Tea"],
    image: "https://images.unsplash.com/photo-1586445441244-8130c91b54f0?w=400&h=300&fit=crop",
    color: "from-purple-500 to-pink-500",
    description: "Premium teas, traditional sweets in jars, and regional flours from Bengal, Assam, Bihar, Odisha, and the Northeast."
  },
  {
    name: "West India",
    specialties: ["Gujarati Fafda", "Maharashtrian Chivda", "Goan Recheado Masala", "Puran Poli Mix", "Shrewsbury Biscuits (Pune)"],
    image: "https://images.unsplash.com/photo-1585937421612-70ca4d8beba5?w=400&h=300&fit=crop",
    color: "from-yellow-500 to-orange-500",
    description: "Traditional snacks, spice mixes, and biscuits from Maharashtra, Gujarat, Goa, and Madhya Pradesh - shelf-stable and authentic."
  }
];

  return (
    <div className="min-h-screen mx-auto mt-16">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white overflow-hidden px-2">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-secondary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container-custom section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2 animate-pulse"></span>
                <span className="text-sm font-medium">Trusted by 10,000+ Families</span>
              </div>
              
              <h1 className=" lg:text-5xl text-3xl font-bold mb-6 leading-tight">
                Pure Food.
                <br />
                <span className="text-secondary-400 bg-gradient-to-r from-secondary-400 to-secondary-600 bg-clip-text text-transparent">
                  Authentic Taste.
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl mb-8 text-primary-100 leading-relaxed">
                Where <span className="font-semibold text-white">purity meets tradition</span>. Experience the gold standard of 
                pure buffalo milk with AmruthDhan and discover India's rich culinary heritage with FamAdda - 
                delivered with love to your doorstep.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/amruthdhan" className="btn-secondary group relative overflow-hidden">
                  <span className="relative z-10">Discover AmruthDhan</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-secondary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </Link>
                <Link to="/famadda" className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  Explore FamAdda
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-primary-200">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>100% Natural & Pure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>No Additives Ever</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Farm to Home Fresh</span>
                </div>
              </div>
            </div>

            {/* Enhanced Hero Images */}
            <div className="animate-fade-in">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-3 shadow-2xl border border-white/20">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl p-2 transform rotate-3 shadow-2xl hover:rotate-0 transition-transform duration-500 group">
                      <div className="relative overflow-hidden rounded-xl">
                        <img 
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHj3qbL8WznXgF7uHITPjtbuvqaZ7d-FMk7g&s" 
                          alt="Pure Buffalo Milk" 
                          className="w-full h-28 object-cover rounded-xl group-hover:scale-110 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-primary-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-2 transform -rotate-2 mt-6 shadow-2xl hover:rotate-0 transition-transform duration-500 group">
                      <div className="relative overflow-hidden rounded-xl">
                        <img 
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlxZtyxgUItpxl5ReCVZFOhZ4JgtNi9-w3SA&s" 
                          alt="Bengal Sweets" 
                          className="w-full h-28 object-cover rounded-xl group-hover:scale-110 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-secondary-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-2 transform rotate-2 shadow-2xl hover:rotate-0 transition-transform duration-500 group">
                      <div className="relative overflow-hidden rounded-xl">
                        <img 
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPHYUpcpt8TkxKQqqzv2vjG4rNwRGdTEG9vQ&s" 
                          alt="Putharekulu" 
                          className="w-full h-28 object-cover rounded-xl group-hover:scale-110 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-secondary-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-2 transform -rotate-3 mt-6 shadow-2xl hover:rotate-0 transition-transform duration-500 group">
                      <div className="relative overflow-hidden rounded-xl">
                        <img 
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdzU5vHTTkxpZEmQ5Z6DeYEyA75RWSzjaaxA&s" 
                          alt="Fresh Curd" 
                          className="w-full h-28 object-cover rounded-xl group-hover:scale-110 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-primary-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-secondary-400 rounded-full opacity-20 animate-bounce"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary-400 rounded-full opacity-30 animate-bounce animation-delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


{/* Our Story Section */}
<section className="section-padding bg-white px-4">
  <div className="container-custom px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="animate-fade-in">
        <div className="inline-flex items-center bg-primary-100 text-primary-700 rounded-full px-4 py-2 mb-4">
          <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
          <span className="text-sm font-semibold">Our Journey</span>
        </div>
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
          The Story Behind <span className="text-primary-600">Anand Foods</span>
        </h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Born from a simple belief that every family deserves access to pure, unadulterated food, 
          Anand Foods began as a mission to restore trust in what we consume daily.
        </p>
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-primary-600 mb-2">AmruthDhan</h3>
          <p className="text-gray-600 leading-relaxed">
            AmruthDhan is our commitment to purity in every drop. We source directly from trusted farms, 
            ensuring our buffalo milk reaches your table exactly as nature intended rich, chemical-free, 
            and unadulterated. Each batch is tested for quality and nutritional value.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-secondary-600 mb-2">FamAdda</h3>
          <p className="text-gray-600 leading-relaxed">
            FamAdda celebrates India's diverse culinary heritage by bringing authentic regional specialties 
            to your home. From Athreyapuram Putharekulu to Bikaneri Bhujia, we partner with local artisans 
            to preserve traditional recipes and support sustainable food ecosystems across the country.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <Link to="/about" className="btn-primary text-sm px-6 py-2">
            Learn Our Story
          </Link>
          <Link to="/contact" className="btn-secondary text-sm px-6 py-2">
            Get In Touch
          </Link>
        </div>
      </div>
      
      <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6">
          <img 
            src="./images/food.png" 
            alt="Our Farm Story" 
            className="w-full h-60 object-cover object-top rounded-xl shadow-lg"
          />
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="text-center">
              <div className="text-xl font-bold text-primary-600">2015</div>
              <div className="text-xs text-gray-600">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-secondary-600">50+</div>
              <div className="text-xs text-gray-600">Partner Farms</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* AmruthDhan Introduction */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white ">
        <div className="container-custom px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center bg-primary-100 text-primary-700 rounded-full px-4 py-2 mb-3">
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
              <span className="text-sm font-semibold">Pure & Natural</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-3">AmruthDhan</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              AmruthDhan is the flagship milk division of Anand Foods, created with the vision of restoring
              purity in a world where adulteration has become increasingly common. Today, finding genuine
              buffalo milk free from chemicals, mixing, preservatives, or dilution is rare. AmruthDhan fills
              this gap with a promise built on freshness, transparency, and authenticity
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="animate-fade-in">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-tint text-primary-600 text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">100% Pure Buffalo Milk</h3>
                    <p className="text-gray-600 text-sm">Sourced from trusted dairy farms with no additives or preservatives</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-search text-primary-600 text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Stringent Quality Checks</h3>
                    <p className="text-gray-600 text-sm">Every batch undergoes 6-stage quality verification process</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-truck text-primary-600 text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Farm to Home Freshness</h3>
                    <p className="text-gray-600 text-sm">Optimized supply chain ensures delivery within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-xl shadow-lg p-5">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Featured Products</h4>
                <div className="grid grid-cols-2 gap-3">
                  {featuredAmruthDhan.slice(0, 2).map((product) => (
                    <div key={product.id} className="bg-gray-50 rounded-lg p-2 text-center">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg mx-auto mb-2"
                      />
                      <div className="text-xs font-medium text-gray-800 mb-1">{product.name}</div>
                      <div className="text-primary-600 font-bold text-sm">₹{product.price}</div>
                    </div>
                  ))}
                </div>
                <Link to="/amruthdhan" className="btn-primary w-full mt-3 text-center block text-sm py-2">
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="section-padding bg-gray-50 py-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-2xl mb-2">
                    <i className={`${stat.icon} text-primary-600`}></i>
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-primary-600 mb-1">{stat.number}</div>
                  <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FamAdda Introduction */}
      <section className="section-padding bg-gradient-to-br from-secondary-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center bg-secondary-100 text-secondary-700 rounded-full px-4 py-2 mb-3">
              <span className="w-2 h-2 bg-secondary-600 rounded-full mr-2"></span>
              <span className="text-sm font-semibold">Authentic Regional Taste</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">FamAdda</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              FamAdda is a celebration of India’s culinary heritage. Every region of our country carries a
              unique food culture, perfected over generations. FamAdda brings these authentic regional
              delicacies directly to your doorstep, ensuring that you experience the true flavour, tradition,
              and craftsmanship of each state
            </p>
          </div>

          {/* Regional Specialties */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {regions.map((region, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-1 bg-gradient-to-r ${region.color}`}></div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{region.name}</h3>
                  <ul className="space-y-1">
                    {region.specialties.map((specialty, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                        {specialty}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/famadda" className="btn-secondary text-sm px-6 py-2">
              Explore All Regional Delicacies
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">Why Choose Anand Foods?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering not just products, but trust and tradition with every order
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center animate-slide-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                  <i className={`${feature.icon} text-white text-lg`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">What Our Families Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of happy families who trust Anand Foods for their daily nutrition and culinary adventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <div className="max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Taste the <span className="text-secondary-400">Difference</span>?
            </h2>
            <p className="text-lg text-primary-100 mb-6 leading-relaxed">
              Join the Anand Foods family today and experience the perfect blend of purity, authenticity, 
              and tradition in every product we deliver.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/amruthdhan" className="btn-secondary text-sm px-6 py-2">
                Start with AmruthDhan
              </Link>
              <Link to="/famadda" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm">
                Discover FamAdda
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;