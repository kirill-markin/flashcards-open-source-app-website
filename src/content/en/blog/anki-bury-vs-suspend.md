---
title: "Anki Bury vs Suspend: Hide Cards and Bring Them Back"
description: "Choose Anki Bury or Suspend for one card or a whole note, find hidden cards with exact searches, and bring them back without resetting your progress."
date: "2026-09-25"
image: "/blog/anki-bury-vs-suspend.png"
keywords:
  - "Anki bury vs suspend"
  - "unbury Anki cards"
  - "unsuspend Anki cards"
  - "bury siblings"
---

You can hide a Spanish vocabulary question in Anki and still meet its English-to-Spanish version later. That can be exactly what you wanted, or a sign that you chose **Card** when you meant **Note**. Before hiding anything, decide how long it should stay away and which directions you want to pause.

**Bury** hides a card until the next study day. **Suspend** hides it until you deliberately bring it back. Neither action requires resetting your progress. These instructions use desktop Anki; mobile menu names and locations may differ.

![A woman covers a stored rowboat while another boat waits moored beside the dock](/blog/anki-bury-vs-suspend.png)

## Choose the duration, then the scope

While studying, open **More**. The four choices combine two decisions:

| Action | What it hides | When the hiding ends |
| --- | --- | --- |
| Bury Card | Current card | Next study day, or manual unbury |
| Bury Note | All cards from its note | Next study day, or manual unbury |
| Suspend Card | Current card | Manual unsuspend |
| Suspend Note | All cards from its note | Manual unsuspend |

“Next study day” means Anki's day rollover, not a 24-hour timer started by your click. You can use **Unbury** on the deck overview to bring buried cards back sooner. These are Anki's documented [study controls](https://docs.ankiweb.net/studying.html#editing-and-more).

Use bury when today's exposure would make the answer too easy to guess, or when you want to leave something until tomorrow. Starting another session today won't unbury it. Use suspend when there's work to do first: repair an ambiguous question, check a translation, or decide whether the material still matters. Give that paused material a place in your weekly cleanup; otherwise, “later” can become indefinite.

## Follow one vocabulary note through all four choices

Consider this worked example, not a hands-on test. A **Basic (and reversed card)** note contains `la ventana` and `window`. It produces two sibling cards:

- **A:** la ventana → window, testing recognition.
- **B:** window → la ventana, testing production.

They come from one note but have separate review schedules. Assume both are review cards due today, neither is already hidden, and automatic sibling burying is off for this comparison. You are looking at A.

| Your intention | Choice on A | What happens to B |
| --- | --- | --- |
| “Skip this recognition question today.” | Bury Card | Still available for study |
| “I've just seen the translation; leave both directions for another day.” | Bury Note | Hidden with A |
| “Pause recognition while I work on producing the word.” | Suspend Card | Still available for study |
| “This translation needs checking before I practise either direction.” | Suspend Note | Paused with A |

Treat each row as a separate starting scenario. Don't run the four actions in sequence and expect the same result.

Before choosing, say the intended scope aloud: “this question” or “this vocabulary entry.” That small distinction is useful for cloze notes too, where one sentence can produce several questions. Two separately entered notes with similar text aren't siblings just because their answers match.

For a repair task, write down what needs fixing: “check whether this prompt needs the article” is actionable; “bad card” isn't. Our [deck-pruning guide](/blog/how-to-prune-a-flashcard-deck/) covers the broader decision to keep, rewrite, or remove material.

## Find the hidden cards before bringing them back

Open **Browse** and use **Cards** mode so you can inspect each direction separately. For the example deck, these searches distinguish the states:

| Search | Finds |
| --- | --- |
| `deck:"Spanish Vocabulary" is:buried` | Buried cards, regardless of cause |
| `deck:"Spanish Vocabulary" is:buried-manually` | Cards hidden with a manual bury action |
| `deck:"Spanish Vocabulary" is:buried-sibling` | Cards buried automatically as siblings |
| `deck:"Spanish Vocabulary" is:suspended` | Suspended cards |

Replace the deck name with yours. Remove the deck term to search the whole collection. These are the official [Anki state searches](https://docs.ankiweb.net/searching.html#card-state), not tags you need to create.

For our two-card note, inspect the question direction as well as the result count. One suspended result could mean A or B. Two results only prove both directions are paused if you've checked that both belong to the intended entry. A deck-wide search may contain many unrelated notes.

To **unsuspend Anki cards**, keep the suspended-only search, select the intended rows, and choose **Cards → Toggle Suspend**. In a mixed selection, the current card determines whether the whole selection is suspended or unsuspended. Filtering first removes that ambiguity. Notes mode includes all cards belonging to selected notes; Cards mode gives you the individual rows. See [Anki's browser actions](https://docs.ankiweb.net/browsing.html#cards).

To **unbury Anki cards**, return to the relevant deck overview and use **Unbury**. This is a deck action: selecting one browser row doesn't restrict it to that card. When both manual and automatic burials are present, Anki offers a choice between those groups or all buried cards. Inspect the deck's buried cards before clicking, because you may restore more than the vocabulary pair. This behavior is visible in [Anki 26.09.3's Unbury implementation](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/overview.py). Then rerun your state search to check the result.

A card leaving the hidden-state results means you've removed that restriction. It doesn't promise an immediate appearance: due dates, daily limits, and study order still matter. If the queue itself is confusing, start with [why Anki has so many reviews](/blog/why-are-there-so-many-anki-reviews/).

## When Anki buries the sibling for you

Suppose A appears but B disappears without you choosing Bury. Check `is:buried-sibling` before assuming something broke.

In deck options, automatic burying has separate settings for **new**, **review**, and **interday learning** siblings. Interday learning means a learning step crossed a day boundary. Anki gathers intraday learning cards first, then interday learning, review, and new cards; that order affects which sibling takes priority. A later category cannot bury an earlier one. The current [burying options](https://docs.ankiweb.net/deck-options.html#burying) explain these interactions.

For this vocabulary pair, decide whether seeing the reverse direction today would test recall or mostly repeat the answer you've just read. That gives you a practical reason to choose the sibling setting, rather than switching it off merely because today's card count fell.

## Recover the card without starting over

Avoid **Reset** when your goal is simply to resume: it moves cards into the new-card queue. Also avoid **Delete** as a shortcut for removing one direction; deletion removes the note and its generated cards. Those are separate [browser operations](https://docs.ankiweb.net/browsing.html#menus-and-actions).

For a concrete recovery, suppose you suspended the whole `la ventana` note while checking its translation. After fixing it, the suspended-only search should show A and B. If you now want production practice only, select B in Cards mode and use Toggle Suspend. Rerun the search: A should remain suspended, while B should disappear from those results. Clear the state filter to find B again and inspect its question and due date. You've restored the direction you wanted without restarting either card.
