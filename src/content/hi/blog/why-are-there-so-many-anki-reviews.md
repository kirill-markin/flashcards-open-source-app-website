---
title: "2026 में Anki में इतने ज़्यादा reviews क्यों आ रहे हैं? spaced repetition छोड़े बिना review spikes संभालें"
description: "क्या Anki में आपकी उम्मीद से कहीं ज़्यादा reviews दिख रहे हैं? यह 2026 की practical guide बताती है कि FSRS, new-card limits, learning steps, और retention settings की वजह से review count क्यों उछलता है, और deck reset किए बिना queue को कैसे संभालें।"
date: "2026-07-04"
image: "/blog/why-are-there-so-many-anki-reviews.png"
keywords:
  - "Anki में इतने ज़्यादा reviews क्यों आ रहे हैं"
  - "Anki में बहुत ज़्यादा reviews"
  - "उम्मीद से ज़्यादा Anki reviews"
  - "FSRS में बहुत ज़्यादा reviews"
  - "Anki review spikes"
  - "Anki desired retention"
  - "Anki में new cards और reviews"
  - "Anki reviews कैसे कम करें"
---

पिछले मंगलवार एक ऐसा deck, जो मुझे आम तौर पर करीब 140 reviews देता है, अचानक 487 लेकर सामने आ गया। वही deck। वही subject। वही phone। बदला सिर्फ़ मेरा चेहरा था।

आमतौर पर यहीं लोग **Anki में इतने ज़्यादा reviews क्यों आ रहे हैं**, **Anki में बहुत ज़्यादा reviews**, या **उम्मीद से ज़्यादा Anki reviews** जैसी चीज़ें search करने लगते हैं।

सबसे परेशान करने वाली बात यह है कि spike अक्सर random लगता है। आपने उसी सुबह 5,000 cards import नहीं किए थे। आपने बस कुछ settings बदलीं, FSRS चालू किया, एक productive हफ्ते में काफ़ी cards जोड़ दिए, या दो-तीन दिन miss कर दिए। फिर उसका हिसाब सामने आ गया।

अक्सर इस spike की कोई साफ़ वजह होती है। और अक्सर आप इसे deck reset किए बिना ठीक कर सकते हैं।

![Anki reviews अचानक बढ़ने के बाद flashcards को व्यवस्थित करता हुआ गर्म desk scene](/blog/why-are-there-so-many-anki-reviews.png)

## 2026 में यह problem और क्यों बढ़ी

दो चीज़ें बदली हैं।

अब ज़्यादा लोग FSRS इस्तेमाल कर रहे हैं, जो अच्छी बात है। बहुत-से learners के लिए यह पुराने default scheduler से बेहतर है, और desired retention के ज़रिए यह workload control करने का एक असली lever भी देता है।

इसी के साथ card creation बहुत सस्ती हो गई है। AI notes, slides, transcripts, PDFs, और random study material को plausible cards के बड़े batch में बदल सकती है, उससे पहले कि आप खुद से पूछें कि क्या आप सच में अगले हफ्ते इन सबका review करना चाहते हैं।

यह combination बार-बार वही कहानी बनाता है:

- intake बढ़ता है
- शुरुआती reviews अभी भी manageable लगते हैं
- कुछ दिनों बाद queue फूल जाती है
- FSRS को उस problem के लिए blame मिल जाता है जो अक्सर intake stage से शुरू हुई थी

कभी-कभी FSRS ने सच में queue भारी की होती है। लेकिन बहुत बार उसने सिर्फ़ उस workload को सामने ला दिया होता है जो वैसे भी आने वाला था।

## पहले एक सवाल पूछिए: पिछले हफ्ते में क्या बदला?

Settings छूने से पहले पीछे देखिए।

ज़्यादातर review spikes किसी एक हाल की change से आते हैं:

- आपने new cards बढ़ा दिए
- आपने कोई batch import या generate किया
- आपने learning या relearning steps बदल दिए
- आपने desired retention बढ़ा दिया
- आपने कुछ दिन reviews miss कर दिए
- आपने बहुत-से weak cards समय रहते साफ़ नहीं किए

यह obvious लगता है, लेकिन यही आपको उस classic गलती से बचाता है जिसमें आप एक ही बार में छह चीज़ें बदल देते हैं और फिर समझ ही नहीं आता कि असर किसका हुआ।

## Queue आपको बताती है कि problem किस तरह की है

सिर्फ़ headline number देखकर diagnosis मत कीजिए। देखिए कि किस तरह के cards उछले हैं।

| अगर spike ज़्यादातर इनमें है... | आम वजह | सबसे पहले कहाँ देखें |
| --- | --- | --- |
| New और learning cards | Intake या step churn | New-card limit और learning steps |
| Young review cards | आपने हाल में बहुत ज़्यादा जोड़ दिया | पिछले कुछ दिनों का intake |
| Mature cards उम्मीद से पहले लौट रहे हैं | Retention target या FSRS expectations | Desired retention और deck quality |
| Miss किए हुए दिनों के बाद overdue cards | Backlog | Recovery plan, scheduler tuning नहीं |

यह फर्क मायने रखता है।

अगर queue ज़्यादातर overdue है क्योंकि आपने कुछ समय review ही नहीं किया, तो [2026 में पीछे छूट जाने के बाद फ्लैशकार्ड में फिर से पटरी पर कैसे आएँ](/hi/blog/how-to-catch-up-on-flashcards-after-falling-behind/) पढ़िए। वह backlog problem है। यह article उस version के लिए है जहाँ आप deck इस्तेमाल करते रहे, लेकिन review count फिर भी अजीब हो गया।

## सबसे आम वजह अब भी वही simple चीज़ है: बहुत ज़्यादा new cards

**Anki में new cards और reviews** वाले बहुत-से searches के पीछे यही boring answer होता है।

New cards one-time work नहीं होते। वे यह सब बनाते हैं:

- पहला learning pass
- short-term repeats
- अगले कुछ दिनों के young reviews
- बाद में एक बड़ी steady-state queue, अगर intake rate वही बना रहे

Anki manual यह बात काफी साफ़ कहता है: अगर आप रोज़ 20 new cards सीखते रहते हैं, तो चीज़ें settle होने के बाद लगभग 200 reviews per day की उम्मीद कर सकते हैं, और burden कम करने का सीधा तरीका fewer new cards है। यह explanation manual के [new cards/day section](https://docs.ankiweb.net/deck-options.html#new-cardsday) में है।

इसीलिए deck सोमवार को शांत और शुक्रवार तक बदतमीज़ लग सकता है। Cost बाद में उतरती है।

यह बात real user reports में भी दिखती है। [इस Anki forum thread में, जहाँ new card settings के बावजूद उम्मीद से ज़्यादा reviews आ रहे थे](https://forums.ankiweb.net/t/many-more-reviews-than-expected-with-new-card-settings/62292), problem कोई mystery bug नहीं थी। Intake rate के review consequences बस learner की उम्मीद से बड़े निकले।

अगर आपने हाल में new cards बढ़ाए हैं, तो यहीं से शुरू करें। अगर sustainable intake के लिए कोई साफ़ rule चाहिए, तो [2026 में रोज़ कितने नए फ्लैशकार्ड?](/hi/blog/how-many-new-flashcards-per-day/) इस पर और गहराई से जाता है।

## FSRS पर learning-step churn का blame बार-बार आ जाता है

कभी-कभी spike असल में long-term scheduling की वजह से नहीं होता। वह इसलिए होता है क्योंकि cards learning या relearning में loop कर रहे होते हैं और normal reviews बनने से पहले ही आपका दिन खा जाते हैं।

Anki manual कहता है कि FSRS के साथ learning और relearning steps को एक दिन से छोटा रखना चाहिए, और यह भी साफ़ कहता है कि long `(re)learning` steps FSRS के साथ recommended नहीं हैं, क्योंकि वे scheduler के काम में अड़चन डालते हैं और awkward timing बनाते हैं। यह guidance [FSRS section of the deck options manual](https://docs.ankiweb.net/deck-options.html#fsrs) में है।

तो अगर आपके steps कुछ ज़्यादा dramatic हैं, या आप बार-बार ऐसे fuzzy cards fail कर रहे हैं जिन्हें शायद rewrite होना चाहिए, तो deck ऐसा महसूस करा सकता है जैसे वह आपको spam कर रहा हो, जबकि असली problem short-loop churn हो।

इसी वजह से लोग कई बार **FSRS में बहुत ज़्यादा reviews** कहते हैं, जबकि problem असल में FSRS से पहले की layer में होती है।

## Desired retention workload का dial है

FSRS पर switch करने के बाद बहुत-से लोग इसी हिस्से को कम आँकते हैं।

Higher desired retention का मतलब है कि scheduler cards को जल्दी वापस लाने की कोशिश करेगा, ताकि उनके सामने आने पर आपको उन्हें याद रखने की संभावना ज़्यादा हो। यह useful हो सकता है। इसका मतलब ज़्यादा reviews भी होता है।

Anki manual का [desired retention section](https://docs.ankiweb.net/deck-options.html#desired-retention) साफ़ कहता है कि higher retention intervals को छोटा करता है और reviews बढ़ाता है। [optimal retention पर FSRS wiki](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) workload की तरफ़ से वही बात समझाती है।

`0.95` टाइप करना `0.90` की जगह बहुत छोटा बदलाव लगता है।

उस फर्क के साथ जीना अक्सर बिल्कुल छोटा नहीं लगता।

तो अगर आपका असली सवाल **Anki desired retention** है, और queue उसी setting को बदलने के बाद भारी हुई, तो app random behave नहीं कर रही। वह वही काम कर रही है जो आपने उससे करवाने को कहा।

अगर settings layer की पूरी guide चाहिए, तो [2026 में FSRS Settings](/hi/blog/fsrs-settings/) पढ़िए। वह tuning पर है। यह article tuning शुरू करने से पहले spike diagnose करने पर है।

## "FSRS cards बहुत जल्दी वापस दिखा रहा है" कई अलग चीज़ों का मतलब हो सकता है

Anki forum पर एक recent thread है, [FSRS 6 - Seeing cards too Often](https://forums.ankiweb.net/t/fsrs-6-seeing-cards-too-often/60745), और शिकायत जानी-पहचानी है: learner को लगता है कि `Good` mark किए गए cards उम्मीद से कहीं जल्दी वापस आ रहे हैं।

कभी-कभी इसका मतलब यह होता है:

- desired retention learner की real schedule capacity से ज़्यादा ऊँचा है
- learning steps अब भी बहुत ज़्यादा काम कर रहे हैं
- deck में बहुत-से weak या duplicate cards हैं
- expectations पुराने scheduling behavior से बनी थीं, material की असली जरूरत से नहीं

FSRS कोई magic नहीं है। वह बस एक scheduler है। अगर आप उसे bloated deck और high retention target देंगे, तो वह उसी bloated deck को बहुत professionalism के साथ schedule करेगा।

## Anki aggressive intake rate से आपको अपने-आप नहीं बचाएगा

बहुत-से learners कुछ ऐसा चाहते हैं:

"अगर आज पहले से 250 reviews due हैं, तो नए cards अपने-आप दिखाना बंद कर दो।"

यह idea reasonable है। लेकिन standard Anki behavior में यह out of the box नहीं मिलता।

पूरी forum discussion है जिसमें लोग [total daily reviews count के आधार पर dynamic daily new card limit](https://forums.ankiweb.net/t/dynamic-daily-new-card-limit-based-on-total-daily-reviews-count/65120) माँग रहे हैं। लोग यह बार-बार इसलिए पूछते हैं क्योंकि default workflow intake को daily capacity से tightly link नहीं करता।

तो अगर queue बार-बार spike कर रही है, तो एक practical fix अब भी वही unglamorous fix है:

- new-card cap घटाइए
- उसे एक-दो हफ्ते steady रखिए
- तभी बढ़ाइए जब queue खुद साबित कर दे कि वह इसे संभाल सकती है

[हर हफ्ते कितने नए cards जोड़ने चाहिए](https://forums.ankiweb.net/t/how-to-judge-how-many-new-cards-i-should-be-adding-each-week/66159) वाली forum discussion भी लगभग इसी नतीजे पर पहुँचती है: सही संख्या आपके review time, subject difficulty, और cards के सच में clean होने पर depend करती है।

## कुछ review spikes असल में bad-card spikes होते हैं

यह हिस्सा miss हो जाता है क्योंकि due count settings problem जैसा दिखता है।

Bad cards workload को दो तरीकों से बढ़ाते हैं:

- उनका जवाब देने में ज़्यादा समय लगता है
- वे ज़्यादा fail होते हैं, इसलिए जल्दी वापस आते हैं

मतलब एक vague card आपका समय सिर्फ़ एक बार बर्बाद नहीं करता। वह बार-बार invoice भेजता रहता है।

अगर आपको बार-बार यह दिख रहा है, तो मैं deck को काफ़ी सख्ती से देखूँगा:

- एक ही card में कई facts test हो रहे हैं
- answers इतने लंबे हैं कि उनसे negotiate करना पड़ता है
- duplicate AI-generated cards
- ऐसे cards जिन्हें आपने memorize करने से पहले कभी ठीक से समझा ही नहीं
- ऐसी tiny details जिनकी future review cost उनकी value से ज़्यादा है

अगर आपकी situation इससे ज़्यादा मिलती है, तो [2026 में फ्लैशकार्ड डेक की छँटाई कैसे करें](/hi/blog/how-to-prune-a-flashcard-deck/) अगला बेहतर लेख है।

## Anki review spikes के लिए पाँच मिनट का diagnosis

अगर मुझे **Anki review spikes** जल्दी debug करने हों, तो मैं यह table इस्तेमाल करूँगा:

| Symptom | सबसे संभावित वजह | पहला fix |
| --- | --- | --- |
| New cards बढ़ाने के कुछ दिन बाद due count उछल गया | Intake review capacity से आगे निकल गया | New cards घटाइए और वहीं रहने दीजिए |
| Learning और relearning counts फूले हुए हैं | Step churn या weak cards | Steps छोटे कीजिए और bad cards ठीक कीजिए |
| FSRS पर switch करने के बाद mature cards बहुत frequent लग रहे हैं | Desired retention बहुत ऊँचा है, या expectations गलत हैं | Retention थोड़ा घटाइए और observe कीजिए |
| कुछ दिन miss करने से बहुत बड़ा pile बन गया | Backlog | New cards रोकिए और steadily recover कीजिए |
| Due count moderate है, फिर भी review time terrible लग रहा है | Card quality problem | Weak cards rewrite, suspend, या delete कीजिए |

ध्यान दीजिए कि first-fix column में क्या नहीं है।

"Deck reset कर दीजिए" नहीं।

अक्सर वही सबसे महँगी गलती होती है।

## Deck reset किए बिना Anki reviews कैसे कम करें

अगर आपका असली search **Anki reviews कैसे कम करें** है, तो मैं fixes इसी order में करूँगा।

### 1. पहले new cards घटाइए

यह scheduling history मिटाए बिना future pressure कम करता है।

कुछ overloaded decks में कुछ दिनों के लिए new cards को zero कर देना dramatic नहीं होता। वह maintenance होता है।

### 2. Learning और relearning steps छोटे रखिए

FSRS के साथ लंबी step ladders कई बार value से ज़्यादा churn बनाती हैं।

### 3. Desired retention को तभी adjust करें जब intake control में आ जाए

Retention एक असली workload lever है। बस यह पहला lever नहीं है जिसे मैं खींचूँगा।

### 4. जो cards बार-बार समय बर्बाद करते हैं, उन्हें हटाइए

Low-value cards delete कीजिए। Non-priority material suspend कीजिए। Important लेकिन badly written cards rewrite कीजिए।

### 5. Backlog recovery को normal tuning से अलग रखिए

अगर spike इसलिए हुई क्योंकि आपने कुछ दिन miss किए, तो इसे pure settings issue की जगह backlog recovery की तरह treat कीजिए।

## सही fix इस बात पर depend करता है कि कौन-सा number दर्द दे रहा है

यह छोटा लग सकता है, लेकिन यही analysis को ईमानदार रखता है।

अगर तकलीफ़ देने वाला number यह है:

- **reviews due**, तो intake घटाइए और शायद retention भी
- **learning count**, तो steps और weak cards साफ़ कीजिए
- **time spent per session**, तो card quality और review flow सुधारिए

तीसरा case बहुत common है। कुछ लोगों के पास असल में बहुत ज़्यादा reviews नहीं होते। उनके reviews बस बहुत slow और बहुत annoying होते हैं। अगर आपकी problem यह है, तो [2026 में फ्लैशकार्ड review तेज़ कैसे करें](/hi/blog/how-to-review-flashcards-faster/) किसी और scheduler tweak से ज़्यादा मदद करेगा।

## Flashcards कहाँ fit होता है, बिना magic होने का नाटक किए

[Flashcards features](/hi/features/) यहाँ एक practical वजह से useful हैं: product review से पहले वाले हिस्से और review के दौरान वाले हिस्से, दोनों को cover करता है।

यह इसलिए मायने रखता है क्योंकि बहुत-से review spikes पहले review day से पहले ही शुरू हो जाते हैं। वे तब शुरू होते हैं जब बहुत-से cards live deck में घुस जाते हैं, या जब AI-generated drafts को बिना काफ़ी editing के accept कर लिया जाता है।

Flashcards इन boring लेकिन important हिस्सों में मदद कर सकता है:

- source material से draft cards बनाना
- front/back cards को permanent review debt बनने से पहले edit करना
- deck schedule करने लायक हो जाने के बाद FSRS के साथ review करना

यह useful है। यह कोई ऐसा वादा नहीं है कि software workload math को cancel कर देगा। अगर आप किसी भी spaced repetition system में अपनी हफ्ते की capacity से ज़्यादा cards भर देंगे, तो queue आख़िरकार जवाब देगी।

## Fix अक्सर spike से कम dramatic होती है

जब लोग **Anki में इतने ज़्यादा reviews क्यों आ रहे हैं** search करते हैं, तो वे अक्सर किसी hidden technical answer के लिए तैयार हो रहे होते हैं।

आमतौर पर जवाब ज़्यादा ordinary होता है:

- आपने cards अपनी schedule capacity से तेज़ जोड़े
- आपके learning steps extra churn बना रहे हैं
- आपका retention target आप जितना काम करना चाहते हैं उससे ज़्यादा काम मांग रहा है
- आपके deck में ऐसे cards हैं जिन्हें पहले ही साफ़ कर देना चाहिए था

परेशान करने वाली बात है, हाँ। रहस्यमय चीज़ आम तौर पर नहीं।

पहले boring diagnosis कीजिए।

घबराने से पहले new cards घटाइए।

Learning steps छोटे रखिए।

Desired retention को workload dial की तरह treat कीजिए।

Weak cards जल्दी delete कीजिए।
