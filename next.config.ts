// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "utfs.io",
      "27v2e582dj.ufs.sh",
      "uploadthing.com"
    ],
  },
};

export default nextConfig;