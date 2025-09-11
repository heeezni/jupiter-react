import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Fresh Oranges",
      price: 4.99,
      originalPrice: 5.99,
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Fruits",
      rating: 4.5,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt"
    },
    {
      id: 2,
      name: "Fresh Raspberries", 
      price: 6.99,
      originalPrice: 8.99,
      image: "https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Fruits",
      rating: 5.0,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt"
    },
    {
      id: 3,
      name: "Fresh Bananas",
      price: 2.99,
      originalPrice: 3.99,
      image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Fruits", 
      rating: 4.0,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt"
    },
    {
      id: 4,
      name: "Fresh Apples",
      price: 3.99,
      originalPrice: 4.99, 
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Fruits",
      rating: 4.8,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt"
    },
    {
      id: 5,
      name: "Fresh Grapes",
      price: 5.99,
      originalPrice: 6.99,
      image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", 
      category: "Fruits",
      rating: 4.3,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt"
    },
    {
      id: 6,
      name: "Fresh Potatoes",
      price: 1.99,
      originalPrice: 2.99,
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Vegetables", 
      rating: 4.1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt"
    }
  ];

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-secondary text-white px-2 py-1 rounded-full text-xs font-semibold">
              {product.category}
            </span>
          </div>
          <div className="absolute top-3 right-3">
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
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-primary font-bold text-lg">${product.price}</span>
            <span className="text-gray-400 line-through text-sm">${product.originalPrice}</span>
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors">
            <i className="fas fa-shopping-cart mr-2"></i>
            Add
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Our Organic Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;