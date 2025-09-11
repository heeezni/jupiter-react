import React from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import FeaturedProducts from './components/sections/FeaturedProducts';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
