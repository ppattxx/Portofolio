import type { Metadata } from "next";
import { WorkHistory } from "@/components/WorkHistory";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Work history and education of Dava Rajif Cahyadiansyah — PT Shelter Indonesia, PT Panasonic Manufacturing Indonesia, Agile Teknik and PENS.",
};

const CORE = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "PHP", "Python", "Dart", "SQL"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Zustand", "TanStack Query"] },
  { group: "Backend", items: ["Laravel", "CodeIgniter", "Express", "Flask", "REST APIs"] },
  { group: "Data", items: ["MySQL", "SQLite", "Pandas", "scikit-learn", "Selenium"] },
  { group: "Mobile", items: ["Flutter", "Dart"] },
  { group: "Tooling", items: ["Git", "GitLab", "Docker", "Nginx", "Figma"] },
];

export default function ResumePage() {
  return (
    <div className="wrapper min-h-screen py-16 md:py-24">
      <SectionHeading
        label="Resume"
        title="Experience & education."
        description="A full-stack developer with production experience across HR platforms, manufacturing tooling, point-of-sale systems and mobile apps."
      />

      <div className="mt-10 md:mt-14">
        <WorkHistory />
      </div>

      <section className="mt-16 md:mt-24">
        <Reveal direction="up">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Core skills</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CORE.map((section, i) => (
            <Reveal key={section.group} direction="up" delay={i * 0.06}>
              <div className="glass-card h-full p-5">
                <h3 className="text-[11px] uppercase tracking-wider text-white/35">
                  {section.group}
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {section.items.map((item) => (
                    <span key={item} className="tag-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
