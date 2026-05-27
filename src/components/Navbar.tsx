"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

const isLandingPage = (pathname: string) => pathname === "/";

const navItems = [
  { href: "#projects", label: "Projects", scrollId: "projects" },
  { href: "#companies", label: "Companies", scrollId: "companies" },
  { href: "#tech-stack", label: "Tech Stack", scrollId: "tech-stack" },
  { href: "#contact", label: "Contact", scrollId: "contact" },
];

const pageLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const pathname = usePathname();
  const isActive = isLandingPage(pathname) && href.startsWith("#") ? false : pathname === href;

  if (isActive) {
    return (
      <Link href={href} onClick={onClick} className="text-white font-medium">
        {label}
      </Link>
    );
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isLandingPage(pathname) && href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    onClick?.();
  };

  return (
    <Link href={href} onClick={handleClick}>
      <div className="overflow-hidden relative cursor-pointer group py-1">
        <div className="flex">
          {label.split("").map((char, i) => (
            <span
              key={i}
              className="relative inline-block transition-transform duration-300 group-hover:-translate-y-full text-white"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {char}
            </span>
          ))}
        </div>
        <div className="absolute inset-0 flex">
          {label.split("").map((char, i) => (
            <span
              key={i}
              className="relative inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-white font-medium"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full text-white z-50 backdrop-blur-2xl">
      <div className="wrapper flex items-center justify-between py-4">
        <Link href="/">
          <h1 className="text-xl sm:text-2xl font-bold text-white">Dava Rajif</h1>
        </Link>
        <div className="flex items-center gap-x-2 md:gap-x-6">
          <div className="order-last block md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center justify-center rounded-md transition-colors border border-white/20 hover:border-white/40 text-white h-10 w-10 p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
            </button>
          </div>
          <ul className="order-first hidden md:flex flex-row gap-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href} label={item.label} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 max-h-[80vh] overflow-y-auto">
          <div className="wrapper py-4 space-y-3">
            <p className="text-xs uppercase tracking-widest text-white/30 px-3">On this page</p>
            {navItems.map((item) => {
              const isActive = isLandingPage(pathname) && item.href.startsWith("#") ? false : pathname === item.href;
              const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                if (isLandingPage(pathname) && item.href.startsWith("#")) {
                  e.preventDefault();
                  const id = item.href.replace("#", "");
                  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                }
                setMobileOpen(false);
              };
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleClick}
                  className={`block py-2.5 px-3 rounded-lg text-sm transition-colors ${
                    isActive
                      ? "text-white bg-white/5"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <hr className="border-white/10 my-3" />
            <p className="text-xs uppercase tracking-widest text-white/30 px-3">Pages</p>
            {pageLinks.map((item) => {
              const isActive = pathname === item.href;
              const handleClick = () => setMobileOpen(false);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleClick}
                  className={`block py-2.5 px-3 rounded-lg text-sm transition-colors ${
                    isActive
                      ? "text-white bg-white/5"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
