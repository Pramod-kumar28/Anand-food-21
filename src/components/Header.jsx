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






















import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartSidebar from './CartSidebar'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const location = useLocation()
  const { getCartItemsCount } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <>
      <header className={`lg:px-4 md:px-4 fixed w-full z-50 transition-all duration-300 bg-white ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="w-full px-2 py-3 container mx-auto">
          <div className="flex justify-between items-center w-full">
            {/* Logo Section */}
            <div className="flex items-center flex-shrink min-w-0">
              {/* Founder Logo */}
              <div className="h-10 w-10 md:h-14 md:w-14 rounded-full overflow-hidden mr-1 md:mr-3 border-2 border-amber-200 shadow-lg flex-shrink-0">
                <img 
                  src="/images/CEO.png" 
                  alt="Anand Foods Founder" 
                  className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-110" 
                />
              </div>
              
              {/* Company Logo */}
              <div className="h-8 w-8 md:h-10 md:w-10 overflow-hidden mr-1 md:mr-3 flex-shrink-0">
                <img 
                  src="/images/logo.png" 
                  alt="Anand Foods Logo" 
                  className="h-full w-full object-contain" 
                />
              </div>
              
              {/* Text Section */}
              <Link to="/" className="hover:opacity-90 transition-opacity duration-300 min-w-0 flex-shrink">
                <div className="min-w-0">
                  <h2 className="hidden md:block text-lg md:text-xl font-bold text-blue-800 whitespace-nowrap leading-tight">
                    <span className="text-amber-500">ANAND</span> FOODS
                  </h2>
                  <h2 className="md:hidden text-sm font-bold text-blue-800 whitespace-nowrap leading-tight">
                    <span className="text-amber-500">ANAND</span> FOODS
                  </h2>
                  <p className="text-[9px] md:text-[12px] italic text-gray-500 whitespace-nowrap leading-tight">
                    "Pure Goodness in Every Drop & Bite"
                  </p>
                </div>
              </Link>
            </div>

            {/* Centered Navigation - 5 Pages */}
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

            {/* Right Section - Auth & Cart */}
            <div className="hidden md:flex items-center space-x-2 flex-shrink-0">
              {/* Auth Buttons */}
              <div className="flex items-center space-x-2">
                <Link 
                  to="/login" 
                  className="font-medium px-4 py-2 rounded-lg transition-all duration-300 text-gray-700 hover:text-green-600 hover:bg-gray-100"
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
                >
                  Sign Up
                </Link>
              </div>

              {/* Cart Button */}
              <div className="relative ml-2">
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

            {/* Mobile Menu Button & Cart */}
            <div className="md:hidden flex items-center space-x-1 flex-shrink-0">
              {/* Cart Button - Mobile */}
              <div className="relative">
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="flex items-center justify-center p-2 rounded-lg transition-all duration-300 text-gray-700 hover:text-amber-600 hover:bg-amber-50 w-10 h-10"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {getCartItemsCount() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                      {getCartItemsCount()}
                    </span>
                  )}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="p-1 rounded-lg transition-all duration-300 text-gray-700 hover:bg-gray-100 flex-shrink-0 w-9 h-9 flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-base`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 pt-3' : 'max-h-0 opacity-0'
          }`}>
            <div className="flex flex-col space-y-2 bg-white rounded-lg shadow-lg p-3">
              <Link 
                to="/" 
                className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
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
                className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
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
                className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
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
                className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
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
                className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                  isActive('/contact') 
                    ? 'text-green-800 bg-green-500 bg-opacity-10' 
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-100'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Auth Buttons in Mobile Menu */}
              <div className="pt-2 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2">
                  <Link 
                    to="/login" 
                    className="text-center font-medium px-3 py-2 rounded-lg transition-all duration-300 text-gray-700 hover:text-green-600 hover:bg-gray-100 border border-gray-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/signup" 
                    className="text-center bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg font-medium transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>

              {/* Cart Section in Mobile Menu */}
              <div className="pt-2 border-t border-gray-200">
                <button 
                  onClick={() => {
                    setIsCartOpen(true)
                    setIsMobileMenuOpen(false)
                  }}
                  className="flex items-center space-x-2 w-full px-3 py-2 rounded-lg transition-all duration-300 text-gray-700 hover:text-amber-600 hover:bg-amber-50"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>View Cart</span>
                  {getCartItemsCount() > 0 && (
                    <span className="bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center ml-auto">
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