export const SITE_URL = "https://nibomo.com";
export const SITE_NAME = "Nibomo";
/**
 * The product hosts, under this site's own registrable domain. The single place the site names any
 * of them, so the cutover to `nibomo.com` is one edit rather than one per caller.
 *
 * Analytics is the one caller for which the domain is load-bearing rather than cosmetic. The backend
 * scopes each cookie to the domain of the host the request arrived on, stated once in AGENTS.md
 * under "Auth Integration", so the `analytics_visitor` cookie written by `PRODUCT_API_ORIGIN` is
 * readable here and this site shares a visitor with the app. That is also why an identity may be
 * requested only from that host: a call to the legacy API host is cross-site from here and refused.
 */
export const PRODUCT_API_ORIGIN = "https://api.nibomo.com";
export const PRODUCT_APP_ORIGIN = "https://app.nibomo.com";
export const PRODUCT_AUTH_ORIGIN = "https://auth.nibomo.com";
export const OPEN_GRAPH_IMAGE_URL = `${SITE_URL}/opengraph-image`;
export const TWITTER_IMAGE_URL = `${SITE_URL}/twitter-image`;
// The product answers on `SITE_URL`'s subdomains and keeps answering on the former product
// domain's, so both root hostnames and their subdomains are first-party.
export const PRODUCT_ROOT_HOSTNAMES: ReadonlyArray<string> = [
  new URL(SITE_URL).hostname,
  "flashcards-open-source-app.com",
];
