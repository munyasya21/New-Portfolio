import React from "react";



const Navbar = () => {
 
  


  return (
    <nav className=" flex fixed items-center justify-end w-[92%] mx-auto ">
     
      <div>
        <ul className="flex items-center gap-[4vw]">
          <li className="hover:text-gray-500">
        <a href="#home"> Home</a>
          </li>
          <li className="hover:text-gray-500">
          <a href="#about">About Me</a>  
            
          </li>
          <li className="hover:text-gray-500">
          <a href="#work"> My Work</a> 
             
           
          </li>
          <li className="hover:text-gray-500">
          <a href="#contact">Contact Me</a> 
            
           
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
