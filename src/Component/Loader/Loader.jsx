import React from "react";
import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full min-h-[50vh] flex items-center justify-center">
      <HashLoader speedMultiplier={3} color="#04D3BC" />
    </div>
  );
};

export default Loader;
