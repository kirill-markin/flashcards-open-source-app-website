---
title: "How to Unbury One Card in Anki"
description: "Restore one buried card with Toggle Bury in desktop Anki, then check its due date and which cards are still buried."
date: "2026-11-22"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/8d6e169a48ce2824c51d6d25e1024be715abe64a2896c98c7d67c9dcf5c86b7e.webp"
keywords:
  - "how to unbury a card in Anki"
  - "Anki unbury one card"
  - "Anki Toggle Bury"
---

To unbury one card in desktop Anki, open **Browse** in **Cards** mode, search for `is:buried`, and click the card you want back. With just that row selected, choose **Cards → Toggle Bury**. [Anki’s card-state searches](https://docs.ankiweb.net/manual/searching#card-state)

![A radio archive volunteer pulls one cassette from its sleeve beside four others still in the drawer](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/8d6e169a48ce2824c51d6d25e1024be715abe64a2896c98c7d67c9dcf5c86b7e.webp)

## Find the exact card in Browse

1. In **Browse**, set the switch to the left of the search box to **Cards**. Each row now represents one card. A row in **Notes** mode can include several cards, such as both directions of a vocabulary entry. [Anki’s Browse table modes](https://docs.ankiweb.net/manual/browsing#table-modes)
2. Search for `deck:"Workshop French" is:buried` with your own deck name in quotes. This finds both manually and automatically buried cards in the deck and its subdecks. If the card is missing, try `is:buried` on its own to check the whole collection. [Anki’s deck search syntax](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes)
3. Click the row for the card you want. If the questions look alike, use **Preview** to confirm which one you’ve selected. Check the Browse window title for a count of one selected card, then choose **Cards → Toggle Bury**. [Anki’s Preview guide](https://docs.ankiweb.net/manual/browsing#editing-area)
4. Run the same search again to see which cards are still buried. The restored card drops out of the results.

Keep the buried-only search in place when you use the toggle. With a buried card in focus, the command restores the selection. With an unburied card in focus, it runs the bury action. Filtering also keeps suspended cards out of the results, since the restore action can unsuspend a card in a mixed selection. [Anki’s Toggle Bury action](https://github.com/ankitects/anki/blob/26.09.4/qt/aqt/browser/browser.py#L1027-L1042), [Anki’s restore operation](https://github.com/ankitects/anki/blob/26.09.4/rslib/src/scheduler/bury_and_suspend.rs#L52-L69)

If the card turns up under `is:suspended`, select its row in those results and use **Cards → Toggle Suspend**. [Anki’s Browse card actions](https://docs.ankiweb.net/manual/browsing#cards), [Anki Bury vs Suspend](/blog/anki-bury-vs-suspend/)

## Check when the card is due

Clear the `is:buried` filter, find the card again, and open **Cards → Info** to see its schedule and review history. In a regular study session, a restored review card still follows its original due date and the deck’s daily limits. [Anki’s Card Info guide](https://docs.ankiweb.net/manual/stats#card-info), [Daily limits](https://docs.ankiweb.net/manual/deck-options#daily-limits)

For this AI-assisted guide, the result was tested with Anki 26.09.4’s backend on macOS. The desktop steps were checked against that version’s source. In the test collection, *une alêne → an awl* was rated **Easy** once and then manually buried. The same restore operation used by **Toggle Bury** was applied to that card alone.

| Card | Before | After |
| --- | --- | --- |
| *une alêne* | Manually buried | Unburied, with the same future due date |
| *un serre-joint* in the Tools subdeck | Set to sibling-buried for the test | Still buried |
| *un maillet* | Suspended | Still suspended |
| *un rabot* in another deck | Manually buried | Still buried |

The awl card kept its interval, review count, lapse count, and review history. A separate run cleared the clamp card’s sibling burial with the same operation. If a card shows up under `is:buried-sibling` again after you answer a related card, check the burying settings for the card you answered. [Why Anki buries siblings](/blog/anki-bury-siblings/)

## When to use the deck’s Unbury button

Use **Unbury** at the bottom of the deck overview when you want to restore buried cards across the selected deck and its subdecks. If both burial types are present, Anki offers **Manually Buried Cards**, **Buried Siblings**, or **All Buried Cards**. [Anki’s deck overview guide](https://docs.ankiweb.net/manual/studying#siblings-and-burying), [Deck Unbury in Anki 26.09.4](https://github.com/ankitects/anki/blob/26.09.4/qt/aqt/overview.py#L152-L176)
