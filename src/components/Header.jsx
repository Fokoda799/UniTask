import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-16 border border-gray-300 flex justify-between items-center p-5">
      <img src="/Logo.svg" alt="logo" className="w-44 h-auto" />
      <ul className="flex space-x-4">
        <li>
          <Link to="#">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
