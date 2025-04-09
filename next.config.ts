import type { NextConfig } from 'next'

const isGithubPages = process.env.NODE_ENV === "production";
const repoName = "nextjs-horoscope";

const nextConfig: NextConfig = {
  output: 'export', // Export the app as a static site
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  images: {
    unoptimized: true, // Required for GitHub Pages as it doesn't support Next.js Image Optimization
  },
  trailingSlash: true, 
};

export default nextConfig;

// module.exports = nextConfig;