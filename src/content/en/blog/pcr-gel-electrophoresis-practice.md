---
title: "How to Read a PCR Gel: DNA Ladder and Control Practice"
description: "Read a PCR gel using a DNA ladder, estimate an unknown band size, and decide what the positive and no-template controls let you conclude."
date: "2026-11-10"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/bbac1eab3c5e3b4d4305ca3ad95c3b64179b408e2779a69f0e4dbc13f9bf318d.webp"
keywords:
  - "how to read a PCR gel"
  - "gel electrophoresis practice"
  - "DNA ladder"
  - "PCR positive control"
  - "no-template control"
---

In one of the practice runs below, your PCR sample lines up with the 500 bp mark, right where you expected it. Then you spot a band at the same height in the no-template control, the reaction that started without added DNA template. The sample band is still about 500 bp. Where it came from is now uncertain.

Use these simulated gels to practice both decisions. Estimate the band size from the DNA ladder, then read the controls before you write your lab note.

![Two cake slices on a blue tray, with a cocoa streak on the plain slice beside a cocoa-stained knife](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/bbac1eab3c5e3b4d4305ca3ad95c3b64179b408e2779a69f0e4dbc13f9bf318d.webp)

## Start at the wells and read the ladder

A DNA ladder is a mixture of fragments of known length. On the same agarose gel, shorter linear DNA fragments generally travel farther than longer ones. Use the ladder on that gel to estimate the size of a sample band. Fragment lengths are given in base pairs (bp). [Addgene's guide to reading an agarose gel](https://www.addgene.org/protocols/gel-electrophoresis/#analyzing-your-gel)

Use this simulated three-band ladder throughout the worksheet. Each distance runs from the well to the center of the band.

| Distance from the well | Known fragment size |
| --- | ---: |
| 20 mm | 1,000 bp |
| 30 mm | 500 bp |
| 40 mm | 250 bp |

A sample band at **30 mm** lines up with the 500 bp ladder band, so write **about 500 bp**. If you need to predict the product size first, the [PCR primer practice worksheet](/blog/pcr-primer-practice/) shows how to calculate it from primer positions.

## Check the positive and no-template controls

Suppose you expect a PCR product of about **500 bp**. In this exercise, the **positive control** uses a known template that should give a visible band of that size. The **no-template control** (NTC) uses the same PCR reagents with no DNA template added. You expect its lane to be blank. A visible band in that lane can flag contamination. [Vanderbilt's teaching-lab guide to gel controls (PDF)](https://cdn.vanderbilt.edu/vu-URL/wp-content/uploads/sites/267/2021/06/19172720/Lab4_Electrophoresis_standard_June2021.pdf#page=6)

| Lane | What you see in the worked run |
| --- | --- |
| DNA ladder | All three bands at the distances above |
| Positive control | Band at 30 mm |
| No-template control | No visible band |
| Sample | Band at 30 mm |

A lab note could read, “The sample showed a band at about 500 bp, consistent with the expected PCR product. The positive control showed the expected band, and the no-template control showed no visible band.” With these control results, the size match supports that interpretation. Identifying the fragment's sequence takes separate evidence.

## Estimate a band between two ladder marks

What if the sample band is at **35 mm**? It's between the 500 bp band at 30 mm and the 250 bp band at 40 mm, so its estimated size falls between 250 and 500 bp.

Within the gel's useful separation range, migration distance and the **logarithm** of fragment size follow an approximately straight line. Use the two ladder bands that bracket your sample. In this simulated ladder, every extra 10 mm corresponds to halving the size. [UC Riverside's gel analysis exercise (PDF)](https://dynamicgenome.ucr.edu/sites/default/files/2020-08/spring_2012.pdf#page=109)

At 35 mm you're halfway between the marks. Average `log10(500)` and `log10(250)`, then raise 10 to that result. For this halfway case, a regular calculator gives the same estimate if you multiply **500 × 250** and take the square root of **125,000**. You'll get about **354 bp**. Write **about 350 bp** in your notes. Averaging the two sizes directly gives 375 bp because it treats the size scale as linear.

## Four runs to interpret

Each row is a separate simulated run. All four show the same ladder bands and have the same expected product size of **about 500 bp**. For each run, write a short lab note that gives the estimated size if you see a sample band, and says what the controls let you conclude.

| Run | Positive control | No-template control | Sample |
| --- | --- | --- | --- |
| A | Band at 30 mm | Band at 30 mm | Band at 30 mm |
| B | No visible band | No visible band | No visible band |
| C | Band at 30 mm | No visible band | No visible band |
| D | Band at 30 mm | No visible band | Band at 35 mm |

Compare run A with the worked run before checking your answers. Then compare B with C. In each pair, the sample lane looks the same and only one control changes.

## What to write in your lab notes

### A. About 500 bp, source unresolved

The sample still has a band at about 500 bp. This time the NTC also has a band of that size, which flags possible contamination. Record both bands and leave the source of the sample band unresolved.

### B. Blank sample with a failed positive control

The ladder shows that DNA bands were visible on the gel. The positive control still lacks the band you'd expect from the known template. Record “No visible sample band. Positive control failed, so the sample result is inconclusive.”

### C. No sample product detectable on the gel

The positive control showed its expected band, the NTC was blank, and the sample showed no visible band. Write “No PCR product was detectable on the gel in the sample lane under these conditions.” The target could still be present. A problem with sample handling, too little usable template, or something in the sample that interferes with PCR could explain the blank lane. This exercise has no control that checks how that particular sample behaves in PCR. [Huggett and colleagues' study of PCR inhibition](https://pmc.ncbi.nlm.nih.gov/articles/PMC2564953/)

### D. About 350 bp, fragment unidentified

The controls behaved as expected in this run. The visible sample band at 35 mm is about 350 bp, smaller than the expected 500 bp product. Record the estimated size and leave the fragment's identity open.

## Turn one mistake into a review question

If you treated the two blank samples alike, write a prompt you can answer from memory tomorrow. Try “My sample and positive control are both blank, but the ladder is visible. What can I write about the sample?” Answer it before looking at run B. Try the same question a few days later.

For broader review, the [AP Biology complete course review deck in English](/catalog/packages/ap-biology-flashcards-complete-course-review/) includes a card on how gel electrophoresis separates DNA fragments. Try explaining why shorter fragments travel farther before you flip the card. Retrieving the answer from memory and revisiting it after a delay can help you remember it longer.

*AI assisted the research and writing. Python checked the arithmetic for the simulated ladder. The illustration is AI-generated. All gel observations in this worksheet are simulated.*
