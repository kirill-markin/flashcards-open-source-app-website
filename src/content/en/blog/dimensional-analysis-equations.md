---
title: "Dimensional Analysis of Physics Equations: Practice with Answers"
description: "Check physics equations term by term, find units of unknown coefficients, and learn what dimensional analysis cannot prove with worked examples and practice."
date: "2026-10-05"
image: "/blog/dimensional-analysis-equations.png"
keywords:
  - "dimensional analysis equations"
  - "dimensional consistency"
  - "dimensional analysis practice problems"
  - "units of coefficients"
  - "checking physics equations"
---

The proposed equation `F = ma + mv` has a problem before you put any numbers into it. `ma` has units of force; `mv` has units of momentum. You can't add them as written. Checking each term catches a mistake that disappears from view when you drop the units and just calculate.

Dimensional analysis of physics equations also works backward: an unknown coefficient needs dimensions that make its complete term fit. Use the worked examples below, then try nine diagnostic questions. Some fail immediately; others pass while still describing the wrong physics.

![A woman holds a solid replacement front against a wooden birdhouse, with the old entrance-hole panel beside it](/blog/dimensional-analysis-equations.png)

## Write the dimensions before the numbers

A dimension describes a quantity type; a unit sets its measurement scale. Meters and centimeters both measure length, with dimension `L`. Here `T` denotes time and `M` mass. Square brackets mean dimensions: `[v] = LT⁻¹` for velocity, `[a] = LT⁻²` for acceleration, `[F] = MLT⁻²` for force, and `[E] = ML²T⁻²` for energy. Negative exponents mean division. The [SI base and derived units guide](/blog/si-base-and-derived-units/) covers the corresponding units.

**Every term joined by addition or subtraction must have matching dimensions, including the other side of the equals sign.** This is the consistency rule explained in [OpenStax's dimensional analysis lesson](https://openstax.org/books/university-physics-volume-1/pages/1-4-dimensional-analysis).

Treat an equation as a short ledger:

1. Define each symbol, including coefficients.
2. Split sums into separate terms.
3. Multiply dimensions, divide them, and apply powers.
4. Compare every result with the target dimension.

Don't add the dimensional symbols together. Adding two force terms still produces a force. Throughout this worksheet, use scalar quantities for motion along one axis; positive and negative values refer to the same chosen direction.

## Locate the incompatible term

Return to `F = ma + mv`, with `m` mass, `a` acceleration, and `v` velocity:

| Term | Dimensional calculation | Result |
| --- | --- | --- |
| `F` | force | `MLT⁻²` |
| `ma` | `M × LT⁻²` | `MLT⁻²` |
| `mv` | `M × LT⁻¹` | `MLT⁻¹` |

The last term needs another inverse power of time to match force. If a proposed model instead contains `mv/τ`, where `τ` is a time, then:

```text
[mv/τ] = M × LT⁻¹ / T = MLT⁻²
```

That version passes the dimensional check. It doesn't establish that `F = ma + mv/τ` is the right force model. You still need a physical reason for each term and for the time `τ`. Dimensional analysis identifies what's missing from the dimensions; it doesn't uniquely identify the missing physics.

Be explicit about symbols. A letter such as `T` might mean tension in a problem, despite also being used for the dimension of time. Define the quantity first. The [Liew and Smith paper on checking physics equations](https://www.physics.rutgers.edu/~shapiro/tutor/finalfix.pdf) discusses this ambiguity when diagnosing students' equations.

## Find the units of an unknown coefficient

A constant doesn't automatically mean a pure number. Consider a proposed position model:

```text
x = A + Bt + Ct²
```

Here `x` is position and `t` is elapsed time. Each term must have dimension `L`, so work backward:

| Coefficient | Required dimensions | Coherent SI unit | Check the complete term |
| --- | --- | --- | --- |
| `A` | `[A] = L` | `m` | `[A] = L` |
| `B` | `[B] = L/T = LT⁻¹` | `m/s` | `[Bt] = LT⁻¹ × T = L` |
| `C` | `[C] = L/T² = LT⁻²` | `m/s²` | `[Ct²] = LT⁻² × T² = L` |

`B` has velocity dimensions and `C` has acceleration dimensions. Their physical meaning still comes from the model. For constant acceleration with initial position `x₀` and initial velocity `v₀`, the coefficients are `A = x₀`, `B = v₀`, and `C = a/2`.

For another example, suppose `F = αx²`, with `x` a length. Isolate the coefficient's dimensions:

```text
[α] = [F]/[x]²
    = MLT⁻²/L²
    = ML⁻¹T⁻²
```

Its SI unit is `N/m²`, or `kg/(m·s²)`. Sharing units with pressure doesn't make this coefficient a pressure. Its role here is to multiply a squared length and produce a force.

## Check inside the function, too

In `v = v₀ exp(-t/τ)`, both velocities have dimension `LT⁻¹`. The exponential's input must be dimensionless: its dimensions must reduce to `1`. With `[τ] = T`, `[t/τ] = T/T = 1`, so the exponent passes. The exponential also gives a dimensionless output, leaving `v₀` to supply the velocity dimension.

This input rule also applies to sine, cosine, and logarithms, as [OpenStax explains](https://openstax.org/books/university-physics-volume-1/pages/1-4-dimensional-analysis). In these expressions, a ratio such as `t/τ` works; a dimensional time alone doesn't. Check both the function's input and the complete term outside it.

## A dimensional pass leaves questions open

The number 3 has no dimensions. Neither does `1/2`. Consequently, `x = x₀ + v₀t + 3at²` passes the same dimensional check as the constant-acceleration equation with `at²/2`:

```text
[x] = [x₀] = L
[v₀t] = LT⁻¹ × T = L
[3at²] = 1 × LT⁻² × T² = L
```

[Durham's dimensional analysis guide](https://dur.ac.uk/departments/academic/physics/labs/skills/dimensional-analysis/) makes this limitation explicit: dimensions cannot determine a numerical factor.

For constant acceleration over elapsed time `t`, velocity changes linearly from `v₀` to `v₀ + at`. Its average is therefore `v₀ + at/2`. Multiply that average by time to get:

```text
x − x₀ = (v₀ + at/2)t = v₀t + at²/2
```

The factor `1/2` follows from the motion. This reasoning agrees with [OpenStax's constant-acceleration derivation](https://openstax.org/books/university-physics-volume-1/pages/3-4-motion-with-constant-acceleration). The factor 3 fails that physical check even though its units fit.

Matching dimensions also can't verify a sign, an initial condition, or whether the assumed motion applies. After a dimensional pass, check the model and direction conventions. After a failure, locate the incompatible term before changing the formula.

## Nine dimensional analysis practice problems

These exercises are written for this worksheet; the linked sources explain the underlying rules. Treat each expression as a proposal unless a physical situation is specified. Write the dimensions of every term or function input. For unknown coefficients, give dimensions and coherent SI units. Use `t` for elapsed time and subscript `0` for an initial value.

1. `v = v₀ + at²`, where `v` and `v₀` are velocities, `a` is acceleration, and `t` is time. Locate the mismatch.
2. `v² = v₀² + 4aΔx`, where `v` and `v₀` are velocities, `a` is acceleration, and `Δx` is displacement. Does it pass? Does that establish the factor 4 for constant acceleration?
3. `x = A + Bt + Ct³`, where `x` is position and `t` is time. Find the dimensions and units of `A`, `B`, and `C`.
4. `F = αv + βv²`, where `F` is force and `v` is velocity. Find the units of both coefficients. Can they have the same units?
5. `E = γx²v²`, where `E` is energy, `x` is a length, and `v` is velocity. Find `[γ]` and its SI unit.
6. `t = C√(m/k)`, where `t` is time, `m` is mass, and the positive coefficient `k` is defined by the force relation `F = -kx`. Here `x` is displacement. Find `[C]`. Can this check determine its value?
7. `x = A sin(bt)`, where `x` is displacement and `t` is time. Use the usual radian convention for sine. Find the required dimensions and units of `A` and `b`.
8. `v = v₀ exp(-ct²)`, where `v` and `v₀` are velocities and `t` is time. Find `[c]` and its SI unit. Would `c` in `s⁻¹` work?
9. An object moves at constant velocity `v = +2 m/s` for `t = 3 s`. Displacement `Δx` uses the same positive direction as `v`. Does `Δx = -vt` pass dimensionally? Is it correct here?

### Answers with the ledger visible

1. **Fails.** `[v] = [v₀] = LT⁻¹`, but `[at²] = LT⁻² × T² = L`. The proposed sum adds velocity to length. An acceleration term multiplied by `t` would have velocity dimensions; that would fix this mismatch.
2. **Passes; the factor 4 is wrong for the general constant-acceleration relation.** `[v²] = [v₀²] = L²T⁻²`, and `[4aΔx] = 1 × LT⁻² × L = L²T⁻²`. To check the physics, use `a = (v − v₀)/t` and `Δx = (v₀ + v)t/2` over a nonzero elapsed time. Then `2aΔx = (v − v₀)(v + v₀) = v² − v₀²`. The factor is 2, consistent with the [motion equations](https://openstax.org/books/university-physics-volume-1/pages/3-4-motion-with-constant-acceleration). Dimensions cannot distinguish 2 from 4.
3. **`[A] = L`, `[B] = LT⁻¹`, `[C] = LT⁻³`.** Units: `m`, `m/s`, and `m/s³`. Check all terms: `[A] = L`, `[Bt] = LT⁻¹ × T = L`, and `[Ct³] = LT⁻³ × T³ = L`. The cubic term needs three inverse powers of time in its coefficient.
4. **Different units.** `[α] = [F]/[v] = MLT⁻²/(LT⁻¹) = MT⁻¹`, giving `kg/s`. `[β] = [F]/[v]² = MLT⁻²/(L²T⁻²) = ML⁻¹`, giving `kg/m`. Check back: `[αv] = MT⁻¹ × LT⁻¹ = MLT⁻²` and `[βv²] = ML⁻¹ × L²T⁻² = MLT⁻²`. The complete terms must match force; the coefficients themselves don't have to match.
5. **`[γ] = ML⁻²`, with unit `kg/m²`.** In `[E]/([x]²[v]²)`, the denominator is `L² × L²T⁻² = L⁴T⁻²`. Dividing `ML²T⁻²` by it leaves `ML⁻²`. Substitution returns `[γx²v²] = ML⁻² × L² × L²T⁻² = ML²T⁻²`, matching energy.
6. **`[C] = 1`: dimensionless.** First `[k] = [F]/[x] = MLT⁻²/L = MT⁻²`, with unit `N/m`. Then `[m/k] = M/(MT⁻²) = T²`, so `[√(m/k)] = T`, already matching time. The coherent SI unit of `C` is `1`, normally omitted when writing its value. This check cannot determine the number `C` or what particular time the expression represents.
7. **`[A] = L`, `[b] = T⁻¹`.** Units: `m` and `s⁻¹`. `[bt] = T⁻¹ × T = 1`, and `[A sin(bt)] = L × 1 = L`. If this is an oscillation, `b` is an angular-frequency coefficient, conventionally expressed in `rad/s`. One cycle spans `2π` in the sine argument, so its frequency in cycles per second would be `|b|/(2π)`. Dimensions alone don't distinguish those numerical conventions.
8. **`[c] = T⁻²`, with unit `s⁻²`.** The exponent needs `[ct²] = T⁻² × T² = 1`. The complete right-hand side then has dimension `[v₀] × 1 = LT⁻¹`, matching velocity. A coefficient in `s⁻¹` would leave dimension `T` in the exponent, so it fails even though the outside velocities match.
9. **Passes dimensionally but has the wrong sign.** `[-vt] = 1 × LT⁻¹ × T = L`, matching displacement. With the stated direction, the displacement is `(+2 m/s)(3 s) = +6 m`; the proposed expression gives `-6 m`. Changing a sign changes the result without changing its dimensions.

## Use the missed step for your next review

Classify a miss before adding another formula to your notes: incompatible sum, lost exponent, coefficient units, dimensional function input, or a physical error that survived the check.

A useful short card asks, “In `F = αv + βv²`, must `α` and `β` have the same units?” Its answer explains that the complete terms must match, giving `kg/s` and `kg/m`. Then close the card and derive the coefficients for a new expression, such as `F = Av² + Bv³`.

The [practice-questions-to-flashcards workflow](/blog/how-to-turn-practice-questions-into-flashcards/) helps isolate that reusable mistake. Keep full derivations and unfamiliar problems alongside review, as the [algebra-based physics guide](/blog/how-to-use-flashcards-for-algebra-based-physics-1/) recommends. The next problem should test whether you can rebuild the ledger without seeing the answer.
