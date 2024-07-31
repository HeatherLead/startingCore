import React from "react";
import { Button } from "@radix-ui/themes";
import { FaArrowRightLong } from "react-icons/fa6";
const ButtonComponent = () => {
  return (
    <Button style={{ cursor: "pointer" }} size={"3"}>
      Book a call Now <FaArrowRightLong />
    </Button>
  );
};

export default ButtonComponent;
