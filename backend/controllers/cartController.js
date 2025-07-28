import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

const getUserIdFromToken = (token) => {
  if (!token) return null;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.id; // Make sure you set token as { id: user._id }
  } catch (error) {
    return null;
  }
};

const addToCart = async (req, res) => {
  try {
    const token = req.headers.token;
    const userId = getUserIdFromToken(token);

    if (!userId) {
      return res.json({ success: false, message: "Invalid or missing token" });
    }

    const { itemId, quantityLabel } = req.body;
    if (!itemId || !quantityLabel) {
      return res.json({ success: false, message: "itemId & quantityLabel required" });
    }

    const userData = await userModel.findById(userId);
    let cartData = userData.cartData || {};

    if (!cartData[itemId]) cartData[itemId] = {};
    cartData[itemId][quantityLabel] = (cartData[itemId][quantityLabel] || 0) + 1;

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Added To Cart" });

  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

const updateCart = async (req, res) => {
  try {
    const token = req.headers.token;
    const userId = getUserIdFromToken(token);

    if (!userId) {
      return res.json({ success: false, message: "Invalid or missing token" });
    }

    const { itemId, quantityLabel, quantity } = req.body;

    if (!itemId || !quantityLabel) {
      return res.json({ success: false, message: "itemId & quantityLabel required" });
    }

    const userData = await userModel.findById(userId);
    let cartData = userData.cartData || {};

    if (quantity <= 0) {
      if (cartData[itemId]) {
        delete cartData[itemId][quantityLabel];
        if (Object.keys(cartData[itemId]).length === 0) {
          delete cartData[itemId];
        }
      }
    } else {
      if (!cartData[itemId]) cartData[itemId] = {};
      cartData[itemId][quantityLabel] = quantity;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Cart Updated" });

  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

const getUserCart = async (req, res) => {
  try {
    const token = req.headers.token;
    const userId = getUserIdFromToken(token);

    if (!userId) {
      return res.json({ success: false, message: "Invalid or missing token" });
    }

    const userData = await userModel.findById(userId);
    res.json({ success: true, cartData: userData.cartData || {} });

  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

export { addToCart, updateCart, getUserCart };
