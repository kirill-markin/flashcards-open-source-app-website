---
title: "Pseudo-First-Order Kinetics Practice Problems"
description: "Find the observed rate constant from concentration–time data, use two runs to recover the full rate law, and try five problems with worked answers."
date: "2026-11-22"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/eae5c9d535b251ca348bdfc3fd1aa4624ffefa2061e8876c159ac0b8eaafa07f.webp"
keywords:
  - "pseudo-first-order kinetics practice problems"
  - "pseudo-first-order rate constant"
  - "kobs from slope"
  - "isolation method kinetics"
---

When B starts at 0.100 M, A takes about 87 seconds to halve. When B starts at 0.200 M, that half-life drops to about 22 seconds. To find the order in B, plot the natural log of the fraction of A remaining against time for each run, then compare the slopes.

The worked example uses two slopes to find the full rate law and a third to check it. Five practice problems follow, with worked answers in a separate section. The datasets are fictional and the worked example uses rounded values.

![A woman watches sand fall through one wooden hourglass beside two matching timers](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/eae5c9d535b251ca348bdfc3fd1aa4624ffefa2061e8876c159ac0b8eaafa07f.webp)

## Why excess B makes one run look first order

Suppose the reaction consumes one mole of B for each mole of A at constant volume. Model the rate of disappearance of A, **rₐ = −d[A]/dt**, with the power law **rₐ = k[A][B]ⁿ**. This model assumes first order in A, which the time data can help you check. The 1:1 ratio tells you how much B is used up. Comparing slopes across runs gives you the exponent **n**.

In the **isolation method**, you start with B in large excess. Its concentration changes so little during a run that you can replace [B] with its starting value **[B]₀**. [Davidson College’s isolation method lesson](https://www.chm.davidson.edu/vce/kinetics/IsolationMethod.html)

**rₐ ≈ kobs[A]**, where **kobs ≈ k[B]₀ⁿ**.

The **observed rate constant kobs**, also called the **pseudo-first-order rate constant**, is approximately constant within one run. It can change across runs when [B]₀ changes, even with the same underlying rate constant **k**. One run measures the combined value k[B]₀ⁿ. To find n and k separately, compare runs with different [B]₀.

## Find kobs from the slope

All three runs start with **[A]₀ = 0.200 mM = 0.000200 M**, where M is mol/L. Temperature, volume, and the other conditions are the same across runs. The starting concentration of B in run 2 is **[B]₀ = 0.200 M**.

| Time (s) | [A]ₜ (mM) | [A]ₜ/[A]₀ | ln([A]ₜ/[A]₀), rounded |
| ---: | ---: | ---: | ---: |
| 0 | 0.200 | 1 | 0 |
| 21.66 | 0.100 | 0.500 | −0.693 |
| 43.32 | 0.050 | 0.250 | −1.386 |
| 64.98 | 0.025 | 0.125 | −2.079 |

Plot time on the horizontal axis and **ln([A]ₜ/[A]₀)** on the vertical axis. The concentration units cancel in the ratio, so you can use the mM values as shown. The log falls by about 0.693 every 21.66 seconds, consistent with first-order behavior in A under these conditions.

The first-order integrated rate law gives **ln([A]ₜ/[A]₀) ≈ −kobs × t** for this run, so **kobs = −slope**. The log is dimensionless, so the slope and kobs have units of inverse seconds. [OpenStax’s integrated rate laws chapter](https://openstax.org/books/chemistry-2e/pages/12-4-integrated-rate-laws)

Using the two endpoints gives **slope = (ln(0.125) − 0)/(64.98 s) ≈ −0.0320 s⁻¹**. That makes **kobs ≈ 0.032 s⁻¹**.

If you need to choose between zero, first, and second order from one time series, try the [integrated rate law graph exercises](/blog/integrated-rate-law-graphs-practice/). For starting concentrations and initial rates across trials, use the [initial rates worksheet](/blog/rate-law-initial-rates-practice/).

## Use two slopes to find n and k

Each run gives a slope in the same kind of log plot. B stays in large excess in all three runs.

| Run | [B]₀ (M) | Slope (s⁻¹) | kobs (s⁻¹) |
| --- | ---: | ---: | ---: |
| 1 | 0.100 | −0.0080 | 0.0080 |
| 2 | 0.200 | −0.032 | 0.032 |
| 3 | 0.400 | −0.128 | 0.128 |

Divide the observed constant in run 2 by the one in run 1. The shared k cancels, leaving the ratio of starting B concentrations raised to n.

**0.032/0.0080 = (0.200/0.100)ⁿ**, so **4 = 2ⁿ** and **n = 2**.

If the exponent is hard to see, divide the natural log of the kobs ratio by the natural log of the [B]₀ ratio. Keep the runs in the same order in both ratios. Here that gives **n = ln(4)/ln(2) = 2**.

Now divide the observed constant for run 2 by its starting [B] squared.

**k ≈ (0.032 s⁻¹)/(0.200 M)² = 0.80 M⁻² s⁻¹**

The fitted law is **rₐ = (0.80 M⁻² s⁻¹)[A][B]²**. It is **third order overall** because the powers add to 1 + 2 = 3. With concentrations in M, the law gives a disappearance rate in M/s.

Use the third run to check the fit. At **[B]₀ = 0.400 M**, the fitted law predicts **kobs ≈ (0.80 M⁻² s⁻¹)(0.400 M)² = 0.128 s⁻¹**. That matches the value from the third slope, which was held back when fitting n and k.

## Check how much B changes

Even the smallest [B]₀ in the worked example is 0.100 M, or 100 mM. With 1:1 consumption at constant volume, using up all 0.200 mM of A would consume at most 0.200 mM of B. That’s a **0.2%** drop in [B]. The B-dependent factor **[B]²** would retain **(0.998)² ≈ 0.996** of its starting value, a drop of at most about **0.4%**.

Now use the same 1:1 stoichiometry and order in B with **[A]₀ = 2.0 mM** and **[B]₀ = 5.0 mM**. If 75% of A disappears, the reaction consumes 1.5 mM of each reactant. **[B] falls to 3.5 mM**, a **30%** drop, and **[B]²** falls to **(3.5/5.0)² = 0.49** of its starting value, a **51%** drop. As B falls, the slope at any moment, **−k[B]²**, becomes less negative and the log plot flattens.

For a 1:1 reaction at constant volume, subtract the amount of A consumed per liter over the time window from [B]₀. Then compare **([B]ₜ/[B]₀)ⁿ** with 1. At the same [A], this ratio tells you how the full rate compares with the rate calculated by holding B at [B]₀. How close it needs to be to 1 depends on your accuracy target. For the same percentage drop in B, a larger positive exponent has a bigger effect.

## Five practice problems

Assume constant volume and the model **rₐ = k[A][B]ⁿ**. Within each problem, keep conditions fixed apart from the stated changes. In problems 1, 2, 3, and 5, assume B stays effectively constant within each run. Treat the given values as exact.

1. **Get kobs from time data.** At 0, 12, 24, and 36 s, [A] is 0.240, 0.180, 0.135, and 0.10125 mM. Find the slope of the natural-log ratio plot and kobs. Predict [A] at 48 s using the same approximation.
2. **Solve for a fractional order.** At [B]₀ = 0.040 M, the slope is −0.012 s⁻¹. At [B]₀ = 0.160 M, it is −0.024 s⁻¹. Find the order in B and predict the slope at [B]₀ = 0.090 M.
3. **Find what one run measures.** At [B]₀ = 0.250 M, a run gives kobs = 0.020 s⁻¹. Show that the data fit both n = 1 and n = 2 by finding a possible k, with units, for each. What further comparison would tell the two models apart?
4. **Check a tolerance.** In a 1:1 reaction, [B]₀ = 20.0 mM and [A] falls from 1.00 to 0.40 mM. Assume n = 2. By what percentage does the B-dependent factor fall over that interval? Does it stay within 5% of its starting value?
5. **Check a third slope.** At [B]₀ values of 0.100, 0.200, and 0.300 M, the slopes are −0.015, −0.030, and −0.060 s⁻¹. Fit n and k from the first two runs. What slope should the third run have under that model? Do all three supplied values agree with a shared k and n?

## Worked answers

1. Every 12 seconds, [A] is multiplied by 0.75. This gives the same log change each time, so **slope = ln(0.75)/(12 s) ≈ −0.0240 s⁻¹** and **kobs ≈ 0.0240 s⁻¹**. After one more 12-second interval, **[A] = 0.10125 mM × 0.75 ≈ 0.07594 mM**.
2. The starting B concentration quadruples and kobs doubles, so **2 = 4ⁿ** and **n = ½**. The new [B]₀ is 0.090/0.040 = 2.25 times the first. Its square root is 1.5, giving **kobs = 0.012 s⁻¹ × 1.5 = 0.018 s⁻¹**. The predicted slope is **−0.018 s⁻¹**.
3. For **n = 1**, dividing kobs by 0.250 M gives **k = 0.080 M⁻¹ s⁻¹**. For **n = 2**, dividing by (0.250 M)² gives **k = 0.32 M⁻² s⁻¹**. Compare with a second run at twice that [B]₀ with the other conditions fixed. The first model predicts **kobs = 0.040 s⁻¹**, and the second predicts **kobs = 0.080 s⁻¹**.
4. A falls by 0.60 mM, so B ends at 19.4 mM. The B-dependent factor retains **(19.4/20.0)² = 0.9409** of its starting value. The drop is **5.91%**, which exceeds the 5% target.
5. The first two runs double both [B]₀ and kobs, so **n = 1**. They give **k = 0.015 s⁻¹/(0.100 M) = 0.15 M⁻¹ s⁻¹**. The third slope should be **−(0.15 M⁻¹ s⁻¹)(0.300 M) = −0.045 s⁻¹**. Its supplied slope of −0.060 s⁻¹ would give **k = 0.20 M⁻¹ s⁻¹** at n = 1. Taken as given, the three slopes are inconsistent with one shared k and n.

*AI tools helped draft and edit this worksheet.*
