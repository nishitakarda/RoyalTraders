import React from 'react';
import { assets } from '../assets/frontend_assets/assets';
import {
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope,
  FaUniversity, FaPhoneAlt
} from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-[#ebebeb] text-black text-sm pt-10 pb-6 px-4 sm:px-6 lg:px-10">
    <div className="max-w-9xl mx-auto grid md:grid-cols-4 gap-8 pb-10 border-b border-gray-300">
      {/* 🔰 Logo + About */}
      <div>
        <img src={assets.logo} alt="Logo" className="h-10 mb-4" />
        <p className="text-gray-600 leading-relaxed">
          Royal Traders brings you a collection of carefully<br/> selected foods from India and across the world.{" "}
          <br/>
          <span className="text-[#c0823b] font-medium cursor-pointer hover:underline">[Explore More]</span>
        </p>
        <div className="flex gap-4 mt-5 text-xl text-gray-600">
          <FaFacebookF className="hover:text-[#c0823b] cursor-pointer" />
          <FaTwitter className="hover:text-[#c0823b] cursor-pointer" />
          <FaInstagram className="hover:text-[#c0823b] cursor-pointer" />
          <FaLinkedinIn className="hover:text-[#c0823b] cursor-pointer" />
        </div>
      </div>

      {/* 🔗 Quick Links */}
      <div>
        <h3 className="font-semibold mb-4 text-black text-lg">Quick Links</h3>
        <ul className="space-y-2 text-gray-600">
          <li className="hover:text-[#c0823b] cursor-pointer">About Us</li>
          <li className="hover:text-[#c0823b] cursor-pointer">Contact Us</li>
          <li className="hover:text-[#c0823b] cursor-pointer">Bulk Ordering</li>
          <li className="hover:text-[#c0823b] cursor-pointer">Shopping</li>
        </ul>
      </div>

      {/* 🔐 Account Info */}
      <div>
        <h3 className="font-semibold mb-4 text-black text-lg">Account Info</h3>
        <ul className="space-y-2 text-gray-600">
          <li className="hover:text-[#c0823b] cursor-pointer">My Account</li>
          <li className="hover:text-[#c0823b] cursor-pointer">Privacy Policy</li>
          <li className="hover:text-[#c0823b] cursor-pointer">Return Policy</li>
          <li className="hover:text-[#c0823b] cursor-pointer">Terms & Conditions</li>
        </ul>
      </div>

      {/* ☎ Contact Info */}
      <div>
        <h3 className="font-semibold mb-4 text-black text-lg">Contact Details</h3>
        <ul className="space-y-4 text-gray-600 text-sm">
          <li className="flex items-start gap-3">
            <FaUniversity className="mt-1 text-lg" />
            <span>
              SHOP NO 09 JAWAHAR MARG SIYAGANJ<br />INDORE, MP - 452007
            </span>
          </li>
          <li className="flex items-center gap-3">
            <FaEnvelope className="text-lg" /> info@royaltraders.com
          </li>
          <li className="flex items-center gap-3">
            <FaPhoneAlt className="text-lg" /> +91-8109693372
          </li>
        </ul>
      </div>
    </div>

    {/* 👇 Bottom Row */}
    <div className="max-w-9xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 mt-6 px-2 text-sm text-gray-600">
      <p>© 2025 <span className="font-semibold text-black">Royal Traders</span>. All Rights Reserved.</p>
      <div className="flex items-center gap-4">
        <img src={assets.razorpay_logo} alt="Razorpay" className="h-6" />
        <img src={assets.stripe_logo} alt="Stripe" className="h-6" />
      </div>
    </div>
  </footer>
);

export default Footer;
