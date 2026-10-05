---
title: "Conditional Probability from Two-Way Tables: Practice with Answers"
description: "Practice conditional probability with two-way tables: choose the given group, reverse the condition, rebuild counts from percentages, and check explained answers."
date: "2026-10-05"
image: "/blog/conditional-probability-two-way-tables.png"
keywords:
  - "conditional probability two-way table"
  - "conditional probability practice"
  - "conditional probability from a table"
  - "P(A given B)"
  - "reverse conditional probability"
---

In a fictional workshop, 36 people attended the morning session and finished a project. That same group gives you three answers: 75%, 60%, or 30%. The arithmetic is straightforward. The part that needs attention is deciding who belongs in the denominator.

**To find conditional probability from a two-way table, divide the count satisfying both conditions by the total for the given group.** In P(A | B), B is the given information, so B supplies the denominator. Reversing the condition can change that denominator even when the numerator stays the same.

All datasets below are invented for practice. Each person or item belongs to exactly one row category and one column category. When selecting from a collection, give every individual the same chance of selection. This is what lets us calculate probabilities as ratios of counts.

![A woman hangs a blue striped shirt among striped garments, with plain blue and terracotta shirts on a separate line](/blog/conditional-probability-two-way-tables.png)

## Start with the given group

A two-way table, also called a contingency table, records two categorical variables together. Its interior cells count combinations; its margins give row and column totals. [OpenStax's contingency-table lesson](https://openstax.org/books/introductory-statistics-2e/pages/3-4-contingency-tables) shows how given information restricts the group used in a conditional calculation.

Here are the 120 workshop participants. Each attended either the morning or afternoon session, and each either finished or did not finish the project.

| Session | Finished | Did not finish | Total |
|---|---:|---:|---:|
| Morning | 36 | 12 | 48 |
| Afternoon | 24 | 48 | 72 |
| Total | 60 | 60 | 120 |

Select one participant uniformly at random. Let F mean “finished” and M mean “attended the morning session.”

For **P(F | M)**, read the notation as “the probability that the participant finished, given that they attended the morning session.” Only the 48 people in the Morning row remain relevant, and 36 finished:

**P(F | M) = 36/48 = 3/4 = 75%.**

Write a sentence with the answer: “Among morning participants, 75% finished.” That sentence makes the denominator visible. “75% of participants finished” would wrongly describe the entire workshop.

Use this short worksheet before calculating:

1. Name the **given group**: who meets the condition after the vertical bar?
2. Find the **denominator**: how many people or items are in that group? It must be greater than zero.
3. Find the **numerator**: how many within that group also meet the requested condition?
4. State the answer in context: “Among ___, the fraction that ___ is ___.”

The formal rule is **P(A | B) = P(A ∩ B) / P(B), for P(B) > 0**. The symbol ∩ means “and”: both events occur. [OpenStax's probability rules](https://openstax.org/books/introductory-statistics-2e/pages/3-3-two-basic-rules-of-probability) give this formula. With equally likely individuals, the whole-collection totals cancel:

**P(F | M) = (36/120) / (48/120) = 36/48.**

Once you've identified the given group, you can use the count ratio directly.

## Reverse the condition, keep the overlap

Now ask **P(M | F)**: the probability of attending the morning session, given that the participant finished.

The given group is everyone who finished. That's the Finished column, with 60 participants. Of those, 36 attended the morning session:

**P(M | F) = 36/60 = 3/5 = 60%.**

Both questions use the same 36 people. One divides by all morning participants; the other divides by all finishers. The vertical bar separates the requested event from the given event. It doesn't say that one happened earlier or caused the other.

Compare those with **P(M ∩ F)**, the joint probability. Here you ask whether a participant selected from all 120 is both a morning attendee and a finisher. There is no given subgroup:

**P(M ∩ F) = 36/120 = 3/10 = 30%.**

| Question | Numerator | Denominator | Answer |
|---|---:|---:|---:|
| Finished, given morning | 36 | 48 morning participants | 75% |
| Morning, given finished | 36 | 60 finishers | 60% |
| Morning and finished | 36 | All 120 participants | 30% |

The [University of Minnesota's two-way-table lesson](https://www.stat.umn.edu/geyer/3011/examp/tab.html) distinguishes joint probabilities calculated against the grand total from conditional probabilities calculated within a restricted group.

P(A | B) and P(B | A) can happen to be equal. You still need to check their respective denominators. A conditional percentage alone generally isn't enough to calculate the reverse conditional probability.

## Build a table from percentages

Suppose a fictional depot has 240 parcels:

- 25% are express; the rest are standard.
- Of the express parcels, 80% were collected by 6 p.m.
- Of the standard parcels, 40% were collected by 6 p.m.

Treat these percentages as exact. Select one of the 240 parcels uniformly at random. Find the probability it is express, given that it was collected by 6 p.m.

The supplied 80% is **P(collected | express)**. The question asks **P(express | collected)**. You need the total number of collected parcels to reverse the condition.

First calculate the row totals: express = 25% × 240 = 60; standard = 240 − 60 = 180. Then apply each collection percentage to its own row:

- Express and collected: 80% × 60 = 48. Express and not collected: 60 − 48 = 12.
- Standard and collected: 40% × 180 = 72. Standard and not collected: 180 − 72 = 108.

Add down the columns to finish the table:

| Service | Collected by 6 p.m. | Not collected by 6 p.m. | Total |
|---|---:|---:|---:|
| Express | 48 | 12 | 60 |
| Standard | 72 | 108 | 180 |
| Total | 120 | 120 | 240 |

There are 120 collected parcels, including 48 express parcels:

**P(express | collected) = 48/120 = 2/5 = 40%.**

The original conditional was 48/60 = 80%. The joint probability is 48/240 = 20%. The table connects all three without changing what the supplied percentages mean.

Multiplying 80% by 240 would produce 192 express-and-collected parcels, even though only 60 parcels are express. That contradiction catches the wrong percentage base immediately.

If no collection size is supplied, you can organize exact proportions using an imagined total such as 100 or 1,000. The resulting entries are scaled weights and may be fractional; they aren't observed headcounts. Rounded percentages may prevent exact reconstruction, so don't silently turn rounded rates into exact counts.

## Check the totals and the denominator

For a missing cell, subtract known entries from its row or column total. Then check the other direction. Every row and column must add to its stated total, and both sets of totals must add to the grand total. Counts must be nonnegative whole numbers. Within a given group, the numerator can't exceed the denominator.

A zero numerator can give a valid probability of 0%. A zero denominator makes the conditional ratio undefined. For example, the workshop has no online participants:

- **P(online | finished) = 0/60 = 0.** There are 60 finishers, and none attended online.
- **P(finished | online) is undefined in this count model.** There are no online participants, so the ratio would be 0/0.

There is no online group in which to calculate a proportion. Keep the requirement P(B) > 0 attached to the rule.

For questions about relationships between events, use the separate [mutually exclusive vs independent events practice](/blog/mutually-exclusive-vs-independent-events/). The exercises here focus on finding the given group, reversing conditions, and reconstructing counts from rates.

## Conditional probability practice

Work these on paper before reading the answers. For each probability, write the given group, numerator, and denominator. Every selection is uniform over the stated collection.

### Museum tickets: questions 1–4

Select one ticket from these 100 museum tickets. Each is for either a member or a guest and for either a weekend or weekday visit.

| Visitor | Weekend | Weekday | Total |
|---|---:|---:|---:|
| Member | 21 | 14 | 35 |
| Guest | 27 | 38 | 65 |
| Total | 48 | 52 | 100 |

1. Given a weekend ticket, what is the probability it is a member ticket?
2. Reverse question 1: find the probability of a weekend visit given a member ticket. Also find the joint probability of a member ticket and weekend visit.
3. Among weekday tickets, what proportion are guest tickets?
4. Given a member ticket, what is the probability the visit is **not** on a weekend?

### Shop orders: questions 5–6

A fictional shop has 150 orders. Exactly 40% are for collection; the rest are for delivery. Of collection orders, exactly 30% have gift wrap. Of delivery orders, exactly 20% have gift wrap. Each order has exactly one fulfillment method and is either gift-wrapped or not. Select one order from the 150.

5. Build the complete two-way count table. Find the probability an order is for collection, given that it has gift wrap.
6. Given that an order has **no gift wrap**, what is the probability it is for collection?

### Games library: questions 7–8

Select one game from this library's 100 games. Each game has exactly one of the three listed types and is either checked out or available.

| Game type | Checked out | Available | Total |
|---|---:|---:|---:|
| Puzzle | 18 | ? | 30 |
| Strategy | ? | 30 | 36 |
| Family | 16 | ? | ? |
| Total | 40 | ? | 100 |

7. Fill every “?” and find the probability a game is a family game, given that it is checked out.
8. The library has no dexterity games. Compare P(dexterity | checked out) with P(checked out | dexterity).

### Answers with the denominator explained

**1. 7/16, or 43.75%.** The given group is the 48 weekend tickets. Twenty-one are member tickets, so P(member | weekend) = 21/48 = 7/16. Dividing by 35 would reverse the condition.

**2. 3/5, or 60%; joint probability 21%.** For P(weekend | member), use the 35 member tickets: 21/35 = 3/5. For P(member ∩ weekend), use all tickets: 21/100 = 21%. Both use the same overlap as question 1.

**3. 19/26, approximately 73.08%.** There are 52 weekday tickets and 38 are for guests. The ratio is 38/52 = 19/26. The denominator 65 would describe the guest group instead.

**4. 2/5, or 40%.** Within the 35 member tickets, 14 are weekday tickets: 14/35 = 2/5. You can also subtract question 2's conditional probability from 1: 1 − 3/5 = 2/5. Both calculations stay inside the member group.

**5. 1/2, or 50%.** Collection orders total 40% × 150 = 60; delivery orders total 150 − 60 = 90. Gift-wrapped collection orders total 30% × 60 = 18. Gift-wrapped delivery orders total 20% × 90 = 18. Subtract those counts from their row totals to find orders without gift wrap, then add down the columns:

| Fulfillment | Gift wrap | No gift wrap | Total |
|---|---:|---:|---:|
| Collection | 18 | 42 | 60 |
| Delivery | 18 | 72 | 90 |
| Total | 36 | 114 | 150 |

The given group is the 36 gift-wrapped orders. Eighteen are for collection, so 18/36 = 1/2. The supplied 30% describes gift wrap given collection. The joint probability of collection and gift wrap would be 18/150 = 12%.

**6. 7/19, approximately 36.84%.** The given group is now the 114 orders without gift wrap. Forty-two are for collection, so 42/114 = 7/19. The 40% collection rate for all orders uses a different denominator.

**7. 2/5, or 40%.** Puzzle games available = 30 − 18 = 12. Strategy games checked out = 36 − 30 = 6. Family games total = 100 − 30 − 36 = 34, leaving 34 − 16 = 18 available. Available games total 100 − 40 = 60.

| Game type | Checked out | Available | Total |
|---|---:|---:|---:|
| Puzzle | 18 | 12 | 30 |
| Strategy | 6 | 30 | 36 |
| Family | 16 | 18 | 34 |
| Total | 40 | 60 | 100 |

The completed columns also check: 18 + 6 + 16 = 40, and 12 + 30 + 18 = 60. Among the 40 checked-out games, 16 are family games, giving 16/40 = 2/5.

**8. Zero for the first; undefined for the second.** Among 40 checked-out games, zero are dexterity games: 0/40 = 0. Conditioning on dexterity asks for a proportion within an empty group, so the ratio would be 0/0. A zero numerator permits a zero probability when the denominator is positive; a zero denominator prevents this conditional calculation.

## Make a card for the step you missed

If you found the right group but simplified the fraction incorrectly, practice the calculation. If you repeatedly chose the wrong group, a small retrieval prompt can target that decision.

| Flashcard front | Flashcard back |
|---|---|
| In P(A \| B), which event determines the denominator? | B, the given event. Count all outcomes in B. |
| Of 200 orders, 40% are for collection. Of collection orders, 25% have gift wrap. How many collection orders have gift wrap? | 20: first 0.40 × 200 = 80 collection orders, then 0.25 × 80 = 20. |
| Does P(A \| B) = 80% establish P(B \| A) = 80%? | No. The reverse conditional uses A as its given group; you need enough information to find that group's total and the overlap. |
| A count table has zero items in B. What can you report for P(A \| B)? | It is undefined under the count-ratio rule because the denominator is zero. |

Keep a card understandable without the original worksheet beside it. The [guide to making better flashcards](/blog/how-to-make-better-flashcards/) explains how to narrow a prompt to one retrieval task. You can keep these cards on paper or use ordinary cards in Nibomo; its [getting started guide](/docs/getting-started/) covers the app. For a broader study plan, see the [AP Statistics flashcard guide](/blog/ap-statistics-flashcards/).

After reviewing a repair card, solve a fresh table question with different counts and wording. Write the group name beside the denominator before dividing. That connects the recalled rule to the part of the problem that actually needed it.
