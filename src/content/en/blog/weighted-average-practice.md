---
title: "Weighted Average Practice: Choose the Weights First"
description: "Choose weights for scores, group means, and percentages. Try weighted average practice with paired grading policies, missing weights, and explained answers."
date: "2026-10-28"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/a494839f0493a25b0951fa4e507afcb9240f72ea6d251166d5564039030f3eaf.webp"
keywords:
  - "weighted average practice"
  - "weighted mean problems"
  - "average of averages"
  - "weighted grade calculation"
  - "combining group means"
---

You score 18 out of 20 on one assessment and 60 out of 100 on another. Your average can be **75% or 65%**, depending on the grading policy. Both calculations use the same scores. They give different weight to each assessment.

Before multiplying anything, decide what should count equally. Each assessment? Each possible point? Each student behind a group mean? These weighted average practice problems ask you to choose and explain the weights, then calculate the result.

All examples are fictional, with exact exercise data. For an actual grade, follow your course's published policy, including its rules for missing work, extra credit, dropped scores, and rounding.

![A woman joins a short ochre fabric panel to a much longer blue panel of the same width](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/a494839f0493a25b0951fa4e507afcb9240f72ea6d251166d5564039030f3eaf.webp)

## The formula needs a reason for each weight

A **weighted average**, also called a **weighted mean**, multiplies each value by its weight, adds the products, and divides by the total weight. The [NIST Dataplot reference](https://www.itl.nist.gov/div898/software/dataplot/refman2/ch2/weigmean.pdf) gives this formula:

```text
weighted mean = (w₁x₁ + w₂x₂ + … + wₙxₙ) / (w₁ + w₂ + … + wₙ)
```

Here, `x` is a value and `w` is its weight. Use nonnegative weights with a positive total. The values must use the same measurement scale. For example, convert assessment scores to percentages before taking a weighted mean of them. Averaging the raw numbers 18 and 60 would lose the fact that their possible scores differ.

In the calculations below, a percentage score such as 90% enters the formula as **90**. A course weight of 20% enters as **0.20**. The result stays on the percentage-score scale.

Weights can also be counts or relative numbers. Weights of 2 and 3 have the same ratio as 40% and 60% and give the same weighted mean. With weights of 2 and 3, divide the weighted sum by 5. With decimal weights of 0.40 and 0.60, the denominator is 1, so no further division changes the result.

Two checks help: equal weights should give the ordinary arithmetic mean, and a mean with nonnegative weights must fall between the smallest and largest values that have positive weight. A result can pass both checks and still use the wrong weighting policy.

## Same scores, two grading policies

First put both assessment scores on a percentage scale:

| Assessment | Earned / possible points | Percentage |
| --- | ---: | ---: |
| Short assessment | 18 / 20 | 90% |
| Long assessment | 60 / 100 | 60% |

**Policy A: each assessment counts equally.** Give the two percentage scores weights of 1 and 1:

`(1 × 90 + 1 × 60) / (1 + 1) = 75%`

**Policy B: every possible point counts equally.** Add the earned points and divide by the total possible points:

`(18 + 60) / (20 + 100) × 100% = 65%`

Policy B is also a weighted mean of the percentage scores, using possible points as weights:

`(20 × 90 + 100 × 60) / (20 + 100) = 65%`

Under Policy B, the long assessment gets five times the weight of the short one. Under Policy A, each assessment gets half the weight. The lower percentage pulls the result down further when it carries more weight.

[Follett's guide to averaging modes](https://support.follettlearning.com/toolkits/assets/ims_qrc_understanding_averaging_modes.pdf) distinguishes total points from assignment and category weighting. The two policies here isolate that choice with simple numbers. Your scores alone don't tell you which policy your teacher uses.

### Course categories supply their own weights

Suppose a course gives homework 20%, a project 30%, and an exam 50%. The category scores are 85%, 72%, and 88%, respectively:

`0.20 × 85 + 0.30 × 72 + 0.50 × 88 = 17 + 21.6 + 44 = 82.6%`

The decimal weights sum to 1. Each category score must already have been calculated according to the course policy. Once the category scores are known, use their stated course weights. Assignment counts or possible points don't replace those weights just because they're available.

## Combining group means: rebuild the totals

Two groups take the same test on the same score scale. Group A has 12 students with a mean of 65. Group B has 28 students with a mean of 80. Every student belongs to exactly one group, and together the groups include everyone whose mean we want.

| Group | Students | Mean score | Total score: students × mean |
| --- | ---: | ---: | ---: |
| A | 12 | 65 | 780 |
| B | 28 | 80 | 2,240 |
| Combined | 40 | — | 3,020 |

Multiplying each mean by its group size recovers the group's total score. Add those totals, then divide by the total number of students:

`(12 × 65 + 28 × 80) / (12 + 28) = 3,020 / 40 = 75.5`

An ordinary average of the two means gives `(65 + 80) / 2 = 72.5`. That gives each group equal influence. To give each student equal influence, the weights must be **12 and 28 students**. An average of averages works for the combined student mean when you retain those group sizes; equal group sizes are the case where simply averaging the means works too.

This reconstruction uses exact group means. If the supplied means were rounded, the combined result may also be approximate. Check that the rows use the same score scale, include all the intended students, and don't count anyone twice.

The same method combines success percentages: weight each percentage by the number of trials behind it. The [Simpson's paradox exercises](/blog/simpsons-paradox-practice/) show how changing subgroup shares can even reverse a comparison.

### Find a missing group size

A group of 10 students has a mean of 72. A separate group has a mean of 84. Together their mean is 80. How many students are in the second group?

Let its size be `n`. The total score reconstructed from the two groups must equal the combined mean times the combined count:

```text
10 × 72 + n × 84 = (10 + n) × 80
720 + 84n = 800 + 80n
4n = 80
n = 20 students
```

Substitute the count back into the weighted mean: `(10 × 72 + 20 × 84) / 30 = 80`. The higher-scoring group is twice as large, so the combined mean is closer to 84 than to 72.

## Completed work isn't the final grade

A quiz category worth 20% of a course is complete at 90%. A project worth 30% is complete at 60%. The exam, worth the remaining 50%, hasn't happened. Assume no other adjustments.

The completed work contributes:

`0.20 × 90 + 0.30 × 60 = 18 + 18 = 36 percentage points`

Those **36 percentage points toward the full-course grade** come from half the course weight. To calculate a **normalized percentage on completed work**, divide by that completed weight:

`36 / (0.20 + 0.30) = 36 / 0.50 = 72%`

The final grade still depends on the exam. If its percentage score is `E`, the final percentage is `36 + 0.50E`.

| Quantity | Result | What it describes |
| --- | --- | --- |
| Completed contribution | 36 percentage points | What the completed categories contribute to the full-course percentage |
| Normalized completed-work percentage | 72% | Performance across the completed 50% of course weight |
| Final percentage if the exam score is 70% | 71% | `36 + 0.50 × 70`, after including the exam |

Treating the upcoming exam as zero would give a full-course percentage of 36%. That adds an assumption about the unfinished work. It doesn't give the normalized percentage on completed work.

The [percentage points practice](/blog/percentage-points-vs-percent-change/) helps with the units here. Your gradebook may use its own rule for displaying ungraded work, so check the course policy before interpreting the number it shows.

### Work backward from a target grade

In another course, completed coursework has a score of 75% and is worth 60% of the course. The final exam is worth 40%. What exam score would give a final grade of 81%, before rounding or other adjustments?

```text
0.60 × 75 + 0.40E = 81
45 + 0.40E = 81
E = (81 − 45) / 0.40 = 90%
```

The coursework contributes 45 percentage points, leaving 36 for the exam to contribute. An exam score of 90% supplies them: `0.40 × 90 = 36`. Substitution gives `45 + 36 = 81%`.

Check whether a required score is possible. If the calculation gives more than 100% for an exam capped at 100%, the target is unattainable under the stated scores and weights. Rounding the required score down can also put the result below the target.

## Seven weighted mean problems

Keep the answer key out of view. Before calculating, write what each weight represents. Scores use a 0–100 scale unless stated otherwise. Groups and batches don't overlap, their means and rates are exact, and no observations are omitted.

1. **Two test groups.** Eight students have a mean score of 70. Another 24 students have a mean of 90 on the same test. Find the mean across all 32 students.
2. **Two assessment policies.** You earn 9/10 and 12/30. Find the percentage under each policy: equal weight per assessment, and equal weight per possible point. Explain the difference.
3. **Relative weights.** Three scores are 50, 70, and 90, with respective weights 2, 3, and 5. Find the weighted mean. Must you rewrite the weights as percentages first?
4. **A missing count.** One test group has 20 students and a mean of 60. Another has a mean of 90. Their combined mean is 78. Find the second group's size.
5. **Completed work and a target.** A course has a completed project worth 30% at a score of 80%, completed quizzes worth 20% at 90%, and an upcoming exam worth 50%. Find the completed work's contribution to the full-course grade and its normalized percentage. What exam score would give a final grade of exactly 78%? Assume no other adjustments.
6. **Pool the trials.** A machine passes inspection on 60% of 20 trials in one batch and 90% of 80 trials in another. Every trial uses the same pass criterion. Find the pass rate across all 100 trials. Show the passed-trial counts too.
7. **Insufficient information.** Two assessments have percentage scores of 60% and 90%, but no grading policy is supplied. Can you establish a unique average? Calculate the result with equal assessment weights, then with respective weights of 1 and 3.

## Answers with the weights explained

**1. The combined mean is 85.** Use student counts as weights:

`(8 × 70 + 24 × 90) / 32 = (560 + 2,160) / 32 = 85`

The second group has three times as many students, so its mean gets three times the weight. An unweighted average of 80 would give the groups equal influence instead.

**2. Equal assessments give 65%; pooled points give 52.5%.** First convert the scores: `9/10 × 100% = 90%` and `12/30 × 100% = 40%`.

With equal assessment weights, `(90 + 40) / 2 = 65%`. With equal weight per possible point, `(9 + 12) / (10 + 30) × 100% = 52.5%`. The latter is also `(10 × 90 + 30 × 40) / 40 = 52.5%`. The lower percentage now has three times the weight, which explains the lower result.

**3. The weighted mean is 76.** Divide by the total relative weight:

`(2 × 50 + 3 × 70 + 5 × 90) / (2 + 3 + 5) = 760 / 10 = 76`

There's no need to convert the weights. Using 0.20, 0.30, and 0.50 gives the same answer because the ratios stay the same. Omitting the denominator from the original calculation gives 760, outside the input range of 50–90.

**4. The second group has 30 students.** Let its size be `n` and equate the reconstructed totals:

```text
20 × 60 + 90n = 78(20 + n)
1,200 + 90n = 1,560 + 78n
12n = 360
n = 30 students
```

Check: `(1,200 + 2,700) / 50 = 78`. Because this unknown counts students, a negative or fractional result wouldn't be valid for the stated exercise.

**5. The contribution is 42 percentage points; the normalized completed-work result is 84%; the required exam score is 72%.** The completed categories contribute `0.30 × 80 + 0.20 × 90 = 24 + 18 = 42` percentage points. Their total weight is `0.50`, so their normalized percentage is `42 / 0.50 = 84%`.

For the target, solve `42 + 0.50E = 78`, giving `E = (78 − 42) / 0.50 = 72%`. Check: `42 + 0.50 × 72 = 78%`. Inserting 84 as the completed contribution would treat a result normalized over half the course as though it covered the whole course.

**6. The pooled pass rate is 84%.** The batches have `0.60 × 20 = 12` and `0.90 × 80 = 72` passed trials. Together, that's `(12 + 72) / 100 × 100% = 84%`.

Using trial counts as weights gives the same result: `(20 × 60 + 80 × 90) / 100 = 84%`. Giving the two rates equal weight would produce 75%, even though four times as many trials belong to the second batch.

**7. There is no unique average without a policy.** Equal weights give `(60 + 90) / 2 = 75%`. Weights of 1 and 3 give `(1 × 60 + 3 × 90) / 4 = 82.5%`.

Both results lie between 60% and 90%, so both pass the range check. The scores and that check can't supply the missing weighting rule.

## Keep the decision on a review card

If you chose the wrong weights, save the decision you missed as a short recall prompt. For example: “Two groups contain 5 and 20 students. Which weights combine their test means into the mean for all 25 students?” Answer: **5 and 20**, because multiplying each mean by its student count reconstructs its total score.

Another prompt can target the grading distinction: “What does dividing the completed contribution by the completed course weight give?” Answer: **the normalized percentage on completed work**, under the stated weighting policy. The final grade still needs the remaining scores.

The [weighted average flashcards](/catalog/packages/weighted-average-flashcards/) offer short prompts on choosing weights, combining group means and rates, and separating completed-work contributions from normalized percentages.

Use regular recall and spaced review to revisit a missed decision, then solve a fresh problem with new numbers. Recalling the formula and choosing its weights are separate things to practice. For an example where durations provide the weights, try the [average speed practice](/blog/average-speed-practice/).

*Production note: AI assisted substantially with research, drafting, editing, and the illustration. An automated process checked the original example and exercise calculations with exact fraction arithmetic in CPython 3.14.7. The examples don't report gradebook tests or measured learning outcomes. This site is published by Nibomo's owner.*
