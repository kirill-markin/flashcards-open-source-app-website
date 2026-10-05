---
title: "Converting Squared and Cubed Units: Examples and Practice"
description: "Learn when to square or cube a conversion factor, handle cm², cm³, and liters, and diagnose common mistakes with worked examples and practice answers."
date: "2026-09-28"
image: "/blog/converting-squared-cubed-units.png"
keywords:
  - "converting squared and cubed units"
  - "cm2 to m2"
  - "cm3 to m3"
  - "square unit conversions"
  - "cubic unit conversions"
  - "unit conversion practice"
---

One meter is 100 centimeters. One square meter contains **10,000 square centimeters**, and one cubic meter contains **1,000,000 cubic centimeters**. The same prefix produces three different factors because length, area, and volume count different things.

When converting squared and cubed units, raise the **length conversion factor** to the same power as the unit: square it for area, cube it for volume. Keep the starting numerical value outside that power. If your equality already relates areas or volumes, use its factor as written. For example, `1 L = 1000 mL` needs no extra cube.

Treat the quantities in these worked examples and practice questions as exact for the arithmetic; no significant-figure rounding is required. A period marks the decimal point, and commas group thousands.

![A woman fits small cream tiles into a square patch among larger terracotta patio tiles](/blog/converting-squared-cubed-units.png)

## Why the factor appears twice or three times

Imagine covering a square with sides of one meter using tiles that each measure one centimeter on a side. You need 100 tiles across and 100 rows:

```text
1 m² = (100 cm) × (100 cm) = 10,000 cm²
```

Now fill a cube with one-meter edges using cubes with one-centimeter edges. Each layer contains 10,000 small cubes, and there are 100 layers:

```text
1 m³ = (100 cm) × (100 cm) × (100 cm) = 1,000,000 cm³
```

The space being measured stays the same. Its numerical value grows because you're counting smaller units. The square and cube make the factors visible, but these conversions work for any shape.

The same reasoning works in the other direction. Since `1 cm = 0.01 m`:

```text
1 cm² = (0.01 m)² = 0.0001 m²
1 cm³ = (0.01 m)³ = 0.000001 m³
```

[NIST's SI notation rules](https://www.nist.gov/pml/special-publication-811/nist-guide-si-chapter-6-rules-and-style-conventions-printing-and-using) treat the prefix and unit symbol as one piece. The square in `cm²` applies to the whole centimeter, including its factor of `0.01` relative to the meter. If the prefix itself is unfamiliar, use the [metric prefix guide](/blog/metric-prefixes-flashcards/) as a lookup before doing the calculation.

### `4 cm²` and `(4 cm)²` mean different things

`4 cm²` means four square centimeters. The 4 is already the numerical value of an area:

```text
4 cm² = 4 × (0.01 m)² = 0.0004 m²
```

`(4 cm)²` means square the entire length of four centimeters. That could be the area of a square with 4 cm sides:

```text
(4 cm)² = 16 cm² = 0.0016 m²
```

Parentheses determine what gets squared. In `4 cm²`, the square belongs to the unit alone. Moving the 4 inside the parentheses changes the quantity. Likewise, `5 cm³` is five cubic centimeters, while `(5 cm)³` is `125 cm³`.

## Write the factor so the old unit cancels

Start with a true equality, such as `1 m = 100 cm`. Dividing either side by the other produces a conversion factor equal to one, so multiplying by it preserves the quantity. Put the unit you want to remove in the denominator. For a length relationship, square or cube the whole fraction to match the area or volume unit.

For `cm²` to `m²`, centimeters belong in the denominator:

```text
(1 m / 100 cm)² = 1 m² / 10,000 cm²
```

This is the unit-ratio method used in [ORCCA's unit analysis lesson](https://math.oer.lanecc.edu/orcca/section-unit-analysis.html). Keep the units visible until cancellation is complete. An old unit left in the expression tells you the conversion isn't finished.

### Convert 680 cm² to m²

```text
680 cm² × (1 m / 100 cm)²
= 680 cm² × (1 m² / 10,000 cm²)
= 0.068 m²
```

The `cm²` cancels, and the 680 stays outside the square. A square meter is larger than a square centimeter, so the numerical value should decrease. You could also start from `1 m² = 10,000 cm²` and use `1 m² / 10,000 cm²` once. That factor already relates areas.

### Reverse the direction: 0.032 m² to cm²

Now meters must cancel, so put them in the denominator:

```text
0.032 m² × (100 cm / 1 m)²
= 0.032 × 10,000 cm²
= 320 cm²
```

The smaller target unit requires a larger numerical value. Reversing a conversion reverses the factor; it doesn't change the exponent.

### Convert 12,500 mm³ to cm³

Here the length relationship is `1 cm = 10 mm`. Cube that factor:

```text
12,500 mm³ × (1 cm / 10 mm)³
= 12,500 mm³ × (1 cm³ / 1000 mm³)
= 12.5 cm³
```

The factor of 10 becomes 1000 because it applies along three dimensions. Dividing by 10 would leave you two factors short.

### Convert 420 cm³ to m³

Use `1 m = 100 cm`, now raised to the third power:

```text
420 cm³ × (1 m / 100 cm)³
= (420 / 1,000,000) m³
= 0.00042 m³
```

In scientific notation, the answer is `4.2 × 10^-4 m³`: `420 × 10^-6 = 4.2 × 10^-4`. The power in the conversion factor and the power in the final answer can differ because the starting numerical value also contributes.

## Liters already measure volume

A liter is defined as one cubic decimeter. [NIST's table of units accepted for use with SI](https://www.nist.gov/pml/special-publication-330/sp-330-section-4) gives:

```text
1 L = 1 dm³ = 1000 cm³ = 0.001 m³
```

Milli means one thousandth, so `1 mL = 0.001 L`. Combining those equalities gives `1 mL = 1 cm³`.

These are **volume equalities**. Their numerical factors already relate volumes. Use each once:

```text
0.72 L × (1000 mL / 1 L) = 720 mL
720 mL × (1 cm³ / 1 mL) = 720 cm³
```

The prefix in `mL` means one thousandth of a **liter**, just as the prefix in `mm` means one thousandth of a meter. Volume doesn't automatically call for a cube: the cube is needed when building a volume relationship from lengths. Using `(1000 mL / 1 L)³` here would leave the mixed expression `720,000,000 mL³/L²`, rather than a result expressed in `mL`. You couldn't simply relabel that number as milliliters.

You can also convert directly to cubic meters:

```text
0.72 L × (0.001 m³ / 1 L) = 0.00072 m³
```

Before applying a power, identify what your starting equality relates. `1 m = 100 cm` relates lengths; cube it to relate volumes. `1 L = 1000 cm³` already relates volumes; use it as written. The [SI base and derived units guide](/blog/si-base-and-derived-units/) explains how a unit such as `m³` is built from powers of length.

## Find the mistake before recalculating

Compare the setups before looking at the repairs. Some change the quantity; others preserve it but fail to express it in the requested unit. Dropping the leftover units turns that unfinished conversion into a wrong answer.

| Attempt that needs fixing | What went wrong | Repair |
| --- | --- | --- |
| `680 cm² × (1 m / 100 cm) = 6.8 m²` | Using the length factor once leaves units of `cm·m`. Relabeling them as `m²` hides the missing conversion. | Square the factor: `(680 / 100²) m² = 0.068 m²`. |
| `680 cm² × (100 cm / 1 m)²` | The factor is upside down. The units become `cm⁴/m²`; the original `cm²` doesn't cancel. | Put the original unit in the denominator: `(1 m / 100 cm)²`. |
| `4 cm² = (4 × 0.01 m)²` | The 4 has been moved inside the square, changing an area of `4 cm²` into `16 cm²`. | Keep it outside: `4 × (0.01 m)² = 0.0004 m²`. |
| `0.72 L × (1000 mL / 1 L)³` | Cubing the volume factor leaves `mL³/L²`, rather than the requested `mL`. | Use it once: `(0.72 × 1000) mL = 720 mL`. |

Check both the units and the size of the answer. For the positive areas and volumes here, a larger target unit requires a smaller numerical value. This catches multiplying when you should divide, but it won't distinguish dividing by 100 from dividing by 10,000: both make the number smaller. Write the cancellation as well as estimating the direction.

## Nine mixed practice questions

Write the conversion factor before using a calculator. For each numerical answer, include the unit and check whether the number should grow or shrink. All quantities remain exact for this exercise.

1. Convert `930 cm²` to `m²`.
2. Convert `0.0074 m²` to `cm²`.
3. Convert `6.3 cm²` to `mm²`.
4. Convert `8400 mm³` to `cm³`.
5. Convert `0.000036 m³` to `cm³`.
6. Convert `48 cm³` to `m³`.
7. Convert `0.085 L` to both `mL` and `cm³`.
8. Convert `2600 cm³` to liters. Explain whether the factor needs cubing.
9. A student writes `9 cm² = (9 × 0.01 m)² = 0.0081 m²`. Identify the first incorrect step and give the correct area. Then state the area of a square whose side is `9 cm`.

### Answers with the setup left visible

1. **`0.093 m²`.** Use `930 cm² × (1 m / 100 cm)² = (930 / 10,000) m²`. The target unit is larger, so the numerical value decreases. An answer of `9.3 m²` uses the length factor only once.
2. **`74 cm²`.** Use `0.0074 m² × (100 cm / 1 m)²`. Multiplying by 10,000 gives 74. If you got `0.74`, check the square on the factor.
3. **`630 mm²`.** Use `6.3 cm² × (10 mm / 1 cm)²`. There are 100 square millimeters in each square centimeter, even though the length relationship uses 10.
4. **`8.4 cm³`.** Use `8400 mm³ × (1 cm / 10 mm)³ = (8400 / 1000) cm³`. A result of 840 would apply only one of the three factors of 10.
5. **`36 cm³`.** Use `0.000036 m³ × (100 cm / 1 m)³`. The multiplier is one million, and the smaller target unit requires a larger numerical value.
6. **`0.000048 m³`, or `4.8 × 10^-5 m³`.** Use `48 cm³ × (1 m / 100 cm)³`. Divide by one million. Keep the initial 48 outside the cube.
7. **`85 mL = 85 cm³`.** Use `0.085 L × (1000 mL / 1 L)`, then `1 mL = 1 cm³`. Both steps relate volumes directly, so neither factor needs cubing.
8. **`2.6 L`.** Use `2600 cm³ × (1 L / 1000 cm³)`. The equality `1 L = 1000 cm³` already relates volumes. Using this factor once cancels `cm³` and leaves `L`; no additional power is needed.
9. **The first equality after `9 cm²` is wrong.** It squares the numerical value 9 as well as converting the unit. The correct conversion is `9 × (0.01 m)² = 0.0009 m²`. A square with a side of `9 cm` has area `(9 cm)² = 81 cm² = 0.0081 m²`, which is what the student's calculation actually found.

## Turn a repeated mistake into a short recall card

If you missed a question, first classify the error: prefix recall, factor direction, exponent, or arithmetic. A short flashcard can help you retrieve a reusable distinction:

| Front | Back |
| --- | --- |
| In `7 cm²`, does converting to `m²` require squaring 7? | No. Keep 7 outside the square: `7 × (0.01 m)²`. |
| Which way does the length factor face for `cm³` to `m³`? | `(1 m / 100 cm)³`, so `cm³` cancels. |
| Why use `1000 mL/L` only once when converting liters to milliliters? | It already relates volumes: `1 L = 1000 mL`. One factor cancels `L` and leaves `mL`. |

If prefix names and powers are the missing facts, the [Metric Prefix Flashcards deck](/catalog/packages/metric-prefix-flashcards/) covers that recall layer. It doesn't replace conversion practice.

For more short setups and error repairs, try the [Squared and Cubed Unit Conversion Flashcards](/catalog/packages/squared-cubed-unit-conversion-flashcards/). They cover area, cubic volume, and liter conversions, including common mistakes with factors and unit cancellation.

After reviewing a missed distinction, close the answer and solve a new problem with different numbers. Then reverse the conversion. Write the factor each time, so you can see whether you've learned the setup or just remembered an answer.
