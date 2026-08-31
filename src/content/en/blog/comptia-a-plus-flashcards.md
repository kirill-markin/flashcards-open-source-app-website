---
title: "CompTIA A+ Flashcards in 2026: Core 1, Core 2, and PBQs"
description: "Make useful CompTIA A+ flashcards for V15 Core 1 (220-1201), Core 2 (220-1202), troubleshooting, commands, and PBQ follow-up."
date: "2026-08-01"
image: "/blog/comptia-a-plus-flashcards.png"
keywords:
  - "CompTIA A+ flashcards"
  - "A+ Core 1 flashcards"
  - "A+ Core 2 flashcards"
  - "220-1201 flashcards"
  - "220-1202 flashcards"
  - "CompTIA A+ study guide 2026"
  - "CompTIA A+ PBQ practice"
  - "CompTIA A+ ports and commands"
  - "FSRS CompTIA A+ study"
---

A desktop forgets the time after you unplug it. A laptop gives itself a `169.254.x.x` address. A user can sign in but cannot edit a shared file. CompTIA A+ turns small clues like these into technician decisions, across two exams with up to 90 questions each.

Good **CompTIA A+ flashcards** make the clue, the decision, and the reason easier to retrieve. They are useful for ports, connectors, commands, symptoms, security concepts, and support procedures. They are much less useful for installing a drive, reading unfamiliar command output, or working through a multi-step performance-based question. Those still need a machine or lab.

![IT support learner sorting CompTIA A+ flashcards for Core 1 hardware and networking and Core 2 operating systems and security](/blog/comptia-a-plus-flashcards.png)

## Study the current CompTIA A+ V15 exams

As of August 1, 2026, the active A+ series is V15:

- Core 1: `220-1201`
- Core 2: `220-1202`

CompTIA launched both exams on March 25, 2025 and currently estimates retirement in 2028. You must pass both to earn A+. The official [Core 1 page](https://www.comptia.org/en-us/certifications/a/core-1-v15/) and [Core 2 page](https://www.comptia.org/en-us/certifications/a/core-2-v15/) are the safest places to recheck the codes before buying a voucher.

| Exam | Maximum questions | Time | Passing score |
| --- | ---: | ---: | ---: |
| Core 1 (`220-1201`) | 90 | 90 minutes | 675 on a 100–900 scale |
| Core 2 (`220-1202`) | 90 | 90 minutes | 700 on a 100–900 scale |

The exam pages list single- and multiple-response questions, drag-and-drop items, and performance-based questions. The objective PDFs use the shorter description “multiple-choice and performance-based.” Both descriptions refer to the same V15 exams.

There is another version number worth untangling. The current [Core 1 objectives PDF](https://lecbyo.files.cmp.optimizely.com/download/34be017cb73211ef8985a6f347fbf652) and [Core 2 objectives PDF](https://lecbyo.files.cmp.optimizely.com/download/cefedfb2b8a511ef809306d06d323538) identify themselves as **Exam Objectives Document Version 4.0**. That is the revision of the downloadable document; **V15** is the exam series. Use the exam codes and live CompTIA links as your anchor if the PDF revision changes again.

The retired `220-1101` Core 1 and `220-1102` Core 2 exams belong to V14. Some fundamentals carry over, but the old objectives are no longer a reliable checklist for the active exams.

## Split the deck by the job each core tests

Core 1 and Core 2 overlap in the life of a real support ticket, but their exam blueprints have different centers of gravity.

| Core 1 (`220-1201`) | Weight | Core 2 (`220-1202`) | Weight |
| --- | ---: | --- | ---: |
| Mobile Devices | 13% | Operating Systems | 28% |
| Networking | 23% | Security | 28% |
| Hardware | 25% | Software Troubleshooting | 23% |
| Virtualization and Cloud Computing | 11% | Operational Procedures | 21% |
| Hardware and Network Troubleshooting | 28% |  |  |

In practice, Core 1 asks you to connect devices, components, network behavior, and physical symptoms. Core 2 leans into operating-system tools, security, software failures, documentation, change control, and user support.

Use two decks, or put `core-1` or `core-2` on every card. Add the objective code when it makes the card easier to audit: `220-1201:5.6` for printer troubleshooting, for example. A source tag such as `lab-miss`, `practice-miss`, or `objective-check` explains why the card exists.

The percentages are a coverage check, not a card quota. If 28% of an exam covers one domain and your deck barely touches it, look closer. You do not need to manufacture dozens of cards for material you already retrieve and apply comfortably.

## Write A+ cards around one technician decision

A card should be easy to grade: you knew the answer before revealing it, or you did not. The cleanest A+ prompts usually ask for one of four things.

### Distinguish two close concepts

Core 1 puts interfaces, form factors, cables, network services, and cloud models close together. Ask for the boundary that prevents a real mistake.

```text
Front: Does “M.2 SSD” tell you whether the drive uses SATA or PCIe/NVMe?

Back: No. M.2 describes the form factor. Check the drive and motherboard
specifications for the supported interface and protocol.
```

```text
Front: What separates a Type 1 hypervisor from a Type 2 hypervisor?

Back: Type 1 runs directly on the host hardware. Type 2 runs on a host
operating system.
```

These cards are more useful than copying a definition because the prompt forces a choice.

### Connect a symptom to the next check

Troubleshooting cards need careful wording. A symptom rarely proves one cause.

```text
Front: A Windows client has a 169.254.x.x address and cannot reach the local
network. What does the address tell you, and what should you check next?

Back: The client assigned itself an APIPA address after it did not receive a
DHCP lease. Check its wired or wireless link, then its path to DHCP.
```

```text
Front: A desktop keeps an accurate clock while powered but loses the date and
time after all power is removed. Which component is a sensible first check?

Back: The CMOS/RTC battery, while keeping other firmware or motherboard faults
in the differential diagnosis.
```

“What does this suggest?” is usually better than “What caused this?” The first wording leaves room for evidence; the second can teach false certainty.

### Retrieve a service together with its clue

Learn a port in both directions, then connect it to a support situation.

```text
Front: A technician needs encrypted remote command-line access to a host. Which
standard service and port fit?

Back: SSH, normally over TCP port 22.
```

```text
Front: TCP port 22 is open on a server. What service should you investigate?

Back: SSH is the standard association. Confirm the actual listening process;
the port number alone does not prove which service is running.
```

This keeps a ports deck from becoming a number recital. The [Common Network Port Numbers flashcards](/catalog/packages/common-network-port-numbers-flashcards/) use the same two-way recall for 38 service mappings, including SSH over TCP 22, and keep the same caveat that a port alone does not prove the service behind observed traffic. If you want a deeper treatment of protocol cards, see the [Security+ flashcards guide](/blog/how-to-use-flashcards-for-security-plus/). Keep the A+ deck bounded by the A+ objectives.

If you're studying Security+ as well, [CompTIA Security+ SY0-701 Flashcards: Complete Objective Review](/catalog/packages/comptia-security-plus-sy0-701-flashcards/) is a separate, unofficial set of 744 original open-response cards covering all five current SY0-701 domains.

### Choose the tool that produces the evidence

Core 2 objectives 1.4 and 1.5 cover Windows management and command-line tools and ask you to use the appropriate one in a scenario. Write prompts from the task toward the tool.

```text
Front: Before testing DNS or a route, which Windows command shows the client's
current IP configuration?

Back: ipconfig
```

```text
Front: Which Windows command directly tests whether a hostname resolves to an
IP address?

Back: nslookup
```

```text
Front: Where would you inspect application and system events around a Windows
crash?

Back: Event Viewer (eventvwr.msc)
```

Run the command or open the tool after review. The card retrieves the first move; the machine teaches flags, output, permissions, and failure states. The [terminal command flashcards guide](/blog/how-to-learn-terminal-commands-with-flashcards/) covers that loop in more depth.

## Core 2 also tests boundaries, sequence, and judgment

Core 2 can look like a list of Windows tools and security terms. Its better cards put those facts inside a small support decision.

For security, compare controls that solve different problems:

```text
Front: Why is removing a user's administrator rights different from enabling
multifactor authentication?

Back: Removing administrator rights limits authorization after sign-in.
Multifactor authentication strengthens identity verification at sign-in.
```

For operational procedures, preserve the order that protects the system and the customer:

```text
Front: Before an approved workstation change is implemented, which two plans
need to be clear in case it fails?

Back: The backup plan and rollback plan. The change record should also capture
scope, risk, approval, timing, affected systems, implementation, and results.
```

For customer support, make the situation concrete:

```text
Front: A user describes a problem in vague language. What should the technician
do before proposing a fix?

Back: Ask focused, open-ended questions and restate the issue to confirm shared
understanding.
```

Core 2 objective 4.10 also includes basic AI concepts: appropriate-use policy, plagiarism, bias, hallucinations, accuracy, and public-versus-private data concerns. It deserves a few narrow cards, not a second AI course:

```text
Front: Before pasting a customer's diagnostic log into a public AI service,
what should a technician verify?

Back: The organization's AI and data-handling policy, whether the log contains
private or regulated data, and whether the service is approved for that data.
```

## Keep PBQ practice bigger than a flashcard

CompTIA describes [performance-based questions](https://www.comptia.org/en-us/resources/test-policies/exam-development/performance-based-questions-explained/) as problem-solving items delivered through simulations or virtual environments, and currently lists A+ among the certifications with simulation PBQs. A PBQ can require several observations and actions inside one technical context. A one-line card cannot reproduce that state.

Use cards before and after PBQ or lab practice:

1. Before practice, retrieve small prerequisites such as a port, connector, command purpose, permission, or troubleshooting clue.
2. During practice, work in the full interface and inspect the available evidence.
3. After a miss, write down the clue you overlooked and the assumption that sent you the wrong way.
4. Make one card only if a small retrieval failure contributed to the miss.
5. Test the repaired knowledge in a different scenario.

Suppose you remembered what DNS does but lost time deciding whether name resolution was failing. A card that asks when to use `nslookup` can repair that retrieval gap. The next lab should use a different host and failure state so you still have to reason.

Do not shrink a miss into a card when the real problem was navigation, command output, component installation, time management, or incomplete evidence gathering. Those problems need more PBQ practice, a virtual lab, spare hardware, or a longer troubleshooting exercise.

The objective documents also warn candidates against unauthorized third-party material commonly called brain dumps. Use current objectives, authorized training and practice, and your own lab notes. [Turning practice questions into flashcards](/blog/how-to-turn-practice-questions-into-flashcards/) explains how to keep the reusable lesson without copying the question.

## Build a study loop for one core at a time

Choose the exam you plan to sit first and keep its cards in the foreground. For each domain:

1. Learn a small objective group from a current, authorized source.
2. Do a hands-on task or legitimate practice set.
3. Turn only hesitations, close calls, and misses into cards.
4. Review due cards with FSRS while continuing practical work.

Once a week, compare your deck with the domain table. This catches blind spots without filling the queue with copied objective bullets. Near the exam, slow new-card creation and spend more time on timed questions, PBQs, and fresh troubleshooting scenarios.

CompTIA recommends 12 months of hands-on experience in an IT support specialist role for both V15 exams. That is guidance, not an extra certification requirement, but it is a useful reminder about the level of practical context the objectives expect.

## Where Flashcards Open Source App fits

[Flashcards Open Source App](/features/) handles the memory layer: plain front-and-back cards, decks and tags, due review with FSRS, optional AI help with card drafts, offline mobile study with sync, and portable exports. The hosted app is free during the current beta, and the project can be self-hosted.

A clean A+ setup can stay simple:

- one deck for `220-1201` and one for `220-1202`
- objective and source tags on version-sensitive cards
- a short miss log after labs and practice
- AI used for editing card wording, with every technical answer checked before saving

The app is not an official CompTIA product, A+ course, exam simulator, or PBQ environment. It should hold the small facts and decisions you want FSRS to bring back. Keep the machines, full scenarios, and authorized exam practice in their proper tools. [Getting Started](/docs/getting-started/) covers the hosted and self-hosted paths.

## CompTIA A+ flashcards FAQ

### Which CompTIA A+ exams should I study for in 2026?

Study A+ V15 Core 1 `220-1201` and Core 2 `220-1202`. Both launched on March 25, 2025, and CompTIA currently estimates retirement in 2028. Recheck the official exam pages before scheduling.

### Do I need both Core 1 and Core 2 for A+?

Yes. CompTIA requires both V15 exams for the A+ certification. Core 1 has a passing score of 675; Core 2 has a passing score of 700. Both use a 100–900 scale.

### Are CompTIA A+ flashcards enough for PBQs?

No. Cards can help you retrieve commands, ports, component distinctions, permission concepts, and clues. A+ PBQs still require you to work through a simulation, so pair the deck with authorized PBQ practice and hands-on labs.

### Should I make a flashcard for every objective?

Use the objectives as a boundary and coverage map. Make cards for information you need to retrieve quickly and repeatedly miss. Practice installation, configuration, output interpretation, and multi-step troubleshooting outside the deck.

## Start with twenty cards and one real task

Open the official objectives for the core you will take first. Pick one domain, learn a small section, then do something with it: run the command, inspect the hardware, configure the setting, or troubleshoot a fresh scenario.

Make no more than twenty cards from the places where you hesitated. That is enough to discover whether your prompts are clear before you build a large queue. Useful **CompTIA A+ flashcards** keep the small pieces available. The real task shows whether you can put them together.
