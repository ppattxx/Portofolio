"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  SiGitlab,
  SiPhp,
  SiTypescript,
  SiFlutter,
  SiReact,
  SiFigma,
  SiNodedotjs,
  SiDart,
  SiNextdotjs,
  SiLaravel,
  SiTailwindcss,
  SiCss,
  SiPostgresql,
  SiHtml5,
  SiJavascript,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface TechItem {
  name: string;
  Icon?: IconType;
}

const techItems: TechItem[] = [
  { name: "Gitlab", Icon: SiGitlab },
  { name: "PHP", Icon: SiPhp },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Flutter", Icon: SiFlutter },
  { name: "React", Icon: SiReact },
  { name: "Figma", Icon: SiFigma },
  { name: "NodeJS", Icon: SiNodedotjs },
  { name: "Dart", Icon: SiDart },
  { name: "NextJS", Icon: SiNextdotjs },
  { name: "Laravel", Icon: SiLaravel },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "CSS", Icon: SiCss },
  { name: "Postgres", Icon: SiPostgresql },
  { name: "HTML", Icon: SiHtml5 },
  { name: "JavaScript", Icon: SiJavascript },
];

const rowOne = techItems.slice(0, 9);
const rowTwo = techItems.slice(4, 13);
const rowThree = techItems.slice(9, 18);

function TechPill({ item }: { item: TechItem }) {
  const Icon = item.Icon;
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-md border border-white/40 bg-white/5 text-white/90 text-sm font-medium whitespace-nowrap">
      <span className="text-white/80">
        {Icon ? <Icon size={18} /> : <span className="text-[11px] font-semibold">{item.name.slice(0, 2).toUpperCase()}</span>}
      </span>
      <span>{item.name}</span>
    </div>
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
          transition={{ duration: 0.1 }}
        >
          Things I use to develop all my projects
        </motion.p>
        <motion.h2
          className="font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-2 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.1, delay: 0.1 }}
        >
          Tech Stack.
        </motion.h2>

        <motion.div
          className="space-y-4 md:space-y-5"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.1, delay: 0.2 }}
        >
          <div className="scroller overflow-hidden">
            <div className="flex w-max gap-3 animate-scroll">
              {[...rowOne, ...rowOne].map((item, index) => (
                <TechPill key={`${item.name}-row1-${index}`} item={item} />
              ))}
            </div>
          </div>
          <div className="scroller overflow-hidden">
            <div className="flex w-max gap-3 animate-scroll-reverse">
              {[...rowTwo, ...rowTwo].map((item, index) => (
                <TechPill key={`${item.name}-row2-${index}`} item={item} />
              ))}
            </div>
          </div>
          <div className="scroller overflow-hidden">
            <div className="flex w-max gap-3 animate-scroll">
              {[...rowThree, ...rowThree].map((item, index) => (
                <TechPill key={`${item.name}-row3-${index}`} item={item} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
