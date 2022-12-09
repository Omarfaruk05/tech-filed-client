import { ADD_TO_CART, GET_CONTENT } from "../actionTyps/actionTyps";

const initialState = {
  cart: [],
  products: [],
};

const productReducer = (state = initialState, action) => {
  console.log(action.payload);
  const mathcProduct = state.cart.find(
    (product) => product._id === action.payload._id
  );
  const uniqueProduct = state.cart.filter(
    (product) => product._id !== action.payload._id
  );

  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_TO_CART:
      if (mathcProduct) {
        mathcProduct.quantity = mathcProduct.quantity + 1;
        return {
          ...state,
          cart: [...uniqueProduct, mathcProduct],
        };
      } else {
        action.payload.quantity = 1;
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }

    default:
      return state;
  }
};
export default productReducer;
