import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  isOpen: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = !state.isOpen
    },
  },
})

export const { openModal } = modalSlice.actions
export default modalSlice.reducer