import { ADD_TO_CAR, DELETE_ITEM } from "./constants/index";

const initialState = {
  carrito: [],
};

const onlineStore = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CAR:
      return {
        ...state,
        carrito: [...state.carrito, action.payload],
      };
    case DELETE_ITEM:
      return {
        ...state,
        carrito: state.carrito.filter(
          (el) => parseInt(el.product.id) !== parseInt(action.payload.id)
        ),
      };

    default:
      return state;
  }
};

export default onlineStore;
