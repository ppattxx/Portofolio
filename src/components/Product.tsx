"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowUpRight, IconCheck } from "@tabler/icons-react";
import type { Product } from "@/types/products";

export const SingleProduct = ({ product }: { product: Product }) => {
  const [active, setActive] = useState<StaticImageData | string>(product.thumbnail);
  const hasLink = Boolean(product.href && product.href !== "#");

  return (
    <div className="py-6 md:py-10">
      <Link
        href="/projects"
        className="group mb-8 inline-flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-white"
      >
        <IconArrowLeft
          size={16}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
        All projects
      </Link>

      <motion.div
        key={product.slug}
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* ------------------------------------------------------- header */}
        <div className="flex flex-wrap items-center gap-2">
          {product.category && (
            <span className="rounded-full border border-[rgb(var(--accent))]/25 bg-[rgb(var(--accent))]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-[rgb(var(--accent))]">
              {product.category}
            </span>
          )}
          {product.date && (
            <span className="rounded-full border border-white/[0.09] bg-white/[0.04] px-3 py-1 text-[11px] text-white/45">
              {product.date}
            </span>
          )}
        </div>

        <h1 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
          {product.title}
        </h1>

        {(product.role || product.org) && (
          <p className="mt-2 text-sm text-white/45 md:text-base">
            {[product.role, product.org].filter(Boolean).join(" · ")}
          </p>
        )}

        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/60 md:text-base">
          {product.description}
        </p>

        {/* -------------------------------------------------------- images */}
        <div className="glass mt-9 overflow-hidden rounded-2xl p-2">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
            <Image
              src={active}
              alt={`${product.title} screenshot`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1100px"
              className="object-cover object-top"
            />
          </div>
        </div>

        {product.images.length > 1 && (
          <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1">
            {(product.images as (StaticImageData | string)[]).map((image, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActive(image)}
                aria-label={`View screenshot ${idx + 1}`}
                className={`relative h-14 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 sm:h-16 sm:w-28 ${
                  active === image
                    ? "border-white/70"
                    : "border-white/10 hover:border-white/35"
                }`}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="120px"
                  className="object-cover object-top"
                />
              </button>
            ))}
          </div>
        )}

        {/* ------------------------------------------------------- metrics */}
        {product.metrics && (
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {product.metrics.map((metric) => (
              <div key={metric.label} className="glass-card p-5">
                <p className="text-xl font-bold text-white md:text-2xl">{metric.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-white/35">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* -------------------------------------------------------- detail */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            {product.content && (
              <div className="text-sm leading-relaxed text-white/60 md:text-base">
                <h2 className="mb-4 text-lg font-bold text-white">Overview</h2>
                {product.content}
              </div>
            )}

            {product.highlights && (
              <div className="mt-10">
                <h2 className="mb-4 text-lg font-bold text-white">What I built</h2>
                <ul className="space-y-3">
                  {product.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgb(var(--accent))]/12 text-[rgb(var(--accent))]">
                        <IconCheck size={12} stroke={3} />
                      </span>
                      <span className="text-sm leading-relaxed text-white/55">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="glass-card p-5">
              <h3 className="text-[11px] uppercase tracking-wider text-white/35">
                Tech stack
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {product.stack?.map((tech) => (
                  <span key={tech} className="tag-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {product.results && (
              <div className="glass-card p-5">
                <h3 className="text-[11px] uppercase tracking-wider text-white/35">
                  Outcome
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {product.results}
                </p>
              </div>
            )}

            {hasLink ? (
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5"
              >
                Visit live project
                <IconArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ) : (
              <p className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-xs leading-relaxed text-white/35">
                This system is internal or client-owned, so there is no public link. The
                screenshots above reproduce the interface — happy to walk through the code
                in a conversation.
              </p>
            )}
          </aside>
        </div>
      </motion.div>
    </div>
  );
};
