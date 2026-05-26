import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Dava Rajif",
  description: "",
};

export default function Projects() {
  return (
    <div className="min-h-screen wrapper py-20 md:py-28">
      <p className="section-label">Some projects that I&apos;m proud of</p>
      <Heading className="font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-2 mb-4">
        Featured Projects.
      </Heading>
      <Paragraph className="max-w-xl mb-8 md:mb-10 text-[#c7c7c7] text-sm md:text-base">
        A collection of projects I&apos;ve built over the years.
      </Paragraph>
      <Products />
    </div>
  );
}
