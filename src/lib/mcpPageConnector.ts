import { readPageContent } from "@/lib/content/readPageContent";
import type { AgentConnectorHint } from "@/lib/content/types";
import type { AppLocale } from "@/lib/i18n";

// Kept out of `mcpPage.ts`, which the content registry imports for the route pathname.
export function getMcpPageEndpointConnector(locale: AppLocale): AgentConnectorHint {
  const heroSection = readPageContent("home", locale).sections.find(
    (section) => section.type === "hero"
  );

  if (heroSection === undefined || heroSection.type !== "hero") {
    throw new Error(`Missing home hero section for the MCP page, locale: ${locale}`);
  }

  const [connector] = heroSection.agentConnectors;

  if (connector === undefined) {
    throw new Error(`Missing home hero MCP endpoint connector for the MCP page, locale: ${locale}`);
  }

  return connector;
}
