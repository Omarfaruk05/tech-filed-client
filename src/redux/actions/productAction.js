import { ADD_TO_CART, GET_CONTENT } from "../actionTyps/actionTyps";

export const getContent = (products) => {
  return {
    type: GET_CONTENT,
    payload: products,
  };
};
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
