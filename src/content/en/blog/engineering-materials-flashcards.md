---
title: "Engineering Materials Flashcards: Properties and Selection"
description: "Learn engineering material properties through worked metal, ABS and PA6 selection cases. Compare manufacturing routes and practise with complete answers."
date: "2026-11-01"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/46c4446ea2840ffa8d8623a24ec556a26bf95499efba81cfbb301ac4266fc3b5.webp"
keywords:
  - "engineering materials flashcards"
  - "engineering material properties"
  - "material selection practice"
  - "materials and manufacturing processes"
---

A metal bracket bends too far under load, then springs back when unloaded. Choosing a steel with a higher yield strength doesn't, by itself, show that the bracket will bend less. The first question concerns elastic stiffness; permanent deformation is a separate check.

Useful **engineering materials flashcards** connect a remembered property to a decision: what should you check, and what evidence is still missing? A material name alone rarely finishes a selection problem.

The three cases below give engineering students and early-career technicians practice with those questions. They connect metals, plastics and manufacturing processes to the companion [Engineering Materials deck in English](/catalog/packages/engineering-materials-properties-processing/). Every worked answer is included here. The cases are original teaching scenarios, with no measured part results or supplier ranking.

![A student compares a folded-paper bridge and a sagging flat-paper bridge carrying wooden elephant toys](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/46c4446ea2840ffa8d8623a24ec556a26bf95499efba81cfbb301ac4266fc3b5.webp)

## Start with the behaviour you need to control

“Strong,” “stiff” and “tough” answer different questions. This comparison turns common observations into a useful evidence request.

| Observation or requirement | Property or behaviour to examine | Evidence that would help |
| --- | --- | --- |
| A part deflects too far and recovers after unloading | Elastic stiffness | Relevant material modulus, geometry and loading |
| A metal tab stays bent after an overload | Yield or proof strength | Exact alloy and condition, specified yield criterion, local stress |
| A housing cracks when dropped | Impact behaviour | Relevant impact method, temperature, notch, specimen geometry and orientation; a part-level drop check |
| A polymer support keeps deforming under a sustained load | Creep | Long-term data at the required stress, temperature and material condition |
| A polymer clip loses force while its deflection is held | Stress relaxation | Retained force or stress over the relevant time and conditions |
| A same-volume replacement must weigh less | Density | Density of the actual candidate; reassess volume if the design changes |

[Instron's modulus explanation](https://www.instron.com/en/resources/glossary/modulus-of-elasticity/) describes the elastic stress–strain relationship. Its [tensile-testing guide](https://www.instron.com/en/resources/test-types/tensile-test?region=US) explains yield strength and why a specified offset criterion may be needed. Keep stiffness and yielding separate. Its [impact handbook](https://www.instron.com/wp-content/uploads/2024/07/impact-handbook-1.pdf) explains why test conditions affect impact results.

For time-dependent polymer behaviour, [Rutland Plastics discusses sustained-load creep](https://www.rutlandplastics.co.uk/design-guidelines/design-for-time/), while [Instron describes stress relaxation](https://www.instron.com/en/resources/glossary/stress-relaxation/) as a reduction in stress during a held deformation. A clip that must keep gripping needs a different question from a shelf that must limit growing deflection.

## Write the requirements before the shortlist

A useful selection note names the part's job, the conditions and the proposed manufacturing route. For a bracket, that might mean maximum permitted deflection, load direction, mass limit, exposure, available space and production quantity. For a clamp, include how long it must hold its force and the temperature and moisture conditions.

Then give each candidate one of three decisions:

- **Keep for comparison:** the available evidence supports further investigation.
- **Reject for this requirement:** a mandatory constraint is demonstrably incompatible.
- **More information needed:** the relevant evidence is missing or incomparable.

Keep a candidate and its reason together: “B3S: needs long-term data for the service conditions.” A missing result is a question to resolve. It doesn't become a pass because another column looks encouraging.

## Case 1: a lighter metal bracket that still limits deflection

Suppose a bracket must weigh less while staying within its existing space and deflection limit. The present bracket recovers after unloading. Consider three proposals: stronger steel in the same shape, an aluminium alloy in the same shape, or a different section within the available space. Which proposals address mass, and which address deflection?

### Worked comparison

| Proposal | What it could address | Worked screening decision |
| --- | --- | --- |
| Use a higher-yield-strength steel in the same shape | Resistance to permanent deformation | Request modulus and density too. The stated strength improvement doesn't demonstrate either lower mass or lower elastic deflection. |
| Change to an aluminium alloy in the same shape | A possible mass reduction | Keep as a candidate, then check the exact alloy's density and modulus. A lighter same-size part must still meet the deflection limit. |
| Change the section within the permitted space | Component stiffness through geometry | Keep as a design option. Recalculate mass, deflection and stress, then check whether the section can be manufactured. |

**The worked answer is a shortlist, with no approved replacement yet.** For the same volume, compare densities to assess mass. For deflection, include modulus, shape, dimensions and loading. The [University of Illinois beam-deflection notes](https://mechref.engr.illinois.edu/sol/deflection.html) show how material stiffness, section geometry, loading and supports enter the calculation; [NIST defines density as mass divided by volume](https://www.nist.gov/pml/special-publication-811/nist-guide-si-chapter-8). Neither “aluminium” nor “steel” supplies the missing grade data.

The metal's condition belongs in that data request. Cold working can raise strength while reducing remaining ductility; an appropriate anneal may restore workability. These mechanisms are explained by the [University of Illinois metals resource](https://matse1.matse.illinois.edu/metals/prin.html) and [TWI's annealing guide](https://www.twi-global.com/technical-knowledge/faqs/what-is-annealing). If you anneal to make forming easier, recheck the required final strength. The process changes the condition you were comparing.

Add joining and exposure checks when they apply. A weld's [heat-affected zone](https://www.twi-global.com/technical-knowledge/faqs/what-is-the-heat-affected-zone) can change properties without melting. “Stainless” also doesn't guarantee immunity to a salty environment: [worldstainless describes chloride-related corrosion mechanisms](https://worldstainless.org/about-stainless/properties/corrosion-properties/). These are separate reasons a promising stiffness result might leave the material–process combination unqualified.

## Case 2: a housing changes from prototype to repeated production

Imagine a small instrument housing whose mounting holes still change between prototypes. The design team is considering metal prototypes followed by a moulded plastic version. Which route deserves an early quotation now, and what would a successful prototype establish about the later plastic part?

### Compare the route and the material together

For a few changing metal prototypes, **CNC machining from suitable stock deserves an early quotation**. It removes material to make the required geometry and avoids buying a dedicated production mould at this stage. [Dassault Systèmes explains the subtractive CNC route](https://www.3ds.com/make/guide/process/cnc-machining). Accessibility of the cuts, tolerances, stock, finishing and actual quotations still matter. This doesn't establish the cheapest route for every prototype.

After the design stabilizes, injection moulding becomes a candidate for repeated thermoplastic production. Tooling cost and production quantity belong in the comparison, as [TWI's injection-moulding guide](https://www.twi-global.com/technical-knowledge/faqs/what-is-injection-moulding) explains.

**INEOS Terluran GP-22 is a specific ABS candidate**, rather than an unspecified “ABS.” [INEOS lists it as a general-purpose injection-moulding grade with housing applications](https://www.ineos-styrolution.com/Product/Terluran-ABS-_Terluran-GP-22_SKU300600120827.html?SKU=300600120827&SelectedRegion=Region_America). That supports putting it on the housing shortlist. It doesn't establish that this instrument's wall sections, fasteners, drop requirement or exposure are acceptable.

**Quote the changing metal prototypes separately from the proposed plastic production run.** Compare total costs at the required quantities and assess the moulded grade against the housing requirements. A successful metal prototype can check aspects of fit and layout; it doesn't demonstrate the plastic version's impact performance or long-term behaviour. Changing both material and process creates a new combination to verify.

For the thermal-shaping distinction, use the separate [thermoplastic vs thermoset practice article](/blog/thermoplastic-vs-thermoset-practice/). Here, the extra question is whether a particular grade and process can make a part that does the job.

## Case 3: a PA6 clamp must keep its grip

A small moulded clamp holds a tube at an approximately fixed deflection for months. It operates warm, and its moisture exposure varies. A supplier suggests **BASF Ultramid B3S**. Is its short-term tensile table enough to establish that the clamp will keep gripping?

### Read the grade, then the test conditions

[BASF's B3S sheet, dated September 2026](https://download.basf.com/p1/8a8081c57fd4b609017fd636717a3e69/en/ULTRAMID%3Csup%3E%C2%AE%3Csup%3E_B3S_Product_Data_Sheet_Asia_PacificEurope_English.pdf?view=), identifies PA6, injection moulding and applications including fixing clamps. Its mechanical table separates **dry and conditioned** values and identifies test methods. The table heading specifies typical uncoloured-material data at 23°C **unless otherwise stated**; some impact rows specify colder temperatures. Read each property's labels and footnotes before recording it.

**No: keep B3S on the shortlist and request evidence for retained gripping force at the actual temperature, moisture state and duration.** The stated held deflection makes stress relaxation relevant. Short-term tensile results alone don't establish months of gripping performance. The sheet also lists a tensile creep modulus, but sustained-load creep data don't directly answer a held-deflection force-retention question. Check geometry and the produced part as well.

Don't substitute a glass-filled PA6 table because the family name matches. [BASF identifies B3EG6 as a glass-fibre-reinforced PA6 injection grade](https://pmtools-na.basf.com/products/dspdf.php?param=Ultramid+B3EG6&type=astm). It is another material candidate, requiring its own evidence. [BASF's Ultramid brochure](https://www.basf.com/dam/jcr%3A5bfdf5e3-5ec8-33bb-a216-9cd7c258a772/basf/www/cn/documents/en/chinaplas/Ultramid_brochure.pdf) also explains how fibre orientation affects properties, so moulding direction belongs in the comparison.

A compact datasheet note should preserve:

- manufacturer, exact grade, colour or reinforcement where relevant, and sheet revision;
- property name, units and test method;
- temperature, moisture conditioning and specimen direction;
- whether the result is short-term or long-term, and what duration it covers;
- what remains to be checked on the application.

BASF's B3S sheet says its data don't replace processors' own application investigations and tests or guarantee suitability. The defensible answer is “candidate awaiting relevant evidence,” with a clear next request.

## Try six questions before looking at the answers

These questions draw on the same distinctions as the English deck. Answer with the property, mechanism or missing evidence, rather than a familiar material name.

1. A metal tab returns to its original shape but deflects too far. Does a higher yield-strength claim resolve the complaint?
2. A bracket has the same volume after a proposed material change. Which property lets you compare its mass?
3. A cold-worked metal strip becomes difficult to form. Which treatment might restore workability, subject to an alloy-specific procedure?
4. A housing made in large repeat quantities is proposed for injection moulding. Which cost needs to be considered alongside the cost of each part?
5. A PA6 clamp holds a fixed deflection and loses gripping force. Which time-dependent behaviour should you investigate?
6. A data table gives dry PA6 properties, but the part operates after moisture conditioning. Can those entries be treated as the demonstrated conditioned properties?

### Answers

1. **No.** Examine elastic stiffness: the material's relevant modulus together with geometry and loading. Yield strength concerns permanent deformation under its specified criterion.
2. **Density.** Mass equals density multiplied by volume. If the design's volume changes, include that change too.
3. **An appropriate anneal.** It can restore ductility after cold work. Choose and verify the procedure for the actual alloy and required final condition.
4. **Tooling cost.** Include it in the total for the required production quantity; repeat production can spread that cost across more parts.
5. **Stress relaxation.** Under the stated held deflection, stress and gripping force can decrease with time. Request relevant duration, temperature and conditioning evidence.
6. **No.** Keep dry and conditioned states distinct. Obtain data for the relevant condition rather than relabelling a dry result.

## Use recall to improve the next selection problem

The [Engineering Materials flashcards](/catalog/packages/engineering-materials-properties-processing/) contain **96 English cards**, with 24 each on properties, metals, polymers and processing. They cover concept recall, selected situation-to-property or process questions, and interpretation of named ABS and PA6 grades. They aren't a complete materials course or an FE syllabus. For equation, unit and handbook practice, see the separate [FE flashcards guide](/blog/how-to-use-flashcards-for-the-fe-exam/).

Try answering before revealing the back, check the complete answer, and revisit missed distinctions over spaced reviews. [Retrieval experiments](https://pubmed.ncbi.nlm.nih.gov/16507066/) and [spacing research](https://pubmed.ncbi.nlm.nih.gov/19076480/) support these approaches for longer-term retention. They don't demonstrate that this particular deck qualifies someone to select a production material.

Use a card for a reusable distinction such as “held deflection → check stress relaxation.” Keep the full requirement sheet, calculations, supplier evidence and application tests with the selection exercise. When a new problem changes the load, geometry or exposure, work through the choice again.

*Production note: AI tools substantially assisted with research, writing and construction of these original teaching cases. The article is based on the cited technical sources and the English deck; no laboratory tests, production trials or learner-outcome study were performed. The illustration is AI-generated. Named products are examples, without manufacturer affiliation or endorsement.*
