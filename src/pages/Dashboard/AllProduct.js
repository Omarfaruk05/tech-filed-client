import React from "react";
import { useSelector } from "react-redux";
import ProductTabel from "../../conponents/ProductTabel";

const AllProduct = () => {
  const products = useSelector((state) => state.product.products);
  return (
    <div>
      <div>
        <div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th>Avatar</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <ProductTabel
                    product={product}
                    key={product._id}
                  ></ProductTabel>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
