---
title: "Find -name vs -path: Check the Pattern Against a File Tree"
description: "Compare find -name and -path with a reproducible file tree and checked output sets. Diagnose slashes, starting-point prefixes, wildcards, and hidden files."
date: "2026-11-04"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/29f291372bc1794125e911a1f2a30b382eb756184df9df99c830edeca50b6e32.webp"
keywords:
  - "find -name vs -path"
  - "find path wildcard"
  - "find name slash"
  - "find path not matching"
---

`find ./project -name 'src/main.ts'` prints nothing in the tree below, even though `./project/src/main.ts` exists. Change the pattern to `'main.ts'`, and five files match. Adding a directory to the pattern seems more specific, but the name test never sees that directory.

The choice between `find -name` and `-path` comes down to which string you want to test:

| Test | String tested for this file |
| --- | --- |
| `-name` | `main.ts` |
| `-path` | `./project/src/main.ts`, when the starting point is `./project` |

The path includes the starting point you typed. It doesn't automatically become an absolute path. GNU documents the distinction in its [basename](https://www.gnu.org/software/findutils/manual/html_node/Base-Name-Patterns.html) and [full-path](https://www.gnu.org/software/findutils/manual/html_node/Full-Name-Patterns.html) references. The lab below gives you exact results to compare, including three commands that finish successfully without printing anything.

![A worker places a green-string parcel in a wooden sorting cabinet beside matching parcels in different compartments](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/29f291372bc1794125e911a1f2a30b382eb756184df9df99c830edeca50b6e32.webp)

## Make the mismatches visible

The fixture has seven regular files. Five share the name `main.ts`, and one TypeScript file starts with a dot. Those repetitions make a mistaken selection visible: the same filename occurs at the root, under `src`, in a library, in tests, and inside a package.

The setup uses Python 3. Run it from a location where you can create a new `find-name-path-lab` directory. It stops if that directory already exists; use a fresh location.

```sh
python3 - <<'PY'
from pathlib import Path

root = Path("find-name-path-lab")
root.mkdir()
project = root / "project"
project.mkdir()
files = [
    "main.ts",
    "src/main.ts",
    "src/.draft.ts",
    "src/lib/main.ts",
    "tests/main.ts",
    "packages/api/src/main.ts",
    "docs/readme.md",
]
for name in files:
    path = project / name
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text("demonstration only\n")
PY
```

Enter the lab after setup succeeds:

```sh
cd find-name-path-lab
```

Here is the complete tree. A trailing slash marks a directory in this diagram:

```text
project/
├── main.ts
├── src/
│   ├── main.ts
│   ├── .draft.ts
│   └── lib/
│       └── main.ts
├── tests/
│   └── main.ts
├── packages/
│   └── api/
│       └── src/
│           └── main.ts
└── docs/
    └── readme.md
```

All ten command variants below were executed on November 4, 2026, using native macOS 26.6.1 arm64 `/usr/bin/find` through `/bin/sh`. CPython 3.14.7 created the fixture and ran the commands. Every command exited with status zero and no stderr. The complete output sets are sorted here for readability; your traversal order may differ. GNU behavior is supported by the linked documentation, rather than a GNU/Linux test run.

## A filename can occur in five places

Start with the basename:

```sh
find ./project -type f -name 'main.ts' -print
```

The complete result is:

```text
./project/main.ts
./project/packages/api/src/main.ts
./project/src/lib/main.ts
./project/src/main.ts
./project/tests/main.ts
```

All five files end with the same component, `main.ts`. The name comparison ignores their parent directories. Here, `-type f` restricts matches to regular files, and `-print` explicitly asks for their paths.

Now put a slash in the name pattern:

```sh
find ./project -type f -name 'src/main.ts' -print
```

This prints **nothing**. None of the basenames contains `src/`, so the pattern can't match. Keep the quotes: they pass the pattern to `find` as written. Change the test when directory components matter:

```sh
find ./project -type f -path './project/src/main.ts' -print
```

That prints exactly:

```text
./project/src/main.ts
```

With no wildcards, this pattern selects exactly the root `src/main.ts`. The other four files named `main.ts` have different paths.

## Changing the starting point changes the comparison

Remove `./` from the starting point while keeping the previous pattern:

```sh
find project -type f -path './project/src/main.ts' -print
```

The output is **empty** again, but the test is now appropriate. The mismatch is in the prefix: the candidate is `project/src/main.ts`, while the pattern begins with `./project/`.

Match the spelling used by this command:

```sh
find project -type f -path 'project/src/main.ts' -print
```

The result is:

```text
project/src/main.ts
```

Both commands reach the same file. What changes is the text supplied to the path comparison. An absolute pattern would also fail against this relative candidate. Read “full path” as the encountered path including the starting point, rather than a promise of an absolute pathname.

When a `find -path` pattern isn't matching, compare it with the printed path from a successful name search using the same starting point. Check the prefix before adding wildcards: a broader pattern can conceal the mistake and include files you didn't intend to select.

## A path wildcard can cross a slash

This pattern looks as though it might mean “TypeScript files directly inside the root `src` directory”:

```sh
find ./project -type f -path './project/src/*.ts' -print
```

It returns three files:

```text
./project/src/.draft.ts
./project/src/lib/main.ts
./project/src/main.ts
```

The library file is the surprise. In `./project/src/lib/main.ts`, the `*` consumes `lib/main`, including the slash. The hidden `.draft.ts` matches too.

The quotes matter here. They prevent the shell from expanding `*.ts` before `find` receives it. GNU's [pattern-matching reference](https://www.gnu.org/software/findutils/manual/html_node/Shell-Pattern-Matching.html) describes wildcards matching slashes and leading dots in `find` patterns. Don't apply the shell's usual filename-expansion boundaries to this test. For a one-level search, use a depth limit; the [find -maxdepth and -mindepth guide](/blog/find-maxdepth-mindepth/) shows how to count from the chosen starting point.

Now allow any prefix before a `src` component:

```sh
find ./project -type f -path '*/src/*.ts' -print
```

The complete result grows to four files:

```text
./project/packages/api/src/main.ts
./project/src/.draft.ts
./project/src/lib/main.ts
./project/src/main.ts
```

The first `*` can consume either `./project` or `./project/packages/api`, so both `src` locations qualify. The second can still consume `lib/main`. The pattern requires a `/src/` component somewhere in the path; it doesn't require the matching file to be directly inside that directory.

For comparison, select by suffix alone:

```sh
find ./project -type f -name '*.ts' -print
```

That returns all six TypeScript files:

```text
./project/main.ts
./project/packages/api/src/main.ts
./project/src/.draft.ts
./project/src/lib/main.ts
./project/src/main.ts
./project/tests/main.ts
```

This time the root and test files qualify as well. Only the `.md` file is absent. The leading dot doesn't exclude `.draft.ts` from `-name '*.ts'` or either wildcard path pattern in this fixture. Quoting controls what reaches `find`; `find` still interprets the wildcard.

## Leave the diagram's trailing slash out of the pattern

The tree diagram writes `src/` to identify a directory. That convention can lead to another empty result:

```sh
find ./project -type d -path './project/src/' -print
```

This prints **nothing**. In this search, the directory's encountered path is `./project/src`, without a trailing slash. `-type d` already expresses that you want a directory. Match its path as printed:

```sh
find ./project -type d -path './project/src' -print
```

The result is:

```text
./project/src
```

This result concerns a descendant of `./project`. It doesn't establish how every spelling of the starting point itself behaves; GNU's full-path reference makes a starting-point exception in its trailing-slash rule.

An empty result also says nothing about whether `find` visited the directory's children. In these expressions, failed name and path tests prevent printing that entry; they don't stop descent. To skip a directory's contents, use the separate traversal control covered in the [find -prune guide](/blog/find-prune-exclude-directories/).

## Six predictions to make before running the commands

Keep the fixture unchanged. Write down each prediction before running the relevant command, then compare the complete result with your answer.

1. With `-name 'main.ts'`, do the root file and `tests/main.ts` both match? How many regular files match in total?
2. The `-name 'src/main.ts'` command prints nothing. Which test and pattern select only the root `src/main.ts` when the starting point is `./project`?
3. A script changes its starting point from `./project` to `project`. It keeps `-path './project/src/main.ts'`. Does the file disappear from the tree, or does a different string reach the path test? Give the repaired pattern and printed path.
4. For `-path './project/src/*.ts'`, predict whether each of these matches: `src/main.ts`, `src/lib/main.ts`, and `packages/api/src/main.ts`. Explain what `*` consumes in the nested library path.
5. Compare `-path '*/src/*.ts'` with `-name '*.ts'`, both under `./project`. Which two files appear only in the name-based result? Does either command omit `.draft.ts`?
6. The directory command with `-path './project/src/'` returns nothing. Which character should go? Is the root `src` directory's failure to match enough to stop traversal into its files?

### Answers

1. **Both match; five regular files match in total.** The remaining three are `./project/src/main.ts`, `./project/src/lib/main.ts`, and `./project/packages/api/src/main.ts`. All five present `main.ts` to the name test.
2. **Use `-path './project/src/main.ts'`.** With the same `-type f` and `-print`, the sole result is `./project/src/main.ts`. This test can compare the directory components that `-name` never receives.
3. **A different string reaches the test.** The repaired pattern is `'project/src/main.ts'`, and the printed path is `project/src/main.ts`. The file remains in place; the old pattern's `./` prefix is the mismatch.
4. **`src/main.ts` and `src/lib/main.ts` match; `packages/api/src/main.ts` doesn't.** The wildcard consumes `lib/main` in the library path. The package path fails the fixed `./project/src/` prefix.
5. **Only `./project/main.ts` and `./project/tests/main.ts` are added by the name-based search.** They end in `.ts` but have no `/src/` component. Both searches include `./project/src/.draft.ts`.
6. **Remove the final `/`: `-path './project/src'`.** The repaired directory command prints `./project/src`. Its earlier failure to match didn't prune anything. `find` can continue visiting the directory's files even when that directory fails a test.

If you missed a prediction, turn that decision into a short recall prompt. For example: “With a starting point of `project`, which string reaches the path test for the root `src/main.ts`?” Answer `project/src/main.ts` before checking. Try it again later with a different starting point or a deeper file, so you have to apply the rule rather than repeat a saved output.

*Disclosure: Nibomo publishes this site. AI assisted substantially with research, drafting, editing, fixture execution, and exercise construction; the illustration is AI-generated. The ten list-only command variants were executed on native macOS on November 4, 2026. GNU behavior is grounded in the linked documentation.*
