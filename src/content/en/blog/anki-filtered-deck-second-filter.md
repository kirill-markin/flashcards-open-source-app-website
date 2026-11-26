---
title: "How the Second Filter Works in Anki Filtered Decks"
description: "Set up Anki's second filter with its own search, limit, and order. See what happens when the searches overlap or mix due reviews with new cards."
date: "2026-11-26"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/cfbd92d78d5a06df0aa998e2d9d7927453e7c294a8e5b2684d124d73d1b58dc3.webp"
keywords:
  - "Anki filtered deck second filter"
  - "Anki enable second filter"
  - "Anki filtered deck limits"
  - "Anki filtered deck order"
---

Set the first filter to two cards and the second to four, and Anki can build a five-card deck. In the example below, the first filter takes one of the second search's four matches. **Enable second filter** gives each search its own limit and sort order. Anki moves the first filter's picks into the deck before it runs the second search. [Anki's filtered deck manual](https://docs.ankiweb.net/manual/filtered-decks#creating-manually) · [Released build code](https://github.com/ankitects/anki/blob/26.09.4/rslib/src/scheduler/filtered/mod.rs#L103-L141)

![A potter packs a pale cup beside a small blue cup, next to an order of blue cups](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/cfbd92d78d5a06df0aa998e2d9d7927453e7c294a8e5b2684d124d73d1b58dc3.webp)

## Set up two searches in Anki

In desktop Anki, choose **Tools → Create Filtered Deck** and name it **Test Session**. To edit a filtered deck you already have, open it and click **Options**. Enter the first search and check **Enable second filter** to reveal the second set of fields. [Anki's desktop dialog](https://github.com/ankitects/anki/blob/26.09.4/qt/aqt/filtered_deck.py)

For the first search, enter **2** in **Limit to** and choose **Order due**.

```text
deck:"French Practice" is:due is:review -is:learn tag:priority
```

Set the second search's limit to **4** and choose **Increasing intervals**.

```text
deck:"French Practice" is:due is:review -is:learn tag:drill
```

Replace the deck name and tags with yours. The terms `is:due is:review -is:learn` select reviews due today or earlier, excluding cards in learning or relearning. Check each search in **Browse** with **Cards** mode selected. [Anki's card-state search reference](https://docs.ankiweb.net/manual/searching#card-state)

For extra practice with the original due dates, turn off **Reschedule cards based on my answers in this deck**. That setting applies to both filters. Click **Build** for a new deck or **Rebuild** when editing an existing one. [Preview mode walkthrough](/blog/anki-filtered-decks-without-rescheduling/) · [Build and Rebuild labels](https://github.com/ankitects/anki/blob/26.09.4/qt/aqt/filtered_deck.py#L154-L162)

## Why two plus four can give you five cards

These six due reviews come from a test collection run with the released Anki 26.09.4 backend. The test checked which cards entered the deck and the initial study order before any answers. The desktop steps follow Anki's manual and dialog code. [Anki 26.09.4 release](https://github.com/ankitects/anki/releases/tag/26.09.4)

| Card | Tags | Due date | Interval |
| --- | --- | --- | --- |
| A | priority | 3 days ago | 12 days |
| B | priority, drill | 2 days ago | 20 days |
| C | priority | Yesterday | 30 days |
| D | drill | 4 days ago | 10 days |
| E | drill | Today | 5 days |
| F | priority, drill | Today | 15 days |

The first search finds **A, B, C, F**. **Order due** puts the earliest dates first, so its two places go to **A** and **B**. C stays in its home deck because the first filter is full and C has only the `priority` tag.

The second search finds **B, D, E, F** in Browse before Build. When Anki runs it during Build, **B** is already in the filtered deck. **Increasing intervals** takes **E, D, F** in order of their 5-, 10-, and 15-day intervals. F matches both searches and gets in through the second filter because it was still available. [Anki's filtered deck sort orders](https://docs.ankiweb.net/manual/filtered-decks#order)

The initial study order was **A → B → E → D → F**, with rescheduling on or off. Lowering the second limit to **2** cut F. Swapping the two filters with their original limits and sort orders brought in all six. The drill search took **E, D, F, B** first, leaving **A** and **C** for the priority search.

For cards that carry **both** tags, leave **Enable second filter** off and put both tags in one search. The query below matched **B** and **F**. To include either tag under one shared limit and sort order, replace the two tag terms with `(tag:priority or tag:drill)`. [Anki's search rules](https://docs.ankiweb.net/manual/searching#simple-searches)

```text
deck:"French Practice" is:due is:review -is:learn tag:priority tag:drill
```

## Add one new card to a batch of reviews

The same test collection had two new cards tagged `drill`. The note for **G** was added before the note for **H**. This setup took **D** and **A**, the two earliest due reviews, and gave **G** the one new-card place.

| Filter | Search | Limit | Order |
| --- | --- | --- | --- |
| First | `deck:"French Practice" is:due is:review -is:learn` | 2 | Order due |
| Second | `deck:"French Practice" is:new tag:drill` | 1 | Order added |

With rescheduling on and the default deck options, the initial study order was **D → G → A**. The new card appeared between the reviews even though the second filter picked it. If the sequence matters to you, check the study queue after building. For order settings in regular decks, see [Anki review sort order](/blog/anki-review-sort-order/).

## Find out where a missing card went

1. If the filtered deck already contains cards, click **Empty** to send them home before checking the two searches. In the test, Empty before any answers restored the cards' original states and due dates. [Anki's home deck controls](https://docs.ankiweb.net/manual/filtered-decks#home-decks)
2. Run both searches in Browse. In the filtered deck options, **Show any excluded cards** shows matches from either search that are suspended, buried, or already in another filtered deck. Check the two limits and overlap separately. [How Anki finds excluded cards](https://github.com/ankitects/anki/blob/26.09.4/qt/aqt/filtered_deck.py#L235-L269)
3. Sort the eligible first-search matches and take up to its limit. Cross those cards off the second list before applying its sort order and limit. Rebuild, then search `deck:"Test Session"` in Browse to see which cards made it in.

*AI assisted with the article and backend tests and generated the cover illustration.*
