import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import getProductData from "../../redux/thunk/products/getProducts";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]);
  return (
    <div>
      <div className="">
        <div className="flex gap-4 relative">
          <div className="w-1/5 bg-slate-300">
            <div className="sticky top-[73.5px]  h-[91.5vh]">
              <h3 className="text-lg bg-purple-900 w-full text-center font-bold text-white  py-2">
                Dashboard
              </h3>
              <div className="mx-4 mt-7">
                <Link
                  to={"/dashboard"}
                  className="btn w-full  btn-sm btn-secondary mt-2 text-white"
                >
                  Delete Product
                </Link>
                <Link
                  to={"add-product"}
                  className="btn w-full  btn-sm btn-secondary mt-2 text-white"
                >
                  Add Product
                </Link>
                <Link
                  to={"update-product"}
                  className="btn w-full btn-sm btn-secondary mt-2 text-white"
                >
                  Update Product
                </Link>
              </div>
            </div>
          </div>
          <div className="w-4/5">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
