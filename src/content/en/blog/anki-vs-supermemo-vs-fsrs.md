---
title: "Anki vs SuperMemo vs FSRS (2026): What Each One Is and Which to Choose"
description: "Anki vs SuperMemo vs FSRS explained: compare Anki, two current SuperMemo products, the FSRS scheduler, review ratings, and the best fit for each workflow."
date: "2026-08-03"
image: "/blog/anki-vs-supermemo-vs-fsrs.png"
keywords:
  - "Anki vs SuperMemo vs FSRS"
  - "Anki FSRS"
  - "SuperMemo algorithm"
  - "FSRS scheduler"
  - "spaced repetition algorithm"
  - "Again Hard Good Easy"
  - "Anki vs SuperMemo"
  - "FSRS vs SM-2"
---

You can use FSRS inside Anki. Since the release of SuperMemo 20, FSRS can participate inside a SuperMemo product too. That fact clears up most of the confusion around **Anki vs SuperMemo vs FSRS**: these are not three mutually exclusive alternatives.

Anki is a flashcard product and ecosystem. SuperMemo can mean two current products or a long family of algorithms. FSRS is a scheduler that products can implement. This guide separates those categories first, then compares the choices you can actually make.

> **Disclosure:** I am Kirill Markin, and I build [Flashcards Open Source App](/features/), which is included as one practical FSRS implementation below. I do not treat it as the default winner, and I call out where its younger ecosystem matters.

**Facts checked:** August 3, 2026.

![Two different learning machines revealing the same teal FSRS clockwork scheduler inside](/blog/anki-vs-supermemo-vs-fsrs.png)

## The short answer: Anki and SuperMemo are products; FSRS is a scheduler

Here is the cleanest mental model:

- **Anki** is a flashcard application and ecosystem with a desktop app, AnkiWeb sync, compatible mobile clients, flexible card templates, shared decks, and add-ons. Current Anki includes FSRS as an alternative to its legacy scheduler.
- **SuperMemo 20 for Windows** is a Windows knowledge-management and incremental-reading application. Its Algorithm Arena runs several scheduling algorithms, including FSRS, and weights their predictions according to their performance on the user's data.
- **SuperMemo.com** is a separate hosted language-learning service for web, iOS, and Android. It offers courses and user-created MemoCards through its own documented SuperMemo method.
- **FSRS** is the Free Spaced Repetition Scheduler. It calculates review timing from review history, ratings, model parameters, and a retention target. It is not a card editor, account system, sync service, deck marketplace, or study interface.

So “Anki FSRS” is not a contradiction. It means Anki is the product and FSRS is the scheduler selected inside it.

## Anki vs SuperMemo vs FSRS at a glance

| Choice | What it is | Scheduling | Best fit | Main caveat |
| --- | --- | --- | --- | --- |
| [Anki](https://docs.ankiweb.net/getting-started.html) | Mature flashcard product and ecosystem | Built-in FSRS or Anki's legacy scheduler; FSRS is enabled globally | Existing collections, custom templates, add-ons, shared decks, and established Anki workflows | Moving to another product can mean real migration work |
| [SuperMemo 20 for Windows](https://supermemo.store/products/supermemo-20-for-windows) | Proprietary Windows knowledge-management and incremental-reading product | Algorithm Arena includes SM-2, SM-15, SM-19, SM-20, and FSRS | Incremental reading, knowledge trees, and imports from documents, web pages, email, and video | Windows-only product; separate from SuperMemo.com |
| [SuperMemo.com](https://www.supermemo.com/en/app) | Hosted language-learning service for web, iOS, and Android | Proprietary SuperMemo method; current public pages do not identify it as SM-18, SM-20, or FSRS | Prepared language courses, MemoCards, and cross-device hosted study | Not the Windows product, and its exact scheduler is not public |
| [FSRS](https://github.com/open-spaced-repetition/fsrs4anki) | Open scheduler and project | Implemented by a host product or library | Developers and users who want inspectable scheduling logic | It provides no cards, editor, sync, or study interface by itself |
| [Flashcards Open Source App](/features/) | Younger open-source flashcard product built around FSRS | FSRS-6 with pinned official default weights and configurable workspace scheduling settings | Web, iOS, Android, self-hosting, API, and AI-agent workflows | Smaller ecosystem than Anki and no personalized FSRS weights yet |

The rows are deliberately not symmetrical. Anki and Flashcards give you full flashcard workflows. SuperMemo 20 combines scheduling with a much broader reading and knowledge workflow. SuperMemo.com sells a hosted language-learning experience. FSRS supplies scheduling logic to other software.

## What Anki actually gives you

Anki is much more than a spaced repetition algorithm. Its value comes from the accumulated product around scheduling: notes that generate cards, programmable [card templates](https://docs.ankiweb.net/templates/intro.html), media, deck organization, [add-ons](https://docs.ankiweb.net/addons.html), import and export formats, and [collection sync](https://docs.ankiweb.net/syncing.html).

This matters when someone says they want to leave Anki “for FSRS.” Current Anki already supports FSRS. According to the [Anki FSRS manual](https://docs.ankiweb.net/deck-options.html#fsrs), FSRS is an alternative to Anki's legacy SuperMemo 2 scheduler, and enabling it is a global choice rather than something switched on for only one preset. Desired retention sets a model target for recall when a card becomes due; raising it generally shortens intervals and adds reviews. Anki can also fit FSRS parameters to compatible review history with its **Optimize** action.

The manual's wording needs one historical footnote. **SM-2 is an early algorithm in the SuperMemo lineage, not a synonym for current SuperMemo.** Calling Anki's older scheduler “legacy SM-2” follows Anki's documentation and identifies the algorithm family behind it. It does not establish that every implementation detail is identical to the original SM-2 published decades ago. For a more focused technical comparison, see [FSRS vs SM-2](/blog/fsrs-vs-sm-2/).

If your mature collection depends on custom templates, add-ons, media, or years of review history, moving products creates real migration work. Switching Anki's scheduler may be far cheaper than switching away from Anki. The broader [Anki vs Flashcards comparison](/blog/anki-vs-flashcards-open-source-app/) covers the product-level tradeoff.

## “SuperMemo” now needs a qualifier

The name **SuperMemo** can refer to a product line, an online service, a method, or an algorithm family. A comparison that treats them as one current app will quickly go wrong.

### SuperMemo 20 for Windows

[SuperMemo 20 for Windows](https://supermemo.store/products/supermemo-20-for-windows) was [released on April 1, 2026](https://supermemo.store/products/supermemo-20-upgrade). It is sold with a one-time license for Windows 10 and 11 and is aimed at knowledge work that goes beyond ordinary front/back flashcards. Its product page documents incremental reading plus PDF, EPUB, email, web-page, image, and YouTube workflows.

Its headline scheduling feature is **Algorithm Arena**. The product page says SM-2, SM-15, SM-19, SM-20, and FSRS run in parallel, make predictions, and receive weights according to predictive performance on the user's data. That describes vendor-documented product behavior. It is not independent evidence that SuperMemo 20 gives every learner better outcomes than another app.

Algorithm Arena makes the category mistake easy to see: FSRS can run *inside SuperMemo 20*. They are not mutually exclusive choices.

### The hosted SuperMemo.com service

The current [SuperMemo.com app](https://www.supermemo.com/en/app) is a hosted language-learning service available through a browser and on iOS and Android. It centers on prepared language courses, learning plans, MemoCards, and related language features. Courses can be downloaded for mobile study, but the [offline documentation](https://www.supermemo.com/en/faq/can-i-use-supermemo-offline) lists important limits: features such as adding MemoCards, AI, search, statistics, and the course editor remain unavailable offline.

The hosted service describes its scheduler as proprietary and documents its own SuperMemo method and review flow. Its public pages do not establish that the current scheduler is SM-18, SM-20, or FSRS, so this article does not assign one of those labels to it.

That distinction changes buying advice. Someone who wants Windows incremental reading should evaluate SuperMemo 20. Someone who wants a hosted Spanish or English course should evaluate SuperMemo.com. They share a name and history, but they are not interchangeable product experiences.

## The SuperMemo algorithm is a family, not one formula

SuperMemo's history contains distinct generations of scheduling algorithms. The official [history of the SuperMemo algorithm](https://supermemo.guru/wiki/History_of_SuperMemo_algorithm) traces changes across SM-4, SM-5, SM-6, SM-8, SM-11, SM-15, SM-17, and SM-18; it dates SM-18's stabilization-function changes to 2019. SuperMemo 20's current documentation names SM-19 and SM-20 as later generations and places them beside older algorithms and FSRS in Algorithm Arena.

This is why statements such as “Anki uses the SuperMemo algorithm” are too vague to help. Which generation? Which product implementation? Which settings and rating rules?

SM-2 matters historically because it influenced many flashcard schedulers. Current SuperMemo Windows software has moved through many later algorithm generations. The hosted SuperMemo.com service does not publish enough current detail to equate it casually with any one numbered Windows algorithm.

## What the FSRS scheduler models

[FSRS4Anki](https://github.com/open-spaced-repetition/fsrs4anki) describes two main pieces: a scheduler and an optimizer. The scheduler calculates card timing. The optimizer can fit parameters to review history when the host product supports that workflow. Neither piece supplies decks, editing, accounts, sync, or a study screen.

The [ABC of FSRS](https://github.com/open-spaced-repetition/fsrs4anki/wiki/ABC-of-FSRS) introduces a model commonly explained with three variables: difficulty, stability, and retrievability. The [FSRS algorithm documentation](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm) defines them carefully:

- **Retrievability (R)** is the model's current predicted probability that you will recall the item.
- **Stability (S)** is the interval at which predicted retrievability reaches 90% under the model.
- **Difficulty (D)** is the model's estimate of how hard it is to increase memory stability for the item.

These are model states inferred from review data, not direct measurements of a memory trace in your brain. A card's predicted retrievability can be useful while still being a prediction shaped by its review history, ratings, implementation, and parameters.

Desired retention turns that model into a schedule. The scheduler estimates when retrievability will reach the chosen target and derives an interval subject to the host product's rules. “Target-based interval” is a more accurate phrase than claiming the date is a proven perfect or universally optimal moment.

## Again, Hard, Good, Easy—and why labels do not translate automatically

Review ratings are signals fed into a scheduling system. Their names and scales differ by product, so translating them one-to-one can corrupt the meaning.

| System | Visible ratings | What the labels establish |
| --- | --- | --- |
| Anki with FSRS | Again, Hard, Good, Easy | Again is failed recall. Hard, Good, and Easy are successful recall with decreasing effort. |
| Flashcards | Again, Hard, Good, Easy | Same failure/success boundary. The API uses 0–3 and maps those values internally to FSRS grades 1–4. |
| Hosted SuperMemo.com | Don't know, Almost, Know | A three-choice product scale documented by the [SuperMemo method page](https://www.supermemo.com/en/supermemo-method). It should not be mapped mechanically to the four FSRS grades. |
| SuperMemo 20 for Windows | Desktop SuperMemo grading flow | A separate product surface that feeds several algorithms in Algorithm Arena. Do not infer its meanings from the hosted service's three labels. |

The most consequential FSRS distinction is Again versus Hard. The [Anki manual](https://docs.ankiweb.net/deck-options.html#fsrs) says FSRS treats Hard as successful recall and Again as failure. Choosing Hard because the next interval looks nicer records an event that did not happen. The practical [Again vs Hard guide](/blog/again-vs-hard-fsrs-flashcards/) handles partial answers and edge cases in detail.

## How Flashcards implements FSRS today

Flashcards uses FSRS as a product component, not as a vague “smart repetition” label. The implementation was verified against the source repository at commit `9cb013f78767c081f5385a53daa5e4b9fe69d3b6` on August 3, 2026.

The backend scheduler mirrors the official `ts-fsrs` 5.2.3 flow and pins the official FSRS-6 default weights. Backend, iOS, and Android contain three independent scheduler implementations, while the web app reuses the backend module instead of maintaining a fourth copy. Shared golden test vectors enforce the same scheduling behavior across those implementations.

Each card persists stability, difficulty, last-review time, scheduled days, workflow state (`new`, `learning`, `review`, or `relearning`), and the current short-term step where applicable. The actual client review time drives the transition, rather than the later time when a server happens to process it.

Workspace defaults are:

- FSRS-6
- desired retention of `0.90`
- learning steps of `1` and `10` minutes
- a `10`-minute relearning step
- a maximum interval of `36,500` days
- fuzz enabled

Workspaces can change desired retention, steps, maximum interval, and fuzz for future reviews. Flashcards does **not** currently personalize or expose FSRS weights per user; the v1 weights are pinned defaults. That is an important difference from products that offer parameter fitting from an individual's history. The [FSRS settings guide](/blog/fsrs-settings/) explains the workload implications without pretending every knob needs adjustment.

On the web review screen, Flashcards previews the computed next interval for Again, Hard, Good, and Easy. The user/API ratings `0`, `1`, `2`, and `3` map internally to FSRS grades `1` through `4`. Again records failed recall; Hard, Good, and Easy record successful recall with decreasing effort. All clients include a frequent-Hard reminder: an answer you did not recall belongs under Again.

This makes the scheduler inspectable and consistent across platforms. It does not make card quality, honest grading, or actually completing reviews optional.

## Which choice fits your workflow?

### You already have a serious Anki collection

Usually, stay with Anki and consider enabling FSRS there. Your templates, add-ons, media, deck structure, and review history may be worth more than the novelty of another interface. Confirm that every client supports FSRS, and check add-on compatibility first—especially for anything that modifies scheduling or intervals.

### You want deep incremental reading on Windows

Evaluate SuperMemo 20 for Windows. Its combination of knowledge trees, incremental reading, document and web imports, and Algorithm Arena is materially different from a focused flashcard app. Test the workflow itself, not only the algorithm list.

### You want prepared hosted language courses

Evaluate SuperMemo.com. Its web and mobile product is designed around language courses and MemoCards. Confirm that its offline limits fit your study routine, and do not assume the scheduler is the same as the Windows product's SM-20 or Algorithm Arena.

### You are building an app or choosing an auditable scheduler

Evaluate FSRS implementations and libraries. The open documentation, formulas, and reference projects make the scheduler inspectable. You still need to decide how ratings work, which settings users can change, how reviews sync, how card state persists, and how you will test parity across platforms.

### You want a modern open-source web, mobile, and agent workflow

Evaluate [Flashcards Open Source App](/features/). It combines FSRS-6 with web, iOS, Android, self-hosting, a public API, and AI-agent access. Its honest limitation is maturity: it is a younger ecosystem than Anki, and it does not match Anki's depth of templates, add-ons, shared decks, or migration fidelity. Keep Anki for collections that rely on those strengths.

## A scheduler does not rescue a weak study system

No responsible Anki vs SuperMemo vs FSRS comparison can promise a universal learning winner. A scheduler can make better-calibrated predictions on a benchmark and still be only one part of the outcome.

Real results still depend on:

- whether cards test one clear thing
- whether you grade failed recall honestly
- whether the review history is representative
- whether your desired retention and intake create a sustainable workload
- whether you complete due reviews or repeatedly miss them
- whether the product's editing, reading, and mobile workflow fits your life
- whether the underlying material is accurate and worth remembering

Vendor documentation explains product behavior. Predictive benchmarks compare models under particular data and metrics. Neither proves that one product makes every learner remember more.

## The useful conclusion to Anki vs SuperMemo vs FSRS

The practical answer to **Anki vs SuperMemo vs FSRS** starts by dropping the false three-way choice.

Use **Anki with FSRS** when you want Anki's mature ecosystem and a current FSRS scheduler. Evaluate **SuperMemo 20 for Windows** when incremental reading and a deep Windows knowledge workflow are central; FSRS is already one participant in its Algorithm Arena. Evaluate **SuperMemo.com** separately when hosted language courses are the real goal. Evaluate **FSRS implementations** when you are building or auditing the scheduling layer itself.

Flashcards fits the newer open-source web, mobile, self-hosting, and agent use case, with a pinned and parity-tested FSRS-6 implementation and a younger product ecosystem.

Choose the workflow you can maintain, then configure the spaced repetition algorithm inside it. The product gets you to the review. The scheduler chooses a model-based date. Your cards, ratings, and consistency still provide the learning signal.
