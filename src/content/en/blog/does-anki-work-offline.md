---
title: "Does Anki Work Offline in 2026? Desktop, iPhone, Android, and Sync"
description: "Yes—Anki’s installed desktop, iPhone, iPad, and Android clients can use a local collection offline. Learn what needs internet, how later sync works, and how to prepare media."
date: "2026-08-16"
image: "/blog/does-anki-work-offline.png"
keywords:
  - "does Anki work offline"
  - "can you use Anki offline"
  - "does AnkiMobile work offline"
  - "does AnkiDroid work offline"
  - "Anki offline sync"
  - "AnkiWeb offline"
  - "use Anki without internet"
---

Anki does not need to contact a server before showing your next card. **The installed Anki clients work offline in 2026:** Anki on Windows, macOS, and Linux; AnkiMobile on iPhone and iPad; and AnkiDroid on Android. Each uses a collection stored on that device, so you can review, create notes, and make ordinary edits without internet.

There is one easy way to get caught out: AnkiWeb is different. It is the browser-based study and sync service, not an offline Anki client. An installed app can also use only the decks and media that have already reached that particular device.

**Facts checked:** August 16, 2026.

![A field researcher adds a record to a local photo, audio, and text archive while the mountain radio link is down](/blog/does-anki-work-offline.png)

## The short answer, surface by surface

The [official Anki website](https://apps.ankiweb.net/) lists the desktop app, AnkiMobile for iOS, AnkiDroid for Android, and AnkiWeb as parts of the same ecosystem. They do not all have the same offline boundary.

| Surface | Does it work offline? | What you can do without internet | What must happen while connected |
| --- | --- | --- | --- |
| **Anki desktop** on Windows, macOS, or Linux | **Yes.** Its collection and media folder are local. | Review cards, add notes, edit note content, and use media already stored on the computer. | Download shared decks, sync with AnkiWeb, and fetch anything a card or add-on requests from an online service. |
| **AnkiMobile** on iPhone or iPad | **Yes.** The app keeps a local collection. | Review local cards, add notes, edit note content, and play sounds or show images already on the device. | Complete the initial collection and media sync, use AnkiWeb, and access remote resources. |
| **AnkiDroid** on Android | **Yes.** AnkiDroid keeps its collection on the Android device. | Review local cards, add notes, edit note content, and use media present on the device. | Sync or download missing material, get shared decks, and use network-dependent card features. |
| **AnkiWeb** in a browser | **No offline mode.** It is an online study and synchronization service. | Do not plan on using it after the connection disappears. | Use an internet connection, or switch to an installed client prepared in advance. |

So, can you use Anki offline? Yes, if you mean an installed client with the right collection already on it. AnkiWeb in a browser still needs a connection.

## Offline reviews and edits stay on that device first

When you answer cards offline, Anki records those reviews in the local collection. The scheduler continues from that local state. New notes and ordinary edits are local too. Nothing appears on another device until you reconnect and sync.

AnkiWeb sync is optional if you study on only one device. Its job is to move collection changes between devices. The [Anki sync manual](https://docs.ankiweb.net/syncing.html) says that, under normal circumstances, reviews and note edits from multiple locations can merge. If the same card was reviewed in two places, both answers remain in its review history and the state from the most recent answer wins.

This routine reduces avoidable sync conflicts:

1. Sync the device before leaving a reliable connection.
2. Review, add notes, or correct ordinary card text offline.
3. Reconnect and sync that device before continuing on another one.
4. Let the other device finish its own sync before you make more changes there.

Collection-structure changes need more care. Adding a field, removing a card template, changing note types, and similar work may require a one-way sync rather than a merge. A one-way sync asks you to keep either the local collection or the AnkiWeb collection; changes on the other side can be replaced.

So keep normal reviews and note edits going during a trip, but postpone complex note-type and template changes if several offline devices are diverging. If Anki does ask for an upload or download, stop and identify which collection contains the work you need before choosing a direction.

## Media is local only after it reaches the device

Anki stores sounds and images separately from the collection data. On desktop, the [media documentation](https://docs.ankiweb.net/media.html) explains that files attached or pasted into a note are copied into the local `collection.media` folder. Once a media file is in that folder, the card does not need internet to load it.

The weak point is preparation. Collection sync and media sync are separate, so sounds and images can still be transferring after the cards appear. The [AnkiMobile sync guide](https://docs.ankimobile.net/syncing.html) warns that media may be missing until the first sync finishes completely. A full deck list is not proof that an image-heavy or audio-heavy collection is ready.

Before going offline:

- sync on the device where you added the media;
- wait for its media sync to finish;
- sync the device you will carry and wait there too;
- open cards that use each image and audio type you need;
- run **Check Media** where available to find notes that refer to missing files.

The last check matters with shared decks. Sometimes the deck author never included a referenced image, so repeated syncing cannot download it.

Local media does not make every card self-contained. A card template can point to an image, script, font, or other resource hosted on the web. Online dictionaries, shared-deck downloads, and add-ons that call remote APIs still need a connection. Text-to-speech depends on the voice and platform: an installed system voice may work offline, while a voice supplied by an online service will not. Test the exact feature instead of assuming that all TTS or every add-on behaves the same way.

## How Anki offline sync works when you reconnect

Anki offline sync is really two stages: local work now, network synchronization later.

After the connection returns, sync the device that holds the offline work. Wait for both the collection sync and media sync to finish. Then sync the next device before reviewing or editing there. This order makes the newest state easy to identify if Anki asks you to resolve a conflict.

Check the result instead of treating a completed animation as the whole test:

- find a note you added offline;
- confirm an edited field has the new text;
- look at the review history or due state of a card you answered;
- open at least one newly added image or audio file on the second device.

If you edited the same note on two devices, read the final note rather than assuming the merge kept the wording you wanted. If a red sync button or a full upload/download choice appears, do not click through from habit. A full download replaces local collection changes; a full upload replaces the AnkiWeb collection before the other devices download it.

## Without regular internet, move the collection as a file

Anki can still move a collection between devices without regular access to AnkiWeb, but this is a handoff, not a multi-device merge.

The [AnkiMobile collection-transfer guide](https://docs.ankimobile.net/collection-transfer.html) uses a `collection.colpkg` file containing all decks and scheduling information. You export the current collection, move the file with AirDrop or file sharing, and import it on the other device. The [AnkiDroid manual](https://docs.ankidroid.org/manual.html) documents a similar USB workflow for transferring the collection between Android and desktop.

Importing a full collection file replaces the collection already on the destination device. It cannot combine two independently changed offline collections. Use one device as the current source of truth: export from it, import on the next device, make your changes there, and transfer the newer collection back before resuming on the first device.

This is useful for fieldwork, ships, remote sites, or restricted networks where occasional file transfer is possible but routine cloud sync is not. For a normal flight or commute, a completed AnkiWeb sync before departure is simpler.

## Sync is not an Anki backup

Sync keeps devices aligned. An accidental deletion or unwanted change can therefore spread to every synced device.

Anki's installed clients keep local backups, but media needs separate attention. For example, the [AnkiMobile preferences guide](https://docs.ankimobile.net/preferences.html) says its automatic backups include cards and statistics but not sounds or images. A full collection export that includes media serves a different purpose from both sync and the automatic backup history.

If the deck would be painful to rebuild, keep a periodic full export with media somewhere outside your everyday device. The broader [flashcards backup guide](/blog/how-to-back-up-flashcards/) explains how to combine that restore copy with portable text and original source files.

## A ten-minute airplane-mode rehearsal

Run this on the exact laptop, phone, or tablet you will carry. A successful test on desktop says nothing about the state of your phone's media folder.

1. While online, open the installed Anki client and sync. If this is a new device, complete the initial collection download first.
2. Wait for media sync to finish. Do not stop when the deck names merely appear.
3. Open every deck you need. Sample cards with images, audio, custom fonts, and any special template behavior you rely on.
4. Turn on airplane mode or otherwise disable every network connection.
5. Fully close Anki, reopen it, and start the required deck. This catches a workflow that only survived in an already-open screen.
6. Review several cards. Add one clearly labeled test note and make one harmless text edit.
7. Quit and reopen the app while still offline. Confirm that the reviews, new note, edit, and local media remain.
8. Try any dictionary, text-to-speech voice, or add-on you expect to use. Record which parts need the network.
9. Reconnect and sync this device. Wait for the collection and media stages to finish.
10. Sync a second device, then verify the test note, edit, review state, and media there before deleting the test content.

Do not use the rehearsal to redesign note types on two devices. The goal is to prove the travel workflow: the right collection is local, the important media opens, offline work survives a restart, and later sync carries it across.

## Anki can cover a trip if you prepare the device

Anki's installed clients are a strong fit for travel when you want a complete local collection rather than a small set of cached cards. The limits are concrete: the device needs the collection and media in advance, AnkiWeb stays online-only, and network-backed card features still need a connection.

If you are choosing between several tools for travel, the [offline flashcards app comparison](/blog/best-offline-flashcards-app/) applies the same card, editing, progress, media, and later-sync tests to five products. If you are considering a different study stack for reasons beyond connectivity, see [Anki vs Flashcards Open Source App](/blog/anki-vs-flashcards-open-source-app/).

The practical answer to “Does Anki work offline?” is yes on desktop, iPhone, iPad, and Android after the exact device has the collection and media you need. Sync before leaving, rehearse in airplane mode, and sync the device with your offline work first when you reconnect.
