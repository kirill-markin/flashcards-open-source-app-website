---
title: "How to Restore One File From a Git Stash"
description: "Restore one file from a Git stash, apply only its saved edits, or recover an untracked file without popping the stash."
date: "2026-11-27"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/88e6261b240ef85847642c916ec3717f77cb23ec3d8c8163440f923574daeebb.webp"
keywords:
  - "git restore one file from stash"
  - "apply stash changes to one file"
  - "recover untracked file from stash"
  - "git stash restore staged version"
---

You stashed changes to two files and only need `notes.txt` back. Use `git restore --source` to copy the whole saved file into your working tree. If the current branch has a newer footer you want to keep, apply the saved edits to `notes.txt` as a patch. For an untracked file, copy its contents from the stash's third parent if Git saved it there. All three methods keep the stash entry.

![A mosaic maker holds one red tile over a gap in a tabletop with a teal border](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/88e6261b240ef85847642c916ec3717f77cb23ec3d8c8163440f923574daeebb.webp)

## Restore the whole saved file

From the root of your repository, list your stashes and find the one with the right message. The example selects `stash@{0}`, the latest entry. Use a different number if needed. Resolving the stash to its commit ID keeps the source fixed if the list changes. Set `file` to the exact file path relative to the repository root. [Git stash commands](https://git-scm.com/docs/git-stash#_commands)

```bash
git stash list --format='%gd %H %s'
stash_oid=$(git rev-parse --verify 'stash@{0}^{commit}')
source_oid=$stash_oid
file=notes.txt
```

If the lookup succeeded, run these checks in the same shell.

```bash
git --literal-pathspecs status --short --ignored --untracked-files=all -- "$file"
git cat-file -t "${source_oid:?Choose a stash first}:${file:?Set the file path first}"
git --no-pager show "${source_oid}:$file"
git --no-pager --literal-pathspecs diff --no-ext-diff --no-textconv "$source_oid" -- "$file"
```

The type lookup should print `blob`, which is Git's name for stored file contents. If the lookup fails, stop and check the stash and path. By default, `git restore` can remove a matching tracked path when it is absent from the source. Status helps you spot staged and unstaged edits, as well as an untracked (`??`) or ignored (`!!`) file at the same path. If the file on disk contains work you need, save it before replacing the file. [Git restore options](https://git-scm.com/docs/git-restore#_options)

For a tracked file, the last diff compares the **stash snapshot to your working tree**. Lines marked `+` are in the current file and could disappear when you restore. Even with a clean status, the diff can show newer committed content. [Git diff documentation](https://git-scm.com/docs/git-diff)

Run the restore only after deciding that the **whole saved version** belongs at that path. The command checks the source again before writing.

```bash
test "$(git cat-file -t "${source_oid:?}:${file:?}")" = blob &&
  git --literal-pathspecs restore --source="$source_oid" --worktree -- "$file"
```

The `--worktree` flag copies the file to disk without staging it. Review the result with `git --no-pager --literal-pathspecs diff -- "$file"` and `git --literal-pathspecs status --short -- "$file"`.

### Copy the version that was staged

The stash commit holds the working-tree snapshot. Its first parent (`^1`) is the commit that was at `HEAD` when you stashed. Its second parent (`^2`) records the index, Git's staging area, at that moment. If you staged one edit and made another before stashing, the second parent holds the version with just the staged edit. [Git stash layout](https://git-scm.com/docs/git-stash#_discussion) · [Git revision syntax](https://git-scm.com/docs/gitrevisions#_specifying_revisions)

```bash
source_oid="${stash_oid:?Choose a stash first}^2"
git --no-pager show "${source_oid}:${file:?Set the file path first}"
```

To copy this version, keep `source_oid` set to the second parent and repeat the status, type, and diff checks above with that source. Then run the same guarded restore. You get the version that was staged when you made the stash as a working file on disk. [Git reset, restore, and revert lab](/blog/git-reset-restore-revert-practice/)

## Apply only the stashed changes to one tracked file

In the lab below, the stash changed the title and subtitle of `notes.txt`. A later commit updated the footer. Restoring the whole saved file brought back the old footer. Applying a patch brought back the two edits and kept the newer footer because the lines around the edits still matched.

To preview that patch, compare the stash's first parent (`^1`) to the stash itself. That diff shows what changed between the original `HEAD` and the saved working file. Look for deletions as well as additions. An empty diff means there's no saved change for that path. Check the stash and filename before continuing.

```bash
git --no-pager --literal-pathspecs diff --no-renames --no-ext-diff --no-textconv \
  "${stash_oid:?Choose a stash first}^1" "$stash_oid" -- "${file:?Set the file path first}"
```

Review the current file and its status before applying the patch. The block below works in Bash or zsh. `git apply --check` checks whether the patch can apply to the current file. The block stops on a failed check, including an empty patch. If the context has changed and the check fails, compare the saved diff with the current file and reconcile the edits by hand. [Git apply documentation](https://git-scm.com/docs/git-apply)

```bash
(
  set -eu
  patch_file=$(mktemp "${TMPDIR:-/tmp}/git-stash-one-file.XXXXXX")
  trap 'rm -f -- "$patch_file"' EXIT
  git --literal-pathspecs diff --binary --no-color --no-renames --no-ext-diff --no-textconv \
    --src-prefix=a/ --dst-prefix=b/ \
    "${stash_oid:?Choose a stash first}^1" "$stash_oid" -- "${file:?Set the file path first}" > "$patch_file"
  git apply --check "$patch_file"
  git apply "$patch_file"
)
```

Plain `git apply` writes to the working tree. Review the resulting diff against the currently staged version with `git --no-pager --literal-pathspecs diff -- "$file"`. Run the tests you'd normally run after an edit to that file.

## Recover an untracked file from the stash

Plain `git stash push` leaves untracked files out. When a stash saves untracked files with `--include-untracked`, Git stores them in a separate snapshot at the third parent (`^3`). If you're unsure of the original path, list the files in that snapshot. A missing parent means the selected stash has no separate snapshot of untracked files. [Git stash options](https://git-scm.com/docs/git-stash#_options) · [Git 2.54 stash implementation](https://github.com/git/git/blob/v2.54.0/builtin/stash.c#L283)

```bash
git ls-tree -r --name-only "${stash_oid:?Choose a stash first}^3"
```

Copy `scratch.txt` to a fresh temporary directory so a file at the original path stays safe. The source lookup runs before creating the directory. The last line prints the path to the recovered copy.

```bash
(
  set -eu
  saved_file="${stash_oid:?Choose a stash first}^3:scratch.txt"
  test "$(git cat-file -t "$saved_file")" = blob
  recovery_dir=$(mktemp -d "${TMPDIR:-/tmp}/git-stash-recovery.XXXXXX")
  git cat-file blob "$saved_file" > "$recovery_dir/scratch.txt"
  printf '%s\n' "$recovery_dir/scratch.txt"
)
```

Open the recovered copy to verify the contents. If you bring it into your repository, choose a free path and use `git add` when you're ready to stage it.

## Predict what the lab will recover

The sample starts with `title=base`, `subtitle=original`, and `footer=base` in `notes.txt`. It stages a title edit, edits the subtitle without staging, and then stashes both. The branch then commits `footer=current branch`.

1. Which saved version has the title edit and the original subtitle?
2. Which action gets both edits from the stash and keeps `footer=current branch`?

| Source or action | Title | Subtitle | Footer |
| --- | --- | --- | --- |
| Inspect the saved index (`^2`) | `staged` | `original` | `base` |
| Copy the saved working-tree snapshot | `staged` | `stashed` | `base` |
| Apply the one-file patch to the current file | `staged` | `stashed` | `current branch` |

## Run the example in a temporary repository

Paste the complete block into Bash or zsh. It creates a fresh repository, runs both tracked-file methods from the same starting contents, and recovers `scratch.txt` under a new filename. The printed repository path stays available for inspection.

```bash
(
  set -eu
  export GIT_CONFIG_NOSYSTEM=1 GIT_CONFIG_GLOBAL=/dev/null LC_ALL=C
  lab=$(mktemp -d "${TMPDIR:-/tmp}/git-stash-one-file.XXXXXX")
  git init -q --initial-branch=main "$lab/repo"
  cd "$lab/repo"
  git config user.name "Practice"
  git config user.email practice@example.invalid
  git config core.hooksPath /dev/null
  git config commit.gpgsign false

  {
    printf 'title=base\nsubtitle=original\n'
    printf '%s\n' item-1 item-2 item-3 item-4 item-5
    printf 'footer=base\n'
  } > notes.txt
  printf 'Checklist\n' > checklist.txt
  git add -- notes.txt checklist.txt
  git commit -qm Base

  sed 's/title=base/title=staged/' notes.txt > revised
  mv revised notes.txt
  git add -- notes.txt
  sed 's/subtitle=original/subtitle=stashed/' notes.txt > revised
  mv revised notes.txt
  printf 'Stashed checklist edit\n' >> checklist.txt
  printf 'Stashed scratch note\n' > scratch.txt
  git stash push --include-untracked -qm 'Practice versions'
  stash_oid=$(git rev-parse 'stash@{0}')

  sed 's/footer=base/footer=current branch/' notes.txt > revised
  mv revised notes.txt
  git add -- notes.txt
  git commit -qm 'Update footer'
  printf 'Local checklist edit\n' >> checklist.txt

  printf '\nSaved versions\n'
  git show "${stash_oid}^2:notes.txt" | head -n 2
  git show "${stash_oid}:notes.txt" | head -n 2

  git status --short -- notes.txt
  git cat-file -e "${stash_oid}:notes.txt"
  git restore --source="$stash_oid" --worktree -- notes.txt
  printf '\nWhole-file copy\n'
  head -n 2 notes.txt
  tail -n 1 notes.txt
  test "$(tail -n 1 notes.txt)" = 'footer=base'
  git diff --cached --quiet

  # Return the disposable notes file to the starting state for the patch demo.
  git restore --source=HEAD --worktree -- notes.txt
  git diff --binary --no-ext-diff --no-textconv "${stash_oid}^1" "$stash_oid" -- notes.txt > "$lab/notes.patch"
  git apply --check "$lab/notes.patch"
  git apply "$lab/notes.patch"
  printf '\nOne-file patch\n'
  head -n 2 notes.txt
  tail -n 1 notes.txt

  git cat-file -e "${stash_oid}^3:scratch.txt"
  (set -C; git show "${stash_oid}^3:scratch.txt" > recovered-scratch.txt)
  printf '\nFinal status\n'
  git status --short

  test "$(head -n 2 notes.txt)" = "$(printf 'title=staged\nsubtitle=stashed')"
  test "$(tail -n 1 notes.txt)" = 'footer=current branch'
  test "$(cat checklist.txt)" = "$(printf 'Checklist\nLocal checklist edit')"
  test "$(cat recovered-scratch.txt)" = 'Stashed scratch note'
  git diff --cached --quiet
  test "$(git rev-parse 'stash@{0}')" = "$stash_oid"
  printf '\nPractice repository: %s\n' "$lab/repo"
)
```

The checks confirm that the stash ID stays the same, the index still matches `HEAD`, and `checklist.txt` keeps its local edit. The final short status shows two unstaged modifications and the recovered untracked file.

```text
 M checklist.txt
 M notes.txt
?? recovered-scratch.txt
```

If a `git stash pop` has already conflicted in your repository, inspect everything it applied before making further changes. [Git stash pop conflict walkthrough](/blog/git-stash-pop-conflict/)

Try answering the two practice questions again in a few days before checking the table. Recalling the commands at intervals can help you remember when to use each one. The 98-card English deck covers stash, applying changes, untracked files, and staging. [Git commands flashcards](/catalog/packages/git-commands-flashcards/)

*AI assisted with research, drafting, and editing, ran the lab in a disposable repository in Bash and zsh using Git 2.54.0 (Apple Git-157) on macOS 26.6.1, and generated the cover illustration.*
