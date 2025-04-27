import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SkillComponent = ({ title, children, isActive, onShow, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`py-3 px-0 md:px-2 text-black border-b-[1px] mt-2 border-gray-300 transition-all duration-300 ${
        isHovered ? "bg-gray-50" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center" onClick={onShow}>
        <p
          className={`font-bold tracking-tight text-lg md:text-xl w-full md:w-[40%] transition-all duration-300 ${
            isActive
              ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-orange-500"
              : isHovered
              ? "text-gray-800 translate-x-1"
              : "text-black"
          }`}
        >
          <span
            className={`mr-2 inline-block transition-all duration-300 ${
              isActive || isHovered
                ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-orange-500"
                : ""
            }`}
          >
            •
          </span>
          {title}
        </p>

        {!isActive ? (
          <button
            className={`transition-all duration-300 rounded-full p-1 ${
              isHovered ? "bg-gray-100" : ""
            }`}
            onClick={onShow}
          >
            <AiOutlinePlus
              size={20}
              className={`transition-all duration-300 ${
                isHovered ? "text-purple-500 rotate-90" : ""
              }`}
            />
          </button>
        ) : (
          <AiOutlineMinus
            size={20}
            className="text-purple-500 transition-all duration-300 animate-pulse"
          />
        )}
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className={`mt-3 pl-5 border-l-2 border-gradient-animated`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SkillComponent;
