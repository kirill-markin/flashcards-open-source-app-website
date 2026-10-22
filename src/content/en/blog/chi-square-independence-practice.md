---
title: "Chi-Square Test of Independence: Practice with Checked Tables"
description: "Practice a chi-square test of independence with checked expected counts, cell contributions, sample-size comparisons, and explained answers."
date: "2026-10-22"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/8aacf5593118497aed5c65cd9a195b9af7fe304adbd0984c4b5a149a9725c263.webp"
keywords:
  - "chi-square test of independence practice"
  - "expected counts chi-square"
  - "chi-square practice problems"
  - "contingency table expected frequency"
---

**Review the concepts between problems:** the [broader English AP Statistics flashcard deck](/catalog/packages/ap-statistics-flashcards/) includes chi-square procedures, expected counts, degrees of freedom, and interpretation within 250 course-review cards. Regular recall and spaced review help retain these ideas; full problems still need separate practice. Every answer to this worksheet is below.

In the fictional makers-club sample below, 22 morning members choose ceramics. The independence model expects 15. That difference contributes **49/15** to the chi-square statistic. To reach a conclusion, you need all six cells, a suitable sampling design, and a reference distribution.

This chi-square test of independence practice follows one complete calculation, then gives eight problems with explained answers. All datasets are invented for learning, and their arithmetic has been checked.

![A mosaic conservator compares a small ceramic fragment with a larger section whose blue tiles form a visible cluster](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/8aacf5593118497aed5c65cd9a195b9af7fe304adbd0984c4b5a149a9725c263.webp)

## Start with one sample and two categorical variables

Imagine a simple random sample of **120 distinct adult members** from a large makers-club membership. The sample is no more than 10% of that population. Record each member once, using two classifications:

- Usual session: morning or evening.
- First-choice workshop: ceramics, textiles, or woodwork.

Assume the sampling and response process supports treating members' observations as approximately independent. Everyone supplies one usual session and one first choice, so each member contributes to exactly one cell. These are counts of members, not counts of all workshops they might attend.

| Usual session | Ceramics | Textiles | Woodwork | Total |
| --- | ---: | ---: | ---: | ---: |
| Morning | 22 | 18 | 10 | 50 |
| Evening | 14 | 30 | 26 | 70 |
| Total | 36 | 48 | 36 | 120 |

The question is whether usual session and first-choice workshop are associated in the adult membership population. Choose **α = 0.05 before examining the results** for the worked test.

**H₀:** usual session and first-choice workshop are independent in that population.

**Hₐ:** usual session and first-choice workshop are associated in that population.

Under H₀, the population distribution of workshop preference is the same for morning and evening members. Sampling variation can still produce different observed percentages. See the [OpenStax independence lesson](https://openstax.org/books/introductory-statistics-2e/pages/11-3-test-of-independence) for this hypothesis structure.

Keep two uses of *independent* separate. **Independent observations** concern how members' records were obtained; that is a design condition. **Independence of the two variables** is the population claim being tested. You don't have to establish that claim before running the test.

If reading the margins still takes effort, work through the [conditional probability two-way table practice](/blog/conditional-probability-two-way-tables/) first. Here, the next step is inference: do the observed row differences provide evidence of a population association?

## Build the table the null model expects

Of all 120 sampled members, 36 choose ceramics. The pooled ceramics share is **36/120 = 0.30**. Under the fitted independence model, that same share applies to each session row:

- Morning ceramics: **50 × 0.30 = 15**.
- Evening ceramics: **70 × 0.30 = 21**.

For any cell in a contingency table, the expected frequency under independence is:

**E = (row total × column total) / grand total.**

The [NIST test-of-independence reference](https://www.itl.nist.gov/div898/software/dataplot/refman1/auxillar/chistest.htm) gives this rule and Pearson's statistic. The column proportions estimate the shared workshop distribution under H₀.

Here is the complete expected table:

| Usual session | Ceramics | Textiles | Woodwork | Total |
| --- | ---: | ---: | ---: | ---: |
| Morning | 15 | 20 | 15 | 50 |
| Evening | 21 | 28 | 21 | 70 |
| Total | 36 | 48 | 36 | 120 |

For example, morning textiles is **50 × 48 / 120 = 20**; evening woodwork is **70 × 36 / 120 = 21**. The expected table preserves every observed row and column total. Check both directions before calculating contributions: mismatched totals can reveal a wrong denominator or a cell used in place of a margin.

An expected count is a model quantity. It can be fractional even though observed member counts must be whole numbers. Keep fractions or full calculator precision until the final result. Rounding expected counts to whole numbers can break their margins and alter χ². The practice tables below include expected counts of 7.5 and 0.8.

## Check conditions using expected counts

For these introductory exercises, use the convention that **every expected cell count must be at least 5**. [Penn State's STAT 200 lesson](https://online.stat.psu.edu/stat200/Lesson11) uses this condition. It concerns expected counts under H₀, rather than requiring every observed count to reach 5.

All six expected counts in the makers-club table are at least 15, so this check passes. The setup supplies the other conditions: random sampling, approximately independent observations, and one cell per member. The small sampling fraction supports approximate independence when sampling without replacement. Large expected counts cannot repair repeated records or biased recruitment.

The “at least 5 everywhere” rule is an introductory convention, not a universal mathematical boundary. Pearson's chi-square reference distribution is a large-sample approximation; NIST discusses that limitation. For a sparse table, stop and choose a method justified for its design, such as an appropriate exact or simulation-based test. Don't merge unrelated categories merely to obtain a smaller p-value or make a condition pass.

## Add every cell's contribution

Pearson's statistic compares each observed count O with its expected count E:

**χ² = Σ (O − E)² / E**, summed over the interior cells.

The margins help calculate E; they aren't extra observations to include in the sum. Squaring makes both positive and negative deviations contribute positively.

| Cell | O | E | O − E | Contribution (O − E)² / E |
| --- | ---: | ---: | ---: | ---: |
| Morning, ceramics | 22 | 15 | 7 | 49/15 ≈ 3.266667 |
| Morning, textiles | 18 | 20 | −2 | 1/5 = 0.2 |
| Morning, woodwork | 10 | 15 | −5 | 5/3 ≈ 1.666667 |
| Evening, ceramics | 14 | 21 | −7 | 7/3 ≈ 2.333333 |
| Evening, textiles | 30 | 28 | 2 | 1/7 ≈ 0.142857 |
| Evening, woodwork | 26 | 21 | 5 | 25/21 ≈ 1.190476 |

Adding the exact fractions gives:

**χ² = 49/15 + 1/5 + 5/3 + 7/3 + 1/7 + 25/21 = 44/5 = 8.8.**

Morning ceramics and evening ceramics differ from their expectations by the same absolute count, 7. Their contributions differ because the denominators are 15 and 21. Dividing by E scales each squared deviation against its own expected count.

The largest individual contribution is morning ceramics. That helps describe where the sample departs from the model. The overall test still combines all six cells; its p-value doesn't establish a separate significant result for that cell.

## Use two degrees of freedom and the right tail

For an r × c table, **df = (r − 1)(c − 1)**. Count category rows and columns, excluding totals. Here, **df = (2 − 1)(3 − 1) = 2**.

There is a useful reason for the subtraction. Once the margins are fixed, choosing the first two cells of the morning row determines its third cell. The column totals then determine the entire evening row. Only two cell counts can vary freely within those margins.

Use the upper-tail probability **P(χ²₂ ≥ 8.8)**. Large values represent greater departures from the independence model. With two degrees of freedom, the chi-square upper-tail formula simplifies to **exp(−x/2)**, derived from the [NIST chi-square density](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3666.htm). Thus:

**p = exp(−8.8/2) ≈ 0.01227734.**

This is the usual chi-square approximation for the table, not an exact finite-sample test. Assuming population independence and the test conditions, it gives an approximate probability of 1.23% for a statistic at least as large as 8.8. It isn't the probability that H₀ is true.

At the prespecified **α = 0.05**, 0.01227734 < 0.05, so reject H₀. A suitable conclusion is:

> At the 5% significance level, these hypothetical sample data provide evidence that usual session and first-choice workshop are associated in the adult makers-club membership population.

The study observes existing preferences and schedules. It doesn't show that moving someone to an evening session would change their workshop preference. The [random sampling vs random assignment guide](/blog/random-sampling-vs-random-assignment/) explains why population generalization and causal inference require different design features.

## Same percentages, a different amount of evidence

Now consider a **separate hypothetical random sample of 60 distinct members**, collected independently under the same design assumptions. This invented table has exactly the same observed proportions as the larger example:

| Usual session | Ceramics | Textiles | Woodwork | Total |
| --- | ---: | ---: | ---: | ---: |
| Morning | 11 | 9 | 5 | 25 |
| Evening | 7 | 15 | 13 | 35 |
| Total | 18 | 24 | 18 | 60 |

Its expected counts are **[7.5, 10, 7.5]** for morning and **[10.5, 14, 10.5]** for evening. All meet the introductory expected-count condition. Keep 7.5 and 10.5 as they are.

Every observed and expected count is half the corresponding value in the larger example. A cell's contribution therefore becomes:

**[(O/2 − E/2)²] / (E/2) = ½ × (O − E)² / E.**

The statistic is **χ² = 4.4**, with the same **df = 2**. Its upper-tail p-value is **exp(−4.4/2) ≈ 0.11080316**. At α = 0.05, fail to reject H₀: this smaller hypothetical sample doesn't provide sufficient evidence of an association.

| Separately collected hypothetical sample | n | χ² | df | Approximate p-value | Decision at α = 0.05 |
| --- | ---: | ---: | ---: | ---: | --- |
| Larger sample | 120 | 8.8 | 2 | 0.01227734 | Reject H₀ |
| Smaller sample | 60 | 4.4 | 2 | 0.11080316 | Fail to reject H₀ |

The matching row percentages describe the same pattern, but the samples supply different amounts of information. Percentages alone don't determine a chi-square statistic; the observed sample size matters too.

This comparison assumes two separately collected samples. Halving a real table would discard information, and duplicating its records would not create new independent observations. You can't manufacture a larger independent sample by copying data.

## Eight chi-square practice problems

Work on paper before reading the answers. For the new numerical tables, assume the same kind of random sampling, one record per independently responding person, and a sample no larger than 10% of its population. Use α = 0.05 unless the question says otherwise.

### 1. Keep the fractional expectations

A separate fictional survey records these counts for two session groups and three activity choices:

| Session | Activity A | Activity B | Activity C | Total |
| --- | ---: | ---: | ---: | ---: |
| Morning | 8 | 9 | 8 | 25 |
| Evening | 7 | 11 | 7 | 25 |
| Total | 15 | 20 | 15 | 50 |

State the hypotheses. Find every expected count, check the expected-count condition, and calculate χ², df, and the approximate p-value. Write a conclusion.

### 2. An observed count below five

Another survey gives the following counts. Does the observed value 2 make the expected-count condition fail? Show the expected table and calculate χ².

| Group | Choice A | Choice B | Choice C | Total |
| --- | ---: | ---: | ---: | ---: |
| Group 1 | 4 | 8 | 8 | 20 |
| Group 2 | 6 | 2 | 12 | 20 |
| Total | 10 | 10 | 20 | 40 |

### 3. A rare category

Find the expected counts for this table. Is the usual chi-square approximation justified by the introductory condition used here?

| Group | Choice A | Choice B | Choice C | Total |
| --- | ---: | ---: | ---: | ---: |
| Group 1 | 1 | 8 | 11 | 20 |
| Group 2 | 1 | 12 | 17 | 30 |
| Total | 2 | 20 | 28 | 50 |

### 4. Percentages without counts

A report gives only row percentages for the main makers-club example: morning members have 44% ceramics, 36% textiles, and 20% woodwork. It gives the evening distribution too, but neither group size nor the total sample size. Can you calculate the original chi-square statistic by entering the percentages as counts?

### 5. A table matching the model

A new hypothetical sample has observed morning counts **[15, 20, 15]** and evening counts **[21, 28, 21]**. Find its margins, expected counts, χ², df, and p-value. Does the result prove population independence?

### 6. Read the p-value carefully

For the main example, a student writes: “p = 0.01227734 means there is a 1.23% probability that session and preference are independent.” Correct that sentence. Then state the decision at α = 0.05.

### 7. Repeated members

A researcher collects several visits from each member and enters every visit as if it came from a different person. All expected counts exceed 5. Is the ordinary independence test justified just because the table is large enough?

### 8. A stricter threshold and a causal claim

Suppose α = 0.01 had been chosen before collecting the main sample. What would the decision be? At either threshold, could this observational survey establish that usual session causes workshop preference?

## Answers with the calculation exposed

**1. χ² = 1/3, df = 2, p ≈ 0.84648172; fail to reject H₀.** The null says session and activity choice are independent in the survey's population; the alternative says they are associated. Each row has 25 people, so its expected counts are **[25 × 15/50, 25 × 20/50, 25 × 15/50] = [7.5, 10, 7.5]**. Both rows therefore meet the expected-count condition.

The contributions in each row are **[1/30, 1/10, 1/30]**. For example, morning Activity A contributes **(8 − 7.5)²/7.5 = 1/30**. Add both rows:

**χ² = 2 × (1/30 + 1/10 + 1/30) = 1/3.**

With df = (2 − 1)(3 − 1) = 2, **p = exp(−1/6) ≈ 0.84648172**. At α = 0.05, the data don't provide sufficient evidence of an association between session and activity choice in that population. Rounding 7.5 to 8 would alter the expected margins and the statistic.

**2. The condition passes; χ² = 4.8.** Both rows have expected counts **[5, 5, 10]**, using their common row total 20 and column totals 10, 10, and 20. The observed 2 doesn't decide this check. Expected counts equal to 5 meet the “at least 5” convention used in this worksheet.

Each row's contributions are **[1/5, 9/5, 2/5]**. Consequently, **χ² = 2 × (1/5 + 9/5 + 2/5) = 24/5 = 4.8**. The first row's deviation in Choice B is +3; the second's is −3. Both contribute 9/5 after squaring.

**3. The introductory condition fails.** Group 1's expected counts are **[0.8, 8, 11.2]**; Group 2's are **[1.2, 12, 16.8]**. For Choice A, the calculations are **20 × 2/50 = 0.8** and **30 × 2/50 = 1.2**. Both are below 5. A total sample size of 50 doesn't ensure adequate expected counts in a rare category. Use a method appropriate to the sparse table and its sampling design rather than reporting the routine chi-square approximation as justified.

**4. No; the original counts are missing.** Entering percentages as counts invents sample sizes and can also misrepresent the relative sizes of the session groups. The larger and smaller examples above have identical row percentages but different statistics and decisions. Ask for the original cell counts, or enough exact information to reconstruct them. Rounded percentages may not permit exact reconstruction even after a sample size is supplied.

**5. χ² = 0, df = 2, p = 1; population independence isn't proved.** The row totals are **50 and 70**, the column totals are **36, 48, and 36**, and n = 120. Applying the margin formula reproduces the observed table exactly: expected morning counts **[15, 20, 15]**, expected evening counts **[21, 28, 21]**. Every contribution is zero, so **χ² = 0** and **p = exp(0) = 1**. Fail to reject H₀. A sample matching its fitted null model gives no evidence against independence; it doesn't establish the population claim with certainty.

**6. Condition on H₀ rather than assigning it a probability.** A corrected statement is: “Assuming population independence and the test conditions, the approximate probability of a chi-square statistic at least as large as 8.8 is 0.01227734.” Since that p-value is below 0.05, reject H₀ and report evidence of an association in the specified population. For more practice with decision language, see [Type I vs Type II errors](/blog/type-i-vs-type-ii-errors/).

**7. No; repeated visits can violate independence of observations.** A member's visits may share preferences, habits, and other influences. Large expected counts address the approximation's count condition, not dependence among records. Use an analysis that accounts for repeated or clustered observations, or design the study around one suitable observation per independently sampled member. You cannot infer independent observations from the final table alone.

**8. Fail to reject at α = 0.01; no causal conclusion follows.** The main p-value, approximately 0.01227734, is greater than 0.01. There isn't sufficient evidence at that prespecified threshold, even though the same result is significant at 0.05. Choose the threshold before examining the result. Neither decision turns this survey into a randomized experiment: scheduling, availability, or other variables could help explain an observed association.

## Review the step that cost you the answer

After a miss, identify whether it involved the model, the arithmetic, or the conclusion. Make a short recall prompt for the step you missed: “Which counts must reach 5 in this worksheet?” or “Does fail to reject prove independence?”

Retrieve the answer before checking it, then revisit the prompt after a gap. Research on [retrieval practice](https://pubmed.ncbi.nlm.nih.gov/26151629/) and [distributed practice](https://pubmed.ncbi.nlm.nih.gov/16719566/) supports these approaches to retention. Apply the recalled ideas to a fresh table too: write the hypotheses, design conditions, expected counts, statistic, and contextual conclusion without following the worked example line by line.

*Production note: AI tools assisted substantially with research, writing, and editorial revision and constructed these original fictional exercises. Python 3.14.7 on macOS 26.6.1 checked all six numerical datasets using exact `Fraction` arithmetic for margins, expected counts, and Pearson contributions. The reported p-values were calculated with `math.exp` using the df = 2 chi-square upper-tail formula; no SciPy test was run. These checks establish arithmetic consistency, not classroom effectiveness or human statistician review. The illustration is AI-generated.*
