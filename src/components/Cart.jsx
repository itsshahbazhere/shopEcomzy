import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount , setTotalAmount] = useState(0);

  // total amount finding
  useEffect(()=>{
    setTotalAmount(cart.reduce( (acc,curr)=> acc + curr.price , 0))
  },[cart])
  return (
    <div className="w-full h-full mb-7">
      {cart.length > 0 ? (
        <div className="flex max-w-6xl mx-auto justify-between px-5 flex-wrap">
          <div className="md:w-[55%]">
            {cart.map((item, index) => {
              return(
                <div>
                  <CartItem itemIndex={index} item={item} key={item.id} />
                    {cart.length > 0 && 
                  <div className="h-[1px] w-full px-2 bg-[#334155]"></div>}
                </div>
              )

            
            })}
            
          </div>

          <div className="flex flex-col md:w-[40%] mt-16 w-full">
            <div className="">
              <p className="text-green-700 uppercase font-semibold text-lg">YOUR CART</p>
              <h1 className="text-green-700 uppercase font-bold text-4xl">Summary</h1>
              <p className="mt-4 font-semibold text-[#374151] text-xl capitalize">Total items: {cart.length}</p>
            </div>

            <div>
              <p className="mt-20 font-semibold text-[#374151] text-xl capitalize">Total Amount : ${totalAmount}</p>
              <button className="mt-4 bg-green-600 w-full p-2 rounded-lg text-white font-bold text-lg">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center w-full h-full flex-col items-center min-h-[80vh]">
          <p className="text-[#374151] text-2xl font-semibold mb-5">Your cart is empty!</p>
          <NavLink to="/">
            <button className="bg-green-600 py-3 px-8 text-md rounded-md text-white font-semibold uppercase hover:bg-white border-2 border-green-600 hover:text-green-600 transition duration-300 ease-in">Shop now</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
