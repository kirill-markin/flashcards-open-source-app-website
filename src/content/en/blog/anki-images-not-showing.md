---
title: "Anki Images Not Showing? Find Where the Media Is Missing"
description: "Trace missing Anki images from your computer through AnkiWeb to your phone. Separate unfinished media sync, absent files, and filename-case mismatches."
date: "2026-09-23"
image: "/blog/anki-images-not-showing.png"
keywords:
  - "Anki images not showing"
  - "Anki missing media"
  - "AnkiMobile images not syncing"
  - "Anki Check Media"
---

Your Anki card can arrive on your phone before its picture does. Readable questions and answers don't prove the images have finished syncing. A broken picture can also mean the file was lost, never included, or saved under a slightly different filename.

**Start with one broken card. Check it on the source computer, on AnkiWeb, and on the receiving device.** That gives you a place to investigate instead of repeatedly syncing everything.

This workflow follows Anki's official documentation, checked September 23, 2026. The example below is illustrative, not a report of a hands-on test.

![A server checks a meal waiting at the kitchen hatch while a set café table still has no food](/blog/anki-images-not-showing.png)

## Find the first place the picture fails

Choose a card you can recognize by its question. The source is the device where you added or imported it; the target is where you're trying to study now. Use the same AnkiWeb account on both.

If pictures disappeared after a deletion or cleanup, protect any surviving copy before syncing again. On a computer that still has the images, export an **Anki collection package (.colpkg)** with **include media** enabled and keep it somewhere safe. Anki's automatic backups exclude images, as its [backup manual](https://docs.ankiweb.net/backups.html) explains. Our [flashcard backup guide](/blog/how-to-back-up-flashcards/) covers the broader backup routine.

Then use this table to choose your next check. Each result narrows the problem; it doesn't prove a single cause.

| What you observe on that card | Where to investigate next | First useful action |
| --- | --- | --- |
| Broken on the source computer too | Original file or card reference | Run Check Media, then inspect the named file. |
| Works on the computer; broken on AnkiWeb | Source upload or a reference that only works locally | Finish source media sync; compare filename spelling and case if it persists. |
| Works on AnkiWeb; broken on the phone | Target download or target rendering | Finish phone media sync, then reopen the card. |
| Same image warning across many cards | Shared card template | Inspect the template for that filename before changing individual notes. |

The computer-to-phone order follows [AnkiMobile's sync instructions](https://docs.ankimobile.net/syncing.html): finish sending from the computer before checking the phone's download. That manual also identifies a repeated image warning across cards as a reason to inspect their shared template.

## Wait for media, not just the cards

On desktop Anki or AnkiMobile, click or tap the sync button while its spinner is visible to open progress details. Wait for **“media sync complete.”** If the problem continues, verify that sound and image syncing is enabled on every client involved. These are the checks in [Anki's media sync FAQ](https://faqs.ankiweb.net/media-files-may-take-time-to-sync.html).

For AnkiMobile images not syncing on an iPhone or iPad, keep the media progress screen open. Switching apps or turning off the screen interrupts the transfer. If its counts stay unchanged for an extended period, the FAQ recommends aborting the sync and starting it again.

Completion means the transfer finished. A file absent from the source still needs to be recovered or supplied.

## What Anki Check Media actually tells you

On desktop, open **Tools → Check Media**. Its two useful findings mean different things:

- **Missing:** a note refers to a file absent from the media folder.
- **Unused:** a file exists in that folder, but the check found no note using it.

Check Media doesn't scan card templates, so don't delete apparently unused files without checking their purpose. See the [media manual](https://docs.ankiweb.net/media.html).

Zero missing files isn't proof that every card renders correctly. Templates and externally hosted images need their own inspection.

## Trace one file from computer to phone

Suppose a biology card should show `leaf-cross-section.jpg`. You can read its question on your iPhone, but the illustration is missing. Use this as a worksheet for your own file:

1. **Computer:** open that card. If the picture is missing here, go to the file checks below. Otherwise, finish media sync and record the result.
2. **AnkiWeb:** inspect the same card. If the illustration is visible, you've established that this card can display its image on the web. Move to the phone. If it fails here, stay with the source upload and filename checks.
3. **Phone:** synchronize after the computer finishes, then revisit the card once media is complete.

If the picture appears at step three, an unfinished download fits what you observed. If it remains broken, you can now give a specific report: “`leaf-cross-section.jpg` displays on the computer and AnkiWeb; AnkiMobile reports media complete but doesn't display it.” That is much easier to investigate than “my deck is broken.”

## A file can exist under the wrong name

If the picture works on the computer but fails elsewhere after sync, inspect its reference. In desktop Anki's editor, select the affected field and use **Edit HTML** from its menu. Find the image's `src`, for example:

```html
<img src="leaf-cross-section.jpg">
```

Compare that with the actual filename in your collection's media folder, including uppercase letters and the extension. A file named `leaf-cross-section.JPG` can work on a computer that ignores case while failing on AnkiWeb. Anki documents this in its [missing images FAQ](https://faqs.ankiweb.net/sounds-or-images-are-not-appearing-on-ankiweb-or-the-mobile-clients.html), which links to the media folder locations.

Correct the affected reference to match the real file, then sync and repeat the trace. Start with one note before considering a wider replacement. Also, encoded characters aren't automatically mistakes: the [media manual](https://docs.ankiweb.net/media.html) explains why spaces and percentage signs can look different in HTML.

## When the file is missing from the source

If this is your own image, look for the original attachment, a media-inclusive export, or a computer backup containing the media folder. For files removed through Check Media, check its restore option before emptying any trash. Once you recover the image, add it through Anki's editor and check that the affected card displays it. The [media manual](https://docs.ankiweb.net/media.html) covers adding files and recovering deleted media.

For a downloaded deck, check the original download instructions. Some authors distribute media separately or omit it; AnkiWeb deck pages list the included media count. For a deck obtained elsewhere, ask its sharer for the missing asset, as [Anki's shared-deck FAQ](https://faqs.ankiweb.net/a-shared-deck-is-not-showing-images-or-playing-audio.html) recommends.

Once the affected cards display correctly, use the [offline preparation checks](/blog/does-anki-work-offline/) on the device you'll actually carry. The useful finishing point is seeing the needed picture during a review on that device.
