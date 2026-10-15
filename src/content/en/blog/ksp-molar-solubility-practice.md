---
title: "Ksp and Molar Solubility: Worked Examples and Practice"
description: "Practice Ksp and molar solubility with ion-count tables, worked examples, common-ion calculations, and explained answers that check each approximation."
date: "2026-10-16"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/2920ac871b845f21d6d8015b31d1ba6b84cfacd814e9efd34212420df1c4dd54.webp"
keywords:
  - "Ksp molar solubility practice"
  - "calculate molar solubility from Ksp"
  - "Ksp common ion effect"
  - "Ksp practice problems"
  - "solubility product expression"
---

If one mole of BX₂ dissolves, it releases one mole of B²⁺ and two moles of X⁻. Calling both ion concentrations `s` loses that second X⁻ before the calculation even starts. Write an ion-count table first, then put its equilibrium row into the Ksp expression.

These eight Ksp and molar solubility practice problems start with four worked examples, followed by four to try yourself. The original exercise inputs are chosen to expose setup mistakes: counting ions, placing a common-ion concentration in the right term, and accepting an approximation before checking it.

![A florist holds one orange and two white daisies, with matching small bouquets on the counter and extra white flowers in a bucket](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/2920ac871b845f21d6d8015b31d1ba6b84cfacd814e9efd34212420df1c4dd54.webp)

## What the numbers mean

**Molar solubility, `s`, is the moles of salt formula units dissolved per liter of saturated solution.** Brackets such as `[X⁻]` mean an ion's molar concentration. In our concentration model, Ksp is the product of the equilibrium ion concentrations, each raised to its coefficient in the balanced dissolution equation. The pure solid has no term in that expression. [OpenStax's solubility-equilibrium lesson](https://openstax.org/books/chemistry-2e/pages/15-1-precipitation-and-dissolution) explains these conventions.

Every salt below is fictional. The letters are placeholders, including those that happen to match element symbols. All supplied numbers are invented exercise inputs at **25 °C**, not measured data. Assume constant solution volume, excess solid remaining at equilibrium, complete dissociation of the dissolved salt, and no competing acid–base or complexation reactions. Common-ion solutions also contain spectator counterions from fully dissolved salts; we omit those counterions from the tables.

Thermodynamic Ksp uses **activities**, as the [IUPAC definition of solubility product](https://goldbook.iupac.org/terms/view/S05742) states. Here, we use the introductory ideal-solution approximation: insert numerical molarities into the expressions and report `s` in mol/L, also written M. Nonideal solution effects are outside this worksheet. In calculator notation, `3.20e-11` means 3.20 × 10⁻¹¹; `sqrt` means square root.

## 1. A 1:1 salt in pure water

Find the molar solubility of AX, with **Ksp = 9.00 × 10⁻¹⁰**.

`AX(s) ⇌ A⁺(aq) + X⁻(aq)`

| Concentration (M) | A⁺ | X⁻ |
| --- | --- | --- |
| Initial | 0 | 0 |
| Change | +s | +s |
| Equilibrium | s | s |

The expression is `Ksp = [A⁺][X⁻]`, so:

`s^2 = 9.00e-10`

`s = sqrt(9.00e-10) = 3.00e-5 M`

Check: `(3.00e-5)*(3.00e-5) = 9.00e-10`.

The molar solubility is **3.00 × 10⁻⁵ M**. Each ion concentration has that same value because AX releases one of each ion. Adding the concentrations gives 6.00 × 10⁻⁵ M, which counts dissolved ions rather than dissolved formula units.

## 2. A 1:2 salt needs a cube root

For BX₂, **Ksp = 3.20 × 10⁻¹¹**. Calculate its molar solubility in pure water.

`BX₂(s) ⇌ B²⁺(aq) + 2X⁻(aq)`

| Concentration (M) | B²⁺ | X⁻ |
| --- | --- | --- |
| Initial | 0 | 0 |
| Change | +s | +2s |
| Equilibrium | s | 2s |

`Ksp = [B²⁺][X⁻]^2 = s*(2s)^2 = 4s^3`

`s = (3.20e-11/4)^(1/3) = 2.00e-4 M`

Thus `[B²⁺] = 2.00e-4 M` and `[X⁻] = 4.00e-4 M`.

Check: `(2.00e-4)*(4.00e-4)^2 = 3.20e-11`.

The coefficient 2 does two jobs. It makes `[X⁻] = 2s` through particle counting, and it becomes the exponent on `[X⁻]` in Ksp. B²⁺ has coefficient 1, so its concentration has exponent 1 despite its 2+ charge. Keep the parentheses: `(2s)^2 = 4s^2`, whereas `2s^2` squares only `s`.

## 3. The same salt with X⁻ already present

Now dissolve BX₂ in a solution initially containing **0.0200 M X⁻** and no B²⁺. Keep its Ksp at **3.20 × 10⁻¹¹**.

Here, `s` counts the BX₂ that dissolves into the prepared solution. The X⁻ already present belongs in the initial row; it does not count toward `s`.

| Concentration (M) | B²⁺ | X⁻ |
| --- | --- | --- |
| Initial | 0 | 0.0200 |
| Change | +s | +2s |
| Equilibrium | s | 0.0200 + 2s |

The full equation within our concentration model is:

`3.20e-11 = s*(0.0200 + 2s)^2`

Try `0.0200 + 2s ≈ 0.0200`:

`s ≈ 3.20e-11/(0.0200)^2 = 8.00e-8 M`

Now check the term we dropped:

`2s/0.0200 = 8.00e-6`, or **0.000800%**.

The proposed addition is tiny compared with the initial X⁻ concentration. Substituting the approximate `s` into the full expression gives about **3.20005 × 10⁻¹¹**, close to the specified Ksp. The approximation supports reporting **s ≈ 8.00 × 10⁻⁸ M**.

Compare this with 2.00 × 10⁻⁴ M in pure water. The added X⁻ lowers the amount of BX₂ that dissolves, illustrating the [common-ion effect explained in Heartland Community College's lesson](https://chem.libretexts.org/Courses/Heartland_Community_College/HCC:_Chem_162/17:_Solubility_Equilibria/17.2:_Molar_Solubility_and_Ksp). The salt's Ksp stays fixed at this temperature; [Florida State University's course notes](https://www.chem.fsu.edu/chemlab/chm1046course/commonionsol.html) state that condition.

Keep `[B²⁺] = s` in the calculation. We neglected a tiny addition to an existing concentration, `0.0200 + 2s`; replacing the entire B²⁺ concentration with zero would make the product zero.

## 4. A common-ion approximation that fails

A different fictional salt, CY, dissolves as:

`CY(s) ⇌ C⁺(aq) + Y⁻(aq)`

Its **Ksp = 2.00 × 10⁻⁶**. Initially, `[C⁺] = 0.00100 M` and `[Y⁻] = 0`.

| Concentration (M) | C⁺ | Y⁻ |
| --- | --- | --- |
| Initial | 0.00100 | 0 |
| Change | +s | +s |
| Equilibrium | 0.00100 + s | s |

The equation is `(0.00100 + s)*s = 2.00e-6`.

Dropping the added `s` suggests `s ≈ 2.00e-6/0.00100 = 0.00200 M`. But `s/0.00100 = 2`, or **200%**. The supposedly negligible addition is twice the starting concentration. Substitution also exposes the failure: `(0.00100 + 0.00200)*0.00200 = 6.00e-6`, three times Ksp. Reject the approximation.

Solve the quadratic instead:

`s^2 + 0.00100s - 2.00e-6 = 0`

`s = (-0.00100 + sqrt((0.00100)^2 + 4*2.00e-6))/2`

`s = (-0.00100 + 0.00300)/2 = 0.00100 M`

The other root, −0.00200 M, cannot represent an amount dissolved from this initial state. With the positive root, the equilibrium concentrations are `[C⁺] = 0.00200 M` and `[Y⁻] = 0.00100 M`; their product is **2.00 × 10⁻⁶**. The initial C⁺ contributes to the total C⁺ concentration, while **s = 0.00100 M** counts only the CY that dissolved.

You may have learned a 5% check for neglected terms. [Montana State's analytical chemistry lesson](https://chem.libretexts.org/Courses/Montana_State_University/MSU:_CHMY311_Fundamental_Analytical_Chemistry/07:_Equilibrium_Chemistry/7.07:_Solving_Equilibrium_Problems) treats 5% as a rule of thumb whose suitability depends on the problem. The neglected-term percentage is not automatically the percentage error in `s`, especially when a concentration is squared. Identify the term you dropped, follow your course's tolerance, and substitute your answer into the full equation.

## Four Ksp practice problems to try

Keep the same assumptions and temperature. For each problem, write the dissolution equation, an initial/change/equilibrium table, and the full Ksp equation before calculating. Try all four before reading the answers.

5. **Reverse the ion ratio.** D₂Z dissolves into `2D⁺ + Z²⁻`. Its Ksp is **1.08 × 10⁻¹⁰**. Find `s` and both ion concentrations in pure water.
6. **Put the common ion on B.** Use BX₂ from problem 2, Ksp **3.20 × 10⁻¹¹**. Initially, `[B²⁺] = 0.0200 M` and `[X⁻] = 0`. Find an approximate `s`, check the neglected term, and substitute your result into the full equation. Explain why problem 3's equation cannot be reused unchanged.
7. **Work backward.** EX dissolves into `E⁺ + X⁻`. Its supplied molar solubility in pure water is **4.00 × 10⁻⁵ M**. Calculate its Ksp.
8. **Compare equal Ksp values.** FX gives `F⁺ + X⁻`; GX₂ gives `G²⁺ + 2X⁻`. Both have Ksp **1.00 × 10⁻¹⁰**. Which has greater molar solubility in pure water? Calculate both.

### Explained answers

**5.** Starting from zero, the changes are `+2s` for D⁺ and `+s` for Z²⁻. Thus `Ksp = [D⁺]^2[Z²⁻] = (2s)^2*s = 4s^3`, giving `s = (1.08e-10/4)^(1/3)`. The answer is **s = 3.00 × 10⁻⁴ M**, with `[D⁺] = 6.00e-4 M` and `[Z²⁻] = 3.00e-4 M`. Check: `(6.00e-4)^2*(3.00e-4) = 1.08e-10`. The squared concentration belongs to the cation this time.

**6.** The equilibrium row is `[B²⁺] = 0.0200 + s`, `[X⁻] = 2s`. Use `(0.0200 + s)*(2s)^2 = 3.20e-11`. Neglecting `s` beside 0.0200 gives **s ≈ sqrt(3.20e-11/(4*0.0200)) = 2.00e-5 M**. Check `s/0.0200 = 0.00100`, or **0.100%**. Substitution into the full expression gives **3.2032 × 10⁻¹¹**, 0.100% above Ksp, supporting this approximation. Problem 3 places the background concentration inside the squared X⁻ term; here it belongs in the B²⁺ term. The two solutions start with the same numerical common-ion concentration, but their solubilities differ.

**7.** Each ion starts at zero and increases by `s`. Both equilibrium concentrations therefore equal `4.00e-5 M`, so **Ksp = [E⁺][X⁻] = (4.00e-5)^2 = 1.60 × 10⁻⁹**. Use the individual equilibrium concentrations, not their sum.

**8.** FX gives equilibrium concentrations `s` and `s`, so `s = sqrt(1.00e-10) = 1.00e-5 M`. GX₂ gives `s` and `2s`, so `s = (1.00e-10/4)^(1/3) ≈ 2.92e-4 M`. **GX₂ has greater molar solubility**, about 29.2 times that of FX in this model. Convert each Ksp through its own dissolution stoichiometry before comparing solubilities.

## Save the mistake you actually made

Keep solving full problems on paper. If one setup error repeats, put that specific decision on a short repair card in Nibomo or on a physical card:

| Front | Back |
| --- | --- |
| BX₂ dissolves by s mol/L. What are the ion-concentration changes? | B²⁺: +s; X⁻: +2s. The subscript counts ions per formula unit. |
| Why does s*(2s)² become 4s³? | Squaring 2s squares both factors: (2s)² = 4s². |
| When dropping 2s from c + 2s, where c is the initial common-ion concentration, what must I check? | Calculate 2s/c using the proposed answer, compare with the allowed tolerance, then substitute into the full equation. |

The [better-flashcards guide](/blog/how-to-make-better-flashcards/) covers keeping each card focused. For other equation-selection mistakes, see [flashcards for advanced chemistry](/blog/how-to-use-flashcards-for-advanced-chemistry/). After reviewing a repair card, redo the missed problem from a blank page, including its table and approximation check.

*This lesson was written and edited with substantial AI assistance. Its fictional exercises illustrate calculations within the stated model; they are not laboratory results or evidence of learning gains.*
