import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/frontend_assets/assets';

const categories = [
  { name: 'Almonds', path: '/product/nuts-dry-fruits', image: assets.almonds },
  { name: 'Nuts & Dry Fruits', path: '/product/nuts-dry-fruits', image: assets.NutsAndDryFruits },
  { name: 'Dates', path: '/product/dates', image: assets.dates },
  { name: 'Royals Exclusives', path: '/product/royals-exclusives', image: assets.royalsExclusives },
  { name: 'Berries', path: '/product/berries', image: assets.berries },
  { name: 'Seeds', path: '/product/seeds-more', image: assets.seeds },
];

const Categories = () => (
  <div className="mt-12 px-6">
    <p className="text-center text-3xl font-semibold text-[#c0823b]">Our Categories</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
      {categories.map((cat, i) => (
        <Link key={i} to={cat.path} className="w-full flex flex-col items-center group">
          <div className="w-full h-[400px] overflow-hidden rounded-xl shadow-md">
            <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
          <p className="mt-3 font-semibold text-lg group-hover:text-[#c0823b] text-center">{cat.name}</p>
        </Link>
      ))}
    </div>
  </div>
);

export default Categories;