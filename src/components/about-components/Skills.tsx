import React from "react";

type SkillsProps = {};

const Skills: React.FC<SkillsProps> = () => {
  return (
    <div className="max-w-[1600px]">
      <Frontend />
      <Backend />
      <Education />
    </div>
  );
};
export default Skills;

const Education: React.FC = () => {
  return (
    <div className="w-full px-4 py-6 bs rounded-xl flex gap-16 ">
      <div className="">
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
      <div className="">
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
  );
};

const Frontend: React.FC = () => {
  return (
    <div className="w-full border border-[#ebeaee] px-4 py-6 bs rounded-xl mb-6">
      <p className="font-medium">Frontend Developement</p>
      <p className="flex font-[350] text-sm mt-2.5 mb-4">
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
          <img src="/icons/figma.svg" alt="" className="max-w-4" />
          Figma
        </p>
        <p className="flex items-center gap-1.5 text-sm font-[350] ">
          <img src="/icons/git.png" alt="" className="max-w-5" />
          Version Control
        </p>
      </ul>
    </div>
  );
};

const Backend: React.FC = () => {
  return (
    <div className="w-full border border-[#ebeaee] px-4 py-6 bs rounded-xl mb-8">
      <p className="font-medium">Backend Developement</p>
      <p className="flex font-[350] text-sm mt-2.5 mb-4">
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
  );
};
