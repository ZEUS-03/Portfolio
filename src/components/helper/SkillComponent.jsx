import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SkillComponent = ({ title, children, isActive, onShow }) => {
  return (
    <div className="py-3 px-0 md:px-2 text-black border-b-[1px] mt-2 border-gray-300">
      <div className="flex justify-between">
        <p
          className={`font-bold tracking-tight text-lg md:text-xl w-full md:w-[40%] ${
            isActive
              ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-orange-500"
              : "text-black"
          }`}
        >
          <span className="mr-2">•</span>
          {title}
        </p>

        {!isActive ? (
          <button className="" onClick={onShow}>
            <AiOutlinePlus size={20} />
          </button>
        ) : (
          <AiOutlineMinus size={20} />
        )}
      </div>
      {isActive ? <div className="mt-3">{children}</div> : ""}
    </div>
  );
};

export default SkillComponent;
