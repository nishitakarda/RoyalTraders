import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const CartTotal = () => {
  const { getCartAmount, delivery_fee = 40, currency = "₹" } = useContext(ShopContext);

  const subtotal = getCartAmount();
  const grandTotal = subtotal === 0 ? 0 : subtotal + delivery_fee;

  return (
    <div className="w-full sm:w-[450px] mt-8 px-1">
      {/* Title */}
      <div className="text-2xl mb-4">
        <Title text1="CART" text2="TOTALS" />
      </div>

      <div className="flex flex-col gap-4 text-base sm:text-lg bg-white p-6 rounded shadow-md border">
        {/* Subtotal */}
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>{currency}{subtotal}.00</p>
        </div>

        {/* Shipping */}
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>{currency}{delivery_fee}.00</p>
        </div>

        <hr />

        {/* Total */}
        <div className="flex justify-between font-semibold text-lg">
          <b>Total</b>
          <b>{currency}{grandTotal}.00</b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
