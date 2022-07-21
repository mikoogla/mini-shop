import { createSlice } from "@reduxjs/toolkit";

const initial_cart = {
  products: [],
  hide: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initial_cart,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload.product);
    },
    removeProduct: (state, action) => {
      state.products.splice(action.payload.product, 1);
    },
    toggleCart: (state) => {
      state.hide = !state.hide;
    },
  },
});

export default cartSlice;
