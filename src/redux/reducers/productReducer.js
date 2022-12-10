import {
  ADD_CONTENT,
  ADD_TO_CART,
  DELETE_CONTENT,
  GET_CONTENT,
  READING_HISTORY,
  UPDATE_CONTENT,
} from "../actionTyps/actionTyps";

const initialState = {
  cart: [],
  products: [],
  readingHistory: [],
};

const productReducer = (state = initialState, action) => {
  const mathcCartProduct = state.cart.find(
    (product) => product._id === action.payload._id
  );
  const uniqueCartProduct = state.cart.filter(
    (product) => product._id !== action.payload._id
  );
  const mathcHistoryProduct = state.readingHistory.find(
    (product) => product._id === action.payload._id
  );
  const uniqueHistoryProduct = state.readingHistory.filter(
    (product) => product._id !== action.payload._id
  );

  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_CONTENT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case ADD_TO_CART:
      if (mathcCartProduct) {
        mathcCartProduct.quantity = mathcCartProduct.quantity + 1;
        return {
          ...state,
          cart: [...uniqueCartProduct, mathcCartProduct],
        };
      } else {
        action.payload.quantity = 1;
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
    case READING_HISTORY:
      if (mathcHistoryProduct) {
        return {
          ...state,
          readingHistory: [mathcHistoryProduct, ...uniqueHistoryProduct],
        };
      } else {
        return {
          ...state,
          readingHistory: [action.payload, ...state.readingHistory],
        };
      }
    case DELETE_CONTENT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload
        ),
      };
    case UPDATE_CONTENT:
      const oldProduct = state.products.filter(
        (product) => product._id !== action.payload.id
      );
      return {
        ...state,
        products: [...oldProduct, action.payload.product],
      };

    default:
      return state;
  }
};
export default productReducer;
