import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pl-master.mdcdn.cz",
        port: "",
        pathname: "/media/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "placecats.com",
        port: "",
        pathname: "/neo_banana/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
