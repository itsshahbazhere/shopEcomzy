import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/slices/CartSlice.jsx";
import toast from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div className="flex sm:flex-nowrap flex-wrap gap-x-20 my-16">
      <div className="mx-auto">
        <img
          src={item.image}
          alt="item-image"
          loading="lazy"
          className="w-[150px] object-contain"
        />
      </div>

      <div className="flex flex-col mt-10 sm:mt-0">
        <h1 className="text-[#374151] text-2xl font-bold ">{item.title}</h1>
        <p
        className="text-[#334155] my-6"
        >{item.description.split(" ").slice(0, 15).join(" ") + "..."}</p>

        <div className="flex justify-between">
          <p className="text-green-600 text-lg font-bold">${item.price}</p>
          <div 
          className="w-[40px] h-[40px] bg-[#fecaca] p-2 rounded-full flex justify-center items-center text-red-900 mr-4"
          onClick={removeFromCart}>
            <MdDelete />
          </div>
        </div>
      </div>

    </div>
  );
};

export default CartItem;
