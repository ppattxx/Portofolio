import { Navbar } from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { twMerge } from "tailwind-merge";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dava Rajif - Developer",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          spaceGrotesk.className,
          "antialiased m-0 p-0 overflow-x-hidden bg-[rgb(var(--bg))] text-[rgb(var(--text))]"
        )}
      >
        <Navbar />
        <main className="min-h-screen pt-16 overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
