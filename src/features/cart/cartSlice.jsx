import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: { 
    increase: (state, action) => {
      state.amount += 1;
      const CartItem = state.cartItems.find((CartItem) => CartItem.id === action.payload.id);
      CartItem ? (CartItem.amount += 1) : state.cartItems.push({ ...action.payload, amount: 1 });
    },
    decrease(state, action) {
      state.amount -= 1;
      const CartItem = state.cartItems.find((CartItem) => CartItem.id === action.payload.id);
      CartItem ? (CartItem.amount -= 1) : state.cartItems.push({ ...action.payload, amount: 1 });
    },
    clearCart: (state,action) => {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
    },
  },
})

export const { clearCart, increase, decrease } = cartSlice.actions
export default cartSlice.reducer