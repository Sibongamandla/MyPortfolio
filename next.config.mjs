/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable SSR for certain paths
  experimental: {
    // Disable SSR for some client-side only paths
    appDocumentPreloading: false,
  },
};

export default nextConfig;