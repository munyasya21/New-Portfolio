import Image from 'next/image.js';
import { Inter } from 'next/font/google';
import Laptopcode from "../assets/images/Laptopcode.png"
import Navbar from '@/components/Navbar';






export default function Home() {
  return (
    
    <section className='flex  min-h-screen flex-col  mx-auto px-12 py-4  bg-black text-white' >
      <div>
        <Navbar/>
      </div>
       <div className='grid grid-cols-1 lg:grid-cols-12 pt-[90px] '>
        <div className=' col-span-7 place-self-center '>
     <h1 className='text-4xl lg:text-6xl font-extrabold py-3'>
      Hello I'm Cynthia
      </h1>
     <p className='text-[#ADB7BE] text-lg lg:text-xl py-3 '>
      As a front-end software developer, I excel at transforming design concepts into <br/>
      captivating and functional user interfaces.
     </p>
     <div className='flex gap-[16px] py-4'>
        <button className=" rounded-lg px-6 py-3   bg-white text-black">
                HIRE ME
              </button>
           
        <button className="rounded-lg px-6 py-3  bg-white text-black">
                DOWNLOAD CV
              </button>
              
          </div>  
          
     </div>
     <div className='w-[500px] h-[400px]  '>
     <Image src={Laptopcode}
     width={500}
     height={500}
     className=' rounded-xl'
     alt='laptop code image'
     />
     </div>         
           
     </div>
     
    </section>
  )
}
