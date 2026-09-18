import { PRODUCT_ROOT_HOSTNAMES } from "@/lib/site";

export type ExternalLinkAttributes = Readonly<{
  rel?: "noopener noreferrer";
  target?: "_blank";
}>;

const websiteUrlPattern = /^(?:https?:)?\/\//i;

function getWebsiteUrl(href: string): URL | null {
  if (websiteUrlPattern.test(href) === false) {
    return null;
  }

  try {
    return new URL(href.startsWith("//") ? `https:${href}` : href);
  } catch (error) {
    if (error instanceof TypeError) {
      throw new TypeError(`Invalid website link href. href=${href}`);
    }

    throw error;
  }
}

function isInternalHostname(hostname: string): boolean {
  const normalizedHostname = hostname.toLowerCase();

  // Both product host families count as internal and open in the same tab.
  return PRODUCT_ROOT_HOSTNAMES.some(
    (rootHostname) =>
      normalizedHostname === rootHostname ||
      normalizedHostname.endsWith(`.${rootHostname}`),
  );
}

export function isExternalWebsiteHref(href: string): boolean {
  const websiteUrl = getWebsiteUrl(href);

  if (websiteUrl === null) {
    return false;
  }

  return isInternalHostname(websiteUrl.hostname) === false;
}

export function getExternalLinkAttributes(href: string): ExternalLinkAttributes {
  if (isExternalWebsiteHref(href) === false) {
    return {};
  }

  return {
    rel: "noopener noreferrer",
    target: "_blank",
  };
}
