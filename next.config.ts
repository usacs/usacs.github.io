import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export to an /out directory
  basePath: '/usacs.github.io', // Matches your GitHub repository name
  images: {
    unoptimized: true, // Required as GitHub Pages doesn't support the Next.js Image Optimization API
  },
};

module.exports = nextConfig;
