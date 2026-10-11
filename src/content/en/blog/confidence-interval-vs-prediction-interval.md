---
title: "Confidence Interval vs Prediction Interval: Worked Practice"
description: "Choose the interval for a population mean or a future observation. Compare worked calculations, a future group average, and seven practice questions with answers."
date: "2026-10-11"
image: "/blog/confidence-interval-vs-prediction-interval.png"
keywords:
  - "confidence interval vs prediction interval"
  - "confidence interval for mean"
  - "prediction interval for one observation"
  - "prediction interval practice"
  - "prediction interval for a future sample mean"
---

A sample of 25 spacer lengths can give a 95% confidence interval of **49.17–50.83 mm** for the process mean and a 95% prediction interval of **45.79–54.21 mm** for the next spacer. Same measurements, same confidence level, very different widths. The next spacer has its own variation, even when you've estimated the mean fairly precisely.

To choose an interval, name what you want it to cover: the unknown population mean, one future observation, or the average of a future group. That choice comes before the calculation.

![An archery coach marks the center of scattered arrows on a straw target in front of a broad canvas backstop](/blog/confidence-interval-vs-prediction-interval.png)

The examples and practice questions below are invented to teach this distinction. They don't assess a real manufacturing process.

## One history, three questions

Suppose a machine cuts spacers. Assume historical and future lengths are **independent observations from the same unchanged normal population**, whose mean and variance are unknown. A historical sample has:

- **n = 25** measured spacers;
- **x̄ = 50 mm**, the sample mean;
- **s = 2 mm**, the sample standard deviation.

For a two-sided 95% interval, use the supplied **t⋆ = 2.064**, rounded from the upper 97.5th percentile of a t distribution with **n − 1 = 24** degrees of freedom. The rounded multiplier makes the numerical intervals approximate.

| Question | Target | Procedure |
| --- | --- | --- |
| What is the process's population mean length? | Fixed, unknown mean μ | Confidence interval for the mean |
| What length will the next spacer have? | One future length | Prediction interval for one observation |
| What will the average length of the next nine spacers be? | One future group's mean | Prediction interval for a future sample mean |

The third question still needs prediction. A future group average varies from group to group; it isn't the population mean itself.

If s and s / √n still feel interchangeable, work through the [standard deviation vs standard error examples](/blog/standard-deviation-vs-standard-error/) first.

## Calculate the mean confidence interval

Under the stated model, use the one-sample t interval:

**x̄ ± t⋆ × s / √n**

[NIST's confidence limits for the mean](https://www.itl.nist.gov/div898/handbook/eda/section3/eda352.htm) give this formula. For the spacer history:

```text
Margin = 2.064 × 2 / √25 = 0.8256 mm
Interval = 50 ± 0.8256 mm
Rounded endpoints: 49.17–50.83 mm
```

The **margin** is the distance from the center to either endpoint. The **full width** is twice the margin: approximately **1.65 mm** here. Calling the margin the width creates a factor-of-two error.

This interval estimates μ. Individual spacer lengths can fall outside it.

## Add the next spacer's variation

For one independent future observation from the same population, use:

**x̄ ± t⋆ × s × √(1 + 1/n)**

This is the m = 1 case of [NIST's prediction interval for new observations](https://www.itl.nist.gov/div898/software/dataplot/refman1/auxillar/predlimi.htm).

```text
Margin = 2.064 × 2 × √(1 + 1/25)
       ≈ 4.2098 mm
Interval ≈ 50 ± 4.2098 mm
Rounded endpoints: 45.79–54.21 mm
```

The future length and the estimated center can both vary. Their independence lets us add the variances: the difference between one future length and the historical mean has variance **σ² + σ²/n**, where σ is the population SD. Estimating σ with s gives the scale **s√(1 + 1/n)**.

For the same history and confidence level, this prediction interval is wider than the mean CI. A 53 mm spacer falls outside the mean CI but inside the single-observation PI. Both results make sense because the targets differ.

## Predict a future group's average

Keep **n** for the historical sample size. Use **m** for the number of future observations being averaged:

**x̄ ± t⋆ × s × √(1/n + 1/m)**

[NIST gives this future-mean formula](https://www.itl.nist.gov/div898/software/dataplot/refman1/auxillar/predlimi.htm). The multiplier still uses **n − 1** degrees of freedom because s comes from the history.

For **m = 9** future spacers:

```text
Margin = 2.064 × 2 × √(1/25 + 1/9)
       ≈ 1.6047 mm
Rounded endpoints: 48.40–51.60 mm
```

The target is the **average of nine new lengths**. These endpoints don't predict that all nine individual lengths will fit inside them.

For this history and level, the widths follow this order: population-mean CI < future-nine-mean PI < future-single PI. Averaging reduces future variation, while a finite future group still adds uncertainty beyond estimating μ.

## What “95%” actually covers

For the mean CI, imagine repeatedly drawing a new historical sample and calculating an interval. Under the model, about 95% of those intervals contain the same fixed μ. A calculated interval either contains μ or doesn't; the usual frequentist interpretation doesn't assign a 95% probability to that fixed parameter. [NIST explains this repeated-sample interpretation](https://www.itl.nist.gov/div898/handbook/eda/section3/eda352.htm).

For the single-observation PI, repeat the **whole experiment**: draw a fresh history, calculate its interval, then draw an independent future length. About 95% of those interval-and-future-length pairs cover the future length under the model. For a future-group PI, repeat the experiment with a new group and check whether its mean is covered.

A particular PI doesn't guarantee that 95% of all future spacers fall inside it. A PI for a group mean also doesn't promise that every group member will fit.

## More history helps, but individual variation remains

Compare two hypothetical histories with the same x̄ = 50 mm and s = 2 mm. Use the supplied rounded 95% multipliers:

| Historical n | t⋆ | Mean CI | Single future PI |
| --- | --- | --- | --- |
| 25 | 2.064 | 49.17–50.83 mm | 45.79–54.21 mm |
| 100 | 1.984 | 49.60–50.40 mm | 46.01–53.99 mm |

The mean CI narrows substantially. The single PI narrows only slightly: its **1/n** term gets smaller, but the **1** representing future individual variation remains. Collecting more history doesn't make the cutting process less variable.

We hold s fixed to isolate the formula's behavior. Actual new samples can have different means and SDs.

## Seven practice questions

For questions 1–6, use the independent, unchanged normal-population model. Give the target as well as any calculation. Try the questions before reading the answers.

1. Using the original spacer history, a manager asks for the population mean length. Another asks for the next spacer's length. Which interval fits each request?
2. A different history has x̄ = 80 mm, s = 4 mm, and n = 16. Use t⋆ = 2.131 for 95% intervals. Calculate the mean CI and the PI for one new length.
3. Return to x̄ = 50 mm, s = 2 mm, n = 25, and t⋆ = 2.064. Predict the average of **four** future spacers. Which number is n, and which is m?
4. For the original history, someone reports the single-observation PI's “width” as 4.21 mm. Find the full width and explain the mistake.
5. Does increasing historical n from 25 to 100, while holding s fixed, make the next spacer four times less variable?
6. Rewrite this interpretation: “Our 95% mean CI means 95% of spacers are between 49.17 and 50.83 mm.”
7. The machine is recalibrated after the historical sample. Someone uses the old mean and SD to predict tomorrow's spacer lengths with the formula above. Is the claimed 95% coverage justified by the old sample alone?

## Answers with the target attached

1. Use the **mean CI, 49.17–50.83 mm**, for μ and the **single-observation PI, 45.79–54.21 mm**, for the next length. The wording determines the target.
2. Mean margin: **2.131 × 4 / √16 = 2.131 mm**, giving **77.87–82.13 mm**. Single-observation margin: **2.131 × 4 × √(1 + 1/16) ≈ 8.7863 mm**, giving **71.21–88.79 mm**. Both center on 80 mm; prediction includes the new length's variation.
3. **n = 25**, **m = 4**. Margin: **2.064 × 2 × √(1/25 + 1/4) ≈ 2.2230 mm**. The PI is **47.78–52.22 mm** for the future four-spacer average. Don't replace n with four or combine them into 29.
4. The full width is **2 × 4.2098 ≈ 8.42 mm**. The reported 4.21 mm is the margin, or half-width.
5. **No.** More history improves estimation of the center. Individual variation remains, so the table's single PI barely changes.
6. “Using this procedure across repeated historical samples, about 95% of the intervals would contain the population mean.” Individual spacer coverage is a different question.
7. **No.** Recalibration may change the population's mean or variance. The old sample doesn't establish the distribution after the intervention, so the unchanged-population assumption needs fresh support.

Independence needs support from the data collection process too. If lengths drift together as a machine warms up, counting rows won't establish independent observations. The [sampling and assignment guide](/blog/random-sampling-vs-random-assignment/) helps separate study design from what a calculation can claim.

Regression uses the same mean-versus-new-observation distinction. At the same predictor value and confidence level, its prediction interval is wider than its corresponding mean-response CI. But regression requires its own formulas and model checks, as [Penn State's regression lesson](https://online.stat.psu.edu/stat501/Lesson03) explains. Don't apply the one-sample formulas above to a fitted slope or a prediction conditional on a predictor value.

## Keep the repair card smaller than the problem

After a missed question, save the distinction that caused the mistake. Keep the worked calculation in your practice notes.

| Front | Back |
| --- | --- |
| A prompt asks for one new observation. Mean CI or prediction interval? | Prediction interval: include future individual variation. |
| In a future-group PI, what do n and m count? | n counts historical observations; m counts future observations being averaged. |
| Why doesn't a larger historical n remove a single future value's variation? | It reduces uncertainty in the estimated center; the future value still varies around that center. |
| Does a prediction interval for a future group mean cover every group member? | No. Its target is the group's average. |

Use the [flashcard-writing guide](/blog/how-to-make-better-flashcards/) to keep each card answerable without seeing the original worksheet.

Then try a fresh problem. An unchanged normal process produces paper strips. Independent historical and future lengths come from the same population, whose mean and variance are unknown. The history has **x̄ = 120 cm, s = 3 cm, n = 36**. Use **t⋆ = 2.030** for 95% intervals. Find intervals for the population mean, one new strip, and the average of six new strips. Name each target before checking the answers below.

| Target | Margin (cm) | Interval (cm) |
| --- | --- | --- |
| Population mean | 2.030 × 3 / √36 = 1.015 | 118.985–121.015 |
| One new strip | 2.030 × 3 × √(1 + 1/36) ≈ 6.174 | 113.826–126.174 |
| Mean of six new strips | 2.030 × 3 × √(1/36 + 1/6) ≈ 2.685 | 117.315–122.685 |

Endpoints here are shown to three decimal places, keeping the mean CI's 1.015 cm margin visible. The history stays n = 36; only the future-group calculation uses m = 6.
