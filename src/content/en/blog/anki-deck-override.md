---
title: "Anki Deck Override: Fix New Cards Going to the Wrong Deck"
description: "Find Anki's Deck Override, check each card type, and fix future routing separately from existing misplaced cards with a tested three-note example."
date: "2026-10-30"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/a452ed0290464b584f63f0f2789f53e8573d343b75e31557b0ae9252fd259ece.webp"
keywords:
  - "Anki Deck Override"
  - "Anki cards wrong deck"
  - "Anki new cards different deck"
  - "remove Anki deck override"
---

You choose a deck in Anki's Add window, add one note, and find its reverse card somewhere else. The deck selector can be correct. A **Deck Override** on that reverse card type can send newly generated cards to a different destination.

First check the deck currently selected in **Add**. If that's right, open **Cards…**, select the affected card type, and choose **Options → Deck Override**. To remove an unintended override, clear the destination, close that dialog, then click **Save** in the template editor. Repeat for any other affected card types. Cards already in the wrong deck need a separate **Change Deck** operation.

Before changing the rule, check who shares it. An override belongs to a card type within a note type, so notes added to different decks can all use the same destination.

![A library volunteer lifts a removable wooden guide from a return hatch while books remain in the adjacent crate](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/a452ed0290464b584f63f0f2789f53e8573d343b75e31557b0ae9252fd259ece.webp)

## Find the cards before changing anything

Open **Browse**, switch the table to **Cards** mode, and search for distinctive text from the affected note without a deck restriction. Display the **Deck** and **Card** columns and inspect each sibling. A note holds your fields; its card types generate the questions, such as Front → Back and Back → Front.

The result tells you which problem to work on:

| What you find | What to check next |
| --- | --- |
| Newly added cards all went to an unexpected deck | Check the Add window's deck selector, then each card type's override |
| The forward card went to the selected deck, but the reverse went elsewhere | Inspect the reverse card type's Deck Override |
| Both cards exist in the intended deck, but study shows neither or only one | Investigate the study queue, limits, or burying; see [new cards not showing](/blog/anki-new-cards-not-showing/) |
| A reverse card doesn't exist at all | Check the note type and its generation rules; see [Anki reverse cards](/blog/anki-reverse-cards/) |

Anki's [template manual](https://docs.ankiweb.net/manual/templates/intro) explains that an override takes precedence over the Add window's selected deck for the current card type. It can deliberately separate recognition and production practice. Finding an override doesn't by itself establish a mistake.

## Clear only the unintended override

Save a collection backup before changing a shared rule or moving a batch. Choose **File → Export → Anki collection package (.colpkg)** and enable **Include media** if your cards contain sounds or images. Anki's [backup instructions](https://docs.ankiweb.net/manual/backups#manual-colpkg-backups) distinguish this from automatic backups, which don't include media files.

On desktop:

1. Select an affected card in **Browse** and click **Cards…** in the editor. Confirm the note type you're editing.
2. Select its first card type and open **Options → Deck Override**. Record the destination, if any. Repeat for every card type, including the reverse.
3. Check whether other notes using this note type need that routing. Opening the editor from one note or deck doesn't limit a template change to that note or deck.
4. For each unintended override, erase the entire deck name. Leave the field blank and close the override dialog. Click **Save** in the main template editor when you're done.
5. Reopen the affected card types and confirm that their override fields are blank. In **Add**, choose the intended deck and add one clearly named test note. Inspect every generated card in **Browse**.

The clearing steps follow Anki's [released 26.09.3 desktop source](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/clayout.py): leaving the field blank removes the selected template's destination. Its menu also reports whether the override is on or off. These instructions were checked against the manual and source; the desktop dialogs weren't executed for this guide.

If some notes need the split and others don't, decide which should use a separate note type before changing the shared rule. Moving one existing card doesn't require changing the template used by all those notes.

## What happened in a three-note test

An isolated backend test ran on October 30, 2026, using Anki Python **26.9.3**, Python **3.13.17**, and macOS **26.6.1 on ARM64**. It used a standard **Basic (and reversed card)** note type named `Routing lab reversed`, with fictional fields `Demo A` / `Answer A`, then B and C.

Card type 1 had no override. Card type 2 had an override to `Routing lab::Reverse`. Note A was added with `Routing lab::Selected` as its destination; note B used `Routing lab::Other`. The override was then cleared and the note type saved. Finally, note C was added to Selected, and only A's reverse card was moved.

In the ledger, **Selected**, **Other**, and **Reverse** abbreviate the full `Routing lab::…` deck names. A1 and A2 identify A's forward and reverse cards; they aren't Anki IDs.

| Card | After adding A and B | After clearing override | After adding C | After moving only A2 |
| --- | --- | --- | --- | --- |
| A1, forward | Selected | Selected | Selected | Selected |
| A2, reverse | Reverse | Reverse | Reverse | Selected |
| B1, forward | Other | Other | Other | Other |
| B2, reverse | Reverse | Reverse | Reverse | Reverse |
| C1, forward | Not created | Not created | Selected | Selected |
| C2, reverse | Not created | Not created | Selected | Selected |

Changing the destination between A and B changed where their forward cards went. Both reverses followed the override. Clearing it left all four existing cards where they were; C's two new cards then followed the selected deck.

The move targeted A2 alone. B stayed split across Other and Reverse, providing a separate note to check for unintended changes. The collection finished with six cards and three notes.

The test also recorded card IDs, due values, queue, card type, intervals, and repetition counts. Clearing the override left the four existing cards unchanged on those measures. Moving A2 preserved all six IDs recorded after C was added; B and C retained their decks and recorded values.

Every card was new, with zero reviews and a zero-day interval. The test doesn't establish what happens to reviewed-card history or active learning, and didn't cover FSRS, mobile clients, add-ons, or sync.

## Move the existing cards separately

Return to **Browse → Cards** mode and find the cards you confirmed were misplaced. Check each row's card type and current deck. In Notes mode, a selected note can represent siblings in different decks; [Anki's browser manual](https://docs.ankiweb.net/manual/browsing#table-modes) explains that distinction.

To make the move shown above, select **A2 only**, choose **Cards → Change Deck**, select `Routing lab::Selected`, and confirm. Leave A1, both B cards, and both C cards unselected. Compare their decks with the final ledger column afterward.

For a larger batch, keep a similar before-and-after record and inspect cards outside the selection too. The [deck-merging guide](/blog/merge-anki-decks/) covers broader selection and scheduling checks.

Finish by checking both directions of a newly added test note and the existing cards you moved. Moving misplaced cards repairs their membership; clearing the unintended override stops that rule from sending future cards elsewhere.

*AI tools researched, drafted, and edited this guide, executed the isolated backend test, and generated its illustration. Nibomo is built by Kirill Markin, whose site publishes this article. The demonstration isn't a report of his personal Anki use.*
