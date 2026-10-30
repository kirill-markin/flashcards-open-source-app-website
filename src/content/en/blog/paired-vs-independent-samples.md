---
title: "Paired vs Independent Samples: Practice Choosing the Unit"
description: "Choose paired or independent samples with a six-pair worked example, a shuffled-row error, and practice questions with complete explained answers."
date: "2026-10-30"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/04decc2d022cf348d0c008ab2abe0fb178be7a450a15536fc32a38ad9ed5b2aa.webp"
keywords:
  - "paired vs independent samples"
  - "paired vs unpaired t test"
  - "matched pairs"
  - "paired samples practice"
  - "sample size for paired t test"
---

Reverse the order of one column in a before-and-after spreadsheet, and both column means stay exactly the same. The average change can stay the same too. Yet the calculated uncertainty can become wildly wrong. A person’s identity matters even when the summary looks fine.

**Paired samples have a meaningful one-to-one match between observations. Independent samples have no such matching relationship, and the observations used in a simple two-sample analysis must be independent.** Choose from the study design before looking at which calculation gives a smaller standard error.

![A boatkeeper returns a turquoise-striped oar to the wooden dinghy with matching painted bands](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/04decc2d022cf348d0c008ab2abe0fb178be7a450a15536fc32a38ad9ed5b2aa.webp)

## What belongs together?

The same person measured twice is a common paired design: each person supplies a before value and an after value. Two different people can also form a pair when the study deliberately matches them on relevant characteristics. The match has a reason that exists before you arrange the numbers. [Penn State’s study-design lesson](https://online.stat.psu.edu/stat200/Lesson01) distinguishes these designs.

| Check | Paired samples | Independent samples |
| --- | --- | --- |
| What links the measurements? | The same unit twice, or two meaningfully matched units | No one-to-one match; observations are independent within and between groups |
| What do you analyze for a mean comparison? | One difference per pair | Two groups of individual values |
| What counts toward sample size? | The number of complete pairs, n | Each group has its own size, n₁ and n₂ |
| Must the columns have equal lengths? | A complete-pair analysis uses one value on each side of every pair | No; independent groups can have equal or unequal sizes |
| Usual introductory t procedure | One-sample t procedure on the differences | Independent two-sample t procedure, often Welch’s |

Equal group sizes don’t establish pairing. Neither does putting unrelated observations beside one another, nor sorting both columns from smallest to largest.

“Paired” also doesn’t mean “causal.” A before-and-after comparison can reflect practice, time, or other changes alongside a treatment. Keep the dependence question separate from [random sampling, random assignment, and what a study can claim](/blog/random-sampling-vs-random-assignment/).

## Work through six pairs

These are invented scores for six fictional participants, used only to demonstrate arithmetic. They are not results from a learning experiment.

Define every difference as **d = after − before**. A positive difference means the recorded score increased.

| Participant ID | Before | After | Difference d |
| --- | ---: | ---: | ---: |
| A | 12 | 14 | 2 |
| B | 22 | 25 | 3 |
| C | 32 | 33 | 1 |
| D | 42 | 46 | 4 |
| E | 52 | 54 | 2 |
| F | 62 | 65 | 3 |

There are twelve recorded scores but **six complete pairs**. For a paired mean comparison, the data to summarize are **2, 3, 1, 4, 2, 3**.

Their mean is:

**d̄ = (2 + 3 + 1 + 4 + 2 + 3) / 6 = 2.5.**

Compute the sample standard deviation of those differences, using n − 1 in the denominator:

**s_d = √[(0.25 + 0.25 + 2.25 + 2.25 + 0.25 + 0.25) / 5] = √1.1 ≈ 1.04881.**

Then the estimated standard error of the mean difference is:

**SE(d̄) = s_d / √n = 1.04881 / √6 ≈ 0.42817.**

The scores range widely across participants, but each participant’s change is fairly close to 2.5. That distinction explains why the spread in a raw score column is the wrong spread for this calculation. The [standard deviation vs standard error guide](/blog/standard-deviation-vs-standard-error/) explains the two quantities in more detail.

For a hypothesized population mean difference μ₀, the paired t statistic is:

**t = (d̄ − μ₀) / (s_d / √n), with df = n − 1.**

Against μ₀ = 0, this dataset gives **t ≈ 5.83874 and df = 5**. [NIST’s paired-observations reference](https://www.itl.nist.gov/div898/handbook/prc/section3/prc311.htm) gives the underlying formulas. This number demonstrates the calculation; it supplies no real-world finding about effectiveness or causation.

Before using a paired t procedure for inference, check how the pairs were sampled or treatments assigned and what conclusions that design supports. Differences from separate pairs must be independent. With a small sample, the model also needs an approximately normal population distribution of **differences**, with attention to outliers and strong skew. Checking whether each raw score column looks normal misses the relevant variable. [Penn State’s paired-means section](https://online.stat.psu.edu/stat200/Lesson08) covers the procedure and its distributional conditions. Six tidy invented differences cannot establish a population model.

## The shuffled column that passes a mean check

Keep the before column in A–F order, but reverse the after column without matching by ID. Subtracting by row now produces:

| Before ID | Before | After value wrongly placed beside it | Wrong row difference |
| --- | ---: | ---: | ---: |
| A | 12 | 65 | 53 |
| B | 22 | 54 | 32 |
| C | 32 | 46 | 14 |
| D | 42 | 33 | −9 |
| E | 52 | 25 | −27 |
| F | 62 | 14 | −48 |

The before mean remains 37. The after mean remains 39.5. Even the mean of the wrong row differences remains **2.5**. For two complete, equally sized columns, subtracting row by row always gives a mean difference equal to the difference of the column means, regardless of their order.

The variation tells a different story:

| Calculation | Correct pairs | Wrong row matches |
| --- | ---: | ---: |
| Mean difference | 2.5 | 2.5 |
| Sample SD of differences | 1.04881 | 37.69748 |
| Estimated SE of mean difference | 0.42817 | 15.38993 |

**Repair the match using stable participant IDs.** With IDs preserved, the reversed after records read **F:65, E:54, D:46, C:33, B:25, A:14**. Matching those IDs to the before file restores A’s 12 → 14, B’s 22 → 25, and all six original differences.

If records arrive in separate files, join before and after records on ID. Check that IDs are unique within each file, identify any IDs present on only one side, and verify that every complete pair has one usable measurement at each time. Then compute differences. Sorting by score cannot recover identity. Sorting both files by a verified unique ID can align them; matching on the ID explicitly makes the relationship easier to audit.

If the IDs or another reliable link are gone, stop and recover the matching information. The design remains paired even when the file is damaged.

## Why the independent-samples formula doesn’t fix this

For two genuinely independent groups, the Welch standard-error estimate is:

**SE(x̄₂ − x̄₁) = √(s₁²/n₁ + s₂²/n₂).**

It uses the variation within each group. Welch’s procedure doesn’t require equal population variances; [NIST’s two-sample t reference](https://www.itl.nist.gov/div898/handbook/eda/section3/eda353.htm) gives the formula, and [Penn State’s two-sample lesson](https://online.stat.psu.edu/stat200/Lesson09) explains independent-group inference.

Applying that formula to the six before and six after scores gives **√(350/6 + 361.1/6) ≈ 10.88654**. That arithmetic is correct for the formula, but the formula is inappropriate for the actual paired design: the two scores from each participant are related.

The numerical gap is especially large because this teaching dataset has widely different starting scores and similar changes. Paired designs won’t always produce a smaller SE. Preserve genuine pairing because it describes how the data were collected; don’t choose a procedure by comparing its output with another one.

## Seven scenarios to solve before checking the answers

For each situation, identify the match, the unit contributing an independent value to the proposed analysis, and the procedure the design supports. Check inference conditions separately. All seven situations are hypothetical.

### 1. Two groups of twenty

Twenty unrelated volunteers receive method A and twenty different, unrelated volunteers receive method B. Each supplies one score. No matching was used, and outcomes can reasonably be treated as independent. An analyst pairs the lowest A score with the lowest B score because the group sizes match.

**Answer:** these are independent samples. Each person supplies one outcome; n₁ = 20 and n₂ = 20. An independent two-sample mean procedure is the relevant starting point. Pairing ordered scores invents a relationship that the design didn’t create. Equal sizes make that arrangement possible, but don’t make it meaningful.

### 2. Random assignment within preformed pairs

Researchers form twelve pairs of participants with similar baseline skills. Within each pair, a coin flip assigns one person to A and the other to B. The pairs are independent of one another. The outcome is a score after the assigned method.

**Answer:** use a paired comparison, with a consistently defined A-minus-B or B-minus-A difference for each pair. There are twelve differences, so n = 12 and a paired t procedure has df = 11. Random assignment within pairs doesn’t erase the matching. It can support a causal comparison under a well-conducted design, but no result has been supplied here.

### 3. The same thirty people return

Thirty independently sampled participants each complete the same measurement before and after a month. The spreadsheet contains sixty measurements. A student uses n = 60 in the paired standard-error formula.

**Answer:** the same person supplies the match, so there are thirty differences and n = 30. Each participant contributes one change; the paired t degrees of freedom are 29. Treating the sixty measurements as sixty independent changes understates uncertainty. The before-and-after setup alone doesn’t establish what caused any change.

### 4. Independent groups, both measured twice

Independent participants are randomly assigned to A or B. Everyone has a before score and an after score. There is no matching between A and B participants. The question asks whether the groups differ in their average change.

**Answer:** first calculate after-minus-before for each person. Those within-person measurements are paired. Then compare the resulting changes between the independent A and B groups, using an independent two-sample procedure on the changes if its conditions hold. A single paired test combining the two treatment groups would answer a different question. In particular, finding a change within A and no detectable change within B doesn’t itself test the difference between their changes.

### 5. A missing measurement and a missing ID

In the six-person table, F’s after score is missing. Separately, another copy contains every score but has lost all after-column IDs and has an unknown row order. Can either file simply be analyzed as independent samples?

**Answer:** neither problem changes the paired design. In the first file, an ordinary complete-pair calculation uses A–E: differences **2, 3, 1, 4, 2**, n = 5, mean difference **2.4**. Don’t invent F’s after value. Using complete pairs can change who the analysis represents, so investigate why the value is missing before drawing conclusions. In the second file, recover a reliable ID link before calculating individual changes. The column means alone cannot reconstruct the pairs or their SE.

### 6. Reverse the subtraction

Using the six complete pairs, someone changes the definition from after-minus-before to before-minus-after. What happens to the mean difference, SD, SE, and t statistic against zero?

**Answer:** every difference changes sign. The mean becomes **−2.5** and t becomes approximately **−5.83874**. The SD stays **1.04881**, the SE stays **0.42817**, and df stays **5**. Distances from the mean haven’t changed. A two-sided test against zero has the same p-value; a directional hypothesis must be rewritten to describe the same substantive direction. Under the new definition, an increase gives a negative difference.

### 7. Many trials from a few people

Eight participants each complete fifty trials under A and fifty under B. An analyst calls the four hundred A trials and four hundred B trials independent samples. Another analyst calls them four hundred independent pairs because the trial numbers match.

**Answer:** neither label justifies a simple t analysis of all trials. Repeated trials are grouped within people, and matching trial numbers doesn’t establish independent pairs. For a question about each person’s average A-versus-B response, one possible approach is to compute a mean under each condition for each person, then analyze eight participant-level differences if the design and conditions support it. Other questions may need a model for repeated measurements. Likewise, students sharing a classroom or units sharing a household can introduce clustering that a basic paired-versus-independent choice doesn’t resolve.

## Keep the distinction available when you need it

After solving a scenario, write one sentence naming the unit: “Each independent value is one person’s change,” or “Each group contains one outcome from each unrelated participant.” Then justify the match from the design. That explanation catches more errors than memorizing the test name alone.

The English [AP Statistics deck](/catalog/packages/ap-statistics-flashcards/) contains 250 cards across the course. Its matched-pairs cards ask which observations enter the test, how to construct an interval for the mean difference, and how paired procedures differ from independent two-sample procedures. Use it to recall those decisions between written practice sessions. Regular recall and spaced review support long-term retention of the distinctions. It’s a broad course companion; it doesn’t replace working through complete scenarios and calculations. The [AP Statistics flashcard guide](/blog/ap-statistics-flashcards/) explains how to combine those activities.

For a card of your own, put “Two groups have equal sample sizes. Is that enough to use a paired t test?” on the front. On the back: “No. Identify a meaningful one-to-one match from the design, preserve it with IDs, and check independence across pairs.” Return to a fresh scenario after recalling the answer.

*Production note: AI tools were used for source research, drafting, editing, arithmetic checks, and the illustration. The original synthetic calculations were executed with Python 3.14.7 on macOS 26.6.1 ARM64 and independently cross-checked with Python’s standard library. They demonstrate arithmetic, not actual participant outcomes or evidence that a learning method works. Nibomo is Kirill Markin’s product, and this article is published on its marketing site.*
