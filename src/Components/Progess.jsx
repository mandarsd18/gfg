import React from "react";
import Image from "./bar.png";
import { BiRightArrowAlt } from "react-icons/bi";

const Progess = () => {
  return (
    <>
      <div className="w-full h-[60vh] relative">
        <img
          src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?cs=srgb&dl=pexels-lukas-kloeppel-466685.jpg&fm=jpg"
          alt=""
          className="w-full h-full object-cover"
        /> 
        <div className="w-full h-full bg-white absolute top-0 left-0 z-20 opacity-70"></div>
        <div className="absolute left-[12%] right-[10%] top-[10%] z-30 flex items-center justify-center">
          <div >
            <span className="text-blue-600 font-semibold text-sm">
              Company Progress
            </span>
            <h1 className="text-4xl font-bold mt-3">
              We're ready to share out <br /> advice and experiance .{" "}
            </h1>
            <p className="text-sm  text-gray-800 font-semibold mt-3 mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quos
              unde, dolores quam doloribus iste nesciunt deleniti ipsa sint
              iusto accusantium nulla repudiandae veritatis accusamus delectus
              cupiditate nemo voluptas id. Beatae, reprehenderit.
            </p>
            <a href="https://guthib.com/" target="blank"><button className="py-1.5 px-4 bg-blue-600 text-white font-semibold flex gap-2 items-center  hover:bg-blue-700 ">Read More  <BiRightArrowAlt className="text-2xl"/></button></a>
          </div>
          <div className="">
            <img src={Image} className="w-[1000px] h-[400px] object-cover" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Progess;
