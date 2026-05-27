"use client";
import { timeline } from "@/constants/timeline";
import { useEffect, useRef } from "react";
import {
  IconBriefcase,
  IconCode,
  IconRocket,
  IconSchool,
} from "@tabler/icons-react";

// Sesuaikan icon per item — bisa tambah field `icon` di constants/timeline.ts
const ICONS = [IconBriefcase, IconSchool, IconCode, IconRocket];

export const WorkHistory = () => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll-triggered card animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ?? "0";
            setTimeout(() => el.classList.add("tl-visible"), parseInt(delay));
          }
        });
      },
      { threshold: 0.15 }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));

    // Timeline line fill on scroll
    const updateLine = () => {
      if (!lineRef.current || !wrapRef.current) return;
      const wrapRect = wrapRef.current.getBoundingClientRect();
      const wrapH = wrapRef.current.offsetHeight;
      const scrolled = Math.max(0, -wrapRect.top + window.innerHeight * 0.6);
      const pct = Math.min(1, scrolled / wrapH) * 100;
      lineRef.current.style.height = `${pct}%`;
    };

    window.addEventListener("scroll", updateLine, { passive: true });
    updateLine();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateLine);
    };
  }, []);

  return (
    <>
      <style>{`
        .tl-card-left  { transform: translateX(-36px); opacity: 0; transition: transform 0.6s cubic-bezier(.16,1,.3,1), opacity 0.5s ease; }
        .tl-card-right { transform: translateX(36px);  opacity: 0; transition: transform 0.6s cubic-bezier(.16,1,.3,1), opacity 0.5s ease; }
        .tl-visible .tl-card-left,
        .tl-visible .tl-card-right { transform: translateX(0); opacity: 1; }
      `}</style>

      <div ref={wrapRef} className="relative py-2">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/[0.07]">
          <div ref={lineRef} className="absolute top-0 left-0 w-full bg-white/20 transition-[height] duration-100" style={{ height: "0%" }} />
        </div>

        <div className="space-y-10">
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;
            const Icon = ICONS[index % ICONS.length];

            return (
              <div
                key={index}
                ref={(el) => { itemRefs.current[index] = el; }}
                data-delay={isLeft ? "0" : "100"}
                className={`flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Card */}
                <div className={`flex-1 ${isLeft ? "pr-4" : "pl-4"} max-w-[calc(50%-52px)]`}>
                  <div className={`${isLeft ? "tl-card-left" : "tl-card-right"} group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 transition-colors hover:border-white/[0.16] hover:bg-white/[0.055]`}>
                    <h3 className="mb-0.5 text-sm font-semibold leading-snug text-white/88">
                      {item.company}
                    </h3>
                    <p className="mb-2.5 text-[11.5px] font-medium text-white/35">
                      {item.title}
                    </p>
                    <p className="text-[12.5px] leading-relaxed text-white/48">
                      {item.description}
                    </p>
                    {item.responsibilities?.length > 0 && (
                      <ul className="mt-3 space-y-1.5">
                        {item.responsibilities.map((r, i) => (
                          <li key={i} className="flex items-start gap-2 text-[12px] text-white/35">
                            <span className="mt-[6px] h-[3px] w-[3px] shrink-0 rounded-full bg-white/20" />
                            <span className="leading-relaxed">{r}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Center node */}
                <div className="z-10 flex w-[104px] shrink-0 flex-col items-center gap-1.5">
                  <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/[0.13] bg-white/[0.05] text-white/45 transition-all hover:border-white/[0.28] hover:bg-white/10 hover:text-white/85">
                    <Icon size={16} />
                  </div>
                  <span className="text-center text-[11px] leading-snug text-white/35">
                    {item.date}
                  </span>
                </div>

                {/* Empty spacer sisi lain */}
                <div className="flex-1 max-w-[calc(50%-52px)]" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};