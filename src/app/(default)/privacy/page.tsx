import type { Metadata } from "next";
import { MarketingPageView } from "@/components/MarketingPageView";
import { createMarketingPageMetadata } from "@/lib/seo/createMarketingPageMetadata";

export const metadata: Metadata = createMarketingPageMetadata("privacy", "en");

export default async function PrivacyPage(): Promise<React.JSX.Element> {
  return <MarketingPageView locale="en" slug="privacy" />;
}
