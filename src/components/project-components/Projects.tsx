import React from "react";
import SplitContainer from "../about-components/SplitContainer";
import Project from "./Project";
import HackathonProjects from "./HackathonProjects";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className="px-4 lg:px-16 relative" id="projects">
      <div className="bg-[#fcfbfd] py-12 rounded-2xl mt-8">
        <SplitContainer left={<ProjectsTab />} right={<Featured />} />
      </div>
    </div>
  );
};

export default Projects;

const ProjectsTab: React.FC = () => {
  return <h2 className="text-3xl font-medium mb-8 xl:mb-0">Projects</h2>;
};

const Featured: React.FC = () => {
  

  const projects = [
    {
      title: "CodeCode",
      subtitle: "Coding Question Platform",
      desc: "Practice Coding questions graded in real time with a dockerized coding execution engine. Continue where you left off anytime with Firebase Auth.",
      img: "/codecode.png",
    },
    {
      title: "Replayed",
      subtitle: "Video Game Performance Analyzer",
      desc: "Track and analyze your gaming performance by accessing a plethora of statistics from public apis and user uploaded files. Access your information anywhere with an Express/MongoDB backend.",
      img: "/replayed-thumbnail.png",
    },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between flex-wrap gap-y-12 mb-16 items-center lg:items-start">
        {projects.map((project, index) => (
          <Project project={project} index={index} />
        ))}
      </div>
      <div className="">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-medium ">Hackathon Projects </h3>
          <span className="bg-gray-200 rounded-full text-sm w-6 h-6 flex items-center justify-center">
            3
          </span>
        </div>
        <HackathonProjects/>
      </div>
    </>
  );
};

// 460x360 
