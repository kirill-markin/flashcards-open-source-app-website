---
title: "Git Bisect Run: Find a Regression When a Commit Won’t Test"
description: "Run a four-commit Git bisect lab. See what exit code 125 does, then adapt the test to identify the first bad commit."
date: "2026-11-10"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/ecb6ebd123e6fbf55586ae944c3455ff6cf5e0f3485f7657f50bb55520898f57.webp"
keywords:
  - "git bisect run"
  - "git bisect skip"
  - "git bisect exit code 125"
  - "first bad commit"
---

Your test passes at the baseline and catches the bug at the tip. Then `git bisect run` checks out an older commit where the file your test needs has a different name. If that commit sits just before a known bad one, a missing file can leave you with two candidates for the first bad commit.

Give Git the known bad revision followed by the known good one. Git picks revisions between them, checks them out and runs the same command at each checkout. In this lab, four commits form a straight line and the behavior changes once. [Git bisect manual](https://git-scm.com/docs/git-bisect)

![A bicycle mechanic holds a small metal adapter next to an old wheel hub](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/ecb6ebd123e6fbf55586ae944c3455ff6cf5e0f3485f7657f50bb55520898f57.webp)

## What did the test actually see?

The test asks whether the message reads `ready`. The file moves before the message changes.

| Commit | Where the message lives | Message |
| --- | --- | --- |
| A, tagged `baseline` | `message.txt` | `ready` |
| B | `legacy.txt` | `ready` |
| C, tagged `changed` | `message.txt` | `broken` |
| D, tagged `tip` | `message.txt` | `still broken` |

Git reads the exit status of the script you pass to `git bisect run`. The lab uses four deliberate results. [Git bisect run reference](https://git-scm.com/docs/git-bisect#_bisect_run)

| Script exits with | Git's decision | What the script saw |
| --- | --- | --- |
| `0` | Good | It read `ready`. |
| `1` | Bad | It read a different message. |
| `125` | Skip this commit | It found no file it knows how to check. |
| `128` | Stop the run | It found a file, but the read failed. |

Git's documented bad range is 1 through 127, excluding 125. Shell errors can land in that range too. A command the shell can't execute can return 126, and a missing command can return 127. Have the script return 1 after it observes the bug and use an abort code for an error in the test setup. In this lab, a failed `cat` returns 128 from the script. [Git bisect run reference](https://git-scm.com/docs/git-bisect#_bisect_run)

## Run the four-commit lab

Paste the whole block into a POSIX-style shell such as Bash or Zsh. You need `sh` and a Git version that supports `git init -b` and `git switch`. The block starts a fresh shell with your `PATH` and creates a disposable repository under `/tmp`. The test script lives beside the repository so it stays available as Git checks out different commits.

The block prints the lab directory and removes it on success. If a check stops the lab early, inspect the printed directory and delete it when you're done.

```sh
env -i PATH="$PATH" LC_ALL=C GIT_CONFIG_NOSYSTEM=1 GIT_CONFIG_GLOBAL=/dev/null sh <<'LAB'
set -eu
lab=$(mktemp -d /tmp/bisect-lab.XXXXXX)
printf 'Lab directory %s\n' "$lab"

git init -q --template= -b main "$lab/repo"
cd "$lab/repo"
git config --local user.name 'Bisect Lab'
git config --local user.email 'lab@example.invalid'

printf '%s\n' ready > message.txt
git add message.txt
git commit -qm 'A: write ready'
git tag baseline

git mv message.txt legacy.txt
git commit -qm 'B: move message to legacy path'

git rm -q legacy.txt
printf '%s\n' broken > message.txt
git add message.txt
git commit -qm 'C: change the message'
git tag changed

printf '%s\n' 'still broken' > message.txt
git commit -qam 'D: edit the broken message'
git tag tip

cat > "$lab/probe.sh" <<'PROBE'
file=message.txt
if [ ! -f "$file" ]; then
    if [ "${1-}" = --legacy ] && [ -f legacy.txt ]; then
        file=legacy.txt
    else
        exit 125
    fi
fi

if ! actual=$(cat "$file"); then
    exit 128
fi
if [ "$actual" = ready ]; then
    exit 0
fi
exit 1
PROBE

expect_exit() {
    expected_status=$1
    shift
    status=0
    "$@" || status=$?
    if [ "$status" -ne "$expected_status" ]; then
        printf 'Expected exit %s, got %s from %s\n' "$expected_status" "$status" "$*" >&2
        exit 1
    fi
}

git switch -q --detach baseline
expect_exit 0 sh "$lab/probe.sh"
git switch -q main
expect_exit 1 sh "$lab/probe.sh"

changed=$(git rev-parse changed)
parent=$(git rev-parse changed^)

git bisect start tip baseline
expect_exit 2 git bisect run sh "$lab/probe.sh" > "$lab/first-run.log"
cat "$lab/first-run.log"
awk '/^The first bad commit could be any of:$/ { in_list = 1; next }
     /^We cannot bisect more!$/ { in_list = 0 }
     in_list { print }' "$lab/first-run.log" | sort > "$lab/actual-candidates"
printf '%s\n' "$parent" "$changed" | sort > "$lab/expected-candidates"
diff -u "$lab/expected-candidates" "$lab/actual-candidates"
git bisect log
git bisect reset

git bisect start tip baseline
git bisect run sh "$lab/probe.sh" --legacy
git bisect log
first_bad=$(git rev-parse refs/bisect/bad)
test "$first_bad" = "$changed"
git bisect reset
test "$(git branch --show-current)" = main

git switch -q --detach "$first_bad^"
expect_exit 0 sh "$lab/probe.sh" --legacy
git switch -q --detach "$first_bad"
expect_exit 1 sh "$lab/probe.sh" --legacy
git --no-pager show "$first_bad"
git switch -q main
test -z "$(git status --porcelain)"

cd /
rm -rf -- "$lab"
LAB
```

The lab was run with `sh` and Git 2.54.0 (Apple Git-157) on macOS 26.6.1, arm64. The block checks that the test passes at A and exits with exactly 1 at D before it gives those endpoints to Git. Both bisect runs use `git bisect start tip baseline`, with the bad endpoint first. Git passes the second run's `--legacy` argument to `probe.sh`. [Git bisect manual](https://git-scm.com/docs/git-bisect)

## Read the candidates, then verify the first bad commit

In the first run, the test reads `broken` at C and exits 1. At B it can't find `message.txt` and exits 125. Git treats 125 the same way as a manual `git bisect skip`. Here it leaves B and C in the candidate list. The output below uses letters in place of the commit IDs Git prints. [Fighting regressions with Git bisect](https://git-scm.com/docs/git-bisect-lk2009)

```text
The first bad commit could be any of:
B
C
We cannot bisect more!
```

The lab checks that Git exits with status 2 and that the list contains exactly B and C. The log shows why. If B already had the wrong message, B could be the first bad commit. If B still had `ready`, C would be first. Both possibilities fit a skipped B and a bad C. Read or save `git bisect log` before using `git bisect reset` to end the session and return to the starting checkout. [Git bisect log and reset](https://git-scm.com/docs/git-bisect)

With `--legacy`, the script reads `legacy.txt` when `message.txt` is absent. It still asks whether the message is `ready`. Git reports `C is the first bad commit`, using C's full ID. After the reset, the lab runs the same test directly at C's parent and at C. B passes, C fails, and `git show` displays the change from `ready` in `legacy.txt` to `broken` in `message.txt`.

In your own repository, start with a clean working tree and run a repeatable check at a known good and a known bad commit. If an older revision needs a different fixture path or setup, keep the behavior you measure the same. When Git gives you a candidate list, read the log to see which revision it couldn't test. Once it reports a single commit in a linear range like this one, verify it and its parent with the same check before inspecting the diff. [Git bisect examples](https://git-scm.com/docs/git-bisect#_examples)

To find an earlier local commit ID, see the [Git reflog recovery lab](/blog/git-reflog-recover-lost-commits/). If reapplying your local edits leaves a conflict, see the [Git stash pop conflict lab](/blog/git-stash-pop-conflict/).

## Recall it in both directions

1. The script can't check an older revision because the fixture lives at a path the script doesn't know. Which exit code should it return?
2. A test returns `125` and Git gives you two adjacent candidates. What do you know about the skipped commit, and what check would settle this lab?

For the first prompt, return `125`. For the second, Git has no good or bad result for the skipped commit. Read B's message from `legacy.txt` and use the same comparison that failed at C.

Try to answer before turning a card over, then try again after a gap. Regular recall and spaced review help the commands and their effects stick over time. To practice `git bisect start`, `git bisect good`, `git bisect run`, and `git bisect reset`, use the [English Git Commands Flashcards deck](/catalog/packages/git-commands-flashcards/).

*An AI agent ran the disposable lab. AI tools contributed substantially to the research, writing, and editing. The illustration is AI-generated.*
