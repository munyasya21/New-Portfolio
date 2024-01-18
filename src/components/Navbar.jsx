import React from 'react'

const Navbar = () => {
  return (
    <nav className=" flex fixed items-center justify-end w-[92%] mx-auto ">
       <div>
         <ul className='flex items-center gap-[4vw]  '>
        <li>
           <a className='hover:text-gray-500' href='#'>Home</a>
           </li>
          <li>
          <a className='hover:text-gray-500'href='#'>AboutMe</a>
          </li>
          <li>
          <a className='hover:text-gray-500' href='#'>My Work</a> 
            </li>
          <li>
          <a className='hover:text-gray-500' href='#'>ContactMe</a> 
            </li>
        </ul>
      </div>
      
    </nav>
  )
}

export default Navbar