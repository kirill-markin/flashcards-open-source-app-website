import { SITE_URL } from "@/lib/site";

export type ExternalLinkAttributes = Readonly<{
  rel?: "noopener noreferrer";
  target?: "_blank";
}>;

const internalRootHostname = new URL(SITE_URL).hostname;
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

  return (
    normalizedHostname === internalRootHostname ||
    normalizedHostname.endsWith(`.${internalRootHostname}`)
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
