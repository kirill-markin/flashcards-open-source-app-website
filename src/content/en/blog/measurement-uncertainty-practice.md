---
title: "Measurement Uncertainty Practice: Absolute and Percentage Rules"
description: "Carry absolute and percentage uncertainties through subtraction, division, powers, and exact counts, with a worked density example and explained practice answers."
date: "2026-10-27"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/f46ed5520ee471539ec034e9420317c178a174fedd695f90f3b8e5d266e02541.webp"
keywords:
  - "measurement uncertainty practice"
  - "percentage uncertainty"
  - "combining uncertainties"
  - "absolute uncertainty"
  - "uncertainty propagation practice"
---

Two volume readings can each have an uncertainty of ±0.20 mL while their difference has an uncertainty of ±0.40 mL. Subtracting the readings doesn't mean subtracting their uncertainties. That mistake becomes harder to spot when the difference goes straight into another calculation, such as density.

For measurement uncertainty practice, keep each calculated value's unit, absolute uncertainty, and percentage uncertainty together. The operation determines which uncertainty to combine. Subtraction followed by division needs both kinds, in that order.

![A craftsperson compares the fuzzy ends of two long felt strips with a small difference in length](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/f46ed5520ee471539ec034e9420317c178a174fedd695f90f3b8e5d266e02541.webp)

## Say what the ± means first

These original teaching problems use introductory, A-level-style linear uncertainty rules.

Unless stated otherwise, each ± amount is an **interval half-width**: `x ± Δx` permits values from `x − Δx` to `x + Δx`. Assume every combination within the input intervals is possible, without a shared offset or other relationship restricting them.

Adding absolute uncertainties gives the exact interval half-width for a sum or difference under these assumptions. For products, quotients, and powers, the rules are **first-order approximations**: they omit higher-order terms. With small relative uncertainties, these terms are small, but the results aren't generally exact limits. An endpoint check below shows the difference.

Use the supplied uncertainties; don't infer them from displayed digits. Nor does “±” alone establish a 68% or 95% probability. The [international definition of measurement uncertainty](https://jcgm.bipm.org/vim/en/2.26.html) allows different ways to characterize dispersion, so state the meaning.

## Choose the rule for this operation

**Absolute uncertainty** has the same unit as the value. **Relative uncertainty** is `Δx / |x|`; multiply by 100% to get percentage uncertainty. For `20.0 ± 0.4 mL`:

`Percentage uncertainty = (0.4 / 20.0) × 100% = 2.0%`

Use compatible units before adding or subtracting. In the table, `abs(x)` means the magnitude of x. Inputs and results must be nonzero for the relative formulas.

| Calculation | Rule used here |
| --- | --- |
| `z = a + b` or `z = a − b` | Add absolute uncertainties: `Δz = Δa + Δb` |
| `z = ab` or `z = a/b` | Add relative uncertainties: `Δz / abs(z) ≈ Δa / abs(a) + Δb / abs(b)` |
| `z = aⁿ`, with exact n | Multiply relative uncertainty by `abs(n)`: `Δz / abs(z) ≈ abs(n) Δa / abs(a)` |
| `z = ka`, with exact k | `Δz = abs(k)Δa`; percentage uncertainty stays unchanged |

These arithmetic rules appear in the [AQA practical handbook, page 46](https://filestore.aqa.org.uk/resources/physics/AQA-7407-7408-PHBK.PDF#page=46). [Eduqas practical guidance, page 6](https://www.eduqas.co.uk/media/zlzfdr42/general-student-practical-guidance.pdf#page=6) also covers powers and exact constants. For fractional powers here, take positive inputs.

A denominator interval containing zero prevents a simple finite quotient interval; these exercises avoid that case. Standard uncertainties require the different model explained after the answers.

## Carry the uncertainty through a density calculation

Suppose an object's mass is `48.0 ± 0.4 g`. Water in a measuring cylinder reads `30.0 ± 0.2 mL` before immersion and `50.0 ± 0.2 mL` afterward. Assume complete immersion, no trapped air or lost water, and the interval model above.

The displaced volume is a subtraction:

`V = 50.0 − 30.0 = 20.0 mL`

`ΔV = 0.2 + 0.2 = 0.4 mL`

An endpoint check explains the plus sign. The smallest difference is `49.8 − 30.2 = 19.6 mL`; the largest is `50.2 − 29.8 = 20.4 mL`. Thus `20.0 ± 0.4 mL` is the exact displacement interval under these assumptions.

Density uses division: `ρ = m/V`. Convert the **calculated volume's** absolute uncertainty to a percentage before combining it with the mass contribution.

| Quantity | Value | Absolute uncertainty | Percentage uncertainty |
| --- | --- | --- | --- |
| Initial reading | 30.0 mL | 0.2 mL | 0.6667…% |
| Final reading | 50.0 mL | 0.2 mL | 0.4% |
| Displaced volume | 20.0 mL | 0.4 mL | 2.0% |
| Mass | 48.0 g | 0.4 g | 0.8333…% |
| Density, first-order calculation | 2.4 g/mL | 0.068 g/mL | 2.8333…% |

For the last row:

`ρ = 48.0 / 20.0 = 2.4 g/mL`

`Percentage uncertainty in ρ ≈ 0.8333…% + 2.0% = 2.8333…%`

`Δρ ≈ 2.4 × (2.8333… / 100) = 0.068 g/mL`

Keep extra digits until reporting. One suitable classroom result is **ρ ≈ (2.40 ± 0.07) g/mL**: round the uncertainty to one significant figure and the value to the same decimal place. Follow your course's convention. The [mixed-operation significant figures guide](/blog/significant-figures-mixed-operations/) explains avoiding early rounding; here the calculated uncertainty determines the reporting place.

Adding `0.6667…% + 0.4%` from the original cylinder readings would give the wrong volume percentage. Subtraction needs absolute amounts first. The smaller difference has a larger relative uncertainty than either original reading.

## Six measurement uncertainty practice questions

Use the linear rules unless another convention is specified. Show operations and units before rounding. Try the set before reading the answers.

1. Add lengths `7.25 ± 0.04 cm` and `4.35 ± 0.05 cm`. Find the total and its absolute uncertainty.
2. Two position readings are `2.10 ± 0.02 m` and `2.40 ± 0.02 m`. Find their positive difference, its absolute uncertainty, and its percentage uncertainty. A student subtracts the two uncertainties and gets zero. Explain the mistake.
3. A distance is `18.0 ± 0.3 m` and a time is `6.00 ± 0.08 s`. Calculate speed and its approximate percentage and absolute uncertainties.
4. A square has side `5.00 ± 0.10 cm`. Calculate its area and approximate absolute uncertainty.
5. Exactly 20 complete oscillations take `31.6 ± 0.2 s`. Find the mean period and its absolute uncertainty. Does the count add an uncertainty contribution?
6. Repeated lengths are 12.2, 12.4, 12.3, and 12.5 cm. Calculate their mean and, using the specified **half-range convention**, their uncertainty estimate. Is that automatically the standard error of the mean?

### Answers with the rule shown

1. The total is `7.25 + 4.35 = 11.60 cm`. Add absolute uncertainties: `0.04 + 0.05 = 0.09 cm`. **Total = 11.60 ± 0.09 cm.**
2. The difference is `2.40 − 2.10 = 0.30 m`. Its absolute uncertainty is `0.02 + 0.02 = 0.04 m`; percentage uncertainty is `(0.04 / 0.30) × 100% ≈ 13.3%`. **Difference = 0.30 ± 0.04 m.** The readings can shift in opposite directions within their intervals, making the difference larger or smaller. Equal interval widths don't cancel.
3. Speed is `18.0 / 6.00 = 3.00 m/s`. Add percentages: `(0.3/18.0 + 0.08/6.00) × 100% = 3.0%`. Absolute uncertainty is approximately `3.00 × 0.030 = 0.09 m/s`. **Speed ≈ 3.00 ± 0.09 m/s.**
4. Area is `5.00² = 25.00 cm²`. The side's uncertainty is 2.0%; squaring gives approximately 4.0%. Thus `ΔA ≈ 25.00 × 0.040 = 1.0 cm²`. **Area ≈ 25 ± 1 cm²** with one-significant-figure uncertainty. The exponent multiplies the relative uncertainty; don't square the uncertainty amount.
5. `T = 31.6 / 20 = 1.58 s`; `ΔT = 0.2 / 20 = 0.01 s`. **T = 1.58 ± 0.01 s.** The exact count contributes no uncertainty. A possibly missed oscillation would require a different model.
6. Mean: `(12.2 + 12.4 + 12.3 + 12.5)/4 = 12.35 cm`. Half-range: `(12.5 − 12.2)/2 = 0.15 cm`. **Mean = 12.35 cm; half-range estimate = 0.15 cm.** This classroom convention appears in [AQA's handbook, page 43](https://filestore.aqa.org.uk/resources/physics/AQA-7407-7408-PHBK.PDF#page=43). It isn't automatically a standard error, confidence interval, or guaranteed bound on future readings. [Standard deviation versus standard error](/blog/standard-deviation-vs-standard-error/) explains those separate quantities.

## Check what the approximation leaves out

Take a rectangle with sides `8.00 ± 0.20 cm` and `6.00 ± 0.15 cm`, using the same interval assumptions.

`A = 8.00 × 6.00 = 48.00 cm²`

Each side has 2.5% uncertainty. The first-order area uncertainty is therefore `5.0% × 48.00 = 2.40 cm²`.

Exact endpoints give:

| Endpoint calculation | Area |
| --- | --- |
| Minimum: `7.80 × 5.85` | 45.63 cm² |
| Nominal: `8.00 × 6.00` | 48.00 cm² |
| Maximum: `8.20 × 6.15` | 50.43 cm² |

The exact deviations are **−2.37 and +2.43 cm²**, rather than a symmetric ±2.40 cm². Expanding the upper product gives `ab + bΔa + aΔb + ΔaΔb`; the first-order rule drops the final term. Here that term is `0.20 × 0.15 = 0.03 cm²`.

Label `48.00 ± 2.40 cm²` an approximation: its upper endpoint, 50.40 cm², falls below the exact maximum. For the full range permitted by the input intervals, calculate the extrema. This distinction also applies to the density uncertainty above.

## Standard uncertainties use a different model

Suppose the same cylinder readings instead come with **uncorrelated standard uncertainties** of `u₁ = u₂ = 0.20 mL`. Those numbers now describe estimated standard deviations, rather than the interval half-widths used above.

For the difference, the combined standard uncertainty is:

`u(V) = √(u₁² + u₂²) = √(0.20² + 0.20²) ≈ 0.283 mL`

[NIST's combination rules](https://physics.nist.gov/cuu/Uncertainty/combination.html) add variances for uncorrelated inputs and include covariance when inputs are correlated. Having two readings doesn't establish that they are uncorrelated. A shared additive zero offset, for example, cancels in their difference if it is the same offset in both readings; other uncertainty contributions may remain.

The answers 0.40 mL and 0.283 mL describe different quantities under different stated models. Check the meaning of the inputs before choosing a formula. For uncertainty versus actual differences from a reference, see [accuracy and precision practice](/blog/accuracy-vs-precision/).

## Review the decision you missed

Keep full calculations on paper. Use short recall cards for recurring rule mistakes. Recalling these decisions in spaced reviews supports long-term retention; then try another full problem with changed numbers.

| Front | Back |
| --- | --- |
| Under linear interval rules, how do uncertainties combine when subtracting two readings? | Add their absolute uncertainty widths; subtract the values. |
| A calculated volume is 20.0 ± 0.4 mL. What percentage uncertainty enters a later quotient? | 2.0%, calculated as 0.4 / 20.0 × 100%. |
| What happens to percentage uncertainty when a quantity is squared, to first order? | Multiply it by 2. |
| Does an exactly counted divisor add percentage uncertainty? | No. Divide the value and absolute uncertainty by that count. |
| Is adding percentage uncertainties an exact product interval calculation? | No. It is first-order; exact extrema can be asymmetric. |

For more short calculations and mistake repairs, use the [measurement uncertainty flashcards](/catalog/packages/measurement-uncertainty-flashcards/). They practice absolute and percentage uncertainties, mixed-step handoffs, and approximation limits under an explicitly stated classroom linear interval model. Products, quotients, and powers use first-order estimates; keep full worked calculations in your practice work.

The [flashcard-writing guide](/blog/how-to-make-better-flashcards/) can help you shorten a missed decision into a self-contained prompt. Before the next calculation, write what each ± means and which operation comes next.

*Production note: AI tools substantially assisted with research, writing, and exercise construction. Calculations were checked using decimal arithmetic and a square-root calculation. These are hypothetical exercises; no apparatus measurements, classroom trials, or learner-outcome tests were performed. The illustration is AI-generated.*
