---
title: "Density Unit Conversion Practice for g/cm³ and kg/m³"
description: "Convert g/cm³ to kg/m³ and kg/m³ to g/mL, fix a flipped denominator factor, and check your result by recovering the sample’s mass."
date: "2026-11-24"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/6a162999f5f39ae925cec17e1b00766c7a77c8d722c65efb561a6b4cfef1bb65.webp"
keywords:
  - "density unit conversion practice"
  - "g/cm³ to kg/m³"
  - "kg/m³ to g/mL"
  - "grams per cubic centimeter"
  - "density conversion worksheet"
---

A ceramic test piece has a mass of 88 g and a volume of 32 cm³. Divide those measurements and you get 2.75 grams per cubic centimeter. To express that density in kilograms per cubic meter, you’ll need to change the mass unit above the fraction bar and the volume unit below it.

Try repairing the two setups below before working through the sample. The ceramic piece is fictional, and you can treat every number in this worksheet as exact.

![A greenhouse worker pours rainwater from a wide copper cup into a narrow glass cylinder](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/6a162999f5f39ae925cec17e1b00766c7a77c8d722c65efb561a6b4cfef1bb65.webp)

## Find two conversion errors

Both setups try to convert `2.75 g/cm³` to `kg/m³`. Cancel matching units on opposite sides of the fraction bars. For each setup, write the units that are left and decide what you’d change.

```text
A. 2.75 g/cm³ × (1 kg / 1,000 g)
   = 0.00275 kg/m³

B. 2.75 g/cm³ × (1 kg / 1,000 g)
   × (1 m³ / 1,000,000 cm³)
```

### Check your repairs

- **A.** The grams cancel, leaving `0.00275 kg/cm³`. Keep the cubic centimeters in the denominator until you apply a volume factor.
- **B.** Both copies of `cm³` are below the fraction bar. They multiply to give `cm⁶`, leaving `kg·m³/cm⁶` as the product’s unit. Flip the volume factor so `cm³` cancels and `m³` ends up below the bar.

## Convert g/cm³ to kg/m³ two ways

Density is mass divided by volume, or `ρ = m / V`. The SI unit is `kg/m³`. [NIST’s guide to mass density](https://www.nist.gov/pml/special-publication-811/nist-guide-si-chapter-8) · [SI base and derived units](/blog/si-base-and-derived-units/)

Both methods use `1 kg = 1,000 g` and `1 cm³ = (0.01 m)³ = 0.000001 m³`. Cube the whole length conversion, including the factor of `0.01`. [NIST’s rules for SI prefixes](https://www.nist.gov/pml/special-publication-330/sp-330-section-3) · [Converting squared and cubed units](/blog/converting-squared-cubed-units/)

### Divide first, then convert the density

Start with `88 g / 32 cm³ = 2.75 g/cm³`. Put `g` on the bottom of the mass factor so it cancels the `g` above the bar. Put `cm³` on the top of the volume factor because the density already has `cm³` on the bottom. Each factor is a ratio of equal quantities, so it equals one and preserves the density.

```text
2.75 g/cm³ × (1 kg / 1,000 g)
= 0.00275 kg/cm³

0.00275 kg/cm³ × (1,000,000 cm³ / 1 m³)
= 2,750 kg/m³
```

The mass step divides the number by 1,000. The volume step multiplies it by 1,000,000 because a cubic meter contains a million cubic centimeters.

### Convert the measurements before dividing

Convert the original 88 g to 0.088 kg. The volume starts on its own in this step, so put `cm³` on the bottom of the factor to get `32 cm³ × (0.000001 m³ / 1 cm³) = 0.000032 m³`. Now divide the converted mass by the converted volume.

```text
ρ = 0.088 kg / 0.000032 m³
  = 2,750 kg/m³
```

### Check the density against the original mass

Take the given volume of 32 cm³ and convert it directly to 0.000032 m³. Multiply it by the density from the first method. The cubic meters cancel, so you can compare the result directly with the given mass.

```text
m = ρ × V
  = 2,750 kg/m³ × 0.000032 m³
  = 0.088 kg
  = 88 g
```

## Look up the conversion in either direction

A liter equals `1,000 cm³` or `0.001 m³`. A milliliter is one thousandth of a liter, so **`1 mL = 1 cm³`**. This gives **`1 g/cm³ = 1 g/mL = 1,000 kg/m³`**. [NIST’s liter and cubic-unit equivalents](https://www.nist.gov/pml/special-publication-330/sp-330-section-4)

| Starting unit | Target unit | Multiply the number by |
| --- | --- | --- |
| `g/cm³` or `g/mL` | `kg/m³` | 1,000 |
| `kg/m³` | `g/cm³` or `g/mL` | 0.001 |
| `g/cm³` | `g/mL` | 1 |
| `g/L` | `kg/m³` | 1 |

Grams per liter is a unit you may see for gas densities. Since `1 g = 0.001 kg` and `1 L = 0.001 m³`, the factors of 0.001 cancel in the ratio and **`1 g/L = 1 kg/m³`**. [OpenStax’s density examples](https://openstax.org/books/chemistry-2e/pages/1-4-measurements)

## Try four density conversions

Cover the table and write the factors from the unit equalities before doing the arithmetic.

1. A sample has a mass of 60 g and a volume of 25 cm³. Find its density in `g/cm³`, then convert to `kg/m³`.
2. Convert `785 kg/m³` to `g/mL`.
3. A liquid has a density of `1.18 kg/L`. Find the mass of `75 mL` in grams.
4. Convert `1,200 g/L` to `kg/m³`. Show what happens to the two numerical factors.

### Worked answers

1. Divide `60 g / 25 cm³` to get `2.4 g/cm³`. Then `2.4 g/cm³ × (1 kg / 1,000 g) × (1,000,000 cm³ / 1 m³) = 2,400 kg/m³`. Multiplying by `0.000025 m³` recovers `0.060 kg`, or `60 g`.
2. A cubic meter contains 1,000,000 mL. Put `kg` on the bottom of the mass factor and `m³` on top of the volume factor. Then `785 kg/m³ × (1,000 g / 1 kg) × (1 m³ / 1,000,000 mL) = 0.785 g/mL`.
3. Convert the volume with `75 mL × (1 L / 1,000 mL) = 0.075 L`. Multiply `1.18 kg/L × 0.075 L = 0.0885 kg`, then multiply by `1,000 g / 1 kg` to get **88.5 g**.
4. Write `1,200 g/L × (0.001 kg / 1 g) × (1 L / 0.001 m³)`. Multiplying by 0.001 and dividing by 0.001 leaves **1,200 kg/m³**.

## Rebuild the factor at your next review

Cover the answers and write down what you remember.

| Prompt | Answer |
| --- | --- |
| What volume factor converts `g/cm³` to `g/m³`? | `1,000,000 cm³ / 1 m³`. Put `cm³` on top to cancel the `cm³` below. |
| How can you check a density in `kg/m³` against the original mass? | Multiply by the given volume in `m³`, then compare the result with the given mass in `kg`. |

If you keep forgetting how cubic units and liters relate, use the cubic-volume and liter questions in this 48-card English deck to practice the volume equalities. Then use those equalities in a density problem on paper. [Squared and Cubed Unit Conversion Flashcards](/catalog/packages/squared-cubed-unit-conversion-flashcards/)

On another day, take a fresh density problem and write both factors from memory before calculating. Spreading repeated recall over time helped learners remember material longer in a study by Karpicke and Bauernschmidt. [Spaced retrieval study](https://learninglab.psych.purdue.edu/downloads/2011/2011_Karpicke_Bauernschmidt_JEPLMC.pdf)

*AI tools drafted and edited this worksheet and generated the cover illustration. The example and all four worked answers were checked with exact arithmetic.*
