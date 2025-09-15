import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();

  const products = {
    1: {
      id: 1,
      name: "조니워커 블루라벨",
      lowestPrice: 189000,
      category: "위스키",
      description: "세계 최고급 스카치 위스키의 대명사. 희귀한 몰트와 그레인 위스키를 블렌딩한 프리미엄 제품입니다.",
      rating: 4.8,
      reviewCount: 342,
      image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      features: [
        "40% 알코올 도수",
        "700ml 용량",
        "스코틀랜드 원산지",
        "프리미엄 블렌디드 위스키"
      ],
      priceHistory: [
        { store: "쿠팡", price: 189000, shipping: "무료배송", link: "#", discount: "10%" },
        { store: "11번가", price: 195000, shipping: "무료배송", link: "#", discount: "7%" },
        { store: "G마켓", price: 210000, shipping: "2,500원", link: "#", discount: "0%" },
        { store: "신세계몰", price: 205000, shipping: "무료배송", link: "#", discount: "2%" },
        { store: "롯데온", price: 198000, shipping: "무료배송", link: "#", discount: "6%" }
      ]
    },
    2: {
      id: 2,
      name: "헤네시 XO",
      lowestPrice: 269000,
      category: "코냑",
      description: "프랑스 전통 코냑의 최고봉. 100가지 이상의 오 드 비를 블렌딩한 럭셔리 코냑입니다.",
      rating: 4.9,
      reviewCount: 156,
      image: "https://images.unsplash.com/photo-1504139969750-3244a83e5f8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      features: [
        "40% 알코올 도수",
        "700ml 용량",
        "프랑스 코냑 지역",
        "XO 등급 (10년 이상 숙성)"
      ],
      priceHistory: [
        { store: "신세계몰", price: 269000, shipping: "무료배송", link: "#", discount: "10%" },
        { store: "롯데온", price: 285000, shipping: "무료배송", link: "#", discount: "5%" },
        { store: "옥션", price: 299000, shipping: "무료배송", link: "#", discount: "0%" },
        { store: "G마켓", price: 295000, shipping: "3,000원", link: "#", discount: "1%" }
      ]
    }
  };

  const product = products[parseInt(id)] || products[1];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 브레드크럼 */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <span>홈</span>
          <i className="fas fa-chevron-right"></i>
          <span>가격비교</span>
          <i className="fas fa-chevron-right"></i>
          <span className="text-primary">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* 상품 이미지 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                {product.category}
              </span>
              <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-2">{product.name}</h1>
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
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
            </div>
          </div>

          {/* 가격 비교 테이블 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-primary text-white p-6">
                <h2 className="text-2xl font-bold mb-2">가격 비교</h2>
                <div className="text-3xl font-bold text-secondary">
                  최저가 ₩{product.lowestPrice.toLocaleString()}
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {product.priceHistory.map((store, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                            <i className="fas fa-store text-gray-600"></i>
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{store.store}</h3>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <span>{store.shipping}</span>
                              {store.discount !== "0%" && (
                                <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full">
                                  {store.discount} 할인
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-2xl font-bold ${store.price === product.lowestPrice ? 'text-red-600' : 'text-gray-800'}`}>
                            ₩{store.price.toLocaleString()}
                          </div>
                          <a
                            href={store.link}
                            className="inline-block mt-2 bg-secondary text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                          >
                            구매하러 가기
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 상품 상세 정보 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">상품 정보</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <i className="fas fa-check text-primary mr-2"></i>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 가격 추이 그래프 (향후 추가 가능) */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-bold mb-4">가격 비교 팁</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <i className="fas fa-check text-green-600"></i>
              </div>
              <div>
                <h4 className="font-semibold mb-1">최저가 자동 알림</h4>
                <p className="text-sm text-gray-600">관심 상품의 가격이 떨어지면 즉시 알려드립니다.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="fas fa-heart text-blue-600"></i>
              </div>
              <div>
                <h4 className="font-semibold mb-1">즐겨찾기 추가</h4>
                <p className="text-sm text-gray-600">자주 찾는 상품을 즐겨찾기에 추가해보세요.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;