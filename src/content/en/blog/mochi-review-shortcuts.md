---
title: "Mochi Review Shortcuts: Reveal, Grade, and Learn"
description: "Understand Mochi review shortcuts: when Space reveals a side, marks Remembered, or adds a new card to reviews, plus a worksheet for careful keyboard practice."
date: "2026-10-10"
image: "/blog/mochi-review-shortcuts.png"
keywords:
  - "Mochi review shortcuts"
  - "Mochi keyboard shortcuts"
  - "Mochi Space key"
  - "Shift Space Mochi"
  - "Mochi Add to reviews"
  - "Mochi remembered shortcut"
---

Space can reveal another side of a Mochi card. Later, the same key can mark it **Remembered**. In the new-card learning phase, Space can **Add to reviews** instead. Your fingers can repeat the same movement while the app records a different decision.

The useful habit is to check the current action before pressing. Reveal the material you need to inspect, compare it with your attempted answer, then report recall. These Mochi review shortcuts are easier to use when you separate those steps.

This guide follows official documentation and a maintainer's forum answer, checked October 10, 2026. The practice cards and worksheet are original examples, not results from a hands-on app test. I am Kirill Markin, and I build [Nibomo](/).

![An older man pauses over a sliding wooden puzzle box with one compartment exposed and its brass catch open](/blog/mochi-review-shortcuts.png)

## Read the action, then press the key

A [Mochi forum discussion](https://forum.mochi.cards/posts/389) identifies the shared Space binding for **Show next side of card** and **Remembered**. In his reply, Matt, the administrator, confirms that **Shift + Space** marks a card Remembered directly.

Use this small state table rather than treating Space as a universal “next” key:

| What you're doing | Action to expect | Key or control |
| --- | --- | --- |
| Reviewing a learned card with another side to reveal | Show the next side | Space |
| Reviewing a learned card when the action is Remembered | Report successful recall | Space |
| Reviewing a learned card after checking the answer and confirming recall | Mark Remembered directly | Shift + Space, confirmed by the maintainer |
| Learning a new card with Add to reviews available | Admit the card to regular scheduling | Space |
| Learning a new card that isn't ready for scheduling | Again: return to it later | F |
| Reporting failed recall on a learned card | Forgot | Use the visible Forgot button |

The new-card bindings come from [Mochi's New cards documentation](https://mochi.cards/docs/reviewing/new-cards/). Its **F = Again** instruction belongs to that phase; it doesn't establish an F shortcut for **Forgot** during learned-card review.

Shift + Space is a grading action. Use it only after you've checked the answer and decided that you recalled what the prompt requires. The maintainer's answer isn't a promise that every platform or input device handles the binding identically; rehearse it on your own setup first.

## An extra reveal can become an accidental grade

Mochi supports more than two sides. Each `---` line creates another side, and review prompts you to recall the next one. [Mochi card syntax](https://mochi.cards/docs/cards/)

Consider these two ordinary Markdown cards:

**Card A: two sides**

```markdown
What is 6 × 7?
---
42
```

**Card B: three sides**

```markdown
What is 6 × 7? Give the product, then explain it as equal groups.
---
42
---
Six groups of seven contain 42 items.
```

On A, one Space press reveals the answer; the next can mark Remembered. On B, the second press reveals the explanation instead, and another press can become the grade. Pause after each reveal and read the control before another press. The number of sides changes where that boundary falls.

B asks for both the product and the explanation. Attempt both before revealing them. If you produce 42 but can't explain the groups, the full answer hasn't been recalled; don't negotiate an easier passing rule after seeing the last side. You can also split the prompt into separate cards if the combined answer is awkward to grade.

In ordinary learned-card review, Mochi asks you to attempt recall, reveal the answer, then choose **Forgot** or **Remembered**. That response affects scheduling and can determine whether the card returns soon in the session. [Mochi's review process](https://mochi.cards/docs/getting-started/reviewing-cards/)

## Rehearse the controls in Cram

Mochi documents **Cram** as behaving like regular review, while Remembered/Forgot responses leave intervals and review history unchanged. That makes it a useful place to check the reveal-to-grade transition. [Mochi Cram documentation](https://mochi.cards/docs/reviewing/cramming/)

Cram's protection concerns review responses. Keep this rehearsal to revealing sides and choosing Remembered or Forgot. Editing cards, resetting history, changing archive status, or deliberately adding a card to reviews changes your collection or scheduling state.

Open the deck, click **Filters**, narrow the visible set, then choose **Cram**. Use two- and three-sided cards like A and B. Our [custom views and Cram guide](/blog/mochi-custom-views-cram/) explains how to select an exact practice set.

Write what you intend to do before pressing. Fill in the last column afterward; these are expected checks, not recorded test results.

| Starting point | Intended action | What to inspect afterward | Observed result |
| --- | --- | --- | --- |
| A, answer hidden | Press Space once to reveal | Answer appears; read the next action | — |
| B, product visible, explanation hidden | Press Space once to reveal the explanation | Final side appears; read the next action | — |
| All required sides inspected; recall succeeded | Press Space with Remembered available | Successful response is accepted | — |
| All required sides inspected; recall succeeded | Try Shift + Space deliberately | Remembered is accepted directly | — |
| Answer inspected; recall failed | Click Forgot | Failed response is accepted | — |

Before using the shortcuts in scheduled reviews, require three things: each reveal shows the intended content, each grade matches your decision, and you can stop between the two. If a key behaves differently, record the app version, platform, session mode, visible action, and actual result. Use the visible controls while you investigate.

## Add to reviews is its own decision

For new material, open the deck and choose **New cards**. If the button shows **Review**, its dropdown offers **New Cards**. When you're comfortable enough to begin scheduled study, **Add to reviews** enrolls the card; **Again** keeps it for another look. [Mochi learning instructions](https://mochi.cards/docs/reviewing/new-cards/)

Check this screen separately from the Cram worksheet. Read the button label before using Space, and enroll only a card you actually want in regular reviews. A successful Cram response isn't an enrollment step.

For scheduling questions after enrollment, see the [Mochi FSRS guide](/blog/mochi-fsrs/). For a wider product comparison, see our [Mochi flashcards review](/blog/mochi-alternative/). During the next session, keep one small pause: answer, reveal, inspect, then grade.
