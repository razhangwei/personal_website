/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // For GitHub Pages deployment
  output: 'export',
  // Ensure images are handled properly in static export
  images: {
    unoptimized: true,
  },
  // Configure MDX
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

module.exports = nextConfig;
