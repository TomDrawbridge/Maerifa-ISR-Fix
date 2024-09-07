import React, { useEffect, useRef } from 'react';
import { motion, MotionProps, useAnimation, useInView, Target, VariantLabels, AnimationControls } from 'framer-motion';

interface FramerMotionProps extends Omit<MotionProps, 'initial' | 'animate'> {
  children: React.ReactNode;
  initial?: Target | VariantLabels;
  animate?: Target | VariantLabels;
  transition?: MotionProps['transition'];
  whileHover?: MotionProps['whileHover'];
  whileTap?: MotionProps['whileTap'];
  delay?: number;
}

const FramerMotion: React.FC<FramerMotionProps> = ({
  children,
  initial = { y: 40, opacity: 0 },
  animate = { y: 0, opacity: 1 },
  transition = { type: 'spring', stiffness: 200, damping: 30 },
  whileHover,
  whileTap,
  delay = 0,
  ...rest
}) => {
  const controls: AnimationControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start(animate);
    } else {
      controls.start(initial);
    }
  }, [isInView, controls, initial, animate]);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={controls}
      transition={{ ...transition, delay: delay + 0.25 }}
      whileHover={whileHover}
      whileTap={whileTap}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default FramerMotion;
