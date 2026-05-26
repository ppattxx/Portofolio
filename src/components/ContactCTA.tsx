"use client";
import { motion } from "framer-motion";
import { IconMail, IconBrandInstagram, IconBrandGithub } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

export const ContactCTA = () => {
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

  const headingVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.1 + i * 0.15 },
    }),
  };

  return (
    <section id="contact" ref={ref} className="wrapper pt-24 md:pt-44 pb-20 md:pb-36">
      <motion.p
        className="section-label text-base"
        initial={{ opacity: 0, y: 25 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Let&apos;s get in touch
      </motion.p>
      <div className="flex flex-col gap-y-2 md:gap-y-3 mt-6">
        {[
          "Want to have coffee together?",
          "Have any project ideas?",
          "Ask something?",
        ].map((text, i) => (
          <motion.h2
            key={text}
            className="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight sm:leading-none"
            custom={i}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={headingVariants}
          >
            {text}
          </motion.h2>
        ))}
      </div>
      <motion.div
        className="mt-8 md:mt-12"
        initial={{ opacity: 0, y: 25 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 md:gap-x-8 flex-wrap break-all">
          <div className="flex items-center gap-x-2">
            <div className="bg-white rounded-full p-1.5 shrink-0">
              <IconMail size={16} className="text-[#1a232e]" />
            </div>
            <p className="text-white font-medium text-sm sm:text-base md:text-lg">acahyadava@gmail.com</p>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="bg-white rounded-full p-1.5 shrink-0">
              <IconBrandInstagram size={16} className="text-[#1a232e]" />
            </div>
            <p className="text-white font-medium text-sm sm:text-base md:text-lg">@acahyadvaa</p>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="bg-white rounded-full p-1.5 shrink-0">
              <IconBrandGithub size={16} className="text-[#1a232e]" />
            </div>
            <p className="text-white font-medium text-sm sm:text-base md:text-lg">@ppattxx</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
