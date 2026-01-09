import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "swiper",
      "@mui/material",
      "@mui/icons-material",
    ],
  },
};

export default nextConfig;
