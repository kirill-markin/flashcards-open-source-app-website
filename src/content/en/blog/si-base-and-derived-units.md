---
title: "SI Base Units and Derived Units: Examples and a Practice Quiz"
description: "Learn the seven SI base units, build derived units from equations, and check common symbol and exponent mistakes with a short quiz and worked answers."
date: "2026-09-21"
image: "/blog/si-base-and-derived-units.png"
keywords:
  - "SI base units"
  - "SI derived units examples"
  - "SI units practice"
  - "density in SI base units"
  - "density in newtons"
  - "SI units quiz"
---

A newton can be written using just three SI base units: `N = kg·m/s²`. The squared second is easy to lose when you're recalling a table. Rebuild the expression from force = mass × acceleration, though, and you can see where it comes from—and use the same method for pressure, energy, and density.

Start with the seven SI base units below, then work through the unit algebra. The short quiz checks three separate skills: matching quantities to units, handling exponents, and recognizing what a measurement actually describes.

![A hiker on broad snowshoes pauses beside deeper boot prints in a snowy woodland trail](/blog/si-base-and-derived-units.png)

## The seven SI base units

A **quantity** is what you measure, such as mass. A **unit** is the reference you express it in, such as the kilogram. A **unit symbol** is its standardized notation: `kg`. In a measurement of `3 kg`, the number is 3 and the unit is the kilogram.

The [BIPM's SI base-unit reference](https://www.bipm.org/en/measurement-units/si-base-units) lists these seven quantity–unit pairs:

| Base quantity | Unit name | Unit symbol |
| --- | --- | --- |
| Time | second | `s` |
| Length | meter (metre) | `m` |
| Mass | kilogram | `kg` |
| Electric current | ampere | `A` |
| Thermodynamic temperature | kelvin | `K` |
| Amount of substance | mole | `mol` |
| Luminous intensity | candela | `cd` |

The base unit of mass is the **kilogram**, even though its name contains the prefix *kilo*. Also keep amount of substance separate from mass: its unit is the mole, not the kilogram.

## What makes a unit derived?

Derived units combine powers of base units. Speed uses length divided by time, giving `m/s`. Volume uses three powers of length, giving `m³`. Neither needs a special unit name.

Some combinations do have special names: the newton, pascal, joule, and watt are examples. They remain derived units even when written as one symbol. [NIST's SI reference](https://www.nist.gov/pml/special-publication-330/sp-330-section-2) lists 22 derived units with special names and symbols; this isn't a limit on the number of derived quantities.

In the examples below, the numerical factor relating each named unit to its base-unit expression is 1. These are **coherent derived units**: `1 N = 1 kg·m/s²` without an extra conversion factor.

## Build the units from the equation

Keep the quantity equation and the unit calculation on separate lines. Replace each quantity with its unit, then simplify the powers. A negative exponent means division: `s⁻²` means `1/s²`.

### Force: why the second is squared

Average acceleration is change in velocity divided by elapsed time. Velocity already has units of `m/s`, so dividing by time again gives:

`(m/s)/s = m/s²`

Instantaneous acceleration has the same unit. For constant mass, Newton's second law gives net force = mass × acceleration. Its unit calculation is:

`kg × m/s² = kg·m/s² = N`

For example, a `3 kg` object accelerating at `2 m/s²` has a net force of `6 N`. Writing `kg·m/s` would lose one division by time.

### Pressure: dividing removes powers of meters

Average pressure is normal force divided by area. Since area has units of `m²`:

`N/m² = (kg·m/s²)/m² = kg/(m·s²) = Pa`

The meter in the numerator cancels one of the two meters in the denominator. A normal force of `12 N` spread uniformly over `3 m²` gives `4 Pa`.

### Energy and power: one more multiplication, then division

For a constant force acting in the same direction as a displacement, work = force × displacement:

`N × m = (kg·m/s²) × m = kg·m²/s² = J`

A force of `6 N` acting along a displacement of `4 m` does `24 J` of work. If that work is done in `3 s`, the average power is `8 W`:

`J/s = (kg·m²/s²)/s = kg·m²/s³ = W`

Notice where each exponent came from. Work adds a meter; power adds another second to the denominator.

| Quantity | Named unit | Expression in base units |
| --- | --- | --- |
| Force | newton, `N` | `kg·m·s⁻²` |
| Pressure | pascal, `Pa` | `kg·m⁻¹·s⁻²` |
| Energy or work | joule, `J` | `kg·m²·s⁻²` |
| Power | watt, `W` | `kg·m²·s⁻³` |

These expressions agree with [NIST's table of named derived units](https://www.nist.gov/pml/special-publication-330/sp-330-section-2).

## Density in SI base units—and in newtons

Mass density is mass divided by volume. Its SI base-unit expression follows directly:

`kg/m³ = kg·m⁻³`

Suppose a sample has a mass of `8 kg` and occupies `0.004 m³`. Its average density is:

`(8 kg)/(0.004 m³) = 2000 kg/m³`

You can't express mass density in newtons alone: the newton is a unit of force. You can use a combination containing newtons by replacing the kilogram with its full equivalent. Rearrange `N = kg·m/s²`:

`kg = N·s²/m`

Now substitute that into the density unit:

`kg/m³ = (N·s²/m)/m³ = N·s²/m⁴`

So **`kg/m³` and `N·s²/m⁴` are equivalent**. The numerical value stays the same: `2000 kg/m³ = 2000 N·s²/m⁴`. The second expression contains a derived unit, so it is not an answer expressed entirely in SI base units.

**`N/m³` measures force per volume**. When the force is weight, this is weight density, also called specific weight. Because weight = mass × gravitational acceleration, weight density = mass density × gravitational acceleration. Using an assumed `g = 9.8 m/s²` for this exercise:

`2000 kg/m³ × 9.8 m/s² = 19,600 N/m³`

That changes the physical quantity being calculated. Rewriting `kg/m³` as `N·s²/m⁴` only changes its unit expression.

## Small notation errors change the answer

Unit symbols don't take plurals. Write **five seconds** in words or **`5 s`** with a symbol. Avoid `5 ss`, `5 secs`, and `5 s.` unless that period ends the sentence. Leave a space between the number and the symbol.

Case also matters: use `K` for kelvin and `N` for newton, while the names *kelvin* and *newton* stay lowercase in ordinary text. These conventions come from [NIST's guidance on unit symbols and names](https://www.nist.gov/pml/special-publication-330/sp-330-section-5).

Use a dot or space for multiplication: `N·m` or `N m`. Write a denominator clearly, such as `kg/(m·s²)`, or use negative exponents: `kg·m⁻¹·s⁻²`. If prefixes are the source of confusion, practice those separately with the [metric prefix guide](/blog/metric-prefixes-flashcards/).

Units also need quantity context. Energy and torque both reduce to `kg·m²/s²`; that doesn't make them the same quantity. [NIST specifies newton meters for torque, not joules](https://www.nist.gov/pml/special-publication-330/sp-330-section-2). A dimensional check can catch an incompatible unit, but matching dimensions alone cannot prove that an equation describes the right physics.

## SI units practice: try these before reading the answers

Write each answer on paper. For questions involving derived units, include the substitution step so you can locate any mistake.

1. Give the unit name and symbol for amount of substance.
2. Correct this measurement using the SI symbol: “The elapsed time was 12 secs.”
3. Is `m³` a base unit or a derived unit?
4. A `2 kg` object accelerates at `3 m/s²`. Find the net force and express its unit using only base units.
5. Reduce `N/m²` to base units. What quantity does this unit commonly measure?
6. A machine transfers `45 J` in `5 s`. Find its average power, including the base-unit expression.
7. A sample has mass `9 kg` and volume `0.002 m³`. Find its mass density, then rewrite the unit using `N`, `s`, and `m`. Separately, find its weight per volume using an assumed `g = 10 m/s²`.
8. Does a value in `N·m` necessarily describe energy? Explain.

### Answers and what to check

1. **Mole, `mol`.** The quantity is amount of substance. If you answered kilogram, review the distinction between amount of substance and mass.
2. **“The elapsed time was 12 s.”** The symbol stays `s`; the final period punctuates the sentence.
3. **Derived.** Volume combines three powers of the base unit of length. A unit can be derived without having a special name.
4. **`6 N = 6 kg·m/s²`.** Multiply `2 kg × 3 m/s²`. If the square on the second is missing, check that you copied the full acceleration unit.
5. **`kg·m⁻¹·s⁻²`, commonly pressure.** Substitute `N = kg·m·s⁻²`, then divide by `m²`. The meter exponent becomes `1 − 2 = −1`.
6. **`9 W = 9 kg·m²/s³`.** Divide energy by time: `(45 J)/(5 s)`. The denominator gains one power of seconds.
7. **Mass density: `4500 kg/m³ = 4500 N·s²/m⁴`. Weight per volume: `45,000 N/m³`.** First divide `(9 kg)/(0.002 m³)`, then substitute `kg = N·s²/m` to rewrite the density unit. For weight per volume, multiply the mass density by `10 m/s²`. Rewriting the unit leaves the quantity and its numerical value unchanged here; multiplying by gravitational acceleration calculates a different quantity.
8. **No.** Torque also uses `N·m`. Identify the quantity from the problem; its dimensions don't uniquely identify it.

## Make a flashcard for the mistake you actually made

If you missed a name or symbol, a short recall card fits: “SI unit of electric current?” → “ampere, `A`.” If you lost an exponent, ask for a derivation: “Reduce `N/m²` to base units,” with the cancellation on the back. For the density confusion, ask what each of `kg/m³` and `N/m³` measures.

The [SI Units Flashcards deck](/catalog/packages/si-units-flashcards/) covers the seven base units and 22 named derived units, including quantity–unit recall and the named derived units' base-unit expressions. Use it for that reference knowledge. Prefixes, conversions, unnamed derived units, and worked physics problems need separate practice.

After reviewing a missed card, close it and redo the corresponding question with different numbers. The [algebra-based physics study guide](/blog/how-to-use-flashcards-for-algebra-based-physics-1/) shows how to combine that recall work with full problems.
