import React from "react";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className="bg-slate-900">
      <div className="max-w-6xl flex  justify-between items-center text-white mx-auto py-2">
        <NavLink to="/">
          <div className="ml-5 my-2">
          <img src={logo} alt="shopLogo" className="h-12" loading="lazy"/>
          </div>
        </NavLink>

        <div className="flex mr-5 space-x-6">
          <NavLink to="/" className="border border-green-600 rounded-md px-3 py-1   text-xl font-semibold text-slate-100 hover:text-green-600 trasition duration-300 hover:scale-90 ease-out">
            Home
          </NavLink>
          <NavLink to="/cart">
            <div className="relative hover:scale-90 ease-out trasition duration-300">
              <FaCartShopping className="text-2xl mt-1 hover:text-green-600 trasition duration-300"/>
              {
                cart.length > 0 &&
                <span
                className="absolute bg-green-600 rounded-full w-5 h-5 flex justify-center items-center -top-1 -right-2 animate-bounce text-xs text-white "
                >{cart.length}</span>
              }
            </div>
            
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
