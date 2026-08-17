"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

const PAGES = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

const SECTIONS = [
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#tech-stack", label: "Stack" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollTo = (e: React.MouseEvent, href: string) => {
    if (!isHome) return;
    e.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.07] bg-[rgb(var(--bg))]/72 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="wrapper flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="text-base font-bold tracking-tight text-white sm:text-lg">
            Dava Rajif
          </span>
        </Link>

        {/* desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {(isHome ? SECTIONS : []).map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollTo(e, item.href)}
              className="rounded-lg px-3 py-2 text-sm text-white/50 transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          {isHome && <span className="mx-2 h-4 w-px bg-white/10" />}
          {PAGES.filter((p) => !(isHome && p.href === "/")).map((page) => {
            const active = pathname === page.href;
            return (
              <Link
                key={page.href}
                href={page.href}
                className={`relative rounded-lg px-3 py-2 text-sm transition-colors duration-300 ${
                  active ? "text-white" : "text-white/50 hover:text-white"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg bg-white/[0.08]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{page.label}</span>
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="glass flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
        >
          {open ? <IconX size={18} /> : <IconMenu2 size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/[0.07] bg-[rgb(var(--bg))]/95 backdrop-blur-xl md:hidden"
          >
            <div className="wrapper max-h-[70svh] space-y-1 overflow-y-auto py-4">
              {isHome && (
                <>
                  <p className="px-3 pb-1 text-[10px] uppercase tracking-[0.2em] text-white/25">
                    On this page
                  </p>
                  {SECTIONS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => scrollTo(e, item.href)}
                      className="block rounded-lg px-3 py-2.5 text-sm text-white/60 transition-colors hover:bg-white/[0.05] hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="my-2 h-px bg-white/[0.07]" />
                </>
              )}
              <p className="px-3 pb-1 text-[10px] uppercase tracking-[0.2em] text-white/25">
                Pages
              </p>
              {PAGES.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className={`block rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    pathname === page.href
                      ? "bg-white/[0.07] text-white"
                      : "text-white/60 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
