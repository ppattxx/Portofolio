import { getAllBlogs } from "../../lib/getAllBlogs";
import Link from "next/link";

export const LatestWritings = async () => {
  const blogs = await getAllBlogs();
  const latest = blogs.slice(0, 3);

  if (latest.length === 0) return null;

  return (
    <section className="relative wrapper py-24 md:py-36">
      <div className="absolute top-[10%] left-[30%] w-80 h-screen blob-blue pointer-events-none" />
      <p className="section-label text-white">Read insightful article here</p>
      <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-2">
        My Latest Writings.
      </h2>
      <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {latest.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="glass-card p-5 md:p-6 flex flex-col h-full group"
          >
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex gap-x-2 mb-4 flex-wrap">
                {blog.tags.map((tag: string) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <h4 className="font-bold text-xl md:text-2xl text-white mt-1 group-hover:text-[rgb(var(--accent))] transition-colors duration-300">
              {blog.title}
            </h4>
            <p className="mt-2 font-normal text-[#c7c7c7]/80 text-sm leading-relaxed line-clamp-3">
              {blog.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};
