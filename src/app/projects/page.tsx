import type { Metadata } from "next";
import { Products } from "@/components/Products";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Point-of-sale platforms, HR systems, mobile apps, recommenders and data pipelines built by Dava Rajif.",
};

export default function ProjectsPage() {
  return (
    <div className="wrapper min-h-screen py-16 md:py-24">
      <SectionHeading
        label="Portfolio"
        title="Everything I've built."
        description="Client work, company systems, research prototypes and side projects — filter by what you're looking for."
      />
      <div className="mt-10 md:mt-14">
        <Products />
      </div>
    </div>
  );
}
