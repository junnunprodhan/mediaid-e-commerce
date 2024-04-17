import cartSlice from "@/slices/cartSlice";
import filterSlice from "@/slices/filterSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const reducer = combineReducers({
  cartState: cartSlice,
  filterState: filterSlice,
});
