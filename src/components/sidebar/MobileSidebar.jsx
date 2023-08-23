import React, { useState } from "react";

import Sidebar from "./Sidebar";

const MobileSidebar = ({ width }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeSideBar = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <div className="text-black w-full sticky top-0 shadow-sm bg-transparent z-20 backdrop-blur-[2px]">
        <button className=" text-2xl p-4" onClick={toggleMenuOpen}>
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <>
          <div
            className={`fixed top-0 left-0 h-screen w-screen z-50 transition-transform ease-in-out duration-300 ${
              isMenuOpen
                ? "transform translate-x-0"
                : "transform -translate-x-full"
            }`}
            onClick={closeSideBar}
          ></div>
          <div className={`fixed top-0 left-0 h-screen z-50  `}>
            <Sidebar width={width} closeSideBar={closeSideBar} />
          </div>
        </>
      )}
    </>
  );
};
export default MobileSidebar;
