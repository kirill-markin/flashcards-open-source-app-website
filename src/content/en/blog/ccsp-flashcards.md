---
title: "CCSP Flashcards in 2026: Study the August 1 Exam Outline"
description: "Build CCSP flashcards for the August 1, 2026 outline: average domain weights, revised AI/ML coverage, decision cards, practice misses, and FSRS review."
date: "2026-07-18"
image: "/blog/ccsp-flashcards.png"
keywords:
  - "CCSP flashcards 2026"
  - "CCSP flashcards"
  - "CCSP exam changes 2026"
  - "CCSP August 2026 exam outline"
  - "how to study for CCSP"
  - "CCSP AI and ML topics"
  - "CCSP study plan 2026"
  - "CCSP practice test flashcards"
  - "FSRS CCSP study"
---

A CCSP appointment on July 31 and one on August 1 require different study outlines. As of July 18, 2026, the revision is not live yet: use the October 2025 outline through July 31 and the revised outline for exams on or after August 1. Useful **CCSP flashcards in 2026** cover roles, close distinctions, control choices, sequences, and recurring practice misses. Keep stable concepts in one main deck, add a compact August update, and leave full scenario judgment to authorized practice questions.

![A hand adds an August update card to six CCSP cloud security domain cards on a warm wooden desk](/blog/ccsp-flashcards.png)

## Choose the CCSP outline by your exam date

ISC2's [CCSP exam-outline page](https://www.isc2.org/certifications/ccsp/ccsp-certification-exam-outline) currently links both versions and says the new outline takes effect on August 1, 2026.

| Your scheduled test date | Outline to use |
| --- | --- |
| On or before July 31, 2026 | [October 1, 2025 CCSP outline](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/MAR-EXAMS-CCSP-Exam_Outline-English-10012025---FINAL.pdf) |
| On or after August 1, 2026 | [August 1, 2026 CCSP outline](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/EXAMS-CCSP-Exam-Outline-English-01-2026-V2.pdf) |

Use the appointment date rather than the day you bought a course or started studying. If you reschedule across August 1, audit every outline-dependent card before continuing. Stable concepts such as RTO versus RPO may survive unchanged; cards about domain weights, named examples, or subdomain coverage need a new source check.

## Use the six August 2026 average weights as a coverage check

ISC2's [June 30 refresh announcement](https://www.isc2.org/Insights/2026/06/isc2-ccsp-exam-outline-revised) says the domains, weights, and subdomains were revised. The official outline labels these percentages as average weights:

| Domain | August 2026 average weight | Sensible flashcard focus |
| --- | ---: | --- |
| 1. Cloud Concepts, Architecture and Design | 17% | roles, service models, design principles, provider evaluation, AI/ML concepts |
| 2. Cloud Data Security | 20% | data lifecycle, storage, protection methods, classification, retention, AI/ML data |
| 3. Cloud Platform and Infrastructure Security | 17% | components, resilience, controls, risk treatment, BC/DR |
| 4. Cloud Application Security | 16% | SDLC, threat modeling, testing, supply chain, APIs, IAM, LLM application risks |
| 5. Cloud Security Operations | 17% | hardening, monitoring, operational controls, forensics, incident response |
| 6. Legal, Risk and Compliance | 13% | privacy, audits, data roles, risk treatment, contracts, jurisdiction |

The first three domains and Domain 6 keep their prior average weights. Domain 4 moves from 17% to 16%, while Domain 5 moves from 16% to 17%. The percentages are useful for planning, but they do not promise a fixed number of exam items in each domain.

If your deck has about 100 high-value cards, 17/20/17/16/17/13 is a quick way to spot a glaring imbalance. It is a first pass, not a quota. A weak Domain 6 may need more cards than a familiar Domain 2, and one clear distinction card can cover more useful ground than five copied definitions.

## AI already appeared in the CCSP outline

Calling August “the update that added AI” would be inaccurate. The [October 2025 outline](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/MAR-EXAMS-CCSP-Exam_Outline-English-10012025---FINAL.pdf) already names machine learning and AI in Domain 1 and AI-assisted monitoring in Domain 5. The [August 2026 outline](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/EXAMS-CCSP-Exam-Outline-English-01-2026-V2.pdf) elevates AI/ML into a dedicated Domain 1 subdomain, adds dedicated dataset and model protection in Domain 2, and revises material across all six domains:

- Domain 1 gains a dedicated AI/ML subdomain covering cloud threat detection and analysis, source-data validation and verification, SOAR, ethics, and regulatory requirements. The surrounding examples also make secure-by-design, isolation, immutable architecture, and hardening more explicit.
- Domain 2 gains a subdomain for the privacy and security of AI/ML datasets and models. Storage examples, data tagging, hashing uses, and legal-hold detail are also expanded.
- Domain 3 sharpens resilience examples and uses the broader idea of risk treatment rather than only risk mitigation.
- Domain 4 now names OWASP resources for application, API, and LLM risks; makes SAST, DAST, CI/CD, supply-chain integrity, Docker, Kubernetes, and certificate management explicit; and drops to 16%.
- Domain 5 rises to 17% and adds or expands secure-by-default configuration, segmentation, operational standards, threat intelligence, incident response, and penetration testing.
- Domain 6 gives more specific privacy-law, cloud-forensics, audit, data-role, data-ownership, and contract-security examples.

These are changes to the public study boundary. Some lines are new, some are more specific, and some are renamed. An omitted example does not prove that a concept was removed from the exam.

The LLM reference needs the same restraint. Revised Domain 4 names the “Top 10 for Large Language Model Applications,” but ISC2 does not specify an edition or list individual LLM risks. The current [OWASP Top 10 for LLM and generative-AI applications](https://genai.owasp.org/llm-top-10/) names prompt injection, sensitive information disclosure, supply-chain weaknesses, data and model poisoning, and improper output handling. Those names come from OWASP. Use them to study risk and control boundaries without turning the whole application domain into a Top 10 memorization exercise.

## Build one narrow deck instead of transcribing the outline

The official weights are good for organization and bad as a copy-paste queue. A line such as “cloud shared considerations” can produce dozens of vague cards if every nearby word becomes a definition.

Keep one main deck, then use tags that answer practical questions:

- domain: `d1` through `d6`
- card purpose: `role`, `distinction`, `control-choice`, `sequence`, or `practice-miss`
- source state: `october-2025`, `august-2026`, or `stable`
- review state: `needs-source-check`, `needs-rewrite`, or `high-value`

Add a card when you cannot explain a listed concept, confuse two plausible choices, forget the order of a process, or repeat the same authorized-practice mistake. Skip material you can already retrieve and apply. The same narrow-deck principle appears in the [Security+ flashcards guide](/blog/how-to-use-flashcards-for-security-plus/), while the [AWS Solutions Architect guide](/blog/how-to-use-flashcards-for-aws-solutions-architect-associate/) has more examples of turning technical trade-offs into cards.

## Make useful cards across all six CCSP domains

Every prompt below is an original study example based on public topic boundaries. None is copied or recalled from a live exam.

### Domain 1: ask who owns the decision

Role and responsibility cards fit Cloud Concepts, Architecture and Design. Keep the service model and decision clue visible.

- Front: Before accepting a cloud provider's security claim, what two checks keep the evaluation concrete?
- Back: Match the claim to defined requirements, then verify the relevant provider or product evidence against those requirements.

For August candidates, add single-target AI/ML prompts:

- Front: What should be checked before an ML system's threat-detection output is trusted?
- Back: Validate and verify the data sources feeding the analysis.

That prompt comes directly from the revised topic boundary without turning five AI bullets into one hard-to-grade list.

### Domain 2: separate similar protection methods

Cloud Data Security produces many close terms. Distinction cards expose whether the choice is clear.

- Front: What separates tokenization from encryption when protecting a sensitive value?
- Back: Tokenization substitutes a reference token while the original value stays in a protected mapping system. Encryption transforms the value and requires the appropriate key to recover it.

The August delta also deserves a model-focused card:

- Front: Which two checks does revised Domain 2.9 call out for both AI/ML datasets and models?
- Back: Privacy and security. For security, the outline gives validation and verification as examples.

### Domain 3: retrieve the constraint that changes the design

Infrastructure questions become easier when a card forces one operational constraint into view.

- Front: A service must return within four hours and can lose at most 15 minutes of data. Which value is the RTO, and which is the RPO?
- Back: The four-hour restoration target is the RTO. The 15-minute data-loss window is the RPO.

A follow-up control-choice card can ask which architecture reduces the stated outage or data-loss risk. Keep the answer tied to a specific requirement rather than claiming that one design is always best.

### Domain 4: connect a vulnerability to the control boundary

Application Security cards should cover SDLC choices, testing methods, APIs, IAM, software supply chains, and the newly explicit LLM risk reference.

- Front: Why is raw LLM output unsafe to pass directly into a command, query, or browser action?
- Back: The output is untrusted input to the next component. Validate, sanitize, constrain, and authorize downstream actions for that component.

This is a control-oriented way to study OWASP's improper-output-handling category. Keep prompt injection, data poisoning, excessive agency, and other LLM risks on separate cards when you actually confuse their boundaries.

### Domain 5: learn operational order and evidence handling

Cloud Security Operations rewards sequence cards because a technically sensible action can still be wrong when performed in the wrong order.

- Front: What must an incident responder coordinate before changing a cloud resource that may contain evidence?
- Back: Containment and evidence preservation under the approved process. Document the state, preserve relevant evidence, maintain chain of custody, and record authorized changes.

Another useful distinction is incident response versus ordinary incident management. The August outline explicitly names incident response, threat intelligence, and penetration testing under security operations, so old Domain 5 cards deserve a quick audit.

### Domain 6: attach legal answers to jurisdiction and contract

Legal, Risk and Compliance cards become dangerous when they present one universal legal answer. Write the governing context into the prompt.

- Front: Which contract terms matter when a cloud customer needs evidence access and an orderly exit?
- Back: Check rights to audit, access to cloud data, metrics and assurance, termination terms, data ownership, and security requirements under the applicable agreement and law.

For data-role cards, avoid merging owner, controller, custodian, processor, and steward into two interchangeable pairs. The August outline now lists those roles separately. Learn what each role decides or performs in the framework being studied.

## Create a temporary August delta deck

Candidates testing from August 1 onward can keep stable cards and add a small `CCSP August 2026 delta` deck. Build it from the two official PDFs, not from a third-party summary.

1. Tag every card whose answer depends on a weight, named framework, subdomain, or example list.
2. Add focused cards for new subdomains 1.6 and 2.9.
3. Audit Domain 4 for the explicit API, LLM, testing, supply-chain, and orchestration details.
4. Audit Domain 5 for its 17% weight and revised operations examples.
5. Check Domains 3 and 6 for changed risk, resilience, privacy, forensics, data-role, and contract wording.
6. Put the source URL and verification date in your study notes, then merge durable cards into the main deck after the exam.

Candidates testing by July 31 do not need to replace their final review plan with this delta. Save the August material for later professional learning unless it also helps a current-outline concept.

## Convert authorized practice misses into decision cards

A practice miss is useful because it exposes the clue or principle that failed under pressure. Copying the entire question, answer options, and explanation creates a bulky card and may violate the material's terms.

Use licensed or otherwise authorized practice and keep a short miss log:

1. Record the domain and the decision you made.
2. Verify the correction against the authorized explanation and a trusted source.
3. Write why the wrong option looked plausible.
4. Extract one reusable clue, distinction, or sequence.
5. Draft the card in your own words.
6. Test the lesson on a different authorized scenario.

Suppose a practice scenario reveals that you chose a control before identifying who owned the responsibility. The resulting card can be:

- Front: Before selecting a control in a shared-responsibility scenario, which facts should I identify?
- Back: The service model, the assets and data involved, the parties' assigned responsibilities, and the requirement the control must satisfy.

That card preserves the decision pattern without reproducing protected exam content. ISC2's [exam non-disclosure agreement](https://www.isc2.org/exams/non-disclosure-agreement) says candidates may not disclose or discuss exam questions, items, or answers without written approval. Use a private source label such as `authorized-practice-set-2` only if the material's terms allow your note. Skip dumps, recollections, and any prompt presented as a live exam item.

The detailed [practice-question conversion workflow](/blog/how-to-turn-practice-questions-into-flashcards/) covers fact gaps, distinctions, sequences, and trap patterns in more depth.

## Keep retrieval cards separate from full scenario practice

The revised outline says the CCSP remains a three-hour CAT exam with 100–150 items and multiple-choice and advanced item types. Those facts appear in the [August 2026 official outline](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/EXAMS-CCSP-Exam-Outline-English-01-2026-V2.pdf).

Flashcards can make a role, control boundary, legal term, or recovery metric easier to retrieve. They do not recreate a full scenario with incomplete facts, several defensible controls, changing business priorities, and a time limit.

Use both layers:

- flashcards for atomic knowledge and recurring decision clues
- authorized practice questions for end-to-end judgment
- hands-on or work examples for operational context
- the official outline for coverage and current terminology

A card tells you whether the principle was available. A fresh scenario shows whether you can choose and apply it.

## Use FSRS without turning the schedule into another exam

FSRS handles review timing after you decide which cards deserve repeated retrieval. It does not understand the CCSP weights, verify technical accuracy, or know your appointment date.

A practical **CCSP study plan for 2026** looks like this:

1. Review due cards before adding another source batch.
2. Add a small number of cards from one domain or one practice set.
3. Rate the answer you actually retrieved.
4. Rewrite cards that are ambiguous or repeatedly difficult to grade.
5. Reduce new cards as the exam approaches and spend more time on mixed scenarios.
6. Keep the August delta visible until its new material has entered normal review.

Do not press a harder rating merely to force a shorter interval. If the queue grows faster than you can finish it on an ordinary day, cut low-value cards or lower the new-card load. [How to Study for an Exam With FSRS](/blog/how-to-study-for-an-exam-with-fsrs/) explains the build, stabilization, and final-review phases. [How Many New Flashcards Per Day](/blog/how-many-new-flashcards-per-day/) helps estimate a load from available time rather than an impressive card count.

## Where Flashcards Open Source App fits

[Flashcards Open Source App features](/features/) include front/back card creation, AI chat with workspace data and supported file attachments, and FSRS review with Again, Hard, Good, and Easy ratings.

For CCSP preparation, keep its role modest. Write a source-checked outline note or an authorized-practice miss log, use AI chat to draft a few single-target cards, then compare every draft with the official source and edit it yourself. Review the cards you keep with FSRS. Continue using authorized providers for complete scenario practice.

The [Getting Started guide](/docs/getting-started/) covers the hosted app and other supported setup paths.

## FAQ about CCSP flashcards in 2026

### Which CCSP outline applies in July 2026?

Use the October 1, 2025 outline for an exam on or before July 31, 2026. Use the revised outline for an exam on or after August 1, 2026.

### Did ISC2 only add AI topics?

No. AI/ML already appeared in Domain 1, and AI-assisted monitoring already appeared in Domain 5. The August outline gives AI/ML dedicated subdomains in Domains 1 and 2, adds the LLM reference in Domain 4, changes the average weights of Domains 4 and 5, and revises examples or wording across all six domains.

### Should I memorize every bullet in the official outline?

Use the bullets as a coverage map. Create cards for knowledge you cannot retrieve, distinctions you confuse, control choices you explain poorly, sequences you forget, and verified practice misses.

### Can CCSP flashcards replace practice questions?

No. Cards train retrieval of smaller targets. Authorized practice questions train complete scenario judgment, option comparison, pacing, and application under exam-like conditions.

### Can I keep using an older CCSP deck after August 1?

Yes, after an audit. Keep stable concepts, update outline-dependent cards, add the August delta, and remove claims that no longer match the official PDF.

## Start with the date, then build the smallest useful deck

Confirm the outline for your appointment, tag the six domains by their current weights, and create the August delta only if your test is on or after August 1. Add cards for roles, distinctions, controls, sequences, and verified misses. Let FSRS schedule those small retrieval targets while authorized practice questions carry the full scenario work.

That gives **CCSP flashcards in 2026** one clear job: keep the right cloud-security knowledge available when a difficult decision needs it.
