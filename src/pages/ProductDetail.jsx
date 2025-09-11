import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: parseInt(id),
    name: '신선한 오렌지',
    price: 15000,
    originalPrice: 18000,
    category: '신선 과일',
    description: '비타민 C가 풍부한 신선한 오렌지입니다. 달콤하고 상큼한 맛으로 건강한 간식이나 주스로 드실 수 있습니다.',
    rating: 4.8,
    reviewCount: 124,
    stock: 50,
    images: [
      '/images/featur-1.jpg',
      '/images/featur-2.jpg',
      '/images/featur-3.jpg',
      '/images/vegetable-item-1.jpg'
    ],
    features: [
      '100% 유기농',
      '신선도 보장',
      '비타민 C 풍부',
      '당일 배송'
    ],
    nutrition: [
      { name: '칼로리', value: '47kcal/100g' },
      { name: '탄수화물', value: '11.7g' },
      { name: '식이섬유', value: '2.4g' },
      { name: '비타민 C', value: '53.2mg' }
    ]
  };

  const relatedProducts = [
    { id: 2, name: '유기농 바나나', price: 12000, image: '/images/featur-2.jpg', rating: 4 },
    { id: 3, name: '아보카도', price: 25000, image: '/images/featur-3.jpg', rating: 5 },
    { id: 4, name: '신선한 사과', price: 18000, image: '/images/vegetable-item-1.jpg', rating: 4 },
    { id: 5, name: '브로콜리', price: 8000, image: '/images/vegetable-item-2.jpg', rating: 5 }
  ];

  const reviews = [
    { id: 1, author: '김**', rating: 5, date: '2024-01-15', content: '정말 신선하고 달콤해요! 배송도 빨라서 만족합니다.' },
    { id: 2, author: '이**', rating: 4, date: '2024-01-10', content: '품질이 좋네요. 다음에도 주문할 예정입니다.' },
    { id: 3, author: '박**', rating: 5, date: '2024-01-08', content: '아이들이 너무 좋아해요. 포장도 깔끔하게 잘 되어있었습니다.' }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 브레드크럼 */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <span>홈</span>
          <i className="fas fa-chevron-right"></i>
          <span>쇼핑</span>
          <i className="fas fa-chevron-right"></i>
          <span className="text-primary">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* 상품 이미지 */}
          <div>
            <div className="mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-sm"
              />
            </div>
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-primary' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* 상품 정보 */}
          <div>
            <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
              {product.category}
            </span>
            
            <h1 className="text-3xl font-bold text-gray-800 mt-4 mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-4">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`fas fa-star text-sm ${
                      i < Math.floor(product.rating) ? 'text-secondary' : 'text-gray-300'
                    }`}
                  ></i>
                ))}
                <span className="ml-2 text-gray-600">({product.rating})</span>
              </div>
              <span className="text-gray-600">{product.reviewCount}개 리뷰</span>
            </div>

            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-primary">
                {product.price.toLocaleString()}원
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through ml-3">
                  {product.originalPrice.toLocaleString()}원
                </span>
              )}
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

            {/* 특징 */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">특징</h3>
              <div className="grid grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <i className="fas fa-check text-primary mr-2"></i>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 수량 선택 */}
            <div className="flex items-center mb-6">
              <span className="text-gray-700 mr-4">수량:</span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100"
                >
                  <i className="fas fa-minus"></i>
                </button>
                <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <span className="text-gray-600 ml-4">재고: {product.stock}개</span>
            </div>

            {/* 버튼 */}
            <div className="flex space-x-4 mb-8">
              <button className="flex-1 bg-primary text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300">
                <i className="fas fa-shopping-cart mr-2"></i>
                장바구니에 담기
              </button>
              <button className="bg-secondary text-white py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors duration-300">
                <i className="fas fa-heart mr-2"></i>
                찜
              </button>
            </div>

            {/* 배송 정보 */}
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <i className="fas fa-truck text-primary mr-2"></i>
                <span className="font-semibold">배송 정보</span>
              </div>
              <p className="text-gray-600 text-sm">오늘 오후 2시 이전 주문 시 당일 배송</p>
              <p className="text-gray-600 text-sm">30,000원 이상 구매 시 배송비 무료</p>
            </div>
          </div>
        </div>

        {/* 탭 섹션 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8">
              <button className="py-2 px-1 border-b-2 border-primary text-primary font-medium">
                상품 설명
              </button>
              <button className="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700">
                영양 정보
              </button>
              <button className="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700">
                리뷰 ({product.reviewCount})
              </button>
            </nav>
          </div>

          {/* 상품 설명 탭 내용 */}
          <div>
            <h3 className="text-xl font-bold mb-4">상품 설명</h3>
            <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
            <p className="text-gray-600 leading-relaxed">
              우리 농장에서 직접 재배한 신선한 오렌지입니다. 화학 비료나 농약을 사용하지 않고 
              자연 친화적인 방법으로 키워 안전하고 건강한 과일을 제공합니다.
            </p>
          </div>
        </div>

        {/* 관련 상품 */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-8">관련 상품</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fas fa-star text-xs ${
                          i < product.rating ? 'text-secondary' : 'text-gray-300'
                        }`}
                      ></i>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <span className="text-lg font-bold text-primary">
                    {product.price.toLocaleString()}원
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;