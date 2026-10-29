---
title: "Find -o and -a: Group Tests and Keep the Output"
description: "Trace find operator precedence with a checked file fixture. Fix OR groups, missing -print output, file-type leaks, and incorrect negated name tests."
date: "2026-10-29"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/55deda23b7c97fe32bbc5d9ab39918e7a3c59c3965242a3ab9ed7ba7ed5451ac.webp"
keywords:
  - "find operator precedence"
  - "find -o -a"
  - "find parentheses"
  - "find multiple extensions"
  - "find print missing results"
  - "find not name"
---

In the lab below, adding `-print` to a `find` command makes three `.txt` files disappear from the output. A directory called `archive.md` still appears. Both commands exit successfully. The filenames haven't changed; the new action belongs to only one side of `-o`.

To find regular files ending in either `.txt` or `.md`, group the filename choices:

```sh
find ./samples -type f \( -name '*.txt' -o -name '*.md' \) -print
```

The parentheses put both filename choices under the same `-type f` requirement. The final `-print` runs after that combined selection succeeds. To understand **find operator precedence**, keep two questions separate: does this entry satisfy the expression, and does evaluation reach an output action?

![A baker brushes a matte round roll beside glossy oval rolls on the same baking sheet](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/55deda23b7c97fe32bbc5d9ab39918e7a3c59c3965242a3ab9ed7ba7ed5451ac.webp)

## Give the expression something to get wrong

Use a small tree with six regular files and two directories whose names resemble file extensions. That makes a missing type guard visible.

Run this from a location where you can create a new `find-precedence-lab` directory. Setup stops if that directory already exists.

```sh
python3 - <<'PY'
from pathlib import Path

root = Path("find-precedence-lab")
root.mkdir()
samples = root / "samples"
samples.mkdir()
files = [
    "report.txt",
    "todo.txt",
    "notes.md",
    "photo.jpg",
    "archive.md/inside.txt",
    "folder.txt/inside.md",
]
for name in files:
    path = samples / name
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text("demonstration only\n")
PY
```

After setup succeeds, enter the lab:

```sh
cd find-precedence-lab
```

Here is the complete tree. Trailing slashes mark directories:

```text
samples/
├── archive.md/
│   └── inside.txt
├── folder.txt/
│   └── inside.md
├── notes.md
├── photo.jpg
├── report.txt
└── todo.txt
```

The eight `find` variants below were executed on October 29, 2026, using native macOS 26.6.1 arm64 `/usr/bin/find` through `/bin/sh`, with CPython 3.14.7 driving the lab. All exited successfully without stderr. The complete output sets are shown sorted for readability; traversal order can differ. The expression rules are also documented by GNU, but these recorded results come from native macOS, not a GNU/Linux run.

## AND binds more tightly than OR

`find` evaluates an expression for each entry it visits, including directories. Tests such as `-type f` and `-name '*.txt'` return true or false for that entry. Operators combine those results and control which parts are evaluated.

These are the operators used here, from higher to lower precedence:

| Syntax | Meaning |
| --- | --- |
| `\( expression \)` | Keep an expression together. |
| `! expression` | Negate the following expression. |
| `expression -a expression` | AND. Adjacent expressions also imply AND. |
| `expression -o expression` | OR. |

With AND, a false left side skips the right side. With OR, a true left side skips the right side. This is short-circuit evaluation: once that operator's result is known, its other side isn't needed. GNU documents the precedence and these rules in its [expression operator reference](https://www.gnu.org/software/findutils/manual/html_node/find_html/Combining-Primaries-With-Operators.html).

The backslashes protect parentheses from the shell so that `find` receives them. Keep the spaces around them: each parenthesis is a separate argument. Quote the patterns too, so the shell passes `*.txt` and `*.md` to `find` instead of expanding them first.

Consider the ungrouped command:

```sh
find ./samples -type f -name '*.txt' -o -name '*.md'
```

Because adjacent tests imply AND, its selection means:

```text
(regular file AND name ends in .txt)
OR name ends in .md
```

The type test belongs only to the left branch. The right branch accepts any visited entry whose name matches `*.md`, including a directory. With no explicit action in this command, default printing outputs every entry for which the whole expression is true:

```text
./samples/archive.md
./samples/archive.md/inside.txt
./samples/folder.txt/inside.md
./samples/notes.md
./samples/report.txt
./samples/todo.txt
```

Five of these entries are wanted files. `./samples/archive.md` is the extra directory. The other suffix-looking directory, `folder.txt`, fails the left branch's regular-file test and doesn't match the right branch's `.md` pattern.

Here, `-name` examines the final name component, not the path leading to it. `folder.txt/inside.md` is tested as `inside.md`; `archive.md/inside.txt` is tested as `inside.txt`. A parent directory's suffix doesn't become part of its child's name test. These tests also leave traversal unchanged. To skip entire directory trees, use the separate [find -prune guide](/blog/find-prune-exclude-directories/).

## Why adding -print loses the text files

Append an explicit print action to the ungrouped command:

```sh
find ./samples -type f -name '*.txt' -o -name '*.md' -print
```

The complete result shrinks to three paths:

```text
./samples/archive.md
./samples/folder.txt/inside.md
./samples/notes.md
```

Its expression now means:

```text
(regular file AND name ends in .txt)
OR (name ends in .md AND print)
```

For `report.txt`, the left branch succeeds, so the whole OR expression is true. OR skips the right branch, including its `-print`. The path satisfies the expression and still produces no output.

The presence of `-print` disables default printing for the whole command, even for entries that never reach that action. There is no extra implicit print waiting after the OR. GNU's [find expression reference](https://www.gnu.org/software/findutils/manual/html_node/find_html/find-Expressions.html) explains how tests, actions, and default printing fit together. Both commands' exit status of zero means processing succeeded; it doesn't establish that the intended paths were printed.

Trace all six files and both suffix-looking directories through the command with the explicit `-print`:

| Entry under `./samples` | Left branch: regular `.txt` file | What happens next |
| --- | --- | --- |
| `report.txt` | True | OR skips the right branch. No print. |
| `todo.txt` | True | OR skips the right branch. No print. |
| `archive.md/inside.txt` | True | OR skips the right branch. No print. |
| `notes.md` | False | The `.md` test succeeds; print runs. |
| `folder.txt/inside.md` | False | The `.md` test succeeds; print runs. |
| `photo.jpg` | False | The `.md` test fails; print is skipped. |
| `archive.md/` | False: directory | The `.md` test succeeds; print runs. |
| `folder.txt/` | False: directory | The `.md` test fails; print is skipped. |

The trailing slashes in the table identify directories; `find` prints `./samples/archive.md` without one. The starting directory `./samples` also fails both branches and produces no output.

## Put the alternatives inside the file guard

Return to the grouped command:

```sh
find ./samples -type f \( -name '*.txt' -o -name '*.md' \) -print
```

Read it as:

```text
regular file
AND (name ends in .txt OR name ends in .md)
AND print
```

For a directory, `-type f` fails and the remaining AND expressions are skipped. For a regular file, one of the two names must match before evaluation reaches `-print`. The result contains exactly five regular files:

```text
./samples/archive.md/inside.txt
./samples/folder.txt/inside.md
./samples/notes.md
./samples/report.txt
./samples/todo.txt
```

Writing out the implicit AND operators produces the same checked set:

```sh
find ./samples -type f -a \( -name '*.txt' -o -name '*.md' \) -a -print
```

The complete output is the same five-path set shown above. Explicit `-a` makes the existing AND operations visible; inserting it alone cannot repair an ungrouped OR. The parentheses are what keep the filename alternatives together.

For this grouped selection, omitting `-print` also produces those same five paths:

```sh
find ./samples -type f \( -name '*.txt' -o -name '*.md' \)
```

This fifth variant also returns exactly the five paths above. With no explicit action, default printing applies to the correctly grouped whole expression. With explicit `-print`, the grouped selection must succeed before that action runs. Either version works here. An explicit action after the selection makes its scope visible when you edit the command later.

## Excluding both suffixes needs AND between the negatives

Suppose you want regular files with neither suffix. Negating each name test but keeping OR looks plausible:

```sh
find ./samples -type f \( ! -name '*.txt' -o ! -name '*.md' \) -print
```

It prints all six regular files:

```text
./samples/archive.md/inside.txt
./samples/folder.txt/inside.md
./samples/notes.md
./samples/photo.jpg
./samples/report.txt
./samples/todo.txt
```

For `report.txt`, “not `.txt`” is false, but “not `.md`” is true. For `notes.md`, “not `.txt`” is already true, so OR skips the second test. For `photo.jpg`, either negative test would be true. Every file in this fixture passes at least one side of the OR.

Negate the entire choice instead:

```sh
find ./samples -type f ! \( -name '*.txt' -o -name '*.md' \) -print
```

Its complete output is:

```text
./samples/photo.jpg
```

You can also require both negative name tests. Adjacent tests imply AND:

```sh
find ./samples -type f ! -name '*.txt' ! -name '*.md' -print
```

This eighth checked variant also prints only `./samples/photo.jpg`. It applies De Morgan's rule: **not (A or B)** is **(not A) and (not B)**. The `!` before a single name test negates that test; the `!` before parentheses negates the entire enclosed expression. Keep `-type f` outside the negation, because being a regular file is still a requirement.

## Six problems before you check the answers

Use the unchanged fixture. Predict the paths or explain the branch on paper before opening a terminal.

1. In the ungrouped command without `-print`, why does `archive.md` appear while `folder.txt` doesn't? Does either directory name stop `find` from reaching its child?
2. In the ungrouped command with `-print`, compare `archive.md/inside.txt` with `folder.txt/inside.md`. Which prints, and which branch makes the decision for each?
3. Start with the ungrouped command that ends in explicit `-print`. Someone inserts `-a` between `-type f` and the first `-name`, leaving everything else unchanged. Does this repair the directory leak or the missing `.txt` output? Explain the missing structural change.
4. You remove `-print` from the correctly grouped command. Give the complete result set. Why is this different from appending `-print` to the broken command?
5. You want neither `.txt` nor `.md`, but `photo.jpg` and all five text/Markdown files appear. Which operator between the two negated name tests is wrong? Explain the failure using `notes.md`.
6. Consider the proposed selection NOT (regular file AND (txt OR md)). Would the two suffix-looking directories pass it? Where should the regular-file requirement stay if you want only regular files with neither suffix?

### Answers

1. **The `.md` alternative has no type guard.** `archive.md` satisfies the right branch, while `folder.txt` fails the regular-file test on the left and the `.md` test on the right. Both children are still visited: a failed name or type test here only rejects that entry from the result.
2. **Only `folder.txt/inside.md` prints.** `archive.md/inside.txt` makes the left branch true, which skips the right branch and its action. `folder.txt/inside.md` fails the left branch, then matches `.md` and reaches `-print`. The parent's suffix doesn't change the child's name test.
3. **Neither is repaired.** AND was already implicit there. The expression still separates into `(regular file AND txt)` OR `(md AND print)`. The `.md` directory still reaches print, and the `.txt` files still skip it. Group the two name tests between `\(` and `\)`, with `-type f` before that group and `-print` after it, as in the opening command.
4. **The five regular `.txt` and `.md` files:** `./samples/archive.md/inside.txt`, `./samples/folder.txt/inside.md`, `./samples/notes.md`, `./samples/report.txt`, and `./samples/todo.txt`. With no explicit action, default printing uses the whole grouped selection. In the broken explicit-print command, the action belongs only to the `.md` branch.
5. **Replace OR with AND.** `notes.md` satisfies “not `.txt`”, so an OR succeeds before needing “not `.md`”. Require both negative tests, or negate the positive OR group. Both repaired commands above print only `./samples/photo.jpg`.
6. **Yes, both directories would pass that negation.** Each fails “regular file”, making the inner AND false and its negation true. Keep `-type f` outside the negation: require a regular file AND NOT (txt OR md). That preserves the file requirement while excluding both suffixes.

## Practise the decision you missed

If a result surprised you, turn that exact mistake into a recall prompt. For example: “A `.txt` file satisfies the left side of `-o`. Will a `-print` on the right run?” Cover the answer and work through the branch: the OR is already true, so that right branch is skipped. Then write the grouped repair from memory and compare it with the command above.

For broader terminal practice, the [Linux Command Line flashcards in English](/catalog/packages/linux-command-line-flashcards/) contain 100 cards, including quoted `-name` patterns and `-type f`. It's a general Linux foundations deck; it isn't a dedicated set of precedence problems. All six problems and their answers are available above. To practise retaining a missed rule, answer a short prompt before checking it, then revisit it in spaced reviews. You can make your own cards for the branch decisions this lab exposed.

Once the filename selection is right, [find -mtime](/blog/find-mtime/) adds age conditions. Before passing the selected paths to another program, [find -exec vs xargs](/blog/find-exec-vs-xargs/) explains the handoff and filename boundaries.

*Disclosure: Nibomo publishes this site and offers the linked deck in its own catalog. AI assisted substantially with research, drafting, editing, fixture execution, and exercise construction; the illustration is AI-generated. The runtime evidence covers eight list-only command variants on native macOS on October 29, 2026. GNU documentation was consulted; no GNU/Linux runtime test, human editorial review, or learning-outcome study is claimed.*
