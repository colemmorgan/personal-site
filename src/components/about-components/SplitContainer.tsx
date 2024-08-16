import React from "react";

type SplitContainerProps = {
  left: React.ReactNode;
  right: React.ReactNode;
};

const SplitContainer: React.FC<SplitContainerProps> = ({ left, right }) => {
  return (
    <div className="flex mx-auto max-w-[1680px]">
      <div className="w-[23%]">{left}</div>
      <div className="w-[77%] px-2">{right}</div>
    </div>
  );
};

export default SplitContainer;
