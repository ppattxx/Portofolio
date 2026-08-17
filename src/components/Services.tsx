"use client";
import {
  IconCode,
  IconDatabase,
  IconDeviceMobile,
  IconRobot,
  IconServer,
  IconTopologyStar3,
} from "@tabler/icons-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";

const skills = [
  {
    title: "Frontend Engineering",
    icon: IconCode,
    body: "React and Next.js with TypeScript and Tailwind. Component systems that survive more than one designer.",
    tags: ["React 19", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Backend & APIs",
    icon: IconServer,
    body: "Laravel and CodeIgniter services with token auth, webhooks and documented REST surfaces.",
    tags: ["Laravel 12", "PHP", "Express", "Sanctum"],
  },
  {
    title: "Mobile Development",
    icon: IconDeviceMobile,
    body: "Flutter apps shipped to the Play Store, built for low-end Android and unreliable networks.",
    tags: ["Flutter", "Dart", "REST"],
  },
  {
    title: "Data Modelling",
    icon: IconDatabase,
    body: "Relational schemas for inventory, orders and HR — normalised, indexed, and auditable.",
    tags: ["MySQL", "SQLite", "SQLAlchemy"],
  },
  {
    title: "Data & Machine Learning",
    icon: IconRobot,
    body: "Content-based recommenders, Indonesian NLP preprocessing, and computer vision with MediaPipe.",
    tags: ["Python", "scikit-learn", "OpenCV"],
  },
  {
    title: "Automation & Delivery",
    icon: IconTopologyStar3,
    body: "Resumable scrapers, Excel exports and Docker builds — the plumbing that makes a system usable.",
    tags: ["Selenium", "Docker", "Nginx"],
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
