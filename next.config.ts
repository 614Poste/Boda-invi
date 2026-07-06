import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fija la raíz del proyecto (hay otro lockfile en la carpeta de usuario).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
