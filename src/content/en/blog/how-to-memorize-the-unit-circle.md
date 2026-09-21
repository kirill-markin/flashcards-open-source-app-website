---
title: "How to Memorize the Unit Circle: Radians, Coordinates, and a Quiz"
description: "Rebuild the unit circle from first-quadrant values, convert degrees and radians, and diagnose mistakes with a 16-point table and mixed practice quiz."
date: "2026-09-21"
image: "/blog/how-to-memorize-the-unit-circle.png"
keywords:
  - "how to memorize the unit circle"
  - "unit circle degrees and radians"
  - "unit circle coordinates"
  - "unit circle practice quiz"
  - "16 point unit circle"
---

At 30°, the unit-circle point is (√3/2, 1/2). At 150°, it's (−√3/2, 1/2). One reflection gives you the second answer. **To memorize the unit circle, learn the first-quadrant values, then reconstruct the other quadrants using coordinate signs.** You can recover a forgotten entry without restarting a memorized list.

Keep three pieces separate as you practice: the angle, its radian measure, and its coordinates. Getting 150° = 5π/6 right doesn't necessarily mean you can give its sine. The quiz below checks each piece, including the mistakes that a neatly copied chart can hide.

![Two yellow Ferris-wheel cabins sit at the same height on opposite sides, illustrating different angles with the same sine value](/blog/how-to-memorize-the-unit-circle.png)

## Start with what the coordinates mean

Draw a circle of radius 1 centered at (0, 0). An angle in standard position starts along the positive x-axis. Turn counterclockwise for a positive angle and clockwise for a negative one. Where the final ray meets the circle, the point is **(cos θ, sin θ)**: cosine is horizontal, sine is vertical. This is the definition used in [OpenStax's unit-circle lesson](https://openstax.org/books/precalculus-2e/pages/5-2-unit-circle-sine-and-cosine-functions).

The four axis positions follow directly from the drawing:

| Angle | Point (cos θ, sin θ) |
| --- | --- |
| 0° | (1, 0) |
| 90° | (0, 1) |
| 180° | (−1, 0) |
| 270° | (0, −1) |

These points are useful checks. If your formula says cos 90° = 1, look at the top of the circle: its horizontal coordinate is zero.

## Build 30°, 45°, and 60° from two triangles

For 45°, draw a right triangle whose hypotenuse is a radius of the circle. Its two legs have equal length, a. Pythagoras gives a² + a² = 1, so a² = 1/2 and a = √2/2. Both coordinates are positive in the first quadrant:

**45° → (√2/2, √2/2).**

For the other two angles, split an equilateral triangle of side 2 down the middle. Each resulting right triangle has hypotenuse 2, a short leg of 1, and a long leg of √3, since 2² − 1² = 3. Divide every length by 2 to put the hypotenuse on the unit circle. The legs become 1/2 and √3/2.

At 30° above the horizontal axis, the horizontal leg is longer. At 60°, the vertical leg is longer:

- **30° → (√3/2, 1/2)**
- **60° → (1/2, √3/2)**

A compact memory aid follows from those results. For angles 0°, 30°, 45°, 60°, 90°, sine runs through **√0/2, √1/2, √2/2, √3/2, √4/2**. Cosine runs through the same sequence backward. Simplify the endpoints to 0 and 1.

Use that sequence to recover a value, then check it against the picture. Near 0°, x should be large and y small. The pair (1/2, √3/2) therefore belongs to 60°, not 30°.

## Convert degrees and radians from one relationship

One radian is the angle that cuts off an arc as long as the radius. On a circle of radius 1, the circumference is 2π, so a full turn is 360° = 2π radians. Half a turn is 180° = π radians. That gives both conversions:

- Degrees to radians: multiply by π/180.
- Radians to degrees: multiply by 180/π.

For example, 240° × π/180 = 4π/3. Going the other way, (7π/4) × 180/π = 315°. The π cancels in the second calculation. [OpenStax's angle lesson](https://openstax.org/books/precalculus-2e/pages/5-1-angles) explains radian measure and these conversions.

The first-quadrant landmarks are 30° = π/6, 45° = π/4, and 60° = π/3. Their denominators are 6, 4, and 3 because those angles fit six, four, and three times into a half-turn. Remembering that relationship is more useful than remembering an unexplained sequence of fractions.

## Reconstruct the other quadrants

For an angle off the axes, its **reference angle** is the acute angle between its final ray and the horizontal axis. It supplies the coordinate magnitudes. The quadrant supplies the signs.

| Quadrant | Angle range | x = cos θ | y = sin θ |
| --- | --- | --- | --- |
| I | Between 0° and 90° | Positive | Positive |
| II | Between 90° and 180° | Negative | Positive |
| III | Between 180° and 270° | Negative | Negative |
| IV | Between 270° and 360° | Positive | Negative |

Take **210°**. It's 30° past 180°, so its reference angle is 30°. Start with magnitudes √3/2 and 1/2. The point lies left of the vertical axis and below the horizontal axis, so both signs are negative: **(−√3/2, −1/2)**. Its radian measure is 210π/180 = **7π/6**.

Now take **5π/6**. Since π = 6π/6, this angle is π/6 short of π. That's a 30° reference angle in quadrant II. Keep the same magnitudes but make only x negative: **(−√3/2, 1/2)**. You don't have to convert to degrees first if the radian landmarks already make sense.

For a blank-circle exercise, place the four axis points, add 30°, 45°, and 60° in quadrant I, then reflect those points into the other three quadrants. Add the radian labels last. If something goes wrong, you'll know which layer needs attention.

## The complete 16-point unit circle

This table contains the 16 distinct standard positions in **[0, 2π)**, meaning 0 is included and 2π is excluded. The circle has infinitely many points; these 16 are the usual special-angle set. They aren't equally spaced. A chart may also label 360° = 2π, but that repeats the point at 0°.

| Degrees | Radians | Coordinates (cos θ, sin θ) |
| --- | --- | --- |
| 0° | 0 | (1, 0) |
| 30° | π/6 | (√3/2, 1/2) |
| 45° | π/4 | (√2/2, √2/2) |
| 60° | π/3 | (1/2, √3/2) |
| 90° | π/2 | (0, 1) |
| 120° | 2π/3 | (−1/2, √3/2) |
| 135° | 3π/4 | (−√2/2, √2/2) |
| 150° | 5π/6 | (−√3/2, 1/2) |
| 180° | π | (−1, 0) |
| 210° | 7π/6 | (−√3/2, −1/2) |
| 225° | 5π/4 | (−√2/2, −√2/2) |
| 240° | 4π/3 | (−1/2, −√3/2) |
| 270° | 3π/2 | (0, −1) |
| 300° | 5π/3 | (1/2, −√3/2) |
| 315° | 7π/4 | (√2/2, −√2/2) |
| 330° | 11π/6 | (√3/2, −1/2) |

## Negative angles and reverse questions need extra care

Angles that differ by a whole turn reach the same point; they're **coterminal**. For −120°, add 360° to get 240°. Both reach (−1/2, −√3/2). In radians, add or subtract 2π instead. A negative angle doesn't automatically make both coordinates negative: −30° reaches quadrant IV, where cosine is positive.

A full coordinate pair on the unit circle identifies one angle in [0, 2π). For example, (−√2/2, −√2/2) identifies 5π/4. Without that interval restriction, adding any integer multiple of 2π gives another angle at the same point.

**A sine value alone usually doesn't identify one angle, even within a single turn.** If sin θ = √3/2, the point is at that height on both sides of the circle: θ = π/3 or 2π/3 in [0, 2π). The inverse sine function, arcsin, returns a [principal value in [−π/2, π/2]](https://openstax.org/books/precalculus-2e/pages/6-3-inverse-trigonometric-functions); it doesn't list every solution to a sine equation. For this example, arcsin(√3/2) = π/3, and you still need the second angle when solving across a full turn.

## Unit-circle practice quiz

Hide the table and write exact values without a calculator. For points off the axes, jot down the quadrant and reference angle as well as the coordinates. For axis points, name the axis and direction instead.

1. Convert 135° to radians.
2. Convert 11π/6 to degrees.
3. Give the coordinates at 2π/3.
4. A student writes the point at 300° as (√3/2, −1/2). What went wrong, and what's the correct pair?
5. Give both cos(3π/2) and sin(3π/2).
6. Give the coordinates at −π/4 and a coterminal angle in [0, 2π).
7. Which angle in [0, 2π) has coordinates (−√3/2, −1/2)?
8. Solve sin θ = 1/2 for every θ in [0, 2π). Is arcsin(1/2) a complete answer?

### Answers, with the reasoning to check

1. **3π/4.** Multiply 135 by π/180 and reduce 135/180 to 3/4. An answer of 4π/3 suggests you inverted the fraction.
2. **330°.** Multiply 11π/6 by 180/π: 11 × 30 = 330. This is 30° short of a full turn.
3. **(−1/2, √3/2).** The angle is 120°, in quadrant II, with reference angle 60°. A positive first coordinate would put the point on the wrong side of the circle.
4. **The signs are right, but the magnitudes are swapped.** The reference angle is 360° − 300° = 60°, giving (1/2, −√3/2). The proposed pair belongs to 330°.
5. **cos(3π/2) = 0; sin(3π/2) = −1.** The point is at the bottom of the circle, (0, −1). Read cosine first and sine second.
6. **(√2/2, −√2/2); 7π/4.** Add 2π = 8π/4 to −π/4. The clockwise 45° turn lands in quadrant IV.
7. **7π/6.** Both coordinates are negative, so use quadrant III. Their magnitudes match a 30° reference angle: π + π/6 = 7π/6.
8. **π/6 and 5π/6.** Both points have height 1/2. The principal value arcsin(1/2) = π/6 supplies only the first solution; the quadrant-II point supplies the other.

## Practice the error you actually made

Use the quiz to choose your next few prompts. Recopying all 16 rows after one sign error adds work without isolating the confusion.

| If you missed… | Practice next | Example card or paper prompt |
| --- | --- | --- |
| A degree–radian conversion | Convert in both directions and show the multiplier | “225° in radians?” → “225 × π/180 = 5π/4” |
| The coordinate order | Point to horizontal and vertical positions before naming the functions | “At (0, −1), which value is cosine?” → “0, the x-coordinate” |
| A 30°/60° magnitude | Sketch a shallow and a steep radius | “At 30°, which coordinate is larger?” → “x = √3/2; y = 1/2” |
| A quadrant sign | Name signs before calculating magnitudes | “Signs at 4π/3?” → “Quadrant III: x negative, y negative” |
| A negative angle | Add a full turn, then locate the point | “−π/6 in [0, 2π)?” → “11π/6, quadrant IV” |
| A reverse-angle answer | State the allowed interval and use both coordinates | “(1/2, −√3/2), θ in [0, 2π)?” → “5π/3” |
| A missing sine solution | Draw a horizontal line at the given height | “sin θ = √2/2 in [0, 2π)?” → “π/4 and 3π/4” |

If you want ready-made recall practice, the [unit circle degrees, radians, and coordinates deck](/catalog/packages/unit-circle-degrees-radians-coordinates/) has 64 cards: 16 for each conversion direction, 16 angle-to-coordinate prompts, and 16 coordinate-to-angle prompts using [0, 2π). The triangle derivations, negative-angle questions, and sine-equation exercises above need separate practice; they aren't included in that deck.

Mix the prompt types after you can explain the first-quadrant values. Answer a radian conversion, then a coordinate question, then a reverse question, so the preceding card doesn't reveal the next answer. The [math flashcard guide](/blog/how-to-use-flashcards-for-math/) covers how to combine this kind of recall with worked problems. Keep one blank-circle reconstruction in your practice too: a correct card answer should still have a place on the drawing.
