---
title: "Buffer Calculations Practice: Choose the pH Method After Mixing"
description: "Practice buffer pH calculations with seven solved problems on acid and base additions, dilution, capacity, and when to switch from a buffer shortcut to equilibrium."
date: "2026-10-30"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/03471a09e685116b7348cc78a96c19e2b039b73529349941a0bc59737118f808.webp"
keywords:
  - "buffer calculations practice"
  - "buffer pH after adding acid"
  - "Henderson-Hasselbalch practice"
  - "buffer dilution and capacity"
  - "buffer exhaustion"
---

Two 100 mL samples start at approximately pH 5.00. Add **10.0 mL of 0.200 M HCl** to each: one finishes at pH **4.82**, the other at **2.04**. Their starting acid-to-base ratios match. The amounts available to react don't.

This buffer calculations practice uses one conjugate pair throughout. The task is to choose the pH method after mixing: work in moles, inspect what remains, then calculate pH. A worked example comes first, followed by seven problems with complete solutions.

![A produce seller lifts the last pear from a sparse crate beside an equally sized crate full of apples and pears](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/03471a09e685116b7348cc78a96c19e2b039b73529349941a0bc59737118f808.webp)

## Set up one model for all the problems

Use a fictional weak monoprotic acid **HA**, with **Kₐ = 1.0 × 10⁻⁵** and **pKₐ = 5.00** at 25 °C. Its sodium salt, NaA, dissociates completely to supply the conjugate base A⁻. HCl supplies strong acid; NaOH supplies strong base. M means mol/L.

These are paper calculations. Assume additive volumes, ideal solutions with activities represented by concentrations, and no other reacting solutes. Treat the supplied quantities as exact for the arithmetic, keep guard digits while working, and report pH to two decimal places.

Unless a question says otherwise, start with a **fresh 100 mL sample prepared with 0.010 mol HA and 0.010 mol NaA**. Each formal concentration is 0.100 M. “Formal” means calculated from the supplied amounts. Equilibrium shifts the actual HA and A⁻ concentrations slightly.

HA and A⁻ differ by one proton. If the formulas feel unfamiliar, review the [conjugate acid–base pair examples](/blog/conjugate-acid-base-pairs/).

## Decide what remains before using a logarithm

Account for an added strong acid or base with these 1:1 neutralization reactions:

**A⁻ + H₃O⁺ → HA + H₂O**

**HA + OH⁻ → A⁻ + H₂O**

Calculate each incoming amount with **n = CV**, using liters with mol/L. Subtract the reacting amount from the component it consumes and add it to the component it forms. Then choose the next step from that mole ledger:

| What the mole ledger contains | Suitable next step |
| --- | --- |
| Appreciable HA and A⁻, with small subsequent equilibrium changes | Henderson–Hasselbalch using their updated amounts |
| HA only, with no excess strong acid | Weak-acid equilibrium using Kₐ and the formal HA concentration |
| A⁻ only, with no excess strong base | Weak-base equilibrium using Kᵦ = K_w/Kₐ |
| Substantial excess strong acid or base | Calculate its concentration in the final volume; check whether weak-species contributions are negligible |

The ledger tracks stoichiometry before the final equilibrium adjustment. An entry of zero A⁻, for example, doesn't prevent HA from ionizing to produce A⁻ afterward. [OpenStax's buffer lesson](https://openstax.org/books/chemistry-2e/pages/14-6-buffers) explains how the conjugate partners respond to added acid and base.

In our ideal model, the Henderson–Hasselbalch relationship is:

**pH = pKₐ + log₁₀([A⁻]/[HA])**

The brackets mean **equilibrium concentrations**. The usual worksheet shortcut replaces them with concentrations from the post-neutralization ledger. When that approximation is justified, both concentrations share a final volume, so it cancels:

**pH ≈ pKₐ + log₁₀(n_A/n_HA)**

Here, n_A means moles of A⁻. Both amounts must remain appreciable, and equilibrium must change them only slightly. A positive but tiny remainder isn't enough to justify the shortcut. Near exhaustion or at very low concentrations, solve the equilibrium more fully. Henderson–Hasselbalch still describes the equilibrium ratio; substituting the ledger amounts is what becomes unreliable.

## Worked example: add 0.002 mol of HCl

Add **10.0 mL of 0.200 M HCl** to the starting sample. The dose is:

**n(HCl) = 0.200 × 0.0100 = 0.00200 mol**

That consumes 0.002 mol A⁻ and forms the same amount of HA:

| Mole ledger | HA | A⁻ | Added strong acid |
| --- | ---: | ---: | ---: |
| Before neutralization | 0.010 | 0.010 | 0.002 |
| Change | +0.002 | −0.002 | −0.002 |
| After neutralization | 0.012 | 0.008 | 0 |

Both buffer partners remain in appreciable amounts:

**pH ≈ 5.00 + log₁₀(0.008/0.012) = 4.82**

The direction makes sense: acid addition lowers the A⁻/HA ratio and the pH. Reusing 0.010/0.010 would incorrectly leave pH at 5.00.

Final volume is **0.110 L**. Dividing both amounts by that volume gives the same ratio. Keep the volume in your ledger: after buffer exhaustion, you may need it to find a single species' concentration.

## Try seven buffer problems

Each question is independent unless it explicitly refers to another. Cover the solutions and write **remaining species → chosen method → pH** for each numerical answer.

1. Add **10.0 mL of 0.200 M NaOH** to the starting sample. Find the remaining HA and A⁻ amounts and the pH.
2. Instead of using the starting sample, mix **50.0 mL of 0.200 M HA** with **50.0 mL of 0.400 M NaA**. Find the pH. Explain why the stock concentration ratio alone would be unsafe if the volumes differed.
3. Dilute the entire starting sample **to 1.000 L** with water. Find its approximate pH and both formal concentrations. Then take a well-mixed **100 mL aliquot**: how much HA and A⁻ does that portion contain? Compare the A⁻ available to neutralize added acid with that in the original 100 mL sample.
4. Add **10.0 mL of 0.200 M HCl** to the **100 mL diluted aliquot from question 3**. Find the excess strong acid and approximate pH. Compare with the worked example.
5. Add **50.0 mL of 0.200 M HCl** to a fresh starting sample. All its formal A⁻ is consumed. Find the pH. Explain why the answer isn't 7.00.
6. Add **60.0 mL of 0.200 M HCl** to a fresh starting sample. Find the excess strong acid, final volume, and approximate pH.
7. Approximately how many milliliters of **0.200 M HCl** would lower a fresh starting sample to **pH 4.50**? Solve using the Henderson–Hasselbalch approximation and check that both buffer forms remain.

## Solutions with the method choices

### 1. Added base gives pH 5.18

NaOH supplies **0.200 × 0.0100 = 0.00200 mol OH⁻**. Neutralization consumes HA and forms A⁻:

**n_HA = 0.010 − 0.002 = 0.008 mol**

**n_A = 0.010 + 0.002 = 0.012 mol**

Both remain appreciable, so **pH ≈ 5.00 + log₁₀(0.012/0.008) = 5.18**. Base addition raises the A⁻/HA ratio and the pH. Reversing the ratio would give the wrong direction.

### 2. Mixing unequal stocks gives pH 5.30

HA contributes **0.200 × 0.0500 = 0.0100 mol**; NaA contributes **0.400 × 0.0500 = 0.0200 mol A⁻**. Thus:

**pH ≈ 5.00 + log₁₀(0.0200/0.0100) = 5.30**

The final volume is 0.100 L, giving formal concentrations of 0.100 M HA and 0.200 M A⁻. The stock concentration ratio happens to work because the delivered volumes are equal. With different volumes, calculate each amount first: the ratio is **(C_A × V_A)/(C_HA × V_HA)**.

### 3. Dilution keeps pH near 5.00 but lowers capacity per volume

The entire liter still contains **0.010 mol of each component**. Both formal concentrations become **0.0100 M**, while the ratio stays 1. Henderson–Hasselbalch gives **pH ≈ 5.00**.

The 100 mL aliquot contains only **0.0100 × 0.100 = 0.00100 mol of each**. It has one tenth as much A⁻ available to neutralize added acid as the original 100 mL sample. It also has one tenth as much HA available to neutralize added base.

Equal starting pH doesn't mean equal buffer capacity. Capacity describes how much strong acid or base is needed for a specified pH change, often expressed per liter of solution. The diluted solution has lower capacity per liter. The dose that consumes all formal A⁻ is a separate stoichiometric boundary, not a definition of buffer capacity.

Diluting the **whole sample** didn't remove its neutralizing moles. It still has 0.010 mol A⁻. Adding 0.002 mol acid to that whole liter would leave the same 0.008/0.012 mole ratio as the worked example, giving approximately pH 4.82. Taking only a 100 mL portion changes how many moles you have. The [serial dilution practice](/blog/serial-dilution-practice/) develops this amount-versus-concentration distinction.

### 4. The diluted aliquot reaches pH 2.04

The acid dose is **0.002 mol**, but the aliquot supplies only **0.001 mol A⁻**. Neutralization leaves:

- HA: **0.001 + 0.001 = 0.002 mol**.
- Formal A⁻: **0 mol**.
- Excess strong acid: **0.002 − 0.001 = 0.001 mol**.

In **0.110 L**, excess acid gives **[H₃O⁺] ≈ 0.001/0.110 = 0.00909 M**, so **pH ≈ 2.04**. HA adds a small amount of hydronium, but the full equilibrium calculation confirms that it doesn't change this rounded answer.

This is the comparison from the opening: the original sample retained both buffer partners after the dose, while the diluted aliquot has excess strong acid.

### 5. At the exhaustion point, solve weak-acid equilibrium

HCl supplies **0.200 × 0.0500 = 0.0100 mol**, consuming the initial 0.010 mol A⁻. The ledger now contains **0.020 mol HA**, no formal A⁻, and no excess strong acid, in **0.150 L**.

Set **C = 0.020/0.150 = 0.133333… M**. HA partially ionizes, making hydronium and A⁻. With water's contribution negligible here, let x = [H₃O⁺]. Then [A⁻] ≈ x and [HA] ≈ C − x:

**Kₐ = x²/(C − x)**

**x = (√(Kₐ² + 4KₐC) − Kₐ)/2 ≈ 0.001150 M**

Therefore **pH ≈ −log₁₀(x) = 2.94**. [OpenStax's acid-strength lesson](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases) explains this weak-acid equilibrium setup.

“No excess HCl” doesn't imply neutral pH. HA still ionizes, so the answer is acidic. Substituting the ledger's zero A⁻ into the Henderson–Hasselbalch shortcut would require log₁₀(0); the equilibrium [A⁻] is positive. For more on acid strength and partial ionization, see [strong vs weak acids](/blog/strong-vs-weak-acids/).

### 6. Excess HCl gives pH 1.90

The dose is **0.200 × 0.0600 = 0.0120 mol**. After consuming 0.010 mol A⁻, **0.0020 mol strong acid remains**. Final volume is **0.160 L**:

**[H₃O⁺] ≈ 0.0020/0.160 = 0.0125 M**

**pH ≈ −log₁₀(0.0125) = 1.90**

The weak acid's contribution is negligible at the reported precision. Dividing by the original 0.100 L would overstate the hydronium concentration.

### 7. About 26.0 mL gives the target pH

Let x be moles of HCl added. After neutralization:

**n_A = 0.010 − x; n_HA = 0.010 + x**

Set the required ratio from the target pH:

**(0.010 − x)/(0.010 + x) = 10^(4.50 − 5.00) = 0.316227…**

Rearranging gives **x = 0.010(1 − 0.316227…)/(1 + 0.316227…) ≈ 0.00519494 mol**.

**V(HCl) = x/0.200 ≈ 0.0259747 L = 26.0 mL**

About **0.004805 mol A⁻** and **0.015195 mol HA** remain. This is a buffer calculation with an approximate target: the full ideal-equilibrium check gives pH **4.50047** for the unrounded dose.

## What the calculation check established

An executed Python calculation used exact-fraction stoichiometry, then separately solved ideal mass and charge balances including **K_w = 1.0 × 10⁻¹⁴** for ten compositions. These covered the starting sample, acid and base additions, whole-sample dilution, diluted aliquot, exhaustion, excess acid, unequal stocks, and target dose.

For each composition in that check where the Henderson–Hasselbalch shortcut was used, it differed from the numerical equilibrium result by less than **0.005 pH units**. The undiluted starting sample gave **5.00009**; the tenfold-diluted solution gave **5.00087**. Both round to 5.00. Treating pH as unchanged on dilution works here, but exact equilibrium needn't preserve it at every concentration.

## Remember the decision, then do another calculation

If you missed a method change, make a short recall prompt: **“After the mole calculation leaves HA but no A⁻ or excess HCl, what comes next?”** Answer: weak-acid equilibrium, using the formal HA concentration and Kₐ.

Regular recall and spaced review help retain that decision over time. Then practice full calculations with changed amounts, including a mole ledger and a final-volume check.

Nibomo publishes this article and offers the [AP Chemistry Flashcards in English](/catalog/packages/ap-chemistry-flashcards/): **450 course-wide cards** for broader recall, including conjugate pairs and buffer concepts. The deck excludes quantitative acid/base additions to existing buffers; use it alongside calculation practice. This article's original exercises and complete answers stand on their own.

*Production note: AI tools assisted substantially with research, drafting, and constructing the original exercises. Exact stoichiometric arithmetic and a separate numerical ideal-equilibrium calculation checked the answers. The hero illustration was AI-generated. No laboratory experiment, classroom trial, or human chemistry review was performed.*
