import React from 'react';
import { FaQuoteLeft, FaUserCircle, FaStar } from 'react-icons/fa';

const testimonials = [
  { name: 'Roshan Prajwal', text: 'Excellent quality dry fruits and delicious chocolates! Fresh, flavorful, and perfect for gifting.' },
  { name: 'Bilal Abdullah', text: 'A delightful mix of premium dry fruits and irresistible chocolates. Great quality and taste!' },
  { name: 'Prashanth Kumar', text: 'Top-notch quality with amazing flavor combinations. A must-visit for dry fruit and chocolate lovers!' },
];

const Testimonials = () => (
  <section className="py-12 px-6 bg-gray-100">
    <h2 className="text-4xl text-[#c0823b] font-bold text-center mb-12">Words From Our Delighted Customers</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((item, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-md h-[280px] flex flex-col justify-between relative">
          <FaQuoteLeft className="text-4xl text-gray-300 absolute top-4 left-4" />
          <div className="mt-10 flex items-start gap-4">
            <FaUserCircle className="text-6xl text-gray-400" />
            <div>
              <p className="font-bold text-xl mb-2">{item.name}</p>
              <p className="text-base italic leading-relaxed">“{item.text}”</p>
            </div>
          </div>
          <div className="text-yellow-500 mt-4 pl-16 flex">
            {[...Array(5)].map((_, i) => <FaStar key={i} />)}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;