// import React, { useState, useEffect } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { useCart } from '../context/CartContext'
// import CartSidebar from './CartSidebar'

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [isCartOpen, setIsCartOpen] = useState(false)
//   const location = useLocation()
//   const { getCartItemsCount } = useCart()

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const isActive = (path) => location.pathname === path

//   return (
//     <>
//       <header className={`lg:px-4 md:px-4 fixed w-full z-50 transition-all duration-300 bg-white ${isScrolled ? 'shadow-md' : ''}`}>
//         <div className="w-full px-2 py-3 container mx-auto">
//           <div className="flex justify-between items-center w-full">
//             {/* Logo Section - Improved alignment */}
//             <div className="flex items-center flex-shrink min-w-0">
//               {/* Founder Logo */}
//               <div className="h-10 w-10 md:h-14 md:w-14 rounded-full overflow-hidden mr-1 md:mr-3 border-2 border-amber-200 shadow-lg flex-shrink-0">
//                 <img 
//                   src="/images/CEO.png" 
//                   alt="Anand Foods Founder" 
//                   className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-110" 
//                 />
//               </div>
              
//               {/* Company Logo */}
//               <div className="h-8 w-8 md:h-10 md:w-10 overflow-hidden mr-1 md:mr-3 flex-shrink-0">
//                 <img 
//                   src="/images/logo.png" 
//                   alt="Anand Foods Logo" 
//                   className="h-full w-full object-contain" 
//                 />
//               </div>
              
//               {/* Text Section - Improved for mobile */}
//               <Link to="/" className="hover:opacity-90 transition-opacity duration-300 min-w-0 flex-shrink">
//                 <div className="min-w-0">
//                   {/* Desktop View */}
//                   <h2 className="hidden md:block text-lg md:text-xl font-bold text-green-800 whitespace-nowrap leading-tight">
//                     <span className="text-amber-500">ANAND</span> FOODS
//                   </h2>
//                   {/* Mobile View - Compact and aligned */}
//                   <h2 className="md:hidden text-sm font-bold text-green-800 whitespace-nowrap leading-tight">
//                     <span className="text-amber-500">ANAND</span> FOODS
//                   </h2>
//                   <p className="text-[9px] md:text-[12px] italic text-gray-500 whitespace-nowrap leading-tight">
//                     "Pure Goodness in Every Drop & Bite"
//                   </p>
//                 </div>
//               </Link>
//             </div>

//             {/* Desktop Navigation & Cart */}
//             <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
//               <nav className="flex space-x-3">
//                 <Link 
//                   to="/" 
//                   className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                     isActive('/') 
//                       ? 'text-green-800 bg-green-500 bg-opacity-10' 
//                       : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
//                   }`}
//                 >
//                   Home
//                 </Link>
//                 <Link 
//                   to="/amruthdhan" 
//                   className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                     isActive('/amruthdhan') 
//                       ? 'text-green-800 bg-green-500 bg-opacity-10' 
//                       : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
//                   }`}
//                 >
//                   AmruthDhan
//                 </Link>
//                 <Link 
//                   to="/famadda" 
//                   className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                     isActive('/famadda') 
//                       ? 'text-green-800 bg-green-500 bg-opacity-10' 
//                       : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
//                   }`}
//                 >
//                   FamAdda
//                 </Link>
//                 <Link 
//                   to="/about" 
//                   className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                     isActive('/about') 
//                       ? 'text-green-800 bg-green-500 bg-opacity-10' 
//                       : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
//                   }`}
//                 >
//                   About
//                 </Link>
//                 <Link 
//                   to="/contact" 
//                   className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                     isActive('/contact') 
//                       ? 'text-green-800 bg-green-500 bg-opacity-10' 
//                       : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
//                   }`}
//                 >
//                   Contact
//                 </Link>
//               </nav>

//               {/* Auth Buttons */}
//               <div className="flex items-center space-x-2 ml-2">
//                 <Link 
//                   to="/login" 
//                   className="font-medium px-4 py-2 rounded-lg transition-all duration-300 text-gray-700 hover:text-green-600 hover:bg-gray-100"
//                 >
//                   Login
//                 </Link>
//                 <Link 
//                   to="/signup" 
//                   className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
//                 >
//                   Sign Up
//                 </Link>
//               </div>

//               {/* Cart Button */}
//               <div className="relative ml-2">
//                 <button 
//                   onClick={() => setIsCartOpen(true)}
//                   className="flex items-center space-x-1 p-2 rounded-lg transition-all duration-300 text-gray-700 hover:text-amber-600 hover:bg-amber-50"
//                 >
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                   </svg>
//                   {getCartItemsCount() > 0 && (
//                     <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
//                       {getCartItemsCount()}
//                     </span>
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Mobile Menu Button & Cart - Fixed alignment */}
//             <div className="md:hidden flex items-center space-x-1 flex-shrink-0">
//               {/* Cart Button - Mobile */}
//               <div className="relative">
//                 <button 
//                   onClick={() => setIsCartOpen(true)}
//                   className="flex items-center justify-center p-2 rounded-lg transition-all duration-300 text-gray-700 hover:text-amber-600 hover:bg-amber-50 w-10 h-10"
//                 >
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                   </svg>
//                   {getCartItemsCount() > 0 && (
//                     <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
//                       {getCartItemsCount()}
//                     </span>
//                   )}
//                 </button>
//               </div>

//               {/* Mobile Menu Button */}
//               <button
//                 className="p-1 rounded-lg transition-all duration-300 text-gray-700 hover:bg-gray-100 flex-shrink-0 w-9 h-9 flex items-center justify-center"
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               >
//                 <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-base`}></i>
//               </button>
//             </div>
//           </div>

//           {/* Mobile Navigation */}
//           <div className={`md:hidden transition-all duration-300 overflow-hidden ${
//             isMobileMenuOpen ? 'max-h-96 opacity-100 pt-3' : 'max-h-0 opacity-0'
//           }`}>
//             <div className="flex flex-col space-y-2 bg-white rounded-lg shadow-lg p-3">
//               <Link 
//                 to="/" 
//                 className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                   isActive('/') 
//                     ? 'text-green-800 bg-green-500 bg-opacity-10' 
//                     : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
//                 }`}
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 Home
//               </Link>
//               <Link 
//                 to="/amruthdhan" 
//                 className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                   isActive('/amruthdhan') 
//                     ? 'text-green-800 bg-green-500 bg-opacity-10' 
//                     : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
//                 }`}
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 AmruthDhan
//               </Link>
//               <Link 
//                 to="/famadda" 
//                 className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                   isActive('/famadda') 
//                     ? 'text-green-800 bg-green-500 bg-opacity-10' 
//                     : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
//                 }`}
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 FamAdda
//               </Link>
//               <Link 
//                 to="/about" 
//                 className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                   isActive('/about') 
//                     ? 'text-green-800 bg-green-500 bg-opacity-10' 
//                     : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
//                 }`}
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 About
//               </Link>
//               <Link 
//                 to="/contact" 
//                 className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                   isActive('/contact') 
//                     ? 'text-green-800 bg-green-500 bg-opacity-10' 
//                     : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
//                 }`}
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 Contact
//               </Link>
              
//               {/* Auth Buttons in Mobile Menu */}
//               <div className="pt-2 border-t border-gray-200">
//                 <div className="grid grid-cols-2 gap-2">
//                   <Link 
//                     to="/login" 
//                     className="text-center font-medium px-3 py-2 rounded-lg transition-all duration-300 text-gray-700 hover:text-green-600 hover:bg-gray-100 border border-gray-200"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     Login
//                   </Link>
//                   <Link 
//                     to="/signup" 
//                     className="text-center bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg font-medium transition-colors duration-300"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     Sign Up
//                   </Link>
//                 </div>
//               </div>

//               {/* Cart Section in Mobile Menu */}
//               <div className="pt-2 border-t border-gray-200">
//                 <button 
//                   onClick={() => {
//                     setIsCartOpen(true)
//                     setIsMobileMenuOpen(false)
//                   }}
//                   className="flex items-center space-x-2 w-full px-3 py-2 rounded-lg transition-all duration-300 text-gray-700 hover:text-amber-600 hover:bg-amber-50"
//                 >
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                   </svg>
//                   <span>View Cart</span>
//                   {getCartItemsCount() > 0 && (
//                     <span className="bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center ml-auto">
//                       {getCartItemsCount()}
//                     </span>
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Cart Sidebar */}
//       <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
//     </>
//   )
// }

// export default Header






















// import React, { useState, useEffect } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { useCart } from '../context/CartContext'
// import CartSidebar from './CartSidebar'

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [isCartOpen, setIsCartOpen] = useState(false)
//   const location = useLocation()
//   const { getCartItemsCount } = useCart()

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const isActive = (path) => location.pathname === path

//   return (
//     <>
//       <header className={`lg:px-4 md:px-4 fixed w-full z-50 transition-all duration-300 bg-white ${isScrolled ? 'shadow-md' : ''}`}>
//         <div className="w-full px-2 py-3 container mx-auto">
//           <div className="flex justify-between items-center w-full">
//             {/* Logo Section */}
//             <div className="flex items-center flex-shrink min-w-0">
//               {/* Founder Logo */}
//               <div className="h-10 w-10 md:h-14 md:w-14 rounded-full overflow-hidden mr-1 md:mr-3 border-2 border-amber-200 shadow-lg flex-shrink-0">
//                 <img 
//                   src="/images/CEO.png" 
//                   alt="Anand Foods Founder" 
//                   className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-110" 
//                 />
//               </div>
              
//               {/* Company Logo */}
//               <div className="h-8 w-8 md:h-10 md:w-10 overflow-hidden mr-1 md:mr-3 flex-shrink-0">
//                 <img 
//                   src="/images/logo.png" 
//                   alt="Anand Foods Logo" 
//                   className="h-full w-full object-contain" 
//                 />
//               </div>
              
//               {/* Text Section */}
//               <Link to="/" className="hover:opacity-90 transition-opacity duration-300 min-w-0 flex-shrink">
//                 <div className="min-w-0">
//                   <h2 className="hidden md:block text-lg md:text-xl font-bold text-blue-800 whitespace-nowrap leading-tight">
//                     <span className="text-amber-500">ANAND</span> FOODS
//                   </h2>
//                   <h2 className="md:hidden text-sm font-bold text-blue-800 whitespace-nowrap leading-tight">
//                     <span className="text-amber-500">ANAND</span> FOODS
//                   </h2>
//                   <p className="text-[9px] md:text-[12px] italic text-gray-500 whitespace-nowrap leading-tight">
//                     "Pure Goodness in Every Drop & Bite"
//                   </p>
//                 </div>
//               </Link>
//             </div>

//             {/* Centered Navigation - 5 Pages */}
//             <div className="hidden md:flex items-center justify-center flex-1">
//               <nav className="flex space-x-1">
//                 <Link 
//                   to="/" 
//                   className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
//                     isActive('/') 
//                       ? 'text-green-800 bg-green-500 bg-opacity-10' 
//                       : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
//                   }`}
//                 >
//                   Home
//                 </Link>
//                 <Link 
//                   to="/amruthdhan" 
//                   className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
//                     isActive('/amruthdhan') 
//                       ? 'text-green-800 bg-green-500 bg-opacity-10' 
//                       : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
//                   }`}
//                 >
//                   AmruthDhan
//                 </Link>
//                 <Link 
//                   to="/famadda" 
//                   className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
//                     isActive('/famadda') 
//                       ? 'text-green-800 bg-green-500 bg-opacity-10' 
//                       : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
//                   }`}
//                 >
//                   FamAdda
//                 </Link>
//                 <Link 
//                   to="/about" 
//                   className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
//                     isActive('/about') 
//                       ? 'text-green-800 bg-green-500 bg-opacity-10' 
//                       : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
//                   }`}
//                 >
//                   About
//                 </Link>
//                 <Link 
//                   to="/contact" 
//                   className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
//                     isActive('/contact') 
//                       ? 'text-green-800 bg-green-500 bg-opacity-10' 
//                       : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
//                   }`}
//                 >
//                   Contact
//                 </Link>
//               </nav>
//             </div>

//             {/* Right Section - Auth & Cart */}
//             <div className="hidden md:flex items-center space-x-2 flex-shrink-0">
//               {/* Auth Buttons */}
//               <div className="flex items-center space-x-2">
//                 <Link 
//                   to="/login" 
//                   className="font-medium px-4 py-2 rounded-lg transition-all duration-300 text-gray-700 hover:text-green-600 hover:bg-gray-100"
//                 >
//                   Login
//                 </Link>
//                 <Link 
//                   to="/signup" 
//                   className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
//                 >
//                   Sign Up
//                 </Link>
//               </div>

//               {/* Cart Button */}
//               <div className="relative ml-2">
//                 <button 
//                   onClick={() => setIsCartOpen(true)}
//                   className="flex items-center space-x-1 p-2 rounded-lg transition-all duration-300 text-gray-700 hover:text-amber-600 hover:bg-amber-50"
//                 >
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                   </svg>
//                   {getCartItemsCount() > 0 && (
//                     <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
//                       {getCartItemsCount()}
//                     </span>
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Mobile Menu Button & Cart */}
//             <div className="md:hidden flex items-center space-x-1 flex-shrink-0">
//               {/* Cart Button - Mobile */}
//               <div className="relative">
//                 <button 
//                   onClick={() => setIsCartOpen(true)}
//                   className="flex items-center justify-center p-2 rounded-lg transition-all duration-300 text-gray-700 hover:text-amber-600 hover:bg-amber-50 w-10 h-10"
//                 >
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                   </svg>
//                   {getCartItemsCount() > 0 && (
//                     <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
//                       {getCartItemsCount()}
//                     </span>
//                   )}
//                 </button>
//               </div>

//               {/* Mobile Menu Button */}
//               <button
//                 className="p-1 rounded-lg transition-all duration-300 text-gray-700 hover:bg-gray-100 flex-shrink-0 w-9 h-9 flex items-center justify-center"
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               >
//                 <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-base`}></i>
//               </button>
//             </div>
//           </div>

//           {/* Mobile Navigation */}
//           <div className={`md:hidden transition-all duration-300 overflow-hidden ${
//             isMobileMenuOpen ? 'max-h-96 opacity-100 pt-3' : 'max-h-0 opacity-0'
//           }`}>
//             <div className="flex flex-col space-y-2 bg-white rounded-lg shadow-lg p-3">
//               <Link 
//                 to="/" 
//                 className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                   isActive('/') 
//                     ? 'text-green-800 bg-green-500 bg-opacity-10' 
//                     : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
//                 }`}
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 Home
//               </Link>
//               <Link 
//                 to="/amruthdhan" 
//                 className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                   isActive('/amruthdhan') 
//                     ? 'text-green-800 bg-green-500 bg-opacity-10' 
//                     : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
//                 }`}
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 AmruthDhan
//               </Link>
//               <Link 
//                 to="/famadda" 
//                 className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                   isActive('/famadda') 
//                     ? 'text-green-800 bg-green-500 bg-opacity-10' 
//                     : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
//                 }`}
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 FamAdda
//               </Link>
//               <Link 
//                 to="/about" 
//                 className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                   isActive('/about') 
//                     ? 'text-green-800 bg-green-500 bg-opacity-10' 
//                     : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
//                 }`}
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 About
//               </Link>
//               <Link 
//                 to="/contact" 
//                 className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                   isActive('/contact') 
//                     ? 'text-green-800 bg-green-500 bg-opacity-10' 
//                     : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
//                 }`}
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 Contact
//               </Link>
              
//               {/* Auth Buttons in Mobile Menu */}
//               <div className="pt-2 border-t border-gray-200">
//                 <div className="grid grid-cols-2 gap-2">
//                   <Link 
//                     to="/login" 
//                     className="text-center font-medium px-3 py-2 rounded-lg transition-all duration-300 text-gray-700 hover:text-green-600 hover:bg-gray-100 border border-gray-200"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     Login
//                   </Link>
//                   <Link 
//                     to="/signup" 
//                     className="text-center bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg font-medium transition-colors duration-300"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     Sign Up
//                   </Link>
//                 </div>
//               </div>

//               {/* Cart Section in Mobile Menu */}
//               <div className="pt-2 border-t border-gray-200">
//                 <button 
//                   onClick={() => {
//                     setIsCartOpen(true)
//                     setIsMobileMenuOpen(false)
//                   }}
//                   className="flex items-center space-x-2 w-full px-3 py-2 rounded-lg transition-all duration-300 text-gray-700 hover:text-amber-600 hover:bg-amber-50"
//                 >
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                   </svg>
//                   <span>View Cart</span>
//                   {getCartItemsCount() > 0 && (
//                     <span className="bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center ml-auto">
//                       {getCartItemsCount()}
//                     </span>
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Cart Sidebar */}
//       <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
//     </>
//   )
// }

// export default Header






























import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import CartSidebar from './CartSidebar'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { getCartItemsCount } = useCart()
  const { isLoggedIn, user, logout } = useAuth()
  const userDropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  const handleLogout = () => {
    logout()
    setIsUserDropdownOpen(false)
    navigate('/')
  }

  return (
    <>
      <header className={`lg:px-4 md:px-4 fixed w-full z-50 transition-all duration-300 bg-white ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="w-full px-2 py-4 container mx-auto">
          <div className="flex justify-between items-center w-full">
            {/* Logo Section - More compact for mobile */}
            <div className="flex items-center flex-shrink-0 min-w-0">
              {/* Founder Logo - Smaller on mobile */}
              <div className="h-8 w-8 md:h-14 md:w-14 rounded-full overflow-hidden mr-1 md:mr-3 border-2 border-amber-200 shadow-lg flex-shrink-0">
                <img 
                  src="/images/CEO.png" 
                  alt="Anand Foods Founder" 
                  className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-110" 
                />
              </div>
              
              {/* Company Logo - Smaller on mobile */}
              <div className="h-8 w-8 md:h-10 md:w-10 overflow-hidden mr-1 md:mr-3 flex-shrink-0">
                <img 
                  src="/images/logo.png" 
                  alt="Anand Foods Logo" 
                  className="h-full w-full object-contain" 
                />
              </div>
              
              {/* Text Section - More compact */}
              <Link to="/" className="hover:opacity-90 transition-opacity duration-300 min-w-0 flex-shrink-0">
                <div className="min-w-0">
                  <h2 className="hidden md:block text-lg md:text-xl font-bold text-blue-800 whitespace-nowrap leading-tight">
                    <span className="text-amber-500">ANAND</span> FOODS
                  </h2>
                  <h2 className="md:hidden text-xs font-bold text-blue-800 whitespace-nowrap leading-tight">
                    <span className="text-amber-500">ANAND</span> FOODS
                  </h2>
                  <p className="text-[8px] md:text-[12px] italic text-gray-500 whitespace-nowrap leading-tight">
                    "Pure Goodness in Every Drop & Bite"
                  </p>
                </div>
              </Link>
            </div>

            {/* Centered Navigation - Desktop */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <nav className="flex space-x-1">
                <Link 
                  to="/" 
                  className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive('/') 
                      ? 'text-green-800 bg-green-500 bg-opacity-10' 
                      : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/amruthdhan" 
                  className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive('/amruthdhan') 
                      ? 'text-green-800 bg-green-500 bg-opacity-10' 
                      : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
                  }`}
                >
                  AmruthDhan
                </Link>
                <Link 
                  to="/famadda" 
                  className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive('/famadda') 
                      ? 'text-green-800 bg-green-500 bg-opacity-10' 
                      : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
                  }`}
                >
                  FamAdda
                </Link>
                <Link 
                  to="/about" 
                  className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive('/about') 
                      ? 'text-green-800 bg-green-500 bg-opacity-10' 
                      : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
                  }`}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive('/contact') 
                      ? 'text-green-800 bg-green-500 bg-opacity-10' 
                      : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
                  }`}
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Right Section - Auth & Cart - Desktop */}
            <div className="hidden md:flex items-center space-x-2 flex-shrink-0">
              {/* Conditional rendering based on login status */}
              {isLoggedIn ? (
                // Logged In: Show User Dropdown
                <div className="relative" ref={userDropdownRef}>
                  <button 
                    onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                    className="flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-all duration-300 text-gray-700 hover:text-green-600 hover:bg-gray-100"
                  >
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center relative">
                      <span className="text-green-600 font-semibold text-sm leading-none">
                        {user?.firstName?.charAt(0) || 'U'}
                      </span>
                    </div>
                    <span className="font-medium text-sm">
                      {user?.firstName || 'User'}
                    </span>
                    <svg 
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${isUserDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* User Dropdown Menu */}
                  {isUserDropdownOpen && (
                    <div className="absolute right-0 mt-1.5 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="font-semibold text-gray-800 text-sm">{user?.firstName} {user?.lastName}</p>
                        <p className="text-xs text-gray-500 truncate mt-0.5">{user?.email}</p>
                      </div>
                      <Link 
                        to="/profile" 
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200 text-sm"
                        onClick={() => setIsUserDropdownOpen(false)}
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        My Profile
                      </Link>
                      <Link 
                        to="/orders" 
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200 text-sm"
                        onClick={() => setIsUserDropdownOpen(false)}
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        My Orders
                      </Link>
                      <button 
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-red-50 transition-colors duration-200 text-sm"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                // Not Logged In: Show Login/Signup Buttons
                <div className="flex items-center space-x-2">
                  <Link 
                    to="/login" 
                    className="font-medium px-4 py-2 rounded-lg transition-all duration-300 text-gray-700 hover:text-green-600 hover:bg-gray-100 text-sm"
                  >
                    Login
                  </Link>
                  <Link 
                    to="/signup" 
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 text-sm"
                  >
                    Sign Up
                  </Link>
                </div>
              )}

              {/* Cart Button */}
              <div className="relative ml-1">
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="flex items-center space-x-1 p-2 rounded-lg transition-all duration-300 text-gray-700 hover:text-amber-600 hover:bg-amber-50"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {getCartItemsCount() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                      {getCartItemsCount()}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu Button & Cart - Very compact for small screens */}
            <div className="md:hidden flex items-center space-x-1 flex-shrink-0">
              {/* Show user icon if logged in on mobile - Very compact */}
              {isLoggedIn && (
                <div className="relative">
                  <Link to="/profile" className="flex items-center justify-center p-1 rounded-lg transition-all duration-300 text-gray-700 hover:text-green-600 hover:bg-gray-100 w-8 h-8">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-xs">
                        {user?.firstName?.charAt(0) || 'U'}
                      </span>
                    </div>
                  </Link>
                </div>
              )}

              {/* Cart Button - Mobile - Very compact */}
              <div className="relative">
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="flex items-center justify-center p-1 rounded-lg transition-all duration-300 text-gray-700 hover:text-amber-600 hover:bg-amber-50 w-8 h-8"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {getCartItemsCount() > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 bg-amber-500 text-white text-[9px] rounded-full h-3.5 w-3.5 flex items-center justify-center">
                      {getCartItemsCount()}
                    </span>
                  )}
                </button>
              </div>

              {/* Mobile Menu Button - Very compact */}
              <button
                className="p-1 rounded-lg transition-all duration-300 text-gray-700 hover:bg-gray-100 flex-shrink-0 w-8 h-8 flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-sm`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Navigation - Better fitting */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100 mt-1' : 'max-h-0 opacity-0'
          }`}>
            <div className="flex flex-col space-y-1 bg-white rounded-lg shadow-lg p-2">
              <Link 
                to="/" 
                className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 text-xs ${
                  isActive('/') 
                    ? 'text-green-800 bg-green-500 bg-opacity-10' 
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/amruthdhan" 
                className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 text-xs ${
                  isActive('/amruthdhan') 
                    ? 'text-green-800 bg-green-500 bg-opacity-10' 
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                AmruthDhan
              </Link>
              <Link 
                to="/famadda" 
                className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 text-xs ${
                  isActive('/famadda') 
                    ? 'text-green-800 bg-green-500 bg-opacity-10' 
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FamAdda
              </Link>
              <Link 
                to="/about" 
                className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 text-xs ${
                  isActive('/about') 
                    ? 'text-green-800 bg-green-500 bg-opacity-10' 
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 text-xs ${
                  isActive('/contact') 
                    ? 'text-green-800 bg-green-500 bg-opacity-10' 
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Auth Buttons in Mobile Menu */}
              <div className="pt-1 border-t border-gray-200">
                {isLoggedIn ? (
                  <>
                    <div className="px-3 py-2 mb-1 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-gray-800 text-xs">{user?.firstName} {user?.lastName}</p>
                      <p className="text-[10px] text-gray-500 truncate mt-0.5">{user?.email}</p>
                    </div>
                    <Link 
                      to="/profile" 
                      className="flex items-center px-3 py-2 mb-1 rounded-lg transition-all duration-300 text-gray-700 hover:text-green-600 hover:bg-gray-100 text-xs"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <i className="fas fa-user mr-2 text-[10px]"></i>
                      My Profile
                    </Link>
                    <Link 
                      to="/orders" 
                      className="flex items-center px-3 py-2 mb-1 rounded-lg transition-all duration-300 text-gray-700 hover:text-green-600 hover:bg-gray-100 text-xs"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <i className="fas fa-shopping-bag mr-2 text-[10px]"></i>
                      My Orders
                    </Link>
                    <button 
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center w-full px-3 py-2 rounded-lg transition-all duration-300 text-red-600 hover:bg-red-50 text-xs"
                    >
                      <i className="fas fa-sign-out-alt mr-2 text-[10px]"></i>
                      Logout
                    </button>
                  </>
                ) : (
                  <div className="grid grid-cols-2 gap-1.5">
                    <Link 
                      to="/login" 
                      className="text-center font-medium px-2 py-2 rounded-lg transition-all duration-300 text-gray-700 hover:text-green-600 hover:bg-gray-100 border border-gray-200 text-xs"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link 
                      to="/signup" 
                      className="text-center bg-green-600 hover:bg-green-700 text-white px-2 py-2 rounded-lg font-medium transition-colors duration-300 text-xs"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>

              {/* Cart Section in Mobile Menu */}
              <div className="pt-1 border-t border-gray-200">
                <button 
                  onClick={() => {
                    setIsCartOpen(true)
                    setIsMobileMenuOpen(false)
                  }}
                  className="flex items-center space-x-2 w-full px-3 py-2 rounded-lg transition-all duration-300 text-gray-700 hover:text-amber-600 hover:bg-amber-50 text-xs"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>View Cart</span>
                  {getCartItemsCount() > 0 && (
                    <span className="bg-amber-500 text-white text-[9px] rounded-full h-3.5 w-3.5 flex items-center justify-center ml-auto">
                      {getCartItemsCount()}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

export default Header