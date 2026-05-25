import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // GSAP is browser-only; keep it out of the server bundle
  serverExternalPackages: ['gsap'],
  images: {
    // Use modern formats for automatic WebP/AVIF delivery via Next.js image optimization
    formats: ['image/avif', 'image/webp'],
    // Device sizes for responsive hero image
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    // Image sizes for smaller contexts
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimize quality for hero banners (quality prop on <Image> overrides this)
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache
  },
};

export default nextConfig;
