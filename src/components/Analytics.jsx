import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full px-4 py-16 bg-white">
      <div className="grid mx-auto md:grid-cols-2 max-w-7xl">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-primary-color">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="py-2 text-2xl font-bold md:text-4xl sm:text-3xl">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            facilis, nobis placeat architecto, explicabo provident iusto quis
            cumque molestiae voluptates in. Molestias enim quam ipsa quaerat ex
            laudantium omnis in.
          </p>
          <button className="hover:text-primary-color transition-colors duration-300 text-white w-[200px] bg-black rounded-md font-medium my-6 mx-auto md:mx-0 py-3 border-none border-r-8">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
