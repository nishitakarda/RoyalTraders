import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { FaLeaf, FaTruck, FaShieldAlt } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";

const quantityOptions = [
  { label: "100g", multiplier: 1 },
  { label: "250g", multiplier: 2.5 },
  { label: "500g", multiplier: 5 },
  { label: "1kg", multiplier: 10 },
  { label: "2kg", multiplier: 20 },
  { label: "5kg", multiplier: 50 },
];

const ProductDetail = () => {
  const { category, id } = useParams();
  const { products, addToCart } = useContext(ShopContext);

  const [product, setProduct] = useState(null);
  const [selectedQty, setSelectedQty] = useState("100g");
  const [mainImage, setMainImage] = useState("");

  // ✅ Fetch product dynamically
  useEffect(() => {
    const foundProduct = products.find((p) => p._id === id);
    setProduct(foundProduct || null);
    if (foundProduct?.image?.[0]) {
      setMainImage(foundProduct.image[0]);
    }
  }, [id, products]);

  if (!product) {
    return (
      <div className="text-center mt-10 text-xl text-red-600">
        Product Not Found
      </div>
    );
  }

  const multiplier =
    quantityOptions.find((q) => q.label === selectedQty)?.multiplier || 1;
  const calculatedPrice = Math.round(product.price * multiplier);

  return (
    <div className="max-w-[1600px] mx-auto px-3 pt-30 pb-14 bg-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        {/* Left: Main Image + Thumbnails */}
        <div className="md:w-[47%] w-full">
          <img
            src={mainImage || assets.fallbackImage}
            alt={product.name}
            className="w-full h-[640px] object-cover rounded-lg border"
          />
          <div className="flex gap-2 flex-wrap mt-4">
            {product.image?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${product.name}-${i}`}
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 object-cover rounded border cursor-pointer ${
                  mainImage === img ? "ring-2 ring-yellow-500" : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="md:w-[53%] w-full space-y-4">
          <h1 className="text-5xl font-bold text-[#5a0a0a]">{product.name}</h1>

          <div className="flex items-center gap-4">
            <label className="font-semibold text-xl">Select Quantity:</label>
            <select
              className="p-2 border rounded w-32"
              value={selectedQty}
              onChange={(e) => setSelectedQty(e.target.value)}
            >
              {quantityOptions.map((q) => (
                <option key={q.label} value={q.label}>
                  {q.label}
                </option>
              ))}
            </select>
          </div>

          <p className="text-3xl text-black font-bold">₹{calculatedPrice}</p>

          {/* Feature Highlights */}
          <div className="text-gray-800 text-lg pt-2 flex flex-col gap-2">
            <p className="flex items-center gap-2">
              <FaShieldAlt className="text-yellow-600" /> Quality Checked & Secure Packaging
            </p>
            <p className="flex items-center gap-2">
              <FaLeaf className="text-green-600" /> 100% Organic Product
            </p>
            <p className="flex items-center gap-2">
              <FaTruck className="text-blue-600" /> Cash on Delivery Available
            </p>
          </div>

          <p className="text-gray-700 text-2xl leading-relaxed">
            {product.description ||
              "Premium quality dry fruits sourced directly from the farms."}
          </p>

          {/* Product Description */}
          <div className="pt-2">
            <h3 className="text-3xl font-semibold text-[#5a0a0a] mb-1">
              Product Description
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              {product.desc ||
                "These dry fruits are selected and processed with care to ensure freshness and maximum health benefits. They are rich in nutrients, antioxidants, and healthy fats."}
            </p>
          </div>

          <img
            src={assets.ProductHero}
            alt="Features"
            className="w-full max-w-xl mt-4 rounded"
          />

          <button
            className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded font-semibold transition cursor-pointer"
            onClick={() => addToCart(product._id, selectedQty)}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-16">
        <h2 className="text-4xl font-bold mb-4">About this Product</h2>
        <p className="text-gray-700 leading-relaxed mb-8 text-xl">
          {product.description ||
            "Our premium dry fruits are handpicked, sun-dried and packed hygienically to preserve quality and taste. Perfect for snacking, gifting or boosting your daily nutrition."}
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-gray-800">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Benefits</h3>
            <ul className="list-disc list-inside space-y-1 text-xl">
              <li>Boosts energy & immunity</li>
              <li>Heart-healthy & gluten-free</li>
              <li>Rich in vitamins & minerals</li>
              <li>Zero cholesterol, high fiber</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Storage Tips</h3>
            <ul className="list-disc list-inside space-y-1 text-xl">
              <li>Store in a cool, dry place</li>
              <li>Refrigerate after opening</li>
              <li>Use airtight containers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Customer Reviews</h3>
            <p className="text-xl">⭐⭐⭐⭐☆</p>
            <p className="text-xl text-gray-600 mt-1">
              "Fantastic product! Super fresh and crunchy." – Priya R.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
