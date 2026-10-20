---
title: "Osmolarity vs Tonicity: Worked Examples and Practice"
description: "Compare osmolarity with tonicity, account for membrane permeability, and solve original cell-volume practice problems with explained answers."
date: "2026-10-09"
image: "/blog/osmolarity-vs-tonicity.png"
keywords:
  - "osmolarity vs tonicity"
  - "osmolarity and tonicity practice problems"
  - "isosmotic vs isotonic"
  - "penetrating and nonpenetrating solutes"
  - "hyperosmotic but hypotonic"
---

A solution can be **hyperosmotic but hypotonic**: it contains more dissolved particles than a cell initially does, yet the cell ends up larger. That combination makes sense once you separate the particle count from the particles' ability to cross the membrane.

Count every solute particle for osmolarity. For tonicity, check membrane permissions and work out the sustained cell-volume effect. The worked examples below use one hypothetical cell, so you can follow both comparisons and check the final volume rather than memorize pairs of labels.

![A woman sifting sand from dark pebbles beside two equally full bowls with different proportions of sand and pebbles](/blog/osmolarity-vs-tonicity.png)

## The two labels answer different questions

**Osmolarity** is the concentration of dissolved solute particles, expressed in osmoles per liter of solution. Both penetrating and nonpenetrating solutes count. **Osmolality** instead uses osmoles per kilogram of solvent. Keep those denominators separate; one Osm/L equals 1,000 mOsm/L. [Duke's introductory physiology notes, page 4](https://histology.oit.duke.edu/MBS/Videos/Phys/Phys%201.4%20Homeo%20Sol%20Water%20Trans/Phys%201.3%20and%201.4%20Homeo%20Transporters%20and%20Sol%20Water%20NOTES.pdf) explain the units and particle comparison.

**Tonicity** describes a solution's sustained effect on the volume of a particular cell: hypotonic surroundings make it swell, hypertonic surroundings make it shrink, and isotonic surroundings preserve its volume. Water must be able to cross. [OpenStax's passive transport chapter](https://openstax.org/books/biology-2e/pages/5-2-passive-transport) introduces these volume outcomes and selective permeability.

In the equilibrium problems here, a penetrating solute can diffuse until its concentration is equal inside and outside. A nonpenetrating solute cannot cross this membrane. That distinction lets us separate total osmolarity from the solutes that sustain a volume change, as Duke's [discussion on pages 4–5](https://histology.oit.duke.edu/MBS/Videos/Phys/Phys%201.4%20Homeo%20Sol%20Water%20Trans/Phys%201.3%20and%201.4%20Homeo%20Transporters%20and%20Sol%20Water%20NOTES.pdf) explains.

| Outside solution, relative to the stated cell | What you compare | Meaning |
| --- | --- | --- |
| Hyposmotic, isosmotic, hyperosmotic | Total particle concentration outside versus inside | Lower, equal, higher |
| Hypotonic, isotonic, hypertonic | Sustained cell-volume outcome under the stated membrane conditions | Swelling, unchanged volume, shrinking |

Both labels need a reference. “Hyperosmotic” means higher than something else; “hypotonic” needs a particular cell and membrane. The same solution can have different tonic effects on cells with different membrane permissions.

If you're still mixing up solute diffusion with water movement, work through the [diffusion vs osmosis examples](/blog/diffusion-vs-osmosis/) first. Here the task is to find the eventual volume, rather than draw an initial movement arrow.

## Give the model cell a clear set of rules

These are original educational thought experiments, not measurements from real cells. Each fresh, flexible model cell starts with:

- Volume **V₀** and **300 mOsm/L of N**, a neutral, nonpenetrating solute.
- No **P**, a neutral, penetrating solute.
- A membrane that passes water and lets P diffuse, but blocks N.

N and P each stay as one dissolved particle; neither dissociates or reacts. Solutions behave ideally at the same temperature. The outside bath is a huge reservoir whose concentrations stay fixed as the cell exchanges water and P. There are no pumps, metabolism, cell walls, or elastic or pressure forces opposing osmosis. Where a finite equilibrium exists, assume the cell stays intact and compare its final volume with V₀.

This model doesn't specify the sequence or speed of volume changes. Those require transport-rate information. The volume equation below applies to these assumptions, not to real cells, finite baths, or clinical fluid selection.

Every osmotic label below compares the bath with the **initial 300 mOsm/L cell**. Every tonic label describes the eventual volume effect relative to V₀.

## Make a particle ledger before calculating

Put a fresh model cell into a bath containing **240 mOsm/L N + 120 mOsm/L P**.

| Solute | Bath particle concentration | Can cross this membrane? | Role in the calculation |
| --- | --- | --- | --- |
| N | 240 mOsm/L | No | Counts toward osmolarity; its amount inside the cell is conserved |
| P | 120 mOsm/L | Yes | Counts toward osmolarity; its concentration is equal inside and outside at equilibrium |
| Total | 360 mOsm/L | Check each solute separately | Use this total for the initial osmotic comparison |

The bath is **hyperosmotic**, because 360 exceeds 300. Its nonpenetrating concentration is only 240, below the cell's initial 300. Under our rules, it is **hypotonic**: the cell must become larger to reach equilibrium.

At equilibrium, P is 120 mOsm/L on both sides. With no opposing pressure, the total osmolarities must match:

**N inside + 120 = 240 + 120**, so **N inside = 240 mOsm/L**.

The P terms cancel. N cannot leave the cell, so its amount stays constant while its concentration changes. Concentration times volume gives that conserved amount:

**300 × V₀ = 240 × Vfinal**

**Vfinal / V₀ = 300 / 240 = 1.25**

The equilibrium volume is **25% larger**. The cell's final total osmolarity is 240 + 120 = 360 mOsm/L, equal to the bath's. Its initial osmolarity was 300. Keeping those two moments separate explains how the outside can be hyperosmotic initially and still produce swelling.

For this model, with a positive bath N concentration:

**Vfinal / V₀ = 300 / bath N concentration**

Use matching concentration units. The equation follows from equal P concentrations at equilibrium and conservation of cell N. If a question changes the membrane or other model conditions, check the derivation before using it.

## Three more outcomes worth checking

Reset to a fresh model cell for each row.

| Bath, in mOsm/L | Total | Osmotic label versus initial cell | Tonic label | Equilibrium volume |
| --- | --- | --- | --- | --- |
| 300 N + 180 P | 480 | Hyperosmotic | Isotonic | V₀ |
| 450 N + 0 P | 450 | Hyperosmotic | Hypertonic | ⅔ V₀ |
| 0 N + 300 P | 300 | Isosmotic | Hypotonic | No finite equilibrium in this model |

In the first row, P equilibrates to 180 inside and outside. Cell N must therefore be 300, giving Vfinal/V₀ = 300/300 = 1. **Isotonic describes the final volume; it doesn't specify what happens along the way.**

In the second row, Vfinal/V₀ = 300/450 = ⅔. Shrinking to that volume concentrates the trapped N to 450: **300 / (⅔) = 450**.

The last row shows why **isosmotic doesn't always mean isotonic**. A finite equilibrium would require P to be 300 on both sides. But every finite cell volume still contains some concentration of trapped N, making the inside total greater than 300. No finite volume balances the two sides without opposing pressure. Don't write “300/0 = a final volume.” This ideal model has no finite equilibrium; a real cell may rupture as it swells. OpenStax [describes this rupture, called lysis](https://openstax.org/books/biology-2e/pages/5-2-passive-transport).

### Hold total osmolarity constant and change the mixture

All three baths below contain **360 mOsm/L total particles**. Each is hyperosmotic relative to a fresh initial cell.

| Bath, in mOsm/L | Nonpenetrating concentration | Tonicity under our rules | Vfinal / V₀ |
| --- | --- | --- | --- |
| 180 N + 180 P | 180 | Hypotonic | 300/180 = 5/3 |
| 300 N + 60 P | 300 | Isotonic | 300/300 = 1 |
| 360 N + 0 P | 360 | Hypertonic | 300/360 = 5/6 |

The same total can produce a larger, unchanged, or smaller cell. You need the mixture and the membrane permissions to choose among them.

## Counting particles doesn't establish permeability

A problem may give molarity rather than osmolarity. Suppose an ideal solution contains **0.11 mol/L NaCl**, assumed to dissociate completely into Na⁺ and Cl⁻, plus **0.08 mol/L of a neutral solute Q** that stays as one particle. Assume no reactions or other solutes.

Its calculated osmolarity is:

**(0.11 × 2) + (0.08 × 1) = 0.30 Osm/L = 300 mOsm/L**

This uses the [molarity-to-osmolarity relationship in Duke's notes](https://histology.oit.duke.edu/MBS/Videos/Phys/Phys%201.4%20Homeo%20Sol%20Water%20Trans/Phys%201.3%20and%201.4%20Homeo%20Transporters%20and%20Sol%20Water%20NOTES.pdf). The particle count doesn't establish whether either ion or Q crosses a particular membrane. To classify tonicity, you still need those permissions and the cell's starting contents.

## Eight osmolarity and tonicity practice problems

Use a fresh model cell for each question unless information is explicitly withheld. Keep the earlier assumptions. Bath values are particle concentrations in mOsm/L; no dissociation calculation is needed. Water and P cross, and N doesn't, unless a question changes a permission. Try the questions before reading the answers.

1. The bath contains **180 N + 60 P**. Give both labels and calculate Vfinal/V₀.
2. The bath contains **360 N + 90 P**. A student calls it hypotonic because “P can enter.” Correct the answer and show the volume calculation.
3. The bath contains **225 N + 75 P**. Is it isosmotic, isotonic, both, or neither? Calculate the volume ratio.
4. Bath A contains **300 N + 120 P**. Bath B contains **210 N + 210 P**. Their totals match. Compare their tonic effects and volume ratios.
5. Return to **240 N + 120 P**, but change the membrane so that **P can no longer cross**. Water still crosses, and the cell initially contains no P. How do the labels and final volume change?
6. A worksheet gives only an initial cell osmolarity of **300 mOsm/L** and a bath osmolarity of **390 mOsm/L**. It withholds solute identities and membrane permissions. Which label is justified? Use our N-and-P model to give two possible bath compositions with that total and different volume outcomes.
7. A fresh model cell's V₀ is **2.0 pL**. Its bath contains **250 N + 125 P**. Find its final volume, final N concentration, and final total osmolarity. Check conservation of N.
8. A bath contains **300 P and no N**. A student concludes that the isosmotic bath must preserve V₀. Explain the error and why the usual volume ratio doesn't yield a finite answer.

### Answers with the reasoning included

1. **Hyposmotic and hypotonic; Vfinal/V₀ = 5/3, about 1.67.** Total = 180 + 60 = 240, below the initial 300. P reaches 60 on both sides at equilibrium, leaving cell N at 180. Conserving N gives 300/180 = 5/3, so the cell swells.
2. **Hyperosmotic and hypertonic; Vfinal/V₀ = 5/6, about 0.833.** Total = 450, above 300. P's ability to enter doesn't remove the 360 mOsm/L of nonpenetrating solute outside. P reaches 90 on both sides; cell N must reach 360. The cell shrinks to 300/360 of V₀.
3. **Isosmotic and hypotonic; Vfinal/V₀ = 4/3, about 1.33.** Total = 225 + 75 = 300, so the initial osmolarities match. At equilibrium, P is 75 on both sides and cell N is 225. Diluting cell N to that concentration requires 300/225 = 4/3 of V₀. Equal initial totals don't guarantee equal final volume.
4. **Both are hyperosmotic; A is isotonic and B is hypotonic.** Both totals are 420. For A, Vfinal/V₀ = 300/300 = 1. For B, it is 300/210 = 10/7, about 1.43. Their nonpenetrating concentrations differ despite identical totals.
5. **Still hyperosmotic, now hypertonic; Vfinal/V₀ = 5/6.** The outside total remains 360. Both N and P are now blocked, so both count toward the outside nonpenetrating concentration: **240 + 120 = 360**. P stays absent inside; cell N must reach 360. Conservation gives 300/360 = 5/6. The membrane change reverses the volume outcome without changing bath osmolarity.
6. **Hyperosmotic; tonicity and final volume are undetermined.** The outside total exceeds the initial inside total, but the omitted information prevents a tonic prediction. Two possible completions using our model are **390 N + 0 P**, which is hypertonic with Vfinal/V₀ = 300/390 = 10/13, and **195 N + 195 P**, which is hypotonic with Vfinal/V₀ = 300/195 = 20/13. Both totals are 390.
7. **Hyperosmotic and hypotonic; final volume = 2.4 pL.** The bath total is 375. Vfinal/V₀ = 300/250 = 1.2, so Vfinal = 2.0 × 1.2 = 2.4 pL. Final cell N is 250 and P is 125, giving a total of 375 mOsm/L. Conservation check: **300 mOsm/L × 2.0 pL = 250 mOsm/L × 2.4 pL**. Both products represent the same trapped amount, 6.0 × 10⁻¹³ osmoles of N particles.
8. **Isosmotic and hypotonic, with no finite equilibrium volume under these assumptions.** P's 300 counts for the initial osmotic comparison. A finite equilibrium would require equal P concentrations, but the cell would still contain its conserved N in addition to P. No finite expansion reduces that N concentration to zero. The volume formula requires a positive bath N concentration; it doesn't supply a finite answer here.

## Keep the condition you missed on the flashcard

If you missed a question, identify whether you lost the total, a membrane permission, or the conserved amount. Make a card for that step. A front that only says “Is 360 mOsm/L hypotonic?” is missing the information needed to answer it.

These transfer cards include their own conditions so they work separately from the article.

| Front | Back |
| --- | --- |
| An intact, flexible cell initially has 300 mOsm/L neutral N and no P. Its huge fixed bath has 240 mOsm/L N + 120 mOsm/L neutral P. Water and P diffuse across; N is blocked. Ideal single-particle solutes at the same temperature, no reactions, pumps, metabolism, or opposing pressure. Give the bath's osmotic label versus the initial cell and its equilibrium-volume effect. | Hyperosmotic: total 360 > 300. Hypotonic: P equilibrates and cell volume becomes 300/240 = 1.25 times the initial volume. |
| An intact, flexible cell initially has 300 mOsm/L neutral N and no P. Its huge fixed bath has 240 mOsm/L N + 120 mOsm/L neutral P. Only water crosses. Ideal single-particle solutes at the same temperature, no reactions, pumps, metabolism, or opposing pressure. What is the equilibrium volume ratio? | 300/(240 + 120) = 5/6. Both bath solutes are nonpenetrating for this membrane. |
| A bath has total osmolarity 390 mOsm/L; a cell initially has 300 mOsm/L. No solute identities or membrane permissions are given. Which relative label is justified? | Hyperosmotic. Tonicity is undetermined without the missing solute and membrane information. |

The [practice-question flashcard workflow](/blog/how-to-turn-practice-questions-into-flashcards/) can help you reduce a missed problem to one recall target. On your next fresh problem, write the particle ledger first, name the reference cell, and check the final volume by conserving the solute that cannot leave.
