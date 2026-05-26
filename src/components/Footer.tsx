import Link from "next/link";

const footerLinks = [
  { href: "/blog", label: "Articles" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

export const Footer = () => {
  return (
    <footer className="relative py-8 glass border-t border-white/10">
      <div className="wrapper">
        <div className="absolute bottom-0 right-0 w-52 h-80 blob-purple pointer-events-none" />
        <div className="flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-y-0 md:justify-between relative z-10">
          <div className="flex gap-x-6 text-white text-sm">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white/70 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-[#c7c7c7] text-sm">
            &copy; {new Date().getFullYear()} Dava Rajif. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
