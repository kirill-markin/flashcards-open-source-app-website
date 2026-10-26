---
title: "Probability Without Replacement: Worked Examples and Practice"
description: "Track what remains after each draw, distinguish given information from hidden draws, and solve probability without replacement with checked answers."
date: "2026-10-17"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/6605a99195a3cb5c4152d0cacb5030ba90bac626153ae647ea9d4670d7e53677.webp"
keywords:
  - "probability without replacement"
  - "with vs without replacement"
  - "probability tree diagram"
  - "at least one probability"
  - "without replacement practice questions"
---

Three red tokens and two blue tokens give you a 3/5 chance of drawing red. Draw one token at random and leave it out without looking at it, then draw again. The second token still has a 3/5 chance of being red. But if you saw that the first token was red, that second chance would be 1/2. One removed token; different information.

**For probability without replacement, update what remains along each possible path, multiply within a path, and add the paths that satisfy the question.** Those paths must be disjoint: they cannot happen together on the same trial. If a draw is hidden, keep its possible outcomes in the calculation.

Without replacement means each drawn token stays out. All collections here are fictional, with distinct labeled tokens. Every remaining token has an equal chance on each draw; remix between draws. These are mathematical assumptions, not measurements of physical draws.

![A canoe-club volunteer adjusts a blue buoyancy vest while three orange vests and one blue vest remain beside an empty hook](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/6605a99195a3cb5c4152d0cacb5030ba90bac626153ae647ea9d4670d7e53677.webp)

## Track what remains after each draw

Start with **R1, R2, R3, B1, B2**. Draw two tokens in order, without replacement. R means red and B means blue; RR means red first and red second.

If the first draw is red, four tokens remain: two red and two blue. If it is blue, four remain: three red and one blue. The denominator drops from five to four either way. The red numerator depends on which color left.

Here's a probability tree diagram for those choices:

```text
Start: 3 red, 2 blue
├─ Red first: 3/5 → 2 red, 2 blue remain
│  ├─ Red second:  2/4 → RR
│  └─ Blue second: 2/4 → RB
└─ Blue first: 2/5 → 3 red, 1 blue remain
   ├─ Red second:  3/4 → BR
   └─ Blue second: 1/4 → BB
```

Multiply the two branch probabilities to find a complete path's probability. The second factor describes the collection left by the first draw. [OpenStax's tree-diagram lesson](https://openstax.org/books/introductory-statistics-2e/pages/3-5-tree-and-venn-diagrams) explains this use of conditional branches and replacement.

| Path | Calculation | Probability |
|---|---|---:|
| RR | (3/5) × (2/4) | 3/10 |
| RB | (3/5) × (2/4) | 3/10 |
| BR | (2/5) × (3/4) | 3/10 |
| BB | (2/5) × (1/4) | 1/10 |

The probabilities sum to one. Using 3/5 for red after red would count a token already removed.

## Check the tree against all 20 outcomes

There are five choices for the first labeled token and four for the second: **5 × 4 = 20 ordered pairs**. Every pair has probability (1/5) × (1/4) = 1/20. A token cannot appear twice.

The full outcome ledger is small enough to inspect:

| Color path | Labeled ordered pairs | Count |
|---|---|---:|
| RR | R1→R2, R1→R3, R2→R1, R2→R3, R3→R1, R3→R2 | 6 |
| RB | R1→B1, R1→B2, R2→B1, R2→B2, R3→B1, R3→B2 | 6 |
| BR | B1→R1, B1→R2, B1→R3, B2→R1, B2→R2, B2→R3 | 6 |
| BB | B1→B2, B2→B1 | 2 |

The counts match the tree: RR has 6/20 = 3/10, for example. **The labeled pairs are equally likely; the four color paths aren't.** Counting “RR, RB, BR, BB” and assigning each 1/4 loses that difference.

For **exactly one red**, include RB and BR. They cannot both describe the same ordered draw, so add them:

**P(exactly one red) = 3/10 + 3/10 = 3/5.**

The ledger agrees: (6 + 6)/20 = 12/20. Counting only RB specifies an order the question didn't require.

For **at least one red**, include one red or two reds. The only excluded path is BB:

**P(at least one red) = 1 − P(BB) = 1 − 1/10 = 9/10.**

Adding RR, RB, and BR also gives 18/20. Use the complement when the excluded event is easier to calculate. See [OpenStax's probability rules](https://openstax.org/books/introductory-statistics-2e/pages/3-3-two-basic-rules-of-probability) for multiplication, addition, and conditioning.

## A hidden draw doesn't tell you which color left

Return to the opening question. Someone removes the first token without revealing its color. There are four tokens left, but you don't know their color split. Account for both possibilities:

**P(second red) = (3/5 × 2/4) + (2/5 × 3/4) = 3/10 + 3/10 = 3/5.**

These RR and BR paths contain 12 second-red pairs out of 20.

Now reveal that the first token was red. That information restricts the ledger to the 12 pairs in RR and RB. Six have a red second token:

**P(second red | first red) = 6/12 = 1/2.**

The vertical bar means “given.” You can also read the answer directly from the two red and two blue tokens remaining. If the first token was blue instead, three of the four remaining tokens would be red, giving **P(second red | first blue) = 3/4**.

The unseen-draw answer combines both possible first colors. It doesn't establish independence: learning the first color changes the second-red probability. For that distinction, see [mutually exclusive vs independent events](/blog/mutually-exclusive-vs-independent-events/).

## “Given at least one red” keeps a different group

Suppose two tokens have been drawn. A checker looks at both and always reports whether **at least one is red**. You receive “yes,” with no token singled out or shown. Every pair containing a red token produces that same report, so all such pairs remain eligible.

Find the probability that both are red. Remove BB from the ledger. RR, RB, and BR remain, totaling 18 equally likely labeled pairs. Six are RR:

**P(both red | at least one red) = 6/18 = 1/3.**

Compare that with **P(both red | first red) = 6/12 = 1/2**. Knowing the first is red excludes BR. Knowing at least one is red keeps BR, because its second token is red.

Write the given group before dividing. The [two-way table practice](/blog/conditional-probability-two-way-tables/) develops this denominator decision with static collections.

## With vs without replacement

Change the procedure: return the first token, remix all five, then make a fresh uniform draw. Each draw now selects from three red and two blue tokens. There are 5 × 5 = 25 equally likely labeled pairs, including R1→R1.

| Event | Without replacement | With replacement and fresh uniform draws |
|---|---:|---:|
| Both red | (3/5)(2/4) = 3/10 | (3/5)(3/5) = 9/25 |
| Exactly one red | 12/20 = 3/5 | 12/25 |
| At least one red | 18/20 = 9/10 | 21/25 |
| Second red, first color unseen | 12/20 = 3/5 | 15/25 = 3/5 |

The last row stays the same even though the joint probabilities change. In this replacement procedure, knowing the first color leaves the second-red probability at 3/5. Replacement restores the collection; the fresh uniform selection makes the next draw independent of the first. A procedure that uses the first result to change the next selection probabilities would require a different calculation.

## Without replacement practice questions

Before reading the answers, write the remaining counts and include every permitted order. Draws are uniform, with remixing and no replacement.

For questions 1–3, start with **two red and four blue tokens** and draw two.

1. Find the probability that both are red.
2. Find the probability of exactly one red. Show both orders.
3. Find the probability of at least one red using the complement.

For questions 4–6, start with **four red and three blue tokens** and draw three.

4. Find the probability that all three are red.
5. Find the probability of exactly two reds. List the eligible color paths.
6. Find the probability of at least one red.

7. Return to **two red and four blue tokens**, drawing two. Find (a) the probability the second is red when the first color is unseen, (b) the probability the second is red given the first is red, and (c) the probability both are red given at least one is red. For (c), use the checker’s event-only report described above.

### Answers with paths and counts

**1. 1/15.** The RR path is (2/6)(1/5) = 2/30. There are 30 equally likely labeled ordered pairs, two of which contain both red tokens.

**2. 8/15.** RB gives (2/6)(4/5) = 8/30. BR gives (4/6)(2/5) = 8/30. Add them: 16/30 = 8/15. Removing red leaves four blues; removing blue leaves two reds.

**3. 3/5.** No reds means BB, with probability (4/6)(3/5) = 12/30. Subtract from one: 18/30 = 3/5. Questions 1 and 2 check this: 2/30 + 16/30 = 18/30.

**4. 4/35.** RRR has probability (4/7)(3/6)(2/5) = 24/210 = 4/35. Each red draw reduces both the red count and the total remaining count.

**5. 18/35.** The paths are RRB, RBR, and BRR:

- RRB: (4/7)(3/6)(3/5) = 36/210.
- RBR: (4/7)(3/6)(3/5) = 36/210.
- BRR: (3/7)(4/6)(3/5) = 36/210.

They total 108/210 = 18/35. In RRB, the last numerator counts blues; in RBR, it counts reds. Matching numbers can describe different remaining groups.

**6. 34/35.** The excluded path is BBB: (3/7)(2/6)(1/5) = 6/210. Therefore, at least one red has probability 1 − 6/210 = 204/210 = 34/35. “At least one” includes one, two, or three reds.

**7. (a) 1/3; (b) 1/5; (c) 1/9.** With the first color unseen, include RR and BR: (2/6)(1/5) + (4/6)(2/5) = 10/30 = 1/3. Given a red first draw, one red remains among five tokens, giving 1/5. Given at least one red, keep the 18 ordered pairs counted in question 3. Two are RR, giving 2/18 = 1/9. Each answer uses a different information set.

## Repair the decision you missed

Find your first incorrect step. A narrow card can prompt that decision; use complete problems for calculations.

The [probability without replacement flashcards](/catalog/packages/probability-without-replacement-flashcards/) give you short draw-by-draw practice with remaining counts, ordered paths, either-order events, complements, and hidden versus observed draws. Review the step you missed, then try a fresh collection without the answers in view.

| Flashcard front | Flashcard back |
|---|---|
| Three red and two blue tokens; first draw observed red, without replacement. What fraction are red now? | 2/4. One red and one total token have left. |
| Two draws, exactly one red, either order. Which color paths count? | RB and BR. Calculate each path, then add. |
| A first token was removed unseen. Can you subtract one red? | No. Keep both possible first colors and weight their branches. |
| Two draws are known to contain at least one red. Which paths remain? | RR, RB, and BR; exclude only BB. |

The [guide to making better flashcards](/blog/how-to-make-better-flashcards/) explains how to keep one retrieval task per prompt. Then try a fresh collection and write down what remains before multiplying.

*Production note: This article was created with substantial AI assistance in research, drafting, editing, and exercise construction. An exact GoogleSQL enumeration in BigQuery checked every labeled ordered outcome in these fictional examples: 20 and 25 pairs for the five-token procedures, 30 pairs for the six-token collection, and 210 triples for the seven-token collection. This was exhaustive counting, not simulation or a study of learners. The material has not received human or classroom validation. The article illustration is AI-generated.*
