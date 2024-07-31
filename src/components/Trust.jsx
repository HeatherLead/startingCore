import React from "react";
import ButtonComponent from "./Button";
import handingKey from "../assets/HandingKey.png";

const Trust = () => {
  return (
    <div className=" border   flex justify-evenly flex-wrap rounded-md gap-y-4 shadow-sm">
      <div className=" md:w-2/3 p-5 space-y-6">
        <h1 className=" font-medium text-xl text-[#FF6400]">
          Sell or Rent Your Property
        </h1>
        <p className="  text-sm w-3/4">
          Looking to sell or rent your property? We’re here to make it easy!
          With our extensive network and expertise, we'll help you find the
          perfect buyers or tenants in no time. Get the best value and enjoy a
          hassle-free process with Dreamhausi. Let's get started!
        </p>
        <ButtonComponent />
      </div>

      <img className="  md:w-1/3" src={handingKey} alt="" />
    </div>
  );
};

export default Trust;
