---
title: "Mochi Cloze Deletions: Build and Check Review Groups"
description: "Create Mochi cloze deletions with plain and numbered blanks, predict each review group, and fix answer leaks using a small practice worksheet."
date: "2026-10-13"
image: "/blog/mochi-cloze-deletions.png"
keywords:
  - "mochi cloze deletions"
  - "Mochi cloze groups"
  - "Mochi hidden text"
  - "Mochi cloze syntax"
---

Two blanks can disappear together or become separate review prompts. In Mochi, a shared number puts them in the same group. The harder part is deciding what should remain visible: a correctly hidden answer can still appear elsewhere in your sentence.

For **Mochi cloze deletions**, use `{{answer}}` for plain hidden text and `{{1::answer}}` for a numbered group. Plain blanks hide together. With numbered groups, only one group is hidden at a time; repeated numbers join blanks, and different numbers separate them. [Mochi's cloze syntax reference](https://mochi.cards/docs/markdown/advanced-formatting/)

![A toy-maker holds two carved fish from one balance bar and a third fish from an independent cord](/blog/mochi-cloze-deletions.png)

The examples below use one fictional courier drill to compare three layouts, then repair cards that give away their answers. This guide was researched and edited with AI assistance using official documentation checked October 13, 2026. The examples and worksheet are original teaching material. Their expected displays follow the documented rules; no card review test was performed in the app.

## Start with the same sentence three times

Our fictional source sentence is:

> In the Bellmere courier drill, the parcel leaves Dock 7 at 08:40 for North Quay.

There are three details to recall: departure point, departure time, and destination. Nothing here describes a real timetable.

Create a practice deck and three ordinary Markdown cards without a template. Mochi's [first-card instructions](https://mochi.cards/docs/getting-started/create-a-card/) describe creating a deck, entering card text, and saving it. Paste only the contents of each example into the card editor, without the surrounding code fences. The fences display examples on this page; they aren't part of the exercise.

### A: Hide all three details together

```markdown
In the Bellmere courier drill, the parcel leaves {{Dock 7}} at {{08:40}} for {{North Quay}}.
```

All three plain blanks disappear together. The remaining words tell you the roles of the missing details, but supply none of their values.

Use this layout to practice the complete departure plan from the drill's name. Set a clear study rule: a complete response needs the dock, time, and destination. Remembering two of the three leaves part of the task unanswered.

### B: Give each detail its own group

```markdown
In the Bellmere courier drill, the parcel leaves {{1::Dock 7}} at {{2::08:40}} for {{3::North Quay}}.
```

This layout asks for one detail while supplying the other two as context. The time prompt includes the departure point and destination. The destination prompt includes the departure point and time.

Choose this layout when those are the lookups you want to practice. Being able to fill each blank with two details supplied doesn't establish that you can reconstruct the whole plan from the drill's name alone.

### C: Keep departure point and time together

```markdown
In the Bellmere courier drill, the parcel leaves {{1::Dock 7}} at {{1::08:40}} for {{2::North Quay}}.
```

Here, departure point and time form a pair. Group 1 asks for both departure details, with the destination supplied. Group 2 asks for the destination, with both departure details supplied.

Use the pair when your task is to recall where and when the parcel leaves as one response. If you know the dock but forget the time, the pair is incomplete. Separating those facts, as in layout B, would let you judge them individually.

Mochi documents a separate review schedule and history for each numbered group. [Mochi review variants](https://mochi.cards/docs/reviewing/cloze-deletions/) Decide group membership before reusing a layout. The cited documentation doesn't establish what happens to an existing history when you change or renumber groups.

## Write down exactly what remains visible

Use this ledger before trying the cards. `[blank]` is a worksheet marker, not Mochi's documented mask appearance. Every row describes the expected prompt before its hidden text is revealed.

| Layout and active group | Hidden answers | Expected visible sentence, with worksheet blanks |
| --- | --- | --- |
| A: unnumbered | Dock 7; 08:40; North Quay | In the Bellmere courier drill, the parcel leaves [blank] at [blank] for [blank]. |
| B: group 1 | Dock 7 | In the Bellmere courier drill, the parcel leaves [blank] at 08:40 for North Quay. |
| B: group 2 | 08:40 | In the Bellmere courier drill, the parcel leaves Dock 7 at [blank] for North Quay. |
| B: group 3 | North Quay | In the Bellmere courier drill, the parcel leaves Dock 7 at 08:40 for [blank]. |
| C: group 1 | Dock 7; 08:40 | In the Bellmere courier drill, the parcel leaves [blank] at [blank] for North Quay. |
| C: group 2 | North Quay | In the Bellmere courier drill, the parcel leaves Dock 7 at 08:40 for [blank]. |

Read only the visible column first. It should identify which drill and which details you need to recall. Then look for any copy of the hidden answer in that text.

The numbers identify membership. The table lists groups for comparison; it doesn't predict their review order or the sequence of reveals.

## Check three designs that need a decision

Try each exercise on paper before reading its proposed repair. You can then enter the repaired Markdown into fresh practice cards.

### 1. Pair the route endpoints

Starting with layout B, make the departure point and destination disappear together. Keep a separate group for the time. Predict both prompts before changing the text.

**One repair:**

```markdown
In the Bellmere courier drill, the parcel leaves {{1::Dock 7}} at {{2::08:40}} for {{1::North Quay}}.
```

Group 1 hides Dock 7 and North Quay; 08:40 stays visible. Group 2 hides 08:40; Dock 7 and North Quay stay visible. Three blanks belong to two groups because the card uses two distinct numbers.

This change also changes the question. Group 1 now asks for the route given the time. If you wanted to recall departure point and time together, layout C matches that task. Choose the question before choosing which blanks share a number.

### 2. Remove the answer outside the braces

The author wants to recall the departure point. Find the leak:

```markdown
In the Bellmere courier drill, the parcel leaves {{Dock 7}} at 08:40 for North Quay.
Departure point for this drill: Dock 7.
```

**One repair:** delete the second line.

```markdown
In the Bellmere courier drill, the parcel leaves {{Dock 7}} at 08:40 for North Quay.
```

The extra line prints the exact target while the first line asks you to recall it. The repaired prompt retains the drill, time, destination, and departure role. Those are intentional cues for this lookup; the second copy of Dock 7 supplies the answer itself.

Apply this check to the whole displayed card. A heading, caption, or explanatory sentence can repeat the target too. Keep the full source sentence in a separate reference note if you need it, and keep the practice card focused on its intended cue.

### 3. Check both directions of a lookup

This card tries to practice the route in both directions:

```markdown
Bellmere route: {{1::Dock 7}} to North Quay.
Reverse lookup: {{2::North Quay}} from Dock 7.
```

Find the visible copy of each group's answer. Consider whether giving both blanks the same number would remove those copies.

Group 1's Dock 7 appears at the end of the second line. Group 2's North Quay appears at the end of the first. A shared number would hide both wrapped answers, but leave both unwrapped copies visible.

For independent lookups, use two separate cards:

```markdown
In the fictional Bellmere courier drill, parcels bound for North Quay leave {{Dock 7}}.
```

```markdown
In the fictional Bellmere courier drill, parcels leaving Dock 7 are bound for {{North Quay}}.
```

Each card supplies the other endpoint as the intended cue without printing its own target. To recall both endpoints from the drill's name instead, use one shared group:

```markdown
Fictional Bellmere courier drill: parcels travel from {{1::Dock 7}} to {{1::North Quay}}.
```

These repairs serve different questions: an endpoint lookup or the complete route. You can also use a direct question and answer when a sentence blank gives too many clues.

## Keep expectations separate from observations

Try the three starting layouts in a disposable deck. Record your app version or web environment and the date. Leave each group unresolved until you've seen its prompt; seeing one group doesn't verify the others.

| Check | Expected hidden targets and visible details | Observed result |
| --- | --- | --- |
| A before reveal | Hide Dock 7, 08:40, and North Quay together | — |
| B, group 1 | Hide Dock 7; show 08:40 and North Quay | — |
| B, group 2 | Hide 08:40; show Dock 7 and North Quay | — |
| B, group 3 | Hide North Quay; show Dock 7 and 08:40 | — |
| C, group 1 | Hide Dock 7 and 08:40; show North Quay | — |
| C, group 2 | Hide North Quay; show Dock 7 and 08:40 | — |

Those six rows check predictions from Mochi's documented grouping rules. Check your own design requirements separately:

| Design check | Your requirement | Observation or decision |
| --- | --- | --- |
| Every prompt | Visible context identifies the drill and the requested details | — |
| Every prompt | No visible copy supplies a hidden target | — |
| Revealed answers | Details agree with the fictional source sentence | — |
| A response | Require all three details for a complete response | — |
| C, group 1 response | Require both dock and time; the dock alone is incomplete | — |

The completeness rules belong to the exercise. These tables don't assert how Mochi assigns a review grade.

You can optionally enable **Type hidden text** in **Settings → Preferences → Cards**, or through a deck's **Deck preferences**. [Mochi hidden-text settings](https://mochi.cards/docs/markdown/advanced-formatting/#typing-in-cloze-deletions) Check spelling acceptance separately; our [Mochi typed-answer guide](/blog/mochi-typed-answers/) covers accepted variants and multi-answer inputs. Typing an answer doesn't repair a visible answer leak.

## When the display doesn't match your plan

If your sentence doesn't appear, check whether the practice card uses a template. A template renders its own Markdown in place of the card's stored Markdown. [Mochi template behavior](https://mochi.cards/docs/templates/intro-to-templates/) The [existing-card template guide](/blog/mochi-templates-existing-cards/) explains that distinction.

If the wrong details disappear together, compare the actual card text with the ledger. Check every pair of braces and every group number, including repeated numbers. Reproduce the mismatch with one small example before using the pattern in a larger card. This exercise uses either all plain blanks or all numbered blanks; the cited rules don't resolve mixed or nested syntax.

If the groups match but the prompt feels too easy, inspect everything still visible. Keep the context your chosen question requires, and remove text that prints a hidden target. Changing a group number can't fix an answer left outside the braces.

Choose one of your own sentences and write its visible/hidden ledger before adding it to your study deck. A usable design has a clear question for every group, an answer you can judge, and no extra line doing the recall for you.
