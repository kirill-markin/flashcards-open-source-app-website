---
title: "Self-Hosted Anki Sync Server: A Two-Device Rehearsal"
description: "Test a self-hosted Anki sync server with a disposable collection. Check edits, review history, media, and persistence before moving your real cards."
date: "2026-10-07"
image: "/blog/anki-self-hosted-sync-server.png"
keywords:
  - "self-hosted Anki sync server"
  - "Anki custom sync server"
  - "AnkiDroid self hosted sync"
  - "Anki media sync"
  - "test Anki sync"
---

Three cards give a new sync setup something recognizable to deliver: a sentence you can edit, a picture you can identify, and a recording you can play. Send them through your self-hosted Anki sync server, close the sending client, and restart the server before the second device receives its first copy.

Then send an edit, a new recording, and one graded answer back. Keep your real collection out of the experiment. The result should be an evidence sheet showing what arrived on each device and what survived the restart. A completed sync leaves those details unexamined.

This is a proposed rehearsal based on official documentation checked October 7, 2026. It has not been tested on a live deployment.

![A seamstress turns over a small linen test swatch to inspect three colored stitch rows while a wool coat waits nearby](/blog/anki-self-hosted-sync-server.png)

## Start with two disposable copies

Use desktop Anki as **device A**. For B, use another desktop or a spare phone or tablet with a disposable Anki installation. If your only mobile installation contains cards you need, choose a second desktop. **Don't clear your phone's study data for this test.**

On each desktop, create one empty test profile through **File > Switch Profile**. Profiles have separate collections and settings; see the [profile manual](https://docs.ankiweb.net/profiles.html). Use one dedicated server account for the two copies of this test collection. Keep your daily profile and unrelated collections off that account.

A `Sync rehearsal` deck inside your daily profile isn't isolation: sync concerns the whole collection. Begin with no notes on either test device. B must stay empty until the restart step.

Record the setup outside Anki:

| Detail | Your value |
| --- | --- |
| New run identifier, such as `rehearsal-20261007-a` | ___ |
| Device A, client version, test profile | ___ |
| Device B, client version, test profile or disposable installation | ___ |
| Server build/version and installation method | ___ |
| Server URL configured on each device | ___ |
| Test account username, without its password | ___ |
| Persistent server storage directory or mounted volume | ___ |

Use a fresh identifier, account, and disposable collections for each new attempt. Leftovers from yesterday shouldn't satisfy today's checks.

## Configure the server before making cards

Install the server using the [official Anki sync-server manual](https://docs.ankiweb.net/sync-server.html). Set test credentials with `SYNC_USER1`; select server storage with `SYNC_BASE`. Keep it separate from desktop Anki's data, and populate it through sync, without copying collection files into it.

Configure each client's custom server URL and put server credentials in its AnkiWeb account section. Default HTTP is unencrypted: use a restricted local network, VPN, or HTTPS proxy. Subpath URLs need a trailing slash.

Use a server address both devices can reach. On a phone, `localhost` means that phone. Record each client's configured URL.

For AnkiDroid, follow its [custom sync-server instructions](https://docs.ankidroid.org/#_custom_sync_server). Leave **Fetch media on sync** enabled; the [AnkiDroid preferences manual](https://docs.ankidroid.org/#_ankidroid) confirms that disabling it prevents image and audio uploads and downloads.

This server supplies sync, without an AnkiWeb browser study interface; the maintainer confirms that [boundary on the official forum](https://forums.ankiweb.net/t/how-to-setup-an-anki-sync-server-self-hosted/46579). Run the rehearsal in Anki clients.

Disable automatic syncing in the desktop test profiles and, if applicable, AnkiDroid's disposable installation. Use manual sync so opening or closing an app doesn't interrupt the sequence. After every sync, wait for both collection and media activity to finish. Anki's [sync manual](https://docs.ankiweb.net/syncing.html) explains that media merges separately from the collection's upload/download choice.

**Cancel any unexpected one-way upload/download prompt.** The two planned initial choices below have known sources and empty destinations. A later prompt needs investigation; don't choose a direction just to continue.

## Give the handoffs recognizable content

On A only, create a deck named `Sync rehearsal`. Choose the Basic note type with one forward card per note. Replace `RUN` below with your identifier:

| Front | Back |
| --- | --- |
| `RUN — text handoff` | `The blue notebook is on shelf 2.` |
| `RUN — image handoff` | `One triangle, two dots.` followed by your attached image |
| `RUN — audio handoff` | `Outbound recording from A.` followed by your attached audio |

Draw a triangle and two dots on paper, then photograph them. Record yourself saying the identifier and “outbound from A.” MP3 is a broadly supported audio choice according to Anki's [media manual](https://docs.ankiweb.net/media.html). Attach actual local files through the editor. Remote image URLs would test something different, and Anki doesn't follow symbolic links during media sync.

Preview all three cards on A without grading them. Check the drawing and listen to the recording. Your starting counts should be **three notes and three cards**. Leave B untouched: don't import the deck or copy any attachments there.

## Restart before the first download

Sync A to the empty test account. If the initial one-way choice appears, **upload from A**. Wait for media to finish, then close A's test profile. The populated-device upload and empty-device download follow Anki's [first-sync instructions](https://docs.ankiweb.net/syncing.html).

Stop the sync-server process and start it again with the same account configuration and persistent storage. Record what you restarted. If you use a container and want to check a container recreation too, recreate it with **the same persistent mount** and record that separately.

**Keep A closed.** Open B's still-empty test collection, sync, and **download to B** if prompted. Once collection and media activity finish, check B:

- Find all three fronts containing the run identifier and confirm three notes and three cards.
- Compare the shelf-2 sentence exactly.
- Preview the image and identify the triangle and two dots.
- Play the recording and hear the identifier and “outbound from A.”

Disconnect B from the network and preview the image and audio again. Reconnect before the next handoff.

The order matters. B starts without the notes or files, and A remains closed while B fetches them after the restart. A can't quietly refill an empty server store and make a failed persistence check look successful. Seeing cards already present on B would mainly show that B kept its own copy.

## Send changes and one answer back

Reopen A's test profile. Change the text answer to `The blue notebook is on shelf 7.` Sync A, then B. Find that exact sentence on B before editing anything there.

On B, change the image caption to `One triangle, two dots. Checked on B.` Leave the image attached. Add another recording to the audio note saying your identifier and “return trip from B.” Keep the original recording, and give the new file a distinct name.

Study the rehearsal deck on B and **grade only the first card shown**. Write down its full front, the answer button you chose, and the local date and time with time zone. Stop studying after that answer; use preview for further inspection.

Sync B, wait for collection and media completion, then sync A. On A, inspect the changed caption and play the return-trip recording. In the browser, select the card you graded and open **Cards > Info**. The [Card Info manual](https://docs.ankiweb.net/stats.html#card-info) describes its review history, rating, and interval. Match the entry to your recorded card, time, and answer, allowing for the devices' time zones. Record the displayed interval without expecting a particular value.

If B is another desktop, also record its Card Info values before syncing and compare them on A.

## Write down what actually arrived

Fill this sheet during the handoffs. Use “Failed” or “Not tested” when appropriate, and keep the observation alongside it.

| Check | Evidence on the receiving device | Result and time |
| --- | --- | --- |
| Baseline after server restart, A → B | Three identified notes/cards; exact shelf-2 sentence | ___ |
| Image delivery after restart | Triangle and two dots visible on B, including offline preview | ___ |
| Audio delivery after restart | Identifier and outbound phrase audible on B offline | ___ |
| Text edit, A → B | Exact shelf-7 sentence on B | ___ |
| Caption edit, B → A | `Checked on B.` appears on A | ___ |
| New media, B → A | Return-trip recording plays on A | ___ |
| One graded answer, B → A | Matching card, review entry and rating; recorded interval on A | ___ |

When something fails, use the missing evidence to choose the next check:

| What you see | What to check next |
| --- | --- |
| A connects; B cannot | B's configured address and network path. A laptop connection doesn't establish phone connectivity. |
| Authentication fails | The dedicated server credentials entered on that client. |
| Sync stops working after a client update | Client/server protocol compatibility in the official server manual. |
| Text arrives; image or sound doesn't | Media completion, B's media-sync setting, and whether the attachment plays on A. On desktop, **Tools > Check Media** reports missing references. |
| B receives an empty collection after restart | Account identity and the storage directory or mount actually used by the restarted server. Preserve logs before changing the setup. |
| An unexpected upload/download prompt appears | Cancel, record each copy's state, and consult the [upload-or-download guide](/blog/anki-sync-upload-or-download/). |

Use Check Media to diagnose missing files here; deleting unused media isn't a connectivity repair. The [Anki images guide](/blog/anki-images-not-showing/) covers a media-only failure in more detail.

## Keep the claim as small as the test

A successful sheet gives you evidence for the recorded client versions, server configuration, and three-card collection. The baseline survived the recorded restart, edits traveled both ways, attachments arrived, and one graded answer reached desktop review history.

It doesn't establish recovery from a lost server disk, behavior with a large collection, concurrent conflicting edits, or security of an internet-facing deployment. Restarting with the original storage is not a backup restoration.

Before changing your real collection's sync destination, export a **COLPKG with Include Media enabled** and keep it safely outside the active collection. Automatic backups exclude images and audio; see Anki's [backup instructions](https://docs.ankiweb.net/backups.html) and the [APKG-versus-COLPKG guide](/blog/anki-apkg-vs-colpkg/).

Keep the sheet with the versions, addresses, and restart details. After a client or server update, those same handoffs give you something specific to repeat before moving your daily reviews through the new combination.
