import {
  ADD_CONTENT,
  ADD_TO_CART,
  DELETE_CONTENT,
  GET_CONTENT,
  READING_HISTORY,
  UPDATE_CONTENT,
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
export const deleteContent = (id) => {
  return {
    type: DELETE_CONTENT,
    payload: id,
  };
};
export const addContent = (product) => {
  return {
    type: ADD_CONTENT,
    payload: product,
  };
};
export const updateContent = (product, id) => {
  return {
    type: UPDATE_CONTENT,
    payload: { product, id },
  };
};
