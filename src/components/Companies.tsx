"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const companies = [
  { name: "PT Shelter Indonesia", initial: "SI" },
  { name: "PT Panasonic Manufacturing Indonesia", initial: "PM" },
];

export const Companies = () => {
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
    <section id="companies" ref={ref} className="relative wrapper py-20 md:py-28">
      <div className="absolute top-0 left-0 w-40 md:w-52 h-[300px] md:h-[438px] blob-cyan pointer-events-none" />
      <motion.h2
        className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white lg:text-center leading-snug lg:leading-tight text-start"
        initial={{ opacity: 0, y: 25 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Companies I&apos;ve Worked With
      </motion.h2>
      <motion.div
        className="mt-10 md:mt-16 lg:mt-20"
        initial={{ opacity: 0, y: 25 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Map-like grid layout */}
        <div className="relative max-w-3xl mx-auto">
          {/* Decorative connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 600 400">
            <path d="M300,50 L150,200 L300,350 L450,200 Z" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <path d="M150,200 L300,200 M300,200 L450,200 M300,50 L300,350" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" strokeDasharray="4,4" />
          </svg>
          <div className="flex flex-wrap justify-center gap-4 relative">
            {companies.map((company, idx) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.08 }}
                className="glass card-hover rounded-xl p-5 md:p-6 flex flex-col items-center justify-center gap-3 text-center w-48 md:w-56"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-sm md:text-base">
                  {company.initial}
                </div>
                <span className="text-white/80 text-xs md:text-sm font-medium leading-tight">
                  {company.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
