import { useState } from 'react';
import { Link } from 'react-router-dom';

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: '참이슬 후레쉬',
      price: 1890,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: '소주'
    },
    {
      id: 2,
      name: '하이트 제로',
      price: 2680,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: '맥주'
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setWishlistItems(wishlistItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const getSubtotal = () => {
    return wishlistItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const shipping = 3000;
  const tax = Math.floor(getSubtotal() * 0.1);
  const total = getSubtotal() + shipping + tax;

  if (wishlistItems.length === 0) {
    return (
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white rounded-lg shadow-sm p-12">
            <i className="fas fa-shopping-cart text-6xl text-gray-300 mb-6"></i>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">위시리스트가 비어있습니다</h2>
            <p className="text-gray-600 mb-8">주류 가격비교를 시작해보세요!</p>
            <Link
              to="/shop"
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300 inline-flex items-center"
            >
              <i className="fas fa-shopping-bag mr-2"></i>
              가격비교 시작
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50">
      {/* 페이지 헤더 */}
      <div
        className="relative py-24 mb-12 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">위시리스트</h1>
          <p className="text-lg">관심 있는 주류들을 확인하세요</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* 브레드크럼 */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-blue-600 hover:underline transition-colors duration-200 cursor-pointer">홈</Link>
          <i className="fas fa-chevron-right"></i>
          <span className="text-primary font-medium">위시리스트</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 장바구니 아이템 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">위시리스트</h2>
              
              <div className="space-y-4">
                {wishlistItems.map(item => (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.category}</p>
                        <p className="text-lg font-bold text-primary mt-1">
                          {item.price.toLocaleString()}원
                        </p>
                      </div>

                      <div className="flex items-center space-x-3">
                        {/* 수량 조절 */}
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-gray-100 rounded-l-lg"
                          >
                            <i className="fas fa-minus text-sm"></i>
                          </button>
                          <span className="px-4 py-2 border-x border-gray-300 min-w-[50px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-100 rounded-r-lg"
                          >
                            <i className="fas fa-plus text-sm"></i>
                          </button>
                        </div>

                        {/* 소계 */}
                        <div className="text-right min-w-[80px]">
                          <p className="text-lg font-bold text-gray-800">
                            {(item.price * item.quantity).toLocaleString()}원
                          </p>
                        </div>

                        {/* 삭제 버튼 */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 장바구니 액션 버튼 */}
              <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
                <Link
                  to="/shop"
                  className="text-primary hover:text-green-600 font-semibold flex items-center"
                >
                  <i className="fas fa-arrow-left mr-2"></i>
                  다른 주류 보기
                </Link>
                
                <button className="text-gray-600 hover:text-gray-800 font-semibold flex items-center">
                  <i className="fas fa-sync-alt mr-2"></i>
                  위시리스트 새로고침
                </button>
              </div>
            </div>
          </div>

          {/* 주문 요약 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">선택된 상품 요약</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">소계</span>
                  <span className="font-semibold">{getSubtotal().toLocaleString()}원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">배송비</span>
                  <span className="font-semibold">{shipping.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">세금</span>
                  <span className="font-semibold">{tax.toLocaleString()}원</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-800">총합계</span>
                    <span className="text-lg font-bold text-primary">{total.toLocaleString()}원</span>
                  </div>
                </div>
              </div>

              {/* 쿠폰 적용 */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  쿠폰 코드
                </label>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="쿠폰 코드 입력"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="bg-gray-800 text-white px-4 py-2 rounded-r-lg hover:bg-gray-700">
                    적용
                  </button>
                </div>
              </div>

              {/* 결제 버튼 */}
              <Link
                to="/checkout"
                className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300 text-center font-semibold flex items-center justify-center"
              >
                <i className="fas fa-shopping-cart mr-2"></i>
                선택된 상품 가격비교
              </Link>

              {/* 보안 배지 */}
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <i className="fas fa-shield-alt text-green-500 mr-2"></i>
                  <span>SSL 보안 결제</span>
                </div>
                <div className="flex items-center justify-center text-sm text-gray-600 mt-1">
                  <i className="fas fa-truck text-blue-500 mr-2"></i>
                  <span>위시리스트 자동 알림</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 추천 주류 섹션 */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">이런 주류는 어떠세요?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 4, name: '처음처럼', price: 1790, image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
              { id: 5, name: '카스 맥주', price: 2450, image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
              { id: 6, name: '칠레 산타리타 와인', price: 8900, image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
              { id: 7, name: '좋은데이 복분자주', price: 4900, image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
            ].map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                      최저가 ₩{product.price.toLocaleString()}
                    </span>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300">
                      위시리스트 추가
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;