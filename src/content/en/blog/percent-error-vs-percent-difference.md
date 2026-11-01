---
title: "Percent Error vs Percent Difference: Practice with Answers"
description: "Choose the right denominator for percent error or percent difference, then try original lab-style problems on units, signs, zero references, and interpretation."
date: "2026-11-01"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/950bb872ad444cc1df05784a96a73f60e6a7cb5b7ef5f0cb56c8589369b5021a.webp"
keywords:
  - "percent error vs percent difference"
  - "percent error formula"
  - "percent difference formula"
  - "percent error practice problems"
  - "accepted value"
  - "percentage error"
---

Two numbers, 38.0 g and 40.0 g, can give 5.00%, 5.26%, or 5.13%. The arithmetic changes because the numbers have different jobs: one might be an accepted value, or both might be measurements with equal status. Choosing that role comes before choosing a denominator.

Before reaching for a formula, write “measurement,” “reference,” or “peer measurement” beside each value. That small step decides which comparison makes sense. The worked examples below use it before every calculation.

![A furniture restorer checks a brass drawer handle against existing mounting holes while an identical handle rests on the bench](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/950bb872ad444cc1df05784a96a73f60e6a7cb5b7ef5f0cb56c8589369b5021a.webp)

## Choose the comparison before calculating

Use **percent error** to compare a measurement with a supplied reference or accepted value. Use **percent difference** here to compare two measurements of the same quantity when neither is designated as the reference. [Clemson's physics tutorial](https://science.clemson.edu/physics/labs/tutorials/error/index.html) makes this classroom distinction.

The formulas below are for **positive ratio-scale quantities**, such as mass, length, or speed. These have a meaningful zero: 40 g really is twice 20 g. Convert both values to the same unit first. Celsius temperatures and arbitrary signed values need more care; shifting the zero or letting positive and negative values cancel in the denominator can make this comparison misleading or undefined.

Let `M` be the measured value, `R` the positive reference, and `A` and `B` two positive peer measurements. `abs(x)` means the magnitude of `x`, ignoring its sign.

| Comparison | Formula used in this article | Denominator |
| --- | --- | --- |
| Percent error, also called percentage error | `abs(M − R) / R × 100%` | The reference value |
| Percent difference | `abs(A − B) / ((A + B) / 2) × 100%` | The mean of the two measurements |

In each formula, the gap and denominator have the same unit. Their units cancel, leaving a percentage that describes the gap relative to that denominator.

These percent error and percent difference formulas give **unsigned** results. Some courses retain the sign: [Northern Kentucky University's lab guidelines](https://websites.nku.edu/~nutters/lab_writeup_f02.html), for example, use signed formulas. Follow the convention in your assignment. For a positive reference, signed percentage error is `(M − R) / R × 100%`: a negative result means below the reference; a positive result means above it. The [international definition of measurement error](https://jcgm.bipm.org/vim/en/2.16.html) also retains direction as measured value minus reference value.

## Keep the numbers, switch their roles

Suppose the same two values appear in three different problem statements.

| What the problem says | Calculation | Result |
| --- | --- | --- |
| Measurement 38.0 g; reference 40.0 g | `2.0 / 40.0 × 100%` | 5.00% error |
| Measurement 40.0 g; reference 38.0 g | `2.0 / 38.0 × 100%` | About 5.26% error |
| Peer measurements 38.0 g and 40.0 g | `2.0 / 39.0 × 100%` | About 5.13% difference |

The gap is 2.0 g in every row. Reversing measurement and reference changes percent error because the denominator changes. Swapping the two peer measurements leaves their unsigned percent difference unchanged: the mean stays 39.0 g, and the absolute gap stays 2.0 g.

The mean gives both peer measurements equal status in the calculation. It doesn't become an accepted value just because you used it as the denominator. Both measurements could share an offset.

Keep extra calculator digits until the end. Results here use two decimal places where useful for comparison; follow your course's significant-figure and reporting rules for a lab submission.

## What the percentage leaves out

A small percent difference tells you that two readings are close relative to their mean. It doesn't establish accuracy, identify the cause of a discrepancy, or prove statistical agreement. The [accuracy and precision examples](/blog/accuracy-vs-precision/) show how readings can cluster closely while missing a reference. Assessing statistical agreement requires uncertainty information and an appropriate model.

There is no universal acceptable percent error. Whether a discrepancy meets the experiment's requirements depends on those requirements and the relevant uncertainties.

**Percent error is undefined when the reference is zero**, even if the measurement is also zero. The formula would require division by zero; `0/0` doesn't define a percentage either. Report the gap in the original unit and explain the limitation. Don't replace the denominator with the measurement or an invented tiny number. A nonzero reference very close to zero can also turn a small absolute gap into a large percentage, so report that gap alongside the percentage.

An uncertainty is a separate quantity. The [international uncertainty definition](https://jcgm.bipm.org/vim/en/2.26.html) concerns the dispersion of values attributed to the quantity being measured. A supplied ± amount describes uncertainty under a stated interpretation; it isn't the observed gap from a reference. The last exercise separates the two. For calculations that combine uncertainties, use the stated models in [measurement uncertainty practice](/blog/measurement-uncertainty-practice/).

## Eight practice problems

These original, hypothetical exercises use exact references for the arithmetic. Use unsigned percentages unless a question requests a signed answer. Before calculating, name the denominator and its unit.

1. A mass measurement is 18.6 g; the accepted value is 20.0 g. Find the percent error.
2. Two methods give speeds of 2.40 m/s and 2.60 m/s. Neither is the reference. Find their percent difference.
3. A balance reports 0.0480 kg for an object with an accepted mass of 50.0 g. Find the percent error after converting units.
4. A measured mass is 3.50 g against a 1.40 g reference. Find the percent error. Must it be below 100%?
5. A length is measured as 19.2 cm against a 20.0 cm reference. Give both the unsigned percent error and the signed percentage error under the `(M − R)/R` convention.
6. During a zero check, an empty balance reads 0.03 g against a 0 g reference. Can you calculate percent error? Would a reading of exactly 0 g make it defined?
7. Two volume measurements are 52.0 mL and 52.4 mL. Calculate their peer percent difference. You then learn that the reference is 50.0 mL. Calculate each percent error and explain what the small peer difference missed.
8. A length is reported as `12.4 ± 0.2 cm`; the supplied ± amount is an interval half-width. The reference is 12.0 cm. Calculate the central value's percent error and its percentage uncertainty. Do those percentages mean the same thing?

### Worked answers

1. **7.00% error.** The reference is the denominator: `abs(18.6 − 20.0) / 20.0 × 100% = 1.4 / 20.0 × 100% = 7.00%`. The reading is 1.4 g below the reference; the unsigned percentage doesn't retain that direction.
2. **8.00% difference.** The denominator is the mean: `(2.40 + 2.60)/2 = 2.50 m/s`. The gap is 0.20 m/s, so `0.20 / 2.50 × 100% = 8.00%`. Using either individual speed as the denominator would give that reading the role of reference.
3. **4.00% error.** Convert first: `0.0480 kg = 48.0 g`. Then `abs(48.0 − 50.0) / 50.0 × 100% = 2.0 / 50.0 × 100% = 4.00%`. Subtracting 0.0480 from 50.0 before conversion mixes units.
4. **150% error.** The denominator is the 1.40 g reference: `abs(3.50 − 1.40) / 1.40 × 100% = 2.10 / 1.40 × 100% = 150%`. Percent error can exceed 100% because the gap itself can be larger than the reference.
5. **Unsigned: 4.00%; signed: −4.00%.** Both use the 20.0 cm reference as denominator. The unsigned calculation is `0.8 / 20.0 × 100% = 4.00%`. Keeping the subtraction's sign gives `(19.2 − 20.0) / 20.0 × 100% = −4.00%`, indicating a reading below the reference.
6. **Percent error is undefined in both cases.** The first reading has a signed error of +0.03 g and an absolute gap of 0.03 g. An exact zero reading has a zero gap, but `0/0` still doesn't define a percentage. State the gap and the zero-reference limitation.
7. **About 0.77% difference; errors of 4.00% and 4.80%.** The peer mean is 52.2 mL: `0.4 / 52.2 × 100% ≈ 0.77%`. Comparing each reading with the reference gives `2.0 / 50.0 × 100% = 4.00%` and `2.4 / 50.0 × 100% = 4.80%`. Both readings are high despite their small peer difference. A shared bias is possible, but these values alone don't establish its cause or demonstrate statistical agreement.
8. **About 3.33% error and 1.61% uncertainty.** Percent error uses the 12.0 cm reference: `0.4 / 12.0 × 100% ≈ 3.33%`. Percentage uncertainty expresses the supplied half-width relative to the 12.4 cm reported value: `0.2 / 12.4 × 100% ≈ 1.61%`. The numerators and denominators differ because the percentages answer different questions. The stated interval is 12.2–12.6 cm, which excludes the reference. That interval alone supplies neither a confidence level nor a statistical significance test.

## Practice choosing the denominator

After solving, cover the answers and explain why each denominator belongs there. A short recall card can isolate that choice: “Two equal-status mass readings are 38.0 g and 40.0 g. What denominator belongs in their percent difference?” Answer: “39.0 g, their mean.” Keep the values' roles in the prompt so the answer follows from the problem.

If you chose the denominator correctly but mixed units, practice the conversion next. The [flashcard-writing guide](/blog/how-to-make-better-flashcards/) explains how to keep prompts self-contained. Then try fresh numerical problems: you need to carry the choice through to a calculation as well as recognize the formula.

*Production note: AI tools substantially assisted with source research, writing, and construction of these hypothetical exercises. The numerical answers were checked with exact fraction arithmetic. The examples do not report apparatus measurements, classroom trials, or learner-outcome testing. The illustration was AI-generated.*
