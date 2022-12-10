import {
  ADD_TO_CART,
  GET_CONTENT,
  READING_HISTORY,
} from "../actionTyps/actionTyps";

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
export const addToReadingHistory = (product) => {
  return {
    type: READING_HISTORY,
    payload: product,
  };
};
