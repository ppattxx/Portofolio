"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { Reveal } from "./Reveal";

const LINES = ["Have a project", "in mind?", "Let's build it."];

const CHANNELS = [
  {
    icon: IconMail,
    label: "Email",
    value: "acahyadava@gmail.com",
    href: "mailto:acahyadava@gmail.com",
  },
  {
    icon: IconBrandLinkedin,
    label: "LinkedIn",
    value: "/in/dava-rajif",
    href: "https://linkedin.com/in/dava-rajif",
  },
  {
    icon: IconBrandGithub,
    label: "GitHub",
    value: "@ppattxx",
    href: "https://github.com/ppattxx",
  },
  {
    icon: IconBrandInstagram,
    label: "Instagram",
    value: "@acahyadvaa",
    href: "https://instagram.com/acahyadvaa",
  },
];

export const ContactCTA = () => (
  <section id="contact" className="wrapper relative py-20 md:py-32">
    <Reveal direction="up">
      <p className="section-label">Get in touch</p>
    </Reveal>

    <div className="mt-4 md:mt-6">
      {LINES.map((line, i) => (
        <motion.h2
          key={line}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          className={`text-3xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl ${
            i === LINES.length - 1 ? "text-gradient" : "text-white"
          }`}
        >
          {line}
        </motion.h2>
      ))}
    </div>

    <Reveal direction="up" delay={0.25}>
      <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/50 md:text-base">
        I&apos;m open to full-time roles, freelance work and interesting collaborations.
        The fastest way to reach me is email — I usually reply within a day.
      </p>
    </Reveal>

    <Reveal direction="up" delay={0.32}>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/contact">
          <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(255,255,255,0.5)] sm:w-auto">
            Start a conversation
            <IconArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </Link>
        <a href="mailto:acahyadava@gmail.com">
          <button className="glass card-hover w-full rounded-xl px-6 py-3.5 text-sm font-semibold text-white sm:w-auto">
            acahyadava@gmail.com
          </button>
        </a>
      </div>
    </Reveal>

    <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {CHANNELS.map((channel, i) => (
        <Reveal key={channel.label} direction="up" delay={0.1 + i * 0.07}>
          <a
            href={channel.href}
            target={channel.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="glass-card group flex items-center gap-3 p-4"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.04] text-white/60 transition-colors duration-300 group-hover:text-[rgb(var(--accent))]">
              <channel.icon size={18} />
            </span>
            <span className="min-w-0">
              <span className="block text-[11px] uppercase tracking-wider text-white/30">
                {channel.label}
              </span>
              <span className="block truncate text-sm text-white/75 transition-colors group-hover:text-white">
                {channel.value}
              </span>
            </span>
          </a>
        </Reveal>
      ))}
    </div>
  </section>
);
