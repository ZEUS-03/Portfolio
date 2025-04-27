import React, { useEffect, useRef } from "react";
import ProjectCard from "../helper/ProjectCard";
import { ImArrowUpRight2 } from "react-icons/im";

import { PROJECTS_INFO } from "../helper/constant";
import Button from "../helper/Button";

const Work = () => {
  // Function to check if element is in viewport and animate it
  const handleScroll = () => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    const projectCards = document.querySelectorAll(".flex.w-full.md\\:w-1\\/2");

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight * 0.95;

      if (isVisible) {
        element.classList.add("animate-in");
      }
    });

    // Animate project cards with staggered delay
    projectCards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight * 0.8;

      if (isVisible) {
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, index * 150); // 150ms delay between each card
      }
    });
  };

  // Add scroll listener and clean up
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setTimeout(handleScroll, 300);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="md:flex">
      <div className="flex flex-col mt-3 md:mt-10 font-body px-5 md:pl-20 mb-8">
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <h1 className="italic text-md font-semibold mb-2">My Work</h1>
          <h1 className="text-3xl font-extrabold mb-3">RECENT PROJECTS</h1>
        </div>

        <div className="relative w-full h-8 mb-6">
          <div className="absolute left-0 h-[2px] w-16 bg-gradient-to-r from-purple-500 via-pink-400 to-orange-500 animate-on-scroll opacity-0 transition-all duration-700 delay-300"></div>
          <div className="absolute left-0 top-4 h-[2px] w-8 bg-gradient-to-r from-purple-500 via-pink-400 to-orange-500 animate-on-scroll opacity-0 transition-all duration-700 delay-500"></div>
        </div>

        <div className="md:flex md:flex-wrap mr-4 mt-5">
          {PROJECTS_INFO.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                title={project.title}
                heading={project.heading}
                image={project.image}
                link={project.link}
                liveURL={project?.liveURL || ""}
              />
            );
          })}
        </div>

        <div className="animate-on-scroll opacity-0 translate-y-5 transition-all duration-700 md:w-[30%] sm:w-auto">
          <a
            href="https://github.com/ZEUS-03"
            className="w-fit mx-auto md:mx-0"
            target="_blank"
          >
            <Button
              text={"Visit Github Profile!"}
              divClass={"w-[65%] mx-auto md:mx-0 md:w-[%]"}
            >
              <ImArrowUpRight2 size={16} />
            </Button>
          </a>
        </div>
      </div>

      <div className="hidden md:block absolute right-8 top-1/3 w-6 h-6 rounded-full bg-gradient-to-r from-purple-300 to-pink-200 opacity-40 animate-float"></div>
      <div className="hidden md:block absolute left-1/4 bottom-24 w-4 h-4 rounded-full bg-gradient-to-r from-blue-300 to-teal-200 opacity-40 animate-float-delayed"></div>
    </div>
  );
};

export default Work;
