import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-slate-900 to-primary py-12 lg:py-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:pr-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              주류 최저가
              <span className="text-secondary block">가격 비교</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              국내 주요 쇼핑몰 가격을 한 번에 비교하세요
            </p>
            <Link
              to="/shop"
              className="bg-secondary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg inline-block text-center"
            >
              가격 비교 시작
            </Link>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Beer Collection"
                className="w-full h-auto max-w-lg mx-auto"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-secondary rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent rounded-full opacity-30"></div>

            {/* Floating Cards */}
            <div className="absolute top-10 -left-10 bg-white p-4 rounded-lg shadow-lg transform rotate-12 hidden lg:block z-20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-percentage text-amber-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">최저가</h4>
                  <p className="text-sm text-gray-600">보장</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 -right-8 bg-white p-4 rounded-lg shadow-lg transform -rotate-12 hidden lg:block z-20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-clock text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">실시간</h4>
                  <p className="text-sm text-gray-600">업데이트</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;