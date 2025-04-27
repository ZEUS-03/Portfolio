import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [state, handleSubmit] = useForm("moqodjek");

  // Animation effect on component mount
  useEffect(() => {
    const animatedElements = document.querySelectorAll(".animate-on-load");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left section - Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-semibold italic text-purple-600 tracking-wider animate-on-load">
                Let's Connect!
              </h2>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight animate-on-load delay-100">
                I'd love to hear from you
              </h1>

              <p className="mt-4 text-lg text-gray-600 animate-on-load delay-200">
                Feel free to reach out for inquiries, collaborations, or any
                software engineering-related discussions.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 animate-on-load delay-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Get in Touch
              </h3>
              <p className="flex items-center text-gray-700 mb-6">
                <svg
                  className="w-5 h-5 mr-3 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span>futuristic.gautam@gmail.com</span>
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-medium text-sm">
                {[
                  {
                    name: "GITHUB",
                    icon: <FaGithub size={18} />,
                    href: "https://github.com/ZEUS-03",
                  },
                  {
                    name: "LINKEDIN",
                    icon: <FaLinkedin size={18} />,
                    href: "https://www.linkedin.com/in/gautam-sharma33",
                  },
                  {
                    name: "TWITTER",
                    icon: <FaTwitter size={18} />,
                    href: "https://twitter.com/gaush33",
                  },
                  {
                    name: "INSTAGRAM",
                    icon: <FaInstagram size={18} />,
                    href: "https://instagram.com/hey_its_gautam_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
                  },
                ].map((platform, index) => (
                  <a
                    key={index}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center md:justify-start space-x-2 p-2 hover:text-purple-600 transition-colors duration-200 link-hover-effect"
                  >
                    <span className="text-purple-500">{platform.icon}</span>
                    <span>{platform.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right section - Contact form */}
          <div className="bg-gradient-to-r from-purple-500 via-pink-400 to-orange-500 rounded-xl shadow-xl overflow-hidden animate-on-load delay-400">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Start a Project
              </h2>

              {state.succeeded ? (
                <div className="bg-white bg-opacity-20 p-6 rounded-lg animate-on-load">
                  <p className="text-white text-lg font-medium">
                    Thanks for your message!
                  </p>
                  <p className="text-white opacity-90 mt-2">
                    I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="animate-on-load delay-100">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        autoComplete="off"
                        className="mt-1 bg-transparent text-white w-full border-b-2 border-white focus:outline-none focus:border-white px-1 py-2"
                        required
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                        className="text-red-200 text-sm mt-1"
                      />
                    </div>

                    <div className="animate-on-load delay-200">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        autoComplete="off"
                        className="mt-1 bg-transparent text-white w-full border-b-2 border-white focus:outline-none focus:border-white px-1 py-2"
                        required
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="text-red-200 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div className="animate-on-load delay-300">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      autoComplete="off"
                      className="mt-1 bg-transparent text-white w-full border-b-2 border-white focus:outline-none focus:border-white px-1 py-2 resize-none"
                      required
                    ></textarea>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-red-200 text-sm mt-1"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-purple-500 transition-all duration-200 animate-on-load delay-400"
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
