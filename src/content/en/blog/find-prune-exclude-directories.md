---
title: "Find -prune Explained: Exclude Directories and Check the Results"
description: "Practice find -prune on a reproducible file tree. Exclude directories, distinguish names from paths, and diagnose grouping and default-print mistakes."
date: "2026-10-20"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/3a11285cd4ebff226f1f532303e4d623ba6e2602ec47d09c5c8248152d540fe1.webp"
keywords:
  - "find prune exclude directories"
  - "find exclude multiple directories"
  - "find prune vs not path"
  - "find prune -o"
  - "find exclude node_modules"
---

Leave the directory names ungrouped before `-prune`, and files inside `node_modules` reappear. The command still runs successfully. It even skips `dist`, which makes the mistake easy to miss.

To **exclude directories with find -prune**, put the directory choices together, prune that branch, then put the files you want after `-o`:

```sh
find ./project -type d \( -name node_modules -o -name dist \) -prune -o -type f -name '*.ts' -print
```

This skips directories named `node_modules` or `dist` at any depth under `./project` and prints the remaining regular `.ts` files. If you only want to skip the root `dist`, you need a path test instead. A small file tree makes that difference much easier to check.

![A museum attendant walks along an open corridor beside a side gallery closed off by a burgundy rope](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/3a11285cd4ebff226f1f532303e4d623ba6e2602ec47d09c5c8248152d540fe1.webp)

## Build a tree where the choices matter

The fixture has nine files. Eight end in `.ts`; one is a text file. There are root and nested dependency folders, three separate `dist` directories, and a filename containing a space.

Run this from a directory where you can create a new `find-prune-lab` folder. Setup fails if that folder already exists; use a fresh location rather than an existing project.

```sh
python3 - <<'PY'
from pathlib import Path

root = Path("find-prune-lab")
root.mkdir()
project = root / "project"
project.mkdir()
files = [
    "src/main.ts",
    "src/two words.ts",
    "src/readme.txt",
    "node_modules/pkg/vendor.ts",
    "dist/root-bundle.ts",
    "packages/api/src/route.ts",
    "packages/api/node_modules/pkg/dependency.ts",
    "packages/api/dist/bundle.ts",
    "docs/dist/example.ts",
]
for name in files:
    path = project / name
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text("demonstration only\n")
PY
```

After setup succeeds:

```sh
cd find-prune-lab
```

Here is the complete tree, with directory names ending in `/`:

```text
project/
├── src/
│   ├── main.ts
│   ├── two words.ts
│   └── readme.txt
├── node_modules/
│   └── pkg/
│       └── vendor.ts
├── dist/
│   └── root-bundle.ts
├── packages/
│   └── api/
│       ├── src/
│       │   └── route.ts
│       ├── node_modules/
│       │   └── pkg/
│       │       └── dependency.ts
│       └── dist/
│           └── bundle.ts
└── docs/
    └── dist/
        └── example.ts
```

Without exclusions, this command selects all eight `.ts` files:

```sh
find ./project -type f -name '*.ts' -print
```

The examples were checked on October 20, 2026, with native macOS 26.6.1 arm64 `/usr/bin/find`, `/bin/sh`, and CPython 3.14.7. The checks covered nine command variants: seven appear in full here, and the effect of `-depth` is discussed below. Two additional runs were instrumented to observe traversal. Output blocks below show checked sets sorted for readability; your display order may differ. GNU behavior is supported by its documentation, rather than a GNU/Linux execution of this lab.

## Read the working command as two branches

Run the opening command from inside `find-prune-lab`. Its complete result set is:

```text
./project/packages/api/src/route.ts
./project/src/main.ts
./project/src/two words.ts
```

The directory branch is `-type d \( -name node_modules -o -name dist \) -prune`. The file branch is `-type f -name '*.ts' -print`. The outer `-o` connects them.

Adjacent tests mean AND. AND binds more tightly than `-o`, which means OR. An AND branch stops at a false result; an OR branch stops at a true result. The escaped parentheses group the two names before `-prune`. The backslashes let those parentheses reach `find` instead of being interpreted by the shell. See GNU's [expression operator rules](https://www.gnu.org/software/findutils/manual/html_node/find_html/Combining-Primaries-With-Operators.html).

Trace three entries from the fixture:

| Entry being examined | What happens |
| --- | --- |
| `./project/node_modules` | It is a directory with a selected name. `-prune` prevents descent and returns true. The outer OR skips the file branch, including its `-print`. |
| `./project/src/main.ts` | The directory test fails. The file branch runs, matches a regular `.ts` file, and prints its path. |
| `./project/src/readme.txt` | The directory test fails. In the file branch, the name test fails, so `-print` is skipped. |

The pruned directory itself is encountered. Its descendants are skipped. Also, `-prune` doesn't hide a directory from output by itself: the placement of `-print` after `-o` keeps that directory out of this result. GNU explains that distinction in its [directory traversal reference](https://www.gnu.org/software/findutils/manual/html_node/find_html/Directories.html).

## Choose a name or one particular path

The name-based command excludes `docs/dist/example.ts` from the results too. That may be right for build folders, but wrong if `docs/dist` holds examples you need.

`-name` compares the final name component, such as `dist`. It doesn't distinguish the root directory from another directory with that name. GNU's [base-name reference](https://www.gnu.org/software/findutils/manual/html_node/find_html/Base-Name-Patterns.html) describes that scope.

To exclude **only `./project/dist`**, run:

```sh
find ./project -path './project/dist' -prune -o -type f -name '*.ts' -print
```

The checked result contains seven files:

```text
./project/docs/dist/example.ts
./project/node_modules/pkg/vendor.ts
./project/packages/api/dist/bundle.ts
./project/packages/api/node_modules/pkg/dependency.ts
./project/packages/api/src/route.ts
./project/src/main.ts
./project/src/two words.ts
```

This command leaves both `node_modules` trees alone. It also leaves the nested `dist` directories alone.

`-path` matches the path as `find` encounters it, including the starting point. Here that point is `./project`, so the pattern is `'./project/dist'`. If you change the starting point to `project`, adjust the pattern to `'project/dist'`. Neither spelling is an absolute path. See GNU's [full-path matching reference](https://www.gnu.org/software/findutils/manual/html_node/find_html/Full-Name-Patterns.html).

You can combine both choices: exclude every `node_modules` directory, but only the root `dist`:

```sh
find ./project -type d \( -name node_modules -o -path './project/dist' \) -prune -o -type f -name '*.ts' -print
```

That returns five files:

```text
./project/docs/dist/example.ts
./project/packages/api/dist/bundle.ts
./project/packages/api/src/route.ts
./project/src/main.ts
./project/src/two words.ts
```

The useful decision comes before typing: should every directory with this name be excluded, or just this location?

## Missing parentheses let dependency files through

This broken command looks close to the first one:

```sh
find ./project -name node_modules -o -name dist -prune -o -type f -name '*.ts' -print
```

Its result is the three source paths from the working command, plus:

```text
./project/node_modules/pkg/vendor.ts
./project/packages/api/node_modules/pkg/dependency.ts
```

The three `dist` files stay excluded, but both dependency files leak through. The missing grouping changes which test reaches `-prune`.

Read the expression as three OR branches:

```text
name is node_modules
OR (name is dist AND prune)
OR (regular file AND name ends in .ts AND print)
```

At a `node_modules` directory, the first branch is already true. Evaluation stops before reaching `-prune`, so traversal continues inside it. At a `dist` directory, the second branch runs and prunes it. The command's successful exit doesn't tell you whether you grouped the intended branches.

Repair it by restoring the directory guard and grouped alternatives:

```sh
find ./project -type d \( -name node_modules -o -name dist \) -prune -o -type f -name '*.ts' -print
```

Check both dependency paths after the repair, rather than checking only that `dist/root-bundle.ts` disappeared.

## Omitting -print changes what gets printed

Now keep the grouping but remove the explicit `-print`:

```sh
find ./project -type d \( -name node_modules -o -name dist \) -prune -o -type f -name '*.ts'
```

The checked output contains eight entries: the three wanted source paths **and these five directories**:

```text
./project/dist
./project/docs/dist
./project/node_modules
./project/packages/api/dist
./project/packages/api/node_modules
```

The descendants are still pruned. The surprise comes from implicit printing. With this expression, `find` prints entries for which the whole expression is true. That includes each directory whose pruning branch succeeds. `-prune` doesn't suppress the default print action. GNU documents this in [find expressions](https://www.gnu.org/software/findutils/manual/html_node/find_html/find-Expressions.html).

Keep the explicit `-print` on the file branch when you want only those selected files. Its presence also suppresses the implicit print action for the whole expression.

## A path filter can produce the same list without pruning

This command returns the same three source paths as the opening command:

```sh
find ./project -type f -name '*.ts' ! -path '*/node_modules/*' ! -path '*/dist/*' -print
```

The negative path tests reject files whose paths contain those directory components. They don't instruct `find` to stop descending. An output comparison alone cannot show that difference.

In the separate traversal-observation runs, an entry logger ran before the selection tests and wrote outside `project`. With the pruning expression, it recorded `./project/node_modules` but none of its descendants. With the filtering expression, it also recorded `./project/node_modules/pkg` and `./project/node_modules/pkg/vendor.ts`, even though the vendor file wasn't printed. Both selections still produced the same three paths. This observation checks traversal, not speed or filesystem operation counts.

Use `-prune` when you need to skip descent. Negative `-path` tests filter the selected paths while traversal continues. Choose based on whether you need to skip a directory’s contents or simply leave them out of the output.

There is one traversal option to check before trusting this pattern: `-depth` processes contents before their containing directory. Adding it to the name-pruning command returned all eight `.ts` files in this fixture; pruning the directory came too late. GNU's directory reference also notes that `-delete` implies `-depth`. These list-only examples therefore aren't a recipe for replacing `-print` with `-delete`.

## Six small problems to solve before checking

Use the unchanged nine-file fixture. Write down paths or explain the failed branch before reading the answers.

1. You want `.ts` files outside every `node_modules` and `dist` directory. Does `docs/dist/example.ts` belong in the result? Name the complete wanted set.
2. You want to keep `docs/dist/example.ts` and `packages/api/dist/bundle.ts`, but exclude the root build directory and both dependency trees. Which two tests belong inside the directory-choice parentheses? How many files remain?
3. The ungrouped command skips `dist` but prints both dependency files. At a `node_modules` directory, which successful test prevents `-prune` from running?
4. The correctly grouped command suddenly prints five excluded directory paths as well as the wanted files. No descendants from those directories appear. Which explicit action is missing, and where should it go?
5. Two commands print the same three files. One uses `-prune`; the other uses negative path tests. Does that output prove that both skipped the dependency trees? Explain what would distinguish them.
6. A script changes its starting point from `./project` to `project` but keeps `-path './project/dist'`. What should change? Would adding `-depth` help the pruning command?

### Answers

1. **No.** Name-based pruning excludes that `dist` too. The complete set is `./project/src/main.ts`, `./project/src/two words.ts`, and `./project/packages/api/src/route.ts`.
2. **`-name node_modules -o -path './project/dist'`.** Use the mixed command above. Five files remain: the three source files, `./project/docs/dist/example.ts`, and `./project/packages/api/dist/bundle.ts`.
3. **`-name node_modules`.** It makes the first OR branch true. The later pruning branch isn't evaluated for that directory, so its children are still reached.
4. **`-print`, at the end of the file branch after `-name '*.ts'`.** That explicit action controls the file output and suppresses whole-expression default printing. The pruning branch can stay true without printing its directory.
5. **No.** Output lists selected entries. A traversal observer placed before selection can also reveal entries that were reached and rejected. In the checked runs, filtering reached the dependency file; pruning didn't reach it.
6. **Use `-path 'project/dist'` with that starting point.** The path test needs the encountered spelling. `-depth` doesn't repair it: processing children first defeats pruning, even with a correctly spelled path.

## Keep the mistake as a recall prompt

If one answer surprised you, save that decision. A short prompt on paper or in a flashcard is enough:

| Prompt | Answer |
| --- | --- |
| Exclude every directory named `dist`, or just the root one: which test changes? | Use `-name dist` for every matching name; use `-path './project/dist'` for that path when starting at `./project`. |
| The first OR branch matches `node_modules`. Will a later `-prune` run? | No. A true OR branch skips the later branches. Group both directory alternatives before pruning. |
| Pruning works, but the excluded directories appear in output. What should you check? | An explicit `-print` belongs on the wanted-file branch; omitting it can activate default printing. |

The [terminal-command learning guide](/blog/how-to-learn-terminal-commands-with-flashcards/) shows how to keep practice tied to the decisions you actually forget. You don't need a card for every variation in this lab.

Once directory selection is right, use [find -mtime](/blog/find-mtime/) to choose files by age, or [find -exec vs xargs](/blog/find-exec-vs-xargs/) to check how selected paths reach another program. Those are separate decisions: first choose the files, then check the handoff.

*AI assisted substantially with research, writing, editing, fixture execution, and exercise construction; the illustration is AI-generated. Nine command variants and two additional traversal-observation runs used demonstration files on native macOS on October 20, 2026. GNU documentation was consulted; no GNU/Linux runtime test, human editorial review, speed benchmark, or learning-outcome study is claimed.*
