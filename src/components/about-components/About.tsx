import React from "react";
import SplitContainer from "./SplitContainer";
import AnimatedCounter from "../motion-components/AnimatedCounter";
import AnimatedFadeUp from "../motion-components/AnimatedFadeUp";

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <div className="pt-12 pb-4 sm:pb-12  md:px-6 lg:px-16 relative" id="about">
      <SplitContainer left={<BioTab />} right={<Bio />} />
      <SplitContainer left={<SkillsTab />} right={<Skills />} />
      <SplitContainer left={<EducationTab />} right={<Education />} />
    </div>
  );
};
export default About;

const BioTab: React.FC = () => {
  return <h3 className="font-medium text-2xl sm:text-3xl pt-4">About Me</h3>;
};

const Bio: React.FC = () => {
  return (
    <div className="w-full py-6 mb-6">
      <p className="text-sm sm:text-lg lg:text-xl font-semibold leading-relaxed">
        I am a fullstack web developer that creates{" "}
        <span className="text-gradient">beautiful interfaces</span> and
        blazingly fast backends.{" "}
        <span className="font-normal">
          My passion lies in front-end developement, where I focus on creating
          interfaces that flow effortlessly and engage users.
        </span>
      </p>
      <div className="flex mt-10">
        <div className="w-1/3 pr-3  flex flex-col items-center lg:items-start text-center">
          <p className="text-3xl sm:text-4xl nohemi">
            <AnimatedCounter from={200} to={263} />
          </p>
          <p className="mt-1.5 font-light text-xs sm:text-base">Contributions in 2024</p>
        </div>
        <div className="w-1/3 pr-3 flex flex-col items-center lg:items-start text-center sm:text-right">
          <p className="text-3xl sm:text-4xl nohemi">
            <AnimatedCounter from={0} to={3} />x
          </p>
          <p className="mt-1.5 font-light text-xs sm:text-base ">Hackathon Winner</p>
        </div>
        <div className="w-1/3  flex flex-col items-center lg:items-start text-center sm:text-right">
          <p className="text-3xl sm:text-4xl nohemi">
            <AnimatedCounter from={900} to={1000} />s
          </p>
          <p className="mt-1.5 font-light text-xs sm:text-base">Hours Spent Coding</p>
        </div>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <AnimatedFadeUp>
      <div className="w-full py-6 rounded-xl flex flex-col md:flex-row gap-10 md:gap-0">
        <div className="md:w-1/2 pr-2">
          <p className="font-medium flex flex-wrap items-center text-sm sm:text-base lg:text-lg leading-relaxed">
            <img
              src="/icons/uf.png"
              alt=""
              className="hidden sm:inline max-w-8 mr-0.5"
            />
            University of Florida College of Engineering
            <span className="font-[350]">&nbsp;/&nbsp;</span>
            <span className="font-[350]"> Computer Science</span>
          </p>
          <p className="mt-1 text-sm lg:text-base">
            Bachelor of Science, 2023-Current{" "}
          </p>
          <div className="flex gap-2 items-center mt-2 sm:mt-3">
            <p className=" bg-gray-200 w-fit text-xs lg:text-sm  px-4 py-1 rounded-full">
              In Progress
            </p>
            <img src="/icons/uf.png" alt="" className="w-8 h-8 sm:hidden" />
          </div>
        </div>
        <div className="md:w-1/2 md:pl-2">
          <p className="font-medium flex flex-wrap items-center text-sm sm:text-base lg:text-lg leading-relaxed">
            <img
              src="/icons/uf.png"
              alt=""
              className="hidden sm:inline max-w-8 mr-0.5"
            />
            University of Florida College of Business
            <span className="font-[350]">&nbsp;/&nbsp;</span>
            <span className="font-[350]">Business Administration</span>
          </p>
          <p className="mt-1 text-sm lg:text-base">
            Academic Minor, 2023-Current{" "}
          </p>
          <div className="flex gap-2 items-center mt-2 sm:mt-3">
            <p className=" bg-gray-200 w-fit text-xs lg:text-sm  px-4 py-1 rounded-full">
              In Progress
            </p>
            <img src="/icons/uf.png" alt="" className="w-8 h-8 sm:hidden" />
          </div>
        </div>
      </div>
    </AnimatedFadeUp>
  );
};

const EducationTab = () => {
  return <h5 className="font-[350] pt-6">Education</h5>;
};

const Frontend: React.FC = () => {
  return (
    <AnimatedFadeUp>
      <div className="w-full sm:border border-[#ebeaee] sm:px-4 sm:py-6 bs rounded-xl mb-8 sm:mb-6">
        <p className="font-medium text-base lg:text-lg">
          Frontend Developement
        </p>
        <p className="flex font-[350]  mt-2.5 mb-4 text-xs sm:text-sm lg:text-base leading-normal">
          Responsive Design • Creative Development • JS Frameworks • Web
          Animations • Semantic Programming • Cross-Browser Testing •
          Accessability Standards
        </p>
        <ul className="flex flex-wrap gap-4 text-xs sm:text-sm font-[350]">
          <p className="flex items-center gap-1.5 ">
            <img
              src="/icons/react.svg"
              alt=""
              className="max-w-3.5 sm:max-w-4 lg:max-w-5"
            />
            React
          </p>
          <p className="flex items-center gap-1.5 ">
            <img
              src="/icons/nextjs.svg"
              alt=""
              className="max-w-3.5 sm:max-w-4 lg:max-w-5"
            />
            NextJS
          </p>
          <p className="flex items-center gap-1.5 ">
            <img
              src="/icons/typescript.svg"
              alt=""
              className="max-w-3.5 sm:max-w-4 lg:max-w-5"
            />
            Typescript
          </p>
          <p className="flex items-center gap-1.5 ">
            <img
              src="/icons/tailwind.png"
              alt=""
              className="max-w-3.5 sm:max-w-4 lg:max-w-5"
            />
            Tailwind CSS
          </p>
          <p className="flex items-center gap-1.5 ">
            <img
              src="/icons/figma.svg"
              alt=""
              className="max-w-2 sm:max-w-2.5 lg:max-w-3.5"
            />
            Figma
          </p>
          <p className="flex items-center gap-1.5 font-[350] ">
            <img
              src="/icons/git.png"
              alt=""
              className="max-w-3.5 sm:max-w-4 lg:max-w-5"
            />
            Version Control
          </p>
        </ul>
      </div>
    </AnimatedFadeUp>
  );
};

const Backend: React.FC = () => {
  return (
    <AnimatedFadeUp>
      <div className="w-full sm:border border-[#ebeaee] sm:px-4 sm:py-6 bs rounded-xl mb-8">
        <p className="font-medium text-base lg:text-lg">Backend Developement</p>
        <p className="flex font-[350]  mt-2.5 mb-4 text-xs sm:text-sm lg:text-base leading-normal">
          Database Management • Web Scraping • Data Structures and Algorithms •
          Containerization • RESTful API • Authentication • Server-side Logic
        </p>
        <ul className="flex gap-4 flex-wrap text-xs sm:text-sm font-[350]">
          <p className="flex items-center gap-1.5  ">
            <img
              src="/icons/fast.svg"
              alt=""
              className="max-w-3.5 sm:max-w-4 lg:max-w-5"
            />
            Fast API
          </p>
          <p className="flex items-center gap-1.5  ">
            <img
              src="/icons/psql.png"
              alt=""
              className="max-w-3.5 sm:max-w-4 lg:max-w-5"
            />
            PostgreSQL
          </p>
          <p className="flex items-center gap-1.5  ">
            <img
              src="/icons/mongo.svg"
              alt=""
              className="max-w-3.5 sm:max-w-4 lg:max-w-5"
            />
            Mongo DB
          </p>
          <p className="flex items-center gap-1.5  ">
            <img
              src="/icons/firebase.svg"
              alt=""
              className="max-w-3.5 sm:max-w-4 lg:max-w-5"
            />
            Firebase
          </p>
          <p className="flex items-center gap-1.5  ">
            <img
              src="/icons/docker.png"
              alt=""
              className="max-w-3.5 sm:max-w-4 lg:max-w-5"
            />
            Docker
          </p>
          <p className="flex items-center gap-1.5  ">
            <img
              src="/icons/selenium.png"
              alt=""
              className="max-w-3.5 sm:max-w-4 "
            />
            Selenium
          </p>
        </ul>
      </div>
    </AnimatedFadeUp>
  );
};

const SkillsTab: React.FC = () => {
  return <h5 className="font-[350] mb-6">Skills</h5>;
};

const Skills: React.FC = () => {
  return (
    <>
      <Frontend />
      <Backend />
    </>
  );
};
