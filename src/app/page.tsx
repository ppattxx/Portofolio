import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { ContactCTA } from "@/components/ContactCTA";
import { WorkHistory } from "@/components/WorkHistory";
export default function Home() {
  return (
    <>
      <section className="wrapper min-h-[60vh] md:min-h-[80vh] flex items-center py-16 md:py-0">
        <div className="w-full pt-8 md:pt-16">
          <p className="text-white/50 text-xs sm:text-sm md:text-base mb-2 md:mb-4">
            Hi there, I&apos;m
          </p>
          <h1 className="font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight mb-3 md:mb-4">
            Dava Rajif
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-[#c7c7c7] max-w-2xl leading-relaxed">
            A passionate developer, visual thinker, and admirer of beautiful
            digital experiences. Welcome to my corner of the web!
          </p>
          <p className="text-sm sm:text-base md:text-lg text-[#c7c7c7] max-w-2xl leading-relaxed mt-3 md:mt-4">
            Since the beginning of my journey in tech, I&apos;ve been fascinated
            by how lines of code can evolve into intuitive, responsive, and
            elegant applications. Whether it&apos;s building mobile apps with
            Flutter or crafting pixel perfect user interfaces with React and
            Tailwind CSS, I love turning ideas into real, impactful solutions
            that blend functionality with aesthetic charm.
          </p>
        </div>
      </section>

      <FeaturedProjects />
      <section id="companies" className="relative wrapper py-20 md:py-28">
        <p className="section-label">Where I&apos;ve worked</p>
        <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-2 mb-10 md:mb-12">
          Work Experience.
        </h2>
        <WorkHistory />
      </section>
      <Services />
      <TechStack />
      <ContactCTA />
    </>
  );
}
