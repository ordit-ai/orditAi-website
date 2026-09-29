import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Static export has no image-optimization server to call.
    unoptimized: true,
  },
};

export default nextConfig;
