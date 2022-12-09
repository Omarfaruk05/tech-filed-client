import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProductData from "../../redux/thunk/products/getProducts";
import Product from "../../conponents/Product";

const Products = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]);
  return (
    <div className="max-w-7xl mx-auto my-4 px-2">
      {/* produc filter  */}
      <div></div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Product product={product} key={product._id}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
