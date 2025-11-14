import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import haseen from "../../assets/sa.jpg";
import usama from "../../assets/swsw.jpg";
import "aos/dist/aos.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const TeamAbout = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out", offset: 100 });
  }, []);

  const team = [
    {
      name: "Muhammad Usama",
      title: "Frontend Developer",
      image: usama,
      description:
        "Passionate about crafting clean, modern, and responsive interfaces using React, Tailwind CSS, and JavaScript. Always focused on delivering seamless user experiences.",
    },
    {
      name: "Haseen Khan",
      title: "Backend Developer",
      image: haseen,
      description:
        "Specializes in building fast, secure, and scalable server-side applications using Node.js, Express, and MongoDB. Passionate about clean architecture and API optimization.",
    },
  ];

  return (
    <section
      id="team"
      className="relative py-15 md:py-20 px-4 md:px-6 sm:px-10 bg-gradient-to-b from-[#0A043C] via-[#0B0A3A] to-[#12007E] text-white overflow-x-hidden overflow-y-hidden border-t border-blue-200"

    >
      {/* Floating Glows */}
      <div className="absolute top-10 right-20 w-40 h-40 bg-amber-400/20 blur-3xl animate-pulse rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-yellow-400/10 blur-3xl animate-pulse rounded-full"></div>

      {/* Section Header */}
      <div className="text-center mb-16">
        <h2
          className="text-4xl sm:text-5xl font-extrabold mb-4"
          data-aos="zoom-in"
        >
          Meet Our <span className="text-amber-400">Experts</span>
        </h2>
        <p
          className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed"
          data-aos="fade-up"
        >
          Our dedicated professionals are committed to delivering exceptional
          results and driving innovation forward with creativity and precision.
        </p>
      </div>

      {/* Team Cards */}
      <div className="grid sm:grid-cols-2 gap-10">
        {team.map((member, index) => (
          <div
            key={index}
            className="group relative bg-[#0F0A5B]/50 border border-[#1a1466] rounded-3xl shadow-lg hover:shadow-amber-400/40 transition-all duration-500 overflow-hidden flex flex-col sm:flex-row"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            {/* Image Section */}
            <div
              className="relative h-64 sm:h-auto sm:w-80 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url(${member.image})` }}
              title={member.name}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
            </div>

            {/* Content Section */}
            <div className="p-6 sm:p-8 flex flex-col justify-between w-full sm:w-2/3">
              <div>
                <h3
                  className="text-2xl font-bold text-amber-400 mb-1"
                  data-aos="fade-up"
                >
                  {member.name}
                </h3>
                <p
                  className="text-sm text-gray-400 mb-4 uppercase tracking-wide"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  {member.title}
                </p>
                <p
                  className="text-gray-300 leading-relaxed"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  {member.description}
                </p>
              </div>

              {/* Social Icons */}
              <div
                className="flex gap-5 mt-5 justify-center sm:justify-start"
                data-aos="flip-up"
                data-aos-delay="300"
              >
                <Link
                  to="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-amber-400/40 rounded-full p-3 text-amber-400 hover:text-white hover:bg-amber-500 hover:border-amber-500 shadow-md hover:shadow-amber-400/50 transform hover:scale-110 transition-all duration-300"
                >
                  <FaFacebookF size={18} />
                </Link>

                <Link
                  to="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-amber-400/40 rounded-full p-3 text-amber-400 hover:text-white hover:bg-sky-500 hover:border-sky-500 shadow-md hover:shadow-sky-400/50 transform hover:scale-110 transition-all duration-300"
                >
                  <FaTwitter size={18} />
                </Link>

                <Link
                  to="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-amber-400/40 rounded-full p-3 text-amber-400 hover:text-white hover:bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:border-pink-500 shadow-md hover:shadow-pink-400/50 transform hover:scale-110 transition-all duration-300"
                >
                  <FaInstagram size={18} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamAbout;
