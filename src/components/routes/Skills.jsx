import React from "react";
import { TECH_SKILLS } from "../helper/constant";
// import TechIcons from "../helper/TechSkill";
import SkillComponent from "../helper/SkillComponent";

const Skills = () => {
  return (
    <div className="flex flex-col mt-3 md:mt-10 mx-4">
      <div className=" md:flex md:flex-col md:justify-center font-body px-5 md:pl-20 mb-8">
        <h1 className=" italic text-md font-semibold mb-2">Skills</h1>
        <h1 className="text-3xl font-extrabold mb-3">TECHNICAL SKILLS</h1>
        {TECH_SKILLS.map((skill, index) => {
          return (
            <SkillComponent
              title={skill.title}
              key={index}
              children={skill.children}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
