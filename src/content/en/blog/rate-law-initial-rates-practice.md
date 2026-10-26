---
title: "Rate Law Practice: Initial Rates, Reaction Orders, and k"
description: "Derive rate laws from initial-rate tables, calculate k with units, and check practice answers for zero orders, coupled changes, and inconsistent data."
date: "2026-10-26"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/08e656387bf7bf649c965ca4e09253797520977860f2bdb8f0809c728fc7847d.webp"
keywords:
  - "rate law practice"
  - "method of initial rates practice"
  - "reaction order from a table"
  - "rate constant units"
  - "initial rates problems with answers"
---

Double both reactant concentrations and the rate quadruples. That fits first order in each reactant. It also fits second order in one and zero order in the other. Two rows can give a convincing calculation while leaving the individual reaction orders unresolved.

This rate law practice starts with a complete worked table, then shows what happens when a useful comparison is missing. Four problems follow, with the answers in a separate section so you can try them first. Write down which pair of trials supports each exponent; getting the final rate right is only part of the task.

All tables contain **fictional, exact inputs for paper calculations**. Assume the same temperature, solvent, catalyst conditions, and definition of initial rate within each table. Assume a power law applies over the stated positive concentration range, including requested predictions. Actual measurements have uncertainty and need error analysis; these exercises don't represent laboratory results.

![A woman adjusts a brass paperclip on a paper glider's nose while two matching gliders rest on a garden bench](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/08e656387bf7bf649c965ca4e09253797520977860f2bdb8f0809c728fc7847d.webp)

## Write the model before choosing rows

Use:

**r = k[A]ᵐ[B]ⁿ**

Here, r is initial rate, [A] and [B] are initial concentrations in the reaction mixture, m and n are the individual reaction orders, and k is the rate constant. Overall order is **m + n**. Concentrations are in **M = mol/L** and rates in **M/s** throughout.

The powers come from rate data; don't copy the coefficients of a balanced reaction into them. A rate law alone also doesn't establish a reaction mechanism. [OpenStax's rate-law lesson](https://openstax.org/books/chemistry-2e/pages/12-3-rate-laws) explains the experimental basis of reaction orders.

Use the concentrations in the reaction mixture after mixing. If you're starting with stock-bottle concentrations, the [serial dilution calculations](/blog/serial-dilution-practice/) can help with that conversion before you fit a rate law.

For two trials under the same conditions, division cancels k:

**r₂/r₁ = ([A]₂/[A]₁)ᵐ × ([B]₂/[B]₁)ⁿ**

When B stays fixed, its ratio is 1, leaving only the power of the A ratio. [Paul Ellgen's initial-rates lesson](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Thermodynamics_and_Chemical_Equilibrium_%28Ellgen%29/05%3A_Chemical_Kinetics_Reaction_Mechanisms_and_Chemical_Equilibrium/5.10%3A_Rate_Laws_by_the_Study_of_Initial_Rates) uses this controlled comparison and checks k from each trial. Keep the numerator direction consistent: trial 2 over trial 1 in both the rate and concentration ratios.

## Solve one table and check every row

| Trial | [A] (M) | [B] (M) | Initial rate (M/s) |
| --- | ---: | ---: | ---: |
| 1 | 0.10 | 0.20 | 0.002 |
| 2 | 0.20 | 0.20 | 0.008 |
| 3 | 0.10 | 0.60 | 0.006 |

Find m, n, k, and the initial rate predicted at **[A] = 0.30 M, [B] = 0.40 M**.

### Choose a pair for each power

Compare **trial 2 with trial 1** to find m. B remains at 0.20 M, A doubles, and the rate increases fourfold:

**0.008/0.002 = (0.20/0.10)ᵐ**, so **4 = 2ᵐ** and **m = 2**.

Compare **trial 3 with trial 1** to find n. A stays at 0.10 M, B triples, and the rate triples:

**0.006/0.002 = (0.60/0.20)ⁿ**, so **3 = 3ⁿ** and **n = 1**.

The fitted law is **r = k[A]²[B]**, third order overall. Trials 2 and 3 change both concentrations, so that pair doesn't isolate either unknown exponent directly.

### Calculate k with its units attached

Rearrange the fitted law:

**k = r/([A]²[B])**

Using the numerical values in trial 1 gives **k = 0.002/(0.10² × 0.20) = 1**. The denominator has units M³, so **k = 1 M⁻² s⁻¹**.

Substitute every row, keeping the powers you just found:

| Trial | Numerical substitution for k | k (M⁻² s⁻¹) |
| --- | --- | ---: |
| 1 | 0.002/(0.10² × 0.20) | 1 |
| 2 | 0.008/(0.20² × 0.20) | 1 |
| 3 | 0.006/(0.10² × 0.60) | 1 |

Agreement shows that this law reproduces all three exact rows. Calculating k from one row alone would miss a contradiction elsewhere in the table.

For the requested concentrations:

**r = (1 M⁻² s⁻¹)(0.30 M)²(0.40 M) = 0.036 M/s**.

Check it against trial 1: A triples, contributing 3² = 9; B doubles, contributing 2. The rate should increase **18-fold**, and 0.002 × 18 = 0.036.

## Let the overall order determine k's units

For total order p = m + n, dimensional division gives:

**Units of k = (M/s)/Mᵖ = M¹⁻ᵖ s⁻¹**

| Overall order p | Units of k |
| --- | --- |
| 0 | M s⁻¹ |
| 1 | s⁻¹ |
| 2 | M⁻¹ s⁻¹ |
| 3 | M⁻² s⁻¹ |

This matches [OpenStax's rate-constant unit table](https://openstax.org/books/chemistry-2e/pages/12-3-rate-laws). M⁻² s⁻¹ can also be written L² mol⁻² s⁻¹. Those are equivalent units for our third-order example.

The numerical value **1** didn't make k unitless. If you change the concentration or time unit, convert k as well; a rate constant quoted in M-based units can't be inserted unchanged alongside concentrations in mM.

## When both concentrations change together

Now start a separate table:

| Trial | [A] (M) | [B] (M) | Initial rate (M/s) |
| --- | ---: | ---: | ---: |
| 1 | 0.10 | 0.10 | 0.003 |
| 2 | 0.20 | 0.20 | 0.012 |

Both concentrations double, so:

**4 = 2ᵐ × 2ⁿ = 2ᵐ⁺ⁿ**

These rows establish **m + n = 2** under the assumed model. They don't establish m = n = 1. The alternatives **(m, n) = (2, 0), (1, 1), and (0, 2)** all reproduce them. Here, all three even give the same **k = 0.3 M⁻¹ s⁻¹**, because A and B have equal concentrations in each row. The table supplies no reason to require integer orders either.

Add a third trial that changes A while holding B fixed relative to trial 1:

| Trial | [A] (M) | [B] (M) | Initial rate (M/s) |
| --- | ---: | ---: | ---: |
| 3 | 0.20 | 0.10 | 0.006 |

Trial 3 versus trial 1 gives **2 = 2ᵐ**, so m = 1. Since m + n = 2, n = 1 too. Comparing trial 2 with trial 3 independently confirms that doubling B doubles the rate.

The resolved law is **r = k[A][B]**. Its three k checks are **0.003/(0.10 × 0.10)**, **0.012/(0.20 × 0.20)**, and **0.006/(0.20 × 0.10)**. Each equals **0.3 M⁻¹ s⁻¹**. The new row distinguishes models that the first two couldn't separate.

## Try four initial rates problems

Use the same units and assumptions. For problems 1 and 2, find the orders and check k against every supplied row before predicting a new rate. The worked answers are below all four questions.

### 1. A concentration changes without changing the rate

| Trial | [A] (M) | [B] (M) | Initial rate (M/s) |
| --- | ---: | ---: | ---: |
| 1 | 0.05 | 0.10 | 0.0015 |
| 2 | 0.15 | 0.10 | 0.0045 |
| 3 | 0.05 | 0.20 | 0.0015 |

Find the law and k. Predict the rate at **[A] = 0.20 M, [B] = 0.40 M**. Explain what B's order means.

### 2. Change two concentrations after finding the powers

| Trial | [A] (M) | [B] (M) | Initial rate (M/s) |
| --- | ---: | ---: | ---: |
| 1 | 0.10 | 0.20 | 0.004 |
| 2 | 0.20 | 0.20 | 0.004 |
| 3 | 0.10 | 0.40 | 0.016 |

Find the law and k. Relative to trial 1, what happens if you **double A and halve B**?

### 3. Audit a fourth row that disagrees

Return to the first worked table, whose three rows gave **r = k[A]²[B]** and **k = 1 M⁻² s⁻¹**. A hypothetical fourth row reports **[A] = 0.30 M, [B] = 0.40 M, r = 0.030 M/s**, with the same stated conditions. Does the fitted law reproduce all four rows? Calculate the k implied by the fourth row and explain what you can conclude.

### 4. Find a power that isn't an integer

In a separate one-reactant model **r = k[A]ᵐ**, increasing A from **0.04 M to 0.36 M** changes the initial rate from **0.0006 M/s to 0.0018 M/s**. Find m and k, including its units. Check k using both rows.

## Worked answers

### 1. First order in A, zero order in B

Trials 2/1 give **3 = 3ᵐ**, so m = 1. Trials 3/1 give **1 = 2ⁿ**, so n = 0. Thus **r = k[A][B]⁰ = k[A]** for the positive concentrations covered by this model.

The three checks are **0.0015/0.05 = 0.03**, **0.0045/0.15 = 0.03**, and **0.0015/0.05 = 0.03**. Overall order is 1, giving **k = 0.03 s⁻¹**.

The prediction is **r = (0.03 s⁻¹)(0.20 M) = 0.006 M/s**. B is zero order: its concentration doesn't affect the rate within this model's range. That doesn't mean B is absent from the reaction, and it doesn't justify extrapolating to B = 0.

### 2. A quarter of the starting rate

Trials 2/1 give **1 = 2ᵐ**, so m = 0. Trials 3/1 give **4 = 2ⁿ**, so n = 2. The law is **r = k[B]²**, second order overall.

The row checks give **0.004/0.20² = 0.1**, **0.004/0.20² = 0.1**, and **0.016/0.40² = 0.1**, so **k = 0.1 M⁻¹ s⁻¹**.

The combined rate factor is **2⁰ × (1/2)² = 1/4**. Starting from trial 1, the new concentrations are **[A] = 0.20 M and [B] = 0.10 M**, and the new rate is **0.004/4 = 0.001 M/s**. Once you've identified the powers, multiply the separate concentration factors to predict their combined effect.

### 3. The fourth row doesn't fit

The fitted law predicts **0.036 M/s**. The fourth row implies:

**k = 0.030/(0.30² × 0.40) = 5/6 ≈ 0.8333 M⁻² s⁻¹**.

That conflicts with k = 1 from each original row. Because the inputs are exact, the difference can't be dismissed as rounding. The first three rows already fix m, n, and k under this power-law model, so no single such law reproduces all four exactly.

Report the inconsistency. The table doesn't establish its cause. Silently changing the temperature, calling the fourth rate a typo, or averaging its k with the others would replace the stated problem with a different one.

### 4. Half order in A

Concentration increases ninefold and rate threefold:

**3 = 9ᵐ**, giving **m = ln(3)/ln(9) = 0.5**.

Using both rows gives **k = 0.0006/√0.04 = 0.003** and **k = 0.0018/√0.36 = 0.003**. For the units, subtract the overall order from 1: **1 − 0.5 = 0.5**, giving **k = 0.003 M^(1/2) s⁻¹**. Here, M^(1/2) means the square root of M. Fractional orders are allowed; forcing m to a whole number would break the fit.

## Review the decision you missed

After checking your work, name the decision that failed: choosing a comparison pair, solving the exponent, carrying units, or testing the remaining rows. Turn that decision into a short recall prompt, then solve a changed table without the answer visible.

For example: “Both concentrations double and the rate quadruples. What have I established?” The answer is **m + n = 2 under the power-law assumption**. Ask separately which additional trial would distinguish the individual powers.

The [AP Chemistry Flashcards in English](/catalog/packages/ap-chemistry-flashcards/) contain **450 course-wide cards**, including initial rates and rate-constant units. Use those concepts for regular recall with spaced review to support long-term retention, alongside full calculations. The original tables and complete solutions here remain available on this page.

*Production note: AI tools researched, drafted, and edited this article, and used GoogleSQL to check the invented exercise arithmetic. These are model exercises; no laboratory or classroom validation was performed. The illustration is AI-generated.*
