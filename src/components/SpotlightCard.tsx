"use client";
import { useRef, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

/**
 * Wraps content in a card that tracks the pointer: a soft border highlight and
 * glow follow the cursor, plus an optional subtle 3D tilt. Pointer effects are
 * skipped on touch devices, where they only ever fire once.
 */
export function SpotlightCard({
  children,
  className,
  tilt = 6,
}: {
  children: ReactNode;
  className?: string;
  tilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const px = e.clientX - r.left;
    const py = e.clientY - r.top;
    el.style.setProperty("--mx", `${px}px`);
    el.style.setProperty("--my", `${py}px`);
    if (tilt > 0) {
      const rx = ((py - r.height / 2) / (r.height / 2)) * -tilt;
      const ry = ((px - r.width / 2) / (r.width / 2)) * tilt;
      el.style.transform = `perspective(1100px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    }
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={twMerge(
        "spotlight relative h-full transition-transform duration-300 ease-out will-change-transform",
        className
      )}
    >
      {children}
    </div>
  );
}
