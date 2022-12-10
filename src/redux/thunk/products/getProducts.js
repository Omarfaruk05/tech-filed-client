import { getContent } from "../../actions/productAction";

const getProductData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://tech-field-server.vercel.app/product");
    const data = await res.json();

    if (data.data.length) {
      dispatch(getContent(data.data));
    }
  };
};
export default getProductData;
