import React from "react";
import logo from "../../assets/offerLogo.png";
import { FaGift } from "react-icons/fa6";
const OfferCard = () => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-md w-60 m-2">
      <div className="flex  justify-evenly gap-3 items-start">
        <img src={logo} alt="Builder Logo" className="w-10 h-10" />
        <div className=" text-sm">
          <h1 className="text-lg font-semibold">Builder Name</h1>
          <p className="text-gray-600">locality</p>
          <p className="text-gray-600">1 ,2 bhk</p>
          <p className="text-gray-600 text-lg">₹30-60 Lacs</p>
        </div>
      </div>
      <div className="bg-[#C2EAF8] mt-2 p-2 rounded-lg flex items-center">
        <FaGift className=" text-[#FF6400] text-4xl" />
        <p className="ml-2 text-xs ">Pay 35,000/- and book your dream home</p>
      </div>
    </div>
  );
};

export default OfferCard;
