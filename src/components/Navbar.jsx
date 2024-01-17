import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed w-full h-4 flex      ">
      

      
         <div className=" hidden md:block text-[#ADB7BE] hover:text-white">
         <ul className=' flex-wrap hidden sm:flex pt-[36px] gap-[108px] pl-36 pb-[66px]  '>
        <li> Home</li>
          <li>Portfolio</li>
          <li>AboutMe</li>
          <li>ContactMe</li>
        </ul>
      </div>
      
    </nav>
  )
}

export default Navbar