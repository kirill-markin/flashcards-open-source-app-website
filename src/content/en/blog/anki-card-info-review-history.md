---
title: "Anki Card Info: How to Read Review History"
description: "Open Card Info in Anki Desktop, find your last answer, and see what Manual and rating 0 mean when the recorded interval differs from the current due date."
date: "2026-11-27"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/c00024b7b2db130e482992dbca0dcda513dd919cf1e81b8025021e6947ca9ff1.webp"
keywords:
  - "Anki Card Info"
  - "Anki review history"
  - "Anki Manual rating 0"
  - "Anki interval vs due date"
---

Anki can show an interval of **9 days** in a card’s review history when the card is due in three days. To see when it’s scheduled, read **Due** at the top of **Card Info**. A history row shows the interval Anki recorded for that action. If the row says **Manual** with a **Rating** of **0**, Anki logged a scheduling change such as **Set Due Date** or **Reset**. [Anki’s Card Info manual](https://docs.ankiweb.net/manual/stats#card-info)

![A cinema worker slides a new showtime card into the window above a tray of ticket stubs](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/c00024b7b2db130e482992dbca0dcda513dd919cf1e81b8025021e6947ca9ff1.webp)

## Find your last answer in Anki Desktop

1. Open **Browse** and switch the table to **Cards** if it shows **Notes**. Select the card you studied and choose **Cards → Info**, or right-click the card and choose **Info**. If a note makes cards in both directions, select the one with the prompt you saw. While studying, press **I** to open info for the card on screen. [Browse table modes](https://docs.ankiweb.net/manual/browsing#table-modes), [How to open Card Info](https://docs.ankiweb.net/manual/stats#card-info)
2. Check the summary above the history. A new card shows **Position**, its place in the new-card queue. When an **Interval** appears in the summary, it’s the interval stored on the card now. [Card Info summary in Anki 26.09.4](https://github.com/ankitects/anki/blob/26.09.4/ts/routes/card-info/lib.ts#L31-L47)
3. Read the history from newest to oldest. The first row rated **1** to **4** is the last graded answer. Match the **Date** to your attempt, then read the rating. **Again** is **1**, **Hard** is **2**, **Good** is **3**, and **Easy** is **4**. [Card Info history order](https://github.com/ankitects/anki/blob/26.09.4/rslib/src/stats/card.rs#L156-L207), [Anki’s answer buttons](https://docs.ankiweb.net/manual/studying#answer-buttons)

The **Time** column shows the recorded answer duration. A **Manual** row shows **0s**, since that action recorded a schedule change without a graded answer. [Anki’s Card Info labels](https://github.com/ankitects/anki/blob/26.09.4/ftl/core/card-stats.ftl#L16-L26), [Anki’s manual scheduling log](https://github.com/ankitects/anki/blob/26.09.4/rslib/src/revlog/mod.rs#L134-L177)

## Why a nine-day interval can leave three days to go

In one backend test with FSRS enabled, a new card got an **Easy** answer with a simulated timestamp six days earlier. The test then ran **Set Due Date** with `3`. These were the two history rows, with dates relative to the test day.

| Date | Type | Rating | Interval | Time |
| --- | --- | --- | --- | --- |
| Today | Manual | 0 | 9 days | 0s |
| Six days earlier | Learn | 4 | 8 days | 2.5s |

**Due** moved to three study days ahead. For this card, the scheduler counted six study days since the last answer and added the three days until the new due date, giving a current **Interval** of nine days. The original **Easy** row still recorded eight days, and **Reviews** still read **1**. [Anki’s Set Due Date code](https://github.com/ankitects/anki/blob/26.09.4/rslib/src/scheduler/reviews.rs#L22-L67)

## What to do next

- Use **Set Due Date** to move the card to another day or **Reset** to put it back in the new queue. [Anki Set Due Date vs Reset](/blog/anki-set-due-date-vs-reset/)
- If you found a wrong rating, check which action the **Edit** menu offers to undo. [How to undo an Anki review](/blog/anki-undo-review/)
- To count answers across a day, open **Stats** and hover over the date in the **Calendar** graph. [How to read the Anki review calendar](/blog/anki-review-calendar/)

AI tools wrote and edited this guide, ran the test, and generated the cover. The test used a temporary collection with Anki’s Python package 26.9.4 and Python 3.13.17 on Apple silicon macOS. The earlier timestamp and the 2.5-second answer duration were set by the test. The desktop steps were checked against the manual and released source. [Anki 26.09.4 release](https://github.com/ankitects/anki/releases/tag/26.09.4)
