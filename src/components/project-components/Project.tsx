import React from "react";
import AnimatedProjectReveal from "../motion-components/AnimatedProjectReveal";

type Project_ = {
  title: string;
  subtitle: string;
  desc: string;
  img: string;
};

type ProjectProps = {
  project: Project_;
  index: number;
};

const Project: React.FC<ProjectProps> = ({project,index}) => {
  return (
    <div className="lg:w-[calc(50%-16px)]" >
      <AnimatedProjectReveal index={index}>
        <img
          src={project.img}
          alt=""
          className=" w-1/2 rounded-md"
          loading="lazy"
        />
      </AnimatedProjectReveal>
      <p className="mt-4 text-xl font-semibold">
        {project.title} <span className="font-normal">/ {project.subtitle}</span>
      </p>
      <p className="mt-1 font-[350]">
        {project.desc}
      </p>
    </div>
  );
};
export default Project;
