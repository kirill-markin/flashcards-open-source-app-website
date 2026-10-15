---
title: "Anki Audio Not Playing? Check Files, TTS, and Autoplay"
description: "Diagnose silent Anki cards by separating sound files from text-to-speech, testing manual replay, and checking the card side before changing sync settings."
date: "2026-10-15"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/01927c20975c605469a3d34c314733f1cba6aa8a18edbcf0fc97e1ac2b7dee6f.webp"
keywords:
  - "Anki audio not playing"
  - "Anki sound not working"
  - "Anki audio autoplay"
  - "Anki text to speech not working"
  - "Anki FrontSide audio"
---

A pronunciation card can speak on the question side and stay silent when you reveal the answer. That alone doesn't mean its recording disappeared. Anki's `{{FrontSide}}` repeats the front's content on the back without automatically replaying its audio. [Anki's template reference](https://docs.ankiweb.net/manual/templates/fields#special-fields)

**If Anki audio isn't playing, start with one affected card: identify its sound source, try manual replay, then compare the question and answer sides.** A stored recording and text-to-speech need different repairs. So do missing sound and sound that simply doesn't start automatically.

![A man lifts a brake cable clear of a brass bicycle bell while checking its thumb lever](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/01927c20975c605469a3d34c314733f1cba6aa8a18edbcf0fc97e1ac2b7dee6f.webp)

This guide was researched and written with substantial AI assistance using official Anki documentation checked October 15, 2026. The exercise below is proposed teaching material, not a hands-on test. No Anki app, browser playback, mobile client, or operating-system speech engine was tested for this article. Expected results are documentation-based predictions; the observation record is left blank.

## Find out what should produce the sound

Open the affected note in the editor and inspect its fields and card template. If the editor displays a play button instead of a filename, inspect the field's HTML to find the sound reference.

| What you find | Sound source | First check |
| --- | --- | --- |
| `[sound:hello.mp3]` inside a note field | A stored attachment | Does the named file exist and play? |
| `{{tts en_US:Front}}` on a card template | Speech generated from the `Front` field | Is that field filled, and can this client use a suitable voice? |

A single card can use both. Hearing its recording doesn't establish that its TTS works, or the other way around. Identify which sound is absent.

For an attachment, the complete sound reference belongs **inside the field**. The template includes that field with something like `{{Audio}}`. Confirm the field contains an attachment and the relevant side includes it. Building a filename inside the template with `[sound:{{Word}}]` is unsupported and doesn't work reliably with media checking or import/export. See [Anki's media field rules](https://docs.ankiweb.net/manual/templates/fields#field-references).

If other audio on the device is silent too, check volume and the selected output device first. Then return to the affected card.

## Try replay before changing autoplay

On desktop Anki, use **More → Replay Audio**, or press **R** or **F5**, while the question is showing. Repeat after revealing the answer, recording each result separately. [Anki's study controls](https://docs.ankiweb.net/manual/studying#editing-and-more)

| What you hear | What that narrows down | Next useful check |
| --- | --- | --- |
| Manual replay works; automatic playback doesn't | That sound can play in this client | Inspect the deck's audio option and that side's template. |
| Question plays; revealing the answer doesn't start it again | The front's sound source works | Check whether the back only inherits it through `{{FrontSide}}`. |
| One recording fails; another plays | Playback works for at least one file | Inspect the failing attachment, reference, and format. |
| A recording plays; generated speech doesn't | File playback works | Investigate the TTS tag and voice separately. |

These are clues, not proof of a single cause. In **Deck Options → Audio**, two settings answer different questions:

- **Don't play audio automatically:** turn this off if you want autoplay. When it's on, use manual replay.
- **Skip question when replaying answer:** controls whether manual replay on the answer side includes the question's audio. It doesn't change autoplay. A front recording can therefore replay manually from the back even though `{{FrontSide}}` doesn't start it automatically.

These options belong to shared presets. Check which decks use the preset before editing it; our [Anki deck options guide](/blog/anki-deck-options-presets/) explains that scope. The distinctions above follow [Anki's audio options](https://docs.ankiweb.net/manual/deck-options#audio).

A missing play icon isn't enough to diagnose missing sound: **Show play buttons on cards with audio** in desktop preferences controls their visibility. If a recording stops as soon as you reveal the answer, inspect **Interrupt current audio when answering**. [Anki preferences](https://docs.ankiweb.net/manual/preferences)

## Compare two templates with one temporary recording

Use desktop Anki and a short recording you own. This comparison isolates attachment playback from the way the back template includes it. Keep your study notes unchanged while you try it.

1. Create a temporary deck called `Audio check`. In **Tools → Manage Note Types → Add**, clone **Basic** as `Audio check Basic`. Select this copy for the test note. A separate deck alone doesn't isolate templates: editing a note type affects every note using it. [Anki's editing guide](https://docs.ankiweb.net/manual/editing#adding-a-note-type)
2. On the copied type, confirm that `Front` and `Back` exist, then add an `Audio` field. Field names are case sensitive. Add one note with `Hello` in `Front` and `A greeting` in `Back`.
3. Record yourself saying “Hello,” save the file, and verify you can hear it outside Anki. Prefer MP3 for this control; Anki's manual describes it as broadly supported across clients. Select the `Audio` field and attach the real file with the editor's paperclip. Anki copies attachments into its media folder. Typing `[sound:hello.mp3]` alone doesn't supply a file. [Anki media manual](https://docs.ankiweb.net/manual/media)
4. In the temporary deck's options, use **Add Preset** to give it its own preset before changing audio settings. Leave **Don't play audio automatically** off. Open only the temporary deck for review, and let the question audio finish before revealing the answer.

The study menu's **Record Own Voice** is for a temporary pronunciation comparison. Its recording disappears when you move to the next card, so use an editor attachment for this exercise. [Anki's recording controls](https://docs.ankiweb.net/manual/studying#editing-and-more)

### A: Put the recording on the front

In **Cards**, set the copied type's front template to:

```html
{{Front}}
{{Audio}}
```

Set its back template to:

```html
{{FrontSide}}
<hr id=answer>
{{Back}}
```

Save, open the temporary card in review, and record autoplay and manual replay on each side. Leave the temporary card ungraded so you can reopen it for the next comparison.

### B: Include the recording directly on the back

Keep the same front. Replace only the copied type's back template with:

```html
{{Front}}
<hr id=answer>
{{Back}}
{{Audio}}
```

Reopen the temporary card in review and repeat the observations. The recording is now explicitly included on each side.

| Arrangement | Predicted question autoplay | Predicted answer autoplay |
| --- | --- | --- |
| A: `Audio` on front; back uses `FrontSide` | Plays | Doesn't restart the front audio |
| B: `Audio` explicitly on each side | Plays | Plays again |
| Either arrangement with automatic audio disabled | Doesn't play automatically | Doesn't play automatically |

These predictions assume a playable attachment, working output, and the stated templates. They follow [Anki's documented FrontSide behavior](https://docs.ankiweb.net/manual/templates/fields#special-fields). Manual replay on the answer side is a separate observation: record the **Skip question when replaying answer** setting alongside it.

If B restores the repeat you wanted, you've identified a template change to consider. Preserve your original template before applying it to a real note type, and remember that other notes share it. These snippets are for the simple test card; don't replace a complex downloaded template wholesale.

## If Anki text-to-speech isn't working

For a separate TTS check, replace the temporary front template with:

```html
{{Front}}
{{tts en_US:Front}}
```

Set its back template to just:

```html
{{Back}}
```

The recording can remain in the note's `Audio` field, but neither template now includes it. Reopen the temporary card and try replay on the question side. This prevents a working recording from being mistaken for working TTS.

Windows, macOS, and iOS use operating-system voices. Linux Anki doesn't ship a speech engine; its manual describes installing a TTS add-on. Temporarily add `{{tts-voices:}}` to the copied template to see which voices are available. Check that device's output rather than assuming it has the voice from another computer. [Anki TTS reference](https://docs.ankiweb.net/manual/templates/fields#text-to-speech-for-individual-fields)

If the simple TTS card speaks but the affected card doesn't, compare its source field, language tag, and any `voices=` restriction. Try a listed voice supporting the requested language in a copied template. If you install a new operating-system voice, restart Anki before checking again. For Linux engine setup, follow the manual's TTS instructions; this article hasn't tested an add-on.

More media syncing won't install a speech voice. Record the client version and exact error if the simple card still fails. Offline TTS availability depends on the engine and voice, so try it on the device you'll carry before relying on it. Our [Anki offline guide](/blog/does-anki-work-offline/) covers trip preparation.

## When a stored recording fails

For an attachment, run **Tools → Check Media** on desktop. A missing-file result means a note references a file absent from its media folder. Recover your original recording or a media-inclusive backup, then attach it through the editor to the affected note. For a shared deck that never included its recordings, ask the publisher for those assets. Sync can't supply files absent from the source. [Media checking](https://docs.ankiweb.net/manual/media#checking-media), [shared-deck FAQ](https://faqs.ankiweb.net/a-shared-deck-is-not-showing-images-or-playing-audio.html)

A clean Check Media report doesn't establish correct templates: the tool doesn't scan them. If the file exists, compare its actual filename with `[sound:…]`, including capitalization, and correct the reference if they differ. If only that file fails, try playing it outside Anki. A working MP3 attached to the temporary note gives you a comparison for a damaged or less portable file; changing a filename extension doesn't convert its audio format. [Anki filename FAQ](https://faqs.ankiweb.net/sounds-or-images-are-not-appearing-on-ankiweb-or-the-mobile-clients.html)

If the recording works on the source computer but fails elsewhere, wait for media sync to finish on both devices. Media transfers separately from card data; on iOS, switching apps or turning off the screen interrupts transfer. [Anki media sync FAQ](https://faqs.ankiweb.net/media-files-may-take-time-to-sync.html) The [missing images guide](/blog/anki-images-not-showing/) has the fuller source-computer → AnkiWeb → phone media trace. Use that trace for stored recordings; it doesn't test TTS support.

## Keep a small record of what actually happened

Fill this in from your own observations. The blanks are deliberate; this article has no measured playback results.

```text
Client and version:
Operating system (and browser, if applicable):
Affected card: stored file / TTS / both
Actual filename or TTS tag:
Question: automatic ___ / manual replay ___
Answer: automatic ___ / manual replay ___
Don't play audio automatically setting:
Skip question when replaying answer setting:
Temporary recording, arrangement A:
Temporary recording, arrangement B:
Temporary TTS result and available voices:
Check Media result, if using a file:
Devices where the same attachment plays:
Exact error message:
```

Use the result to make the smallest relevant repair: restore an attachment, correct a field reference, make a voice available, or explicitly include the desired audio on the back. Finish by hearing the intended prompt during review on the device you actually use. If sound is the question, restore it before judging whether you remembered the answer.
