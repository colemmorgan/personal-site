import React from "react";
import AnimatedProjectReveal from "../motion-components/AnimatedProjectReveal";
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

type Project_ = {
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  github?: string;
  live?: string;
};

type ProjectProps = {
  project: Project_;
  index: number;
};

const Project: React.FC<ProjectProps> = ({ project, index }) => {
  return (
    <div className="lg:w-[calc(50%-16px)] relative">
      <div className="absolute bg-white py-1 top-3 right-3 rounded-full flex gap-3 items-center pl-4 pr-2">
        {project.github && project.live ? (
          <>
            <a
              className="text-lg cursor-pointer"
              href={project.github}
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              href={project.live}
              target="_blank"
              className="bg-black text-white text-[13px] px-4 rounded-full flex items-center gap-1 py-1 cursor-pointer"
            >
              Live{" "}
              <span className="text-base">
                <MdOutlineArrowOutward />
              </span>
            </a>
          </>
        ) : (
          <span className="pr-2 text-sm">Coming Soon</span>
        )}
      </div>
      <AnimatedProjectReveal index={index}>
        <img
          src={project.img}
          alt=""
          className=" w-2/3 sm:w-1/2 rounded-md"
          loading="lazy"
        />
      </AnimatedProjectReveal>
      <p className="mt-4 text-lg sm:text-xl font-semibold">
        {project.title}{" "}
        <span className="font-normal">/ {project.subtitle}</span>
      </p>
      <p className="mt-1 font-[350] text-sm sm:text-base">{project.desc}</p>
    </div>
  );
};
export default Project;