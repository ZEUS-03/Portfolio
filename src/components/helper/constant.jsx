import Icon from "./Icon";
import React from "react";
import {
  SiJavascript,
  SiReact,
  SiPython,
  SiHtml5,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiCss3,
  SiExpress,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiJira,
} from "react-icons/si";

export const PROJECTS_INFO = [
  {
    heading: "MERN App",
    title: "Ecommerce Fullstack Application",
    image: "/assets/chat.jpg",
    link: "https://github.com/ZEUS-03/E-commerce-App",
  },
  {
    heading: "MERN App",
    title: "Social Media Application",
    image: "/assets/sm.jpg",
    link: "https://github.com/ZEUS-03/MERN-social-media-",
  },

  {
    heading: "React Application",
    title: "Portfolio Website",
    image: "/assets/pf.jpg",
    link: "#",
  },
  {
    heading: "JS App",
    title: "Task Manager Application",
    image: "/assets/4886082.jpg",
    link: "https://github.com/ZEUS-03/Task-manager-firebase",
  },
];

export const PREVIOUS_WORKS = [
  {
    time: "April, 2023 - Present",
    company: "Sarvika Technologies",
    position: "SOFTWARE ENGINEER",
  },
  {
    time: "July, 2020 - March, 2021",
    company: "Rams Creative Technologies",
    position: "JAVASCRIPT DEVELOPER",
  },
];

export const TECH_SKILLS = [
  {
    title: "PROGRAMMING LANGUAGES",
    children: (
      <div className="flex flex-col md:flex-row">
        <Icon text={"JavaScript"} divClass={""} textClass={"text-[14px] pt-2"}>
          <SiJavascript
            size={32}
            className=" hover:text-yellow-300 transition duration-300 rounded-full ml-4"
          />
        </Icon>
        <Icon text={"Python"} textClass={"text-[14px] pt-2"}>
          <SiPython
            size={32}
            className=" hover:text-[#3d79ab] transition duration-300 rounded-full ml-4"
          />
        </Icon>
        <Icon text={"C++"} textClass={"text-[14px] pt-2"}>
          <SiCplusplus
            size={32}
            className=" hover:text-[#3546ff] transition duration-300 rounded-full ml-4"
          />
        </Icon>
      </div>
    ),
  },
  {
    title: "WEB DEVELOPMENT",
    children: (
      <div className="flex flex-col md:flex-row">
        <Icon text={"HTML"} textClass={"text-[14px] pt-2"}>
          <SiHtml5
            size={32}
            className=" hover:text-[#e5532d] transition duration-300 rounded-full ml-4"
          />
        </Icon>
        <Icon text={"CSS"} textClass={"text-[14px] pt-2"}>
          <SiCss3
            size={32}
            className=" hover:text-[#116bac] transition duration-300 rounded-full ml-4"
          />
        </Icon>
        <Icon text={"React.js"} textClass={"text-[14px] pt-2"}>
          <SiReact
            size={32}
            className=" hover:text-[#79dffc] transition duration-300  rounded-full ml-4"
          />
        </Icon>
        <Icon text={"Tailwind CSS"} textClass={"text-[14px] pt-2"}>
          <SiTailwindcss
            size={32}
            className=" hover:text-[#37afe5] transition duration-300 rounded-full ml-4"
          />
        </Icon>
        <Icon text={"Node.js"} textClass={"text-[14px] pt-2"}>
          <SiNodedotjs
            size={32}
            className=" hover:text-[#86cf31] transition duration-300 rounded-full ml-4"
          />
        </Icon>
        <Icon text={"Express.js"} textClass={"text-[14px] pt-2"}>
          <SiExpress
            size={32}
            className=" hover:text-gray-500 transition duration-300 rounded-full ml-4"
          />
        </Icon>
      </div>
    ),
  },
  {
    title: "DATABASES",
    children: (
      <div className="flex flex-col md:flex-row">
        <Icon text={"MySQL"} textClass={"text-[14px] pt-2"}>
          <SiMysql
            size={32}
            className=" hover:text-[#085f8b] transition duration-300 ml-4 rounded-full"
          />
        </Icon>
        <Icon text={"MongoDB"} textClass={"text-[14px] pt-2"}>
          <SiMongodb
            size={32}
            className=" hover:text-[#57ae52] transition ml-4 duration-300"
          />
        </Icon>
      </div>
    ),
  },
  {
    title: "TECHNOLOGY",
    children: (
      <div className="flex flex-col md:flex-row">
        <Icon text={"Git"} textClass={"text-[14px] pt-2"}>
          <SiGit
            size={32}
            className=" hover:text-[#5bb8e6] transition duration-300 ml-4 rounded-full"
          />
        </Icon>
        <Icon text={"Github"} textClass={"text-[14px] pt-2"}>
          <SiGithub
            size={32}
            className=" hover:text-purple-500 transition ml-4 duration-300"
          />
        </Icon>
        <Icon text={"Jira"} textClass={"text-[14px] pt-2"}>
          <SiJira
            size={32}
            className=" hover:text-[#2178f0] transition ml-4 duration-300"
          />
        </Icon>
      </div>
    ),
  },
];
