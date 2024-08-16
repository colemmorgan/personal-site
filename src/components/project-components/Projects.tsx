import React from "react";
import SplitContainer from "../about-components/SplitContainer";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <>
      <SplitContainer left={<ProjectsTab />} right={<Featured />} />
    </>
  );
};
export default Projects;

const ProjectsTab: React.FC = () => {
  return (
    <div className="">
      <h2 className="text-3xl font-medium">Projects</h2>
    </div>
  );
};

const Featured: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-y-12">
      <div className="px-4 w-1/2">
        <div className=" flex flex-col items-center px-2 rounded-lg py-4 custom ">
          <img src="/yes.png" alt="" className=" w-1/2 rounded-md" />
        </div>
        <p className="mt-4 text-xl font-semibold">
          CodeCode{" "}
          <span className="font-normal">/ Coding Question Platform</span>
        </p>
        <p className="mt-1 font-[350]">
          Practice Coding questions graded in real time with a dockerized coding
          execution engine. Continue where you left off anytime with Firebase
          Auth.
        </p>
      </div>
      <div className="px-4 w-1/2">
        <div className=" flex flex-col items-center px-2 rounded-lg py-4 custom ">
          <img src="/yes.png" alt="" className=" w-1/2 rounded-md" />
        </div>
        <p className="mt-4 text-xl font-semibold">
          CodeCode{" "}
          <span className="font-normal">/ Coding Question Platform</span>
        </p>
        <p className="mt-1 font-[350]">
          Practice Coding questions graded in real time with a dockerized coding
          execution engine. Continue where you left off anytime with Firebase
          Auth.
        </p>
      </div>
      <div className="px-4 w-1/2">
        <div className=" flex flex-col items-center px-2 rounded-lg py-4 custom ">
          <img src="/yes.png" alt="" className=" w-1/2 rounded-md" />
        </div>
        <p className="mt-4 text-xl font-semibold">
          CodeCode{" "}
          <span className="font-normal">/ Coding Question Platform</span>
        </p>
        <p className="mt-1 font-[350]">
          Practice Coding questions graded in real time with a dockerized coding
          execution engine. Continue where you left off anytime with Firebase
          Auth.
        </p>
      </div>
      <div className="px-4 w-1/2">
        <div className=" flex flex-col items-center px-2 rounded-lg py-4 custom ">
          <img src="/yes.png" alt="" className=" w-1/2 rounded-md" />
        </div>
        <p className="mt-4 text-xl font-semibold">
          CodeCode{" "}
          <span className="font-normal">/ Coding Question Platform</span>
        </p>
        <p className="mt-1 font-[350]">
          Practice Coding questions graded in real time with a dockerized coding
          execution engine. Continue where you left off anytime with Firebase
          Auth.
        </p>
      </div>
    </div>
  );
};

// 460x360 #fcfbfd
