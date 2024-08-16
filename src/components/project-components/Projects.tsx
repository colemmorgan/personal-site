import React from "react";
import SplitContainer from "../about-components/SplitContainer";
import { MdOutlineArrowOutward } from "react-icons/md";

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
  return <h2 className="text-3xl font-medium sticky top-6">Projects</h2>;
};

const Featured: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap gap-y-12 mb-16">
        <div className="px-4 w-1/2">
          <div className=" flex flex-col items-center px-2 rounded-lg py-4 custom ">
            <img src="/yes.png" alt="" className=" w-1/2 rounded-md" />
          </div>
          <p className="mt-4 text-xl font-semibold">
            CodeCode{" "}
            <span className="font-normal">/ Coding Question Platform</span>
          </p>
          <p className="mt-1 font-[350]">
            Practice Coding questions graded in real time with a dockerized
            coding execution engine. Continue where you left off anytime with
            Firebase Auth.
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
            Practice Coding questions graded in real time with a dockerized
            coding execution engine. Continue where you left off anytime with
            Firebase Auth.
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
            Practice Coding questions graded in real time with a dockerized
            coding execution engine. Continue where you left off anytime with
            Firebase Auth.
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
            Practice Coding questions graded in real time with a dockerized
            coding execution engine. Continue where you left off anytime with
            Firebase Auth.
          </p>
        </div>
      </div>
      <div className="px-4">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-medium ">Hackathon Projects </h3>
          <span className="bg-gray-200 rounded-full text-sm w-6 h-6 flex items-center justify-center">
            3
          </span>
        </div>
        <HackathonProject />
        <HackathonProject />
        <HackathonProject />
      </div>
    </>
  );
};

// 460x360 #fcfbfd

const HackathonProject: React.FC = () => {
  return (
    <div className="grid grid-cols-12 w-full border-b border-gray-200">
      <p className="col-span-2  p-2 pl-0 flex gap-1 items-center">
        Fulfillment{" "}
        <span className="text-gray-400">
          <MdOutlineArrowOutward />
        </span>
      </p>
      <p className="col-span-7  p-2 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni possimus
        asperiores omnis modi, placeat in fuga pariatur? Vel, quisquam beatae.
      </p>
      <div className="col-span-3  py-2 px-1 h-full flex items-center gap-4 font-[350]">
        <a href="" className="flex items-center gap-1 text-sm underline">Github</a>
        <a href="" className="flex items-center gap-1 text-sm underline">Video Demo</a>
        <a href="" className="flex items-center gap-1 text-sm underline">Live Site</a>
      </div>
    </div>
  );
};
