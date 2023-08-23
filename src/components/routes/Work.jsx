import React from "react";
import ProjectCard from "../helper/ProjectCard";
import { ImArrowUpRight2 } from "react-icons/im";

import { PROJECTS_INFO } from "../helper/constant";
import Button from "../helper/Button";

const Work = () => {
  return (
    <div className="md:flex">
      <div className="flex flex-col mt-3 md:mt-10 font-body px-5 md:pl-20 mb-8">
        <h1 className=" italic text-md font-semibold mb-2">My Work</h1>
        <h1 className="text-3xl font-extrabold mb-3">RECENT PROJECTS</h1>

        <div className="md:flex md:flex-wrap mr-4 mt-5">
          {PROJECTS_INFO.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                title={project.title}
                heading={project.heading}
                image={project.image}
                link={project.link}
              />
            );
          })}
        </div>
        <a
          href="https://github.com/ZEUS-03"
          className="w-fit mx-auto md:mx-0"
          target="_blank"
        >
          <Button
            text={"Visit Github Profile!"}
            divClass={" w-[100%] hover:shadow-md"}
          >
            <ImArrowUpRight2 size={16} />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Work;
