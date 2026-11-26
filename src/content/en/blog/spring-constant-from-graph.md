---
title: "How to Find the Spring Constant From a Force–Extension Graph"
description: "Use the slope of a force–extension graph to find the spring constant, even when the line starts above zero. Try a worked example and practice questions."
date: "2026-11-26"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/4d3a2f985fe07c71ce4610ed351cbb60e9b13a19e37f9d1a0f03d08a84cae433.webp"
keywords:
  - "find spring constant from a graph"
  - "force extension graph slope"
  - "Hooke's law graph"
  - "spring constant in N/m"
  - "force extension graph practice"
---

At 4 cm on the graph below, the applied force is 3 N. Dividing `3 N` by `0.04 m` gives `75 N/m`. The spring constant is **50 N/m**. The ruler was set to zero with a load already hanging from the spring, so the graph starts at 1 N.

To find the spring constant `k`, **divide the change in applied force by the change in extension** along the straight part of the graph, with force on the vertical axis and extension on the horizontal axis. Use newtons and meters to get `k` in `N/m`. In the range where Hooke’s law holds, a larger `k` means it takes more force to stretch the spring by the same extra distance. [OpenStax on Hooke’s law and spring stiffness](https://openstax.org/books/college-physics-ap-courses/pages/16-1-hookes-law-stress-and-strain-revisited)

![A shopkeeper lowers a golden pear into a produce scale that already holds three red pears.](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/4d3a2f985fe07c71ce4610ed351cbb60e9b13a19e37f9d1a0f03d08a84cae433.webp)

## Find the slope when the spring is already loaded

In this fictional example, a vertical spring holds an initial load that weighs 1 N. Set the ruler to zero at that position. The extra extension `x` is how much longer the spring is compared with its length under that 1 N load. At each reading, the hanging load is at rest. Its weight acts downward, and the spring pulls up on it with an equal force. The graph shows how hard the load pulls down on the spring.

The model is exactly linear from 0 to 6 cm. The last row is a separate reading.

| Extra extension, x (cm) | Total applied force (N) |
| --- | --- |
| 0 | 1 |
| 2 | 2 |
| 4 | 3 |
| 6 | 4 |
| 8 | 4.4 |

![Force versus extra extension in centimeters. A straight line rises from 1 N at 0 cm to 4 N at 6 cm. A separate 4.4 N point at 8 cm sits below the dashed prediction of 5 N.](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/841294ab69d70b0d012b725bfd82fe5bbfb0d6305815394668674c69445a8b88.webp)

Pick the points at 2 cm and 6 cm. Use the 6 cm point first in both subtractions.

`k = ΔF / Δx = (4 N − 2 N) / (0.06 m − 0.02 m) = 50 N/m`

On the graph’s centimeter scale, that’s `0.50 N/cm`. The `75 N/m` calculation divides the **total** 3 N by the **extra** 4 cm. Subtract the initial 1 N from the force, and now both quantities use the same reference. The added force of 2 N divided by 0.04 m gives 50 N/m. Over the straight segment, the total applied force is `F = 1 N + (50 N/m) × x`, with `x` in meters.

The intercept here comes from the known **preload**, the 1 N already on the spring at the ruler’s zero. In an experiment, a sensor’s zero offset can also shift the intercept. Estimate `k` from a best-fit line through readings in the linear range. Let the intercept vary unless the setup establishes that zero extension corresponds to zero force.

### What the later reading tells you

Extending the line to 8 cm predicts `1 N + (50 N/m) × 0.08 m = 5 N`. The later reading is only 4.4 N. Use the specified 0–6 cm segment to find `k` in this example.

To check for permanent deformation in a real spring, compare its unloaded length before and after the stretch. A spring can return to its original unloaded length even after stretching beyond its linear range.

## Read the axis labels before using the slope

With **extension on the vertical axis** and applied force on the horizontal axis, the slope is `Δx / ΔF = 1/k`. For the same spring, that’s `0.020 m/N`, or `2.0 cm/N`. Take the reciprocal of the slope in `m/N` to get `k` in `N/m`. [OpenStax’s extension-versus-force graph and elastic range](https://openstax.org/books/college-physics-ap-courses/pages/5-3-elasticity-stress-and-strain)

With **signed restoring force on the vertical axis** and extra extension on the horizontal axis, take downward as positive. The spring pulls upward on the load, so its force goes from `−2 N` at 2 cm to `−4 N` at 6 cm. The slope is `−50 N/m`. Its magnitude gives the positive spring constant.

## Use the area to find applied work

The graph’s height at 4 cm gives the total applied force there, 3 N. Now suppose you slowly increase the downward pull on the spring from the 2 cm mark to the 6 cm mark, following the same straight line. The pull and the displacement both point down, so the applied force does positive work. The area between the line and the horizontal axis over that interval is a trapezoid. [OpenStax on work from a force–position graph](https://openstax.org/books/university-physics-volume-1/pages/7-1-work)

`W_applied = ½ × (2 N + 4 N) × 0.04 m = 0.120 J`

Plot only the added force and the endpoint heights drop to 1 N and 3 N. That area is `0.080 J`. The initial 1 N contributes the remaining `0.040 J` over the same distance. To calculate net work, add the work of all forces on the object you’re tracking. Try that calculation in the [force–displacement graph practice](/blog/force-displacement-graph-practice/).

## Practice on a second spring

A second spring has a straight force–extension graph from 0 to 3 cm. Its total applied force is 0.6 N at 0 cm, 1.0 N at 1 cm, and 1.8 N at 3 cm. Extra extension is on the horizontal axis. Use these readings before checking the answers.

1. Find `k` using the readings at 1 cm and 3 cm. What does the intercept represent if the ruler was zeroed while the spring carried its initial load?
2. Swap the axes. What slope and units would you report?
3. How much work does the total applied force do during a slow stretch from 0 to 3 cm?

### Answers

1. **40 N/m.** The force change is `0.8 N` and the extension change is `0.02 m`. The `0.6 N` vertical intercept is the initial load.
2. **0.025 m/N.** With the axes swapped, the slope is `0.02 m / 0.8 N`.
3. **0.036 J.** The average applied force is `(0.6 N + 1.8 N) / 2 = 1.2 N`. Multiply by `0.03 m`.

## Turn a graph mistake into a recall prompt

If you divided force by extension at one point, try a card that asks “Which two changes give `k` when the graph starts above zero?” Answer it from memory before flipping the card. Come back to it after a gap to help the rule stick, then try it on a fresh graph. Find more examples of short prompts in the [algebra-based physics study guide](/blog/how-to-use-flashcards-for-algebra-based-physics-1/).

For practice with hanging weights and signed restoring-force slopes, try the 400-card [AP Physics 1 flashcard deck in English](/catalog/packages/ap-physics-1-flashcards/).

*Nibomo used AI for research, drafting, editing, and the cover illustration. The example calculations were checked with exact rational arithmetic in Python. The graph was plotted from the fictional model above.*
