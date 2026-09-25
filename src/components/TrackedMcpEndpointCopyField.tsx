"use client";

import {
  CopyCodeField,
  type CopyCodeFieldLabels,
} from "@/components/CopyCodeField";
import type { AppLocale } from "@/lib/i18n";
import { reportSiteCopyAction } from "@/lib/siteInteractionEvents";
import { trackVercelAnalyticsEvent } from "@/lib/vercelAnalytics";

const MCP_ENDPOINT_COPY_PLACEMENT = "home_agent_access";

interface TrackedMcpEndpointCopyFieldProps {
  readonly caption: string;
  readonly labels: CopyCodeFieldLabels;
  readonly locale: AppLocale;
  readonly value: string;
}

export function TrackedMcpEndpointCopyField({
  caption,
  labels,
  locale,
  value,
}: TrackedMcpEndpointCopyFieldProps): React.JSX.Element {
  const trackCopySuccess = (): void => {
    trackVercelAnalyticsEvent("mcp_endpoint_copy", {
      locale,
      placement: MCP_ENDPOINT_COPY_PLACEMENT,
    });
    reportSiteCopyAction("mcp_endpoint", locale, MCP_ENDPOINT_COPY_PLACEMENT);
  };

  return (
    <CopyCodeField
      caption={caption}
      labels={labels}
      onCopySuccess={trackCopySuccess}
      value={value}
    />
  );
}
