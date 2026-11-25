---
title: "GNU find -quit: Stop After the First Match"
description: "Print one matching path with GNU find -print -quit. Use a small shell lab to tell a match, no match, and a search error apart in a shell script."
date: "2026-11-25"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/714927a9574c18c32623d843e0e596af0996341f6807f292f39cc353eaa6e809.webp"
keywords:
  - "find -quit"
  - "stop find after first match"
  - "find -print -quit"
  - "find exit status no match"
---

Suppose a job can start as soon as it finds a `.ready` file. This command searches `incoming` first and moves on to `archive` if it still needs a match. Put `-print -quit` after your tests to print the first matching path and stop the whole search.

```sh
find ./incoming ./archive -type f -name '*.ready' -print -quit
```

Check that `find --version` identifies GNU Findutils. On macOS, Homebrew installs GNU `find` as `gfind`. Use `gfind` for the version check and wherever the examples and script call `find`. [Homebrew findutils formula](https://formulae.brew.sh/formula/findutils)

![A volunteer selects a yellow raincoat from the nearer of two racks, with a matching coat hanging on the farther rack](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/714927a9574c18c32623d843e0e596af0996341f6807f292f39cc353eaa6e809.webp)

## Choose which directory goes first

Paste this setup from a directory where you can create a new `find-quit-lab` folder. If a folder by that name already exists, setup stops at the first `mkdir`.

```sh
mkdir ./find-quit-lab &&
mkdir ./find-quit-lab/incoming ./find-quit-lab/archive ./find-quit-lab/empty &&
touch './find-quit-lab/incoming/scan 01.ready' './find-quit-lab/archive/scan 02.ready' &&
cd ./find-quit-lab
```

Run the opening command from inside the lab. It prints `./incoming/scan 01.ready`. Swap the two starting points and it prints `./archive/scan 02.ready`.

```sh
find ./archive ./incoming -type f -name '*.ready' -print -quit
```

`incoming` and `archive` each have one match, so the order of the starting points decides which file you get. If a folder contains several matches, `-quit` stops at the first one `find` visits. To pick the newest file or the first name alphabetically, collect the matches and sort them by that rule.

The examples were checked with GNU Findutils 4.11.0 and `/bin/sh` on macOS 26.6.1 (arm64).

## Put `-print` before `-quit`

Adjacent tests and actions are joined by an implicit AND. For each entry, `-type f` checks that it's a regular file and `-name '*.ready'` checks its name. Once both tests pass, `-print` writes the path and `-quit` ends the search.

Try these two commands in the same directory.

```sh
find ./incoming ./archive -type f -name '*.ready' -quit -print
find ./incoming ./archive -type f -name '*.ready' -quit
```

Both find the file in `incoming` and exit with no output. In the first command, `-quit` runs before the explicit `-print`. In the second, GNU `find` still adds its default print action after the expression. `-quit` ends the search before that action runs, too. [GNU find manual](https://man7.org/linux/man-pages/man1/find.1.html#EXPRESSION)

If you search for either of two names with `-o`, put the name tests inside escaped parentheses so either match reaches `-print -quit`. [Group GNU find expressions](/blog/find-operator-precedence/)

## Check the status even when a path prints

A match and a clean search are two separate facts. An empty directory gives no matches and status `0`. A search error gives a nonzero status, even if a path reached `-print`. [GNU find exit status](https://man7.org/linux/man-pages/man1/find.1.html#EXIT_STATUS)

Try putting a missing directory before the directory with the match. Save the status as soon as `find` exits.

```sh
status=0
find ./missing ./incoming -type f -name '*.ready' -print -quit || status=$?
printf 'find status %s\n' "$status"
```

GNU `find` reports `find: './missing': No such file or directory` on standard error, prints `./incoming/scan 01.ready` on standard output, and exits with status `1`. Keep the tests and actions as written and swap the starting points to see the difference.

| Starting points | Printed path | Search diagnostic | Exit status in the lab |
| --- | --- | --- | --- |
| `./empty` | None | None | `0` |
| `./missing` | None | Missing directory | `1` |
| `./incoming ./missing` | `./incoming/scan 01.ready` | None | `0` |
| `./missing ./incoming` | `./incoming/scan 01.ready` | Missing directory | `1` |

With `./incoming` first, `-quit` stops before `find` reaches `./missing`. Leave `-quit` out when you need to check every starting point.

## Check for a match in a shell script

For a yes-or-no check, use `-printf x -quit` to emit a fixed marker. The script can check that marker without having to parse a filename. Check the exit status first because even a search that emits `x` can fail.

Save this as `check-ready.sh` inside the lab.

```sh
if marker=$(find "$@" -type f -name '*.ready' -printf x -quit); then
    if [ "$marker" = x ]; then
        printf 'Match found\n'
    else
        printf 'No match\n'
    fi
else
    status=$?
    printf 'Ready-file search failed (find status %s)\n' "$status" >&2
    exit "$status"
fi
```

Run it with the directories you want to search. Pass absolute paths or prefix relative paths with `./` so `find` treats names beginning with a hyphen as paths.

```sh
sh ./check-ready.sh ./incoming
sh ./check-ready.sh ./empty
sh ./check-ready.sh ./missing ./incoming
```

The first call prints `Match found` and the second prints `No match`. Both exit with status `0`. In the third call, the script captures `x` from the later match, then takes the error branch because `find` exited with status `1`. The missing-directory diagnostic is still visible, and the script prints `Ready-file search failed (find status 1)` to standard error before exiting with that same status.

## Try one from memory

Put `./empty ./archive ./incoming` before `-type f -name '*.ready' -print -quit`. Which path prints, and does `find` reach `./incoming`?

**Answer.** `./archive/scan 02.ready` prints. `find` gets through `./empty`, then stops at the match in `./archive`.

For more practice, Nibomo's 40-card English deck covers the rules that get a file to an output action, including grouped tests, implicit AND, printing, and pruning. Predict each command's result before flipping the card, then revisit the ones you missed in spaced review. [GNU find expressions, output, and pruning flashcards in English](/catalog/packages/gnu-find-expression-prune-flashcards/)

*AI assisted with drafting and editing this article. The cover illustration is AI-generated.*
