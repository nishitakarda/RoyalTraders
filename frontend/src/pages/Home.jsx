import React from 'react';
import HeroSection from '../components/HeroSection';
import Categories from '../components/Categories';
import Testimonials from '../components/Testimonials';
import BestSeller from '../components/BestSeller';
import Features from '../components/Features';

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      <HeroSection />
      <Categories />
      <Testimonials />
      <BestSeller />
      <Features />
    </div>
  );
};

export default Home;