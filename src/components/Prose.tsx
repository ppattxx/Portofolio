import clsx from "clsx";

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        className,
        "prose prose-invert prose-sm max-w-none prose-p:text-[#c7c7c7] prose-headings:text-white prose-a:text-[rgb(var(--accent))] prose-strong:text-white prose-code:text-[rgb(var(--accent))] prose-pre:glass"
      )}
    >
      {children}
    </div>
  );
}
