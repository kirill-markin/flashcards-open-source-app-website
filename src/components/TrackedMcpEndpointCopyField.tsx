"use client";

import { track } from "@vercel/analytics";
import {
  CopyCodeField,
  type CopyCodeFieldLabels,
} from "@/components/CopyCodeField";
import type { AppLocale } from "@/lib/i18n";

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
    track("mcp_endpoint_copy", {
      locale,
      placement: "home_agent_access",
    });
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
