"use client";
import {
  SiDart,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFlutter,
  SiGit,
  SiGitlab,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPandas,
  SiPhp,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type TechItem = { name: string; Icon: IconType; color: string };

const tech: TechItem[] = [
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Vite", Icon: SiVite, color: "#A855F7" },
  { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
  { name: "PHP", Icon: SiPhp, color: "#8892BF" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", Icon: SiExpress, color: "#FFFFFF" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "SQLite", Icon: SiSqlite, color: "#59B6E4" },
  { name: "Flutter", Icon: SiFlutter, color: "#54C5F8" },
  { name: "Dart", Icon: SiDart, color: "#2BB7F6" },
  { name: "Python", Icon: SiPython, color: "#FFD343" },
  { name: "scikit-learn", Icon: SiScikitlearn, color: "#F89939" },
  { name: "Pandas", Icon: SiPandas, color: "#C9CBCF" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitLab", Icon: SiGitlab, color: "#FC6D26" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
];

const rows = [tech.slice(0, 7), tech.slice(7, 14), tech.slice(14, 21)];

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
