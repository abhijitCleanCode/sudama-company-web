import React from "react";

import { loading } from "../assets";

const Generating = ({ className, text = "Our commitment goes beyond." }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 mr-4" src={loading} alt="Loading" />
      <p>{text}</p>
    </div>
  );
};

export default Generating;
