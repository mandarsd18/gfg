import React from "react";
import { AiFillSetting } from "react-icons/ai";
import Image from "./human.png"

const Banner = () => {
  return (
    <>
      <div className="w-full h-[88vh] bg-[#D2DFE8] ">
        <div className="w-[80%] h-full mx-auto flex items-center justify-between">
          <div>
            <span className="text-blue-600  font-semibold ">Business Planning </span>
            <h1 className="text-6xl font-bold mt-3">We will build your <br /> own Business</h1>
            <p className="text-sm font-semibold text-gray-500 mt-3 mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id voluptate sequi vero libero hic quibusdam atque? Corporis fugit, incidunt pariatur necessitatibus est inventore!</p>
            <a href="https://guthib.com/" target="blank"><button className="flex gap-2 items-center text-white font-semibold py-1.5 px-4  hover:bg-blue-700   bg-blue-600 rounded-sm mt-5"><AiFillSetting/> View Services</button></a>
          </div>
          <div className="">
          <img src={Image} alt="" className=" h-[500px] w-[1000px] object-cover" />

          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
