import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState('기본순');

  const categories = ['전체', '위스키', '코냑', '보드카', '테킬라', '진', '럼'];

  const products = [
    {
      id: 1,
      name: "조니워커 블루라벨",
      lowestPrice: 189000,
      prices: [
        { store: "쿠팡", price: 189000 },
        { store: "11번가", price: 195000 },
        { store: "G마켓", price: 210000 }
      ],
      image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "위스키",
      rating: 4.8,
      description: "세계 최고급 스카치 위스키의 대명사"
    },
    {
      id: 2,
      name: "헤네시 XO",
      lowestPrice: 269000,
      prices: [
        { store: "신세계몰", price: 269000 },
        { store: "롯데온", price: 285000 },
        { store: "옥션", price: 299000 }
      ],
      image: "https://images.unsplash.com/photo-1504139969750-3244a83e5f8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "코냑",
      rating: 4.9,
      description: "프랑스 전통 코냑의 최고봉"
    },
    {
      id: 3,
      name: "돈훌리오 1942",
      lowestPrice: 450000,
      prices: [
        { store: "와인나라", price: 450000 },
        { store: "하이트진로", price: 480000 },
        { store: "이마트몰", price: 520000 }
      ],
      image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "테킬라",
      rating: 4.7,
      description: "멕시코 최고급 프리미엄 테킬라"
    },
    {
      id: 4,
      name: "그레이구스 보드카",
      lowestPrice: 89000,
      prices: [
        { store: "11번가", price: 89000 },
        { store: "쿠팡", price: 95000 },
        { store: "옥션", price: 105000 }
      ],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "보드카",
      rating: 4.6,
      description: "프랑스 최고급 프리미엄 보드카"
    },
    {
      id: 5,
      name: "발베니 21년",
      lowestPrice: 350000,
      prices: [
        { store: "G마켓", price: 350000 },
        { store: "신세계몰", price: 370000 },
        { store: "롯데온", price: 390000 }
      ],
      image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "위스키",
      rating: 4.8,
      description: "스코틀랜드 싱글몰트의 진수"
    },
    {
      id: 6,
      name: "루이 13세",
      lowestPrice: 3200000,
      prices: [
        { store: "현대백화점", price: 3200000 },
        { store: "갤러리아", price: 3350000 },
        { store: "롯데백화점", price: 3500000 }
      ],
      image: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "코냑",
      rating: 5.0,
      description: "세계 최고급 코냑의 황제"
    },
    {
      id: 7,
      name: "탄커레이 No.10",
      lowestPrice: 68000,
      prices: [
        { store: "쿠팡", price: 68000 },
        { store: "11번가", price: 72000 },
        { store: "G마켓", price: 75000 }
      ],
      image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "진",
      rating: 4.5,
      description: "영국 프리미엄 진의 대표작"
    },
    {
      id: 8,
      name: "바카디 8년",
      lowestPrice: 55000,
      prices: [
        { store: "롯데온", price: 55000 },
        { store: "신세계몰", price: 58000 },
        { store: "이마트몰", price: 62000 }
      ],
      image: "https://images.unsplash.com/photo-1527281400986-6d0eb64ecdfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "럼",
      rating: 4.4,
      description: "카리브해의 정통 럼"
    }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === '전체' || product.category === selectedCategory;
    const priceMatch = product.lowestPrice >= priceRange[0] * 1000 && product.lowestPrice <= priceRange[1] * 1000;
    return categoryMatch && priceMatch;
  });

  return (
    <div className="py-16 bg-gray-50">
      {/* 페이지 헤더 */}
      <div className="bg-primary text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">가격 비교</h1>
          <p className="text-lg">프리미엄 주류의 최저가를 찾아보세요</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 사이드바 필터 */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">카테고리</h3>
              <div className="space-y-3">
                {categories.map(category => (
                  <label key={category} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="text-primary focus:ring-primary"
                    />
                    <span className="ml-2 text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">가격 범위</h3>
              <div className="space-y-3">
                <div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>{priceRange[0] * 1000}원</span>
                    <span>{priceRange[1] * 1000}원</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-800">정렬</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="기본순">기본순</option>
                <option value="가격낮은순">가격 낮은순</option>
                <option value="가격높은순">가격 높은순</option>
                <option value="평점순">평점순</option>
              </select>
            </div>
          </div>

          {/* 상품 목록 */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{filteredProducts.length}개의 상품</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <Link to={`/product/${product.id}`}>
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 z-10">
                        <span className="bg-secondary text-white px-2 py-1 rounded-full text-xs font-semibold">
                          {product.category}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3 z-10">
                        <button className="bg-white p-2 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors">
                          <i className="fas fa-heart text-sm"></i>
                        </button>
                      </div>
                    </div>
                  </Link>

                  <div className="p-4">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-primary transition-colors">{product.name}</h3>
                    </Link>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>

                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fas fa-star text-xs ${
                            i < Math.floor(product.rating) ? 'text-secondary' : 'text-gray-300'
                          }`}
                        ></i>
                      ))}
                      <span className="text-gray-600 text-sm ml-2">({product.rating})</span>
                    </div>

                    <div className="space-y-3">
                      <div className="text-primary font-bold text-xl mb-2">
                        최저가 ₩{product.lowestPrice.toLocaleString()}
                      </div>
                      <div className="space-y-2">
                        {product.prices.map((priceInfo, index) => (
                          <div key={index} className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">{priceInfo.store}</span>
                            <span className={`font-semibold ${priceInfo.price === product.lowestPrice ? 'text-red-600' : 'text-gray-800'}`}>
                              ₩{priceInfo.price.toLocaleString()}
                            </span>
                          </div>
                        ))}
                      </div>
                      <Link to={`/product/${product.id}`} className="block">
                        <button className="w-full bg-secondary text-white py-2 rounded-full hover:bg-yellow-600 transition-colors">
                          <i className="fas fa-external-link-alt mr-2"></i>
                          가격 비교하기
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 페이지네이션 */}
            <div className="flex justify-center mt-12">
              <nav className="flex space-x-2">
                <button className="px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-50">
                  이전
                </button>
                <button className="px-4 py-2 text-white bg-primary border border-primary rounded">
                  1
                </button>
                <button className="px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-50">
                  2
                </button>
                <button className="px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-50">
                  3
                </button>
                <button className="px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-50">
                  다음
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;