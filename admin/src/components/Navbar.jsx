import React from 'react'
import { assets } from '../assets/admin_assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-1 px-[4%] justify-between'>
      <img
        className='w-[100px] sm:w-[120px] md:w-[140px] max-w-[140px]'
        src={assets.logo}
        alt="Logo"
      />
      <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-4 py-2 sm:px-8 sm:py-3 rounded-full text-md sm:text-md cursor-pointer'>Logout</button>
    </div>
  )
}

export default Navbar