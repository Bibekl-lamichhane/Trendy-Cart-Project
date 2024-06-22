import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProduct: "",
  cartItems: [],
};

const productSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addtoCart(state, actions) {
      state.cartItems.push(actions.payload);
    },
    removefromCart(state, actions) {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      // const existingCartItems = [...state.cartItems];
      // const removedCart = existingCartItems.filter((item) => {
      //   if (item._id !== actions.payload) {
      //     return item;
      //   }
      //   state.cartItems = removedCart;
      // });
    },
  },
});

export const { addtoCart, removefromCart } = productSlice.actions;
export default productSlice.reducer;
