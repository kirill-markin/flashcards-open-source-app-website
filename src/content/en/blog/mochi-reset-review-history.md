---
title: "How to Reset Mochi Review History or Fix One Rating"
description: "Undo a Mochi review, delete one old rating, or reset a card to New cards. Check the review history and see whether the card is due."
date: "2026-11-23"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/c4d022c845a2bbf7879d10deac4a4520689f5935f48f749a91aa25f5ea484e92.webp"
keywords:
  - "Mochi reset review history"
  - "undo Mochi review"
  - "delete a Mochi review"
---

You meant to choose **Forgot** in Mochi and clicked **Remembered**. If you’re still in the review session and **Undo** is available, use it there. If you spot the mistake later, open the card’s history and look for the action to delete that one review. To start a learned card over as a new card, choose **Reset review history** from the card’s menu. [Mochi release notes on Undo](https://mochi.cards/changelog/#1.21.15), [individual review deletion](https://mochi.cards/changelog/#1.21.17), [resetting a learned card](https://mochi.cards/docs/reviewing/new-cards/#unlearning-cards)

![A rowing club volunteer erases one tally from a lakeside logbook](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/c4d022c845a2bbf7879d10deac4a4520689f5935f48f749a91aa25f5ea484e92.webp)

This AI-assisted guide uses Mochi’s official documentation and release notes, checked November 23, 2026. The two cards and their review times are illustrative, and verification was limited to the documentation.

## Check the history before you change it

Imagine two cards from an evening bike maintenance course. **Rim** asks “What is a rim?” and answers “The outer ring of a bicycle wheel.” It’s reviewed in both directions. **Spokes** has the sentence “A spoke joins the hub to the rim,” with a separate blank for *hub* and *rim*. Mochi keeps a history for each direction or hidden-text group, so match the version as well as the timestamp when you look for a review. [Mochi’s guide to multiple review histories](https://mochi.cards/docs/cards/#multiple-review-histories)

| Card | Version | Example review history |
| --- | --- | --- |
| **Rim** | Forward | Nov 17 at 19:08 (**Remembered**), Nov 19 at 19:36 (**Forgot**), Nov 23 at 19:42 (**Remembered**) |
| **Rim** | Reverse | Nov 20 at 19:15 (**Remembered**) |
| **Spokes** | *Hub* blank | Nov 21 at 19:10 (**Forgot**) |
| **Spokes** | *Rim* blank | Nov 22 at 19:23 (**Remembered**) |

Open a card and look for the review history table near the bottom. Note the card text and the timestamps and grades you want to keep. Record the current due date separately if you can see it, or check whether the card is in **Due today**. The history rows record past reviews and their intervals. The due date and queue tell you when you can expect to see the card again. Each example below starts from the same history. [Mochi’s history table release notes](https://mochi.cards/changelog/#1.14.3), [review history fields](https://mochi.cards/docs/cards/#review-history), [Due today guide](https://mochi.cards/docs/reviewing/due-today/)

## Undo a rating during the review session

Suppose the Nov 23 forward review of **Rim** was the slip. While the session is still open, choose **Undo** if the review screen offers it. Before rating again, check whether the 19:42 **Remembered** entry is gone. Look for the Nov 17 and Nov 19 forward entries and the Nov 20 reverse entry. Compare the text on both cards and the two **Spokes** histories with your notes. [Mochi’s release notes on the review menu](https://mochi.cards/changelog/#1.15.9), [Mochi’s Undo fix](https://mochi.cards/changelog/#1.21.15)

If you can confirm the undo and the forward prompt comes up again, enter the intended grade and look for that grade in the history afterward. If you can’t check the history during the session, leave the regrade for a later review.

## Delete a single review you spot later

Say you look at **Rim** after the Nov 23 session and realize the Nov 19 **Forgot** rating was a mistake. If you want a copy of the original history, open the deck’s menu and choose **Export deck** before you delete anything. Save a dated, native `.mochi` export, which includes review history. [Mochi’s backup and export guide](https://mochi.cards/docs/getting-started/backing-up/), [Mochi backup and restore walkthrough](/blog/mochi-backup-restore/)

Open **Rim**, find the **forward** review dated Nov 19 at 19:36, and use the delete action for that row if it’s available. This removes the review entry, and a later review gets its own entry. Check that the other two forward reviews and the Nov 20 reverse review are still there. Compare the text on both cards and the two **Spokes** entries with your notes. Then check whether **Rim** is in **Due today** in the same deck, and record the current due date if Mochi shows one. [Mochi’s individual review deletion release notes](https://mochi.cards/changelog/#1.21.17), [Due today guide](https://mochi.cards/docs/reviewing/due-today/)

## Reset a card you’ve repurposed

Suppose you want to reuse **Rim** to learn a different wheel part. Export the deck first if you want a copy of the original history. Change the prompt to “What is a hub?” and the answer to “The central part of the wheel.” Then open the card’s menu or right-click the card and choose **Reset review history**. [Mochi’s instructions for resetting a card](https://mochi.cards/docs/reviewing/new-cards/#unlearning-cards)

Reopen the card before reviewing it. Check that it shows the new question and answer. Inspect both directions for any remaining **Rim** entries before studying the updated card. Compare the two **Spokes** entries and its text with your original notes. The reset puts the repurposed card back in the new-card state. If you don’t see it in **New cards** right away, check the daily new-card limit and whether the card or its deck is archived. [Mochi’s review history guide](https://mochi.cards/docs/cards/#review-history), [new-card limit](https://mochi.cards/docs/reviewing/new-cards/#limiting-new-cards-per-day), [archiving guide](https://mochi.cards/docs/reviewing/archiving/)

## Pause a card or practice it tonight

If **Spokes** can wait until the next class, use **Archive card** in its menu. Archiving takes it out of **New cards** and **Due today** while keeping its content and both histories. You can unarchive it from the same menu. [Mochi’s archiving guide](https://mochi.cards/docs/reviewing/archiving/)

For a quick refresher before class, filter the deck to **Spokes** and choose **Cram**. Include archived cards in the filter if you archived it. Cram grades leave the intervals and history alone, so afterward you can still look for the Nov 21 *hub* review and Nov 22 *rim* review. [Mochi’s Cram guide](https://mochi.cards/docs/reviewing/cramming/), [Custom views and Cram walkthrough](/blog/mochi-custom-views-cram/)
