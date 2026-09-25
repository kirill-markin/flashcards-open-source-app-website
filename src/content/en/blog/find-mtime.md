---
title: "Find -mtime Explained: +1, -1, and 24-Hour Boundaries"
description: "Understand GNU find -mtime with a worked file list, 24-hour age buckets, calendar-day comparisons, and short practice questions with explained answers."
date: "2026-09-25"
image: "/blog/find-mtime.png"
keywords:
  - "find -mtime"
  - "find -mtime +1"
  - "find -mtime -1"
  - "find files modified yesterday"
  - "GNU find time examples"
---

A file modified 30 hours ago does **not** match GNU `find -mtime +1`. It matches `-mtime 1`. That small difference can make a reasonable-looking command leave out the files you expected.

The useful mental model is to count completed 24-hour periods before comparing the number. GNU describes this rounding in its [age-range reference](https://www.gnu.org/software/findutils/manual/html_node/Age-Ranges.html). Let's work through a file list where you can see the difference.

This lesson covers **GNU find**, with modification timestamps in the past. Every command lists files with `-print`; the worksheet is hypothetical, not a transcript of an executed experiment.

![An orchard worker placing an apple into a partly filled basket beside two full baskets.](/blog/find-mtime.png)

## Compare the bucket, not the hours

Without `-daystart`, divide the file's age by 24 hours and round down. Call that integer its age bucket. A 30-hour-old file belongs to bucket 1; a 50-hour-old file belongs to bucket 2.

The sign compares that number: no sign means equal, `+` means greater, and `-` means less. These are the [GNU find numeric-test rules](https://man7.org/linux/man-pages/man1/find.1.html).

| Test | Bucket comparison | Example ages that match |
| --- | --- | --- |
| `-mtime 0` | Equal to 0 | 12 hours, 23 hours |
| `-mtime -1` | Less than 1 | 12 hours, 23 hours |
| `-mtime 1` | Equal to 1 | 25 hours, 47 hours |
| `-mtime +0` | Greater than 0 | 25 hours, 47 hours, 49 hours |
| `-mtime +1` | Greater than 1 | 49 hours, 72 hours |

The same reasoning puts `-mtime +30` at the **31-day threshold**, not the 30-day threshold. A file aged 30 days and 12 hours still has bucket 30.

Treat this as the documented day-bucket model, not a guarantee about an exact cutoff instant. GNU's implementation has edge details: for example, in [findutils 4.11.0's time comparisons](https://git.savannah.gnu.org/cgit/findutils.git/tree/find/pred.c?h=v4.11.0), the older-than comparison is strict. If equality at a timestamp matters, use explicit timestamp comparisons and choose their endpoints deliberately. Our age worksheet stays a minute away from the cutoffs.

To list regular files under `./notes` modified within roughly the last 24 hours:

```bash
find ./notes -type f -mtime -1 -print
```

Here `-type f` selects regular files. `-mtime` checks modification time: when file content was modified, not when the file was created.

## Predict the file list before reading the answers

Imagine each command starts at exactly **September 25, 2026, 12:00:00 UTC**. There are seven regular files under `./notes`, with these modification times. Nothing changes during the exercise.

| File | Modified at, UTC | Age at our fixed clock |
| --- | --- | --- |
| A.txt | September 25, 00:01 | 11 hours, 59 minutes |
| B.txt | September 24, 18:00 | 18 hours |
| C.txt | September 24, 12:01 | 23 hours, 59 minutes |
| D.txt | September 24, 11:59 | 24 hours, 1 minute |
| E.txt | September 24, 00:01 | 35 hours, 59 minutes |
| F.txt | September 23, 12:01 | 47 hours, 59 minutes |
| G.txt | September 23, 11:59 | 48 hours, 1 minute |

Use the command above, replacing its time test for each question. Write down the matching letters; their display order doesn't matter.

1. Which files match `-mtime -1`?
2. Which match `-mtime 1`?
3. Which match `-mtime +1`?
4. Which test selects buckets greater than 0, and which files does it return?

### Check your reasoning

1. **A, B, C.** They haven't completed their first 24-hour period. D has crossed into the next bucket.
2. **D, E, F.** All have completed one period, but not two. The number `1` describes a range, not one precise age.
3. **G only.** Its bucket is 2. F is almost 48 hours old, but its bucket is still 1, which isn't greater than 1.
4. **`-mtime +0`: D, E, F, G.** Each has completed at least one 24-hour period.

If question three caught you, keep F and G as your practice pair. Explaining why one fails and the other passes is more useful than reciting “older than a day.”

## “Yesterday” needs a calendar boundary

At our noon clock, B was modified yesterday but is only 18 hours old. It therefore fails plain `-mtime 1`.

GNU documents this command for files modified yesterday. Place `-daystart` **before** the time test:

```bash
TZ=UTC find ./notes -daystart -type f -mtime 1 -print
```

The [day-start option](https://www.gnu.org/software/findutils/manual/html_node/Age-Ranges.html) shifts subsequent age tests to a midnight reference. `TZ=UTC` makes that reference UTC; it doesn't freeze the clock. Under our hypothetical clock, the answer is **B, C, D, E**. Putting `-daystart` after `-mtime 1` won't change that earlier test.

Be careful with files stamped exactly at midnight. In findutils 4.11.0, the [day-start parser](https://git.savannah.gnu.org/cgit/findutils.git/tree/find/parser.c?h=v4.11.0) and time comparison produce a window **after yesterday's midnight, through today's midnight inclusive**. That differs at both endpoints from the calendar date, which includes yesterday's midnight and excludes today's. None of our seven files sits on either endpoint.

## Explicit timestamps make the endpoints visible

You can also name timestamp bounds:

```bash
find ./notes -type f \
  -newermt '2026-09-24 00:00:00 UTC' \
  ! -newermt '2026-09-25 00:00:00 UTC' -print
```

Read this as **after the first timestamp, up to and including the second**: `(lower, upper]`. GNU's [timestamp comparison reference](https://www.gnu.org/software/findutils/manual/html_node/Comparing-Timestamps.html) specifies that equality fails a newer-than comparison; negating that test includes equality.

The command returns **B, C, D, E** from our worksheet. Now consider two extra files: one stamped September 24 at exactly 00:00:00 UTC, the other September 25 at exactly 00:00:00 UTC. Which passes?

**Only the September 25 file.** The September 24 file equals the lower bound and fails `-newermt`. The September 25 file equals the upper bound, so it passes `! -newermt`. Naming yesterday's and today's dates doesn't make this a calendar-yesterday interval: that would require `[lower, upper)` instead.

## Make cards from the mistakes

Keep the task on the front and a short explanation on the back:

| Front | Back |
| --- | --- |
| GNU find, no daystart: does a 30-hour-old file match `-mtime +1`? | No. Its bucket is 1; `+1` requires a bucket greater than 1. |
| At the worksheet clock, does B match plain `-mtime 1`? Explain. | No. Yesterday at 18:00 is only 18 hours ago; its bucket is 0. |
| Does `-newermt LOWER ! -newermt UPPER` include a file stamped exactly LOWER? | No. The interval is `(LOWER, UPPER]`: the lower endpoint is excluded and the upper endpoint is included. |

The [100-card Linux command-line deck](/catalog/packages/linux-command-line-flashcards/) covers Linux foundations; it isn't a dedicated drill for this worksheet. Add your own missed boundary cases, then use the [terminal-command study guide](/blog/how-to-learn-terminal-commands-with-flashcards/) to turn commands you actually need into recall practice.
