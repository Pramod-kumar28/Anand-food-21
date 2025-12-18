import React, { useState } from 'react';
import { famAddaProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

const FamAdda = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeFeature, setActiveFeature] = useState(0);

  const regions = ['all', ...new Set(famAddaProducts.map(product => product.region))];
  const categories = ['all', ...new Set(famAddaProducts.map(product => product.category))];

  const filteredProducts = famAddaProducts.filter(product => {
    const regionMatch = selectedRegion === 'all' || product.region === selectedRegion;
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    return regionMatch && categoryMatch;
  });

  const features = [
    {
      icon: "🏪",
      title: "Direct from Iconic Shops",
      description: "Sourced directly from legendary establishments that have perfected their recipes over generations"
    },
    {
      icon: "👨‍🍳",
      title: "Original Creators",
      description: "No replicas or alternatives - only authentic products from their original makers"
    },
    {
      icon: "📦",
      title: "Freshness Preserved",
      description: "Specialized packaging that maintains taste, aroma, and freshness during transit"
    },
    {
      icon: "🎯",
      title: "Curated Selection",
      description: "Handpicked specialties from across India, taste-tested for quality and authenticity"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Delhi",
      text: "FamAdda brought the authentic taste of Kolkata's mishti to our home in Delhi. The rosogollas were as fresh as if we bought them directly from the shop in Kolkata.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      text: "As someone who values traditional foods, I appreciate how FamAdda preserves authentic recipes. The Rajasthani namkeens taste exactly like what I enjoyed in Jaipur.",
      rating: 5
    },
    {
      name: "Ananya Patel",
      location: "Bangalore",
      text: "The Kerala banana chips and Tamil Nadu murukku brought back memories of my grandmother's cooking. Truly authentic and delicious!",
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white mt-16">
      {/* Enhanced Hero Section - Blue Theme */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden px-4">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        
        <div className="container-custom py-14 lg:py-14 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <span className="text-blue-200 text-sm font-medium">🎉 India's Culinary Heritage Preserved</span>
            </div>
            <h1 className="text-2xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              FamAdda
            </h1>
            <p className="text-lg lg:text-xl mb-6 text-blue-100">
              India's Regional Flavours, Preserved to Perfection
            </p>

            
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg text-sm">
                Explore Regional Flavors
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100 px-4">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">FamAdda Delivers Authenticity</h2>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto">
              FamAdda is a unique food concept that brings together India’s most iconic tastes from every
              corner of the country all in one place. Whether it’s the timeless sweets of West Bengal, the
              royal namkeens inspired by the flavours of Rajasthan, the bold and fiery snacks born in Andhra
              Pradesh and Telangana, the beloved classics from Maharashtra, the traditional delicacies of
              Tamil Nadu, or the handcrafted treats from the hills of Himachal Pradesh and Uttarakhand,
              FamAdda curates the nation’s finest regional specialties with authenticity and pride.
              
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              {/* Feature Tabs */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeFeature === index 
                        ? 'bg-white shadow-lg border-l-4 border-blue-500 transform scale-105' 
                        : 'bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80'
                    }`}
                    onMouseEnter={() => setActiveFeature(index)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{feature.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-1">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              
            </div>

            <div className="animate-fade-in">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-4 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-4 text-center">Featured Regions</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "West Bengal", icon: "🎭", specialty: "Mishti & Sweets", color: "from-red-400 to-red-600" },
                    { name: "Rajasthan", icon: "🏜️", specialty: "Namkeens & Snacks", color: "from-orange-400 to-orange-600" },
                    { name: "Andhra Pradesh", icon: "🌶️", specialty: "Spicy Specialties", color: "from-green-400 to-green-600" },
                    { name: "Maharashtra", icon: "🎯", specialty: "Chivda & Farsan", color: "from-blue-400 to-blue-600" },
                    { name: "Tamil Nadu", icon: "☕", specialty: "Murukku & Snacks", color: "from-purple-400 to-purple-600" },
                    { name: "Kerala", icon: "🥥", specialty: "Banana Chips", color: "from-teal-400 to-teal-600" }
                  ].map((region, index) => (
                    <div 
                      key={index} 
                      className={`bg-gradient-to-br ${region.color} rounded-lg p-3 text-center hover:transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-md`}
                    >
                      <div className="text-xl mb-1">{region.icon}</div>
                      <div className="font-semibold text-xs mb-1">{region.name}</div>
                      <div className="text-xs text-white text-opacity-80">{region.specialty} </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Specialties Showcase */}
      <section className="py-16 bg-white px-4">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Culinary Journey Across India</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              FamAdda isn’t just a marketplace it’s a celebration of India’s food heritage, bringing
              legendary sweets, snacks, namkeens, savories, and traditional delicacies from across all
              regions and states straight to your table with the same authenticity they are known for
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                region: "Bengal",
                specialty: "Legendary Sweets",
                description: "Rosogolla, Sandesh, Mishti Doi from iconic sweet shops of Kolkata",
                image: "🎭",
                color: "bg-red-50 border-red-200"
              },
              {
                region: "Rajasthan",
                specialty: "Royal Namkeens",
                description: "Bhujia, Daal Baati, and savory snacks with authentic royal flavors",
                image: "🏜️",
                color: "bg-orange-50 border-orange-200"
              },
              {
                region: "Andhra & Telangana",
                specialty: "Fiery Snacks",
                description: "Spicy mixtures, peanuts, and traditional savories with bold flavors",
                image: "🌶️",
                color: "bg-green-50 border-green-200"
              },
              {
                region: "Maharashtra",
                specialty: "Beloved Classics",
                description: "Chivda, Karanji, Shankarpali from Mumbai and Pune's famous eateries",
                image: "🎯",
                color: "bg-blue-50 border-blue-200"
              },
              {
                region: "Tamil Nadu & Kerala",
                specialty: "Traditional Specialties",
                description: "Murukku, Banana Chips, and authentic snacks from South India",
                image: "🥥",
                color: "bg-purple-50 border-purple-200"
              },
              {
                region: "Punjab & Delhi",
                specialty: "Hearty Delicacies",
                description: "Mathri, Namak Pare, and traditional sweets from North India",
                image: "🍯",
                color: "bg-blue-50 border-blue-200"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`${item.color} border-2 rounded-xl p-4 hover:shadow-lg transition-all duration-300 animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-3">{item.image}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{item.region}</h3>
                <h4 className="text-base font-semibold text-blue-600 mb-1">{item.specialty}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-grey-100 px-4">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { number: "50+", label: "Iconic Partners" },
              { number: "25+", label: "Indian States" },
              { number: "98%", label: "Customer Satisfaction" },
              { number: "24-48h", label: "Delivery Time" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Products Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50 px-4">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Regional Delicacies</h2>
            <p className="text-lg text-gray-600 mb-6">Discover authentic tastes from across India</p>
            
            {/* Enhanced Filters */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 p-4 bg-white rounded-xl shadow-sm">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-700 text-sm">Filter by:</span>
                <select 
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm"
                >
                  {regions.map(region => (
                    <option key={region} value={region}>
                      {region === 'all' ? 'All Regions' : region}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-700 text-sm">Category:</span>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <button 
                onClick={() => {
                  setSelectedRegion('all');
                  setSelectedCategory('all');
                }}
                className="px-3 py-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300 text-sm"
              >
                Clear Filters
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                brand="famadda"
                className="animate-slide-up hover:transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-5xl mb-3">🍽️</div>
              <p className="text-lg text-gray-600 mb-3">No products found for the selected filters.</p>
              <button 
                onClick={() => {
                  setSelectedRegion('all');
                  setSelectedCategory('all');
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 text-sm"
              >
                Show All Products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white px-4">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Hear from families who have experienced authentic regional flavors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">{testimonial.name}</h4>
                    <p className="text-gray-600 text-xs">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex text-blue-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < testimonial.rating ? "text-blue-500" : "text-blue-200"}>
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Taste Authentic India?</h2>
          <p className="text-lg mb-6 text-blue-100 max-w-2xl mx-auto">
            Join thousands of families who have made FamAdda their gateway to India's rich culinary heritage
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg text-sm">
              Start Your Culinary Journey
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 text-sm">
              View All Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FamAdda;