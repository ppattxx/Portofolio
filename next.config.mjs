/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Page-data collection races on Windows and intermittently fails with
    // "Cannot find module for page: /…". Collecting in-process is slower but
    // makes `next build` deterministic.
    workerThreads: false,
    cpus: 1,
  },
};

export default nextConfig;
