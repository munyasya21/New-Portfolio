"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import lapy from "../assets/images/lapy.png";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 ">
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Tailwind</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>ALX Academy </li>
        <li> KCA University </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>SoloLearn</li>
        <li>Alx Front-End Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div id="#about" className="md:grid md:grid-cols-2 gap-8 items-center py-8  xl:gap-16 sm:py-16 xl:px-16">
        <Image src={lapy} width={700} height={600} className="rounded-xl  transform" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="justify-center text-4xl sm:text-5xl lg:text-6xl font-extrabold py-3">About Me</h2>
          <p className="text-[#ADB7BE] text-lg lg:text-xl py-3 items-center justify-start">
            As a Software Developer, I have expertise with a variety of technologies and programming languages to plan,
            create, and build applications and solutions, attempting to make use of extensive development expertise and
            practical technical skills as a Software Developer in a demanding position.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              {" "}
              Education{" "}
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8 ml-3">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
