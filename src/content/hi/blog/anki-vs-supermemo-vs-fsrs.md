---
title: "Anki बनाम SuperMemo बनाम FSRS (2026): ये क्या हैं और किसे चुनें"
description: "Anki बनाम SuperMemo बनाम FSRS को साफ़ तौर पर समझें: Anki, SuperMemo के दो मौजूदा products, FSRS scheduler और review ratings की तुलना करें और अपने workflow के लिए सही विकल्प चुनें।"
date: "2026-08-03"
image: "/blog/anki-vs-supermemo-vs-fsrs.png"
keywords:
  - "Anki बनाम SuperMemo बनाम FSRS"
  - "Anki FSRS"
  - "SuperMemo algorithm"
  - "FSRS scheduler"
  - "spaced repetition algorithm"
  - "Again Hard Good Easy"
  - "Anki बनाम SuperMemo"
  - "FSRS बनाम SM-2"
---

आप Anki के अंदर FSRS इस्तेमाल कर सकते हैं। SuperMemo 20 आने के बाद FSRS, SuperMemo के एक product के अंदर भी काम कर सकता है। यही बात **Anki बनाम SuperMemo बनाम FSRS** से जुड़ी ज़्यादातर उलझन दूर कर देती है: ये तीन ऐसे विकल्प नहीं हैं जिनमें से केवल एक को चुनना हो।

Anki एक flashcard product और ecosystem है। SuperMemo नाम दो मौजूदा products के लिए भी इस्तेमाल होता है और algorithms की एक लंबी श्रृंखला के लिए भी। FSRS एक scheduler है, जिसे अलग-अलग products अपने भीतर लागू कर सकते हैं। यह guide पहले इन अलग categories को साफ़ करती है, फिर उन विकल्पों की तुलना करती है जिन्हें आप सच में चुन सकते हैं।

> **Disclosure:** मैं Kirill Markin हूँ और [Flashcards Open Source App](/hi/features/) बनाता हूँ। नीचे इसे FSRS के एक व्यावहारिक implementation के तौर पर शामिल किया गया है। मैं इसे अपने-आप सबसे अच्छा विकल्प नहीं मानता और जहाँ इसका नया व छोटा ecosystem मायने रखता है, वहाँ साफ़ तौर पर बताता हूँ।

**Facts checked:** 3 अगस्त, 2026।

![दो अलग learning machines के भीतर एक ही teal FSRS clockwork scheduler दिखाई देता है](/blog/anki-vs-supermemo-vs-fsrs.png)

## छोटा जवाब: Anki और SuperMemo products हैं; FSRS एक scheduler है

इसे समझने का सबसे आसान तरीका यह है:

- **Anki** एक flashcard application और ecosystem है। इसमें desktop app, AnkiWeb sync, compatible mobile clients, flexible card templates, shared decks और add-ons मिलते हैं। मौजूदा Anki में उसके legacy scheduler के विकल्प के रूप में FSRS भी शामिल है।
- **SuperMemo 20 for Windows** Windows के लिए knowledge management और incremental reading application है। इसका Algorithm Arena कई scheduling algorithms चलाता है, जिनमें FSRS भी शामिल है, और user के data पर उनके प्रदर्शन के आधार पर उनकी predictions को अलग-अलग weight देता है।
- **SuperMemo.com** web, iOS और Android के लिए एक अलग hosted language-learning service है। यह अपने documented SuperMemo method के ज़रिए courses और users के बनाए MemoCards उपलब्ध कराता है।
- **FSRS** का पूरा नाम Free Spaced Repetition Scheduler है। यह review history, ratings, model parameters और retention target के आधार पर अगली review का समय निकालता है। यह कोई card editor, account system, sync service, deck marketplace या study interface नहीं है।

इसलिए “Anki FSRS” में कोई विरोधाभास नहीं है। यहाँ Anki product है और FSRS उसके अंदर चुना गया scheduler।

## एक नज़र में Anki बनाम SuperMemo बनाम FSRS

| विकल्प | यह क्या है | Scheduling | किसके लिए सही है | मुख्य सीमा |
| --- | --- | --- | --- | --- |
| [Anki](https://docs.ankiweb.net/getting-started.html) | Mature flashcard product और ecosystem | Built-in FSRS या Anki का legacy scheduler; FSRS पूरे app के लिए enable होता है | मौजूदा collections, custom templates, add-ons, shared decks और जमे-जमाए Anki workflows | दूसरे product पर जाने में काफ़ी migration work लग सकता है |
| [SuperMemo 20 for Windows](https://supermemo.store/products/supermemo-20-for-windows) | Proprietary Windows knowledge management और incremental reading product | Algorithm Arena में SM-2, SM-15, SM-19, SM-20 और FSRS शामिल हैं | Incremental reading, knowledge trees और documents, web pages, email व video से imports | केवल Windows के लिए; SuperMemo.com से अलग product |
| [SuperMemo.com](https://www.supermemo.com/en/app) | Web, iOS और Android के लिए hosted language-learning service | Proprietary SuperMemo method; मौजूदा public pages इसे SM-18, SM-20 या FSRS नहीं बताते | तैयार language courses, MemoCards और अलग-अलग devices पर hosted study | यह Windows product नहीं है और इसका सटीक scheduler public नहीं है |
| [FSRS](https://github.com/open-spaced-repetition/fsrs4anki) | Open scheduler और project | इसे कोई host product या library लागू करती है | ऐसे developers और users जो scheduling logic को जाँच-परख सकना चाहते हैं | यह अपने-आप cards, editor, sync या study interface नहीं देता |
| [Flashcards Open Source App](/hi/features/) | FSRS पर बना नया open-source flashcard product | FSRS-6, जिसके official default weights तय रखे गए हैं, और बदल सकने वाली workspace scheduling settings | Web, iOS, Android, self-hosting, API और AI-agent workflows | Anki के मुकाबले छोटा ecosystem और अभी personalized FSRS weights नहीं |

इन पंक्तियों का एक जैसा न होना जानबूझकर है। Anki और Flashcards पूरा flashcard workflow देते हैं। SuperMemo 20 scheduling को कहीं व्यापक reading और knowledge workflow के साथ जोड़ता है। SuperMemo.com एक hosted language-learning experience बेचता है। FSRS दूसरे software को scheduling logic देता है।

## Anki वास्तव में क्या देता है

Anki केवल spaced repetition algorithm नहीं है। उसकी असली उपयोगिता scheduling के आसपास वर्षों में बने पूरे product से आती है: cards बनाने वाले notes, programmable [card templates](https://docs.ankiweb.net/templates/intro.html), media, deck organization, [add-ons](https://docs.ankiweb.net/addons.html), import और export formats, और [collection sync](https://docs.ankiweb.net/syncing.html)।

यह फर्क तब अहम हो जाता है जब कोई कहता है कि वह Anki छोड़कर “FSRS पर” जाना चाहता है। आज का Anki पहले से FSRS support करता है। [Anki FSRS manual](https://docs.ankiweb.net/deck-options.html#fsrs) के अनुसार, FSRS Anki के legacy SuperMemo 2 scheduler का विकल्प है। इसे enable करना पूरे app पर लागू होने वाला फैसला है; इसे केवल किसी एक preset के लिए चालू नहीं किया जा सकता। Desired retention उस समय recall के लिए model target तय करता है जब card due होता है। इसे बढ़ाने से आम तौर पर intervals छोटे और reviews ज़्यादा हो जाते हैं। Anki अपने **Optimize** action से compatible review history के आधार पर FSRS parameters fit भी कर सकता है।

Manual में इस्तेमाल शब्दों के साथ एक ऐतिहासिक बात समझना ज़रूरी है। **SM-2, SuperMemo algorithm की शुरुआती पीढ़ियों में से एक है; यह आज के SuperMemo का दूसरा नाम नहीं है।** Anki के पुराने scheduler को “legacy SM-2” कहना Anki की documentation के मुताबिक है और उसके पीछे की algorithm family बताता है। इससे यह साबित नहीं होता कि implementation की हर बारीकी दशकों पहले प्रकाशित original SM-2 जैसी ही है। अधिक केंद्रित technical comparison के लिए [FSRS बनाम SM-2](/hi/blog/fsrs-vs-sm-2/) देखें।

अगर आपकी पुरानी और बड़ी collection custom templates, add-ons, media या वर्षों की review history पर निर्भर है, तो product बदलने में सचमुच मेहनत लगेगी। Anki छोड़ने के बजाय केवल उसका scheduler बदलना कहीं आसान पड़ सकता है। Product के स्तर पर दोनों के अंतर [Anki बनाम Flashcards की विस्तृत तुलना](/hi/blog/anki-vs-flashcards-open-source-app/) में दिए गए हैं।

## “SuperMemo” के साथ अब यह बताना ज़रूरी है कि किसकी बात हो रही है

**SuperMemo** नाम किसी product line, online service, method या algorithm family के लिए इस्तेमाल हो सकता है। इन सबको एक ही मौजूदा app मानकर तुलना करेंगे, तो नतीजा जल्दी गलत हो जाएगा।

### SuperMemo 20 for Windows

[SuperMemo 20 for Windows](https://supermemo.store/products/supermemo-20-for-windows) [1 अप्रैल, 2026 को release हुआ था](https://supermemo.store/products/supermemo-20-upgrade)। यह Windows 10 और 11 के लिए one-time license के साथ मिलता है और ऐसे knowledge work के लिए बना है जो आम front/back flashcards से आगे जाता है। इसके product page पर incremental reading के साथ PDF, EPUB, email, web page, image और YouTube workflows का विवरण दिया गया है।

इसका प्रमुख scheduling feature **Algorithm Arena** है। Product page के मुताबिक SM-2, SM-15, SM-19, SM-20 और FSRS साथ-साथ चलते हैं, predictions बनाते हैं और user के data पर अपनी predictive performance के अनुसार weight पाते हैं। यह vendor द्वारा बताया गया product behavior है। यह ऐसा स्वतंत्र प्रमाण नहीं है कि SuperMemo 20 हर learner को किसी दूसरे app से बेहतर नतीजे देगा।

Algorithm Arena से categories का अंतर साफ़ दिखता है: FSRS *SuperMemo 20 के अंदर* चल सकता है। दोनों में से केवल एक को चुनना ज़रूरी नहीं।

### Hosted SuperMemo.com service

मौजूदा [SuperMemo.com app](https://www.supermemo.com/en/app) browser, iOS और Android पर उपलब्ध hosted language-learning service है। इसमें तैयार language courses, learning plans, MemoCards और भाषा सीखने से जुड़े दूसरे features पर ज़ोर है। Mobile पर पढ़ने के लिए courses download किए जा सकते हैं, लेकिन [offline documentation](https://www.supermemo.com/en/faq/can-i-use-supermemo-offline) कुछ अहम सीमाएँ बताती है: MemoCards जोड़ना, AI, search, statistics और course editor जैसे features offline उपलब्ध नहीं रहते।

यह hosted service अपने scheduler को proprietary बताती है और अपने SuperMemo method व review flow का विवरण देती है। इसके public pages यह नहीं बताते कि मौजूदा scheduler SM-18, SM-20 या FSRS है। इसलिए इस लेख में उस पर इनमें से कोई label नहीं लगाया गया है।

यह अंतर खरीदने का फैसला बदल देता है। Windows पर incremental reading चाहिए, तो SuperMemo 20 को परखें। Hosted Spanish या English course चाहिए, तो SuperMemo.com को देखें। दोनों का नाम और इतिहास साझा है, लेकिन इनका product experience एक-दूसरे की जगह नहीं ले सकता।

## SuperMemo algorithm एक family है, एक formula नहीं

SuperMemo के इतिहास में scheduling algorithms की कई अलग पीढ़ियाँ रही हैं। Official [SuperMemo algorithm history](https://supermemo.guru/wiki/History_of_SuperMemo_algorithm) SM-4, SM-5, SM-6, SM-8, SM-11, SM-15, SM-17 और SM-18 में हुए बदलावों का क्रम बताती है; उसके अनुसार SM-18 के stabilization-function changes 2019 में हुए थे। SuperMemo 20 की मौजूदा documentation SM-19 और SM-20 को बाद की generations बताती है और Algorithm Arena में उन्हें पुराने algorithms व FSRS के साथ रखती है।

इसीलिए “Anki SuperMemo algorithm इस्तेमाल करता है” जैसी बात इतनी अस्पष्ट है कि उससे कोई ठोस जानकारी नहीं मिलती। कौन-सी generation? किस product का implementation? कौन-सी settings और rating rules?

SM-2 ऐतिहासिक रूप से अहम है, क्योंकि उसने कई flashcard schedulers को प्रभावित किया। मौजूदा SuperMemo Windows software उसके बाद algorithm की कई पीढ़ियों से गुज़र चुका है। Hosted SuperMemo.com service अपने मौजूदा scheduler के बारे में इतनी जानकारी public नहीं करती कि उसे बिना आधार किसी एक numbered Windows algorithm के बराबर मान लिया जाए।

## FSRS scheduler क्या model करता है

[FSRS4Anki](https://github.com/open-spaced-repetition/fsrs4anki) के दो मुख्य हिस्से हैं: scheduler और optimizer। Scheduler card की timing निकालता है। अगर host product यह सुविधा देता है, तो optimizer review history के आधार पर parameters fit कर सकता है। इन दोनों में से कोई भी decks, editing, accounts, sync या study screen नहीं देता।

[ABC of FSRS](https://github.com/open-spaced-repetition/fsrs4anki/wiki/ABC-of-FSRS) इस model को आम तौर पर तीन variables से समझाता है: difficulty, stability और retrievability। [FSRS algorithm documentation](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm) इन्हें इस तरह परिभाषित करती है:

- **Retrievability (R)** model के अनुसार इस समय इस बात की अनुमानित संभावना है कि आप item को याद कर पाएँगे।
- **Stability (S)** वह interval है जिस पर model में अनुमानित retrievability 90% तक पहुँचती है।
- **Difficulty (D)** model का यह अनुमान है कि उस item की memory stability बढ़ाना कितना मुश्किल है।

ये review data से निकाली गई model states हैं, आपके दिमाग में मौजूद memory trace की सीधी measurements नहीं। किसी card की predicted retrievability उपयोगी हो सकती है, पर वह फिर भी उसकी review history, ratings, implementation और parameters से बनी एक prediction है।

Desired retention इस model को schedule में बदलता है। Scheduler अनुमान लगाता है कि retrievability चुने गए target तक कब पहुँचेगी और host product के rules के भीतर interval निकालता है। उस तारीख को proven perfect या सबके लिए सबसे अच्छा समय बताने के बजाय “target-based interval” कहना अधिक सटीक है।

## Again, Hard, Good, Easy—और अलग-अलग labels का सीधा अनुवाद क्यों नहीं किया जा सकता

Review ratings किसी scheduling system को दिए जाने वाले signals हैं। अलग products में इनके नाम और scales अलग होते हैं, इसलिए इन्हें एक-से-एक मिलाने पर असली मतलब बिगड़ सकता है।

| System | दिखने वाली ratings | इन labels का मतलब |
| --- | --- | --- |
| Anki with FSRS | Again, Hard, Good, Easy | Again का अर्थ failed recall है। Hard, Good और Easy सफल recall हैं, जिनमें क्रमशः कम effort लगा। |
| Flashcards | Again, Hard, Good, Easy | Failure और success की सीमा वही है। API 0–3 इस्तेमाल करती है और इन values को अंदरूनी तौर पर FSRS grades 1–4 से map करती है। |
| Hosted SuperMemo.com | Don't know, Almost, Know | [SuperMemo method page](https://www.supermemo.com/en/supermemo-method) पर दर्ज तीन विकल्पों वाला product scale। इसे चार FSRS grades से सीधे नहीं मिलाना चाहिए। |
| SuperMemo 20 for Windows | Desktop SuperMemo grading flow | यह एक अलग product interface है, जो Algorithm Arena में कई algorithms को input देता है। इसका अर्थ hosted service के तीन labels से नहीं निकाला जाना चाहिए। |

FSRS में सबसे अहम अंतर Again और Hard के बीच है। [Anki manual](https://docs.ankiweb.net/deck-options.html#fsrs) के मुताबिक FSRS में Hard का मतलब successful recall और Again का मतलब failure है। केवल इसलिए Hard चुनना कि अगला interval बेहतर दिखता है, ऐसे event को दर्ज करता है जो वास्तव में हुआ ही नहीं। [Again बनाम Hard की practical guide](/hi/blog/again-vs-hard-fsrs-flashcards/) partial answers और मुश्किल cases को विस्तार से समझाती है।

## Flashcards आज FSRS को कैसे लागू करता है

Flashcards में FSRS एक वास्तविक product component है, केवल “smart repetition” जैसा अस्पष्ट label नहीं। इस implementation को 3 अगस्त, 2026 को source repository के commit `9cb013f78767c081f5385a53daa5e4b9fe69d3b6` के आधार पर verify किया गया था।

Backend scheduler official `ts-fsrs` 5.2.3 flow के अनुरूप है और official FSRS-6 default weights को तय रखता है। Backend, iOS और Android में scheduler के तीन स्वतंत्र implementations हैं। Web app चौथी copy रखने के बजाय backend module को दोबारा इस्तेमाल करता है। Shared golden test vectors यह पक्का करते हैं कि इन सभी implementations का scheduling behavior एक जैसा रहे।

हर card के लिए stability, difficulty, last-review time, scheduled days, workflow state (`new`, `learning`, `review` या `relearning`) और जहाँ लागू हो, मौजूदा short-term step store होता है। State transition में असल client review time इस्तेमाल होता है, न कि बाद का वह समय जब server उस review को process करता है।

Workspace की default settings ये हैं:

- FSRS-6
- desired retention `0.90`
- `1` और `10` मिनट के learning steps
- `10` मिनट का relearning step
- maximum interval `36,500` days
- fuzz enabled

Workspaces आगे होने वाली reviews के लिए desired retention, steps, maximum interval और fuzz बदल सकते हैं। Flashcards अभी किसी user के FSRS weights को personalize नहीं करता और न ही users को ये weights बदलने देता है; v1 में official default weights तय हैं। यह उन products से एक अहम अंतर है जो किसी व्यक्ति की history से parameters fit करते हैं। [FSRS settings guide](/hi/blog/fsrs-settings/) workload पर इन settings का असर समझाती है, बिना यह दावा किए कि हर setting को बदलना ज़रूरी है।

Web review screen पर Flashcards, Again, Hard, Good और Easy में से हर विकल्प के लिए अगला calculated interval पहले ही दिखाता है। User/API ratings `0`, `1`, `2` और `3` को अंदरूनी तौर पर FSRS grades `1` से `4` से map किया जाता है। Again failed recall दर्ज करता है; Hard, Good और Easy successful recall दर्ज करते हैं, जिनमें क्रमशः कम effort लगा। सभी clients बार-बार Hard चुनने पर याद दिलाते हैं: जो answer आपको याद नहीं आया, उसे Again के तौर पर दर्ज करना चाहिए।

इस व्यवस्था में scheduler को जाँचा जा सकता है और अलग-अलग platforms पर उसका behavior एक जैसा रहता है। फिर भी अच्छे cards बनाना, ईमानदारी से rating देना और reviews सच में पूरा करना ज़रूरी है।

## आपके workflow के लिए कौन-सा विकल्प सही है?

### आपके पास पहले से बड़ी Anki collection है

आम तौर पर Anki के साथ बने रहें और उसी में FSRS enable करने पर विचार करें। आपके templates, add-ons, media, deck structure और review history किसी नए interface की चमक से कहीं अधिक कीमती हो सकते हैं। पहले जाँच लें कि आपके सभी clients FSRS support करते हैं। Add-ons की compatibility भी देखें, खासकर उन add-ons की जो scheduling या intervals बदलते हैं।

### आपको Windows पर गहराई से incremental reading करनी है

SuperMemo 20 for Windows को परखें। Knowledge trees, incremental reading, document और web imports, और Algorithm Arena का इसका मेल किसी focused flashcard app से काफ़ी अलग है। केवल algorithms की list नहीं, पूरे workflow को इस्तेमाल करके देखें।

### आपको तैयार hosted language courses चाहिए

SuperMemo.com को देखें। इसका web और mobile product language courses और MemoCards के इर्द-गिर्द बना है। जाँच लें कि इसकी offline सीमाएँ आपके पढ़ने के routine के अनुकूल हैं। यह मानकर न चलें कि इसका scheduler Windows product के SM-20 या Algorithm Arena जैसा ही है।

### आप app बना रहे हैं या ऐसा scheduler चाहते हैं जिसे audit किया जा सके

FSRS implementations और libraries को परखें। Open documentation, formulas और reference projects की वजह से scheduler को जाँचना संभव है। इसके बाद भी आपको तय करना होगा कि ratings कैसे काम करेंगी, users कौन-सी settings बदल पाएँगे, reviews कैसे sync होंगे, card state कैसे store होगी और अलग-अलग platforms पर एक जैसे behavior की जाँच कैसे होगी।

### आपको modern open-source web, mobile और agent workflow चाहिए

[Flashcards Open Source App](/hi/features/) को देखें। यह FSRS-6 को web, iOS, Android, self-hosting, public API और AI-agent access के साथ जोड़ता है। इसकी साफ़ सीमा maturity है: इसका ecosystem Anki से नया है और templates, add-ons, shared decks या migration fidelity में यह Anki की गहराई की बराबरी नहीं करता। जो collections इन खूबियों पर निर्भर हैं, उनके लिए Anki ही रखें।

## Scheduler कमज़ोर study system को नहीं बचा सकता

Anki बनाम SuperMemo बनाम FSRS की कोई ज़िम्मेदार तुलना यह वादा नहीं कर सकती कि एक विकल्प सबके लिए सीखने में सबसे अच्छा होगा। कोई scheduler benchmark पर अधिक सटीक predictions दे सकता है, फिर भी अंतिम नतीजे का वह केवल एक हिस्सा है।

असल नतीजे अब भी इन बातों पर निर्भर करते हैं:

- क्या हर card एक साफ़ बात पूछता है
- क्या आप याद न आने पर ईमानदारी से failure दर्ज करते हैं
- क्या review history आपके सामान्य व्यवहार को सही तरह दिखाती है
- क्या आपका desired retention और नए cards की संख्या ऐसा workload बनाते हैं जिसे लंबे समय तक संभाला जा सके
- क्या आप due reviews पूरे करते हैं या उन्हें बार-बार छोड़ देते हैं
- क्या product का editing, reading और mobile workflow आपकी ज़िंदगी के अनुकूल है
- क्या मूल सामग्री सही है और याद रखने लायक है

Vendor documentation किसी product का behavior समझाती है। Predictive benchmarks खास data और metrics पर models की तुलना करते हैं। इनमें से कोई भी यह साबित नहीं करता कि एक product हर learner को ज़्यादा याद करवाएगा।

## Anki बनाम SuperMemo बनाम FSRS से क्या निष्कर्ष निकलता है

**Anki बनाम SuperMemo बनाम FSRS** का व्यावहारिक जवाब इस गलत three-way choice को छोड़ने से शुरू होता है।

Anki का mature ecosystem और मौजूदा FSRS scheduler दोनों चाहिए, तो **Anki with FSRS** इस्तेमाल करें। Incremental reading और Windows का गहरा knowledge workflow आपकी प्राथमिकता है, तो **SuperMemo 20 for Windows** को परखें; FSRS पहले से उसके Algorithm Arena में शामिल है। आपका असली लक्ष्य hosted language courses है, तो **SuperMemo.com** को अलग product मानकर देखें। अगर आप scheduling layer बना रहे हैं या उसे audit करना चाहते हैं, तो **FSRS implementations** की तुलना करें।

Flashcards नया open-source web, mobile, self-hosting और agent use case पूरा करता है। इसमें तय official default weights और cross-platform parity tests वाला FSRS-6 implementation है, लेकिन इसका product ecosystem अभी नया है।

वह workflow चुनें जिसे आप लगातार इस्तेमाल कर सकें, फिर उसके अंदर spaced repetition algorithm configure करें। Product आपको review तक पहुँचाता है। Scheduler model के आधार पर तारीख चुनता है। सीखने का signal फिर भी आपके cards, ratings और नियमितता से आता है।
