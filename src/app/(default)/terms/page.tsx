import type { Metadata } from "next";
import { MarketingPageView } from "@/components/MarketingPageView";
import { createMarketingPageMetadata } from "@/lib/seo/createMarketingPageMetadata";

export const metadata: Metadata = createMarketingPageMetadata("terms", "en");

export default async function TermsPage(): Promise<React.JSX.Element> {
  return <MarketingPageView locale="en" slug="terms" />;
}
