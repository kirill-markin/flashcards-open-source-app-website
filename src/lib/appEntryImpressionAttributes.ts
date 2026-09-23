import type { AppEntryPlacement } from "./appEntryTracking";
import type { SiteAppEntryTarget } from "./siteAnalyticsCollector";

/**
 * The two attributes a CTA that leads into the product carries so that the document-scoped
 * impression observer can find it and read what it is.
 *
 * Kept in a module of its own, apart from the observer that consumes them: every CTA component
 * needs this pure helper and none of them needs the hook, its React imports or the module-scoped
 * set of impressions this document has already reported.
 */
export const SITE_APP_ENTRY_TARGET_ATTRIBUTE = "data-site-app-entry-target";
export const SITE_APP_ENTRY_PLACEMENT_ATTRIBUTE = "data-site-app-entry-placement";

export type SiteAppEntryImpressionAttributes = Readonly<
  Record<typeof SITE_APP_ENTRY_TARGET_ATTRIBUTE, SiteAppEntryTarget>
  & Record<typeof SITE_APP_ENTRY_PLACEMENT_ATTRIBUTE, AppEntryPlacement>
>;

/**
 * Marks an element as an app-entry CTA for the document-scoped observer. The placement is typed as
 * the click's own placement union, so an impression can only ever be reported under a placement a
 * click can also report.
 */
export function getSiteAppEntryImpressionAttributes(
  target: SiteAppEntryTarget,
  placement: AppEntryPlacement,
): SiteAppEntryImpressionAttributes {
  return {
    [SITE_APP_ENTRY_TARGET_ATTRIBUTE]: target,
    [SITE_APP_ENTRY_PLACEMENT_ATTRIBUTE]: placement,
  };
}
