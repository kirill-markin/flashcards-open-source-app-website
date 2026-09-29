---
title: "How to Recover a Deleted Anki Deck Without Rolling Back Other Decks"
description: "Recover one deleted Anki deck from a backup in a temporary profile, preserve newer work in other decks, and check scheduling, media, and sync before resuming."
date: "2026-09-30"
image: "/blog/recover-deleted-anki-deck.png"
keywords:
  - "recover deleted Anki deck"
  - "restore one Anki deck from backup"
  - "Anki deleted deck recovery"
  - "restore Anki deck without losing progress"
---

You deleted an Anki deck, then spent the morning reviewing another one. Yesterday's backup contains the missing deck, but restoring that whole backup into your daily profile would also roll back the morning's work.

To recover one deleted Anki deck, open the old collection in a **separate, unsynced desktop profile**, export only the missing deck as an APKG with scheduling included, and bring that package into your current collection. Keep the current collection as the destination. The backup supplies the missing material.

This guide covers a deleted deck in desktop Anki 23.10 or later. It is based on Anki's documentation, checked September 30, 2026, with a hypothetical recovery example rather than a hands-on test.

![A craftsperson fits a saved blue tile into a gap in a courtyard mosaic while the surrounding tiles remain intact.](/blog/recover-deleted-anki-deck.png)

## Before restoring anything, preserve what you have

First, search **Browse** for a distinctive phrase from the missing deck, without a deck filter. If the cards are still present, investigate where they went. Cards absent from today's study queue may be [buried or suspended](/blog/anki-bury-vs-suspend/); that situation doesn't require importing an old deck. If only some cards are missing, use the rehearsal below to inspect overlaps before attempting a recovery in your daily profile.

If the deck really is gone, pause studying and syncing on your devices. Disable automatic syncing in desktop Anki's preferences before switching profiles or closing it. If another device may still hold the deck, keep that device offline while preserving its state. Don't let an automatic sync be your first recovery step. Anki documents automatic sync on opening and closing a collection in its [syncing manual](https://docs.ankiweb.net/syncing.html).

In your current desktop profile:

1. Choose **File > Export**, select **Anki collection package (.colpkg)**, enable **Include Media**, and save a clearly named file such as `current-before-recovery.colpkg` outside Anki's data folder.
2. Write down the profile name and export time. Also record one recently reviewed card and one recently edited note in decks you want to preserve. You'll compare these after recovery.
3. Close Anki completely. In your original profile's folder, copy the **backups** folder and **collection.media** folder to a separate safe location. Keep the original files intact.

The separate media copy matters. Files belonging to deleted cards may still be on disk even though no current note uses them. Don't assume the current collection export preserves every such file, and don't delete “unused” media during recovery.

The standard desktop data locations are:

| System | Anki data folder |
| --- | --- |
| Windows | `%APPDATA%\Anki2` |
| macOS | `~/Library/Application Support/Anki2` |
| Linux | `~/.local/share/Anki2` |

Open the folder named for your original profile inside that location. Custom installations and Flatpak builds can use different paths; see Anki's [file locations](https://docs.ankiweb.net/files.html#user-data). Keep Anki closed during filesystem copying.

## Open the old backup somewhere it cannot replace today's work

Reopen Anki with automatic syncing still disabled. Choose **File > Switch Profile**, add a profile named `Deleted deck recovery`, and open it. Leave it disconnected from AnkiWeb throughout this procedure. Anki gives each [profile its own collection](https://docs.ankiweb.net/profiles.html), but connecting two profiles to the same AnkiWeb account can overwrite their data.

In this new profile, choose **File > Import** and select a copied backup from the **original profile's** backup folder. Start with the newest backup from before the deletion. The new profile's own backup list won't contain your original collection's history.

A collection import replaces the collection in the active profile. Check that `Deleted deck recovery` is active before proceeding. For this workflow, the old whole-collection backup belongs only in this temporary profile.

Find the missing deck and its child decks in Browse. Inspect recognizable notes. If the deck is already missing or damaged, try an earlier copied backup in the recovery profile. Once you find a usable snapshot, record its filename and time.

Anki's [backup documentation](https://docs.ankiweb.net/backups.html) makes two limits clear: automatic backups contain card text and scheduling, but no images or sounds; restoring a snapshot loses changes made after it. Here, the snapshot supplies only the missing deck. It cannot supply edits or scheduling changes made after the backup.

## Make a recovery ledger before exporting

Suppose a learner deleted `Spanish verbs` on Wednesday at 10:00. The most recent intact backup is from Tuesday at 20:00. Between that backup and the deletion, they reviewed Spanish again. They also reviewed `Biology` and corrected an answer in `Geography` on Wednesday morning.

Their target is to restore the Spanish deck's Tuesday state while keeping Wednesday's biology reviews and geography correction. The backup cannot account for Wednesday's Spanish session. This hypothetical ledger records both the recovery target and that gap; replace its examples with your own cards and timestamps.

| Checkpoint | Record before import | Accept after recovery |
| --- | --- | --- |
| Recovery source | Tuesday 20:00 backup filename; `Spanish verbs` and intended child decks | Only the intended missing material is brought back |
| Recovered content | Spanish deck has 120 cards; a chosen note reads “tener — to have” | Expected 120 cards and the chosen wording appear in the destination |
| Recovered progress | Chosen Spanish card has a 6-day interval and a Tuesday review entry in the backup | The saved interval and Tuesday entry are present |
| Known gap | Wednesday's Spanish reviews happened after the backup | Recovery is not described as restoring all progress through deletion |
| Current reviews | Chosen Biology card has a Wednesday review entry and a 12-day interval | That entry and 12-day interval remain |
| Current edit | The corrected Geography answer | The correction and rendered card remain intact |
| Media source | A Spanish audio filename; whether it exists in the preserved media folder or another backup | Audio plays from a known recovered file |

Use **Browse > Cards > Info** on a selected card to inspect its interval and review history, as described in [Anki's Card Info documentation](https://docs.ankiweb.net/stats.html#card-info). Preview cards without answering them while checking recovery. Compare card counts with card counts, rather than mixing cards and notes: one note can generate several cards.

Missing-deck checks refer to the old snapshot. Other-deck checks refer to the current collection. Check individual cards: Anki can retain deleted cards' reviews in [collection-wide statistics](https://docs.ankiweb.net/stats.html#more), so a familiar review graph alone doesn't prove that their scheduling was restored.

## Export the missing deck, then try it against a copy of today

In `Deleted deck recovery`, export the missing deck as **Anki Deck Package (.apkg)**. A deck export includes its child decks, so confirm that you want to recover those too. Enable **Include Scheduling Information** and **Include Media**. Use a name such as `recovered-spanish-verbs.apkg`, never `collection.apkg`, which Anki treats as a whole collection.

The media checkbox includes available files; it cannot recreate media absent from this profile. Keep deck presets as a separate decision from card history. If you include them, check the resulting deck settings too. The [APKG and COLPKG guide](/blog/anki-apkg-vs-colpkg/) explains these export choices, based on [Anki's export documentation](https://docs.ankiweb.net/exporting.html).

Before importing into your daily profile, create a second unsynced profile named `Recovery rehearsal`:

1. Import `current-before-recovery.colpkg` there. This supplies the current destination state.
2. Import `recovered-spanish-verbs.apkg`. Enable **Import any learning progress** so the package's saved scheduling can be imported.
3. Compare every content and progress row in your ledger, including the Biology review and Geography edit. Inspect the import report for unexpected skipped or updated notes. Check other notes using the recovered deck's note types, including their rendered cards.

This rehearsal matters because APKG imports can update matching notes. Recent Anki versions also offer controls for updating or merging note types; those types may be shared by other decks. Don't choose unconditional overwrite or note-type merging just to dismiss a conflict. If the import unexpectedly changes existing material, stop before repeating it in your daily profile. Read the [packaged-deck import rules](https://docs.ankiweb.net/importing/packaged-decks.html) or ask [Anki support](https://forums.ankiweb.net/) with the import report.

A deck groups cards, while a note supplies content that can produce several cards. If a recovered note still has cards in another deck, it isn't wholly missing from your current collection. Check those cards too. Shared note types also need attention even when the individual notes differ. A successful import into an empty profile would not reveal either kind of overlap.

## Check the media separately

An old automatic backup can restore a reference to `verb-audio.mp3` without restoring the file. In the rehearsal, missing audio may simply mean that neither imported package carried it. Check the preserved original `collection.media` copy before concluding that it is lost.

If the needed file exists there, close Anki and copy that actual file into the rehearsal profile's `collection.media` folder. Preserve its filename. If a same-named file already exists, compare the two rather than replacing it blindly. Reopen Anki and run **Tools > Check Media**, using its report without deleting unused files. Then preview the relevant cards and play their audio. Anki's [media manual](https://docs.ankiweb.net/media.html) recommends this check after manually adding files and notes that it doesn't scan card templates.

Record the source of each restored file in your ledger. If it is missing from the preserved folder too, look for a media-inclusive export or filesystem backup. The [missing Anki images guide](/blog/anki-images-not-showing/) covers further diagnosis. Keep unresolved media listed explicitly; a visible deck title doesn't establish that its pictures and recordings survived.

## Return the recovered deck to your daily profile

Once the rehearsal passes, switch to your original daily profile and confirm its name. Import the **recovered deck APKG**, using the options you checked. Repeat the ledger checks there. Media still present in the original profile may work immediately; restore any missing files from the verified source using the same procedure.

Check the recovered deck's options before studying. Don't reset cards or mass-reschedule them to make the due count look familiar. Your evidence is the saved card state and review history, alongside the preserved current work.

Export a new media-inclusive collection backup after verification. Only then resume syncing from the repaired daily profile. Keep both temporary profiles disconnected.

If Anki asks for a one-way sync, pause and identify which collection you intend to keep. **Upload** replaces AnkiWeb's collection with the verified local collection; **Download** replaces the local collection with AnkiWeb's version. Preserve any different, unsynced work on other devices before choosing. After an intentional upload, other devices need to download that collection when prompted. A forced one-way collection sync does not make media sync one-way. Follow Anki's [conflict guidance](https://docs.ankiweb.net/syncing.html#conflicts) when the states differ.

If no usable backup contains the deck, preserve the original profile's `deleted.txt` too. Anki's [deletion log](https://docs.ankiweb.net/backups.html#deletion-log) may help recover note text, but it is profile-specific and isn't a replacement for a deck backup with scheduling and media. Keep the current collection safe while investigating what that file can recover.
