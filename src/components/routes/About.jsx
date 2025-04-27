// First, create a custom hook to handle intersection observation
// Create a new file called useScrollAnimation.js in your hooks folder

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
import useScrollAnimation from "../../hooks/useScrollAnimation.jsx"; // Import the hook

const About = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [imageRef, imageVisible] = useScrollAnimation();
  const [infoRef, infoVisible] = useScrollAnimation();
  const [quoteRef, quoteVisible] = useScrollAnimation();
  const [expHeaderRef, expHeaderVisible] = useScrollAnimation();
  const [expContentRef, expContentVisible] = useScrollAnimation();

  return (
    <div className="flex flex-col mt-3 md:mt-10 animate-fadeIn">
      <div className="md:flex md:flex-col md:justify-center font-body px-5 md:pl-20 mb-8">
        <div
          ref={headerRef}
          className={`transition-all duration-700 transform ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="italic text-md font-semibold mb-2">
            Nice to meet you!
          </h1>
          <h1 className="text-3xl font-extrabold mb-3">ABOUT ME...</h1>
        </div>
        <div className="md:flex">
          <div
            ref={imageRef}
            className={`md:w-1/3 transition-all duration-700 transform ${
              imageVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <img
              className="masked-image mx-auto md:mx-0 mb-2 transition-all duration-700 opacity-0 scale-95"
              loading="lazy"
              onLoad={(e) => {
                e.target.style.opacity = 1;
                e.target.style.transform = "scale(1)";
              }}
              src="/assets/portfolio_img2.webp"
            />
            <h1 className="font-bold text-[24px] text-center text-transparent tracking-tighter bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-orange-500">
              GAUTAM SHARMA
            </h1>
            <p className="text-md mb-7 text-center">
              <span className="italic font-extrabold">Software Engineer</span>{" "}
              <span>based in</span>{" "}
              <span className="italic font-extrabold">Jaipur, India</span>
            </p>
            <a href="/assets/Gautam's Resume.pdf" target="_blank" className="">
              <div className="text-black text-sm font-medium flex underline justify-center items-center hover:scale-105 transition duration-300 max-w-xs">
                <span>Download Resume!</span>
                <div className="p-1">
                  <BsFillArrowUpRightSquareFill size={16} className="" />
                </div>
              </div>
            </a>
          </div>
          <div
            ref={infoRef}
            className={`md:w-[66%] mt-10 md:mt-3 ml-3 md:ml-20 transition-all duration-700 transform ${
              infoVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="flex mb-3">
              <div className="">
                <a href="https://www.sarvika.com/" className="" target="_blank">
                  <Icon
                    text="Sarvika Technology Pvt. Ltd."
                    textClass="text-[14px] text-black-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-400 hover:to-orange-500 transition-all duration-500 ease-in-out"
                  >
                    <MdWorkOutline size={14} className="rounded-full" />
                  </Icon>
                </a>
                <a
                  href="mailto:futuristic.gautam@gmail.com"
                  className=""
                  target="_blank"
                >
                  <Icon
                    text="futuristic.gautam@gmail.com"
                    textClass="text-[14px]"
                  >
                    <AiOutlineMail size={14} className="rounded-full" />
                  </Icon>
                </a>
              </div>
              <div className="ml-8">
                <Icon text="24 years" textClass="text-[14px]">
                  <RiProfileLine size={14} className="rounded-full" />
                </Icon>
                <Icon text="Jaipur, India" textClass="text-[14px]">
                  <GrLocation size={14} className="rounded-full" />
                </Icon>
              </div>
            </div>
            <span className="font-bold text-[24px] text-center text-transparent mb-2 tracking-tighter bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-orange-500">
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
            <div
              ref={quoteRef}
              className={`bg-black w-full rounded-xl md:w-[80%] text-justify mb-6 shadow-xl p-6 transition-all duration-700 transform ${
                quoteVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center px-4 py-6">
                <ImQuotesLeft
                  size={80}
                  className="text-orange-500 ml-3 opacity-80 leading-relaxed"
                />
                <p className="text-white mx-6 font-custom text-lg font-semibold italic">
                  Anyone can write code that a computer can understand. Good
                  programmers write code that humans can understand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex text-white bg-gradient-running px-5 md:pl-20 py-10 md:items-center md:py-20 font-body">
        <div
          ref={expHeaderRef}
          className={`md:w-1/3 transition-all duration-700 transform ${
            expHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="font-bold text-3xl mb-2">EXPERIENCE</h1>
          <p className="mb-10 font-light">
            Stepping into the realm of professional accomplishments, my
            experience section paints a vivid picture of my journey. Here's a
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
        <div
          ref={expContentRef}
          className={`w-full md:w-[66%] mx-2 md:mx-7 transition-all duration-700 transform ${
            expContentVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          {PREVIOUS_WORKS.map((work, index) => {
            return (
              <Experience
                key={index}
                time={work.time}
                company={work.company}
                position={work.position}
                url={work.url}
                tool={work.tools}
                responsibilities={work.responsibilities}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
