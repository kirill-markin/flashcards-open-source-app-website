import type { Metadata } from "next";
import { MarketingPageView } from "@/components/MarketingPageView";
import { createMarketingPageMetadata } from "@/lib/seo/createMarketingPageMetadata";

export const metadata: Metadata = createMarketingPageMetadata("home", "en");

export default async function HomePage(): Promise<React.JSX.Element> {
  return <MarketingPageView locale="en" slug="home" />;
}
