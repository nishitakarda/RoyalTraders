import React from "react";
import { useNavigate } from "react-router-dom";

const slugify = (category) =>
  category.toLowerCase().replace(/ &/g, '').replace(/\s+/g, '-');

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const categorySlug = slugify(product.category);
    navigate(`/product/${categorySlug}/${product._id}`);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer p-4 rounded-lg shadow-md hover:shadow-xl transition">
      <img src={product.image[0]} alt={product.name} className="w-full h-48 object-cover mb-2 rounded" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500">₹{product.price}</p>
    </div>
  );
};

export default ProductCard;
