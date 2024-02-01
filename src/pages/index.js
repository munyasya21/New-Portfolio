"use client";
import Image from "next/image.js";
import Inter from "next/font/google";
import Laptopcode from "../assets/images/Laptopcode.png";
import Navbar from "@/components/Navbar";
import { TypeAnimation } from "react-type-animation";
import lapy from "../assets/images/lapy.png";
import tour from "../assets/images/tour.png";
import drinks from "../assets/images/drinks.png";

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
          <h2 className="  justify-center text-4xl sm:text-5xl lg:text-6xl font-extrabold py-3">
            About Me
          </h2>
          <p className="text-[#ADB7BE] text-lg lg:text-xl py-3 items-center justify-start  ">
            As a Software Developer, I have expertise with a variety of
            technologies and programming languages to plan, create, and build
            applications and solutions, attempting to make use of extensive
            development expertise and practical technical skills as a Software
            Developer in a demanding position.
          </p>
          <div className="flex">
            <div></div>
            <button
              role="tab"
              aria-selected="true"
              aria-controls="panel-1"
              id="tab-1"
              tabIndex={0}
            >
              <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500">
                Skills
              </span>
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="panel-2"
              id="tab-2"
              tabIndex={1}
            >
              <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500">
                Experience
              </span>
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="panel-3"
              id="tab-3"
              tabIndex={2}
            >
              <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500">
                Education
              </span>
            </button>
          </div>
          <div
            role="tabpanel"
            id="panel-1"
            className=" absolute invisible opacity-0 tab-panel transition duration-300"
          >
            <p>React</p>
            <p>React</p>
            <p>React</p>
          </div>
          <div
            role="tabpanel"
            id="panel-2"
            className=" absolute  invisible opacity-0 tab-panel transition duration-300"
          >
            <p>topo</p>
            <p>React</p>
            <p>React</p>
          </div>
          <div
            role="tabpanel"
            id="panel-3"
            className=" absolute invisible opacity-0  tab-panel transition duration-300"
          >
            <p>React</p>
            <p>React</p>
            <p>React</p>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className="pt-[134px]">
        <h2 className="text-center text-4xl  font-semibold tracking-[0.72px]  capitalize leading-[44px]">
          My Projects
        </h2>
      </div>
      <div className="pl-[70px]">
        <div className="flex w-full gap-[32px] rounded-t-xl rounded-b-xl  ">
          <div className="pt-[55px] flex    flex-col justify-center ">
            <Image
              src={drinks}
              width={794}
              height={780}
              className="rounded-t-xl rounded-b-xl bg-black"
              alt="drinks image"
            />
          </div>
          <div className="pt-[55px] flex flex-col  rounded-2xl   justify-center   ">
            <Image
              src={tour}
              width={794}
              height={780}
              className="rounded-t-xl rounded-b-xl bg-black"
              alt="tour image"
            />
          </div>
        </div>
      </div>
      {/* Email */}
      <div className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap4">
        <div>
          <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            {""}
            I'm currently looking for new opportunities, my inbox is always
            open. Whether you have a question or not, I'll try my best to
            get back to you! 
      
          </p>
        </div>
        <form className="flex flex-col gap-4 ">
        <label htmlFor="email" className="text-white">Your Email</label>
         <input 
         type="email" 
         id="email" 
         required
         placeholder="munyasyacynthia@gmail.com"/> 
            </form>
      </div>
    </section>
  );
}
