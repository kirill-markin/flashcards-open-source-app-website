---
title: "pH Significant Figures: Logarithms and Antilogs Practice"
description: "Learn how significant figures become pH decimal places, reverse the rule for concentration, and check rounding with explained practice problems."
date: "2026-10-20"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/411a417dd915f034354e1a3bfa48f693a2127b8e0abca1ae9e9fed33b72f628c.webp"
keywords:
  - "pH significant figures"
  - "logarithm significant figures"
  - "antilog significant figures"
  - "pH decimal places"
  - "concentration from pH"
---

The concentrations `4.7 × 10⁻⁴ M` and `4.70 × 10⁻⁴ M` give the same calculator value for pH: `3.327902…`. Their reported answers differ: **3.33** and **3.328**. The extra zero changes the stated precision, even though it doesn't change the numerical concentration.

For **pH significant figures**, the concentration's significant figures become decimal places in pH. Going back from pH to concentration reverses the rule. Keep two notes beside your calculation: the numerical result and the precision the input allows. A calculator remembers the first; you need to track the second.

![A gardener examines the finer veins of one green leaf through a handheld magnifying glass](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/411a417dd915f034354e1a3bfa48f693a2127b8e0abca1ae9e9fed33b72f628c.webp)

## Change what you count at the logarithm

Use these classroom relationships for ideal dilute aqueous solutions:

**pH ≈ −log₁₀[H₃O⁺]**

**[H₃O⁺] ≈ 10^(−pH) M**

Insert the numerical concentration in **mol/L**, also written **M**: enter `0.000470` for `0.000470 mol/L`. This concentration approximation replaces the activity used in the [formal definition of pH](https://goldbook.iupac.org/terms/view/P04524). The exercises below concern calculated answers, not pH meter readings.

| Direction | Count in the input | Report in the answer |
| --- | --- | --- |
| Concentration → pH | Significant figures in concentration | The same number of decimal places in pH |
| pH → concentration | Decimal places in pH | The same number of significant figures in concentration |

[OpenStax's pH and pOH section](https://openstax.org/books/chemistry-2e/pages/14-2-ph-and-poh) covers these calculations and the logarithm reporting rule. A pH of `3.328` calls for **three** significant figures in the concentration you calculate from it. Counting all four digits in the pH gives the wrong limit.

This is an introductory reporting convention, not a full uncertainty calculation. [Manchester University's analytical chemistry material](https://chem.libretexts.org/Courses/Manchester_University/CHEM_235:_Analytical_Chemistry_(Davis)/01:_All_Measurements_Are_Uncertain/1.02:_Measurements_in_Analytical_Chemistry) explains both logarithm precision and the limits of significant-figure rules. If a problem supplies explicit uncertainties, follow your course's uncertainty method.

## Same value, different precision

Set the reporting limit before rounding:

| Given [H₃O⁺] | Input significant figures | Calculator pH | Reported pH |
| --- | --- | --- | --- |
| `4.7 × 10⁻⁴ M` | 2 | `3.327902…` | **3.33** |
| `4.70 × 10⁻⁴ M` | 3 | `3.327902…` | **3.328** |
| `0.000800 M` | 3 | `3.096910…` | **3.097** |

In `0.000800`, the leading zeros position the decimal point. The `8` and its two trailing zeros give three significant figures. Scientific notation makes the count easier to see: `8.00 × 10⁻⁴ M`. The exponent doesn't add significant figures. Use the [scientific notation practice](/blog/scientific-notation-practice/) if these counts need work.

The first two rows describe equal numerical values with different stated precision. Adding a zero yourself doesn't improve a measurement; these are separately supplied inputs. A calculator treats them identically, so its display can't choose the reporting limit for you.

Check the scale as well. `4.70 × 10⁻⁴` lies between `10⁻⁴` and `10⁻³`, so its pH must lie between 3 and 4. An answer near `−3.328` points to a sign mistake before rounding even matters.

## Reverse the rule for concentration from pH

An antilog undoes a logarithm. Calculate `10^(−pH)`, then round the concentration using the number of decimal places in the supplied pH.

| Given pH | Input decimal places | Calculator [H₃O⁺] | Reported [H₃O⁺] |
| --- | --- | --- | --- |
| `3.400` | 3 | `3.981071… × 10⁻⁴ M` | **3.98 × 10⁻⁴ M** |
| `3.4` | 1 | `3.981071… × 10⁻⁴ M` | **4 × 10⁻⁴ M** |

The zeros in `3.400` count as decimal places. Both rows produce the same calculator value, but their final concentrations carry three and one significant figures, respectively.

Use the calculator's `10ˣ` function with the whole negative pH as the exponent. `10^(−3.400)` differs from `−10^(3.400)`. An `EXP` or `EE` key usually enters scientific notation: `4.70 EE −4` enters `4.70 × 10⁻⁴`. It isn't the inverse-log function. Check the expression your calculator displays.

## Try the precision worksheet

Work without the answer key first. For each calculation, write the required decimal-place or significant-figure count, keep extra calculator digits, and round once at the end. Treat every supplied value as having the stated finite precision. The ion concentrations are equilibrium concentrations in the model above.

1. Find pH for `[H₃O⁺] = 2.35 × 10⁻⁵ M`. Someone reports `4.63`. Identify what was lost.
2. Find pH for `[H₃O⁺] = 0.00620 M`. Explain whether its leading and trailing zeros affect your count.
3. Find `[H₃O⁺]` for pH `2.80`. Choose the correct reporting precision for your concentration.
4. Find `[H₃O⁺]` for pH `6.040`. Someone reports `9.120 × 10⁻⁷ M` after counting all four pH digits. Diagnose the answer.
5. Find `[H₃O⁺]` for pH `4.00`. Choose between `1 × 10⁻⁴`, `1.0 × 10⁻⁴`, and `1.00 × 10⁻⁴ M`.
6. For pOH `1.73`, use `[OH⁻] ≈ 10^(−pOH) M`. Give the answer and name the ion whose concentration you've found.
7. Find pH for `[H₃O⁺] = 7.25 × 10⁻⁴ M`. Decide whether the final zero belongs in `3.140`.

### Answers and the decision behind each one

1. **pH 4.629.** Three concentration significant figures require three pH decimal places. Round `4.628932…` accordingly. `4.63` drops one decimal place of supplied precision.
2. **pH 2.208.** The concentration has three significant figures: `6`, `2`, and the trailing `0`. The leading zeros don't count. Round `2.207608…` to three decimal places.
3. **1.6 × 10⁻³ M.** Two pH decimal places require two concentration significant figures. The calculator value is `1.584893… × 10⁻³ M`; the next digit rounds the `5` up to `6`.
4. **9.12 × 10⁻⁷ M.** Round `9.120108… × 10⁻⁷ M` to three significant figures. The three decimal places in `6.040` set the count; its integer digit doesn't add a fourth.
5. **1.0 × 10⁻⁴ M.** The calculator lands on a power of ten, but `4.00` still has two decimal places. `1 × 10⁻⁴ M` loses a significant figure; `1.00 × 10⁻⁴ M` claims an extra one.
6. **[OH⁻] ≈ 1.9 × 10⁻² M.** Round `1.862087… × 10⁻² M` to two significant figures. This is hydroxide concentration. Taking the antilog of negative pOH hasn't given hydronium concentration.
7. **pH 3.140.** Three significant figures require three decimal places. `3.139661…` rounds up to `3.140`; removing its zero would discard the third decimal place.

## Carry the precision note into longer problems

If dilution or an equilibrium calculation comes before the logarithm, establish the concentration's reporting limit first. Carry its extra calculator digits into the log, then use that limit to choose pH decimal places. The [mixed-operations significant figures guide](/blog/significant-figures-mixed-operations/) covers those earlier arithmetic handoffs.

Check the chemical input too. Total acid concentration can differ from equilibrium hydronium concentration; the [strong vs weak acids practice](/blog/strong-vs-weak-acids/) explains that distinction. Correct rounding can't repair a logarithm of the wrong quantity.

For recall practice, save the decision you missed as one short prompt: “pH 4.00 gives how many concentration significant figures?” Answer: “Two; write `1.0 × 10⁻⁴ M`.” Put it in Nibomo or a paper deck, then solve a fresh calculation without the answer visible. The [flashcard-writing guide](/blog/how-to-make-better-flashcards/) helps keep that prompt focused.

*AI tools assisted substantially with source research, writing, editorial revision, and constructing the original exercises. Arithmetic was checked against the stated concentration model; these problems haven't been validated in a classroom or laboratory. The illustration is AI-generated.*
