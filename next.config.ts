import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages, aynı adlı klasör varken /tr isteğini /tr/ adresine çevirir; sayfalar klasör/index.html olarak üretilir.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;