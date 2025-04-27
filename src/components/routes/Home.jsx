import React, { useEffect, useState } from "react";

import Button from "../helper/Button";

import { ImArrowUpRight2 } from "react-icons/im";
import { GoMail } from "react-icons/go";
import { IoLogoTwitter } from "react-icons/io";
import { FiInstagram, FiGithub } from "react-icons/fi";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Animate elements on page load
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <div className="mx-auto relative md:flex md:items-center md:justify-center h-full px-4 mt-2 md:mt-0 animate-fadeIn">
      {/* Decorative elements */}
      <div className="absolute left-10 top-20 w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-300 animate-float opacity-60"></div>
      <div className="absolute right-32 bottom-20 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-teal-300 animate-float-delayed opacity-70"></div>
      <div className="absolute left-1/4 bottom-16 w-4 h-4 rounded-full bg-gradient-to-r from-orange-400 to-amber-300 animate-pulse opacity-70"></div>

      <div className=" absolute right-2 top-[10%] md:right-8  md:top-[30%] ">
        <div className=" group hover:scale-110 transition-transform duration-300overflow-y-auto sticky top-0 flex flex-col ">
          <a
            href="https://twitter.com/gaush33"
            target="_blank"
            className="mb-3 "
          >
            <div className="rounded-full border-[1px] border-gray-300 p-2 group hover:border-sky-600 transition duration-300 animate-float">
              <IoLogoTwitter
                size={14}
                className="group-hover:text-sky-500 transition duration-300"
              />
            </div>
          </a>
          <a
            href="https://instagram.com/hey_its_gautam_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
            target="_blank"
            className="mb-3"
          >
            <div className="rounded-full border-[1px] border-gray-300 p-2 group hover:border-[#d3283c] transition duration-300 animate-float">
              <FiInstagram
                size={14}
                className="group-hover:text-[#ff2d88] transition duration-300"
              />
            </div>
          </a>
          <a href="https://github.com/ZEUS-03" target="_blank" className="mb-3">
            <div className="rounded-full border-[1px] border-gray-300 p-2 group hover:border-[#5bc4f8] transition duration-300 animate-float">
              <FiGithub
                size={14}
                className="group-hover:text-[#84d9ff] transition duration-300"
              />
            </div>
          </a>
          <div className="h-[80px] border-l-[2px] border-[#9ca3af] ml-4"></div>
        </div>
      </div>
      <div className="font-body relative md:w-1/2 md:px-20">
        <img
          loading="lazy"
          src="/assets/Vector.svg"
          alt="Vector"
          className={`absolute w-1/4 h-1/4 z-0 left-12 transition-all duration-1000 transform ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        />
        <div
          className={`relative z-10 transition-all duration-1000 delay-300 transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-5xl font-normal mb-2">
            MY NAME IS <span className="font-extrabold">GAUTAM SHARMA...</span>
          </p>
        </div>

        <p
          className={`text-lg mb-7 transition-all duration-1000 delay-500 transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="italic font-extrabold">Software Engineer</span>{" "}
          <span>based in</span>{" "}
          <span className="italic font-extrabold">Jaipur, India</span>
        </p>

        <div
          className={`transition-all duration-1000 delay-700 transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a href="mailto:futuristic.gautam@gmail.com">
            <Button
              text="Any project idea? Let's collab!"
              divClass={"w-[90%] md:w-[80%] hover:scale-105 transition-all"}
            >
              <ImArrowUpRight2 size={16} className="" />
            </Button>
          </a>
        </div>

        <div
          className={`flex text-[18px] mb-5 transition-all duration-1000 delay-900 transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-[#f3f3f3] p-1 rounded-full">
            <GoMail size={18} />
          </div>
          <a
            href="mailto:futuristic.gautam@gmail.com"
            className="italic font-bold ml-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-400 hover:to-orange-500 transition-all duration-300"
          >
            futuristic.gautam@gmail.com
          </a>
        </div>
      </div>
      <div className="md:w-1/2">
        <div className="">
          <img
            loading="lazy"
            className="masked-image max-w-[80%] h-auto mx-auto md:mx-2 transition-all duration-700 opacity-0 scale-95"
            onLoad={(e) => {
              e.target.style.opacity = 1;
              e.target.style.transform = "scale(1)";
            }}
            src="/assets/portfolio_img.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
