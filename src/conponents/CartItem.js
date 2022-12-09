import React from "react";

const CartItem = ({ cartItem }) => {
  return (
    <div>
      <div className="flex justify-between items-center gap-4 border-2 mb-2 p-3 rounded-lg">
        <div>
          <img width={"120px"} src={cartItem.image} alt="" />
        </div>
        <div className="font-semibold text-lg">
          <span>{cartItem.price}</span> X <span>{cartItem.quantity}</span> ={" "}
          <span>{cartItem.price * cartItem.quantity}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
