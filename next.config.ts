import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/files/**',
      },
    ],
    // Serve AVIF first (30% smaller than WebP), fallback to WebP
    formats: ['image/avif', 'image/webp'],
    // Trim 1920/2048 — avoids forcing huge srcset entries for normal displays
    deviceSizes: [640, 750, 828, 1080, 1200, 1440],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimised images for 7 days
    minimumCacheTTL: 604800,
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
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
