import { ADD_TO_CAR, DELETE_ITEM } from "../constants/index";

export const addItem = (payload) => ({
  type: ADD_TO_CAR,
  payload,
});

export const deleteItem = (payload) => ({
  type: DELETE_ITEM,
  payload,
});
