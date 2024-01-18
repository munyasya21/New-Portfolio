import Image from "next/image.js";
import Inter from "next/font/google";
import Laptopcode from "../assets/images/Laptopcode.png";
import Navbar from "@/components/Navbar";
import { TypeAnimation } from "react-type-animation";
import About from "./about..js";

export default function Home() {
  return (
    <section className="flex  min-h-screen flex-col  mx-auto px-12 py-4  bg-black text-white">
      <div>
        <Navbar />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-12 pt-[90px] ">
        <div className=" col-span-7 place-self-center text-centre sm:text-left ">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold py-3">
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
        <div className=" col-span-5 ">
          <div className=" w-[500px] h-[400px] py-4 relative ">
            <Image
              src={Laptopcode}
              width={500}
              height={400}
              className=" rounded-xl absolute transform    "
              alt="laptop code image"
            />
          </div>
         <div>
          <About/>
         </div>
        </div>



      




      </div>
    </section>
  );
}
