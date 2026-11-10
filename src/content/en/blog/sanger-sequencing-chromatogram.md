---
title: "How to Read a Sanger Sequencing Chromatogram"
description: "Use a worked Sanger sequencing example to read a trace, align forward and reverse reads, and decide which bases to report or leave unresolved."
date: "2026-11-10"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/4fb25058b92a226c7381deb2b4689cfb71f2526388a73bf8fff1a659a2689995.webp"
keywords:
  - "Sanger sequencing chromatogram"
  - "read Sanger sequencing results"
  - "ambiguous base calls"
  - "reverse complement a reverse read"
---

A Sanger sequencing result can give you a letter at every position even when some peaks overlap. The letters alone can look fine. Open the chromatogram and you can see how clear the signal was at each base. If you have a read from the other direction, its trace can help you decide what to report. [See Addgene’s example of overlapping peaks behind a clean-looking sequence](https://blog.addgene.org/6-tips-for-analyzing-and-troubleshooting-dna-sequencing-results).

![Hands align two worn strips of botanical wallpaper, with a rust daisy visible on only one strip](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/4fb25058b92a226c7381deb2b4689cfb71f2526388a73bf8fff1a659a2689995.webp)

## Open the trace and check the peaks

Open the `.ab1` file in a chromatogram viewer. The chromatogram, also called an electropherogram or trace, shows the fluorescent signals for A, C, G, and T as DNA fragments pass the detector. The letters along the trace are **base calls**, the software’s reading of those signals. The `.ab1` file carries both the trace and the calls. A plain-text sequence gives you the letters alone. [UBC Sequencing and Bioinformatics Consortium’s Sanger FAQ](https://sequencing.ubc.ca/our-services-equipment/sanger-sequencing/sanger-faq).

Find the letter you want to check and zoom in on a few peaks on either side. Look for a distinct peak, clear spacing from its neighbors, and low background. Competing signals at the same position or weak peaks against a noisy baseline make a call less certain. An `N` marks an unspecified base. Treat overlapping peaks as a reason to inspect the region more closely. [Compare Yale’s examples of good-quality data and noisy traces](https://research.yale.edu/cores/keck-dna/sanger-sequencing-troubleshooting-guide).

Check both ends of each read before aligning the pair. If you see a stretch of broad, overlapping peaks or signal that fades into noise, trim that low-quality end from the sequence you use for alignment. Choose the boundary based on the trace and any available quality scores. [Figures 9–11 in UBC’s FAQ compare clear peaks with loss of resolution near the end](https://sequencing.ubc.ca/our-services-equipment/sanger-sequencing/sanger-faq).

## Put the forward and reverse reads in the same direction

Forward and reverse reads can cover the same DNA region from opposite directions. Check how your viewer displays the reverse read. If it’s still in its original orientation, **reverse-complement** it. Reverse the order and swap A with T and C with G. Keep `N` as `N`. Some tools already orient the reads for you. Once both reads face the same way, use clear stretches of sequence to line up the overlap. [Published Sanger sequencing guidelines on orienting and assembling reads](https://pmc.ncbi.nlm.nih.gov/articles/PMC7649556/).

Compare bases in the same **alignment column**. Keep track of each read’s original position so you can find the corresponding peak in its trace. If swapping bases and reversing the order feel like one step too many, try the [DNA reverse complement practice worksheet](/blog/dna-reverse-complement-practice/).

## What would you report for these 11 bases?

Copy the two sequences onto paper. These simulated excerpts come from the middle of a longer overlap. They cover the same 11 positions and line up without gaps once you orient them the same way. For each excerpt, count from 1 at its own displayed 5′ end. The observations use those local positions.

```text
Forward excerpt             5′–ACGTNCTAGNA–3′
Reverse excerpt as read     5′–TNCTAGCACGT–3′
```

| Position in the original excerpt | What you see in the trace |
| --- | --- |
| Forward 5 | A and G peaks compete. The software calls `N`. |
| Forward 10 | Weak, overlapping peaks. The software calls `N`. |
| Reverse 2 | Weak, overlapping peaks. The software calls `N`. |
| Reverse 7 | One well-separated C peak on a quiet baseline. |

At every other position, a distinct peak supports the printed letter.

1. Reverse-complement the reverse excerpt and write it below the forward excerpt. Which original reverse position lines up with forward position 5?
2. Write one sequence for the overlap in forward orientation. Which ambiguous base can you resolve with evidence from the reverse trace? Which stays `N`?
3. Swap in a different reverse excerpt, **5′–TNCGAGCACGT–3′**. Its fourth position now has a clear G peak. All other observations stay the same. What would you record at forward position 8, and what would you check next?
4. On a separate full read, the opening peaks overlap against high background. A stretch of distinct peaks follows, then the signal fades into noise. Which part would you keep for alignment?

## Answer key

1. The reverse complement is **5′–ACGTGCTAGNA–3′**. In this gap-free overlap, the first forward base pairs with original reverse position 11. Count down from there. Forward position 5 lines up with original reverse position **7**.
2. The overlap sequence is **5′–ACGTGCTAGNA–3′**. Record **G at position 5**, supported by the clear C in the original reverse trace. At position 10, the matching reverse peak is at original position 2. Both traces are unclear there, so keep **`N` at position 10**. The `N` keeps that position in the sequence.
3. Mark **position 8 as `N`** in your draft and flag the disagreement. The alternate reverse excerpt becomes **5′–ACGTGCTCGNA–3′**. Its clear G at original position 4 supports C in forward orientation, while the forward trace supports A at position 8. Recheck both traces at those positions, the alignment, and the sample labels. If the calls still disagree, seek independent sequence evidence before reporting a base.
4. **Keep the well-resolved middle.** Use the points where the peaks become clear and where they lose resolution to choose the boundaries. A single uncertain position within a usable stretch can stay marked `N` as it did at position 10.

In real data, the two reads can overlap only partly and the alignment may contain gaps. Use the actual alignment to find the corresponding peaks. If only one trace supports a base, record which read supports it and follow your lab’s reporting criteria.

## Practice the step you missed

Cover the answers and try these from memory. Come back tomorrow and again a few days later. Recalling the steps after a delay helps you remember them for the next read.

| Prompt | Answer |
| --- | --- |
| A forward call is `N`. The matching peak in the original reverse trace is a clear T. What base does that peak support in forward orientation? | A, the complement of T. |
| Both traces have weak, overlapping peaks in the same alignment column. What would you record there in this worksheet? | `N` at that position. |

The [English DNA reverse complement flashcards](/catalog/packages/dna-reverse-complement-flashcards/) give you new sequences to practice putting the reads in the same orientation. The same direction check comes up in the [PCR primer practice worksheet](/blog/pcr-primer-practice/).

*AI assisted with research and drafting. A script checked the reverse complements and positions in the simulated exercise.*
