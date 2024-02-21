"use client";
import Image from "next/image.js";
import Inter from "next/font/google";
import Laptopcode from "../assets/images/Laptopcode.png";
import Navbar from "../components/Navbar.jsx";
import { TypeAnimation } from "react-type-animation";
import tour from "../assets/images/tour.png";
import drinks from "../assets/images/drinks.png";
import Achievements from "../components/Achievements.jsx";
import AboutSection from "../components/About.jsx";

export default function Home() {
  return (
    <section className="flex  min-h-screen flex-col  mx-auto px-12 py-4  bg-black text-white">
      <div id="home">
        <Navbar />
      </div>
      {/* text to the left */}

      <div className=" flex pt-[120px] grid-cols-1 lg:grid-cols-12 ">
        <div className="pl-[120px] pt-[120px] place-self-center col-span-7">
          <h1 className="text-2xl w-[800px]  sm:text-5xl lg:text-6xl font-extrabold py-3 ">
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello I'm <br />
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
              speed={20}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl py-3 ">
            As a front-end software developer, I excel at transforming design concepts into <br />
            captivating and functional user interfaces.
          </p>
          <div className="flex gap-[16px] py-4">
            <button className=" rounded-full px-6 py-3 whitespace-nowrap w-fit text-white bg-black hover:bg-slate-200 bg-gradient-to-br from-blue-500 via-purple-500  to-pink-500">
              HIRE ME
            </button>

            <button className="rounded-full px-1 py-1 w-fit  text-white hover:bg-slate-200  bg-gradient-to-br from-blue-500 via-purple-500  to-pink-500 ">
              <span className="block bg-black hover:bg-slate-800 rounded-full px-5 py-2">
                <a target="_blank" rel="noopener" href="c:\Users\CYNTHIA\Documents\My Resume (1).pdf">
                  DOWNLOAD CV
                </a>
              </span>
            </button>
          </div>
        </div>

        {/* image to the right */}
        <div className="pl-[50px] pb-[150px] gap-[30px] place-self-center hidden lg:block ">
          <div className=" w-[400px] h-[400px] py-4   ">
            <Image src={Laptopcode} width={400} height={400} className=" rounded-xl  " alt="laptop code image" />
          </div>
        </div>
      </div>
      {/* Figures */}
      <div className="pt-[100px]">
        <Achievements />
      </div>

      {/* About Me */}
      <AboutSection />

      {/* Projects */}
      <div id="work" className="pt-[134px]">
        <h2 className="text-center text-4xl  font-semibold tracking-[0.72px]  capitalize leading-[44px]">
          My Projects
        </h2>
      </div>
      <div className="pl-[70px]">
        <div className="flex w-full gap-[32px] rounded-t-xl rounded-b-xl relative group  ">
          <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>

          <div className="pt-[55px] flex  hover:scale-105 transition-all ease-in-out duration-200  flex-col justify-center ">
            <div className="p-1 w-fit  grid place-content-center  border-2 relative rounded-full bg-black border-black hover:border-black top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-black">
              <a target="_blank" rel="noopener" href="https://quiet-biscochitos-fb2a73.netlify.app" className="h-fit">
                <ion-icon className="absolute" size="large" name="code-slash-outline"></ion-icon>
              </a>
            </div>
            <Image
              src={drinks}
              width={794}
              height={780}
              className="rounded-t-xl rounded-b-xl bg-black"
              alt="drinks image"
            />
          </div>

          <div className="pt-[55px] flex flex-col  rounded-2xl   justify-center ">
            <div className="p-1 w-fit  grid place-content-center  border-2 relative rounded-full bg-black border-black hover:border-black top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-black">
              <a target="_blank" rel="noopener" href="https://stellar-twilight-40137a.netlify.app"className="h-fit" >
                <ion-icon className="absolute" size="large" name="code-slash-outline"></ion-icon>
              </a>
            </div>
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
      <div id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute  top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2 "></div>
        <div className="pl-[62px]">
          <h5 className="text-xl font-bold text-white my-2 ">Let's Connect</h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            {""}
            I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or not,
            I'll try my best to get back to you!
          </p>
          <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
          <div className=" flex gap-2 w-8 h-8">
            <div className="w-8 h-8">
              <a target="_blank" rel="noopener" href="https://github.com/munyasya21">
                <ion-icon size="large" name="logo-github"></ion-icon>
              </a>
            </div>
            <div className="w-8 h-8">
              <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/cynthia-munyasya-b14676245">
                <ion-icon size="large" name="logo-linkedin"></ion-icon>
              </a>
            </div>
          </div>
        </div>
        <form className="flex flex-col  ">
          <div className="mb-6">
            <label htmlFor="email" className="text-white mb-2 block text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border pl-[10px] border-[#33353F] placeholder-[#9CA2A9] text-gray  text-lg rounded-lg  w-[670px] pt-2.5"
              placeholder="munyasyacynthia@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="text-white block mb-2  text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border pl-[10px] border-[#33353F] placeholder-[#9CA2A9] text-gray  text-lg rounded-lg  w-[670px] pt-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-white block mb-2  text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border pl-[10px] border-[#33353F] placeholder-[#9CA2A9] text-gray  text-lg rounded-lg  w-[670px] pt-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className=" bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 rounded-lg  w-[670px] "
          >
            Send Message
          </button>
        </form>
      </div>
      {/* Footer */}
      <footer className=" border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
        <div className="container  p-12 flex justify-between">
          <span>LOGO</span>
          <p className=" text-slate-600">All rights reserved</p>
        </div>
      </footer>
    </section>
  );
}
