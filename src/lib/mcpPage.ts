import type { AppLocale } from "@/lib/i18n";
import { getUiCopy } from "@/lib/uiCopy";

export const MCP_ROUTE_PATHNAME = "/mcp/";

export const MCP_PAGE_TITLE = "Nibomo MCP";

export function getMcpPageDescription(locale: AppLocale): string {
  return getUiCopy(locale).home.agentHintDescription;
}
