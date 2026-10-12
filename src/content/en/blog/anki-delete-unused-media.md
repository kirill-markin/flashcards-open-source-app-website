---
title: "Anki Delete Unused Media: Check Files Before You Remove Them"
description: "Audit Anki's unused media list, protect template images, delete only a verified batch, and restore files before emptying the media trash."
date: "2026-10-13"
image: "/blog/anki-delete-unused-media.png"
keywords:
  - "Anki delete unused media"
  - "Anki Check Media"
  - "Anki unused files"
  - "Anki media trash"
  - "restore deleted Anki media"
  - "collection.media cleanup"
---

Deleting an Anki deck can leave its pictures and recordings in `collection.media`. Tools → Check Media can find those leftovers. It can also list a logo that still appears on every card, because the checker doesn't read card templates.

**Before using Delete Unused, account for the entire unused list, protect files that still matter, and run the check again.** Move the verified batch to trash, check your retained cards, and only then consider permanent removal.

This guide covers intentional cleanup in desktop Anki. The documentation and released **Anki 26.09.3** source were checked on October 13, 2026. The three-file example below is hypothetical.

![A stagehand puts a plain wooden doorstop back to use beside an open crate of retired theatre props.](/blog/anki-delete-unused-media.png)

## Start with a collection you intend to keep

If a wanted deck has disappeared, leave unused media alone. Those files may belong to the notes you're trying to recover. Protect any surviving copy before syncing; use the [deleted Anki deck recovery guide](/blog/recover-deleted-anki-deck/) instead.

For a healthy collection you're deliberately cleaning, finish syncing on your devices first, including media. Anki's [syncing manual](https://docs.ankiweb.net/syncing.html) explains that deletions made after media is fully in sync reach AnkiWeb on the following sync. If you delete before that, files already on AnkiWeb can download again.

Pause studying and editing on other devices. Disable automatic syncing in desktop preferences while you audit, so opening or closing Anki doesn't send the deletion before you've checked it. Record the setting to restore later. If you don't use AnkiWeb, the sync steps don't apply.

## Keep an independent copy of the media

Make these copies before deleting anything:

1. In **File → Export**, select **Anki collection package (.colpkg)**, enable **Include Media**, and save outside Anki's data folder. This preserves your collection, including scheduling, with media included. See the [exporting manual](https://docs.ankiweb.net/exporting.html).
2. Close Anki completely. Copy the profile's **collection.media** folder to a separate safe location. Copy **media.trash** too if it exists and contains files you may want back. Keep the originals in place.

The raw folder copy preserves the files you're about to audit, including those with no surviving note reference. Don't rely on an export alone to protect orphaned files. Automatic backups and **File → Create Backup** omit media, as Anki's [backup documentation](https://docs.ankiweb.net/backups.html) explains. They won't rescue a deleted recording on their own.

On standard installations, profiles are under `%APPDATA%\Anki2` on Windows, `~/Library/Application Support/Anki2` on macOS, and `~/.local/share/Anki2` on Linux. Open the folder named for the profile you're cleaning. Custom installations can differ; use the [file locations manual](https://docs.ankiweb.net/manual/files#user-data) to find yours. Keep Anki closed during copying.

## Audit the report across all decks

Reopen Anki and choose **Tools → Check Media**. Keep a copy of the report before acting.

- **Unused:** the file is present, but the checker found no note reference that marks it as used.
- **Missing:** a note references a file that isn't present.

These are separate problems, described in the [media manual](https://docs.ankiweb.net/media.html). If wanted images were already broken, use the [Anki images troubleshooting guide](/blog/anki-images-not-showing/) before proceeding with cleanup.

Check Media scans the open profile's collection across all its decks. Selecting one deck doesn't limit deletion to that deck. Suspended cards still have notes, and those notes are searched by the [released checker](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/media/check.rs).

Suppose your unused list contains these three files:

| Reported unused file | What you discover | Decision before deletion |
| --- | --- | --- |
| `old-lesson.mp3` | A recording from a deleted lesson, with no remaining use or recovery need | Remove once the rest of the batch is verified. |
| `course-logo.png` | The front template displays it on retained cards | Keep and protect the static template reference. |
| `apple.jpg` | A vocabulary template constructs its filename from a word field | Stop and repair the reference. |

Only one file is ready to go. Inspect listed files, search retained notes without a deck filter, and check relevant templates. A familiar filename isn't proof. If you can't establish what a file does, leave the batch alone.

## Make retained files visible to the checker

For an image or sound shared by a template, use a filename beginning with an underscore, such as `_course-logo.png`. Rename the actual file and update **every reference** to it, including templates or styling. Changing just the file breaks the old reference. Anki documents the convention in [Static Sounds/Images](https://docs.ankiweb.net/manual/templates/fields#static-sounds/images).

The underscore keeps the asset out of the unused list. Use it for genuine shared template assets; renaming every uncertain file this way would hide an unfinished audit.

Per-note media belongs in the note field as a complete reference. A Picture field can contain `<img src="apple.jpg">`, with `{{Picture}}` on the template. An Audio field can contain `[sound:apple.mp3]`, displayed with `{{Audio}}`.

A template such as `<img src="{{Word}}.jpg">` constructs the filename during rendering. Anki's [field-reference documentation](https://docs.ankiweb.net/manual/templates/fields#field-references) warns that these constructions aren't supported by unused-media checking and import/export. Replace them with complete references in the affected notes before cleanup.

Preview retained cards with images, play their recordings, and check both sides of cards using the shared template. Record which cards you checked; they're your baseline for comparison. Run Check Media again and audit the new list.

## Delete the whole verified list

In Anki 26.09.3, **Delete Unused** passes the **entire reported unused list** to the deletion operation. Highlighting a filename in the report doesn't select a smaller batch. The [released desktop dialog source](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/mediacheck.py) confirms this behavior.

Proceed only when every file in the current list is expendable. Choose Delete Unused, confirm, and let it finish. Leave trash intact for now.

Open the same baseline cards. Check images on both sides, play audio, and inspect shared template assets. Run Check Media again and compare missing files with the saved report. Zero missing files is useful, but it doesn't prove that templates still render correctly.

In this release, removed files go into Anki's **media.trash** folder beside `collection.media`, as the [released file-management source](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/media/files.rs) shows. The media manual describes the operating system's trash; that wording doesn't match this release's implementation. Moving files between these folders doesn't by itself reclaim their disk space.

## Restore mistakes while the files are still there

If a retained card breaks, keep syncing paused. Open **Tools → Check Media** again and choose **Restore Trash**. In this release, it restores all files currently in media trash, including earlier deletions. It doesn't select just your latest batch.

If a different file already occupies the same name, restoration may give the recovered file another filename. Inspect the file and its note or template reference; the card may still point to the wrong content. Both behaviors follow the [released restoration code](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/media/check.rs).

If trash has already been emptied, close Anki and recover the needed files from your independent media copy into `collection.media`. Match the filenames to their references, and don't overwrite a different existing file. Reopen Anki, run Check Media, and inspect the affected cards. A media-free automatic backup can't supply those files.

Repair the cause and check your baseline before trying deletion again.

## Empty trash, then resume syncing

When retained cards work and you no longer need **any** files in `media.trash`, choose **Empty Trash**. This permanently removes its contents, including older files. Inspect the whole trash folder before doing so.

Sync the checked collection manually and finish media sync on your other devices. A forced one-way collection download isn't a media rollback: Anki's [syncing manual](https://docs.ankiweb.net/syncing.html) says media changes continue to merge normally.

Confirm that your retained images, recordings, and shared assets work where you actually study. Then restore the automatic-sync setting you recorded at the start. Keep the independent backup until those checks are complete.
