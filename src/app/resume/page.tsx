import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Dava Rajif",
  description: "",
};

export default function Resume() {
  return (
    <div className="min-h-screen wrapper py-20 md:py-28">
      <p className="section-label">My professional journey</p>
      <Heading className="font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-2 mb-4">
        Work History.
      </Heading>
      <Paragraph className="max-w-xl mb-8 md:mb-10 text-[#c7c7c7] text-sm md:text-base">
        A timeline of my professional experience.
      </Paragraph>
      <WorkHistory />
    </div>
  );
}
