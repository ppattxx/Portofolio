import { Blog } from "@/types/blog";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export const Blogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
      {blogs.map((blog) => (
        <Link
          key={blog.slug}
          href={`/blog/${blog.slug}`}
          className="glass-card p-4 md:p-5 flex flex-col h-full group"
        >
          {blog.image && (
            <div className="relative w-full h-40 sm:h-44 rounded-xl overflow-hidden mb-4">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>
          )}
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex gap-x-2 mb-3 flex-wrap">
              {blog.tags.map((tag: string) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h4 className="font-bold text-base sm:text-lg text-white group-hover:text-[rgb(var(--accent))] transition-colors duration-300">
            {blog.title}
          </h4>
          <p className="mt-2 font-normal text-[#c7c7c7]/80 text-sm leading-relaxed line-clamp-3">
            {blog.description}
          </p>
        </Link>
      ))}
    </div>
  );
};
