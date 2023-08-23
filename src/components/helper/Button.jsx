import React from "react";

const Button = ({ text, children, divClass, childClass }) => {
  return (
    <div
      className={`bg-black text-white ${divClass} px-3 py-2 flex mb-10 hover:scale-105 transition duration-300 max-w-xs`}
    >
      {text}
      <div
        className={`p-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto ${childClass}`}
      >
        {children}
      </div>
    </div>
  );
};
export default Button;
