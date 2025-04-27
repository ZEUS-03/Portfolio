import React, { useState } from "react";
import { ImArrowUpRight2 } from "react-icons/im";

const ProjectCard = ({ heading, title, link, image, liveURL }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex w-full md:w-1/2 mb-10 opacity-0 translate-y-10 transition-all duration-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col w-[40%] mt-2 md:mt-0 md:justify-center relative">
        <h1
          className={`font-semibold italic text-xs mb-1 transition-all duration-300 ${
            isHovered
              ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-orange-500"
              : ""
          }`}
        >
          {heading}
        </h1>
        <h2
          className={`font-extrabold text-xl transition-all duration-300 ${
            isHovered ? "translate-x-2" : ""
          }`}
        >
          {title}
        </h2>
        <a
          href={link}
          className={`absolute left-0 bottom-0 mb-2 md:mb-0 transition-all duration-300 ${
            isHovered ? "translate-x-2 scale-125" : ""
          }`}
        >
          <ImArrowUpRight2
            size={18}
            className={`transition-all duration-300 ${
              isHovered ? "text-blue-500 rotate-45" : ""
            }`}
          />
        </a>
      </div>
      <a
        href={liveURL || link}
        target="_blank"
        className={`relative overflow-hidden rounded-lg transition-all ease-in-out duration-300 ${
          isHovered ? "scale-105 shadow-xl" : ""
        }`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-pink-400/20 to-orange-500/20 rounded-lg opacity-0 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : ""
          }`}
        ></div>
        <img
          loading="lazy"
          src={image}
          className="w-[215px] h-[150px] object-cover rounded-lg transition-all duration-500"
        />
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-400 to-orange-500 transform scale-x-0 origin-left transition-transform duration-300 ${
            isHovered ? "scale-x-100" : ""
          }`}
        ></div>
      </a>
    </div>
  );
};

export default ProjectCard;
