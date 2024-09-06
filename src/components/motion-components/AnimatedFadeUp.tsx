import React, { ReactNode } from "react";
import { motion, useInView } from "framer-motion";

type AnimatedFadeUpProps = {
  children: ReactNode;
  threshold?: number
};

const AnimatedFadeUp: React.FC<AnimatedFadeUpProps> = ({ children, threshold }) => {
  const ref = React.useRef(null);
  const amt = threshold ? threshold : 0.6
  const isInView = useInView(ref, { amount: amt, once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="gpu-accelerated"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedFadeUp;