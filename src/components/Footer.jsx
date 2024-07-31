import React from "react";
import ButtonComponent from "./Button";

const Footer = () => {
  return (
    <footer className=" py-8 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8">
          <p className="text-2xl font-semibold">
            Your ideal home is just a click away—start your search now!
          </p>
          <div className=" py-5">
            <ButtonComponent />
          </div>
        </div>
        <div className="flex justify-between text-xs text-orange-500 mt-8">
          <div className="flex space-x-8">
            <a href="#privacy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:underline">
              Terms and Services
            </a>
            <a href="#feedback" className="hover:underline">
              Feedback
            </a>
          </div>
          <div>
            <p>&copy; Copyright 2024 Ayush Bangar</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
