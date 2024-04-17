import { createSlice } from "@reduxjs/toolkit";

var initialState = {
  filter: {
    minPrice: 0,
    maxPrice: 0,
    inStock: false,
    category: "",
    rating: 0,
    limit: 8,
  },
};

const cartSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    changePrice: (state, { payload }) => {
      //   const filterState = current(state);
      const newState = { filter: { ...state.filter, maxPrice: payload } };
      return newState;
    },
    changeStock: (state, { payload }) => {
      // const filterState = current(state);
      const newState = { filter: { ...state.filter, inStock: payload } };
      return newState;
    },
    changeLimit: (state, { payload }) => {
      // const filterState = current(state);
      // const newState = { filter: { ...state.filter, inStock: payload } };
      // return newState;
      console.log(payload);
    },
  },
});

export const { changePrice, changeStock } = cartSlice.actions;
export default cartSlice.reducer;
