---
title: "Fischer Projection R/S Practice: Priorities, Turns, and Redraws"
description: "Practice R/S assignments on Fischer projections with original diagrams, explained answers, priority checks, and 90° versus 180° redraws."
date: "2026-10-31"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/38955d641d87fe36cfb0e3769885efa54f1fcfb1d40e8fb09e3ea00fc38e22f1.webp"
keywords:
  - "Fischer projection R/S practice"
  - "Fischer projection practice problems"
  - "horizontal hydrogen R S"
  - "Fischer projection 180 degree rotation"
  - "CIP priorities"
---

A counterclockwise path can give an **R** answer in a Fischer projection. Check the lowest-priority group before deciding: if it points toward you, reverse the assignment suggested by the turn on the page.

This Fischer projection R/S practice worksheet gives you eight drawings and nine center assignments, including a two-center challenge. Work through A, then try B–H before reading the answer ledger. Keep three decisions separate: the group priorities, the apparent turn, and the direction of priority 4. All the exercises and answers are available here without an account.

![A cobbler turns a wooden shoe last beside its matching opposite-foot form on a worn workbench](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/38955d641d87fe36cfb0e3769885efa54f1fcfb1d40e8fb09e3ea00fc38e22f1.webp)

## What the cross tells you

**Every drawing A–H below is explicitly a Fischer projection.** Each `+` is a tetrahedral carbon at a bond intersection. The horizontal bonds point toward you; the vertical bonds point away. T, B, L, and R mark the top, bottom, left, and right positions. The position label R means “right”; the final descriptor R identifies configuration.

[OpenStax explains the Fischer convention](https://openstax.org/books/organic-chemistry/pages/25-2-representing-carbohydrate-stereochemistry-fischer-projections). Read these drawings using that convention; an ordinary cross-shaped bond drawing doesn't automatically specify the same geometry.

Once you've ranked the groups, use this table:

| Where is priority 4? | Apparent clockwise 1 → 2 → 3 | Apparent counterclockwise 1 → 2 → 3 |
| --- | --- | --- |
| Vertical: away | R | S |
| Horizontal: toward | S | R |

“Apparent” means the turn visible on the page. Hydrogen is priority 4 in these exercises. For another molecule, establish the priorities first rather than assuming hydrogen is the group to check.

### Start with the attached atom

Cahn–Ingold–Prelog, or **CIP**, priorities begin with the atoms directly bonded to the stereocenter. Higher atomic number wins: the relevant order here is **S > O > N > C > H**. Sulfur appears one bond farther out in G, where it settles a tie between carbon groups.

When two groups start with carbon, compare the atoms attached to those carbons, excluding the stereocenter. Sort each list by decreasing atomic number and compare entries until the first difference. A carbonyl double bond contributes two oxygen entries for this comparison. The duplicate is bookkeeping, not another physical oxygen atom. These are the basic [sequence rules described by OpenStax](https://openstax.org/books/organic-chemistry/pages/5-5-sequence-rules-for-specifying-configuration).

The carbon-group lists needed below are:

| Group attached through carbon | Next atoms for comparison |
| --- | --- |
| CO2H: carboxyl | [O, O, O] |
| CHO: aldehyde | [O, O, H] |
| CH2OH: hydroxymethyl | [O, H, H] |
| CH2SH: cysteine side chain | [S, H, H] |
| CH3: methyl | [H, H, H] |

In the drawings, `CO2H` means `C(=O)OH` and `CHO` means `C(=O)H`; each attaches through carbon. Both `HO` on the left and `OH` on the right attach through oxygen. `H2N` attaches through nitrogen.

## A: work through one center

**Fischer projection A — lactic acid**

```text
        CO2H (T)
           |
 H (L) ----+---- OH (R)
           |
         CH3 (B)
```

OH starts with O, so it gets priority 1. H is priority 4. CO2H and CH3 both start with C; compare their next atoms. Carboxyl's [O, O, O] outranks methyl's [H, H, H]. The order is **OH > CO2H > CH3 > H**.

Now locate priorities 1, 2, and 3: **right → top → bottom**. Their apparent turn is counterclockwise. Priority 4, H, is on the left horizontal bond and points toward you. Reverse the apparent S assignment: **A is R**.

Record the reasoning in one line:

`1–4: R,T,B,L; CCW; 4 toward; R`

If your answer differs, that line lets you find the disagreement: did you rank the groups differently, trace the wrong turn, or miss the reversal?

## Try B–H before checking

For each center, write priorities 1–4, their positions, the apparent turn, priority 4's direction, and the descriptor. CW means clockwise; CCW means counterclockwise. You can use the group-comparison table without looking at the answer ledger.

### B: reflect A

**Fischer projection B — lactic acid mirror**

```text
        CO2H (T)
           |
HO (L) ----+---- H (R)
           |
         CH3 (B)
```

Assign the center. Compare its priorities and positions with A: which change when the drawing is reflected?

### C: turn A by 180°

**Fischer projection C — lactic acid redraw**

```text
         CH3 (T)
           |
HO (L) ----+---- H (R)
           |
        CO2H (B)
```

Assign the center afresh, then compare with A. Follow each chemical group to its new position.

### D: turn A by 90° clockwise

**Fischer projection D — quarter-turn redraw**

```text
          H (T)
           |
CH3 (L) ---+---- CO2H (R)
           |
          OH (B)
```

Interpret this cross as a new Fischer projection, with horizontal bonds toward you and vertical bonds away. Does it represent A's configuration? Locate H before deciding whether to reverse the apparent assignment.

### E: resolve a carbon tie

**Fischer projection E — propane-1,2-diol**

```text
        CH2OH (T)
           |
 H (L) ----+---- OH (R)
           |
         CH3 (B)
```

Assign the center. Write the atom lists that distinguish CH2OH from CH3. Their first carbon atoms tie, so the comparison must continue.

### F: count the carbonyl duplicate

**Fischer projection F — glyceraldehyde**

```text
         CHO (T)
           |
HO (L) ----+---- H (R)
           |
        CH2OH (B)
```

Assign the center. For CHO versus CH2OH, identify the first list entry that differs.

### G: let sulfur settle the tie

**Fischer projection G — cysteine**

```text
        CO2H (T)
           |
H2N (L) ---+---- H (R)
           |
        CH2SH (B)
```

Rank all four groups from this structure. An order remembered from another amino acid may put the two carbon groups in the wrong order here.

### H: rank each center separately

**Fischer projection H — tartaric acid**

```text
        CO2H (T, C1)
           |
 H (L) ----+---- OH (R)  C2
           |
 H (L) ----+---- OH (R)  C3
           |
        CO2H (B, C4)
```

Numbering runs from **C1 at the top to C4 at the bottom**. At C2, the bottom bond leads to C3; at C3, the top bond leads to C2. Assign both centers. Both OH groups sit on the right, but check the other groups before deciding whether their descriptors match.

## Check the complete answer ledger

The position sequence lists priorities **1, 2, 3, 4**, in that order. Use each center's own drawing. In H, top and bottom refer to the bonds immediately above and below the center you're assigning.

| Center | Positions 1–4 | Apparent turn | Priority 4 | Final |
| --- | --- | --- | --- | --- |
| A | R, T, B, L | CCW | Toward | R |
| B | L, T, B, R | CW | Toward | S |
| C | L, B, T, R | CCW | Toward | R |
| D | B, R, L, T | CCW | Away | S |
| E | R, T, B, L | CCW | Toward | R |
| F | L, T, B, R | CW | Toward | S |
| G | L, B, T, R | CCW | Toward | R |
| H: C2 | R, T, B, L | CCW | Toward | R |
| H: C3 | R, B, T, L | CW | Toward | S |

### What settles each answer

**B, C, and D** all keep A's chemical priority order: OH > CO2H > CH3 > H. B's reflection gives S. C remains R after the 180° redraw. D gives S: H is vertical, so its apparent counterclockwise turn needs no reversal.

A **180° Fischer redraw preserves configuration** because the horizontal groups stay horizontal and the vertical groups stay vertical. A 90° redraw, interpreted again using the Fischer convention, exchanges which groups point toward and away; it inverts the represented center. Physically rotating a molecule doesn't change its configuration. The distinction concerns reinterpreting a drawing, as [OpenStax's rotation examples show](https://openstax.org/books/organic-chemistry/pages/25-2-representing-carbohydrate-stereochemistry-fischer-projections).

**E:** OH > CH2OH > CH3 > H. Compare [O, H, H] with [H, H, H]; the first entry settles the carbon tie. The priority positions match A, giving R.

**F:** OH > CHO > CH2OH > H. Compare [O, O, H] with [O, H, H]. The first O ties, then O beats H. With H toward you, reverse the clockwise assignment to get S.

**G:** NH2 > CH2SH > CO2H > H. N outranks both directly attached carbons. For those carbon groups, [S, H, H] beats [O, O, O] at the first entry: S outranks O. Don't add atomic numbers across a list. The counterclockwise turn reverses to R. For the side-chain structures themselves, see the [amino acid side-chain chart](/blog/amino-acid-side-chain-chart/).

**H:** OH is first and H is fourth at both centers. At C2, the top CO2H carbon gives [O, O, O]; the bottom C3 carbon gives [O, C, H]. The first O ties, then O beats C, so the top group is priority 2. At C3, the bottom CO2H group wins the same comparison against the upper C2 group. Priority 2 moves from top to bottom, giving **C2 R and C3 S: (2R,3S)**. The shared OH position doesn't determine their descriptors.

These assignments describe configuration. They don't determine optical rotation, and R/S isn't a replacement for D/L naming.

## Practice the step you missed

Hide the ledger and redo a missed center with the reasoning line. Then write a prompt for the specific step that went wrong:

- **Direction:** “In a Fischer projection, priority 4 is horizontal and 1 → 2 → 3 is clockwise. What is the descriptor, and why?” Answer: **S; priority 4 points toward you, so reverse the apparent assignment.**
- **Priority:** “Which outranks the other: CH2SH or CO2H?” Answer: **CH2SH; compare [S, H, H] with [O, O, O] and stop at S > O.**

On a later attempt, explain the comparison before checking the answer. Keep the complete molecule in your practice alongside these short prompts. The guide to [making better flashcards](/blog/how-to-make-better-flashcards/) explains how to focus a card on one decision.

*Preparation note: This worksheet was created with substantial AI assistance. The exercises and text diagrams are original. Automated signed-3D-determinant checks verified handedness for the supplied priority orders; they did not validate the chemical priority assignments or provide human chemistry review. Kirill Markin owns Nibomo.*
