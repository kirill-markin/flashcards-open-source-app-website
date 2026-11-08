---
title: "Flashcard Widget for iPhone and Android: See Your Next Card"
description: "Nibomo's free Review widget puts due cards, your next question, and your streak on the Home Screen of iPhone, iPad, Mac, and Android. See each size and how to add it."
date: "2026-11-08"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/94e11d677ef5da28b4490f899a86e423764ec2142a9264c0cbd088823c3101ae.webp"
keywords:
  - "flashcard widget"
  - "flashcard widget iPhone"
  - "flashcard widget Android"
  - "spaced repetition widget"
  - "Anki widget iPhone"
  - "Home Screen flashcard widget"
---

A big "4", the words "To review", and "What is the capital of Canada?" That's all Nibomo's Medium Review widget puts on your Home Screen. The answer isn't there. You get the number of cards waiting and the question on the next one, and the answer stays in the app until you've had a go at it.

The widget is free on iPhone, iPad, Mac, and Android, with no Premium tier and no account required, so guests get it too. It comes in three sizes, and a tap on any of them opens Review. If you came here looking for an Anki widget on iPhone, the official iPhone app doesn't have one; the last section covers what Anki offers and what switching would cost.

![An adult pauses on her way out to recall a Canada geography prompt on the refrigerator before lifting the closed answer flap](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/94e11d677ef5da28b4490f899a86e423764ec2142a9264c0cbd088823c3101ae.webp)

> **Disclosure:** I am Kirill Markin, and I build [Nibomo](https://nibomo.com/). The widget behavior below comes from the app's source code and from screenshots taken on an iPhone simulator and an Android emulator, not from a personal study log.

![Nibomo Medium widget on an iPhone Home Screen showing 4 cards to review and the question "What is the capital of Canada?"](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/3709049e5083b2bc30b8523d40696fa51d75afbebb3fa2796fac0649dd7a5309.webp)

## What each widget size shows

The number on the widget matches the badge on the Review tab: due cards plus new cards in your current Review filter, in the workspace you have open in the app. If you've filtered Review down to one deck or tag, the widget counts only those cards. New cards count from the start, so adding a fresh deck of 200 cards makes the number jump by 200.

| Size | Cards waiting | Nothing waiting |
| --- | --- | --- |
| Small | Due count and streak | "All done", when the next card is due, and your streak |
| Medium | Due count and the next card's question | "All done" and when the next card is due |
| Large | Due count, the next card's question, and your streak | "All done", when the next card is due, and your streak |

The question comes from the same card Review would show you first. It appears as plain text, so formatting on the front of the card doesn't come through, and long questions get cut off. An image on the front shows up as the short label saved with it; when you add a picture in the Android app, that label is just "Image". If there's no text at all, not even an image label, Android shows "Image question", and iPhone and iPad show "Cards are ready to review" instead. That second message also appears when you'd cleared everything before leaving the app and new cards have fallen due since: the widget can count them, but it hasn't been told their questions yet.

![Nibomo Large widget on an iPhone showing the due count, the next question, and a 1-day streak](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/b388801858385905778245de7bcf37d1c8b7e9a91c26b11a1037031454a7e068.webp)

Once you've cleared everything that's due, the widget switches to "All done" and tells you when the next card comes back. If that's on a later day, you see the date as well as the time.

![Nibomo Small widget on an iPhone showing All done, the date and time of the next card, and a 1-day streak](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/2a393aa8cbdbca63cf4a27f8570d94e960e2e518c5932f6428b4f542f0b45572.webp)

The Android widget shows the same information with slightly different wording. Where iPhone puts "To review" under the number, Android says "4 due" on the Small size and "4 cards due" above the question on Medium and Large.

![Nibomo Medium widget on an Android Home Screen showing 4 cards due and the next question](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/a0a1c421710bc938cdaf52b8d069bd3676f191c71d764085e95c3e7f1e599281.webp)

## Why a spaced repetition widget shouldn't show the answer

A flashcard does its job when you try to pull the answer out of memory before you see it. That effort is called active recall, or retrieval practice. In [Roediger and Karpicke's 2006 study](https://doi.org/10.1111/j.1467-9280.2006.01693.x), students who took a recall test on a passage remembered more of it two days and one week later than students who spent that time rereading it.

A widget that showed the question and the answer side by side would turn every glance at your phone into rereading. Showing only the question gives you a small recall attempt for free: you see "What is the capital of Canada?", try to answer in your head, and open the app to check.

The count is the spacing half. Reviews spread across days tend to stick better than the same amount of study packed into one sitting; [Cepeda and colleagues' 2006 review](https://doi.org/10.1037/0033-2909.132.3.354) of distributed-practice research found that pattern across many experiments. Nibomo's [FSRS scheduler](/blog/what-is-fsrs/) decides when each card is due, and the widget only reports that decision. A small number on your Home Screen in the morning is easier to clear than a pile you discover a week later. For picking a rhythm, see [how often you should review flashcards](/blog/how-often-should-you-review-flashcards/).

One catch: recalling a card from the widget doesn't count as a review. The widget has no buttons, so the scheduler learns nothing until you open Review and rate the card. If you knew the answer at a glance, tap in and say so.

## What a tap opens

A tap on any size opens Review. The Small widget just opens it where it is.

A Medium or Large widget remembers which card it showed. If that card is still waiting in the same workspace and Review filter, and you haven't already answered or deleted it, Review starts a new session with that card first. So the question you saw on the Home Screen is the one you answer. If the card is no longer waiting, Review opens normally with whatever is next.

## How to add the flashcard widget on iPhone and iPad

Install [Nibomo from the App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8), open it once, and then follow [Apple's steps for adding a widget](https://support.apple.com/guide/iphone/add-edit-and-remove-widgets-iphb8f1bf206/ios):

1. Touch and hold an empty part of the Home Screen until the apps jiggle.
2. Tap **Edit**, then **Add Widget**.
3. Find **Nibomo** in the list or search for it. The widget is called **Review**.
4. Swipe to the size you want and tap **Add Widget**.
5. Drag it into place and tap **Done**.

There's a shortcut on recent iOS versions: touch and hold the Nibomo app icon and pick a widget size from the menu that pops up. You can also add the Small size to StandBy, the full-screen view your iPhone shows while it charges on its side.

Opening the app first matters. Until the app has saved its first data for the widget, every size just says "Open Nibomo to start reviewing."

## How to add it on Android

Install [Nibomo from Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site), open it once, and then use [Android's widget steps](https://support.google.com/android/answer/9450271):

1. Touch and hold an empty space on a Home Screen.
2. Tap **Widgets**.
3. Find **Nibomo Flashcards** and touch and hold the **Review** widget.
4. Slide it to where you want it and let go.

Android doesn't ask you to pick a size up front. Resize the widget, and the layout follows: a small square shows the count and streak, a wide strip adds the question, and a large block shows all three. To resize, touch and hold the widget and drag the dots on its outline. If you skip opening the app first, the widget just asks you to open it.

![Nibomo Large widget on an Android Home Screen showing the due count, the next question, and a 1-day streak](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/32c757b3fc9784b5a6e08dde3715e9976a9445a6369d655d1cf957fbef3a1a9b.webp)

## What the widget doesn't do

The widget is deliberately small. A few limits worth knowing before you place it:

- There's nothing to configure. You can't pick a deck inside the widget; change the Review filter in the app instead, and the widget follows it.
- You can't answer cards from the Home Screen. Every review happens in the app.
- There's no Lock Screen or Apple Watch widget, and the web app at [app.nibomo.com](https://app.nibomo.com) has no widget.
- It updates in the background, not instantly. On iPhone and iPad, the app saves fresh data a few seconds after changes and again when you leave it. While the app is closed, the count goes up as cards fall due. On Android, the widget redraws when your cards change, and the system refreshes it about every 30 minutes while the app is closed.
- The streak comes from the app. If you haven't opened Nibomo in a while, the streak on the widget can lag until you do.

The [Getting Started guide](/docs/getting-started/) has the short version of all of this next to the install links.

## Looking for an Anki widget on iPhone

AnkiMobile, the official Anki app for iPhone and iPad, doesn't have a Home Screen widget. Its [App Store listing](https://apps.apple.com/us/app/ankimobile-flashcards/id373493387) doesn't mention one, and the Anki forum thread [asking for an AnkiMobile widget](https://forums.ankiweb.net/t/ankimobile-widget/32633) has been open since July 2023. By October 30, 2026, it had 31 posts, and moderators were still moving new widget requests from elsewhere on the forum into it.

Android is different. [AnkiDroid](https://github.com/ankidroid/Anki-Android) 2.25.3, released October 17, 2026, includes four widgets: a small due-count widget, an add-note button, Deck Picker, and Card Analysis. Deck Picker lists the decks you choose with their new, learning, and review counts, and Card Analysis shows those counts for one deck. Tapping a deck opens Anki's reviewer. If you're happy in AnkiDroid, those widgets already cover the "what's due" part well, and they let you choose decks, which Nibomo's widget doesn't. What Nibomo's widget adds is the next question itself.

Nibomo's widget only shows Nibomo cards. It can't read an Anki collection, so if you want it on your iPhone, your cards have to move into Nibomo. There's no one-click Anki importer, but you can export a deck from Anki as `.apkg`, attach it in Nibomo's AI chat, and ask it to turn the deck into cards, as shown in [importing an Anki deck into Nibomo](/blog/import-anki-apkg/). That doesn't carry over your Anki review history, templates, or add-ons. If those matter to you, Anki is still the better home. The [Anki vs Nibomo comparison](/blog/anki-vs-flashcards-open-source-app/) goes through the tradeoffs in detail.

*AI tools researched, drafted, and edited this article from the Nibomo app source code at commit `55bdd5155`, AnkiDroid's public source at release 2.25.3, and the linked Apple, Google, and Anki pages. The widget screenshots were captured from app commit `cc410c769` on an iPhone 17 Pro simulator with iOS 27.0 and an Android 17 emulator, using a guest session with demo geography cards. Nibomo is built by Kirill Markin, whose site publishes this article.*
