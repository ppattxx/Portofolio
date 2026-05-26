"use client";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/constants/products";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TiltCard } from "./TiltCard";

export const FeaturedProjects = () => {
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
    <section id="projects" ref={ref} className="relative wrapper py-24 md:py-36">
      <motion.p
        className="section-label"
        initial={{ opacity: 0, y: 25 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Some projects that I&apos;m proud of
      </motion.p>
      <motion.h2
        className="font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-2"
        initial={{ opacity: 0, y: 25 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Featured Projects.
      </motion.h2>
      <motion.div
        className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        initial={{ opacity: 0, y: 25 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {products.map((project) => (
          <TiltCard key={project.title}>
            <Link
              href={project.slug ? `/projects/${project.slug}` : project.href}
              className="glass-card overflow-hidden p-4 flex flex-col h-full group block"
            >
              <div className="relative w-full h-48 md:h-56 rounded-xl overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <h3 className="font-bold text-lg text-white mt-4 group-hover:text-[rgb(var(--accent))] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-[#c7c7c7] text-sm mt-1 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
              {project.stack && (
                <div className="mt-auto pt-4 flex items-end gap-3 flex-wrap">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-white/50 group-hover:text-white/80 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </TiltCard>
        ))}
      </motion.div>
    </section>
  );
};
