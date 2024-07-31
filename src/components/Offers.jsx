import React from "react";
import OfferCard from "./card/OfferCard";
import ButtonComponent from "./Button";
const Offers = () => {
  return (
    <div>
      <h1 className=" font-bold text-xl">Offers for You</h1>
      <div className=" mt-2 flex justify-evenly items-center">
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </div>
      <p className=" text-sm px-20 py-5">
        Explore the best homes in Mumbai and secure your ideal property with a
        ₹1 booking payment. Discover luxury apartments, spacious villas, and
        prime commercial spaces in top localities. Start your journey to owning
        or renting your perfect home today!
      </p>
      <div className=" flex w-full justify-center pt-5">
        <ButtonComponent />
      </div>
    </div>
  );
};

export default Offers;
