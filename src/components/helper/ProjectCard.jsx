import React from "react";

import { ImArrowUpRight2 } from "react-icons/im";

const ProjectCard = ({ heading, title, link, image }) => {
  return (
    <div className="flex w-full md:w-1/2 mb-10">
      <div className="flex flex-col w-[40%] mt-2 md:mt-0 md:justify-center relative">
        <h1 className="font-semibold italic text-xs mb-1">{heading}</h1>
        <h2 className="font-extrabold text-xl">{title}</h2>
        <a href={link} className="absolute left-0 bottom-0 mb-2 md:mb-0 ">
          <ImArrowUpRight2 size={18} className="hover:text-blue" />
        </a>
      </div>
      <a
        href={link}
        className="hover:scale-105 transition ease-in-out duration-300 hover:shadow-xl"
      >
        <img
          src={image}
          className="w-[215px] h-[150px] object-cover rounded-lg"
        />
      </a>
    </div>
  );
};

export default ProjectCard;
