import React, { useState, useEffect, useRef } from "react";
import { TECH_SKILLS } from "../helper/constant";
import SkillComponent from "../helper/SkillComponent";

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const skillsRef = useRef(null);
  const headingRef = useRef(null);

  // Function to handle scroll animations
  const handleScroll = () => {
    const elements = document.querySelectorAll(".skills-animate");

    elements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight * 0.85;

      if (isVisible) {
        // Add staggered delay based on index
        setTimeout(() => {
          element.classList.add("skills-animate-in");
        }, 150 * index);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Initial check
    setTimeout(handleScroll, 300);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col mt-3 md:mt-10 mx-4 relative">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 blur-xl opacity-40"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 rounded-full bg-gradient-to-tr from-blue-100 to-teal-100 blur-xl opacity-30"></div>

      <div className="md:flex md:flex-col md:justify-center font-body px-5 md:pl-20 mb-8">
        <div
          ref={headingRef}
          className="skills-animate opacity-0 translate-y-6 transition-all duration-700"
        >
          <h1 className="italic text-md font-semibold mb-3 text-purple-600">
            Skills
          </h1>
          <h1 className="text-3xl font-extrabold mb-3">TECHNICAL SKILLS</h1>

          {/* Animated underline */}
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 via-pink-400 to-orange-500 rounded-full mb-6 transform scale-x-0 origin-left transition-all duration-700 delay-300 skills-animate opacity-0"></div>
        </div>

        <div ref={skillsRef}>
          {TECH_SKILLS.map((skill, index) => {
            return (
              <div
                key={index}
                className={`skills-animate opacity-0 translate-y-6 transition-all duration-700 delay-${
                  index * 100
                }`}
              >
                <SkillComponent
                  title={skill.title}
                  children={skill.children}
                  isActive={activeIndex === index}
                  onShow={() => setActiveIndex(index)}
                  index={index}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
