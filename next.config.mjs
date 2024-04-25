/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "tidy-cheetah-770.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
