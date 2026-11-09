---
title: "Temperature Conversion Practice for Readings and Changes"
description: "Practice converting temperature readings and changes across Celsius, Fahrenheit, and kelvin. Check mixed-unit endpoints and a heat calculation with worked answers."
date: "2026-11-09"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/2a8637a26ddc0109be98e8e1e8758445d24f39641b576f72f5536758ad5ab119.webp"
keywords:
  - "temperature conversion practice"
  - "temperature difference Celsius to Kelvin"
  - "Fahrenheit temperature change"
  - "delta T"
---

A thermometer goes from 41 °F to 59 °F. That's an 18 °F rise, or a 10 °C rise. Put 18 into the formula for a Fahrenheit reading, though, and you get about −7.8 °C. Read that result as a change and the rise looks like a drop.

![Brass dividers span two pencil marks that line up with a matching pair on an offset wooden strip](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/2a8637a26ddc0109be98e8e1e8758445d24f39641b576f72f5536758ad5ab119.webp)

## Pick the formula for what you’re given

A **reading** tells you where the temperature is on a scale. A **change** tells you how far it moved and in which direction. Write the change as ΔT (delta T). Once both readings are on the same scale, subtract the initial reading from the final reading. A rise gives a positive ΔT and a drop gives a negative ΔT.

For readings, the formulas below work with the number from each scale. For example, start with 41 for a reading of 41 °F. The unit symbols are °C for Celsius, °F for Fahrenheit, and K for kelvin. For direct conversions between Fahrenheit and kelvin, see [NIST’s exact temperature conversion table](https://www.nist.gov/pml/owm/si-units-temperature#temperature_conversion).

| Reading given | Unit to report | Calculation |
| --- | --- | --- |
| Celsius | K | Add 273.15 |
| Kelvin | °C | Subtract 273.15 |
| Celsius | °F | Multiply by 9/5, then add 32 |
| Fahrenheit | °C | Subtract 32, then multiply by 5/9 |

For a **change**, use the size of a step on each scale. A rise of 1 °C is a rise of 1 K or 1.8 °F. So a temperature difference in Celsius keeps the same number and sign in kelvin. For a change in °C or K, multiply by 9/5 to express it in °F. For a change in °F, multiply by 5/9 to express it in °C or K. See [NIST’s reference on temperature units and intervals](https://www.nist.gov/pml/owm/si-units-temperature).

## Check the rise by converting both readings

Start with 41 °F and 59 °F. Converting the readings separately gives `(41 − 32) × 5/9 = 5` and `(59 − 32) × 5/9 = 15`, both in °C. The offset of 32 appears in both calculations and cancels when you subtract the results.

| Scale | Initial reading | Final reading | Final minus initial |
| --- | --- | --- | --- |
| Fahrenheit | 41 °F | 59 °F | +18 °F |
| Celsius | 5 °C | 15 °C | +10 °C |
| Kelvin | 278.15 K | 288.15 K | +10 K |

If all you have is the Fahrenheit change, calculate `+18 × 5/9` to get the same rise of 10 °C or 10 K. If the two readings come in different units, convert them to a common scale before you subtract.

## Temperature conversion practice

1. A thermometer reads **10 °C**. What would it read in K and °F? Now take a **rise of 10 °C** and express the change in K and °F.
2. A freezer warms from **−8 °C to −3 °C**. Find the signed change in °C, K, and °F.
3. A sample cools from **77 °F to 288.15 K**. Find its signed change in K. Check by expressing both readings in °F, then give the size of the drop in °F.
4. The sample in question 3 has a mass of **0.250 kg** and a constant specific heat capacity of **800 J/(kg·K)** over that range. Assume it stays in the same phase. Use `q = mcΔT` to find the signed heat transfer for the sample and how much heat it releases. Here *m* is the mass, *c* is the specific heat capacity, and *q* is positive when the sample absorbs heat. See [OpenStax’s examples of heat and temperature change](https://openstax.org/books/chemistry-2e/pages/5-1-energy-basics).

## Answer key

1. **The reading is 283.15 K or 50 °F. The rise is +10 K or +18 °F.** For the reading, calculate `10 + 273.15` and `10 × 9/5 + 32`. For the rise, keep `+10` in K and calculate `+10 × 9/5` for °F. If you also got 283.15 K for the rise, you carried the reading’s 273.15 offset into a change. Subtracting two readings cancels that offset.
2. **+5 °C, +5 K, and +9 °F.** Subtract the initial value from the final value, `−3 − (−8) = +5`. The temperature went up even though both readings were below 0 °C. To get the change in °F, calculate `+5 × 9/5`.
3. **−10 K.** Convert 77 °F to 25 °C and then to 298.15 K. Now subtract `288.15 − 298.15 = −10`. For the Fahrenheit check, 288.15 K is 15 °C, which is 59 °F. Subtract `59 − 77` to get a signed change of **−18 °F**, a drop of **18 °F**. If you got +10 K, check whether you subtracted the final reading from the initial one. The magnitude is positive here because it measures the size of the drop. The signed change is negative because the sample cooled.
4. **q = −2,000 J.** Since *c* is given per kelvin, use the change in K. Multiply `(0.250 kg) × (800 J/(kg·K)) × (−10 K)`. The kg and K cancel, leaving joules. The negative sign means heat leaves the sample, so it **releases 2 kJ**. If you got −3,600 J, check whether you plugged in −18 as if it were a change in K. That number describes the change in °F.

For more practice with kelvin, joules, and how units cancel, try the [SI units practice quiz](/blog/si-base-and-derived-units/).

*AI drafted and edited this worksheet and generated the illustration. The formulas were checked against NIST and OpenStax, and the answers were recalculated independently.*
