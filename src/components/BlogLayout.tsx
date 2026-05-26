import { formatDate } from "../../lib/formatDate";
import { Prose } from "@/components/Prose";
import { Heading } from "./Heading";
import Link from "next/link";
import Image from "next/image";
import { IconArrowLeft } from "@tabler/icons-react";

export function BlogLayout({ children, meta }: any) {
  return (
    <div className="min-h-screen wrapper py-20 md:py-28">
      <article className="max-w-3xl mx-auto">
        <header className="flex flex-col">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#c7c7c7] hover:text-white transition-colors mb-4 md:mb-6"
          >
            <IconArrowLeft size={16} />
            Back to Articles
          </Link>

          <Heading className="text-white mb-2 text-2xl md:text-4xl">{meta.title}</Heading>
          <time
            dateTime={meta.date}
            className="flex items-center text-xs md:text-sm text-[#c7c7c7] mb-4 md:mb-6"
          >
            {formatDate(meta.date)}
          </time>

          {meta.image && (
            <div className="w-full rounded-2xl overflow-hidden glass mb-6 md:mb-8">
              <Image
                src={meta.image}
                alt={meta.title || "Blog thumbnail"}
                height="800"
                width="800"
                className="w-full object-cover max-h-72 md:max-h-96"
              />
            </div>
          )}
        </header>
        <Prose className="text-[#c7c7c7]">{children}</Prose>
      </article>
    </div>
  );
}
