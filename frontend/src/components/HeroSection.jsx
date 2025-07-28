import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const HeroSection = () => (
  <div className="w-full h-[47vh] mt-[120px]">
    <img
      src={assets.hero_img}
      alt="Hero"
      className="w-full h-full object-cover object-center"
    />
  </div>
);

export default HeroSection;
