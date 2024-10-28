import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/slices/CartSlice";

const Product = ({ item }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
    toast.success("Item added to cart");
  };
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  };

  return (
    <div className="flex flex-col items-center justify-between p-4 gap-2 mt-10 ml-5  rounded-xl hover:scale-110 transition duration-300 ease-in-out shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <div>
        <h1 className="text-gray-700 font-semibold text-xl text-left w-40 mt-1 truncate">
          {item.title}
        </h1>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {item.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img
          className="h-full w-full  object-contain"
          src={item.image}
          loading="lazy"
          width={100}
        />
      </div>
      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <p className="text-green-600 font-semibold">${item.price}</p>
        <div>
          {cart.some((p) => p.id === item.id) ? (
            <button
              className="text-gray-700 border-2 rounded-full border-gray-700 font-semibold p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in text-[12px]"
              onClick={removeFromCart}
            >
              Remove Item
            </button>
          ) : (
            <button
              className="text-gray-700 border-2 rounded-full border-gray-700 font-semibold p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in text-[12px]"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
