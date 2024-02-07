import React from "react";
import { Link } from "react-scroll";


const Navbar = () => {
 
  

  const closeMenu = () => OnClick(false);

  return (
    <nav className=" flex fixed items-center justify-end w-[92%] mx-auto ">
     
      <div>
        <ul className="flex items-center gap-[4vw]">
          <li className="hover:text-gray-500">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="hover:text-gray-500">
            <Link
              to="about me"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              AboutMe
            </Link>
          </li>
          <li className="hover:text-gray-500">
            <Link
              to="my work"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              My Work
            </Link>
          </li>
          <li className="hover:text-gray-500">
            <Link
              to="contact me"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
            >
              ContactMe
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
