import { Contact } from "@/components/Contact";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Dava Rajif",
  description: "",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen wrapper py-20 md:py-28">
      <p className="section-label">Let&apos;s get in touch</p>
      <Heading className="font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-2 mb-4">
        Contact Me.
      </Heading>
      <Paragraph className="max-w-xl mb-8 md:mb-10 text-[#c7c7c7] text-sm md:text-base">
        Have a project idea or just want to say hi? Fill out the form below
        and I&apos;ll get back to you as soon as possible.
      </Paragraph>
      <div className="max-w-2xl">
        <Contact />
      </div>
    </div>
  );
}
