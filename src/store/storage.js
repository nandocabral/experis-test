import { createSlice } from "@reduxjs/toolkit";

export const onlineStore = createSlice({
  name: "storage",
  initialState: {
    carrito: [],
  },
  reducers: {
    addItem: (state, { payload }) => {
      const [exists] = state.carrito.filter((el) => el.id === payload.id);
      console.log(exists);
      console.log(payload);
      console.log(state.carrito);
      if (!exists) {
        state.carrito = [...state.carrito, payload];
      }
      console.log(state.carrito);
    },
    deleteItem: (state, { payload }) => {
      state.carrito = state.carrito.filter((el) => el.id === payload.id);
    },
  },
});

export const { addItem, deleteItem } = onlineStore.actions;

export const getCarrito = ({ onlineStore }) => onlineStore.carrito;

export default onlineStore.reducer;
