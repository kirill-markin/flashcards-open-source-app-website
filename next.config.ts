import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ["image/webp", "image/avif"],
    unoptimized: false,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    SITE_URL: "https://flashcards-open-source-app.com/",
    SITE_NAME: "Flashcards",
    APP_URL: "https://app.flashcards-open-source-app.com",
    AUTH_URL: "https://auth.flashcards-open-source-app.com",
  },
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },
  async headers() {
    const headers = [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];

    if (process.env.VERCEL_ENV !== "production") {
      headers.push({
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      });
    }

    return headers;
  },
};

export default nextConfig;
