import type { Metadata } from "next";
import type { AppLocale } from "@/lib/i18n";
import {
  getMcpPageDescription,
  MCP_PAGE_TITLE,
  MCP_ROUTE_PATHNAME,
} from "@/lib/mcpPage";
import { createPageMetadata } from "@/lib/seo/createPageMetadata";

export function createMcpPageMetadata(locale: AppLocale): Metadata {
  return createPageMetadata({
    title: MCP_PAGE_TITLE,
    description: getMcpPageDescription(locale),
    locale,
    routePathname: MCP_ROUTE_PATHNAME,
    openGraphType: "website",
  });
}
