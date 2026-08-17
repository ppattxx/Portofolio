"use client";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { IconBriefcase, IconSchool } from "@tabler/icons-react";
import { timeline } from "@/constants/timeline";

export const WorkHistory = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start 78%", "end 55%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });
  const lineOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div ref={wrapRef} className="relative">
      {/* rail */}
      <div className="absolute bottom-0 left-[19px] top-0 w-px bg-white/[0.07] md:left-[23px]">
        <motion.div
          style={{ scaleY: reduced ? 1 : lineScale, opacity: reduced ? 1 : lineOpacity }}
          className="h-full w-full origin-top bg-gradient-to-b from-[rgb(var(--accent))] via-[rgb(var(--accent-2))] to-transparent"
        />
      </div>

      <div className="space-y-5 md:space-y-6">
        {timeline.map((item, index) => {
          const Icon = item.type === "education" ? IconSchool : IconBriefcase;
          return (
            <motion.div
              key={item.company}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex gap-4 md:gap-6"
            >
              <div className="relative z-10 shrink-0 pt-1">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] bg-[rgb(var(--bg))] text-white/45 transition-colors duration-300 md:h-12 md:w-12">
                  <Icon size={17} />
                </span>
              </div>

              <div className="glass-card group flex-1 p-5 md:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base font-bold text-white md:text-lg">
                    {item.title}
                  </h3>
                  <span className="rounded-full border border-white/[0.09] bg-white/[0.04] px-2.5 py-1 text-[11px] tabular-nums text-white/45">
                    {item.date}
                  </span>
                </div>

                <p className="mt-1 text-sm font-medium text-[rgb(var(--accent))]/80">
                  {item.company}
                  {item.location && (
                    <span className="font-normal text-white/30"> · {item.location}</span>
                  )}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {item.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {item.responsibilities.map((r) => (
                    <li key={r} className="flex gap-2.5 text-[13px] leading-relaxed text-white/42">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[rgb(var(--accent))]/60" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>

                {item.stack && (
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {item.stack.map((tech) => (
                      <span key={tech} className="tag-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
