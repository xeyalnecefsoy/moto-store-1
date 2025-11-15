/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.pixabay.com" },
      { protocol: "https", hostname: "turbo.azstatic.com" },
      { protocol: "https", hostname: "cdn.bikedekho.com" },
      { protocol: "https", hostname: "www.lonerider-motorcycle.com" },
      { protocol: "https", hostname: "imgd.aeplcdn.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
};

export default nextConfig;
