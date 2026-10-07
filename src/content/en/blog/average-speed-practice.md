---
title: "Average Speed Practice: Equal Distances, Equal Times, and Stops"
description: "Solve average speed practice problems with equal distances, unequal times, stops, and round trips. Check your setup against worked answers."
date: "2026-10-08"
image: "/blog/average-speed-practice.png"
keywords:
  - "average speed practice"
  - "average speed equal distances"
  - "average speed equal times"
  - "average speed including stops"
  - "average speed vs average velocity"
---

Travel at 6 m/s for one part of a trip and 10 m/s for another. The average could be 8 m/s, but those two speeds alone don't establish it. Equal times give 8 m/s. Equal distances give 7.5 m/s. A stop can lower the journey average further without changing either moving speed.

The difference sits in the time spent on each part. These average speed practice problems use a distance-and-time ledger so you can see that difference before reaching for a shortcut. Work through the paired examples, then try the mixed problems with the answers out of view.

![A woman pauses with her shopping trolley in a cobbled lane while a tabby cat crosses ahead](/blog/average-speed-practice.png)

## Put distance and time in separate columns

**Average speed = total distance traveled / total elapsed time.** Choose the start and end of the interval first. For a whole journey, include stops between departure and arrival. If a question asks for the average **while moving**, divide by moving time and label that answer. The elapsed time must be greater than zero.

Make one row per moving segment and one row per stop. Fill missing quantities using:

- `distance = speed × time`
- `time = distance / speed`

The second equation needs a positive speed. A stationary segment has zero distance and its stated duration; you can't recover that duration from `0 / 0`. Add the distance column, add the time column for the requested interval, then divide once.

Keep units consistent: meters with seconds give m/s; kilometers with hours give km/h. Convert mixed units before filling the table. The [SI units guide](/blog/si-base-and-derived-units/) explains these combinations.

Throughout the exercises, a quoted speed is constant during its segment, and there are no unlisted stops or delays. Treat the given values as exact exercise data; ≈ marks a rounded answer.

## Same speeds, different timing

### Equal distances: the slower leg takes longer

An object covers 120 m at 6 m/s, then another 120 m at 10 m/s, with no stop.

| Segment | Distance | Speed | Time, d/v |
| --- | --- | --- | --- |
| First | 120 m | 6 m/s | 20 s |
| Second | 120 m | 10 m/s | 12 s |
| Total | 240 m | — | 32 s |

`average speed = 240 m / 32 s = 7.5 m/s`

The slower speed lasts 20 s and the faster one lasts 12 s. Giving the two speeds equal weight would ignore those different durations. As a quick check, the average should lie between 6 and 10 m/s. It should also be closer to 6 m/s because the object spends more time at that speed. The result, 7.5 m/s, fits both checks.

For two equal distances, each of positive length d, the ledger gives this shortcut:

`average speed = 2d / (d/v₁ + d/v₂) = 2v₁v₂ / (v₁ + v₂)`

This is the harmonic mean of the two positive speeds. It applies to **two equal-distance moving legs without additional elapsed time**. If there's a stop, add its duration to the denominator instead of using the shortcut as written.

### Equal times: the ordinary mean works

Now keep the same speeds but spend 15 s at each, with no stop:

| Segment | Distance, v × t | Speed | Time |
| --- | --- | --- | --- |
| First | 90 m | 6 m/s | 15 s |
| Second | 150 m | 10 m/s | 15 s |
| Total | 240 m | — | 30 s |

`average speed = 240 m / 30 s = 8 m/s`

Both trips cover 240 m. This one takes 30 s rather than 32 s because more of its distance is covered at the faster speed.

With equal positive durations t covering the whole interval, the calculation becomes:

`average speed = (v₁t + v₂t) / (2t) = (v₁ + v₂) / 2`

OpenStax's [Speed and Velocity teaching notes](https://openstax.org/books/physics/pages/2-2-speed-and-velocity) flag this equal-distance versus equal-time distinction. Before averaging quoted speeds, identify what the problem says is equal.

For two segments with unequal durations, use their time weights:

`average speed = (v₁t₁ + v₂t₂) / (t₁ + t₂)`

The segments must account for the full chosen interval, with positive total time. This is the same distance-over-time calculation: each v × t contributes a distance. You can include more segments by adding more terms, including zero speed for a stop. If only distances and speeds are supplied, find the times with d/v first.

## A stop belongs in its own row

Return to the two 120 m legs at 6 m/s and 10 m/s, but add an 8 s stop between them.

| Segment | Distance | Time |
| --- | --- | --- |
| First moving leg | 120 m | 20 s |
| Stop | 0 m | 8 s |
| Second moving leg | 120 m | 12 s |
| Whole journey | 240 m | 40 s |

**Average speed including the stop:** `240 m / 40 s = 6 m/s`.

**Average speed while moving:** `240 m / 32 s = 7.5 m/s`.

Both calculations are useful, but they answer different questions. Write the interval beside your result. An answer of 7.5 m/s for the whole journey has dropped eight seconds from the denominator.

Don't average 6, 0, and 10 as three equally weighted speeds. Their durations are 20 s, 8 s, and 12 s. The time-weighted calculation gives `(6 × 20 + 0 × 8 + 10 × 12) / 40 = 6 m/s`, agreeing with the ledger. The stop adds time without adding distance.

## Average speed vs average velocity on a return trip

Average velocity uses **displacement** over the same elapsed time. Along one axis:

`average velocity = (final position − initial position) / elapsed time`

Its sign follows the chosen positive direction. Average speed has no directional sign. OpenStax's [Time, Velocity, and Speed](https://openstax.org/books/college-physics-2e/pages/2-3-time-velocity-and-speed) gives these definitions.

Take east as positive. An object travels 400 m east at 4 m/s, waits 20 s, then returns directly to its starting point at 5 m/s.

- Outward time: `400 / 4 = 100 s`.
- Return time: `400 / 5 = 80 s`.
- Whole elapsed time: `100 + 20 + 80 = 200 s`.

The distance is `400 + 400 = 800 m`, so the journey's average speed is `800 / 200 = 4 m/s`. Its displacement is `+400 − 400 = 0 m`, so its average velocity is `0 / 200 = 0 m/s`.

Zero average velocity says the endpoints match. The object still traveled 800 m. Its return speed is 5 m/s even though its return velocity is −5 m/s in the east-positive convention. Use positive path lengths for the average-speed numerator; use signed displacement for average velocity. The [distance and displacement examples](/blog/distance-vs-displacement/) explain how to find those numerators when a route includes turns.

## Check the time budget before solving for a new speed

Suppose a 240 m trip has two 120 m legs. The first is completed at 6 m/s, taking 20 s. There are no stops. What speed on the second leg would make the whole-trip average 10 m/s?

Work backward from the target:

`allowed total time = 240 / 10 = 24 s`

`time left for the second leg = 24 − 20 = 4 s`

`required second-leg speed = 120 / 4 = 30 m/s`

Check the result in the ledger: `20 + 120/30 = 24 s`, and `240/24 = 10 m/s`. This is an idealized calculation with no imposed speed limit or acceleration time; adding either constraint could change what is achievable.

Now change the target to 12 m/s. The allowed total time becomes `240 / 12 = 20 s`. The first leg has already used all of it. A positive distance remains, so **no finite second-leg speed can reach that target**. Faster travel can make the total time approach 20 s, but it cannot make the remaining leg take zero time.

A target above 12 m/s would leave a negative time budget and is also impossible. Don't interpret a zero denominator or a negative calculated speed as a usable answer. For a positive target average, calculate the total time budget first, subtract elapsed time and any future scheduled stops, and check what's left. A positive remaining distance needs positive remaining travel time.

## Mixed average speed practice

Keep the worked answers out of view. For each problem, write the requested quantity and interval, then draw a small distance-and-time ledger. Use only the movements and stops described. When the segment speeds are known, estimate the range your average speed should fall within; include zero among those speeds when the interval contains a stop.

1. An object covers 90 m at 3 m/s, then 90 m at 6 m/s, without stopping. Find its average speed for the whole trip.
2. An object travels at 3 m/s for 20 s, then at 6 m/s for 20 s, without stopping. Find its total distance and average speed. Explain why averaging the two speeds works here.
3. A walker covers 240 m in 60 s, stands still for 20 s, then covers 160 m in 40 s. Find the average speed from departure to arrival and the average while moving.
4. A moving object covers 600 m at 18 km/h, then 360 m at 3 m/s, with no stop. Find its whole-trip average in m/s. Convert units before calculating.
5. A cart starts at x = +30 m, moves directly to x = −50 m in 20 s, waits 10 s, then moves directly to x = −10 m in 10 s. Take increasing x as positive. Find its whole-trip average speed and average velocity.
6. An object travels 100 m at 2 m/s, stops for 10 s, then travels 100 m at 4 m/s. A student calculates `(2 + 0 + 4) / 3 = 2 m/s`. Explain the error and calculate the whole-trip average.
7. A 400 m trip has two 200 m legs. The first leg takes 50 s. Can the whole-trip average reach 8 m/s with any finite speed on the remaining leg? If the target is changed to 5 m/s, what second-leg speed is needed? Assume no stops or other delays.

### Worked answers

1. **4 m/s.** The times are `90/3 = 30 s` and `90/6 = 15 s`. Divide `180 m / 45 s = 4 m/s`. The ordinary mean, 4.5 m/s, gives equal weight to unequal durations. The slower leg lasts twice as long.
2. **180 m; 4.5 m/s.** The distances are `3 × 20 = 60 m` and `6 × 20 = 120 m`. Divide `180 m / 40 s = 4.5 m/s`. The durations are equal, so the time weights are equal. Compare this with question 1: the same speeds produce different averages because the timing changed.
3. **Whole journey ≈ 3.33 m/s; while moving 4 m/s.** Total distance is `240 + 160 = 400 m`. Elapsed time is `60 + 20 + 40 = 120 s`; moving time is `60 + 40 = 100 s`. Divide the same 400 m by each duration. The stop makes the journey average lower than either moving segment's speed.
4. **4 m/s.** Convert `18 km/h = 18 × 1000/3600 = 5 m/s`. The times are `600/5 = 120 s` and `360/3 = 120 s`. Divide `960 m / 240 s = 4 m/s`. The durations turn out to be equal, so `(5 + 3)/2` also works after conversion. Unequal distances alone don't rule out equal times.
5. **Average speed 3 m/s; average velocity −1 m/s.** The path lengths are 80 m and 40 m, totaling 120 m. The full interval is `20 + 10 + 10 = 40 s`. Displacement is `−10 − 30 = −40 m`. Divide the two different numerators by the same 40 s. The final position, −10 m, is not the displacement.
6. **Whole-trip average ≈ 2.35 m/s.** The student's calculation assumes equal time at each speed. The actual times are `100/2 = 50 s`, 10 s stopped, and `100/4 = 25 s`, totaling 85 s. Divide `200 m / 85 s ≈ 2.35 m/s`. Giving the short stop the same weight as the 50 s slow leg changes the answer.
7. **8 m/s is impossible; 5 m/s requires ≈ 6.67 m/s on the second leg.** The first target allows `400/8 = 50 s`, already used up. For the second target, the budget is `400/5 = 80 s`, leaving 30 s. The required speed is `200/30 ≈ 6.67 m/s`. Check with `400 / (50 + 30) = 5 m/s`.

## Make cards for the decisions you missed

Keep full worked problems on paper. A short recall card can help you remember the decision that went wrong, then you can apply it to a fresh problem. Choose only the prompts that match your errors.

| Card front | Card back |
| --- | --- |
| Two speeds apply for equal positive durations covering the whole interval. How do I combine them? | Use the ordinary mean: (v₁ + v₂)/2. Equal times give equal time weights. |
| Two positive speeds apply over equal positive distances, with no stops. How do I find the trip average? | Add the times d/v₁ and d/v₂, then divide 2d by their sum. This gives 2v₁v₂/(v₁ + v₂). |
| What does a stop add to a whole-journey average-speed calculation? | Its duration in the denominator and zero distance in the numerator. |
| What must I check before finding a speed needed to reach a positive target average? | Find the total time budget: distance / target average. Subtract elapsed time and future stops. Positive remaining distance needs positive remaining travel time. |
| Can a round trip have positive average speed and zero average velocity? | Yes. Distance is positive; displacement is zero because the endpoints match. |

On the next attempt, change the numbers and decide whether the problem specifies equal times, equal distances, or neither before calculating. The [algebra-based physics flashcard guide](/blog/how-to-use-flashcards-for-algebra-based-physics-1/) explains how to pair small recall prompts with full problem solving.
