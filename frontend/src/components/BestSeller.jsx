import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const BestSeller = () => {

  const {products} = useContext(ShopContext);
  const [bestseller, setBestseller] = useState([]);

  useEffect(()=>{
    const bestProduct = products.filter((item)=>(item.bestseller));
    setBestseller(bestProduct.slice(0,5))
  }, [products])

  return (
    <section className="py-12 px-4 sm:px-6 bg-[#f8f8f8]">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#c0823b] mb-2">Best Sellers</h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
          Our most popular picks loved by our customers. Explore the top trending products handpicked for you.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {bestseller.map((item) => (
          <Link
            to={`/product/${item._id}`}
            key={item._id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={item.image?.[0]}
              alt={item.name}
              className="w-full h-60 sm:h-52 md:h-90 object-cover"
            />
            <div className="p-3 sm:p-4">
              <h3 className="text-base sm:text-lg font-semibold mb-1 text-gray-800">
                {item.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                {item.description?.slice(0, 60)}...
              </p>
              <p className="text-[#c0823b] font-bold text-sm sm:text-md">₹ {item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
