---
title: "Find -mtime vs -ctime: Trace Which Timestamp Changed"
description: "Compare find -mtime and -ctime with a checked permissions-and-edit lab. See why ctime isn't creation time and an old mtime doesn't prove unchanged content."
date: "2026-10-26"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/b6d8f244a2eabfdeb32175c7a8c1bbda1b5a74b117ce83cb4af4dc2b96e0b045.webp"
keywords:
  - "find -mtime vs -ctime"
  - "ctime is not creation time"
  - "chmod changes ctime"
  - "file modification time unchanged"
  - "atime vs mtime vs ctime"
---

One six-byte file matched an old-mtime search, stopped matching after a rewrite, then matched again after its saved timestamp was restored. Its final contents were different. Earlier in the same lab, changing its permissions advanced ctime while leaving mtime and the bytes alone.

The distinction behind `find -mtime` vs `-ctime` is the field each test reads: **mtime tracks content modification; ctime tracks status changes, including writes and permission changes.** Both are timestamps you need to interpret, rather than a history of what happened to the file.

![A repairer tightens a leather handle bracket on a closed, worn olive suitcase](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/b6d8f244a2eabfdeb32175c7a8c1bbda1b5a74b117ce83cb4af4dc2b96e0b045.webp)

## Pick the timestamp before picking the age

For regular files, the three ordinary time tests inspect these fields:

| Field | Find test | What to look for |
| --- | --- | --- |
| Modification time, mtime | `-mtime` | Content modification, such as a write. Programs can also set this field explicitly. |
| Status change time, ctime | `-ctime` | Changes to file status, such as mode or ownership changes, and writes. |
| Access time, atime | `-atime` | Access to contents, subject to filesystem and mount policies. |

The [GNU find manual](https://man7.org/linux/man-pages/man1/find.1.html) defines these timestamp tests. The [GNU Coreutils timestamp reference](https://www.gnu.org/software/coreutils/manual/html_node/File-timestamps.html) explains why a permissions change updates ctime while leaving mtime alone.

On Unix, **ctime is not creation time**. A filesystem may expose a separate birth timestamp, often called birthtime or btime; support depends on the filesystem and platform. Don't use `find -ctime` to answer “when was this file first created?”

Writing file content normally updates both mtime and ctime. Calling ctime “metadata time” can obscure that overlap: the [Linux inode manual](https://man7.org/linux/man-pages/man7/inode.7.html) includes writes among ctime updates.

GNU find's ordinary day tests round the timestamp's age down to completed 24-hour periods. These two commands can therefore return the same file:

```bash
find ./notes -type f -mtime +1 -print
find ./notes -type f -ctime -1 -print
```

The first selects an mtime age bucket greater than 1. The second selects a ctime age bucket below 1. A file whose mtime is three days old and whose ctime is a few seconds old matches both. The [GNU find manual](https://man7.org/linux/man-pages/man1/find.1.html) documents the rounding; the separate [find -mtime worksheet](/blog/find-mtime/) works through signs and boundary cases. Here, the timestamps stay well away from those boundaries so we can concentrate on which field changes.

## Follow one file through three changes

The recorded experiment ran on **macOS 26.6.1, arm64, with Python 3.14.7 and native `/usr/bin/find` on October 26, 2026**. That is BSD/macOS find, so these observations aren't a GNU/Linux execution report. The GNU and Linux explanations above come from their documentation.

The setup creates `note.txt` containing `alpha` plus a newline, sets mode `600`, and assigns an mtime of three days and 30 minutes ago. This is the **baseline snapshot**. Its ctime is already recent because the setup just created the file and set its timestamps. Then the experiment performs three operations:

1. Change permissions to `640`, giving the group read permission.
2. Write `bravo` plus a newline, keeping the length at six bytes.
3. Restore the baseline mtime while retaining the current atime.

The [Linux permissions practice](/blog/linux-file-permissions-practice/) explains the mode digits and whose permission bits apply. In this experiment, chmod supplies a status change without a content change.

### What changed at each step

“Matches” means find printed the temporary path ending in `note.txt`; “no match” means empty stdout. Every recorded find command exited successfully with empty stderr. Each mtime is compared with the saved baseline. Each later ctime is compared with the preceding snapshot.

| Snapshot | Mode | Bytes | mtime equals baseline? | ctime | `-mtime +1` | `-ctime -1` |
| --- | --- | --- | --- | --- | --- | --- |
| Baseline | `600` | `alpha\n` | Yes | Already recent | Matches | Matches |
| After chmod | `640` | `alpha\n` | Yes | Newer | Matches | Matches |
| After rewrite | `640` | `bravo\n` | No | Newer | No match | Matches |
| After restoring mtime | `640` | `bravo\n` | Yes | Newer | Matches | Matches |

All four snapshots have a size of six bytes. Chmod advanced ctime without changing mtime, size, or content. The rewrite changed the bytes without changing their length. Restoring mtime made the old-mtime search match again, while the file still contained `bravo\n`.

Notice that `-ctime -1` matched at **every** step. Chmod advanced ctime, but it didn't cause a new match: the timestamp was already recent enough. To establish that ctime changed, the lab compared the timestamp values themselves. A search result can stay the same through several updates.

### Repeat the sequence in an isolated directory

Save the script as `timestamp_lab.py` and run `python3 timestamp_lab.py` with Python 3.14 on a Unix system. It uses the standard library, creates a fresh temporary directory, and removes that directory when it finishes. It doesn't need elevated privileges. The last line selects `/usr/bin/find` explicitly; change that path if the executable you intend to test lives elsewhere.

```python
from pathlib import Path
from tempfile import TemporaryDirectory
import os
import subprocess
import time


def report(
    label: str,
    path: Path,
    baseline: os.stat_result,
    previous: os.stat_result,
    find_bin: str,
) -> os.stat_result:
    current: os.stat_result = path.stat()
    content: bytes = path.read_bytes()
    print(label)
    print("mode:", oct(current.st_mode & 0o777))
    print("mtime equals baseline:", current.st_mtime_ns == baseline.st_mtime_ns)
    print("ctime newer than previous:", current.st_ctime_ns > previous.st_ctime_ns)
    print("size:", current.st_size, "bytes:", repr(content))
    tests: tuple[tuple[str, str], ...] = (("-mtime", "+1"), ("-ctime", "-1"))
    for predicate, age in tests:
        result: subprocess.CompletedProcess[str] = subprocess.run(
            [find_bin, str(path.parent), "-type", "f", predicate, age, "-print"],
            check=True,
            capture_output=True,
            text=True,
        )
        print(predicate, age, "stdout:", repr(result.stdout))
        print("stderr:", repr(result.stderr))
    return current


def run_lab(find_bin: str) -> None:
    with TemporaryDirectory(prefix="find-times-") as directory:
        path: Path = Path(directory) / "note.txt"
        path.write_bytes(b"alpha\n")
        path.chmod(0o600)
        old_ns: int = time.time_ns() - (3 * 24 * 60 * 60 + 30 * 60) * 1_000_000_000
        os.utime(path, ns=(old_ns, old_ns))
        baseline: os.stat_result = path.stat()
        previous: os.stat_result = report("baseline", path, baseline, baseline, find_bin)

        time.sleep(1.1)
        path.chmod(0o640)
        previous = report("chmod", path, baseline, previous, find_bin)

        time.sleep(1.1)
        path.write_bytes(b"bravo\n")
        previous = report("rewrite", path, baseline, previous, find_bin)

        time.sleep(1.1)
        current: os.stat_result = path.stat()
        os.utime(path, ns=(current.st_atime_ns, baseline.st_mtime_ns))
        report("restore mtime", path, baseline, previous, find_bin)


run_lab("/usr/bin/find")
```

[`os.utime`](https://docs.python.org/3.14/library/os.html#os.utime) accepts the pair `(atime_ns, mtime_ns)`. Using the saved integer nanosecond field avoids a floating-point conversion when restoring mtime. The filesystem still determines its timestamp precision. The 1.1-second pauses separated changes in the recorded run; they don't freeze the clock or establish identical precision on every filesystem.

The baseline report prints `ctime newer than previous: False` because it compares the baseline with itself. Later reports compare successive snapshots. Reading bytes for each report may affect atime, so this lab doesn't measure access-time behavior.

## Make five predictions

Use the sequence above to answer these questions. Give a reason before checking the answers.

1. Immediately after chmod, would a recent-mtime search such as `-mtime -1` find this file? Why does `-ctime -1` still find it?
2. The baseline mtime is three days and 30 minutes old. Does that establish that the file existed three days ago?
3. The baseline and final snapshots have equal size and equal mtime. What tells you whether their contents match?
4. You find an unrelated file with an old mtime and a recent ctime. Can you conclude that someone ran chmod, or identify who changed it?
5. A read is followed by an unchanged atime. Can you conclude that the read didn't happen?

### Check your reasoning

1. **`-mtime -1` wouldn't find it; `-ctime -1` would.** Its mtime still points three days back, while its ctime is recent. The measured ctime advanced after chmod, although that search already matched at baseline. The tests inspect different fields.
2. **No.** The lab created the file now and explicitly assigned an old mtime. That timestamp alone doesn't establish creation time or earlier existence.
3. **The bytes distinguish them.** The baseline contains `alpha\n`; the final file contains `bravo\n`. Equal size and equal mtime don't establish equal content. For a real file, compare with a saved version; those two metadata fields alone can't tell you whether the bytes changed.
4. **You can't establish the operation or actor from those fields.** A permissions change fits, but a write followed by mtime restoration also fits—the lab demonstrates both paths. Ctime stores a timestamp, not the command, user, or earlier states. Use other evidence, such as existing audit records or version history, to investigate a cause.
5. **No.** Linux access-time behavior depends on filesystem, mount options such as `noatime` and `relatime`, and how a file is opened. The [inode documentation's atime section](https://man7.org/linux/man-pages/man7/inode.7.html) describes these limits. Treat atime as a filesystem field with update rules, rather than a complete read log.

When diagnosing a real file, separate the questions. `-mtime` filters by the stored modification time; `-ctime` filters by the stored status-change time. Creation needs a separate supported birth timestamp, and detecting different bytes needs content evidence. Then check the command's age rule. This order helps explain a surprising file list without assigning a cause the timestamps can't establish.

## Keep the distinction you missed

Turn a wrong prediction into one small recall prompt. These examples retain the conditions that make the answers meaningful:

| Front | Back |
| --- | --- |
| Unix file: change mode `600` to `640` without writing content. Which of mtime and ctime changes? | Ctime updates; mtime stays unchanged. Status includes permission changes. |
| In the lab, why does `-mtime +1` match again after writing `bravo\n`? | The saved old mtime was restored. The bytes still differ from the baseline. |
| Can an old mtime plus recent ctime identify chmod as the cause? | No. Several operations fit, including a write followed by mtime restoration. Ctime doesn't record the cause. |

Answer before revealing the back, then revisit missed distinctions in spaced review sessions to help retain them long term. Keep running small experiments too: recall prompts test whether you remember a rule, and a temporary directory lets you check your prediction against filesystem behavior.

The [100-card English Linux command-line deck](/catalog/packages/linux-command-line-flashcards/) covers foundations including `find`, `touch`, and `chmod`. Use it as an optional starting point for command recall. The timestamp lab and answers are complete above; the deck doesn't provide a dedicated ctime exercise set.

*Production note: This article was drafted and edited with AI assistance. Automation ran the reported filesystem experiment on macOS with native find; the GNU/Linux explanations come from documentation.*
