"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutSidebarLeftCollapse, IconLayoutSidebarRightCollapse } from "@tabler/icons-react";
import { isMobile } from "@/lib/utils";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars"; 

export const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? false : true);

  return (
    <div className="relative bg-gray-900 text-white h-screen">
      {/* Stars Background */}
      <StarsBackground
        starDensity={0.00015}
        allStarsTwinkle={true}
        twinkleProbability={0.7}
        minTwinkleSpeed={0.5}
        maxTwinkleSpeed={1}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      <ShootingStars
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Sidebar Content - Tetap di kiri */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            exit={{ x: -200 }}
            className="px-6 z-[100] py-10 bg-white/10 backdrop-blur-md w-56 lg:w-64 fixed h-screen left-0 flex flex-col justify-between border-r border-white/10"
          >
            <div className="flex-1 overflow-auto">
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>
            <div onClick={() => isMobile() && setOpen(false)}>
              <Badge href="/resume" text="Read Resume" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button - Dipindah ke kanan bawah */}
      <button
        className="fixed bottom-6 right-6 h-12 w-12 rounded-full border-2 border-white bg-transparent hover:bg-white/10 flex items-center justify-center z-50 shadow-lg transition-all"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <IconLayoutSidebarLeftCollapse className="h-5 w-5 text-white" />
        ) : (
          <IconLayoutSidebarRightCollapse className="h-5 w-5 text-white" />
        )}
      </button>
    </div>
  );
};

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col space-y-1 my-10 relative z-[100]">
      {navlinks.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            "text-white hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
            isActive(link.href) && "bg-black shadow-lg text-white"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}

      <Heading as="p" className=" text-stone-400 text-sm md:text-sm lg:text-sm pt-10 px-2">
        Socials
      </Heading>
      {socials.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          className={twMerge(
            "text-white hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

const SidebarHeader = () => {
  return (  
    <div className="flex space-x-2">
      <Image
        src="/images/Profile.png"
        alt="Avatar"
        height="40"
        width="40"
        className="object-cover object-top rounded-full flex-shrink-0"
      />
      <div className="flex text-sm flex-col">
        <p className="font-bold text-white">Dava Rajif</p>
        <p className="font-light text-secondary">Developer</p>
      </div>
    </div>
  );
};
