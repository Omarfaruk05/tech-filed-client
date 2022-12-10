import React, { useState } from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  ShoppingCartIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Nav = () => {
  const [showSearch, setShowSearch] = useState(false);
  const cartItem = useSelector((state) => state.product.cart);
  console.log(cartItem);
  return (
    <div className="bg-slate-800 sticky top-0">
      <div className="mx-auto p-3 max-w-7xl">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Bars3Icon className="h-7 w-7 text-white cursor-pointer" />
            {/* drawer content  */}

            <Link to={"/"}>
              <h2 className="text-2xl uppercase font-bold text-white">
                Techfield
              </h2>
            </Link>
          </div>
          <div>
            <div className="hidden md:block">
              <input
                type="text"
                placeholder="Search here"
                className="input w-72 rounded-sm"
              />
              <input
                className="ml-3 btn bg-purple-600  rounded-md font-bold border-none text-white uppercase"
                type="button"
                value="Search"
              />
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div
              className="block md:hidden"
              onClick={() => setShowSearch(!showSearch)}
            >
              <MagnifyingGlassIcon className="w-6 h-6 text-white cursor-pointer"></MagnifyingGlassIcon>
            </div>
            {/* reading history  */}
            <div>
              <Link
                to={"reading-history"}
                className="btn btn-sm text-xs btn-secondary"
              >
                Reading History
              </Link>
            </div>
            <UserCircleIcon className="w-6 h-6 text-white cursor-pointer"></UserCircleIcon>
            <HeartIcon className="w-6 h-6 text-white cursor-pointer"></HeartIcon>
            <Link to={"cart"}>
              <div className="relative">
                <div className="text-center text-xs bg-red-500 text-white rounded-full h-4 w-4 absolute -top-2 -right-2">
                  {cartItem.length}
                </div>
                <ShoppingCartIcon className="w-6 h-6 text-white cursor-pointer"></ShoppingCartIcon>
              </div>
            </Link>
          </div>
        </div>
        {/* mobile seach  */}
        {showSearch && (
          <div className="absolute top-16 left-0 flex justify-center w-full">
            <div>
              <input
                type="text"
                placeholder="Search here"
                className="input input-bordered w-60 rounded-sm "
              />
              <input
                className="ml-3 btn bg-purple-600 border-none rounded-md font-bold text-white uppercase"
                type="button"
                value="Search"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
