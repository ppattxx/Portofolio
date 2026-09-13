"use client";
import {
  IconApi,
  IconCode,
  IconDatabase,
  IconDeviceMobile,
  IconServer,
  IconUsersGroup,
} from "@tabler/icons-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";

const skills = [
  {
    title: "Frontend Engineering",
    icon: IconCode,
    body: "React.js and JavaScript frontends with Tailwind. Component systems that survive more than one designer.",
    tags: ["React.js", "JavaScript", "Tailwind"],
  },
  {
    title: "Backend & REST API",
    icon: IconServer,
    body: "Laravel and CodeIgniter services with role-based access, validation and documented REST surfaces.",
    tags: ["PHP", "Laravel", "CodeIgniter", "REST API"],
  },
  {
    title: "Mobile Development",
    icon: IconDeviceMobile,
    body: "Flutter apps shipped to the Play Store, built for low-end Android and unreliable networks.",
    tags: ["Flutter", "Dart", "REST API"],
  },
  {
    title: "Databases",
    icon: IconDatabase,
    body: "Relational schemas for inventory, orders and HR — designed in PostgreSQL and MySQL, normalised and auditable.",
    tags: ["SQL", "PostgreSQL", "MySQL"],
  },
  {
    title: "Software Quality Assurance",
    icon: IconApi,
    body: "Manual QA, structured test scenarios and datasets — making sure a build behaves before it ships.",
    tags: ["QA Testing", "Test Scenarios", "Figma"],
  },
  {
    title: "Project & Collaboration",
    icon: IconUsersGroup,
    body: "Agile workflow design, project documentation and team coordination across cross-functional projects.",
    tags: ["Agile", "Workflow Design", "Documentation", "Git/GitHub"],
  },
];

export const Services = () => (
  <section id="skills" className="relative wrapper py-20 md:py-32">
    <SectionHeading
      label="What I do"
      title="Skills & focus areas."
      description="I'm most useful where the frontend and the database have to agree with each other."
    />

    <RevealGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
      {skills.map((skill) => (
        <RevealItem key={skill.title} className="h-full">
          <SpotlightCard tilt={4} className="rounded-2xl">
            <div className="glass-card group flex h-full flex-col p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.04] text-[rgb(var(--accent))] transition-all duration-500 group-hover:scale-110 group-hover:border-[rgb(var(--accent))]/30">
                <skill.icon size={21} strokeWidth={1.6} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">{skill.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{skill.body}</p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                {skill.tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </RevealItem>
      ))}
    </RevealGroup>
  </section>
);
