"use client";
import React from "react";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TiltCard } from "./TiltCard";

export const Products = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
      {products.map((product: Product, idx: number) => (
        <motion.div
          key={product.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.1 }}
        >
          <TiltCard>
            <Link
              href={product.slug ? `/projects/${product.slug}` : product.href}
              className="glass-card overflow-hidden p-4 flex flex-col h-full group block"
            >
              <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <h3 className="font-bold text-base sm:text-lg text-white mt-4 group-hover:text-[rgb(var(--accent))] transition-colors duration-300">
                {product.title}
              </h3>
              <p className="text-[#c7c7c7] text-sm mt-1 line-clamp-3 leading-relaxed">
                {product.description}
              </p>
              {product.stack && (
                <div className="mt-auto pt-4 flex items-end gap-3 flex-wrap">
                  {product.stack.slice(0, 4).map((tech: string) => (
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
        </motion.div>
      ))}
    </div>
  );
};
