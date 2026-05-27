import Image from "next/image";
import Link from "next/link";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { ContactCTA } from "@/components/ContactCTA";
import { WorkHistory } from "@/components/WorkHistory";

export default function Home() {
  return (
    <>
      <section className="wrapper min-h-screen flex items-center py-16 md:py-0">
        <div className="w-full pt-8 md:pt-0 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <p className="text-white/60 text-sm md:text-base mb-4">
                Hi! My name is
              </p>
              <h1 className="font-black text-5xl md:text-6xl lg:text-7xl text-white tracking-tight mb-2">
                Dava Rajif.
              </h1>
              <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white/80 mb-6">
                I Build things for the web.
              </h2>
            </div>
            
            <p className="text-sm md:text-base text-white/70 max-w-xl leading-relaxed">
              A passionate developer, visual thinker, and admirer of beautiful digital experiences. I specialize in designing, developing, and maintaining user experiences on web pages.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 hover:shadow-lg transition-all duration-200 hover:scale-105">
                  Get Resume
                </button>
              </Link>
              <Link href="/about">
                <button className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:border-white/60 hover:bg-white/5 transition-all duration-200">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-48 sm:w-64 h-48 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl hover:shadow-white/20 transition-all duration-300 max-w-full">
              <Image
                src="/images/Profile.png"
                alt="Dava Rajif"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 320px"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <FeaturedProjects />
      </section>

      <section id="companies" className="relative wrapper py-20 md:py-28">
        <p className="section-label">Where I&apos;ve worked</p>
        <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-2 mb-10 md:mb-12">
          Work Experience.
        </h2>
        <WorkHistory />
      </section>

      <section id="skills">
        <Services />
      </section>

      <section id="tech-stack">
        <TechStack />
      </section>

      <section id="contact">
        <ContactCTA />
      </section>
    </>
  );
}
