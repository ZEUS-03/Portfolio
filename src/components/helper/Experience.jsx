import React from "react";

const Experience = ({
  time,
  company,
  position,
  url,
  tools,
  responsibilities,
}) => {
  return (
    <div className="border-b-[0.5px] border-opacity-30 px-5 py-3 mb-10 border-white">
      <div className="flex justify-between text-sm font-medium mb-3">
        <h2 className="italic">{time}</h2>
        <a
          href={url}
          target="_blank"
          className="hover:scale-105 transition ease-in-out duration-300 hover:shadow-xl"
        >
          <h2 className="">{company}</h2>
        </a>
      </div>
      <h1 className="text-2xl font-bold">{position}</h1>
      <div className="mt-2">
        <h3 className="text-lg font-semibold">{tools}</h3>
        <ul className="list-disc pl-5 mt-2">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="text-sm">
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
