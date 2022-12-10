import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch } from "react-redux";
import deleteProduct from "../redux/thunk/products/deleteProduct";
import InputGroup from "./InputGroup";

const ProductTabel = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <>
      <tr>
        <td>
          <div>
            <img width={"60px"} src={product.image} alt="" />
          </div>
        </td>
        <td className="font-semibold">{product.model}</td>
        <td className="font-bold text-purple-900">{product.price}</td>
        <th className="text-center">
          <label htmlFor="update-modal">
            <PencilSquareIcon className="w-5 h-5 mr-3 btn btn-xs p-0 border-none bg-white hover:bg-white hover:border-none"></PencilSquareIcon>
          </label>
          <label htmlFor="modal-delete">
            <TrashIcon className="w-5 h-5 text-red-500 btn btn-xs p-0 border-none bg-white hover:bg-white hover:border-none"></TrashIcon>
          </label>
        </th>
      </tr>
      {/* delete modal */}
      <input type="checkbox" id="modal-delete" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="modal-delete"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-red-500">
            Are You sure that you want to delete this product?
          </h3>
          <p className="py-4">
            <span className="font-bold">Product Name:</span>{" "}
            <span className="text-purple-700"> {product.model}</span>
          </p>
          <button
            onClick={() => dispatch(deleteProduct(product._id))}
            className="float-right btn btn-sm bg-red-500 text-white"
          >
            Delete
          </button>
        </div>
      </div>
      {/* update modal  */}
      <input type="checkbox" id="update-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <label
            htmlFor="update-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="text-secondary text-xl font-semibold text-center">
            Update Product Info
          </h2>
          <div>
            <InputGroup product={product}></InputGroup>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTabel;
