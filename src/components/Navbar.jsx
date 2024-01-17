import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed w-full h-4 flex      ">
      

      <div className="     ">
        <ul className=" hidden sm:flex pt-[36px] gap-[108px] pl-36 pb-[66px] ">
          <li>Home</li>
          <li>Portfolio</li>
          <li>AboutMe</li>
          <li>ContactMe</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar