import React from "react";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";
import { ImQuotesLeft, ImArrowUpRight2 } from "react-icons/im";

import Icon from "../helper/Icon";
import Button from "../helper/Button";
import Experience from "../helper/Experience";
import { PREVIOUS_WORKS } from "../helper/constant.jsx";

const About = () => {
  return (
    <div className="flex flex-col mt-3 md:mt-10">
      <div className=" md:flex md:flex-col md:justify-center font-body px-5 md:pl-20 mb-8">
        <h1 className=" italic text-md font-semibold mb-2">
          Nice to meet you!
        </h1>
        <h1 className="text-3xl font-extrabold mb-3">ABOUT ME...</h1>
        <div className="md:flex ">
          <div className="md:w-1/3">
            <img
              className="masked-image mx-auto md:mx-0 mb-2"
              src="/assets/portfolio_img2.jpg"
            />
            <h1 className="font-bold text-[24px]  text-center text-transparent tracking-tighter bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-orange-500">
              GAUTAM SHARMA
            </h1>
            <p className="text-md mb-7 text-center">
              <span className="italic font-extrabold ">Software Engineer</span>{" "}
              <span>based in</span>{" "}
              <span className="italic font-extrabold ">Jaipur, India</span>
            </p>
            <a href="/assets/Gautam's Resume.pdf" className="">
              <div className=" text-black text-sm font-medium flex underline justify-center items-center hover:scale-105 transition duration-300 max-w-xs">
                <span>Download Resume!</span>
                <div className="p-1">
                  <BsFillArrowUpRightSquareFill size={16} className="" />
                </div>
              </div>
            </a>
          </div>
          <div className="md:w-[66%] mt-10 md:mt-3 ml-3 md:ml-20 ">
            <div className="flex mb-3 ">
              <div className="">
                <Icon
                  text="Sarvika Technology Pvt. Ltd."
                  textClass="text-[14px]"
                >
                  <MdWorkOutline size={14} className="rounded-full" />
                </Icon>
                <Icon
                  text="futuristic.gautam@gmail.com"
                  textClass="text-[14px]"
                >
                  <AiOutlineMail size={14} className="rounded-full" />
                </Icon>
              </div>
              <div className="ml-8">
                <Icon text="22 yrs" textClass="text-[14px]">
                  <RiProfileLine size={14} className="rounded-full" />
                </Icon>
                <Icon text="Jaipur, India" textClass="text-[14px] ">
                  <GrLocation size={14} className="rounded-full" />
                </Icon>
              </div>
            </div>
            <span className="font-bold text-[24px]  text-center text-transparent mb-2 tracking-tighter bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-orange-500">
              Hello there!
            </span>
            <p className="text-justify w-full md:w-[80%] text-md mb-6">
              My name is{" "}
              <span className="text-[#f77358] font-medium">Gautam Sharma</span>,
              A passionate Software Engineer with an insightful year journey in
              <span className="font-medium italic">
                {" "}
                JavaScript development
              </span>
              . My expertise lies in crafting intricate and performant code that
              powers modern web applications. With hands-on experience in
              front-end and back-end technologies, I've delved into the
              intricacies of frameworks like{" "}
              <span className="font-medium">React</span> and{" "}
              <span className="font-medium">Node.js</span>.
            </p>
            <div className="bg-black  w-full md:w-[80%] text-justify mb-4">
              <div className="flex px-3 py-5">
                <ImQuotesLeft
                  size={80}
                  className="text-white ml-2 opacity-40 leading-relaxed"
                />
                <p className=" text-white mx-6 font-custom text-md font-semibold italic ">
                  "Any one can write code that a computer can understand. Good
                  programmers write code that humans can understand."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex text-white bg-gradient-to-r from-purple-500 via-pink-400 to-orange-500 px-5 md:pl-20 py-10 md:items-center md:py-20 font-body">
        <div className="w-full md:w-1/3">
          <h1 className="font-bold text-3xl mb-2">EXPERIENCE</h1>
          <p className=" mb-10 font-light">
            Stepping into the realm of professional accomplishments, my
            experience section paints a vivid picture of my journey . Here's a
            glimpse of my experience.
          </p>
          <a href="/assets/Gautam's Resume.pdf" target="_blank">
            <Button
              text={"Download my resume."}
              divClass={"w-[65%] mx-auto md:mx-0 md:w-[80%]"}
            >
              <ImArrowUpRight2 size={16} />
            </Button>
          </a>
        </div>
        <div className="w-full md:w-[66%] mx-2 md:mx-7">
          {PREVIOUS_WORKS.map((work, index) => {
            return (
              <Experience
                key={index}
                time={work.time}
                company={work.company}
                position={work.position}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
