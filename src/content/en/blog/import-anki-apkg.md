---
title: "How to Import an Anki Deck (.apkg) Into Nibomo: A Tested Walkthrough"
description: "Attach an Anki .apkg to Nibomo's AI chat and it saves the cards. In a test, 11 cards, their tags, a subdeck and an image came over in 46 seconds. Review history didn't."
date: "2026-11-08"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/4582484682bb3b61ab695a4130ef89e83e980cb7dc8f80a183a3c3cb960564ea.webp"
keywords:
  - "import Anki deck"
  - "Anki apkg import"
  - "import apkg file"
  - "Anki alternative that imports apkg"
  - "move Anki cards to another app"
  - "Anki deck to Nibomo"
---

A made-up Spanish deck with 8 notes and 11 Anki cards went into Nibomo's AI chat as one `.apkg` file. About 46 seconds later the workspace had 11 new cards, two decks, the original tags and the one picture the deck contained. The 12-day intervals two of those cards had in Anki were gone, and every card started as new.

That's how you import an Anki deck into Nibomo today: export the deck as an `.apkg`, attach it in AI chat, and ask for cards. There's no one-click importer and no preview screen. The AI reads the package and saves the cards straight into your workspace, so you check the result afterward, not before.

![A woman packs a framed pear painting into a moving box, leaving its pale outline and hanging hook on the old wall](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/4582484682bb3b61ab695a4130ef89e83e980cb7dc8f80a183a3c3cb960564ea.webp)

> **Disclosure:** I am Kirill Markin, and I build [Nibomo](https://nibomo.com/). I didn't run the test in this article myself. An AI agent ran it on November 8, 2026, in the iOS Simulator (iPhone 17 Pro, iOS 27, a Nibomo 1.41.0 development build) as a guest on the production backend, using a deck built only for the test. The limits below come from Nibomo's source code at commit `7a0fe80b2`.

## What moved from Anki, and what didn't

The sample deck was small on purpose but covered the awkward cases: basic notes, "Basic (and reversed card)" notes, cloze notes, a subdeck, tags, an image, and two cards with real review history. Here's what each one turned into:

| In the Anki deck | What arrived in Nibomo |
| --- | --- |
| 3 Basic notes | 3 cards with the same front and back |
| 2 "Basic (and reversed card)" notes | 4 separate one-way cards, one for each direction |
| 2 Cloze notes with 3 deletions | 3 question-and-answer cards, reworded by the AI |
| A note with an image on the front | 1 card with the image shown in Review |
| Tags (spanish, greetings, geography, food, image) | Kept, plus each deck name added as a tag |
| Deck `Sample Spanish` and subdeck `Sample Spanish::Food` | 2 Nibomo decks, side by side, not nested |
| Two cards with 3 reviews and a 12-day interval | New cards, due now, with no history |

Card content travels well. The cloze format doesn't: Nibomo cards have a front and a back, so `{{c1::Madrid}} is the capital of {{c2::Spain}}.` became "What is the capital of Spain?" / "Madrid" and "Madrid is the capital of which country?" / "Spain". The meaning was right in this test. The wording was the AI's own, though, and the original sentence with a gap is gone.

Your Anki learning state stays behind: review history, intervals and due dates. So does Anki's card machinery, meaning note types, card templates, CSS and JavaScript, and add-ons. The AI flagged the review history itself, both in its plan and in its final reply. Audio wasn't part of the test deck, so this test says nothing about sound files.

## Export the deck from Anki as an .apkg

Use desktop Anki and export one deck, not the whole collection. Nibomo's AI chat accepts deck packages (`.apkg`), not collection packages (`.colpkg`). If you're unsure which file is which, the [APKG vs COLPKG guide](/blog/anki-apkg-vs-colpkg/) explains the difference.

1. Open **File > Export**.
2. Choose **Anki Deck Package (.apkg)** and pick the deck. Child decks come along with it.
3. Leave **Include media** on if your cards have images.
4. Turn on **Support older Anki versions (slower/larger files)**.
5. Save the file somewhere your phone or browser can reach it.

Review history doesn't reach Nibomo either way: the test deck carried some, and none of it transferred. Still, turn **Include scheduling information** off for a clean copy. With it on, Anki keeps its `marked` and `leech` tags on the notes, and they may arrive in Nibomo as ordinary tags.

The fourth step is the one that matters for images. [Anki's export manual](https://docs.ankiweb.net/exporting.html) says this option creates a legacy version of the file; without it, Anki writes a modern format that older clients can't read and compresses the media files. Nibomo's backend hands the AI the list of media file names only for the legacy formats. For the modern format it still reads the cards, but that list isn't unpacked, and that case wasn't tested.

One more honest caveat: the test deck was a legacy-format package built with a script (genanki), not an export from Anki itself. A real Anki export with the option on uses a slightly different legacy layout. Nibomo's code reads that layout too, but that exact file wasn't part of the test.

While you're in the export dialog, save a full backup as well. A `.colpkg` with media is your way back if anything goes wrong. Nibomo only reads the exported file and never touches your Anki collection, but a backup is cheap insurance before you change apps.

## Attach the .apkg in Nibomo's AI chat

Open the AI tab in the app, or [start with the getting-started guide](/docs/getting-started/) if you don't have Nibomo yet. You can do this as a guest. The first time, the app asks you to allow AI data sharing, because the file goes to the AI. Skip Library's **Import** button for this: in the iPhone app it only takes Nibomo's own `.zip` workspace package, not an Anki deck.

Tap the paperclip, then **Choose File**. On iPhone the Files picker opens on an empty Recents tab, so tap **Browse** and find the package. Don't worry about the generic "?" icon on the file; it still opens.

![iPhone Files picker in Nibomo showing On My iPhone with the sample-spanish.apkg file selected and the Open button](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/e18fb9241279339928861c26994b6dcbdae571c083c0a4e7bfe772bc6999afe9.webp)

After you tap **Open**, the file sits as a chip above the message box. The request in the test was one plain sentence:

![Nibomo AI chat message box with the sample-spanish.apkg attachment and the request "This is my Anki deck. Please turn it into Nibomo cards."](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/d29e0c5091ff117223990747e5d00ddf87f79bf8b1bcac1bb09077a1f52197dc.webp)

That was enough. If you care about something specific, say it in the same message, for example how cloze notes should be worded or which tag to put on every imported card.

The iPhone app was the only client tested. The Android app and the [web app](https://app.nibomo.com) accept `.apkg` in their AI chat file pickers too, according to the same source code.

## What the AI did with the package

The chat showed a one-line plan while it worked: 11 cards in one batch, the Food subdeck kept, reverse cards and the apple image kept, cloze deletions turned into question-and-answer cards, and review history not transferred. Then it opened the Anki collection, read the note types, decks, notes and cards, checked the existing workspace for duplicates, uploaded the image, and saved everything in one write.

![Nibomo AI chat after sending the apkg, showing "Worked for 46s" and a reply saying all 11 cards were imported into Sample Spanish with a separate Food deck, tags, reverse cards and the apple image preserved, and that cards start as new without Anki review history](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/2a86d621456e1351912c1cd062e88bfbc482972605124a6f8ae82acac0d472fa.webp)

The whole import cost one AI chat message. Free guests get 15 a month, free signed-in accounts 50, and paid plans 1,000.

There was no confirmation step. Nibomo's AI is set up to act on a clear request, so "turn it into cards" means the cards get saved. If you want to see some cards before anything is written, ask for that in your first message, for example "Show me five cards from this deck before saving anything". The chat's instructions tell it to show cards first when you ask; that variation wasn't part of this test.

## Check the imported cards before you study

Open **Library**. In the test, **Cards** showed all 11 imported cards marked New, each with its Anki tags and the deck name as a tag.

![Nibomo Cards list showing imported Spanish cards from hola and la manzana to bread and good morning, including the reworded Madrid and water cloze cards, each marked New with tags like spanish, greetings, food and Sample Spanish](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/3399f781e2825ea17a9df8e948b73d5d7d5821a21feadeb731f09df0fb32d5b3.webp)

**Decks** showed "Sample Spanish" with 11 cards and "Sample Spanish::Food" with 4, both at 0 reviewed. All cards also counts the 5 demo cards the guest workspace already had; they are the 5 reviewed. A Nibomo deck is a saved filter over tags, so the Food cards appear in both decks, and the `::` in the name is just text. If you relied on Anki's deck tree, expect a flat list. The [tags vs decks guide](/blog/anki-tags-vs-decks/) covers how the two ideas differ in Anki.

![Nibomo Decks screen showing All cards, including 5 earlier demo cards, Sample Spanish with 11 cards, 11 new and 0 reviewed, and Sample Spanish::Food with 4 cards, 4 new and 0 reviewed](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/d4f8c0fcc99eb5068b78803b7ef72cb334369b9621023b541cf63e1c26c555ac.webp)

Check image cards in **Review**. On iPhone, the Cards list currently shows an image card's front as raw text, something like `![Red apple](fcasset:…)`, instead of the picture. That's a display bug in the list, and it affects every image card, imported or not. In Review, the apple card showed its picture on the front and "la manzana roja (the red apple)" on the back.

![Nibomo Review showing the front of an imported card, "Which fruit is this?", with a drawing of a red apple](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/dbc3b8d74c94bb40d18e69756f0a207169c1009c3666c93d3c4df2aee2a898a1.webp)

A short checklist for your own deck:

- Does the card count match the number of Anki cards, counting both directions of reversed notes?
- Do the reworded cloze cards still ask what you meant to test?
- Does every image card show the right picture in Review? Nibomo doesn't unpack media files for the AI, so the AI pulled the one image out of the package with its own script. That script saved every media file under the same name, which is fine for one image but could mix up pictures in a deck with several.
- Did shared tags merge with tags you already had? In the test, `geography` now covered 5 older cards and 2 imported ones.

If a card is wrong, ask the chat to fix it or edit it yourself. Cards that need rewriting often have the problems in [fixing AI flashcards](/blog/how-to-fix-ai-flashcards/).

## Limits to know before importing a big deck

These come from the source code, not the 11-card test:

| Limit | Value |
| --- | --- |
| Size of one attached file | 30 MB |
| Files per message | 10 |
| Card database inside the package over 200 MB once unpacked | Refused |
| Package with a format version the reader doesn't know | Refused with an error |
| Large card jobs | The AI is told to state a plan and save in batches |

Image-heavy decks are the most likely to hit the 30 MB cap, and image count matters too: each script the AI runs can upload at most 20 images and has 90 seconds, so a deck with many images takes the AI more steps. Splitting a big deck into several smaller decks in Anki and importing them one by one keeps each file under the cap and makes each result easier to check. If something goes wrong, you find out while there are only a few hundred cards to fix.

A large deck wasn't tested. Neither was the modern package format, or a deck with many images. Start with your smallest real deck, check it, then move on to the big ones.

## When you should keep studying in Anki

The `.apkg` route moves card content. It doesn't move your learning state or Anki's card machinery. Stay in Anki, at least for that collection, if you depend on:

- review history and current intervals you don't want to reset;
- custom note types, templates, CSS or JavaScript;
- add-ons that are part of how you study;
- cloze cards you want to keep as cloze;
- Image Occlusion or decks where most of the meaning sits in images and audio.

The [Anki vs Nibomo comparison](/blog/anki-vs-flashcards-open-source-app/) goes through the tradeoffs in more detail. If you do switch, pick a day and stop reviewing the same cards in Anki. Two apps scheduling the same material will drift apart right away. Keep the `.colpkg` backup in case you change your mind.

## The older option: an Anki TXT export

Before Nibomo's AI chat could read `.apkg` files, the way in was a **Notes in Plain Text** export from Anki, attached to the chat as a `.txt` file. That still works, and it's handy when you want to clean up fields in a text editor first or move only some of a deck's fields. It never carries images. The [TXT export guide](/blog/migrate-from-anki-txt-export-open-source-flashcards/) walks through it.

For most decks, the `.apkg` is the simpler start: one file, one message, and in the test the tags and the image came along with the cards.
