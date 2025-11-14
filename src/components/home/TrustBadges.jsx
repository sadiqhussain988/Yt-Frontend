import React from "react";
import {
  FaBuilding,
  FaHeartbeat,
  FaIndustry,
  FaMicrochip,
  FaUniversity,
} from "react-icons/fa";

export default function TrustBadges() {
  const sectors = [
    { name: "Global Enterprises", icon: <FaBuilding /> },
    { name: "Healthcare", icon: <FaHeartbeat /> },
    { name: "Manufacturing Leaders", icon: <FaIndustry /> },
    { name: "Technology Firms", icon: <FaMicrochip /> },
    { name: "Financial Institutions", icon: <FaUniversity /> },
  ];

  return (
    <section
      className="relative py-15 md:py-20 bg-gradient-to-b from-[#0A043C] via-[#0B1120] to-[#0A043C]  text-white overflow-hidden overflow-x-hidden"
    >
      {/* Decorative Background Shine */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,200,80,0.15),_transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="bg-amber-400/20 text-amber-400 font-semibold tracking-wider 
          px-4 py-2 rounded-full inline-block mb-4 text-sm md:text-base 
          border border-amber-400/30 backdrop-blur-sm shadow-md shadow-amber-400/20">
            Our Reach
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
            Delivering Solutions Globally
          </h2>

          <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">
            Stream Fetch Plus collaborates with top organizations worldwide—
            empowering them with digital innovation, operational excellence, and
            measurable growth.
          </p>

          <div className="mt-6 w-28 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full shadow-lg shadow-amber-500/40"></div>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 items-center justify-center">
          {sectors.map((sector, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 120}
              className="group flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-3"
            >
              <div className="p-6 rounded-3xl bg-[#0f0c44]/60 backdrop-blur-md border border-amber-400/20 shadow-lg shadow-amber-400/10 group-hover:shadow-amber-400/40 group-hover:border-amber-400/40 transition-all duration-300">
                <div className="text-4xl text-gray-100 group-hover:text-amber-400 transition-all duration-300 drop-shadow-md">
                  {sector.icon}
                </div>
              </div>

              <p className="text-gray-200 font-semibold text-center text-sm md:text-base group-hover:text-amber-400 transition-colors duration-300">
                {sector.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Glow Effects */}
      <div className="absolute top-16 right-24 w-40 h-40 bg-amber-400/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-16 left-24 w-56 h-56 bg-amber-400/10 blur-3xl rounded-full animate-pulse" />
    </section>
  );
}
