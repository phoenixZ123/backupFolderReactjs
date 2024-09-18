import React from "react";
import { Navbar } from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./L_index.css";
export const Layout = () => {
  return (
    <div className="h-screen">
      <div className=" bg-primary w-full">
        <Navbar />
      </div>
      <SwitchTransition>
        <CSSTransition
          timeout={300}
          classNames={"my-node"}
          key={location.pathname}
        >
          <div className="w-full  max-w-screen-xl  flex   justify-between items-center mx-auto md:max-w-4xl">
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};
