---
title: "Relative Risk vs Odds Ratio: Practice with Two-Way Tables"
description: "Calculate risk and odds ratios from two-way tables, reverse the comparison, interpret the baseline, and check original problems with explained answers."
date: "2026-10-26"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/5524fa139a837712dc9418a1ea58bb992d6645793280bcdc6636cedcbdfbe467.webp"
keywords:
  - "relative risk vs odds ratio"
  - "risk ratio practice"
  - "odds ratio practice problems"
  - "risk ratio from a two-way table"
---

Line A has 24 defective items; line B has 12. Dividing 24 by 12 gives two, but it doesn't give the relative risk. A produced 100 items and B produced 120. Once you account for those totals, the risk ratio is 2.4 and the odds ratio is about 2.84. Both calculations describe the same table.

**Relative risk, also called the risk ratio, compares two probabilities. An odds ratio compares two odds, each calculated as event probability divided by its complement.** Keep the outcome and reference group attached to either number: “defective, A compared with B” is a complete comparison; “2.4” alone isn't.

The fictional inspection records below are original practice datasets. Each complete group contains every item from its stated inspection period, with each item classified once as defective or not defective. Probabilities refer to selecting one item uniformly within the named group. These calculations describe those items; they don't establish causes or predict another production period.

![A volunteer checks occupied and empty seats across two rows in a community theatre](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/5524fa139a837712dc9418a1ea58bb992d6645793280bcdc6636cedcbdfbe467.webp)

## Work through one table, two ratios

Here is the complete record for one fictional inspection period:

| Line | Defective | Not defective | Total |
|---|---:|---:|---:|
| A | 24 | 76 | 100 |
| B | 12 | 108 | 120 |

Choose **defective** as the outcome and **B** as the reference group. Write pA for the probability of defective within A, and pB for the corresponding probability within B:

- pA = 24/100 = 0.24.
- pB = 12/120 = 0.10.

Here, “risk” means the probability of the specified undesirable outcome. The [conditional probability worksheet](/blog/conditional-probability-two-way-tables/) gives more practice choosing each group's denominator.

The relative risk divides those probabilities:

**RR for A compared with B = pA/pB = 0.24/0.10 = 2.4.**

A's defective proportion is **2.4 times** B's, or **240% of** B's proportion. That means **140% higher**: (2.4 − 1) × 100% = 140%. The absolute difference is 24% − 10% = **14 percentage points**. “Of,” “higher,” and “percentage points” describe different calculations.

For odds, divide defective by not defective within each row:

- Odds in A = 24/76 = 6/19.
- Odds in B = 12/108 = 1/9.

Now divide the odds:

**OR for A compared with B = (24/76)/(12/108) = 54/19 ≈ 2.8421.**

The odds of defective are about 2.84 times as large in A. That statement uses the odds scale. It doesn't say that A's defective probability is 2.84 times B's, or that either probability is 284%.

[Penn State's lesson on relative risk and odds ratios](https://online.stat.psu.edu/stat504/Lesson03) gives these two definitions. If the first row contains event count a and other count b, and the reference row contains event count c and other count d, the formulas are:

| Measure | Formula | What the inner denominators count |
|---|---|---|
| Relative risk | [a/(a + b)] / [c/(c + d)] | All items in each group |
| Odds ratio | (a/b)/(c/d) = ad/bc | Other outcomes in each group |

The cross-product ad/bc is a convenient shortcut. Label the rows and outcome first; a memorized diagonal pattern can't choose the intended comparison for you.

Check the denominators before using either formula. Both group totals must be positive, and RR needs a positive reference probability. For the finite odds calculation shown here, b and d must both be positive so each group's odds is defined; c must also be positive so the reference odds isn't zero. A table with a zero cell needs that check before you apply a shortcut.

## Reversing the group differs from reversing the outcome

Keep “defective” but compare **B with A**. Both original ratios become their reciprocals:

| Comparison | Relative risk | Odds ratio |
|---|---:|---:|
| Defective, A compared with B | 12/5 = 2.4 | 54/19 ≈ 2.8421 |
| Defective, B compared with A | 5/12 ≈ 0.4167 | 19/54 ≈ 0.3519 |

Now restore A compared with B and change the outcome to **not defective**. The probabilities become 76/100 and 108/120:

**RR for not defective = (76/100)/(108/120) = 38/45 ≈ 0.8444.**

That isn't 1/2.4. Complementing each probability doesn't exchange the numerator and denominator of the risk ratio.

The odds ratio does become its reciprocal:

**OR for not defective = (76/24)/(108/12) = 19/54 ≈ 0.3519.**

Changing the outcome flips both within-group odds. [Penn State's odds-ratio properties](https://online.stat.psu.edu/stat504/Lesson03) explain this reversal rule. The separate [odds vs probability practice](/blog/odds-vs-probability-practice/) covers converting a single event's odds; here, you're comparing that quantity across two groups.

## The same odds ratio can describe different probabilities

An odds ratio of 3 doesn't supply either group's probability. Consider two exact probability pairs for the same outcome and direction:

| B's probability | A's probability | OR, A compared with B | RR, A compared with B |
|---|---|---:|---:|
| 1/10 | 1/4 | (1/3)/(1/9) = 3 | 2.5 |
| 2/5 | 2/3 | 2/(2/3) = 3 | 5/3 ≈ 1.6667 |

Both pairs have OR = 3. Their risk ratios differ because B's baseline probability differs. The [BMJ methods paper on odds ratios and relative risks](https://www.bmj.com/content/348/bmj.f7450) discusses this dependence on baseline risk.

You can work from a baseline probability to the other group's probability by going through odds. In the first row, B's probability 1/10 gives odds (1/10)/(9/10) = 1/9. Multiplying by OR = 3 gives A's odds 1/3. Those odds mean one defective part to three nondefective parts, so A's probability is 1/4. Multiplying B's probability directly by 3 would skip the change of scale. These are direct comparisons of two unadjusted probabilities; converting an adjusted regression result is a separate task.

An odds ratio can approximate a risk ratio when **both outcome probabilities are small**, as explained in [Penn State's odds-ratio properties](https://online.stat.psu.edu/stat504/Lesson03). Rather than memorize a universal cutoff for “rare,” calculate both quantities in the next exercise and inspect the difference.

## Risk ratio and odds ratio practice

Cover the answers and keep fractions exact until the final decimal. For every result, write the outcome and comparison direction.

**1. Repair the count shortcut.** Using the opening table, a learner writes, “RR = 24/12 = 2.” Explain the error and give the correct relative risk. Does RR = 2.4 mean A's defective probability is 2.4%?

**2. Repair the interpretation.** Another learner reports, “A has a 240% higher defective probability and an absolute increase of 14%.” Rewrite both parts precisely using the opening table.

**3. Reverse one thing at a time.** Find RR and OR for defective, B compared with A. Then find RR and OR for not defective, A compared with B. Which ratios are reciprocals of the opening answers?

**4. Compare a common and a rare outcome.** Each table describes all 200 items in a separate fictional inspection period. Find RR and OR for defective, A compared with B, in each period. Which OR is closer to its RR?

| Period | Line | Defective | Not defective | Total |
|---|---|---:|---:|---:|
| Common outcome | A | 60 | 40 | 100 |
| Common outcome | B | 30 | 70 | 100 |
| Rare outcome | A | 2 | 98 | 100 |
| Rare outcome | B | 1 | 99 | 100 |

**5. Check an OR-only claim.** A report says “OR = 3 for defective, A compared with B,” without giving either probability. Can you conclude RR = 3 or calculate A's probability? Now suppose the report adds pB = 2/5. Show the steps through B's odds and A's odds to find pA and RR.

**6. Handle a zero reference count.** Another complete period has A: four defective and 16 not defective; B: zero defective and 20 not defective. Calculate each group's defective probability. Can you calculate finite RR and OR for defective, A compared with B?

**7. Inspect how the table was selected.** An audit deliberately selects 40 defective parcels and 60 nondefective parcels from a larger source. Within each outcome category, selection is independent of line. Its sample table is:

| Line | Defective | Not defective | Sample total |
|---|---:|---:|---:|
| A | 10 | 30 | 40 |
| B | 30 | 30 | 60 |

Calculate the sample cross-product OR for defective, A compared with B. A learner also divides (10/40)/(30/60) and reports a source-population RR of 0.5. Why doesn't that conclusion follow?

## Answers with the comparison attached

**1. RR = 2.4; the defective probability in A is 24%.** The raw count ratio ignores unequal group sizes. Compare 24/100 with 12/120, giving (24/100)/(12/120) = 12/5. RR is a ratio of probabilities, not a probability itself.

**2. A's defective probability is 140% higher; the absolute difference is 14 percentage points.** The relative increase is (0.24 − 0.10)/0.10 = 1.4 = 140%. The absolute difference is 0.24 − 0.10 = 0.14. Attach “percentage points” when subtracting percentages.

**3. Reversing groups reciprocates both; complementing the outcome reciprocates only OR here.** Defective, B compared with A, gives RR = 5/12 and OR = 19/54. Not defective, A compared with B, gives RR = 38/45 and OR = 19/54. The complemented RR uses 0.76/0.90, not 0.10/0.24.

**4. Both risk ratios are 2.** In the common-outcome period, RR = 0.60/0.30 = 2, while OR = (60/40)/(30/70) = **3.5**. In the rare-outcome period, RR = 0.02/0.01 = 2, while OR = (2/98)/(1/99) = **99/49 ≈ 2.0204**. The rare-outcome OR is closer: both probabilities are near zero, making event-to-other odds close to event-to-total probabilities. One small baseline alone doesn't establish that approximation.

**5. OR alone determines neither A's probability nor a unique RR.** The two probability pairs above have the same OR and different risk ratios. With the added baseline pB = 2/5, B's odds are (2/5)/(3/5) = 2/3. A's odds are 3 × 2/3 = 2, meaning two defective parts for each nondefective part. Thus pA = 2/(1 + 2) = **2/3**, and RR for defective, A compared with B, is (2/3)/(2/5) = **5/3**.

**6. pA = 1/5; pB = 0; neither requested ratio has a finite value.** RR would divide 1/5 by zero. A's odds are 4/16 = 1/4 and B's odds are 0/20 = 0, so OR also requires division by zero. Don't silently add a constant to the cells. B's zero describes this complete period; it doesn't prove that defective items are impossible in future periods.

**7. Sample OR = 1/3; source-population RR isn't established.** The cross-product is (10 × 30)/(30 × 30) = 1/3. The row-proportion ratio is indeed 0.25/0.50 = 0.5 **inside this selected sample**. But the audit chose how many defective and nondefective parcels to include. That sample balance doesn't tell you their balance in the source, so its row proportions don't establish source probabilities. [Penn State's discussion of outcome-based sampling](https://online.stat.psu.edu/stat504/Lesson03) explains this distinction. Because selection within each outcome category is independent of line, the sample OR can be used to estimate the source OR. It remains a sample estimate, not a guaranteed exact source value.

## Make a card for the error you actually made

Keep the event, direction, and needed numbers on the card. A prompt like “What is OR?” won't repair a habit of reporting odds as probability. For more original table problems, use the [relative risk vs odds ratio flashcards](/catalog/packages/relative-risk-odds-ratio-flashcards/) to practice calculating and interpreting both ratios and repairing denominator or comparison mistakes.

| Flashcard front | Flashcard back |
|---|---|
| A has defective probability 0.24; B has 0.10. Find RR for defective, A compared with B. | 0.24/0.10 = 2.4. Divide probabilities, not defective counts. |
| With positive probabilities and finite nonzero odds, what happens to RR and OR when the reference group is reversed? | Both become their reciprocals. Keep the outcome fixed. |
| For probabilities pA and pB strictly between 0 and 1, does changing the outcome to its complement reciprocate RR? | Generally no. Calculate (1 − pA)/(1 − pB); don't swap pA and pB. |
| With all four cells positive, what happens to OR when you complement the outcome and keep the group comparison fixed? | OR becomes its reciprocal because both within-group odds are inverted. |
| Is OR = 3 enough to find A's probability? | No. You also need baseline information; different probability pairs can have the same OR. |

Review a missed distinction on another day, with the answer covered, then solve a table without looking at the rule. Keep both the calculation and its interpretation in your practice: recalling “ad/bc” doesn't establish that you've chosen the intended outcome and direction. The [guide to making better flashcards](/blog/how-to-make-better-flashcards/) explains how to keep each prompt focused. Use paper or create your own cards in Nibomo; the [getting started guide](/docs/getting-started/) covers the app.

*Production note: AI assisted with source research and writing. The fictional examples and answer arithmetic were checked separately with exact-fraction Python calculations; those checks verify the stated models, not real-world outcomes. The article illustration is AI-generated.*
