import React from "react";
import SplitContainer from "./SplitContainer";
import AnimatedCounter from "../motion-components/AnimatedCounter";
import AnimatedFadeUp from "../motion-components/AnimatedFadeUp";

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <div className="py-12 px-16 relative" id="about">
      <SplitContainer left={<BioTab />} right={<Bio />} />
      <SplitContainer left={<SkillsTab />} right={<Skills />} />
      <SplitContainer left={<EducationTab />} right={<Education />} />
      </div>
  );
};
export default About;

const BioTab: React.FC = () => {
  return <h3 className="font-medium text-3xl pt-4">About Me</h3>;
};

const Bio: React.FC = () => {
  return (
    <div className="w-full py-6 mb-6">
      <p className="text-xl font-semibold">
        I am a fullstack web developer that creates <span className="text-gradient">beautiful interfaces</span> and
        blazingly fast backends.{" "}
        <span className="font-normal">
          My passion lies in front-end design, where I focus on creating
          interfaces that flow effortlessly and engage users.
        </span>
      </p>
      <div className="flex mt-10">
        <div className="w-1/3 pr-3">
          <p className="text-4xl nohemi">
            <AnimatedCounter from={200} to={263} />
          </p>
          <p className="mt-1.5 font-light">Github Contributions in 2024</p>
        </div>
        <div className="w-1/3 pr-3">
          <p className="text-4xl nohemi">
            <AnimatedCounter from={0} to={3} />x
          </p>
          <p className="mt-1.5 font-light">Hackathon Winner</p>
        </div>
        <div className="w-1/3">
          <p className="text-4xl nohemi">
            <AnimatedCounter from={900} to={1000} />s
          </p>
          <p className="mt-1.5 font-light">Hours Spent Coding</p>
        </div>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <AnimatedFadeUp>
      <div className="w-full py-6 rounded-xl flex">
        <div className="w-1/2 pr-2">
          <p className="font-medium flex flex-wrap items-center text-lg">
            <img src="/icons/uf.png" alt="" className="max-w-8 mr-0.5" />
            University of Florida College of Engineering
            <span className="font-[350]">&nbsp;/ Computer Science</span>
          </p>
          <p className="mt-1 pl-1">Bachelor of Science, 2023-Current </p>
          <p className="mt-3 ml-1 bg-gray-200 w-fit text-sm  px-4 py-1 rounded-full">
            In Progress
          </p>
        </div>
        <div className="w-1/2 pl-2">
          <p className="font-medium flex flex-wrap items-center text-lg">
            <img src="/icons/uf.png" alt="" className="max-w-8 mr-0.5" />
            University of Florida College of Business
            <span className="font-[350]">&nbsp;/ Business Administration</span>
          </p>
          <p className="mt-1 pl-1">Academic Minor, 2023-Current </p>
          <p className="mt-3 ml-1 bg-gray-200 w-fit text-sm  px-4 py-1 rounded-full">
            In Progress
          </p>
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
      <div className="w-full border border-[#ebeaee] px-4 py-6 bs rounded-xl mb-6">
        <p className="font-medium text-lg">Frontend Developement</p>
        <p className="flex font-[350]  mt-2.5 mb-4">
          Responsive Design • Creative Development • JS Frameworks • Web
          Animations • Semantic Programming • Cross-Browser Testing •
          Accessability Standards
        </p>
        <ul className="flex gap-4">
          <p className="flex items-center gap-1.5 text-sm font-[350] ">
            <img src="/icons/react.svg" alt="" className="max-w-5" />
            React
          </p>
          <p className="flex items-center gap-1.5 text-sm font-[350] ">
            <img src="/icons/nextjs.svg" alt="" className="max-w-5" />
            NextJS
          </p>
          <p className="flex items-center gap-1.5 text-sm font-[350] ">
            <img src="/icons/typescript.svg" alt="" className="max-w-5" />
            Typescript
          </p>
          <p className="flex items-center gap-1.5 text-sm font-[350] ">
            <img src="/icons/tailwind.png" alt="" className="max-w-5" />
            Tailwind CSS
          </p>
          <p className="flex items-center gap-1.5 text-sm font-[350] ">
            <img src="/icons/figma.svg" alt="" className="max-w-3.5" />
            Figma
          </p>
          <p className="flex items-center gap-1.5 text-sm font-[350] ">
            <img src="/icons/git.png" alt="" className="max-w-5" />
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
      <div className="w-full border border-[#ebeaee] px-4 py-6 bs rounded-xl mb-8">
        <p className="font-medium text-lg">Backend Developement</p>
        <p className="flex font-[350]  mt-2.5 mb-4">
          Database Management • Web Scraping • Data Structures and Algorithms •
          Containerization • RESTful API • Authentication • Server-side Logic
        </p>
        <ul className="flex gap-4">
          <p className="flex items-center gap-1.5 text-sm font-[350] ">
            <img src="/icons/fast.svg" alt="" className="max-w-5" />
            Fast API
          </p>
          <p className="flex items-center gap-1.5 text-sm font-[350] ">
            <img src="/icons/psql.png" alt="" className="max-w-5" />
            PostgreSQL
          </p>
          <p className="flex items-center gap-1.5 text-sm font-[350] ">
            <img src="/icons/mongo.svg" alt="" className="max-w-5" />
            Mongo DB
          </p>
          <p className="flex items-center gap-1.5 text-sm font-[350] ">
            <img src="/icons/firebase.svg" alt="" className="max-w-5" />
            Firebase
          </p>
          <p className="flex items-center gap-1.5 text-sm font-[350] ">
            <img src="/icons/docker.png" alt="" className="max-w-5" />
            Docker
          </p>
          <p className="flex items-center gap-1.5 text-sm font-[350] ">
            <img src="/icons/selenium.png" alt="" className="max-w-4" />
            Selenium
          </p>
        </ul>
      </div>
    </AnimatedFadeUp>
  );
};

const SkillsTab: React.FC = () => {
  return <h5 className="font-[350]">Skills</h5>;
};

const Skills: React.FC = () => {
  return (
    <>
      <Frontend />
      <Backend />
    </>
  );
};
