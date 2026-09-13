"use client";
import type { ComponentType } from "react";
import {
  SiDart,
  SiFigma,
  SiFlutter,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMysql,
  SiOpenjdk,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
} from "react-icons/si";
import { IconApi } from "@tabler/icons-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type IconComponent = ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
type TechItem = { name: string; Icon: IconComponent; color: string };

const tech: TechItem[] = [
  { name: "PHP", Icon: SiPhp, color: "#8892BF" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "React.js", Icon: SiReact, color: "#61DAFB" },
  { name: "Dart", Icon: SiDart, color: "#2BB7F6" },
  { name: "Flutter", Icon: SiFlutter, color: "#54C5F8" },
  { name: "Java", Icon: SiOpenjdk, color: "#EA2D2E" },
  { name: "Python", Icon: SiPython, color: "#FFD343" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "SQL / MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "REST API", Icon: IconApi, color: "#38BDF8" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
];

const rows = [tech.slice(0, 7), tech.slice(7, 13)];

const TechPill = ({ item }: { item: TechItem }) => (
  <div className="group flex shrink-0 items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 py-2.5 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white">
    <item.Icon
      size={18}
      style={{ color: item.color }}
      className="opacity-70 transition-opacity duration-300 group-hover:opacity-100"
    />
    <span className="whitespace-nowrap">{item.name}</span>
  </div>
);

export const TechStack = () => (
  <section id="tech-stack" className="relative py-20 md:py-32">
    <div className="wrapper">
      <SectionHeading
        label="Toolbox"
        title="Tech I work with."
        description="The stack behind the projects above — picked for the job, not for the résumé."
      />
    </div>

    <Reveal direction="up" delay={0.12} className="marquee-pause mt-10 space-y-3 md:mt-14 md:space-y-4">
      {rows.map((row, i) => (
        <div key={i} className="scroller overflow-hidden">
          <div
            className={`flex w-max gap-3 ${
              i % 2 === 0 ? "animate-scroll" : "animate-scroll-reverse"
            }`}
            style={{ animationDuration: `${30 + i * 6}s` }}
          >
            {[...row, ...row, ...row].map((item, index) => (
              <TechPill key={`${item.name}-${i}-${index}`} item={item} />
            ))}
          </div>
        </div>
      ))}
    </Reveal>
  </section>
);
