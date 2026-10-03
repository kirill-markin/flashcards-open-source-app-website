---
title: "Linux File Permissions Practice: Read Modes and Predict Access"
description: "Practice Linux file permissions with chmod examples, a multi-user worksheet, and explained answers covering numeric modes, directory access, and narrow fixes."
date: "2026-10-03"
image: "/blog/linux-file-permissions-practice.png"
keywords:
  - "Linux file permissions practice"
  - "chmod practice"
  - "Linux directory permissions"
  - "chmod numeric and symbolic modes"
  - "read write execute permissions"
---

A file with mode `004` can be readable by a stranger while its owner gets denied. Another file can have the right read bit and still be unreachable. The digits tell you which permissions exist. You also need to work out whose bits apply and whether the path lets them through.

This Linux file permissions practice gives you three users, nine objects, and a worksheet to solve on paper. Predict each person's access before reading the answers. Then try two repairs that change just the missing bit.

![A woman slides back a wooden courtyard gate bolt, with a blue bicycle visible beyond the gate.](/blog/linux-file-permissions-practice.png)

## Turn the letters into a mode

Read `-rw-r-----` as `- | rw- | r-- | ---`. The first character is the file type: `-` for a regular file, `d` for a directory. The three permission groups belong to **owner, group, other**, in that order. A dash marks an absent permission.

For a regular file, `r` allows reading its contents, `w` allows writing them, and `x` allows execution. The [Linux inode reference](https://man7.org/linux/man-pages/man7/inode.7.html) lists the corresponding permission bits. The files in this worksheet are text files; we won't try to execute them.

To get an octal digit, add the enabled bits: **read = 4, write = 2, execute = 1**. Thus `rw-` becomes `6`, `r--` becomes `4`, and `---` becomes `0`. Our example is `640`.

A numeric mode supplies the new permissions:

```bash
chmod 640 ./lab/shared/notes.txt
```

Symbolic modes describe a change. Name the class explicitly: `u` for owner, `g` for group, `o` for other. Use `+` to add permissions, `-` to remove them, or `=` to replace that class's ordinary permissions. The [GNU chmod manual](https://man7.org/linux/man-pages/man1/chmod.1.html) documents both forms.

Calculate these separately, starting from `640` each time:

| Command | New mode | What changes |
| --- | --- | --- |
| `chmod g+x ./lab/shared/notes.txt` | `650` | Group keeps read and gains execute. |
| `chmod g=x ./lab/shared/notes.txt` | `610` | Group has execute only; its read bit is removed. |
| `chmod u-w ./lab/shared/notes.txt` | `440` | Owner loses write. The other classes keep their bits. |

The first two commands illustrate the difference between adding and replacing. They aren't proposed settings for these text files.

## Check the user, the path, and the operation

Choose a class separately for every object along the path:

- The user owns this object: use **owner**.
- Otherwise, its group matches the user's primary or a supplementary group: use **group**.
- Otherwise: use **other**.

Once a class matches, stop. An owner doesn't borrow the group or other bits. A group member doesn't switch to other when group access is denied. The [Linux pathname-resolution manual](https://man7.org/linux/man-pages/man7/path_resolution.7.html) explains this selection and directory search checks.

For directories, `x` means **search**: permission to look up a name inside that directory. Knowing a filename helps when directory read is missing; it doesn't get you past missing search permission.

| Intended operation | Required permissions under the worksheet assumptions |
| --- | --- |
| Read an existing file | Search (`x`) on every directory in its path, then read (`r`) on the file. |
| Open an existing file and append to its contents | Directory search along the path, then file write (`w`). |
| List names in a directory | Search on earlier directories and read on the directory being listed. |
| Look up a known filename, or enter a directory with `cd` | Search on earlier directories and on the directory being searched or entered. |
| Remove a known file's name from its directory | Search along the path and both write and search (`wx`) on the containing directory. |

Reading a directory gives you names, not permission to open their files. Opening a directory stream is covered by [opendir(3)](https://man7.org/linux/man-pages/man3/opendir.3.html); opening files and the accompanying path checks are covered by [open(2)](https://man7.org/linux/man-pages/man2/open.2.html).

Appending here means opening the existing file for writing and adding content directly. An editor that saves by creating a replacement file needs different permissions. Removing a filename changes the containing directory, so a read-only file can still have a removable name. The [unlink manual](https://man7.org/linux/man-pages/man2/unlink.2.html) gives the directory checks and restrictions, including the sticky bit.

## Work through Mina, Bo, and Eli's filesystem

This is an imaginary setup, not the output of a test session. Use ordinary, nonprivileged users whose filesystem user and group IDs match their account IDs. Exclude ACLs, capabilities, symlinks, special permission bits (including the sticky bit), immutable or append-only flags, read-only mounts, and SELinux/AppArmor restrictions. We're isolating ordinary mode-bit checks.

Mina owns every object. Their groups are:

| User | Primary group | Supplementary groups relevant here |
| --- | --- | --- |
| Mina | `study` | None |
| Bo | `bo` | `study` |
| Eli | `eli` | None; Eli isn't in `study`. |

Every object below has group `study`. All three start in the same accessible working directory containing `lab`; all earlier parents are accessible too. Always use the paths shown, starting there. There are no already-open file or directory handles. Each question starts from this original state, including both repairs.

| Path | Mode as shown in a long listing | Octal mode |
| --- | --- | --- |
| `./lab` | `drwxr-xr-x` | `755` |
| `./lab/shared` | `drwxr-x---` | `750` |
| `./lab/shared/notes.txt` | `-rw-r-----` | `640` |
| `./lab/shared/puzzle.txt` | `-rw----r--` | `604` |
| `./lab/lookup` | `drwx--x--x` | `711` |
| `./lab/lookup/notice.txt` | `-rw-r--r--` | `644` |
| `./lab/lookup/owner-trap.txt` | `-------r--` | `004` |
| `./lab/drop` | `drwx-wx---` | `730` |
| `./lab/drop/frozen.txt` | `-r--r--r--` | `444` |

All filenames are known in advance. For questions 1–9, write **yes or no for each user** and identify the deciding permission. For removal, answer whether the directory-entry operation is allowed, regardless of any interactive command prompt.

1. Can they list names in `./lab/shared`?
2. Can they read `./lab/shared/notes.txt`?
3. Can they read `./lab/shared/puzzle.txt`?
4. Can they list names in `./lab/lookup`?
5. Can they read `./lab/lookup/notice.txt`?
6. Can they read `./lab/lookup/owner-trap.txt`?
7. Can they enter `./lab/drop` with `cd`?
8. Can they open `./lab/drop/frozen.txt` and append directly to it?
9. Can they remove the known name `./lab/drop/frozen.txt`?

For the repairs, Mina runs the command. Keep every unrelated permission bit unchanged:

10. Give Bo read access to `./lab/shared/puzzle.txt`. Which object's permission needs changing?
11. Starting again from the original state, give Eli read access to that same known file. Which bit needs changing?

## Compare your answers

| Question | Mina | Bo | Eli |
| --- | --- | --- | --- |
| 1. List `shared` | Yes | Yes | No |
| 2. Read `notes.txt` | Yes | Yes | No |
| 3. Read `puzzle.txt` | Yes | No | No |
| 4. List `lookup` | Yes | No | No |
| 5. Read `notice.txt` | Yes | Yes | Yes |
| 6. Read `owner-trap.txt` | No | No | Yes |
| 7. Enter `drop` | Yes | Yes | No |
| 8. Append to `frozen.txt` | No | No | No |
| 9. Remove `frozen.txt` | Yes | Yes | No |

**Questions 1–3:** On `lab`, Mina selects owner `rwx`; Bo selects group `r-x`; Eli selects other `r-x`. Everyone gets through that first directory. At `shared`, Mina and Bo have read and search, while Eli has neither. Mina reads both files. Bo reads `notes.txt` but selects group `---` on `puzzle.txt`. Its other read bit doesn't apply to him. Eli would select that read bit, but `shared` blocks the path first.

**Questions 4–6:** Mina has owner `rwx` on `lookup`, so she can list its names. Bo and Eli each get search without read there. They can reach a known filename, and `notice.txt` grants each the file read bit they need. For `owner-trap.txt`, Mina selects owner `---`, even though she's also in `study`. Bo selects group `---`. Only Eli selects other `r--`. Owning a file lets Mina change its mode, but it doesn't give her a read bit under the current mode.

**Questions 7–9:** Mina gets `rwx` on `drop`; Bo gets `-wx`. Both can enter it and remove a known filename. Bo doesn't need to list the directory first. No class has write on `frozen.txt`, so none can append. Eli's `---` on `drop` blocks entry and removal. The file's `444` protects its contents from direct writing in this exercise; it doesn't protect its name from Mina or Bo removing it.

### Repair 10: Bo needs file read

Bo already has search on `lab` and `shared`. Mina adds the missing group read bit:

```bash
chmod g+r ./lab/shared/puzzle.txt
```

The file changes from `604` to `644`. No directory needs a change. This grants read to the file's group, which includes Bo.

### Repair 11: Eli needs directory search

In the original state, `puzzle.txt` already grants other read. Mina opens the blocked part of the path:

```bash
chmod o+x ./lab/shared
```

`shared` changes from `750` to `751`; the file stays `604`. Eli can now look up `puzzle.txt` and read it. He still can't list `shared` or read `notes.txt`.

This one-bit repair grants search to the whole other class. It lets those users look up other known names in `shared` too, with access then decided by each object's permissions. A small change can still affect many users and files.

Mina can make both changes because she owns the affected objects and can resolve their paths. For ordinary users, group membership and write access don't by themselves authorize `chmod`; see the ownership requirement in [chmod(2)](https://man7.org/linux/man-pages/man2/chmod.2.html).

## Review the decisions you missed

Keep a card for an answer you got wrong, with enough context to explain it. These cards use the worksheet's assumptions and accessible earlier parents:

| Front | Back |
| --- | --- |
| File `604`, searchable path. You're a group member but not the owner. Can you read it? | No. Your group class is `0`; other `4` doesn't apply. |
| Directory `711`, file `644`. You select other and know the filename. Can you read the file and list the directory? | Read the file: yes. List names: no. The directory grants search without read. |
| Known file `444` in directory `730`. You select group. Can you append or remove the name? | Append: no file write. Remove: yes; directory group has `wx`, and no excluded restriction applies. |
| In the original worksheet, which bit must Mina add so Bo can read `puzzle.txt`? | File group read: `chmod g+r ./lab/shared/puzzle.txt`, changing `604` to `644`. |
| In the original worksheet, which bit must Mina add so Eli can read the known `puzzle.txt`? | Directory other search: `chmod o+x ./lab/shared`, changing `750` to `751`. The file stays `604`. |

On review, name the applicable class, check the directories, and identify the operation before revealing the answer. Keep only the cards you need. The [terminal-command flashcard guide](/blog/how-to-learn-terminal-commands-with-flashcards/) explains how to turn command mistakes into useful prompts. The [find -mtime worksheet](/blog/find-mtime/) gives you another set of results to predict before checking.

For a real path, inspect before changing anything. Using the worksheet's names, the read-only commands would be:

```bash
id
ls -ld . ./lab ./lab/shared
ls -l ./lab/shared/puzzle.txt
```

[`id`](https://man7.org/linux/man-pages/man1/id.1.html) shows your user and groups. In [`ls -ld`](https://man7.org/linux/man-pages/man1/ls.1.html), `-d` shows the directory itself and `-l` uses a long listing. Check each directory component, not just the file at the end, and explain the blocked permission before choosing a repair.
