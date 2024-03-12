import React from "react";

import Button from "../helper/Button";

import { ImArrowUpRight2 } from "react-icons/im";
import { GoMail } from "react-icons/go";
import { IoLogoTwitter } from "react-icons/io";
import { FiInstagram, FiGithub } from "react-icons/fi";

const Home = () => {
  return (
    <div className="mx-auto relative md:flex md:items-center md:justify-center h-full px-4 mt-2 md:mt-0">
      <div className="absolute right-2 top-[10%] md:right-8  md:top-[30%] ">
        <div className="overflow-y-auto sticky top-0 flex flex-col ">
          <a
            href="https://twitter.com/gaush33"
            target="_blank"
            className="mb-3"
          >
            <div className="rounded-full border-[1px] border-gray-300 p-2  group hover:border-sky-600 transition duration-300">
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
            <div className="rounded-full border-[1px] border-gray-300 p-2 group hover:border-[#d3283c] transition duration-300">
              <FiInstagram
                size={14}
                className="group-hover:text-[#ff2d88] transition duration-300"
              />
            </div>
          </a>
          <a href="https://github.com/ZEUS-03" target="_blank" className="mb-3">
            <div className="rounded-full border-[1px] border-gray-300 p-2 group hover:border-[#5bc4f8] transition duration-300">
              <FiGithub
                size={14}
                className="group-hover:text-[#84d9ff] transition duration-300"
              />
            </div>
          </a>
          <div className="h-[80px] border-l-[2px] border-[#9ca3af] ml-4"></div>
        </div>
      </div>
      <div className="font-body relative md:w-1/2 md:px-20 ">
        <img
          loading="lazy"
          src="/assets/Vector.svg"
          alt="Vector"
          className="absolute w-1/4 h-1/4 z-0 left-12"
        />
        <div className="relative z-10">
          <p className="text-5xl font-normal mb-2">
            MY NAME IS <span className="font-extrabold">GAUTAM SHARMA...</span>
          </p>
        </div>

        <p className="text-lg mb-7">
          <span className="italic font-extrabold ">Software Engineer</span>{" "}
          <span>based in</span>{" "}
          <span className="italic font-extrabold ">Jaipur, India</span>
        </p>

        <a href="mailto:futuristic.gautam@gmail.com">
          <Button
            text="Any project idea? Let's collab!"
            divClass={"w-[90%] md:w-[80%]"}
          >
            <ImArrowUpRight2 size={16} className="" />
          </Button>
        </a>
        <div className="flex text-[18px] mb-5">
          <div className="bg-[#f3f3f3] p-1 rounded-full">
            <GoMail size={18} />
          </div>
          <p className="italic font-bold ml-2 ">futuristic.gautam@gmail.com</p>
        </div>
      </div>
      <div className="md:w-1/2">
        <div className="">
          <img
            loading="lazy"
            className="masked-image max-w-[80%] h-auto mx-auto md:mx-2"
            src="/assets/portfolio_img.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
