import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";

const currency = "₹";

const Orders = () => {
  const { backendUrl, token } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            item.status = order.status;
            item.payment = order.payment;
            item.paymentMethod = order.paymentMethod;
            item.date = order.date;
            allOrdersItem.push(item);
          });
        });

        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.error("Error loading orders:", error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16 px-4 sm:px-12 min-h-[100vh]">
      <div className="text-2xl mb-8 mt-20">
        <Title text1="MY" text2="ORDERS" />
      </div>

      {orderData.length === 0 ? (
        <p className="text-center text-gray-600 text-lg mt-10">
          You haven't placed any orders yet.
        </p>
      ) : (
        <div className="space-y-6">
          {orderData.map((item, index) => (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 flex flex-col gap-4 sm:flex-row sm:items-center text-sm"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-20 sm:w-28 object-cover rounded"
                  src={item.image?.[0] || ""}
                  alt={item.name}
                />
                <div>
                  <p className="text-base font-medium">{item.name}</p>
                  <div className="flex items-center gap-3 mt-2 text-base text-gray-600">
                    <p className="text-lg">
                      {currency}
                      {item.price}
                    </p>
                    <p>Qty: {item.quantity || 1}</p>
                    <p>Qty Option: {item.size || "250g"}</p>
                  </div>
                  <p className="mt-2 text-gray-500">
                    Ordered On:{" "}
                    <span className="text-gray-400">
                      {new Date(item.date).toLocaleDateString() || "N/A"}
                    </span>
                  </p>
                  <p className="mt-2 text-gray-500">
                    Payment:{" "}
                    <span className="text-gray-400">
                      {item.paymentMethod}
                    </span>
                  </p>
                </div>
              </div>

              {/* Order status + Track button */}
              <div className="flex w-full sm:w-auto sm:flex-1 items-center justify-between sm:justify-end gap-3">
                <div className="flex items-center gap-2 sm:ml-auto sm:mr-auto">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <p className="text-xl md:text-base">
                    {item.status || "Ready to ship"}
                  </p>
                </div>
                <button onClick={loadOrderData} className="border px-4 py-2 text-sm font-medium text-black rounded-sm hover:bg-gray-100 transition cursor-pointer">
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
