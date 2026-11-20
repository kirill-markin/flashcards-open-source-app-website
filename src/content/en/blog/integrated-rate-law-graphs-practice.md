---
title: "Integrated Rate Law Graphs: Practice Finding Reaction Order"
description: "Practice finding reaction order from concentration-time data. Compare three plots, calculate the rate constant from the slope, and check four worked answers."
date: "2026-11-20"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/43bb6a62afd36627ca288486ab9e0e2ea589e1cd91f269bd838db9423253458d.webp"
keywords:
  - "integrated rate law graphs"
  - "reaction order from graphs"
  - "concentration-time data"
  - "rate constant from slope"
---

You measure the concentration of A at 0, 10, 20, and 30 seconds and get 1/2, 1/3, 1/4, and 1/5 M. Each drop is smaller than the last. Take the reciprocals and you get 2, 3, 4, and 5 M⁻¹, a steady rise. That straight line gives you the reaction order and lets you predict how much A will be left at 40 seconds.

Use integrated rate law graphs when you have concentration measurements over time from one run. If you have starting concentrations and initial rates from separate trials, use the [initial rates practice worksheet](/blog/rate-law-initial-rates-practice/).

![A guitarist presses a string on a fretboard whose frets get closer together toward the body](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/43bb6a62afd36627ca288486ab9e0e2ea589e1cd91f269bd838db9423253458d.webp)

## Keep time on the horizontal axis

These exercises model the disappearance of A with **−d[A]/dt = k[A]ⁿ**. Here **[A]** is the concentration of A, **k** is the rate constant, and **n** is the order with respect to A. Concentration is in **M** (mol/L), elapsed time **t** is in seconds, and **[A]₀** is the concentration at **t = 0**. Assume constant conditions, positive concentrations for the graphs, and an order of 0, 1, or 2.

Plot the same times on each graph and change the quantity on the vertical axis. The plot that gives a straight line identifies the order. Its slope gives k, with the sign and units shown below. [OpenStax's integrated rate laws chapter](https://openstax.org/books/chemistry-2e/pages/12-4-integrated-rate-laws) · [Purdue's guide to reading the three graphs](https://www.chem.purdue.edu/gchelp/howtosolveit/Kinetics/IntegratedRateLaws)

| Order in A | Vertical axis when the plot is straight | Line equation | Slope | Units of k |
| --- | --- | --- | --- | --- |
| Zero | [A] (M) | [A] = [A]₀ − kt | −k | M/s |
| First | ln([A]/(1 M)) | ln([A]/(1 M)) = ln([A]₀/(1 M)) − kt | −k | s⁻¹ |
| Second | 1/[A] (M⁻¹) | 1/[A] = 1/[A]₀ + kt | +k | M⁻¹ s⁻¹ |

The first-order plot uses the natural logarithm, **ln**. Divide [A] by 1 M to get a unitless number before taking the log. For example, at 0.50 M, calculate ln(0.50). Textbooks often write this vertical axis as **ln[A]**.

To check if a plot is straight, calculate the slope between each pair of adjacent points. Subtract the earlier vertical value from the later one, then divide by the elapsed time for that pair. The slope units are the vertical-axis units divided by seconds. In these exact exercises the slopes of a straight plot agree across intervals. Experimental points can scatter around a line, so use the full set of observations to judge the pattern.

## Compare three graphs of the same data

| Time (s) | [A] (M), exact | ln([A]/(1 M)), rounded | 1/[A] (M⁻¹), exact |
| ---: | ---: | ---: | ---: |
| 0 | 1/2 | −0.69315 | 2 |
| 10 | 1/3 | −1.09861 | 3 |
| 20 | 1/4 | −1.38629 | 4 |
| 30 | 1/5 | −1.60944 | 5 |

![Three plots at 0, 10, 20, and 30 seconds. Concentration and its natural log both fall and flatten. Reciprocal concentration rises in a straight line from 2 to 5 M⁻¹.](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/dd06b2a6eeef9a83dfdb30d3f3754c44abf99c4cfc373ef3f2bc06d2ebdd8f12.webp)

The top and middle plots flatten as A is used up. In the bottom plot, another 10 seconds always adds 1 M⁻¹ to the reciprocal. The first two rows of the table show rounded slopes.

| Vertical axis | 0–10 s | 10–20 s | 20–30 s |
| --- | ---: | ---: | ---: |
| [A], slope in M/s | −0.01667 | −0.008333 | −0.005000 |
| ln([A]/(1 M)), slope in s⁻¹ | −0.04055 | −0.02877 | −0.02231 |
| 1/[A], slope in M⁻¹ s⁻¹ | +0.100 | +0.100 | +0.100 |

Only **1/[A] versus time** has a constant slope, so the disappearance of A is **second order in A**. Using the first interval, the slope is **(3 − 2) M⁻¹ / (10 s) = +0.100 M⁻¹ s⁻¹**. For this plot, the slope equals **k = 0.100 M⁻¹ s⁻¹**.

To predict [A] at **40 s**, start at the reciprocal when **t = 0** and add the change given by the slope. You get **1/[A] = 2 M⁻¹ + (0.100 M⁻¹ s⁻¹)(40 s) = 6 M⁻¹**. Flip that back to get **[A] = 1/6 M ≈ 0.167 M**, assuming the same rate law holds through 40 s.

## Practice finding reaction order and k

Try the four problems before checking the worked answers. Treat the given values as exact.

1. At **0, 5, 15, and 30 s**, [A] is **0.80, 0.70, 0.50, and 0.20 M**. Which plot is straight? Find the order and k, then predict [A] at **35 s**. When does the line reach zero concentration?
2. At **0, 8, 24, and 40 s**, [A] is **0.500, 0.400, 0.256, and 0.16384 M**. Which plot is straight? Find the order and k, then use that model to fill in [A] at **16 s**.
3. You have two readings so far, **0.90 M at 0 s** and **0.60 M at 12 s**. Can those readings determine the order? Predict [A] at **24 s** for each of the three candidate orders. Which order would an exact reading of **0.40 M** at that time support?
4. A straight **1/[A] versus time** plot passes through **(5 s, 2.0 M⁻¹)** and **(17 s, 4.4 M⁻¹)**. A classmate reports **k = −0.20 s⁻¹**. Calculate k with the correct sign and units. How can the plotted quantity rise while A is disappearing?

### Worked answers

1. **Zero order.** The [A] plot loses 0.10 M in 5 s, 0.20 M in 10 s, and 0.30 M in 15 s. All three slopes equal −0.020 M/s, so **k = 0.020 M/s**. At 35 s, **[A] = 0.80 M − (0.020 M/s)(35 s) = 0.10 M**. The line reaches zero at **40 s** because 0.80 M divided by 0.020 M/s gives 40 s. Use that as the endpoint of this model. A continuation would give negative concentrations.
2. **First order.** In the first 8 s, [A] is multiplied by 0.80. In each following 16-second interval, it's multiplied by 0.64, which is 0.80². Doubling the time doubles the change in the natural log, so **ln(0.64)/(16 s) = ln(0.80)/(8 s) ≈ −0.02789 s⁻¹**. The slope is the same across all three intervals and **k ≈ 0.02789 s⁻¹**. At 16 s, the model has applied the 0.80 factor twice, giving **[A] = (0.500 M)(0.80)² = 0.320 M**.
3. **All three orders fit the first two readings.** Each plot has two points at distinct times, so each gives a straight line. Predict one more 12-second interval to see where those lines lead.

   | Model | What repeats over the next 12 s | Predicted [A] at 24 s |
   | --- | --- | ---: |
   | Zero order | Subtract 0.30 M from 0.60 M | 0.30 M |
   | First order | Multiply 0.60 M by 0.60/0.90 = 2/3 | 0.40 M |
   | Second order | Add the same difference, (5/3 − 10/9) M⁻¹, to 5/3 M⁻¹ to get 20/9 M⁻¹ | 0.45 M |

   The exact reading of **0.40 M** fits **first order** among these three models.

4. The slope is **(4.4 − 2.0) M⁻¹ / ((17 − 5) s) = +0.20 M⁻¹ s⁻¹**. For the straight reciprocal plot, **k = +0.20 M⁻¹ s⁻¹**. Dividing 1 by a smaller positive concentration gives a larger reciprocal.

## Turn a slope mistake into a flashcard

On the front, write “The 1/[A] versus time line rises by 2.4 M⁻¹ in 12 s. What's k with units?” On the back, write “**k = +0.20 M⁻¹ s⁻¹**. For the reciprocal plot, k equals the slope.” Try answering it from memory tomorrow and again a few days later.

*AI tools assisted with drafting, editing, and the cover illustration. The datasets were constructed for this worksheet.*
