import React from "react";
import AboutMe from "../components/about/AboutMe";
import TeamAbout from "../components/about/TeamAbout";
import AboutHero from "../components/about/AboutHero";
import FAQAbout from "../components/about/FAQAbout";

function About() {
  return (
    <div>
      <AboutHero />
      <AboutMe />
      <TeamAbout />
      <FAQAbout />
    </div>
  );
}

export default About;
