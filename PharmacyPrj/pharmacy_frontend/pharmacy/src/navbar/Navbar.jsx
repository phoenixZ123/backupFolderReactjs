import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="w-full max-w-screen-xl h-10 flex  bg-primary justify-around items-center mx-auto md:max-w-4xl    ">
        <div className="flex justify-center">
          <div className="flex justify-center items-center space-x-1">
            <span className="font-semibold uppercase">pharmacy</span>
            <span className="uppercase text-lg  text-red-600 font-bold">
              POS System
            </span>
          </div>
        </div>

        <div className="mx-10 space-x-2 flex justify-center items-center">
          <NavLink to="/">
            <div className="nav w-16 h-10 active:bg-amber-200 flex justify-center items-center">
              Home
            </div>
          </NavLink>
          <NavLink to="/drugs">
            <div className="nav w-30 h-10 active:bg-amber-200 flex justify-center items-center">
              Sold Drugs List
            </div>
          </NavLink>
        </div>
      </nav>
    </>
  );
};
