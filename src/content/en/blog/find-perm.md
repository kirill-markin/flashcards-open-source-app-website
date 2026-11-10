---
title: "GNU find -perm: Match Exact, All, or Any Permission Bits"
description: "Predict which files GNU find -perm matches in a six-file Linux lab. Try exact modes, compare /022 with -022, and group permission tests with OR."
date: "2026-11-10"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/a76874dcc88399947befcee0c2b0a778c3791c354ce1c2841825bf25700e3c23.webp"
keywords:
  - "GNU find -perm"
  - "find exact permissions"
  - "find -perm /022 vs -022"
  - "find group or other writable files"
---

A file with mode `0664` has group write set. GNU `find -perm -022` skips it because that test needs both group write and other write. To list regular files under the current directory with either bit set, use `/022`.

```sh
find . -type f -perm /022 -print
```

![A tailor straightens a fabric swatch held by yellow and blue clothespins, between two swatches held by one color each](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/a76874dcc88399947befcee0c2b0a778c3791c354ce1c2841825bf25700e3c23.webp)

## Read the prefix before the digits

The last three octal digits are for owner, group, and other, in that order. In each digit, `4` is read, `2` is write, and `1` is execute. Add them to read a digit like `6`, which means read and write. The mask `022` picks out group write and other write. The leading dash in `-022` and the slash in `/022` tell `find` how to check those same two bits.

| Test | When it matches |
| --- | --- |
| `-perm 0644` | The mode is exactly `0644`. |
| `-perm -0644` | All bits selected by `0644` are set. Extra bits are allowed. |
| `-perm /022` | Either write bit selected by `022` is set. Both also pass. |
| `-perm -022` | Both write bits selected by `022` are set. |

`-perm` checks the mode bits on each entry. For a write-access check as the user running GNU `find`, there's a separate test called `-writable`. That test accounts for access control lists as well. [GNU find manual on permission and access tests](https://www.man7.org/linux/man-pages/man1/find.1.html#EXPRESSION).

## Predict which files pass

The lab puts six empty regular files in a directory called `samples`, which has mode `0777`. Write down your matches before running the commands. In the first two questions, `-type f` limits the results to regular files.

| Name | Mode |
| --- | --- |
| `owner` | `0644` |
| `group` | `0664` |
| `other` | `0646` |
| `both` | `0666` |
| `executable` | `0755` |
| `quiet` | `0444` |

1. Which files match `-perm 0644`? Which match `-perm -0644`? Look closely at the bits in `executable` and `quiet`.
2. Which files match `-perm /022`? Which match `-perm -022`? Decide where `owner` belongs even though it has a write bit.
3. Build the same regular-file search as the opening command using `-perm -020`, `-o`, and `-perm -002`. Where do the parentheses go so `-type f` applies to both branches? Then predict what happens to `samples` itself if you remove `-type f` from the `/022` search.

## Run the lab on Linux

Check that `find --version` identifies GNU findutils, then paste the whole block into your shell as a regular user. The commands run in a separate shell, inside a private temporary directory that it removes on exit. The `0777` directory is inside that private directory.

```sh
sh <<'SH'
set -eu
umask 077
lab=$(mktemp -d /tmp/find-perm.XXXXXXXX)
trap 'cd / && rm -rf -- "$lab"' EXIT
cd "$lab"

mkdir samples
# Clear any special bits inherited by the new directory.
chmod 00777 samples
for name in owner group other both executable quiet; do
  : > "samples/$name"
done
chmod 0644 samples/owner
chmod 0664 samples/group
chmod 0646 samples/other
chmod 0666 samples/both
chmod 0755 samples/executable
chmod 0444 samples/quiet

for mode in 0644 -0644 /022 -022; do
  printf '\n%s\n' "$mode"
  find samples -type f -perm "$mode" -printf '%f %m\n' > matches
  LC_ALL=C sort matches
done

printf '\n%s\n' 'Grouped OR'
find samples -type f \( -perm -020 -o -perm -002 \) \
  -printf '%f %m\n' > matches
LC_ALL=C sort matches

printf '\n%s\n' 'Without -type f'
find samples -perm /022 -printf '%p %m\n' > matches
LC_ALL=C sort matches
SH
```

GNU `find`'s `-printf` can show the file name (`%f`), the path (`%p`), and the octal mode (`%m`). The displayed mode `644` is the same as `0644`. Sorting gives the output a consistent order.

```text
0644
owner 644

-0644
both 666
executable 755
group 664
other 646
owner 644

/022
both 666
group 664
other 646

-022
both 666

Grouped OR
both 666
group 664
other 646

Without -type f
samples 777
samples/both 666
samples/group 664
samples/other 646
```

## Work through the matches

1. **Start with `executable`.** In `0755`, the owner digit `7` has read, write, and execute. Each `5` has read and execute. That covers everything in `0644`, so the file matches `-0644`. Its extra execute bits rule it out of the exact search. `quiet` fails both searches because `0444` lacks owner write. Only `owner` has exactly `0644`.
2. **Check which class has the write bit.** `group` has group write, `other` has other write, and `both` has both. All three pass `/022`. Requiring both bits with `-022` leaves only `both`. The write bit on `owner` is in the owner position, where `022` selects zero bits.
3. **Apply `-type f` to the whole OR.** The grouped expression means regular file AND (group write OR other write). The backslashes pass the parentheses through the shell to `find`. If you remove the group, the implicit AND binds more tightly than `-o`, so a directory with other write set can pass the right branch. In the last run, `samples` appears because `find` also checks the starting path, and mode `0777` satisfies `/022`. [Find operator precedence with worked examples](/blog/find-operator-precedence/).

For a path list using POSIX syntax, use the grouped test and put `-print` after the closing parenthesis. The slash form is a GNU extension. [POSIX find specification](https://pubs.opengroup.org/onlinepubs/9799919799/utilities/find.html).

```sh
find . -type f \( -perm -020 -o -perm -002 \) -print
```

To work out whether a particular user can write a file, check which permission class applies and whether that user can traverse the parent directories. [Linux file permissions practice](/blog/linux-file-permissions-practice/).

## Recall it without the table

| Front | Back |
| --- | --- |
| Does a file with mode `0755` match `-perm -0644`? | Yes. Every bit in `0644` is set. Extra execute bits are allowed. |
| Which matches `0664`, `-perm /022` or `-perm -022`? | `/022` only. Group write is set and other write is clear. |
| Write the grouped OR for regular files with group or other write set. | `-type f \( -perm -020 -o -perm -002 \)` |

For more short exercises on exact, all-bit, and any-bit matching, use the [GNU find permission flashcards](/catalog/packages/gnu-find-permission-flashcards/). Predict the matching files or build the permission test before revealing the answer.

*AI assisted with drafting, editing, and running the lab. The illustration is AI-generated. The lab ran with GNU findutils 4.10.0 and `/bin/sh` on aarch64 Linux in an Alpine 3.24.4 container.*
