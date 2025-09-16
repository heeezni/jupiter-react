import { useState } from 'react';
import { Link } from 'react-router-dom';

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
                서울특별시 강남구 테헤란로 123
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
              <Link to="/" className="text-2xl font-bold text-primary hover:text-accent transition-colors">
                <i className="fas fa-wine-bottle mr-2 text-secondary"></i>
                Ju(酒)piter
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-primary font-medium transition-colors">
                홈
              </Link>
              <Link to="/shop" className="text-gray-700 hover:text-primary font-medium transition-colors">
                가격비교
              </Link>
              <Link to="/board" className="text-gray-700 hover:text-primary font-medium transition-colors">
                커뮤니티
              </Link>
              <div className="relative group">
                <span className="text-gray-700 hover:text-primary font-medium transition-colors flex items-center cursor-pointer">
                  Pages
                  <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </span>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">홈</Link>
                  <Link to="/shop" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">상품 목록</Link>
                  <Link to="/wishlist" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">위시리스트</Link>
                  <Link to="/board" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">커뮤니티</Link>
                  <Link to="/community-form" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">글쓰기</Link>
                  <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary">회사소개</Link>
                </div>
              </div>
            </div>

            {/* Search and Cart */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="검색..."
                  className="hidden lg:block w-64 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-primary"
                />
                <button className="lg:absolute lg:right-3 lg:top-1/2 lg:transform lg:-translate-y-1/2 p-2 text-gray-500 hover:text-primary">
                  <i className="fas fa-search"></i>
                </button>
              </div>
              
              <div className="relative">
                <Link to="/wishlist" className="flex items-center space-x-1 p-2 text-gray-700 hover:text-primary">
                  <i className="fas fa-heart text-xl"></i>
                  <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </Link>
              </div>

              <Link
                to="/login"
                className="bg-primary text-white px-4 py-2 rounded-full hover:bg-blue-800 transition-colors font-medium"
              >
                로그인
              </Link>

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
                <Link to="/" className="block text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>홈</Link>
                <Link to="/shop" className="block text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>가격비교</Link>
                <Link to="/board" className="block text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>커뮤니티</Link>
                <Link to="/wishlist" className="block text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>위시리스트</Link>
                <Link to="/community-form" className="block text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>글쓰기</Link>
                <Link to="/about" className="block text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>회사소개</Link>
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium"
                >
                  로그인
                </Link>
                <div className="pt-4">
                  <input 
                    type="text" 
                    placeholder="검색..."
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