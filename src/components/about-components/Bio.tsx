import React from "react";
import SplitContainer from "../SplitContainer";
import GitHubContributions from "./GithubContributions";
import AnimatedCounter from "../motion-components/AnimatedCounter";

type BioProps = {};

const Bio: React.FC<BioProps> = () => {
  return <SplitContainer left={<BioTab />} right={<BioBody />} />;
};
export default Bio;

const BioTab: React.FC = () => {
  return <h3 className="font-medium text-2xl sm:text-3xl pt-4">About Me</h3>;
};

const BioBody: React.FC = () => {
  return (
    <div className="w-full py-6 mb-6">
      <p className="text-sm sm:text-lg lg:text-xl font-semibold leading-relaxed">
        I am a fullstack web developer that creates{" "}
        <span className="text-gradient">beautiful interfaces</span> and
        blazingly fast backends.{" "}
        <span className="font-normal">
          My passion lies in front-end development, where I focus on creating
          interfaces that flow effortlessly and engage users.
        </span>
      </p>
      <div className="flex mt-6 sm:mt-10">
        <div className="w-1/3 pr-3  flex flex-col items-center lg:items-start text-center">
          <p className="text-3xl sm:text-4xl nohemi min-h-7 h-full">
            <GitHubContributions />
          </p>
          <p className="mt-1.5 font-light text-xs sm:text-base">
            <span className="hidden sm:inline">Github </span>Contributions in
            2024
          </p>
        </div>
        <div className="w-1/3 pr-3 flex flex-col items-center lg:items-start text-center sm:text-right">
          <p className="text-3xl sm:text-4xl nohemi min-h-7">
            <AnimatedCounter from={0} to={3} />x
          </p>
          <p className="mt-1.5 font-light text-xs sm:text-base ">
            Hackathon Winner
          </p>
        </div>
        <div className="w-1/3  flex flex-col items-center lg:items-start text-center sm:text-right">
          <p className="text-3xl sm:text-4xl nohemi min-h-7">
            <AnimatedCounter from={900} to={1000} />s
          </p>
          <p className="mt-1.5 font-light text-xs sm:text-base">
            Hours Spent Coding
          </p>
        </div>
      </div>
    </div>
  );
};
