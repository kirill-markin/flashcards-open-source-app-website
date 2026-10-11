---
title: "Anki Set Due Date vs Reset: What Changes with FSRS"
description: "Choose Anki Set Due Date or Reset, compare FSRS and legacy intervals, and check one card without changing its siblings. Includes a small rehearsal."
date: "2026-10-11"
image: "/blog/anki-set-due-date-vs-reset.png"
keywords:
  - "Anki Set Due Date vs Reset"
  - "Anki reset cards"
  - "Anki Forget"
  - "Set Due Date FSRS"
  - "Anki change due date"
  - "Anki reset interval"
---

Anki's Set Due Date dialog shows `1!` as a way to make a card due tomorrow and change its interval to one day. With FSRS enabled in Anki 26.09.3, that interval instruction doesn't apply: `1` and `1!` take the same interval-selection path. A card can move to tomorrow while its stored interval remains longer than one day.

Use **Set Due Date** when you want a selected card due on a chosen day. Use **Reset**, called **Forget** in older versions, when you deliberately want that card back in the new-card queue. Both are manual scheduling changes, and neither erases its existing review history.

This desktop guide was checked against the official manual and released [Anki 26.09.3 source](https://github.com/ankitects/anki/releases/tag/26.09.3) on October 11, 2026. Its interval rules are specific to that release. The two-card rehearsal below gives source-based expectations; it isn't a report of running Anki.

![A runner resets a stopwatch while two worn medals hang from a kit bag beside him](/blog/anki-set-due-date-vs-reset.png)

## Decide what should change

Suppose one vocabulary direction needs to come up three days from now. You still want it treated as a review card. Select that card in **Browse**, then choose **Cards → Set Due Date** and enter `3`.

If you've substantially rewritten its question and want to introduce it again as new material, choose **Cards → Reset** instead. The official [reset FAQ](https://docs.ankiweb.net/faqs/resetting-progress-in-a-deck) gives changed cards as one reason to start learning them again.

| Intended result | Action | Check afterward |
| --- | --- | --- |
| Make this card due today | Set Due Date: `0` | Review state; due today |
| Make this card due in three days | Set Due Date: `3` | Review state; chosen due date; interval checked separately |
| Spread selected cards over days 3 through 7 | Set Due Date: `3-7` | Each due date falls within that range |
| Introduce this card again as new | Reset | New state; intended position and counter behavior |

The range picks a random delay for each selected card. It doesn't promise equal numbers on each day. Set Due Date also turns a new card into a review card, so use [Anki's new-card order and position controls](/blog/anki-new-card-order/) when you want to change its place among other new cards.

For temporarily hiding cards, see [Bury or Suspend](/blog/anki-bury-vs-suspend/). For extra practice while preserving the normal due dates, use the [filtered-deck practice workflow](/blog/anki-filtered-decks-without-rescheduling/). These actions solve different problems.

## The due date and interval can tell different stories

The due date tells you when the card is scheduled next. The stored interval is a separate value. Setting the date three days ahead doesn't always make the interval three days.

For Set Due Date, the released implementation checks FSRS **before** it checks the `!` flag. That qualifies the general interval description in the manual and the dialog's `1!` hint. Here is the behavior in [Anki 26.09.3's scheduling code](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/reviews.rs):

| Starting card and input | FSRS enabled | FSRS disabled: legacy scheduling |
| --- | --- | --- |
| Review card with a nonzero interval; enter `3` | Due in 3 days. With a recorded last-review time, interval becomes elapsed study days plus 3. | Due in 3 days. Existing interval is retained, with a minimum of 1 day. |
| Same starting card; enter `3!` | Same interval-selection behavior as `3`; `!` doesn't force a 3-day interval. | Due in 3 days; interval becomes 3 days. |
| New card; enter `3` or `3!` | Becomes a review card due in 3 days, with stored interval 0. | Becomes a review card due in 3 days, with interval 3 days. |
| Reset a reviewed card | Becomes new; current interval is cleared to 0. | Becomes new; current interval is cleared to 0. |

For FSRS, “elapsed study days” is calculated using Anki's next study-day boundary and the recorded last-review time. It isn't simply the hours since the review divided by 24. Two other cases matter:

- If the card already has interval 0, Set Due Date keeps it at 0.
- If its interval is nonzero but no last-review time is recorded, Anki adjusts the old interval by the due-date shift, without letting it go below 0.

These are rules for the immediate stored state. They don't predict the answer-button intervals at your next review or the effect of later FSRS optimization. Set Due Date doesn't submit an **Again** answer, and `!` doesn't make FSRS treat a card as forgotten.

## Reset keeps history and offers two choices

Reset returns the selected cards to **New** and clears their current interval. In the released [Reset implementation](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/new.rs), it also clears their current FSRS memory state. That state and the list of earlier reviews are different things: the earlier entries remain available in Card Info.

The dialog's two checkboxes control separate results:

- **Restore original position where possible:** use the saved original new-card position if available. Otherwise, put the card at the end of the new queue. Leaving this unchecked also puts it at the end.
- **Reset repetition and lapse counts:** set the card's current review and lapse counters to zero. Leaving this unchecked keeps those counters.

Read both choices each time; Anki remembers them for the context. The [Browser reference](https://docs.ankiweb.net/manual/browsing#cards) distinguishes these optional counter changes from preserved review history. A zero **Reviews** counter after Reset doesn't prove that earlier review entries were deleted.

Manual scheduling can add an entry to that history. The [Card Info documentation](https://docs.ankiweb.net/manual/stats#card-info) identifies it with type **Manual** and rating **0**; Again has rating **1**. Check that the earlier entries remain rather than expecting the list to stay identical in length. Manual scheduling has no recorded answer time.

## Select one card, even when the note makes two

A **Basic (and reversed card)** note can make two question directions with independent schedules. Changing the due date of one direction doesn't require changing the other. The selection matters: work in **Browse → Cards** mode, where each row represents a card, rather than relying on a note count.

For a rehearsal, use a copy of your collection in a separate profile disconnected from AnkiWeb. Preserve the starting collection first; the [APKG and COLPKG guide](/blog/anki-apkg-vs-colpkg/) explains the export choices.

Before changing anything, record both cards' question direction, card ID, note ID, deck, Due, Interval, Reviews, Lapses, and earlier history. Use **Cards → Info** for details and **Preview** to confirm the direction without grading an answer. Then select only the intended card's row.

IDs let you inspect the same objects after their state changes. If the note ID were `123` and the selected card's ID were `456`, these searches would be useful:

| Search | Purpose |
| --- | --- |
| `nid:123` | Inspect all cards generated by that note |
| `cid:456` | Find the selected card regardless of its new or review state |
| `cid:456 is:review` | Check its review state after Set Due Date |
| `cid:456 is:new` | Check its new state after Reset |

Replace the example numbers with IDs from your own Card Info. These are documented [Anki object-ID and state searches](https://docs.ankiweb.net/manual/searching#object-ids). A correctly reset card disappears from a review-only search, so keep the plain ID search available too.

## Compare each operation from the same starting point

Here is a hypothetical note containing `el faro` and `lighthouse`. Card A asks for the English word; Card B asks for the Spanish word.

| Starting record | Card A: el faro → lighthouse | Card B: lighthouse → el faro |
| --- | --- | --- |
| State | Review | Review |
| Due | In 14 days | In 8 days |
| Interval | 20 days | 12 days |
| Reviews / Lapses | 17 / 2 | 8 / 0 |
| Earlier history | Present; record the entries | Present; record the entries |
| Saved original new-card position | Assume 42 | Not needed here |

Assume neither card is buried, suspended, learning, or in a filtered deck. For A's FSRS calculation, its recorded last-review time yields **6 elapsed study days** at Anki's next day boundary. These numbers describe the example, not your card.

Each row below starts from that same record. They are **independent scenarios**, not a sequence of changes. For the FSRS-on and FSRS-off comparisons, use separate starting copies with the appropriate setting; switching schedulers in the middle adds another change to account for.

| Operation on A only | A afterward | B afterward |
| --- | --- | --- |
| FSRS on; Set Due Date `3` | Review; due in 3 days; interval **6 + 3 = 9 days**; counters 17 / 2 | Starting state retained |
| FSRS on; Set Due Date `3!` | Review; due in 3 days; interval **9 days**; counters 17 / 2 | Starting state retained |
| FSRS off; Set Due Date `3` | Review; due in 3 days; interval **20 days**; counters 17 / 2 | Starting state retained |
| FSRS off; Set Due Date `3!` | Review; due in 3 days; interval **3 days**; counters 17 / 2 | Starting state retained |
| Reset; restore position checked; reset counts unchecked | New; position **42**; stored interval 0; counters **17 / 2** | Starting state retained |
| Reset; both options unchecked | New; at end of new queue; stored interval 0; counters **17 / 2** | Starting state retained |
| Reset; restore position checked; reset counts checked | New; position **42**; stored interval 0; counters **0 / 0** | Starting state retained |

If you try multiple scenarios in one rehearsal copy, use **Edit → Undo** immediately after inspecting each operation and confirm the starting records are restored. Don't answer cards or cross the study-day rollover between comparisons.

In every scenario, A's earlier review entries remain; allow for a new Manual entry. B should keep its due date, interval, counters, and history, with no entry added by an operation targeting only A.

## Check the result without answering the card

After Set Due Date, confirm the selected date and review state, then inspect the interval under the applicable scheduler rule. After Reset, confirm new state, the position behavior, and the chosen counter behavior.

The Browser changes how it displays a new card: **Due** shows a new-card queue position, and **Interval** is only displayed for review or relearning cards. A blank interval cell after Reset doesn't mean the reset failed. The table above describes the stored interval, which the implementation clears to 0.

Return to the note-ID search and compare the sibling against your starting record. Check the selected card's earlier history in Card Info, distinguishing any Manual entry from an answered review. Its question, answer, and home deck should still match the intended card. None of these checks requires pressing Again, Hard, Good, or Easy.

If the rehearsal disagrees, stop before extending the selection. Keep the Anki version, FSRS setting, starting records, exact input or checkbox choices, and observed result for diagnosis. A chosen due date also doesn't guarantee where the card appears within a session; study limits and queue order still apply.

Finish with a result you can verify: the selected direction is due on the intended day, or it is new again with the chosen counts and position. Its sibling gives you a useful comparison, and the retained history shows what happened before the manual change.
