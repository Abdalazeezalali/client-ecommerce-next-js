import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
   typescript: {
    ignoreBuildErrors: true, // يتجاهل أخطاء TypeScript
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
  
};

export default nextConfig;
