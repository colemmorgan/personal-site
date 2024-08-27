import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";

type HackathonProjectProps = {
  title: string;
  desc: string;
  github: string;
  video: string;
  live?: string;
  index: number;
  isInView: boolean;
};

const HackathonProject: React.FC<HackathonProjectProps> = ({
  title,
  desc,
  github,
  video,
  live,
  index,
  isInView,
}) => {
  return (
    <>
      <div className="hidden sm:block border-b border-gray-200 overflow-hidden">
        <motion.div
          className="grid grid-cols-12 w-full "
          initial={{ y: 60 }}
          animate={isInView ? { y: 0 } : { y: 60 }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.18 * index }}
        >
          <p className="col-span-2  p-2 pl-0 flex gap-1 items-center text-sm lg:text-base">
            {title}
            <span className="text-gray-400">
              <MdOutlineArrowOutward />
            </span>
          </p>
          <p className="col-span-9 sm:col-span-7  p-2 pr-0 sm:pr-4 lg:pr-8 xl:pr-12 text-xs lg:text-sm">
            {desc}
          </p>
          <div className="flex col-span-3 py-2 pl-2  h-full  items-center gap-4 font-[350] text-xs lg:text-sm">
            {github && (
              <a
                href={github}
                target="_blank"
                className="flex items-center gap-1 underline"
              >
                Github
              </a>
            )}
            {video && (
              <a
                href={video}
                target="_blank"
                className="flex items-center gap-1 underline"
              >
                Video Demo
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                className="flex items-center gap-1 underline"
              >
                Live Site
              </a>
            )}
          </div>
        </motion.div>
      </div>
      <div className="border-b border-gray-200 overflow-hidden py-3 sm:hidden">
        <motion.div
          className=""
          initial={{ y: 100 }}
          animate={isInView ? { y: 0 } : { y: 120}}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.18 * index }}
        >
          <p className=" flex items-center gap-1 text-sm">
            {title}{" "}
            <span className="text-gray-400">
              <MdOutlineArrowOutward />
            </span>
          </p>
          <p className="mt-1 text-xs">{desc}</p>
          <div className="flex gap-4 font-[350] text-xs mt-2">
            {github && (
              <a
                href={github}
                target="_blank"
                className="flex items-center gap-1 underline"
              >
                Github
              </a>
            )}
            {video && (
              <a
                href={video}
                target="_blank"
                className="flex items-center gap-1 underline"
              >
                Video Demo
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                className="flex items-center gap-1 underline"
              >
                Live Site
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default HackathonProject;
