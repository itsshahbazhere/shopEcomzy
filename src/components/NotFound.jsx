import React from "react";
import { NavLink } from "react-router-dom";
import { MdError } from "react-icons/md";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="text-6xl text-red-700">
      <MdError />
      </div>
      <div className="flex flex-col text-lg capitalize">
      <p className="text-lg font-bold text-center">Error 404</p>
      Oops! Page not found.
      </div>
      <NavLink to="/" className="capitalize text-blue-500 hover:text-blue-600 hover:underline transition duration-200">go to Home page</NavLink>
    </div>
  );
};

export default NotFound;
