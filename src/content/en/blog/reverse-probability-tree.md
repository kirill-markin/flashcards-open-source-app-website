---
title: "How to Reverse a Probability Tree from a Two-Way Table"
description: "Draw a probability tree from a two-way table, reverse the order of the branches, and check the new probabilities with two worked exercises."
date: "2026-11-24"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/8bb1aa1dd186b2aedeb62d7999f26523d0d78194ad9a3a60f2098697401c2f33.webp"
keywords:
  - "reverse probability tree"
  - "probability tree diagram from a two-way table"
  - "reverse conditional probability"
---

In a fictional print studio, 24 heavy-paper prints passed an alignment test. They make up half of the heavy-paper prints and about 31% of the passing prints. Both percentages count the same 24 prints and divide by different totals.

**To reverse a probability tree, switch which variable goes first and recalculate the branch probabilities using the new group totals.** With a two-way table, you can read all the counts you need from the same table.

![A printmaker turns a sheet with navy and amber circles and squares arranged in two rows](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/8bb1aa1dd186b2aedeb62d7999f26523d0d78194ad9a3a60f2098697401c2f33.webp)

## Start the tree with paper type

The studio recorded the paper type and test result for all 120 prints. Choose one print uniformly at random so each print has the same chance of being picked.

| Paper type | Passed | Failed | Total |
|---|---:|---:|---:|
| Standard | 54 | 18 | 72 |
| Heavy | 24 | 24 | 48 |
| Total | 78 | 42 | 120 |

Use the row totals for the first split. Standard gets 72/120 and Heavy gets 48/120. Then work within each row. Among standard prints, 54 of 72 passed and 18 of 72 failed. Among heavy prints, 24 of 48 passed and 24 of 48 failed. Keeping the fractions unsimplified makes it easy to see which group supplies each denominator.

```text
One print
├─ Standard 72/120
│  ├─ Passed 54/72 → 54/120
│  └─ Failed 18/72 → 18/120
└─ Heavy 48/120
   ├─ Passed 24/48 → 24/120
   └─ Failed 24/48 → 24/120
```

The fraction beside each second-level label is conditional on the group it branches from. The fraction after the arrow is the **joint probability**, the chance of getting both outcomes on that path. You get it by multiplying along the path. For Heavy → Passed, **(48/120) × (24/48) = 24/120**. The 48 cancels and leaves the cell count over the grand total. For another worked example of multiplying along a path, see [OpenStax's lesson on contingency tables and probability trees](https://openstax.org/books/introductory-business-statistics-2e/pages/3-4-contingency-tables-and-probability-trees).

## Put the test result first

Now use the column totals for the first split. Passed gets 78/120 and Failed gets 42/120. Among passing prints, 54 of 78 are standard and 24 of 78 are heavy. Among failing prints, 18 of 42 are standard and 24 of 42 are heavy.

```text
One print
├─ Passed 78/120
│  ├─ Standard 54/78 → 54/120
│  └─ Heavy 24/78 → 24/120
└─ Failed 42/120
   ├─ Standard 18/42 → 18/120
   └─ Heavy 24/42 → 24/120
```

Passed → Heavy gives **(78/120) × (24/78) = 24/120**. Both trees put the same probability on a print being heavy and passing. To answer a question about a given group, read the second branch on its own. The name after the vertical bar tells you which group supplies the denominator.

- **P(Passed | Heavy) = 24/48 = 1/2.** Half of the heavy-paper prints passed.
- **P(Heavy | Passed) = 24/78 = 4/13.** About 31% of the passing prints are on heavy paper.

The order of the splits tells you which group you condition on. Even if the studio chose the paper before testing each print, a result-first tree still describes the same records.

## Check the paths against the table

Start by checking that the branches leaving each group add to 1. Then check the probability at the end of each path against its table cell divided by 120. Those two checks catch different errors.

Suppose you copy the Heavy → Passed branch of 1/2 onto Passed → Heavy and also give Passed → Standard 1/2. The branches under Passed add to 1. Multiplying the full Passed → Heavy path gives **(78/120) × (1/2) = 39/120**. The table gives **24/120**, so you know to go back and check the denominator of the copied branch.

## Reverse a tree when you only have branch probabilities

For a complete tree that splits the same two variables, multiply along each path and put its joint probability in the matching table cell. A first branch with zero probability gives zero to every cell under it. Add up the cells that share each label in the new first split. In each group with a positive total, divide each joint probability by that total to get its new conditional branch. Leave the conditional probabilities undefined for any group with a total of zero.

For more examples of that last division, see the [conditional probability practice with two-way tables](/blog/conditional-probability-two-way-tables/).

## Practice reversing a tree

1. **Fix the first split.** A result-first tree for the print studio has Passed at 72/120 and Failed at 48/120. The Heavy branch under Failed is 24/42. Fix both first branches, then multiply along Failed → Heavy to check the repair against the table.
2. **Rebuild from an existing tree.** Pick one of 80 film festival submissions uniformly at random. Each submission was a short or a feature and came in either directly or through a partner. The format-first tree gives Short 50/80 and Feature 30/80. Under Short, Direct is 3/5. Under Feature, Direct is 1/5. Draw the tree with Direct and Partner first, label every branch, and check the joint probability of a feature submitted directly.

### Worked answers

**1.** Use the result totals along the bottom row. Passed is 78/120 and Failed is 42/120. The Failed → Heavy branch already uses the right denominator. **(42/120) × (24/42) = 24/120**, which matches the Heavy and Failed cell.

**2.** The short films give 50 × 3/5 = 30 direct submissions and 20 partner submissions. The features give 30 × 1/5 = 6 direct submissions and 24 partner submissions. The first split is **Direct 36/80** and **Partner 44/80**. Under Direct, Short is 30/36 and Feature is 6/36. Under Partner, Short is 20/44 and Feature is 24/44. Direct → Feature gives **(36/80) × (6/36) = 6/80 = 3/40**, the same as **(30/80) × (1/5) = 3/40** on the original path.

A day or two later, redraw one of the trees using just the table. Name the group that supplies each denominator before writing the fraction. Try it again a few days later to practice recalling the method after a longer gap. For shorter drills on that step, use [Nibomo's 44-card English deck on conditional probability](/catalog/packages/conditional-probability-two-way-table-flashcards/).

*Nibomo used AI assistance to draft and edit this article and create the fictional examples and cover illustration. The calculations were checked using exact fractions.*
