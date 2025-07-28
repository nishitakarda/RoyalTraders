import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import Testimonials from '../components/Testimonials';

const About = () => {
  return (
    <div className='px-4 sm:px-12 pt-24 border-t text-gray-800'>
      {/* Title */}
      <div className='text-4xl font-bold text-center pt-8 border-t'>
        <Title text1="ABOUT" text2="US" />
      </div>

      {/* About Section */}
      <div className='my-8 flex flex-col md:flex-row gap-16 items-center'>
        <img
          className='w-full md:max-w-[600px] object-cover rounded-xl shadow-lg'
          src={assets.about_img}
          alt="Royal Traders Dry Fruits"
        />
        <div className='flex flex-col justify-center gap-8 md:w-2/4 text-lg leading-relaxed text-gray-700'>
          <p className='text-2xl font-semibold'>
            Welcome to <span className='text-yellow-700'>Royal Traders</span>
          </p>
          
          {/* First paragraph */}
          <p>
            At Royal Traders, we believe that quality food is the foundation of a healthy life.  
            We specialize in offering premium, hand-selected dry fruits that are rich in flavor, freshness, and nutrition.  
            Our products are carefully sourced from trusted farms and growers across India, ensuring that each item in our collection meets the highest standards of purity and taste.  
            From crunchy almonds to succulent dates, every product reflects our commitment to excellence and tradition.
          </p>

          {/* Second paragraph */}
          <p>
            We understand the importance of trust when it comes to what you consume.  
            That’s why we maintain strict quality control at every step — from farm selection and procurement to hygienic packaging and timely delivery.  
            Whether you’re celebrating a special occasion, sending a thoughtful gift, or simply upgrading your everyday nutrition,  
            Royal Traders provides a touch of luxury that’s rooted in Indian heritage.  
            Thousands of satisfied customers, across families and businesses, continue to choose us for our reliability, transparency, and delicious products.
          </p>

          {/* Our Mission */}
          <div>
            <p className='text-xl font-semibold text-yellow-800 pt-2'>Our Mission</p>
            <p>
              Our mission is to enrich lives by delivering the highest-quality dry fruits while nurturing a culture of health, tradition, and care.  
              We aim to make premium dry fruits more accessible and trustworthy, one happy customer at a time.  
              With innovation, sustainability, and honesty as our pillars, we continue to grow while staying true to our roots.  
              At Royal Traders, we don’t just sell dry fruits — we serve goodness, wrapped in heritage.
            </p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className='text-3xl text-[#c0823b] font-bold text-center py-10'>
        WHY CHOOSE US?
      </div>

      <div className='flex flex-col md:flex-row text-lg mb-24 gap-8'>
        {/* Quality */}
        <div className='border p-8 flex flex-col gap-4 rounded-xl shadow-md hover:shadow-xl transition'>
          <b className='text-xl text-yellow-800'>Uncompromising Quality</b>
          <p className='text-gray-700'>
            We deliver only the <strong>best of the best</strong>. Every batch undergoes rigorous quality checks, ensuring our customers receive dry fruits that are fresh, safe, and nutrient-rich.
          </p>
        </div>

        {/* Royal Packaging */}
        <div className='border p-8 flex flex-col gap-4 rounded-xl shadow-md hover:shadow-xl transition'>
          <b className='text-xl text-yellow-800'>Royal Packaging</b>
          <p className='text-gray-700'>
            From design to material, our packaging reflects <strong>elegance and care</strong>. It’s not just about looks — our packs are eco-friendly, tamper-proof, and built to preserve freshness.
          </p>
        </div>

        {/* Trusted Brand */}
        <div className='border p-8 flex flex-col gap-4 rounded-xl shadow-md hover:shadow-xl transition'>
          <b className='text-xl text-yellow-800'>Trusted By Generations</b>
          <p className='text-gray-700'>
            With decades of trust built on consistency and integrity, Royal Traders is a <strong>household name</strong>.  
            We proudly serve repeat customers who rely on us for purity and value in every bite.
          </p>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default About;
