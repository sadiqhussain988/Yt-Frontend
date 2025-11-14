import { useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import "aos/dist/aos.css";
import logo from "../../assets/sfplogo.png";

const Footer = () => {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 900,
        once: true,
        offset: 120,
      });
    });
  }, []);

  const companyLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  const services = [
    "Youtube Downloader",
    "TikTok Downloader",
    "Facebook Downloader",
  ];

  const contactInfo = [
    { icon: <FaPhoneAlt />, text: "+92 320 0639360" },
    { icon: <FiMail />, text: "usamaupwork0003@gmail.com" },
    {
      icon: <GoLocation />,
      text: "3 Marla Housing Scheme, Islami Colony, Bahawalpur",
    },
  ];

  const socialLinks = [
    { href: "https://facebook.com", icon: <FaFacebookF /> },
    { href: "https://twitter.com", icon: <FaTwitter /> },
    { href: "https://instagram.com", icon: <FaInstagram /> },
    { href: "https://linkedin.com", icon: <FaLinkedinIn /> },
  ];

  return (
    <footer className="relative bg-[#04002b] text-white pt-7 md:pt-14 pb-4 md:pb-7 px-6 md:px-20 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00c8ff2a] via-[#6a00ff1f] to-transparent blur-3xl opacity-40 pointer-events-none"></div>

      {/* Main Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand + Social */}
        <div data-aos="fade-up" className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="h-24 w-auto drop-shadow-xl hover:scale-105 transition duration-300"
            />
          </div>

          <p className="text-gray-300 leading-relaxed text-sm">
            We provide fast and reliable media tools crafted by skilled
            developers—making your digital experience smoother and smarter.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center bg-[#0d0a4a] rounded-full 
                           border border-white/20 text-white text-lg shadow-md 
                           hover:shadow-[#00eaff] hover:text-cyan-400 
                           transition-all duration-300 hover:-translate-y-1"
                data-aos="zoom-in"
                data-aos-delay={200 + i * 100}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Company Links */}
        <div data-aos="fade-up" data-aos-delay="150">
          <h3 className="text-xl font-semibold mb-4 relative inline-block 
                         after:absolute after:left-0 after:-bottom-1 after:w-10 after:h-[3px] after:bg-cyan-400">
            Company
          </h3>
          <ul className="space-y-3 text-gray-300">
            {companyLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="group relative inline-block hover:text-cyan-400 transition duration-300"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div data-aos="fade-up" data-aos-delay="250">
          <h3 className="text-xl font-semibold mb-4 relative inline-block 
                         after:absolute after:left-0 after:-bottom-1 after:w-10 after:h-[3px] after:bg-cyan-400">
            Services
          </h3>
          <ul className="space-y-3 text-gray-300">
            {services.map((service, i) => (
              <li key={i}>
                <a
                  href="/services"
                  className="group relative inline-block hover:text-cyan-400 transition duration-300"
                >
                  {service}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div data-aos="fade-up" data-aos-delay="350">
          <h3 className="text-xl font-semibold mb-4 relative inline-block 
                         after:absolute after:left-0 after:-bottom-1 after:w-10 after:h-[3px] after:bg-cyan-400">
            Contact Info
          </h3>
          <ul className="space-y-5 text-gray-300">
            {contactInfo.map((c, i) => (
              <li
                key={i}
                className="flex items-start gap-4 group hover:translate-x-1 transition duration-300"
              >
                <div className="bg-[#0d0a4a] p-2 rounded-full border border-white/10 shadow-md text-cyan-300 group-hover:text-white">
                  {c.icon}
                </div>
                <p className="text-sm leading-relaxed">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-16 text-gray-400 text-sm border-t border-white/10 pt-6">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">Stream Fetch Plus</span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
