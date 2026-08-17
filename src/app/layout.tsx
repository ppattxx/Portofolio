import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Aurora } from "@/components/Aurora";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const description =
  "Dava Rajif Cahyadiansyah — full-stack developer from Surabaya. Laravel, React, Flutter and Python. Building point-of-sale, HR and recommendation systems that run in production.";

export const metadata: Metadata = {
  metadataBase: new URL("https://davarajif.vercel.app"),
  title: {
    default: "Dava Rajif — Full-stack Developer",
    template: "%s | Dava Rajif",
  },
  description,
  keywords: [
    "Dava Rajif",
    "Full-stack Developer",
    "Laravel Developer",
    "React Developer",
    "Flutter Developer",
    "Surabaya",
    "PENS",
  ],
  authors: [{ name: "Dava Rajif Cahyadiansyah" }],
  creator: "Dava Rajif Cahyadiansyah",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Dava Rajif — Full-stack Developer",
    description,
    siteName: "Dava Rajif",
    images: [{ url: "/images/Profile.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dava Rajif — Full-stack Developer",
    description,
  },
  robots: { index: true, follow: true },
  themeColor: "#08080E",
  viewport: { width: "device-width", initialScale: 1 },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          spaceGrotesk.className,
          "m-0 min-h-screen overflow-x-hidden bg-[rgb(var(--bg))] p-0 text-[rgb(var(--text))] antialiased"
        )}
      >
        <Aurora />
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen overflow-x-hidden pt-16">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
