import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets.js";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2 bg-white shadow-md">
      <div className="flex flex-col gap-4 pt-10 pl-8 pr-4 text-[15px]">
        <NavLink
          to="/add"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition"
        >
          <img className="w-5 h-5" src={assets.add_icon} alt="Add icon" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>

        <NavLink
          to="/list"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition"
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="Order icon" />
          <p className="hidden md:block">List Items</p>
        </NavLink>

        <NavLink
          to="/orders"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition"
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="Manage icon" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
