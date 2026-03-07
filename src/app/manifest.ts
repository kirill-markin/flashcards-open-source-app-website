import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Flashcards",
    short_name: "Flashcards",
    description:
      "Open-source flashcards app with spaced repetition and self-hosting support.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#232323",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
