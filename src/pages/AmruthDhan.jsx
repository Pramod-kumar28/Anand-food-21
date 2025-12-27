// import React from 'react';
// import { amruthDhanProducts } from '../data/products';
// import ProductCard from '../components/ProductCard';
// import { useNavigate } from 'react-router-dom';

// const AmruthDhan = () => {
//   const navigate=useNavigate();
//   const processSteps = [
//     {
//       step: 1,
//       title: "Farm Selection",
//       description: "We partner with trusted dairy farms that follow ethical practices and maintain highest standards of animal care.",
//       icon: "🏞️",
//       color: "from-green-500 to-emerald-600"
//     },
//     {
//       step: 2,
//       title: "Morning Milking",
//       description: "Fresh milk collected during early morning hours to ensure maximum freshness and nutritional value.",
//       icon: "🥛",
//       color: "from-blue-500 to-cyan-600"
//     },
//     {
//       step: 3,
//       title: "Quality Testing",
//       description: "Every batch undergoes 7-stage quality verification including purity, fat content, and freshness tests.",
//       icon: "🔬",
//       color: "from-purple-500 to-indigo-600"
//     },
//     {
//       step: 4,
//       title: "Temperature Control",
//       description: "Maintained at optimal 4°C throughout the supply chain to preserve freshness and prevent bacterial growth.",
//       icon: "❄️",
//       color: "from-cyan-500 to-blue-600"
//     },
//     {
//       step: 5,
//       title: "Packaging",
//       description: "Hygienic, tamper-proof packaging that maintains purity while being environmentally conscious.",
//       icon: "📦",
//       color: "from-orange-500 to-red-500"
//     },
//     {
//       step: 6,
//       title: "Fast Delivery",
//       description: "Delivered to your doorstep within 24 hours of milking, ensuring farm-fresh experience.",
//       icon: "🚚",
//       color: "from-primary-500 to-primary-700"
//     }
//   ];

//   const benefits = [
//     {
//       icon: "💪",
//       title: "Rich in Nutrition",
//       description: "Packed with natural calcium, proteins, and essential vitamins for stronger bones and better health"
//     },
//     {
//       icon: "👶",
//       title: "Safe for Kids",
//       description: "100% pure and natural, making it the perfect choice for your children's growth and development"
//     },
//     {
//       icon: "🌿",
//       title: "No Additives",
//       description: "Completely free from preservatives, chemicals, and artificial enhancers"
//     },
//     {
//       icon: "⚡",
//       title: "Better Digestion",
//       description: "Natural composition makes it easier to digest compared to processed alternatives"
//     }
//   ];

//   const qualityMetrics = [
//     { label: "Fat Content", value: "7.5%", ideal: "6-8%" },
//     { label: "Protein", value: "4.2%", ideal: "3.8-4.5%" },
//     { label: "Lactose", value: "4.8%", ideal: "4.5-5.2%" },
//     { label: "Solids", value: "16.5%", ideal: "15-18%" }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 mx-auto mt-16">
//       {/* Enhanced Hero Section */}
//       <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden px-4">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
//           <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-400 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse animation-delay-2000"></div>
//           <div className="absolute -bottom-32 left-1/2 w-64 h-64 bg-primary-400 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse animation-delay-4000"></div>
//         </div>

//         <div className="container-custom py-14 lg:py-14 relative z-10">
//           <div className="max-w-4xl mx-auto text-center animate-slide-up">
//             <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
//               <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2 animate-pulse"></span>
//               <span className="text-sm font-medium fade-in">The Gold Standard of Pure Buffalo Milk</span>
//             </div>
            
//             <h1 className="text-2xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent fade-in">
//               AmruthDhan
//             </h1>
            
//             <p className="text-lg lg:text-xl mb-6 text-primary-100">
//               Pure. Natural. Uncompromised.
//             </p>
            
//             {/* <p className="text-md text-primary-200 leading-relaxed max-w-2xl mx-auto mb-8">
//               Created with the vision of restoring purity in a world where adulteration has become 
//               increasingly common. Experience genuine buffalo milk — free from chemicals, mixing, 
//               preservatives, or dilution.
//             </p> */}

//             {/* Trust Badges */}
//             <div className="flex flex-wrap justify-center gap-4 mb-8">
//               {[
//                 { icon: "✅", text: "100% Natural" },
//                 { icon: "🚫", text: "No Additives" },
//                 { icon: "🏆", text: "Quality Assured" },
//                 { icon: "⚡", text: "24h Fresh" }
//               ].map((badge, index) => (
//                 <div key={index} className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
//                   <span className="text-sm">{badge.icon}</span>
//                   <span className="text-sm font-medium">{badge.text}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Process Section */}
//       <section className="py-14 bg-gray-100 px-4">
//         <div className="container-custom px-4">
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center bg-primary-100 text-primary-700 rounded-full px-3 py-1 mb-3">
//               <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-1.5"></span>
//               <span className="text-xs font-semibold">Our Journey</span>
//             </div>
//             <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-3">
//               From Farm to Family
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Every drop of AmruthDhan follows a meticulous 6-step process to ensure unparalleled purity and freshness
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {processSteps.map((step, index) => (
//               <div 
//                 key={index}
//                 className="relative animate-fade-in group"
//                 style={{ animationDelay: `${index * 0.15}s` }}
//               >
                
//                 {/* Card */}
//                 <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group-hover:border-primary-200 h-full hover:bg-gradient-to-br hover:from-primary-50 hover:to-primary-100">
//                   {/* Icon */}
//                   <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center text-xl text-white mb-3 shadow-md`}>
//                     {step.icon}
//                   </div>
                  
//                   {/* Content */}
//                   <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Quality Metrics Section */}
//       <section className="py-14 bg-gradient-to-br from-primary-50 to-white px-4 fade-in">
//         <div className="container-custom px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//             <div className="animate-fade-in">
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Laboratory Tested Quality</h2>
//               <p className="text-gray-600 mb-6 leading-relaxed">
//                 Every batch of AmruthDhan undergoes rigorous laboratory testing to ensure it meets 
//                 the highest standards of purity and nutritional value.
//               </p>

//               <div className="space-y-3">
//                 {qualityMetrics.map((metric, index) => (
//                   <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
//                     <div className="flex justify-between items-center mb-1">
//                       <span className="font-semibold text-gray-800 text-sm">{metric.label}</span>
//                       <span className="text-primary-600 font-bold text-sm">{metric.value}</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-1.5">
//                       <div 
//                         className="bg-gradient-to-r from-primary-500 to-primary-600 h-1.5 rounded-full transition-all duration-1000"
//                         style={{ 
//                           width: `${(parseFloat(metric.value) / parseFloat(metric.ideal.split('-')[1])) * 100}%` 
//                         }}
//                       ></div>
//                     </div>
//                     <div className="text-xs text-gray-500 mt-1">Ideal range: {metric.ideal}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
//               <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-4 text-white shadow-xl">
//                 <div className="text-center mb-6">
//                   <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                     </svg>
//                   </div>
//                   <h3 className="text-2xl font-bold mb-2">Quality Assured</h3>
//                   <p className="text-primary-100">Every batch tested for purity and freshness</p>
//                 </div>

//                 <div className="grid grid-cols-2 gap-3">
//                   <div className="bg-white bg-opacity-10 rounded-lg p-3 text-center backdrop-blur-sm">
//                     <div className="text-xl font-bold">100%</div>
//                     <div className="text-xs text-primary-100">Pure Buffalo Milk</div>
//                   </div>
//                   <div className="bg-white bg-opacity-10 rounded-lg p-3 text-center backdrop-blur-sm">
//                     <div className="text-xl font-bold">0%</div>
//                     <div className="text-xs text-primary-100">Additives</div>
//                   </div>
//                   <div className="bg-white bg-opacity-10 rounded-lg p-3 text-center backdrop-blur-sm">
//                     <div className="text-xl font-bold">24h</div>
//                     <div className="text-xs text-primary-100">Fresh Delivery</div>
//                   </div>
//                   <div className="bg-white bg-opacity-10 rounded-lg p-3 text-center backdrop-blur-sm">
//                     <div className="text-xl font-bold">6-Stage</div>
//                     <div className="text-xs text-primary-100">Quality Check</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Health Benefits Section */}
//       <section className="py-14 bg-white px-4">
//         <div className="container-custom">
//           <div className="text-center mb-12">
//             <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-3">
//               Why Choose AmruthDhan?
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Experience the difference that pure, unadulterated buffalo milk makes in your family's health
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {benefits.map((benefit, index) => (
//               <div 
//                 key={index}
//                 className="text-center animate-slide-up group"
//                 style={{ animationDelay: `${index * 0.15}s` }}
//               >
//                 <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 h-full">
//                   <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
//                     <span className="text-xl text-white">{benefit.icon}</span>
//                   </div>
//                   <h3 className="text-base font-bold text-gray-800 mb-2">{benefit.title}</h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section className="py-14 bg-gray-50 px-4">
//         <div className="container-custom">
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center bg-primary-100 text-primary-700 rounded-full px-3 py-1 mb-3">
//               <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-1.5"></span>
//               <span className="text-xs font-semibold">Our Products</span>
//             </div>
//             <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-3">Pure Dairy Excellence</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Experience our range of pure dairy products, crafted with the same commitment to quality and purity
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {amruthDhanProducts.map((product, index) => (
//               <ProductCard 
//                 key={product.id} 
//                 product={product} 
//                 brand="amruthdhan"
//                 className="animate-slide-up"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               />
//             ))}
//           </div>

//           {/* CTA Section */}
//           <div className="text-center mt-12">
//             <div className="bg-white rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
//               <h3 className="text-2xl font-bold text-gray-800 mb-3">Ready to Experience Pure Goodness?</h3>
//               <p className="text-gray-600 mb-4">
//                 Join thousands of families who have made the switch to pure, unadulterated dairy
//               </p>
//               <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-base" onClick={()=>navigate('#')}>
//                 Start Your Order Today
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AmruthDhan;


























import React from 'react';
import { amruthDhanProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';

const AmruthDhan = () => {
  const navigate = useNavigate();
  const processSteps = [
    {
      step: 1,
      title: "Farm Selection",
      description: "We partner with trusted dairy farms that follow ethical practices and maintain highest standards of animal care.",
      icon: <i className="fas fa-tractor text-xl"></i>,
      color: "from-green-500 to-emerald-600"
    },
    {
      step: 2,
      title: "Morning Milking",
      description: "Fresh milk collected during early morning hours to ensure maximum freshness and nutritional value.",
      icon: <i className="fas fa-cow text-xl"></i>,
      color: "from-blue-500 to-cyan-600"
    },
    {
      step: 3,
      title: "Quality Testing",
      description: "Every batch undergoes 7-stage quality verification including purity, fat content, and freshness tests.",
      icon: <i className="fas fa-flask text-xl"></i>,
      color: "from-purple-500 to-indigo-600"
    },
    {
      step: 4,
      title: "Temperature Control",
      description: "Maintained at optimal 4°C throughout the supply chain to preserve freshness and prevent bacterial growth.",
      icon: <i className="fas fa-snowflake text-xl"></i>,
      color: "from-cyan-500 to-blue-600"
    },
    {
      step: 5,
      title: "Packaging",
      description: "Hygienic, tamper-proof packaging that maintains purity while being environmentally conscious.",
      icon: <i className="fas fa-box text-xl"></i>,
      color: "from-orange-500 to-red-500"
    },
    // {
    //   step: 6,
    //   title: "Fast Delivery",
    //   description: "Delivered to your doorstep within 24 hours of milking, ensuring farm-fresh experience.",
    //   icon: <i className="fas fa-truck text-xl"></i>,
    //   color: "from-primary-500 to-primary-700"
    // }
  ];

  const benefits = [
    {
      icon: <i className="fas fa-dumbbell text-xl"></i>,
      title: "Rich in Nutrition",
      description: "Packed with natural calcium, proteins, and essential vitamins for stronger bones and better health"
    },
    {
      icon: <i className="fas fa-child text-xl"></i>,
      title: "Safe for Kids",
      description: "100% pure and natural, making it the perfect choice for your children's growth and development"
    },
    {
      icon: <i className="fas fa-leaf text-xl"></i>,
      title: "No Additives",
      description: "Completely free from preservatives, chemicals, and artificial enhancers"
    },
    {
      icon: <i className="fas fa-bolt text-xl"></i>,
      title: "Better Digestion",
      description: "Natural composition makes it easier to digest compared to processed alternatives"
    }
  ];

  const qualityMetrics = [
    { label: "Fat Content", value: "7.5%", ideal: "6-8%" },
    { label: "Protein", value: "4.2%", ideal: "3.8-4.5%" },
    { label: "Lactose", value: "4.8%", ideal: "4.5-5.2%" },
    { label: "Solids", value: "16.5%", ideal: "15-18%" }
  ];

  const trustBadges = [
    { icon: <i className="fas fa-check-circle text-sm"></i>, text: "100% Natural" },
    { icon: <i className="fas fa-ban text-sm"></i>, text: "No Additives" },
    { icon: <i className="fas fa-award text-sm"></i>, text: "Quality Assured" },
    { icon: <i className="fas fa-shipping-fast text-sm"></i>, text: "24h Fresh" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 mx-auto mt-16">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden px-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-400 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/2 w-64 h-64 bg-primary-400 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container-custom py-14 lg:py-14 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium fade-in">The Gold Standard of Pure Buffalo Milk</span>
            </div>
            
            <h1 className="text-2xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent fade-in">
              AmruthDhan
            </h1>
            
            <p className="text-lg lg:text-xl mb-6 text-primary-100">
              Pure. Natural. Uncompromised.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-white">{badge.icon}</span>
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-14 bg-gray-100 px-4">
        <div className="container-custom px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-primary-100 text-primary-700 rounded-full px-3 py-1 mb-3">
              <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-1.5"></span>
              <span className="text-xs font-semibold">Our Journey</span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-3">
              From Farm to Family
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every drop of AmruthDhan follows a meticulous 6-step process to ensure unparalleled purity and freshness
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="relative animate-fade-in group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Card */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group-hover:border-primary-200 h-full hover:bg-gradient-to-br hover:from-primary-50 hover:to-primary-100">
                  {/* Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center text-white mb-3 shadow-md`}>
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Metrics Section */}
      <section className="py-14 bg-gradient-to-br from-primary-50 to-white px-4 fade-in">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Laboratory Tested Quality</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Every batch of AmruthDhan undergoes rigorous laboratory testing to ensure it meets 
                the highest standards of purity and nutritional value.
              </p>

              <div className="space-y-3">
                {qualityMetrics.map((metric, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-gray-800 text-sm">{metric.label}</span>
                      <span className="text-primary-600 font-bold text-sm">{metric.value}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-1.5 rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${(parseFloat(metric.value) / parseFloat(metric.ideal.split('-')[1])) * 100}%` 
                        }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Ideal range: {metric.ideal}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-4 text-white shadow-xl">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-shield-alt text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Quality Assured</h3>
                  <p className="text-primary-100">Every batch tested for purity and freshness</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white bg-opacity-10 rounded-lg p-3 text-center backdrop-blur-sm">
                    <div className="text-xl font-bold">100%</div>
                    <div className="text-xs text-primary-100">Pure Buffalo Milk</div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg p-3 text-center backdrop-blur-sm">
                    <div className="text-xl font-bold">0%</div>
                    <div className="text-xs text-primary-100">Additives</div>
                  </div>
                  {/* <div className="bg-white bg-opacity-10 rounded-lg p-3 text-center backdrop-blur-sm">
                    <div className="text-xl font-bold">24h</div>
                    <div className="text-xs text-primary-100">Fresh Delivery</div>
                  </div> */}
                  <div className="bg-white bg-opacity-10 rounded-lg p-3 text-center backdrop-blur-sm">
                    <div className="text-xl font-bold">6-Stage</div>
                    <div className="text-xs text-primary-100">Quality Check</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits Section */}
      <section className="py-14 bg-white px-4">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-3">
              Why Choose AmruthDhan?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference that pure, unadulterated buffalo milk makes in your family's health
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center animate-slide-up group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 h-full">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-white">{benefit.icon}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-14 bg-gray-50 px-4">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-primary-100 text-primary-700 rounded-full px-3 py-1 mb-3">
              <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-1.5"></span>
              <span className="text-xs font-semibold">Our Products</span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-3">Pure Dairy Excellence</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience our range of pure dairy products, crafted with the same commitment to quality and purity
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amruthDhanProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                brand="amruthdhan"
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>

          {/* CTA Section */}
          {/* <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Ready to Experience Pure Goodness?</h3>
              <p className="text-gray-600 mb-4">
                Join thousands of families who have made the switch to pure, unadulterated dairy
              </p>
              <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-base" onClick={()=>navigate('#')}>
                Start Your Order Today
              </button>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default AmruthDhan;