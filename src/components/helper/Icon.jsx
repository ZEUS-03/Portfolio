import React from "react";

const Icon = ({ children, text, textClass, divClass }) => {
  return (
    <div className={`flex mb-5 ${divClass}`}>
      {children}
      <p className={`italic font-bold ml-2 ${textClass}`}>{text}</p>
    </div>
  );
};

export default Icon;
