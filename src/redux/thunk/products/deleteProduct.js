import { deleteContent } from "../../actions/productAction";

const deleteProduct = (id) => {
  console.log(id);
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://tech-field-server.vercel.app/product/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();
    console.log(data.data.deletedCount);

    if (data.data.deletedCount) {
      dispatch(deleteContent(id));
    }
  };
};
export default deleteProduct;
