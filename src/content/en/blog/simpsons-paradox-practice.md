---
title: "Simpson's Paradox Practice: Compare Subgroup and Overall Rates"
description: "Practice Simpson's paradox with original count tables, checked calculations, weighted averages, common subgroup mixes, and answers explaining rate reversals."
date: "2026-10-19"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/b3d5ad9a0d52ad962cd3be7551b7bbae20498b2702624b46c6257166947c450b.webp"
keywords:
  - "Simpson's paradox practice"
  - "Simpson's paradox example"
  - "pooled success rate"
  - "weighted average"
  - "subgroup comparison"
---

Two repair teams each handle 100 jobs. Team A has a higher on-time rate for routine repairs and a higher on-time rate for complex repairs. Yet Team B finishes a larger percentage of its jobs on time overall. Every calculation can be correct. The missing detail is how many jobs of each kind went to each team.

**In a strict Simpson's paradox reversal, one team leads within every subgroup, while the other leads when the counts are combined.** Calculate the subgroup rates, pool the counts, then inspect the subgroup shares. [Penn State's introductory lesson](https://online.stat.psu.edu/stat100/Lesson06) explains how a third variable can change or reverse an observed association. The exercises here focus on strict reversals.

All examples below are invented for practice. If choosing the denominator still feels uncertain, start with [conditional probability from two-way tables](/blog/conditional-probability-two-way-tables/).

![A cobbler inspects a boot beside two crates containing different mixes of boots and low canvas shoes](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/b3d5ad9a0d52ad962cd3be7551b7bbae20498b2702624b46c6257166947c450b.webp)

## A repair-shop example that reverses

Count a job as successful if it is finished by its promised collection day. Apply that definition to both teams. Each job belongs to one team and exactly one category, routine or complex; the categories cover every job in this dataset.

| Job type | Team A: on time / jobs | A's rate | Team B: on time / jobs | B's rate |
| --- | ---: | ---: | ---: | ---: |
| Routine | 18 / 20 | 90% | 72 / 90 | 80% |
| Complex | 32 / 80 | 40% | 3 / 10 | 30% |
| All jobs | 50 / 100 | 50% | 75 / 100 | 75% |

A leads by 10 percentage points in each category. B leads by 25 percentage points overall. The direction reverses when the categories are combined.

The overall, or **pooled, success rate** adds successes and totals separately:

- A: (18 + 32) / (20 + 80) = 50/100 = **50%**.
- B: (72 + 3) / (90 + 10) = 75/100 = **75%**.

Both teams handled 100 jobs, but their subgroup shares differ. A's work was 20% routine and 80% complex. B's was 90% routine and 10% complex. Routine jobs had much higher on-time rates for both teams, and routine jobs dominate B's total.

The pooled rate is a **weighted average** of the subgroup rates. Use those shares as weights:

- A: 0.20 × 90% + 0.80 × 40% = **50%**.
- B: 0.90 × 80% + 0.10 × 30% = **75%**.

Each weight is the subgroup's job count divided by that team's total job count. The weights for a team add to 1. Equal team totals don't imply equal subgroup shares.

Adding two subgroup percentages and dividing by two gives each subgroup equal weight, regardless of its size. That calculation describes a 50/50 mix. It generally won't give the observed pooled rate.

## Keep this audit beside the table

Use this worksheet on a new count table before deciding which team is “better.”

| Check | What to write down |
| --- | --- |
| Outcome and groups | One success definition; subgroups that don't overlap and cover the dataset |
| Counts | Nonnegative whole counts for each team in each subgroup; successes can't exceed the total |
| Subgroup rates | Successes / total within each team-and-subgroup cell; denominators must be positive |
| Pooled rates | Sum of successes / sum of observations for each team |
| Subgroup shares | Each subgroup's count / that team's total count; shares must add to 1 |
| Direction | Who leads in every subgroup, and who leads overall? |
| Claim | Name the group the percentage describes and the question it answers |

Rates within subgroups are **conditional** comparisons. The pooled comparison is **marginal**, meaning the subgroup variable has been left out. [Penn State's categorical-data lesson](https://online.stat.psu.edu/stat504/Lesson05) distinguishes these comparisons.

Both comparisons describe the supplied data correctly. For “Which team had the higher on-time rate across all its observed jobs?”, use the pooled rates: B's 75% versus A's 50%. For “Which team had the higher rate among routine jobs?”, use 90% for A and 80% for B. Neither comparison is automatically the right answer to every question. A reversal is a reason to inspect the breakdown and state the question clearly.

## Give both teams the same mix

A third question asks how the supplied subgroup rates compare when both teams receive the same weights. For a common 50% routine, 50% complex mix:

- A: 0.50 × 90% + 0.50 × 40% = **65%**.
- B: 0.50 × 80% + 0.50 × 30% = **55%**.

Changing the common mix changes those values:

| Common mix | Team A | Team B |
| --- | ---: | ---: |
| 50% routine, 50% complex | 65% | 55% |
| 25% routine, 75% complex | 0.25 × 90% + 0.75 × 40% = **52.5%** | 0.25 × 80% + 0.75 × 30% = **42.5%** |

These are descriptive recalculations using fixed rates. They aren't the observed pooled rates, predictions for new jobs, or estimates of a causal effect. State the common mix and why it suits the question before interpreting the result.

With the **same positive subgroup weights** applied to both teams, a strict advantage in every subgroup cannot reverse: each weighted difference is positive, so their sum is positive too. Here, A's advantage is exactly 10 percentage points in both categories, so every common mix retains that 10-point gap. The observed reversal uses different weights for A and B.

## Seven practice problems

Write your calculations and a one-sentence interpretation before reading the answers. Use the original repair table for problems 2–7 unless a problem changes it.

### 1. Packing teams

A packing job succeeds if it passes the same inspection on its first attempt. Each job belongs to exactly one team and one category, simple or complex.

| Job type | Team A: passes / jobs | Team B: passes / jobs |
| --- | ---: | ---: |
| Simple | 56 / 70 | 9 / 10 |
| Complex | 2 / 10 | 21 / 70 |

Find all four subgroup rates and both pooled rates. Is there a strict reversal? Then compare the teams using a common 50/50 mix.

### 2. An average that answers another question

A learner calculates (90% + 40%)/2 = 65% and reports that A finished 65% of its observed repair jobs on time. Identify the error and give the observed rate.

### 3. Equal totals, equal weights?

Someone argues that Simpson's paradox is impossible here because each repair team handled 100 jobs. Compare the teams' routine-job shares to check that argument. Would a reversal be possible if both teams had identical subgroup shares and A still led strictly in both categories?

### 4. A different common mix

Use 25% routine and 75% complex for both repair teams. Calculate the two weighted rates. Does either result describe that team's original observed total?

### 5. Unequal mixes without a reversal

Change only A's complex-repair result from 32/80 to **64/80**. Leave every other count unchanged. Find A's new pooled rate. Do unequal subgroup shares force a reversal?

### 6. Totals without the breakdown

You receive only A = 50/100 and B = 75/100. Can you establish Simpson's paradox? Calculate the subgroup rates in this possible breakdown with those same totals:

| Job type | Team A: on time / jobs | Team B: on time / jobs |
| --- | ---: | ---: |
| Routine | 25 / 50 | 38 / 50 |
| Complex | 25 / 50 | 37 / 50 |

### 7. Repair the conclusion

Return to the original repair table. A report says: “Assigning every future repair to A would cause more jobs to finish on time, because A wins within each job type.” What can the table establish, and what evidence is missing from that conclusion?

## Answers and explanations

**1. B leads within both categories; A leads overall.** A's rates are 56/70 = **80%** and 2/10 = **20%**. B's are 9/10 = **90%** and 21/70 = **30%**. Pooled, A has (56 + 2)/(70 + 10) = 58/80 = **72.5%**. B has (9 + 21)/(10 + 70) = 30/80 = **37.5%**. This is a strict reversal. A handled mostly simple jobs: 70/80, or 87.5%. B handled mostly complex jobs: also 87.5%. With a common 50/50 mix, A gets (80% + 20%)/2 = **50%** and B gets (90% + 30%)/2 = **60%**.

**2. The learner used equal subgroup weights.** The 65% calculation describes the common 50/50 mix. A's observed mix was 20% routine and 80% complex, giving 0.20 × 90% + 0.80 × 40% = **50%**. Adding the counts gives the same answer: 50/100.

**3. Routine shares are 20/100 = 20% for A and 90/100 = 90% for B.** Equal total job counts don't equalize those shares. If the teams had identical subgroup shares, their pooled rates would use the same weights. A's strict lead in both categories would then produce a strict pooled lead too, so a reversal would be impossible.

**4. A = 52.5%; B = 42.5%.** A gets 0.25 × 90% + 0.75 × 40% = 22.5% + 30%. B gets 0.25 × 80% + 0.75 × 30% = 20% + 22.5%. Neither equals the team's original pooled rate. Both answer the stated common-mix question using the supplied subgroup rates.

**5. A's new pooled rate is 82%.** Its complex rate becomes 64/80 = **80%**, and (18 + 64)/100 = **82%** overall. B remains at 75%. A now leads within both categories and overall, despite the unchanged 20/80 and 90/10 subgroup mixes. Unequal shares can enable a reversal, but they don't guarantee one.

**6. Totals alone are insufficient.** In the alternative table, A has 25/50 = **50%** in both categories. B has 38/50 = **76%** for routine and 37/50 = **74%** for complex jobs. B leads within both categories and overall, so there is no reversal. Those same 50% and 75% pooled rates also occur in the original table, which does reverse. The pooled totals can't tell you which breakdown produced them.

**7. The table establishes observed associations.** A had the higher on-time rate within each supplied job category; B had the higher pooled rate across its observed jobs. The table doesn't describe how jobs were assigned or supply other evidence and assumptions needed to identify a causal effect. The routine/complex split may leave other relevant differences unaccounted for, and the supplied rates don't establish future rates. A causal claim needs evidence about the assignment process and relevant differences between jobs. The [sampling and assignment lesson](/blog/random-sampling-vs-random-assignment/) explains that boundary.

## Practice the step you missed

If you averaged percentages without checking counts, save a short prompt: “What weights turn subgroup rates into the observed pooled rate?” Answer: each subgroup's share of that team's total. If you inferred a reversal from totals alone, keep problem 6 as a counterexample.

Use the [guide to turning practice questions into flashcards](/blog/how-to-turn-practice-questions-into-flashcards/) to make one focused card from a recurring mistake. Keep the full count tables for written practice. On your next attempt, hide the percentage columns in the repair example and rebuild the rates, weights, and claim from the counts.

*Production note: AI assisted with research and writing, including two AI editorial passes and arithmetic verification. The invented examples were checked with exact fraction arithmetic in CPython 3.14.7. The illustration was AI-generated.*
