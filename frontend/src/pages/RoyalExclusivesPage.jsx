import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function RoyalExclusivesPage() {
  const [selectedQuantities, setSelectedQuantities] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { products } = useContext(ShopContext);
  const navigate = useNavigate();

  const quantityOptions = [
    { label: "100g", multiplier: 1 },
    { label: "250g", multiplier: 2.5 },
    { label: "500g", multiplier: 5 },
    { label: "1kg", multiplier: 10 },
    { label: "2kg", multiplier: 20 },
    { label: "5kg", multiplier: 50 },
  ];

  // ✅ useEffect to filter products once products are loaded
  useEffect(() => {
    const result = products.filter((product) => product.category === "Exclusives");
    setFilteredProducts(result);
  }, [products]);

  const handleQuantityChange = (productId, value) => {
    setSelectedQuantities((prev) => ({ ...prev, [productId]: value }));
  };

  return (
    <div className="max-w-[2200px] mx-auto py-6">
      <img
        src={assets.royalsHero}
        alt="Royal Exclusives Banner"
        className="w-full h-[47vh] object-cover rounded-xl mb-10 shadow-lg"
      />

      <div className="flex items-center justify-center mb-10 bg-[#f6f6f6] px-6 py-4 rounded-lg border border-gray-200 shadow-sm">
        <h1 className="text-2xl md:text-3xl font-bold text-[#5a0a0a]">
          Royal Exclusive Dry Fruits
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.map((product) => {
          const selectedQty = selectedQuantities[product._id] || "100g";
          const multiplier =
            quantityOptions.find((q) => q.label === selectedQty)?.multiplier ||
            1;
          const calculatedPrice = (product.price * multiplier).toFixed(2);

          return (
            <div
              key={product._id}
              className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
            >
              {product.image?.[0] ? (
                <img
                  src={product.image[0]}
                  alt={product.name}
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[600px] object-cover"
                />
              ) : (
                <div className="w-full h-[600px] bg-gray-200 flex items-center justify-center">
                  <span>No Image</span>
                </div>
              )}

              <div className="p-4 text-center">
                <h2 className="text-2xl font-bold text-[#5a0a0a] mb-1">
                  {product.name}
                </h2>

                <select
                  className="border border-gray-300 px-2 py-1 rounded my-2 text-lg w-[90px] mx-auto"
                  value={selectedQty}
                  onChange={(e) =>
                    handleQuantityChange(product._id, e.target.value)
                  }
                >
                  {quantityOptions.map((q) => (
                    <option key={q.label} value={q.label}>
                      {q.label}
                    </option>
                  ))}
                </select>

                <p className="text-xl font-bold text-red-600 mb-3">
                  ₹{calculatedPrice}
                </p>

                <button
                  className="w-[150px] mx-auto flex items-center justify-center gap-2 bg-[#5a0a0a] text-white py-2 rounded hover:bg-[#3e0505] transition cursor-pointer"
                  onClick={() =>
                    navigate(`/product/royal-exclusives/${product._id}`)
                  }
                >
                  <BsBoxArrowUpRight className="text-base" /> View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
