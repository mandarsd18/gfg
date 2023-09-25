import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const Support = () => {
  return (
    <>
      <div
        className="w-full
          bg-[#D2DFE8] h-[82vh]"
      >
        <div className="w-[80%] mx-auto flex flex-col items-center justify-center pt-4 h-full">
          <div>
            <span className="text-blue-600 font-semibold text-sm ">
              Services
            </span>
            <div className="flex items-center justify-between mt-4 mb-7">
              <h1 className="text-3xl font-bold ">
                We're ready to share out <br /> advice and experiance .{" "}
              </h1>
              <p className="text-sm w-[35%] text-gray-500 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quos
                unde, dolores quam doloribus iste nesciunt deleniti ipsa sint
                iusto accusantium nulla 
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 mb-4 ">
            <div className=" p-3 bg-white hover:shadow-md">
              <img
                src="https://img.freepik.com/free-photo/handshake-close-up-executives_1098-1384.jpg?w=1060&t=st=1694771857~exp=1694772457~hmac=6e2f4bb2c4ae3c495f4359af38ee858497d96e4c5dae51c5d29784ae9a31daae"
                className="rounded-md"
                alt=""
              />
              <div className="flex flex-col items-center">
                <h1 className="text-blue-600 text-center font-bold text-2xl mb-3 mt-2">
                  Tax Consulting
                </h1>
                <p className="text-gray-500 text-sm font-semibold mb-3 ">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos rem rerum porro?
                </p>
                <a href="https://guthib.com/" target="blank">
                  <button className="py-1.5 px-4 bg-blue-600 text-white font-semibold flex gap-2 items-center  hover:bg-blue-700 ">
                    Read More <BiRightArrowAlt className="text-2xl" />
                  </button>
                </a>
              </div>
            </div>

            <div className=" p-3 bg-white hover:shadow-md">
              <img
                src="https://img.freepik.com/free-photo/handshake-close-up-executives_1098-1384.jpg?w=1060&t=st=1694771857~exp=1694772457~hmac=6e2f4bb2c4ae3c495f4359af38ee858497d96e4c5dae51c5d29784ae9a31daae"
                className="rounded-md"
                alt=""
              />
              <div className="flex flex-col items-center">
                <h1 className="text-blue-600 text-center font-bold text-2xl mb-3 mt-2">
                  Fund Transfer
                </h1>
                <p className="text-gray-500 text-sm font-semibold mb-3 ">
                 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos rem rerum porro?
                </p>
                <a href="https://guthib.com/" target="blank">
                  <button className="py-1.5 px-4 bg-blue-600 text-white font-semibold flex gap-2 items-center  hover:bg-blue-700 ">
                    Read More <BiRightArrowAlt className="text-2xl" />
                  </button>
                </a>
              </div>
            </div>

            <div className=" p-3 bg-white hover:shadow-md">
              <img
                src="https://img.freepik.com/free-photo/handshake-close-up-executives_1098-1384.jpg?w=1060&t=st=1694771857~exp=1694772457~hmac=6e2f4bb2c4ae3c495f4359af38ee858497d96e4c5dae51c5d29784ae9a31daae"
                className="rounded-md"
                alt=""
              />
              <div className="flex flex-col items-center">
                <h1 className="text-blue-600 text-center font-bold text-2xl mb-3 mt-2">
                  Life Insurance
                </h1>
                <p className="text-gray-500 text-sm font-semibold mb-3 ">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos rem rerum porro?
                </p>
                <a href="https://guthib.com/" target="blank">
                  <button className="py-1.5 px-4 bg-blue-600 text-white font-semibold flex gap-2 items-center  hover:bg-blue-700 ">
                    Read More <BiRightArrowAlt className="text-2xl" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
