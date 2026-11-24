---
title: "How to Find Anki Cards Without Audio"
description: "Find empty Audio fields, text placeholders, and missing recordings in an Anki deck using Browse and Tools → Check Media."
date: "2026-11-24"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/6d01233203525ff125fda03cbad34059f0542b43c2915d39c71b1405055a3996.webp"
keywords:
  - "find Anki cards without audio"
  - "empty Audio field in Anki"
  - "missing Anki audio files"
  - "Anki Check Media"
---

In desktop Anki, add `Audio:` to a **Browse** search to find notes with an empty **Audio** field. A field that says `record later` needs a broader search. If the field already points to a recording, **Tools → Check Media** can tell you whether the file is missing from your collection.

![A workshop volunteer looks at a painted wrench outline with a bare hook beside a hanging wrench](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/6d01233203525ff125fda03cbad34059f0542b43c2915d39c71b1405055a3996.webp)

## Find empty Audio fields in your deck

Open **Browse** and switch to **Notes** using the toggle to the left of the search box. You'll see one row per note. Paste this search for a deck called **Audio audit** with a note type called **Pronunciation**. [Anki Browse manual](https://docs.ankiweb.net/manual/browsing#table-modes)

```text
"deck:Audio audit" note:Pronunciation Audio:
```

Swap in your deck name, note type, and the field where you keep recordings. For a note type called **Spanish Vocabulary**, use `"note:Spanish Vocabulary"`. For a field called **Word Audio**, use `"Word Audio:"`. A deck search includes its subdecks. To start at a nested deck, use its full path, such as `"deck:Spanish::Pronunciation"`. Run the search separately for each note type that should have recordings. [Anki search syntax](https://docs.ankiweb.net/manual/searching#limiting-to-a-field)

## Catch placeholders like “record later”

Anki stores an attached sound as a reference such as `[sound:hello.mp3]` in the field. Keep the same deck and note type. The minus sign before the field search picks up notes whose **Audio** field lacks that pattern. [Anki’s sound reference syntax](https://docs.ankiweb.net/manual/importing/text-files#importing-media)

```text
"deck:Audio audit" note:Pronunciation -"Audio:*[sound:*]*"
```

This finds blanks and text placeholders. The note type filter matters in a mixed deck. In the test deck, dropping `note:Pronunciation` also picked up a note with no **Audio** field. That note generated two cards, so the broader search returned three notes and four cards. [Anki search filters and Cards versus Notes mode](/blog/anki-search-filters/)

## Find notes that point to missing audio files

From the main Anki window, run **Tools → Check Media**. Its missing list covers the whole collection, so it can include images and recordings from other decks. If it lists `absent.wav`, go back to **Browse** and search for that filename in your deck and audio field. [Anki’s Check Media guide](https://docs.ankiweb.net/manual/media#checking-media)

```text
"deck:Audio audit" note:Pronunciation "Audio:*[sound:absent.wav]*"
```

Copy the filename from the report. In the search, put a backslash before a literal underscore, as in `absent\_file.wav`. Click a matching note and use the field’s `</>` button to see the reference if Anki shows a play button. [Anki’s guide to matching special characters](https://docs.ankiweb.net/manual/searching#matching-special-characters) · [Anki editor controls](https://docs.ankiweb.net/manual/editing#editing-features)

## Fix one note and listen in review

For a blank or a placeholder, click into the audio field and attach the recording with the paperclip. For a broken reference, recover the original recording from its source or a backup that includes media. Remove just the broken reference and attach the recovered file, keeping the other contents of the field. If Anki gives the attachment a new filename, search for the old filename to find other notes that need the same edit. Run **Check Media** again after the repair. [Anki media and attachments](https://docs.ankiweb.net/manual/media) · [Anki backups](https://docs.ankiweb.net/manual/backups)

Try one affected card in review once the file is present. On the side that should play the recording, choose **More → Replay Audio**. If you hear the recording on replay and that side opens silently, check **Don’t play audio automatically** in the deck’s audio options. [Anki review controls](https://docs.ankiweb.net/manual/studying#editing-and-more) · [Anki audio options](https://docs.ankiweb.net/manual/deck-options#audio)

If replay stays silent, check which field the card template uses. One note can generate cards with different templates. A template can also generate speech from text in another field. [Anki card templates](https://docs.ankiweb.net/manual/templates/fields) · [Anki audio playback troubleshooting](/blog/anki-audio-not-playing/)

## What the test deck returned

Each search used the same deck and note type filters.

| Field search | Notes returned in the test |
| --- | --- |
| `Audio:` | The blank field |
| `-"Audio:*[sound:*]*"` | The blank field and `record later` |
| `"Audio:*[sound:*]*"` | The references to `present.wav` and `absent.wav` |
| `"Audio:*[sound:absent.wav]*"` | The reference to `absent.wav` |

Check Media reported `absent.wav` as the only missing file. `present.wav` was a generated tone stored in the collection. A blank note in a different deck stayed out of the scoped results. The searches read the field text. Check Media looks for files named in notes, so blanks and placeholders give it nothing to check.

AI helped research and write this guide and generated its cover image. The search results and media report come from a temporary collection tested with the Anki 26.09.4 backend on macOS 26.6.1 (arm64). The desktop controls and playback steps follow Anki’s manual. [Anki 26.09.4 release](https://github.com/ankitects/anki/releases/tag/26.09.4)
