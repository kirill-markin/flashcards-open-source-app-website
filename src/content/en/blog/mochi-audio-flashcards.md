---
title: "Mochi Audio Flashcards: Listening Prompts and Spoken Recall"
description: "Add recordings or text-to-speech to Mochi, put audio on the right side, and check that listening and spoken-recall cards test the skill you intended."
date: "2026-10-06"
image: "/blog/mochi-audio-flashcards.png"
keywords:
  - "Mochi audio flashcards"
  - "Mochi text to speech"
  - "Mochi audio autoplay"
  - "audio on front or back"
  - "listening flashcards"
---

An audio clip saying *la llave* can ask you to recognize “the key for opening a lock,” or give away the Spanish word you were supposed to recall. The file hasn't changed. Its position on the card has.

For **Mochi audio flashcards**, decide what you should do before revealing the answer. Put Spanish audio on the front for listening practice. Put it on the back when an English cue should make you say the Spanish word from memory. Start with three cards you can inspect, then reuse the layout that matches your task.

![An older man listens to a closed metal tin beside his ear while sitting in a garden shed doorway](/blog/mochi-audio-flashcards.png)

This guide follows Mochi's official documentation, checked October 6, 2026. The card layouts and acceptance ledger are original worked examples, with documentation-based expected results; they haven't been tested in the app.

## Give the three cards different jobs

Use the same vocabulary item, *la llave* (“the key for opening a lock”), to make the difference easy to see. That context matters: “key” alone could also mean a keyboard key. Keep a small ledger beside your rehearsal deck:

| Task | Before revealing the answer | Your response | After revealing the answer | Observed result |
| --- | --- | --- | --- | --- |
| Listening | Spanish audio; no Spanish transcript or English meaning | Give the English meaning: a lock key | `la llave` and `the key for opening a lock` | — |
| Spoken recall | English cue `the key for opening a lock`; no Spanish text or audio | Say `la llave` from memory | Spanish text and Spanish audio | — |
| Assisted pronunciation | Visible Spanish `la llave`; no model audio yet | Read it aloud | Spanish text and model audio | — |

Fill the final column after reviewing each card in your own app. Record the visible clues and when the clip plays, rather than just “audio works.”

The third card is useful, but it supplies the word. A successful attempt means you read it aloud before hearing the model; it doesn't demonstrate that you retrieved the Spanish from an English cue. For the wider choice of recognition and production tasks, see our [language-learning flashcard guide](/blog/how-to-use-flashcards-for-language-learning/).

## Set review direction and autoplay for the rehearsal

Keep all three layouts **forward-only**. Mochi allows reverse reviews for individual cards, whole decks, and globally. Check each card's **Review reverse** option, the deck's **Review Settings**, and **Settings → Review Settings** so each rehearsal starts at its intended prompt. Reversing the spoken-recall card starts with the Spanish answer and model audio, which defeats its task. [Mochi reverse-review settings](https://mochi.cards/docs/reviewing/review-reverse/)

For the first rehearsal, turn autoplay off and start each clip yourself. Mochi's admin documents **Settings → Preferences → Cards → Autoplay audio** in an [audio-playback support answer](https://forum.mochi.cards/posts/142). Its [changelog](https://mochi.cards/changelog/) also records a per-deck autoplay option. Those sources describe the controls; this guide doesn't report a fresh interface test.

Check the deck setting as well as the global preference, then review the cards using your intended settings. Audio placement determines which side contains the clip. Autoplay determines whether you have to start it. Turning autoplay off won't rescue a spoken-recall card that still exposes the answer audio on its front.

On the listening card, play before answering. On the other two, respond before revealing and hearing the model. If you later enable autoplay, repeat the ledger checks and record exactly when speech starts. Don't count a prompted repetition as unaided spoken recall. If you want vocabulary cards that work in both directions, give each direction its own useful cue; our [Mochi reverse-card guide](/blog/mochi-reverse-cards/) covers that setup.

## Attach one MP3 before trying a template

Create an empty deck named `Audio rehearsal`, with no template assigned. Prepare a short MP3 in which a speaker says only *la llave*. Listen to the original file first: an English translation or spoken introduction would change the prompt. Use a neutral filename such as `clip-01.mp3` so the filename doesn't supply a clue.

Drag the actual MP3 into the card's editing area. Mochi documents drag-and-drop attachments and uses Markdown image syntax for audio as well as images. A typed filename doesn't attach the file's bytes. [Mochi attachment and side syntax](https://mochi.cards/docs/markdown/advanced-formatting/)

Keep the attachment reference Mochi inserts. The following example calls the attached file `clip-01.mp3`; if your inserted reference differs, keep that actual reference in the same position. Arrange the first card like this, copying the contents without the surrounding code fence:

```markdown
Listen, then say the English meaning.

![Listening clip](clip-01.mp3)

---

la llave

the key for opening a lock
```

The `---` line divides the prompt from the answer. The caption `Listening clip` deliberately contains neither the Spanish word nor its translation. Inspect the rendered review side for other clues too: a title, caption, or visible filename can undo an otherwise audio-only prompt.

Before revealing, play the clip and give the meaning. Then reveal and compare. A visible player with no audible speech doesn't pass this check; you need to hear the intended phrase.

### Move the model to the answer for spoken recall

Create a second card and attach the actual MP3 to that card too. Don't assume that copying another card's filename transfers its attachment. Put the reference after the separator:

```markdown
Say the Spanish noun, including its article:

the key for opening a lock

---

la llave

![Answer pronunciation](clip-01.mp3)
```

Say your answer before revealing. If you've forgotten the word, hearing it and repeating it is a useful correction, but that attempt wasn't successful recall. Our rule includes the article, so `llave` alone is incomplete for this particular prompt.

For the third card, attach the file again and use this reading task:

```markdown
Read this aloud before hearing the model:

la llave

---

la llave

![Model pronunciation](clip-01.mp3)
```

Compare your reading with the clip after revealing. These layouts give you a model to hear; they don't record, recognize, or automatically grade your speech.

## Optional: generate speech from a Spanish field

Mochi text to speech can also turn a field's text into an audio clip. The automatic template approach below uses a **Text to speech dynamic field**, which Mochi currently includes with **Pro**. Ordinary card templates are included on Free. Its separate text-to-speech allowance doesn't grant access to dynamic fields. Check [Mochi's current plan comparison](https://mochi.cards/pricing/) and your remaining service usage under **Settings → Subscription** before using this path.

Use separate empty rehearsal decks for the listening, spoken-recall, and reading templates. Keep those cards forward-only too. In each deck, choose **Add Template → New template**. Rename its initial **Name** field to `CardID`, keep it as the primary field, then add the other fields with the exact names shown:

| Field name | Type | Rehearsal value or configuration |
| --- | --- | --- |
| `CardID` | Basic Text; primary field | A neutral name: `listening-01`, `recall-01`, or `reading-01` |
| `Spanish` | Basic Text | `la llave` |
| `English` | Basic Text | `the key for opening a lock` |
| `Speech` | Dynamic: Text to speech | Input source: `Spanish`; speech language: Spanish (`es`) |

The primary field supplies the card's name. Using a neutral ID avoids naming the listening card after its answer. Template placeholders use double angle brackets, such as `<<Spanish>>`. [Mochi template setup](https://mochi.cards/docs/templates/intro-to-templates/)

Mochi's [dynamic-field documentation](https://mochi.cards/docs/templates/dynamic-fields/) establishes speech generation and using another field as input. A user example on [Mochi's forum](https://forum.mochi.cards/posts/287) also identifies a Spanish source field and language `es`; the layouts below are our own examples.

Keep `Spanish` as plain text. It is the speech source even on a listening card where that text stays on the answer side. Selecting `English` as the source would send the English cue to the speech generator instead of `la llave`. If you later use another dynamic field as the source, Mochi requires that source field to appear in the template Markdown for its content to generate.

### Listening template

```markdown
Listen, then say the English meaning.

<<Speech>>

---

<<Spanish>>

<<English>>
```

This layout places the speech output on the front and the two text fields on the answer side. Inspect the actual player and surrounding interface to confirm that no transcript or answer has appeared before reveal. The template text alone can't establish that the rendered listening prompt is free of clues.

### Spoken-recall template

```markdown
Say the Spanish noun, including its article:

<<English>>

---

<<Spanish>>

<<Speech>>
```

### Assisted-pronunciation template

```markdown
Read this aloud before hearing the model:

<<Spanish>>

---

<<Spanish>>

<<Speech>>
```

Create a new card in each prepared deck and fill its basic fields. Mochi applies the deck template to newly created cards; assigning a deck template doesn't automatically convert existing cards. [Adding a template](https://mochi.cards/docs/getting-started/adding-a-template/)

If you apply a template to an existing plain card, its raw Markdown is ignored during rendering, and missing field values can leave it looking blank. Keep this rehearsal separate from your established collection. For bulk source-field entry after the layouts pass, use the [Mochi CSV import guide](/blog/mochi-csv-import/).

## Accept the card only when its task survives

Compare all three cards against the ledger in forward review view, with the answer concealed. Use these checks to decide whether the setup is ready for more vocabulary:

- **Listening:** you hear *la llave* before answering, but neither the Spanish spelling nor the English meaning appears as a visual clue. On reveal, you see `la llave` and `the key for opening a lock`. A transcript in the caption fails this version of the task.
- **Spoken recall:** only the English cue supplies the word's meaning before reveal. The Spanish spelling and model audio arrive afterward. Any Spanish audio available before your response gives you help the prompt wasn't meant to offer.
- **Assisted pronunciation:** the Spanish is visibly available from the start. You read it before hearing the model, then compare. Record this as reading and pronunciation practice.

When something fails, trace it to the setting or content involved. A silent attachment means checking the actual file and its reference. Missing generated speech means checking `Spanish`, the `Speech` source and language, access to dynamic fields, and remaining usage. A populated field omitted from the card means comparing its placeholder with the field name. If the review starts with the answer, check reverse reviews. If audio plays at the wrong moment, check which side contains it, then autoplay.

Listen to every new model clip before expanding the deck. The desired result is a card that makes you perform the intended task at the intended moment. Once those three rehearsal cards agree with your ledger, add a small set of your own words and repeat the same checks.
