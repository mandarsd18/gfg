import React from "react";
import { FaHorseHead, FaChartBar } from "react-icons/fa";
import { BiBarChart } from "react-icons/bi";

const Services = () => {
  return (
    <>
      <div className="w-full h-fit">
        <div className="w-[80%] mx-auto flex items-center justify-evenly gap-4">

          <div>
            <div className="flex gap-3 border-b-4 border-blue-600 p-3">
              <FaHorseHead className="text-6xl text-blue-600 font-bold"></FaHorseHead>
              <div>
                <h1 className="font-bold text-lg">Saving and Strategy</h1>
                <p className="text-sm text-gray-500 font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis odio accusantium cupiditate!
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex gap-3 border-b-4 bg-blue-600 border-none outline-none text-white p-3">
              <BiBarChart className="text-6xl text-white font-bold"/>
              <div>
                <h1  className="font-bold text-lg">Business Planning</h1>
                <p className="text-sm text-gray-200 font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis odio accusantium cupiditate!
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-3 border-b-4 border-blue-600 p-3">
              <FaChartBar className="text-6xl text-blue-600 font-bold"/>
              <div>
                <h1 className="font-bold text-lg">HR Consulting</h1>
                <p className="text-sm text-gray-500 font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis odio accusantium cupiditate!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
