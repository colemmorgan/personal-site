import React from "react";
import Skills from "./Skills";
import Education from "./Education";
import Bio from "./Bio";

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <div className="pt-12 pb-4 sm:pb-12  md:px-6 lg:px-16 relative" id="about">
      <Bio/>
      <Skills/>
      <Education/>
    </div>
  );
};
export default About;



