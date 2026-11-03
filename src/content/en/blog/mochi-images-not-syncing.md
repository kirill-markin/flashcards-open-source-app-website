---
title: "Mochi Images Not Syncing: Check the Device That Added Them"
description: "Diagnose missing Mochi images across devices, find the source copy, use the documented attachment resync, and verify the receiving device."
date: "2026-11-03"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/c47b558c1a2c1e74ac29e4a40956bc67a4870489b447d5354a45a81f686125fb.webp"
keywords:
  - "Mochi images not syncing"
  - "Mochi unable to find attachment"
  - "Mochi attachment sync"
  - "Mochi pictures missing on another device"
---

Your Mochi card reaches the laptop with its text intact, but the picture shows **“Unable to find attachment.”** Find the device where you added that picture. Mochi's administrator recommends attachment resync there. [Picture-sync support answer](https://forum.mochi.cards/posts/169)

Before trying it, compare one affected card on both devices. You need to distinguish a picture that displays only on one device from a file that was never attached, or a card whose text isn't arriving either.

![A woman lifts a landscape print from an open portfolio while an empty wooden frame waits beside a moving box](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/c47b558c1a2c1e74ac29e4a40956bc67a4870489b447d5354a45a81f686125fb.webp)

This guide follows official Mochi documentation and forum answers checked November 3, 2026. The diagnostic ledger and checks below are suggested procedures, not tested repair results. AI performed substantial research, writing, and editing; the illustration is AI-generated. We haven't tested the current interface or a cross-device repair.

## Compare one card before changing anything

Choose a card with a recognizable picture. Record its deck, question, and the device where you attached the image. We'll call that device the **source**, and the device missing the image the **receiver**.

Open the card on each device and reveal the relevant sides. Compare the question, current answer, and actual picture. Record the exact error. A matching title alone doesn't show that both copies contain the same content.

Use this three-case ledger to decide where to investigate. The card names and observations are hypothetical examples; replace them with your own.

| Example card | Source observation | Receiver observation | Next step |
| --- | --- | --- | --- |
| Leaf identification | Correct leaf photo and current answer | Current answer; missing attachment error | Preserve the source, then try its attachment resync |
| Map question | Image reference, but no visible map | Same missing map | Investigate the original file and attachment reference |
| Anatomy label | Correct diagram and revised answer | Card absent, or answer outdated | Investigate broader sync before treating this as an image-only problem |

Mochi currently includes cross-device sync with **Pro**; Free includes offline use. Check the intended account on both devices, active sync access, connectivity, and any reported sync errors. These checks establish the conditions for syncing; they don't confirm that the image transferred. [Mochi plan details](https://mochi.cards/)

## Preserve the copy that still works

Save a backup from the device that displays the picture before editing its attachments. Mochi documents **Settings → Export everything** for a native `.mochi` export containing attachments and review history. On desktop, you can also copy the complete Mochi user directory. [Mochi backup instructions](https://mochi.cards/docs/getting-started/backing-up/)

Name the backup with its date and device, and store it outside Mochi's working storage. Preserve newer work on the receiver too. An export from a device missing images doesn't establish that those images are backed up.

A device displaying the picture may not be the one that added it. If you can't identify or access the originating device, preserve the surviving copy and tell support which device is unavailable or unknown.

Our [Mochi backup and restore guide](/blog/mochi-backup-restore/) covers preserving and inspecting collections. Restoring an older collection is a separate operation from repairing image transfer.

## If the picture doesn't display on the source

A missing picture doesn't tell you whether the file is absent or its reference is wrong. Find the original image outside Mochi and check that it opens. Then inspect the affected card's Markdown and how the image was added.

Mochi's documentation describes dropping a file into the editing area or pasting an image from the clipboard. The media is stored locally and displayed through a Markdown reference. Copying a filename into a card doesn't attach the corresponding file. [Mochi attachment formatting](https://mochi.cards/docs/markdown/advanced-formatting/)

If you have the original image, preserve the existing card, attach the actual file, and keep the reference Mochi inserts. Confirm that the intended picture now renders locally. This gives you something concrete to check on the receiver, rather than repeatedly syncing a card that doesn't display correctly anywhere.

If the card came from a Markdown import, follow the [Mochi Markdown import attachment check](/blog/mochi-markdown-import/). The image file needs to be selected alongside the Markdown during that import. The guide covers that local-file problem separately.

## Resync from the device that added the image

In the official [pictures-not-syncing discussion](https://forum.mochi.cards/posts/169), administrator Matt points to **Settings → Preferences → Attachments**. He describes a control that forces another sync of attachments **added on that device**.

On your identified source:

1. Connect to the network and open that settings route.
2. Use the attachment resync control described in the support answer.
3. Record the time, any status or error, and what changes on the receiver.

Forum users report mixed results. If your version doesn't show the described control, note the version and ask support for the corresponding procedure.

## Check the picture where you want to study

Return to the receiver and open the same card. For the leaf example, check all of the following:

- The question and current answer match the source.
- The leaf photo appears on its intended side, with recognizable details. An image caption or empty space doesn't pass.
- Navigating away and opening the card again still displays the photo.

Add a receiver result to your ledger: picture visible, still missing, wrong picture, or another observed result. Keep the time beside it so you can distinguish observations made before and after resync.

Then inspect the other affected cards you plan to study. One visible picture establishes that card's result; it doesn't establish that every attachment arrived. If audio is affected too, play the file rather than accepting a visible player as proof. Our [Mochi audio guide](/blog/mochi-audio-flashcards/) covers the listening check.

## Give support the before-and-after record

If the image remains missing, keep the source and backups intact. Send [Mochi support](mailto:support@mochi.cards) a short report containing:

- Both device types, operating systems, and Mochi versions.
- Which device added the picture, and where it still displays.
- Whether the current card text reaches the receiver.
- The exact error, attempt time, and receiver result from your ledger.

Include a screenshot with private study material removed, or offer a harmless sample card. If the source device is unavailable, say so.

An administrator directs a user to that address in a separate [macOS sync discussion](https://forum.mochi.cards/posts/360/answer/396). That case doesn't establish the cause of your missing image. Your record gives support a specific card, what still works, and an observed result to investigate.
