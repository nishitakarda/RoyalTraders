import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Verify = () => {
  const { token, setCartItems, backendUrl } = useContext(ShopContext);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const finalToken = token || localStorage.getItem("token"); 

  const verifyPayment = async () => {
    try {
      console.log("Verifying payment...", { success, orderId, finalToken });

      if (!finalToken) {
        toast.error("Login required");
        navigate("/login"); 
        return;
      }

      if (!success || !orderId) {
        toast.error("Invalid payment link.");
        navigate("/cart");
        return;
      }

      const response = await axios.post(
        `${backendUrl}/api/order/verifyStripe`,
        { success, orderId },
        { headers: { token: finalToken } }
      );

      console.log("Payment response:", response.data);

      if (response.data.success) {
        setCartItems({});
        toast.success("Payment successful! Order confirmed.");
        navigate("/orders");
      } else {
        toast.error("Payment failed.");
        navigate("/cart");
      }
    } catch (error) {
      console.error("Verification error:", error.response?.data || error.message);
      toast.error("Something went wrong.");
      navigate("/cart");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []); 

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      Verifying your payment, please wait...
    </div>
  );
};

export default Verify;
