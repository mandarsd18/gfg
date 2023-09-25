import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-16 fixed top-0 left-0 z-50 bg-white">
        <div className="w-[80%] h-full mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold ">Something</h1>
          </div>
          <div className="flex items-center gap-5 font-semibold text-lg">
           
              <a href="https://guthib.com/" target="blank" > Home</a>
              <a href="https://guthib.com/" target="blank" > Services</a>
              <a href="https://guthib.com/" target="blank" > Pages</a>
              <a href="https://guthib.com/" target="blank" > Portfolio</a>
              <a href="https://guthib.com/" target="blank" > Blogs</a>
              <a href="https://guthib.com/" target="blank" > Contact us</a>
              <button className="bg-blue-600 py-1.5 px-4 text-white rounded-sm hover:bg-blue-700  ">Log In</button>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
