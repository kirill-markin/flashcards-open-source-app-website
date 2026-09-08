---
title: "2026 में Anki की बेहतरीन FSRS सेटिंग्स: रिटेंशन, स्टेप्स और रिव्यू लोड"
description: "Anki 26.08 में FSRS-6 के लिए Desired retention, learning steps, optimization, rescheduling और workload की सुरक्षित सेटिंग्स चुनें।"
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "FSRS सेटिंग्स"
  - "बेहतरीन FSRS सेटिंग्स"
  - "Anki FSRS सेटिंग्स"
  - "FSRS Desired retention"
  - "FSRS learning steps"
  - "FSRS Simulator"
  - "FSRS parameters optimize करें"
  - "FSRS-6"
---

Anki में **Desired retention** को 90% से 95% करना मामूली बदलाव लगता है। मगर इससे काम सिर्फ़ पाँच प्रतिशत नहीं बढ़ता। लक्ष्य बढ़ने पर FSRS को अंतराल छोटे करने पड़ते हैं, इसलिए पुराने कलेक्शन की रिव्यू कतार काफ़ी भारी हो सकती है। साथ में **Reschedule cards on change** चालू कर दिया, तो इस अतिरिक्त काम का एक हिस्सा तुरंत भी सामने आ सकता है।

इसलिए बेहतरीन FSRS सेटिंग्स कोई ऐसी parameter string नहीं हैं जिसे कहीं से कॉपी करके लगा दिया जाए। सही तरीका फ़ैसलों का एक क्रम है: पहले उतना workload तय करें जितना आप लगातार संभाल सकते हैं, फिर उसी सीमा में recall target चुनें, मॉडल को अपनी review history के मुताबिक़ fit करें और मौजूदा due dates को तब तक न छेड़ें जब तक आप जानबूझकर उन्हें दोबारा नहीं बनाना चाहते।

नीचे दिए गए labels और उनका व्यवहार [Anki 26.08 release](https://github.com/ankitects/anki/releases/tag/26.08) और उसके FSRS-6 controls से मेल खाते हैं। अगर आपको सेटिंग्स से पहले मॉडल समझना है, तो [FSRS क्या है?](/blog/what-is-fsrs/) पढ़ें। अगर आप अभी scheduler चुन रहे हैं, तो [FSRS बनाम SM-2](/blog/fsrs-vs-sm-2/) से शुरू करें।

> **खुलासा:** मैं Kirill Markin हूँ और [Flashcards Open Source App](/features/) बनाता हूँ। Anki में व्यक्तिगत parameter fitting और experimental workload simulators मिलते हैं, जो फ़िलहाल Flashcards में नहीं हैं। लेख के आख़िर में दी गई तुलना इन फ़र्क़ों को साफ़ रखती है।

**तथ्यों की जाँच:** 8 सितंबर 2026।

![नहर लॉक ऑपरेटर असली लॉक बदलने से पहले छोटे मॉडल पर पानी के बहाव की जाँच करता हुआ](/blog/fsrs-settings-v2.png)

## छोटा जवाब: यहाँ से शुरू करें

Anki के ज़्यादातर उपयोगकर्ताओं के लिए ये सुरक्षित शुरुआती विकल्प हैं—हर किसी के लिए तय नियम नहीं:

| सेटिंग या आदत | सुरक्षित शुरुआती विकल्प | वजह |
| --- | --- | --- |
| **Desired retention** | `0.90` | यह Anki का default है और याद बने रहने की संभावना को रिव्यू के बोझ के साथ संतुलित करता है। |
| **FSRS parameters** | **Optimize Current Preset** इस्तेमाल करें; weights को paste या हाथ से edit न करें | Optimizer मॉडल को आपकी review history के मुताबिक़ fit करता है। |
| Optimization की आवृत्ति | अधिकतम महीने में एक बार; आम तौर पर हर कुछ महीने में एक बार काफ़ी है | Anki बार-बार optimization करने की सलाह नहीं देता। |
| **Learning steps** | थोड़े-से steps रखें जो उसी दिन पूरे हो जाएँ | Steps की लंबी शृंखला मॉडल पर आधारित schedule शुरू होने में देर करती है। |
| **Relearning steps** | इन्हें कम और एक दिन से छोटा रखें | Review card पर असफल होने के बाद भी यही सीमा लागू होती है। |
| **Reschedule cards on change** | बंद | नई सेटिंग्स आज की कतार दोबारा बनाए बिना आगे के reviews पर लागू हो सकती हैं। |
| **Maximum interval** | 100 साल वाला default रखें | छोटी ऊपरी सीमा पुराने, अच्छी तरह याद कार्डों को ज़्यादा बार वापस लाती है। |
| New cards/day | इसे ऐसे workload के हिसाब से तय करें जिसे आप लगातार संभाल सकें | हर नया कार्ड अभी learning work और बाद में reviews जोड़ता है। |
| Again बनाम Hard | Again का मतलब याद न आना है; Hard का मतलब मुश्किल से सही याद आना | गलत rating मॉडल को गलत history देती है। |

अगर reviews आसानी से संभल रहे हैं और आपका setup पहले से इसके क़रीब है, तो शायद कुछ ठीक करने की ज़रूरत ही नहीं। सेटिंग्स सँवारना पढ़ाई नहीं है।

## तीन फ़ैसलों को अलग रखें

लोग अक्सर Desired retention, FSRS parameters और रोज़ के workload को एक ही बात मान लेते हैं। जबकि तीनों अलग चीज़ें नियंत्रित करते हैं:

- **Desired retention** आपका recall target है। इसे अपने लक्ष्य और पढ़ाई के लिए उपलब्ध समय के हिसाब से आप चुनते हैं।
- **FSRS parameters** memory model को review history के मुताबिक़ fit करते हैं। इनकी गणना Anki का optimizer करता है।
- **New-card और review limits** तय करती हैं कि system में कितना material आएगा और Anki हर दिन कितना due work दिखा सकेगा।

इन्हें अलग रखने से समस्या की जड़ ढूँढ़ना बहुत आसान हो जाता है। बड़ी कतार का मतलब यह नहीं कि आपके parameters ज़रूर गलत हैं। जिस deck की सामग्री बहुत अहम हो, उसे भी अपने-आप अलग parameter preset की ज़रूरत नहीं पड़ती। और **Desired retention** घटाने से ऐसी intake rate ठीक नहीं होगी जो शुरू से ही लंबे समय तक निभाने लायक नहीं थी।

## Desired retention महत्वाकांक्षा से नहीं, workload देखकर चुनें

**Desired retention** FSRS को बताता है कि कोई review card due होने पर आप उसे याद रखने की कितनी संभावना चाहते हैं। `0.90` पर FSRS schedule बनाते समय याद आने की अनुमानित संभावना लगभग 90% रखता है। यह मॉडल का लक्ष्य है, इस बात की गारंटी नहीं कि हर session या exam में आपके ठीक 90% जवाब सही होंगे।

यह समझौता दोनों दिशाओं में काम करता है:

- Desired retention बढ़ाएँगे, तो reviews बढ़ेंगे और intervals छोटे होंगे।
- इसे घटाएँगे, तो failures बढ़ेंगे और intervals लंबे होंगे।
- इसे बहुत कम कर देंगे, तो failures के बाद की अतिरिक्त relearning उस समय का कुछ हिस्सा खा सकती है जिसे आप बचाना चाहते थे।

Anki का default 90% है। उसकी [desired-retention guidance](https://docs.ankiweb.net/deck-options.html#desired-retention) चेतावनी देती है कि target के 100% के क़रीब पहुँचते ही workload तेज़ी से बढ़ता है और इसे 97% से कम रखने की सलाह देती है। आधिकारिक [optimal-retention explanation](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) इस curve का दूसरा सिरा समझाता है: बहुत कम retention भी कम कारगर हो सकता है, क्योंकि भूले हुए कार्डों को दोबारा सीखने में ज़्यादा मेहनत लगती है।

`0.90` से शुरू करें और workload जाँचने के बाद ही इसे बदलें। जिस material को भूलने की वास्तविक कीमत हो, उसके लिए ऊँचा target सही हो सकता है। जहाँ reviews ज़्यादा उपयोगी पढ़ाई को पीछे धकेल रहे हों, वहाँ कम target समझ में आ सकता है। मगर इनमें से कोई भी बदलाव अस्पष्ट कार्ड, बेईमान ratings या बहुत ज़्यादा नए कार्डों को ठीक नहीं करता।

### Deck retention और preset parameters का दायरा अलग है

Anki 26.08 में **Desired retention** के लिए दो scopes हैं: **Shared Preset** और **This deck**। यानी संबंधित decks को एक ही parameter preset पर रखते हुए भी आप किसी खास deck का retention target अलग रख सकते हैं।

इस override का इस्तेमाल तब करें जब भूलने की कीमत अलग हो। मसलन, licensing exam वाले deck के लिए low-priority reference deck से ऊँचा target उचित हो सकता है, भले ही दोनों एक ही fitted model इस्तेमाल करते हों।

**This deck** चुनने से FSRS parameters deck-specific नहीं हो जाते। Default रूप से Anki मौजूदा preset से जुड़े सभी decks की review history पर parameters fit करता है। अगर decks के अलग-अलग समूह आपको कठिनाई में बहुत अलग लगते हैं, तो उन्हें अलग fit करने का समर्थित तरीका अलग presets बनाना है।

## Help Me Decide और Simulator अलग सवालों के जवाब देते हैं

Anki 26.08 में दो अलग experimental controls हैं:

- **Help Me Decide (Experimental)** आपके लिए retention और workload का व्यक्तिगत curve दिखाता है। इससे यह तय करें: “जितने reviews या जितना समय मैं लगातार दे सकता हूँ, उसमें कौन-सा retention target ठीक बैठेगा?”
- **FSRS Simulator (Experimental)** अनुमान लगाता है कि कोई configuration समय के साथ कैसा चलेगा। इसका इस्तेमाल retention, नए कार्डों की रफ़्तार, review limits और maximum interval में बदलावों की तुलना के लिए करें।

[FSRS Simulator documentation](https://docs.ankiweb.net/deck-options.html#the-simulator) इसके मुख्य inputs बताता है:

- **Days to simulate** — कितने दिनों का अनुमान लगाना है
- **Additional new cards to simulate** — अनुमान में कितने अतिरिक्त नए कार्ड जोड़ने हैं
- **New cards per day** — हर दिन कितने नए कार्ड जोड़ने हैं
- **Maximum reviews per day** — हर दिन अधिकतम कितने reviews करने हैं
- **Maximum interval** — सबसे लंबा interval कितना हो सकता है
- **Desired retention** और preset के **FSRS parameters**

Simulation preset में मौजूद कार्डों की असली memory states भी इस्तेमाल करता है। इसलिए पुराने कलेक्शन के लिए यह आज की due count को किसी सामान्य प्रतिशत से गुणा करने से ज़्यादा उपयोगी है।

Live setup बदलने से पहले तीन scenarios चलाएँ:

1. आपका मौजूदा retention और new-card intake।
2. वह retention target जिस पर आप विचार कर रहे हैं।
3. वही target, लेकिन हर दिन कम नए कार्डों के साथ।

तीसरा run एक आम विकल्प को परखता है: recall target वही रखें, बस नए material का flow धीमा कर दें। अगर इससे संभालने लायक forecast मिलता है, तो कतार हल्की करने के लिए ज़्यादा भूलना स्वीकार करने की ज़रूरत नहीं। नए कार्डों की रफ़्तार पर विस्तृत guide है: [हर दिन कितने नए फ़्लैशकार्ड्स?](/blog/how-many-new-flashcards-per-day/)।

दोनों tools अनुमान भर हैं। छूटे हुए दिन, edit किए गए कार्ड, नया material और rating की बदलती आदतें असली workload को graph से दूर ले जा सकती हैं। तुलना से दिशा चुनें; इसे महीनों बाद कतार की सटीक स्थिति का वादा न मानें।

पुरानी guides में इसके बजाय **Compute Minimum Recommended Retention**, यानी CMRR, का ज़िक्र मिल सकता है। Anki ने version 25.07 में यह feature हटा दिया था। **Desired retention** चुनने का मौजूदा workflow यह नहीं है।

## FSRS parameters को अपनी history से optimize करें

**Desired retention** आपका लक्ष्य बताता है। FSRS parameters बताते हैं कि मॉडल आपके reviews पर कैसे fit होता है।

Anki 26.08 में active preset के parameters fit करने के लिए **Optimize Current Preset** इस्तेमाल करें। Default रूप से Anki उस preset का इस्तेमाल करने वाले हर deck की review history शामिल करता है; fitting set को छोटा रखना हो तो search बदल सकते हैं। **Optimize All Presets** एक ही operation में हर preset को update करता है।

Weights हाथ से type न करें और न ही उन्हें Reddit, किसी video या किसी दूसरे व्यक्ति के deck से copy करें। उनके कार्ड, review timing और rating की आदतें आपकी history नहीं हैं। [FSRS-6 weights](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) की साफ़-सुथरी row अपने-आप ऐसी study strategy नहीं बन जाती जिसे कहीं और ले जाकर लगाया जा सके।

दोबारा optimize तभी करें जब पर्याप्त नई review history जमा हो चुकी हो। Anki manual कहता है कि महीने में एक बार काफ़ी है, जबकि 26.08 की in-app guidance के मुताबिक़ हर कुछ महीने में एक बार भी पर्याप्त है। व्यावहारिक निष्कर्ष एक ही है: हर हफ़्ते optimize करने की कोई वजह नहीं, हर session के बाद तो बिल्कुल नहीं।

### मौजूदा preset के साथ health check चलाएँ

जब आप यह जाँचना चाहें कि FSRS मौजूदा preset की history के मुताबिक़ कितनी अच्छी तरह ढल सकता है, तो **Check health when optimizing (slow)** चालू करें। यह check **Optimize Current Preset** के साथ चलता है, **Optimize All Presets** के साथ नहीं।

अगर नतीजा खराब हो, तो weights छूने से पहले data जाँचें। [Anki FSRS parameter guidance](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) कुछ आम वजहें बताती है: कुछ सौ से कम reviews होना, failure के बाद Hard इस्तेमाल करना और recall fail होने पर Again न दबाना। उपयोगी history कम हो, तो किसी दूसरे user के parameters लेने के बजाय defaults रखें और बाद में optimize करें।

## Again यानी याद नहीं आया; Hard यानी मुश्किल से सही जवाब

यह आदत किसी भी setting जितनी महत्वपूर्ण है।

जब आप ज़रूरी जवाब न दे पाएँ या जवाब गलत हो, तो **Again** इस्तेमाल करें। **Hard** केवल तब चुनें जब जवाब सही याद आया हो, लेकिन काफ़ी कोशिश या हिचकिचाहट के साथ। Good और Easy भी सफल recall की ratings हैं।

Again का छोटा interval टालने के लिए Hard दबाने पर failure, success की तरह record होता है। फिर FSRS गलत event से सीखता है। वह button चुनें जो आपके recall को सही बताता हो, न कि वह interval जिसे आप buttons के ऊपर देखना चाहते हैं।

अस्पष्ट कार्ड ईमानदार rating देना मुश्किल बनाते हैं। अगर prompt पाँच facts पूछता है और आपको चार याद हैं, तो scheduling की समस्या editor में शुरू हो चुकी थी। कार्ड को बाँटें या दोबारा लिखें। बार-बार review के बावजूद fail होने वाले कार्डों के लिए [Leech फ़्लैशकार्ड्स कैसे ठीक करें](/blog/how-to-fix-leech-flashcards/) पढ़ें।

## FSRS learning steps छोटे रखें—या सोच-समझकर खाली छोड़ें

Learning और relearning steps, नियमित long-term schedule शुरू होने से पहले कार्ड को जल्दी वापस लाने का समय नियंत्रित करते हैं। ये कोई दूसरा retention target नहीं हैं।

Anki की FSRS guidance दो सीमाएँ सुझाती है:

- हर step एक दिन से छोटा हो और उसी दिन पूरा किया जा सके
- एक ही दिन होने वाली repetitions कम रहें

`1m 10m 1d 3d` जैसी लंबी chains, SM-2 की पुरानी आदत को FSRS में खींच लाती हैं। एक दिन या उससे लंबे steps मॉडल पर आधारित scheduling देर से शुरू कराते हैं और button labels को उलझा सकते हैं—यहाँ तक कि Hard पर दिखने वाला interval, Good से लंबा हो सकता है।

अगर यह आपके sessions में ठीक बैठे, तो `1m 10m` जैसी छोटी sequence और `10m` का relearning step एक सुरक्षित, संभला हुआ baseline है। एक ही दिन में ज़्यादा repetitions अपने-आप बेहतर नहीं होतीं।

Anki 26.08 में learning या relearning steps वाला कोई भी field खाली छोड़ा जा सकता है। FSRS चालू हो, तो खाली field उस short-term scheduling को FSRS के हवाले कर देता है। यह experimental है और Again का interval एक दिन या उससे भी लंबा हो सकता है। अगर आपको उसी दिन तय अंदाज़ में कार्ड वापस चाहिए, तो छोटे manual steps रखें; field तभी खाली करें जब आप जानबूझकर उसकी timing FSRS को तय करने देना चाहते हों।

## बदलाव धीरे लागू करना है तो Reschedule cards on change बंद रखें

Default रूप से **Reschedule cards on change** बंद रहता है। इस स्थिति में FSRS चालू करने या Desired retention अथवा parameters बदलने से मौजूदा due dates तुरंत दोबारा नहीं लिखी जातीं। नया configuration आगे कार्ड review होने पर लागू होता है, इसलिए कतार धीरे-धीरे बदलती है।

इनमें से कोई FSRS बदलाव इस option को चालू रखकर save किया जाए, तो due dates की तुरंत दोबारा गणना होती है। नए target और कार्डों की states के आधार पर बहुत-से कार्ड एक साथ due हो सकते हैं। Anki rescheduled कार्डों के लिए review entries भी जोड़ता है, जिससे collection का size बढ़ता है।

यह option तभी उपयोगी है जब आप सच में पुराना schedule पीछे से दोबारा बनाना चाहते हों। पुराने कलेक्शन के लिए:

1. नया backup बनाएँ और पक्का करें कि आपको बदलाव undo करना या backup restore करना आता है।
2. प्रस्तावित सेटिंग्स के साथ Simulator चलाएँ।
3. Configuration में एक ही बदलाव चुनें; कई experiments को एक साथ न मिलाएँ।
4. Save करते समय rescheduling तभी चालू करें जब आप due dates तुरंत दोबारा लिखना चाहते हों और उससे बनने वाली कतार संभाल सकते हों।

SM-2 से rescheduling के साथ switch करते समय Anki साफ़ तौर पर backup लेने की सलाह देता है। विस्तृत [फ़्लैशकार्ड backup guide](/blog/how-to-back-up-flashcards/) बताती है कि recovery path, backup file जितना ही महत्वपूर्ण क्यों है।

## Maximum interval को बड़ा रखें

Anki का **Maximum interval** default रूप से 100 साल है। यह तब तक अजीब लगता है जब तक आप याद न रखें कि यह सिर्फ़ ऊपरी सीमा है—यह वादा नहीं कि हर पुराना कार्ड एक सदी के लिए गायब हो जाएगा।

यह सीमा घटाने पर अच्छी तरह याद कार्ड जल्दी वापस आते हैं और workload बढ़ता है। सीमा तक पहुँचने पर Hard, Good और Easy तीनों एक ही delay दिखा सकते हैं, क्योंकि कोई भी maximum से आगे नहीं जा सकता।

छोटा maximum interval तब उचित हो सकता है जब exam की वास्तविक समय-सीमा हो, material बार-बार बदलता हो या कोई professional rule, याद रहने की अनुमानित संभावना के बावजूद, बार-बार exposure माँगता हो। घबराकर कोई छोटी संख्या चुनने के बजाय इस सीमा को calendar और Simulator के साथ तय करें। [FSRS के साथ exam की पढ़ाई कैसे करें](/blog/how-to-study-for-an-exam-with-fsrs/) इसी खास स्थिति को विस्तार से समझाता है।

आम long-term learning के लिए सीमा बड़ी रहने दें। अनुमानित recall के आधार पर review कब होना चाहिए, इसे Desired retention पहले ही नियंत्रित करता है।

## नए कार्डों की रफ़्तार भी workload का हिस्सा है

FSRS reviews को बाँट सकता है; नए कार्डों की असीमित आमद को लंबे समय तक संभालने लायक नहीं बना सकता। हर नया कार्ड अभी learning work और बाद में review work जोड़ता है।

कतार बहुत भारी हो, तो Desired retention घटाने से पहले ये चीज़ें जाँचें:

- हर दिन आने वाले नए कार्ड
- बड़े imports या generated कार्डों के batches
- maximum-reviews limit, जो due work को लगातार छिपाती रहती है
- leeches और अस्पष्ट कार्ड, जिन पर बार-बार कोशिश करनी पड़ती है
- छूटे हुए review days

अगर आपको पता है कि deck बढ़ेगा, तो **Additional new cards to simulate** इस्तेमाल करें। सिर्फ़ आज के कलेक्शन पर बना forecast, बड़े import के बाद का workload नहीं दिखाएगा।

नतीजा बहुत बड़ा हो, तो नए कार्डों की रफ़्तार घटाकर दोबारा simulate करें। इससे scheduler को ज़्यादा भूलना स्वीकार करने के लिए कहे बिना recall target कायम रहता है।

## Anki और Flashcards में FSRS controls अलग हैं

दोनों products FSRS-6 इस्तेमाल करते हैं, मगर Anki की FSRS सेटिंग्स और Flashcards Open Source App की सेटिंग्स एक-दूसरे से हूबहू नहीं मिलतीं।

| क्षमता | Anki 26.08 | Flashcards Open Source App |
| --- | --- | --- |
| Desired retention | **Shared Preset** या **This deck** | हर workspace के लिए configurable; default `0.90` |
| FSRS parameters | Review history से **Optimize Current Preset** या **Optimize All Presets** | आधिकारिक FSRS-6 default weights तय हैं और v1 में user उन्हें बदल नहीं सकता |
| Learning steps | Configurable; खाली field से FSRS scheduling अभी experimental है | हर workspace के लिए configurable; default `1m 10m` |
| Relearning steps | Configurable; खाली field से FSRS scheduling अभी experimental है | हर workspace के लिए configurable; default `10m` |
| Maximum interval | Default 100 साल | Default 36,500 दिन, यानी 100 साल |
| Settings changes | Default रूप से आगे के reviews पर; retroactive rescheduling वैकल्पिक है | केवल आगे के reviews पर; मौजूदा due dates दोबारा नहीं बनतीं |
| Workload tools | **Help Me Decide (Experimental)** और **FSRS Simulator (Experimental)** | v1 में इसके बराबर कोई workload simulator नहीं है |

Flashcards में standard Again, Hard, Good और Easy ratings हैं और यह हर कार्ड की FSRS memory state सँभालकर रखता है। इसके backend, iOS और Android schedulers अलग-अलग implementations हैं, जिनका व्यवहार एक जैसा रखा जाता है; web review flow चौथी copy बनाने के बजाय backend scheduler को फिर से इस्तेमाल करता है।

इन सीमाओं और defaults को सार्वजनिक [Flashcards FSRS scheduling specification](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md) में दर्ज किया गया है। समझौता सीधा है: Flashcards एक व्यावहारिक workspace-level FSRS-6 setup देता है, जबकि Anki में ज़्यादा बारीक scope, व्यक्तिगत fitting और simulation मिलते हैं। अगर ये controls आपके लिए ज़रूरी हैं, तो Anki बेहतर विकल्प है।

## पुराने कलेक्शन के लिए ज़्यादा सुरक्षित workflow

अगर आपके पास महीनों या सालों की review history पहले से है, तो इस क्रम में काम करें:

1. **Rating का मतलब ठीक रखें।** Again असफल recall है; Hard मुश्किल से मिली सफलता।
2. **मौजूदा preset optimize करें।** Weights edit या copy करने के बजाय अपनी history पर मॉडल fit करें।
3. **ज़रूरत हो तो health check चलाएँ।** कम या inconsistent history को data की समस्या मानें।
4. **Help Me Decide इस्तेमाल करें।** जितने reviews या जितना समय आप संभाल सकते हैं, उसके आधार पर retention range चुनें।
5. **Simulator चलाएँ।** मौजूदा setup, प्रस्तावित target और कम new-card intake की तुलना करें।
6. **एक live input बदलें।** पहले retention या intake adjust करें, फिर असली कतार देखें।
7. **Steps छोटे रखें।** एक दिन या उससे लंबी learning और relearning chains हटाएँ; खाली fields को सिर्फ़ experiment की तरह इस्तेमाल करें।
8. **Maximum interval बड़ा रखें।** इसे केवल किसी तय समय-सीमा या आवश्यकता के लिए घटाएँ।
9. **Rescheduling बंद रखें।** अगर तुरंत schedule दोबारा बनाना हो, तो पहले backup लें और उससे बनने वाली कतार की योजना बनाएँ।

इस क्रम में पुराना schedule ज़्यादा से ज़्यादा समय तक reversible रहता है। साथ ही मॉडल का fit, recall का लक्ष्य और नए material का flow—इन तीन अलग समस्याओं को एक ही settings puzzle बनने से रोका जा सकता है।

## बेहतरीन FSRS सेटिंग्स के बारे में आम सवाल

### क्या 90% FSRS के लिए सबसे अच्छा Desired retention है?

यह सामान्य तौर पर सबसे सुरक्षित शुरुआती विकल्प है, क्योंकि यही Anki का default है और यह high-retention workload curve के सबसे तीखे हिस्से से बचाता है। किसी deck के लिए सही value इस पर निर्भर करती है कि भूलने की कीमत क्या है और आप कितना workload लगातार संभाल सकते हैं। इसे बदलने से पहले **Help Me Decide (Experimental)** देखें।

### क्या मुझे Desired retention 95% रखना चाहिए?

अतिरिक्त reviews या लगने वाले minutes जाँचने के बाद ही। साफ़, high-stakes deck में 95% उचित हो सकता है; बड़ा casual collection बेवजह भारी हो सकता है। उसी समय retroactive rescheduling चालू न करें, जब तक आप जानबूझकर due dates तुरंत दोबारा नहीं बनाना चाहते।

### मुझे FSRS parameters कितनी बार optimize करने चाहिए?

महीने में एक बार भी पर्याप्त है, और Anki 26.08 की in-app guidance के मुताबिक़ हर कुछ महीने में एक बार काफ़ी है। रोज़ या हर हफ़्ते नहीं, बल्कि पर्याप्त नई history जमा होने के बाद optimize करें।

### क्या FSRS learning steps खाली होने चाहिए?

Learning या relearning steps खाली छोड़ने पर Anki 26.08 उससे जुड़ा short-term schedule FSRS को सौंप देता है। यह feature experimental है और Again का समय एक दिन या उससे ज़्यादा दूर हो सकता है। उसी दिन पूरे होने वाले कम steps अब भी सुरक्षित विकल्प हैं।

### क्या FSRS सेटिंग्स बदलने से मौजूदा Anki cards reschedule होते हैं?

Default रूप से नहीं। **Reschedule cards on change** बंद हो, तो नई सेटिंग्स कतार को तुरंत दोबारा बनाए बिना आगे के reviews पर लागू होती हैं। इसे चालू करने से due dates बदलती हैं और कई कार्ड एक साथ due हो सकते हैं, इसलिए पहले backup लें।

### क्या CMRR अब भी Anki का हिस्सा है?

नहीं। Anki ने version 25.07 में Compute Minimum Recommended Retention हटा दिया था। Anki 26.08 में retention और अनुमानित workload की तुलना के लिए **Help Me Decide (Experimental)** और **FSRS Simulator (Experimental)** इस्तेमाल करें।

### क्या Flashcards भी Anki वाली सेटिंग्स इस्तेमाल करता है?

यह FSRS-6 इस्तेमाल करता है और हर workspace के लिए Desired retention, learning steps, relearning steps, maximum interval और fuzz देता है। यह Anki का पूरा settings model copy नहीं करता: v1 में weights तय हैं, बदलाव केवल आगे के reviews पर लागू होते हैं और व्यक्तिगत parameter optimization या workload simulator नहीं मिलता।

## प्रतिशत से पहले workload तय करें

अच्छी FSRS सेटिंग्स रिव्यू कतार को आपके असली study plan के काम में लगाती हैं। 90% से शुरू करें, लगने वाले काम का अनुमान लगाएँ, नए कार्डों की रफ़्तार नियंत्रित करें और retention तभी बढ़ाएँ जब ज़्यादा याद रखना अतिरिक्त reviews के लायक हो। Steps छोटे रखें, maximum interval बड़ा रखें और rating data ईमानदार रखें।

फिर settings screen से बाहर निकलें। Scheduler को tuning की एक और शाम से ज़्यादा लगातार reviews की ज़रूरत है।
