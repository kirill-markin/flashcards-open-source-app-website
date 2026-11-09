---
title: "NCEA Level 1 AS92047 Energy Concepts: Three Worked Examples"
description: "Practise AS92047 with three worked examples. Use energy budgets, a heating graph, and circuit data to explain what changes in a physical system."
date: "2026-11-09"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/43dd30c71f74dc630ab55186e554a27a662647c1fa5b53c532a8860bf4a644a3.webp"
keywords:
  - "AS92047 energy concepts"
  - "NCEA Level 1 energy practice"
  - "AS92047 worked examples"
  - "mechanical thermal electrical energy"
---

A sliding puck starts up a ramp with 10 J of kinetic energy. It needs 6 J to gain enough height to reach the top. That leaves at most 4 J to cover the energy it loses to friction. Change the surface and the same puck can stop short.

That’s the kind of reasoning you practise in NCEA Level 1 Physics, Earth and Space Science standard AS92047. According to the [2026 assessment specification](https://www.nzqa.govt.nz/nqfdocs/ncea-resource/specifications/2026/92047-spc-2026.pdf), the exam has three questions covering mechanical, thermal, and electrical energy. The paper supplies the necessary formulas. [AS92047 version 3](https://www.nzqa.govt.nz/nqfdocs/ncea-resource/achievements/2024/as92047.pdf) sets out how to use evidence to describe what changes in a system, explain why, and work out what that means.

Try deciding what belongs inside the system and which numbers matter before reading each solution. The data below are hypothetical.

## Can the puck reach the top of the ramp?

A 0.80 kg puck slides onto a straight 2.0 m ramp at 5.0 m/s. The top is 0.75 m above the foot. On the first surface, a steady 1.5 N friction force acts downhill while the puck slides uphill. On a rougher surface it’s 2.5 N. Use `g = 10 N/kg` and ignore air resistance and sound. Will the puck reach the top on both surfaces?

Include the puck, ramp, and Earth in the system. The puck slows as it climbs, the gravitational potential energy of the puck–Earth system rises, and friction increases the internal energy of the puck and ramp. Use the vertical rise for gravitational potential energy and the distance along the ramp for friction. With a steady friction force opposing the motion, `Fd` gives the amount of mechanical energy converted to internal energy.

| Energy account | Calculation | Energy |
| --- | --- | ---: |
| Kinetic energy at the foot | `Eₖ = ½mv² = ½ × 0.80 × 5.0²` | 10 J |
| Gravitational potential energy gained if it reaches the top | `ΔEₚ = mgΔh = 0.80 × 10 × 0.75` | 6 J |
| Internal energy gained over the full length at 1.5 N | `Fd = 1.5 × 2.0` | 3 J |

On the first surface, the puck reaches the top with `10 − 6 − 3 = 1 J` of kinetic energy left. Draw that as an initial 10 J kinetic-energy bar and a final stack with 6 J of gravitational gain, 3 J of internal-energy gain, and 1 J of kinetic energy. Use the foot of the ramp as the zero for gravitational potential energy.

On the rougher surface, sliding the full length would convert `2.5 × 2.0 = 5 J` to internal energy. That and the 6 J gravitational gain would require 11 J. With only 10 J at the foot, the puck runs out of kinetic energy before the top.

## What does a flat heating graph tell you?

![Two ice cubes melt in a mesh strainer, dripping into a glass with water already collected at the bottom](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/43dd30c71f74dc630ab55186e554a27a662647c1fa5b53c532a8860bf4a644a3.webp)

An insulated test rig delivers a steady 35 W to a 0.10 kg sample of pure ice that starts at −10 °C. Treat the sample as being at a uniform temperature and take its melting point as 0 °C. Use `c = 2,100 J/(kg·°C)` for ice and `L = 334,000 J/kg` for melting. How much of the sample melts in the first 5 minutes?

Take the ice and its meltwater as the system. Energy enters from the heater at 35 J per second. While the ice warms, use `E = mcΔT`. Once it reaches 0 °C, use `E = mL` for the mass that changes state.

- Warming to 0 °C takes `0.10 × 2,100 × 10 = 2,100 J`. From `E = Pt`, this takes `2,100 ÷ 35 = 60 s`.
- In the remaining `300 − 60 = 240 s`, the heater delivers `35 × 240 = 8,400 J` for melting. The mass that melts is `8,400 ÷ 334,000 ≈ 0.025 kg`.

Plot time in seconds on the horizontal axis and temperature in °C on the vertical axis. The model gives a straight rise from (0, −10) to (60, 0), then a flat line to (300, 0). Label the flat segment “ice melting”. Energy is still entering the sample; it changes ice into liquid water while the temperature stays at 0 °C. By five minutes, about a quarter of its mass has melted, so the model predicts that ice and liquid water are both still present.

## Where does the energy go when you add a resistor?

A small test chamber is heated by an 8 Ω element on a 12 V supply. In a second run, a 4 Ω resistor outside the chamber is added in series. The supply holds 12 V across the whole circuit in both runs, the resistances stay constant, and the wires have negligible resistance. Compare the energy delivered to the heating element over 120 s.

Draw one loop with the supply and the two resistors. Mark the 8 Ω element as inside the chamber and the 4 Ω resistor as outside. For the energy account, include both loads when both are connected, with the supply outside that boundary. The same current passes through both resistors in the second run. Their voltage drops add up to the supply voltage, and each resistor’s power is its own voltage drop times that current.

| Circuit | Current from `I = V ÷ R` | Voltage across the 8 Ω element from `V = IR` | Power at the element from `P = VI` |
| --- | ---: | ---: | ---: |
| Element alone | `12 ÷ 8 = 1.5 A` | `1.5 × 8 = 12 V` | `12 × 1.5 = 18 W` |
| Element and series resistor | `12 ÷ (8 + 4) = 1 A` | `1 × 8 = 8 V` | `8 × 1 = 8 W` |

Using `E = Pt`, the element receives `18 × 120 = 2,160 J` on its own and `8 × 120 = 960 J` with the extra resistor. The added resistor gets the remaining 4 V of the supply voltage and receives `4 V × 1 A × 120 s = 480 J` outside the chamber. Together the two resistors receive 1,440 J, down from 2,160 J in the first run, because the added resistance lowered the current from 1.5 A to 1 A. Inside the chamber, the element now converts electrical energy to thermal energy at 8 W instead of 18 W, less than half its original power.

## Practise the step before the calculation

Cover the solutions and try drawing the puck’s energy bars, labelling the flat part of the heating graph, and marking the voltages across the two resistors. For each sketch, point to one number that supports your conclusion.

Open Study Contributor’s deck gives you shorter prompts on boundaries, graphs, energy transfers, and supplied formulas. Answer from memory before flipping each card. Coming back to the same decisions over several days helps you recall them later when the setup changes. Use the worked examples to practise putting those decisions together in a full explanation. [Browse the 56 English AS92047 energy concepts flashcards](/catalog/packages/ncea-level-1-as92047-energy-concepts/).

*Nibomo publishes this independent guide. The problems are original practice, not official NZQA questions. AI tools drafted the text and scenarios, checked the calculations, and generated the illustration.*
