import type { Metadata } from "next";
import { DashboardsPageView } from "@/components/DashboardsPageView";
import { createDashboardsPageMetadata } from "@/lib/seo/createDashboardsPageMetadata";

export const metadata: Metadata = createDashboardsPageMetadata("en");

export default function DashboardsPage(): React.JSX.Element {
  return <DashboardsPageView locale="en" />;
}
