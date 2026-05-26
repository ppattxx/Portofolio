import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Dava Rajif",
  description: "",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <div className="min-h-screen wrapper py-20 md:py-28">
      <p className="section-label">Read insightful articles here</p>
      <Heading className="font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-2 mb-4">
        My Latest Writings.
      </Heading>
      <Paragraph className="max-w-xl mb-8 md:mb-10 text-[#c7c7c7] text-sm md:text-base">
        I write about technology and web development.
      </Paragraph>
      <Blogs blogs={data} />
    </div>
  );
}
