---
title: "Enzyme Inhibition Practice: Km, Vmax, and Rate Tables"
description: "Solve enzyme inhibition practice problems with original rate tables, Km and Vmax calculations, explained answers, and checks for misleading data."
date: "2026-10-18"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/fd2bb652d94d39980d576e84d2434aff215ba84c5cb0822922ade4ad7dc4d219.webp"
keywords:
  - "enzyme inhibition practice problems"
  - "competitive vs noncompetitive inhibition"
  - "apparent Km and Vmax"
  - "uncompetitive vs mixed inhibition"
---

Two inhibitors both cut an enzyme's initial rate from 60 to 30 μM/min at the same substrate concentration. That single result doesn't tell you whether they change the same kinetic parameter.

These seven enzyme inhibition practice problems use original, fictional numbers. Work on paper, covering each answer before you try it. Explain what the rate table does and doesn't establish.

![A volunteer uses one citrus press beside a second press with its lever removed, with a crate of oranges waiting](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/fd2bb652d94d39980d576e84d2434aff215ba84c5cb0822922ade4ad7dc4d219.webp)

## Keep the model beside your calculations

Use the Michaelis–Menten equation:

`v = Vmax × [S] / (Km + [S])`

Here, `v` means initial rate, `[S]` means substrate concentration, and `Vmax` is the limiting rate approached as substrate concentration increases. `[S]` and `Km` have units of **μM**; rates have units of **μM/min**. [TU Delft's enzymology exercises](https://interactivetextbooks.tudelft.nl/biochemistry/content/exercises.html) use this initial-rate relationship.

Assume reversible inhibition of a single-substrate reaction under steady-state initial-rate conditions, with no cooperativity or substrate inhibition. Keep total enzyme concentration, pH, temperature, and measurement method the same across series. Within each inhibited series, inhibitor concentration stays fixed. All supplied rates are exact model values, not experimental observations.

For an inhibited series, `Km` and `Vmax` below mean its **apparent** parameters. At `[S] = Km`, that series runs at half of **its own** Vmax. Km is a kinetic parameter, not automatically a substrate-binding affinity constant. For the simplest uninhibited mechanism, Km approximates the substrate dissociation constant when substrate dissociation is much faster than catalysis (`k−1 ≫ kcat`), as described in [IUPAC's kinetics definition](https://goldbook.iupac.org/terms/view/M03892).

Use this reference when checking:

| Ideal pattern | Apparent Km vs control | Apparent Vmax vs control |
| --- | --- | --- |
| Competitive | Higher | Unchanged |
| Pure noncompetitive | Unchanged | Lower |
| Uncompetitive | Lower by the same factor as Vmax | Lower |
| Mixed, excluding the pure noncompetitive case | Higher, or decreased by a smaller percentage than Vmax | Lower |

The competitive and pure noncompetitive patterns are described in [Ahern, Rajagopal, and Tan's enzyme-control lesson](https://bio.libretexts.org/Courses/Wheaton_College_Massachusetts/Principles_of_Biochemistry/07:_Enzymes_catalysis_and_kinetics/7.04:_Control_of_Enzymatic_Activity). For the equal-factor requirement and mixed inhibition, see [Jakubowski and Flatt's inhibition equations](https://bio.libretexts.org/Workbench/Biochem_Remix_Acevedo/06:_Enzyme_Activity/6.04:_Enzyme_Inhibition). Compatibility with a pattern doesn't prove a molecular binding site.

## 1. One concentration hides the difference

The control has **Km = 4 μM** and **Vmax = 120 μM/min**. Here are two concentrations for the control and each inhibitor:

| [S] (μM) | Control rate (μM/min) | X rate (μM/min) | Y rate (μM/min) |
| --- | ---: | ---: | ---: |
| 4 | 60 | 30 | 30 |
| 12 | 90 | 60 | 45 |

**Question:** Using only the first row, can you conclude that X and Y are both pure noncompetitive inhibitors?

**Answer:** No. A 50% rate reduction at one substrate concentration doesn't establish a 50% reduction in Vmax. Substituting the first row gives `30 = 4Vmax/(Km + 4)`, or `Vmax = 7.5Km + 30`. Many parameter pairs satisfy it: `(Km, Vmax) = (4, 60)` and `(12, 120)` both work.

The second row separates those possibilities: X gives 60 while Y gives 45. Equal effects at one concentration needn't persist at another.

## 2. Solve X from two exact points

**Question:** Find X's apparent Km and Vmax using both rows. Which ideal pattern fits relative to the control?

**Answer:** Write `K` for X's Km and `V` for its Vmax:

`30 = 4V/(K + 4)` → `V = 7.5K + 30`

`60 = 12V/(K + 12)` → `V = 5K + 60`

Set the right sides equal:

`7.5K + 30 = 5K + 60`

`2.5K = 30`, so **K = 12 μM**.

Then `V = 5(12) + 60 = 120 μM/min`.

X triples apparent Km while leaving Vmax unchanged: **compatible with competitive inhibition**. Check the fitted points: `120(4)/(12 + 4) = 30` and `120(12)/(12 + 12) = 60`.

## 3. Fit Y, then predict a reserved row

**Question:** Solve Y's parameters from the first two rows. Before looking at the check table, predict the control, X, and Y rates at **[S] = 36 μM**.

**Answer:** Y's equations give:

`30 = 4V/(K + 4)` → `V = 7.5K + 30`

`45 = 12V/(K + 12)` → `V = 3.75K + 45`

Therefore, `3.75K = 15`: **Km = 4 μM**, then **Vmax = 60 μM/min**. Its pattern is compatible with pure noncompetitive inhibition.

Substitute 36 into each fitted equation:

| Series | Prediction at [S] = 36 μM | Reserved check rate (μM/min) |
| --- | --- | ---: |
| Control | 120 × 36 / (4 + 36) | 108 |
| X | 120 × 36 / (12 + 36) | 90 |
| Y | 60 × 36 / (4 + 36) | 54 |

All three predictions match. The reserved row checks a concentration unused in solving the parameters; it doesn't provide independent experimental evidence, since these numbers were constructed from the models.

## Four more problems to try

4. A student calls X's last listed rate, **90 μM/min**, its Vmax. Calculate what fraction of X's fitted Vmax this is. Another student says Y's rate cannot increase when more substrate is added. Use the table to check that claim.
5. A different control has **Km = 10 μM, Vmax = 100 μM/min**. Classify candidates A–D below by ideal kinetic pattern. Calculate each parameter's ratio to its control value before naming the pattern.
6. At what substrate concentration does candidate C run at **25 μM/min**? Explain why using half the control's Vmax would give the wrong target.
7. Someone replaces Y's reserved rate at `[S] = 36 μM` with **60 μM/min**, keeping its first two rows unchanged. Can the fitted Y model reproduce all three exact points? What should you conclude?

| Candidate | Apparent Km (μM) | Apparent Vmax (μM/min) |
| --- | ---: | ---: |
| A | 30 | 100 |
| B | 10 | 50 |
| C | 5 | 50 |
| D | 8 | 50 |

### Answers and checks

**4. X is at 75% of its Vmax:** `90/120 = 0.75`. The largest listed rate isn't necessarily a plateau. At any finite positive `[S]`, X's factor `[S]/(12 + [S])` remains below one. Its model approaches 120 without reaching it at finite substrate concentration.

Y rises from 30 to 45 to 54 as substrate increases. Its fitted limiting rate remains 60, below the control's 120. Increasing a rate and restoring the control's limiting rate are different claims.

**5. Check the ratios:**

| Candidate | Km/control Km | Vmax/control Vmax | Compatible pattern |
| --- | ---: | ---: | --- |
| A | 3 | 1 | Competitive |
| B | 1 | 0.5 | Pure noncompetitive |
| C | 0.5 | 0.5 | Uncompetitive |
| D | 0.8 | 0.5 | Mixed |

D is the trap: both parameters fall, but they don't fall by the same factor. Calling every “both down” pair uncompetitive loses that distinction. C preserves `Km/Vmax`: `5/50 = 10/100`. D gives `8/50`, which differs from `10/100`.

**6. [S] = 5 μM.** Candidate C's own Vmax is 50, so 25 is its half-maximum rate. Direct substitution gives `50(5)/(5 + 5) = 25`. Half the control's Vmax is 50; that equals C's limiting rate and cannot be reached at finite substrate concentration in this model.

**7. The replacement contradicts the fitted model.** Its first two exact points fix `Km = 4`, `Vmax = 60`, predicting `60(36)/40 = 54`, not 60. Don't rename the inhibitor to make the row fit. Check transcription, conditions, and model assumptions. Real parameter estimation needs multiple concentrations, replicates, and suitable fitting to rates, rather than solving two noisy points or relying on a reciprocal plot.

## Make a card for the missed decision

Use complete problems for algebra. If one distinction keeps causing trouble, save it on a focused card in Nibomo or on paper:

| Front | Back |
| --- | --- |
| Two inhibitors give the same rate at one [S]. Does that establish equal apparent Km and Vmax? | No. Multiple parameter pairs can produce that rate. Compare more concentrations. |
| Apparent Km is 0.8× control and Vmax is 0.5× control. Is “both down” enough for uncompetitive? | No. Uncompetitive requires equal factors in this ideal model; this pair fits mixed inhibition. |
| Which Vmax belongs in the half-maximum definition of an inhibited series' apparent Km? | That inhibited series' own Vmax. |

The [better-flashcards guide](/blog/how-to-make-better-flashcards/) explains how to keep one decision per prompt. After reviewing a card, redo its missed calculation from a blank page.

*Production note: This worksheet was created with substantial AI assistance in research, drafting, editing, and exercise construction. The hero image is AI-generated. Exact fraction arithmetic checked the fictional model values. These checks are not laboratory results, human review, classroom validation, or evidence of learning gains.*
