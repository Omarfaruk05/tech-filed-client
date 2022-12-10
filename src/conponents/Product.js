import { BookOpenIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, addToReadingHistory } from "../redux/actions/productAction";

const Product = ({ product }) => {
  console.log(product.status);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="shadow-lg rounded-lg">
        <Link to={"reading-history"}>
          <div
            onClick={() => dispatch(addToReadingHistory(product))}
            className=" min-h-[560px]"
          >
            <div className="">
              <img src={product.image} alt="" />
            </div>
            <div className="m-2">
              <h3 className="text-lg font-bold text-purple-900">
                {product.model}
              </h3>
              <ul className="px-4">
                {product.keyFeature.map((keyFeature) => (
                  <>
                    <li className="mb-1 text-sm text-gray-500 font-semibold list-disc">
                      {keyFeature}
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </Link>
        <div>
          <h1 className="mb-2 text-orange-500 text-center">
            <span className="text-2xl font-semibold ">{product.price}</span>
            <span className="text-xl font-extrabold">৳</span>
          </h1>
          <Link to={"reading-history"}>
            <button
              onClick={() => dispatch(addToReadingHistory(product))}
              className="btn btn-primary uppercase w-full rounded-sm mb-2"
            >
              <span>
                <BookOpenIcon className="w-5 h-5 mr-2"></BookOpenIcon>
              </span>
              <span>Read More</span>
            </button>
          </Link>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="btn btn-primary uppercase w-full rounded-sm"
          >
            <span>
              <ShoppingBagIcon className="w-5 h-5 mr-2"></ShoppingBagIcon>
            </span>
            <span>Add To Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
