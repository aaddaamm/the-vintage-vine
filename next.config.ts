import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.the-vintage-vine.com",
          },
        ],
        destination: "https://the-vintage-vine.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
