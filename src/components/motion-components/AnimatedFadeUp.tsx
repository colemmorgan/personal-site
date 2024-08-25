import React, { ReactNode } from "react";
import { motion, useInView } from "framer-motion";

type AnimatedFadeUpProps = {
  children: ReactNode;
};

const AnimatedFadeUp: React.FC<AnimatedFadeUpProps> = ({ children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.6, once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedFadeUp;