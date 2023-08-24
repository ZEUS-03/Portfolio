import Icon from "./Icon";
import React from "react";
import {
  SiJavascript,
  SiReact,
  SiPython,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";

export const PROJECTS_INFO = [
  {
    heading: "MERN App",
    title: "Social Media Application",
    image: "/assets/sm.jpg",
    link: "https://github.com/ZEUS-03/MERN-social-media-",
  },
  {
    heading: "MERN App",
    title: "Realtime Video Chat Application",
    image: "/assets/chat.jpg",
    link: "https://github.com/ZEUS-03/Video-chat-app",
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
    position: "JR. SOFTWARE DEVELOPER",
  },
  {
    time: "Sept, 2020 - March, 2021",
    company: "Rams Creative Technologies",
    position: "MACHINE LEARNING INTERN",
  },
];

export const TECH_SKILLS = [
  {
    title: "PROGRAMMING LANGUAGES",
    children: (
      <div className="flex">
        <Icon text={"JavaScript"} divClass={""} textClass={"text-[14px] pt-2"}>
          <SiJavascript
            size={32}
            className=" hover:text-yellow-300 transition duration-300 rounded-full"
          />
        </Icon>
        <Icon text={"Python"} textClass={"text-[14px] pt-2"}>
          <SiPython
            size={32}
            className=" hover:text-[#3d79ab] transition duration-300 rounded-full"
          />
        </Icon>
      </div>
    ),
  },
  {
    title: "WEB DEVELOPMENT",
  },
  {
    title: "DATABASES",
  },
];
