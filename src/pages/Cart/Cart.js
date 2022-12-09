import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../../conponents/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.product.cart);
  return (
    <div>
      <div className="max-w-7xl mx-auto mt-4">
        <div>
          {cartItems.map((cartItem) => (
            <CartItem cartItem={cartItem} key={cartItem._id}></CartItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
