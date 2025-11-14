import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserAlt, FaQuoteLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out", offset: 100 });
  }, []);

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-[#0A043C] via-[#0B1120] to-[#0A043C] text-white overflow-x-hidden overflow-y-hidden py-15 md:py-20"
    >
      {/* Floating Glow Accents */}
      <div className="absolute top-10 right-20 w-40 h-40 bg-amber-400/20 blur-3xl animate-pulse rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-52 h-52 bg-yellow-400/10 blur-3xl animate-pulse rounded-full"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-6 md:px-10">
        {/* Left Content */}
        <div className="relative z-10 w-full lg:w-1/2 space-y-6">
          {/* Section Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <FaUserAlt
                className="text-amber-400 text-2xl animate-pulse"
                data-aos="zoom-in"
              />
              <h2
                className="text-3xl sm:text-4xl font-extrabold text-amber-400 tracking-wide"
                data-aos="fade-right"
              >
                About Me
              </h2>
            </div>
            <div
              className="h-1 w-20 bg-gradient-to-r from-amber-400 to-yellow-400 rounded"
              data-aos="fade-left"
            ></div>
          </div>

          {/* Description */}
          <p
            className="text-gray-300 text-base sm:text-lg leading-relaxed drop-shadow-md"
            data-aos="fade-up"
          >
            I am a dedicated creative professional with a passion for blending
            technology and design. My mission is to help businesses tell their
            stories through intuitive digital experiences that inspire and connect
            with people. I craft solutions that not only look stunning but function flawlessly.
          </p>

          {/* Quote Block */}
          <div
            className="mt-8 p-6 border-l-4 border-amber-400 bg-[#1A1A3C]/70 rounded-xl shadow-lg hover:shadow-amber-400/40 transition-all duration-500"
            data-aos="zoom-in-up"
          >
            <FaQuoteLeft className="text-amber-400 text-2xl mb-3" />
            <p className="text-gray-200 italic">
              “Design is not just what it looks like and feels like. Design is how it works.”
            </p>
          </div>

          {/* Button */}
          <div className="mt-8 flex items-center gap-3" data-aos="fade-up" data-aos-delay="300">
            <Link to="/">
              <button className="flex items-center gap-2 px-6 py-3 bg-amber-500 text-[#0A043C] rounded-full font-semibold hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-amber-400/50 transform hover:scale-105">
                Know More <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="relative w-full lg:w-1/2"
          data-aos="fade-left"
        >
          <img
            className="h-64 sm:h-80 md:h-[450px] lg:h-full w-full object-cover border-2 border-amber-500 rounded-tl-[2rem] rounded-br-[2rem] shadow-lg transition-transform duration-700 hover:scale-105"
            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.1.0&auto=format&fit=crop&q=80"
            alt="About Me"
            loading="lazy"
          />

          {/* Floating Mini Accent */}
          <div className="absolute -top-10 -right-10 w-16 h-16 bg-amber-400/20 blur-2xl rounded-full animate-pulse"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-yellow-400/10 blur-3xl rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
