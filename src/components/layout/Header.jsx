import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2"></i>
                123 Street, New York
              </span>
              <span className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                Email@Example.com
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <a href="#" className="hover:text-secondary transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">
                <i className="fas fa-seedling mr-2 text-secondary"></i>
                Fruitables
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Shop
              </a>
              <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Shop Detail
              </a>
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors flex items-center">
                  Pages
                  <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </a>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">Cart</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">Checkout</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">Testimonial</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">404 Page</a>
                </div>
              </div>
              <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Contact
              </a>
            </div>

            {/* Search and Cart */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..."
                  className="hidden lg:block w-64 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-primary"
                />
                <button className="lg:absolute lg:right-3 lg:top-1/2 lg:transform lg:-translate-y-1/2 p-2 text-gray-500 hover:text-primary">
                  <i className="fas fa-search"></i>
                </button>
              </div>
              
              <div className="relative">
                <button className="flex items-center space-x-1 p-2 text-gray-700 hover:text-primary">
                  <i className="fas fa-shopping-bag text-xl"></i>
                  <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-primary"
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-4">
                <a href="#" className="block text-gray-700 hover:text-primary font-medium">Home</a>
                <a href="#" className="block text-gray-700 hover:text-primary font-medium">Shop</a>
                <a href="#" className="block text-gray-700 hover:text-primary font-medium">Shop Detail</a>
                <a href="#" className="block text-gray-700 hover:text-primary font-medium">Pages</a>
                <a href="#" className="block text-gray-700 hover:text-primary font-medium">Contact</a>
                <div className="pt-4">
                  <input 
                    type="text" 
                    placeholder="Search..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;