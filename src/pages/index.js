"use client";
import Image from "next/image.js";
import Inter from "next/font/google";
import Laptopcode from "../assets/images/Laptopcode.png";
import Navbar from "@/components/Navbar";
import { TypeAnimation } from "react-type-animation";
import lapy from "../assets/images/lapy.png";











export default function Home() {

 
  
  return (
    <section className="flex  min-h-screen flex-col  mx-auto px-12 py-4  bg-black text-white">
      <div>
        <Navbar />
      </div>
      {/* text to the left */}
     
      <div className=" flex pt-[120px] ">
           <div className="pl-[120px] pt-[120px] ">
          <h1 className="text-4xl w-[800px]  sm:text-5xl lg:text-6xl font-extrabold py-3 ">
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello I'm{" "}
            </span>
            <TypeAnimation 
              sequence={[
                "Cynthia",
                1000,
                "a Web Developer",
                1000,
                "a Mobile Developer",
                1000,
                "a UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={40}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl py-3 ">
            As a front-end software developer, I excel at transforming design
            concepts into <br />
            captivating and functional user interfaces.
          </p>
          <div className="flex gap-[16px] py-4">
            <button className=" rounded-full px-6 py-3 w-full sm:w-fit text-white bg-black hover:bg-slate-200 bg-gradient-to-br from-blue-500 via-purple-500  to-pink-500">
              HIRE ME
            </button>

            <button className="rounded-full px-1 py-1 w-full sm:w-fit  text-white hover:bg-slate-200  bg-gradient-to-br from-blue-500 via-purple-500  to-pink-500 ">
              <span className="block bg-black hover:bg-slate-800 rounded-full px-5 py-2">
                DOWNLOAD CV
              </span>
            </button>
          
          </div>
          </div>
          
          
         {/* image to the right */}
        <div className="pl-[250px]  gap-[30px] place-self-center  ">
          <div className=" w-[500px] h-[500px] py-4   ">
            <Image
              src={Laptopcode}
              width={500}
              height={600}
              className=" rounded-xl  "
              alt="laptop code image"
            />
          </div>
        </div>
        </div>
       

           {/* About Me */}
           <div className="flex ">
           <div className=" col-span-5 pt-[500px] pb-11">
          <div className=" w-[700px] h-[500px] py-4 relative pl-11 ">
            <Image
              src={lapy}
              width={700}
              height={600}
              className=" rounded-xl absolute transform "
              alt="laptop code image"
            />
            </div>
            </div>
            {/* Text to the right */}
            <div className="pt-[500px] pl-[150px] pr-[50px] pb-11">
            <h2 className="  justify-center text-4xl sm:text-5xl lg:text-6xl font-extrabold py-3">About Me</h2>
            <p className="text-[#ADB7BE] text-lg lg:text-xl py-3 items-center justify-start  ">
              As a Software Developer, I have expertise with a variety of technologies and programming languages to plan,
             create, and build applications and solutions, attempting to make use of extensive development expertise and 
             practical technical skills as a Software Developer in a demanding position.
             </p>
             <div className="flex">
            
              <button className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500">Skills</button>
              <button className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500">Education</button>
              <button className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500">Experience</button>
             </div>
            </div>
            
          </div>
        
      




      
    </section>
  );
}
