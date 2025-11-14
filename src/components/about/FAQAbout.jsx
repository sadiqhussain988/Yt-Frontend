import React, { useState, useEffect } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "How secure is my insurance information?",
    answer:
      "We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.",
  },
  {
    question: "How can I customize my insurance coverage?",
    answer:
      "Our insurance plans are customizable. You can tailor your coverage to meet your specific needs and budget.",
  },
  {
    question: "Is there a waiting period for insurance claims?",
    answer:
      "There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details.",
  },
  {
    question: "Do you offer 24/7 customer support?",
    answer:
      "Yes, our dedicated support team is available 24/7 to help with claims, policy questions, and any emergencies you may face.",
  },
  {
    question: "Can I manage my policy online?",
    answer:
      "Absolutely! You can easily manage your policy, file claims, and track updates through our secure online portal.",
  },
];

const FAQAbout = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out", offset: 100 });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-15 md:py-20 px-5 md:px-8 bg-gradient-to-b from-[#0A043C] via-[#0B0A3A] to-[#12007E] text-white overflow-x-hidden"
    >
      {/* Floating Glows */}
      <div className="absolute top-10 right-20 w-40 h-40 bg-amber-400/20 blur-3xl animate-pulse rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-yellow-400/10 blur-3xl animate-pulse rounded-full"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start relative z-10">
        {/* Left Content */}
        <div
          className="flex flex-col basis-1/2"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-400 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-300 text-base leading-relaxed max-w-md">
            Find answers to common questions about our insurance policies and
            services. We’re committed to helping you make confident and informed
            decisions every step of the way.
          </p>
        </div>

        {/* Right Content - Accordion */}
        <ul
          className="basis-1/2 bg-[#0F0A5B]/50 rounded-3xl shadow-2xl border border-[#1a1466] divide-y divide-[#1a1466]"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          {faqs.map((faq, index) => (
            <li key={index} className="transition-all duration-500">
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                className="flex justify-between items-center w-full py-5 px-6 text-left font-semibold text-lg text-white hover:text-amber-400 transition-colors duration-300"
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <HiMinus className="w-6 h-6 text-amber-400 transition-transform duration-300" />
                ) : (
                  <HiPlus className="w-6 h-6 text-gray-400 transition-transform duration-300" />
                )}
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-60" : "max-h-0"
                }`}
              >
                <div className="pb-5 px-6 text-gray-300 text-base leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQAbout;
