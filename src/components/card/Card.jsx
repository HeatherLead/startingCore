import React from "react";
import { houseData } from "./data";
import { Inset } from "@radix-ui/themes";
const Card = () => {
  return (
    <div className=" flex justify-evenly flex-wrap py-10 gap-y-5">
      {houseData &&
        houseData.map((item, index) => {
          return (
            <Inset key={index}>
              <img src={item.image} className="  object-cover  h-28  " alt="" />
              <p className=" pt-2"> {item.name}</p>
            </Inset>
          );
        })}
    </div>
  );
};

export default Card;
