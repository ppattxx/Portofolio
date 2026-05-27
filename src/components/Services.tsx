"use client";
import { motion } from "framer-motion";
import { IconCode, IconDeviceMobile, IconServer, IconComponents } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

const skills = [
  {
    title: "Frontend Development",
    icon: IconCode,
  },
  {
    title: "Mobile Development",
    icon: IconDeviceMobile,
  },
  {
    title: "Backend Development",
    icon: IconServer,
  },
  {
    title: "UI Implementation",
    icon: IconComponents,
  },
];

export const Services = () => {
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
    <section id="skills" ref={ref} className="relative wrapper py-20 md:py-36">
      <div className="absolute top-[10%] left-[30%] w-80 h-screen blob-blue pointer-events-none" />
      <motion.p
        className="section-label"
        initial={{ opacity: 0, y: 25 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        What I&apos;m Offering
      </motion.p>
      <motion.h2
        className="font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-2"
        initial={{ opacity: 0, y: 25 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        My Skills.
      </motion.h2>
      <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, x: -100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
          >
            <div className="rounded-2xl min-h-[140px] sm:min-h-[160px] md:min-h-[180px] flex flex-col items-center justify-center glass card-hover gap-3 md:gap-4 px-4 md:px-6 py-6 md:py-8">
              <skill.icon className="text-white w-9 h-9 sm:w-11 sm:h-11" strokeWidth={1.5} />
              <h3 className="text-white text-base sm:text-lg md:text-[20px] font-bold text-center max-w-40">
                {skill.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
