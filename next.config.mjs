/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    /* Next.js 16 requires explicit quality allowlist */
    qualities: [25, 50, 75, 85, 100],
  },
};

export default nextConfig;
