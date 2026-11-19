---
title: "Anki Auto Advance: Flip Cards and Grade Them Yourself"
description: "Set up Anki Auto Advance on desktop to flip cards on a timer, wait for audio, and keep grading by hand. Try it with three cards."
date: "2026-11-19"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/2dcf5c6c2b60f15edd661dcfbe579e59b6f729e44510b4a700d76b23f9a4ee8b.webp"
keywords:
  - "Anki Auto Advance"
  - "Anki auto flip"
  - "Anki wait for audio"
  - "Anki manual grading"
---

Anki Auto Advance can flip a silent card after five seconds, then give the next card's seven-second recording time to finish. You still choose each grade. Desktop Anki has a separate timer for each side, so you can time the question and take as long as you like on the answer.

![A photographer inspects a wet print as it comes out of a darkroom tray](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/2dcf5c6c2b60f15edd661dcfbe579e59b6f729e44510b4a700d76b23f9a4ee8b.webp)

## Set up automatic flips in Deck Options

Auto Advance is available on desktop Anki 23.12 and later. From **Decks**, open the gear menu for the deck you want to try and choose **Options**. Use the arrow beside **Save** to choose **Clone Preset** before changing any settings. Name the copy something like `Timed reveal`. Editing a shared preset changes every deck that uses it. [Anki's desktop manual](https://docs.ankiweb.net/manual/deck-options#auto-advance) · [How Anki deck presets are shared](/blog/anki-deck-options-presets/)

Scroll to **Auto Advance**, enter these settings, then click **Save**.

| Setting | Value |
| --- | --- |
| **Seconds to show question for** | **5** |
| **Question action** | **Show Answer** |
| **Seconds to show answer for** | **0** |
| **Wait for audio** | **On** |

Five seconds gives you a starting point for the trial. The **0** on the answer side disables that timer entirely. A positive value schedules the selected **Answer action**. Anki can grade the card, bury it, or show a reminder when time is up. **Show Reminder** still uses the timer. [Anki's answer timer and actions](https://github.com/ankitects/anki/blob/c06370ff4d87cb48d825f90cc83e02b9a4e84ecd/qt/aqt/reviewer.py#L486-L526)

Open the deck and click **Study Now**. With a question visible, choose **More → Auto Advance** or press **Shift+A** to start the timer. Use the same control to switch it off. Anki also switches it off when you leave the study screen, so turn it on again when you next want timed flips. [Anki's reviewer controls](https://github.com/ankitects/anki/blob/c06370ff4d87cb48d825f90cc83e02b9a4e84ecd/qt/aqt/reviewer.py#L1035-L1047) · [Reviewer exit behavior](https://github.com/ankitects/anki/blob/c06370ff4d87cb48d825f90cc83e02b9a4e84ecd/qt/aqt/reviewer.py#L198-L201) · [Timer toggle](https://github.com/ankitects/anki/blob/c06370ff4d87cb48d825f90cc83e02b9a4e84ecd/qt/aqt/reviewer.py#L1212-L1224)

## Try a silent card and two recordings

Use three cards available to study or create three **Basic** notes in a temporary deck and apply the setup there. To add a recording, click in the note's **Front** or **Back** field and use the editor's paperclip. Under **Audio** in the cloned preset, keep **Don't play audio automatically** off so the clips start on their own. [Anki's media instructions](https://docs.ankiweb.net/manual/media) · [Deck audio options](https://docs.ankiweb.net/manual/deck-options#audio)

| Card | What you should see |
| --- | --- |
| **Silent prompt.** Put “airport” on the front and *el aeropuerto* on the back. | Wait about five seconds for the answer to appear on its own. Choose a grade to continue. |
| **Long recording on the front.** Put a recording of about seven seconds on the front and the phrase's meaning on the back. | At five seconds, the front should still be visible and the clip should still be playing. The answer should appear shortly after playback finishes. |
| **Pronunciation on the back.** Put “train station” on a silent front and *la estación de tren* with a recording on the back. | The recording should start when the answer appears. After it finishes, wait another six seconds. The same answer and grade buttons should still be there. Choose a grade to move on. |

Once Auto Advance is on, each new question starts a countdown when it appears. A two-second clip leaves about three seconds on a five-second timer. A seven-second clip runs past that timer, so with **Wait for audio** on, the answer can appear as soon as the audio queue clears. If you want about three seconds to think after a seven-second recording, try setting the question timer to **10** seconds. That also gives your silent cards ten seconds. [Anki's question timer](https://github.com/ankitects/anki/blob/c06370ff4d87cb48d825f90cc83e02b9a4e84ecd/qt/aqt/reviewer.py#L374-L442) · [Audio completion behavior](https://github.com/ankitects/anki/blob/c06370ff4d87cb48d825f90cc83e02b9a4e84ecd/qt/aqt/reviewer.py#L309-L324)

## If the timing looks wrong

Anki can switch Auto Advance off if the main window lacks focus when a timed action is ready to run. Bring Anki forward and turn Auto Advance back on. If the timing varies between cards in a parent deck, check the presets of the subdecks that contain those cards. Each card uses its own deck's Auto Advance settings. [Anki's focus check](https://github.com/ankitects/anki/blob/c06370ff4d87cb48d825f90cc83e02b9a4e84ecd/qt/aqt/reviewer.py#L421-L433) · [Anki's subdeck settings](https://docs.ankiweb.net/manual/deck-options#subdecks)

| What you see | What to check |
| --- | --- |
| The question stays visible or shows a reminder | Check that **Auto Advance** is on in **More**, set **Seconds to show question for** above zero, and choose **Show Answer** as the **Question action**. |
| A card gets graded or buried on its own, or a reminder appears on the answer | Set **Seconds to show answer for** to **0**. |
| The answer appears while the front recording is still playing | Turn on **Wait for audio** in the card's preset. |
| A recording never starts | Turn off **Don't play audio automatically**. If it's already off, try **More → Replay Audio** while the affected side is showing. [Anki audio troubleshooting](/blog/anki-audio-not-playing/) |

The walkthrough gives expected results based on the desktop manual and released Anki 26.09.4 code. AI assisted with the source review and drafting.
