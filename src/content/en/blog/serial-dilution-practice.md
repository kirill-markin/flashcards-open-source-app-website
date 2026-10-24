---
title: "Serial Dilution Practice: Track Concentration and Volume"
description: "Practice serial dilution calculations with a checked three-tube example, cumulative factors, volume left after transfers, and explained answers."
date: "2026-10-24"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/161988942eb0476cb279f5cbe4e611223a901219282e85ebac09c26445849437.webp"
keywords:
  - "serial dilution practice"
  - "serial dilution calculations"
  - "dilution factor"
  - "cumulative dilution"
  - "final volume vs diluent volume"
---

Remove 0.50 mL from a well-mixed solution at 0.30 mg/mL, and the solution left behind is still **0.30 mg/mL**. Its volume and solute amount both fall. That distinction is easy to lose when a serial dilution calculation becomes a row of numbers with no record of what moved where.

This serial dilution practice follows one dissolved tracer through three tubes, including what remains after each transfer. Seven original problems then cover concentrations, a volume error, dilution design, and working backward to the stock. The complete answers are below the questions.

These are hypothetical paper exercises. Assume a nonreacting tracer, solute-free diluent, fully mixed solutions, no losses or evaporation, and additive volumes. Treat the stated numbers as exact for the arithmetic. In an actual preparation, final solution volume must be established by the appropriate measurement procedure; adding volumes is an assumption here.

![A fiber artist transfers a tuft of blended blue-and-cream wool toward a larger pile of cream fleece](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/161988942eb0476cb279f5cbe4e611223a901219282e85ebac09c26445849437.webp)

## Start with the amount transferred

A stock solution is the starting source. An **aliquot** is a measured portion taken from a solution. The **diluent** is the liquid added to reduce its concentration.

For one dilution, use these quantities:

| Symbol | Meaning |
| --- | --- |
| C_in | Concentration of the source being sampled |
| V_sample | Volume transferred from that source |
| V_final | Final solution volume after adding diluent |
| C_out | Concentration of the resulting solution |

The transferred solute amount is **C_in × V_sample**. Adding solute-free diluent leaves that amount unchanged, so:

**C_in × V_sample = C_out × V_final**

This is the conservation idea behind **C₁V₁ = C₂V₂**, explained in [OpenStax's molarity lesson](https://openstax.org/books/chemistry-2e/pages/3-3-molarity). With mg/mL and mL, concentration times volume gives mass in mg. With mol/L and liters, it gives moles. Keep the concentration and volume units compatible.

Two reciprocal ratios help describe the change:

| Quantity | Definition here | Example: 0.20 mL diluted to 2.00 mL |
| --- | --- | --- |
| Concentration fraction, f | V_sample/V_final | 0.20/2.00 = 1/10 |
| Dilution factor, D | V_final/V_sample = 1/f | 2.00/0.20 = 10 |

For a dilution with added diluent, **0 < f < 1** and **D > 1**. Calculate the new concentration with either form:

**C_out = C_in × f = C_in/D**

Terminology varies. [MIT's introductory lab-math material](https://www.ocw.mit.edu/courses/20-109-laboratory-fundamentals-in-biological-engineering-fall-2007/pages/labs/lab_tour/) calls the sample-to-total fraction a dilution factor. Check the definition before using a source's number. In this lesson, **D always means final volume divided by transferred sample volume**.

## “To 2 mL” and “add 2 mL” give different answers

Under our additive-volume assumption:

**Final volume = sample volume + diluent volume**

Taking 0.20 mL of stock and diluting **to 2.00 mL** means the final volume is 2.00 mL. The diluent contributes 1.80 mL, and D = 10.

Taking 0.20 mL of stock and **adding 2.00 mL of diluent** gives 2.20 mL in total. Now D = 11. Dividing by the diluent volume alone would miss the liquid that arrived with the sample.

The label “1:10 dilution” also needs a convention. If it means **sample:final solution = 1:10**, the concentration becomes 1/10 of the source. If it means **sample:diluent = 1:10**, the final volume is 11 parts and the concentration becomes 1/11 of the source. Write the two volumes explicitly when the convention isn't supplied.

## Follow a three-tube serial dilution

Start with a stock at **12 mg/mL**. Each new tube receives an aliquot from the previous diluted solution:

**Stock → A → B → C**

This is a serial dilution because each step uses the preceding step's result. If all three tubes received stock directly, they would be parallel stock dilutions, with a separate calculation for each tube.

For this serial chain, the stipulated volumes are:

| Tube | Sample taken from | Sample volume | Diluent added | Final volume | Step factor D |
| --- | --- | ---: | ---: | ---: | ---: |
| A | Stock | 0.40 mL | 1.60 mL | 2.00 mL | 5 |
| B | Mixed A | 0.25 mL | 1.75 mL | 2.00 mL | 8 |
| C | Mixed B | 0.50 mL | 4.50 mL | 5.00 mL | 10 |

Tube A receives **12 mg/mL × 0.40 mL = 4.8 mg** of tracer. Spread through 2.00 mL, that gives **4.8 mg/2.00 mL = 2.4 mg/mL**.

The 0.25 mL transferred from A into B carries **2.4 mg/mL × 0.25 mL = 0.60 mg**. After dilution to 2.00 mL, B contains **0.30 mg/mL**.

The 0.50 mL transferred from B into C carries **0.30 mg/mL × 0.50 mL = 0.15 mg**. After dilution to 5.00 mL, C contains **0.030 mg/mL**, or **30 µg/mL**.

B's factor of 8 describes the change **from A to B**. The sample from A already has one fifth of the stock concentration, so B ends up at **(1/5) × (1/8) = 1/40** of the stock concentration. Its cumulative factor from stock is 40.

| Tube | Cumulative factor from stock | Concentration |
| --- | ---: | ---: |
| A | 5 | 12/5 = 2.4 mg/mL |
| B | 5 × 8 = 40 | 12/40 = 0.30 mg/mL |
| C | 5 × 8 × 10 = 400 | 12/400 = 0.030 mg/mL |

Each step divides the concentration produced by the previous step, so the factors multiply even when they're unequal. Adding 5 + 8 + 10 gives 23, which doesn't describe this chain. Multiplying the concentration fractions gives the same correct result: **(1/5) × (1/8) × (1/10) = 1/400**.

## Keep a second ledger for what remains

The preparation volumes above describe each tube immediately after dilution. They don't all remain available after the next transfer. [UC Davis's serial dilution notes](https://rothlab.ucdavis.edu/protocols/M04.shtml) also distinguish the volume prepared from the volume left after an aliquot moves to the next tube.

A starts with 2.00 mL, but sending 0.25 mL to B leaves **1.75 mL**. Because A was fully mixed, the outgoing aliquot and the solution left behind both have concentration 2.4 mg/mL. The transfer removes 0.60 mg, leaving **4.8 − 0.60 = 4.2 mg** in A.

B starts with 2.00 mL and 0.60 mg. Sending 0.50 mL to C removes 0.15 mg, leaving **1.50 mL and 0.45 mg**. B's concentration stays 0.30 mg/mL. Nothing is withdrawn from C.

| Tube after all transfers | Volume remaining | Concentration | Solute mass remaining |
| --- | ---: | ---: | ---: |
| A | 1.75 mL | 2.4 mg/mL | 4.2 mg |
| B | 1.50 mL | 0.30 mg/mL | 0.45 mg |
| C | 5.00 mL | 0.030 mg/mL | 0.15 mg |

The retained mass across the three tubes is **4.2 + 0.45 + 0.15 = 4.8 mg**. That equals the mass in the original 0.40 mL stock aliquot. Only 0.15 mg reached C; the rest remains in A and B.

The volume ledger balances too: **1.75 + 1.50 + 5.00 = 8.25 mL** remains. That equals **0.40 mL of stock + 1.60 + 1.75 + 4.50 mL of diluent**. Transfers between tubes move volume within the scheme, so don't count them as new liquid entering it.

A simple withdrawal reduces volume and solute amount in the same proportion, leaving concentration unchanged. Adding solute-free diluent increases the volume holding a fixed solute amount and lowers concentration. Those are different operations; record which one happened before changing a concentration.

## Try seven dilution problems

Use the assumptions above. Write the source concentration, sample volume, and final volume before calculating. Cover the answers until you've attempted each problem.

1. An 8 mg/mL source supplies a 0.20 mL sample. Add 1.80 mL of diluent. Find the final volume, D, and concentration.
2. Take another 0.20 mL sample from that 8 mg/mL source, but add 2.00 mL of diluent. A student reports D = 10 and 0.80 mg/mL. Locate the mistake and calculate the correct values.
3. A 15 mg/mL stock passes through three serial dilution steps with factors 5, 4, and 10. Find the cumulative factor and final concentration in both mg/mL and µg/mL.
4. You need 25 mL of a 0.050 mg/mL solution from a 2.0 mg/mL stock. Calculate the stock volume and, under the additive model, diluent volume.
5. B contains 2.00 mL at 0.30 mg/mL. Withdraw 0.50 mL after mixing. Find the volume, concentration, and solute mass left in B.
6. Design a two-step serial dilution from 8 mg/mL to 20 µg/mL, using D = 20 for each step. Give sample and diluent volumes that produce 4.00 mL per step. Find the intermediate concentration and the volume left in the first tube after the second transfer.
7. A solution reaches 0.75 mg/mL after successive dilution factors of 4 and 5. What was the original stock concentration?

### Answers with the setup explained

**1. Final volume 2.00 mL; D = 10; concentration 0.80 mg/mL.** Add sample and diluent: 0.20 + 1.80 = 2.00 mL. Then D = 2.00/0.20 = 10 and C_out = 8/10 = 0.80 mg/mL. The mass check is 8 × 0.20 = 1.6 mg before dilution and 0.80 × 2.00 = 1.6 mg afterward.

**2. Final volume 2.20 mL; D = 11; concentration 8/11 ≈ 0.727 mg/mL.** The student used the diluent volume as the final volume. Here, V_final = 0.20 + 2.00 = 2.20 mL, so D = 2.20/0.20 = 11. The same 1.6 mg is spread through a larger volume than in question 1, making the concentration lower.

**3. Cumulative D = 200; concentration 0.075 mg/mL = 75 µg/mL.** Multiply 5 × 4 × 10 = 200, then divide 15/200 = 0.075 mg/mL. Since 1 mg = 1,000 µg, 0.075 mg/mL = 75 µg/mL. The intermediate concentrations are 3 and 0.75 mg/mL; each dilution lowers the concentration.

**4. Use 0.625 mL of stock; diluent contributes 24.375 mL in this model.** Rearrange conservation: V_sample = C_out × V_final/C_in = (0.050 × 25)/2.0 = 0.625 mL. Subtract from the final volume: 25 − 0.625 = 24.375 mL. The target contains 0.050 × 25 = 1.25 mg, exactly the amount supplied by 2.0 × 0.625. Adding 25 mL of diluent would overshoot the requested final volume. The subtraction relies on the stipulated additive-volume model.

**5. B retains 1.50 mL at 0.30 mg/mL, containing 0.45 mg.** Subtract the withdrawn volume: 2.00 − 0.50 = 1.50 mL. Withdrawal removes a representative portion of the mixed solution, so the concentration stays unchanged. The retained mass is 0.30 × 1.50 = 0.45 mg; the withdrawn 0.15 mg accounts for the rest of B's original 0.60 mg.

**6. Each step uses a 0.20 mL sample and 3.80 mL of diluent.** First convert the target: 20 µg/mL = 0.020 mg/mL. The required total factor is 8/0.020 = 400, matching 20 × 20. For a final volume of 4.00 mL at each step, V_sample = 4.00/20 = 0.20 mL, and diluent volume = 4.00 − 0.20 = 3.80 mL. The first sample comes from stock and gives 8/20 = 0.40 mg/mL. The second comes from that mixed intermediate and gives 0.40/20 = 0.020 mg/mL. The first tube retains 4.00 − 0.20 = 3.80 mL at 0.40 mg/mL. Other two-step factors could reach the target if their product were 400; this question fixes both at 20.

**7. The stock was 15 mg/mL.** The cumulative factor is 4 × 5 = 20. Reverse the dilution by multiplying: C_stock = 0.75 × 20 = 15 mg/mL. A forward check gives 15/4 = 3.75 mg/mL, then 3.75/5 = 0.75 mg/mL.

If unit conversion caused the error, the [metric-prefix practice](/blog/metric-prefixes-flashcards/) covers the powers behind mg, µg, mL, and µL. For measured rather than stipulated quantities, use the separate [significant-figures lesson](/blog/significant-figures-mixed-operations/) to decide how to report precision.

## Review the distinctions, then calculate something new

Keep the full ledger for worked practice. If a particular setup keeps going wrong, use a short recall prompt that targets that decision:

| Front | Back |
| --- | --- |
| In this lesson, what volumes define D? | Final solution volume divided by transferred sample volume. |
| Why do serial dilution factors multiply? | Each step divides the concentration produced by the previous step. |
| What happens to concentration when you withdraw part of a fully mixed solution? | It stays unchanged; volume and solute amount decrease proportionally. |

Answer before revealing the back, and revisit the prompts on later days. Regular recall with spaced review helps long-term retention of these distinctions. Follow it with a fresh calculation using changed concentrations or transfer volumes, including a mass check; remembering a definition alone doesn't show that you can set up the next problem.

For broader review, the [AP Chemistry Flashcards in English](/catalog/packages/ap-chemistry-flashcards/) contain **450 course-wide cards**, including molarity, the dilution equation, dilution calculations, and particle conservation. Select those concepts for recall practice alongside full calculations. The seven original problems and the tube ledgers on this page are separate from the deck.

*Production note: AI tools assisted substantially with source research, drafting, and constructing the original problems. Exact-fraction calculations checked the numerical answers and the three-tube mass balance. These are paper calculations; no laboratory preparation or classroom testing was performed. The illustration is AI-generated.*
