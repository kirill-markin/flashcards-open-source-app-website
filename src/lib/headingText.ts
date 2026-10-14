export function formatHeadingText(value: string): string {
  // Keep periods inside names such as Node.js; remove sentence-ending periods.
  return value.replace(/[.\u3002\u0964\u06d4](?=\s|$)/gu, "");
}
