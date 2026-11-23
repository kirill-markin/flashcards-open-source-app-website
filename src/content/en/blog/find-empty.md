---
title: "Find -empty: List Empty Files and Directories"
description: "Use find -empty to list empty directories and zero-byte files. Check nested folders, hidden files, and symlinks in a read-only lab."
date: "2026-11-23"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/f04b4917fb8ee7cccb87176ffda64dba52577afa125bce761c5d5621e13e3dbf.webp"
keywords:
  - "find -empty"
  - "find empty directories"
  - "find zero-byte files"
  - "find -empty vs -size 0c"
---

A directory with one empty subdirectory still has one entry. `find -empty` matches the inner directory and skips its parent. If you're checking a tree before cleanup, that distinction matters. A directory can have entries even when the whole tree contains zero regular files.

Replace `./find-empty-lab` with the directory you want to inspect. The first command lists directories with zero entries. The second lists regular files with a length of zero bytes. Both searches only print matching paths.

```sh
find -P ./find-empty-lab -type d -empty -print
find -P ./find-empty-lab -type f -empty -print
```

Drop `-type` to list both kinds of matches in one search. `-P` tells `find` to examine symbolic links as links. [GNU Findutils size tests](https://www.gnu.org/software/findutils/manual/html_node/Size.html)

![Three wooden trays hold nothing, an empty cardboard box, and a scrap of paper, respectively](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/f04b4917fb8ee7cccb87176ffda64dba52577afa125bce761c5d5621e13e3dbf.webp)

## Make a small tree to check

Run this setup where you can create a fresh `find-empty-lab` directory. If the first `mkdir` fails, for example because the name already exists, the rest of the setup is skipped. Run the searches from the same working directory after setup succeeds.

```sh
mkdir ./find-empty-lab &&
mkdir -p ./find-empty-lab/queue/leaf ./find-empty-lab/staged ./find-empty-lab/unused &&
touch ./find-empty-lab/blank.log ./find-empty-lab/staged/.keep &&
printf '\n' > ./find-empty-lab/line.log &&
ln -s blank.log ./find-empty-lab/blank-link &&
ln -s queue/leaf ./find-empty-lab/leaf-link
```

```text
find-empty-lab/
├── blank-link -> blank.log
├── blank.log
├── leaf-link -> queue/leaf
├── line.log
├── queue/
│   └── leaf/
├── staged/
│   └── .keep
└── unused/
```

The two searches above print `queue/leaf` and `unused` for directories, and `blank.log` and `staged/.keep` for regular files. This search prints all four paths under `./find-empty-lab`. The order can vary.

```sh
find -P ./find-empty-lab -empty -print
```

The hidden `.keep` file counts as an entry in `staged` and matches the zero-byte file search. `line.log` looks blank when you open it. The newline takes up one byte, so it falls outside the zero-byte search.

## Compare `-empty` with `-size 0c`

For regular files, `-empty` and `-size 0c` return the same matches. The `c` sets the unit to bytes, and `0` asks for exactly zero of them. `-size` reads a size value from file metadata. To check whether a directory contains any entries, use `-type d -empty`.

```sh
find -P ./find-empty-lab -type f -size 0c -print
```

This prints `./find-empty-lab/blank.log` and `./find-empty-lab/staged/.keep`. For positive size thresholds, see the [worked examples of byte counts and rounded units](/blog/find-size/).

## Predict what a blank result means

Look at `queue` and `staged` in the tree. For each directory, answer these three questions before running the checks.

1. Would the empty-directory search print the directory itself?
2. Are there any regular files anywhere below it?
3. Are there any regular files with at least one byte below it?

The first search at the top answers question 1. Use these commands to check questions 2 and 3. Read `-type f ! -empty` as “regular file with at least one byte.”

```sh
find -P ./find-empty-lab/queue -type f -print
find -P ./find-empty-lab/staged -type f -print
find -P ./find-empty-lab/staged -type f ! -empty -print
```

| Directory | Does `-type d -empty` print the directory itself? | Regular files below it | Regular files with at least one byte below it |
| --- | --- | --- | --- |
| `queue` | No. It contains `leaf`. | None | None |
| `staged` | No. It contains `.keep`. | `staged/.keep` | None. `.keep` is zero bytes. |

The `queue` check prints nothing because the subtree contains zero regular files. The last `staged` check also prints nothing because its only regular file is zero bytes. Run the same `! -empty` test on the whole lab and `line.log` shows up.

```sh
find -P ./find-empty-lab -type f ! -empty -print
```

```text
./find-empty-lab/line.log
```

Blank output with exit status `0` means the search finished successfully and found zero matches for that expression. Read any diagnostics and check `$?` immediately after running `find`. A missing starting path or a permission error can leave an empty or partial list and a nonzero status. [GNU `find` exit status](https://man7.org/linux/man-pages/man1/find.1.html#EXIT_STATUS)

## The starting directory can match

The starting directory is [at depth 0](https://www.gnu.org/software/findutils/manual/html_node/Directories.html). Since `unused` is empty, the first command prints `./find-empty-lab/unused`. The second prints nothing because `-mindepth 1` starts testing one level below `unused`, where there are zero entries.

```sh
find -P ./find-empty-lab/unused -type d -empty -print
find -P ./find-empty-lab/unused -mindepth 1 -type d -empty -print
```

For examples with nested paths and multiple starting points, see [how `find` counts depth](/blog/find-maxdepth-mindepth/).

## Following symlinks adds matching paths

With the default `-P`, `blank-link` and `leaf-link` count as entries of type `l`, so they fall outside the `-type f` and `-type d` searches. With `-L`, `find` uses each alias's reachable target for the type and emptiness tests. It can also descend into linked directories. Put `-P` or `-L` before the starting path. [GNU `find` traversal options](https://man7.org/linux/man-pages/man1/find.1.html#OPTIONS)

```sh
find -L ./find-empty-lab -type f -empty -print
find -L ./find-empty-lab -type d -empty -print
```

The first command prints `blank-link` alongside `blank.log` and `staged/.keep`. The second prints `leaf-link` alongside `queue/leaf` and `unused`. `-print` uses the path that `find` reached, so a target can appear under its own path and under an alias. [See how `-P`, `-H`, and `-L` handle symlinks](/blog/find-follow-symlinks/).

## Recall the depth-zero case

Tomorrow, try answering from memory. What does `find -P ./find-empty-lab/unused -type d -empty -print` print, and what changes when you add `-mindepth 1`? The first command prints the starting directory. The second prints nothing because testing starts at depth 1. Come back to the question in a few days and explain why before checking. Retrieving the answer after a gap helps you remember it longer. For more drills on starting points, minimum and maximum depth, and exact levels, try the [28-card GNU `find` depth deck in English](/catalog/packages/gnu-find-depth-flashcards/).

*This article was drafted and edited with AI assistance. The cover was AI-generated. All 12 searches returned the same sets of paths on native macOS 26.6.1 arm64 and GNU findutils 4.10.0 in a Debian 13 arm64 container. Each run exited successfully with no diagnostics.*
