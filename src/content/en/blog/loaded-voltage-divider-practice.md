---
title: "Loaded Voltage Divider Practice With Two Meters"
description: "See why a voltmeter changes a voltage divider's output, calculate the input resistance for a 1% loading limit, and try four worked practice problems."
date: "2026-11-21"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/a7a408b63ea9249af8a6e98349f03429fbe1a999e3a21862abaffc26bb3fd9b1.webp"
keywords:
  - "loaded voltage divider practice"
  - "voltmeter loading effect"
  - "voltmeter input resistance"
  - "voltage divider with a load"
---

Two 1 MΩ resistors across a 12 V supply put their midpoint at 6 V. Connect a voltmeter with 1 MΩ of input resistance and the model predicts a reading of 4 V. Swap in a 10 MΩ meter and it predicts about 5.71 V. Each meter draws current through its input, so connecting it changes the voltage you wanted to measure.

![Metal caliper jaws press lightly against the soft rim of an unfinished clay bowl](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/a7a408b63ea9249af8a6e98349f03429fbe1a999e3a21862abaffc26bb3fd9b1.webp)

## Put the meter in the sketch

For these paper problems, use an ideal DC source, zero-resistance wires, and exact resistor values. Draw the voltmeter as a single resistance, `R_meter`. Its reading equals the voltage across that resistance.

```text
A --[R_top]-- B --[R_bottom]-- C
              |                |
              +---[R_meter]----+
```

The supply holds node A at +12 V relative to node C, the 0 V reference. The output is the voltage from B to C. The meter and `R_bottom` both connect between B and C, so they are in parallel. With the meter branch removed and both divider resistors still connected, the voltage from B to C is the **open-circuit output voltage**. [OpenStax on connecting a voltmeter](https://openstax.org/books/university-physics-volume-2/pages/10-4-electrical-measuring-instruments)

Before calculating, predict how the reading changes as the meter's input resistance goes up. With the 1 MΩ meter attached, the two 1 MΩ resistances between B and C combine to give `1 × 1 / (1 + 1) = 0.5 MΩ`. The bottom leg now gets a smaller share of the supply voltage. The divider formula gives `12 V × 0.5 / (1 + 0.5) = 4 V`. [Series and parallel circuit practice](/blog/series-parallel-circuit-practice/)

| Meter input resistance | Effective bottom resistance | Predicted output | Drop from the open-circuit 6 V |
| --- | ---: | ---: | ---: |
| Meter disconnected | 1 MΩ | 6 V | 0% |
| 1 MΩ | 0.5 MΩ | 4 V | 33.33% |
| 10 MΩ | 10/11 MΩ | 40/7 V ≈ 5.71 V | 4.76% |

This change in the output is the **voltmeter loading effect**. As the meter resistance rises, it draws less current and the output approaches the open-circuit 6 V.

## How much input resistance is enough?

Seen from B and C, the divider behaves like an ideal voltage source `V_open` in series with an output resistance `R_out`. This is its Thévenin equivalent. To find `R_out`, remove the meter and replace the ideal voltage source with a wire **in the sketch**. This joins A and C, leaving both resistors connected across the same two nodes. Their parallel resistance is `R_out`. With two 1 MΩ resistors, `R_out = 0.5 MΩ`.

Connect the meter across the equivalent circuit's output. Now `R_out` and `R_meter` form a divider across `V_open`. The share of `V_open` lost to loading is the share that drops across `R_out`.

```text
V_meter = V_open × R_meter / (R_out + R_meter)
Loading error = (V_open − V_meter) / V_open
              = R_out / (R_out + R_meter)
```

Call the maximum allowed loading error `e` and write it as a fraction, so 1% is `0.01`. Set `R_out / (R_out + R_meter) ≤ e` and multiply by `R_out + R_meter` to get `R_out ≤ e × (R_out + R_meter)`. Rearranging gives `R_meter ≥ R_out × (1 − e) / e`.

A **1% loading error limit** calls for at least **99 times the output resistance**. For the original divider, that's `99 × 0.5 MΩ = 49.5 MΩ`. At that minimum, the reading is 5.94 V, exactly 1% below the open-circuit 6 V. A requirement of less than 1% calls for more than 49.5 MΩ.

For a real meter, check the input resistance for the DC voltage range you'll use. It can vary by range. The 1% budget here covers loading from input resistance alone. Other effects, such as input bias current, can also change the reading. [Fluke 8842A instruction manual, sections 4-3 and 4-4 (PDF)](https://assets.fluke.com/manuals/8842a___imeng0300.pdf#page=93)

## Four problems to solve on paper

1. **Work backward from a low reading.** The original 12 V divider with two 1 MΩ resistors reads exactly 5 V with an unknown meter attached. What is the meter's input resistance in this model?
2. **Change both resistors.** Build a second 12 V divider on paper with two 10 kΩ resistors. What is each divider's open-circuit output voltage? What does a 1 MΩ meter read on the 10 kΩ divider? How much current does each divider draw from its supply with the meter disconnected?
3. **Choose a meter for a different split.** A 12 V divider has a 1 MΩ top resistor and a 2 MΩ bottom resistor. The allowed loading error is 3% or less. Which of the two meters meets the limit, the 20 MΩ meter or the 25 MΩ meter?
4. **Keep the meter and redesign the divider.** A 10 MΩ meter must read the midpoint of a 12 V divider with at most 0.5% loading error. The divider uses two equal resistors. How large can each one be? Would two 100 kΩ resistors work?

### Worked answers

1. **2.5 MΩ.** The open-circuit output is 6 V, so a reading of 5 V gives an error fraction of `1/6`. The error formula gives `R_out + R_meter = 6 × 0.5 MΩ = 3 MΩ`. Subtract the divider's 0.5 MΩ output resistance to find the meter's input resistance.
2. **Both open-circuit outputs are 6 V.** The 10 kΩ pair has `R_out = 5 kΩ`. Express the meter's 1 MΩ as 1,000 kΩ to get the reading `6 V × 1,000 / (5 + 1,000) = 400/67 V ≈ 5.97 V`. With the meter disconnected, the 10 kΩ pair draws `12 V / 20 kΩ = 0.6 mA`, and the 1 MΩ pair draws `12 V / 2 MΩ = 6 µA`. Scaling both resistors down cuts the loading error at the cost of higher supply current.
3. **The 25 MΩ meter meets the limit.** The resistors in parallel give `R_out = 2/3 MΩ`. The 3% limit calls for at least `(2/3) × (0.97/0.03) MΩ ≈ 21.56 MΩ`. Substituting the two meter resistances into the error formula gives about 3.23% for the 20 MΩ meter and 2.60% for the 25 MΩ meter.
4. **Each resistor can be at most `20/199 MΩ`, about 100.50 kΩ.** A 0.5% limit means `e = 0.005`, so the meter resistance must be at least 199 times `R_out`. Two equal resistors in parallel give `R_out` equal to half of either resistor's value. Each resistor can therefore be at most `2 × 10 MΩ / 199`. Two 100 kΩ resistors give `R_out = 50 kΩ` and a loading error of `50 / (50 + 10,000) ≈ 0.498%`. The pair meets the limit.

## Save the step you had to look up

Cover the answers and try these prompts tomorrow before solving another example.

| Prompt | Answer |
| --- | --- |
| Which resistor shares both nodes with the meter in the sketch? | `R_bottom`. Both connect between B and C, so the meter's input resistance goes in parallel with it. |
| How high must the meter's input resistance be for a loading error of 1% or less? | At least 99 times the divider's output resistance. |

*AI assisted with drafting and editing the article and exercises. The cover illustration is AI-generated.*
