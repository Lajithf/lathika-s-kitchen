import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Optional: Enables React Strict Mode
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
