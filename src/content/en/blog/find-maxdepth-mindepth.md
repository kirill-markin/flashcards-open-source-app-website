---
title: "Find -maxdepth and -mindepth: Count from Each Starting Point"
description: "Practise find depth limits with a checked directory tree, exact-level searches, multiple starting points, hidden files, and a minimum-depth pruning trap."
date: "2026-11-02"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/d5820bdadaee34496d118827e9973912d23d4f78817066d17ee759e03271641b.webp"
keywords:
  - "find maxdepth mindepth"
  - "find maxdepth 1"
  - "find mindepth 1"
  - "find exact depth"
  - "find starting point depth 0"
---

`find ./project -maxdepth 1 -print` includes `./project` itself. The starting point is depth **0**; its immediate children are depth **1**. To list only those children, use both limits:

```sh
find ./project -mindepth 1 -maxdepth 1 -print
```

The command lists files and directories alike, including hidden entries. Depth is always relative to the starting point: the same file can be at depth 2 in one search and depth 1 in another. The lab below lets you check those boundaries and catch a less obvious mistake: a minimum depth can stop a pruning action from running.

![A gardener checks matching wooden depth gauges resting on soil in two pots at different heights](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/d5820bdadaee34496d118827e9973912d23d4f78817066d17ee759e03271641b.webp)

## Start counting at the path you give find

The [GNU find manual](https://man7.org/linux/man-pages/man1/find.1.html) describes two different controls:

| Option | What it controls |
| --- | --- |
| `-maxdepth N` | Descend no farther than level N below each starting point. Entries at level N can still be tested and printed. |
| `-mindepth N` | Skip tests and actions at levels smaller than N. Continue through shallower directories to reach eligible entries. |

Use a non-negative whole number for N. Both boundaries include level N, so `-mindepth 2 -maxdepth 2` selects exactly level 2. A minimum on its own sets no upper limit: `-mindepth 1` skips the starting point but allows every deeper level.

Put these options after all starting paths and before tests such as `-type f`. They apply globally to the search; placing one later in the expression doesn't limit its effect to the tests that follow it. Both the GNU manual and the native macOS manual describe this behavior.

## Build a tree with an empty branch and a hidden file

`-maxdepth` and `-mindepth` are extensions rather than POSIX requirements. They are available in GNU find and in the native macOS find used here; check your system's `man find` before running the examples.

Run setup where you can create a new `find-depth-lab` directory. It refuses an existing directory with that name, so it won't merge demonstration files into another tree.

```sh
python3 - <<'PY'
from pathlib import Path

root = Path("find-depth-lab")
root.mkdir()
project = root / "project"
project.mkdir()
files = [
    "readme.txt",
    ".hidden.txt",
    "build/output.txt",
    "src/main.py",
    "src/lib/helper.py",
    "packages/api/config.json",
    "packages/api/src/app.py",
]
for name in files:
    path = project / name
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text("demonstration only\n")
(project / "empty").mkdir()
PY
```

After setup succeeds:

```sh
cd find-depth-lab
```

The complete `project` tree contains **seven regular files and eight directories**, counting `project` itself. Trailing slashes mark directories:

```text
project/
├── .hidden.txt
├── readme.txt
├── build/
│   └── output.txt
├── empty/
├── src/
│   ├── main.py
│   └── lib/
│       └── helper.py
└── packages/
    └── api/
        ├── config.json
        └── src/
            └── app.py
```

Here is every entry grouped by depth when the starting point is `./project`. Names in this table are relative to that starting point:

| Depth | Entries |
| --- | --- |
| 0 | `./project/` itself |
| 1 | `.hidden.txt`, `readme.txt`, `build/`, `empty/`, `src/`, `packages/` |
| 2 | `build/output.txt`, `src/main.py`, `src/lib/`, `packages/api/` |
| 3 | `src/lib/helper.py`, `packages/api/config.json`, `packages/api/src/` |
| 4 | `packages/api/src/app.py` |

All fifteen `find` variants below were executed on this demonstration tree on November 2, 2026, using native macOS 26.6.1 arm64 `/usr/bin/find`. They were checked both through direct process arguments and through `/bin/sh`; setup used CPython 3.14.7. Every variant exited `0` with empty stderr. These are list-only commands and leave the tree unchanged.

Output blocks show complete result sets, sorted for comparison, except for the final example about traversal order. Your sibling entries may appear in a different order. The GNU behavior described here is documented in its manual; the recorded runs used native macOS find, not GNU find or GNU/Linux.

## Compare the starting point, its children, and regular files

With a maximum of zero, only the starting point is eligible:

```sh
find ./project -maxdepth 0 -print
```

```text
./project
```

Raise the maximum to one:

```sh
find ./project -maxdepth 1 -print
```

```text
./project
./project/.hidden.txt
./project/build
./project/empty
./project/packages
./project/readme.txt
./project/src
```

The starting point still appears because depth 0 is within the maximum. `empty` qualifies even though it has no children. `packages` qualifies too, but its child `api` is at depth 2 and stays outside the search.

Now exclude depth 0 with the opening command:

```sh
find ./project -mindepth 1 -maxdepth 1 -print
```

```text
./project/.hidden.txt
./project/build
./project/empty
./project/packages
./project/readme.txt
./project/src
```

To keep only immediate regular files, use the type test:

```sh
find ./project -maxdepth 1 -type f -print
```

```text
./project/.hidden.txt
./project/readme.txt
```

This version doesn't need `-mindepth 1` to exclude `./project`: that starting point is a directory, so it fails `-type f`. Hidden filenames don't require an extra option here. `find` reaches `.hidden.txt` as an ordinary child of the supplied directory; there's no shell `*` in this command to leave it out.

## Search exactly level two

A maximum of two includes regular files from both levels 1 and 2:

```sh
find ./project -maxdepth 2 -type f -print
```

```text
./project/.hidden.txt
./project/build/output.txt
./project/readme.txt
./project/src/main.py
```

For an exact-depth search, set the minimum and maximum to the same number:

```sh
find ./project -mindepth 2 -maxdepth 2 -print
```

```text
./project/build/output.txt
./project/packages/api
./project/src/lib
./project/src/main.py
```

The result contains two files and two directories. Depth limits don't select an entry type. Add `-type f` if you also want to exclude directories.

Remove the maximum and all deeper entries become eligible too:

```sh
find ./project -mindepth 2 -print
```

```text
./project/build/output.txt
./project/packages/api
./project/packages/api/config.json
./project/packages/api/src
./project/packages/api/src/app.py
./project/src/lib
./project/src/lib/helper.py
./project/src/main.py
```

To reach `helper.py`, `find` passes through `src` at depth 1. `-mindepth 2` suppresses tests and actions on `src` while allowing traversal through it. With a maximum of 2, traversal stops at `src/lib`: that directory is eligible, but its child `helper.py` is too deep.

## Each starting point gets its own zero

Start directly at `src` and `main.py` moves from depth 2 to depth 1:

```sh
find ./project/src -maxdepth 1 -type f -print
```

```text
./project/src/main.py
```

`helper.py` is now at depth 2 and remains outside this maximum. The printed path still contains `project/src`, but those components don't add to the depth. Start counting at the path supplied to `find`.

You can supply two starting points before the options:

```sh
find ./project/src ./project/packages/api -maxdepth 1 -type f -print
```

```text
./project/packages/api/config.json
./project/src/main.py
```

Both starting directories are depth 0 for their own searches. `config.json` qualifies as an immediate child of `api`, although it was depth 3 when the starting point was `./project`. `api/src/app.py` is two levels below `api`, so it doesn't qualify.

A starting point can also be a regular file:

```sh
find ./project/readme.txt -maxdepth 0 -type f -print
```

```text
./project/readme.txt
```

The file is depth 0 and passes the type test. Give that same file a minimum of one:

```sh
find ./project/readme.txt -mindepth 1 -print
```

**No output.** Its only entry is below the minimum, and a regular file has no descendants to search. That empty result was a successful run, with status `0` and no error output.

## A minimum depth can disable a shallow prune

Suppose you want regular files from depth 2 onward, while skipping `build`. This command looks plausible:

```sh
find ./project -mindepth 2 -path './project/build' -prune -o -type f -print
```

The expression before `-o` is the pruning branch: match the path, then prevent descent. The branch after `-o` prints regular files. Adjacent tests imply AND, so a failed path test skips `-prune` and lets the file branch run.

But the global minimum takes effect before either branch can run on a shallow entry. The checked result includes the build output:

```text
./project/build/output.txt
./project/packages/api/config.json
./project/packages/api/src/app.py
./project/src/lib/helper.py
./project/src/main.py
```

`./project/build` is at depth 1. The minimum suppresses **all tests and actions** on that entry, including `-path` and `-prune`. Traversal continues into the directory. At depth 2, `build/output.txt` doesn't match the directory path, so evaluation reaches `-type f -print` and prints it.

Removing the minimum lets pruning run at the directory:

```sh
find ./project -path './project/build' -prune -o -type f -print
```

```text
./project/.hidden.txt
./project/packages/api/config.json
./project/packages/api/src/app.py
./project/readme.txt
./project/src/lib/helper.py
./project/src/main.py
```

Now pruning runs on `build` and skips its contents. The depth-1 files return as well, so removing the minimum hasn't met the original request to select only deeper files. Moving `-mindepth 2` to the other side of `-o` won't fix that: it is global wherever you place it.

If you only need to omit the build files from the result, keep the minimum and filter their paths:

```sh
find ./project -mindepth 2 -type f ! -path './project/build/*' -print
```

```text
./project/packages/api/config.json
./project/packages/api/src/app.py
./project/src/lib/helper.py
./project/src/main.py
```

This checked command meets the output requirement: regular files at depth 2 or deeper, with build descendants excluded. It still traverses `build`; the negative path test filters results rather than pruning a directory. That distinction matters if the requirement is to avoid entering the directory at all.

When a shallow directory must be pruned, its pruning branch needs to remain eligible for evaluation. Work through the [find -prune guide](/blog/find-prune-exclude-directories/) and [expression precedence](/blog/find-operator-precedence/) before combining further selection conditions.

## -depth changes order, not the boundary

Despite its name, `-depth` doesn't mean “one level deep.” It processes a directory's contents before the directory itself, as described in the [GNU find manual](https://man7.org/linux/man-pages/man1/find.1.html).

```sh
find ./project -maxdepth 1 -depth -print
```

Here is the **recorded order**, without sorting:

```text
./project/empty
./project/packages
./project/readme.txt
./project/.hidden.txt
./project/build
./project/src
./project
```

The result still contains the starting point and its six immediate children. `./project` comes after its children; grandchildren remain outside the maximum. Don't rely on the order among siblings when writing a script.

## Seven predictions to make before running find

Use the unchanged tree, with `./project` as the starting point unless a question specifies another. Write the paths or explanation before reading the answers.

1. Does `-maxdepth 0 -print` print nothing, the starting point, or its immediate children?
2. Starting at `./project`, which regular files match `-maxdepth 1 -type f`? Does the hidden file need a special flag?
3. Which four entries match `-mindepth 2 -maxdepth 2 -print`, and why are two of them directories?
4. Does `-mindepth 2 -print` include `src/lib/helper.py`? Explain how it gets through the shallower `src` directory.
5. With starting points `./project/src` and `./project/packages/api`, which files match `-maxdepth 1 -type f`? Why does `config.json` qualify now?
6. In the minimum-depth pruning command, why is `build/output.txt` printed even though `-path './project/build' -prune` is present?
7. What changes when `-depth` is added to the `-maxdepth 1 -print` command: selected paths, parent/child order, or both?

### Answers

1. **The starting point: `./project`.** Zero is a valid level. Nothing below it is reached by this search.
2. **`./project/.hidden.txt` and `./project/readme.txt`.** Both are regular files at depth 1. This command traverses the supplied directory directly, so the hidden name needs no special flag.
3. **`./project/build/output.txt`, `./project/packages/api`, `./project/src/lib`, and `./project/src/main.py`.** Equal bounds choose exactly level 2. There is no type test to exclude the two directories, `api` and `lib`.
4. **Yes.** `src` is traversed even though its tests and actions are suppressed at depth 1. `src/lib` is at depth 2, and `helper.py` is at depth 3; both meet the minimum. No maximum stops descent.
5. **`./project/src/main.py` and `./project/packages/api/config.json`.** Each is one level below its own starting point. The depth of `config.json` relative to the former starting point, `./project`, doesn't control this command.
6. **The pruning action never runs on `build`.** That directory is at depth 1, below the minimum of 2. Traversal continues into it, and its regular file passes the file branch at depth 2. Status `0` doesn't establish that an intended exclusion worked.
7. **Parent/child order changes; the selected set stays the same.** The checked run still prints all seven eligible entries. `-depth` puts the starting directory after its children; `-maxdepth 1` still keeps grandchildren outside the search.

Turn a missed decision into a recall prompt, such as “Where is zero when the starting point changes?” Come back to it later and answer before looking at the tree. Regular recall and spaced review help long-term retention: you practise reconstructing the rule after a gap instead of only recognizing a familiar command.

For broader practice, Nibomo's [Linux Command Line Flashcards — 100 cards in English](/catalog/packages/linux-command-line-flashcards/) cover general terminal foundations, including quoted `-name` patterns and `-type f`. The deck isn't a dedicated depth-limit worksheet; all seven answers are above. If your next selection also depends on file age, the [find -mtime guide](/blog/find-mtime/) handles that separate boundary.

*Disclosure: Nibomo publishes this site and offers the linked deck in its own catalog. AI assisted substantially with research, drafting, editing, demonstration execution, and exercise construction; the illustration is AI-generated. Runtime evidence covers fifteen native macOS command variants on November 2, 2026. GNU documentation was consulted; no GNU/Linux runtime execution, human editorial review, speed benchmark, or learning-outcome study is claimed. The lab didn't test symlinks, permission failures, concurrent changes, or network filesystems.*
