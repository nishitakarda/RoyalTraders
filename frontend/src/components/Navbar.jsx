import React, { useContext, useState } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { FiShoppingCart, FiSearch } from 'react-icons/fi';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [showProductSubmenu, setShowProductSubmenu] = useState(false);
  const {getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext);

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }

  return (
    <div className="flex items-center justify-between py-5 px-4 sm:px-8 font-medium fixed top-0 left-0 w-full z-50 bg-white shadow">
      {/* Logo */}
      <img
        src={assets.logo}
        alt="Royal Traders Logo"
        className="w-28 sm:w-28 object-contain transition-transform duration-300 hover:scale-105"
      />

      {/* Desktop Nav */}
      <ul className="hidden sm:flex gap-10 text-[18px] text-gray-700 items-center justify-center flex-1 ml-8">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
        </NavLink>

        <div className="relative group flex flex-col items-center gap-1 cursor-pointer">
          <p className="text-gray-900 text-lg">PRODUCT +</p>
          {/* Dropdown */}
          <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full mt-2 z-50">
            <div className="flex flex-col gap-3 w-64 py-6 px-6 bg-white text-gray-800 rounded-2xl shadow-2xl text-base font-semibold">
              <NavLink to="/product/nuts-dry-fruits" className="py-2 px-2 rounded hover:bg-[#EDE6DD]">Nuts & Dry Fruits</NavLink>
              <NavLink to="/product/dates" className="py-2 px-2 rounded hover:bg-[#EDE6DD]">Dates</NavLink>
              <NavLink to="/product/royals-exclusives" className="py-2 px-2 rounded hover:bg-[#EDE6DD]">Royals Exclusives</NavLink>
              <NavLink to="/product/berries" className="py-2 px-2 rounded hover:bg-[#EDE6DD]">Berries</NavLink>
              <NavLink to="/product/seeds-more" className="py-2 px-2 rounded hover:bg-[#EDE6DD]">Seeds & More</NavLink>
            </div>
          </div>
        </div>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
        </NavLink>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-6 ml-auto">
        {/* Search Icon */}
        <img src={assets.search_icon} className="w-6 cursor-pointer" alt="Profile" />

        {/* Profile Dropdown */}
        <div className="group relative">
          <img onClick={()=> token ? null : navigate('/login')}src={assets.profile_icon} className="w-6 cursor-pointer" alt="Profile" />
          {/*Dropdoen Menu */}
          {token && 
          <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full right-0 mt-3 z-50">
            <div className="flex flex-col gap-3 w-48 py-5 px-6 bg-white text-gray-800 rounded-2xl shadow-2xl text-base font-semibold">
              <p className="cursor-pointer py-2 px-2 rounded hover:bg-[#f2f2f2]">My Profile</p>
              <p onClick={()=>navigate('/orders')} className="cursor-pointer py-2 px-2 rounded hover:bg-[#f2f2f2]">Orders</p>
              <p onClick={logout} className="cursor-pointer py-2 px-2 rounded hover:bg-[#f2f2f2]">Logout</p>
            </div>
          </div>}
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative group">
          <FiShoppingCart className="text-[28px] group-hover:scale-110 transition-transform duration-200 text-gray-800" />
          <p className="absolute -top-2.5 -right-3 w-5 h-5 text-[10px] flex items-center justify-center bg-[#c0823b] text-white rounded-full shadow-md font-semibold">
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Hamburger */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-6 cursor-pointer sm:hidden"
          alt="Menu"
        />
      </div>

      {/* Sidebar for Mobile */}
      <div className={`fixed top-0 right-0 h-full bg-white z-50 shadow-md transition-all duration-300 ease-in-out ${visible ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col text-gray-600 h-full overflow-y-auto">
          {/* Back button */}
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-4 border-b cursor-pointer">
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back" />
            <p className="text-lg">Back</p>
          </div>

          <NavLink onClick={() => setVisible(false)} className="py-3 px-6 border-b" to="/">HOME</NavLink>

          {/* PRODUCTS expandable */}
          <div
            className="py-3 px-6 border-b flex justify-between items-center cursor-pointer"
            onClick={() => setShowProductSubmenu(!showProductSubmenu)}
          >
            <span>PRODUCTS</span>
            <img
              src={assets.dropdown_icon}
              alt="Toggle"
              className={`w-3 transform transition-transform ${showProductSubmenu ? 'rotate-180' : ''}`}
            />
          </div>

          {showProductSubmenu && (
            <div className="flex flex-col bg-[#f9f9f9] px-8">
              <NavLink onClick={() => setVisible(false)} className="py-2 border-b" to="/product/nuts-dry-fruits">Nuts & Dry Fruits</NavLink>
              <NavLink onClick={() => setVisible(false)} className="py-2 border-b" to="/product/dates">Dates</NavLink>
              <NavLink onClick={() => setVisible(false)} className="py-2 border-b" to="/product/royals-exclusives">Royals Exclusives</NavLink>
              <NavLink onClick={() => setVisible(false)} className="py-2 border-b" to="/product/berries">Berries</NavLink>
              <NavLink onClick={() => setVisible(false)} className="py-2 border-b" to="/product/seeds-more">Seeds & More</NavLink>
            </div>
          )}

          <NavLink onClick={() => setVisible(false)} className="py-3 px-6 border-b" to="/about">ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-3 px-6 border-b" to="/contact">CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
