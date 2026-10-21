---
title: "Make find Follow Symlinks: Choose -P, -H, or -L"
description: "Learn when find follows symlinks with -P, -H, and -L. Run nine checked examples covering linked starting paths, nested links, and dangling links."
date: "2026-10-22"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/e5136ce13c07d88a3296b1fe55aa9455ccff7888f30928756430687677785c8b.webp"
keywords:
  - "find follow symlinks"
  - "find -L"
  - "find -H vs -L"
  - "find symbolic links"
  - "find broken symlinks"
  - "find -type l"
---

> Practice the foundations with the [100-card Linux command-line deck in English](/catalog/packages/linux-command-line-flashcards/). It covers commands including `find` and `ln -s`; this article supplies the specific symlink exercises.

`find -L ./project -type f -print` can return three paths even when they reach only two files. One of those files can live outside `project`. Following symbolic links changes both where `find` walks and what its type tests examine.

To make `find` follow symlinks throughout a search, put **`-L` before the starting path**. Use `-H` to follow only links supplied as starting points, or `-P` to inspect links themselves. The small tree below makes those choices visible with searches that only print paths.

![A woman traces a burgundy wool strand from a mending basket across a doorway to a ball in the next room](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/e5136ce13c07d88a3296b1fe55aa9455ccff7888f30928756430687677785c8b.webp)

## Choose which links to follow

A symbolic link stores a path to another filesystem entry. Following it, also called *dereferencing* it, lets `find` examine the target. If that target is a directory, following the link also lets the search enter that directory.

| Mode | A symlink supplied as the starting path | Symlinks encountered inside the search |
| --- | --- | --- |
| `-P` | Inspect the link itself | Inspect the links themselves |
| `-H` | Follow the target when possible | Inspect the links themselves |
| `-L` | Follow the target when possible | Follow the targets when possible |

`-P` is the default on GNU find and the native macOS find used here. The [GNU traversal options](https://www.gnu.org/software/findutils/manual/html_node/find_html/Filesystem-Traversal-Options.html) document these modes. [POSIX find](https://pubs.opengroup.org/onlinepubs/9799919799/utilities/find.html) specifies `-H`, `-L`, and the default behavior when neither is supplied.

Keep two questions separate: **which entries will the search reach, and whose type will it test?** A link to a regular file doesn't add a directory to traverse, but following it still changes whether `-type f` matches.

In the examples, `-type f` selects regular files, `-type l` selects symbolic links, and `-print` prints each matching path. The mode determines whether the type test examines the link or its target. A type test filters the results; it doesn't tell `find` which links to follow.

## Build a tree with an outside target

Run this from a location where you can create a new `find-links-lab` directory. Python 3 is required for setup. It fails if that directory already exists; choose a fresh location rather than reusing a project.

```sh
python3 - <<'PY'
from pathlib import Path

root = Path("find-links-lab")
root.mkdir()
(root / "project").mkdir()
(root / "shared").mkdir()
(root / "project/local.txt").write_text("local demonstration\n")
(root / "shared/reference.txt").write_text("shared demonstration\n")
(root / "project/file-link").symlink_to("../shared/reference.txt")
(root / "project/dir-link").symlink_to("../shared", target_is_directory=True)
(root / "project/missing-link").symlink_to("../missing.txt")
(root / "entry").symlink_to("project", target_is_directory=True)
PY
```

After setup succeeds, run:

```sh
cd find-links-lab
```

The complete tree is:

```text
find-links-lab/
├── project/
│   ├── local.txt
│   ├── file-link -> ../shared/reference.txt
│   ├── dir-link -> ../shared
│   └── missing-link -> ../missing.txt
├── shared/
│   └── reference.txt
└── entry -> project
```

There is no `missing.txt`. Its link is *dangling*: the stored path doesn't resolve to an existing target. Relative link targets are resolved from the directory containing the link. That's why `../shared` in `project/dir-link` reaches the sibling directory.

The nine searches below were executed with native `/usr/bin/find` on macOS 26.6.1 arm64 on October 22, 2026, local time; setup used CPython 3.14.7. Each search exited with status 0 and no diagnostic output. GNU behavior was checked against documentation; this fixture wasn't executed on GNU/Linux.

Keep the starting paths exactly as shown, without a trailing slash. Displayed result sets are sorted for readability; the order in your terminal may differ.

## Start at the real directory

Both of these commands print only the local regular file:

```sh
find -P ./project -type f -print
find -H ./project -type f -print
```

Complete output **for each command**:

```text
./project/local.txt
```

`./project` is an actual directory, so `-H` has no starting-point link to follow. All three links are encountered inside it and remain links for the type test. None matches `-type f`.

Now follow the inner links too:

```sh
find -L ./project -type f -print
```

Complete output:

```text
./project/dir-link/reference.txt
./project/file-link
./project/local.txt
```

`file-link` matches because its target is a regular file. `dir-link` leads into `shared`, where `reference.txt` matches. The missing target supplies no regular file to match.

Notice the spelling: output still says `./project/dir-link/reference.txt`, not `./shared/reference.txt`. `-print` reports the path encountered during the walk. It doesn't rewrite the result as a resolved target path.

Those three lines reach **two distinct regular files** in this fixture: `project/local.txt` and `shared/reference.txt`. Both `file-link` and `dir-link/reference.txt` reach the shared file. Here, counting output lines counts matching paths; it doesn't count unique targets.

This also shows why the starting path isn't a containment boundary under `-L`. The `shared` directory and its file live outside the physical `project` directory. An output prefix of `./project/` doesn't establish that the target is stored there.

## Make the starting path a link

To see when `-H` makes a difference, start at `./entry`, which points to `project`:

```sh
find -P ./entry -type f -print
```

This prints **nothing**. `find` examines the starting link itself, which fails `-type f`, and doesn't enter its directory target. An empty result is expected here; it isn't evidence of a failed command.

```sh
find -H ./entry -type f -print
```

Complete output:

```text
./entry/local.txt
```

`-H` follows the explicitly supplied `entry` link and enters `project`. It doesn't follow the three inner links. The printed path retains `entry` because that's how the search reached the local file.

```sh
find -L ./entry -type f -print
```

Complete output:

```text
./entry/dir-link/reference.txt
./entry/file-link
./entry/local.txt
```

Now both the starting link and the inner links are followed. Changing the entry path changes the printed prefix, while these results reach the same two regular files as the earlier `-L ./project` search.

## Find symbolic links, including the dangling one

To list the three link entries inside the physical directory:

```sh
find -P ./project -type l -print
```

Complete output:

```text
./project/dir-link
./project/file-link
./project/missing-link
```

With `-L`, the type test usually sees the target instead. Run:

```sh
find -L ./project -type l -print
```

Complete output:

```text
./project/missing-link
```

The two working links are tested as a directory and a regular file. The dangling link has no target to inspect, so its own link type is used. This command finds the broken symlink in this fixture; the [GNU type-test reference](https://www.gnu.org/software/findutils/manual/html_node/find_html/Type.html) describes this change in what `-type` examines under `-L`.

Treat matches as paths to inspect, rather than proof that targets were deleted. A dangling link can point to a path that never existed, as `missing-link` does here. GNU's [traversal reference](https://www.gnu.org/software/findutils/manual/html_node/find_html/Filesystem-Traversal-Options.html) also documents using the link's properties when permissions prevent following it. Permission failures weren't tested in this fixture. Its [symbolic-link reference](https://www.gnu.org/software/findutils/manual/html_node/find_html/Symbolic-Links.html) explains the general rule when a link can't be followed.

To enter through a linked root while listing its inner links, use:

```sh
find -H ./entry -type l -print
```

Complete output:

```text
./entry/dir-link
./entry/file-link
./entry/missing-link
```

The starting `entry` link isn't included: `-H` tests its directory target. The inner links are included because `-H` leaves them unfollowed.

## Six decisions to practice

Cover the answers and write the command or result before running anything. Keep using the unchanged fixture.

1. Enter through `./entry`, list regular files, and avoid following inner links. Which mode gives that behavior?
2. Why do `-P ./project -type f` and `-H ./project -type f` produce the same set?
3. Does `-L ./project -type f` print the literal path `./shared/reference.txt`? Give the two paths through which it reaches that file.
4. List every symlink inside `project`, including the working ones. Which command should you use?
5. Under `-L` in this fixture, why does `missing-link` pass `-type l` while `file-link` fails it?
6. A script counts three lines from `-L ./entry -type f -print` and reports three distinct files physically inside `project`. Which two assumptions fail?

### Check the reasoning

1. **`find -H ./entry -type f -print`.** It follows the starting link only. The complete result is `./entry/local.txt`.
2. **The starting point is already a real directory.** `-H` changes handling of a linked starting point; it leaves all three links encountered inside `project` alone, just as `-P` does.
3. **No.** The paths are `./project/file-link` and `./project/dir-link/reference.txt`. The search retains each encountered path rather than replacing it with the target's spelling.
4. **`find -P ./project -type l -print`.** It returns `dir-link`, `file-link`, and `missing-link`, each with the `./project/` prefix. Working targets don't change these link-type matches under `-P`.
5. **The missing target can't be inspected.** Its link type remains available. The working `file-link` is tested using its regular-file target, so it passes `-type f` instead.
6. **Path count isn't unique-file count, and the prefix isn't physical containment.** Two paths reach `shared/reference.txt`, outside `project`; the remaining path reaches `project/local.txt`.

## Return to the choice you missed

Save a short recall prompt for any mistaken prediction: “Follow a linked starting directory but leave nested links alone,” or “Does `-L` make printed paths unique?” Put the answer and a one-sentence explanation on the back. For a command question, include the starting path in the prompt; choosing between `./project` and `./entry` is part of the exercise.

Try the prompt from memory on a later day, then rerun the small command to check it. Regular recall and spaced review can help retain these distinctions. Keep practical checks alongside review, especially when applying an option to a different tree.

Once link handling matches your intention, [find -prune](/blog/find-prune-exclude-directories/) covers deliberately skipping directories, and [find -mtime](/blog/find-mtime/) covers selecting files by age. Choose the traversal behavior first so those later tests operate on the entries you mean to examine.

*AI assisted substantially with research, writing, editorial work, fixture execution, and exercise construction; the illustration is AI-generated. The nine displayed command variants were executed with demonstration files on native macOS. GNU documentation was consulted; no GNU/Linux runtime test or human editorial review is claimed.*
