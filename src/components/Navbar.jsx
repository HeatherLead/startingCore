import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="absolute top-0 left-0 w-full  z-50 py-4 flex justify-between items-center px-4 md:px-8">
      <ul className="hidden md:flex space-x-6">
        <li>
          <a className="text-lg font-medium hover:text-gray-700" href="">
            Home
          </a>
        </li>
        <li>
          <a className="text-lg font-medium hover:text-gray-700" href="">
            Services
          </a>
        </li>
        <li>
          <a className="text-lg font-medium hover:text-gray-700" href="">
            Offers
          </a>
        </li>
        <li>
          <a className="text-lg font-medium hover:text-gray-700" href="">
            Projects
          </a>
        </li>
        <li>
          <a className="text-lg font-medium hover:text-gray-700" href="">
            Builders
          </a>
        </li>
        <li>
          <a className="text-lg font-medium hover:text-gray-700" href="">
            Help
          </a>
        </li>
        <li>
          <a className="text-lg font-medium hover:text-gray-700" href="">
            Insights
          </a>
        </li>
      </ul>

      <div className="md:hidden">
        <BiMenu onClick={handleDropdown} className="w-8 h-8 cursor-pointer" />
      </div>
      {!isLargeScreen && (
        <ul
          className={`absolute top-full left-0 w-full bg-[url('./assets/background.png')] bg-cover drop-shadow-lg backdrop-blur-md  shadow-md space-y-4 p-4 ${
            dropdown ? "flex" : "hidden"
          } flex-col text-left`}
        >
          <li>
            <a className="text-lg font-medium hover:text-gray-700" href="">
              Home
            </a>
          </li>
          <li>
            <a className="text-lg font-medium hover:text-gray-700" href="">
              Services
            </a>
          </li>
          <li>
            <a className="text-lg font-medium hover:text-gray-700" href="">
              Offers
            </a>
          </li>
          <li>
            <a className="text-lg font-medium hover:text-gray-700" href="">
              Projects
            </a>
          </li>
          <li>
            <a className="text-lg font-medium hover:text-gray-700" href="">
              Builders
            </a>
          </li>
          <li>
            <a className="text-lg font-medium hover:text-gray-700" href="">
              Help
            </a>
          </li>
          <li>
            <a className="text-lg font-medium hover:text-gray-700" href="">
              Insights
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
