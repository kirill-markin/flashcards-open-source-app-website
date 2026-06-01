---
title: "2026 में CCNA के लिए फ़्लैशकार्ड कैसे इस्तेमाल करें: subnetting, show commands, और troubleshooting जो सच में याद रहे"
description: "क्या आप 2026 में Cisco CCNA 200-301 की तैयारी कर रहे हैं? यहाँ subnetting, show commands, routing और switching mistakes, और मौजूदा official blueprint के लिए FSRS के साथ एक व्यावहारिक फ़्लैशकार्ड workflow दिया गया है।"
date: "2026-06-01"
image: "/blog/how-to-use-flashcards-for-ccna.png"
keywords:
  - "CCNA फ़्लैशकार्ड"
  - "200-301 CCNA फ़्लैशकार्ड"
  - "CCNA subnetting फ़्लैशकार्ड"
  - "CCNA show commands फ़्लैशकार्ड"
  - "CCNA troubleshooting फ़्लैशकार्ड"
  - "CCNA पढ़ाई के फ़्लैशकार्ड"
  - "FSRS से CCNA पढ़ाई"
  - "networking certification के फ़्लैशकार्ड"
---

CCNA में बड़े नुकसान अक्सर छोटी चूकों से होते हैं। आप route table देखते हैं, लगता है कि बात समझ आ गई, फिर अगला एक मिनट इसी में निकल जाता है कि अब `show ip route` देखना चाहिए, `show ip ospf neighbor`, या `show interfaces trunk`। तब तक सवाल ज़रूरत से ज़्यादा समय ले चुका होता है।

यहीं **CCNA फ़्लैशकार्ड** सच में काम आते हैं।

आपको फिर भी labs, command-line practice, और basic troubleshooting judgment चाहिए। लेकिन CCNA में pressure के बीच कई चीज़ें बिना रुके याद से निकालनी पड़ती हैं:

- subnetting के नतीजे, जिन्हें आपको दोबारा calculate नहीं करना चाहिए
- protocol differences, जो बार-बार आपस में गड्डमड्ड हो जाते हैं
- `show` commands, जिन्हें आप पहचानते तो हैं, पर जल्दी याद नहीं कर पाते
- routing और switching clues, जिन्हें आप पहली नज़र में गलत पढ़ देते हैं
- services और security की छोटी details, जो बार-बार points कटवाती हैं

काम का deck networking glossary नहीं होता। वह उन चीज़ों के लिए एक compact memory layer होता है जो labs और practice questions में बार-बार टूटती हैं।

![CCNA पढ़ाई के लिए गर्मजोशी भरा desk, subnetting flashcards, network topology sketches, show-command review, और छोटा lab switch](/blog/how-to-use-flashcards-for-ccna.png)

## 1 जून 2026 तक, deck बनाने से पहले मौजूदा 200-301 blueprint ज़रूर देख लें

**1 जून 2026** तक [Cisco के मुख्य CCNA exam page](https://www.cisco.com/site/us/en/learn/training-certifications/exams/ccna.html) पर अभी भी **Implementing and Administering Cisco Solutions (200-301 CCNA) v1.1** listed है। वहाँ exam duration **120-minute** दी गई है और price **$US300** दिखाया गया है। इसी समय Cisco ने नया [200-301 CCNA v2.0 exam topics PDF](https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301_CCNA_v2.0_Exam_Topics_PDF.pdf) भी publish किया हुआ है।

इतनी बात ही काफ़ी है कि आप stale forum advice, पुराने screenshots, या random public card packs की जगह Cisco की अपनी pages के क़रीब रहें।

Cisco के published v2.0 topics PDF में exam को इस तरह बांटा गया है:

- 25% Network Infrastructure and Connectivity
- 25% Switching and Network Access
- 20% IP Routing
- 20% Network Services and Security
- 10% AI, and Network Operations and Management

इसमें **AI and network operations** से जुड़ी नई चीज़ें भी जोड़ी गई हैं, जिनमें network tasks के लिए prompt selection और AI-generated operational output का evaluation शामिल है।

सीधी practical move यह है: जिस latest official blueprint को आप verify कर सकें, उसी से cards बनाइए, फिर exam schedule करने से पहले public exam page दोबारा check कीजिए। Blueprint बदलते ही CCNA study advice बहुत जल्दी पुरानी पड़ जाती है।

## एक विशाल CCNA facts deck मत बनाइए

लोग exam topics खोलते हैं, networking fundamentals, switching, routing, services, security, और अब AI plus ops देखते हैं, फिर हर चीज़ के cards बनाना शुरू कर देते हैं। एक हफ्ते बाद deck में यह सब भर जाता है:

- हर port जो उन्होंने एक बार देखा
- course का हर acronym
- पूरी command syntax, जिसे वे असल में कभी इस्तेमाल नहीं करते
- notes से कॉपी की गई लंबी protocol descriptions
- ऐसे cards, जो एक साथ तीन चीज़ें test करते हैं

ऐसा deck review में अच्छा नहीं चलता।

मैं official objectives को boundary की तरह लूंगा, transcription job की तरह नहीं। Card तभी होना चाहिए जब इनमें से कोई एक बात सच हो:

- वह सीधे current Cisco blueprint से आता हो
- वह lab में छूटा हो
- वह practice question में छूटा हो
- वह किसी क़रीबी concept से बार-बार गड्डमड्ड हो रहा हो
- उसे आपको धीरे पहचानना नहीं, तेज़ी से याद से निकालना ज़रूरी हो

यही फर्क है काम के **200-301 CCNA फ़्लैशकार्ड** और networking trivia के बड़े ढेर में।

## सबसे अच्छे CCNA cards आम तौर पर चार जगहों से आते हैं

### 1. Subnetting result cards

ये boring होते हैं, और इसी वजह से काम करते हैं।

CCNA subnetting mistakes आम तौर पर deep theory से नहीं, speed और interference से होती हैं। मैं recurring outputs और comparisons के लिए छोटे cards बनाऊँगा, giant subnetting lectures नहीं।

उदाहरण:

- Front: `/27` में कितने usable hosts होते हैं?
  Back: 30.
- Front: `/26` के लिए कौन-सा mask होता है?
  Back: `255.255.255.192`.
- Front: किस prefix में हर subnet पर 4 total addresses मिलते हैं?
  Back: `/30`.
- Front: default route किस prefix का इस्तेमाल करता है?
  Back: `0.0.0.0/0`.

अगर कोई subnet size आपको बार-बार धीमा कर रहा है, तो उसके लिए card बनना चाहिए। अगर वह पहले से automatic है, तो सिर्फ़ इसलिए extra review मत दीजिए कि वह study outline में official दिख रहा था।

### 2. Protocol contrast cards

CCNA में बहुत-सी चीज़ें क़रीबी पड़ोसियों जैसी लगती हैं:

- HSRP vs VRRP
- trunk vs access
- static route vs floating static route
- DHCP client vs server vs relay
- TACACS+ vs RADIUS
- SCP या SFTP vs पुराने insecure transfer options

ये flashcards के लिए बहुत अच्छे targets हैं, क्योंकि गलत answer अक्सर इतना क़रीब होता है कि वह आपको अपनी तरफ खींच लेता है।

मैं इन्हें essays की तरह नहीं, छोटे distinctions की तरह लिखूँगा।

उदाहरण:

- Front: static route और floating static route में practical difference क्या है?
  Back: Floating static route higher administrative distance इस्तेमाल करता है, ताकि वह backup path की तरह रहे।
- Front: DHCP relay कौन-सी problem solve करता है?
  Back: जब client और server एक ही broadcast domain में नहीं होते, तब यह DHCP requests को subnets के पार forward करता है।
- Front: Rapid PVST+ में root guard किस काम आता है?
  Back: यह downstream switch को उस port पर root बनने से रोकता है।

यह "spanning tree को detail में explain करो" से कहीं बेहतर है।

### 3. Show-command interpretation cards

यहीं **CCNA show commands फ़्लैशकार्ड** सबसे ज़्यादा काम आते हैं।

मेरा मतलब यह नहीं कि हर command को अलग से रटा जाए। मतलब यह है कि बार-बार होने वाली interpretation failures को छोटे retrieval prompts में बदला जाए।

काम के cards कुछ ऐसे लगते हैं:

- Front: IPv4 router पर OSPF neighbors verify करने के लिए पहले कौन-सा command check करना चाहिए?
  Back: `show ip ospf neighbor`.
- Front: कौन-सा command confirm करता है कि switchport trunking कर रहा है या नहीं, और कौन-सी VLANs allowed हैं?
  Back: `show interfaces trunk`.
- Front: `show ip route` में `O` क्या बताता है?
  Back: यह route OSPF के through सीखा गया था।
- Front: switch पर learned MAC addresses verify करने के लिए कौन-सा command मदद करता है?
  Back: `show mac address-table`.
- Front: troubleshooting के दौरान recent device messages देखने के लिए अच्छा first stop कौन-सा command है?
  Back: `show logging` या `show log`.

मकसद commands को trophies की तरह जमा करना नहीं है। मकसद hesitation कम करना है, जब lab या question असल में यह पूछ रहा हो कि अगला evidence कहाँ देखना है।

### 4. Lab-mistake cards

ज़्यादातर CCNA decks में यही highest-value cards होते हैं।

Lab या practice set के बाद पूरी session मत बचाइए। Miss बचाइए।

मैं हर असली गलती के बाद तीन बातें लिखूँगा:

1. मैंने कौन-सा clue miss किया?
2. मैंने कौन-सी गलत assumption बना ली?
3. कौन-सा छोटा card अगली बार वही गलती रुकवाएगा?

इससे आम तौर पर ऐसे cards बनते हैं:

- Front: यह OSPF adjacency fail क्यों हुई?
  Back: Answer में वही exact lab miss लिखिए: wrong area, wrong network type, passive interface, या कोई और specific mismatch जो आपने देखा।
- Front: उस trunking lab में असली issue क्या था?
  Back: Port सही तरह trunking नहीं कर रहा था, या allowed VLAN list ने वही VLAN block कर दी थी जिसकी आपको ज़रूरत थी।
- Front: जब hosts local ping कर लेते हैं लेकिन दूसरे subnet तक नहीं पहुँचते, तो पहले क्या confirm करना चाहिए?
  Back: IP configuration, default gateway, VLAN placement, और inter-VLAN routing path।

यही वह तरह के **CCNA troubleshooting फ़्लैशकार्ड** हैं जो अगली lab में सच में काम आते हैं।

## Objective verb को filter की तरह इस्तेमाल करें

Cisco की अपनी [v1.1 update explainer](https://blogs.cisco.com/learning/understanding-the-updated-ccna-v1-1-with-ai-machine-learning-and-more) में सबसे काम की study tips में से एक यह है कि task verb क्या मांग रहा है, इस पर ध्यान दें।

यह बात अभी भी लागू होती है।

अगर objective में लिखा है:

- **describe**
- **interpret**
- **select**
- **configure**
- **troubleshoot**

तो ये एक जैसे study jobs नहीं हैं।

आपके flashcards पर भी इसका असर दिखना चाहिए।

अच्छे uses:

- `describe` -> एक साफ़ concept या role card
- `interpret` -> output, status, या scenario clue card
- `select` -> best-fit comparison card
- `troubleshoot` -> symptom plus first-check card

कमज़ोर uses:

- `configure` -> पूरे multi-line configs वाले giant flashcards
- `troubleshoot` -> vague cards, जिनके छह possible answers हों और clear failure pattern न हो

Configuration-heavy objectives के लिए labs ज़्यादा मायने रखते हैं। Interpretation और distinction-heavy objectives में flashcards बहुत points बचा सकते हैं।

## AI और network-operations section अब सच में blueprint में है, लेकिन उसे पूरा deck निगलने मत दीजिए

Cisco के current published v2.0 topics में **10%** blueprint **AI, and Network Operations and Management** section को दिया गया है। यह important है। इसका मतलब यह नहीं कि पूरा exam अब AI exam बन गया है।

मैं नई चीज़ों के लिए कुछ साफ़ cards बनाऊँगा:

- Cisco network operations में agentic AI से क्या मतलब लेता है
- network-operations request में कौन-से prompt components matter करते हैं
- device-based, controller-based, cloud-based, automation-based, और infrastructure-as-code management approaches में क्या फर्क है
- Ansible, syslog, और SNMP कहाँ fit होते हैं

मैं इस नए section को switching, routing, और infrastructure troubleshooting वाले बड़े scoring blocks पर हावी नहीं होने दूँगा।

अगर आपको current AI-related certification study पर broader companion article चाहिए, तो [2026 में AI certifications के लिए फ़्लैशकार्ड कैसे इस्तेमाल करें](/blog/how-to-use-flashcards-for-ai-certifications/) relevant है। लेकिन CCNA में अभी भी ज़्यादातर points network fundamentals, access, routing, और security से ही आते हैं।

## अगर tags सच में काम कर रहे हों, तो एक CCNA deck काफ़ी होता है

मैं आम तौर पर `CCNA 200-301` नाम का एक main deck रखूँगा, फिर moving parts के लिए tags इस्तेमाल करूँगा:

- `subnetting`
- `switching`
- `stp`
- `ospf`
- `ipv6`
- `security`
- `services`
- `ai-ops`
- `missed`
- `needs-recheck`

यह structure शांत रहता है, लेकिन study block से पहले focus करना आसान बनाता है।

अगर organization वाले हिस्से को और detail में देखना है, तो [2026 में फ़्लैशकार्ड कैसे व्यवस्थित करें](/blog/how-to-organize-flashcards/) बेहतर companion piece है। CCNA के लिए मुख्य rule यही है: chapter headings के हिसाब से नहीं, retrieval problems के हिसाब से organize कीजिए।

## Version-sensitive facts को छोटी temporary layer में रखें

कुछ CCNA facts जानने लायक होते हैं, लेकिन core deck पर हावी नहीं होने चाहिए:

- कौन-सा public page अभी v1.1 दिखा रहा है
- यह कि Cisco ने v2.0 topics PDF भी publish किया है
- 120-minute exam timing
- current listed price
- exact current domain percentages

ये facts बदल सकते हैं। मैं इन्हें `needs-recheck` जैसे tag से mark करके हल्का review दूँगा।

Deck का stable हिस्सा उन चीज़ों पर होना चाहिए जिन्हें आप तब भी retrieve करना चाहेंगे, जब page layout या version label बदल जाए:

- subnetting patterns
- protocol contrasts
- command interpretation
- routing logic
- switching और security troubleshooting

यही deck को काम का बनाए रखता है, किसी stale exam-facts archive की तरह नहीं।

## थोड़ा boring weekly rhythm, एक heroic weekend से बेहतर चलता है

मैं workflow को सीधा रखूँगा:

1. Current blueprint से एक छोटा topic पढ़िए।
2. छोटा lab या practice set कीजिए।
3. सिर्फ़ misses और hesitations को candidate cards में बदलिए।
4. कमजोर cards को तुरंत delete या split कीजिए।
5. जो बचें, उन्हें FSRS के साथ review कीजिए।

बस इतना काफ़ी है।

यह नहीं:

- course PDF से एक giant import
- हर `show` command से बना एक विशाल deck
- एक Sunday night जिसमें पूरा blueprint cards में कॉपी कर दिया जाए

अगर review load ही वह चीज़ है जो आपकी plan बार-बार तोड़ती है, तो [2026 में हर दिन कितने नए फ़्लैशकार्ड?](/blog/how-many-new-flashcards-per-day/) और [2026 में FSRS के साथ परीक्षा की तैयारी कैसे करें](/blog/how-to-study-for-an-exam-with-fsrs/) यहाँ सीधे fit बैठते हैं।

## इस workflow में Flashcards कहाँ अच्छा बैठता है

[Flashcards](/) CCNA prep के लिए अच्छा fit है, क्योंकि यह exam messy source material पैदा करता है: lab notes, pasted CLI output, short miss logs, और छोटे troubleshooting summaries। App cleanup step और review step दोनों संभाल सकता है, बिना यह दिखावा किए कि दोनों एक ही काम हैं।

मैं इसे कुछ इस तरह इस्तेमाल करूँगा:

1. lab, practice set, या study block ख़त्म कीजिए
2. वही exact misses, command snippets, या notes कॉपी कीजिए जो काम के थे
3. उन्हें AI chat में paste कीजिए या सीधे front/back cards में बदलिए
4. rewrite कीजिए, जब तक हर card सिर्फ़ एक clean retrieval target test न करे
5. topic और miss type, दोनों के हिसाब से tag कीजिए
6. जो cards बचें, उन्हें FSRS के साथ review कीजिए

यह current product surface से अच्छी तरह मेल खाता है:

- hosted web app में front/back card creation
- workspace data और file attachments के साथ AI chat, जिसमें plain text uploads भी शामिल हैं
- decks और tags, ताकि `ospf`, `stp`, `acl`, `subnetting`, और `missed` को अलग रखा जा सके
- FSRS scheduling, जब cards review लायक हो जाएँ
- offline-first clients और self-hosted path, अगर आप लंबे समय तक अपने deck पर control रखना चाहते हैं

अगर आप इसे पहली बार set up कर रहे हैं, तो [Getting Started](/docs/getting-started/) सबसे तेज़ रास्ता है। अगर certification deck बनाते समय long-term ownership की परवाह है, तो [Features](/features/) और [Pricing](/pricing/) hosted और self-hosted options को cover करते हैं।

## वह rule जो मैं साथ रखूँगा

सिर्फ़ यह मत पूछिए कि कोई CCNA topic important है या नहीं।

यह पूछिए कि वह important है, और time pressure में miss होना आसान भी है या नहीं।

आम तौर पर यही filter सबसे अच्छे **CCNA study फ़्लैशकार्ड** देता है:

- बार-बार होने वाली subnetting slips
- क़रीबी protocol comparisons
- output जिसे आपने गलत पढ़ा
- troubleshooting clues जिन्हें आपने नज़रअंदाज़ किया
- security और services की छोटी details, जो points कटवाती रहती हैं

अगर कोई card अगली बार इनमें से किसी चीज़ को तेज़ी से retrieve करने में मदद करे, तो उसे रखिए।

अगर वह सिर्फ़ यह साबित करता है कि आपने networking notes का एक और हिस्सा deck में कॉपी कर दिया, तो उसे हटा दीजिए।
