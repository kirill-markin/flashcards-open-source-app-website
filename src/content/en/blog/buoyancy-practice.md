---
title: "Buoyancy Practice: Floating, Submerged, and Held Underwater"
description: "Work through buoyancy practice problems with explained answers. Track displaced volume, floating depth, string tension, and the force needed to hold a block underwater."
date: "2026-11-04"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/a6e771b9b56fae3d63604d633e7c890ba9c218598b2da0f58e8baf6284afef20.webp"
keywords:
  - "buoyancy practice problems"
  - "displaced volume"
  - "apparent weight"
  - "fraction submerged"
  - "buoyant force problems"
---

A 1.2 kg block floats in water with a buoyant force of 11.76 N. Hold the same block fully underwater, and that force becomes 19.6 N. Its weight hasn't changed. It now displaces more water.

These six buoyancy practice problems follow that block through water, oil, a downward hold, and release. A second, denser sample adds string tension and apparent weight. Archimedes' principle gives the buoyant force. Adding all the vertical forces tells you whether they balance or produce acceleration.

![An adult holds a yellow ball fully beneath the water in a worn stone trough](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/a6e771b9b56fae3d63604d633e7c890ba9c218598b2da0f58e8baf6284afef20.webp)

## Set up the forces before calculating

For a uniform liquid, Archimedes' principle gives:

`F_B = ρ_liquid × g × V_displaced`

Use the **liquid's density** and the volume of liquid displaced. For the solid objects in this worksheet, that volume is the part below the surface. It equals the object's entire volume only when the object is fully submerged. [OpenStax's buoyancy chapter](https://openstax.org/books/university-physics-volume-1/pages/14-4-archimedes-principle-and-buoyancy) explains the principle and how fluid pressure produces this upward force.

Choose upward as positive. With weight, buoyancy, and an optional external vertical force:

`F_B + F_external − mg = ma`

Give `F_external` a positive sign when it points upward and a negative sign when it points downward. Set `ma = 0` when vertical acceleration is zero. A block floating at rest with no other vertical force has `F_B = mg`. A block held underwater needs a separate force balance.

## The objects and six questions

Use `g = 9.8 m/s²`, freshwater density `1000 kg/m³`, and oil density `800 kg/m³`. Treat these as exact worksheet values. The liquids occupy separate containers.

| Object | Mass | External volume | Geometry |
| --- | --- | --- | --- |
| Light block | 1.2 kg | 0.002 m³ | Rectangular; horizontal area 0.020 m² |
| Dense sample | 3.0 kg | 0.001 m³ | Fully submerged for its questions |

Keep the block's top and bottom faces horizontal. Its cross-sectional area is constant, so its total height is `V/A = 0.10 m`. Both objects are rigid and nonabsorbing; the liquids have uniform, constant density. Ignore air buoyancy, surface tension, and contact with walls or the bottom; treat strings as massless.

For the release question, use a textbook two-force model: only weight and hydrostatic buoyancy act. Neglect drag and fluid inertia, including the [added-mass effect](https://web.mit.edu/2.016/www/handouts/Added_Mass_Derivation_050916.pdf). The calculated acceleration belongs to that simplified model.

Try these before reading the worked answers:

1. The block's volume is also listed as 2000 cm³. Convert it to m³, then find its average density.
2. When the block floats freely at rest in freshwater, find buoyant force, displaced volume, fraction submerged, and underwater depth.
3. Repeat the floating calculation in oil. Does the lower liquid density mean less buoyant force at equilibrium?
4. Hold the block at rest, fully underwater in freshwater. Find the downward holding force. What is its initial acceleration when released from rest in the stated model?
5. Suspend the dense sample at rest, fully underwater in freshwater, from a spring scale above it. Find the scale reading. If you lower it farther and let it come to rest again, does the reading change?
6. Someone proposes holding the light block fully underwater in freshwater using only a string attached above it. Calculate the required tension and explain whether this arrangement can work.

## Worked answers

### 1. Cube the conversion factor

`2000 cm³ × (0.01 m/cm)³ = 2000 × 0.000001 m³ = 0.002 m³`

Then `ρ_block = m/V = 1.2/0.002 = 600 kg/m³`.

The length conversion factor must be cubed. Dividing 2000 by 100 would miss two of those factors. The [squared and cubed units practice](/blog/converting-squared-cubed-units/) has more examples if this step caught you out.

### 2. Let the floating condition determine displacement

The block is at rest with only buoyancy upward and weight downward:

`F_B = mg = 1.2 × 9.8 = 11.76 N`

Insert that into Archimedes' equation:

`V_displaced = 11.76/(1000 × 9.8) = 0.0012 m³`

The fraction submerged is `V_displaced/V_block = 0.0012/0.002 = 0.60`, or **60%**. Divide the displaced volume by the horizontal area to get the submerged height: `0.0012/0.020 = 0.060 m = 6 cm`.

That leaves 4 cm of the block above the surface. Using the whole 0.002 m³ in Archimedes' equation here would assume full submersion before checking how the block floats.

### 3. The same weight needs more oil displaced

At rest, buoyancy still equals **11.76 N**. The new liquid changes the volume needed to supply that force:

`V_displaced = 11.76/(800 × 9.8) = 0.0015 m³`

Fraction submerged is `0.0015/0.002 = 0.75`, or **75%**, giving an underwater depth of `0.0015/0.020 = 0.075 m = 7.5 cm`.

The block sits deeper in oil, but the equilibrium buoyant force stays equal to its unchanged weight. The density shortcut follows from this balance:

`fraction submerged = ρ_block/ρ_liquid`

Here, `600/800 = 0.75`. The shortcut assumes free floating at rest with buoyancy and weight as the only vertical forces. A result greater than 1 would require more submerged volume than the object has, so it couldn't float that way.

### 4. Full submersion changes the force balance

Now all 0.002 m³ displaces water:

`F_B = 1000 × 9.8 × 0.002 = 19.6 N`

Buoyancy now exceeds the block's weight. To hold it still, apply a downward force of the same size as that excess:

`F_hold = F_B − mg = 19.6 − 11.76 = 7.84 N downward`

Release removes the holding force. At that instant the block is still fully underwater, so the two-force model gives:

`a = (F_B − mg)/m = (19.6 − 11.76)/1.2 ≈ 6.53 m/s² upward`

The net force is upward, even though the block's velocity is zero at release. This answer neglects both drag and fluid inertia as stipulated. Once the block starts emerging, displaced volume also decreases, so 6.53 m/s² doesn't describe its entire trip.

### 5. Apparent weight is the scale's supporting force

For the dense sample, `mg = 3.0 × 9.8 = 29.4 N` and `F_B = 1000 × 9.8 × 0.001 = 9.8 N`.

At rest, `T + F_B − mg = 0`, so:

`T = 29.4 − 9.8 = 19.6 N`

The spring scale reads **19.6 N**, its apparent weight in this arrangement. The sample's gravitational weight remains 29.4 N.

After the sample comes to rest at a greater depth, the reading is still **19.6 N**. Its displaced volume and the water's density haven't changed. Pressure is higher farther down, but that increase acts around the whole object; it doesn't increase the net upward buoyant force on this rigid sample.

### 6. A negative tension rejects the proposed support

An overhead string can pull upward. For the fully submerged light block, equilibrium would require:

`T = mg − F_B = 11.76 − 19.6 = −7.84 N`

The negative result means equilibrium would require the string to exert a downward force. **An overhead string cannot provide it**: a string pulls, and this one can only pull upward. It would go slack as the block rose. Anchoring a string below the block could provide the required 7.84 N downward tension.

Use this table to check which force changed between states. The release row uses the two-force model above; all other rows describe objects at rest.

| State | Displaced volume (m³) | Buoyancy upward (N) | Weight downward (N) | Other force |
| --- | --- | --- | --- | --- |
| Block floating in water | 0.0012 | 11.76 | 11.76 | None |
| Block floating in oil | 0.0015 | 11.76 | 11.76 | None |
| Block held fully underwater | 0.002 | 19.6 | 11.76 | 7.84 N downward |
| Block just released underwater | 0.002 | 19.6 | 11.76 | None; accelerates upward |
| Dense sample suspended in water | 0.001 | 9.8 | 29.4 | 19.6 N upward |

## Keep the conditions with the formulas

When you revisit the worksheet, cover the answers and explain why the floating block has 11.76 N of buoyancy but the fully submerged block has 19.6 N. Then explain why lowering the dense sample farther doesn't change its scale reading. Those explanations check whether you're choosing the displaced volume and force balance for each situation.

The [AP Physics 1 flashcards in English](/catalog/packages/ap-physics-1-flashcards/) contain 400 cards, including floating equilibrium, fraction submerged, depth, and initial acceleration direction. Answering before revealing a card practices recall; spacing reviews over time helps long-term retention. Keep solving full problems too, because selecting forces and calculating displacement require more than recalling a formula. Kirill Markin owns Nibomo, which publishes this article and hosts the deck.

*Created with AI assistance for research, drafting, and editing. The original worksheet's arithmetic was checked in Python using exact rational values. This is a worked mathematical model, not a physical experiment or independent human physics review. The illustration is AI-generated.*
