import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLdSchema } from "@/components/JsonLdSchema";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-source-serif",
});

const SITE_URL = "https://flashcards-open-source-app.com";

export const metadata: Metadata = {
  title: {
    default: "Flashcards - Open Source Spaced Repetition",
    template: "%s | Flashcards",
  },
  description:
    "Open-source flashcards app with spaced repetition, review queue, passwordless auth, and a self-hosted AWS/Postgres deployment path.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/`,
    siteName: "Flashcards",
    title: "Flashcards - Open Source Spaced Repetition",
    description:
      "Open-source flashcards app with spaced repetition, review queue, passwordless auth, and a self-hosted AWS/Postgres deployment path.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flashcards - Open Source Spaced Repetition",
    description:
      "Open-source flashcards app with spaced repetition, review queue, passwordless auth, and self-hosting support.",
  },
  alternates: {
    canonical: `${SITE_URL}/`,
    types: { "text/markdown": "/.md" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sourceSerif.variable}>
      <body>
        <JsonLdSchema />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
