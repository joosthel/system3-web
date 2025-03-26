/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    images: {
        unoptimized: true, // For static export
    },
};

export default nextConfig;