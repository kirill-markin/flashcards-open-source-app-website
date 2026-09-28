---
title: "Distance vs Displacement: Worked Examples and Practice"
description: "Calculate distance and displacement with worked examples, turning points, and a mixed practice quiz. Check signs, endpoints, and what position data can prove."
date: "2026-09-29"
image: "/blog/distance-vs-displacement.png"
keywords:
  - "distance vs displacement"
  - "distance and displacement practice problems"
  - "negative displacement"
  - "distance from position time graph"
---

Walk along a straight track from the 4 m mark to the 13 m mark, then turn back once and stop at the 7 m mark. You've traveled 15 m, but your displacement is only +3 m. The return trip adds to the distance while bringing your final position closer to where you started.

That small route gives you three different answers: a final position of 7 m, a displacement of +3 m, and a distance of 15 m. Keeping those quantities separate is the main job in distance vs displacement problems. Work through the examples, then try the mixed practice without looking at the answers.

![A gardener gathers a hose that runs around a vegetable bed and returns to a nozzle near its tap](/blog/distance-vs-displacement.png)

## Start with the quantity the question asks for

Throughout this page, **distance** means **distance traveled**, the total length of the route. It differs from the straight-line distance between two places.

| Quantity | What it describes | For motion along one axis |
| --- | --- | --- |
| Position, x | Where the object is relative to an origin | A coordinate such as −6 m |
| Displacement, Δx | Change from initial to final position | Final position − initial position |
| Distance traveled | Length of the whole path | Add the lengths of all parts of the trip |

Displacement is a vector: direction matters. Along one axis, a sign gives that direction once you've defined which way is positive. Distance is a scalar and cannot be negative. OpenStax's [introduction to distance and displacement](https://openstax.org/books/physics/pages/2-1-relative-motion-distance-and-displacement) explains this distinction.

Before calculating, draw an axis, mark the origin, and label the positive direction. Here we'll usually take right or east as positive. Either direction can be positive; use the choice stated in the problem and keep it throughout your calculation.

## A route ledger catches the reversal

For the opening example, imagine a cart on a straight track. Its position starts at +4 m. It moves directly to +13 m, reverses once, and stops at +7 m.

| Part of the trip | Initial position | Final position | Signed change | Distance added |
| --- | --- | --- | --- | --- |
| Outward | +4 m | +13 m | 13 − 4 = +9 m | 9 m |
| Return | +13 m | +7 m | 7 − 13 = −6 m | 6 m |
| Whole trip | +4 m | +7 m | 7 − 4 = +3 m | 15 m |

Two independent calculations give the same displacement:

- From the endpoints: `Δx = 7 − 4 = +3 m`.
- From the signed changes: `Δx = (+9) + (−6) = +3 m`.

For distance, add the lengths: `9 + 6 = 15 m`. The six meters traveled back still count as six meters traveled.

For any trip along one axis, split the route at every reversal. On each part, the distance is the absolute value of the position change: `|final position − initial position|`. The vertical bars mean “take the magnitude.” Add those distances only after you've accounted for all the turns.

If you got **7 m**, you reported the final coordinate. If you got **3 m for distance**, you allowed the two parts of the trip to cancel. Keep the signed changes and the lengths in separate columns until this distinction feels routine.

## Negative displacement doesn't require a negative final position

A bead moves directly along a wire from x = +11 cm to x = +3 cm. Its displacement is:

`Δx = 3 − 11 = −8 cm`

Its distance traveled is 8 cm. Both coordinates are positive, but the bead moved in the negative direction.

Now move the bead directly from −11 cm to −3 cm:

`Δx = −3 − (−11) = +8 cm`

This time both coordinates are negative and the displacement is positive. Put parentheses around a negative starting coordinate when subtracting; they make the second minus sign harder to lose.

The sign of **position** tells you which side of the origin the bead occupies. The sign of **displacement** tells you the direction of its overall change in position. The displacement's magnitude is its size without the directional sign: both examples have a magnitude of 8 cm. See OpenStax's [displacement reference](https://openstax.org/books/college-physics-ap-courses-2e/pages/2-1-displacement) for the signed-coordinate convention.

## Distance from a position-time graph

Suppose a cart moves along a straight track. Its position-time graph consists of straight segments connecting these points in order. **The straight segments are part of the problem**, so there are no hidden turns between the listed times. To sketch it, put time on the horizontal axis and position on the vertical axis.

| Time, t (s) | Position, x (m) |
| --- | --- |
| 0 | −2 |
| 2 | +6 |
| 5 | +6 |
| 9 | −4 |
| 11 | +1 |

Calculate distance from the changes in position on each segment:

`distance = 8 + 0 + 10 + 5 = 23 m`

The cart moves 8 m in the positive direction, waits for 3 s, moves 10 m in the negative direction, then reverses and travels another 5 m. The horizontal segment contributes zero distance.

Displacement uses only the first and last positions:

`Δx = 1 − (−2) = +3 m`

As a check, the signed segment changes add to `+8 + 0 − 10 + 5 = +3 m`.

When reading this graph, add the sizes of its vertical position changes. Don't measure the slanted lines with a ruler: their apparent lengths depend on the scales chosen for the two axes. A rising segment means motion in the positive direction; a falling segment means motion in the negative direction. Crossing x = 0 isn't a reversal. The cart passes through zero while continuing toward −4 m; it reverses at −4 m, where the graph changes from falling to rising.

### What if the table contains only measurements?

Remove the statement about straight segments, and the same table leaves something unknown. The cart might have moved away and come back between readings. Even matching positions at 2 s and 5 s wouldn't prove it stayed still.

The endpoint displacement remains +3 m. The readings establish a **minimum distance of 23 m**, but they don't determine the exact distance. Each interval requires at least the distance between its measured positions; any extra out-and-back motion adds more. Drawing straight lines between sparse measurements adds an assumption about the motion.

### Optional: average speed and average velocity

For the explicitly straight-segment graph, the total elapsed time is 11 s. Average speed uses total distance; average velocity uses displacement. These are the definitions in OpenStax's [speed and velocity chapter](https://openstax.org/books/physics/pages/2-2-speed-and-velocity).

- Average speed: `23 m / 11 s ≈ 2.09 m/s`.
- Average velocity: `+3 m / 11 s ≈ +0.273 m/s`.

Include the waiting time in both denominators. If the units need a refresher, the [SI base and derived units guide](/blog/si-base-and-derived-units/) explains how units such as m/s are built.

## A corner needs two components

A robot travels 8 m east along one straight corridor, then 15 m north along another. The corridors meet at a right angle, and these are its only movements.

The distance traveled is `8 + 15 = 23 m`.

Its displacement has an eastward component of 8 m and a northward component of 15 m. Those perpendicular components form the two shorter sides of a right triangle:

`displacement magnitude = √(8² + 15²) = √289 = 17 m`

The components specify the direction as well as the size. If an angle is requested, it is `arctan(15/8) ≈ 61.9° north of east`. Reporting only “17 m” gives the magnitude, not the full displacement vector.

Compare the two answers: 17 m directly between the endpoints, 23 m along the corridors. Use the Pythagorean calculation because the components are perpendicular; it isn't a general instruction to square every leg of a route.

## Distance and displacement practice problems

Use paper and keep the answers below out of view. For each numerical answer, include a unit and state the direction when needed. Unless a question specifies otherwise, right or east is positive.

1. A slider moves directly from x = −9 m to x = −4 m without reversing. Find its displacement and distance traveled.
2. A cart moves directly from x = +12 m to x = +5 m. A student writes “displacement = +7 m because both positions are positive.” Correct the answer and explain the sign.
3. A walker follows a straight path from x = −3 m to +8 m, then back to +2 m. There are no other turns. Find the distance and displacement for the whole trip.
4. A runner completes one 360 m lap and stops at the starting point. Find the distance and displacement.
5. A position-time graph uses straight segments through (0 s, +3 m), (2 s, +9 m), (4 s, +9 m), and (7 s, −2 m). Find the total distance, displacement, and time spent stationary.
6. A cart moves along a straight track. A sensor records x = +2 m at 0 s and x = +10 m at 6 s. Nothing else is known about the motion between those readings. What displacement can you calculate? Can you calculate the exact distance? Give two possible routes to support your answer.
7. A delivery robot moves 9 m west, then 12 m north along perpendicular straight paths. Find the distance and give the displacement as components and a magnitude.
8. A student reports a distance of 14 m and a displacement magnitude of 18 m for the same trip in the same reference frame. Can both answers be correct? Explain without inventing a route.
9. For the walker in question 3, move the origin so that every coordinate increases by 10 m, keeping east positive. Write the three new coordinates and recalculate the displacement. Does the distance change?
10. A toy car starts at the origin and rolls 6 m to the right without reversing. This time, **left is positive**. Find its final coordinate, displacement, and distance traveled.

### Answers and what a wrong answer reveals

1. **Displacement +5 m; distance 5 m.** Calculate `−4 − (−9) = +5`. Negative coordinates don't force negative displacement. The slider moves toward increasing x.
2. **Displacement −7 m; distance 7 m.** Calculate `5 − 12 = −7`. The final position is positive, but it is 7 m to the left of the initial position.
3. **Distance 17 m; displacement +5 m.** The outward leg is `8 − (−3) = 11 m`; the return leg is 6 m. Add their lengths for 17 m. The endpoint calculation is `2 − (−3) = +5 m`. An answer of 5 m for distance misses the extra travel caused by turning back.
4. **Distance 360 m; displacement 0 m.** Finishing at the start makes the endpoint difference zero. It doesn't erase the lap.
5. **Distance 17 m; displacement −5 m; stationary for 2 s.** The segment lengths are 6 m, 0 m, and 11 m. The endpoint change is `−2 − 3 = −5 m`. The flat segment lasts from 2 s to 4 s. Using the final coordinate alone would give the wrong displacement.
6. **Displacement +8 m; exact distance unknown, but at least 8 m.** A direct route from +2 m to +10 m gives 8 m. A route from +2 m to +14 m and back to +10 m gives `12 + 4 = 16 m`. Both fit the two readings. You need more information about the path to choose an exact distance.
7. **Distance 21 m; displacement components 9 m west and 12 m north; magnitude 15 m.** In east-positive and north-positive coordinates, the components are (−9 m, +12 m). Their magnitude is `√(81 + 144) = 15 m`. Adding 9 and 12 answers the path-length question.
8. **No.** The length of a traveled path cannot be less than the straight-line separation of its endpoints. Distance must be at least the displacement's magnitude. Equality is possible for straight motion without reversal.
9. **New coordinates +7 m, +18 m, +12 m; displacement +5 m; distance still 17 m.** The displacement becomes `12 − 7 = +5 m`. The leg lengths remain 11 m and 6 m. Shifting a fixed origin changes the coordinate labels without changing the route or the endpoint separation.
10. **Final coordinate −6 m; displacement −6 m; distance 6 m.** With left positive, rightward motion is negative. Calculate `−6 − 0 = −6 m`. Choosing the other positive direction changes the signs of the coordinates and displacement, but it doesn't change how far the car traveled.

## Turn a repeated mistake into one short card

Choose a card from an error you actually made. Keep the full calculations on paper; put the reusable decision on the card.

| Mistake in your solution | Card front | Card back |
| --- | --- | --- |
| You used the final coordinate as displacement | What two positions do I need for displacement? | Initial and final: Δx = x_final − x_initial. |
| You made the return leg subtract from distance | How does a reversal affect distance traveled? | Both legs add positive lengths; only signed displacements can cancel. |
| You inferred a direction from a negative coordinate | Can an object at negative x have positive displacement? | Yes. Moving from −9 m to −4 m gives +5 m. |
| You assumed right must be positive | What determines the sign of displacement? | The chosen positive direction and the change in position. If left is positive, a 6 m move right gives −6 m. |
| You treated two readings as the whole route | Do initial and final positions determine distance traveled? | No. They determine displacement; distance also needs the path. |

After reviewing the card, redo the missed problem with different numbers and explain why your operation fits the requested quantity. The [algebra-based physics flashcard guide](/blog/how-to-use-flashcards-for-algebra-based-physics-1/) shows how to use these small recall prompts alongside graphs and full problems.
