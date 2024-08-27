import React, { useRef } from "react";
import HackathonProject from "./HackathonProject";
import { useInView } from "framer-motion";

type HackathonProjectsProps = {};

const HackathonProjects: React.FC<HackathonProjectsProps> = () => {
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
      video: "https://www.youtube.com/watch?v=bYowv4UtAiM",
    },
    {
      title: "Chroma",
      desc: "A web app designed to adjust the colors of images so that colorblind users can experience heightened color differentiation.",
      github: "https://github.com/colemmorgan/Chroma",
      video: "https://www.youtube.com/watch?v=Cni7xOJ8CLU",
      live: "https://chroma-nu.vercel.app/",
    },
  ];
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  return (
    <div className="" ref={ref}>
      {hackathonProjects.map((project, i) => (
        <HackathonProject
          title={project.title}
          desc={project.desc}
          github={project.github}
          live={project.live}
          video={project?.video}
          key={project.title}
          index={i}
          isInView={isInView}
        />
      ))}
    </div>
  );
};
export default HackathonProjects;
