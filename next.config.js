/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // The MCP route reads blog MDX from disk at request time; bundle the
  // content directory into its serverless function.
  outputFileTracingIncludes: {
    '/api/[transport]': ['./content/blog/*.mdx'],
  },
};

module.exports = nextConfig;
