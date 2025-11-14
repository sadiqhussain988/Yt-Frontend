import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import co4 from "../../assets/abouthero.avif";

const AboutHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, offset: 100 });
  }, []);

  return (
    <section className="relative flex flex-col justify-center items-center overflow-hidden bg-[#0A043C] text-white min-h-screen sm:min-h-[96vh] py-20 sm:py-24 overflow-x-hidden">
      {/* Background Image */}
      <img
        src={co4}
        alt="About Us"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0A043C]/90"></div>

      {/* Floating Accent Glows */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-amber-400/20 blur-3xl animate-pulse rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-56 h-56 bg-yellow-400/10 blur-3xl animate-pulse rounded-full"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-3 sm:px-6 md:px-10 max-w-4xl mx-auto flex flex-col items-center justify-center">
        {/* Heading */}
        <h1
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug sm:leading-tight bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg tracking-wide pt-10 md:pt-0"
        >
          Empowering Growth Through Innovation
        </h1>

        {/* Subtext */}
        <p
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-6 text-gray-200 max-w-md sm:max-w-xl text-sm sm:text-base leading-relaxed drop-shadow-md"
        >
          We are a passionate team of thinkers, creators, and problem-solvers
          dedicated to helping businesses grow through innovative digital
          solutions and lasting partnerships.
        </p>

        {/* Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="mt-10 flex flex-row gap-4 justify-center"
        >
          <Link to="/services">
            <button className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-[#0A043C] font-semibold rounded-full shadow-lg hover:shadow-amber-400/50 transition-all duration-300">
              Our Services
            </button>
          </Link>
          <Link to="/contact">
            <button className="px-6 py-3 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-[#0A043C] font-semibold rounded-full shadow-lg hover:shadow-amber-400/50 transition-all duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
