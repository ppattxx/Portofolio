"use client";
import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import type { Product } from "@/types/products";
import { SpotlightCard } from "./SpotlightCard";

export const ProjectCard = ({
  project,
  priority = false,
}: {
  project: Product;
  priority?: boolean;
}) => (
  <SpotlightCard className="rounded-2xl">
    <Link
      href={project.slug ? `/projects/${project.slug}` : project.href}
      className="glass-card group flex h-full flex-col overflow-hidden p-3 sm:p-4"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-white/[0.03]">
        <Image
          src={project.thumbnail}
          alt={`${project.title} interface`}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        {project.category && (
          <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/55 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/75 backdrop-blur">
            {project.category}
          </span>
        )}
        <span className="absolute right-3 top-3 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <IconArrowUpRight size={15} />
        </span>
      </div>

      <div className="flex flex-1 flex-col px-1 pt-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-base font-bold text-white transition-colors duration-300 group-hover:text-[rgb(var(--accent))] sm:text-lg">
            {project.title}
          </h3>
          {project.date && (
            <span className="shrink-0 text-[11px] tabular-nums text-white/30">
              {project.date.split("—")[0].trim()}
            </span>
          )}
        </div>

        {(project.role || project.org) && (
          <p className="mt-1 text-xs text-white/40">
            {[project.role, project.org].filter(Boolean).join(" · ")}
          </p>
        )}

        <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-white/55">
          {project.description}
        </p>

        {project.stack && (
          <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-4">
            {project.stack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2 py-1 text-[11px] text-white/45 transition-colors duration-300 group-hover:border-white/15 group-hover:text-white/70"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span className="text-[11px] text-white/30">
                +{project.stack.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  </SpotlightCard>
);
