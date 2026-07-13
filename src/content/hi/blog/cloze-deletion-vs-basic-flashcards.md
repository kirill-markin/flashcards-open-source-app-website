---
title: "Cloze Deletion बनाम Basic Flashcards: Context कब मदद करता है—और कब जवाब बता देता है"
description: "Cloze deletion और basic flashcards की तुलना करें, जानें कि context कब मदद करता है और कब जवाब का सुराग देता है, फिर FSRS review के लायक बेहतर cards के लिए व्यावहारिक decision rule अपनाएँ।"
date: "2026-07-13"
image: "/blog/cloze-deletion-vs-basic-flashcards.png"
keywords:
  - "cloze deletion vs basic flashcards"
  - "cloze deletion flashcards"
  - "basic vs cloze Anki"
  - "fill in the blank flashcards"
  - "cloze deletion कब इस्तेमाल करें"
  - "cloze cards बनाम question-answer cards"
  - "AI cloze flashcards"
  - "cloze cards को basic flashcards में बदलें"
---

दो cards एक ही तथ्य पूछ सकते हैं, फिर भी आपकी याददाश्त से अलग-अलग तरह का काम करवा सकते हैं:

- `The sinoatrial node is in the [...] atrium.`
- `Which atrium contains the sinoatrial node?`

Cloze वाला card आपसे वाक्य में छूटा हुआ शब्द भरने को कहता है। Basic card एक स्पष्ट सवाल पूछकर संबंध याद करने को कहता है। **Cloze deletion vs basic flashcards** के चुनाव में context तभी उपयोगी है, जब वह target को सीमित करे लेकिन जवाब का सुराग न दे।

जब दिखाई देने वाला वाक्य भी उस जानकारी का हिस्सा हो जिसे आपको याद रखना है, तब cloze चुनें। जब वही तथ्य उस वाक्य के बिना याद करना हो, blank के कई सही जवाब हो सकते हों, या grammar ज़रूरत से ज़्यादा hint दे रही हो, तब basic front/back card चुनें। हर स्थिति में एक ही format बेहतर नहीं होता।

![गर्म रोशनी वाले डेस्क पर cloze-style वाक्य पट्टी में खाली जगह और पास में basic front/back card पलटता हुआ हाथ](/blog/cloze-deletion-vs-basic-flashcards.png)

## Cloze deletion vs basic flashcards: व्यावहारिक अंतर

Cloze deletion में वाक्य का एक हिस्सा छिपाकर आपसे missing text भरने को कहा जाता है। उदाहरण के लिए, Anki `Canberra was founded in {{c1::1913}}` को ऐसे card में बदलता है जिसमें year की जगह blank दिखता है। एक note के अलग-अलग cloze numbers से अलग cards बन सकते हैं, जैसा कि [Anki की official cloze documentation](https://docs.ankiweb.net/editing.html#cloze-deletion) में बताया गया है।

Basic card के front पर स्पष्ट सवाल और back पर जवाब होता है:

- Front: Canberra की स्थापना किस वर्ष हुई थी?
- Back: 1913.

Cloze में source की कुछ wording सामने रहती है, जबकि basic card स्पष्ट retrieval cue देता है। इस अंतर से तय होता है कि आपको कितना context मिलेगा, जवाब को ईमानदारी से grade करना कितना आसान होगा, और card मूल paragraph से अलग भी अपने दम पर काम करेगा या नहीं।

| अगर आपको... | शुरुआत इससे करें | क्यों |
| --- | --- | --- |
| किसी अर्थपूर्ण वाक्य में छूटा term याद करना है | Cloze | वाक्य उपयोगी context देता है |
| किसी भाषा या technical phrase में शब्द का सही इस्तेमाल याद करना है | Cloze | Usage और grammar भी target का हिस्सा हो सकते हैं |
| Source के वाक्य के बिना तथ्य याद करना है | Basic | Prompt अपने आप में पूरा होता है |
| कोई कारण, अंतर या प्रक्रिया समझानी है | Basic | सीधा सवाल expected answer स्पष्ट कर देता है |
| कई संभावित सही completions को ईमानदारी से grade करना है | Basic | Answer किसी एक exact word के बजाय सही idea बता सकता है |
| साफ़ source text से कई छोटे cards का draft बनाना है | Cloze candidates बनाएँ, फिर जाँचें | Text हटाकर draft बनाना तेज़ है, लेकिन हर cue को review करना फिर भी ज़रूरी है |

यह तालिका सिर्फ़ शुरुआती मार्गदर्शक है। कोई अस्पष्ट basic question, सटीक cloze से भी खराब हो सकता है। एक ही तथ्य दोनों formats में तब रखा जा सकता है, जब दोनों सच में अलग retrievals test करें। सिर्फ़ wording बदलने से duplicate reviews ही बनते हैं।

## Cloze तब इस्तेमाल करें जब context भी याद रखने वाली जानकारी का हिस्सा हो

Context तब मदद करता है, जब वह उस परिस्थिति जैसा हो जहाँ आप जवाब इस्तेमाल करेंगे। भाषा सीखने वाले को वाक्य में सही preposition चुनना पड़ सकता है। Medical student को किसी structure को उसकी location से जोड़ना पड़ सकता है। Developer को command या protocol phrase में इस्तेमाल होने वाला exact term याद रखना पड़ सकता है।

ये cloze deletion flashcards उपयोगी context बनाए रखते हैं:

- `She is responsible [...] preparing the monthly report.` → `for`
- `The sinoatrial node is in the [...] atrium.` → `right`
- `HTTP status code [...] means Not Found.` → `404`

हर वाक्य task का दायरा छोटा करता है, लेकिन recall की ज़रूरत खत्म नहीं करता। बाकी दिखाई देने वाले शब्द भी उस संभावित इस्तेमाल से मेल खाते हैं: वाक्य पूरा करना, anatomical relation याद करना, या status code को उसके meaning से जोड़ना।

SuperMemo के [Twenty Rules of Formulating Knowledge](https://www.supermemo.com/en/blog/twenty-rules-of-formulating-knowledge) में cloze deletion को समझे जा चुके source material से review items जल्दी बनाने का तरीका बताया गया है। वही guide minimum information principle और छोटी, बिना ambiguity वाली wording की सलाह भी देती है। Textbook के पूरे paragraph में सिर्फ़ एक शब्द छिपाना इन दोनों goals से चूक जाता है।

Context ambiguity भी दूर कर सकता है। अलग-अलग fields में `GRE` के अलग meanings हो सकते हैं, इसलिए `biochemistry: GRE` जैसा cue बताता है कि कौन-सा expansion याद करना है। उपयोगी context बताता है कि किस चीज़ को याद करना है; ज़रूरत से ज़्यादा context जवाब आपके लिए पूरा कर देता है।

## हर cloze में answer leak की जाँच करें

Answer leakage cloze cards की अनिवार्य कमी नहीं, बल्कि card design की गलती है। यह तब होता है, जब दिखाई देने वाला वाक्य आपको वह जानकारी retrieve किए बिना ही pattern पूरा करने देता है जिसे आप सीखना चाहते थे।

इन आम leaks पर नज़र रखें:

- Grammar जवाब का रूप बता देती है। `These cells [...] oxygen` से पता चल सकता है कि answer plural verb होना चाहिए, भले concept अब भी स्पष्ट न हो।
- जुड़ा हुआ term दिखाई देता रहता है। `Positive reinforcement adds a stimulus; [...] reinforcement removes one` में contrast देखकर `negative` guess करना आसान हो जाता है।
- शब्द का एक हिस्सा spelling hint देता है। Anki manual दिखाता है कि `Canberra` का सिर्फ़ एक हिस्सा छिपाने पर `C[...]` दिखाई दे सकता है।
- Units या labels संभावित जवाबों का दायरा बहुत छोटा कर देते हैं। `The dose is [...] mg` number-recognition card बन सकता है, जबकि असली skill किसी situation के लिए सही dose चुनना है।
- बार-बार दोहराई गई source wording पहचान का निशान बन जाती है। आपको तथ्य की जगह याद रहता है कि कौन-सा वाक्य किस slide से आया था।

एक छोटा test इनमें से कई leaks पकड़ लेता है: क्या topic न जानने वाला व्यक्ति भी grammar, opposites, word shape या deck order देखकर काफ़ी भरोसे से guess कर सकता है? अगर हाँ, तो cue दोबारा लिखें।

यह card गलत वजह से आसान है:

- Cloze: `The parasympathetic division is the opposite of the [...] division.`
- Answer: `sympathetic`

Basic version असली उपयोगी अंतर test कर सकता है:

- Front: Heart rate पर सामान्य असर के लिहाज़ से sympathetic और parasympathetic divisions कैसे अलग होते हैं?
- Back: Sympathetic activity आम तौर पर heart rate बढ़ाती है; parasympathetic activity आम तौर पर उसे घटाती है।

दोबारा लिखा गया card मूल वाक्य के बिना भी काम करता है और grading के लिए स्पष्ट target देता है।

## Independent recall और flexible answers के लिए basic cards चुनें

Basic cards कारण, तुलना, फैसले और प्रक्रियाओं के लिए खास तौर पर अच्छे होते हैं। इन targets को अक्सर एक missing word में नहीं समेटा जा सकता, और इन्हें जबरन वाक्य में डालने पर कई acceptable completions बन जाते हैं।

इन versions की तुलना करें:

- Weak cloze: `For a normal good, demand [...] when consumer income rises.`
- Basic front: Normal good के लिए consumer income बढ़ने पर demand का क्या होता है?
- Basic back: Demand बढ़ती है और demand curve दाईं ओर shift होती है।

`Increases`, `rises` और `grows`—तीनों cloze के सही जवाब हो सकते हैं। Basic card आपको लेखक के चुने हुए verb से match करने के बजाय idea को grade करने देता है।

जब source wording सामने नहीं होगी, तब भी basic cards बेहतर काम करते हैं। कोई सवाल उस exact formula का नाम ले सकता है जिसकी condition आपको याद करनी है, या उस procedure का जिसकी अगली step आपको बतानी है।

Back छोटा रखें। जब एक front चार अलग-अलग बातें माँगे, तो card बाँट दें। [बेहतर flashcards बनाने की guide](/hi/blog/how-to-make-better-flashcards/) prompt clarity और card size को विस्तार से समझाती है, जबकि [flashcard पर क्या होना चाहिए](/hi/blog/what-should-go-on-a-flashcard/) यह तय करने में मदद करता है कि कोई तथ्य scheduled review के लायक भी है या नहीं।

## 30 सेकंड का decision rule इस्तेमाल करें

Card save करने से पहले साफ़-साफ़ बताएँ कि exact retrieval target क्या है। फिर इन पाँच सवालों से उसे परखें:

1. क्या आसपास का वाक्य उस परिस्थिति जैसा है जहाँ मैं यह जानकारी इस्तेमाल करूँगा?
2. क्या दिखाई देने वाला context जवाब बताए बिना सिर्फ़ एक intended answer तक ले जाता है?
3. क्या मुझे यह तथ्य मूल wording के बिना याद करना है?
4. क्या दो समझदार लोग अलग-अलग सही completions दे सकते हैं?
5. क्या मैं जवाब को जल्दी और लगातार एक ही तरह grade कर सकता हूँ?

जब पहले दो सवालों के जवाब हाँ और अगले दो के नहीं हों, तब cloze चुनें। जब independent recall मायने रखता हो, कई तरह की wording सही हो, या जवाब के लिए direct question चाहिए, तब basic card चुनें। अगर आखिरी सवाल का जवाब नहीं है, तो समस्या शायद format नहीं बल्कि card size है।

अक्सर तीसरा विकल्प बेहतर होता है: अभी card न बनाएँ। अस्पष्ट, अस्थायी या ठीक से न समझे गए material को notes में तब तक रहने दें, जब तक आप retrieval target साफ़-साफ़ न बता सकें। इसी वजह से SuperMemo के rules याद करने से पहले समझने पर ज़ोर देते हैं।

Format के label से ज़्यादा retrieval मायने रखता है। Prose passages पर हुए experiments में repeated testing ने repeated studying की तुलना में delayed retention बेहतर किया, भले दोबारा पढ़ने से confidence बढ़ा था। [प्रकाशित testing-effect abstract](https://www.psychologicalscience.org/journals/psychological-science/j.1467-9280.2006.01693.x/) cloze और basic cards की तुलना नहीं करता। वह सिर्फ़ उस बड़े सिद्धांत को support करता है कि दोनों formats में आपको जवाब retrieve करना चाहिए, केवल उसे दोबारा पढ़ना नहीं।

## AI से तैयार deck नहीं, दो candidates माँगें

AI cloze flashcards जल्दी draft हो जाते हैं, क्योंकि model किसी वाक्य को copy करके उसमें phrase छिपा सकता है। यह shortcut source का clutter, अनजाने hints और unsupported claims भी बनाए रखता है। दोनों formats माँगें, ताकि आप retrieval cues की तुलना कर सकें।

Model को source text और एक सीमित editing task दें:

```text
केवल दिए गए source का इस्तेमाल करें। उन facts की पहचान करें जिन्हें बाद में याद रखना उपयोगी होगा।

हर fact के लिए:
1. ठीक एक [BLANK] वाला एक cloze candidate लिखें।
2. स्पष्ट Front और Back वाला एक basic candidate लिखें।
3. एक वाक्य में Cloze, Basic या Reject में से एक सुझाएँ।
4. Answer verify करने वाला page, section, timestamp या छोटा phrase दें।

Rules:
- हर candidate में सिर्फ़ एक fact या decision test करें।
- Ambiguity दूर करने भर context रखें, लेकिन answer न बताएँ।
- Source के qualifiers, units और conditions सुरक्षित रखें।
- General knowledge से facts न जोड़ें।
- अगर दिए गए source में answer verify नहीं हो सकता, तो Reject output करें।
- ऐसे cases flag करें जिनमें एक से ज़्यादा reasonable answers हों।

Source:
[text paste करें या file attach करें]
```

दिया हुआ source passage खुद जाँचें। बेहतर candidate चुनें, उसे उस भाषा में दोबारा लिखें जिसमें आप review करते हैं, और दूसरा delete कर दें। Model की recommendation editorial सुझाव है, प्रमाण नहीं।

बड़े batch में सबसे पहले numbers, dates, exceptions, negations, medical या legal statements और `always` या `never` वाली हर चीज़ जाँचें। [AI flashcard cleanup guide](/hi/blog/how-to-fix-ai-flashcards/) पूरे verification pass को और विस्तार से समझाती है।

## पहले से मिले cloze material को सोच-समझकर बदलें

आपको पुराने notes या किसी दूसरे system के लिए बने deck से उपयोगी cloze material मिल सकता है। Markup को basic card के front पर copy करने भर से native cloze behavior नहीं मिलेगा। Retrieval target निकालें, सिर्फ़ ज़रूरी context रखें और एक स्पष्ट सवाल लिखें।

- Old cloze: `The {{c1::mitral}} valve sits between the {{c2::left atrium}} and {{c3::left ventricle}}.`
- Front: Left atrium और left ventricle के बीच कौन-सा valve होता है?
- Back: Mitral valve.

इस note में तीन cloze markers हैं, लेकिन एक front/back card ही काफ़ी हो सकता है। Chambers के लिए अलग cards तभी बनाएँ, जब आपको उन retrievals की भी ज़रूरत हो।

जब कोई cloze भाषा को context में test करता हो, तो वाक्य रखें और task स्पष्ट कर दें। सामान्य front पर `Complete the sentence with the correct preposition: She is responsible [...] preparing the report.` लिखा जा सकता है; back पर `for` रहेगा। इस तरह वाक्य special syntax या automatic card generation पर निर्भर हुए बिना उपयोगी बना रहता है।

दूसरों से मिले decks में उपयोगी material के साथ उनके cues और priorities भी होते हैं। [Premade Anki deck से पढ़ने की guide](/hi/blog/how-to-study-a-premade-anki-deck/) समझाती है कि ऐसे deck को अपनाते समय editing और deleting क्यों ज़रूरी हैं।

## FSRS review का समय तय करता है; card की quality आपकी ज़िम्मेदारी है

Card स्पष्ट हो जाने के बाद FSRS तय करता है कि वह दोबारा कब दिखे। Open FSRS project difficulty, stability और retrievability के ज़रिए memory को model करता है; उसका [official repository](https://github.com/open-spaced-repetition/free-spaced-repetition-scheduler) model समझाता है और implementations के links देता है।

FSRS यह नहीं पहचान सकता कि कोई cloze जवाब का सुराग दे रहा है या basic front तीन अलग responses स्वीकार करता है। जब आप आसानी से guess हो जाने वाले card को correct mark करते हैं, तो scheduler में successful review दर्ज होता है। वह यह नहीं बता सकता कि आपने target fact retrieve किया था या सिर्फ़ जाना-पहचाना वाक्य पूरा किया था।

Reviews इकट्ठे होने से पहले छोटे batch का audit करें:

- हर card में सिर्फ़ एक retrieval target।
- Target पहचानने भर का context, लेकिन answer के आकार वाले hints नहीं।
- ऐसा answer जिसे सही ठहराया जा सके, या स्पष्ट grading rule।
- हर factual answer अपने source से जाँचा हुआ।
- एक ही चीज़ test करने वाले duplicate cloze और basic versions नहीं।
- ऐसा front जो original page के बिना भी समझ आए।

Review के दौरान बार-बार हिचकना उपयोगी signal है। अगर आप बार-बार सोचते हैं, `I knew the idea, but not the exact word`, या वाक्य का pattern तथ्य से पहले जवाब बता देता है, तो card दोबारा लिखें। [Active recall और spaced repetition](/hi/blog/active-recall-vs-spaced-repetition/) समझाता है कि retrieval और scheduling कैसे अलग हैं, और [FSRS settings guide](/hi/blog/fsrs-settings/) स्पष्ट cards के बाद timing choices समझाती है।

## Flashcards Open Source App इस चुनाव को कैसे संभालता है

[Flashcards Open Source App के features](/hi/features/) explicit front/back cards इस्तेमाल करते हैं। App में native cloze syntax, cloze rendering या automatic cloze-note generation नहीं है। अगर आप cloze material से शुरू कर रहे हैं, तो ऊपर दिखाए गए तरीके से उपयोगी retrieval target को front/back question में बदलें।

AI-assisted drafting में chat या file attachment का इस्तेमाल करके जाँच और editing के लिए front/back cards सुझाए जा सकते हैं। हर factual answer को उसके source से verify करें। Review के दौरान आप cards को Again, Hard, Good या Easy grade करते हैं, और FSRS उस history से आगे का timing चुनता है; वह wording ठीक नहीं करता।

**Cloze deletion vs basic flashcards** के चुनाव में cloze तभी रखें, जब आपका tool उसे support करता हो और दिखाई देने वाला वाक्य सही retrieval cue बनाता हो। Independent recall, flexible wording या explicit front/back storage के लिए basic question चुनें। अच्छा context retrieval को सटीक बनाता है। ज़रूरत से ज़्यादा context review को guessing game बना देता है।
