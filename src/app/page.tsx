import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { WorkHistory } from "@/components/WorkHistory";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { ContactCTA } from "@/components/ContactCTA";
import { SectionHeading } from "@/components/SectionHeading";

export default function Home() {
  return (
    <>
      <Hero />

      <FeaturedProjects />

      <section id="experience" className="relative wrapper py-20 md:py-32">
        <SectionHeading
          label="Career"
          title="Where I've worked."
          description="Two companies, one internship and a final year spent turning a research idea into working software."
        />
        <div className="mt-10 md:mt-14">
          <WorkHistory />
        </div>
      </section>

      <Services />

      <TechStack />

      <ContactCTA />
    </>
  );
}
