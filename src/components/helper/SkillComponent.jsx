import React from "react";

const SkillComponent = ({ title, children }) => {
  return (
    <div className="py-3 px-2 text-black border-b-[1px]  mt-2 border-gray-300">
      <div className="md:flex ">
        <p className="font-bold tracking-tight text-xl w-full md:w-[40%]">
          <span className="mr-2">•</span>
          {title}
        </p>

        <button className="md:w-[20%]">+</button>
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default SkillComponent;
