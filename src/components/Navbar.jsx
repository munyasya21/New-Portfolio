import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className=" flex fixed items-center justify-end w-[92%] mx-auto ">
      <div>
        <ul className="flex items-center gap-[4vw]  ">
          <li className="hover:text-gray-500">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#">AboutMe</a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#">My Work</a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#">ContactMe</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
