---
title: "Quantum Numbers Practice with Worked Answers"
description: "Work through seven quantum numbers practice problems. Check allowed sets, count orbitals and electron states, and spot Pauli violations."
date: "2026-11-10"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/dce00f3e222aebe61c65e483080787bfbe1a2171e0e5b3d499bf706a43ba06c1.webp"
keywords:
  - "quantum numbers practice"
  - "allowed quantum numbers"
  - "quantum numbers practice problems"
  - "count orbitals"
---

In the fourth shell, two different orbitals can have the same magnetic quantum number mₗ = −2. Each of those orbitals has two possible spin projections, so the same givens describe two orbitals or four possible electron states. The way to keep those counts straight is to write down what the question fixes and list what can still vary.

![A volunteer placing a scallop shell into a felt-lined tray with paired spaces, some filled and some empty](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/dce00f3e222aebe61c65e483080787bfbe1a2171e0e5b3d499bf706a43ba06c1.webp)

## Check a set from left to right

Read the four quantum numbers as **(n, l, mₗ, mₛ)**. The second symbol is a lowercase L. Start with n because it limits l, and l in turn limits mₗ.

| Symbol | What it tells you | Allowed values |
| --- | --- | --- |
| n, principal quantum number | Which shell | Any positive integer |
| l, angular momentum quantum number | Which subshell within that shell | Integers from 0 through n − 1 |
| mₗ, magnetic quantum number | Which orbital within that subshell | Integers from −l through +l |
| mₛ, spin projection quantum number | The electron's spin projection along the chosen axis | +½ or −½ |

The subshell letters **s, p, d, f** correspond to **l = 0, 1, 2, 3**. For example, **3p** gives n = 3 and l = 1. The set **(3, 1, 0, +½)** picks the mₗ = 0 orbital and one of its two spin projections. Here, an allowed electron state means one allowed set of all four numbers. [OpenStax Chemistry on the four quantum numbers](https://openstax.org/books/chemistry-2e/pages/6-3-development-of-quantum-theory) · [OpenStax College Physics on spin projection](https://openstax.org/books/college-physics-2e/pages/30-8-quantum-numbers-and-rules)

Try **(3, 1, +2, −½)**. The first two values work. With l = 1, mₗ can only be −1, 0, or +1. That's where the set fails. To repair it while keeping the 3p subshell, change mₗ to one of those three values.

## Count orbitals when some numbers are fixed

Keep the given values fixed and list the missing ones that fit. Count **distinct triples (n, l, mₗ)** for orbitals and **distinct sets (n, l, mₗ, mₛ)** for allowed electron states.

Take **n = 4** and **mₗ = −2** from the opening. Start with the l values in the fourth shell, 0 through 3. Cross out 0 and 1 because neither range for mₗ reaches −2. Write one row for each remaining orbital.

| Subshell | Matching orbital (n, l, mₗ) | Possible mₛ values |
| --- | --- | --- |
| 4d | (4, 2, −2) | +½, −½ |
| 4f | (4, 3, −2) | +½, −½ |

There are **two orbitals and four allowed electron states**. The two rows have the same mₗ but different l values, so each counts as a separate orbital. If the problem also gives **mₛ = +½**, keep both rows and cross out −½ in each. You still have two orbitals, with **two allowed states** across them.

For a **whole subshell**, the integers from −l to +l give **2l + 1 orbitals**, including the one at mₗ = 0. For a **whole shell**, add the subshell counts. For n = 4, that's 1 + 3 + 5 + 7 = 16. The sum is **n² orbitals** for any full shell. When spin projection is free to vary, each orbital contributes two allowed states. [Purdue's shell and subshell counts](https://chemed.chem.purdue.edu/genchem/topicreview/bp/ch6/quantum.html)

## What two electrons can share

Two individually valid sets can still violate the **Pauli exclusion principle** as a pair. Electrons in the same atom must differ in at least one of the four numbers. If two share an orbital, the first three numbers already match. They must have opposite spin projections, which gives each orbital a capacity of two electrons. [OpenStax on the Pauli exclusion principle](https://openstax.org/books/college-physics-2e/pages/30-9-the-pauli-exclusion-principle)

The 3p subshell has three orbitals, so it can hold six electrons. If an electron configuration says **3p²**, the superscript says that two electrons occupy the subshell.

## Quantum numbers practice problems

Try these on paper before scrolling to the answers. For counting questions, write down whether you're counting orbitals, allowed states, or electrons.

1. Which sets are allowed? For each invalid set, name the first number that fails its rule.\
   **A** (3, 2, −2, +½) · **B** (2, 2, 0, −½) · **C** (4, 1, −2, +½)\
   **D** (4, 3, 0, 0) · **E** (0, 0, 0, +½) · **F** (2, 1, 0, −½)
2. List the mₗ values for **4f**. How many orbitals and allowed electron states does the subshell have?
3. How many orbitals are in the **n = 3 shell**? How many electrons could that shell hold at most?
4. Fix **n = 5** and **mₗ = +2**. List the matching orbital triples. How many orbitals and allowed electron states match? How many states remain if you also fix **mₛ = −½**?
5. Fix **n = 3** and **mₗ = −3**. How many orbitals match?
6. One electron has **(3, 1, 0, +½)**. For each proposed second electron in the same atom, decide if it would share the first electron's orbital and if the pair would violate Pauli.\
   **A** (3, 1, 0, −½) · **B** (3, 1, 0, +½) · **C** (3, 1, +1, +½)
7. An electron configuration includes **4d³**. How many electrons are in 4d, and how many could it hold? Which quantum numbers can you read from 4d³ for an electron in that subshell?

## Worked answers

1. **A and F are allowed.** In A, n = 3 permits l = 2, so −2 is the lowest possible mₗ. In F, n = 2 permits l = 1, and 0 falls in the mₗ range. Both spin projections are allowed. **B fails at l**, which can be at most 1 for n = 2. **C fails at mₗ**, whose allowed range is −1 through +1 for l = 1. **D fails at mₛ** because the choices are ±½. **E fails at n** because shells start at 1.
2. **Seven orbitals and 14 allowed states.** In 4f, l = 3. List −3, −2, −1, 0, +1, +2, and +3. If you counted six orbitals, check whether you included zero. Each orbital contributes two states.
3. **Nine orbitals with room for 18 electrons.** The 3s, 3p, and 3d subshells contribute 1 + 3 + 5 orbitals. Each holds up to two electrons. An answer of five orbitals counts only 3d.
4. **Three orbitals and six allowed states.** The triples are (5, 2, +2), (5, 3, +2), and (5, 4, +2). Lower l values can't reach +2. Each triple gives two spin choices. With mₛ fixed at −½, there are **three allowed states** across the same three orbitals.
5. **Zero orbitals.** For n = 3, l can be at most 2. To reach mₗ = −3, you'd need l of at least 3.
6. **A shares the orbital and satisfies Pauli** because the spin projections differ. **B shares the orbital and violates Pauli** because all four values match. **C would occupy a different orbital and satisfies Pauli** because its mₗ differs. Matching spin projections are allowed in different orbitals.
7. **Three electrons occupy 4d, which can hold ten.** The superscript gives the occupancy, and 4d gives n = 4 and l = 2. The five d orbitals can each hold two electrons. Assigning mₗ and mₛ to an individual electron requires more information.

## Make a flashcard from a mistake

If you missed a question, put the decision you got wrong on the front of a card. Try to recall the rule before turning it over. After a gap, answer a fresh version with different numbers.

| Front | Back |
| --- | --- |
| If n = 2, can l = 2? | No. The largest l is n − 1 = 1. |
| If n = 4 and mₗ = +2, which l values fit? | 2 and 3. Each range for mₗ must include +2. |
| Two electrons in one atom share n, l, and mₗ. Which number must differ? | mₛ. They need opposite spin projections. |

For problems that ask you to assign electrons to subshells for a particular atom or ion, use the [electron configuration practice worksheet](/blog/electron-configuration-practice/).

*AI drafted this worksheet. Its quantum-number rules were checked against OpenStax and Purdue, and the answer counts were verified by enumeration.*
