---
title: "How to Sort Anki Cards by Date in the Browser"
description: "Sort Anki cards by date in Browse, find cards added today or in the last seven days with added:1 or added:7, and check a card’s Added date."
date: "2026-11-10"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/c41aba4b3423346506bd160cafd0827feb82c47466407d41d7c120178318af98.webp"
keywords:
  - "sort Anki cards by date"
  - "Anki date added"
  - "Anki Created column"
  - "Anki browse cards by creation date"
---

In Anki Desktop, sort **Browse** by **Created** to put the oldest or newest notes first. Search `added:1` to find cards added today. The distinction matters if you add a reverse card today to a note you made last week.

## Sort the Created column in Browse

1. Open **Browse**. Select a deck in the sidebar, or clear the search box and press Enter to see the whole collection.
2. Right-click a column header (or Ctrl-click on Mac) and enable **Created**.
3. Click **Created** to sort. Click it again to reverse the order. Compare the dates at the top and bottom to check which direction you’re looking at.

Use the switch beside the search box to choose **Cards** for one row per flashcard or **Notes** for one row per note. A note holds the fields you enter, such as a French word and its translation. Anki can make several cards from those fields, and **Created** shows the note’s date on every one of those rows. [Anki’s Browser columns](https://docs.ankiweb.net/manual/browsing#columns)

![Hands stitch a fresh ochre patch onto a faded blue quilt](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/c41aba4b3423346506bd160cafd0827feb82c47466407d41d7c120178318af98.webp)

## Find recently added cards

Switch to **Cards**, enter one of these searches in **Browse**, and press Enter.

| Search | What it finds |
| --- | --- |
| `added:1` | Cards added today |
| `added:7` | Cards added in the last seven days |
| `deck:"French Vocabulary" added:7` | Cards added in the last seven days in that deck or its subdecks |

The search uses each card’s own creation time. If you sort the results by **Created**, Anki orders the matching rows by their notes’ dates. [Anki’s Added search](https://docs.ankiweb.net/manual/searching#added)

To check the exact date, select the card in **Cards** mode, open **Cards → Info**, and read **Added**. In **Notes** mode, `added:1` can show a note when any of its cards matches, while **Info** opens for the note’s first card. If the date looks surprising, switch to **Cards** and select the specific row. [Card Info](https://docs.ankiweb.net/manual/stats#card-info) · [How Anki selects the current card](https://docs.ankiweb.net/manual/browsing#rows)

## Why a new reverse card can show an older date

A test in a disposable Anki collection used two French vocabulary notes. Note A (`la gare`, “the train station”) and its forward card were backdated to November 1. On November 10, the test added note B (`le quai`, “the platform”) with one forward card, then filled **Add Reverse** on note A. In **Cards** mode, ascending **Created** order gave these rows.

| Card | Created in Browse | Added in Card Info | Matches `added:1` on Nov 10 |
| --- | --- | --- | --- |
| A forward | Nov 1 | Nov 1 | No |
| A reverse | Nov 1 | Nov 10 | Yes |
| B forward | Nov 10 | Nov 10 | Yes |

With `added:1` active, A reverse appeared above B forward even though the test had generated B forward first that day. A’s older note date put it first. **Notes** mode showed A and B, in that order, because each had a matching card.

To try it in a separate Anki profile, create a **Basic (optional reversed card)** note with **Add Reverse** blank. On a later Anki day, enter `y` in that field. Then search `added:1` in **Cards** mode and compare the reverse card’s **Created** and **Added** dates. [How Anki generates reverse cards](/blog/anki-reverse-cards/)

## Change study order in deck options

Sorting in **Browse** rearranges the table. To look through the cards in that order, select the first row in **Cards** mode, open **Preview**, and step through the cards. [Anki’s FAQ on browsing in a particular order](https://docs.ankiweb.net/faqs/study-in-a-particular-order)

If you want Anki to introduce new cards in a certain order during a study session, use the deck’s [new-card gather and sort settings](/blog/anki-new-card-order/).

*AI assisted with this article. The disposable collection test ran with Python package `anki` 26.9.4, Python 3.13.17, and macOS 26.6.1 on ARM64. The desktop steps were checked against Anki’s manual and released UI source. The illustration is AI-generated.* [Anki 26.09.4 release](https://github.com/ankitects/anki/releases/tag/26.09.4)
