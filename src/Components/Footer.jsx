import React from "react";
import { FaGithub, FaFacebook, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {
  return (
    <div className="w-full bg-slate-800 h-fit sm:h-[340px]">
      <div className="w-[90%] sm:w-[80%] flex flex-wrap mx-auto h-full ">
        <div className="flex flex-wrap gap-5 sm:gap-10 mt-8 items-center justify-center md:w-[60%]">
          <div className=" sm:w-[50%]">
            <h1 className="text-white font-bold text-xl mb-2 hover:text-gray-200 text-center sm:text-left ">
              <a href="/">Something</a>
            </h1>
            <hr className=" text-gray-500 mb-2 w-[80%] mx-auto sm:mx-0" />
            <p className="text-gray-300 font-semibold text-sm text-center sm:text-left">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, illum quam? Possimus labore deserunt est? Cupiditate explicabo architecto molestiae laboriosam fugiat assumenda totam.
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-2 ">Quick Links</h2>
            <ul className=" list-none text-gray-300 text-sm text-center sm:text-start">
              <li className="hover:text-white">
                <a href="/" className="cursor-pointer">Home</a>
              </li>
              <li className="hover:text-white">
                <a href="/" className="cursor-pointer">About</a>
              </li>
              <li className="hover:text-white">
                <a href="/" className="cursor-pointer">Services</a>
              </li>
              <li className="hover:text-white">
                <a href="/" className="cursor-pointer">Pages</a>
              </li>
              
              <li className="hover:text-white">
                <a href="/" className="cursor-pointer">Blogs</a>
              </li>
              <li className="hover:text-white">
                <a href="/" className="cursor-pointer">Portfolio</a>
              </li>
              <li className="hover:text-white">
                <a href="/" className="cursor-pointer">Login</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center  justify-center text-white w-full md:w-[40%] mt-5 mb-7 ">
          <div className="w-full sm:w-2/3 flex items-center sm:items-start justify-center flex-col ">
            <h2 className=" font-semibold mb-2">Contact us</h2>
            <h3 className="text-sm text-gray-300 hover:text-white">
              <FaPhoneAlt className=" inline-block text-sm mb-1" />{" "}
              +917666330822
            </h3>
            <h3 className="text-sm text-gray-300 hover:text-white">
              <MdEmail className="inline-block " /> mandardeshmukh
              <br className="hidden md:block xl:hidden" />
              2003@gmail.com
            </h3>

            <div className="flex items-center justify-center gap-2 mt-3">
              <a
                className=" cursor-pointer"
                href="https://github.com/mandarsd18"
                target="blank"
              >
                <FaGithub className="text-white text-xl" />
              </a>
              <a className=" cursor-pointer" href="1" target="blank">
                <FaFacebook className="text-white text-xl" />
              </a>
              <a
                className=" cursor-pointer"
                href="https://instagram.com/allabout.mandar?igshid=NGExMmI2YTkyZg== "
                target="blank"
              >
                <AiFillInstagram className="text-2xl" />
              </a>
              <a
                className=" cursor-pointer"
                href="https://www.linkedin.com/in/mandar-deshmukh-ab6479235 "
                target="blank"
              >
                <FaLinkedin className="text-white text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
