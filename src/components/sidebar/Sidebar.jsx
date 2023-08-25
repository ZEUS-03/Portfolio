import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import {
  TiSocialGithub,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import { Link } from "react-router-dom/dist";

const Sidebar = ({ width, position }) => {
  const location = useLocation();

  return (
    <div
      className={`bg-[#141313] ${position} justify-center ${width} items-center text-white top-0 left-0 h-screen p-4`}
    >
      <h1 className="font-semibold font-custom text-2xl mt-5 mb-5 mx-4">
        Gauti.
      </h1>
      <div className="flex flex-col text-md font-body mx-4 py-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `my-3 w-auto ${
              isActive ? "font-extrabold transition-transform duration-300" : ""
            } `
          }
        >
          <span className="inline-block pr-1 relative z-10">
            HOME
            {location.pathname === "/" && (
              <span className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-purple-500 to-orange-500 scale-x-100 transition-transform duration-300 z-[-1]"></span>
            )}
          </span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `my-3 w-auto ${
              isActive
                ? "font-extrabold  transition-transform duration-300"
                : ""
            } `
          }
        >
          <span className="inline-block pr-1 relative z-10">
            ABOUT
            {location.pathname === "/about" && (
              <span className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-purple-500 to-orange-500 scale-x-100 transition-transform duration-300 z-[-1]"></span>
            )}
          </span>
        </NavLink>
        <NavLink
          to="/work"
          className={({ isActive }) =>
            `my-3 w-auto ${
              isActive
                ? "font-extrabold  transition-transform duration-300"
                : ""
            } `
          }
        >
          <span className="inline-block pr-1 relative z-10">
            WORK
            {location.pathname === "/work" && (
              <span className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-purple-500 to-orange-500 scale-x-100 transition-transform duration-300 z-[-1]"></span>
            )}
          </span>
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            `my-3 w-auto ${
              isActive
                ? "font-extrabold  transition-transform duration-300"
                : ""
            } `
          }
        >
          <span className="inline-block pr-1 relative z-10">
            SKILLS
            {location.pathname === "/skills" && (
              <span className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-purple-500 to-orange-500 scale-x-100 transition-transform duration-300 z-[-1]"></span>
            )}
          </span>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `my-3 w-auto ${
              isActive ? "font-extrabold transition-transform duration-300" : ""
            } `
          }
        >
          <span className="inline-block pr-1 relative z-10">
            CONTACT
            {location.pathname === "/contact" && (
              <span className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-purple-500 to-orange-500 scale-x-100 transition-transform duration-300 z-[-1]"></span>
            )}
          </span>
        </NavLink>
      </div>
      <div className="absolute bottom-5 left-5 text-left pb-4">
        <div className="flex flex-col mx-4  justify-start items-start">
          <Link
            to={"https://twitter.com/gaush33"}
            className=" rounded-full p-1 mb-2 group  bg-white hover:bg-sky-500 transition duration-300"
            target="_blank"
            rel="noreferrer"
          >
            <TiSocialTwitter
              size={22}
              className="filter invert group-hover:filter-none "
            />
          </Link>
          <Link
            to={"https://github.com/ZEUS-03"}
            className="bg-white rounded-full p-1 mb-2 group hover:bg-[#6109d1] transition duration-300 "
            target="_blank"
            rel="noreferrer"
          >
            <TiSocialGithub
              size={22}
              className="filter invert group-hover:filter-none"
            />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/gautam-sharma33/"}
            className="bg-white rounded-full p-1 mb-2 group hover:bg-[#126bc4] hover:text-white transition duration-300"
            target="_blank"
            rel="noreferrer"
          >
            <TiSocialLinkedin
              size={22}
              className="filter invert group-hover:filter-none"
            />
          </Link>
        </div>
        <div className="text-[12px] mx-4 mt-5">
          <p>
            Copyright &copy;2023 Gautam Sharma. <br /> All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
