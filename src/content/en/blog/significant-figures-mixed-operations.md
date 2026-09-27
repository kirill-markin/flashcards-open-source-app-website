---
title: "Significant Figures in Mixed Operations: Worked Practice"
description: "Work through mixed-operation significant figures, keep extra calculator digits until the end, and diagnose rounding mistakes with explained practice problems."
date: "2026-09-28"
image: "/blog/significant-figures-mixed-operations.png"
keywords:
  - "significant figures in mixed operations"
  - "sig figs mixed operations"
  - "rounding intermediate calculations"
  - "significant figures practice"
  - "exact numbers"
---

For `(1.24 + 0.2) × 2.4`, rounding the sum before multiplying gives **3.4**. Keeping the calculator digits until the end gives **3.5**. Both answers have two significant figures, but early rounding has changed the result.

For significant figures in mixed operations, keep the calculator value and its reporting limit separate. Carry the extra digits into the next calculation, but use the limit to decide how many digits the final answer should show. The examples below work through both kinds of handoff: addition into multiplication, and multiplication into addition.

These are the usual introductory chemistry and physics rules: a classroom approximation to handling measurement uncertainty. The arithmetic exercises omit units to focus on rounding. Treat their inputs as measured unless explicitly marked exact; in a physical problem, any quantities you add or subtract must have compatible units.

![A woman marks an uncut wooden slat where it extends beyond a frame before trimming it to fit](/blog/significant-figures-mixed-operations.png)

## Keep the value and its reporting limit separate

Use normal order of operations. At each step, apply the relevant precision rule:

| Operation | Reporting limit |
| --- | --- |
| Addition or subtraction | The coarsest decimal place among the measured inputs |
| Multiplication or division | The fewest significant figures among the measured inputs |

For addition or subtraction, express quantities in the same unit first. These are the two basic rules explained in [OpenStax's measurement and significant figures chapter](https://openstax.org/books/chemistry-2e/pages/1-5-measurement-uncertainty-accuracy-and-precision).

Keep the unrounded result in calculator memory. Beside it, note its reporting limit. If the next step needs a significant-figure count, count the digits the intermediate result would have **at that reporting limit**, not every digit on the calculator. [Chemistry LibreTexts recommends carrying calculator digits through subsequent operations](https://chem.libretexts.org/Courses/Victor_Valley_College/VVC_Chemistry_100/01:_Measurement_and_Problem_Solving/1.04:_Significant_Figures_in_Calculations) and rounding the final answer. Extra carried digits prevent avoidable rounding error; they don't add measurement precision.

If a result lands exactly halfway between two rounding choices, follow your course's convention. OpenStax uses round-to-even for exact ties. If the first discarded digit is `5` and a nonzero digit follows it, the value is above halfway, so round up. None of the answers below depends on which exact-tie convention you use.

## Addition before multiplication: where 3.5 comes from

Work through `(1.24 + 0.2) × 2.4`:

| Value to carry | Reporting limit to remember |
| --- | --- |
| `1.24 + 0.2 = 1.44` | Tenths, because `0.2` ends at tenths. The sum would be reported as `1.4`: two significant figures. |
| `1.44 × 2.4 = 3.456` | Two significant figures: both the sum's reporting limit and `2.4` allow two. |

Report **3.5**. The `1.4` in the right column describes the precision; it isn't the value to multiply. Use `1.44` from the left column.

Two wrong answers reveal different mistakes. **3.4** comes from prematurely calculating `1.4 × 2.4 = 3.36`. **3** can come from choosing the smallest significant-figure count anywhere in the original expression: `0.2` has one. But `0.2` participates in addition first, so its decimal place determines the sum's reporting limit.

The [Newfoundland and Labrador chemistry curriculum's mixed-operation guidance](https://www.gov.nl.ca/education/files/k12_curriculum_guides_science_chem3202_app_b.pdf) likewise applies the rules in operation order while postponing rounding.

## Subtraction can leave fewer useful digits

Consider `(18.62 − 18.4) ÷ 3.12`.

| Value to carry | Reporting limit to remember |
| --- | --- |
| `18.62 − 18.4 = 0.22` | Tenths. Written at that precision, the difference is `0.2`: one significant figure. |
| `0.22 ÷ 3.12 = 0.0705128…` | One significant figure, set by the difference. |

Report **0.07**. The leading zeros locate the decimal point; they don't add significant figures. Writing `0.071` would claim two.

The original measurements had four and three significant figures. Subtraction cancels their shared leading digits, but the difference still has a tenths-place limit. That leaves just one significant figure for the division. Don't reuse the original count after subtracting.

## Multiplication before addition: convert the limit back to a place

Now calculate `(2.34 × 1.2) + 0.456`.

| Value to carry | Reporting limit to remember |
| --- | --- |
| `2.34 × 1.2 = 2.808` | Two significant figures. That would be `2.8`, ending at tenths. |
| `2.808 + 0.456 = 3.264` | Tenths, because the product is limited to tenths and `0.456` to thousandths. |

Report **3.3**. Carrying `2.808` doesn't give the product thousandths-place precision. When the operation switches to addition, translate its two-significant-figure limit into a decimal place.

For problems with units, track those alongside the numbers. Our [SI base and derived units practice](/blog/si-base-and-derived-units/) covers that separate part of the calculation.

## Exact counts and conversions don't impose a limit

Suppose three objects together have a measured mass of `7.26 g`. Their average mass is `7.26 g ÷ 3 = 2.42 g`. The count of three is exact, so it doesn't force a one-significant-figure answer. OpenStax distinguishes these exact counts and defined quantities from uncertain measurements.

A defined conversion works similarly: `0.0348 m × 100 cm/m = 3.48 cm`. The exact conversion factor preserves the measurement's three significant figures. See the [metric prefix guide](/blog/metric-prefixes-flashcards/) if the powers of ten are the difficult part.

Keep meaningful zeros when you report an answer. `4.0` records two significant figures; `4` records one. For a result of twelve hundred with three significant figures, write `1.20 × 10³` so the intended precision is clear.

## Try four problems before reading the answers

For each one, write the carried value and reporting limit of the first operation, then the final answer. The `4` in problem 4 is an exact count; every other input is measured.

1. `(5.67 + 0.8) ÷ 2.1`
2. `(12.46 − 12.1) × 4.23`
3. `(4.56 ÷ 1.2) + 0.347`
4. `(6.24 + 1.19) ÷ 4`, where four objects were counted exactly

### Answers and what to check

1. **3.1.** Carry `6.47`. Its limit is tenths, so the sum would be reported as `6.5`, with two significant figures. Use `6.47 ÷ 2.1 = 3.080952…` and report two significant figures. Writing `3.08` would overlook the limits of both the sum and the divisor.
2. **2.** Carry `0.36`. Its limit is tenths, so the difference would be reported as `0.4`, with one significant figure. Use `0.36 × 4.23 = 1.5228` and report one significant figure. An answer of `1.5` overlooks the precision lost in subtraction.
3. **4.1.** Carry `3.8` from the division. It has a two-significant-figure limit, which here means tenths. Use `3.8 + 0.347 = 4.147` and report tenths. `4.15` would give the quotient precision it didn't have.
4. **1.86.** Carry the sum `7.43`, limited to hundredths: three significant figures. Use `7.43 ÷ 4 = 1.8575` and report three significant figures. An answer of `2` would incorrectly treat the exact count as a one-significant-figure measurement.

## Make a card for the mistake you actually made

Keep full calculations as written practice. For recall, turn a specific missed decision into a short prompt:

| Front | Back |
| --- | --- |
| Why carry `1.44` when its reporting limit is tenths? | To avoid premature rounding; the extra digit doesn't increase precision. |
| What must you identify before adding an intermediate product? | The decimal place of its last reportable significant digit. |
| Does dividing by an exact count of four restrict the result to one significant figure? | No. The measured quantities set the limit. |

The [guide to making better flashcards](/blog/how-to-make-better-flashcards/) explains how to keep each prompt focused. After reviewing a missed rule, try a new calculation with different numbers and write the reporting limit before revealing the answer.
