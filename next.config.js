/** @type {import('next').NextConfig} */
// Trigger rebuild for Tailwind v3 downgrade
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
