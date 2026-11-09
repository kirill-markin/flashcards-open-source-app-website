---
title: "GNU find -exec Exit Status: When a Failed Command Still Returns 0"
description: 'Run a two-file lab to see how GNU find -exec handles failures with \; and +, then make a batch check report bad files and return a failure status.'
date: "2026-11-09"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/c304a86f969c20d04be3b17364d231e265f98896a116fa6a44430347748137d3.webp"
keywords:
  - "find -exec exit status"
  - "GNU find command failure"
  - "find exec semicolon vs plus"
  - "find exec returns 0"
---

An empty report fails `test -s`, yet GNU `find -exec test -s '{}' \;` can still exit with status `0`. Switch to the batched `{} +` form and a failed batch makes `find` exit nonzero. A following `-print` can still list both reports.

To see why, track three results separately. The child command exits with a status, the `-exec` action evaluates to true or false for a path, and `find` returns its own status to the calling shell.

![A baker opens an underbaked loaf beside a whole loaf on the same tray](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/c304a86f969c20d04be3b17364d231e265f98896a116fa6a44430347748137d3.webp)

## Make an empty report and a nonempty one

Use `/bin/sh` on Linux and check that `find --version` identifies GNU findutils. Paste this setup into the shell. Once it prints the new temporary directory, use the same session for the examples.

```sh
lab=$(mktemp -d /tmp/find-exec.XXXXXXXX) &&
  (
    cd "$lab" &&
    mkdir samples &&
    printf 'ready\n' > 'samples/ready report.txt' &&
    : > 'samples/empty report.txt'
  ) &&
  printf 'Lab directory: %s\n' "$lab"
```

Define this helper in the same shell. It runs each example in the lab directory and captures stdout, stderr, and the exit status separately. It sorts the saved lines for display because traversal order can vary.

```sh
run() (
  cd "${lab:?Run the lab setup first}" || exit
  export LC_ALL=C
  label=$1
  shift
  status=0
  "$@" > out 2> err || status=$?
  printf '\n%s status=%s\n' "$label" "$status"
  sed 's/^/stdout: /' out | sort
  sed 's/^/stderr: /' err | sort
)
```

Each `status=` line shows what `find` returned. The helper saves that number before piping the captured text through `sort`.

## With `\;` the child decides whether the path passes

```sh
run per-file find samples -type f -exec test -s '{}' \; -print
```

```text
per-file status=0
stdout: samples/ready report.txt
```

The backslash passes the semicolon through to `find`, where it ends the action. `find` runs `test -s` once for each regular file. The nonempty report gives `test` status `0`, so the action is true and evaluation reaches `-print`. The empty report gives `test` status `1`, so the action is false and the implicit AND skips `-print`. Both checks are quiet on stderr. Since the search itself completed without errors, `find` exits with `0`. [POSIX find specification](https://pubs.opengroup.org/onlinepubs/9799919799/utilities/find.html).

That makes the semicolon form useful when you want a child command to select files. Negate the action to print the ones that fail the size check. [See how implicit AND and negation work in a find expression](/blog/find-operator-precedence/).

```sh
run inverted-per-file find samples -type f ! -exec test -s '{}' \; -print
```

```text
inverted-per-file status=0
stdout: samples/empty report.txt
```

## With `+` a failed batch changes the final status

```sh
run batched find samples -type f \
  -exec sh -c 'for file do test -s "$file" || exit 7; done' check '{}' + -print
```

```text
batched status=1
stdout: samples/empty report.txt
stdout: samples/ready report.txt
```

The child shell deliberately exits with `7` as soon as a file fails the size check. GNU `find` records the failed batch and exits with `1` in this run. The documented guarantee is a nonzero status, so test for nonzero in a script. [GNU find manual on the -exec action](https://man7.org/linux/man-pages/man1/find.1.html#EXPRESSION).

Both paths reach `-print` because the batched action is always true in the expression. It queues paths for a later invocation, whose exit status affects the final status of `find`. The two printed paths tell you which files reached `-print`.

In the shell command, `check` occupies `$0` and `for file do` loops over the remaining arguments. Each path is one argument, including its embedded space. [See the argument-by-argument walkthrough in find -exec vs xargs](/blog/find-exec-vs-xargs/).

## Report every empty file and fail the batch

To report every empty file, keep the loop running after a failed check. Print the path to stderr, set `failed=1`, and use that flag as the child shell's exit status when the loop finishes.

```sh
run report-all find samples -type f -exec sh -c '
  failed=0
  for file do
    if ! test -s "$file"; then
      printf "empty: %s\n" "$file" >&2
      failed=1
    fi
  done
  exit "$failed"
' check '{}' +
```

```text
report-all status=1
stderr: empty: samples/empty report.txt
```

The check is for nonzero file size. A report with incorrect contents can still pass. In a larger tree, `find` can start several shell invocations. Each checks its own arguments, and one failed batch is enough for `find` to exit nonzero. In a script, drop `run report-all` and use the `find` command directly as the condition of an `if`.

| What you need | How to get it |
| --- | --- |
| Print paths whose check passes | Use `-exec … {} \;` followed by `-print`. |
| Print paths whose check fails | Use `! -exec … {} \;` followed by `-print`. |
| Report failing paths and signal failure to a script | Use `-exec … {} +` with a wrapper that reports each failed check and exits nonzero for the batch. |

## Predict stdout, stderr, and the status

Keep the two-file lab as it is. For each command, predict both output streams and the status shown by `run`.

1. The batch shell prints `ran` and exits with `7`, but the search asks for CSV files. What do you see?

   ```sh
   run zero-matches find samples -type f -name '*.csv' \
     -exec sh -c 'printf "ran\n"; exit 7' check '{}' +
   ```

2. The fail-fast batch from earlier now receives only the report beginning with `ready`. What changes?

   ```sh
   run all-good find samples -type f -name 'ready*' \
     -exec sh -c 'for file do test -s "$file" || exit 7; done' check '{}' + -print
   ```

3. The semicolon form starts from `absent`, a path the lab never created. Where does the failure come from?

   ```sh
   run missing-root find absent -type f -exec test -s '{}' \; -print
   ```

### Answers

1. Both streams are empty and the status is `0`. No path reached the batch action, so the child shell never ran.

   ```text
   zero-matches status=0
   ```

2. The one selected path is printed, stderr is empty, and the status is `0`. The nonempty file passes the size check and the shell finishes successfully.

   ```text
   all-good status=0
   stdout: samples/ready report.txt
   ```

3. Stdout is empty and `find` writes its own diagnostic to stderr. The missing starting path makes the search fail before any child runs. Here `find` exits with `1`. [GNU find manual on exit status](https://man7.org/linux/man-pages/man1/find.1.html#EXIT_STATUS).

   ```text
   missing-root status=1
   stderr: find: 'absent': No such file or directory
   ```

*AI assisted with research, drafting, editing, lab execution, and the practice questions. The illustration is AI-generated. The seven command variants were run with GNU findutils 4.10.0 and `/bin/sh` on aarch64 Linux in an Alpine 3.24.4 Docker container.*
