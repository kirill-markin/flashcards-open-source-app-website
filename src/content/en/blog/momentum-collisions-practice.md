---
title: "Momentum and Collisions Practice: Signs, Systems, and Energy"
description: "Solve momentum and collision problems with signed velocities, system boundaries, and separate kinetic-energy checks. Worked examples and explained practice answers."
date: "2026-10-27"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/7bdf4a698865606bcb35cdb5fb211d899a59e7bdbd437783bc382d379b673592.webp"
keywords:
  - "momentum and collisions practice"
  - "conservation of momentum practice"
  - "elastic vs inelastic collisions"
  - "impulse momentum practice"
  - "signed velocity"
---

Two carts approach each other with total momentum `+5 kg·m/s`. After they collide, that total could still be `+5 kg·m/s` whether they stick together or rebound. Getting the momentum sum right doesn't tell you which outcome happened.

The worked examples below keep the starting carts unchanged and vary the collision condition. You'll choose a system, retain the velocity signs, and calculate kinetic energy separately. Then try eight momentum and collisions practice questions with complete answers. Basic algebra and a calculator are enough.

![A shorter skater holds a taller skater's arm as they glide together on an outdoor rink](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/7bdf4a698865606bcb35cdb5fb211d899a59e7bdbd437783bc382d379b673592.webp)

## Start with one system and one direction

Use two idealized carts moving along a horizontal line, with constant masses and no rotational motion in the model. Cart A starts to the left of B, and they approach each other. Choose **right as positive**. Let `u` mean velocity before contact and `v` mean velocity after the collision ends.

| Cart | Mass | Initial velocity | Initial momentum | Initial kinetic energy |
| --- | --- | --- | --- | --- |
| A | 2 kg | +4 m/s | +8 kg·m/s | 16 J |
| B | 3 kg | −1 m/s | −3 kg·m/s | 1.5 J |
| Total | 5 kg | — | **+5 kg·m/s** | **17.5 J** |

Momentum uses signed velocity: `p = mv`. Translational kinetic energy uses its square: `K = ½mv²`. B contributes `−3 kg·m/s` to momentum and `+1.5 J` to kinetic energy. Don't put a minus sign on its energy because it moves left.

For the **A + B system**, assume negligible net external horizontal impulse over the collision interval. The momentum equation is then:

```text
2v_A + 3v_B = 5
```

Masses are in kilograms and velocities in meters per second throughout these equations. One equation leaves two unknown velocities. A sticking condition or an elastic condition will supply the missing equation.

If the net external impulse isn't negligible, use `p_final = p_initial + J_external`. The contact impulses between A and B cancel in their combined momentum balance. An impulse from outside that boundary belongs in `J_external`. See [OpenStax on conservation of linear momentum](https://openstax.org/books/university-physics-volume-1/pages/9-3-conservation-of-linear-momentum).

For **A alone**, B is outside the boundary. B's force is external to A and changes A's momentum. The [force-pair practice](/blog/newtons-third-law-practice/) helps distinguish a force on one object from cancellation in a combined system.

For the three collision models below, also assume no energy transfer across the A + B boundary. That's a separate energy assumption: negligible net impulse by itself doesn't establish zero external work.

## Sticking gives the missing condition

If the carts stick together, they have a common final velocity:

```text
v_A = v_B = v
2v + 3v = 5
v = +1 m/s
```

The joined carts move right. Their kinetic energy is:

```text
K_final = ½ × (2 + 3) × 1² = 2.5 J
K_initial − K_final = 17.5 − 2.5 = 15 J
```

The momentum check is `2(+1) + 3(+1) = +5 kg·m/s`. The kinetic-energy check gives a decrease of 15 J. Under our energy assumption, this decrease goes into other forms within the system, such as deformation and internal energy. It isn't a loss of total energy.

Sticking is **perfectly inelastic**. An **elastic** collision preserves kinetic energy; an ordinary inelastic collision reduces it. Separation is compatible with either type. [OpenStax's collision classification](https://openstax.org/books/university-physics-volume-1/pages/9-4-types-of-collisions) explains this energy distinction.

## Elastic separation needs an elastic assumption

Reset the carts to the original starting state and specify an elastic collision. For this two-cart, one-dimensional collision with negligible external impulse, elasticity gives relative speed reversal:

```text
Before: u_A − u_B = 4 − (−1) = 5 m/s
After:  v_B − v_A = 5 m/s
```

Before contact, the gap closes at 5 m/s. After an elastic collision, it opens at 5 m/s. The second equation requires the elastic condition; bouncing alone doesn't justify it.

Substitute `v_B = v_A + 5` into momentum conservation:

```text
2v_A + 3(v_A + 5) = 5
5v_A = −10
v_A = −2 m/s
v_B = +3 m/s
```

Substitute the velocities into both original quantities, rather than treating the momentum result as an energy check:

```text
p_final = 2(−2) + 3(+3) = +5 kg·m/s
K_final = ½ × 2 × (−2)² + ½ × 3 × 3²
        = 4 + 13.5 = 17.5 J
```

A reverses leftward, and B reverses rightward. Because A is left of B, `v_B − v_A = +5 m/s` means they separate.

## A rebound can still lose kinetic energy

Consider another possible result from the same start: `v_A = −0.5 m/s` and `v_B = +2 m/s`.

```text
p_final = 2(−0.5) + 3(+2) = +5 kg·m/s
K_final = ½ × 2 × 0.5² + ½ × 3 × 2²
        = 0.25 + 6 = 6.25 J
```

The carts move apart, but kinetic energy decreases by `17.5 − 6.25 = 11.25 J`. This is an inelastic rebound.

The same masses and initial velocities therefore allow all three results:

| Final outcome | v_A (m/s) | v_B (m/s) | Total momentum (kg·m/s) | Total kinetic energy (J) |
| --- | --- | --- | --- | --- |
| Stick together | +1 | +1 | +5 | 2.5 |
| Partial rebound | −0.5 | +2 | +5 | 6.25 |
| Elastic collision | −2 | +3 | +5 | 17.5 |

Momentum alone also accepts the proposed velocities `−5 m/s` and `+5 m/s`: `2(−5) + 3(+5) = +5`. But their kinetic energy would be `25 + 37.5 = 62.5 J`, an increase of 45 J.

For a **passive collision**, with no external energy input or stored energy released into motion, `K_final ≤ K_initial`. Our proposed 62.5 J outcome violates that bound. It would require an extra 45 J supplied to translational motion, for example by releasing stored energy during the interaction. Its momentum sum is valid; its energy requirement rules it out under the passive assumption.

## Follow the impulse received by each cart

For each constant-mass cart, calculate the **net impulse** from its own velocity change:

`J = m(v − u)`, and `F_average = J / Δt`

Impulse has units `N·s`, equivalent to `kg·m/s`. It is also the signed area under a net force–time graph. See [OpenStax's impulse–momentum explanation](https://openstax.org/books/university-physics-volume-1/pages/9-2-impulse-and-collisions).

Applying that equation to our three outcomes gives:

| Outcome | Impulse on A (N·s) | Impulse on B (N·s) | Sum (N·s) |
| --- | --- | --- | --- |
| Stick | 2(1 − 4) = −6 | 3[1 − (−1)] = +6 | 0 |
| Partial rebound | 2(−0.5 − 4) = −9 | 3[2 − (−1)] = +9 | 0 |
| Elastic | 2(−2 − 4) = −12 | 3[3 − (−1)] = +12 | 0 |

With other horizontal impulses negligible, these are also the contact impulses. Each cart's momentum changes even though the pair's total doesn't. Compare the sticking and elastic rows: the greater velocity changes require contact impulses of greater magnitude.

If the sticking collision lasts `0.20 s`, the average horizontal forces are `−6/0.20 = −30 N` on A and `+6/0.20 = +30 N` on B. Their equal magnitudes don't require equal masses or constant forces. Each average covers the same contact interval.

## Eight momentum and collisions practice questions

Try these on paper before reading the answers. Questions 1–6 use the original 2 kg and 3 kg carts and the stated assumptions, except where a question changes them. For questions 7–8, use right as positive and take the single object as your system.

1. A student calculates initial momentum as `2 × 4 + 3 × 1 = 11 kg·m/s`. Repair the calculation. Does the corrected momentum uniquely determine both final velocities?
2. The carts stick together. Find their common velocity, final kinetic energy, and decrease in kinetic energy. Explain why using kinetic-energy conservation would fail.
3. A proposed rebound has `v_A = −0.5 m/s` and `v_B = +2 m/s`. Check momentum and kinetic energy, then classify it. Does moving apart prove elasticity?
4. The collision is elastic. Use momentum conservation and relative speed reversal to find both final velocities. State which equation would become unjustified without the elastic condition.
5. The carts stick over `0.20 s`, with other horizontal impulses negligible. Find each impulse and average horizontal force. A student says, “The forces cancel, so A receives zero impulse.” Identify the system error.
6. Change the setup: an external agent supplies net horizontal impulse `−5 N·s` to A + B during a sticking collision. Find their final common velocity. Can the entire decrease in kinetic energy be called internal dissipation without knowing the external work?
7. A constant-mass 0.15 kg ball has initial velocity `+12 m/s` and rebounds with velocity `−8 m/s` over `0.020 s`. Find its net horizontal impulse and average net horizontal force. Explain why subtracting the two speeds gives the wrong change.
8. A constant-mass 0.50 kg object initially moves at `−2 m/s`. Its net horizontal force rises in a straight line from 0 N at `t = 0` to `+6 N` at `0.25 s`, then falls in a straight line to 0 N at `0.50 s`. Find horizontal impulse, final velocity, and average net horizontal force.

### Answers with the deciding step

1. **Initial momentum is +5 kg·m/s.** B's signed velocity is `−1`, so `p_initial = 2(+4) + 3(−1) = 8 − 3 = +5 kg·m/s`. The equation `2v_A + 3v_B = 5` permits multiple velocity pairs. It needs a further condition, such as sticking or elasticity, to determine both velocities.
2. **Common velocity +1 m/s; final kinetic energy 2.5 J; decrease 15 J.** Sticking gives `v_A = v_B = v`, so momentum gives `(2 + 3)v = 5`. Independently, `K_final = ½ × 5 × 1² = 2.5 J`, compared with `16 + 1.5 = 17.5 J` initially. The 15 J decrease shows why kinetic-energy conservation would contradict the specified sticking outcome.
3. **Momentum +5 kg·m/s; kinetic energy 6.25 J; inelastic rebound.** Check `p_final = 2(−0.5) + 3(+2) = −1 + 6 = +5 kg·m/s`. Separately, `K_final = ½ × 2 × (−0.5)² + ½ × 3 × 2² = 0.25 + 6 = 6.25 J`. The carts separate, but the 11.25 J decrease rules out elasticity.
4. **A: −2 m/s; B: +3 m/s.** Combine `2v_A + 3v_B = 5` with `v_B − v_A = 5`. Substituting `v_B = v_A + 5` gives `5v_A + 15 = 5`. The result passes two checks: momentum is `−4 + 9 = +5 kg·m/s`, and kinetic energy is `4 + 13.5 = 17.5 J`. Without elasticity, the relative-speed equation is unjustified. The negligible-external-impulse assumption still justifies momentum conservation.
5. **A: −6 N·s and −30 N; B: +6 N·s and +30 N.** A receives `2(1 − 4) = −6 N·s`; B receives `3[1 − (−1)] = +6 N·s`. Divide each by 0.20 s for its average horizontal force. The student's error is applying the combined-system cancellation to A alone. B's force lies outside A's boundary; it cancels with A's force only when summing impulses for A + B.
6. **Final common velocity 0 m/s.** Include the external impulse: `p_final = +5 + (−5) = 0 kg·m/s`, so `(2 + 3)v = 0`. The final kinetic energy is zero, 17.5 J below its initial value. However, impulse doesn't specify external work. With that work unmeasured, the energy decrease can't all be assigned to internal dissipation.
7. **Net horizontal impulse −3 N·s; average net horizontal force −150 N.** `Δv = −8 − (+12) = −20 m/s`, so `J = 0.15(−20) = −3 N·s` and `F_average = −3/0.020 = −150 N`. Both negative signs mean leftward. Subtracting speeds gives `8 − 12 = −4 m/s`, which omits the reversal. The momentum check is `p_initial = +1.8`, `p_final = −1.2`, and `Δp = −3 kg·m/s`.
8. **Impulse +1.5 N·s; final velocity +1 m/s; average net horizontal force +3 N.** The complete triangular area gives `J = ½ × 0.50 × 6 = +1.5 N·s`. Initial momentum is `0.50(−2) = −1 kg·m/s`; add the impulse to obtain `p_final = +0.5 kg·m/s`. Dividing by 0.50 kg gives `v = +1 m/s`. The average force is `1.5/0.50 = +3 N`, half the triangle's peak. A positive impulse has carried the object from leftward to rightward motion.

For question 8, check the horizontal axis before calculating area. A force–time area gives impulse; a [force–displacement area gives work](/blog/force-displacement-graph-practice/).

## Review the decision you missed

After solving a full problem, turn a repeated mistake into a short retrieval prompt:

| Prompt | Answer |
| --- | --- |
| What lets total momentum stay constant over a collision? | Negligible net external impulse on the chosen system. |
| What extra equation does sticking supply? | The objects have a common final velocity. |
| Does rebound imply an elastic collision? | No. Compare the system's initial and final kinetic energies. |
| What sign goes into an impulse calculation? | Signed final velocity minus signed initial velocity. |

The [AP Physics 1 flashcards in English](/catalog/packages/ap-physics-1-flashcards/) contain 400 text cards across the broader eight-unit course, including momentum, impulse, and collision conditions. Use them to review the conditions and concepts alongside numerical practice.

Answering from memory and spacing reviews over time supports long-term retention. Keep solving fresh problems too: a short card can rehearse a condition, while a full problem checks whether you choose and apply it correctly. The [physics flashcard guide](/blog/how-to-use-flashcards-for-algebra-based-physics-1/) explains that division of work.

*Created with AI assistance for research, drafting, and editing. The original idealized models and calculations were checked using exact rational arithmetic in Python. These are mathematical examples, not measurements from real apparatus or teaching trials. The hero illustration is AI-generated.*
