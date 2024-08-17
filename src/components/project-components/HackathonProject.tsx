import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

type HackathonProjectProps = {
  title: string;
  desc: string;
  github: string;
  video: string;
  live?: string;
  index: number
};

const HackathonProject: React.FC<HackathonProjectProps> = ({
  title,
  desc,
  github,
  video,
  live,
  index
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="border-b border-gray-200 overflow-hidden">
      <motion.div className="grid grid-cols-12 w-full "
      initial={{y:60}}
      animate={isInView ? { y: 0 } : { y: 60}}
      transition={{duration: 0.4, ease: "easeInOut", delay: 0.2 * index}}>
        
     
        <p className="col-span-2  p-2 pl-0 flex gap-1 items-center">
          {title}
          <span className="text-gray-400">
            <MdOutlineArrowOutward />
          </span>
        </p>
        <p className="col-span-7  p-2 pr-6 text-sm">{desc}</p>
        <div className="col-span-3  py-2 pl-2  h-full flex items-center gap-4 font-[350]">
          {github && (
            <a
              href={github}
              target="_blank"
              className="flex items-center gap-1 text-sm underline"
            >
              Github
            </a>
          )}
          {video && (
            <a
              href={video}
              target="_blank"
              className="flex items-center gap-1 text-sm underline"
            >
              Video Demo
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              className="flex items-center gap-1 text-sm underline"
            >
              Live Site
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default HackathonProject;
