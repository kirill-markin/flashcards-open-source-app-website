---
title: "FSRS क्या है? स्पेस्ड रिपिटिशन शेड्यूलर कैसे काम करता है (2026)"
description: "FSRS अनुमान लगाता है कि आप हर फ़्लैशकार्ड का जवाब कब भूल सकते हैं, फिर आपकी desired retention के आधार पर अगली समीक्षा तय करता है। जानें कि ratings, memory states और settings कैसे जुड़ते हैं।"
date: "2026-08-25"
image: "/blog/what-is-fsrs.png"
keywords:
  - "FSRS क्या है"
  - "FSRS spaced repetition"
  - "FSRS कैसे काम करता है"
  - "Free Spaced Repetition Scheduler"
  - "FSRS algorithm"
  - "Anki FSRS"
  - "desired retention"
---

आप एक फ़्लैशकार्ड देखते हैं, थोड़ी कोशिश के बाद जवाब याद आ जाता है और आप Good दबाते हैं। वह कार्ड कुछ समय के लिए गायब हो जाता है। दूसरे कार्ड पर Again दबाते ही वह काफ़ी जल्दी लौट आता है। FSRS को नहीं पता कि एक जवाब शरीर रचना से जुड़ा था और दूसरा स्पैनिश से। वह सिर्फ़ समय, कार्ड की मौजूदा memory state और आपकी चुनी rating देखता है।

**FSRS, यानी Free Spaced Repetition Scheduler, एक open-source scheduling algorithm है। यह अनुमान लगाता है कि आपको हर कार्ड याद रहने की कितनी संभावना है और retention target के आधार पर अगली समीक्षा की तारीख चुनता है।** इसके लिए यह review history, बीते हुए समय और चार ratings—Again, Hard, Good व Easy—का इस्तेमाल करता है। फ़्लैशकार्ड ऐप अब भी कार्ड, review screen, learning steps और बाकी product features संभालता है।

**FSRS क्या है**—इसका छोटा जवाब यही है। FSRS कैसे काम करता है, यह समझने के लिए तीन मान—Difficulty, Stability और Retrievability—समझने होंगे। साथ ही एक अहम बात: ये तीनों एक जैसे सहेजे गए scores की तरह काम नहीं करते।

**तथ्यों की जाँच:** 25 अगस्त 2026।

![ग्रीनहाउस की देखभाल करने वाली महिला अलग-अलग जल स्तर वाले तीन पौधों के जलाशय जाँचती है और सीमा तक पहुँचे जलाशय को फिर भरती है](/blog/what-is-fsrs.png)

## FSRS शेड्यूलर है, फ़्लैशकार्ड ऐप नहीं

Anki में FSRS का इस्तेमाल किया जा सकता है। Flashcards Open Source App भी FSRS इस्तेमाल करता है। दूसरे products और libraries भी इसे लागू कर सकते हैं। [open-spaced-repetition project](https://github.com/open-spaced-repetition) इसके model, implementations और सहायक tools को खुले तौर पर उपलब्ध कराता है।

Product और शेड्यूलर की भूमिकाएँ अलग-अलग हैं:

| परत | इसकी भूमिका |
| --- | --- |
| फ़्लैशकार्ड ऐप | कार्ड सहेजता है, review screen दिखाता है, data sync करता है और आपकी चुनी rating दर्ज करता है |
| FSRS शेड्यूलर | कार्ड की memory state अपडेट करता है और अगला उपयुक्त interval निकालता है |
| FSRS optimizer | Host app में optimization की सुविधा होने पर review history के अनुसार model parameters fit करता है |
| आप | तय करते हैं कि कार्ड में क्या पूछा जाना चाहिए, जवाब याद करते हैं और अपनी कोशिश को ईमानदारी से rate करते हैं |

इस अंतर से **Anki FSRS** जैसे शब्दों का मतलब साफ़ हो जाता है। Anki ऐप है; FSRS उसके भीतर चालू किया जाने वाला शेड्यूलर है। [Anki, SuperMemo और FSRS की तुलना](/blog/anki-vs-supermemo-vs-fsrs/) में भी यही अंतर मायने रखता है: Anki और SuperMemo products हैं, जबकि FSRS किसी product के भीतर काम कर सकता है।

Optimizer रोज़ाना काम करने वाले शेड्यूलर से अलग है। शेड्यूलर default parameters के साथ शुरू हो सकता है। बाद में optimizer compatible review history का विश्लेषण करके ऐसे parameters खोज सकता है जो उन reviews से बेहतर मेल खाते हों। वह आपके कार्ड दोबारा नहीं लिखता और न ही तय करता है कि पढ़ाई की सामग्री आपके लिए कितनी महत्वपूर्ण है।

## FSRS का mental model: दो सहेजी गई अवस्थाएँ और एक मौजूदा अनुमान

आधिकारिक [FSRS algorithm documentation](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm) Difficulty–Stability–Retrievability model का वर्णन करती है, जिसे आम तौर पर DSR कहा जाता है। FSRS-6 में Difficulty और Stability मिलकर वह memory state बनाते हैं जो एक review से अगले review तक सहेजी रहती है। किसी खास समय की Retrievability, Stability और बीते हुए समय के आधार पर निकाली जाती है।

यह अंतर अहम है। समय बीतने के साथ Retrievability घटती जाती है, भले ही कार्ड में कोई बदलाव न करे। इसलिए शेड्यूलर इसे तीसरा स्थायी input मानने के बजाय ज़रूरत पड़ने पर निकाल सकता है।

### Difficulty: इस याददाश्त की Stability बढ़ाना कितना कठिन है

**Difficulty** अनुमान लगाती है कि किसी कार्ड की memory stability बढ़ाना कितना कठिन है। Model के अनुसार, एक जैसी परिस्थितियों में अधिक difficulty वाले कार्ड की stability सफल review के बाद किसी आसान कार्ड की तुलना में कम बढ़ती है।

यह विषय की कोई वस्तुनिष्ठ rating नहीं है। FSRS ने शरीर रचना की आपकी परिभाषा नहीं पढ़ी और न ही आपकी स्पैनिश grammar जाँची है। Difficulty एक आंतरिक अनुमान है, जो उस कार्ड के review pattern और ratings से बनता है।

### Stability: याददाश्त कितनी धीरे धुंधली पड़ती है

**Stability** बताती है कि कोई याद कितनी धीरे धुंधली पड़ती है। अधिक सटीक रूप से कहें, तो यह वह interval है जिस पर model के अनुसार जवाब याद आने की संभावना 90% तक पहुँचती है।

यह 90% Stability की परिभाषा का हिस्सा है, भले ही आपकी चुनी desired retention कुछ और हो। Stability memory model के भीतर एक पैमाना है; यह अपने आप कार्ड का अगला interval नहीं बन जाती। सफल review के बाद Stability आम तौर पर बढ़ती है, इसलिए याद रहने की संभावना उसी स्तर तक गिरने से पहले कार्ड को अधिक समय तक रोका जा सकता है।

### Retrievability: अभी जवाब याद आने की संभावना

**Retrievability** model का यह अनुमान है कि आपको कार्ड का जवाब अभी याद आने की कितनी संभावना है। सफल review के तुरंत बाद यह अधिक होती है; समय बीतने के साथ model की forgetting curve पर घटती जाती है।

Retrievability एक अनुमान है, आपके दिमाग से ली गई sensor reading नहीं। FSRS निश्चित रूप से नहीं जान सकता कि कार्ड खुलने पर आपको जवाब याद आएगा या नहीं। वह कार्ड की state, बीते हुए समय, parameters और review history के आधार पर इसकी संभावना का अनुमान लगाता है।

तीनों को साथ रखें, तो यह mental model आसानी से समझ आता है:

- Difficulty इस बात पर असर डालती है कि Stability कितनी आसानी से बदल सकती है।
- Stability तय करती है कि Retrievability कितनी तेज़ी से घटेगी।
- Retrievability बताती है कि कार्ड इस समय उस curve पर कहाँ है।

## किसी असली review के दौरान FSRS कैसे काम करता है

Long-term review तक पहुँच चुके कार्ड के लिए scheduling loop मोटे तौर पर ऐसा चलता है:

1. FSRS कार्ड की Stability और पिछले review के बाद बीते समय से मौजूदा Retrievability निकालता है।
2. आप जवाब खोलते हैं और Again, Hard, Good या Easy चुनते हैं।
3. FSRS उस rating और कार्ड की पिछली state के आधार पर Difficulty और Stability अपडेट करता है।
4. फिर वह निकालता है कि अनुमानित Retrievability आपकी desired retention के करीब कब पहुँचेगी।
5. Host app maximum interval या fuzz जैसे संबंधित नियम लागू करता है और फिर अगला due time सहेजता है।

[प्रकाशित FSRS formulas](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) इन बदलावों को परिभाषित करते हैं। पढ़ाई करते समय आपको खुद उनकी गणना करने की ज़रूरत नहीं है। काम की बात यह है कि अगला interval “एक दिन, फिर तीन दिन, फिर एक सप्ताह” जैसी तय सीढ़ी से नहीं, बल्कि हर कार्ड के बदलते अनुमान से निकलता है।

### एक कार्ड, कई reviews

मान लीजिए एक कार्ड hippocampus की भूमिका पूछता है। सटीक intervals ऐप, settings, review के समय, parameters और rating पर निर्भर करते हैं, इसलिए यह timeline जानबूझकर केवल सामान्य क्रम दिखाती है।

| Review का क्षण | आपकी rating | इसके बाद क्या होता है |
| --- | --- | --- |
| आप नया कार्ड देखते हैं और सामान्य कोशिश में जवाब याद कर लेते हैं | Good | कार्ड के long-term review में पहुँचने से पहले ऐप तय किया हुआ learning step जारी रख सकता है |
| बाद में कार्ड long-term review तक पहुँचता है और जवाब याद करने में काफ़ी मेहनत लगती है | Hard | FSRS इसे कठिन लेकिन सफल recall मानता है और उस state में सफल long-term विकल्पों में सबसे छोटा interval देता है |
| आगे किसी review में आप जवाब नहीं दे पाते | Again | FSRS failure वाला update लागू करता है; ऐप कार्ड को relearning step से भी गुज़ार सकता है |
| कार्ड लौटता है और आपको जवाब सामान्य कोशिश में याद आ जाता है | Good | FSRS इस नई सफलता के आधार पर Difficulty और Stability अपडेट करता है, फिर retention target के आसपास अगला interval निकालता है |

यह क्रम मायने रखता है। Hard सफल recall दर्ज करता है, जबकि Again असफलता दर्ज करता है। Again पिछली history को मिटाकर कार्ड को बिल्कुल नया कार्ड भी नहीं बना देता।

## Again, Hard, Good और Easy से FSRS को क्या पता चलता है

चारों buttons बताते हैं कि अभी जवाब याद करने की कोशिश कैसी रही:

- **Again:** आपको ज़रूरी जवाब याद नहीं आया या आपका जवाब गलत था।
- **Hard:** सही जवाब याद आया, लेकिन बहुत कठिनाई या झिझक के साथ।
- **Good:** सही जवाब सामान्य कोशिश में याद आ गया।
- **Easy:** सही जवाब बहुत कम या बिना किसी खास कोशिश के याद आ गया।

आधिकारिक [Anki FSRS documentation](https://docs.ankiweb.net/deck-options.html#fsrs) इस अहम सीमा को साफ़ करती है: Again का मतलब असफलता है, जबकि Hard सफल recall है। जवाब भूलने के बाद Hard दबाने से शेड्यूलर को गलत संकेत मिलता है और आगे के intervals ज़रूरत से अधिक लंबे हो सकते हैं।

Button के ऊपर दिख रहे interval के बजाय अपनी recall के आधार पर rating चुनें। अगर Good कार्ड को आपकी उम्मीद से अधिक समय के लिए दूर भेजता है, तो समस्या settings में है। मनचाही तारीख पाने के लिए rating बदलने से setting ठीक नहीं होती; review history बदल जाती है।

अधूरे जवाब और अस्पष्ट कार्ड इस फैसले को चार labels से कहीं मुश्किल बना देते हैं। विस्तार से लिखी [Again और Hard guide](/blog/again-vs-hard-fsrs-flashcards/) ऐसे मामलों को समझाती है। छोटा और भरोसेमंद नियम है: पहले देखें कि कोशिश सफल हुई या नहीं, फिर लगी मेहनत देखें। असफल कोशिश पर Again दबाएँ; Hard, Good या Easy केवल सफल कोशिश के बाद चुनें।

FSRS वही rating स्वीकार करता है जो आप भेजते हैं। वह आपके बोले या लिखे जवाब की निष्पक्ष जाँच नहीं करता।

## Desired retention model को समीक्षा की तारीख में बदलती है

**Desired retention** जवाब याद आने की वह संभावना है जिसे आप चाहते हैं कि कार्ड due होने पर शेड्यूलर target करे। इसे `0.90` पर रखने का मतलब है कि शेड्यूलर कार्ड को उस समय के आसपास वापस लाने की कोशिश करेगा, जब model के अनुसार सफल recall की संभावना 90% होगी।

यह model का लक्ष्य है, इस बात की गारंटी नहीं कि हर दस कार्ड में ठीक नौ के जवाब हमेशा सही होंगे। अनुमान गलत हो सकते हैं, rating देने की आदतें बदल सकती हैं और असली पढ़ाई की परिस्थितियाँ सीधी-सादी नहीं होतीं।

यहाँ Stability से एक उपयोगी संबंध बनता है। Stability को 90% Retrievability पर परिभाषित किया गया है। इसलिए desired retention `0.90` होने पर review कार्ड का निकाला गया long-term interval उसकी Stability से काफ़ी हद तक जुड़ा होता है। फिर भी rounding, fuzz और maximum-interval limits आपको दिखने वाली तारीख बदल सकते हैं। जो कार्ड अभी learning phase में है, वह ऐप के short-step workflow पर चलता है।

काम के बोझ पर इसका असर सीधा है:

- अधिक desired retention कार्ड जल्दी वापस लाती है और reviews की संख्या बढ़ाती है।
- कम desired retention लंबे intervals देती है और ज़्यादा भूलने की गुंजाइश छोड़ती है।

[Anki manual का desired-retention section](https://docs.ankiweb.net/deck-options.html#desired-retention) चेतावनी देता है कि लक्ष्य 100% के करीब जाते ही workload तेज़ी से बढ़ता है। कोई एक value हर deck और हर लक्ष्य के लिए सही नहीं होती।

Optimizer desired retention नहीं सीखता; यह आपके पढ़ाई के लक्ष्य को दर्शाती है। Parameters memory model का वर्णन करते हैं, जबकि retention target शेड्यूलर को बताता है कि आप उस model के किस बिंदु पर review करना चाहते हैं।

व्यावहारिक विकल्पों और workload पर उनके असर के लिए अलग [FSRS settings guide](/blog/fsrs-settings/) पढ़ें।

## Optimizer वैकल्पिक है और desired retention फिर भी आपकी पसंद है

FSRS formulas, Difficulty और Stability को अपडेट करने व भूलने की प्रक्रिया को model करने के लिए weights के एक समूह का इस्तेमाल करते हैं। इन्हें आम तौर पर **parameters** कहा जाता है। कोई implementation default parameters इस्तेमाल कर सकता है। वहीं optimizer वाला host app compatible review history के अनुसार parameters fit कर सकता है।

मौजूदा Anki में **Optimize** action review history का विश्लेषण करके उसके मुताबिक fit किए हुए parameters बनाता है। [Anki parameter documentation](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) सलाह देती है कि इन values को खुद edit न करें और किसी दूसरे व्यक्ति के parameters copy न करें। दूसरे FSRS apps यह सुविधा दिए बिना defaults इस्तेमाल कर सकते हैं।

यहाँ “Optimized” का एक सीमित अर्थ है: optimizer के अनुसार parameters दिए गए review data से बेहतर मेल खाते हैं। इसका मतलब यह नहीं कि कार्ड सही हैं, पढ़ाई की योजना समझदारी भरी है या भविष्य का हर अनुमान सही होगा।

Defaults फिर भी मायने रखते हैं। शेड्यूलर personalized fitting के बिना भी काम कर सकता है और हर कार्ड के लिए अलग memory state बनाए रख सकता है।

## Learning steps अलग समय-सीमा संभालते हैं

Long-term spacing शुरू होने से पहले नए कार्ड अक्सर कुछ ही मिनटों में दोबारा दिखते हैं। Review में असफल हुआ कार्ड भी जल्दी लौट सकता है। फ़्लैशकार्ड ऐप्स इन छोटे अंतरालों को **learning steps** और **relearning steps** के रूप में दिखाते हैं।

- Learning steps छोटे, तय अंतराल हैं जिनके दौरान नया कार्ड पहली बार सिखाया जा रहा होता है।
- Relearning steps वे छोटे अंतराल हैं जो पहले long-term review तक पहुँच चुके कार्ड पर Again दबाने के बाद आते हैं।
- कार्ड के इस चरण से निकलने के बाद उसका अगला long-term interval FSRS memory model से आता है।

इसीलिए दस मिनट का learning step बदलना, desired retention बदलने से अलग है। यह step सीधे तय करता है कि कार्ड थोड़ी देर में कब लौटेगा। Desired retention model पर आधारित long-term intervals तय करती है। Implementation के अनुसार शेड्यूलर learning के दौरान भी memory अपडेट कर सकता है, इसलिए learning steps याददाश्त की कोई अलग theory नहीं, बल्कि workflow की सीमा हैं।

Anki की मौजूदा [FSRS learning-step guidance](https://docs.ankiweb.net/deck-options.html#learning-steps) ऐसे steps रखने की सलाह देती है जिन्हें उसी दिन पूरा किया जा सके। Step fields खाली होने पर Anki में FSRS को short-term scheduling सौंपने का एक experimental विकल्प भी है। दूसरे ऐप अलग रास्ता अपना सकते हैं, इसलिए Anki की settings copy करने से पहले जाँचें कि आपका ऐप किन विकल्पों का समर्थन करता है।

## FSRS आपके लिए क्या तय नहीं कर सकता

FSRS खराब input को भी बहुत सावधानी से schedule कर सकता है। जटिल intervals से कार्ड बेहतर नहीं हो जाते।

शेड्यूलर यह नहीं कर सकता:

- समझना कि कार्ड का मतलब क्या है
- जाँचना कि सहेजा गया जवाब सच है या अभी भी सही है
- तय करना कि अधूरे जवाब को सही माना जाए या नहीं
- अस्पष्ट सवाल या ज़रूरत से अधिक भरे हुए back को सुधारना
- जानना कि कोई तथ्य आपके लक्ष्यों के लिए महत्वपूर्ण है या नहीं
- नए कार्डों की ऐसी लगातार आमद को अपने आप संभालना जो लंबे समय तक टिकाऊ न हो
- यह गारंटी देना कि कार्ड due होने पर आप reviews पूरे करेंगे

मान लीजिए कोई कार्ड पूछता है, “प्रतिरक्षा तंत्र समझाइए।” बार-बार Again दबाने से reviews बढ़ सकते हैं, लेकिन कोई शेड्यूलर इतने व्यापक सवाल को एक स्पष्ट recall task में नहीं बदल सकता। इसे card editor में सुधारना होगा। [बेहतर फ़्लैशकार्ड बनाने की guide](/blog/how-to-make-better-flashcards/) इसी हिस्से को समझाती है।

यह सीमा पढ़ाई की समस्याओं की वजह पहचानने में मदद करती है। अजीब long-term timing, settings, rating history या implementation की ओर इशारा करती है। कार्ड के back से बार-बार असहमति हो, तो समस्या कार्ड की गुणवत्ता में है। बहुत बड़ी queue की वजह FSRS algorithm नहीं, बल्कि लगातार जोड़े जा रहे नए कार्ड भी हो सकते हैं।

## Flashcards में FSRS कैसे लागू किया गया है

> **Disclosure:** मैं Kirill Markin हूँ और [Flashcards Open Source App](/features/) बनाता हूँ। यह हिस्सा जारी हो चुके product के व्यवहार का वर्णन करता है; यह दावा नहीं करता कि हर विद्यार्थी को कोई दूसरा ऐप छोड़ देना चाहिए।

Flashcards इस समय आधिकारिक `ts-fsrs` 5.2.3 scheduling flow के अनुरूप **FSRS-6** लागू करता है। इसमें standard Again, Hard, Good और Easy ratings इस्तेमाल होती हैं। Backend, iOS और Android के शेड्यूलर एक जैसा व्यवहार करते हैं, जबकि web review flow backend शेड्यूलर का ही दोबारा इस्तेमाल करता है।

मौजूदा defaults हैं: desired retention `0.90`, learning steps 1 और 10 मिनट, relearning step 10 मिनट, maximum interval 36,500 दिन और fuzz चालू। Workspace owners इन settings को बदल सकते हैं। बदलाव केवल आगे होने वाले reviews पर लागू होते हैं; पहले से तय due dates को बिना बताए दोबारा नहीं बनाया जाता।

Flashcards v1 में आधिकारिक FSRS-6 default weights तय करके रखता है। Users उन्हें configure नहीं कर सकते और product इस समय हर user की history से personalized FSRS parameters fit नहीं करता। Anki के optimizer से तुलना करते समय यह सीमा महत्वपूर्ण है।

सार्वजनिक [Flashcards FSRS scheduling specification](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md) मौजूदा state model, defaults, settings की सीमाओं और सभी platforms पर एक-जैसे व्यवहार के नियमों का दस्तावेज़ है। विस्तृत [features page](/features/) दिखाती है कि शेड्यूलर पूरे product में कहाँ आता है; वह FSRS को अपने आप में एक ऐप की तरह पेश नहीं करती।

## FSRS के बारे में FAQ

### FSRS का अर्थ क्या है?

FSRS का अर्थ **Free Spaced Repetition Scheduler** है। यह एक खुला शेड्यूलर है, जो तय करता है कि फ़्लैशकार्ड को दोबारा कब दिखाया जाए।

### क्या FSRS सिर्फ Anki के लिए है?

नहीं। Anki में FSRS implementation शामिल है, लेकिन FSRS एक शेड्यूलर है जिसे दूसरे apps और libraries भी लागू कर सकते हैं। Editing, sync, imports और review UI जैसे product features host app देता है।

### क्या FSRS जानता है कि मेरा जवाब सही है या नहीं?

नहीं। FSRS को ऐप में दर्ज की गई rating मिलती है। अपने जवाब की तुलना कार्ड पर दिए जवाब से करके आपको ही तय करना होता है कि कोशिश Again, Hard, Good या Easy थी।

### क्या Difficulty, Stability और Retrievability तीनों कार्ड पर सहेजी जाती हैं?

ज़रूरी नहीं। FSRS-6 में Difficulty और Stability मिलकर एक review से अगले review तक सहेजी जाने वाली memory state बनाती हैं। किसी खास समय की Retrievability, Stability और बीते हुए समय से निकाली जाती है। ऐप अपने workflow के लिए अतिरिक्त scheduling fields सहेज सकता है।

### क्या 90% desired retention का मतलब है कि मुझे हर चीज का 90% याद रहेगा?

नहीं। यह शेड्यूलर को कार्ड due होने पर याद आने की अनुमानित 90% संभावना target करने को कहती है। यह हर कार्ड, study session, परीक्षा या असली परिस्थिति के लिए गारंटी नहीं है।

### क्या मुझे optimized FSRS parameters चाहिए?

शुरुआत में नहीं। FSRS default parameters इस्तेमाल कर सकता है। अगर आपका ऐप optimization support करता है और आपके पास उपयोगी review history है, तो fitted parameters उस history को बेहतर ढंग से दर्शा सकते हैं। किसी दूसरे व्यक्ति के parameters copy न करें।

### क्या FSRS, SM-2 से बेहतर है?

दोनों अलग scheduling models इस्तेमाल करते हैं। FSRS एक स्पष्ट retention target जोड़ता है और एक ही interval-and-ease-factor structure पर निर्भर रहने के बजाय हर कार्ड का memory model अपडेट करता है। विस्तार से लिखी [FSRS और SM-2 की तुलना](/blog/fsrs-vs-sm-2/) app features को बीच में मिलाए बिना सबूत और व्यावहारिक tradeoffs समझाती है।

### मुझे सबसे पहले कौन-सी FSRS setting समझनी चाहिए?

Desired retention से शुरू करें, क्योंकि यह recall और workload के बीच समझौते को सीधे व्यक्त करती है। फिर learning और relearning steps जाँचें। Model parameters तब तक न बदलें, जब तक आपका ऐप आधिकारिक तौर पर समर्थित optimization workflow न दे।

## भूमिकाओं का यह बँटवारा याद रखें

ऐप कार्ड दिखाता है। आप तय करते हैं कि जवाब कितनी अच्छी तरह याद आया। FSRS Difficulty और Stability को अपडेट करता है, मौजूदा समय की Retrievability निकालता है और desired retention के आधार पर अगला review चुनता है। Learning steps कार्ड की जल्दी वापसी संभालते हैं और वैकल्पिक optimizer review history के अनुसार model parameters fit कर सकता है।

भूमिकाओं का यह बँटवारा बताता है कि समस्या कहाँ ठीक करनी है। Workload या long-term timing गलत लगे, तो settings बदलें। सवाल या जवाब गलत हो, तो कार्ड सुधारें। Review करते समय अपनी कोशिश को ईमानदारी से rate करें।

FSRS model के आधार पर तारीख चुन सकता है। उपयोगी संकेत की शुरुआत फिर भी एक साफ़ कार्ड और आपके दबाए button से ही होती है।
