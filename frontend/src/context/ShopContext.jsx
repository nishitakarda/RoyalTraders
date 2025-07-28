import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  // ✅ Fetch user cart
  const getUserCart = async (tokenValue) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/cart/get",
        {},
        { headers: { token: tokenValue } }
      );
      if (response.data.success) {
        setCartItems(response.data.cartData || {});
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to load cart");
    }
  };

  // ✅ Add item to cart
  const addToCart = async (itemId, quantityLabel) => {
    if (!quantityLabel) {
      toast.error("Select Quantity First");
      return;
    }

    // Local update
    const updatedCart = { ...cartItems };
    if (!updatedCart[itemId]) updatedCart[itemId] = {};
    updatedCart[itemId][quantityLabel] =
      (updatedCart[itemId][quantityLabel] || 0) + 1;

    setCartItems(updatedCart);

    // Sync with backend
    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/add",
          { itemId, quantityLabel },
          { headers: { token } }
        );
        await getUserCart(token); // ✅ ensure DB state matches
      } catch (error) {
        console.error(error);
        toast.error("Failed to sync with server");
      }
    }

    toast.success("Added to Cart!");
  };

  // ✅ Count total items
  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      for (const qtyLabel in cartItems[itemId]) {
        totalCount += cartItems[itemId][qtyLabel] || 0;
      }
    }
    return totalCount;
  };

  // ✅ Update quantity
  const updateQuantity = async (id, quantityLabel, value) => {
    if (value < 1) return;

    const updated = { ...cartItems };
    if (!updated[id]) updated[id] = {};
    updated[id][quantityLabel] = value;

    setCartItems(updated);

    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/update",
          { itemId: id, quantityLabel, quantity: value },
          { headers: { token } }
        );
        await getUserCart(token); // ✅ resync
      } catch (error) {
        console.error(error);
        toast.error("Failed to update cart");
      }
    }
  };

  // ✅ Remove item
  const removeItem = async (id, quantityLabel) => {
    const updated = { ...cartItems };
    if (updated[id]) {
      delete updated[id][quantityLabel];
      if (Object.keys(updated[id]).length === 0) delete updated[id];
    }

    setCartItems(updated);

    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/update",
          { itemId: id, quantityLabel, quantity: 0 },
          { headers: { token } }
        );
        await getUserCart(token); // ✅ resync
      } catch (error) {
        console.error(error);
        toast.error("Failed to remove item");
      }
    }
  };

  // ✅ Quantity map
  const quantityMap = {
    "100g": 1,
    "250g": 2.5,
    "500g": 5,
    "1kg": 10,
    "2kg": 20,
    "5kg": 50,
  };

  // ✅ Calculate total amount
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const productId in cartItems) {
      const product = products.find((p) => p._id === productId);
      if (!product) continue;

      for (const quantityLabel in cartItems[productId]) {
        const quantity = cartItems[productId][quantityLabel];
        const multiplier = quantityMap[quantityLabel] || 1;
        totalAmount += product.price * multiplier * quantity;
      }
    }
    return totalAmount;
  };

  // ✅ Fetch product list
  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to load products");
    }
  };

  // ✅ Load products initially
  useEffect(() => {
    getProductsData();
  }, []);

  // ✅ Load cart when token exists
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
      getUserCart(savedToken);
    }
  }, []);

  const value = {
    cartItems,
    products,
    setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    removeItem,
    getCartAmount,
    navigate,
    backendUrl,
    setToken,
    token,
    getUserCart,
  };

  return (
    <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
