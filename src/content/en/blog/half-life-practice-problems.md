---
title: "Half-Life Practice Problems: Remaining, Decayed, and Elapsed Time"
description: "Solve half-life practice problems with a remaining-versus-decayed table, backward calculations, fractional half-lives, and explained answers."
date: "2026-10-16"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/1744cc49c9f2ec24078a8618aaeaa84508777952dfb090cb32dd6cc2696cde6d.webp"
keywords:
  - "half-life practice problems"
  - "half-life worksheet with answers"
  - "amount remaining and decayed"
  - "calculate half-life"
  - "fractional half-life"
---

A parent isotope starts at 160 mg. One half-life later, 80 mg remains. After the next half-life, 40 mg remains. Writing `160 → 80 → 0` subtracts the same amount twice, even though the second halving starts from a smaller amount.

The eight half-life practice problems below work through that distinction, then reverse the calculation to find an initial amount, elapsed time, or half-life. Start with the table. Keeping the initial amount in its own column makes it easier to separate how much parent isotope remains from how much has decayed.

![A printmaker lifts a leaf block above linen bearing four indigo impressions that become progressively fainter](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/1744cc49c9f2ec24078a8618aaeaa84508777952dfb090cb32dd6cc2696cde6d.webp)

## Keep the starting amount fixed

For these exercises, use an ideal model with one parent isotope, a constant half-life, and no addition or physical removal of the parent. We don't follow decay chains. All amounts and half-lives are invented exercise inputs, not measurements of named isotopes.

The **parent isotope** is the isotope whose decay we're tracking. Here, **half-life** means the time over which its remaining amount halves in the model. OpenStax's [radioactive-decay lesson](https://openstax.org/books/chemistry/pages/21-3-radioactive-decay) explains the underlying first-order decay relationship.

Start with **160 mg of parent isotope** and a **6-hour half-life**:

| Elapsed time | Half-lives elapsed | Initial parent amount | Parent remaining | Original parent amount transformed |
| --- | --- | --- | --- | --- |
| 0 h | 0 | 160 mg | 160 mg | 0 mg |
| 6 h | 1 | 160 mg | 80 mg | 80 mg |
| 12 h | 2 | 160 mg | 40 mg | 120 mg |
| 18 h | 3 | 160 mg | 20 mg | 140 mg |
| 24 h | 4 | 160 mg | 10 mg | 150 mg |

Read the 12-hour row across. The initial-amount column stays at **160 mg**. The parent remaining is **40 mg**, so **120 mg of the original parent amount has undergone decay**: `160 − 40 = 120`.

“Transformed” is bookkeeping for the original parent whose nuclei have decayed. It is **not the mass of a daughter isotope**, and it doesn't mean matter vanished. This table does not calculate the total physical mass of the sample or its decay products. Its last two columns account for the original parent amount, using the original parent mass per nucleus.

Notice that the newly transformed amounts shrink: 80 mg in the first interval, then 40 mg, then 20 mg. The cumulative transformed column grows because it includes all earlier intervals.

## Turn the table into an equation

Let `m₀` be the initial parent amount, `m` the parent amount remaining, `t` the elapsed time, and `T` the half-life. The number of half-lives elapsed is `n = t/T`. Use matching time units, so hours divide by hours or days by days.

`m = m₀ × (1/2)^(t/T) = m₀ × 2^(-n)`

The original parent amount transformed is `m₀ − m`. The fraction remaining is `f = m/m₀`; the fraction decayed is `1 − f`. Multiply a fraction by 100 to express it as a percentage.

For the table's 18-hour row:

`n = 18/6 = 3`

`m = 160 × (1/2)^3 = 20 mg`

`m₀ − m = 160 − 20 = 140 mg transformed`

That is **12.5% remaining and 87.5% decayed**, both measured against the same initial 160 mg.

### Work backward from the fraction remaining

Suppose the table's initial 160 mg has fallen to 40 mg, and you need the elapsed time. First find the remaining fraction:

`f = 40/160 = 1/4 = (1/2)^2`

Two half-lives have passed. With `T = 6 h`, the elapsed time is `t = 2 × 6 = 12 h`.

For a fraction that doesn't match a convenient power of one-half, use:

`n = log(m₀/m)/log(2)`

`t = T × log(m₀/m)/log(2)`

Either natural logarithms or base-10 logarithms work if you use the same base in numerator and denominator. The [logarithmic-equations practice guide](/blog/logarithmic-equations-practice/) covers this step in more detail. In calculator notation below, `^` means “raised to the power.”

Before calculating, copy this blank setup row onto your paper. Fill only the values you know, then identify the unknown. For a percentage-only problem, you can work with fractions of the initial amount without assigning it a mass.

| Initial parent amount, m₀ | Parent remaining, m | Fraction decayed | Elapsed time, t | Half-life, T | Half-lives, n = t/T |
| --- | --- | --- | --- | --- | --- |
| _____ | _____ | _____ | _____ | _____ | _____ |

## Eight half-life practice problems

Use the stated ideal model throughout. Try the questions before scrolling to the explained answers; you can copy this section as a half-life worksheet with answers kept separately.

1. A sample starts with **192 mg** of parent isotope. Its half-life is **4 hours**. After **12 hours**, how much parent remains, how much of the original parent amount has transformed, and what percentage has decayed?
2. **87.5% of the original parent has decayed**. The half-life is **9 days**. What fraction remains, how many half-lives have passed, and how much time has elapsed?
3. **7.5 mg** of parent remains after **20 hours**. The half-life is **5 hours**. What was the initial parent amount?
4. A parent isotope's amount falls from **96 mg to 12 mg in 18 hours**. Calculate its half-life.
5. A sample starts with **100 mg** of parent isotope and has a **6-hour half-life**. How much parent remains after **3 hours**? Explain why 75 mg would be an incorrect answer.
6. A parent isotope has a **6-hour half-life**. Find the time at which **10% of the initial parent amount remains**. State when the remaining fraction is strictly below 10%, and identify the first whole-half-life checkpoint below 10%.
7. An ideal decay model starts with **300 parent nuclei**. After **7 half-lives**, what is the expected number of surviving parent nuclei? Explain what a decimal result means here.
8. A student writes `160 mg → 80 mg → 0 mg` for two successive half-lives. Repair the sequence and explain the student's mistake.

## Explained answers

### 1. Three halvings leave 24 mg

Calculate the number of half-lives first: `n = 12/4 = 3`. Then halve the remaining parent three times:

`192 → 96 → 48 → 24 mg`

**24 mg remains.** The original parent amount transformed is `192 − 24 = 168 mg`. Its decayed fraction is `168/192 = 0.875`, so **87.5% has decayed**.

A check against the initial amount gives `24 + 168 = 192 mg`. This accounts for the original parent; it is not a calculation of daughter mass.

### 2. Convert “decayed” to “remaining” first

If 87.5% has decayed, **12.5% remains**:

`f = 1 − 0.875 = 0.125 = 1/8`

The remaining fractions go `1 → 1/2 → 1/4 → 1/8`, so **3 half-lives** have passed. Each lasts 9 days:

`t = 3 × 9 = 27 days`

The elapsed time is **27 days**. Putting 0.875 into the remaining-fraction formula would answer a different question: when 87.5% remains.

### 3. Reverse four halvings

Here, `n = 20/5 = 4`. Work backward by doubling four times:

`7.5 → 15 → 30 → 60 → 120 mg`

The **initial parent amount was 120 mg**. Algebra gives the same result: `m₀ = m × 2^n = 7.5 × 16 = 120 mg`. Forward-check it with `120/16 = 7.5 mg`.

### 4. Count half-lives before dividing the time

The remaining fraction is `12/96 = 1/8`, which requires 3 half-lives. Those three intervals together last 18 hours:

`T = t/n = 18/3 = 6 hours`

The **half-life is 6 hours**. Check the full sequence: 96 mg at 0 hours, 48 mg at 6 hours, 24 mg at 12 hours, and 12 mg at 18 hours. The 18-hour duration covers all three halvings.

### 5. Half of a half-life needs an exponent

Three hours is half of the 6-hour half-life, so `n = 3/6 = 0.5`:

`m = 100 × (1/2)^0.5 = 100/√2 ≈ 70.710678 mg`

**About 70.7 mg remains.** The 75 mg answer comes from drawing a straight line between 100 mg at 0 hours and 50 mg at 6 hours. Exponential decay does not decrease by an equal number of milligrams each hour. Use the fractional exponent rather than taking half of the first interval's 50 mg decrease.

### 6. Separate the boundary from the checkpoints

At exactly 10% remaining, `f = 0.10`. With `t` measured in hours, solve the equality:

`0.10 = (1/2)^(t/6)`

`t = 6 × log(10)/log(2) ≈ 19.9315686 hours`

The remaining fraction equals 10% at the exact boundary **`t = 6 × log(10)/log(2)` hours**. In the continuous model, it is **strictly below 10% only for times greater than that boundary**. There is no earliest continuous instant strictly below it: between the boundary and any later proposed instant, another qualifying instant exists.

Whole-half-life checkpoints answer a separate question. At 18 hours, 3 half-lives have passed and 12.5% remains. At 24 hours, 4 have passed and 6.25% remains. Therefore, **24 hours is the first whole-half-life checkpoint below 10%**.

The decimal 19.9315686 is an approximation of the equality boundary. Rounding it does not establish a strict inequality. These are educational parent-amount calculations, not a measured or safety threshold.

### 7. A decimal expectation doesn't divide a nucleus

The expected surviving count is:

`300 × (1/2)^7 = 300/128 = 2.34375 nuclei`

**2.34375 is an expected count**, not a possible observed count of intact parent nuclei. Actual counts are whole numbers and vary randomly; the result is not a promise that exactly 2 or exactly 3 will survive. A particular run could even leave zero. Over many repetitions of the ideal experiment, the average surviving count would approach this expectation.

OpenStax's [half-life and activity lesson](https://openstax.org/books/college-physics-2e/pages/31-5-half-life-and-activity) explains the statistical meaning: each surviving parent nucleus has a 50% chance of surviving another half-life. The smooth equation is useful for bulk amounts and expected counts, while fluctuations matter when only a few nuclei remain.

### 8. Halve what remains

The repaired sequence is **`160 mg → 80 mg → 40 mg`**. The student subtracted 80 mg during both intervals. During the second half-life, only 80 mg of parent remains to be halved, so the decrease is 40 mg.

After two half-lives, **40 mg remains and 120 mg of the original parent amount has transformed**. Compare that with the 12-hour row in the opening table. The initial amount stays 160 mg throughout the calculation.

## Review the decision that caused the mistake

If one error repeats, save a short reminder and then solve the missed problem again from a blank page. These optional repair cards focus on the setup rather than storing an entire numerical solution:

| Front | Back |
| --- | --- |
| A question says 87.5% has decayed. Which fraction goes into m/m₀? | The fraction remaining: 1 − 0.875 = 0.125. |
| After one half-life, what amount do I halve next? | The parent amount still remaining, not the original amount. |
| Elapsed time is half of a half-life. What exponent belongs on 1/2? | 0.5. The remaining fraction is (1/2)^0.5, not a straight-line midpoint. |

Keep each card focused on the part you need to recall, and keep the multi-step calculation as a full practice problem. For a classroom activity alongside the calculations, see the [EPA’s half-life activity](https://www.epa.gov/radtown/radtown-radioactive-atom-activity-5-half-life).

*AI tools assisted with source research, drafting, editorial revision, exercise creation, and the article illustration. The numerical answers were checked computationally. These original exercises have not been validated in a classroom or learner study, and the editorial passes do not constitute human expert review.*
