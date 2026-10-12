---
title: "Empirical and Molecular Formula Practice: Ratios and Error Checks"
description: "Find empirical formulas from masses or percentages, handle fractional mole ratios, and use molar mass to check molecular formulas. Includes worked practice."
date: "2026-10-12"
image: "/blog/empirical-and-molecular-formula-practice.png"
keywords:
  - "empirical and molecular formula practice"
  - "empirical formula from percent composition"
  - "fractional mole ratios"
  - "molecular formula from molar mass"
  - "empirical formula rounding"
---

A nitrogen-to-oxygen mole ratio of `1 : 1.5` gives **N₂O₃**. Rounding 1.5 to 2 gives NO₂, which changes the composition. Multiplying only the oxygen ratio by 2 gives NO₃, which changes it again. You have to multiply both numbers: `2 : 3`.

This empirical and molecular formula practice keeps the calculation on paper: mass → moles → smallest whole-number ratio. Work through the examples, check each result against its starting data, then try the problems without copying a table.

All numerical problems below are original paper exercises, not reported laboratory measurements. Assume each composition describes one pure compound and lists all its elements. A calculator and a blank sheet are enough.

![A mosaic maker compares a five-tile teal-and-ivory sample with a larger panel that preserves the same color ratio](/blog/empirical-and-molecular-formula-practice.png)

## What the two formulas tell you

An **empirical formula** gives the simplest whole-number ratio of the elements. A **molecular formula** gives the number of atoms of each element in one molecule. For example, C₆H₈O₆ reduces to the empirical formula C₃H₄O₃ by dividing every subscript by 2. [OpenStax's chemical formulas chapter](https://openstax.org/books/chemistry-2e/pages/2-4-chemical-formulas) explains this distinction.

Composition alone doesn't determine the molecular formula. C₃H₄O₃ and C₆H₈O₆ have the same mass percentages. To choose the molecular multiple from composition data, you need an independent molar mass or equivalent information about molecular size.

Even a molecular formula doesn't tell you how the atoms connect. Different structures can share a molecular formula, as OpenStax's chapter also shows. Don't turn a composition calculation into a claim that you've identified a substance.

For an ionic solid, speak of **formula units**. Its formula doesn't count atoms in an isolated molecule. The Fe₃O₄, MgO, and Al₂O₃ exercises here ask for elemental ratios; the molecular-multiplier step applies to the problems explicitly described as molecular compounds. See [OpenStax's distinction between ionic and molecular compounds](https://openstax.org/books/chemistry-2e/pages/2-6-ionic-and-molecular-compounds).

## Keep masses and atom ratios in separate columns

Use these supplied atomic molar masses consistently throughout the exercises:

| Element | Molar mass, g/mol |
| --- | ---: |
| H | 1.008 |
| C | 12.01 |
| N | 14.01 |
| O | 16.00 |
| Mg | 24.31 |
| Al | 26.98 |
| Fe | 55.85 |

Convert each element's mass using `amount in mol = mass in g ÷ atomic molar mass in g/mol`. Equal mole amounts represent equal numbers of atoms; equal masses needn't. [OpenStax's mole concept chapter](https://openstax.org/books/chemistry-2e/pages/3-1-formula-mass-and-the-mole-concept) explains the mass-to-amount relationship.

For example, 4.800 g carbon and 4.800 g oxygen correspond to approximately 0.3997 mol C and 0.3000 mol O. Writing `C : O = 1 : 1` directly from those masses skips the conversion. Conversely, 0.1000 mol C and 0.1000 mol O have masses of 1.201 g and 1.600 g, but their atom ratio is `1 : 1`.

For each empirical formula problem:

1. Convert every elemental mass to moles.
2. Divide every mole amount by the smallest one.
3. If needed, multiply the whole ratio by an integer to remove fractions.
4. Use the smallest whole-number subscripts and check the composition they predict.

To find an empirical formula from percent composition, choose a **100 g calculation basis**: 40.91% C becomes 40.91 g C on that basis. This is a convenient scale, not a claim that someone measured a 100 g sample. [OpenStax's formula derivation chapter](https://openstax.org/books/chemistry-2e/pages/3-2-determining-empirical-and-molecular-formulas) covers the mass and percentage methods.

Keep extra calculator digits until you've chosen and checked the ratio. The longer decimals in the tables show intermediate arithmetic; they don't give the supplied data extra precision. Formula subscripts themselves are exact atom counts.

## Worked example: preserve the 1.5

A composition problem gives **1.681 g N** and **2.880 g O**. Find the empirical formula.

| Element | Mass, g | Amount, mol | Divide by the smaller amount |
| --- | ---: | ---: | ---: |
| N | 1.681 | 0.1199857… | 1 |
| O | 2.880 | 0.1800000 | 1.500178… |

The input masses were rounded. The calculated ratio fits `1 : 1.5`, so multiply **both** terms by 2:

`N : O = 2 : 3 → N₂O₃`

Check the mass composition by working backward. The supplied nitrogen percentage is:

`1.681 ÷ (1.681 + 2.880) × 100% ≈ 36.86%`

N₂O₃ predicts:

`(2 × 14.01) ÷ (2 × 14.01 + 3 × 16.00) × 100% ≈ 36.86%`

Both percentages round to the same value. NO₂ would predict about **30.45% N**, so rounding 1.5 to 2 creates a substantial error. The opening NO₃ mistake is different: multiplying just one term changes the oxygen-to-nitrogen ratio from 1.5 to 3.

## A ratio of 1.333… needs three

Now use **6.702 g Fe** and **2.560 g O**.

| Element | Amount, mol | Normalized ratio | Multiply by 3 |
| --- | ---: | ---: | ---: |
| Fe | 6.702 ÷ 55.85 = 0.1200 | 1 | 3 |
| O | 2.560 ÷ 16.00 = 0.1600 | 1.333333… | 4 |

The empirical formula is **Fe₃O₄**. Multiplying by 3 preserves the ratio because `1.333333… = 4/3`.

For a reverse check, Fe₃O₄ predicts:

`(3 × 55.85) ÷ (3 × 55.85 + 4 × 16.00) × 100% ≈ 72.36% Fe`

The supplied masses give `6.702 ÷ (6.702 + 2.560) × 100% ≈ 72.36% Fe`, matching the prediction.

These fractional parts are useful clues:

| Fractional part near | Fraction | Try multiplying every ratio by |
| --- | --- | ---: |
| 0.5 | 1/2 | 2 |
| 0.333… or 0.667… | 1/3 or 2/3 | 3 |
| 0.25 or 0.75 | 1/4 or 3/4 | 4 |

If several terms have fractions, clear all of them with the same multiplier. For example, the ratio `1 : 1.5 : 1.333…` needs **6**, giving `6 : 9 : 8`. Multiplying by 2 leaves thirds; multiplying by 3 leaves halves. Here 6 is the smallest integer that clears both denominators.

There isn't a universal decimal cutoff for empirical formula rounding. Treat a simple ratio as a candidate and check the composition it predicts against the input precision. The N₂O₃ check above supports treating 1.500178 as 1.5. It doesn't justify rounding every inconvenient decimal to the nearest integer.

If no reasonable ratio fits, recheck element labels, conversions, transcription, and whether the composition is complete. Outside a paper exercise, uncertainty information or further measurements may be needed. For when to round the arithmetic itself, see [significant figures in mixed operations](/blog/significant-figures-mixed-operations/).

## Percent composition, then molecular formula

A molecular compound has this composition by mass:

- **40.91% C**
- **4.58% H**
- **54.51% O**

Its independently supplied molar mass is **176.12 g/mol**. Find both formulas.

On a 100 g basis:

| Element | Mass, g | Amount, mol | Divide by the smallest |
| --- | ---: | ---: | ---: |
| C | 40.91 | 3.406328… | 1 |
| H | 4.58 | 4.543651… | 1.333885… |
| O | 54.51 | 3.406875 | 1.000161… |

Multiply all three ratios by 3. The resulting values are approximately `3 : 4.001656 : 3.000482`, giving the candidate **3 : 4 : 3**. The empirical formula **C₃H₄O₃** predicts **40.91% C, 4.58% H, and 54.51% O** at two decimal places, so it passes the composition check.

Next, add the molar-mass contributions for that empirical formula. Call the sum `M(empirical)`:

`M(empirical) = 3 × 12.01 + 4 × 1.008 + 3 × 16.00 = 88.062 g/mol`

That is the calculator value to carry into the next step. For a molecular compound, the molecular subscripts must be a **positive whole-number multiple** of the empirical subscripts. Find that multiple using:

`k = M(compound) ÷ M(empirical)`

Here:

`k = 176.12 ÷ 88.062 ≈ 1.999955`

This fits the integer **2**. Multiply every empirical subscript by 2 to get the molecular formula **C₆H₈O₆**. It has a calculated molar mass of 176.124 g/mol, which rounds to the supplied **176.12 g/mol**. Doubling every subscript leaves the percentages unchanged.

[OpenStax's formula derivation chapter](https://openstax.org/books/chemistry-2e/pages/3-2-determining-empirical-and-molecular-formulas) explains this molar-mass method. Keep its multiplier separate from the earlier one: **3** cleared fractions to produce the empirical formula; **2** supplied the molecular scale.

## When the molecular multiplier doesn't work

Suppose the same composition is paired with a molar mass of **132.10 g/mol** instead.

`132.10 ÷ 88.062 ≈ 1.500079`

A student rounds that to 2 and reports C₆H₈O₆. But that formula predicts 176.12 g/mol, around **44.02 g/mol** above the supplied value. Choosing 1 would predict 88.06 g/mol, around **44.04 g/mol** below it. Neither fits the stated precision.

The conclusion is **the supplied composition and molar mass are inconsistent under the problem's assumptions**. Recheck the empirical formula and stated molar mass. This discrepancy alone doesn't tell you which input is wrong.

Don't apply the earlier fraction-clearing rule here. A normalized elemental ratio of `1 : 1.5` can become `2 : 3`; the molecular multiplier `k` must itself fit an integer. Changing it changes the predicted molar mass.

Missing data call for a different conclusion. Without a molar mass or equivalent molecular-size information, the composition can establish an empirical formula, but it can't select the molecular multiple. If an element's contribution is missing and can't be inferred from the stated data, you can't complete the empirical formula either.

## Try four problems before reading the answers

Show the conversion and normalized ratio, even when the answer looks familiar. Use the molar masses in the table above.

1. A composition problem gives **3.039 g Mg** and **2.000 g O**. Find the empirical formula and check the magnesium mass percentage.
2. A compound contains **52.92% Al** and **47.08% O** by mass. Find its empirical formula. Explain what goes wrong if you round a normalized ratio of about 1.5 to 2.
3. A molecular compound has empirical formula **C₂H₃O** and molar mass **86.09 g/mol**. Find its molecular formula and verify its molar mass.
4. Another problem gives the nitrogen and oxygen masses from the first worked example but supplies no molar mass or other molecular-size information. A student reports N₂O₃ as the molecular formula. What does the calculation establish?

### Explained answers

**1. MgO.** The amounts are `3.039 ÷ 24.31 ≈ 0.1250103 mol Mg` and `2.000 ÷ 16.00 = 0.1250 mol O`. Their ratio is approximately `1.000082 : 1`, which fits **1 : 1**.

The supplied magnesium percentage is `3.039 ÷ 5.039 × 100% ≈ 60.31%`. MgO predicts `24.31 ÷ (24.31 + 16.00) × 100% ≈ 60.31%`. This checks the elemental ratio in the ionic formula.

**2. Al₂O₃.** On a 100 g basis, the amounts are `52.92 ÷ 26.98 ≈ 1.961453 mol Al` and `47.08 ÷ 16.00 = 2.9425 mol O`. Dividing by the smaller gives approximately `1 : 1.500163`. Multiplying both terms by 2 gives **2 : 3**.

Al₂O₃ predicts `53.96 ÷ 101.96 × 100% ≈ 52.92% Al`, matching the supplied percentage. Rounding 1.5 to 2 would produce AlO₂ and change the oxygen-to-aluminum ratio.

**3. C₄H₆O₂.** The empirical molar-mass sum is `2 × 12.01 + 3 × 1.008 + 16.00 = 43.044 g/mol`. The multiplier is `86.09 ÷ 43.044 ≈ 2.000046`, consistent with **2**. C₄H₆O₂ has calculated molar mass 86.088 g/mol, rounding to **86.09 g/mol**. This establishes atom counts, not the structure.

**4. The empirical formula N₂O₃.** The mass data establish the **2 : 3** elemental ratio. They don't show whether a molecule has exactly 2 N and 3 O atoms or a larger whole-number multiple of those counts. Reporting N₂O₃ as the molecular formula assumes a scale the question hasn't supplied.

## Save the missed decision, then change the numbers

After checking your work, mark the first step that failed. Was it the mass-to-mole conversion, clearing a fraction, or deciding whether the molecular scale was justified?

Write a small repair card for that decision. Paper cards work; use a flashcard app if you already review there.

| Prompt | Short answer |
| --- | --- |
| Equal masses of two elements: can I use a 1 : 1 atom ratio? | Convert each mass to moles first; their atomic molar masses may differ. |
| My mole ratio is 1 : 1.5. What preserves it as integers? | Multiply both terms by 2, giving 2 : 3. |
| For a molecular compound, what does percent composition alone establish? | An empirical ratio; the molecular multiple needs molar mass or equivalent molecular-size information. |
| Molar mass ÷ empirical molar-mass sum gives 1.50 with precise inputs. What next? | Check the data and calculation; don't force an integer multiplier. |

The [advanced chemistry review workflow](/blog/how-to-use-flashcards-for-advanced-chemistry/) puts these small decision cards alongside full calculations. Use a card to recall the decision, then do another problem to check that you can apply it. For reaction coefficients and available reactant amounts, continue with [limiting reactant practice](/blog/limiting-reactant-practice/).

Now close the worked examples and solve a fresh transfer problem:

**A molecular compound's composition is represented by 0.9008 g C, 0.1512 g H, and 0.8000 g O. Its molar mass is 148.16 g/mol. Find both formulas and check the molecular molar mass.**

Try it before continuing. The smaller sample changes the mole amounts, and a different element sets the normalization.

### Transfer answer

The amounts are approximately **0.0750042 mol C, 0.1500 mol H, and 0.05000 mol O**. Dividing every amount by the smallest, 0.05000 mol O, gives approximately `1.500083 : 3 : 1`. Multiply every term by 2 to obtain the empirical formula **C₃H₆O₂**.

Its empirical molar-mass sum is `3 × 12.01 + 6 × 1.008 + 2 × 16.00 = 74.078 g/mol`. Then `148.16 ÷ 74.078 ≈ 2.000054`, giving the molecular formula **C₆H₁₂O₄**. Its calculated molar mass, 148.156 g/mol, rounds to **148.16 g/mol**.

Check your ledger for both multipliers: **2** to clear the fractional mole ratios, then **2** to match the independently supplied molar mass. Each has a different reason. Explain those reasons without the worked table, and you've checked more than your ability to copy the arithmetic.
