import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full px-4 py-16 text-white bg-background-dark ">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="my-4 lg:col-span-2">
          <h1 className="py-2 text-2xl font-bold md:text-4xl sm:text-3xl">
            Want tips & tricks to optimize your flow
          </h1>
          <p>Sign up to our NewsLetter and stay up to date.</p>
        </div>
        <div>
          <div className="flex flex-col items-center justify-between w-full sm:flex-row">
            <input
              className="flex w-full p-3 rounded-md"
              type="email"
              placeholder="Enter email"
            />
            <button className="bg-primary-color text-black rounded-md  font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Notify Me
            </button>
          </div>
          <div className="text-[14px] md:text-[16px]">
            <p className="font-bold ">
              We care about the protection of your data. Read our{" "}
              <a className="underline text-primary-color " href="">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
