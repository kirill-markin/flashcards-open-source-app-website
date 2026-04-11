import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "@/app/globals.css";
import { readPageContent } from "@/lib/content/readPageContent";
import { SITE_URL } from "@/lib/site";

const DEFAULT_HOME_PAGE_CONTENT = readPageContent("home", "en");
const sourceSerif = Source_Serif_4({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-source-serif",
});

export const metadata: Metadata = {
  title: {
    default: DEFAULT_HOME_PAGE_CONTENT.title,
    template: "%s | Flashcards",
  },
  description: DEFAULT_HOME_PAGE_CONTENT.description,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/`,
    siteName: "Flashcards",
    title: DEFAULT_HOME_PAGE_CONTENT.title,
    description: DEFAULT_HOME_PAGE_CONTENT.description,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_HOME_PAGE_CONTENT.title,
    description: DEFAULT_HOME_PAGE_CONTENT.description,
  },
  alternates: {
    canonical: `${SITE_URL}/`,
  },
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="en" className={sourceSerif.variable}>
      <body>{children}</body>
    </html>
  );
}
