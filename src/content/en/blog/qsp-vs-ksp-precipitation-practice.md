---
title: "Qsp vs Ksp: Predicting Precipitation After Mixing"
description: "Practice Qsp vs Ksp with a worked mixing example. Find the saturation threshold and solve four precipitation problems with checked answers."
date: "2026-11-20"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/2c2d1a97362acb84eca86b9d0ef3e1a29b3afc8825306ed30274f691b2261b4e.webp"
keywords:
  - "Qsp vs Ksp"
  - "predicting precipitation after mixing"
  - "will a precipitate form"
  - "ion product"
  - "precipitation practice problems"
---

Mix 30.0 mL from one bottle and 60.0 mL from another. Using the concentrations on the bottles predicts a precipitate in the example below. Once you account for dilution to 90.0 mL, the mixture is unsaturated. To decide whether a solid will form, calculate the mixed ion concentrations first, then compare the ion product Qsp with Ksp.

![A fabric dyer compares two glass jars, one with a small amount of dark blue dye and one with more pale blue liquid](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/2c2d1a97362acb84eca86b9d0ef3e1a29b3afc8825306ed30274f691b2261b4e.webp)

## How to compare Qsp and Ksp

Start with the balanced dissolution equation for the solid you're testing. For the fictional salt MX₂, the equation and ion product are

`MX₂(s) ⇌ M²⁺(aq) + 2X⁻(aq)`

`Qsp = [M²⁺][X⁻]²`

Brackets give an ion's concentration in mol/L, or M. The coefficient of X⁻ is 2, so square its concentration. M²⁺ has coefficient 1. Only the dissolved ions appear in the expression. Ksp, the solubility product constant, is the value of this expression at saturation for a fixed temperature. To make the prediction, use the concentrations just after mixing, before any solid precipitates. [OpenStax, Precipitation and Dissolution](https://openstax.org/books/chemistry-2e/pages/15-1-precipitation-and-dissolution)

- **`Qsp < Ksp` means the mixture is unsaturated.** No precipitate forms. If MX₂ is already present, dissolution is favored.
- **`Qsp = Ksp` means the mixture is saturated.** There is no net precipitation.
- **`Qsp > Ksp` means the mixture is supersaturated.** Precipitation is favored.

When precipitation is favored, forming solid lowers the dissolved ion concentrations. Calculating how much solid forms takes an equilibrium calculation, and how quickly crystals appear depends on kinetics. If your problem starts with a solid and asks how much dissolves at equilibrium, see the [Ksp and molar solubility worksheet](/blog/ksp-molar-solubility-practice/).

The [Ksp and molar solubility flashcards](/catalog/packages/ksp-molar-solubility-flashcards/) cover conversions in both directions and how to set up the equilibrium expression when a common ion is already in solution.

Use **Ksp = 1.8 × 10⁻⁸** for MX₂ throughout. In these exercises, volumes add, temperature stays fixed, and other reactions are negligible. A concentration labeled with an ion gives the free concentration of that ion in the stock. Use numerical molarities in the Qsp expression for this classroom model.

## Will MX₂ precipitate in this mixture?

Mix **30.0 mL of 0.00600 M M²⁺** with **60.0 mL of 0.00300 M X⁻**. Multiply each stock concentration by the volume you pour to get the amount of each ion. Divide each amount by the full 90.0 mL. Since `1 M = 1 mmol/mL`, you can do both steps in milliliters.

| Ion | Concentration after mixing |
| --- | --- |
| M²⁺ | `0.00600 × 30.0 = 0.180 mmol`, then `0.180 / 90.0 = 0.00200 M` |
| X⁻ | `0.00300 × 60.0 = 0.180 mmol`, then `0.180 / 90.0 = 0.00200 M` |

`Qsp = 0.00200 × (0.00200)² = 8.00 × 10⁻⁹`

**MX₂ does not precipitate.** The mixed ion product is smaller than `Ksp = 1.8 × 10⁻⁸`. Using the stock concentrations gives `0.00600 × (0.00300)² = 5.40 × 10⁻⁸`, which would wrongly predict precipitation. The X⁻ stock already gives the concentration of X⁻ itself. Use its mixed concentration once as the base of the squared term.

## How concentrated does the X⁻ stock need to be?

Keep the same volumes and M²⁺ stock, so the mixed `[M²⁺]` stays at `0.00200 M`. At the saturation threshold, `Qsp = Ksp`. Take the square root to find `[X⁻]` in the mixture.

`1.8 × 10⁻⁸ = 0.00200 × [X⁻]²`

`[X⁻] at saturation = sqrt((1.8 × 10⁻⁸) / 0.00200) = 0.00300 M`

The X⁻ stock makes up 60.0 mL of the 90.0 mL mixture. To get `0.00300 M` after dilution, the stock must have `0.00300 M × (90.0 / 60.0) = 0.00450 M` X⁻. The mixture is unsaturated below this stock concentration and saturated at equality. **Precipitation is favored above 0.00450 M in the X⁻ stock.**

## What happens if you swap the volumes?

Now use 0.00600 M for **both** stocks. In each trial, a 30.0 mL portion gives a mixed concentration of `0.00600 × 30.0 / 90.0 = 0.00200 M`. A 60.0 mL portion gives `0.00600 × 60.0 / 90.0 = 0.00400 M`.

| Stock volumes | Qsp from the mixed concentrations |
| --- | --- |
| 30.0 mL M²⁺ and 60.0 mL X⁻ | `0.00200 × (0.00400)² = 3.20 × 10⁻⁸` |
| 60.0 mL M²⁺ and 30.0 mL X⁻ | `0.00400 × (0.00200)² = 1.60 × 10⁻⁸` |

The first mix favors precipitation. The second is unsaturated. Swapping the volumes doubles `[M²⁺]` and halves `[X⁻]`. Since `[X⁻]` is squared, Qsp changes by a factor of `2 × (1/2)² = 1/2`. That takes Qsp from above Ksp to below it with the same bottles and the same total volume.

## Four precipitation practice problems

Use **Ksp = 1.8 × 10⁻⁸** for MX₂ in each problem. Keep extra digits until you compare Qsp with Ksp.

1. **Test equality.** Mix 30.0 mL of 0.00600 M M²⁺ with 60.0 mL of 0.00450 M X⁻. Calculate Qsp and decide whether net precipitation is favored.
2. **Count ions from a formula.** Mix 30.0 mL of 0.00600 M M²⁺ with 60.0 mL of a 0.00250 M solution of the soluble fictional salt ZX₂. Each formula unit releases two X⁻ ions. Treat Z²⁺ as a spectator ion. Is precipitation of MX₂ favored?
3. **Check the exponent.** After mixing, `[M²⁺] = 0.00450 M` and `[X⁻] = 0.00190 M`. A classmate squares `[M²⁺]` because of the 2+ charge and leaves `[X⁻]` to the first power. Find the product this gives, then calculate the correct Qsp and make the prediction.
4. **Find a threshold when both stocks supply X⁻.** One stock contains 0.00600 M M²⁺ and 0.00100 M X⁻. Mix 60.0 mL of it with 30.0 mL from a second, X⁻ stock. What X⁻ concentration must the second stock have to make the mixture saturated?

### Answers with calculations

**1.** `[M²⁺] = 0.00600 × 30.0 / 90.0 = 0.00200 M` and `[X⁻] = 0.00450 × 60.0 / 90.0 = 0.00300 M`. Then `Qsp = 0.00200 × (0.00300)² = 1.80 × 10⁻⁸`, exactly equal to Ksp using the supplied values. **The mixture is saturated with no net precipitation.**

**2.** The ZX₂ stock supplies `2 × 0.00250 = 0.00500 M` X⁻. After mixing, `[X⁻] = 0.00500 × 60.0 / 90.0 = 0.003333… M` and `[M²⁺] = 0.00600 × 30.0 / 90.0 = 0.00200 M`. Then `Qsp = 0.00200 × (0.003333…)² ≈ 2.22 × 10⁻⁸`. It exceeds Ksp, so **precipitation of MX₂ is favored**.

**3.** Squaring the cation concentration gives `(0.00450)² × 0.00190 ≈ 3.85 × 10⁻⁸` and leads to a false prediction of precipitation. The exponent comes from the ion's coefficient in the balanced dissolution equation. Squaring `[X⁻]` gives `Qsp = 0.00450 × (0.00190)² ≈ 1.62 × 10⁻⁸`. That's below Ksp, so **the mixture is unsaturated**.

**4.** The mixed cation concentration is `0.00600 × 60.0 / 90.0 = 0.00400 M`. At saturation, the mixture needs `[X⁻] = sqrt((1.8 × 10⁻⁸) / 0.00400) ≈ 0.0021213 M`, or about `0.0021213 × 90.0 = 0.19092 mmol` of X⁻ in total. The first stock already supplies `0.00100 × 60.0 = 0.0600 mmol`. The second stock must supply the remaining `0.19092 − 0.0600 = 0.13092 mmol` in 30.0 mL, so its concentration is **about 0.00436 M X⁻**. Forgetting the contribution from the first stock would give a threshold of about 0.00636 M.

## Three quick recall cards

| Front | Back |
| --- | --- |
| Two stocks both supply X⁻. How do you find the mixed `[X⁻]`? | Add the amounts of X⁻ from both stocks and divide by the total volume. |
| Which number sets the power on `[X⁻]` in Qsp for MX₂? | The coefficient 2 on X⁻ in the balanced dissolution equation. |
| What does `Qsp = Ksp` tell you about precipitation? | The mixture is saturated, with no net precipitation. |

Redo a problem you missed using the original concentrations and volumes. On later days, answer the cards from memory to practice recalling the setup after time has passed. For spaced recall of Q vs K, Ksp, and how adding fluoride changes Qsp for CaF₂, see the 450-card [Nibomo AP Chemistry deck](/catalog/packages/ap-chemistry-flashcards/).

*This worksheet was written and edited with substantial AI assistance. The salts and exercise inputs are fictional. The numerical results were checked with decimal arithmetic.*
