"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconBriefcase, IconMapPin, IconSchool, IconWorld } from "@tabler/icons-react";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";

import PosCashier from "/public/images/mock/pos-cashier.png";
import Shelter1 from "/public/images/Shelter1.png";
import TA1 from "/public/images/TA1.png";
import GestureLive from "/public/images/mock/gesture-live.png";

const gallery = [
  { src: PosCashier, caption: "Calon Mantu POS — cashier screen" },
  { src: Shelter1, caption: "HRIS Shelter — internal platform" },
  { src: TA1, caption: "LombokEats — recommender" },
  { src: GestureLive, caption: "Gesture Detector — MediaPipe" },
];

const facts = [
  { icon: IconMapPin, label: "Based in", value: "Surabaya, Indonesia" },
  { icon: IconSchool, label: "Studied", value: "Informatics & Computer Eng., PENS" },
  { icon: IconBriefcase, label: "Currently", value: "Full-stack dev at PT Shelter Indonesia" },
  { icon: IconWorld, label: "Languages", value: "Indonesian (native), English (professional)" },
];

export default function About() {
  return (
    <div>
      <RevealGroup
        className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
        stagger={0.1}
      >
        {gallery.map((item) => (
          <RevealItem key={item.caption}>
            <SpotlightCard tilt={5} className="rounded-2xl">
              <figure className="glass-card overflow-hidden p-1.5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <figcaption className="px-2 py-2 text-[11px] text-white/35">
                  {item.caption}
                </figcaption>
              </figure>
            </SpotlightCard>
          </RevealItem>
        ))}
      </RevealGroup>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
        <div className="space-y-5 text-sm leading-relaxed text-white/60 md:text-base">
          <Reveal direction="up">
            <p className="text-lg font-medium text-white/85 md:text-xl">
              I&apos;m Dava — a full-stack developer who likes systems that people actually
              have to use on a Monday morning.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.06}>
            <p>
              I studied Informatics and Computer Engineering at Politeknik Elektronika Negeri
              Surabaya, where a lot of the coursework was hands-on rather than theoretical.
              That suited me: I learn a stack fastest by shipping something with it.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <p>
              My first real production experience was an internship at Panasonic
              Manufacturing Indonesia, working on a manufacturing-digitalisation project —
              a desktop web app for OK/NG spare-part inspection, a mobile app for container
              truck shipment data, and exposure to a web-based inventory monitoring system
              with multi-level approval. Working next to the people who use the software
              every shift changed how I think about interfaces: fewer clicks, louder errors,
              no clever abstractions the operator has to learn.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.14}>
            <p>
              Since July 2025 I&apos;ve been at PT Shelter Indonesia as a full-stack
              developer on their HRIS and career portal — CodeIgniter, MySQL, a lot of
              legacy code, and the discipline that comes with changing a system that
              hundreds of records depend on. Alongside that I built{" "}
              <span className="text-white/85">Calon Mantu POS</span>, a Laravel 12 + React 19
              point-of-sale suite with QRIS payments and QR self-ordering, which is the
              largest thing I&apos;ve designed end to end.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.18}>
            <p>
              On the research side, my final project became an IEEE-format paper on an
              interactive restaurant recommender for Lombok — content-based filtering over
              TF-IDF vectors with a split-interface UX, supervised by the Knowledge
              Engineering Laboratory at PENS. Building the dataset for it meant writing a
              resumable scraping pipeline, which turned out to be as interesting as the
              model.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.22}>
            <p>
              Across all of it the pattern is the same: I like the part where a rough
              business process becomes an explicit schema, and the part where a slow manual
              recap becomes a button. If that&apos;s the kind of problem you have, we&apos;ll
              get along.
            </p>
          </Reveal>
        </div>

        <div className="space-y-3">
          {facts.map((fact, i) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card flex items-start gap-3 p-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.04] text-[rgb(var(--accent))]">
                <fact.icon size={17} />
              </span>
              <span>
                <span className="block text-[11px] uppercase tracking-wider text-white/30">
                  {fact.label}
                </span>
                <span className="mt-0.5 block text-sm text-white/75">{fact.value}</span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
