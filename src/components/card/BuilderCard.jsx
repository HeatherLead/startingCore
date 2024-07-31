import React from "react";
import builderImage from "../../assets/builderImage.png";

const BuilderCard = () => {
  return (
    <div className=" flex flex-col gap-y-7">
      <div className="flex items-center justify-center space-x-4 p-4 bg-white  shadow-lg w-full px-10">
        <img
          src={builderImage}
          alt="Project"
          className="w-16 h-16 rounded-full"
        />
        <div className="">
          <h1 className="font-medium">Builder Name</h1>
          <p className="text-sm">00 Projects</p>
          <div className="flex space-x-2 mt-1">
            <span className="text-xs text-[#FF6400]  bg-[#C2EAF8] px-3 py-1 ">
              Sale
            </span>
            <span className="text-xs text-[#FF6400]  bg-[#C2EAF8] px-3 py-1 ">
              Resale
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-4 p-4 bg-white shadow-lg w-full px-10">
        <img
          src={builderImage}
          alt="Project"
          className="w-16 h-16 rounded-full"
        />
        <div className="">
          <h1 className="font-medium">Builder Name</h1>
          <p className="text-sm">00 Projects</p>
          <div className="flex space-x-2 mt-1">
            <span className="text-xs text-[#FF6400]  bg-[#C2EAF8] px-3 py-1 ">
              Sale
            </span>
            <span className="text-xs text-[#FF6400]  bg-[#C2EAF8] px-3 py-1 ">
              Resale
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderCard;
