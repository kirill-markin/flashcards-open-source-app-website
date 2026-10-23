---
title: "Git Reflog: Recover Lost Commits Without Moving Your Branch"
description: "Find commits left behind by reset, amend, or detached HEAD. Practice inspecting reflog candidates and creating rescue branches while preserving current edits."
date: "2026-10-24"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/1c05b0d30d11e2f677403750be229e37936afec6d45d23e56dd8986cbbe070da.webp"
keywords:
  - "git reflog recover lost commits"
  - "recover commit after reset"
  - "recover amended commit"
  - "detached HEAD recovery"
  - "HEAD reflog vs branch reflog"
---

In the reset lab below, `HEAD@{1}` points to the commit you already have. The wanted commit is three entries back. Two branch switches are enough to make a copied recovery command select the wrong snapshot.

To **recover lost commits with Git reflog**, inspect the local record, check the candidate's contents, and create a new branch at its full commit ID. Plain branch creation leaves your current branch, staged changes, and working files in place. Once the commit has a name, you can decide how to use it.

The three cases cover a commit left behind by reset, the original commit replaced by amend, and work made in detached HEAD. Each starts in its own disposable repository and ends with a rescue branch. The reported results come from executed checks, with the environment and limits recorded below.

![A printmaker marks one of three blue fern prints with an ochre ribbon while leaving the other prints on the drying line](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/1c05b0d30d11e2f677403750be229e37936afec6d45d23e56dd8986cbbe070da.webp)

## Find, inspect, then give the commit a name

Start in the local repository where you made the commit. Read its current status and the records for HEAD and the branch involved:

```bash
git status --short
git reflog show HEAD
git reflog show main
```

Replace `main` with your branch name. If that branch or its reflog doesn't exist, the last command can fail. Continue inspecting HEAD's available record; don't use a selector for a branch Git couldn't find.

A branch name points to a commit. Its **reflog** records earlier values of that reference when logging is enabled. HEAD's record also includes branch switches. These local reference histories differ from the commit ancestry shown by an ordinary `git log`. See the [Git reflog manual](https://git-scm.com/docs/git-reflog).

| Expression | What it selects |
| --- | --- |
| `HEAD~1` | The first parent of the current commit |
| `'HEAD@{1}'` | The previous recorded value in HEAD's reflog |
| `'main@{1}'` | The previous recorded value in main's reflog |

The number in `@{1}` counts reflog entries, not parents. A branch switch can add an entry even when both branches point to the same commit. Later recorded updates shift the numbers, so quote selectors in the shell and resolve the selected entry before doing more work. Git's [revision syntax reference](https://git-scm.com/docs/gitrevisions) explains these forms and their quoting requirements.

For example, **only if the record you inspected identifies `main@{1}` as the candidate**, capture its full ID and examine it:

```bash
candidate=$(git rev-parse 'main@{1}')
git --no-pager show --no-patch --format=fuller "$candidate"
git --no-pager show --stat "$candidate"
git show "${candidate}:notes.txt"
```

Replace `notes.txt` with a relevant path listed in the commit. These commands show the commit metadata, a change summary, and the committed version of that file. They don't replace today's file. Use the message to locate plausible candidates, then check the contents that distinguish the wanted snapshot. For a larger recovery, inspect the other relevant files too. The [git show manual](https://git-scm.com/docs/git-show) covers these inspection forms.

Once you've confirmed the commit, retain it with a new, unused branch name:

```bash
git branch rescue-found-commit "$candidate"
```

Plain `git branch` creates the reference without checking it out, as the [branch manual](https://git-scm.com/docs/git-branch) specifies. If the name already exists, inspect it and choose a different name; don't add `-f` out of habit. The captured ID keeps this operation tied to the object you inspected, even if reflog numbering changes later.

At this point the commit is reachable through `rescue-found-commit`. Its changes haven't been applied to your current files. That completes the preservation step.

## Set up a disposable recovery lab

The three scenarios were executed on **October 24, 2026**, using **Git 2.54.0 (Apple Git-157), macOS 26.6.1, arm64**. The checks compared the current branch and commit, the index and working versions of `notes.txt`, repository status, and the reset case's untracked file before and after branch creation. These results concern the sample repositories; they don't establish the state of a repository you're recovering.

Define these two functions once in a Bash or zsh session. Each case calls the setup inside parentheses to create a fresh temporary repository. The parentheses also keep directory changes and shell options inside that subshell. `set -eu` stops the case on a command error or unset variable. If a command fails, inspect the error and start the case again in a fresh lab.

```bash
new_reflog_lab() {
  lab_dir=$(mktemp -d /tmp/git-reflog-practice.XXXXXX)
  cd "$lab_dir"
  printf 'Lab directory: %s\n' "$lab_dir"
  git init --initial-branch=main
  git config user.name "Git Practice"
  git config user.email "practice@example.com"
  git config commit.gpgsign false
  git config core.hooksPath /dev/null
  git config core.logAllRefUpdates true

  printf 'one\n' > notes.txt
  git add notes.txt
  git commit -m A

  printf 'two\n' > notes.txt
  git add notes.txt
  git commit -m B

  printf 'three\n' > notes.txt
  git add notes.txt
  git commit -m C
}

current_lab_state() {
  git symbolic-ref --short HEAD || return
  git rev-parse HEAD || return
  git log -1 --format=%s || return
  git show :notes.txt || return
  cat notes.txt || return
  git status --porcelain=v1
}
```

The settings apply only to the temporary repository. Every setup creates `A → B → C`: `notes.txt` contains `one` in A, `two` in B, and `three` in C. The branch `main` starts at C with a clean index and working tree. Your commit IDs will differ from the recorded run.

The state helper prints, in order, the branch, full HEAD ID, commit subject, index contents, working contents, and short status. Each case saves this output before and after rescue and checks that the two values match. A successful `test` command prints nothing; a failed comparison stops the case.

**Run the reset and amend commands below only in these disposable labs.** They deliberately move or replace sample history. For the differences between undo operations themselves, use the separate [Git reset, restore, and revert practice](/blog/git-reset-restore-revert-practice/).

## Case 1: Recover a commit after reset, with new edits already present

This case moves `main` back to A, switches to another branch at A, then returns to main. It then stages `staged`, edits the working file to `working`, and adds an untracked file containing `keep me`. Before running it, predict what `HEAD@{1}` will select and where you'll find C.

```bash
(
  set -eu
  new_reflog_lab

  git branch side HEAD~2
  git reset --hard HEAD~2
  git switch side
  git switch main

  printf 'staged\n' > notes.txt
  git add notes.txt
  printf 'working\n' > notes.txt
  printf 'keep me\n' > scratch.txt

  git reflog show --format='%h %gd %gs' HEAD
  git reflog show --format='%h %gd %gs' main
  git show -s --format=%s 'HEAD@{1}'

  candidate=$(git rev-parse 'main@{1}')
  git --no-pager show --no-patch --format=fuller "$candidate"
  git show "${candidate}:notes.txt"

  before=$(current_lab_state)
  scratch_before=$(cat scratch.txt)
  git branch rescue-reset "$candidate"
  after=$(current_lab_state)
  scratch_after=$(cat scratch.txt)

  test "$before" = "$after"
  test "$scratch_before" = "$scratch_after"
  printf '%s\n' "$after"
  cat scratch.txt
  git show rescue-reset:notes.txt
)
```

The observed entries were:

| Reflog entry | Commit | Recorded event |
| --- | --- | --- |
| `HEAD@{0}` | A | Switch from side to main |
| `HEAD@{1}` | A | Switch from main to side |
| `HEAD@{2}` | A | Reset to `HEAD~2` |
| `HEAD@{3}` | C | Commit C |
| `main@{0}` | A | Reset to `HEAD~2` |
| `main@{1}` | C | Commit C |

`HEAD@{1}` produced subject `A`. C was at `HEAD@{3}` and `main@{1}` in this sequence. The switches added entries to HEAD's record while main remained at A, so main's reflog stayed shorter.

Candidate inspection printed C's subject and file contents `three`. After creating `rescue-reset`, both comparisons passed:

| Location | Before rescue | After rescue |
| --- | --- | --- |
| Current branch / commit | main / A | main / A |
| Index `notes.txt` | `staged` | `staged` |
| Working `notes.txt` | `working` | `working` |
| Status | `MM notes.txt`, `?? scratch.txt` | Same |
| Untracked `scratch.txt` | `keep me` | `keep me` |
| New branch `rescue-reset` | Absent | C, containing `three` |

The branch `rescue-reset` now retains C and its ancestors, including B. Main still points to A, and today's sample edits are intact. Reading the rescued snapshot doesn't require checking it out.

## Case 2: Recover the original amended commit

Amending creates a replacement tip commit, as described in the [commit manual](https://git-scm.com/docs/git-commit). To recover the original, look for the branch's position before the amendment and verify the old contents.

Start a fresh lab at C, change `notes.txt` to `revised`, then amend:

```bash
(
  set -eu
  new_reflog_lab

  printf 'revised\n' > notes.txt
  git add notes.txt
  git commit --amend -m 'C revised'

  git reflog show --format='%h %gd %gs' main
  candidate=$(git rev-parse 'main@{1}')
  git --no-pager show --no-patch --format=fuller "$candidate"
  git show "${candidate}:notes.txt"

  before=$(current_lab_state)
  git branch rescue-before-amend "$candidate"
  after=$(current_lab_state)
  test "$before" = "$after"

  printf '%s\n' "$after"
  git show HEAD:notes.txt
  git show rescue-before-amend:notes.txt
)
```

Here `main@{0}` was `C revised`, and `main@{1}` was the original C. Inspection printed `three` for the candidate, distinguishing it from the amended snapshot's `revised`.

The comparison passed. `main` stayed at `C revised`, the index and working file stayed `revised`, and status remained clean. Reading `HEAD:notes.txt` printed `revised`; reading `rescue-before-amend:notes.txt` printed `three`.

Both snapshots now have branch names. Creating `rescue-before-amend` hasn't undone the amendment. You can compare the versions before deciding what to use; any later change to shared history needs coordination with the people using it.

## Case 3: Find a detached commit in HEAD's reflog

A detached HEAD points directly to a commit. Committing in that state moves HEAD without moving an existing branch to the new commit. The [git switch manual](https://git-scm.com/docs/git-switch) explains detached operation and how a branch can retain that work.

This time, detach at B, create D with contents `detached`, then return to `main` at C:

```bash
(
  set -eu
  new_reflog_lab

  git switch --detach HEAD~1
  printf 'detached\n' > notes.txt
  git add notes.txt
  git commit -m 'D detached'
  git switch main

  git reflog show --format='%h %gd %gs' HEAD
  git reflog show --format='%h %gd %gs' main
  candidate=$(git rev-parse 'HEAD@{1}')
  git --no-pager show --no-patch --format=fuller "$candidate"
  git show "${candidate}:notes.txt"

  before=$(current_lab_state)
  git branch rescue-detached "$candidate"
  after=$(current_lab_state)
  test "$before" = "$after"

  printf '%s\n' "$after"
  git show HEAD:notes.txt
  git show rescue-detached:notes.txt
)
```

In this sequence, `HEAD@{0}` recorded the return to main, and `HEAD@{1}` identified D. Main's reflog contained C, B, and A. It had no D entry because main had never pointed to D.

The candidate's subject was `D detached`, and its file contained `detached`. After rescue, the comparison passed: the current branch remained main at C, its index and working file remained `three`, and the repository stayed clean. `rescue-detached` pointed to D.

Here `HEAD@{1}` finds the wanted commit. In case 1 it finds A. The useful habit is inspecting the record and contents; the right number depends on what happened in that repository.

## What reflog recovery can and can't retain

This workflow needs both a useful reflog entry and its commit object. It recovers **committed snapshots still available in the same local repository**. It doesn't recover never-committed edits merely because a hard reset or restore discarded them: reflogs record reference positions, not every edit to the working tree.

Reflogs are local. Pushing or cloning a repository doesn't transfer these recovery records to another clone. Another machine may have useful commits of its own, but it doesn't automatically have your local reflog.

Git documents default reflog expiration settings of 90 days generally and 30 days for entries unreachable from the current tip. The settings are `gc.reflogExpire` and `gc.reflogExpireUnreachable`; configuration and explicit commands can change them. They are **not guaranteed recovery windows**. Expiration removes reflog entries, while pruning removes eligible unreferenced objects. A commit object may remain after its entry expires, even though you can no longer find it through that entry. See the [garbage-collection manual](https://git-scm.com/docs/git-gc) for these defaults and object-retention rules.

A rescue branch gives the commit a local reference, retaining it through ordinary reachability rules while that branch remains. It isn't an off-machine backup. Losing the repository's Git data can still lose the commit and the rescue branch together.

After preservation, choose the integration step separately. Switching to the rescue branch changes the checkout; resetting the current branch to the recovered commit moves that branch; applying a commit's changes is another operation. Each has different effects on current work. The recipe above deliberately ends once the wanted commit has a branch name.

## Check your reasoning without the terminal

Close the terminal and answer these from the three cases:

1. After the reset and two switches, what does `HEAD@{1}` select? Where is C?
2. Does creating `rescue-reset` put `three` into the working file?
3. How can you read the original C after amend without undoing the amendment?
4. Why is D absent from main's reflog in the detached case?
5. Why capture a full commit ID instead of continuing to use the reflog selector?

Then check your reasoning:

| Question | Answer |
| --- | --- |
| 1 | A: the recorded switch to side also pointed to A. C is at `HEAD@{3}` and `main@{1}`. |
| 2 | No. Branch creation adds a reference at C without checking it out. The file stays `working`, and the index stays `staged`. |
| 3 | Run `git show rescue-before-amend:notes.txt`. It prints `three`; main's amended snapshot still contains `revised`. |
| 4 | D was created while HEAD was detached. Main remained at C and never recorded D as its value. HEAD's reflog recorded the detached work. |
| 5 | Later reference updates can shift the entry numbers. The full ID keeps identifying the object you inspected. |

After a gap, redraw the branches and answer again without looking. If a selector surprises you, rerun that case in a fresh lab and explain which reference moved at each step.

The [English Git Commands Flashcards deck](/catalog/packages/git-commands-flashcards/) has 98 cards, including reflog inspection and creating a recovery branch. Use those cards alongside the state predictions above: recall the command, then explain what it changes. Regular recall and spaced review give you repeated chances to retrieve that knowledge after a gap, helping long-term retention. They don't guarantee permanent memory or replace inspecting a real repository before changing it.

*Production note: AI tools performed substantial research, drafting, and editing for this article. An AI agent executed the disposable Git cases behind the reported results. The accompanying illustration is AI-generated. These sample checks aren't a claim of personal testing or human review by Kirill.*
