import assert from "node:assert/strict";
import test from "node:test";
import { formatHeadingText } from "./headingText";

test("headings remove sentence periods while preserving names and numbers", () => {
  assert.equal(formatHeadingText("Free. Open. Yours."), "Free Open Yours");
  assert.equal(formatHeadingText("Node.js version 1.2"), "Node.js version 1.2");
});

test("headings also remove localized sentence periods", () => {
  assert.equal(formatHeadingText("Study\u3002"), "Study");
  assert.equal(formatHeadingText("Study\u0964"), "Study");
  assert.equal(formatHeadingText("Study\u06d4"), "Study");
});
