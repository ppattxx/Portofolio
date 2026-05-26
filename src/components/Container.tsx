import React from "react";
import { twMerge } from "tailwind-merge";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <main
      className={twMerge(
        "max-w-6xl mx-auto py-20 px-5 sm:px-8",
        className
      )}
    >
      {children}
    </main>
  );
};
