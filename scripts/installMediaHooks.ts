import { spawnSync } from "node:child_process";

const current = spawnSync("git", ["config", "--get", "core.hooksPath"], { encoding: "utf8" });
if (current.status !== 0 && current.status !== 1) throw new Error(`Cannot read core.hooksPath: ${current.stderr}`);
const hooksPath = current.stdout.trim();
if (hooksPath && hooksPath !== ".githooks") {
  throw new Error(`Existing core.hooksPath=${JSON.stringify(hooksPath)} is preserved. Add the two commands from docs/media.md to your hooks manually.`);
}
const install = spawnSync("git", ["config", "--local", "core.hooksPath", ".githooks"], { encoding: "utf8" });
if (install.status !== 0) throw new Error(`Cannot install media hooks: ${install.stderr}`);
console.log("Media hooks enabled for this Git repository (including its worktrees).");
