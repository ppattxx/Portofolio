import Link from "next/link";
import { socials } from "@/constants/socials";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export const Footer = () => (
  <footer className="relative mt-8 border-t border-white/[0.07]">
    <div className="wrapper py-10">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <Link href="/" className="text-base font-bold text-white">
            Dava Rajif
          </Link>
          <p className="mt-1 text-xs text-white/35">
            Full-stack developer · Surabaya, Indonesia
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/45 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-2">
          {socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="glass flex h-9 w-9 items-center justify-center rounded-lg text-white/50 transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <p className="mt-8 border-t border-white/[0.05] pt-6 text-center text-xs text-white/25">
        &copy; {new Date().getFullYear()} Dava Rajif Cahyadiansyah. Built with Next.js,
        Tailwind CSS and Framer Motion.
      </p>
    </div>
  </footer>
);
