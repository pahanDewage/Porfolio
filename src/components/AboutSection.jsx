"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Aboutme from"@/assets/images/aboutme.png"

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4 text-[#A6C1D9]">
        <li>Node.js</li>
        <li>Next.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Flutter</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 text-[#A6C1D9]">
        <li>Ananda College, Colombo</li>
        <li>Faculty of Information Technology</li>
        <ul>
          <li>University of Moratuwa (Undergraduate)</li>
        </ul>
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
    <section className="text-white bg-[#0F1624] py-8 sm:py-8 xl:py-8" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src={Aboutme}
          width={500}
          height={500}
          alt="About Me Image"
          className="rounded-lg shadow-lg"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-[#ADB7BE]">
            As an enthusiastic and driven Software Engineering student, I am
            passionate about solving complex problems and enjoy collaborating
            with diverse teams. With a strong aptitude for communication and
            teamwork, I bring a positive and proactive approach to every project
            I undertake. I aim to excel in the IT industry, where I can apply my
            skills to create innovative solutions and thrive in a dynamic
            environment while continuing to grow and learn. I am committed to
            delivering excellence in all my endeavors and am eager to contribute
            meaningfully to any team I join.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
