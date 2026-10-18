---
title: "Peptide Net Charge Practice: Check the Termini First"
description: "Calculate peptide net charge with a group-by-group worksheet, terminal caps, repeated side chains, and explained practice problems at different pH values."
date: "2026-10-18"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/2588edf9be959642565afbad4edb04c26da17fcb11da5f52e44e076c8116f047.webp"
keywords:
  - "peptide net charge practice"
  - "how to calculate peptide charge"
  - "N terminus C terminus charge"
  - "acetylated amidated peptide charge"
  - "peptide charge at different pH"
---

K–A–D can have a predominant net charge of 0, −1, or +1 at pH 7 in the teaching model below. The sequence stays the same. Changing which ends are free changes the answer.

Before adding charges, write down the groups that remain after the amino acids are joined. This peptide net charge practice worksheet gives you a copyable group ledger, a worked example, and eight problems covering terminal caps, repeated side chains, and a cut that creates two new ends.

![A gardener fits an end cap onto an irrigation pipe while its three side outlets remain open](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/2588edf9be959642565afbad4edb04c26da17fcb11da5f52e44e076c8116f047.webp)

## Count the groups that are actually there

Write a peptide sequence from its N-terminus toward its C-terminus. In a linear peptide with both ends free, count **one free N-terminal amino group and one free C-terminal carboxyl group**, plus the ionizable side chains. Backbone groups joined in peptide bonds are amides; don't give every residue another free amino/carboxyl pair. [OpenStax's peptide chapter](https://openstax.org/books/organic-chemistry/pages/26-4-peptides-and-proteins) explains that backbone structure and sequence convention.

For K–A–D, K is lysine, A is alanine, and D is aspartate. Lysine and aspartate each supply an ionizable side chain in these problems. Alanine supplies none. The first lysine therefore has two separate entries: its free N-terminal group and its side-chain group. The last aspartate has a free C-terminal group and a separate side-chain group.

If you need to recognize those side chains, keep the [amino acid side-chain chart](/blog/amino-acid-side-chain-chart/) nearby. The [free amino acid charge worksheet](/blog/amino-acid-charge-at-different-ph/) covers the case where each amino acid molecule still has its own free backbone ends.

### Use these teaching values throughout

All examples concern short, linear peptides in water. **The pKa values below are stipulated, rounded teaching values**, chosen for this worksheet. They aren't measurements of these sequences or universal peptide constants. Actual peptide pKa values can change with their surroundings.

| Group | Teaching pKa | Protonated charge | Deprotonated charge |
| --- | --- | --- | --- |
| Free N-terminal amino group | 9.0 | +1 | 0 |
| Free C-terminal carboxyl group | 2.0 | 0 | −1 |
| Aspartate side chain, D | 4.0 | 0 | −1 |
| Glutamate side chain, E | 4.0 | 0 | −1 |
| Histidine side chain, H | 6.0 | +1 | 0 |
| Lysine side chain, K | 10.0 | +1 | 0 |
| Arginine side chain, R | 12.0 | +1 | 0 |

Treat these groups as independent. The model excludes cysteine, tyrosine, cyclic peptides, disulfides, and modifications other than the two terminal caps described below. All questions stay within pH 1–11.

For a **predominant-form answer**, compare pH with each group's pKa: below favors the protonated form; above favors the deprotonated form. Add those favored integer charges. In this independent-group model, that gives the charge of the most likely protonation arrangement. It doesn't mean every molecule has that arrangement or that the population's mean charge is an integer.

At pH = pKa, the group's protonated and deprotonated forms are equally likely. Use fractions or a charge distribution when the question asks for them; exercise 6 works through that case.

## Work through free-ended K–A–D at pH 7

Both ends are free. Use N-terminal pKa 9.0, C-terminal pKa 2.0, lysine side-chain pKa 10.0, and aspartate side-chain pKa 4.0.

| Entry | pH comparison | Favored form at pH 7 | Charge |
| --- | --- | --- | --- |
| Free N-terminus | 7 < 9.0 | Protonated amino group | +1 |
| Free C-terminus | 7 > 2.0 | Deprotonated carboxyl group | −1 |
| One K side chain | 7 < 10.0 | Protonated | +1 |
| One D side chain | 7 > 4.0 | Deprotonated | −1 |

The predominant-form charge is **(+1) + (−1) + (+1) + (−1) = 0**. There are four charged groups in that form; a zero sum doesn't make them disappear.

The terminal entries happen to cancel here. Keep both rows anyway. At another pH, or after a modification, that shortcut can give the wrong result.

### Copy this ledger before adding

```text
Sequence, written N to C:
Solution pH:
N-terminus: free / N-acetylated
C-terminus: free / amidated
Answer requested: predominant-form charge / mean / distribution
Teaching pKa values used:

Group                 Count   pKa   pH comparison   Charge each   Subtotal
Free N-terminal group
Free C-terminal group
Each ionizable side-chain type

Charge sum:
Any groups at pH = pKa:
```

Put a count of zero for a capped terminal group. Give repeated side chains their actual count. For a mean-charge calculation, the “Charge each” column holds a population average rather than a favored integer.

## An acetyl cap and an amide cap affect different ends

**N-terminal acetylation** turns the free terminal amino group into an amide. **C-terminal amidation** replaces the free terminal carboxyl group with an amide. Sigma-Aldrich's [peptide modification guide](https://www.sigmaaldrich.com/US/en/technical-documents/technical-article/protein-biology/protein-labeling-and-modification/peptide-modifications-n-terminal-internal-and-c-terminal) describes these terminal changes and their charge effects.

For this worksheet, each cap contributes zero charge throughout pH 1–11, and capping leaves the stipulated side-chain pKa values unchanged. “N-acetylated” modifies only the N-terminal group; the lysine side-chain amino group remains available. “C-amidated” modifies only the C-terminal group; the aspartate side-chain carboxyl group remains available.

Here's K–A–D at **pH 7** with the same teaching pKas wherever the groups remain: N 9.0, C 2.0, K 10.0, and D 4.0.

| Terminal states | N-terminal entry | C-terminal entry | K side chain | D side chain | Predominant-form sum |
| --- | --- | --- | --- | --- | --- |
| Both free | +1 | −1 | +1 | −1 | 0 |
| N-acetylated, C free | 0 | −1 | +1 | −1 | −1 |
| N free, C-amidated | +1 | 0 | +1 | −1 | +1 |
| N-acetylated, C-amidated | 0 | 0 | +1 | −1 | 0 |

Capping both ends leaves the same integer sum as keeping both free in this example. The matching numbers describe different molecules with different group inventories.

## Eight peptide net charge practice problems

Use the teaching table above for every question, including newly exposed termini. Unless a question requests a mean or distribution, give the **predominant-form integer charge** and show the group entries. Try the questions before reading the solutions.

| No. | Peptide and terminal states | pH | Task |
| --- | --- | --- | --- |
| 1 | K–A–D; free N- and C-termini | 1 | Find its predominant-form net charge. |
| 2 | K–A–D; free N- and C-termini | 11 | Find its predominant-form net charge. |
| 3 | K–A–D; N-acetylated, C-terminus free | 7 | Find its predominant-form net charge. |
| 4 | K–A–D; N-terminus free, C-amidated | 7 | Find its predominant-form net charge. |
| 5 | K–K–E–A–D; N-acetylated and C-amidated | 7 | Find its predominant-form net charge. |
| 6 | H–H; N-acetylated and C-amidated | 6 | Find the mean charge and the probabilities of charges 0, +1, and +2 under the independent-group model. |
| 7 | K–A–D–G; free N- and C-termini; hypothetical cleavage at KA\|DG | 1 | Find the intact peptide's charge, each free-ended fragment's charge, and the sum for KA and DG. |
| 8 | K–A–D–G; free N- and C-termini; hypothetical cleavage at KA\|DG | 7 | Find the intact peptide's charge, each free-ended fragment's charge, and the sum for KA and DG. |

In questions 7 and 8, G is glycine and has no ionizable side chain in this model. The cut represents a stipulated hydrolysis of the A–D peptide bond. Each fragment has a free N-terminus and a free C-terminus; assign newly exposed ends the same teaching pKas, 9.0 and 2.0. Keep the side-chain constants unchanged and the solution at the stated pH before and after cleavage. No enzyme specificity or laboratory procedure is implied.

## Explained solutions

### 1. Free-ended K–A–D at pH 1: +2

At pH 1, all four groups lie below their teaching pKas: N 9.0, C 2.0, K 10.0, and D 4.0. The free N-terminus and K side chain favor +1. The free C-terminus and D side chain favor their neutral COOH forms.

**N + C + K + D = (+1) + 0 + (+1) + 0 = +2.**

If you got +1, check whether you automatically wrote −1 for the C-terminus. At this pH, its favored form is protonated and neutral. It cannot cancel the N-terminal +1.

### 2. Free-ended K–A–D at pH 11: −2

Now pH lies above all four pKas. The free N-terminal and K amino groups favor their neutral forms. The free C-terminal and D carboxyl groups favor −1 each.

**N + C + K + D = 0 + (−1) + 0 + (−1) = −2.**

A lysine residue is still present, but its side chain's favored charge at this pH is zero. With the supplied pKa 10.0, the protonated fraction is 1/(1 + 10) ≈ 9.1%. The −2 answer describes the favored protonation arrangement; it isn't an exact population mean.

### 3. N-acetylated K–A–D with a free C-terminus at pH 7: −1

The N cap contributes zero. Using C pKa 2.0, K 10.0, and D 4.0, the free C-terminus contributes −1, K contributes +1, and D contributes −1 in their favored forms.

**Cap + C + K + D = 0 + (−1) + (+1) + (−1) = −1.**

Acetylating the N-terminus doesn't remove the separate lysine side-chain entry. Crossing out both would give −2 and erase a group the question never modified.

### 4. K–A–D with a free N-terminus and a C-amide at pH 7: +1

The C cap contributes zero. Using N pKa 9.0, K 10.0, and D 4.0, the free N-terminus and K side chain favor +1, while D favors −1.

**N + cap + K + D = (+1) + 0 + (+1) + (−1) = +1.**

The D side-chain carboxyl group survives C-terminal amidation. Its −1 entry belongs in the ledger even though the terminal carboxyl group has been capped.

### 5. Both-capped K–K–E–A–D at pH 7: 0

Both caps contribute zero. Each lysine side chain has pKa 10.0 and favors +1. Glutamate, E, and aspartate, D, each have pKa 4.0 and favor −1. Alanine supplies no ionizable side chain.

**Caps + two K groups + E + D = 0 + 2 × (+1) + (−1) + (−1) = 0.**

Counting “lysine” once because it is one amino acid type would produce −1. Count the residues carrying that group: this peptide has two lysines and therefore two K side-chain entries.

### 6. Both-capped H–H at pH 6: mean +1, with three possible charges

Both caps are neutral. Each histidine side chain has the stipulated pKa 6.0. At pH 6, each is protonated with probability 1/2 and neutral with probability 1/2. Under the independence assumption:

| Protonated H side chains | Whole-peptide charge | Probability |
| --- | --- | --- |
| Neither | 0 | (1/2) × (1/2) = 1/4 |
| Exactly one, either the first or the second | +1 | 2 × (1/2) × (1/2) = 1/2 |
| Both | +2 | (1/2) × (1/2) = 1/4 |

The mean is **0 × 1/4 + 1 × 1/2 + 2 × 1/4 = +1**. The probabilities add to 1.

Every molecule in these states has an integer charge. An average contribution of +0.5 per histidine doesn't put half a positive charge on each side chain. Here +1 is also the most common total charge, but it contains two distinct protonation arrangements, each with probability 1/4. To find a charge category's probability, add the probabilities of all arrangements that produce it.

### 7. Free-ended K–A–D–G cut at KA|DG, pH 1: +2 becomes a fragment sum of +3

Use N pKa 9.0, C 2.0, K 10.0, and D 4.0 throughout. At pH 1, each free N-terminus favors +1 and each free C-terminus favors 0. K favors +1; D favors 0.

| Peptide | N-terminal entry | C-terminal entry | Side-chain entries | Predominant-form sum |
| --- | --- | --- | --- | --- |
| Intact K–A–D–G | +1 | 0 | K +1; D 0 | +2 |
| Fragment K–A | +1 | 0 | K +1 | +2 |
| Fragment D–G | +1 | 0 | D 0 | +1 |

The fragment sum is **(+2) + (+1) = +3**. The cut adds a free C-terminus on A and a free N-terminus on D. Their favored charges at pH 1 are 0 and +1.

This comparison keeps the solution at pH 1 and lets the fragments reach protonation equilibrium with it. Peptide groups can exchange protons with the solution or its buffer. Charge is conserved for the full system; the sum assigned to the peptide molecules alone needn't stay the same.

### 8. Free-ended K–A–D–G cut at KA|DG, pH 7: 0 becomes +1 and −1

Both original ends and both newly exposed ends are free. With the same teaching pKas, each N-terminus now favors +1, each C-terminus favors −1, K favors +1, and D favors −1.

| Peptide | N-terminal entry | C-terminal entry | Side-chain entries | Predominant-form sum |
| --- | --- | --- | --- | --- |
| Intact K–A–D–G | +1 | −1 | K +1; D −1 | 0 |
| Fragment K–A | +1 | −1 | K +1 | +1 |
| Fragment D–G | +1 | −1 | D −1 | −1 |

The fragment sum is **(+1) + (−1) = 0**. The two new terminal entries cancel in this predominant-form calculation. Exercise 7 shows why that cancellation can't be assumed at every pH. Matching integer sums also doesn't establish an exact equality between population means.

## Check a mean with Henderson–Hasselbalch

A mean-charge question needs fractions instead of rounding each group to its favored integer. For a group with the specified pKa:

```text
Fraction protonated = 1 / (1 + 10^(pH − pKa))

Mean contribution of a basic group (+1 when protonated):
  +1 / (1 + 10^(pH − pKa))

Mean contribution of a carboxyl group (−1 when deprotonated):
  −1 / (1 + 10^(pKa − pH))
```

Multiply each contribution by its group count and add. Caps contribute zero. The [Carnegie Mellon biochemistry solution key](https://www.andrew.cmu.edu/course/03-231/psetF05/PSET02/PS02ans.pdf) demonstrates a protonated-fraction calculation; [OpenStax's buffer chapter](https://openstax.org/books/chemistry-2e/pages/14-6-buffers) gives the underlying Henderson–Hasselbalch relation.

For **free-ended K–A–D at pH 7**, using N 9.0, C 2.0, K 10.0, and D 4.0:

```text
Mean charge = N-terminal + C-terminal + K side chain + D side chain
            ≈ 0.990099 − 0.999990 + 0.999001 − 0.999001
            ≈ −0.009891
```

That small negative mean is consistent with a predominant-form integer charge of 0. It describes the population's balance of charge states; it doesn't give an individual peptide a charge of −0.009891.

For both-capped H–H at pH 6, each basic-group term is 1/(1 + 1) = +0.5. Adding the two terms gives +1, matching the explicit distribution in exercise 6. The distribution tells you how common each whole-peptide charge is; the mean alone doesn't provide that information.

## Turn the missed step into a small review prompt

After trying the worksheet, mark the first incorrect ledger entry. A wrong terminal state needs a different reminder from an omitted second lysine or a mean mistaken for one molecule's charge.

For example, a useful card front is: “At pH 7, N-acetylated K–A–D has a free C-terminus. Use C pKa 2.0, K 10.0, D 4.0. Which ionizable groups remain?” The back can list the free C-terminal group, K side chain, and D side chain, with the N cap contributing zero. If the mistake was counting the groups, practice that inventory before adding a separate charge-calculation prompt.

The [guide to making better flashcards](/blog/how-to-make-better-flashcards/) has more examples of keeping one clear task on a card. For the next paper attempt, change one condition—pH or one terminal cap—and rebuild the ledger before checking the answer.

*AI tools contributed substantially to the research and writing and generated the illustration. Charge arithmetic was independently checked with automated calculations against the stated teaching model. These are educational model answers, not measured charges of real peptides.*
