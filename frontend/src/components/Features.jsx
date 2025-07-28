import React from 'react';
import { FaShippingFast, FaUndoAlt, FaHeadset, FaShieldAlt } from 'react-icons/fa';

const features = [
  { icon: <FaShieldAlt />, title: 'PREMIUM QUALITY', subtitle: '100% Quality Guarantee' },
  { icon: <FaShippingFast />, title: 'SWIFT SHIPPING', subtitle: 'Delivering across India' },
  { icon: <FaUndoAlt />, title: 'EASY RETURN', subtitle: 'Refer return policy' },
  { icon: <FaHeadset />, title: '24/7 SUPPORT', subtitle: 'Support every time' },
];

const Features = () => (
  <section className="py-10 px-6 bg-gray-100">
    <h2 className="text-3xl font-bold text-center mb-8 text-[#c0823b]">Why Choose Us</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {features.map((item, idx) => (
        <div key={idx} className="bg-white px-4 py-6 rounded-lg shadow-md text-center flex flex-col items-center h-[160px] justify-center">
          <div className="text-[#7d3a00] text-3xl mb-3">{item.icon}</div>
          <h3 className="font-semibold text-md mb-1">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.subtitle}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;