---
title: "Force–Displacement Graph Practice: Work, Speed, and Stops"
description: "Read force–displacement graphs with signed areas and worked answers. Find net work, maximum speed, and a turning point before the plotted force ends."
date: "2026-10-24"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/dc053c1d8ad86f8eceedb11f84b9907bd920e7e0a256a8ab77a24258a63c6d82.webp"
keywords:
  - "force displacement graph practice"
  - "force position graph work"
  - "signed area work"
  - "work energy theorem practice"
  - "negative work"
  - "turning point kinetic energy"
---

A force graph continues to 10 m, but the particle in this example stops at 9 m and turns back. You can calculate every shaded area correctly and still get the motion wrong if you skip the kinetic-energy check.

This force–displacement graph practice follows one particle through positive work, negative work, and a return trip. You'll need rectangles, triangles, and `K = ½mv²`. Read the worked example first, or use the graph and starting conditions to attempt the eight questions near the end. Complete worked answers follow the question list.

![An adult skateboarder coasts up a concrete bowl below its higher rim](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/dc053c1d8ad86f8eceedb11f84b9907bd920e7e0a256a8ab77a24258a63c6d82.webp)

## Area gives work, height gives force

On a force–position graph, the horizontal axis is position in meters and the vertical axis is the force component along that axis in newtons. Here, position `x` is measured from a fixed origin. It isn't the total distance traveled: on a return trip, `x` decreases.

For motion toward increasing `x`, area above zero gives positive work; area below zero gives negative work. A rectangle contributes `force × width`; a triangle contributes `½ × base × height`, with its sign included. The units are `N × m = J`.

OpenStax's [work chapter](https://openstax.org/books/university-physics-volume-1/pages/7-1-work) explains this signed-area relationship. Check the axes before using it: a force–time graph gives impulse instead.

To turn work into speed, use the [work–energy theorem](https://openstax.org/books/university-physics-volume-1/pages/7-3-work-energy-theorem):

`K_final = K_initial + W_net`

`K = ½mv²`, so `speed = √(2K/m)`

The word **net** matters. The area under a graph of just one applied force gives that force's work. Include work by other forces before using it as the change in kinetic energy.

## One exact graph and its starting conditions

Consider a **2 kg point particle** moving along a horizontal track, with right chosen as positive. It starts at `x = 0` with velocity `+2 m/s`. Its initial kinetic energy is:

`K_initial = ½ × 2 × 2² = 4 J`

The graph shows the **net horizontal force**. All motion is along the track, and there are no rolling or rotational energy changes. Force depends only on position, so it has the same value at a given position on the outward and return trips. A negative value means a force to the left. It isn't a friction law that reverses when motion reverses.

Straight lines connect consecutive points in this table:

| Position, x (m) | Net force, Fₓ (N) |
| --- | --- |
| 0 | +4 |
| 2 | +4 |
| 6 | −4 |
| 10 | −4 |

![Force–position graph joining (0,4), (2,4), (6,−4), and (10,−4), crossing zero at 4 m; the particle turns at 9 m before reaching the plotted endpoint](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/561b77062c8e7c46c3ffc8c254d5cfd102ae04eed9a5917d2cb0997bf4702125.webp)

The falling segment crosses zero at `x = 4 m`, halfway between 2 m and 6 m. Split the area there so the positive and negative contributions stay separate.

### Add the signed areas

For a proposed rightward displacement from 0 m to 10 m, the graph gives:

| Position interval (m) | Calculation | Work (J) |
| --- | --- | --- |
| 0–2 | Rectangle: 2 × 4 | +8 |
| 2–4 | Triangle: ½ × 2 × 4 | +4 |
| 4–6 | Triangle below zero: −½ × 2 × 4 | −4 |
| 6–10 | Rectangle below zero: −4 × 4 | −16 |

The positive area totals `+12 J`. The negative area from 4 m to 10 m totals `−20 J`, giving `−8 J` overall. This is the work the force would do during a rightward displacement across the full plotted range. It doesn't establish that our particle can complete that displacement.

## Keep work and kinetic energy in the same ledger

Start with 4 J, then add the accumulated net work at each position. Check the result before calculating a speed: kinetic energy must remain nonnegative along the proposed trip.

| Position (m) | Net work from 0 (J) | K_initial + work (J) | Meaning on the outward trip |
| --- | --- | --- | --- |
| 0 | 0 | 4 | Starts at +2 m/s |
| 2 | +8 | 12 | Still moving right |
| 4 | +12 | 16 | Maximum speed: 4 m/s |
| 6 | +8 | 12 | Moving right, slowing down |
| 8 | 0 | 4 | Velocity +2 m/s |
| 9 | −4 | 0 | First stop and turning point |
| 10 | −8 | −4 | **Hypothetical only: unreachable from this start** |

The `−4 J` entry at 10 m is the result of extending the calculation beyond the particle's first stop. It isn't an actual kinetic energy. Since mass is positive and velocity is squared, `K` can't be negative. A negative result doesn't describe leftward motion; it rejects that proposed position for this trajectory. OpenStax discusses the same restriction through [allowed positions and turning points](https://openstax.org/books/university-physics-volume-1/pages/8-4-potential-energy-diagrams-and-stability).

### Find the fastest point, then the first stop

From 0 m to 4 m, positive net work increases kinetic energy. After 4 m, negative net work reduces it while the particle continues right. Kinetic energy therefore reaches its maximum, 16 J, at 4 m:

`speed_max = √(2 × 16 / 2) = 4 m/s`

At 4 m, force and acceleration are zero for an instant while the speed is 4 m/s. The force changes from rightward to leftward there, which makes it the fastest point on this outward trip. A zero net force by itself only establishes zero acceleration at that instant.

At 8 m, the particle still has 4 J. The constant `−4 N` force removes those remaining 4 J over the next meter:

`0 = 4 J + (−4 N) × Δx`, so `Δx = 1 m`

The first stop is at **9 m**. Force there remains `−4 N`, giving acceleration `−4/2 = −2 m/s²`. This nonzero leftward acceleration makes the stop a turning point: the particle begins moving left. We can determine that behavior because the force law remains valid as the direction changes.

## The same negative force does positive work on the return

During the outward trip from 8 m to 9 m, force points left and displacement points right. Work is `−4 J`.

On the return from 9 m to 8 m, both point left:

`W = Fₓ × (x_final − x_initial) = (−4) × (8 − 9) = +4 J`

Starting from rest at 9 m, the particle gains 4 J and reaches 8 m with speed 2 m/s. Its **velocity is −2 m/s**, because this is the leftward leg.

Energy gives speed. The motion history supplies the velocity sign. At 8 m, the particle has the same 4 J on both visits: velocity is `+2 m/s` on the way out and `−2 m/s` on the way back. Negative force alone doesn't tell you which visit you're describing.

For the same reason, reverse the sign of the corresponding rightward work when using the graph on a return trip. The usual “below the axis means negative work” shortcut assumes travel toward increasing x.

## Zero total work can hide changing speed

Between 2 m and 6 m, the positive and negative triangles cancel:

`W_net, 2→6 = +4 − 4 = 0 J`

The particle has 12 J at both ends, so its speed is `√12 ≈ 3.46 m/s` at each. Between those positions it speeds up to 4 m/s and then slows down. Zero total work over an interval says that the endpoint kinetic energies match; it doesn't make the force zero throughout that interval.

If you've been doing [velocity–time graph practice](/blog/velocity-time-graph-practice/), check the axis labels before transferring a method. Area on a velocity–time graph gives displacement; area on this force–position graph gives work.

## Eight force–displacement graph practice questions

Use a blank page and keep only the force graph and starting conditions visible. Questions 1–4 use the original 2 kg particle with initial velocity +2 m/s. Questions 5–8 change an assumption or ask what the graph can establish.

1. Find the net work from 2 m to 6 m. Find the speed at both positions and describe what happens to speed between them.
2. Where is the particle fastest on its outward trip? Find its speed and acceleration at that position. Explain why zero force doesn't imply a stop.
3. A learner reports `K = −4 J` at 10 m and interprets this as motion to the left. Find the first turning point and explain the error.
4. Find the work, kinetic energy, speed, and velocity when the particle returns from 9 m to 8 m. Why does a negative force do positive work?
5. Change the first 2 m of the model: the plotted `+4 N` is now an **applied** force, and a separate constant 1 N friction force opposes the rightward motion. The mass and initial velocity stay the same. Find net work, final kinetic energy, and final speed at 2 m.
6. Return to the original net-force graph. What is the minimum initial speed at 0 m that would let a right-moving 2 kg particle reach 10 m? What happens when it gets there at exactly that initial speed?
7. Change the horizontal axis to time. A 2 kg particle initially moving at +2 m/s experiences net force +4 N from 0 s to 2 s. What does the area represent, and what is its final velocity?
8. Suppose a sensor supplies only the four position–force readings in the table, with no statement about straight lines between them. Are the exact work and turning point above established? Explain what information is missing.

### Answers with the reasoning

1. **Net work 0 J; speed √12 ≈ 3.46 m/s at both ends.** From 0 m to 2 m, the force adds 8 J to the initial 4 J, giving 12 J. The next positive triangle adds 4 J, then the negative triangle removes 4 J. Speed rises to 4 m/s at 4 m before returning to its earlier value.
2. **At 4 m: speed 4 m/s and acceleration 0 m/s².** Accumulated work reaches its maximum of 12 J there, so kinetic energy is 16 J. Force is zero at the crossing, but the particle already has nonzero velocity. It begins slowing after crossing into the negative-force region.
3. **The first turning point is 9 m.** At 8 m, 4 J remains. A further rightward meter under −4 N removes it. The proposed continuation to 10 m would require negative kinetic energy, which is impossible. Negative velocity is allowed; negative kinetic energy is not.
4. **Work +4 J; kinetic energy 4 J; speed 2 m/s; velocity −2 m/s.** Work is `(−4 N) × (−1 m) = +4 J`. The particle starts the return at rest, so all 4 J becomes kinetic energy. Its leftward direction fixes the negative velocity sign.
5. **Net work +6 J; final kinetic energy 10 J; speed √10 ≈ 3.16 m/s.** The applied force does `4 × 2 = +8 J`; friction does `−1 × 2 = −2 J`. Add both before applying the work–energy theorem: `K_final = 4 + 8 − 2 = 10 J`. Using the applied-force area alone would miss friction's work.
6. **Minimum initial speed √8 ≈ 2.83 m/s.** Reaching 10 m requires `K_initial − 8 J ≥ 0`, so the smallest possible initial kinetic energy is 8 J. Solve `½ × 2 × v_initial² = 8`. Check the intervening positions too: accumulated work rises from 0 to +12 J at 4 m, then falls continuously to −8 J at 10 m. With 8 J initially, kinetic energy stays positive before 10 m and first reaches zero there. The particle arrives at rest, then turns left under the −4 N force. An endpoint calculation alone would be insufficient if the accumulated work had a deeper minimum earlier in the trip.
7. **Impulse +8 N·s; final velocity +6 m/s.** Force multiplied by time gives a momentum change: `Δp = 4 × 2 = 8 kg·m/s`. Initial momentum is `2 × 2 = 4 kg·m/s`; final momentum is 12 kg·m/s. Divide by 2 kg. This area is not 8 J. OpenStax's [impulse chapter](https://openstax.org/books/university-physics-volume-1/pages/9-2-impulse-and-collisions) explains the force–time relationship.
8. **Neither exact result is established.** Different force curves can pass through the same four samples and enclose different signed areas. They can also cross zero at different positions. The straight-line condition makes the work and turning point exact in this example. Joining sensor readings with lines would be an interpolation assumption, so the resulting work and turning point would be estimates unless that force behavior was established separately.

## Keep a short prompt for the mistake you made

After a full problem, save the decision you missed rather than copying every line of arithmetic:

| Card front | Card back |
| --- | --- |
| Whose work equals ΔK for a point particle? | Net work: add the work done by every force acting on the particle. |
| What does K_initial + W_net < 0 at a proposed position mean? | The proposed trip is impossible from those initial conditions. Kinetic energy can't be negative. |
| Does negative force always do negative work? | No. Check displacement direction. A leftward force does positive work during leftward displacement. |
| Does zero net work mean constant speed throughout the interval? | It gives equal endpoint kinetic energies. Speed may change between them. |

Nibomo's [AP Physics 1 flashcards in English](/catalog/packages/ap-physics-1-flashcards/) contain 400 cards covering the broader course, including net work, nonnegative kinetic energy, and force–position areas. They are text cards, not a set of 400 illustrated graph problems.

Regular active recall means answering before you reveal the explanation. Spacing those reviews over time helps with long-term retention. Pair that review with fresh physics problems so you also practice choosing and applying the rules: draw the axes, calculate signed areas, and check reachability before looking at an answer. The [physics flashcard guide](/blog/how-to-use-flashcards-for-algebra-based-physics-1/) gives more examples of separating short recall prompts from full solutions.

*Created with AI assistance for research, drafting, and editing. The original piecewise force model and its work–energy calculations were checked computationally using exact rational arithmetic in Python. These checks are not laboratory validation or independent human physics review. The scientific graph is plotted from the stated data; the hero illustration is AI-generated.*
