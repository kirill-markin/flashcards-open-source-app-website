---
title: "Limiting Reactant Practice: Yield and Excess Left Over"
description: "Find the limiting reactant, calculate theoretical yield, and work out excess left over with original examples and practice problems with explained answers."
date: "2026-10-02"
image: "/blog/limiting-reactant-practice.png"
keywords:
  - "limiting reactant practice"
  - "limiting reagent practice problems"
  - "excess reactant remaining"
  - "theoretical yield"
---

For `2H₂ + O₂ → 2H₂O`, a supply of 5.00 mol H₂ and 3.00 mol O₂ makes hydrogen the limiting reactant. Hydrogen has the larger mole count, but the equation requires twice as much of it. The theoretical result is 5.00 mol water, with 0.50 mol oxygen left over.

That example exposes two common mistakes: choosing the smaller starting amount, and reporting the amount of excess reactant consumed as the amount remaining. This limiting reactant practice keeps three quantities separate: what you start with, what the equation uses, and what's left.

The examples and exercises are original paper problems. For each theoretical calculation, assume pure reactants and only the stated reaction, proceeding until a reactant is completely consumed. Problem 7 adds a hypothetical measured yield and asks whether it reveals how much reactant was actually consumed.

![A hillwalking volunteer checks a single trekking pole beside a ready pair and an empty spare carry sleeve](/blog/limiting-reactant-practice.png)

## Start with a balanced equation and moles

The **limiting reactant**, also called the **limiting reagent**, sets the theoretical yield: the maximum product amount calculated from the balanced equation and available reactants. An **excess reactant** remains at that theoretical endpoint. [OpenStax's reaction yields chapter](https://openstax.org/books/chemistry-2e/pages/4-4-reaction-yields) explains these terms.

Before comparing reactants:

1. Balance the equation. Change coefficients, never chemical subscripts.
2. Convert each supplied mass to moles using `amount in mol = mass in g ÷ molar mass in g/mol`.
3. Divide each reactant's mole amount by its coefficient. The smaller result identifies the limiting reactant; a tie means stoichiometric supplies with no excess.

Coefficients give mole ratios, rather than mass ratios; see [OpenStax's reaction stoichiometry chapter](https://openstax.org/books/chemistry-2e/pages/4-3-reaction-stoichiometry). The mass-to-mole conversion is covered in its [mole concept chapter](https://openstax.org/books/chemistry-2e/pages/3-1-formula-mass-and-the-mole-concept).

## Worked example 1: two methods, the same answer

Use the opening data:

`2H₂ + O₂ → 2H₂O`

Initial amounts: **5.00 mol H₂** and **3.00 mol O₂**.

### Divide each amount by its coefficient

| Reactant | Initial amount | Coefficient | Amount ÷ coefficient |
| --- | --- | --- | --- |
| H₂ | 5.00 mol | 2 | 2.50 mol |
| O₂ | 3.00 mol | 1 | 3.00 mol |

The smaller result belongs to **H₂**, so hydrogen limits this reaction. These divided amounts put the reactants on a common scale. They aren't both amounts of product.

Multiply the smaller result by the water coefficient:

`2.50 mol × 2 = 5.00 mol H₂O`

### Or compare possible yields of the same product

Calculate how much water each reactant could supply if the other were available in excess:

- From hydrogen: `5.00 mol H₂ × (2 mol H₂O / 2 mol H₂) = 5.00 mol H₂O`.
- From oxygen: `3.00 mol O₂ × (2 mol H₂O / 1 mol O₂) = 6.00 mol H₂O`.

The smaller possible yield is **5.00 mol H₂O**, again set by hydrogen. Compare the same product in the same unit. OpenStax also presents this [product-yield method](https://openstax.org/books/chemistry-2e/pages/4-4-reaction-yields).

For this equation, multiplying both coefficient-normalized amounts by 2 gives the possible water yields. That's why the methods agree. Use whichever you can explain clearly; you don't need to do both on every problem.

### Fill in initial, consumed, and left

All 5.00 mol H₂ is consumed. Use that amount to calculate the oxygen consumed:

`5.00 mol H₂ × (1 mol O₂ / 2 mol H₂) = 2.50 mol O₂`

| Reactant | Initial | Consumed | Left at the theoretical endpoint |
| --- | --- | --- | --- |
| H₂ | 5.00 mol | 5.00 mol | 0 mol |
| O₂ | 3.00 mol | 2.50 mol | 0.50 mol |

The oxygen subtraction is **3.00 − 2.50 = 0.50 mol**, reported to hundredths. Oxygen's coefficient is 1, but that doesn't mean 1 mol oxygen must remain. The water yield, calculated separately, is **5.00 mol H₂O**.

Reuse this sequence for any excess reactant:

`excess consumed = limiting amount × (excess coefficient / limiting coefficient)`

`excess remaining = excess initial − excess consumed`

Use moles in the first expression. Keep the subtraction in one unit, then convert the remainder to grams if requested.

## Worked example 2: convert grams before comparing

For `2Mg + O₂ → 2MgO`, start with **9.72 g Mg** and **4.16 g O₂**. Use the supplied molar masses: Mg = 24.30 g/mol, O₂ = 32.00 g/mol, MgO = 40.30 g/mol.

Convert first:

- Mg: `9.72 g ÷ 24.30 g/mol = 0.400 mol`.
- O₂: `4.16 g ÷ 32.00 g/mol = 0.130 mol`.

Compare `0.400 ÷ 2 = 0.200 mol` with `0.130 ÷ 1 = 0.130 mol`. **O₂ is limiting.** In this example, it also has the smaller mass. The coefficient-adjusted mole comparison establishes the answer; the mass comparison alone doesn't.

The theoretical yield is:

`0.130 mol O₂ × (2 mol MgO / 1 mol O₂) = 0.260 mol MgO`

`0.260 mol MgO × 40.30 g/mol = 10.478 g MgO → 10.5 g MgO`

Now work out the magnesium remaining:

| Reactant | Initial | Consumed | Left |
| --- | --- | --- | --- |
| Mg | 0.400 mol | 0.260 mol | 0.140 mol |
| O₂ | 0.130 mol | 0.130 mol | 0 mol |

`0.140 mol Mg × 24.30 g/mol = 3.402 g Mg → 3.40 g Mg`

Magnesium consumed is 6.318 g before rounding; magnesium remaining is 3.402 g. These answer different questions. As a check with unrounded values, `10.478 g product + 3.402 g leftover = 13.880 g`, equal to the total starting mass.

Carry calculator digits through the calculation and round final reported results. Balanced-equation coefficients are exact ratios, so they don't limit significant figures. Our [significant figures in mixed operations guide](/blog/significant-figures-mixed-operations/) explains how to keep a value separate from its reporting precision.

## Worked example 3: sometimes there is no excess

Consider `N₂ + 3H₂ → 2NH₃`, with **0.400 mol N₂** and **1.20 mol H₂**.

The comparisons tie:

`0.400 ÷ 1 = 0.400 mol`

`1.20 ÷ 3 = 0.400 mol`

These supplies are in the exact stoichiometric ratio for this paper problem. Both reactants are exhausted together; **neither is in excess**. The theoretical yield is `0.400 × 2 = 0.800 mol NH₃`.

If a question asks which reactant limits this mixture, state the tie explicitly: both supplies permit the same yield. Choosing hydrogen merely because its coefficient is larger would ignore the supplied amounts. Actual ammonia synthesis need not reach this endpoint; complete consumption is an assumption of the exercise.

## Try seven limiting reagent practice problems

For problems 1–6, find the limiting reactant or identify a stoichiometric tie, calculate the requested theoretical yield, and give the excess reactant remaining. Make your own initial–consumed–left table before reading the answers.

All molar masses needed for mass calculations are supplied. Use those values, carry extra digits, and report mass answers to three significant figures. For mole remainders, apply the subtraction precision rule; a small remainder can have fewer significant figures than the starting amounts.

1. **More hydrogen than oxygen.** `2H₂ + O₂ → 2H₂O`. Start with 0.900 mol H₂ and 0.700 mol O₂. Give water yield and leftover reactant in moles.
2. **A coefficient of four.** `4Al + 3O₂ → 2Al₂O₃`. Start with 0.800 mol Al and 0.450 mol O₂. Give product yield and leftover reactant in moles.
3. **Two moles of acid per mole of metal.** `Zn + 2HCl → ZnCl₂ + H₂`. Start with 0.250 mol Zn and 0.400 mol HCl. Give H₂ yield and leftover reactant in moles.
4. **Convert both masses.** `2Na + Cl₂ → 2NaCl`. Start with 4.60 g Na and 14.91 g Cl₂. Use Na = 23.00 g/mol, Cl₂ = 71.00 g/mol, NaCl = 58.50 g/mol. Give NaCl yield and leftover reactant in grams.
5. **Check for a tie.** `2CO + O₂ → 2CO₂`. Start with 0.600 mol CO and 0.300 mol O₂. Give CO₂ yield and any leftover reactant in moles.
6. **Repair the equation first.** A worksheet gives `Fe + O₂ → Fe₂O₃`, with 0.800 mol Fe and 0.500 mol O₂. Balance it before finding Fe₂O₃ yield and leftover reactant in moles.
7. **Yield versus consumption.** `2H₂ + O₂ → 2H₂O`. Start with 4.00 mol H₂ and 3.00 mol O₂. Use H₂O = 18.00 g/mol. A hypothetical report says 54.0 g water was collected. Find theoretical yield and percent yield. Can you determine the actual amount of oxygen remaining from this information alone?

## Answers with the steps that matter

### 1. Hydrogen limits; 0.250 mol oxygen remains

Compare `0.900 ÷ 2 = 0.450` with `0.700 ÷ 1 = 0.700`. H₂ limits the yield to **0.900 mol H₂O**. Oxygen consumed is `0.900 × 1/2 = 0.450 mol`; oxygen remaining is `0.700 − 0.450 = 0.250 mol`.

If you answered 0.450 mol remaining, you stopped at the consumption calculation.

### 2. Oxygen limits; 0.200 mol aluminum remains

Compare `0.800 ÷ 4 = 0.200` with `0.450 ÷ 3 = 0.150`. O₂ limits. Product yield is `0.450 × 2/3 =` **0.300 mol Al₂O₃**. Aluminum consumed is `0.450 × 4/3 = 0.600 mol`, leaving `0.800 − 0.600 =` **0.200 mol Al**.

The four in the aluminum coefficient determines its consumption ratio; it doesn't identify the limiting reactant by itself.

### 3. HCl limits despite its larger mole supply

Compare `0.250 ÷ 1 = 0.250` with `0.400 ÷ 2 = 0.200`. HCl limits. The H₂ yield is `0.400 × 1/2 =` **0.200 mol**. Zinc consumed is also 0.200 mol, so `0.250 − 0.200 =` **0.050 mol Zn** remains.

The remainder is reported to thousandths, giving two significant figures. Picking zinc because 0.250 is smaller than 0.400 misses the 1:2 requirement.

### 4. Sodium limits; 7.81 g chlorine remains

Initial amounts are `4.60 ÷ 23.00 = 0.200 mol Na` and `14.91 ÷ 71.00 = 0.2100 mol Cl₂`. Compare `0.200 ÷ 2 = 0.100` with `0.2100 ÷ 1 = 0.2100`: Na limits.

The yield is `0.200 mol NaCl × 58.50 g/mol =` **11.7 g NaCl**. Chlorine consumed is `0.200 × 1/2 = 0.100 mol`, leaving `0.2100 − 0.100 = 0.110 mol`. Its remaining mass is `0.110 × 71.00 =` **7.81 g Cl₂**.

Before rounding, the mass check is `11.70 g + 7.81 g = 19.51 g`, equal to `4.60 g + 14.91 g`.

### 5. Both reactants are exhausted together

`0.600 ÷ 2 = 0.300` and `0.300 ÷ 1 = 0.300`. The supplies tie. The theoretical yield is **0.600 mol CO₂**, with **0 mol CO and 0 mol O₂ remaining**.

A smaller raw mole count can still be exactly sufficient.

### 6. Balance first; oxygen limits

The balanced equation is `4Fe + 3O₂ → 2Fe₂O₃`: four Fe atoms and six O atoms on each side.

Compare `0.800 ÷ 4 = 0.200` with `0.500 ÷ 3 = 0.166666…`. O₂ limits. Product yield is `0.500 × 2/3 =` **0.333 mol Fe₂O₃**. Iron consumed is `0.500 × 4/3 = 0.666666… mol`, leaving `0.800 − 0.666666… =` **0.133 mol Fe**.

Keep the extra digits in the subtraction. Using the unbalanced 1:1 reactant ratio would give an answer from an equation that doesn't conserve atoms.

### 7. Theoretical yield is 72.0 g; percent yield is 75.0%

H₂ limits because `4.00 ÷ 2 = 2.00`, below `3.00 ÷ 1 = 3.00`. The theoretical yield is `4.00 mol H₂O × 18.00 g/mol =` **72.0 g H₂O**.

Use `percent yield = actual yield ÷ theoretical yield × 100%`, with both yields in the same unit. Here, `54.0 ÷ 72.0 × 100% =` **75.0%**. [OpenStax explains percent yield and reasons for recovering less product](https://openstax.org/books/chemistry-2e/pages/4-4-reaction-yields).

At the theoretical endpoint, 2.00 mol O₂ is consumed and **1.00 mol O₂ remains**. The **actual oxygen remaining cannot be determined** from collected water alone. Two possible accounts of the same 54.0 g collection illustrate the problem:

| Hypothetical outcome | Water formed | Water collected | O₂ remaining |
| --- | --- | --- | --- |
| Complete consumption of H₂, with some water lost during collection | 4.00 mol | 3.00 mol = 54.0 g | 1.00 mol |
| Incomplete reaction, with all formed water collected | 3.00 mol | 3.00 mol = 54.0 g | 1.50 mol |

Both give 75.0% yield. In the second case, forming 3.00 mol water consumes 1.50 mol O₂; in the first, forming 4.00 mol consumes 2.00 mol O₂. A collected yield alone doesn't tell you which happened.

## Make a small card for the missed decision

Keep whole reaction calculations as paper practice. After a miss, make a short card that asks for the decision you skipped:

| Front | Back |
| --- | --- |
| For `2H₂ + O₂ → 2H₂O`, can H₂ limit even when it has more moles than O₂? | Yes. Compare `n(H₂)/2` with `n(O₂)/1`. |
| I calculated excess reactant consumed. What remains to do? | Subtract consumed amount from initial amount, using the same unit. |
| What does a tie in amount ÷ coefficient mean? | Stoichiometric supplies; neither reactant is in excess. |
| Can percent yield alone tell me actual excess reactant remaining? | No. Collected product doesn't uniquely determine reactant consumption. |

Our guide to [turning practice questions into flashcards](/blog/how-to-turn-practice-questions-into-flashcards/) explains how to isolate a missed step. For a broader study plan, see [using flashcards for advanced chemistry](/blog/how-to-use-flashcards-for-advanced-chemistry/).

Then solve a fresh problem on paper. Check that every reactant row satisfies **initial = consumed + left**, with no negative leftovers, and that the consumed amounts match the balanced coefficients.
