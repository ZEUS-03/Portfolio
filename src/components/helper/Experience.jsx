import React from "react";

const Experience = ({ time, company, position }) => {
  return (
    <div className="border-b-[0.5px] border-opacity-30 px-5 py-3 mb-10 border-white">
      <div className="flex justify-between text-sm font-medium mb-3">
        <h2 className="italic">{time}</h2>
        <h2 className="">{company}</h2>
      </div>
      <h1 className="text-2xl font-bold">{position}</h1>
    </div>
  );
};

export default Experience;
