import type { Metadata } from "next";
import About from "@/components/About";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Dava Rajif Cahyadiansyah — full-stack developer from Surabaya, graduate of Informatics & Computer Engineering at PENS.",
};

export default function AboutPage() {
  return (
    <div className="wrapper min-h-screen py-16 md:py-24">
      <SectionHeading
        label="Get to know me"
        title="About me."
        description="Where I've worked, what I studied, and the kind of problems I keep coming back to."
      />
      <div className="mt-10 md:mt-14">
        <About />
      </div>
    </div>
  );
}
