import React, { useEffect } from 'react'

const About = () => {
  // Enhanced animations for About page
  useEffect(() => {
    // Counter animation
    const animateCounters = () => {
      const counters = document.querySelectorAll('.counter');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const suffix = counter.textContent.includes('Million') ? 'M+' : '+';
        let count = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        
        const updateCount = () => {
          if (count < target) {
            count += increment;
            counter.textContent = Math.floor(count) + (suffix && count >= target ? suffix : '');
            setTimeout(updateCount, 16);
          } else {
            counter.textContent = target + (suffix ? suffix : '');
          }
        };
        
        updateCount();
      });
    };

    // Enhanced fade in on scroll with staggered delays
    const checkFadeIn = () => {
      const fadeElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
      fadeElements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          // Stagger animation delays based on index
          setTimeout(() => {
            element.classList.add('visible');
          }, index * 100);
        }
      });
    };

    // Initialize animations
    const timer = setTimeout(() => {
      animateCounters();
      checkFadeIn();
    }, 100);

    window.addEventListener('scroll', checkFadeIn);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', checkFadeIn);
    };
  }, []);

  // Founder Profile Component with enhanced animations
  const FounderProfile = () => (
    <section className="max-w-6xl mx-auto pt-12 py-2">
      <div className="bg-white rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-2 p-2 items-start">
        {/* Left: Image card with quote below */}
        <div className="space-y-6">
          <div className="relative overflow-hidden slide-in-left">
            <div className='flex item-end w-full justify-center'>
              <img
                src="/images/CEO.png"
                alt="Founder"
                className="w-70 h-[600px] object-cover object-top center transform hover:scale-105 transition-transform duration-700"
                style={{ borderRadius: 12 }}
              />
            </div>

            {/* Small floating badge with animation */}
            <div className="absolute bottom-4 right-4 lg:bottom-5 lg:right-20 sm:bottom-10 sm:right-20 scale-in">
              <div className="bg-white px-4 py-3 rounded-lg shadow-lg font-semibold text-gray-700 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                <div className="uppercase text-lg tracking-wide text-center text-amber-500 font-bold">ANAND</div>
                <div className="text-xs text-gray-500 text-center">Founder & Chairman</div>
              </div>
            </div>
          </div>

          {/* Quote below image */}
          <blockquote className="border-l-4 border-amber-500 pl-4 italic text-gray-700 bg-amber-50 rounded-lg p-4 text-base slide-in-left">
            "We don't just sell products; we deliver trust, tradition, and quality with every order. Pure food is not just our business, but our moral responsibility to every family."
          </blockquote>
        </div>

        {/* Right: Content */}
        <div className="pt-6 slide-in-right">
          <h2 className="text-3xl font-bold text-blue-800 mb-2">Anand</h2>
          <p className="text-sm text-green-600 font-medium">Founder & Chairman</p>

          {/* Description */}
          <div className="mb-6 space-y-4 mt-6">
            <p className="text-gray-700 leading-relaxed text-base fade-in">
              Under the visionary leadership of our Founder, Mr. Anand, Anand Foods was established on the foundational principle of 
              <span className='font-bold text-amber-500'> delivering purity in a world where adulteration has become common</span>.
            </p>
            <p className="text-gray-700 leading-relaxed text-base fade-in">
              With a deep-rooted passion for authentic Indian cuisine and a commitment to quality, Mr. Anand envisioned a future where every family could access pure buffalo milk and genuine regional delicacies, just as nature intended.
            </p>
            <p className="text-gray-700 leading-relaxed text-base fade-in">
              His journey began with a simple belief: that food should be pure, safe, and authentic. This belief has grown into Anand Foods' mission to preserve India's culinary heritage while ensuring the highest standards of quality.
            </p>
          </div>

          {/* Core Values */}
          <div className="mt-8 fade-in">
            <h3 className="text-xl font-bold text-green-800 mb-4">Our Food Philosophy</h3>
            <div className="space-y-3">
              {[
                { icon: 'fas fa-leaf', text: 'Purity is our Priority' },
                { icon: 'fas fa-history', text: 'Preserving Culinary Heritage' },
                { icon: 'fas fa-heart', text: 'Family-First Approach' }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="flex items-center text-gray-700 p-3 rounded-lg hover:bg-amber-50 transition-all duration-300 transform hover:translate-x-2"
                >
                  <i className={`${value.icon} text-blue-500 mr-3 text-lg`}></i>
                  <span className="font-medium">{value.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Stats Section Component with enhanced animations
  const StatsSection = () => (
    <section className="py-6 text-black w-full bg-gradient-to-br from-green-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { count: 50, label: 'Thousand Families', icon: 'fas fa-home' },
            { count: 150, label: 'Partner Farms', icon: 'fas fa-tractor' },
            { count: 25, label: 'Indian States', icon: 'fas fa-map' },
            { count: 98, label: 'Purity Score %', icon: 'fas fa-award' }
          ].map((stat, index) => (
            <div key={index} className="p-6 fade-in group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl text-green-800 font-bold mb-2 counter" data-count={stat.count}>0</div>
              <div className="text-lg text-black font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  const ideologyPillars = [
    {
      icon: 'fas fa-hand-holding-heart',
      title: 'Purity First Approach',
      description: 'Every product undergoes stringent quality checks to ensure it reaches you in its most natural form, free from additives, preservatives, or dilution.',
    },
    {
      icon: 'fas fa-history',
      title: 'Heritage Preservation',
      description: 'We celebrate and preserve India\'s diverse culinary traditions, bringing authentic regional flavors directly from their places of origin to your home.',
    },
    {
      icon: 'fas fa-seedling',
      title: 'Farm-to-Family Freshness',
      description: 'Our supply chain is designed to ensure freshness from trusted farms to your home, maintaining the natural goodness of every product.',
    }
  ]

  return (
    <div className="overflow-hidden pt-20">
      {/* Hero Section with enhanced animation */}
      <section className="text-white h-[55vh] py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
        
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="text-xl text-amber-300 mb-4 font-sans fade-in">
            Pure Goodness in Every Drop & Bite
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4 fade-in">
            Our Food Journey
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto fade-in animation-delay-300">
            Built on purity, driven by tradition, delivered with love
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto py-6 px-4">
          <FounderProfile />
        </div>
      </section>

      {/* Ideology Section with enhanced animations */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-4 fade-in">Our Food Philosophy</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed fade-in">
              Our approach to food is rooted in timeless principles that guide every product and service we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {ideologyPillars.map((pillar, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl text-center fade-in group hover:-translate-y-2 transition-all duration-500"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${pillar.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-amber-600 transition-colors duration-300">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Mission Statement with enhanced animation */}
<section className="py-16 bg-gradient-to-br from-primary-50 to-amber-50 px-4 fade-in">
  <div className="container-custom">
    <div className="max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center bg-primary-100 text-primary-700 rounded-full px-3 py-1 mb-4">
        <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-1.5"></span>
        <span className="text-xs font-semibold">Our Promise</span>
      </div>
      
      <h2 className="text-2xl lg:text-4xl font-bold text-primary-800 mb-8 fade-in">
        Our Commitment to Purity & Authenticity
      </h2>
      
      <div className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-8 shadow-xl border-l-4 border-primary-500 transform hover:scale-105 transition-transform duration-300">
        <div className="mb-6">
          <h1 className='font-semibold text-primary-500 text-lg'>AmruthDhan</h1>
          <p className="text-lg text-left text-gray-700 leading-relaxed mb-6 fade-in">
            Milk is not just another product it is part of every family's daily life. 
            <span className="font-semibold text-primary-600"> AmruthDhan ensures that what reaches your home is pure, safe, and exactly as nature intended.</span>
          </p>
          <h1 className='font-semibold text-primary-500 text-lg'>Famdda</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 fade-in">
            For regional specialties, <span className="font-semibold text-blue-600">Famdda ensures that what you receive in your city tastes exactly as it does in the hometown where it was born.</span> 
            Same recipe. Same craftsmanship. Same heritage. Delivered with care, quality, and authenticity.
          </p>
        </div>
        
        <div className="pt-6">        
          <div className="flex items-center justify-center space-x-3 fade-in animation-delay-500">
            <div>
              <div className="text-primary-600 font-semibold">Anand, Founder & Chairman</div>
              <div className="text-gray-500 text-sm">Anand Foods</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Brands Showcase Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 fade-in">Our Flagship Brands</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed fade-in">
              Two brands, one commitment to purity and authenticity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* AmruthDhan Brand */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-500 fade-in group hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-wine-bottle text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-800">AmruthDhan</h3>
                  <p className="text-green-600 font-medium">The Gold Standard of Pure Buffalo Milk</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                100% pure buffalo milk sourced from trusted dairy farms, delivered fresh to your home. 
                No additives, no compromise, no shortcuts just pure, natural milk as nature intended.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span>Stringent quality checks at every stage</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span>Farm to home freshness guaranteed</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span>Rich in A2 protein and natural nutrients</span>
                </li>
              </ul>
            </div>

            {/* Famdda Brand */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-500 fade-in group hover:-translate-y-2 animation-delay-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-utensils text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-amber-700">Famdda</h3>
                  <p className="text-amber-600 font-medium">India's Regional Flavours, Preserved to Perfection</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                A celebration of India's culinary heritage. Authentic regional delicacies sourced directly from iconic shops across India, 
                delivered to your doorstep with the same taste, craftsmanship, and heritage.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-amber-500 mr-3"></i>
                  <span>Direct from original, iconic shops</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-amber-500 mr-3"></i>
                  <span>No replicas, only genuine creators</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-amber-500 mr-3"></i>
                  <span>Taste preserved from hometown to your city</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Enhanced Animation Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .fade-in {
          opacity: 0;
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .slide-in-left {
          opacity: 0;
          animation: slide-in-left 0.8s ease-out forwards;
        }
        
        .slide-in-right {
          opacity: 0;
          animation: slide-in-right 0.8s ease-out forwards;
        }
        
        .scale-in {
          opacity: 0;
          animation: scale-in 0.6s ease-out forwards;
        }
        
        .visible {
          opacity: 1;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        /* Hover effects */
        .group:hover .group-hover\:scale-110 {
          transform: scale(1.1);
        }
        
        .group:hover .group-hover\:-translate-y-2 {
          transform: translateY(-0.5rem);
        }
      `}</style>
    </div>
  )
}

export default About