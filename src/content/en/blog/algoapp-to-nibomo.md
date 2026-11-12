---
title: "How to Move AlgoApp (AnkiApp) Flashcards to Nibomo"
description: "Export a deck you own from AlgoApp, import its ZIP or XML into Nibomo, and check that the card text, tags, and pictures came through."
date: "2026-11-12"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/236e84b8aeeaa66b93f1e057b3c741b077691906e79d5332e98cb14aedf8d98c.webp"
keywords:
  - "AlgoApp to Nibomo"
  - "export AlgoApp flashcards"
  - "import AnkiApp deck"
  - "AlgoApp ZIP and XML"
---

A photo on an AlgoApp flashcard lives in a separate file from the card text. For a deck with pictures, upload the original ZIP so the deck's XML and its media files stay together. Nibomo's AI import can attach JPEG, PNG, and WebP images to cards. The ZIP also keeps the original recordings. Playable card audio is unsupported by this import. If you already have a plain XML export of a text-only deck, you can use that file directly. [AlgoApp's ZIP and XML format](https://www.algoapp.ai/support/solutions/f7c77364/how-to-import-algoapp-decks-zip-xml-/)

AlgoApp is the current name for AnkiApp. Look for either name in Nibomo under **Library → Import**. If your cards came from Anki and you have an `.apkg` file, follow the [Anki deck guide](/blog/import-anki-apkg/). [AlgoApp's name change](https://www.algoapp.ai/ankiapp-is-now-algoapp)

![A person compares a black-and-white print of a bicycle with its film negative on a light box](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/236e84b8aeeaa66b93f1e057b3c741b077691906e79d5332e98cb14aedf8d98c.webp)

## Export a deck you own from AlgoApp

1. Open a downloaded deck you own. Start with one small deck that has the kinds of cards you want to keep.
2. In the deck menu, choose **Storage → Download All**. Wait for the pictures and audio to finish downloading.
3. In the deck menu, choose **Export** and save the resulting `.zip` file. Keep it intact for the import.

AlgoApp exports one deck at a time. Current exports include card tags, while older copies can be missing them. Review history and due dates stay in AlgoApp, so the imported cards start a new schedule in Nibomo. [AlgoApp's export instructions](https://www.algoapp.ai/support/solutions/ddcf01b0/how-do-i-export-my-flashcards-from-algoapp-/)

## Import the ZIP or XML into Nibomo

1. Open the workspace where you want the cards. Use the [Nibomo web app](https://app.nibomo.com/?locale=en) if you can't find the AlgoApp or AnkiApp option in your installed app.
2. Go to **Library → Import** and select **Import from AlgoApp (formerly AnkiApp)** or **Import from AnkiApp**, whichever label you see. Both labels identify the same `.zip, .xml` option.
3. Select **Choose files** and pick the original ZIP or the plain XML. Select **Start import**. This opens a new AI chat and sends your file with a request to import the cards into the current workspace.

The upload limit is 30 MiB per file, and AI chat can save cards as it goes. If the import stops partway through, check what's already in **Library** and ask the chat to continue with the missing cards. The [Nibomo import guide](/docs/import-flashcards/) explains how to request a preview in chat before saving.

## Check the card count, then flip the cards

Suppose your test deck has three Italian vocabulary cards. Look for three new cards in **Library**, then compare each side with its AlgoApp original.

| In the example deck | What to check in Nibomo |
| --- | --- |
| `buongiorno` → `good morning` | The Italian word is on the front and the English answer appears after you flip. |
| `caffè` → `coffee`, tagged `food` | The accent survives and the `food` tag is on this card. If it’s missing, look for `food` in the card’s `tags` attribute in the XML. |
| Bicycle photo → `bicicletta` | The ZIP contains the photo. Check that it appears on the front and that the Italian word is on the back. If you upload only the XML, the photo file stays behind. |

If an image is missing after a ZIP import, open a copy of the ZIP and look in `blobs/`. The XML identifies the image by an ID, and the file in `blobs/` should have that exact name. If the file is missing, run **Storage → Download All** in AlgoApp and export again. If the file is there, tell the import chat which card and side lost the image before you retry. Check any custom layouts you rely on in the first deck before moving the rest.

*Nibomo publishes this AI-assisted guide. The steps are based on AlgoApp's support docs and Nibomo's web app source. The example is a checklist for your own import.*
