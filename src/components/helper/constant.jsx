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
  SiNextdotjs,
  SiTypescript,
  SiGit,
  SiGithub,
  SiJira,
} from "react-icons/si";

export const PROJECTS_INFO = [
  {
    heading: "Space wars",
    title: "Multiplayer Space Game",
    image: "/assets/spacewars.webp",
    link: "https://github.com/ZEUS-03/Space-Wars",
    liveURL: "https://spacewars-gamma.vercel.app/",
  },
  {
    heading: "MERN App",
    title: "Ecommerce Fullstack Application",
    image: "/assets/chat.webp",
    link: "https://github.com/ZEUS-03/E-commerce-App",
  },
  {
    heading: "Social Vibes",
    title: "Social Media Application",
    image: "/assets/sm.webp",
    link: "https://github.com/ZEUS-03/MERN-social-media-",
    liveURL: "https://social-vibes.vercel.app/",
  },

  {
    heading: "React Application",
    title: "Portfolio Website",
    image: "/assets/pf.webp",
    link: "#",
  },
  {
    heading: "JS App",
    title: "Task Manager Application",
    image: "/assets/4886082_blurred.webp",
    link: "https://github.com/ZEUS-03/Task-manager-firebase",
  },
];

export const PREVIOUS_WORKS = [
  {
    time: "April, 2023 - Present",
    company: "Sarvika Technologies",
    position: "SOFTWARE ENGINEER",
    url: "https://www.sarvika.com/",
    tools: "🛠️ React.js, Next.js, Typescript, Tailwind, Redux",
    responsibilities: [
      "Developed a multi-vendor e-commerce platform using React.js, Next.js, and Tailwind CSS to streamline product management, user access control, and marketplace operations. Key features include:",
      "User Access Management: Implemented secure authentication and role-based authorization for different user types.",
      "Product Management: Created intuitive dashboards for vendors to manage products, inventory, and pricing.",
      "Market Management: Built admin interfaces to manage multiple vendors, track sales performance, and generate reports.",
    ],
  },
  {
    time: "July, 2020 - March, 2021",
    company: "Rams Creative Technologies",

    position: "SOFTWARE ENGINEER INTERN",
    url: "https://www.yeppar.com/",
    tools: "🛠️ Javascript, Python, OpenCV, Express.js, MongoDB",
    responsibilities: [
      "Automated data processing and developed internal tools using Python and JavaScript. Key contributions include:",

      "Data Processing Automation: Developed Python scripts to automate data cleaning, transformation, and aggregation, improving data processing efficiency.",

      "Image Processing for ML: Created image processing scripts to enhance data set quality, improving the performance of machine learning models.",

      "Internal Tools: Built custom JavaScript-based tools for data validation and visualization, enabling more efficient data management and faster decision-making.",
    ],
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
        <Icon text={"Typescript"} textClass={"text-[14px] pt-2"}>
          <SiTypescript
            size={32}
            className=" hover:text-[#478dfe] transition duration-300 rounded-full ml-4"
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
        <Icon text={"Next.js"} textClass={"text-[14px] pt-2"}>
          <SiNextdotjs
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
