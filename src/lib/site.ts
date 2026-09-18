export const SITE_URL = "https://nibomo.com";
export const SITE_NAME = "Nibomo";
export const OPEN_GRAPH_IMAGE_URL = `${SITE_URL}/opengraph-image`;
export const TWITTER_IMAGE_URL = `${SITE_URL}/twitter-image`;
// The marketing site moved to `SITE_URL`, while `app.`, `api.` and `auth.` stay on
// the former product domain, so both root hostnames and their subdomains are first-party.
export const PRODUCT_ROOT_HOSTNAMES: ReadonlyArray<string> = [
  new URL(SITE_URL).hostname,
  "flashcards-open-source-app.com",
];
