"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const techRow1 = [
  "Next.js", "React.js", "JavaScript", "PHP", "Python",
];

const techRow2 = [
  "C", "C#", "CodeIgniter", "Laravel", "MySQL", "PostgreSQL",
];

const techRow3 = [
  "Git", "GitLab", "Figma", "CSS", "HTML",
];

function TechPill({ name }: { name: string }) {
  return (
    <li className="max-w-full relative rounded-lg border flex-shrink-0 border-white/20 px-4 py-2 glass">
      <span className="text-white text-sm whitespace-nowrap">{name}</span>
    </li>
  );
}

export const TechStack = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tech-stack" ref={ref} className="relative py-20 md:py-36">
      <div className="absolute top-[10%] left-[30%] w-80 h-screen blob-blue pointer-events-none" />
      <div className="wrapper">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Things I use to develop all my projects
        </motion.p>
        <motion.h2
          className="font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-2"
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Tech Stack.
        </motion.h2>
      </div>

      <motion.div
        className="mt-10 md:mt-12 mx-auto w-full flex flex-col gap-y-4"
        initial={{ opacity: 0, y: 25 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="scroller relative z-20">
          <ul className="animate-scroll flex gap-3 md:gap-4 py-0 w-max">
            {[...techRow1, ...techRow1].map((tech, i) => (
              <TechPill key={`${tech}-${i}`} name={tech} />
            ))}
          </ul>
        </div>
        <div className="scroller relative z-20">
          <ul className="animate-scroll-reverse flex gap-3 md:gap-4 py-0 w-max">
            {[...techRow2, ...techRow2].map((tech, i) => (
              <TechPill key={`${tech}-${i}`} name={tech} />
            ))}
          </ul>
        </div>
        <div className="scroller relative z-20">
          <ul className="animate-scroll flex gap-3 md:gap-4 py-0 w-max">
            {[...techRow3, ...techRow3].map((tech, i) => (
              <TechPill key={`third-${tech}-${i}`} name={tech} />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
