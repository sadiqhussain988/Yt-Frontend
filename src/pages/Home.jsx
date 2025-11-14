import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/home/Hero";
import TrustBadges from "../components/home/TrustBadges";
import ResultsMetrics from "../components/home/ResultMatrics";
import ValueProposition from "../components/home/ValueProposition";
import HowItWorks from "../components/home/HowItWorks";


export default function Home() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      offset: 100 
    });
  }, []);

  return (
    <div className="bg-white overflow-x-hidden text-gray-900">
      <Hero/>
      <TrustBadges />
      <ResultsMetrics />
      <ValueProposition />
      <HowItWorks />
    </div>
  );
}