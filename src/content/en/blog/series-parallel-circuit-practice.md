---
title: "Series and Parallel Circuit Practice: Trace Nodes Before Calculating"
description: "Trace circuit nodes before choosing a formula. Compare two networks using the same resistors, then solve current, voltage, open-branch, and bypass problems."
date: "2026-10-21"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/6d07141cb92dbe4c7d378075f0656898c433a9cc4b3ebbbcafc3df60a8d7f82f.webp"
keywords:
  - "series parallel circuit practice"
  - "equivalent resistance practice problems"
  - "identify series and parallel resistors"
  - "circuit nodes"
  - "current in parallel branches"
---

Three resistors, one 12 V source, two different answers: the networks below draw 1.5 A and about 3.33 A. The resistor values stay the same. Moving one connection changes which resistors share a current and which share a voltage.

Start this series and parallel circuit practice by labeling nodes. Then calculate equivalent resistance, work back through the branches, and try seven questions with explained answers. You'll need Ohm's law, `V = IR`, and a way to keep track of the connections. These are introductory DC problems to solve on paper.

![A gardener follows two stone-lined irrigation channels that pass around a vegetable bed and rejoin](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/6d07141cb92dbe4c7d378075f0656898c433a9cc4b3ebbbcafc3df60a8d7f82f.webp)

## Give every connection a name

A node is a set of points joined by uninterrupted ideal wire. Wire bends don't create new nodes. Give each node a label, then record the node at each resistor terminal before deciding which formula fits.

- **Series:** the shared node has no other current path, so the resistors carry the same current. Add their resistances.
- **Parallel:** both endpoints connect to the same pair of nodes. Add reciprocal resistances: `1/Rp = 1/R2 + 1/R3`.

For two positive resistances, `Rp = R2 R3 / (R2 + R3)` and is smaller than either resistance. These are the reduction rules in [OpenStax's series and parallel resistor lesson](https://openstax.org/books/university-physics-volume-2/pages/10-2-resistors-in-series-and-parallel).

Two resistors drawn side by side needn't be parallel. Equal measured voltage drops don't establish parallel connections either: distinct nodes can happen to have equal potential. Trace the wires.

For every example here, assume an ideal 12 V DC source, zero-resistance wires, and constant positive resistor values in steady state. Node A connects to the positive source terminal; Z connects to the negative terminal and is assigned 0 V. The source connects A to Z outside the resistor sketches. `I1`, `I2`, and `I3` mean the currents through R1, R2, and R3; `Isource` is the total source current. Currents below are conventional-current magnitudes from higher to lower potential.

## Network A: find the parallel pair first

```text
A --[R1]-- B --[R2]-- Z
           |          |
           +--[R3]----+
```

The connection ledger removes any dependence on how the sketch is arranged:

| Component | Value | Endpoint nodes |
| --- | ---: | --- |
| Source | 12 V | A positive, Z negative |
| R1 | 6 Ω | A–B |
| R2 | 3 Ω | B–Z |
| R3 | 6 Ω | B–Z |

R2 and R3 share B and Z, so reduce them first:

```text
Rp = (3 x 6)/(3 + 6) = 2 ohm
Req = R1 + Rp = 6 + 2 = 8 ohm
Isource = 12/8 = 1.5 A
```

R1 is in series with the equivalent 2 Ω pair. It isn't in series with R2 or R3 individually: B has a third connection where current can split.

R1 carries the full source current before it splits at B. Its voltage drop is `1.5 × 6 = 9 V`, leaving `12 − 9 = 3 V` between B and Z. Use that 3 V for each parallel branch:

| Resistor | Voltage drop | Current |
| --- | ---: | ---: |
| R1 | 9 V | 1.5 A |
| R2 | 3 V | 1 A |
| R3 | 3 V | 0.5 A |

The branch currents add back to `1 + 0.5 = 1.5 A`. Using `12/3` for R2 would put the whole source voltage across a resistor that only spans B–Z.

Two checks catch different mistakes. At a junction, incoming and outgoing currents balance. Around a closed loop, signed voltage changes sum to zero. [OpenStax's Kirchhoff lesson](https://openstax.org/books/university-physics-volume-2/pages/10-3-kirchhoffs-rules) explains these rules. Here the source raises potential by 12 V; the R1–R2 path drops `9 + 3 = 12 V`, as does the R1–R3 path. If a different circuit has no pair that meets the series or parallel connection rule, use Kirchhoff's rules rather than forcing a reduction.

Power gives another numerical check: `P = VI` gives 13.5 W, 3 W, and 1.5 W in R1, R2, and R3. Their total, 18 W, matches the source's `12 × 1.5 = 18 W`.

## Network B: move one endpoint

Move R3's first endpoint from B to A. Keep every resistance unchanged.

```text
A --[R1]-- B --[R2]-- Z
|                     |
+--------[R3]---------+
```

| Component | Value | Endpoint nodes |
| --- | ---: | --- |
| Source | 12 V | A positive, Z negative |
| R1 | 6 Ω | A–B |
| R2 | 3 Ω | B–Z |
| R3 | 6 Ω | A–Z |

B now joins only R1 and R2, so they form a 9 Ω series branch. That complete branch is parallel with R3:

```text
Req = (9 x 6)/(9 + 6) = 18/5 ohm = 3.6 ohm
I1 = I2 = 12/9 = 4/3 A
I3 = 12/6 = 2 A
Isource = 4/3 + 2 = 10/3 A
```

Work back through each branch using its own current:

| Resistor | Voltage drop | Current |
| --- | ---: | ---: |
| R1 | 8 V | 4/3 A |
| R2 | 4 V | 4/3 A |
| R3 | 12 V | 2 A |

R3 spans the source terminals and gets the full 12 V. The source current is about 3.33 A, but neither branch carries 3.33 A. Total resistor power is 40 W, matching `12 × 10/3`.

An equivalent resistance preserves the current drawn at the source terminals for a given voltage. You still need the original connections to recover each resistor's current and voltage.

## An open branch and a wire bypass give different circuits

Return to **Network A**, with its original values.

Remove the R2 branch completely. R1 and R3 remain in series: `Req = 6 + 6 = 12 Ω`, so the source current is 1 A. Each remaining resistor drops 6 V. No current crosses the removed branch, even though its former terminals B and Z have 6 V between them. An open branch can have a voltage across its terminals.

Now restore R2 and instead **add an ideal wire directly between B and Z**, keeping all three resistors. B and Z become one node. R2 and R3 each have zero voltage across them and therefore zero current. R1 remains across the source: `Req = 6 Ω` and `Isource = 2 A`. The bypass wire carries those 2 A.

An open branch removes a current path; an ideal bypass joins two nodes. Here the bypass shorts the parallel pair, while R1 still limits the source current. Keep this exercise on paper; an ideal wire model doesn't describe the limits of a physical battery or power supply.

## Seven practice problems

Use the same ideal assumptions. Each question starts from the named original network unless it says otherwise. Write the endpoint nodes before calculating, and keep the answers covered.

1. **Redraw without changing connections.** A sketch puts R3 above R2. Its ledger says R1: A–C, R2: C–D, R3: C–D; an ideal wire joins D to Z. Values are 6 Ω, 3 Ω, and 6 Ω respectively. Which original network does it match, and what is its equivalent resistance?
2. **Find the wrong voltage.** For Network A, a solution says `I2 = 12 V / 3 Ω = 4 A`. Name the mistaken assumption and give the correct current.
3. **Work backward.** Keep Network A's connections, R2 = 3 Ω, and R3 = 6 Ω. Replace R1 with an unknown resistor. The 12 V source supplies 1.2 A. Find R1 and both branch currents.
4. **Open one branch.** Remove R2 from original Network A. Find source current and the voltage between its former terminals. Does R3's current rise or fall?
5. **Add a bypass.** Add an ideal B–Z wire to original Network A while retaining all three resistors. Find source current, R2 current, and wire current.
6. **Equal potential, separate nodes.** Across A–Z, put two separate branches: A–B–Z and A–C–Z. Each branch contains two 6 Ω resistors, one on each segment. No wire joins B to C. Find the potentials at B and C. Are the A–B and A–C resistors parallel?
7. **Check the source current.** In Network B, someone reports `I1 = I2 = 4/3 A`, `I3 = 2 A`, and `Isource = 2 A`. Which result must change, and what total power should the source deliver?

### Answers and the connection behind each one

1. **Network A; 8 Ω.** C plays the role of B, while D and Z are one node. The 3 Ω and 6 Ω resistors share both endpoints, giving 2 Ω in parallel, then 8 Ω with R1. Moving a branch on the page changes nothing in the ledger.
2. **R2 was assigned the source voltage; its current is 1 A.** R1 drops 9 V before node B, leaving 3 V across R2. Thus `I2 = 3/3 = 1 A`. The 12 V belongs to A–Z.
3. **R1 = 8 Ω; I2 = 0.8 A and I3 = 0.4 A.** From the source current, `Req = 12/1.2 = 10 Ω`. The parallel pair remains 2 Ω, so R1 is `10 − 2 = 8 Ω`. The pair's voltage is `1.2 × 2 = 2.4 V`; dividing by 3 Ω and 6 Ω gives the branch currents. Their sum is 1.2 A.
4. **1 A; 6 V; R3's current rises.** The remaining resistance is 12 Ω. R3 now carries 1 A, up from 0.5 A, while total source current falls from 1.5 A to 1 A. Opening a parallel branch changes the voltage division across the remaining network.
5. **2 A; 0 A; 2 A.** The wire merges B with Z and gives R2 and R3 zero voltage. All current through R1 returns through the bypass. Keeping a positive resistance in parallel with an ideal wire doesn't force current through that resistance.
6. **B = C = 6 V, but those resistors aren't parallel.** Each branch has 12 Ω and carries 1 A, giving a 6 V drop across each resistor. B and C are distinct nodes with coincidentally equal potential. The A–B and A–C resistors share only A; equal voltage drops don't supply their missing common endpoint.
7. **Source current must be 10/3 A; power is 40 W.** The source feeds both branches, so add `4/3 + 2`. The reported 2 A accounts for R3 alone. Multiplying the corrected source current by 12 V gives 40 W.

## Keep one missed connection rule for review

After a miss, write a short prompt that tests the decision you skipped: “Two resistors share one node. What must be true there for a series reduction?” Answer: no other current path joins that shared node. Then solve a differently drawn circuit to apply it.

If the error involved units, use the [dimensional-analysis worksheet](/blog/dimensional-analysis-equations/) for a separate practice session. Learners studying electrical basics for amateur radio can pair this worksheet with the [Technician study guide](/blog/ham-radio-technician-flashcards/); these original exercises aren't official exam questions.

*Production note: AI agents researched and wrote this worksheet, with two separate English editorial passes and exact-fraction Python checks of the circuit arithmetic. The illustration is AI-generated. No physical build, simulator run, classroom trial, or human expert review was performed.*
