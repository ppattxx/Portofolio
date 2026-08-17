"use client";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const OFFSET: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 36, y: 0 },
  right: { x: -36, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.65,
  direction = "up",
  once = true,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  once?: boolean;
  amount?: number;
}) {
  const reduced = useReducedMotion();
  const { x, y } = OFFSET[direction];

  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Staggers direct children. Pair with <RevealItem>. */
export function RevealGroup({
  children,
  className,
  stagger = 0.09,
  delay = 0,
  once = true,
  amount = 0.15,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
}) {
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
}) {
  const reduced = useReducedMotion();
  const { x, y } = OFFSET[direction];

  const item: Variants = {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, x, y },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
