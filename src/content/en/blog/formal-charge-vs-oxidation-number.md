---
title: "Formal Charge vs Oxidation Number: Worked Examples and Practice"
description: "Compare formal charge and oxidation number using the same structures, check both totals, and practice spotting the electron-counting mistake."
date: "2026-09-30"
image: "/blog/formal-charge-vs-oxidation-number.png"
keywords:
  - "formal charge vs oxidation number"
  - "formal charge vs oxidation state"
  - "how to calculate formal charge"
  - "oxidation number practice"
  - "ammonium formal charge"
---

Nitrogen in ammonium, NH₄⁺, has a formal charge of +1 and an oxidation number of −3. Same atom, same ion, opposite signs. The difference comes from how you assign the bonding electrons: **formal charge splits every bond equally; oxidation number assigns a bond between different elements to the more electronegative atom.**

Keep the Lewis structure fixed, change the allocation rule, and label each result. These are two ways of counting electrons on paper; the molecule hasn't changed. A correct total charge won't tell you whether you used the right method.

![Two people compare four wooden counters split evenly between two compartments with four placed in one compartment](/blog/formal-charge-vs-oxidation-number.png)

## Start with the electron assignment

These examples cover ordinary main-group molecules and ions whose electrons are all paired, also called closed-shell species. Coordination chemistry needs additional care and is outside this guide.

| What you assign | Formal charge | Oxidation number |
| --- | --- | --- |
| Lone-pair electrons | Keep them on their atom | Keep them on their atom |
| Bond between different elements | Give half to each atom | Give all to the more electronegative atom |
| Bond between identical elements | Give half to each atom | Give half to each atom |
| Typical use | Assess Lewis structures and their charge placement | Track oxidation and reduction |

“Oxidation state” and “oxidation number” mean the same thing here. The rule follows the [IUPAC definition](https://goldbook.iupac.org/terms/view/O04365). Electronegativity describes attraction for bonding electrons; below, F > O > N > C > H.

For either calculation, subtract assigned electrons from the neutral atom's valence count: H = 1, C = 4, N = 5, O = 6, F = 7.

For formal charge, this becomes:

**Formal charge = valence electrons − nonbonding electrons − ½(bonding electrons).**

A lone pair contributes **two** nonbonding electrons. A single bond contains two bonding electrons, a double bond four, and a triple bond six. Count electrons in this formula, not just neighboring atoms. [OpenStax's formal-charge lesson](https://openstax.org/books/chemistry-2e/pages/7-4-formal-charges-and-resonance) explains the equal-sharing convention.

For oxidation number, keep the nonbonding count and replace the half-share of bonding electrons with the amount assigned by electronegativity. For every bond, decide whether the chosen atom gets all its electrons, none, or half.

## NH₄⁺: why nitrogen gets +1 and −3

Ammonium has 5 + 4 × 1 − 1 = **8 valence electrons**, subtracting one for its positive charge. Its Lewis structure has four N–H single bonds and no lone pairs. All eight electrons are in bonds.

| Calculation on N | Electrons assigned to N | Result |
| --- | --- | --- |
| Formal charge | Half of eight bonding electrons = 4 | 5 − 4 = **+1** |
| Oxidation number | All eight bonding electrons, since N is more electronegative than H | 5 − 8 = **−3** |

Each hydrogen gets one electron under equal sharing, so its formal charge is 1 − 1 = 0. Under the oxidation-number rule, hydrogen gets none of the N–H bonding electrons, so its oxidation number is 1 − 0 = +1.

Both totals reproduce the ion's charge:

- Formal charges: +1 + 4(0) = **+1**.
- Oxidation numbers: −3 + 4(+1) = **+1**.

A “formal charge of −3 because nitrogen attracts the electrons more strongly” uses the oxidation-number rule. The label and allocation rule don't match.

## CO₂: a double bond changes the count

Use **O=C=O**, with two lone pairs on each oxygen and none on carbon: eight bonding electrons and eight lone-pair electrons.

For formal charge, carbon is assigned half the bonding electrons: 4 − 0 − 8/2 = **0**. For oxidation number, all C=O bonding electrons are assigned to the more electronegative oxygens. Carbon is assigned zero valence electrons: 4 − 0 = **+4**.

Now choose either oxygen. It has four nonbonding electrons and four electrons in its double bond:

- Formal charge: 6 − 4 − 4/2 = **0**.
- Oxidation number: oxygen keeps its four lone-pair electrons and receives all four from C=O, giving 6 − 8 = **−2**.

The formal-charge total is 0 + 2(0) = 0. The oxidation-number total is +4 + 2(−2) = 0.

If you calculated oxygen's formal charge as 6 − 2 − 2 = +2, you counted two lone pairs as two electrons. They contain four electrons.

For [electron and molecular geometry](/blog/electron-geometry-vs-molecular-geometry/), a double bond is one domain. Here, its four electrons matter.

## OH⁻ and H₂O₂ expose the oxygen shortcut

For hydroxide, **OH⁻**, draw one O–H single bond and three lone pairs on oxygen. Hydrogen has no lone pairs.

Oxygen's formal charge is 6 − 6 − 2/2 = **−1**. Its oxidation number is 6 − (6 + 2) = **−2**, because oxygen receives both O–H bonding electrons. Hydrogen has formal charge 0 and oxidation number +1. The two totals are −1 + 0 = −1 and −2 + 1 = −1.

Draw hydrogen peroxide as **H–O–O–H**, with two lone pairs on each oxygen and none on hydrogen.

For either oxygen:

- Formal charge: four nonbonding electrons plus half of four bonding electrons gives 6 − 4 − 2 = **0**.
- Oxidation number: keep four lone-pair electrons, take both electrons from O–H, and take one from O–O. That gives 6 − (4 + 2 + 1) = **−1**.

The O–O bonding electrons are divided equally even for oxidation numbers. Each hydrogen has oxidation number +1, so 2(−1) + 2(+1) = 0. All formal charges are zero.

“Oxygen is −2” is an oxidation-number shortcut with exceptions, including peroxides and oxygen bonded to fluorine. [OpenStax lists these exceptions](https://openstax.org/books/chemistry-2e/pages/4-2-classifying-chemical-reactions). That shortcut doesn't give formal charge.

## Check the total, then check the method

Both assignments distribute every valence electron once, so **each set must sum to the species' net charge**. A wrong total reveals a problem. But swapping the complete formal-charge and oxidation-number columns would still pass every sum check above.

Neither number is a measured partial charge. Partial charges describe electron distribution using a specified model; neither calculation here determines them. Carbon's oxidation number of +4 in CO₂, for example, doesn't mean the molecule contains a free C⁴⁺ ion.

Formal charges belong to a particular Lewis structure. If resonance forms are possible, specify which one you're using before counting. See OpenStax's [formal-charge and resonance discussion](https://openstax.org/books/chemistry-2e/pages/7-4-formal-charges-and-resonance).

## Practice choosing the rule

Work on paper before reading the answers. For each calculation, record the atom, its nonbonding electrons, the bonding electrons assigned to it, and the requested quantity.

1. **Calculate both.** In methanal, H₂C=O, carbon has two C–H single bonds and one C=O double bond. Oxygen has two lone pairs; carbon and hydrogen have none. Find carbon's formal charge and oxidation number.
2. **Correct the explanation.** In NH₃, nitrogen has three N–H single bonds and one lone pair. A student writes, “Nitrogen's oxidation number is 5 − 2 − 3 = 0.” Which allocation rule did they use, and what is the requested answer?
3. **Handle the exception.** In OF₂, use F–O–F with two lone pairs on oxygen and three on each fluorine. Find oxygen's formal charge and oxidation number, then check both whole-molecule totals.
4. **Reject an incomplete check.** Someone assigns H₂O₂ the oxidation numbers H = +2 and O = −2. Their sum is zero. Explain why that doesn't make the assignments correct.

### Answers with the electron counts

1. **Carbon: formal charge 0, oxidation number 0.** Equal sharing assigns carbon four of its eight bonding electrons: 4 − 4 = 0. Oxidation accounting gives it all four electrons from C–H and none from C=O: again 4 − 4 = 0. Matching answers are possible even when the allocation differs.
2. **They calculated formal charge. Nitrogen's oxidation number is −3.** The “3” assigns one electron from each N–H bond to N. For oxidation number, N instead receives all six bonding electrons, plus its two lone-pair electrons: 5 − (2 + 6) = −3.
3. **Oxygen: formal charge 0, oxidation number +2.** Formal charge is 6 − 4 − 4/2 = 0. Fluorine receives both electrons from each O–F bond, leaving oxygen its four lone-pair electrons: 6 − 4 = +2. Each fluorine has formal charge 7 − 6 − 1 = 0 and oxidation number 7 − 8 = −1. The totals are 0 + 0 + 0 = 0 and +2 − 1 − 1 = 0.
4. **The allocation is wrong despite the correct total.** Each H receives zero electrons under oxidation accounting, so 1 − 0 = +1, not +2. Each O receives seven: four nonbonding, two from O–H, and one from O–O. Its oxidation number is −1. A total can hide compensating errors.

## Turn the mistake into a review prompt

Keep full calculations in your paper practice. For recurring mistakes, review the decision behind the arithmetic:

| Front | Back |
| --- | --- |
| N in NH₄⁺ has four single bonds and no lone pairs. Why can its formal charge be +1 and its oxidation number −3? | Equal sharing assigns N four electrons: 5 − 4 = +1. Oxidation accounting assigns it all eight: 5 − 8 = −3. |
| H–O–O–H has two lone pairs on each O. How many electrons does one O receive for oxidation number? | Seven: four nonbonding + two from O–H + one from O–O. Thus 6 − 7 = −1. |
| Both columns sum to the species charge. Does that prove the formal-charge and oxidation-number labels are correct? | No. Both methods must pass that check. Inspect how the bonding electrons were assigned. |

Use these on paper or add them to Nibomo with the [getting-started guide](/docs/getting-started/). For more ideas, see the [chemistry flashcard guide](/blog/how-to-use-flashcards-for-advanced-chemistry/). Then return to a fresh structure and calculate both quantities without the answer visible.
