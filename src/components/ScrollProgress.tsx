"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 34,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-gradient-to-r from-[rgb(var(--accent))] via-[rgb(var(--accent-2))] to-[rgb(var(--accent-3))]"
    />
  );
};
