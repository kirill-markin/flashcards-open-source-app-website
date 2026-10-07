import { Inter } from "next/font/google";

export const siteFont = Inter({
  subsets: ["latin", "cyrillic"],
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-inter",
});
