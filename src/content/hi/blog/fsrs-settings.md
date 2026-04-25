---
title: "2026 में FSRS Settings: desired retention, learning steps और review load को बिना over-tuning संभालना"
description: "Flashcards के लिए 2026 की practical FSRS settings guide: desired retention, learning steps, maximum interval, new-card limits, और कब scheduler tuning रोकनी चाहिए।"
date: "2026-04-25"
keywords:
  - "FSRS settings"
  - "Anki FSRS settings"
  - "desired retention FSRS"
  - "FSRS learning steps"
  - "best FSRS settings"
  - "FSRS review load"
  - "spaced repetition settings"
  - "FSRS flashcards"
---

FSRS में सबसे अजीब गलती retention को थोड़ा ज्यादा या कम रखना नहीं है। असली अजीब गलती यह है कि deck की आधी cards अभी भी "Chapter 4 explain करो" जैसी हों, और आप तीन शाम scheduler tune करने में लगा दें।

मुझे समझ आता है कि ऐसा क्यों होता है। जैसे ही लोग तय करते हैं कि FSRS, SM-2 से बेहतर है, अगली search आमतौर पर **FSRS settings** या **Anki FSRS settings** होती है। Algorithm serious लगता है, settings mathematical दिखती हैं, और अचानक flashcards review करना production database configure करने जैसा लगने लगता है।

इतना dramatic होने की जरूरत नहीं है।

![Warm desk पर flashcards, छोटा retention dial, और शांत evening study setup](/blog/fsrs-settings.png)

## FSRS settings workload decision हैं, personality test नहीं

FSRS की सबसे बड़ी setting सिर्फ memory setting नहीं है।

यह tradeoff setting है।

जब आप desired retention बढ़ाते हैं, तो आप कह रहे होते हैं कि cards जल्दी वापस आएं ताकि भूलना कम हो। यह अच्छा हो सकता है। इसका मतलब reviews ज्यादा भी होगा। जब आप इसे घटाते हैं, तो queue हल्की होती है, लेकिन forgetting ज्यादा स्वीकार करनी पड़ती है।

यह moral question नहीं है। यह operating question है।

अगर daily review queue पहले से भारी है, तो retention सिर्फ इसलिए बढ़ाना कि वह ज्यादा serious लगता है, पूरे system को खराब कर सकता है। अगर आप high-stakes exam की तैयारी कर रहे हैं और deck साफ है, तो थोड़ा बढ़ाना समझ में आता है।

Problem तब शुरू होती है जब लोग अपने असली दिन को देखे बिना "best" FSRS setting खोजते हैं।

## desired retention से शुरू करें

Desired retention वह setting है जिसे सबसे पहले समझना चाहिए।

सरल भाषा में, यह scheduler को बताती है कि card due होने पर आप उसे याद रखने की कितनी संभावना चाहते हैं। `0.90` का मतलब है कि system review time पर लगभग 90% recall target कर रहा है।

[Anki manual](https://docs.ankiweb.net/deck-options.html#desired-retention) इस tradeoff को साफ बताता है: desired retention बढ़ाने से intervals छोटे होते हैं, reviews बढ़ते हैं, और value 1.0 के करीब जाते ही workload तेजी से बढ़ता है।

यहीं trap है।

90% से 95% जाना settings box में छोटा बदलाव लगता है। Daily life में यह ऐसा लग सकता है जैसे app ने आपके लिए दूसरी job ढूंढ दी हो।

मैं boring शुरुआत करूंगा:

- अगर reviews manageable हैं, तो normal default use करें
- target तभी घटाएं जब queue साफ तौर पर भारी हो और थोड़ा ज्यादा भूलना acceptable हो
- तभी बढ़ाएं जब material extra time justify करता हो
- धीरे बदलें, फिर देखें क्या हुआ

Goal settings screen जीतना नहीं है। Goal review जारी रखना है।

## 90 percent अच्छा default है, कानून नहीं

90% default एक अच्छा center है।

यह magic number नहीं है।

Casual language learning में थोड़ा कम target ठीक हो सकता है अगर habit बचती है। Medical, law, finance या certification material में, खासकर exam के पास, ज्यादा certainty चाहिए हो सकती है। Messy deck जिसमें कमजोर AI-generated cards भरे हों, उसमें retention बढ़ाने से अक्सर खराब cards ज्यादा बार दिखते हैं।

यह थोड़ा painful है, लेकिन useful है।

अगर card खराब लिखा है, FSRS settings उसे अच्छा learning object नहीं बना सकतीं। वे सिर्फ यह तय कर सकती हैं कि खराब card कब वापस आए।

Retention ऊपर ले जाने से पहले मैं एक simple सवाल पूछूंगा: क्या यह deck 15% delete करने से बेहतर होगा?

अक्सर हां।

## किसी और के FSRS parameters copy न करें

Desired retention आप चुनते हैं।

FSRS parameters के साथ ऐसा नहीं है।

Parameters optimize करने का point यह है कि scheduler आपकी review history से सीखे। किसी और का screenshot देखकर उसके parameters copy करना उसी point को खराब करता है। उनके cards, recall habits, deck maturity और answer-button behavior आपके जैसे नहीं हैं।

[FSRS optimal retention documentation](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) इसलिए useful है क्योंकि वह retention को knowledge और workload के balance की तरह देखता है, न कि किसी stranger से लिया गया number।

Practical version simple है:

- FSRS parameters manually edit न करें जब तक वजह बिल्कुल clear न हो
- forum post से parameters paste न करें
- tool support करे तो अपनी review history से optimize करें
- parameter tuning को maintenance समझें, entertainment नहीं

यह उन जगहों में से है जहां कम करना सच में बेहतर engineering है।

## learning steps boring रखें

Learning steps में कई old SM-2 habits बची रहती हैं।

लोग `1m 10m 1d 3d` जैसी लंबी chains डालते हैं क्योंकि वह careful लगता है। FSRS में यह awkward हो सकता है। First learning phase के बाद long-term timing scheduler को संभालनी चाहिए। अगर learning steps कई दिनों तक फैलते हैं, तो आप उस हिस्से को delay कर रहे हैं जिसके लिए FSRS चुना था।

Anki manual FSRS के साथ learning और relearning steps को एक दिन से कम रखने और steps कम रखने की सलाह देता है।

यह अच्छी advice है।

अधिकतर decks में मैं learning steps छोटे रखूंगा और बचा हुआ time cards सुधारने में लगाऊंगा:

- overloaded prompts split करें
- लंबे answers छोटे करें
- recognition cards को recall cards बनाएं
- उन cards को delete करें जो सिर्फ इसलिए हैं क्योंकि AI ने politely generate कर दिया

Scheduler तब बेहतर काम करता है जब card schedule करने लायक हो।

## maximum interval के साथ सावधान रहें

Maximum interval harmless लगता है क्योंकि वह safety limit जैसा दिखता है।

लेकिन यह quietly extra work बना सकता है।

अगर आप intervals को बहुत aggressively cap करते हैं, तो mature cards बार-बार लौटते रहेंगे, जबकि FSRS उन्हें आगे भेज देता। यह narrow exam window या critical knowledge में useful हो सकता है। General anxiety setting के रूप में यह आमतौर पर महंगा पड़ता है।

बहुत छोटा maximum interval spaced repetition को repeated checking में बदल देता है।

यह expensive है।

मैं इसे तभी घटाऊंगा जब real reason हो:

- exam date पास है
- material expire या change होता है
- deck critical operational knowledge के लिए है
- आपने workload measure किया है और उसे afford कर सकते हैं

वरना easy mature cards को दूर जाने दें ताकि उन cards के लिए जगह रहे जिन्हें सच में आपकी जरूरत है।

## FSRS को blame करने से पहले new-card limits देखें

Review-load problems ज्यादातर intake problems होते हैं।

Scheduler को blame मिलता है क्योंकि वही हर सुबह bill लेकर आता है। लेकिन bill अक्सर yesterday's new cards, last week's import, या 300-card AI batch से आता है जो करीब बारह मिनट तक efficient लगा था।

अगर reviews बहुत ज्यादा हैं, तो FSRS settings छूने से पहले मैं ये देखूंगा:

- आप per day कितने new cards add कर रहे हैं
- कितने generated cards edit नहीं हुए
- कितने cards एक साथ कई facts test करते हैं
- कितने stale cards suspend या delete होने चाहिए

यह broader planning question से जुड़ता है:

- [How Many New Flashcards Per Day in 2026?](https://flashcards-open-source-app.com/blog/how-many-new-flashcards-per-day/)

FSRS अच्छे deck को ज्यादा calm schedule कर सकता है। Oversized deck को छोटा नहीं कर सकता।

## Exams के लिए मैं क्या बदलूंगा

Exam decks अलग होते हैं क्योंकि date real होती है।

Exam पास हो तो best FSRS setting हमेशा वही नहीं होगी जो long-term language deck के लिए सही है। हो सकता है कुछ weeks के लिए heavier workload accept करना पड़े क्योंकि material अभी important है।

फिर भी मैं heroic settings avoid करूंगा।

Exams के लिए algorithm से पहले workflow बदलूंगा:

1. नए cards जोड़ना comfort से पहले रोकें
2. desired retention normal range के पास रखें जब तक deck clean न हो
3. weak topics के लिए tags या filtered review use करें
4. workload तभी बढ़ाएं जब calendar सच में absorb कर सके
5. final week को giant imports से बचाएं

इस scenario के लिए यह guide बेहतर है:

- [How to Study for an Exam With FSRS in 2026](https://flashcards-open-source-app.com/blog/how-to-study-for-an-exam-with-fsrs/)

Short version: exams stricter review justify करते हैं। Chaos नहीं।

## Flashcards इस setup में कहां fit होता है

[Flashcards](https://flashcards-open-source-app.com/) FSRS को landing page badge की तरह नहीं, product contract की तरह treat करता है।

Current product direction serious review की important settings से match करती है:

- vague note blobs की जगह front/back cards
- AI-assisted drafting, लेकिन edit करने की expectation के साथ
- real review loop के लिए FSRS scheduling
- workspace-level settings जैसे desired retention, learning steps, relearning steps, maximum interval, और fuzz
- hosted web app और open-source code उन लोगों के लिए जिन्हें system कैसे काम करता है यह जानना है

Last point FSRS-heavy users के लिए important है।

अगर आप **best FSRS settings** search कर रहे हैं, तो शायद आपको यह भी care है कि product scheduler को vague marketing words के पीछे छिपा रहा है या नहीं। मैं ऐसी tool prefer करूंगा जो review model को product design का real part बनाती है।

## Simple FSRS settings checklist

अगर मैं आज नया deck setup करूं, तो checklist short रखूंगा:

| Setting | Practical default | कब revisit करें |
|---|---|---|
| Desired retention | Normal default के आसपास शुरू करें | Reviews बहुत heavy हैं, या material higher recall मांगता है |
| FSRS parameters | अपनी history से optimize करें | Enough review history है और tool support करता है |
| Learning steps | Short और minimal रखें | Same-day learning बहुत rushed या repetitive लगे |
| Relearning steps | Simple रखें | Failed mature cards unhelpful rhythm में लौटें |
| Maximum interval | Reason न हो तो generous रखें | Exam windows, critical knowledge, या measured retention gaps |
| New cards/day | Ambition से कम set करें | Daily reviews real life को crowd out कर रहे हैं |

Glamorous नहीं।

Useful है।

## Best FSRS setting वही है जिसे आप continue कर सकें

लोग **FSRS settings** इसलिए search करते हैं क्योंकि वे algorithm को precise रखना चाहते हैं।

यह reasonable है। अच्छी implementation और clean deck के साथ FSRS पुराने scheduling से बेहतर है। लेकिन practical win endless tuning से नहीं आता। यह कुछ calm choices से आता है, फिर scheduler को काम करने देने और cards को बेहतर करने से।

Desired retention को workload lever की तरह use करें।

Learning steps short रखें।

Parameters copy न करें।

Scheduler blame करने से पहले new cards control करें।

और अगर फिर भी सब भारी लगे, तो answer शायद दूसरी setting नहीं है। शायद छोटा और साफ deck है।

## Studying को settings maintenance बनाए बिना FSRS try करें

अगर आप यह workflow try करना चाहते हैं:

- [Flashcards खोलें](https://flashcards-open-source-app.com/)
- [App खोलें](https://app.flashcards-open-source-app.com/)
- [Features page पढ़ें](https://flashcards-open-source-app.com/features/)
- [FSRS और SM-2 compare करें](https://flashcards-open-source-app.com/blog/fsrs-vs-sm-2/)
- [GitHub पर source देखें](https://github.com/kirill-markin/flashcards-open-source-app)
