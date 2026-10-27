---
title: "Velocity–Time Graph Practice: Area, Slope, and Direction"
description: "Read velocity–time graphs with worked examples and practice answers. Split areas at zero, find acceleration, and distinguish slowing down from turning back."
date: "2026-10-15"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/302ad61704ac6b7c0bfd81782717057998b5221fa68112ca3eaae4892897dc42.webp"
keywords:
  - "velocity time graph practice"
  - "displacement from velocity time graph"
  - "distance from velocity time graph"
  - "acceleration from velocity time graph"
  - "negative velocity and acceleration"
---

A cart travels 36 m in 13 seconds and finishes just 4 m ahead of where it started. Its velocity is zero at both endpoints. Average those two readings and you'd incorrectly predict zero displacement.

Use the original graph below to work out where the cart changes direction, how far it travels, and when it speeds up. All the calculations use slopes, rectangles, and triangles; you don't need calculus.

![A woman watches an empty wooden tree swing suspended to one side of its arc](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/302ad61704ac6b7c0bfd81782717057998b5221fa68112ca3eaae4892897dc42.webp)

## Read the height, slope, and area separately

On a velocity–time graph, time runs horizontally and velocity vertically. Here, right is the positive direction.

| Read this | To find this | Units |
| --- | --- | --- |
| Graph height | Velocity, including its direction | m/s |
| Slope: change in velocity ÷ elapsed time | Acceleration | m/s² |
| Signed area between the graph and time axis | Displacement | m |

Area above zero contributes positive displacement; area below zero contributes negative displacement. For **distance traveled**, add their magnitudes so they don't cancel. See OpenStax's [velocity–time graph explanation](https://openstax.org/books/physics/pages/2-4-velocity-vs-time-graphs) for these relationships.

A negative velocity means motion in the chosen negative direction. It doesn't tell you which side of the origin the cart occupies. The [distance and displacement guide](/blog/distance-vs-displacement/) works through that coordinate distinction.

## One cart, one exact graph

This is an idealized motion model: **straight lines connect consecutive points**. With that condition, the areas and crossing times are exact.

| Time, t (s) | Velocity, v (m/s) |
| --- | --- |
| 0 | 0 |
| 2 | +4 |
| 5 | +4 |
| 9 | −4 |
| 11 | −4 |
| 13 | 0 |

![Velocity–time graph through (0,0), (2,4), (5,4), (9,−4), (11,−4), and (13,0), with a zero crossing at 7 seconds and signed areas shaded](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/0e7a43499940c4d3b011592fa72d29794bfe28b76e0d6f8ad14d8944006d96c9.webp)

Between 5 s and 9 s, velocity falls by 8 m/s in 4 s:

`a = (−4 − 4) / (9 − 5) = −2 m/s²`

Starting from +4 m/s at 5 s, it takes 2 s to reach zero. The cart reverses at **7 s**. Split the area there even though the line has no corner.

### Keep a ledger of the areas

A triangle contributes `½ × duration × velocity magnitude`. A rectangle contributes `duration × velocity magnitude`. Give each displacement its sign afterward.

| Interval (s) | Shape and size | Displacement (m) | Distance (m) | Acceleration (m/s²) |
| --- | --- | --- | --- | --- |
| 0–2 | Triangle: ½ × 2 × 4 | +4 | 4 | +2 |
| 2–5 | Rectangle: 3 × 4 | +12 | 12 | 0 |
| 5–7 | Triangle: ½ × 2 × 4 | +4 | 4 | −2 |
| 7–9 | Triangle: ½ × 2 × 4 | −4 | 4 | −2 |
| 9–11 | Rectangle: 2 × 4 | −8 | 8 | 0 |
| 11–13 | Triangle: ½ × 2 × 4 | −4 | 4 | +2 |
| Total | | **+4** | **36** | |

The positive areas add to 20 m; the negative areas contribute −16 m. So displacement is `20 − 16 = +4 m`, while distance is `20 + 16 = 36 m`.

The acceleration entries apply between the listed times. At the corners, 2, 5, 9, and 11 s, the slope changes abruptly, so acceleration isn't defined at that exact instant. At 7 s, the line keeps its slope: acceleration remains −2 m/s² as the cart turns.

## A downward line can mean speeding up

Speed is the magnitude of velocity. When velocity is nonzero, matching velocity and acceleration signs mean speeding up; opposite signs mean slowing down. OpenStax's [acceleration chapter](https://openstax.org/books/university-physics-volume-1/pages/3-3-average-and-instantaneous-acceleration) explains this sign rule.

In this graph:

- From 5 to 7 s, velocity falls from +4 to 0 m/s. The cart moves right and slows down.
- From 7 to 9 s, velocity falls from 0 to −4 m/s. The cart moves left and speeds up.
- From 9 to 11 s, velocity stays at −4 m/s. The cart keeps moving left at constant speed, with zero acceleration.
- From 11 to 13 s, velocity rises from −4 to 0 m/s. Positive acceleration slows its leftward motion.

The cart has zero velocity at 0, 7, and 13 s. During the plotted 13 seconds, there's no interval of rest. That would require a horizontal segment **on** the time axis. Reaching zero at 7 s allows the cart to reverse without waiting there.

## When the endpoint-average shortcut works

For one straight velocity segment, average velocity is `(initial velocity + final velocity) / 2`. Multiply by the duration to find displacement. This shortcut follows from [constant-acceleration motion](https://openstax.org/books/university-physics-volume-1/pages/3-4-motion-with-constant-acceleration).

The cart's whole graph isn't one straight segment, so its endpoints alone don't justify that shortcut. Use the areas: average velocity is `+4/13 ≈ +0.308 m/s`, and average speed is `36/13 ≈ 2.77 m/s`. The [average speed practice](/blog/average-speed-practice/) has more problems with unequal time intervals. For text-based journey calculations, the [average speed flashcards](/catalog/packages/average-speed-practice-flashcards/) practice time weighting and stops.

## Eight velocity–time graph practice questions

Keep the worked ledger out of view. Questions 1–6 use the cart graph above.

1. Find velocity and acceleration at 6 s and 8 s. Is the cart speeding up or slowing down at each time?
2. Find displacement and distance from 5 s to 9 s. Explain why the answers differ.
3. At 7 s, is acceleration zero? Does the same reasoning work at the corner at 9 s?
4. A learner averages the initial and final velocities, gets 0 m/s, and reports zero displacement. Find the correct average velocity and identify the invalid step.
5. The initial position is x = +10 m. Find the turning position and final position. Could you find those coordinates without the initial position?
6. Does the cart rest for an interval around 7 s? Compare it with a second cart whose graph stays at v = 0 from 3 s to 5 s. How much rest time does that segment show?
7. A different graph is a single straight line from (0 s, +6 m/s) to (4 s, −2 m/s). Find acceleration, turning time, displacement, and distance.
8. A sensor gives only the six table readings, with no statement about straight lines. Are the exact displacement and turning time established? Explain what is missing.

### Answers with the reasoning

1. **At 6 s: v = +2 m/s, a = −2 m/s², slowing down. At 8 s: v = −2 m/s, a = −2 m/s², speeding up.** The slope stays negative across both times; the velocity sign changes.
2. **Displacement 0 m; distance 8 m.** The two triangles contribute +4 m and −4 m. They cancel for displacement, but both add 4 m to distance.
3. **At 7 s, a = −2 m/s².** Zero height doesn't imply zero slope. At 9 s, acceleration is undefined in this idealized graph because the incoming slope is −2 and the outgoing slope is 0 m/s².
4. **Average velocity +4/13 m/s, approximately +0.308 m/s.** The learner treats the whole graph as one straight segment. Its actual signed area is +4 m; divide by 13 s to find the average velocity.
5. **Turning position +30 m; final position +14 m.** Before reversing, the cart gains `4 + 12 + 4 = 20 m`. Add that to +10 m. For the final position, add the total displacement of +4 m. Without an initial position, the graph gives only changes in position.
6. **The first cart has no rest interval around 7 s; the second segment shows 2 s of rest.** The first cart reaches zero velocity and immediately reverses. The second stays at zero throughout the stated interval.
7. **Acceleration −2 m/s²; turn at 3 s; displacement +8 m; distance 10 m.** Calculate `(−2 − 6)/4 = −2`. Losing 6 m/s takes 3 s. The positive triangle is `½ × 3 × 6 = 9 m`; the negative triangle is `½ × 1 × 2 = 1 m`. Subtract for displacement, add for distance.
8. **Neither is established exactly.** Different curves between the readings can have different areas and zero crossings. Connecting the dots with straight lines supplies additional information; the samples alone don't justify those exact calculations.

## Save the decision you missed

After solving full problems, use a short card for a repeated mistake. Keep the arithmetic on paper.

| Card front | Card back |
| --- | --- |
| What must I do before calculating distance across v = 0? | Split at the zero crossing and add the area magnitudes. |
| Does negative acceleration mean slowing down? | Check velocity too. With negative velocity, negative acceleration increases speed. |
| Does a velocity–time graph give absolute position? | It gives displacement through signed area. Add the initial position to find a coordinate. |

Redo a missed problem with different numbers after reviewing its card. The [physics flashcard guide](/blog/how-to-use-flashcards-for-algebra-based-physics-1/) explains how to pair these prompts with full graph problems.

*Created with AI assistance for drafting, calculations, and editing. The cart traces are original illustrative examples, not experimental measurements. The plotted graph uses the stated data; the hero photograph is AI-generated.*
