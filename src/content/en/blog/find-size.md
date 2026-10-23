---
title: "GNU find -size: Exact Bytes, Rounded Units, and Practice"
description: "Predict which files GNU find -size returns. Work through MiB rounding, empty files, exact byte limits, and inclusive ranges with tested commands and answers."
date: "2026-10-23"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/940b13cda358b0b8d2efd404dba16f6405a4c472c3553260aaba2f90bfc2679f.webp"
keywords:
  - "find -size"
  - "find files by size"
  - "find -size -1M"
  - "find size rounding"
  - "find files between sizes"
---

A one-byte file matches GNU `find -size 1M`. It doesn't match `-size -1M`. That looks strange until you separate the file's byte length from the rounded number that `find` compares.

This worksheet uses eight files to make those boundaries visible: zero bytes, one byte, and files just below, at, and above one and two MiB. Predict the matches, run the commands, then check the complete answers. All search commands only print paths.

![A woman marks an exact cut on a whole terracotta tile that overhangs a doorstep.](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/940b13cda358b0b8d2efd404dba16f6405a4c472c3553260aaba2f90bfc2679f.webp)

## Round up, then compare

GNU `find -size` divides a file's logical length by the chosen unit and **rounds up** to a whole number. It then applies your comparison to that number. The [GNU find manual](https://man7.org/linux/man-pages/man1/find.1.html#EXPRESSION) documents both the rounding and the comparison signs.

For `-size 1M`, the unit is 1,048,576 bytes: one **MiB**, or 1,024 × 1,024 bytes. A decimal MB is 1,000,000 bytes. The `M` suffix here uses MiB.

| Test | Comparison after rounding |
| --- | --- |
| `-size nM` | Rounded MiB count equals `n` |
| `-size +nM` | Rounded MiB count is strictly greater than `n` |
| `-size -nM` | Rounded MiB count is strictly less than `n` |

Consequently, `-size 1M` covers **1 through 1,048,576 bytes**, inclusive. Every positive fraction of that first MiB rounds up to 1. Zero stays zero, so `-size -1M` selects only zero-byte files when paired with `-type f`.

For example, 1,048,577 bytes rounds up to 2 MiB units. That file passes `-size +1M`, but a file of exactly 1,048,576 bytes doesn't: its rounded count is 1, and `+1` requires a count greater than 1.

This differs from [GNU find's modification-age buckets](/blog/find-mtime/), which round down to completed time units. Keep the rounding direction separate from the comparison sign.

## Build eight boundary cases

These examples require **GNU find** and **Python 3.10 or later**. Check the executable with `find --version`; it should identify GNU findutils. If your GNU executable has another name, substitute that name in the commands below. The executed results here use GNU find on macOS; the system BSD `find` wasn't tested.

Run this setup in a shell. It creates the eight files in a new temporary directory and saves the directory's path in `fixture`:

```bash
fixture="$(python3 - <<'PY'
from pathlib import Path
import tempfile

directory: Path = Path(tempfile.mkdtemp(prefix="find-size-"))
sizes: tuple[int, ...] = (
    0, 1, 1048575, 1048576,
    1048577, 2097151, 2097152, 2097153,
)
for name, size in zip("ABCDEFGH", sizes, strict=True):
    with (directory / name).open("wb") as file:
        file.truncate(size)
print(directory)
PY
)"
```

`truncate` sets the logical lengths without writing a few megabytes of sample text. The files may be sparse: their allocated disk blocks can differ from their logical lengths. GNU `-size` uses the logical length, the `st_size` value. Default `du` output reports allocated disk usage, which can be much smaller for a sparse file. Use the logical byte length for these predictions.

Here is the size ledger. The rounded count is `ceil(bytes / 1048576)`:

| File | Bytes | Length in MiB units | Rounded count |
| --- | ---: | --- | ---: |
| A | 0 | Zero | 0 |
| B | 1 | Positive fraction below 1 | 1 |
| C | 1,048,575 | One byte below 1 | 1 |
| D | 1,048,576 | Exactly 1 | 1 |
| E | 1,048,577 | One byte above 1 | 2 |
| F | 2,097,151 | One byte below 2 | 2 |
| G | 2,097,152 | Exactly 2 | 2 |
| H | 2,097,153 | One byte above 2 | 3 |

## Predict the matches

Start with this command, changing the test for each question. `-type f` restricts the search to regular files, so the temporary directory itself doesn't appear:

```bash
find "$fixture" -type f -size -1M -print
```

Write down the matching letters before running each command. Output order doesn't matter.

1. Which files match `-size -1M`, `-size 1M`, and `-size +1M`?
2. Which match `-size -1048576c` and `-size 1048576c`?
3. What does `-size +1M -size -2M` return?
4. How would you select files strictly between one and two MiB? What changes if both endpoints should count?

The `c` suffix means bytes. Since a file's byte length is already a whole number, rounding doesn't change it.

### Check the answers

Every row below was executed with the same `find "$fixture" -type f ... -print` wrapper. The byte ranges apply to regular files generally; the last column shows which of our eight files match. `-print` emits full paths, shown here as filenames for readability.

| Tests in place of `...` | Matching byte lengths | Files |
| --- | --- | --- |
| `-size -1M` | 0 | A |
| `-size 1M` | 1–1,048,576 | B, C, D |
| `-size +1M` | 1,048,577 and above | E, F, G, H |
| `-size -1048576c` | 0–1,048,575 | A, B, C |
| `-size 1048576c` | Exactly 1,048,576 | D |
| `-empty` | 0 | A |
| `-size +1M -size -2M` | None | None |
| `-size +1048576c -size -2097152c` | 1,048,577–2,097,151 | E, F |
| `-size +1048575c -size -2097153c` | 1,048,576–2,097,152 | D, E, F, G |
| `-size +0c -size -1048576c` | 1–1,048,575 | B, C |
| `-size 1` | 1–512 | B |
| `-size 1k` | 1–1,024 | B |

The first five rows expose the main trap. `-size -1M` means a **rounded count below 1**; `-size -1048576c` means a **byte length below 1,048,576**. B and C pass only the latter. Likewise, `-size 1M` covers the whole first rounded unit, while `-size 1048576c` selects the exact length.

Without a suffix, `-size 1` uses 512-byte units. Lowercase `k` uses 1,024-byte units. Both select only B in this fixture, but a 700-byte file would pass `-size 1k` and fail `-size 1`.

## Repair the empty interval

This command looks like “between one and two MiB”:

```bash
find "$fixture" -type f -size +1M -size -2M -print
```

Adjacent tests are joined by AND. Let the rounded MiB count be `q`. The expression requires `q > 1` and `q < 2` at the same time. There is no integer between 1 and 2, so no file can match, whatever directory you search.

Write the intended endpoints in bytes. For **strictly greater than one MiB and strictly less than two MiB**, use:

```bash
find "$fixture" -type f \
  -size +1048576c -size -2097152c -print
```

E and F pass. D equals the lower bound, and G equals the upper bound; strict comparisons exclude both.

For **one through two MiB, including both endpoints**, move each strict boundary outward by one byte:

```bash
find "$fixture" -type f \
  -size +1048575c -size -2097153c -print
```

Now D, E, F, and G pass. Byte lengths are integers, so `bytes > 1048575` means `bytes >= 1048576`; `bytes < 2097153` means `bytes <= 2097152`. If your requirement uses decimal MB, start with 1,000,000 and 2,000,000 as the endpoints and apply the same logic.

One more useful case is **nonempty files smaller than one MiB**:

```bash
find "$fixture" -type f \
  -size +0c -size -1048576c -print
```

This returns B and C. The positive-byte test removes A. To find A directly, use `-empty` with `-type f`; without the type restriction, `-empty` can also match empty directories.

## Keep the case that fooled you

If you missed a prediction, turn that boundary into a recall question. “Does a one-byte file match GNU `-size -1M`?” has a useful answer: **no, because its rounded MiB count is 1**. Pair it with “What finds nonempty files below one MiB?” and the byte-based command above.

Answer before checking, then revisit the missed cases on later days. Keep the ledger nearby until you can reconstruct the matches from the rounding rule. That gives you a way to check a new command when the next size limit changes.

*Production and verification note: This article was drafted and edited with AI assistance, and its illustration was AI-generated. All 12 result rows were executed using GNU findutils 4.11.0, compiled from the [official release](https://ftp.gnu.org/gnu/findutils/findutils-4.11.0.tar.xz) on macOS 26.6.1 ARM64. The release's included documentation and source were also inspected. The commands weren't tested on Linux or with BSD find.*
