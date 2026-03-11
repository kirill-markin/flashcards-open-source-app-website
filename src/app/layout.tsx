import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLdSchema } from "@/components/JsonLdSchema";
import { HOME_PAGE_METADATA } from "@/content/pages/home";
import "./globals.css";

const SITE_URL = "https://flashcards-open-source-app.com";

export const metadata: Metadata = {
  title: {
    default: HOME_PAGE_METADATA.title,
    template: "%s | Flashcards",
  },
  description: HOME_PAGE_METADATA.description,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/`,
    siteName: "Flashcards",
    title: HOME_PAGE_METADATA.title,
    description: HOME_PAGE_METADATA.description,
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_PAGE_METADATA.title,
    description: HOME_PAGE_METADATA.description,
  },
  alternates: {
    canonical: `${SITE_URL}/`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLdSchema />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
