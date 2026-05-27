"use client";
import { Product } from "@/types/products";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft } from "@tabler/icons-react";

export const SingleProduct = ({ product }: { product: Product }) => {
  const [activeImage, setActiveImage] = useState<StaticImageData | string>(product.thumbnail);

  return (
    <div className="py-8 md:py-10">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-[#c7c7c7] hover:text-white transition-colors mb-6 md:mb-8"
      >
        <IconArrowLeft size={16} />
        Back to Projects
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        key={product.slug}
      >
        <div className="glass rounded-2xl overflow-hidden mb-6 card-hover">
          <Image
            src={activeImage}
            alt={product.title}
            height={1000}
            width={1000}
            className="w-full object-cover max-h-[24rem] md:max-h-[28rem]"
          />
        </div>

        {product.images.length > 1 && (
          <div className="flex gap-2 mb-6 md:mb-8 overflow-x-auto pb-2 scrollbar-none">
            {product.images.map((image, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(image)}
                className={`shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  activeImage === image
                    ? "border-white shadow-lg shadow-white/10"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.title} ${idx + 1}`}
                  height={80}
                  width={120}
                  className="h-12 w-16 sm:h-14 sm:w-20 md:h-16 md:w-24 object-cover"
                />
              </button>
            ))}
          </div>
        )}

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">{product.title}</h1>
            {(product.role || product.date) && (
              <p className="text-sm text-[#c7c7c7]">
                {product.role}
                {product.role && product.date ? " • " : ""}
                {product.date}
              </p>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {product.stack?.map((tech: string) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full glass text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <p className="text-sm text-[#c7c7c7] mb-6 max-w-3xl leading-relaxed">
          {product.description}
        </p>

        {product.results && (
          <div className="glass rounded-2xl p-4 md:p-5 mb-6 card-hover">
            <p className="text-xs uppercase tracking-wider text-[#c7c7c7] mb-2">
              Results
            </p>
            <p className="text-sm text-white/90 leading-relaxed">{product.results}</p>
          </div>
        )}

        {product.content && (
          <div className="text-sm text-[#c7c7c7] leading-relaxed mb-8 space-y-4">
            {product.content}
          </div>
        )}

        <a
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-xl text-sm font-medium transition-all duration-300 text-white glass card-hover"
        >
          Live Preview
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </motion.div>
    </div>
  );
};
