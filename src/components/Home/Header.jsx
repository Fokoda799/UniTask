import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full h-16 p-5 border border-gray-300">
      <img src="/Logo.svg" alt="logo" className="h-auto w-44" />
      <ul className="flex space-x-4">
        <NavLink to="/" activeclassname="bg-black">
          <div>Home</div>
        </NavLink>
        <NavLink to="/login" activeclassname="bg-black">
          <div>Login</div>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
