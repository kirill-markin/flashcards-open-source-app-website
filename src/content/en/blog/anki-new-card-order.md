---
title: "Anki New Card Order: Gather, Sort, and Check the Queue"
description: "Understand Anki's new-card gather and sort settings with a six-card example. Check subdeck limits, queue positions, and the deck selected for study."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "Anki new card order"
  - "Anki new card gather order"
  - "Anki new card sort order"
  - "Anki ascending position"
  - "Anki cards out of order"
---

A card with new-card position 10 can appear after one at position 60 in Anki. If you study a parent deck with **Deck** gathering and **Order gathered** sorting, Anki can finish gathering from an earlier subdeck before visiting the one containing position 10. Sorting the Browser by creation date won't change that study queue.

Anki new card order has two stages: **gather** chooses the cards within today's limits; **sort** arranges the gathered cards. Start by deciding whether the wrong cards are being chosen or the right cards are appearing in an unexpected sequence.

These instructions concern ordinary decks in desktop Anki. The six-card example is an original calculation from the current manual and released [Anki 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3), checked on October 6, 2026. It isn't a hands-on test.

![A man holds a fourth vinyl record above an empty rack compartment beside three records, with two crates of unselected albums behind him](/blog/anki-new-card-order.png)

## Choose the order you actually want

Open **Options** for the deck you click to study, then look under **Display Order**. When you study a parent, its display-order settings control the session, including cards from its subdecks.

| Intended result | New Card Gather Order | New Card Sort Order |
| --- | --- | --- |
| Follow increasing new-card positions across the selected deck tree | Ascending position | Order gathered |
| Prioritize subdecks alphabetically, then positions within each | Deck | Order gathered |
| Keep that chosen set, but shuffle its presentation | Your chosen gather setting | Random |

These combinations follow Anki's [gather](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order) and [sort](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order) definitions. **Ascending position** means the stored new-card position, not a guaranteed creation-date order. Insertion order and manual repositioning can change those positions.

Before editing, check the assigned preset and which other decks use it. Display-order settings belong to the preset. If only this deck should change, use the [one-deck preset workflow](/blog/anki-deck-options-presets/) to isolate the edit first. Daily limits can have **This deck** or **Today only** overrides; display-order settings remain shared through the preset.

## Work out which four cards make it in

Imagine an ordinary parent deck named `OrderLab`, containing two subdecks and only these six cards. Each comes from a separate **Basic** note with one card. All six therefore have the same card-type number, and there are no siblings.

| Card | Deck | Stored new-card position |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Assume all six are new, none is buried or suspended, and none is in a filtered deck. There are no other cards, learning repetitions, or reviews at the start. Nothing has been studied today. `OrderLab` has no ancestor deck, and applicable review limits leave room for all six new cards.

Select **OrderLab** for study. Its effective new-card limit is **4**. First's limit is **3**, and Second's is **2**, with no temporary overrides. Use **Order gathered** as the sort setting for both comparisons. Each comparison starts from the same untouched collection; work it out on paper rather than answering cards between comparisons.

With **Deck** gathering:

1. Anki reaches `01 First` before `02 Second` alphabetically.
2. It gathers **A, B, C** in position order. First has supplied three cards; the parent has one place left.
3. It gathers **D** from Second, then reaches the parent's four-card cap.

The expected new-card introduction sequence is **A → B → C → D**. E and F didn't enter the gathered set.

With **Ascending position**, the candidate sequence across both subdecks is **D → A → E → B → F → C**. The first four candidates fit all the limits: two from Second, two from First, and four total. Gathering stops there.

The expected sequence is **D → A → E → B**. C and F remain outside this set. The released [gathering implementation](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs) applies deck and parent limits as cards are admitted.

Second's limit of two is a maximum, not a quota. Under Deck gathering, Second supplies only one card because First has already used three of the four available places. Ascending position produces two from each here because of these particular positions; it doesn't promise equal allocation in another collection.

## Let all six in to separate selection from sequence

For a second paper comparison, give the example its full allowance: set the parent to **6**, First to **3**, and Second to **3**. Keep **Order gathered**:

| Gather setting | Limits: parent / First / Second | Expected introduction sequence |
| --- | --- | --- |
| Deck | 6 / 3 / 3 | A → B → C → D → E → F |
| Ascending position | 6 / 3 / 3 | D → A → E → B → F → C |

Both choose all six. The difference is now entirely their sequence. Raising only the parent to six while keeping Second's limit at two would admit just five; F would still be excluded. This is a calculation, not a recommendation to increase your daily intake.

## Sorting can't recover an omitted card

Return to the original limits of **4 / 3 / 2**, and change only **New Card Sort Order** to **Random**.

| Gather setting | Cards available to the random sort | Cards it cannot add |
| --- | --- | --- |
| Deck | A, B, C, D | E, F |
| Ascending position | D, A, E, B | C, F |

The presentation sequence is shuffled; these sets stay the same. There isn't a specific random sequence to predict from this ledger. Anki's released [sorting code](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs) rearranges the cards already gathered.

**Card type, then order gathered** also works on that existing set. All six Basic cards have the same type number, so it preserves their gathered order in this example.

For a separate sort-only example, suppose four cards from notes with multiple templates have already been gathered in this order: **W(type 2), X(type 1), Y(type 2), Z(type 1)**. Card-type sorting produces **X → Z → W → Y**: type 1 first, with gathered order retained inside each type. This example starts after gathering; it makes no claim about which siblings would be admitted under your burying settings.

The number is the card template's position within its note type. It doesn't inherently mean “recognition” or “production”; those meanings depend on your templates. Check the actual questions before assuming a card-type sort will put every forward question first.

## Check positions in Browse before changing them

Open **Browse**, choose **Cards** mode, and search your deck tree. For the example:

```text
deck:OrderLab is:new
```

Show **Question**, **Card**, **Deck**, **Due**, and **Created** through the column-heading menu. For a new card, **Due** shows its queue position; **Created** shows when its note was created. **Sort Field** contains the note field designated for sorting. Sorting a Browser column changes the table's display. It doesn't rewrite stored positions or select a study gather setting. Anki's [Browser column documentation](https://docs.ankiweb.net/manual/browsing#columns) distinguishes these values.

The `is:new` search can include suspended or buried new cards. Their **Due** values appear in brackets. A narrower inspection search excludes them and cards currently in filtered decks:

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

Anki documents the [state searches](https://docs.ankiweb.net/manual/searching#card-state) and [deck searches](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes). If your deck name contains spaces, quote it: `deck:"My Deck"`. This still isn't a forecast of today's queue: limits and automatic sibling burying can reduce what enters it. Our [bury versus suspend guide](/blog/anki-bury-vs-suspend/) explains those unavailable cards.

If positions already express your intended order, leave them alone. If they genuinely need changing, record the old positions and use **Cards → Reposition** on a small, explicitly selected set of new cards. Check the dialog first: **Shift position of existing cards** can also change higher-position cards outside the selection. Without shifting, new positions may overlap existing ones, leaving ties whose presentation order you can't infer from position alone. See Anki's [Reposition action](https://docs.ankiweb.net/manual/browsing#cards).

Changing gather or sort settings doesn't require clearing learning or review history. Keep this diagnosis focused on new-card positions and display order.

## Check the deck you click and the allowance left today

In the original example, selecting `OrderLab::02 Second` directly limits the candidate pool to D, E, and F. With its two-card limit, **Ascending position**, and **Order gathered**, expect **D → E**. The parent's untouched four-card allowance cannot reduce those two introductions, even if ancestor limits apply. Selecting the parent with Deck gathering and limits **4 / 3 / 2** instead gives **A → B → C → D**.

Editing Second's display order won't control a session started from OrderLab. The selected deck supplies display order and caps the total, alongside applicable subdeck limits. **Limits start from top** determines whether ancestor limits also apply when studying a subdeck directly. Anki describes these [subdeck rules](https://docs.ankiweb.net/manual/deck-options#subdecks) and [ancestor-limit control](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top).

Check review limits too. By default, the review limit also constrains new cards; **New cards ignore review limit** changes that behavior. Both this switch and **Limits start from top** are collection-wide controls, as shown in the released [daily-limit interface](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte). Record their values before deciding that a new-card limit promises more cards today.

Use Browser **Preview** to inspect questions without answering them. For your next normal study session, fill out this short check:

| Record | What it resolves |
| --- | --- |
| Deck clicked for study; its preset, gather setting, and sort setting | Which display order controls the session? |
| Expected cards and their stored positions | Is the problem selection or sequence? |
| New-card and review limits, deck/today overrides, and study completed today | How much allowance remains? |
| Ancestor limits and the two collection-wide limit switches | Which additional caps apply? |
| Buried, suspended, filtered, or sibling cards | Which apparent candidates may be unavailable? |
| First introductions observed, separately from repeated learning appearances | Does the new-card sequence match the prediction? |

Learning repetitions can interrupt a session after you answer a new card. **New/Review Order** places new cards before, after, or among reviews; it doesn't replace the gather and sort settings. The released [queue construction](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs) combines those categories after sorting new cards.

Finish when the expected gathered set and its introduction order explain what you see. If they still disagree, keep the positions, settings, selected deck, Anki version, and observed sequence for a focused diagnosis, including relevant add-ons. If your goal is an extra rehearsal of a topic, use the separate [filtered-deck practice workflow](/blog/anki-filtered-decks-without-rescheduling/).
