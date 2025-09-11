import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Checkout() {
  const [formData, setFormData] = useState({
    // 배송 정보
    firstName: '',
    lastName: '',
    company: '',
    address: '',
    addressDetail: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    email: '',
    
    // 결제 방법
    paymentMethod: 'card',
    
    // 카드 정보
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    
    // 기타
    orderNotes: '',
    agreeTerms: false,
    newsletter: false
  });

  const cartItems = [
    { id: 1, name: '신선한 오렌지', price: 15000, quantity: 2, image: '/images/featur-1.jpg' },
    { id: 2, name: '유기농 바나나', price: 12000, quantity: 1, image: '/images/featur-2.jpg' },
    { id: 3, name: '아보카도', price: 25000, quantity: 3, image: '/images/featur-3.jpg' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      alert('이용약관에 동의해주세요.');
      return;
    }
    // 주문 처리 로직
    alert('주문이 완료되었습니다!');
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 3000;
  const tax = Math.floor(subtotal * 0.1);
  const total = subtotal + shipping + tax;

  return (
    <div className="py-16 bg-gray-50">
      {/* 페이지 헤더 */}
      <div className="bg-primary text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">결제</h1>
          <p className="text-lg">주문을 완료하세요</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* 브레드크럼 */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-primary">홈</Link>
          <i className="fas fa-chevron-right"></i>
          <Link to="/cart" className="hover:text-primary">장바구니</Link>
          <i className="fas fa-chevron-right"></i>
          <span className="text-primary">결제</span>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 결제 폼 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 배송 정보 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">배송 정보</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    성 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이름 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    회사명 (선택사항)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    주소 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-3"
                    placeholder="도로명 또는 지번 주소"
                  />
                  <input
                    type="text"
                    name="addressDetail"
                    value={formData.addressDetail}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="상세주소 (아파트, 동/호수 등)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    도시 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    우편번호 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    휴대폰번호 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이메일 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </div>

            {/* 결제 방법 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">결제 방법</h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="card"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleInputChange}
                    className="text-primary focus:ring-primary"
                  />
                  <label htmlFor="card" className="ml-2 flex items-center cursor-pointer">
                    <i className="fas fa-credit-card mr-2 text-gray-600"></i>
                    신용카드
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="bank"
                    name="paymentMethod"
                    value="bank"
                    checked={formData.paymentMethod === 'bank'}
                    onChange={handleInputChange}
                    className="text-primary focus:ring-primary"
                  />
                  <label htmlFor="bank" className="ml-2 flex items-center cursor-pointer">
                    <i className="fas fa-university mr-2 text-gray-600"></i>
                    무통장입금
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="kakao"
                    name="paymentMethod"
                    value="kakao"
                    checked={formData.paymentMethod === 'kakao'}
                    onChange={handleInputChange}
                    className="text-primary focus:ring-primary"
                  />
                  <label htmlFor="kakao" className="ml-2 flex items-center cursor-pointer">
                    <i className="fas fa-mobile-alt mr-2 text-gray-600"></i>
                    카카오페이
                  </label>
                </div>
              </div>

              {/* 카드 정보 입력 */}
              {formData.paymentMethod === 'card' && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        카드번호
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="0000 0000 0000 0000"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        유효기간
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVC
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 주문 메모 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">추가 정보</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  주문 메모 (선택사항)
                </label>
                <textarea
                  name="orderNotes"
                  value={formData.orderNotes}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="배송 관련 특별 요청사항이 있으시면 적어주세요."
                ></textarea>
              </div>
            </div>
          </div>

          {/* 주문 요약 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">주문 요약</h2>
              
              {/* 상품 목록 */}
              <div className="space-y-3 mb-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-800">{item.name}</h4>
                      <p className="text-sm text-gray-600">수량: {item.quantity}</p>
                    </div>
                    <span className="text-sm font-bold">
                      {(item.price * item.quantity).toLocaleString()}원
                    </span>
                  </div>
                ))}
              </div>

              {/* 가격 계산 */}
              <div className="space-y-3 mb-6 pt-4 border-t border-gray-200">
                <div className="flex justify-between">
                  <span className="text-gray-600">소계</span>
                  <span className="font-semibold">{subtotal.toLocaleString()}원</span>
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
                    <span className="text-lg font-bold text-gray-800">총 결제금액</span>
                    <span className="text-lg font-bold text-primary">{total.toLocaleString()}원</span>
                  </div>
                </div>
              </div>

              {/* 이용약관 동의 */}
              <div className="space-y-3 mb-6">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    className="mt-1 text-primary focus:ring-primary"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    <span className="text-red-500">*</span> 이용약관 및 개인정보처리방침에 동의합니다.
                  </span>
                </label>
                
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="mt-1 text-primary focus:ring-primary"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    뉴스레터 및 마케팅 정보 수신에 동의합니다. (선택)
                  </span>
                </label>
              </div>

              {/* 결제 버튼 */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300 font-semibold flex items-center justify-center"
              >
                <i className="fas fa-lock mr-2"></i>
                {total.toLocaleString()}원 결제하기
              </button>

              {/* 보안 정보 */}
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <i className="fas fa-shield-alt text-green-500 mr-2"></i>
                  <span>256-bit SSL 보안</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  결제 정보는 안전하게 암호화됩니다.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;