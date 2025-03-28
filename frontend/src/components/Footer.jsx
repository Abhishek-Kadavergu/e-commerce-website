import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="w-32 mb-5" alt="" />
          <div className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            exercitationem suscipit explicabo illum temporibus molestiae neque
            ea quo vel incidunt. Repellat dolores aperiam adipisci repudiandae,
            architecto perspiciatis molestiae voluptate at.
          </div>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 9441825172</li>
            <li>skullxsignature@gmail.com</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <hr className="mb-4" />
      <p className="text-center text-sm m-5">
        Copyright 2025@skullx.dev - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
