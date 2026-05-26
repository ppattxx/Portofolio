import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import About from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Dava Rajif",
  description: "",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen wrapper py-20 md:py-28">
      <p className="section-label">Get to know me</p>
      <Heading className="font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-2 mb-8 md:mb-12">
        About Me.
      </Heading>
      <About />
    </div>
  );
}
