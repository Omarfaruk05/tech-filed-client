import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProductData from "../../redux/thunk/products/getProducts";
import Product from "../../conponents/Product";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { toggleBrand, toggleStock } from "../../redux/actions/filterAction";

const Products = () => {
  const [update, setUpdate] = useState("");
  const products = useSelector((state) => state.product.products);
  const filter = useSelector((state) => state.filter.filters);
  const { brands, stock } = filter;
  const dispatch = useDispatch();

  const activClasses = "btn-primary text-white";
  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]);

  let content;

  if (products.length) {
    content = products.map((product) => (
      <Product product={product} key={product._id}></Product>
    ));
  }
  const handleChange = (e) => {
    setUpdate(e.target.value);
  };

  if (products.length && (stock || brands.length)) {
    content = products
      .filter((product) => {
        if (stock) {
          return product.status === true;
        }
        return product;
      })
      .filter((product) => {
        if (brands.length) {
          return brands.includes(product.brand);
        }
        return product;
      })
      .map((product) => (
        <Product product={product} key={product._id}></Product>
      ));
  }
  if (update === "firstUpload") {
    content = products
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .map((product) => (
        <Product product={product} key={product._id}></Product>
      ));
  }
  if (update === "lastUpload") {
    content = products
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .map((product) => (
        <Product product={product} key={product._id}></Product>
      ));
  }
  if (update === "firstUpload") {
    content = products
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      .map((product) => (
        <Product product={product} key={product._id}></Product>
      ));
  }
  console.log(update);
  return (
    <div className="max-w-7xl mx-auto my-4 px-2">
      {/* produc filter  */}
      <div className="bg-gray-200 flex justify-between">
        <div className="flex items-center gap-2">
          <h4 className="flex items-center bg-secondary text-lg h-full text-white rounded-sm font-semibold px-1">
            <span>Filter</span>{" "}
            <span>
              <ChevronRightIcon className="w-5 h-5 ml-1"></ChevronRightIcon>
            </span>
          </h4>
          <div>
            <button
              onClick={() => dispatch(toggleBrand("amd"))}
              className={`btn btn-xs btn-white -md mr-1 ${
                brands.includes("amd") ? activClasses : null
              }`}
            >
              amd
            </button>
            <button
              onClick={() => dispatch(toggleBrand("intel"))}
              className={`btn btn-xs btn-white -md mr-1  ${
                brands.includes("intel") ? activClasses : null
              }`}
            >
              intel
            </button>
            <button
              onClick={() => dispatch(toggleStock())}
              className={`btn btn-xs btn-white -md mr-1  ${
                stock ? activClasses : null
              }`}
            >
              in Stock
            </button>
          </div>
        </div>
        <div className="py-1">
          <select
            onChange={handleChange}
            className="uppercase ml-1 px-2 h-full rounded-md -mt-[50px] outline-none"
          >
            <option
              defaultValue={null}
              className="bg-gray-400"
              disabled
              selected
            >
              Srot By
            </option>
            <option value={"firstUpload"} className="uppercase">
              First Upload
            </option>
            <option value={"lastUpload"} className="uppercase">
              Last Upload
            </option>
          </select>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Products;
