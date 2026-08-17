"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { IconArrowDown, IconArrowRight, IconMapPin } from "@tabler/icons-react";
import { socials } from "@/constants/socials";

const ROLES = [
  "full-stack web apps.",
  "point-of-sale systems.",
  "Flutter mobile apps.",
  "data pipelines.",
];

const STATS = [
  { value: "11", label: "Shipped projects" },
  { value: "3", label: "Companies & clients" },
  { value: "2026", label: "Informatics grad, PENS" },
];

export const Hero = () => {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2800);
    return () => clearInterval(id);
  }, [reduced]);

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="wrapper relative flex min-h-[calc(100svh-var(--nav-h))] items-center py-16 md:py-0">
      <div className="grid w-full grid-cols-1 items-center gap-10 pt-6 md:grid-cols-[1.15fr_1fr] md:gap-16 md:pt-0">
        {/* ---------------------------------------------------------- copy */}
        <div>
          <motion.div {...rise(0)} className="mb-6 flex flex-wrap items-center gap-3">
            <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-white/70">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to new opportunities
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-white/35">
              <IconMapPin size={13} />
              Surabaya, Indonesia
            </span>
          </motion.div>

          <motion.p {...rise(0.08)} className="mb-3 text-sm text-white/45 md:text-base">
            Hi, my name is
          </motion.p>

          <motion.h1
            {...rise(0.16)}
            className="text-gradient mb-3 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl"
          >
            Dava Rajif.
          </motion.h1>

          <motion.h2
            {...rise(0.24)}
            className="mb-6 text-2xl font-bold leading-tight text-white/85 sm:text-3xl lg:text-[2.75rem]"
          >
            <span className="block sm:inline">I build </span>
            <span className="relative inline-block align-top">
              <AnimatePresence mode="wait">
                {/* no filter/blur here: it breaks background-clip:text in Chromium */}
                <motion.span
                  key={ROLES[index]}
                  initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? { opacity: 0 } : { opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block bg-gradient-to-r from-[rgb(var(--accent))] to-[rgb(var(--accent-2))] bg-clip-text text-transparent"
                >
                  {ROLES[index]}
                </motion.span>
              </AnimatePresence>
              <span className="ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] animate-caret bg-[rgb(var(--accent))] align-middle" />
            </span>
          </motion.h2>

          <motion.p
            {...rise(0.32)}
            className="max-w-xl text-sm leading-relaxed text-white/55 md:text-base"
          >
            Full-stack developer from Surabaya. I work across Laravel, React and Flutter —
            currently building HR and point-of-sale platforms that real businesses run on
            every day.
          </motion.p>

          <motion.div {...rise(0.4)} className="flex flex-col gap-3 pt-8 sm:flex-row">
            <Link href="/projects" className="group">
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(255,255,255,0.5)] sm:w-auto">
                See my work
                <IconArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </Link>
            <Link href="/contact">
              <button className="glass card-hover w-full rounded-xl px-6 py-3.5 text-sm font-semibold text-white sm:w-auto">
                Get in touch
              </button>
            </Link>
          </motion.div>

          <motion.div {...rise(0.48)} className="flex items-center gap-3 pt-8">
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="glass flex h-10 w-10 items-center justify-center rounded-xl text-white/55 transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
              >
                <social.icon size={18} />
              </a>
            ))}
            <div className="ml-2 h-px flex-1 bg-gradient-to-r from-white/12 to-transparent" />
          </motion.div>

          <motion.dl {...rise(0.56)} className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-bold text-white md:text-3xl">{stat.value}</dt>
                <dd className="mt-0.5 text-[11px] uppercase tracking-wider text-white/35">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* ------------------------------------------------------- portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="order-first flex justify-center md:order-last md:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-[conic-gradient(from_0deg,rgba(56,189,248,0.35),rgba(167,139,250,0.35),rgba(45,212,191,0.35),rgba(56,189,248,0.35))] opacity-60 blur-2xl animate-spin-slow" />
            <div className="absolute -inset-1 animate-pulse-ring rounded-full border border-white/15" />
            <motion.div
              animate={reduced ? {} : { y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-52 w-52 overflow-hidden rounded-full border border-white/15 shadow-2xl sm:h-64 sm:w-64 md:h-80 md:w-80"
            >
              <Image
                src="/images/Profile.png"
                alt="Portrait of Dava Rajif"
                fill
                priority
                sizes="(max-width: 640px) 208px, (max-width: 768px) 256px, 320px"
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#projects"
        aria-label="Scroll to projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-white/30 transition-colors hover:text-white/70 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <IconArrowDown size={15} className="animate-scroll-cue" />
      </motion.a>
    </section>
  );
};
