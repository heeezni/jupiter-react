import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState('기본순');

  const categories = ['전체', '신선 과일', '야채', '견과류', '베리류'];
  
  const products = [
    { id: 1, name: '신선한 오렌지', price: 15000, category: '신선 과일', image: '/images/featur-1.jpg', rating: 5, sale: true },
    { id: 2, name: '유기농 바나나', price: 12000, category: '신선 과일', image: '/images/featur-2.jpg', rating: 4 },
    { id: 3, name: '아보카도', price: 25000, category: '신선 과일', image: '/images/featur-3.jpg', rating: 5 },
    { id: 4, name: '신선한 사과', price: 18000, category: '신선 과일', image: '/images/vegetable-item-1.jpg', rating: 4, sale: true },
    { id: 5, name: '브로콜리', price: 8000, category: '야채', image: '/images/vegetable-item-2.jpg', rating: 5 },
    { id: 6, name: '양상추', price: 6000, category: '야채', image: '/images/vegetable-item-3.png', rating: 4 },
    { id: 7, name: '당근', price: 5000, category: '야채', image: '/images/vegetable-item-4.jpg', rating: 5 },
    { id: 8, name: '양파', price: 4000, category: '야채', image: '/images/vegetable-item-5.jpg', rating: 4 },
    { id: 9, name: '아몬드', price: 35000, category: '견과류', image: '/images/vegetable-item-6.jpg', rating: 5 },
    { id: 10, name: '호두', price: 40000, category: '견과류', image: '/images/featur-1.jpg', rating: 4 },
    { id: 11, name: '블루베리', price: 22000, category: '베리류', image: '/images/featur-2.jpg', rating: 5 },
    { id: 12, name: '딸기', price: 16000, category: '베리류', image: '/images/featur-3.jpg', rating: 4, sale: true },
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === '전체' || product.category === selectedCategory;
    const priceMatch = product.price >= priceRange[0] * 1000 && product.price <= priceRange[1] * 1000;
    return categoryMatch && priceMatch;
  });

  return (
    <div className="py-16 bg-gray-50">
      {/* 페이지 헤더 */}
      <div className="bg-primary text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">쇼핑</h1>
          <p className="text-lg">신선한 과일과 채소를 만나보세요</p>
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
                <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <Link to={`/product/${product.id}`}>
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.sale && (
                        <span className="absolute top-2 left-2 bg-secondary text-white px-2 py-1 text-xs rounded">
                          SALE
                        </span>
                      )}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    </div>
                  </Link>
                  
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
                    
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-primary transition-colors">{product.name}</h3>
                    </Link>
                    <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">
                        {product.price.toLocaleString()}원
                      </span>
                      <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300">
                        <i className="fa fa-shopping-bag mr-1"></i>
                        담기
                      </button>
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