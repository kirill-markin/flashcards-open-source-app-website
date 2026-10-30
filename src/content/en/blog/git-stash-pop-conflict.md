---
title: "Git Stash Pop Conflict: Resolve Files and Keep Local Work"
description: "Resolve a Git stash pop conflict with a reproducible lab. Inspect all changed files, keep local edits, unstage the resolution, and verify which stash remains."
date: "2026-10-30"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/f005adb41236e32fcefb4a0882a658f874ec7147b50c7ebb98eb1b82a41ea7a0.webp"
keywords:
  - "git stash pop conflict"
  - "resolve stash conflict without commit"
  - "git stash pop partially applied"
  - "stash entry kept"
  - "Updated upstream Stashed changes"
---

`git stash pop` reports a conflict in one file. Another file from the same stash has already changed—and is staged. Your unrelated local edit is still there too. Fixing only the file with conflict markers leaves part of the result unchecked.

To resolve a **Git stash pop conflict**, inspect the whole status, edit the conflicted files into the result you want, and stage those paths to mark them resolved. You can then unstage the result and keep working without making a commit. The conflicted pop keeps its stash entry; dropping that entry is a separate decision.

The disposable lab below follows four changed paths through that process and keeps a second, older stash in the list. It shows the partially applied changes, the completed resolution, and the shift in stash numbers after cleanup.

![A traveler places a scarf beside a hat and folded shirt in a suitcase while a closed yellow pouch stays outside](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/f005adb41236e32fcefb4a0882a658f874ec7147b50c7ebb98eb1b82a41ea7a0.webp)

## If the conflict is already in your repository

Start with inspection. Don't run `stash pop` again just because the first attempt failed:

```bash
git status --short
git ls-files --unmerged
git --no-pager diff
git --no-pager diff --cached
git stash list --format='%gd %H %s'
```

The first diff examines working changes against the index; `--cached` examines the index against HEAD. A conflicted file needs special attention, but so do cleanly applied files, staged changes, and edits that predate the pop. Untracked file contents aren't included in those diffs: inspect them separately if they're relevant. The [Git diff manual](https://git-scm.com/docs/git-diff) documents the comparisons.

For an ordinary text conflict, inspect each side and edit the file into the result you want. Remove the conflict markers, save the file, then run `git add --` followed by **only the resolved paths**. Use your actual filenames; the packing filenames later in this article belong to the demonstration. Adding a path marks its current contents as resolved; Git doesn't decide whether you combined the changes correctly.

Check `git ls-files --unmerged` again. Empty output means the index has no unresolved entries. It doesn't establish that the resulting program is correct: read both diffs and the finished files, then run the checks normally required by your project.

If you want to continue with unstaged edits, use `git restore --staged --` followed by the specific paths you've inspected. Include any cleanly applied file you also intend to unstage. Keep the stash until you've checked its contents and decided you no longer need that saved version.

This is a workflow for a text-content conflict during plain `stash pop`. Binary conflicts, renames, deletions, untracked-file collisions, and `--index` need their own investigation. A broad reset would make the unrelated local work part of the operation too.

## What the checked example contains

The example uses synthetic packing notes in a disposable repository. An AI agent executed the underlying fixture on October 30, 2026, with **Git 2.54.0 (Apple Git-157), macOS 26.6.1 on arm64, and Python 3.14.7**. The agent also ran the complete shell block below successfully: its state and content assertions passed. That block needs Bash or zsh and Git; it doesn't need Python.

The fixture disables rerere, uses the `merge` conflict-marker style, and sets `stash.index=false`. It isolates global and system Git configuration. No remote, fetch, or network operation is involved.

Before the pop, there are two stashes:

| Entry | Saved work |
| --- | --- |
| `stash@{0}` | Change `packing.txt` from `pack=shirt` to `pack=shirt,scarf`; add `check weather` to `checklist.txt` |
| `stash@{1}` | Change `older.txt` from `older base` to `older parked work` |

After creating the top stash, the fixture commits a different packing choice: `pack=shirt,hat`. It then changes `journal.txt` to `day 2: keep this local edit` and creates an untracked `scratch.txt` containing `untracked: keep me`.

Those last two edits weren't in either stash. Their survival is part of what the lab checks. A retained stash preserves what it saved; it doesn't also save these later edits or your eventual conflict resolution.

If HEAD, the index, and the working tree still blur together, the [Git reset, restore, and revert lab](/blog/git-reset-restore-revert-practice/) gives each version distinct contents so you can see the differences.

## Reproduce the whole sequence in a disposable directory

Run this complete block in Bash or zsh. It creates a new temporary repository, resolves the sample conflict, unstages the two applied files, and finally drops the verified top stash. **The final drop is part of this disposable demonstration.** In your real repository, keeping a stash while you inspect the result is fine.

The subshell stops on unexpected failures. The two expected nonzero results—conflicted pop and absent `MERGE_HEAD`—are handled explicitly. The identity, signing, and hook settings apply only inside the temporary repository.

```bash
(
  set -eu
  export GIT_CONFIG_NOSYSTEM=1
  export GIT_CONFIG_GLOBAL=/dev/null
  export GIT_TERMINAL_PROMPT=0
  export LC_ALL=C

  lab_dir=$(mktemp -d /tmp/git-stash-conflict.XXXXXX)
  cd "$lab_dir"
  git init --initial-branch=main
  git config user.name 'Kirill Markin'
  git config user.email 'markinkirill@gmail.com'
  git config commit.gpgsign false
  git config core.hooksPath /dev/null
  git config merge.conflictStyle merge
  git config rerere.enabled false
  git config stash.index false

  printf 'pack=shirt\n' > packing.txt
  printf 'check passport\n' > checklist.txt
  printf 'day 1\n' > journal.txt
  printf 'older base\n' > older.txt
  git add -- packing.txt checklist.txt journal.txt older.txt
  git commit -m Base \
    -m 'Co-authored-by: Codex GPT-6 <noreply@openai.com>'

  printf 'older parked work\n' > older.txt
  git stash push -m 'older parked work' -- older.txt
  older_oid=$(git rev-parse 'stash@{0}')

  printf 'pack=shirt,scarf\n' > packing.txt
  printf 'check passport\ncheck weather\n' > checklist.txt
  git stash push -m 'packing and checklist' -- packing.txt checklist.txt
  target_oid=$(git rev-parse 'stash@{0}')

  printf 'pack=shirt,hat\n' > packing.txt
  git add -- packing.txt
  git commit -m 'Pack a hat' \
    -m 'Co-authored-by: Codex GPT-6 <noreply@openai.com>'
  head_before=$(git rev-parse HEAD)
  printf 'day 2: keep this local edit\n' > journal.txt
  printf 'untracked: keep me\n' > scratch.txt
  git status --short

  if git stash pop 'stash@{0}'; then
    printf '%s\n' 'Expected a conflict, but pop succeeded' >&2
    exit 1
  else
    pop_status=$?
    test "$pop_status" -eq 1
  fi
  git status --short
  git ls-files --unmerged
  cat packing.txt
  git show :1:packing.txt
  git show :2:packing.txt
  git show :3:packing.txt
  test "$(git rev-parse 'stash@{0}')" = "$target_oid"
  test "$(git rev-parse HEAD)" = "$head_before"

  if git rev-parse --verify -q MERGE_HEAD; then
    printf '%s\n' 'Unexpected MERGE_HEAD in this stash fixture' >&2
    exit 1
  else
    merge_status=$?
    test "$merge_status" -eq 1
  fi

  printf 'pack=shirt,hat,scarf\n' > packing.txt
  git add -- packing.txt
  test -z "$(git ls-files --unmerged)"
  git status --short
  git --no-pager diff --cached -- packing.txt checklist.txt
  git --no-pager diff -- journal.txt

  git restore --staged -- packing.txt checklist.txt
  test -z "$(git ls-files --unmerged)"
  test -z "$(git --no-pager diff --cached --name-only)"
  git status --short
  test "$(cat packing.txt)" = 'pack=shirt,hat,scarf'
  test "$(cat checklist.txt)" = "$(printf 'check passport\ncheck weather')"
  test "$(cat journal.txt)" = 'day 2: keep this local edit'
  test "$(cat scratch.txt)" = 'untracked: keep me'
  status_before_drop=$(git status --short)

  git stash list --format='%gd %H %s'
  test "$(git rev-parse 'stash@{0}')" = "$target_oid"
  git stash drop 'stash@{0}'
  git stash list --format='%gd %H %s'
  test "$(git rev-parse 'stash@{0}')" = "$older_oid"
  test "$(git rev-parse HEAD)" = "$head_before"
  test "$(git status --short)" = "$status_before_drop"
  printf 'Lab repository: %s\n' "$lab_dir"
)
```

Commit and stash IDs will differ between runs. The state outputs below match the executed fixture and shell replay; compare file contents, status columns, and stash identities rather than expecting the same commit IDs. The temporary repository remains available at the printed path. Because the block runs in a subshell, your terminal returns to its original directory afterward.

## Read the partial result before editing

Immediately before the pop, status contains only the unrelated local work:

```text
 M journal.txt
?? scratch.txt
```

The pop exits with status `1`. Its complete output in the checked fixture was:

```text
Auto-merging packing.txt
CONFLICT (content): Merge conflict in packing.txt
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   checklist.txt

Unmerged paths:
  (use "git restore --staged <file>..." to unstage)
  (use "git add <file>..." to mark resolution)
        both modified:   packing.txt

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   journal.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        scratch.txt

The stash entry is kept in case you need it again.
```

The shorter view makes all four states easier to compare:

```text
M  checklist.txt
 M journal.txt
UU packing.txt
?? scratch.txt
```

For ordinary tracked paths, the first status column describes the index and the second describes working changes. Unmerged paths use conflict codes: here `UU` means both sides modified the file. See the [status format documentation](https://git-scm.com/docs/git-status#_short_format).

| Path | What the conflicted pop left behind |
| --- | --- |
| `checklist.txt` | The weather line applied cleanly and is already staged |
| `packing.txt` | Conflict markers in the working file and unresolved entries in the index |
| `journal.txt` | The pre-existing local edit, still unstaged |
| `scratch.txt` | The pre-existing untracked file |

HEAD still points to the `Pack a hat` commit, and the top stash still has its original full object ID. The [stash manual](https://git-scm.com/docs/git-stash) documents that conflicts prevent `pop` from removing the entry. `apply` retains its entry even when application succeeds; neither command is a reason to skip inspection of the resulting files.

## “Updated upstream” is the current destination here

The conflicted `packing.txt` contains:

```text
<<<<<<< Updated upstream
pack=shirt,hat
=======
pack=shirt,scarf
>>>>>>> Stashed changes
```

In this fixture, “Updated upstream” labels the current destination version containing the hat. It doesn't mean Git fetched from a remote. “Stashed changes” contains the scarf saved earlier.

The index holds three versions for this unresolved path. `git ls-files --unmerged` printed:

```text
100644 cf1b96abbf6f5e1e1da3c09ee8c3debe60c77c3c 1 packing.txt
100644 5feeb0ef29cd1f6191b374c65fb536aa67b89fd4 2 packing.txt
100644 0b64b857c6b50fb792a4631e094ae364a9ccc662 3 packing.txt
```

Git separates the path from the preceding fields with a tab. The stage number lets you read each version directly:

| Command | Version in this conflict | Complete file contents |
| --- | --- | --- |
| `git show :1:packing.txt` | Base | `pack=shirt` |
| `git show :2:packing.txt` | Current destination | `pack=shirt,hat` |
| `git show :3:packing.txt` | Stashed changes | `pack=shirt,scarf` |

Each file ends with a newline. The [revision syntax manual](https://git-scm.com/docs/gitrevisions) explains the `:stage:path` notation; [git ls-files](https://git-scm.com/docs/git-ls-files) documents unmerged index entries.

For these demonstration notes, the intended result includes both the hat and scarf. In code, keeping both sides can be wrong—for example, two alternative implementations may conflict logically even after all markers are gone. Choose the finished content deliberately.

## Mark the resolution, then choose whether to keep it staged

For this sample file, the resolution keeps both additions. The lab replaces the conflicted contents and stages that one path:

```bash
printf 'pack=shirt,hat,scarf\n' > packing.txt
git add -- packing.txt
git ls-files --unmerged
git status --short
```

`ls-files --unmerged` now prints nothing. Status becomes:

```text
M  checklist.txt
 M journal.txt
M  packing.txt
?? scratch.txt
```

Both stash-related files are staged, although only `packing.txt` needed a manual resolution. Their complete staged diff is:

```diff
diff --git a/checklist.txt b/checklist.txt
index 6615f3a..c0aa269 100644
--- a/checklist.txt
+++ b/checklist.txt
@@ -1 +1,2 @@
 check passport
+check weather
diff --git a/packing.txt b/packing.txt
index 5feeb0e..ce41e13 100644
--- a/packing.txt
+++ b/packing.txt
@@ -1 +1 @@
-pack=shirt,hat
+pack=shirt,hat,scarf
```

The separate unstaged diff for the existing local edit is:

```diff
diff --git a/journal.txt b/journal.txt
index c3a0d75..115003d 100644
--- a/journal.txt
+++ b/journal.txt
@@ -1 +1 @@
-day 1
+day 2: keep this local edit
```

You can resolve this stash conflict **without a commit**. The fixture has no `MERGE_HEAD`: `git rev-parse --verify -q MERGE_HEAD` exits `1` with no output. There is no paused `git merge` to finish with `merge --continue`, and `stash` has no `--continue` step. Once the index has no unresolved entries, the conflict is resolved from Git's perspective. Commit when you're ready to record the result.

To leave the applied changes unstaged, the lab uses:

```bash
git restore --staged -- packing.txt checklist.txt
git status --short
```

Output:

```text
 M checklist.txt
 M journal.txt
 M packing.txt
?? scratch.txt
```

With only `--staged`, restore changes the selected index entries to HEAD and keeps the working files. This behavior is documented in the [restore manual](https://git-scm.com/docs/git-restore). In this lab the index is now clean, the unmerged list is empty, and the resolved packing contents remain `pack=shirt,hat,scarf`. The journal edit and untracked scratch file also remain intact.

## Verify the stash before dropping it

Resolving the files doesn't remove the retained entry. Immediately before the lab's drop, both entries are still listed:

```text
stash@{0} <target object ID> On main: packing and checklist
stash@{1} <older object ID> On main: older parked work
```

Angle-bracketed IDs above stand for the full IDs printed by `git stash list --format='%gd %H %s'`; don't paste those placeholders into commands. The runnable lab captures the target ID before the pop, re-lists the entries, and compares the current `stash@{0}` to that saved ID immediately before dropping it.

In a real repository, inspect the intended entry's patch using its current selector—for example, `git --no-pager stash show -p 'stash@{0}'` if the top entry is the one you want. Record its full object ID from the list, then re-list immediately before dropping it and confirm that the selector still identifies that same object. Don't create or drop other stashes between verification and cleanup. If you're unsure, leave the entry in place.

After dropping the matching top entry, the lab's list becomes:

```text
stash@{0} <older object ID> On main: older parked work
```

The older entry moved from `stash@{1}` to `stash@{0}`. The drop changed the stash list; the checked HEAD, working-file contents, and status stayed the same. That moving number is why an old instruction to drop “stash zero” needs a fresh check.

## Practice reading the state

Before repeating the lab, predict these results without looking at the terminal:

| Question | Checked answer |
| --- | --- |
| Did a failed pop leave every file untouched? | No. The checklist change applied and was staged. |
| Does `git add -- packing.txt` create a commit? | No. It stages the chosen contents and replaces the unresolved index entries for that path. |
| Does unstaging those two paths remove the scarf or weather line from the files? | No. The working contents remain. |
| Does the retained stash contain the later journal edit? | No. That edit was created after the stash. |
| After the top stash is dropped, which entry is `stash@{0}`? | The older parked work. |

Try again after a gap and explain each status column before running the next command. The [English Git Commands Flashcards deck](/catalog/packages/git-commands-flashcards/) offers broader practice with everyday Git commands, including stash and staging operations. Regular recall and spaced review help long-term retention by giving you repeated opportunities to retrieve the commands. Keep checking the actual repository state before choosing a recovery command.

*Production note: AI tools performed substantial research, drafting, and editing for this article. An AI agent executed the disposable Git fixture and the complete shell example. The accompanying illustration is AI-generated. This work doesn't establish personal testing or human review by Kirill.*
