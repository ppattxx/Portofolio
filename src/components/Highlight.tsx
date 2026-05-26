import React from "react";

import { twMerge } from "tailwind-merge";

export const Highlight = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span
      className={twMerge(
        "rounded-md bg-cyan-400/15 px-2 py-0.5 text-cyan-100",
        className
      )}
    >
      {children}
    </span>
  );
};
