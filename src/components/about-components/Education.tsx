import AnimatedFadeUp from "../motion-components/AnimatedFadeUp";
import SplitContainer from "../SplitContainer";

const Education: React.FC = () => {
  return <SplitContainer left={<EducationTab />} right={<EducationBody />} />;
};

export default Education;

const EducationBody: React.FC = () => {
  return (
    <AnimatedFadeUp>
      <div className="w-full py-6 rounded-xl flex flex-col md:flex-row gap-10 md:gap-0">
        <div className="md:w-1/2 pr-2">
          <p className="font-medium flex flex-wrap items-center text-sm sm:text-base lg:text-lg leading-relaxed">
            <img
              src="/icons/uf.png"
              alt=""
              className="hidden sm:inline max-w-8 mr-0.5"
            />
            University of Florida College of Engineering
            <span className="font-[350]">&nbsp;/&nbsp;</span>
            <span className="font-[350]"> Computer Science</span>
          </p>
          <p className="mt-1 text-sm lg:text-base">
            Bachelor of Science, 2023-Current{" "}
          </p>
          <div className="flex gap-2 items-center mt-2 sm:mt-3">
            <p className=" bg-gray-200 w-fit text-xs lg:text-sm  px-4 py-1 rounded-full">
              In Progress
            </p>
            <img src="/icons/uf.png" alt="" className="w-8 h-8 sm:hidden" />
          </div>
        </div>
        <div className="md:w-1/2 md:pl-2">
          <p className="font-medium flex flex-wrap items-center text-sm sm:text-base lg:text-lg leading-relaxed">
            <img
              src="/icons/uf.png"
              alt=""
              className="hidden sm:inline max-w-8 mr-0.5"
            />
            University of Florida College of Business
            <span className="font-[350]">&nbsp;/&nbsp;</span>
            <span className="font-[350]">Business Administration</span>
          </p>
          <p className="mt-1 text-sm lg:text-base">
            Academic Minor, 2023-Current{" "}
          </p>
          <div className="flex gap-2 items-center mt-2 sm:mt-3">
            <p className=" bg-gray-200 w-fit text-xs lg:text-sm  px-4 py-1 rounded-full">
              In Progress
            </p>
            <img src="/icons/uf.png" alt="" className="w-8 h-8 sm:hidden" />
          </div>
        </div>
      </div>
    </AnimatedFadeUp>
  );
};

const EducationTab = () => {
  return <h5 className="font-[350] pt-6">Education</h5>;
};
