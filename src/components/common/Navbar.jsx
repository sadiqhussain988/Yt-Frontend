import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/sfplogo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#040129]/80 shadow-lg transition-all duration-300 border-b border-white/10">
      <div className="mx-auto max-w-[1600px] px-6">
        <div className="flex justify-between items-center h-16">

          {/* === Logo Section (Hover to Show Image) === */} <div className="relative w-[35%] sm:w-[15%] group overflow-hidden"> <div className="absolute inset-0 w-0 flex items-center justify-center transition-all ease-in duration-500 group-hover:w-full group-hover:h-full"> <a href="/" data-discover="true"> <img alt="Codes Thinker Logo" className="h-20 w-full" src={logo} /> </a> </div> <div className="flex flex-col group-hover:translate-x-[120%] transition-all ease-in justify-center duration-400"> <h1 className="text-amber-400 text-3xl md:text-[3rem] leading-none"> SFP </h1> </div> </div>

          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-lg font-medium transition-all duration-300 after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#01b5e8] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ${isActive ? "text-[#01b5e8]" : "text-white hover:text-[#01b5e8]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:block">
            <NavLink
              to="/"
              className="px-6 py-2 font-semibold rounded-full bg-gradient-to-r from-[#01b5e8] to-[#0a00b5] text-white shadow-lg hover:shadow-[#01b5e8]/40 hover:scale-105 transition-all duration-300"
            >
              Get Started
            </NavLink>
          </div>

          <button
            className="md:hidden text-white hover:text-[#01b5e8] transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#040129]/90 border-t border-white/10 shadow-xl animate-slide-down px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 text-center rounded-lg text-base font-medium transition-all duration-300 shadow-inner ${isActive
                  ? "bg-[#01b5e8]/20 text-[#01b5e8]"
                  : "text-white hover:bg-[#01b5e8]/10 hover:text-[#01b5e8]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <NavLink
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-4 py-3 rounded-lg text-base font-semibold text-white bg-gradient-to-r from-[#01b5e8] to-[#0a00b5] shadow-lg text-center hover:scale-105 transition-all duration-300"
          >
            Get Started
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;