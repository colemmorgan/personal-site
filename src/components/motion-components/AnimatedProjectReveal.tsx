import React, { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

type AnimatedProjectRevealProps = {
  children: ReactNode;
  index: number;
};

const AnimatedProjectReveal: React.FC<AnimatedProjectRevealProps> = ({
  children,
  index
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div className="px-2 rounded-lg py-4 custom overflow-hidden" ref={ref}>
      <motion.div
        className="flex flex-col items-center"
        initial={{ y: "100%", opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: "100%",  opacity: 0  }}
        transition={{ duration: 0.6, ease: "easeOut", delay: index % 2 == 0 ? 0 : 0.15 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedProjectReveal;
