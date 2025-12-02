"use client";

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",


  initialState: {
    items: [],
  },

  reducers: {
    // ADD
    addToCart(state, action) {
      const product = action.payload;
      const exists = state.items.find((i) => i.id === product.id);

      if (exists) {
        exists.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },

    // REMOVE
    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
    },

    // INCREASE QTY
    increaseQty(state, action) {
      const id = action.payload;
      const product = state.items.find((i) => i.id === id);
      if (product) product.quantity += 1;
    },

    // DECREASE QTY 
    decreaseQty(state, action) {
  const id = action.payload;
  const product = state.items.find((i) => i.id === id);

  if (!product) return;

  if (product.quantity > 1) {
    product.quantity -= 1;
  } else {
    state.items = state.items.filter((i) => i.id !== id);
  }
}
,

    // CLEAR CART
    clearCart(state) {
      state.items = [];
    },
  },
});
export const selectCartQuantity = (state) => 
      state.cart.items.reduce((total, item) => total + item.quantity, 0)


export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart
  
} = cartSlice.actions;

export default cartSlice.reducer;
