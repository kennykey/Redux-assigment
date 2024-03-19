import CartItem from '../../components/CartItem'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: CartItem,
  amount: 0,
  total: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increase(state, action) {
      state.amount= state.amount += action.payload,
      state.total= state.amount += action.payload
    },
    decrease(state, action) {
      state.amount= state.amount -= action.payload,
      state.total= state.amount -= action.payload
    },
    clearCart: (state,action) => {
      state.cartItems = []
    },
  },
})

export const { clearCart, increase, decrease } = cartSlice.actions
export default cartSlice.reducer