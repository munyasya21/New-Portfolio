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
       <div className='grid grid-cols-1 sm:grid-cols-12 pt-[90px] '>
        <div className=' col-span-7 place-self-center text-centre sm:text-left '>
     <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold py-3'>
    <span className=' text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>  Hello I'm Cynthia</span >
      </h1>
     <p className='text-[#ADB7BE] text-lg lg:text-xl py-3 '>
      As a front-end software developer, I excel at transforming design concepts into <br/>
      captivating and functional user interfaces.
     </p>
     <div className='flex gap-[16px] py-4'>
        <button className=" rounded-lg px-6 py-3 w-full sm:w-fit  bg-white text-black hover:bg-slate-200 bg-gradient-to-br from-blue-500 via-purple-500  to-pink-500">
                HIRE ME
              </button>
           
        <button className="rounded-lg px-6 py-3 w-full sm:w-fit bg-white text-black hover:bg-slate-200">
                DOWNLOAD CV
              </button>
              
          </div>  
          
     </div>
     <div className=' col-span-5 '>
     <div className=' w-[520px] h-[500px] py-4 relative '>
     <Image src={Laptopcode}
     width={520}
     height={500}
     className=' rounded-xl absolute transform    '
     alt='laptop code image'
     />
     </div>         
     </div>    
     </div>
     
    </section>
  )
}
