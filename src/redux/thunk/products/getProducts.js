import { getContent } from "../../actions/productAction";

const getProductData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/product");
    const data = await res.json();

    if (data.data.length) {
      dispatch(getContent(data.data));
    }
  };
};
export default getProductData;
