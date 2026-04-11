import type { Metadata } from "next";
import { MarketingPageView } from "@/components/MarketingPageView";
import { createMarketingPageMetadata } from "@/lib/seo/createMarketingPageMetadata";

export const metadata: Metadata = createMarketingPageMetadata("features", "en");

export default async function FeaturesPage(): Promise<React.JSX.Element> {
  return <MarketingPageView locale="en" slug="features" />;
}
