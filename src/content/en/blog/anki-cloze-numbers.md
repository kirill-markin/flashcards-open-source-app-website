---
title: "Anki Cloze Numbers: Put Blanks Together or on Separate Cards"
description: "Control which blanks appear together in Anki, predict the cards made by c1 and c2, and check empty cards after changing a note."
date: "2026-09-28"
image: "/blog/anki-cloze-numbers.png"
keywords:
  - "Anki cloze numbers"
  - "Anki c1 c2"
  - "multiple cloze deletions one card"
  - "Anki empty cloze cards"
---

Three blanks in an Anki note can produce one card, two cards, or three. The difference is the number after each `c`. Give two blanks the same number and they disappear together; give them different numbers and you get separate questions. That's the basic rule behind Anki cloze numbers. [Anki's cloze documentation](https://docs.ankiweb.net/editing.html#cloze-deletion)

You can check that rule before studying anything: write one expected question for each number. That gives you a small card ledger to compare with Anki's preview. If you're changing a note you've already studied, there's another step: checking for obsolete empty cards.

![A man clips two terracotta socks under one peg beside two blue socks hanging from separate pegs](/blog/anki-cloze-numbers.png)

## Read the numbers as groups

Use Anki desktop's standard **Cloze** note type and its **Text** field for these examples. In `{{c1::answer}}`, `answer` is the hidden text. All the `c1` passages belong to one group; `c2` starts another. The standard note's **Extra** field appears on the answer side, so it can hold an explanation you don't want to see while answering. [Cloze fields and syntax](https://docs.ankiweb.net/editing.html#cloze-deletion)

A note holds the source information. Cards are the questions generated from it. Several cards can therefore share one editable note. [Anki's notes and fields](https://docs.ankiweb.net/getting-started.html#notes--fields)

For a fresh note with ordinary, non-nested clozes, count the distinct numbers to predict the generated cards. Repeating a number doesn't add another card. [Cloze card generation](https://docs.ankiweb.net/templates/generation.html#cloze-templates)

## One invented schedule, three ways to learn it

Imagine a fictional workshop whose schedule you need to remember:

> The ceramics workshop meets on Tuesday at 18:00 in Room 4.

We'll keep those facts fixed and change only the blanks. Each table below works out the expected fronts from the documented rules. Treat the versions as alternatives; you don't need to add all three to your deck.

### Put the day and time on one card

Paste this into a fresh Cloze note:

```text
The ceramics workshop meets on {{c1::Tuesday}} at {{c1::18:00}} in Room 4.
```

| Card | Front | Answers to recall |
| --- | --- | --- |
| c1 | The ceramics workshop meets on [...] at [...] in Room 4. | Tuesday; 18:00 |

This puts multiple cloze deletions on one card. You're recalling the appointment as a pair, so knowing Tuesday while forgetting 18:00 leaves the answer incomplete.

Grouping everything because it makes fewer cards can create an awkward question. You might know one part immediately and keep forgetting the other.

### Ask for each part separately

For a fresh note that asks two separate questions, give the time a different number:

```text
The ceramics workshop meets on {{c1::Tuesday}} at {{c2::18:00}} in Room 4.
```

| Card | Front | Answer to recall |
| --- | --- | --- |
| c1 | The ceramics workshop meets on [...] at 18:00 in Room 4. | Tuesday |
| c2 | The ceramics workshop meets on Tuesday at [...] in Room 4. | 18:00 |

Now each question asks for just one part. Notice what the fronts supply, though: the day question shows the time, and the time question shows the day. If you need to produce both from “When is the ceramics workshop?”, these questions provide more help than that real task does.

### Mix grouped and separate blanks

Suppose you want the appointment together and the room separately:

```text
The ceramics workshop meets on {{c1::Tuesday}} at {{c1::18:00}} in {{c2::Room 4}}.
```

| Card | Front | Answers to recall |
| --- | --- | --- |
| c1 | The ceramics workshop meets on [...] at [...] in Room 4. | Tuesday; 18:00 |
| c2 | The ceramics workshop meets on Tuesday at 18:00 in [...]. | Room 4 |

Three marked passages, two distinct numbers, two cards. On the `c1` card, the room stays visible; on the `c2` card, the day and time stay visible. Check the visible words as carefully as the blanks. They're part of the question too.

If you can't make a useful prompt by leaving part of the sentence visible, try a direct question. Our [cloze versus basic flashcards guide](/blog/cloze-deletion-vs-basic-flashcards/) covers choosing the recall target.

## Check the cards before studying them

Add your chosen version, then open **Browse** and locate it using its distinctive text. Switch to **Cards** mode, select each matching card, and use **Preview** to inspect its front and answer. Notes mode groups the results by note, and its preview shows the note's first card. It isn't enough for checking every question. [Anki Browser documentation](https://docs.ankiweb.net/browsing.html#editing-area)

Compare each preview with the ledger:

- Does the front hide exactly the intended answer or pair?
- Does the visible context make the question answerable without giving it away?
- Can you state what would count as a complete answer?

If two cards exist in Browse but only one appears during study, don't immediately renumber the note. Investigate their due dates and states; [burying and suspending](/blog/anki-bury-vs-suspend/) concern whether existing cards appear for study.

## After renumbering, check for empty cards

Suppose an existing workshop note uses `c1` for Tuesday, `c2` for 18:00, and `c3` for Room 4. You decide to recall all three together and replace every number with `c1`.

The intended result is one question:

```text
The ceramics workshop meets on {{c1::Tuesday}} at {{c1::18:00}} in {{c1::Room 4}}.
```

The old `c2` and `c3` cards now have no matching cloze. Anki doesn't immediately delete existing cards that become empty after an edit. Use **Tools → Empty Cards** from the main window to inspect and remove them. [Card generation and deletion](https://docs.ankiweb.net/templates/generation.html#card-generation--deletion)

For a note with review history, treat this as a change to what you're learning. A question asking for three facts has a different success condition from the old single-fact question. Don't renumber reviewed notes just to make their numbers look tidy, or assume regrouping combines their learning histories.

Use this sequence:

1. Make a current backup before restructuring reviewed material. If choosing an export format, see [Anki APKG versus COLPKG](/blog/anki-apkg-vs-colpkg/).
2. Write the intended questions down, then edit one note. Keep the original wording available until you've checked the result.
3. Preview the intended remaining card. Confirm that its blanks and answers match your plan.
4. Open **Tools → Empty Cards** and inspect the entire report. It covers the collection, and **Delete** acts on the report's empty cards, not just the note you edited. If anything listed is unexpected, cancel and investigate first. [Released Anki cleanup behavior](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/emptycards.py)
5. After cleanup, return to Browse and verify that the useful card and source note remain.

**Don't use the Browser's Delete action to remove an unwanted sibling.** It deletes the selected note and all its cards. [Browser deletion behavior](https://docs.ankiweb.net/browsing.html#notes)

This procedure assumes at least one useful cloze remains on every note you want to keep. If all of a note's cards are reported empty, cancel and repair that note first. The option to preserve notes can leave an empty card behind; it doesn't repair the missing cloze or limit deletion to your edited note. [Empty Cards deletion logic](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/emptycards.py#L87-L96)

## Try predicting a note yourself

Here is another invented instruction:

```text
For the practice kit, put {{c1::two pencils}} in the {{c2::green pouch}} and {{c1::one eraser}} in the tray.
```

Before checking below, write the front for each card. Then decide what changes if you replace the final `c1` with `c3` in a fresh note.

| Version | Card | Front |
| --- | --- | --- |
| Original | c1 | For the practice kit, put [...] in the green pouch and [...] in the tray. |
| Original | c2 | For the practice kit, put two pencils in the [...] and one eraser in the tray. |
| Final blank changed to c3 | c1 | For the practice kit, put [...] in the green pouch and one eraser in the tray. |
| Final blank changed to c3 | c2 | For the practice kit, put two pencils in the [...] and one eraser in the tray. |
| Final blank changed to c3 | c3 | For the practice kit, put two pencils in the green pouch and [...] in the tray. |

The original produces two cards: one for both supplies, one for the pouch. The revised version produces three: one per supply, plus the pouch question. Before adding more notes, take one sentence of your own and write the same ledger. If its preview matches your plan, the numbers are doing the job you intended.
