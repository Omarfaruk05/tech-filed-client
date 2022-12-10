import { toast } from "react-toastify";
import { addContent } from "../../actions/productAction";

const addProduct = (product, reset) => {
  console.log(product);
  return async (dispatch, getState) => {
    const res = await fetch(`https://tech-field-server.vercel.app/product`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();
    console.log(data.status);
    if (data.status === "fail") {
      console.log("dsfa");
      toast.error(data.error);
    }

    if (data.inserted) {
      reset();
      toast.success("Product Inserted successfully.");
      dispatch(addContent(product));
    }
  };
};
export default addProduct;
