import { assets } from "../assets/assets";

import React from "react";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center justify-between py-2 px-[4%]">
      <img className="w-[max(10%,80px)]" src={assets.logo} alt="" />
      <button
        onClick={() => setToken("")}
        className="bg-gray-700 text-white py-2 px-5 sm:py-2 sm:px-7 rounded-full text-xs sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
