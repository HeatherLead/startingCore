import React from "react";

import { companyDetail } from "./card/data";
import ButtonComponent from "./Button";
const Stats = () => {
  return (
    <div className=" space-y-5">
      <h1 className=" text-xl font-medium">Smart Home Buying</h1>
      <div className=" flex justify-evenly flex-wrap  items-start gap-5  ">
        {companyDetail &&
          companyDetail.map((item) => (
            <div className="bg-[#C2EAF8] p-4 shadow-lg rounded-md max-w-72 h-36 gap-y-2  grid">
              <span className=" text-[#FF6400] text-3xl">{item.logo}</span>

              <h1 className=" font-medium ">{item.title}</h1>
              <p className=" text-sm">{item.description}</p>
            </div>
          ))}
      </div>
      <div className=" w-full flex justify-center pt-5">
        <ButtonComponent />
      </div>
    </div>
  );
};

export default Stats;
