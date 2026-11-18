---
title: "How to Study Only Flagged Cards in Anki"
description: "Study flagged cards by color in desktop Anki, see why Browse can find more cards than Build, and use preview mode to preserve due dates."
date: "2026-11-18"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/4fbac368a5e3993b96a345b233bf133d5ed13955add824199257a1d73a457680.webp"
keywords:
  - "study flagged cards in Anki"
  - "Anki filtered deck flags"
  - "Anki red flagged cards"
---

Anki can find five flagged cards in Browse and pull just two into a study session. To study by flag in desktop Anki, open **Tools → Create Filtered Deck**, enter a search such as `flag:1` for red, and click **Build**. Turn off rescheduling before you build if you want an extra practice round that keeps the original due dates.

![A wardrobe assistant hangs a red-tagged jacket beside a blue-tagged costume on a rehearsal rack](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/4fbac368a5e3993b96a345b233bf133d5ed13955add824199257a1d73a457680.webp)

## Choose the flag colors you want to study

Open **Browse**, switch to **Cards** mode, and check your search. Replace **Spanish Practice** with your deck name and keep the quotes if the name contains spaces.

| What to study | Search |
| --- | --- |
| Red flags only | `deck:"Spanish Practice" flag:1` |
| Red or blue flags | `deck:"Spanish Practice" (flag:1 or flag:4)` |
| Every flagged card | `deck:"Spanish Practice" -flag:0` |

The parentheses keep both colors within the same deck search. The search includes subdecks. For a collection-wide session, leave out the `deck:` term. The full color list is in [Anki’s flag search reference](https://docs.ankiweb.net/manual/searching#flags).

A flag belongs to one card. If `pan → bread` has a red flag, its unflagged sibling `bread → pan` stays out of the red search. The [guide to Anki flags](/blog/anki-flags/) covers how to find and change those flags.

## Build the study deck

1. From Anki’s main window, choose **Tools → Create Filtered Deck** and name the deck **Flag Practice**.
2. Paste the query from Browse into **Search** and leave **Enable second filter** off.
3. Set **Limit to** to the maximum number of cards you want Anki to gather. Choose **Order due** to prioritize cards with earlier due dates when the limit cuts off the list. [Anki’s order settings](https://docs.ankiweb.net/manual/filtered-decks#order)
4. Turn off **Reschedule cards based on my answers in this deck** to use preview mode and preserve due dates. Leave it on if you want your answers to update future scheduling. Anki enables rescheduling by default. [Anki’s rescheduling settings](https://docs.ankiweb.net/manual/filtered-decks#rescheduling)
5. Click **Build**. To check which cards made it in before studying, search `deck:"Flag Practice"` in Browse. Open the filtered deck and click **Study Now**.

## Why Browse found five cards and Build took two

The searches, builds, and card returns below were checked in a fresh seven-card collection using the released Anki 26.09.4 backend. The desktop steps follow Anki’s manual and the dialog code for that release. [Anki 26.09.4 release](https://github.com/ankitects/anki/releases/tag/26.09.4) · [Anki manual](https://docs.ankiweb.net/manual/filtered-decks#creating-manually) · [Desktop dialog code](https://github.com/ankitects/anki/blob/26.09.4/qt/aqt/filtered_deck.py)

With the red-or-blue query and a limit of 20, five cards matched the Browse search and two entered **Flag Practice**.

| Card | Starting state | Result |
| --- | --- | --- |
| `pan → bread` | Red, due today | Browse and Build |
| `water → agua` | Blue, due in five days | Browse and Build |
| `salt → sal` | Red, suspended | Browse only |
| `milk → leche` | Red, buried | Browse only |
| `cheese → queso` | Red, already in **Held Elsewhere**, a filtered deck | Browse only |
| `bread → pan` | New, unflagged sibling of `pan → bread` | Outside the search |
| `hello → hola` | Red, in **Other Class** | Outside the search |

Browse found `cheese → queso` through its home deck, **Spanish Practice**, while the card was in **Held Elsewhere**. Build skips cards in another filtered deck, as well as suspended and buried cards. The red-only search had four matches and built with just `pan → bread`. With both colors, **Order due** and a limit of one selected that same card. [Anki’s rules for building a filtered deck](https://docs.ankiweb.net/manual/filtered-decks#creating-manually)

If cards are missing, check **Limit to** and click **Show any excluded cards** in the filtered deck options. To count eligible matches yourself, run the query below in Browse before building. If you already built **Flag Practice**, click **Empty** first so the search includes the cards the deck just picked up. In the test, this search returned `pan → bread` and `water → agua`. [How Anki finds excluded cards](https://github.com/ankitects/anki/blob/26.09.4/qt/aqt/filtered_deck.py#L235-L269)

```text
deck:"Spanish Practice" (flag:1 or flag:4) -is:suspended -is:buried -deck:filtered
```

Add `is:due` to the end of the color search when you want a session restricted to due cards. In the test that search found `pan → bread` and the borrowed `cheese → queso` in Browse. Build took only `pan → bread`. Leave `is:due` out to include cards due later, like the blue `water → agua`. [Anki’s card-state search reference](https://docs.ankiweb.net/manual/searching#card-state)

If you see extra cards, check the deck name, the parentheses around the colors, and **Enable second filter**. In the test, dropping the deck name from the red search also found `hello → hola` from **Other Class**. A second filter of `deck:"Spanish Practice" is:new` added the unflagged `bread → pan` sibling because Anki gathers cards from both searches.

## Send the cards back to their home decks

In preview mode, **Easy** returns a card to its home deck. **Again**, **Hard**, and **Good** follow the delays in your filtered deck settings. At the end of the session, open the filtered deck and click **Empty** to send any remaining cards back. The deck stays available. Use **Rebuild** when you want to run the saved search again and gather the cards that are eligible then. [Anki’s return controls](https://docs.ankiweb.net/manual/filtered-decks#home-decks)

In the test, **Easy** returned the blue `water → agua` card to **Spanish Practice**, still due in five days. **Empty** returned the red `pan → bread` card to the same deck, still due that day. Both kept their flags. The preview answer added one review-log entry even though it preserved the due date. **Rebuild** gathered both cards again.

To check your own dates, note the **Due** value for a couple of cards in Browse before Build and compare it after they’re back in their home decks. [Filtered deck preview worksheet](/blog/anki-filtered-decks-without-rescheduling/)

*AI assisted the research, automated backend check, drafting, editing, and cover illustration.*
