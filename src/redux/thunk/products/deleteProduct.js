import { deleteContent } from "../../actions/productAction";

const deleteProduct = (id) => {
  console.log(id);
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data.data.deletedCount);

    if (data.data.deletedCount) {
      dispatch(deleteContent(id));
    }
  };
};
export default deleteProduct;
