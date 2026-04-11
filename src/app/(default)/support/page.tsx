import type { Metadata } from "next";
import { MarketingPageView } from "@/components/MarketingPageView";
import { createMarketingPageMetadata } from "@/lib/seo/createMarketingPageMetadata";

export const metadata: Metadata = createMarketingPageMetadata("support", "en");

export default async function SupportPage(): Promise<React.JSX.Element> {
  return <MarketingPageView locale="en" slug="support" />;
}
