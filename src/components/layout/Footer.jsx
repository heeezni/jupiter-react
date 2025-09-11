import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <h3 className="text-2xl font-bold text-primary">
                  <i className="fas fa-seedling mr-2 text-secondary"></i>
                  Fruitables
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Fresh and organic fruits & vegetables for a healthy lifestyle. We deliver the best quality products to your doorstep.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Terms & Condition
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Return Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Account */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Account</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Shop Details
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Shopping Cart
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                    <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    Order History
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="fas fa-map-marker-alt text-primary mt-1"></i>
                  <div>
                    <p className="text-gray-300">
                      123 Street, New York, USA
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-envelope text-primary"></i>
                  <a href="mailto:Email@Example.com" className="text-gray-300 hover:text-primary transition-colors">
                    Email@Example.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-phone text-primary"></i>
                  <a href="tel:+01234567890" className="text-gray-300 hover:text-primary transition-colors">
                    +012 345 67890
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-print text-primary"></i>
                  <span className="text-gray-300">
                    +012 345 67890
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-4 lg:mb-0">
              <h4 className="text-white text-lg font-semibold mb-2">
                Subscribe for the latest updates
              </h4>
              <p className="text-green-100">
                Get notified about new products and exclusive offers
              </p>
            </div>
            <div className="flex w-full lg:w-auto">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 lg:w-80 px-4 py-3 rounded-l-full focus:outline-none"
              />
              <button className="bg-secondary text-white px-6 py-3 rounded-r-full hover:bg-yellow-500 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-2 lg:mb-0">
              © <span className="text-primary">Fruitables</span>, All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Use
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Sales and Refunds
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;