import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className=" text-[#00df9a] font-bold p-2">
          GROW WITH DATA ANALYTICS
        </p>
        <h1 className="text-4xl font-bold md:py-3 md:text-7xl sm:text-6xl">
          Grow with data.
        </h1>
        <div className="flex items-center justify-center">
          <p className="py-4 text-xl font-bold md:text-5xl sm:text-4xl">
            Fast, flexible financing for{" "}
            <ReactTyped
              className="pl-2 text-xl font-bold text-gray-600 md:text-5xl sm:text-xl md:pl-2"
              strings={["BTB", "BTC", "SASS"]}
              typeSpeed={120}
              backSpeed={150}
              loop
            />
          </p>
        </div>
        <div>
          <p className="text-xl font-bold text-gray-600 md:text-2xl sm:text-xs">
            Monitor your data analytics to increase revenue for BTB, BTC & SASS
            Platform
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
