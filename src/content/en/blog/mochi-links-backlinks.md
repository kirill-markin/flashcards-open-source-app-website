---
title: "Mochi Links and Backlinks: Keep Reference Notes Out of Review"
description: "Link Mochi cards to an archived reference note, check backlinks, and keep links or embeds from revealing answers before you recall them."
date: "2026-10-07"
image: "/blog/mochi-links-backlinks.png"
keywords:
  - "mochi links and backlinks"
  - "link cards in Mochi"
  - "Mochi reference notes"
  - "Mochi embed cards"
  - "archive Mochi notes"
---

A flashcard that displays its source rule is easy to get right. You read the rule, choose an answer, and never find out whether you could have done it from memory. A long reference note in the review queue creates a different problem: you have to deal with the whole explanation when you only wanted to practice one small question.

Use **Mochi links and backlinks** to keep that explanation available after you answer. This rehearsal uses one archived reference note and two active flashcards. You'll follow their links, check which cards belong in review, and catch a stale answer after changing the source.

![A woman paints a doorway blue while two detached shutters beside it retain their old ochre paint.](/blog/mochi-links-backlinks.png)

The setup is based on Mochi's official documentation, checked October 7, 2026. The fictional rules and diagnostic exercise below are original examples; this is a suggested rehearsal, not a hands-on app test.

## Start with one note and two questions

Create a deck called **Routing rehearsal** and use cards without a template. Mochi renders a template's content instead of the card's raw Markdown when a template is applied, so plain cards make this exercise easier to inspect. [Mochi cards and templates](https://mochi.cards/docs/cards/)

Copy each block into a separate card. R, A, and B are labels for this worksheet, not Mochi card IDs. The token-sorting game is invented; the note contains everything needed to answer the questions.

**R — the reference note:**

```markdown
# Workshop routing rules

This is a fictional token-sorting game.

- A round token needs at least two stamps to enter the release tray.
- A square token needs at least one stamp to enter the release tray.
- A token with too few stamps stays in the waiting tray.

Shape determines the stamp threshold.
```

**A — apply the round-token rule:**

```markdown
A round token has two stamps. Which tray does it enter?
---
The release tray. A round token needs at least two stamps.
```

**B — apply the square-token rule:**

```markdown
A square token has no stamps. Which tray does it enter?
---
The waiting tray. A square token needs at least one stamp.
```

The `---` line separates the question and answer sides. [Mochi flashcard sides](https://mochi.cards/docs/markdown/advanced-formatting/)

Read R once before attempting the questions. A tests the boundary: exactly enough stamps. B tests a case below the threshold. Separate questions let you notice which application you need to practice. For help choosing questions from your own notes, see [how to make better flashcards](/blog/how-to-make-better-flashcards/).

## Let Mochi create the references

On A's answer side, add a new line with `Source rule: `, then type `[[`. Select **Workshop routing rules** from the search results. Do the same on B's answer side. Typing `[[` opens Mochi's card search, and a reference creates a backlink on the target card. [Mochi internal references](https://mochi.cards/docs/markdown/basic-formatting/)

Keep the reference Mochi inserts. Selecting the target is easier to check than inventing an ID or guessing which card a similar title refers to.

These are the relevant forms, with `card-id` standing for the actual ID in your inserted reference:

```markdown
[[card-id]]
[[Source rule|card-id]]
![[card-id]]
```

The first link uses the target card's name as its label. The second uses **Source rule**: custom labels go **before the pipe**, followed by the ID. The third embeds the entire target card in the current card. That extra `!` changes what the learner sees. [Mochi references and embeds](https://mochi.cards/docs/markdown/advanced-formatting/)

Open A's source link and read the destination. It should contain the full routing rules. Repeat from B, then open R and look for both questions in its backlinks. Opening a link confirms that it works; reading the destination checks that it reaches the right note.

Try a deliberate mistake: temporarily replace B's source reference with a reference to A. Follow it and you'll reach another question instead of the rule note. Open R and A and record what their backlink lists show after the edit. Then restore B's link to R and repeat the destination and backlink checks. This exercise gives you a recognizable wrong link to diagnose before you're dealing with dozens of similar cards.

## Archive R, leave A and B active

Open R's more menu and choose **Archive card**. Archive only R. Archived cards leave **New cards** and **Due today**, keeping their content and history. Archiving the deck would pause every card in it and its subdecks, including the questions you want to practice. [Mochi archiving](https://mochi.cards/docs/reviewing/archiving/)

Follow A's and B's source links again after archiving. Mochi allows archived notes to be opened, edited, and linked, so R should remain accessible from both questions. [Mochi reference notes](https://mochi.cards/docs/cards/)

Record the card states and what you actually see in the queues:

| Object | Intended state | Your observation |
| --- | --- | --- |
| R — Workshop routing rules | Archived; excluded from New and Due today | — |
| A — round token question | Active; new or scheduled for review | — |
| B — square token question | Active; new or scheduled for review | — |

Freshly created A and B belong in **New cards** until you learn them. **Add to reviews** puts a card into the spaced-repetition schedule. If the queue doesn't show both questions, check whether a daily new-card limit is restricting it. [Mochi new cards](https://mochi.cards/docs/reviewing/new-cards/)

Once learned, cards have due dates. Check those dates before expecting A and B in **Due today**; an active card needn't be due yet. An empty queue alone doesn't prove that you archived the right objects. [Mochi due dates](https://mochi.cards/docs/reviewing/due-today/)

If both questions disappear after archiving, inspect the deck's archive state as well as each card's. You want R excluded and A and B still eligible for learning or scheduled review. For practice outside the normal schedule, see the [Mochi custom views and Cram guide](/blog/mochi-custom-views-cram/).

## Inspect the question before you answer

Use forward review for this rehearsal, with **Review reverse** turned off for A and B. Mochi can enable reverse review at card, deck, or global level; check the settings that apply to these cards. In reverse review, the answer side comes first, so putting the source link there no longer keeps it behind the question. [Mochi reverse reviews](https://mochi.cards/docs/reviewing/review-reverse/)

View A in the learning or review mode you use. Decide which tray the token enters before revealing the answer. Then compare your answer and open the source link if you need to check the reason. Repeat with B.

Watch for three ways to give yourself the rule too early:

| What appears before recall | What it gives away | Repair |
| --- | --- | --- |
| An embed of R on the question side | The threshold needed to solve the question | Remove the embed; keep a source link on the answer side |
| A visible link labeled “Two stamps means release” | A's answer without even opening the link | Use “Source rule” on the answer side |
| A source link you open before deciding | The rule you're trying to recall and apply | Attempt an answer before consulting R |

Inspect the rendered question, not just its Markdown. A neutral label helps, but the link should also stay hidden until you reveal the answer. If you later enable reverse review, inspect that direction too: this placement was chosen for a forward question.

Embeds can be useful in reference notes, where you want related information on screen. Here, the decision is the exercise. If a question feels vague without its source beside it, sharpen the question's wording.

## Change a rule and find the stale answer

Edit R so round tokens require **at least three stamps**. Keep the square-token threshold at one. Leave A and B unchanged for a moment, then follow their source links and solve each question using the revised rule.

A's two-stamp token now belongs in the waiting tray, but its stored answer still says release. Replace A's answer sentence with the following, **keeping its source link to R**:

```markdown
The waiting tray. A round token now needs at least three stamps.
```

B still has a square token with no stamps, below the unchanged one-stamp threshold. Its waiting-tray answer remains correct.

After editing your own reference notes, use their backlinks to find questions worth examining. Solve each one from the new source, compare it with the stored answer, and fix any disagreement. A working link can still lead from an outdated answer to a current rule.

Try A and B again with their answers hidden. This time, the round token goes to the waiting tray too. The reference note gives you a place to check why, without doing the work for you before you answer. For more on Mochi's approach to notes and cards, read the [Mochi flashcards review](/blog/mochi-alternative/).
