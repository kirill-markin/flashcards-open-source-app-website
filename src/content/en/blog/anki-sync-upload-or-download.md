---
title: "Anki Sync: Should You Upload or Download?"
description: "Choose an Anki sync direction by locating the work you need to keep. Use a device worksheet and worked examples before replacing a collection."
date: "2026-10-01"
image: "/blog/anki-sync-upload-or-download.png"
keywords:
  - "Anki sync upload or download"
  - "Anki one-way sync"
  - "upload to AnkiWeb"
  - "download from AnkiWeb"
  - "Anki sync conflict"
---

Anki asks you to upload or download. **Upload from the device holding all the work you want to keep, provided every other copy is safe to replace. Download when AnkiWeb holds that wanted state and the current device is safe to replace.**

If the copies contain different work you need, cancel. Preserve them separately before choosing a direction. Having more cards, using a computer, or opening Anki most recently doesn't make a collection the right one to keep.

This is a documentation-based guide for Anki desktop and AnkiMobile, checked October 1, 2026. The examples are hypothetical.

![A woman compares two navy tote bags: one has a patched pocket, while the other has a reinforced handle.](/blog/anki-sync-upload-or-download.png)

## What the two buttons replace

Ordinary sync can merge reviews and note edits. The explicit upload/download prompt is a **one-way collection sync**. Adding a note field, removing a card template, or certain sync problems can require it. See Anki's [sync manual](https://docs.ankiweb.net/syncing.html#conflicts).

| Button on the device showing the prompt | Keep | Replace |
| --- | --- | --- |
| Upload to AnkiWeb | This device's collection | AnkiWeb's collection |
| Download from AnkiWeb | AnkiWeb's collection | This device's collection |

Read “this device” literally. An upload from your phone has a different source from an upload on desktop. The prompt concerns the collection, so don't make the decision based on just the deck you were studying.

## Preserve the copies before investigating

Cancel the pending choice and pause reviewing and editing. Keep an uninspected device offline when opening it. Desktop Anki can sync automatically on opening and closing; disable automatic syncing in preferences before reconnecting for inspection.

On desktop, choose **File > Export**, select **Anki collection package (.colpkg)**, and enable **Include Media**. Keep the file somewhere safe outside the active collection, named with the device and timestamp. Automatic backups and **File > Create Backup** include card text and scheduling but exclude images and sounds. Anki's [backup instructions](https://docs.ankiweb.net/backups.html) explain the difference.

On AnkiMobile, use **Add/Export > Export to Share** from the deck list to save the collection, following the [collection-transfer instructions](https://docs.ankimobile.net/collection-transfer.html#iphoneipad-to-computer). Keep each device's export separate. Importing a collection package replaces the destination's collection, so don't import one into your daily profile just to look inside.

For inspection on desktop, use a temporary profile and leave it disconnected from AnkiWeb. **Never connect that inspection profile to your usual account.** Anki's [profile instructions](https://docs.ankiweb.net/profiles.html) warn that multiple profiles syncing to one account overwrite each other's data.

## Write down what each copy contains

Fill in one row for each device and one for AnkiWeb. “Unknown” is a useful answer: it identifies what you still need to inspect.

| Copy | Last sync known to finish | Work since then | Evidence to check | Safe to replace? |
| --- | --- | --- | --- | --- |
| Desktop, profile: ___ | ___ | Notes, edits, reviews, deletions, structural changes | An exact answer or identifiable reviewed card | Yes / No / Unknown |
| Phone or tablet | ___ | ___ | ___ | Yes / No / Unknown |
| AnkiWeb, account: ___ | Which device last sent its work here? | Any later work done on AnkiWeb itself | Recent note text; evidence from the last synced source | Yes / No / Unknown |

Give the evidence column something specific. For an edit, write down the corrected wording. For reviews, identify a card and the date you answered it. For a deliberate deletion, record what should remain absent. You'll use these details again on the receiving device.

A larger card count doesn't settle the choice. A smaller collection may contain yesterday's reviews or an intentional cleanup. Equal counts can hide different answers and histories.

Don't mark AnkiWeb as the copy to keep just because you remember tapping Sync. Confirm the account and profile, look for a recent note online, and inspect the source device's state. If the work is only on an unsynced phone, a desktop download cannot fetch it yet. Leave the cloud row as “Unknown” until you can explain how the wanted work reached it.

## Choose a direction for the state you actually have

In every example below, a one-way prompt is already pending. Ordinary offline reviews and note additions don't normally require one. These scenarios help resolve the existing prompt; they aren't instructions to force a full sync.

### Desktop has all the wanted changes

Suppose you corrected a chemistry answer on desktop, added a note field, and reviewed there afterward. The phone hasn't been used since the last completed sync. Your worksheet confirms that neither it nor AnkiWeb has later work you need.

After preserving the copies, upload from desktop. When it finishes, sync the phone and download if prompted. Before studying, find the chemistry correction and the sampled review on the phone.

The decisive evidence is the work you've identified and the absence of unique work elsewhere. An Anki developer's [advice on the official forum](https://forums.ankiweb.net/t/anki-on-iphone-and-mac-wont-synchronize/12006) follows the device containing the recent changes. Desktop ownership alone tells you nothing about that.

### The phone has the trip's reviews

Suppose both devices started from the same collection. During a trip, you reviewed on the phone and added a note containing “station entrance.” Desktop stayed untouched, and there was no later work on AnkiWeb. On returning, you find a one-way prompt waiting on desktop. The phone hasn't synced yet.

Keep the desktop choice canceled. With the phone's state preserved, reconnect it and sync there first; choose upload if asked. Confirm that “station entrance” appears in the correct AnkiWeb account. Then return to desktop and download when prompted. Check the sampled trip review on desktop too.

If the phone had already completed its sync, you could start with the AnkiWeb verification. This order follows the [AnkiMobile phone-to-computer handoff](https://docs.ankimobile.net/syncing.html#iphoneipad-to-computer). The worksheet's question is whether the phone's work has reached the cloud, not which screen currently shows the prompt.

### Each device has something the other lacks

Now suppose the phone contains the trip's reviews, but desktop also has a corrected chemistry answer and a new note field. Neither has received the other's changes. AnkiWeb still holds the common starting state.

There is no complete source yet. The phone lacks the chemistry changes; desktop lacks the trip reviews; the cloud lacks both. Mark both device rows **No** under “Safe to replace?” and keep their exports separate.

Make an inventory of the differences: separate new notes, competing edits to the same note, reviews of the same card, and changed note types. Bring that inventory, the client versions, and the exact prompt to [Anki support](https://forums.ankiweb.net/) before overwriting either device. This makes the unresolved work clear instead of reducing the question to “Which button?”

An APKG can transfer selected content, update notes, and carry learning progress, subject to its import settings. **Don't assume it losslessly combines edits to the same note or independently recorded review histories for the same card.** Read the [packaged-deck import rules](https://docs.ankiweb.net/importing/packaged-decks.html) before considering a selective transfer. Saving both collections preserves your options; it doesn't reconcile them.

## Check the work after the handoff

Once the intended source has synced and the receiving device has downloaded, return to your evidence column:

- Find the new note and compare the exact edited field text.
- Inspect the sampled card's review entry and interval. On desktop, **Cards > Info** shows its [review history](https://docs.ankiweb.net/stats.html#card-info). Preview cards without answering them while inspecting.
- Confirm intentional deletions and inspect cards affected by field or template changes.
- Open the relevant image cards and play their audio after media sync finishes.

Media changes merge separately from the one-way collection choice. Missing pictures alone don't establish that you chose the wrong direction. Use the [Anki images guide](/blog/anki-images-not-showing/) to investigate that problem.

If you've already overwritten wanted data, preserve the remaining states and backups before syncing again. The [deleted-deck recovery guide](/blog/recover-deleted-anki-deck/) covers the narrower case of taking one missing deck from a backup.

For the next trip, [sync the device holding your offline work first](/blog/does-anki-work-offline/) before continuing elsewhere. If another upload/download prompt appears, use the worksheet again. Choose only after you can name the work that will survive and the copies that are safe to replace.
