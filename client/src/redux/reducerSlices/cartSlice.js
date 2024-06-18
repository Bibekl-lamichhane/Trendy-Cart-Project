import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noofiteminCart: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addtoCart() {
      noofiteminCart: initialState.noofiteminCart + 1;
    },
    removefromCart() {
      if (initialState >= 0) {
        noofiteminCart: initialState.noofiteminCart - 1;
      } else noofiteminCart = noofiteminCart;
    },
  },
});

export const { addtoCart, removefromCart } = cartSlice.actions;
export default cartSlice.reducer;
