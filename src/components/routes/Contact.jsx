import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Button from "../helper/Button";
import { ImArrowUpRight2 } from "react-icons/im";

const Contact = () => {
  const [state, handleSubmit] = useForm("moqodjek");

  return (
    <div className="md:flex h-screen items-center">
      <div className="flex flex-col mt-3  w-full md:w-1/2 md:mt-10 font-body px-5 md:pl-20 mb-8">
        <h1 className=" italic text-md font-semibold mb-2">Contact</h1>
        <h1 className="text-3xl font-extrabold mb-12">REACH OUT TO ME</h1>
        <p className="font-normal text-[16px] pr-2 mb-14">
          Feel free to contact me through the provided channels for inquiries,
          collaborations, or any software engineering-related discussions.
        </p>

        <p className="text-xl font-bold mb-5">futuristic.gautam@gmail.com</p>

        <div className="flex justify-between font-medium text-sm ">
          <a href="https://github.com/ZEUS-03" className="" target="_blank">
            <span className="link-underline link-underline-black">GITHUB</span>
          </a>
          <a href="https://www.linkedin.com/in/gautam-sharma33" target="_blank">
            <span className="link-underline link-underline-black">
              LINKEDIN
            </span>
          </a>
          <a href="https://twitter.com/gaush33" target="_blank">
            <span className="link-underline link-underline-black">TWITTER</span>
          </a>
          <a
            href="https://instagram.com/hey_its_gautam_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
            target="_blank"
          >
            <span className="link-underline link-underline-black">
              INSTAGRAM
            </span>
          </a>
        </div>
      </div>
      <div className="text-white flex flex-col bg-gradient-to-r from-purple-500 via-pink-400 to-orange-500 p-10 mx-5 md:w-1/2 h-auto">
        <h1 className="font-bold text-2xl mb-5">ANY PROJECT?</h1>
        {state.succeeded ? (
          <p className="font-light">
            Thanks for your interest! Will contact you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="md:flex mb-0 md:mb-4">
              <div className="mb-4 md:mb-0">
                <label htmlFor="name" className="text-sm">
                  Name
                </label>
                <br />
                <input
                  id="name"
                  type="text"
                  className="bg-transparent w-full md:w-auto border-b-2 border-white focus:outline-none"
                  name="name"
                  autoComplete="off"
                />
              </div>
              <div className="ml-0  md:ml-4 mb-4 md:mb-0">
                <label htmlFor="email" className="text-sm">
                  Email Address
                </label>
                <br />
                <input
                  id="email"
                  type="email"
                  className="bg-transparent w-full md:w-auto border-b-2 border-white focus:outline-none"
                  name="email"
                  autoComplete="off"
                />
              </div>
            </div>

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <br />
            <input
              type="text"
              id="message"
              className="bg-transparent w-full md:w-[92%] border-b-2 border-white focus:outline-none"
              name="message"
              autoComplete="off"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting} className="mt-10">
              <Button
                text={"Click to submit!"}
                divClass={"w-full hover:shadow-md mb-0"}
                childClass={"ml-2"}
              >
                <ImArrowUpRight2 size={16} />
              </Button>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
