"use client";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { categories, products } from "@/constants/products";
import { ProjectCard } from "./ProjectCard";

export const Products = () => {
  const [active, setActive] = useState("All");

  const visible = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div>
      <div className="no-scrollbar -mx-1 mb-8 flex gap-2 overflow-x-auto px-1 pb-1 md:mb-10">
        {categories.map((cat) => {
          const isActive = cat === active;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={isActive}
              className={`relative shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-colors duration-300 sm:text-sm ${
                isActive ? "text-black" : "text-white/50 hover:text-white/85"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">
                {cat}
                <span className={isActive ? "ml-1.5 text-black/45" : "ml-1.5 text-white/25"}>
                  {cat === "All"
                    ? products.length
                    : products.filter((p) => p.category === cat).length}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 22, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <ProjectCard project={project} priority={i < 3} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
