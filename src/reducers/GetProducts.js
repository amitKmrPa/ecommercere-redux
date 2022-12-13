import { GET_PRODUCTS_DATA } from "../actions/ActionType";

const initialState = {
  products: [],
};

export const GetProducts = (state = initialState, action) => {

  switch (action.type) {
    case GET_PRODUCTS_DATA:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};