import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const scrollTo = (scroll) => {
    const section = document?.querySelector(`#${scroll}`);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className=" flex fixed items-center justify-end sm:pl-[50px] lg:w-[92%] mx-auto z-[1000] ">
      <div>
        <ul className="flex items-center gap-[4vw]">
          <li className="hover:text-gray-500">
            <button onClick={() => scrollTo("home")}>Home</button>
          </li>
          <li className="hover:text-gray-500">
            <button onClick={() => scrollTo("about")}>AboutMe</button>
          </li>
          <li className="hover:text-gray-500">
            <button onClick={() => scrollTo("work")}>My Work</button>
          </li>
          <li className="hover:text-gray-500">
            <button onClick={() => scrollTo("contact")}>Contact Me</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
