import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import About from "./components/routes/About";
import Blog from "./components/routes/Blog";
import Home from "./components/routes/Home";
import Contact from "./components/routes/Contact";
import MobileSidebar from "./components/sidebar/MobileSidebar";
import Work from "./components/routes/Work";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Router>
      <div className={`${windowWidth > 768 ? "flex" : ""} min-h-screen`}>
        {windowWidth > 768 ? (
          <Sidebar width={"w-[20%]"} position={"sticky"} />
        ) : (
          <MobileSidebar width={"w-75"} />
        )}

        <div className={`${windowWidth > 768 ? "flex-1" : ""}  z-0`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
