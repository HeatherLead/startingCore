import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className=" absolute top-0 flex justify-start items-center py-4  space-x-6">
      <div>
        <ul className="hidden md:flex">
          <a className="text-xl md:text-lg md:pl-4 md:pr-4  " href="">
            Home
          </a>
          <a className="text-xl md:text-lg md:pl-4 md:pr-4  " href="">
            Services
          </a>
          <a className="text-xl md:text-lg md:pl-4 md:pr-4  " href="">
            Offers
          </a>
          <a className="text-xl md:text-lg md:pl-4 md:pr-4  " href="">
            Projects
          </a>
          <a className="text-xl md:text-lg md:pl-4 md:pr-4  " href="">
            Builders
          </a>
          <a className="text-xl md:text-lg md:pl-4 md:pr-4  " href="">
            Help
          </a>
          <a className="text-xl md:text-lg md:pl-4 md:pr-4  " href="">
            Insights
          </a>
        </ul>
      </div>
      <div className="md:hidden">
        <BiMenu onClick={handleDropdown} className=" w-8 h-8" />

        <ul
          className={`navlink  flex-col text-left space-y-4 ${
            dropdown ? "flex" : "hidden"
          }`}
        >
          <a className="text-xl md:text-lg md:pl-4 md:pr-4  " href="">
            Home
          </a>
          <a className="text-xl md:text-lg md:pl-4 md:pr-4  " href="">
            Services
          </a>
          <a className="text-xl md:text-lg md:pl-4 md:pr-4  " href="">
            Offers
          </a>
          <a className="text-xl md:text-lg md:pl-4 md:pr-4  " href="">
            Projects
          </a>
          <a className="text-xl md:text-lg md:pl-4 md:pr-4  " href="">
            Builders
          </a>
          <a className="text-xl md:text-lg md:pl-4 md:pr-4  " href="">
            Help
          </a>
          <a className="text-xl md:text-lg md:pl-4 md:pr-4  " href="">
            Insights
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
