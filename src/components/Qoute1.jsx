import React from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import ShowAfter from "./ShowAfter";

const Qoute1 = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-1 items-center justify-center p-4 flex-col">
      <TypeAnimation
        sequence={[
          `See, Nesma. On your special day, I want to tell you that you are the most special person in this entire world.`,
        ]}
        wrapper="div"
        cursor={true}
        repeat={0}
        speed={200}
        className="text-xl max-w-sm text-center"
      />
      <ShowAfter
        time={6500}
        text={"Click me to continue ->"}
        onClick={() => navigate("/q2")}
        className="absolute translate-x-[-50%] bottom-[32px] "
      />
    </div>
  );
};

export default Qoute1;
