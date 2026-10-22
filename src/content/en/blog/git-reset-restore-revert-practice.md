---
title: "Git Reset, Restore, and Revert: Predict What Changes"
description: "Practice Git reset, restore, and revert with checked before-and-after states for HEAD, the index, working files, and an earlier commit's changes."
date: "2026-10-22"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/bebe7d9b53b76f2fa3fd921e86c45988004d8cbf78f8fc61a4836cae4c7ead9d.webp"
keywords:
  - "git reset vs restore vs revert"
  - "git restore staged vs worktree"
  - "git reset soft mixed hard"
  - "Git undo practice"
  - "Git index working tree HEAD"
---

> **Keep practicing:** [Explore the English Git Commands Flashcards deck](https://nibomo.com/catalog/packages/git-commands-flashcards/) — 98 cards for broader Git recall. The complete exercises and answers for this lesson are below.

Your last commit contains `two`. You've staged `three`, then edited the file again to contain `four`. Run `git restore notes.txt`, and the file becomes `three`. Add `--staged` instead, and the file stays `four`. Neither command moves your branch.

To choose between **Git reset, restore, and revert**, decide what you want to change:

| Intended result | Operation to examine |
| --- | --- |
| Replace a file's staged or working version | `git restore`, with a source and destination |
| Move the current branch to another commit | Commit-form `git reset`, with a mode that controls what happens to local files |
| Reverse a committed change while retaining the existing history | `git revert`, which records a new commit |

There is an important overlap: reset with a file path changes the index without moving the branch. The lab below includes that form too. Give the committed, staged, and working versions different contents, and the differences between these commands become visible.

![A volunteer peels a red square from a blue window decoration while a separate yellow bird stays in place](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/bebe7d9b53b76f2fa3fd921e86c45988004d8cbf78f8fc61a4836cae4c7ead9d.webp)

## Keep three versions on the page

For this lab, `HEAD` refers through the current branch, `main`, to its latest commit. The **index**, also called the staging area, holds the version prepared for the next ordinary commit. The **working tree** contains the files you edit. Git's [tutorial on the index](https://git-scm.com/docs/gittutorial-2#_the_index_file) explains why staging and then editing can leave different versions of the same file.

Our starting history is `A → B`, with `main` and `HEAD` at B:

| Location | Contents of `notes.txt` | How it got there |
| --- | --- | --- |
| Commit A | `one` | First commit |
| Commit B, current `HEAD` | `two` | Second commit |
| Index | `three` | Edited after B, then staged |
| Working tree | `four` | Edited again after staging |

Each word is the file's entire contents, followed by a newline. There's also an untracked `scratch.txt` containing `keep me`.

“Undo my changes” leaves too much unspecified. You might mean the difference from `two` to `three`, from `three` to `four`, or both. Before running a command, name its source, its destination, and whether the branch should move.

## Start each case in a fresh repository

Use Bash or zsh with Git installed. **Run this whole setup again before each of cases 1–8.** Every run creates a new temporary repository and enters it. The eight commands are alternatives; running them one after another won't reproduce the answer table.

Run the commands only in this disposable lab, where losing the sample edits is intentional:

```bash
lab_dir=$(mktemp -d /tmp/git-undo-practice.XXXXXX)
cd "$lab_dir" || exit 1
git init --initial-branch=main
git config user.name "Git Practice"
git config user.email "practice@example.com"
git config commit.gpgsign false
git config core.hooksPath /dev/null

printf 'one\n' > notes.txt
git add notes.txt
git commit -m A

printf 'two\n' > notes.txt
git add notes.txt
git commit -m B

printf 'three\n' > notes.txt
git add notes.txt
printf 'four\n' > notes.txt
printf 'keep me\n' > scratch.txt
```

The identity, signing, and hook settings apply only to this temporary repository. They let you create the sample commits without using your usual identity, signing setup, or hooks. Stop if a command reports an error; don't continue to an undo case with an incomplete setup.

Inspect the starting state:

```bash
git log -1 --format=%s
git show HEAD:notes.txt
git show :notes.txt
cat notes.txt
git status --short
```

Expected output, in that order:

```text
B
two
three
four
MM notes.txt
?? scratch.txt
```

`HEAD:notes.txt` reads the committed version. `:notes.txt` reads the staged version. `cat` reads the working file.

For this ordinary, non-conflicted status, the first status column compares the index with `HEAD`; the second compares the working tree with the index. `MM` means both comparisons found a modification. `??` identifies the untracked file.

## Predict these eight results first

For every case, start from HEAD at B, committed contents `two`, index `three`, and working file `four`. Predict the resulting commit, all three file versions, and the short status of `notes.txt`. Also predict whether `scratch.txt` survives.

| Case | Run exactly one command after a fresh setup |
| --- | --- |
| 1 | `git restore -- notes.txt` |
| 2 | `git restore --staged -- notes.txt` |
| 3 | `git restore --source=HEAD --worktree -- notes.txt` |
| 4 | `git restore --staged --worktree -- notes.txt` |
| 5 | `git reset --soft HEAD~1` |
| 6 | `git reset --mixed HEAD~1` |
| 7 | `git reset --hard HEAD~1` |
| 8 | `git reset HEAD -- notes.txt` |

`HEAD~1` means the first parent of the current commit: A in this two-commit history. `--` separates options and revision names from file paths.

After your chosen command, repeat the five inspection commands above. These commands also show the two differences, the untracked file, and the history reachable from HEAD:

```bash
git --no-pager diff --cached -- notes.txt
git --no-pager diff -- notes.txt
cat scratch.txt
git log --format=%s
```

The first diff compares `HEAD` with the index; the second compares the index with the working file.

## Compare with the executed results

These eight cases were executed independently in fresh repositories using Git 2.54.0 (Apple Git-157) on macOS 26.6.1, arm64. The recorded checks inspected HEAD, staged contents, working contents, status, history, and the untracked file.

In the status column below, `·` stands for a blank space. “None” means `notes.txt` has no status line; the repository still has `?? scratch.txt`.

| Case | Command | HEAD commit / contents | Index | Working tree | `notes.txt` status |
| --- | --- | --- | --- | --- | --- |
| 1 | `restore -- notes.txt` | B / `two` | `three` | `three` | `M·` |
| 2 | `restore --staged -- notes.txt` | B / `two` | `two` | `four` | `·M` |
| 3 | `restore --source=HEAD --worktree -- notes.txt` | B / `two` | `three` | `two` | `MM` |
| 4 | `restore --staged --worktree -- notes.txt` | B / `two` | `two` | `two` | None |
| 5 | `reset --soft HEAD~1` | A / `one` | `three` | `four` | `MM` |
| 6 | `reset --mixed HEAD~1` | A / `one` | `one` | `four` | `·M` |
| 7 | `reset --hard HEAD~1` | A / `one` | `one` | `one` | None |
| 8 | `reset HEAD -- notes.txt` | B / `two` | `two` | `four` | `·M` |

Every command in this table starts with `git`. `scratch.txt` remained unchanged in all eight recorded cases.

### Restore: choose the source and destination

**Case 1:** Plain restore copies the index to the working file. The staged `three` replaces `four`. B still contains `two`, and `three` remains staged. You discarded only the edit made after staging.

**Case 2:** Adding `--staged` copies HEAD to the index. The index becomes `two`, matching B. The working file stays `four`, so the file now has only an unstaged difference. The intermediate snapshot `three` is no longer in the index.

**Case 3:** `--source=HEAD` chooses `two`; `--worktree` sends it only to the working file. The index stays `three`. Its difference from HEAD produces the first `M`; the working file's difference from the index produces the second. A file can match HEAD on disk and still show `MM`.

**Case 4:** With `--staged --worktree`, both destinations receive `two` from HEAD. The staged `three` and working `four` are replaced. The branch stays at B.

The [restore manual](https://git-scm.com/docs/git-restore) documents those source defaults: the index for working-tree-only restoration, and HEAD when `--staged` is present. Choosing `--source` doesn't itself select a destination.

### Reset: distinguish a commit from a path

**Case 5:** Soft reset moves `main` to A and preserves both local versions. HEAD now contains `one`, the index still contains `three`, and the working file still contains `four`. A subsequent `git commit` without paths or `-a` would use `three`.

**Case 6:** Mixed reset moves `main` to A and replaces the index with `one`. The working file keeps `four`, now an unstaged change against A. Mixed is the default mode for this commit form of reset.

**Case 7:** Hard reset moves `main` to A and replaces both the index and working file with `one`. The local `three` and `four` versions are discarded from those locations.

**Case 8:** The path form takes `two` from HEAD and writes it only to the index entry for `notes.txt`. `main` remains at B; the working file remains `four`. It produces the same state as case 2.

The [reset manual](https://git-scm.com/docs/git-reset) distinguishes these two forms. Treating every reset as a history change gives the wrong answer for case 8.

After cases 5–7, `git log` from HEAD shows A alone. The branch has moved away from B, and no reversing commit has been created. This lab doesn't test recovery of discarded work.

The survival of `scratch.txt` is specific to this non-obstructing untracked file. Hard reset doesn't delete every untracked file, but it can overwrite untracked files that obstruct the target checkout. That documented edge case wasn't executed here.

## Revert B while keeping C's unrelated change

Revert needs a different starting state. This time there are two tracked files and three commits, with no uncommitted edits:

| Commit | `color.txt` | `memo.txt` | Change introduced |
| --- | --- | --- | --- |
| A | `blue` | `first` | Create both files |
| B | `red` | `first` | Change only the color |
| C, current HEAD | `red` | `second` | Change only the memo |

**Case 9:** Revert B while at C. Predict the final files and commit count. Will `memo.txt` return to `first`? Will B disappear from the history?

Create another fresh repository using this separate setup:

```bash
revert_dir=$(mktemp -d /tmp/git-revert-practice.XXXXXX)
cd "$revert_dir" || exit 1
git init --initial-branch=main
git config user.name "Git Practice"
git config user.email "practice@example.com"
git config commit.gpgsign false
git config core.hooksPath /dev/null

printf 'blue\n' > color.txt
printf 'first\n' > memo.txt
git add color.txt memo.txt
git commit -m A

printf 'red\n' > color.txt
git add color.txt
git commit -m B

printf 'second\n' > memo.txt
git add memo.txt
git commit -m C
```

Once that setup succeeds, run the revert and inspect its result:

```bash
git revert --no-edit HEAD~1

cat color.txt
cat memo.txt
git log --format=%s
git rev-list --count HEAD
git status --short
```

The answer is `blue` / `second`, with four commits. The inspection commands produce:

```text
blue
second
Revert "B"
C
B
A
4
```

The final status command prints nothing: the repository is clean. Call the new commit R, and the history is `A → B → C → R`.

B changed `blue` to `red`. Reversing that change at C puts `blue` back in `color.txt`; C's separate memo edit remains `second`. B and C remain ancestors of the new commit. Revert reverses a selected change against the current state, so it doesn't restore the whole repository to B's parent. The [revert manual](https://git-scm.com/docs/git-revert) describes these reversing commits; `--no-edit` accepts the generated message without opening an editor.

This two-file case was executed and checked in the same environment as cases 1–8. It uses independent edits. Later overlapping edits can cause conflicts; no conflict case, merge revert, remote, or shared-branch operation was tested.

## Choose a command without looking at its answer

Use the original state for cases 1–8, or the clean state at C for the revert question. Cover the last two columns before choosing:

| Result you need | Command | Reason |
| --- | --- | --- |
| Keep the staged `three`, discard the later `four` | `git restore -- notes.txt` | Copy the index to the working file |
| Unstage `three`, keep the working `four`, stay at B | `git restore --staged -- notes.txt` | Copy HEAD to the index only |
| Move an unpublished branch back to A, keep `three` staged and `four` on disk | `git reset --soft HEAD~1` | Move the branch and preserve both local versions |
| Move back to A, keep `four` as an unstaged difference | `git reset --mixed HEAD~1` | Move the branch and replace the index |
| Reverse B's color change while retaining C and the existing history | `git revert --no-edit HEAD~1` from C | Record the reversal in a new commit |

For history other people already use, a reversing commit often fits because existing commits stay in place. Moving your local branch backward doesn't by itself undo a commit on anyone else's branch. Before discarding real edits with restore or hard reset, inspect the relevant diff and preserve anything you need elsewhere.

## Review the reasoning after a gap

Close the answers and draw the three columns again: HEAD, index, working tree. For each command, name what it reads, what it changes, and where the branch ends up. If you miss a case, explain the mistaken comparison, then rerun that one in a fresh lab.

Turn a mistake into a narrow recall prompt. For example: “HEAD is `two`, index is `three`, working file is `four`. After restoring HEAD to the working tree only, why is status still `MM`?” Its answer needs both status comparisons. Remembering the command name alone won't explain the result.

Regular recall practices producing the explanation without the table. Spaced review brings the question back after a gap and can help with long-term retention. Keep using Git on real tasks too: recognizing a card's answer doesn't establish that you can predict an unfamiliar repository state, and no review schedule guarantees permanent memory.

*Production note: AI tools performed substantial research, drafting, and editing for this article. An AI agent executed the disposable Git cases that produced the reported results. The accompanying illustration is AI-generated. These checks concern the sample repositories only; they aren't a claim of personal testing or human review by Kirill.*
