---
title: "How to Import RemNote Flashcards Into Nibomo"
description: "Export RemNote flashcards as an Anki package, or bring notes as Markdown or plain text. Try one nested document and check the cards in Nibomo."
date: "2026-11-12"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/49c7110e36b9818151701c9d4d6a651b0592a7fdf33df7aa6160c84c90b9a7c5.webp"
keywords:
  - "RemNote to Nibomo"
  - "import RemNote flashcards"
  - "RemNote Anki export"
  - "RemNote Markdown export"
---

“How do I ask where the platform is?” works as a flashcard when the heading above it says “French practice.” After an import, the question might have to stand on its own. Try a RemNote document with a card like that before moving everything to Nibomo.

For cards you already study, export **Anki (Flashcards Only)** and upload the `.apkg` directly to **Import from RemNote**. For notes you want to turn into cards, use **Markdown** or **Text**.

![A traveler frames a red train door and the platform edge with a cardboard viewfinder.](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/49c7110e36b9818151701c9d4d6a651b0592a7fdf33df7aa6160c84c90b9a7c5.webp)

## Export one document from RemNote

Open the document and choose **Export** from the three-dot menu in the upper right. Pick a format, then use the download button. RemNote also offers **Settings > Export** for the whole knowledge base. Start with the smaller document so you can check every card. [RemNote’s export guide](https://help.remnote.com/en/articles/7898019-exporting-and-printing-notes)

| Format | What to expect in the file |
| --- | --- |
| **Anki (Flashcards Only)** (`.apkg`) | Existing flashcards with the parent outline context that RemNote adds to them. Ordinary bullets without flashcards are skipped as standalone items. |
| **Markdown** (`.md`) | The document’s notes with Markdown formatting. Pick this if headings, lists, or emphasis help you read the material. |
| **Text** (`.txt`) | The document’s plain text, with indentation for the outline. Pick this if the words and nesting are enough. |

Open a Markdown or Text export in a text editor before uploading it. If you can see which lines belong on each side of a card, the AI has clearer material to work with. Trim unrelated notes from a copy of the file and keep the headings that give short questions their meaning. Use the `.apkg` if you want to start from the original questions and answers.

## Start the import in Nibomo

1. Open [Nibomo on the web](https://app.nibomo.com/?locale=en) and switch to the workspace where you want the cards.
2. Go to **Library > Import > Import from RemNote**. If you’re using the installed app and the RemNote option is missing, open the web app.
3. Select **Choose files** and pick the `.apkg`, `.md`, or `.txt` you exported. Each file can be up to 30 MiB. If yours is larger, export a smaller RemNote document.
4. Select **Start import**. This opens an online AI chat that can save cards as it goes. When it finishes, read the chat summary and open **Library > Cards** to inspect the saved cards.

## Check two cards from a nested outline

You can paste this example into RemNote or use a similar document you already study. Indentation creates the outline, and `>>` makes each question and answer a forward card. [RemNote’s text syntax](https://help.remnote.com/en/articles/9252072-how-to-import-flashcards-from-text)

```text
French practice
  At the station
    How do I ask for a one-way ticket? >> Un aller simple, s’il vous plaît.
    How do I ask where the platform is? >> Où est le quai ?
    Practice the round-trip version next week.
```

For the `.apkg` import, you’re looking for two cards. Read each front before revealing the back. Can you tell that you’re meant to answer in French? Does the one-way ticket prompt reveal “Un aller simple, s’il vous plaît” and the platform prompt “Où est le quai ?” The round-trip reminder is an ordinary note, so expect it to be absent as a card.

With Markdown or Text, the reminder can be in the file alongside the two card bullets. Remove it from the copy you upload if you only want the two existing questions. In either import, you can repair a front that lost its context by making it self-contained. For example, “In French, how do I ask where the train platform is?”

## Before importing the rest

Try one of each card type you depend on. Check that a fill-in-the-blank card hides the intended words, that an image you need opens, and that each direction of a two-way card still works. If you use tags to find cards, check those too. Cards saved through this import start a fresh review schedule, so keep RemNote for your previous reviews and due dates.

If an import stops partway through, check what’s already in **Library > Cards** before retrying. Continue with the missing cards to avoid duplicates. [Nibomo’s import guide](/docs/import-flashcards/)

*AI helped prepare this guide using RemNote’s documentation and Nibomo’s import interface. The RemNote entry was verified in the web app. The nested outline illustrates the expected result of a small import.*
