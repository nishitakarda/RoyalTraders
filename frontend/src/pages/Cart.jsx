import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { cartItems, updateQuantity, removeItem, navigate, products } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  const quantityMap = {
    "100g": 1,
    "250g": 2.5,
    "500g": 5,
    "1kg": 10,
    "2kg": 20,
    "5kg": 50,
  };

  useEffect(() => {
    if (products.length > 0) {
      const temp = [];
      Object.keys(cartItems).forEach((pid) => {
        Object.keys(cartItems[pid]).forEach((qLabel) => {
          if (cartItems[pid][qLabel] > 0) {
            temp.push({
              _id: pid,
              quantityLabel: qLabel,
              quantity: cartItems[pid][qLabel],
            });
          }
        });
      });
      setCartData(temp);
    }
  }, [cartItems, products]);

  if (products.length === 0) {
    return <div className="pt-40 text-center text-xl">Loading Cart...</div>;
  }

  return (
    <div className="max-w-[1600px] mx-auto border-t pt-40 px-6 sm:px-10">
      <div className="text-3xl mb-6">
        <Title text1="YOUR" text2="CART" />
      </div>

      {cartData.length === 0 ? (
        <div className="flex flex-col items-center my-16">
          <img
            src={assets.not_found}
            alt="Cart Empty"
            className="w-80 h-90 mb-6 opacity-80"
          />
          <p className="text-3xl text-gray-600">Your cart is empty</p>
        </div>
      ) : (
        <>
          {cartData.map((item, i) => {
            const product = products.find((p) => p._id === item._id);
            if (!product) return null;

            const multiplier = quantityMap[item.quantityLabel] || 1;
            const finalPrice = Math.round(
              product.price * multiplier * item.quantity
            );

            return (
              <div
                key={i}
                className="flex items-start sm:items-center justify-between gap-6 p-4 border rounded-lg mb-4 bg-white shadow-sm"
              >
                {/* Left */}
                <div className="flex gap-4">
                  <img
                    src={product.image?.[0] || assets.fallbackImage}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-[#5a0a0a]">
                      {product.name}
                    </h2>
                    <p className="text-gray-700 text-lg">
                      Quantity:{" "}
                      <span className="font-medium">{item.quantityLabel}</span>
                    </p>
                    <p className="text-xl font-bold mt-2">₹{finalPrice}</p>
                  </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (val > 0) {
                        updateQuantity(item._id, item.quantityLabel, val);
                      }
                    }}
                    className="border max-w-[80px] px-3 py-1 rounded text-center"
                  />
                  <img
                    src={assets.bin_icon}
                    alt="Delete"
                    onClick={() => removeItem(item._id, item.quantityLabel)}
                    className="w-5 h-5 cursor-pointer"
                  />
                </div>
              </div>
            );
          })}

          {/* Total */}
          <div className="flex justify-end px-4 sm:px-8 mt-12 mb-20">
            <div className="w-full max-w-md">
              <CartTotal />
              <div className="flex justify-end">
                <button
                  onClick={() => navigate("/place-order")}
                  className="bg-black text-white text-md mt-6 px-4 py-2 rounded hover:bg-gray-800"
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
