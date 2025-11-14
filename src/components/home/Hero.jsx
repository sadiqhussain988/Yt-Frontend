import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { FaArrowRight, FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
  const slides = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
      title: "Empowering Growth Through Innovation",
      description:
        "We’re a passionate team of thinkers, creators, and problem-solvers dedicated to helping businesses grow through innovative digital solutions and lasting partnerships.",
      ctaPrimary: "/services",
      ctaSecondary: "/contact",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=1400&q=80",
      title: "Driving Innovation to Shape a Smarter Future",
      description:
        "At Codes Thinker, we believe in leveraging technology and creativity to craft intelligent digital experiences that inspire and connect people worldwide.",
      ctaPrimary: "/services",
      ctaSecondary: "/contact",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80",
      title: "Delivering Digital Excellence Globally",
      description:
        "Our skilled professionals deliver global digital solutions built on trust, transparency, and innovation — helping your business grow smarter every day.",
      ctaPrimary: "/services",
      ctaSecondary: "/contact",
    },
  ];

  return (
    <section
      className="relative w-full h-screen pt-5 overflow-hidden overflow-x-hidden text-white"
      aria-label="Hero Section"
    >
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#000]/80 via-[#000]/70 to-[#000]/85 backdrop-blur-sm" />

              {/* Hero Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-6">
                <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-4 md:px-5 py-2 rounded-full text-sm font-semibold mb-5 border border-amber-300/40 backdrop-blur-sm">
                  <FaLightbulb />
                  <span>Innovation Driven</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-amber-400 drop-shadow-lg">
                  {slide.title}
                </h1>

                <p className="max-w-3xl text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-row sm:flex-row gap-4 justify-center">
                  {/* Primary Button */}
                  <Link to={slide.ctaPrimary}>
                    <button
                      className="group bg-amber-500 hover:bg-amber-400 px-6 py-3 rounded-full font-semibold text-[#0A043C] text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-amber-400/40"
                      type="button"
                    >
                      Services
                      <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>

                  {/* Secondary Button */}
                  <Link to={slide.ctaSecondary}>
                    <button
                      className="group border-2 border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-[#0A043C] px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
                      type="button"
                    >
                      Contact
                      <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
