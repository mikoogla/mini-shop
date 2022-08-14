import { createSlice } from "@reduxjs/toolkit";

const initial_cart = {
  products: [],
  hide: true,
  size: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initial_cart,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload.product;
      const productIndex = state.products.findIndex((p) => p.id === product.id);
      if (productIndex !== -1) {
        state.size += 1;
        state.products[productIndex].quantity += 1;
      } else {
        state.products.push({ ...product, quantity: 1 });
        state.size += 1;
      }
    },
    removeProduct: (state, action) => {
      const product = action.payload.product;
      const productIndex = state.products.findIndex((p) => p.id === product.id);
      if (productIndex !== -1) {
        state.products[productIndex].quantity -= 1;
        state.size -= 1;
        if (state.products[productIndex].quantity === 0) {
          state.products.splice(productIndex, 1);
        }
      }
    },
    toggleCart: (state) => {
      state.hide = !state.hide;
    },
  },
});

export default cartSlice;
