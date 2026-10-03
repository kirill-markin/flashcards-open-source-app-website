---
title: "Anki Deck Options Presets: Change One Deck Without Changing the Others"
description: "Map Anki decks to shared presets, choose a deck override or a clone, and check which settings change before saving. Includes a worked example."
date: "2026-10-03"
image: "/blog/anki-deck-options-presets.png"
keywords:
  - "Anki deck options presets"
  - "Anki change settings one deck"
  - "Anki clone preset"
  - "Anki shared preset"
  - "Anki This deck limits"
  - "Anki Save to All Subdecks"
---

You open Options for your Spanish deck, change a setting, and later find the same change in your piano deck. The two decks can share an Anki preset even though they sit in different parts of the deck list. Opening a deck's Options doesn't make every setting private to that deck.

To change one deck, first identify the setting's scope. Use **This deck** for a supported deck override. For a preset setting that needs its own value, clone the preset before editing it. Then check the target deck and the decks you meant to leave alone.

This workflow follows the desktop manual and released [Anki 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3), checked on October 3, 2026. The collection below is an original worked example based on documentation and released source code, not a hands-on test.

![A woman adds herbs to one bowl of orange soup while two other portions and the shared pot remain plain](/blog/anki-deck-options-presets.png)

## Make a deck-to-preset ledger before editing

A preset is a shared bundle of options. Its name can look like a deck name, but the assignment determines which decks use it. Editing shared options affects every assigned deck. [Anki's preset documentation](https://docs.ankiweb.net/deck-options.html#presets) describes this sharing.

From the Decks screen, use each deck's gear menu to open **Options**. Record the preset shown at the top, plus any existing deck or temporary overrides for the setting you're investigating. The selector also shows a **used by … decks** count, as implemented in the [released preset selector](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/ConfigSelector.svelte). Find those other decks before editing; the count alone doesn't tell you their names.

Suppose your collection contains these four ordinary decks. Spanish and Anatomy have no children of their own. Both presets currently allow automatic audio playback. The shared `Daily study` preset has a new-card limit of 20; `Courses overview` has a limit of 30. There are no **Today only** overrides.

| Deck | Assigned preset | Existing new-card override | Intended change |
| --- | --- | --- | --- |
| `Courses` | `Courses overview` | None | Keep current settings |
| `Courses::Anatomy` | `Daily study` | None | Keep automatic audio playback |
| `Courses::Spanish` | `Daily study` | **This deck:** 8 | Play audio only when requested |
| `Piano` | `Daily study` | None | Keep automatic audio playback |

Here, `Daily study` is used by three decks. Spanish and Anatomy are siblings in the deck tree; Piano shares their preset without sharing their parent. Courses has its own preset.

Write the result you want before clicking anything: “Only Spanish should stop playing audio automatically. Its limit stays at eight, and the other three decks keep their assignments and settings.” That sentence makes the later check concrete.

## Choose the smallest scope that does the job

You don't need a new preset for every difference between decks.

| What you want to change | Where to make the change | What to check |
| --- | --- | --- |
| A shared option for every deck using a preset | Edit the existing preset | Every member belongs in the affected group |
| One deck's daily new-card or review limit | **This deck** beside that limit | The persistent override is on the intended deck |
| One deck's limit for today | **Today only** | You want a temporary limit |
| One deck's FSRS desired retention | **This deck** beside Desired retention | Its FSRS parameters still come from the preset |
| One deck's audio, learning steps, or another preset option | **Clone Preset**, then edit the clone | The target uses the clone; the others retain the original |
| Whether FSRS is enabled | Collection-wide FSRS switch | A clone cannot make this choice local |

Current daily-limit controls have **Preset**, **This deck**, and **Today only** scopes. Desired retention has **Preset** and **This deck**. The released [daily-limit controls](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte) and [FSRS controls](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/FsrsOptions.svelte) keep these overrides separate from the shared preset.

For example, reducing Spanish's daily intake from eight to five only requires changing its **This deck** limit. Cloning just for that change adds another preset to maintain.

If your decision concerns which retention target or learning steps to use, the [FSRS settings guide](/blog/fsrs-settings/) covers that choice. Here, the job is to make an already chosen change reach the intended decks.

## Clone first, then change Spanish's audio

**Don't play audio automatically** belongs to the preset, so the audio example needs a separate preset for Spanish. Anki's [released Audio controls](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/AudioOptions.svelte) bind that switch to the current preset.

1. Open **Options** for `Courses::Spanish`. Confirm that the selector shows `Daily study`, **Don't play audio automatically** is off, and the **This deck** new-card limit is eight.
2. Open the arrow menu beside **Save** and choose **Clone Preset**. Name it `Spanish manual audio`.
3. Confirm that the selector now shows `Spanish manual audio`. Check that the settings you want to retain match the original, including learning steps and FSRS parameters if enabled. Check the existing deck limit separately.
4. Enable **Don't play audio automatically** under Audio. Leave scheduling settings and collection-wide controls as they were.
5. Use ordinary **Save**. Reopen Spanish's Options and compare its saved assignment, audio switch, and deck limit with the expected result below.
6. Open Anatomy, Piano, and Courses in turn. Check their actual assignments and values too.

**Clone Preset** copies the current preset's options and selects the new copy. **Add Preset** starts with default options, so it can introduce differences you didn't intend. **Rename Preset** changes the existing preset's name; it doesn't create an independent copy. These operations are defined in Anki's [released preset implementation](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/lib.ts).

Clone before editing. If you've already changed the original preset in this Options session, cloning afterward doesn't undo that change: the eventual Save can include both the modified original and the clone. Start this workflow with the original values intact.

| Deck | Expected preset afterward | Don't play audio automatically | New-card limit to check |
| --- | --- | --- | --- |
| `Courses::Spanish` | `Spanish manual audio` | On | Existing **This deck:** 8 |
| `Courses::Anatomy` | `Daily study` | Off | Preset: 20 |
| `Piano` | `Daily study` | Off | Preset: 20 |
| `Courses` | `Courses overview` | Off | Preset: 30 |

With these four decks and no other assignments, `Daily study` should now be used by two decks and `Spanish manual audio` by one. Counts help catch a mistake; checking the actual deck names catches a different mistake with the same count.

The clone is an independent copy. Future edits to `Daily study` won't update `Spanish manual audio`, and future edits to the clone affect any decks you subsequently assign to it. Per-deck overrides remain separate: seeing 20 on the **Preset** tab doesn't mean Spanish's eight-card override disappeared.

On your next normal review of a Spanish card containing audio, check that playback waits for you to request it. You can still use the replay action, including **R** or **F5** on desktop, as described in [Anki's audio documentation](https://docs.ankiweb.net/deck-options.html#audio). Inspecting saved settings and observing the intended behavior are both useful checks.

## The parent deck still matters when you study

Preset membership and deck hierarchy answer different questions. The ledger tells you which shared settings an edit changes. The deck tree helps determine what happens when you select a parent for study.

Most options follow the deck containing the card. **Display Order** follows the deck selected for study. Daily limits combine each subdeck's limit with the selected deck's total cap. These exceptions are described in [Anki's subdeck rules](https://docs.ankiweb.net/deck-options.html#subdecks).

In the example, clicking `Courses` uses Courses' display-order settings for the session, including Spanish cards. Spanish's separate audio setting can be correct while a display-order change in its clone appears ineffective during a parent-deck session.

Likewise, Spanish's limit of eight is an upper bound, not a promise of eight new cards. Available cards, study already completed, the parent's remaining allowance, and applicable review limits can reduce what is shown. Record which deck you normally click to study alongside the ledger.

**Save to All Subdecks** saves changes and assigns the selected preset to the current deck's descendants. In the released implementation, it also applies the current deck's daily-limit and desired-retention overrides to those descendants. Using it from Courses can therefore replace both children's preset assignments and overrides. The [released save operation](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/deckconfig/update.rs) shows both actions. Ordinary Save fits this one-deck example.

## A clone doesn't isolate collection-wide controls

FSRS can be enabled only for the whole collection. Separate presets cannot put Spanish on FSRS and Piano on the legacy scheduler. The released [FSRS switch](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/FsrsOptionsOuter.svelte) is marked global.

**New cards ignore review limit** and **Limits start from top** are also global in the [daily-limit interface](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte). The latter determines whether ancestor limits apply when you select a subdeck directly. Those switches still affect the collection after you clone a preset.

**Reschedule cards on change** is a global control for the save operation, not a persistent option stored in your new preset, as its [released help text](https://github.com/ankitects/anki/blob/26.09.3/ftl/core/deck-config.ftl) specifies. It doesn't mean every preset edit reschedules every card. For relevant FSRS changes, existing due dates stay unchanged by default; future reviews use the new settings. Read [Reschedule Cards on Change](https://docs.ankiweb.net/deck-options.html#reschedule-cards-on-change) before deliberately rebuilding due dates. An unchanged due count isn't evidence that an FSRS edit failed.

Finish when the saved assignments and values match the result you wrote down, and the study entry point explains any parent-level behavior. If you also want to reorganize the material, the [Anki tags versus decks guide](/blog/anki-tags-vs-decks/) covers that separate decision. You can fix shared settings without moving a single card.
