"use client";
import Image from "next/image.js";
import my from "../assets/images/my.png";
import Navbar from "../components/Navbar.jsx";
import { TypeAnimation } from "react-type-animation";
import barabara from "../assets/images/barabara.png";
import blesket from "../assets/images/blesket.png";
import glendale from "../assets/images/glendale.png";
import pallax from "../assets/images/pallax.png";
import tour from "../assets/images/tour.png";
import drinks from "../assets/images/drinks.png";
import Achievements from "../components/Achievements.jsx";
import AboutSection from "../components/About.jsx";




export default function Home() {
  return (
    <section className="flex  min-h-screen flex-col   py-4 pt-0  bg-black text-white">

      <div id="home" className="bg-white">
        <Navbar />
      </div>
      {/* text to the left */}

      <div className=" flex mx-auto section  sm:pt-[70px] lg:pt-[120px] grid-cols-1 lg:grid-cols-12 ">
        <div className="lg:pl-[120px] sm:pl-[50px] pt-[120px] place-self-center col-span-7">
          <h1 className="text-2xl lg:w-[800px] sm:w-[full] sm:text-5xl lg:text-6xl font-extrabold py-3 ">
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello I&apos;m <br />
            </span>
            <TypeAnimation
              sequence={[
                "Cynthia Munyasya",
                1000,
                "a Web Developer",
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
                <a target="_blank" rel="noopener" href="https://salmon-katti-15.tiiny.site">
                  DOWNLOAD CV
                </a>
              </span>
            </button>
          </div>
        </div>  

        {/* image to the right */}
       
      </div>
      {/* Figures */}
      <div className="pt-[100px] mx-auto section">
        <Achievements />
      </div>

      {/* About Me */}
      <div className="mx-auto section ">
        <AboutSection />
      </div>

      {/* Projects */}
      <div id="work" className="pt-10 sm:pt-[134px] mx-auto section">
        <h2 className="text-center text-4xl  font-semibold tracking-[0.72px]  capitalize leading-[44px]">
          My Projects
        </h2>
      </div>
      <div className="lg:pl-[70px] sm:pl-[20px] mx-auto section ">
        <div className="flex w-full gap-[32px] rounded-t-xl rounded-b-xl relative group  ">
          <div className="pt-[55px] flex  hover:scale-105 transition-all ease-in-out duration-200  flex-col justify-center ">
            <div className="p-1 w-fit  grid place-content-center  border-2 relative rounded-full bg-black border-black hover:border-black top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-black">
              <a target="_blank" rel="noopener" href="https://barabaravoyagers.com/" className="h-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  />
                </svg>
              </a>
            </div>
            <Image
              src={barabara}
              width={794}
              height={780}
              className="rounded-t-xl rounded-b-xl bg-black"
              alt="drinks image"
            />
          </div>

          <div className="pt-[55px] flex flex-col  hover:scale-105 transition-all ease-in-out duration-200     justify-center ">
            <div className="p-1 w-fit  grid place-content-center  border-2 relative rounded-full bg-black border-black hover:border-black top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-black">
              <a target="_blank" rel="noopener" href="https://www.blesket-ke.com/" className="h-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  />
                </svg>
              </a>
            </div>
            <Image
              src={blesket}
              width={794}
              height={780}
              className="rounded-t-xl rounded-b-xl bg-black"
              alt="tour image"
            />
          </div>
        </div>
      </div>
      <div className="lg:pl-[70px] sm:pl-[20px] mx-auto section ">
        <div className="flex w-full gap-[32px] rounded-t-xl rounded-b-xl relative group  ">
          <div className="pt-[55px] flex  hover:scale-105 transition-all ease-in-out duration-200  flex-col justify-center ">
            <div className="p-1 w-fit  grid place-content-center  border-2 relative rounded-full bg-black border-black hover:border-black top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-black">
              <a target="_blank" rel="noopener" href="https://www.glendale-engineering.co.ke/" className="h-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  />
                </svg>
              </a>
            </div>
            <Image
              src={glendale}
              width={794}
              height={780}
              className="rounded-t-xl rounded-b-xl bg-black"
              alt="drinks image"
            />
          </div>

          <div className="pt-[55px] flex flex-col  hover:scale-105 transition-all ease-in-out duration-200     justify-center ">
            <div className="p-1 w-fit  grid place-content-center  border-2 relative rounded-full bg-black border-black hover:border-black top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-black">
              <a target="_blank" rel="noopener" href="https://pallax-ke.com/" className="h-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  />
                </svg>
              </a>
            </div>
            <Image
              src={pallax}
              width={794}
              height={780}
              className="rounded-t-xl rounded-b-xl bg-black"
              alt="tour image"
            />
          </div>
        </div>
      </div>
      <div className="lg:pl-[70px] sm:pl-[20px] mx-auto section ">
        <div className="flex w-full gap-[32px] rounded-t-xl rounded-b-xl relative group  ">
          <div className="pt-[55px] flex  hover:scale-105 transition-all ease-in-out duration-200  flex-col justify-center ">
            <div className="p-1 w-fit  grid place-content-center  border-2 relative rounded-full bg-black border-black hover:border-black top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-black">
              <a target="_blank" rel="noopener" href="https://quiet-biscochitos-fb2a73.netlify.app" className="h-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  />
                </svg>
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

          <div className="pt-[55px] flex flex-col  hover:scale-105 transition-all ease-in-out duration-200     justify-center ">
            <div className="p-1 w-fit  grid place-content-center  border-2 relative rounded-full bg-black border-black hover:border-black top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-black">
              <a target="_blank" rel="noopener" href="https://stellar-twilight-40137a.netlify.app" className="h-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  />
                </svg>
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
      <div id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative mx-auto section">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute  top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2 "></div>
        <div className="lg:pl-[62px] sm:pl-[20px]">
          <h5 className="text-xl font-bold text-white my-2 ">Let&apos;s Connect</h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            {""}
            I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or
            not, I&apos;ll try my best to get back to you!
          </p>
          <div className=" flex gap-2 w-8 h-8 mt-12">
            <div className="w-12 h-12 mt-1.5">
              <a target="_blank" rel="noopener" href="https://github.com/munyasya21">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 1024 1024" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                    transform="scale(64)"
                    fill="#fff"
                  />
                </svg>
              </a>
            </div>
            <div className="w-12 ml-1 h-12">
              <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/cynthia-munyasya-b14676245">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  width="48px"
                  height="48px"
                  viewBox="0 0 256 256"
                  id="Flat"
                >
                  <path d="M212,28H44A16.01817,16.01817,0,0,0,28,44V212a16.01833,16.01833,0,0,0,16,16H212a16.01833,16.01833,0,0,0,16-16V44A16.01817,16.01817,0,0,0,212,28ZM96,176.001a8,8,0,1,1-16,0v-64a8,8,0,0,1,16,0ZM88,92a12,12,0,1,1,12-12A12,12,0,0,1,88,92Zm96,84.001a8,8,0,1,1-16,0v-36a20,20,0,0,0-40,0v36a8,8,0,1,1-16,0v-64a7.99729,7.99729,0,0,1,15.79492-1.77857A35.98125,35.98125,0,0,1,184,140.001Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <form className="flex flex-col mt-12 ">
          <div className="mb-6">
            <label htmlFor="email" className="text-white mb-2 block text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border pl-[10px] w-full border-[#33353F] placeholder-[#9CA2A9] text-gray  text-lg rounded-lg sm:w-[300px] lg:w-[670px] pt-2.5"
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
              className="bg-[#18191E] border pl-[10px] w-full sm:w-[300px] border-[#33353F] placeholder-[#9CA2A9] text-gray  text-lg rounded-lg lg:w-[670px] pt-2.5"
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
              className="bg-[#18191E] border pl-[10px] w-full border-[#33353F] placeholder-[#9CA2A9] text-gray  text-lg rounded-lg  sm:w-[300px] lg:w-[670px] pt-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className=" bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 rounded-lg sm:w-[300px] lg:w-[670px] "
          >
            Send Message
          </button>
        </form>
      </div>
      {/* Footer */}
      <footer className=" border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
        <div className="  p-12 flex justify-center items-center">
          {/* <span>LOGO</span> */}
          <p className=" text-slate-600 text-center">@2024 All rights reserved</p>
        </div>
      </footer>
    </section>
  );
}
