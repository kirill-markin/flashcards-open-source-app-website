import type { Metadata } from "next";
import { McpPageView } from "@/components/McpPageView";
import { createMcpPageMetadata } from "@/lib/seo/createMcpPageMetadata";

export const metadata: Metadata = createMcpPageMetadata("en");

export default function McpPage(): React.JSX.Element {
  return <McpPageView locale="en" />;
}
