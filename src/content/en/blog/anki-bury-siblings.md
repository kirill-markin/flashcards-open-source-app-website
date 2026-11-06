---
title: "Anki Bury Siblings: Why One Card Disappears"
description: "Find out which Anki sibling stays in your queue, which deck preset controls burying, and how to check a missing reverse or cloze card in Browse."
date: "2026-11-06"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/ede78992d93184fd9b53918dee34e7520cb2b288bd15210a432c4fe5f1d5f1b6.webp"
keywords:
  - "Anki bury siblings"
  - "Anki sibling cards"
  - "Anki buried sibling"
  - "Bury new siblings"
  - "Anki reverse card missing"
---

In a two-card scheduler test, Anki queued `la llave → key` for review and skipped its new reverse, `key → la llave`. At that point, the search for buried siblings found nothing. After one answer on the forward card, the same search found the reverse. Both cards were still in the collection.

In a normal deck, Anki can skip a sibling while building the study queue and record the burial only after you answer a card. For a due review paired with a new reverse, check **Bury new siblings** in the review card’s deck options. If you’re unsure whether that rule applies to your pair, start in **Browse**. [Anki’s burying options](https://docs.ankiweb.net/deck-options.html#burying)

![A locksmith tests a brass key in a padlock while its spare hangs above the bench](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/ede78992d93184fd9b53918dee34e7520cb2b288bd15210a432c4fe5f1d5f1b6.webp)

## Find the pair by Note ID

Anki calls cards from the same note *siblings*. That includes the two directions of a reversed vocabulary card or the cards made from `c1` and `c2` in one cloze note. Two notes with matching text have separate Note IDs and fall outside sibling burying. [Anki’s guide to siblings](https://docs.ankiweb.net/manual/studying#siblings-and-burying)

1. In desktop Anki, open **Browse** in **Cards** mode. Select the sibling you can find and choose **Cards → Info**. Copy its **Note ID**. [Anki’s Card Info guide](https://docs.ankiweb.net/manual/stats#card-info)
2. Replace the whole search with `nid:123`, using your own Note ID in place of `123`. This searches across decks. Check the **Card** and **Deck** columns for the expected sibling. If that row is absent, check whether the note generates that reverse or cloze card. If a separate text search finds the card under a different Note ID, you’re looking at a separate note. [Anki’s ID search](https://docs.ankiweb.net/manual/searching#object-ids), [reverse card setup](/blog/anki-reverse-cards/), [cloze numbering](/blog/anki-cloze-numbers/)
3. Search `nid:123 is:buried-sibling` with the same Note ID. If the missing card appears in the results, Anki has recorded a sibling burial. If the search is empty before you’ve answered a sibling, the card may already have been skipped when Anki built the queue. [Anki’s card-state searches](https://docs.ankiweb.net/searching.html#card-state)

## Open Options for the card that can bury its sibling

When Anki builds the queue, a card’s home-deck preset can affect siblings gathered after it. When you answer a card, Anki uses that card’s home-deck preset to record sibling burials. If you clicked a parent deck to study, look up the card’s own deck in Browse and open **Options** for that deck. [Anki’s subdeck options](https://docs.ankiweb.net/manual/deck-options#subdecks), [released queue logic](https://github.com/ankitects/anki/blob/c06370ff4d87cb48d825f90cc83e02b9a4e84ecd/rslib/src/scheduler/queue/builder/burying.rs), [released answer logic](https://github.com/ankitects/anki/blob/c06370ff4d87cb48d825f90cc83e02b9a4e84ecd/rslib/src/scheduler/answering/mod.rs)

Under **Burying**, pick the switch by the state of the sibling you want to delay. **Bury new siblings** covers new cards, **Bury review siblings** covers review cards, and **Bury interday learning siblings** covers learning or relearning steps that have crossed into another study day. [Anki’s burying options](https://docs.ankiweb.net/deck-options.html#burying)

Anki gathers same-day learning steps first, then interday learning steps, due reviews, and new cards. A new card can’t bury a review sibling, even if your display settings show new cards before reviews. If both siblings are in the same category, their order within that category can determine which enters the queue. [Anki’s display order and burying settings](https://docs.ankiweb.net/manual/deck-options#display-order), [released gathering logic](https://github.com/ankitects/anki/blob/c06370ff4d87cb48d825f90cc83e02b9a4e84ecd/rslib/src/scheduler/queue/builder/gathering.rs), [released burial logic](https://github.com/ankitects/anki/blob/c06370ff4d87cb48d825f90cc83e02b9a4e84ecd/rslib/src/scheduler/bury_and_suspend.rs)

Check the preset name before saving a change. Any deck using that preset will get the new setting. If you want to change only one deck, clone the preset from that deck’s **Options**, edit the clone, and save it. [Anki’s preset options](https://docs.ankiweb.net/manual/deck-options#presets), [how to change a shared preset](/blog/anki-deck-options-presets/)

## What changed when the switch moved to the other deck

Each test used a fresh collection and one **Basic (and reversed card)** note. The forward card was due for review in one subdeck. The reverse card was new in a second subdeck, except in the last test, where its same-day learning step was due. The subdecks used separate presets. Both presets had **Bury review siblings** and **Bury interday learning siblings** on throughout.

The table shows what Anki’s scheduler returned before the first answer and what the burial search found after that card was rated **Easy**. The last column checks the parent deck in every test, including the one that started in the forward subdeck.

| Deck selected for study | Bury new siblings on in | Queue before answer | Found by `is:buried-sibling` after answer | Parent queue after answer |
| --- | --- | --- | --- | --- |
| Parent | Forward preset only | Forward | Reverse | Empty |
| Parent | Reverse preset only | Forward, reverse | None | Reverse |
| Forward subdeck only | Forward preset only | Forward | Reverse | Empty |
| Parent, with a same-day step due on the reverse | Forward preset only | Reverse | Forward | Empty |

Before answering, the burial search returned no cards in all four tests. Each answer wrote one review log entry, and the Note ID search still found both cards afterward.

The first two rows differ only in which preset has **Bury new siblings** on. When the due forward card’s preset had it off, both siblings made it into the queue. The reverse card’s preset couldn’t make its own card disappear. In the third row, the reverse was already outside the selected deck for study, but answering the forward card still marked it as buried. In the last row, the reverse’s learning step came first, and **Bury review siblings** in its preset covered the forward card. [Anki’s cross-deck rule](https://docs.ankiweb.net/manual/studying#siblings-and-burying)

## Decide what to change

- **Browse shows a sibling burial.** Anki clears it at the next study-day rollover. If you need the card today, use **Unbury** from the relevant deck overview and rerun the search. That action can restore other buried cards in the deck too. Edit the preset if you want a different rule for future reviews. [How to unbury cards](/blog/anki-bury-vs-suspend/)
- **The card exists and the burial search is empty.** If you’ve just answered a sibling and the missing card still doesn’t appear in the search, try `nid:123 is:buried-manually` and `nid:123 is:suspended`. If those are empty too, check the card’s due date, its deck, and the daily limits for the deck you selected for study. If Browse shows it in a filtered deck, check that deck separately. [Anki’s card-state searches](https://docs.ankiweb.net/searching.html#card-state), [daily limits and missing new cards](/blog/anki-new-cards-not-showing/)
- **Both siblings appear and you’d like to space them apart.** Compare their states and home presets. For the due review and new reverse above, enable **Bury new siblings** in the review card’s home preset. [Anki’s burying options](https://docs.ankiweb.net/deck-options.html#burying)

*AI tools wrote and edited this guide, ran the tests, and generated the illustration. The tests used the released Anki backend (`anki==26.9.4`) with CPython 3.13.17 on ARM64 macOS 26.6.1. They measured scheduler queues and stored card states in disposable collections with normal decks. The desktop steps follow Anki’s documentation. [Anki 26.09.4 release](https://github.com/ankitects/anki/releases/tag/26.09.4)*
