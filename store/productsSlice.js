import { createSlice } from "@reduxjs/toolkit";

const initial_products = {
  products: [
    {
      id: 1,
      name: "Yerba Kurupi",
      price: 10.78,
      description: "Yerba Mate Kurupi Classic 0,5kg",
    },
    {
      id: 2,
      name: "Yerba Mate Pajarito",
      price: 21.67,
      description: "Yerba Mate Pajarito Elaborada Con Palo Traditional 1kg",
    },
    {
      id: 3,
      name: "Yerba Mate Kurupi Limon",
      price: 12.0,
      description: "Yerba Mate Kurupi Menta Limon 0,5kg",
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState: initial_products,
  reducers: {},
});

export default productsSlice;
