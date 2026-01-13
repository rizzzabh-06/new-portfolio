import type { NextConfig } from "next";
import path from "node:path";

// Polyfill localStorage for SSR to prevent crashes
if (typeof global.localStorage === "undefined" || typeof global.localStorage.getItem !== "function") {
  Object.defineProperty(global, "localStorage", {
    value: {
      getItem: () => null,
      setItem: () => { },
      removeItem: () => { },
      clear: () => { },
      length: 0,
      key: () => null,
    },
    writable: true,
  });
}

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
  }
};

export default nextConfig;
// Orchids restart: 1760799677259
