import React from "react";
import NewLaunchedCard from "./card/NewLaunchedCard";

const NewLaunched = () => {
  return (
    <div>
      <h1 className=" text-xl font-semibold py-10">New Launched Projects</h1>
      <div className=" flex justify-evenly items-center gap-y-5 flex-wrap ">
        <NewLaunchedCard />
        <NewLaunchedCard />
        <NewLaunchedCard />
        <NewLaunchedCard />
        <NewLaunchedCard />
      </div>
    </div>
  );
};

export default NewLaunched;
