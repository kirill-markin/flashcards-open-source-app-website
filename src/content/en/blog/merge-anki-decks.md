---
title: "How to Merge Anki Decks Without Losing Review History"
description: "Combine Anki decks with Change Deck. Check subdecks, sibling cards, existing destination cards, review history, and settings with a tested six-card example."
date: "2026-10-19"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/0472ef2ba2e1a403dc430da7a85f22afa98f43fe5dc308caddd2925aecc58e86.webp"
keywords:
  - "merge Anki decks"
  - "combine Anki decks"
  - "Anki Change Deck"
  - "merge Anki subdecks"
  - "keep Anki review history"
---

To merge Anki decks, open **Browse**, switch to **Cards** mode, select the cards from your source decks, and choose **Cards → Change Deck**. Move them into an ordinary destination deck, then verify the result before deleting any empty source decks. The existing cards carry their review history with them.

The easy mistake is selecting more than you meant to move. A parent-deck search includes its children. In Notes mode, selecting a note can move sibling cards that live somewhere else. And a destination that already contains cards needs a different final count from an empty one.

This desktop guide works through those cases with six cards from five notes. The underlying move was tested with Anki's released Python backend, version 26.9.3, on October 19, 2026. The desktop steps follow the current manual and released source; the GUI itself wasn't tested.

![A canoe-club volunteer places a worn teal paddle in a shared rack while a cream paddle stays beside the door](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/0472ef2ba2e1a403dc430da7a85f22afa98f43fe5dc308caddd2925aecc58e86.webp)

## Decide whether you need to move cards

Dragging one deck under another creates a subdeck relationship. You can study through the parent while keeping the separate decks. It doesn't flatten their cards into one deck. Anki's [deck explanation](https://docs.ankiweb.net/manual/getting-started#decks) describes this tree structure.

Use **Change Deck** when you want the cards themselves to share one destination. The procedure below consolidates two source trees inside one collection. It applies to ordinary source and destination decks; the preparation below returns any temporarily filtered cards before you count them.

Moving doesn't combine duplicate notes or reconcile two cards' review histories. If your problem is repeated content, use the [duplicate-card guide](/blog/anki-duplicate-cards/) first. Combining collections from separate profiles is also a different job involving import decisions.

## Back up and compare the settings

If you use Anki on several devices, [sync outstanding study](https://docs.ankiweb.net/manual/syncing) from those devices, then sync the desktop collection you'll reorganize. Choose **File → Export**, select **Anki collection package (.colpkg)**, and enable **Include media**. Keep that file somewhere safe. Automatic backups omit sounds and images, as the [backup manual](https://docs.ankiweb.net/manual/backups#manual-colpkg-backups) explains.

You don't need to import anything to merge decks within this collection. Keep the backup for recovery; importing a collection package into your live profile replaces its collection. The [APKG versus COLPKG guide](/blog/anki-apkg-vs-colpkg/) explains how to inspect a recovery copy in a separate profile.

If any source or destination cards are temporarily in filtered decks, use **Empty** on those filtered decks before taking inventory. This returns the cards to their home decks, as the [filtered-deck manual](https://docs.ankiweb.net/manual/filtered-decks#home-decks) explains. This keeps the move within ordinary decks and makes the recorded deck and due information easier to compare.

Open **Options** for each source and the destination. Compare their presets, learning steps, daily limits, and FSRS settings if enabled. The destination's settings will matter after the move. If separate study routines are the reason for your current decks, keeping subdecks may serve you better.

Anki's [deck-options manual](https://docs.ankiweb.net/manual/deck-options#subdecks) also describes parent-deck limits and display-order behavior. Decide which deck you'll click to study afterward. Moving cards under a common parent doesn't remove that parent's influence. The [preset guide](/blog/anki-deck-options-presets/) helps distinguish shared settings from deck-specific overrides.

If you need the old source names for later searches, add source tags before moving. Tags belong to notes, so a sibling outside the source deck receives the tag too; see [tags versus decks](/blog/anki-tags-vs-decks/).

## A six-card collection with something to leave behind

The test collection contained the following cards. A1–E1 are worksheet labels, not Anki IDs.

| Card | Prompt | Starting deck | Starting state |
| --- | --- | --- | --- |
| A1 | delta | `Merge lab::Week 1` | Reviewed |
| A2 | Sediment deposited at a river mouth. | `Keep separate` | New |
| B1 | isthmus | `Merge lab::Week 1::Extra` | Suspended |
| C1 | peninsula | `Merge lab::Week 2` | New |
| D1 | strait | `Merge lab::Combined` | Reviewed |
| E1 | plateau | `Keep separate` | New |

The actual Front fields were the geography terms, with definitions on the back. Note A used **Basic (and reversed card)**, producing A1 and A2. The other notes used **Basic**. Each reviewed card, A1 and D1, had received one genuine scheduled **Easy** answer before the move.

The intended result is specific: move A1, B1, and C1 into `Merge lab::Combined`, retain D1 there, and leave A2 and E1 alone. B1 must remain suspended. The original five notes and six cards must still exist.

## Select the two source trees in Cards mode

Open **Browse** and check that the table-mode switch says **Cards**. In the [browser's two modes](https://docs.ankiweb.net/manual/browsing#table-modes), a selected note can stand for all its cards. Here, using Notes mode could bring A2 along with A1, even though A2 lives in `Keep separate`.

Search for both source trees:

```text
(deck:"Merge lab::Week 1" or deck:"Merge lab::Week 2")
```

The expected matches are **A1, B1, and C1: three cards from three notes**. The Week 1 search includes `Week 1::Extra`, so it includes suspended B1. There is no `is:due` or `is:new` restriction to omit cards outside today's queue.

Quote deck names containing spaces. The `or` accepts either source tree. These rules, including parent searches that include subdecks, are documented in [Anki's search syntax](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes).

If you want only cards stored directly in Week 1, excluding its children, use:

```text
deck:"Merge lab::Week 1" -deck:"Merge lab::Week 1::*"
```

That narrower search found only A1 in the test. It would leave B1 behind, so it doesn't fit this consolidation.

Before selecting all three cards, expose the **Deck**, **Due**, **Interval**, and **Reviews** columns. Record their identities and states. For reviewed cards, open **Cards → Info** and keep the card ID and review-history entries for comparison. Record destination card D1 and outside cards A2 and E1 too.

Then select the three source rows, choose **Cards → Change Deck**, select the full destination name `Merge lab::Combined`, and confirm **Move Cards**. The [released desktop implementation](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/browser.py) passes the selected card IDs to the move operation.

## Check membership before removing the old decks

Run the original source search again. It should now return zero cards. Search the destination separately:

```text
deck:"Merge lab::Combined"
```

It should contain A1, B1, C1, and D1. This example's destination has no children, so its search count is also its direct card count.

| Scope | Before | After moving |
| --- | --- | --- |
| Both source trees | A1, B1, C1 — 3 cards / 3 notes | 0 cards / 0 notes |
| Destination | D1 — 1 card / 1 note | A1, B1, C1, D1 — 4 cards / 4 notes |
| Entire `Merge lab` tree | 4 cards / 4 notes | 4 cards / 4 notes |
| `Keep separate` | A2, E1 — 2 cards / 2 notes | Same two cards and notes |
| Whole collection | 6 cards / 5 notes | 6 cards / 5 notes |

Clear the search to count the whole collection. Switch to Notes mode only when checking the note counts, then return to Cards mode. Don't add note counts across decks: note A appears in both the main tree and `Keep separate` through different cards.

Compare the recorded card IDs, review entries, due values, intervals, and suspension state. Inspect the moved cards and the existing destination card. A familiar question and the right total count aren't enough to show that the original cards survived.

Once both complete source trees are empty and the checks match, delete only `Merge lab::Week 1` and `Merge lab::Week 2`. Week 1's empty child goes with it. **Keep `Merge lab`**, because it still contains `Combined`. Never delete an ancestor of your destination deck.

Deleting an ordinary deck also deletes its cards and child decks, as Anki's [released deletion code](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/decks/remove.rs) shows. If any source-tree cards remain, investigate them before deleting. The home-screen daily counters are not a full membership inventory.

If you use multiple devices, sync the verified desktop result, then sync each other device before continuing study there.

## What the executed test established

Two fresh disposable collections ran the same example: one with SM-2 and one with FSRS, using Anki Python 26.9.3 on macOS 26.6.1, ARM64. Each run answered A1 and D1 through the scheduler, suspended B1, moved the three selected cards, and deleted the verified-empty source trees.

Both runs retained all six card IDs, all five notes with their fields and tags, and both review-history rows. Immediately after moving, due values, intervals, card types, queues, repetition and lapse counts, remaining-step values, and flags matched their recorded values. The outside cards were unchanged. Deleting the empty sources preserved the resulting cards, notes, and history.

That doesn't mean every scheduling detail must remain identical in every collection. The destination deliberately used different settings. In the FSRS run, A1's cached desired-retention value changed from 0.90 to 0.85 while its due value stayed unchanged. Those numbers were test conditions, not recommended settings.

Anki's [released card-move code](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/card/mod.rs) can adjust remaining learning steps and update FSRS memory data without rescheduling due dates. The fixture contained no active learning or relearning card, so its unchanged remaining-step values don't establish that behavior for those states. Preserving review history doesn't promise identical future intervals or the same daily workload.

These were backend tests, not desktop, mobile, AnkiWeb, media, or add-on tests. For your collection, finish by checking the membership ledger and the original cards' information, then preview any important image or audio cards before resuming study.

*AI tools researched, drafted, and edited this guide and executed the isolated backend tests. The illustration is AI-generated. The recorded results concern demonstration collections, not Kirill's personal study history.*
