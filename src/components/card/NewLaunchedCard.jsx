import React from "react";
import logo from "../../assets/newlaunchedImage.png";
import { FaTag } from "react-icons/fa";
import { FaT } from "react-icons/fa6";
const NewLaunchedCard = () => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-md w-56 m-2">
      <div className="flex  justify-evenly gap-3 items-start">
        <img src={logo} alt="Builder Logo" className="w-10 h-10" />
        <div className=" text-sm">
          <h1 className="text-lg font-medium">Builder Name</h1>
          <p className="text-gray-600">locality</p>
          <p className="text-gray-600">1 ,2 bhk</p>
          <p className="text-gray-600 text-lg">₹30-60 Lacs</p>
          <p className=" text-gray-600 text-xs">Completion in July 2025</p>
        </div>
      </div>
      <hr className="dotted-hr  w-full h-1 my-1" />
      <div className=" mt-2 p-2 rounded-lg flex items-center">
        <FaTag className=" text-[#FF6400] text-2xl" />
        <p className="ml-2 text-xs ">Get preferred options @zero brokerage</p>
      </div>
    </div>
  );
};

export default NewLaunchedCard;
