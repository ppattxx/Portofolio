import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { StarsBackground } from "@/components/ui/stars-background";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dava Rajif - Developer",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen relative m-0 p-0 overflow-xhidden"
        )}
      >
        {/* Stars background di belakang semua */}
        <StarsBackground />

        {/* Sidebar tetap di kiri */}
        <Sidebar />

        {/* Konten utama */}
        <div className="flex-1 overflow-y-auto relative z-10">
          <div className="min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 backdrop-blur-sm bg-black/30">
            {children}
            {/* <Footer /> */}
          </div>
        </div>
      </body>
    </html>
  );
} 