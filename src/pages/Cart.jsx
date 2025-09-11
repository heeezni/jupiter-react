import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: '신선한 오렌지',
      price: 15000,
      quantity: 2,
      image: '/images/featur-1.jpg',
      category: '신선 과일'
    },
    {
      id: 2,
      name: '유기농 바나나',
      price: 12000,
      quantity: 1,
      image: '/images/featur-2.jpg',
      category: '신선 과일'
    },
    {
      id: 3,
      name: '아보카도',
      price: 25000,
      quantity: 3,
      image: '/images/featur-3.jpg',
      category: '신선 과일'
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const shipping = 3000;
  const tax = Math.floor(getSubtotal() * 0.1);
  const total = getSubtotal() + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white rounded-lg shadow-sm p-12">
            <i className="fas fa-shopping-cart text-6xl text-gray-300 mb-6"></i>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">장바구니가 비어있습니다</h2>
            <p className="text-gray-600 mb-8">쇼핑을 시작해보세요!</p>
            <Link
              to="/shop"
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300 inline-flex items-center"
            >
              <i className="fas fa-shopping-bag mr-2"></i>
              쇼핑하러 가기
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50">
      {/* 페이지 헤더 */}
      <div className="bg-primary text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">장바구니</h1>
          <p className="text-lg">선택한 상품들을 확인하세요</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* 브레드크럼 */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-primary">홈</Link>
          <i className="fas fa-chevron-right"></i>
          <span className="text-primary">장바구니</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 장바구니 아이템 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">장바구니 상품</h2>
              
              <div className="space-y-4">
                {cartItems.map(item => (
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
                  쇼핑 계속하기
                </Link>
                
                <button className="text-gray-600 hover:text-gray-800 font-semibold flex items-center">
                  <i className="fas fa-sync-alt mr-2"></i>
                  장바구니 새로고침
                </button>
              </div>
            </div>
          </div>

          {/* 주문 요약 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">주문 요약</h2>
              
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
                <i className="fas fa-credit-card mr-2"></i>
                결제하기
              </Link>

              {/* 보안 배지 */}
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <i className="fas fa-shield-alt text-green-500 mr-2"></i>
                  <span>SSL 보안 결제</span>
                </div>
                <div className="flex items-center justify-center text-sm text-gray-600 mt-1">
                  <i className="fas fa-truck text-blue-500 mr-2"></i>
                  <span>30,000원 이상 무료배송</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 추천 상품 섹션 */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">이런 상품은 어떠세요?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 4, name: '신선한 사과', price: 18000, image: '/images/vegetable-item-1.jpg' },
              { id: 5, name: '브로콜리', price: 8000, image: '/images/vegetable-item-2.jpg' },
              { id: 6, name: '양상추', price: 6000, image: '/images/vegetable-item-3.png' },
              { id: 7, name: '당근', price: 5000, image: '/images/vegetable-item-4.jpg' }
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
                      {product.price.toLocaleString()}원
                    </span>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300">
                      담기
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

export default Cart;