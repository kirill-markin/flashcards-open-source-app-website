"use client";

import {
  CopyCodeField,
  type CopyCodeFieldLabels,
} from "@/components/CopyCodeField";
import type { AppLocale } from "@/lib/i18n";
import { reportSiteCopyAction } from "@/lib/siteInteractionEvents";
import { trackVercelAnalyticsEvent } from "@/lib/vercelAnalytics";

interface TrackedMcpEndpointCopyFieldProps {
  readonly caption: string;
  readonly labels: CopyCodeFieldLabels;
  readonly locale: AppLocale;
  readonly placement: string;
  readonly value: string;
  readonly appearance?: "default" | "compact";
}

export function TrackedMcpEndpointCopyField({
  caption,
  labels,
  locale,
  placement,
  value,
  appearance = "default",
}: TrackedMcpEndpointCopyFieldProps): React.JSX.Element {
  const trackCopySuccess = (): void => {
    trackVercelAnalyticsEvent("mcp_endpoint_copy", {
      locale,
      placement,
    });
    reportSiteCopyAction("mcp_endpoint", locale, placement);
  };

  return (
    <CopyCodeField
      caption={caption}
      labels={labels}
      onCopySuccess={trackCopySuccess}
      value={value}
      appearance={appearance}
    />
  );
}
