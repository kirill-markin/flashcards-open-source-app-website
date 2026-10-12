---
title: "Anki Leech Tag: Find and Unsuspend the Right Card"
description: "Find the card behind an Anki leech tag, distinguish shared note tags from suspension, and resume one repaired question without resetting its schedule."
date: "2026-10-12"
image: "/blog/anki-leech-tag.png"
keywords:
  - "Anki leech tag"
  - "find Anki leeches"
  - "Anki leech tag vs suspended"
  - "unsuspend Anki leech"
  - "Anki leech threshold"
---

An Anki search for `tag:leech` can show a vocabulary question you rarely get wrong. Its reverse direction may be the one that kept failing. Both cards share the note's tag, while each has its own lapse count and suspension state.

To bring the right question back, open **Browse** in **Cards** mode, inspect the individual directions, then unsuspend only the repaired, suspended card. Removing `leech` from the note won't bring that card back or clear its lapse count.

![A man mends a patch on one work glove while its intact mate stays clipped to it at the cuffs](/blog/anki-leech-tag.png)

## The tag belongs to the note

A note holds your fields and tags; its templates produce cards. A **Basic (and reversed card)** note generates two questions from the same fields. The [editing manual](https://docs.ankiweb.net/manual/editing) explains note-level fields and tags. Anki's default leech handling adds `leech` to the note after a card reaches eight review lapses and suspends that card. The threshold and action are configurable. See the [official leech documentation](https://docs.ankiweb.net/manual/leeches).

The separation is explicit in [Anki 26.09.3's answering implementation](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/answering/mod.rs): it adds the tag using the note ID and, when the action is Suspend, changes the current card's queue. It doesn't automatically suspend every sibling.

The Anki leech tag is a shared label. Suspension is an individual card state. A healthy sibling can carry the label, and a manually paused card can be suspended without it.

## Find the card behind the label

These instructions use desktop Anki, with behavior checked against the manual and released Anki 26.09.3. Open **Browse** and switch to **Cards** mode. Use these searches across your collection, without a deck filter that could hide a sibling:

| Search | What it finds |
| --- | --- |
| `tag:leech` | Cards whose notes carry the tag, including siblings |
| `tag:leech is:suspended` | Suspended cards from tagged notes |
| `tag:leech -is:suspended` | Cards from tagged notes that aren't suspended |
| `is:suspended` | All suspended cards, including manually paused ones |

These combine Anki's documented [tag and card-state searches](https://docs.ankiweb.net/manual/searching). “Not suspended” doesn't mean “due now”: a card can be future-due or buried. If that distinction matters, use the [bury versus suspend guide](/blog/anki-bury-vs-suspend/).

Consider this hypothetical collection. One Spanish note has `banco` on the front and `bank` on the back. Its reverse card has just reached eight review lapses with a threshold of eight and **Suspend** enabled. A separate note was manually paused while its translation was checked. A, B, and C below are short labels for the example, not IDs you can paste into Anki.

| Note / card | Question → answer | Lapses | `leech` tag | Suspended | Known reason in this example |
| --- | --- | --- | --- | --- | --- |
| N1 / A | banco → bank | 1 | Yes | No | Healthy sibling of B |
| N1 / B | bank → banco | 8 | Yes | Yes | B triggered the leech action |
| N2 / C | la acera → pavement | 0 | No | Yes | Manually paused for checking |

Here, `tag:leech` returns A and B. Adding `is:suspended` narrows it to B; adding `-is:suspended` returns A. The all-suspended search returns B and C. The control card C makes the distinction visible: suspension isn't a leech diagnosis.

Even the combination of a tag and suspension doesn't prove Anki automatically suspended that card. A could have been manually suspended after B tagged their shared note. The search describes current state, not the cause of that state.

## Check history and the actual threshold

Before editing, record each candidate's question, answer, and suspension state in the browser. Open **Cards → Info** for its card ID, note ID, lapse count, interval, and relevant review-history entries. Record the browser's **Due** value too; suspended cards show it in brackets. The [Card Info documentation](https://docs.ankiweb.net/manual/stats#card-info) explains the history and ratings, and the [released Card Info implementation](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/card-info/lib.ts) confirms the IDs and lapse count shown there.

Check the other cards from the same note too. Search `nid:YOUR_NOTE_ID`, replacing the placeholder with the recorded note ID. To return to just one card later, use `cid:YOUR_CARD_ID` with its actual numeric ID. Both are documented [object-ID searches](https://docs.ankiweb.net/manual/searching#object-ids). They keep the lookup precise even if a sibling lives in another deck or you change the question's wording. For this example, record A and B, plus C as the card that should stay paused.

Then open **Options** for the card's own deck, rather than assuming the parent deck you click to study supplies its leech settings. For a card in a filtered deck, inspect its original deck. Check the assigned preset and the **Leech threshold** and **Leech action** under Lapses. A current threshold of eight helps explain B in the example; it doesn't prove those settings were active when an older card was suspended.

The released [Lapses controls](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/LapseOptions.svelte) store these two settings in the current preset and keep them available with FSRS enabled. Changing either setting affects the other decks assigned to that preset. If you decide a change is needed, use the [preset guide](/blog/anki-deck-options-presets/) to choose its scope first.

A lapse means **Again on a review card**, as defined in [Anki's deck options](https://docs.ankiweb.net/manual/deck-options#lapses). Eight Again presses while initially learning a card aren't eight review lapses. Use the card's lapse counter and history rather than counting every failed answer in one study session.

An absent tag also doesn't prove a card is easy. Someone may have removed the tag, or the card may still be below its configured threshold. To inspect untagged cards with at least eight lapses, use `prop:lapses>=8 -tag:leech`. Adjust eight to your investigation; this is a diagnostic search, not evidence of which threshold applied historically.

## Repair the question, then preview its siblings

In the example, B asks for `bank` without saying which meaning: a financial institution or a riverbank? If the intended vocabulary is the financial institution, change the note's back field to `bank (financial institution)`. B now asks for the intended sense.

That same edit changes A's answer. Selecting B doesn't give you a private copy of the shared fields. Use **Preview** to inspect both directions after the edit: B should ask `bank (financial institution)` and accept `banco`; A should still ask `banco`, with the clarified English answer. If A also needs a cue because `banco` has another meaning in your material, repair that prompt before resuming. For broader choices about rewriting, splitting, or removing difficult material, use the [leech-repair guide](/blog/how-to-fix-leech-flashcards/).

## Unsuspend only the selected question

Return to **Cards** mode and search `tag:leech is:suspended`. To isolate B, use `cid:YOUR_CARD_ID is:suspended`, replacing the placeholder with B's recorded numeric ID. This exact lookup also works if you've already removed the tag.

Select only B, confirm its front and suspended state, then choose **Cards → Toggle Suspend**. Every selected row should be suspended before you use the toggle: Anki bases the action for the whole selection on the current card's state. Notes mode includes the selected note's cards, which is too broad for this one-direction return. These are the documented [browser selection and suspension rules](https://docs.ankiweb.net/manual/browsing#cards).

Rerun B's exact suspended search. It should return no card. Remove `is:suspended` to find B again, then compare its content, lapse count, due value, interval, and history with your record before answering it or performing any scheduling action. The browser's Due value will lose its suspension brackets; that display change isn't a new due date. Check A and C by their IDs too.

| Card | Content after the repair | Lapses before another review | Suspended afterward |
| --- | --- | --- | --- |
| A | banco → bank (financial institution) | 1 | No |
| B | bank (financial institution) → banco | 8 | No |
| C | la acera → pavement, unchanged | 0 | Yes |

The original failure that triggered the leech warning already affected scheduling. Your comparison starts with the suspended card's recorded state, not its interval before that failure. **Toggle Suspend** restores the queue without resetting the lapse count or changing the due value, as the [released unsuspend code](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/bury_and_suspend.rs) shows. **Reset** and **Set Due Date** are separate scheduling actions. When B appears still depends on its schedule and the study queue.

## Decide separately whether to remove the tag

You can leave `leech` on N1 as a reminder to watch B. If you've inspected all its siblings and want to clear the label, select only that note and use **Notes → Remove Tags**, entering `leech`. This removes the tag shared by A and B. It doesn't unsuspend either card or erase their lapse counters: the [released tag-removal operation](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/tags/remove.rs) updates note tags separately from card state.

If B resumes with eight lapses, it still has eight after tag removal. With the threshold still at eight and no counter reset, later failures in review trigger another warning at twelve lapses, then sixteen. The released [review-state code](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/states/review.rs) checks the counter, not whether the tag is already present. Anki can add the tag again and apply the configured leech action.

You can stop when B has a clearer question and is no longer suspended, A still works after the shared-field edit, and C stays paused for its separate reason. Clearing the tag is optional.
