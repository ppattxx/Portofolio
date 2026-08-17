import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { socials } from "@/constants/socials";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Dava Rajif — open to full-time roles, freelance work and collaborations.",
};

export default function ContactPage() {
  return (
    <div className="wrapper min-h-screen py-16 md:py-24">
      <SectionHeading
        label="Say hello"
        title="Let's talk."
        description="Open to full-time roles, freelance projects and anything that involves shipping something people actually use."
      />

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16 md:mt-14">
        <Reveal direction="up">
          <Contact />
        </Reveal>

        <Reveal direction="up" delay={0.12}>
          <div className="space-y-4">
            <div className="glass-card p-6">
              <h3 className="text-sm font-semibold text-white">Response time</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                I usually reply within a day. For anything time-sensitive, email is the
                fastest route.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-sm font-semibold text-white">Currently</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Full-stack developer at PT Shelter Indonesia, based in Surabaya. Available
                for remote and hybrid work.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-sm font-semibold text-white">Elsewhere</h3>
              <div className="mt-3 flex gap-2">
                {socials.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.04] text-white/55 transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
