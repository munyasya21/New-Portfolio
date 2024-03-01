import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const scrollTo = (scroll) => {
    const section = document?.querySelector(`#${scroll}`);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className=" flex fixed items-center section justify-center w-full  sm:bg-transparent backdrop-blur-sm py-4  sm:justify-end sm:pl-[50px]  md:pl-[350px] lg:w-[100%] mx-auto z-[1000] ">
      <div className="lg:w-[92%] md:ml-auto">
        <ul className="flex items-center gap-4 md:gap-8 md:ml-auto w-full md:justify-end">
          <li className="hover:text-gray-300">
            <button onClick={() => scrollTo("home")}>Home</button>
          </li>
          <li className="hover:text-gray-300">
            <button onClick={() => scrollTo("about")}>About</button>
          </li>
          <li className="hover:text-gray-300">
            <button onClick={() => scrollTo("work")}>My Work</button>
          </li>
          <li className="hover:text-gray-300">
            <button onClick={() => scrollTo("contact")}>Contact Me</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
