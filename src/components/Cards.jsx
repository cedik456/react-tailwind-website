import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full bg-white py-[10rem] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
        <div className="flex flex-col w-full p-4 my-4 text-center duration-300 rounded-lg shadow-xl hover:scale-105">
          <img
            className="w-20 mx-auto bg-white mt-[-3rem] "
            src={Single}
            alt=""
          />
          <h2 className="py-8 text-2xl font-bold text-center">Single User</h2>
          <p className="text-4xl font-bold">$149</p>
          <div className="font-medium">
            <p className="py-2 mx-8 mt-8 border-b ">500 GB Storage</p>
            <p className="py-2 mx-8 border-b ">1 Granted User</p>
            <p className="py-2 mx-8 border-b ">Send up to to GB</p>
          </div>
          <button className="bg-primary-color text-black rounded-md  font-medium w-[200px] mx-auto my-6 px-6 py-3">
            Start the trial
          </button>
        </div>
        <div className="flex flex-col w-full p-4 my-8 text-center duration-300 bg-gray-100 rounded-lg shadow-xl md:my-0 hover:scale-105">
          <img className="w-20 mx-auto mt-[-3rem] " src={Double} alt="" />
          <h2 className="py-8 text-2xl font-bold text-center">Double User</h2>
          <p className="text-4xl font-bold">$149</p>
          <div className="font-medium">
            <p className="py-2 mx-8 mt-8 border-b ">500 GB Storage</p>
            <p className="py-2 mx-8 border-b ">1 Granted User</p>
            <p className="py-2 mx-8 border-b ">Send up to to GB</p>
          </div>
          <button className="bg-black text-white rounded-md  font-medium w-[200px] mx-auto my-6 px-6 py-3 hover:text-primary-color">
            Start the trial
          </button>
        </div>
        <div className="flex flex-col w-full p-4 my-4 text-center duration-300 rounded-lg shadow-xl hover:scale-105">
          <img className="w-20 mx-auto mt-[-3rem]" src={Triple} alt="" />
          <h2 className="py-8 text-2xl font-bold text-center">Triple User</h2>
          <p className="text-4xl font-bold">$149</p>
          <div className="font-medium">
            <p className="py-2 mx-8 mt-8 border-b ">500 GB Storage</p>
            <p className="py-2 mx-8 border-b ">1 Granted User</p>
            <p className="py-2 mx-8 border-b ">Send up to to GB</p>
          </div>
          <button className="bg-primary-color text-black rounded-md  font-medium w-[200px] mx-auto my-6 px-6 py-3">
            Start the trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
