---
title: "Le Chatelier's Principle Practice: Compare Q and K"
description: "Predict equilibrium shifts with original Q-versus-K calculations, volume and inert-gas contrasts, and explained answers that separate immediate changes from reaction."
date: "2026-11-02"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/5df0fb516a8538d86e4bc2a6c32029b957744d9cdc84dd72bea21b4afa07de66.webp"
keywords:
  - "Le Chatelier principle practice"
  - "Q vs K practice problems"
  - "equilibrium shift practice"
  - "inert gas equilibrium constant volume"
  - "pressure and equilibrium"
---

Adding a reactant can leave a mixture heading left. In the combined-change problem below, doubling A while also doubling C gives `Q = 8`, above `K = 4`. The mixture consumes C as it returns to equilibrium. Looking at the added A alone gives the wrong answer.

Le Chatelier's principle describes how an equilibrium mixture responds to a disturbance by partly opposing its effect. For this practice, write the concentrations immediately after each imposed change, calculate the reaction quotient Q, then compare it with the equilibrium constant K. Separate that immediate change from the reaction that follows.

![A man extends an oak dining table while two blue plates remain on its separating halves](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/5df0fb516a8538d86e4bc2a6c32029b957744d9cdc84dd72bea21b4afa07de66.webp)

## One model for the whole worksheet

`A(g) + 3B(g) ⇌ 2C(g)`

A, B, and C are **fictional ideal gases**, not chemical identities. At the starting temperature, the supplied concentration-based equilibrium constant is **Kc = 4**. The original equilibrium concentrations are:

| Concentration | A | B | C |
| --- | --- | --- | --- |
| Original equilibrium (mol/L) | 1 | 1 | 2 |

Use the introductory concentration expression:

`Qc = [C]^2 / ([A] × [B]^3)`

The coefficients become exponents. Insert numerical concentrations in mol/L, equivalent here to normalizing each to 1 mol/L. We'll shorten Qc and Kc to **Q and K**. Don't mix this expression with pressure-based Kp. [OpenStax's equilibrium-constant lesson](https://openstax.org/books/chemistry-2e/pages/13-2-equilibrium-constants) explains the concentration and partial-pressure conventions.

Check the baseline: `Q = 2^2 / (1 × 1^3) = 4 = K`.

**Every change below starts independently from this baseline.** Unless a question changes temperature, keep it fixed. Keep volume fixed when adding or removing a reacting gas, except where expansion or compression is explicitly specified. Assume uniform mixing and separate the imposed change from the subsequent net reaction.

## Keep three snapshots on your page

| Snapshot | What to write | What it tells you |
| --- | --- | --- |
| Old equilibrium | A = 1, B = 1, C = 2; Q = K = 4 | The starting state |
| After the imposed change, before net reaction | Update only what the operation changes; calculate Q | Whether the disturbed mixture is at equilibrium |
| Reaction toward the new equilibrium | Compare that Q with K at the current temperature | Right, left, or no net shift |

Use this comparison:

- **Q < K:** net reaction goes right, consuming A and B and forming C.
- **Q > K:** net reaction goes left, consuming C and forming A and B.
- **Q = K:** no net shift is required.

At equilibrium, both directions still occur at equal rates. A shift describes the **net reaction after the disturbance**, rather than the immediate concentration jump. At the new equilibrium, Q equals K again. These problems determine the direction of the response; finding the final concentrations takes a separate equilibrium calculation. These distinctions follow [OpenStax's treatment of shifting equilibria](https://openstax.org/books/chemistry-2e/pages/13-3-shifting-equilibria-le-chateliers-principle).

## Worked example: add A at fixed volume

At the original temperature and volume, add A until its concentration becomes **2 mol/L**. Before net reaction, B remains 1 and C remains 2.

`Q = 2^2 / (2 × 1^3) = 4/2 = 2`

Since **2 < 4**, the mixture shifts **right**. During that response, A and B decrease and C increases relative to the immediately disturbed mixture.

A first jumps from 1 to 2, then some is consumed. “Shifts right” doesn't mean its final concentration falls below the original 1 mol/L. Exact final concentrations need a separate equilibrium calculation.

K stays 4 because the temperature hasn't changed.

## Worked example: halve the volume

Compress the baseline mixture to **half its original volume**, holding temperature fixed. Before net reaction, each reacting gas has the same number of moles in half the space, so every concentration doubles:

`[A] = 2, [B] = 2, [C] = 4 mol/L`

`Q = 4^2 / (2 × 2^3) = 16/16 = 1`

Thus **Q < K**, so the response is **right**. The gas coefficients sum to four on the left and two on the right, agreeing with the “toward fewer gas moles” shortcut.

Doubling every concentration multiplies the numerator by `2^2 = 4` and the denominator by `2 × 2^3 = 16`. Q becomes one-quarter of its old value: `4/4 = 1`.

Count gas coefficients, and identify how pressure changed. “Higher pressure” by itself leaves out a condition you need.

## Two inert-gas additions with different answers

An inert gas doesn't react or appear in Q. Its effect depends on the container conditions, as the [University of Texas at Austin equilibrium notes](https://ch302.cm.utexas.edu/chemEQ/equilibrium/chemEQ-all.php) explain.

### Fixed temperature and fixed volume

Add inert gas to the baseline in a rigid container. Total pressure rises, but each reacting gas still has the same moles and volume. Their concentrations remain **1, 1, and 2 mol/L**.

`Q = 2^2 / (1 × 1^3) = 4`

**Q = K: no net shift.** The reacting gases' partial pressures also remain unchanged at this fixed temperature. Increased total pressure alone hasn't changed their equilibrium expression.

### Fixed temperature and fixed total pressure

Now use a movable boundary. Starting from the baseline again, add enough inert gas that the volume **doubles before net reaction**, while temperature and total pressure stay fixed.

The reacting gases' amounts stay unchanged during expansion, so their concentrations halve:

`[A] = 1/2, [B] = 1/2, [C] = 1 mol/L`

`Q = 1^2 / ((1/2) × (1/2)^3) = 1/(1/16) = 16`

**16 > 4**, so the mixture shifts **left**, toward the side with more gas moles. Expansion changed Q; holding volume fixed would have prevented that change. The doubled volume describes the state before net reaction. With total pressure held fixed, the volume can change further as the reaction proceeds; no final volume or concentrations have been calculated here.

## Five equilibrium-shift problems to try

Reset to A = 1, B = 1, C = 2 mol/L and K = 4 for **each** question. Write the post-change concentrations, Q, the applicable K, and the direction before reading the answers.

1. **Remove C.** At fixed temperature and volume, remove C until its concentration is 1 mol/L. A and B are unchanged immediately after removal.
2. **Expand the container.** Double the volume at fixed temperature without adding or removing gas. Predict the shift and explain its relationship to the second inert-gas example.
3. **Add A and C together.** At fixed temperature and volume, prepare the disturbed concentrations A = 2, B = 1, C = 4 mol/L. Does the added reactant guarantee a right shift?
4. **Warm the mixture.** Hold volume fixed. For this hypothetical model, the forward reaction is exothermic, and the supplied K at the warmer temperature is **1**. Consider the moment after warming but before net reaction changes the amounts. Compare Q with the new K.
5. **Add a catalyst.** At the original temperature and volume, add an ideal catalyst that changes neither the gas amounts nor the equilibrium constant. Find Q and predict the equilibrium shift.

### Explained answers

**1. Remove C: right.** Immediately after removal, A = 1, B = 1, C = 1. Therefore `Q = 1^2 / (1 × 1^3) = 1`. Since `1 < 4`, net forward reaction forms C. Removal lowered C first; the reaction then raises it from that lowered value. K remains 4.

**2. Double the volume: left.** All concentrations halve, giving A = 1/2, B = 1/2, C = 1. Thus `Q = 1/((1/2) × (1/2)^3) = 16`. Since `16 > 4`, the response consumes C. This matches the constant-pressure inert-gas example: both initially double the reacting gases' volume without changing their amounts.

**3. Add A and C: left.** Use all three disturbed concentrations: `Q = 4^2 / (2 × 1^3) = 16/2 = 8`. Since `8 > 4`, the net reaction goes left despite adding A. Doubling C multiplies the numerator by four; doubling A multiplies the denominator by two. Together they double Q. Calculate their combined effect.

**4. Warm at fixed volume: left.** Before net reaction, the concentrations remain 1, 1, and 2 because neither the amounts nor volume changed. Hence `Q = 4`, but the **new K is 1**. Since `4 > 1`, the mixture shifts left. Don't compare with the old K = 4 or invent a numerical K from “exothermic”; the warmer-temperature value is given.

**5. Add a catalyst: no net shift.** The concentrations still give `Q = 4`, and K remains 4. A catalyst can speed equilibration without changing equilibrium composition. This mixture was already at equilibrium. [OpenStax's catalyst and temperature discussion](https://openstax.org/books/chemistry-2e/pages/13-3-shifting-equilibria-le-chateliers-principle) separates these effects.

## A pure solid is another reason to check the expression

For a separate hypothetical equilibrium `R(s) ⇌ S(s) + G(g)`, suppose both pure solids are present. Adding more R at fixed temperature and gas volume doesn't change Q, provided it leaves the gas concentration unchanged. Pure-solid activities are taken as 1, so neither solid amount appears in the expression. No net shift follows merely from adding R. [UT Austin's activity explanation](https://ch302.cm.utexas.edu/chemEQ/equilibrium/chemEQ-all.php) covers this omission.

For dissolution calculations, the [Ksp and molar-solubility worksheet](/blog/ksp-molar-solubility-practice/) works through finding actual equilibrium concentrations.

## Review the decision you missed

After solving these problems, turn a repeated mistake into one short recall prompt: “Inert gas, fixed temperature and volume: what happens to reacting-gas concentrations?” or “After a temperature change, which K belongs in the comparison?” Answer before turning the card over, then revisit it over spaced sessions. Repeated recall and spaced review help retain those conditions; keep doing full calculations to practice applying them.

The [450-card English AP Chemistry review deck](/catalog/packages/ap-chemistry-flashcards/) includes Q versus K, equilibrium shifts, catalysts, pressure, and pure phases within a broader course review. It is an independently written, unofficial course review, rather than a deck of these exact exercises. See [advanced chemistry flashcard practice](/blog/how-to-use-flashcards-for-advanced-chemistry/) for choosing memory targets and [better flashcards](/blog/how-to-make-better-flashcards/) for keeping each prompt focused.

*This worksheet was written and edited with substantial AI assistance. Its fictional inputs and calculations were checked with exact-fraction arithmetic. It has not been laboratory or classroom tested; AI editorial passes are not human chemistry review. The illustration is AI-generated.*
