import React from "react";

type SplitContainerProps = {
  left: React.ReactNode;
  right: React.ReactNode;
};

const SplitContainer: React.FC<SplitContainerProps> = ({ left, right }) => {
  return (
    <div className="flex flex-col xl:flex-row mx-auto max-w-[1680px]">
      <div className="w-full pl-6 xl:mb-0 xl:w-[23%]">{left}</div>
      <div className="w-full xl:w-[77%] px-6">{right}</div>
    </div>
  );
};

export default SplitContainer;
