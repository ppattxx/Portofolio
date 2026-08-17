import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { featuredProducts, products } from "@/constants/products";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export const FeaturedProjects = () => (
  <section id="projects" className="relative wrapper py-20 md:py-32">
    <SectionHeading
      label="Selected work"
      title="Things I've shipped."
      description="Point-of-sale systems, internal platforms, mobile apps and data pipelines — most of them running in production for real businesses."
    />

    <RevealGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-14 md:gap-5 lg:grid-cols-3">
      {featuredProducts.map((project, i) => (
        <RevealItem key={project.slug} className="h-full">
          <ProjectCard project={project} priority={i < 3} />
        </RevealItem>
      ))}
    </RevealGroup>

    <Reveal direction="up" delay={0.1} className="mt-10 flex justify-center md:mt-12">
      <Link
        href="/projects"
        className="glass card-hover group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-white"
      >
        View all {products.length} projects
        <IconArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </Reveal>
  </section>
);
