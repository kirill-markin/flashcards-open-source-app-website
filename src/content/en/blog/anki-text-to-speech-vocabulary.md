---
title: "How to Use Anki Text-to-Speech for Vocabulary"
description: "Use Anki text-to-speech to listen before seeing a word and to speak before hearing it. Copy four templates and test the timing with two French notes."
date: "2026-11-18"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/0248e05732a985fd0beaa004e70f199159634b9cdc7b9b9889186115e3d59723.webp"
keywords:
  - "Anki text-to-speech for vocabulary"
  - "Anki pronunciation cards"
  - "listening flashcards"
  - "Anki TTS on answer side"
---

One Anki note for *le rideau* can give you two ways to practice it. On the listening card, you hear *le rideau* and recall “curtain” before the spelling appears. On the speaking card, you read “curtain (window covering),” say the French out loud, and then flip to hear it. The synthesized voice gives you a pronunciation to compare with your own.

The difference is where you put Anki’s text-to-speech (TTS) tag. Put it on the listening card’s question and the speaking card’s answer. Try both with two notes before using the templates for the rest of your vocabulary.

![Two birders listen beside wetland reeds while one holds a closed field guide](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/0248e05732a985fd0beaa004e70f199159634b9cdc7b9b9889186115e3d59723.webp)

## Make a test note type

1. In desktop Anki, go to **Tools → Manage Note Types → Add**. Select **Clone: Basic (and reversed card)**, click **OK**, and name the copy **French pronunciation check**. If that note type is missing from your collection, choose **Add: Basic (and reversed card)**. Template changes apply to every note of that type across your collection, so make a fresh type for the test. [Anki’s note type instructions](https://docs.ankiweb.net/manual/editing#adding-a-note-type)
2. Select **French pronunciation check** in **Manage Note Types** and click **Cards**. Use the numbered entries in the **Card Type** dropdown to switch between the two cards. For each entry, replace the entire contents of **Front Template** and **Back Template** with the matching blocks below. [Anki’s template editor](https://docs.ankiweb.net/manual/templates/intro)

Both cards read from the same two fields. Keep **Front** for French and **Back** for English, even when a card shows English on the question side. [Anki’s field replacement rules](https://docs.ankiweb.net/manual/templates/fields#basic-replacements)

## Card 1 asks what you heard

Under **Card Type**, select **1**. Paste this into **Front Template**.

```html
{{#Front}}
What does this French word mean?
{{tts fr_FR:Front}}
{{/Front}}
```

The tag reads the `Front` field using an available French (France) voice. The lines around it make Anki generate this card when `Front` has text. The screen shows the instruction while the French word comes through the audio. [Anki’s field TTS syntax](https://docs.ankiweb.net/manual/templates/fields#text-to-speech-for-individual-fields) · [Anki’s conditional template rules](https://docs.ankiweb.net/manual/templates/generation#conditional-replacement)

Paste this into **Back Template**. It shows the French spelling and English meaning. Revealing it starts no new speech.

```html
{{Front}}
<hr id="answer">
{{Back}}
```

## Card 2 gives you time to say it

Switch to **2** in **Card Type**. Paste this into **Front Template**. You’ll see the English cue and get a quiet moment to say the answer.

```html
Say it in French.
<br>
{{Back}}
```

Paste this into **Back Template**, then click **Save**. When you flip the card, you’ll see the French and hear the synthesized voice.

```html
{{Back}}
<hr id="answer">
{{Front}}
{{tts fr_FR:Front}}
```

If you adapt a template that uses `{{FrontSide}}`, that special field copies the question’s display. To start speech when the answer opens, include the TTS tag on the answer template itself, as in Card 2. [Anki’s `FrontSide` behavior](https://docs.ankiweb.net/manual/templates/fields#special-fields)

## Check four cards from two notes

Open **Add** from the main Anki window. Select **French pronunciation check** as the note type and create or select a deck called **French Audio Check**. Enter each row as one note and click **Add** after filling in both fields. The words in parentheses narrow down the English cue when you’re trying to recall the French.

| Front | Back |
| --- | --- |
| le rideau | curtain (window covering) |
| la bouilloire | kettle (for boiling water) |

In **Browse**, switch to **Cards** mode and search `deck:"French Audio Check"`. You should see four rows, with a listening card and a speaking card for each note. In **Notes** mode, Preview shows the first card of each note, so use **Cards** to check both siblings. Select each row and open **Preview**. Clear **Back Side Only** if it’s checked, then use the right arrow in Preview to reveal the answer. Check what you see on each side against the table. [Anki’s Browse modes and Preview](https://docs.ankiweb.net/manual/browsing#editing-area)

| Card | What you see on the question | What plays on the question | What you see on the answer | What plays on reveal |
| --- | --- | --- | --- | --- |
| 1 · Listen | “What does this French word mean?” | The French term | French term and English meaning | No new speech |
| 2 · Speak | “Say it in French.” and the English cue | Silence | English cue and French term | The French term |

Now check the sound in a real review. Open the test deck’s **Options → Audio** and confirm **Don’t play audio automatically** is off. Decks on the same options preset share that setting. Return to **French Audio Check** and click **Study Now**. On the listening card, let the prompt finish before clicking **Show Answer**. The spelling and meaning should appear without a fresh clip starting. On the speaking card, say the French before clicking **Show Answer**, then listen for the voice. If **Bury new siblings** holds one card back, check that card in review when it becomes available. If you study on mobile, repeat the playback check there. [Anki’s study controls](https://docs.ankiweb.net/manual/studying#questions) · [Deck audio options](https://docs.ankiweb.net/manual/deck-options#audio)

## If the timing or audio differs

**No new speech** in the table refers to autoplay on reveal. Manual replay is separate. In review, press `R` or `F5` to replay audio. On the listening card’s answer side, that can replay the French question audio if **Skip question when replaying answer** is off. The visibility of the play icon is controlled by **Show play buttons on cards with audio** under **Preferences → Review**. [Anki’s audio options](https://docs.ankiweb.net/manual/deck-options#audio) · [Anki’s review preferences](https://docs.ankiweb.net/manual/preferences#review)

If the sides that should speak are silent, temporarily add `{{tts-voices:}}` to a template in the copy. Look for `fr_FR` in Preview, then remove the tag. Anki uses system voices on Windows and macOS. On Linux, these tags need a TTS add-on. Check the voice list on the computer you plan to study on. [Anki’s voice setup](https://docs.ankiweb.net/manual/templates/fields#text-to-speech-for-individual-fields) · [Anki audio troubleshooting](/blog/anki-audio-not-playing/)

Once both cards work, try a few words you want to recognize and say. For another language, put that language in **Front**, replace `fr_FR` in both tags with a code from the voice list, and update both prompts. If you want to convert notes you already review, check how the old fields and cards map to the new ones before changing their type. [Guide to adding reverse cards to existing Anki notes](/blog/anki-reverse-cards/)

*An automated check with Anki 26.09.4 on macOS rendered four cards from these two notes and verified the text and TTS tags on each side. A separate check generated two AIFF files with the installed Thomas voice and the same macOS `say` command used by Anki’s desktop speech player. Verification covered backend rendering and file synthesis. The review steps above let you check playback on the devices you use. AI substantially assisted the research, verification, writing, and editing and generated the cover image.* [Anki 26.09.4](https://github.com/ankitects/anki/releases/tag/26.09.4) · [Anki’s macOS speech player](https://github.com/ankitects/anki/blob/26.09.4/qt/aqt/tts.py#L176-L260)
