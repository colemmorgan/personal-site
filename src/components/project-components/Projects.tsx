import React from "react";
import SplitContainer from "../about-components/SplitContainer";
import AnimatedProjectReveal from "../motion-components/AnimatedProjectReveal";
import HackathonProject from "./HackathonProject";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className="px-16 relative" id="projects">
      <div className="bg-[#fcfbfd] py-12 rounded-2xl mt-8">
        <SplitContainer left={<ProjectsTab />} right={<Featured />} />
      </div>
    </div>
  );
};

export default Projects;

const ProjectsTab: React.FC = () => {
  return <h2 className="text-3xl font-medium ">Projects</h2>;
};

const Featured: React.FC = () => {
  const hackathonProjects = [
    {
      title: "Fulfillment",
      desc: "A medical microcredentialing app that features real time player versus player trivia, offline courses, and notecard sets users can share/create.",
      github: "https://github.com/colemmorgan/Medihacks2024",
      video: "https://www.youtube.com/watch?v=cK4NSdyTnr0",
      live: "https://fufillment-n5cn.vercel.app/",
    },
    {
      title: "Access For All",
      desc: "A website designed to check and the display the accessability of various sites for the University of Florida. Also features a forum for extra communication.",
      github: "https://github.com/colemmorgan/Medihacks2024",
      video: "https://www.youtube.com/watch?v=cK4NSdyTnr0",
    },
    {
      title: "Chroma",
      desc: "A tool designed to adjust the colors of images so that colorblind users can experience heightened color differentiation.",
      github: "https://github.com/colemmorgan/Chroma",
      video: "https://www.youtube.com/watch?v=cK4NSdyTnr0",
      live: "https://chroma-nu.vercel.app/",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap gap-y-12 mb-16">
        <div className="px-4 w-1/2">
          <AnimatedProjectReveal>
            <img
              src="/codecode.png"
              alt=""
              className=" w-1/2 rounded-md"
              loading="lazy"
            />
          </AnimatedProjectReveal>
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
          <AnimatedProjectReveal>
            <img
              src="/coming-soon.svg"
              alt=""
              className=" w-1/2 rounded-md"
              loading="lazy"
            />
          </AnimatedProjectReveal>
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
          <AnimatedProjectReveal>
            <img
              src="/coming-soon.svg"
              alt=""
              className=" w-1/2 rounded-md"
              loading="lazy"
            />
          </AnimatedProjectReveal>
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
          <AnimatedProjectReveal>
            <img
              src="/coming-soon.svg"
              alt=""
              className=" w-1/2 rounded-md"
              loading="lazy"
            />
          </AnimatedProjectReveal>
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
        {
          hackathonProjects.map((project, i) => (
            <HackathonProject title={project.title} desc={project.desc} github={project.github} live={project.live} video={project?.video} key={project.title} index={i}/>
          ))
        }
      </div>
    </>
  );
};

// 460x360 #fcfbfd
