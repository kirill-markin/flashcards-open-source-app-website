---
title: "Static and Kinetic Friction Practice: Check the Motion First"
description: "Solve static and kinetic friction practice problems by checking motion, normal force, and the stopping transition. Original examples with explained answers."
date: "2026-10-29"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/159d60a9fc50b3243af6ab3c68a1c7f41b405060eb5f26ea7ad3067d3852be0f.webp"
keywords:
  - "static and kinetic friction practice"
  - "static friction practice problems"
  - "kinetic friction problems"
  - "friction after stopping"
  - "static friction maximum"
---

A 16 N push can leave a block at rest, speed it up to the right, or slow its leftward slide. The mass, floor, and push can all stay the same. The difference is the block's motion relative to the floor: check that before choosing a friction formula.

This static and kinetic friction practice uses one block throughout. First compare its motion states, then follow a slide through the instant it stops. Try the eight original problems before reading their explained answers. All calculations use `g = 10 m/s²`.

![A woman pauses with her hand on a partly open wooden drawer containing folded towels](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/159d60a9fc50b3243af6ab3c68a1c7f41b405060eb5f26ea7ad3067d3852be0f.webp)

## Set up the block before choosing a formula

Use a rigid 4 kg block on a horizontal floor, with a static coefficient `μ_s = 0.50` and kinetic coefficient `μ_k = 0.30`. Assume the block doesn't tip, the contact remains intact, and the coefficients stay constant. The floor is stationary unless a question explicitly changes it. Each stated push or pull remains constant unless specified otherwise. Ignore air resistance and all unlisted forces.

Choose the block as the system, right as positive horizontally, and up as positive vertically. Its free-body diagram contains:

- Earth's gravitational force on the block (its weight), 40 N downward;
- the floor's normal force on the block, upward;
- the applied horizontal push, if present;
- the floor's friction on the block, along the surface.

With no vertical acceleration or extra vertical force:

```text
N − mg = 0
N = (4 kg)(10 m/s²) = 40 N
```

Here, `N` denotes the normal-force magnitude; the unit N means newtons. The equation establishes why the normal force equals weight in this setup. Extra vertical loading will change it. If weight and normal force seem like an action–reaction pair, revisit the [Newton's third law practice](/blog/newtons-third-law-practice/): both act on the block.

## Static friction has a ceiling

When the contact surfaces aren't slipping, static friction can take a range of values:

```text
|f_s| ≤ μ_s N
|f_s| ≤ (0.50)(40 N) = 20 N
```

The **maximum static friction** is 20 N. The actual force can be smaller, including zero. For a resting block pushed rightward with 16 N, equilibrium requires `f_s = −16 N`. Since its magnitude is below the ceiling, the block can remain at rest. Static friction opposes the slip that would occur without it; here, that would be a rightward slip.

Once the block slides relative to the floor, this model gives a kinetic-friction magnitude:

```text
|f_k| = μ_k N = (0.30)(40 N) = 12 N
```

Assign its direction opposite the relative sliding. A rightward slide gives `f_k = −12 N`; a leftward slide gives `f_k = +12 N`. [OpenStax's friction lesson](https://openstax.org/books/college-physics-2e/pages/5-1-friction) explains these laws and the difference between the static limit and the sliding force.

These are empirical approximations for dry friction, not exact laws for every material and speed. The fixed coefficients here define an introductory model; they aren't measurements of a particular block. [OpenStax's University Physics discussion](https://openstax.org/books/university-physics-volume-1/pages/6-2-friction) describes the model's approximate character and the role of relative motion.

For these stationary-floor problems, use this decision rule: **if the block is sliding, use kinetic friction. If it's at rest, find the friction needed to keep it there, then check whether `|f_s| ≤ μ_s N`.** Include equality in that check. A force above the static limit starts a slide; a force below it can still accelerate a block that's already sliding.

## Give the same 16 N push three different starting states

Keep the horizontal push at `F = +16 N`. In each case, write `F + f = ma` using signed forces.

| State at the instant considered | Friction on block | Net horizontal force | Acceleration |
| --- | --- | --- | --- |
| At rest relative to floor | `−16 N`, static | `16 − 16 = 0 N` | `0 m/s²` |
| Sliding right | `−12 N`, kinetic | `16 − 12 = +4 N` | `+1 m/s²` |
| Sliding left | `+12 N`, kinetic | `16 + 12 = +28 N` | `+7 m/s²` |

In the last row, velocity is leftward while acceleration is rightward. The block is slowing down. The push and friction both act rightward because the block is sliding left across the floor.

That `+7 m/s²` applies only while it slides left. When it stops, check static friction again. A 16 N push can be balanced by 16 N of static friction, so the block can stay stopped. Carrying the left-sliding equation beyond that transition would use the wrong friction state.

## Follow a slide until it stops, then check again

Now let the block start at `x = 0` with velocity `+2 m/s`. Apply a constant 8 N push rightward. While it slides right, friction is 12 N leftward:

```text
a = (8 N − 12 N) / 4 kg = −1 m/s²
v = 2 m/s − (1 m/s²)t
```

It reaches zero velocity at `t = 2 s`. Its displacement before stopping is:

```text
Δx = (2 m/s)(2 s) + ½(−1 m/s²)(2 s)²
Δx = 2 m
```

Reaching zero velocity doesn't by itself mean the block stays stopped. Check the forces again. Here, the 8 N push remains, and holding the block still requires `f_s = −8 N`, within the 20 N static limit.

| Time | Motion | Friction | What the model predicts |
| --- | --- | --- | --- |
| `0 ≤ t < 2 s` | Sliding right, slowing | `−12 N` | `a = −1 m/s²` |
| `t = 2 s` | Reaches rest | Switch to `−8 N`, static | The static limit allows it to stay stopped |
| `t > 2 s` | Remains at rest | `−8 N` | `a = 0`, position stays at 2 m |

Substituting `t = 3 s` into the earlier velocity equation gives `−1 m/s`. That result is invalid: the equation's constant acceleration ended at the stop. Friction after stopping must be determined from the new state.

## Eight practice problems

Use `m = 4 kg`, `μ_s = 0.50`, `μ_k = 0.30`, and `g = 10 m/s²`, with the assumptions above. Each question starts independently. State the friction force, its type, and the acceleration where requested.

1. A 12 N rightward push acts on the block. Compare a block initially at rest with one already sliding right. Can that push start motion? Can it maintain motion?
2. The block rests under a 20 N rightward push. Must it begin sliding? What changes if the push increases above 20 N?
3. A 24 N rightward push is applied to the resting block. Find its acceleration once it starts sliding.
4. The block is sliding left under a 16 N rightward push. Find its friction and acceleration. What happens when it stops if the push continues?
5. The block starts sliding right at 2 m/s under an 8 N rightward push. Find the stopping time, stopping distance, and velocity at 3 s.
6. An additional 10 N force presses vertically downward while a 24 N horizontal push acts rightward. The block starts at rest. Does it slide?
7. An additional 10 N force pulls vertically upward while a 16 N horizontal push acts rightward. The block starts at rest and remains in contact with the floor. Find its acceleration after sliding begins.
8. Replace the floor with a horizontal conveyor belt, keeping the same friction coefficients. The block moves right, but the belt moves right faster, so the surfaces are slipping. No additional horizontal force acts on the block. Which way does friction act on it? Could friction increase its speed?

### Answers with the state check included

1. **At rest: static friction is 12 N leftward and acceleration is zero.** The required force is below the 20 N limit. **Already sliding right: kinetic friction is 12 N leftward and acceleration is also zero**, since `(12 − 12) / 4 = 0`. The sliding block continues at constant velocity. A 12 N push can maintain its existing slide, but it can't start this resting block. Zero acceleration alone doesn't identify the friction type.

2. **It can remain at rest at exactly 20 N.** Static friction is 20 N leftward, at its maximum, giving zero net force. In this ideal model, equality is limiting equilibrium; it doesn't force sliding. A push exceeding 20 N cannot be balanced statically. Once rightward sliding begins, friction has magnitude 12 N and acceleration is `(F − 12 N) / 4 kg` rightward. Real threshold measurements needn't be this sharp.

3. **The block starts sliding and accelerates at 3 m/s² rightward.** The required 24 N static force would exceed 20 N. During the ensuing rightward slide, `f_k = −12 N`, so `a = (24 − 12) / 4 = +3 m/s²`. Don't subtract the 20 N static maximum throughout the slide.

4. **Friction is 12 N rightward; acceleration is 7 m/s² rightward while it slides left.** With right positive, `a = (16 + 12) / 4 = +7 m/s²`. Its leftward speed decreases. At zero velocity, static friction becomes 16 N leftward and balances the push. The block stays at rest; the earlier acceleration doesn't continue through the stop.

5. **It stops after 2 s, travels 2 m, and has zero velocity at 3 s.** During sliding, `a = (8 N − 12 N) / 4 kg = −1 m/s²`. Setting `v = 0` gives `t_stop = (2 m/s) / (1 m/s²) = 2 s`. The average velocity before the stop is `(2 + 0) / 2 = 1 m/s`, so the stopping distance is `(1 m/s)(2 s) = 2 m`. Afterward, 8 N of leftward static friction holds it. A predicted backward velocity comes from extending the sliding equation beyond its valid interval.

6. **It stays at rest.** Vertical balance gives `N − 40 − 10 = 0`, hence `N = 50 N`. The static limit rises to `(0.50)(50) = 25 N`. The actual static friction is 24 N leftward, balancing the horizontal push, so acceleration is zero. Using `N = mg` without counting the extra downward force would incorrectly predict sliding.

7. **It starts sliding and accelerates at 1.75 m/s² rightward.** Vertical balance gives `N + 10 − 40 = 0`, hence `N = 30 N`. The static limit falls to 15 N, below the 16 N push. Kinetic friction is `(0.30)(30) = 9 N` leftward, so `a = (16 − 9) / 4 = +1.75 m/s²`. The upward pull changes contact loading, while weight remains 40 N.

8. **Kinetic friction acts rightward on the block.** With right positive, `v_relative = v_block − v_belt < 0`: the block slips left relative to the faster belt. Friction opposes that slip. Its magnitude is `(0.30)(40 N) = 12 N`, giving `a = +12 N / 4 kg = +3 m/s²` while this slipping state lasts. The block gains speed in the ground frame. Friction can therefore point in the same direction as the block's ground-frame velocity. If the speeds later match, reassess the contact state rather than continuing the slipping model automatically.

## Keep the decision step in your review

After solving, turn a missed distinction into a short recall prompt: “A push is below the static limit, but the block is already sliding. Which friction law applies?” Answer: kinetic friction, because the surfaces are slipping. Keep the full calculation on paper and revisit it with a changed force or motion direction.

For broader English course review, Nibomo's [400-card AP Physics 1 deck](/catalog/packages/ap-physics-1-flashcards/) includes friction, normal-force, and relative-slip questions across its eight-unit scope. It's a general course deck rather than a dedicated friction worksheet. Nibomo is our product. Regular recall and spaced review support long-term retention; full problems still give you practice choosing and applying the model. The [algebra-based physics study guide](/blog/how-to-use-flashcards-for-algebra-based-physics-1/) explains how to combine those activities.

*AI tools substantially assisted research, drafting, editing, construction of these original exercises, and the hero illustration. Exact-rational Python calculations checked the arithmetic within the stated model; this was not a laboratory test or an independent human physics review.*
