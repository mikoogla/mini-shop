import { createSlice } from "@reduxjs/toolkit";

const initial_cart = {
  products: [],
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
  },
});

export default cartSlice;
