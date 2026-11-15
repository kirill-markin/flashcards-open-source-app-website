---
title: "How to Duplicate an Anki Deck Without Changing the Original"
description: "Duplicate a Basic Anki deck for fresh practice in the same profile, or copy it to a separate profile and keep its review history."
date: "2026-11-15"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/8931b5a258ab67f30ccaacd76b2b4e81ffd517086f39727f2990c30b47ca2461.webp"
keywords:
  - "duplicate Anki deck"
  - "copy an Anki deck"
  - "copy Anki deck to another profile"
  - "keep Anki review history"
---

Importing a three-card French deck back into its original Anki profile added zero cards in a test. Anki recognized the notes in the deck package. Renaming the `.apkg` file leaves the note identifiers inside it intact. [Anki’s rules for updating notes from packages](https://docs.ankiweb.net/manual/importing/packaged-decks#updating)

In Anki desktop, use a plain-text export and the **Duplicate** import option for an editable copy that starts with new cards. To keep the deck’s review history in the copy, export an `.apkg` with scheduling and import it into a fresh profile.

![A tailor traces a worn paper pattern onto a fresh sheet](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/8931b5a258ab67f30ccaacd76b2b4e81ffd517086f39727f2990c30b47ca2461.webp)

## Copy a Basic deck for fresh practice

Use these steps for a single deck of standard **Basic** notes. Each note has a Front and a Back and generates one card. The import puts the new cards into one destination deck.

1. On the **Decks** screen, click **Create Deck** and name the copy, for example **French rehearsal**.
2. Choose **File → Export** and select **Notes in Plain Text (.txt)**. Under **Include**, choose the original deck. Turn on **Include HTML and media references** and **Include tags**. Leave **Include deck name**, **Include note type name**, and **Include unique identifier** off. Click **Export**.
3. Choose **File → Import** and open the text file. Select **Basic** as the note type and **French rehearsal** as the deck. Confirm **Allow HTML in fields** is enabled and verify that the columns map to **Front**, **Back**, and **Tags**.
4. Set **Existing notes** to **Duplicate**, then click **Import**.

[Anki’s export options](https://docs.ankiweb.net/manual/exporting) · [Anki’s text import options](https://docs.ankiweb.net/manual/importing/text-files#duplicates-and-updating)

The **Include unique identifier** option exports a GUID. Anki can use it to match the row to an existing note and skip creating a new note. This GUID is separate from the **Note ID** you see in **Cards → Info**. Leaving out the deck-name column lets your destination deck selection apply. If the cards land elsewhere, check the template’s **Deck Override**. [Anki’s deck and GUID columns](https://docs.ankiweb.net/manual/importing/text-files#deck-column) · [How to check a Deck Override](/blog/anki-deck-override/)

The new notes have their own fields and tags. Their cards still use the **Basic** templates, so editing a template can change the look of both decks. Changing a deck preset also affects both decks if they use that preset. Image and audio references in the text point to files already in the collection. [Card templates](https://docs.ankiweb.net/manual/templates/intro) · [Deck presets](https://docs.ankiweb.net/manual/deck-options#presets) · [Media references](https://docs.ankiweb.net/manual/importing/text-files#importing-media)

## Copy a deck and keep its review history

A separate profile has its own collection. A deck package can carry the original note types and child decks along with cards and scheduling.

1. Choose **File → Export**, select **Anki Deck Package (.apkg)**, and choose the original deck under **Include**. Turn on **Include scheduling information** and **Include media**. If you want the deck’s preset, also turn on **Include deck presets**. Export the file.
2. Choose **File → Switch Profile**. Click **Add** to create a fresh profile, select it, and click **Open**. Leave the new profile unsynced. Linking both profiles to the same AnkiWeb account can overwrite one collection.
3. In the new profile, choose **File → Import** and open the `.apkg`. Turn on **Import any learning progress**. If you exported the preset, turn on **Import any deck presets** too. Click **Import**.

[Anki’s deck package export](https://docs.ankiweb.net/manual/exporting#deck-apkg) · [Scheduling on package import](https://docs.ankiweb.net/manual/importing/packaged-decks#scheduling) · [Anki profiles and sync](https://docs.ankiweb.net/manual/profiles)

Choose `.apkg` for a single deck. A `.colpkg` import replaces the whole collection in the open profile. [Anki deck and collection packages compared](/blog/anki-apkg-vs-colpkg/)

## Check what Anki copied

The test used three Basic French vocabulary notes tagged `rail`, including *un quai* / *a platform*. One card received an **Easy** answer and a three-day interval.

| Import | What the test found |
| --- | --- |
| Same `.apkg` back into the original collection | The original had all three cards. The import added zero cards. |
| `.apkg` with learning progress into an empty collection | Three cards, with the same review entry and three-day interval for the reviewed card. |
| Plain text with **Duplicate** into a new deck in the original collection | Three new cards with matching fields and tags, new Note IDs and Card IDs, and empty review histories. Editing a copied Back left the original fields, IDs, scheduling, and review history intact. |

In **Browse**, switch to **Cards** mode and compare the card counts. Select the matching card in each deck and open **Cards → Info**. For the text copy, look for a different **Note ID** and an empty review history on the new card. For the package in the fresh profile, pick a card you already reviewed and check its interval and review history. If the deck has subdecks or uses images or audio, check the deck tree and open a few of those cards. [Anki’s Card Info](https://docs.ankiweb.net/manual/stats#card-info)

For a single note, use [Notes → Create Copy](/blog/anki-create-copy/). To clean up extra cards you already have, see [how to find duplicate cards in Anki](/blog/anki-duplicate-cards/).

*AI assisted with research, writing, editing, and the cover illustration. An automated test used disposable collections in the Anki 26.09.4 backend on macOS. It covered text and scheduling for a single Basic deck. The desktop steps were checked against Anki’s manual and released UI source.*
