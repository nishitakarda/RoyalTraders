import React, { useState, useContext, useMemo, useEffect } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function NutsAndDryFruitsPage() {
  const [selectedType, setSelectedType] = useState("");
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

  const subCategories = useMemo(() => {
    return [
      ...new Set(
        products
          .filter((item) => item.category === "Nuts & Dry Fruits")
          .map((item) => item.subCategory)
      ),
    ];
  }, [products]);

  // ✅ useEffect to update filteredProducts automatically
  useEffect(() => {
    const result = products.filter(
      (product) =>
        product.category === "Nuts & Dry Fruits" &&
        (selectedType ? product.subCategory === selectedType : true)
    );
    setFilteredProducts(result);
  }, [products, selectedType]);

  const handleQuantityChange = (productId, value) => {
    setSelectedQuantities((prev) => ({ ...prev, [productId]: value }));
  };

  return (
    <div className="max-w-[2200px] mx-auto py-6">
      {/* Banner */}
      <img
        src={assets.dryfruits}
        alt="Nuts and Dry Fruits Banner"
        className="w-full h-[47vh] object-cover rounded-xl mb-10 shadow-lg"
      />

      {/* Filter Bar */}
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between mb-10 gap-4 bg-[#f6f6f6] px-6 py-4 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-center gap-3">
          <label className="text-xl md:text-2xl font-bold text-[#5a0a0a]">
            Product Type :
          </label>
          <select
            className="border px-3 py-2 rounded-md shadow-sm focus:outline-none"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">Select</option>
            {subCategories.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <h1 className="text-xl md:text-2xl font-bold text-[#5a0a0a]">
          Premium Quality Dry Fruits
        </h1>
      </div>

      {/* Product Grid */}
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
                    navigate(`/product/nuts-dry-fruits/${product._id}`)
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
