import { StaticImageData } from "next/image";

export type ProjectCategory =
  | "Web App"
  | "Mobile App"
  | "Backend / API"
  | "Data & AI"
  | "Automation";

export type Product = {
  title: string;
  description: string;
  thumbnail: StaticImageData;
  images: StaticImageData[] | string[];
  href: string;
  slug?: string;
  stack?: string[];
  role?: string;
  date?: string;
  org?: string;
  category?: ProjectCategory;
  featured?: boolean;
  results?: string;
  highlights?: string[];
  metrics?: { label: string; value: string }[];
  content?: React.ReactNode | string;
};
