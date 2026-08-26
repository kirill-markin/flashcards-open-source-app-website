---
title: "CompTIA Network+ फ़्लैशकार्ड (N10-009): पोर्ट, सबनेटिंग और PBQ अभ्यास"
description: "CompTIA Network+ N10-009 के लिए पोर्ट, सबनेटिंग, कमांड और ट्रबलशूटिंग के उपयोगी फ़्लैशकार्ड बनाएँ—और उन्हें लैब व PBQ अभ्यास के साथ सही तरह इस्तेमाल करें।"
date: "2026-08-26"
image: "/blog/comptia-network-plus-flashcards.png"
keywords:
  - "CompTIA Network+ फ़्लैशकार्ड"
  - "Network+ फ़्लैशकार्ड"
  - "N10-009 फ़्लैशकार्ड"
  - "Network+ ports और protocols"
  - "Network+ subnetting फ़्लैशकार्ड"
  - "Network+ PBQ अभ्यास"
  - "Network+ troubleshooting"
  - "FSRS से Network+ की तैयारी"
---

CompTIA N10-009 में अधिकतम 90 सवालों के लिए 90 मिनट मिलते हैं और इनमें performance-based questions भी शामिल होते हैं। इसके official objectives में ports और protocols याद रखने के साथ-साथ किसी scenario में IPv4 addressing इस्तेमाल करना, switching features configure करना, network evidence जाँचना और failures troubleshoot करना भी शामिल है।

इन सभी कामों की तैयारी एक जैसी नहीं होती। अच्छे **CompTIA Network+ फ़्लैशकार्ड** छोटे facts और decisions तुरंत याद करने में मदद करते हैं—जैसे किसी port से जुड़ी service, subnet mask, command का काम या अगली जाँच तक ले जाने वाला clue। लेकिन calculations, configuration, packet captures, पूरे troubleshooting scenarios और PBQs के लिए deck से बाहर सक्रिय अभ्यास अब भी ज़रूरी है।

**तथ्यों की जाँच:** 26 अगस्त 2026।

![Practical network lab के साथ ports, subnetting, commands और troubleshooting के फ़्लैशकार्ड छाँटता Network+ विद्यार्थी](/blog/comptia-network-plus-flashcards.png)

## मौजूदा N10-009 objectives को आधार बनाएँ

मौजूदा official [CompTIA Network+ N10-009 exam objectives](https://assets.ctfassets.net/82ripq7fjls2/113XqW3JHT7AlIU33M63I0/af42da2af7383a38f318bad10aa9afbd/Network_Plus_N10-009_Exam_Objectives.pdf) पर **Exam Objectives Version 4.0** लिखा है। इनमें multiple-choice और performance-based questions वाली परीक्षा, 90 मिनट की समय-सीमा और IT networking में कम-से-कम 9–12 महीने के अनुभव की सिफ़ारिश दी गई है।

| N10-009 domain | भार |
| --- | ---: |
| Networking Concepts | 23% |
| Network Implementation | 20% |
| Network Operations | 19% |
| Network Security | 14% |
| Network Troubleshooting | 24% |

इन percentages से अपनी कुल study coverage जाँचें, हर domain के लिए cards का quota तय न करें। अगर परीक्षा का लगभग एक चौथाई हिस्सा troubleshooting पर है और आपके deck में सिर्फ़ port numbers हैं, तो deck आपकी तैयारी की एक बड़ी कमी छिपा रहा है। इसका समाधान सैकड़ों troubleshooting cards बनाना भी नहीं है। ज़्यादा scenario practice करें और केवल उन facts या decisions के cards जोड़ें जिन पर आप बार-बार अटकते हैं।

CompTIA यह भी साफ़ करता है कि हर objective के नीचे दिए गए examples पूरी सूची नहीं हैं। Objectives को मौजूदा scope का सबसे भरोसेमंद दस्तावेज़ मानें, लेकिन यह न समझें कि हर सवाल किसी listed bullet की नकल होगा। `n10-009-v4` जैसा source tag रखें और परीक्षा से पहले version-sensitive cards को official PDF से दोबारा जाँचें।

## पहले तय करें: याद करना है या अभ्यास करना है

एक आसान कसौटी है: इस topic में सफलता कैसी दिखती है? अगर एक छोटा और स्थिर answer याद से निकालना है, तो flashcard सही हो सकता है। अगर calculation करनी है, बदलते evidence को समझना है, कई उचित actions में से चुनाव करना है या device configure करना है, तो practical exercise बेहतर है। Answer scenario पर निर्भर हो, तो card पर पूरा scenario नहीं, उससे दोबारा काम आने वाला clue या decision rule रखें।

| फ़्लैशकार्ड के लिए अच्छे targets | जिनका पूरा अभ्यास बेहतर है |
| --- | --- |
| Service और port के संबंध | Packet capture की जाँच |
| Acronym और उसकी practical भूमिका | समय के दबाव में अनजान networks की subnetting |
| CIDR prefix और mask conversions | VLANs, routes, wireless या network services configure करना |
| Command या tool का उद्देश्य | अनजान command output पढ़ना |
| एक symptom और अगला evidence जो जुटाना है | कई layers वाले network failure को trace करना |
| Troubleshooting method का एक चरण | PBQ या लंबा scenario पूरा करना |

कुछ topics दोनों columns में आते हैं। `/27` का mask `255.255.255.224` याद करें, फिर काग़ज़ पर किसी नए `/27` network की calculation करें। `tcpdump` का काम याद रखें, फिर उससे असली traffic capture और filter करें। Card बेवजह की हिचकिचाहट हटाता है; exercise साबित करती है कि आप काम कर सकते हैं।

## Port cards में service के साथ practical clue भी रखें

N10-009 objectives में **Network+ ports और protocols** की एक निश्चित table है। Exam scope के लिए उसी table को आधार बनाएँ। Protocols पर अधिक जानकारी के लिए [IANA Service Name and Transport Protocol Port Number Registry](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml) देखें। Registry official service-name और transport-port assignments दर्ज करती है, लेकिन वह भी यह नहीं बताती कि किसी particular host पर वास्तव में क्या चल रहा है।

किसी भी source को एक विशाल “हर port का नाम बताओ” card न बनाएँ। Material को छोटे prompts में बाँटें। कोई important association बार-बार भूल रहे हों, तो उसे दोनों दिशाओं में सीखें।

```text
सामने: Encrypted remote command-line access के लिए port 22 से N10-009 का कौन-सा
service association मेल खाता है?

पीछे: SSH। Port 22 इसका standard association है; host पर चल रही असली service
और configuration की पुष्टि करें।
```

```text
सामने: N10-009 objectives port 22 को किन दो services से जोड़ते हैं?

पीछे: SSH और SFTP।
```

```text
सामने: किसी client को automatic IP configuration चाहिए। N10-009 objectives के
अनुसार कौन-सी service और port pair याद आनी चाहिए?

पीछे: DHCP, ports 67 और 68।
```

Practical clue जोड़ने से card ज़्यादा उपयोगी होता है। `53 -> DNS` याद रखना ठीक है, लेकिन “name resolution fail हो रहा है; DNS की जाँच करें” को असली समस्या पर लागू करना आसान है। इसी तरह `161/162 -> SNMP` के साथ network monitoring और management का संबंध भी याद रहना चाहिए।

इस सीमा के लिए अलग card बनाएँ:

```text
सामने: Traffic destination port 443 इस्तेमाल कर रहा है। केवल port number से
application के बारे में क्या साबित होता है?

पीछे: इससे यह साबित नहीं होता कि कौन-सी application या service चल रही है। Port 443
का standard association HTTPS से है, लेकिन configuration, process और traffic
evidence की जाँच फिर भी ज़रूरी है।
```

Port एक convention और clue है, पहचान का पक्का प्रमाण नहीं। Services को move, tunnel या proxy किया जा सकता है और वे गलत configure भी हो सकती हैं। सिर्फ़ number देखकर निश्चित निष्कर्ष निकालने की आदत **Network+ troubleshooting** में नुकसान करती है।

पहले दिन हर pairing के लिए forward और reverse दोनों cards बनाने की ज़रूरत नहीं है। एक direction से शुरू करें। Reverse card तभी जोड़ें, जब recall धीमा हो या दो services आपस में गड्डमड्ड हों। [Security+ फ़्लैशकार्ड गाइड](/hi/blog/how-to-use-flashcards-for-security-plus/) protocols और security distinctions के लिए यही तरीका अपनाती है।

## Subnetting cards से anchors याद करें, calculation नए networks पर करें

N10-009 objective 1.7 कहता है, “किसी scenario में उपयुक्त IPv4 network addressing इस्तेमाल करें।” इसका मतलब multiple-choice list में mask पहचान लेने से कहीं ज़्यादा है। **Network+ subnetting फ़्लैशकार्ड** से common anchors automatic बनाएँ, फिर असली calculation करते समय cards को अलग रख दें।

इन anchor cards को जाँचना आसान है:

```text
सामने: /27 के लिए कौन-सा subnet mask होता है?

पीछे: 255.255.255.224।
```

```text
सामने: किसी साधारण IPv4 /27 subnet में कुल कितने addresses होते हैं और उनमें से
परंपरागत रूप से hosts कितने इस्तेमाल कर सकते हैं?

पीछे: कुल 32; network और broadcast addresses हटाने के बाद परंपरागत रूप से 30
addresses hosts के लिए इस्तेमाल किए जा सकते हैं।
```

```text
सामने: 192.0.2.77/27 किस network में आता है?

पीछे: 192.0.2.64/27। Block .64 से .95 तक है; पारंपरिक host range .65 से .94
तक है और .95 broadcast address है।
```

तीसरा card तभी तक उपयोगी है, जब तक आपको उसका exact answer याद नहीं हो जाता। उसके बाद वह calculation नहीं, उसी card की याददाश्त जाँचता है। हल किए हुए examples को temporary checks या templates की तरह रखें। फिर नए addresses, अलग prefix lengths, VLSM planning और timed exercises पर जाएँ, जहाँ answer पीछे लिखा हुआ न मिले।

एक संतुलित subnetting block ऐसा हो सकता है:

1. Due prefix, mask, block-size और host-count cards review करें।
2. Answer देखे बिना पाँच अनजान subnets calculate करें।
3. Network address, broadcast address और usable range जाँचें।
4. Repair card सिर्फ़ उस rule के लिए लिखें जिसकी वजह से गलती बार-बार हुई।

अगर आप भूलते रहते हैं कि `/26` में blocks 64 के अंतर से आगे बढ़ते हैं, तो यह fact card पर होना चाहिए। Block size समझने के बावजूद समय के दबाव में boundaries चूकते हैं, तो उसका इलाज ज़्यादा calculation है।

## Command cards में syntax से पहले सही tool याद करें

Objectives में protocol analyzer, `ping`, `traceroute` या `tracert`, `nslookup`, `tcpdump`, `dig`, `netstat`, `ip`, `ifconfig`, `ipconfig`, `arp` और Nmap जैसे software tools दिए गए हैं। इनमें hardware tools और `show route`, `show interface`, `show config`, `show arp` तथा `show vlan` जैसे basic device commands भी शामिल हैं।

यह cards का अच्छा source है, लेकिन commands रटकर झूठी competence बहुत जल्दी बन सकती है। Prompt यह पूछे कि किस tool से कौन-सा evidence मिलना चाहिए।

```text
सामने: Name resolution जाँचने के लिए कौन-सा N10-009 command-line tool DNS query
कर सकता है?

पीछे: System और task के अनुसार `nslookup` या `dig`।
```

```text
सामने: बाद में जाँचने के लिए packets कौन-सा command-line tool capture करता है?

पीछे: `tcpdump`।
```

```text
सामने: VLAN information चाहिए, तो कौन-सा basic device command इस्तेमाल करने पर
विचार करना चाहिए?

पीछे: `show vlan`। Exact syntax और output device platform पर निर्भर करते हैं।
```

```text
सामने: Basic `ping` test के मुकाबले `traceroute` कौन-सा अतिरिक्त evidence दे
सकता है?

पीछे: Destination तक जवाब देने वाले hops का क्रम। इससे पता लगाने में मदद मिल सकती
है कि path कहाँ बदलता या रुकता है। जवाब न मिलना जाँचने लायक evidence है, अपने-आप
इस बात का प्रमाण नहीं कि कोई hop down है।
```

Command card review करने के बाद वही command किसी lab या ऐसे system पर चलाएँ जिसे test करने की अनुमति आपके पास हो। पहले अनुमान लगाएँ कि क्या दिखेगा, फिर actual output पढ़ें, एक condition बदलें और command दोबारा चलाएँ। यह छोटा loop permissions, flags, platform differences, filtering और उलझे हुए output सिखाता है—card यह अनुभव नहीं दे सकता। [Terminal command फ़्लैशकार्ड गाइड](/hi/blog/how-to-learn-terminal-commands-with-flashcards/) इस तरीके को विस्तार से समझाती है।

## Troubleshooting cards में अनिश्चितता के लिए जगह रखें

N10-009 का सबसे बड़ा domain Network Troubleshooting है, जिसका भार 24% है। Objectives में troubleshooting method, physical-interface faults, switching और service problems, performance issues, software tools, hardware tools और device commands शामिल हैं।

कमज़ोर card पूछता है, “Packet loss की वजह क्या है?” और लंबे जवाब की उम्मीद करता है। बेहतर card एक observation देता है और पूछता है कि उस evidence के आधार पर अगली उचित जाँच क्या होगी।

```text
सामने: किसी client का IPv4 address 169.254.x.x है। इससे क्या संकेत मिलता है और
आगे क्या जाँचना चाहिए?

पीछे: Client को expected configuration की जगह APIPA/link-local address मिला है।
Local link और DHCP तक पहुँचने का रास्ता जाँचें। केवल address से failed component
की पहचान नहीं होती।
```

```text
सामने: Host तक IP address से पहुँचा जा सकता है, लेकिन hostname से नहीं। अगली जाँच
के लिए कौन-सी service उचित है?

पीछे: DNS name resolution। Client configuration की पुष्टि करें और ज़रूरी record
query करें; उसके बाद ही तय करें कि DNS कहाँ fail हो रहा है।
```

```text
सामने: किसी interface पर CRC errors लगातार बढ़ रहे हैं। इस evidence के आधार पर
क्या जाँचना उचित है?

पीछे: Physical path और उससे जुड़े interface evidence की जाँच करें, जिसमें cabling,
transceivers और speed या duplex settings शामिल हैं। केवल counter किसी एक component
को दोषी साबित नहीं करता।
```

यह wording जानबूझकर चुनी गई है। “इससे क्या संकेत मिलता है?” और “आगे क्या जाँचना चाहिए?” evidence पर आधारित reasoning सिखाते हैं। “इसकी वजह क्या थी?” अक्सर एक symptom से झूठी निश्चितता पैदा करता है।

Official method से sequence cards भी बनाए जा सकते हैं:

```text
सामने: Probable cause के बारे में आपकी पहली theory confirm नहीं हुई। N10-009
troubleshooting method के अनुसार अगला कदम क्या है?

पीछे: नई theory बनाएँ या escalate करें।
```

Steps याद करना केवल शुरुआत है। Lab में problem पहचानें, theory बनाएँ और test करें, fix की योजना और उसके impact पर विचार करें, उसे लागू करें या escalate करें, पूरी functionality verify करें, preventive measures पर सोचें और findings, actions तथा outcome document करें। असली failure शायद ही objective number के label के साथ आता है।

## PBQ अभ्यास को flashcard जितना छोटा न करें

CompTIA के अनुसार [performance-based questions](https://www.comptia.org/en-us/resources/test-policies/exam-development/performance-based-questions-explained/) simulations या virtual environments में problem-solving जाँचते हैं। एक PBQ में topology, configuration, tools, symptoms और कई decisions एक साथ आ सकते हैं। सामने-पीछे वाला prompt उस पूरी working state को दोहरा नहीं सकता।

**Network+ PBQ practice** के पहले और बाद में flashcards इस्तेमाल करें:

1. Practice से पहले वे ports, commands, subnet anchors और troubleshooting steps याद करें जिनकी ज़रूरत पड़ सकती है।
2. PBQ या lab के दौरान deck खोले बिना evidence के आधार पर काम करें।
3. बाद में वह clue लिखें जो छूट गया, वह गलत assumption जो आपने बनाई और वह skill जो असल में fail हुई।
4. Repair card तभी बनाएँ, जब याद करने की कोई छोटी चूक उस गलती का कारण बनी हो।
5. Repair को किसी अलग scenario में test करें।

मान लें कि आपने गलत tool चुना, क्योंकि याद नहीं था कि कौन-सा command DNS query करता है। यह एक साफ़ repair card है। Tool पता था लेकिन response समझ नहीं आया, तो real output के साथ अभ्यास करें। Subnetting में network boundary चूक गई, तो ज़्यादा अनजान networks calculate करें। Device configure नहीं कर पाए, तो lab पर लौटें।

किसी legitimate practice question को deck में copy न करें। अपने शब्दों में केवल दोबारा काम आने वाली सीख रखें; question की कहानी, answer choices और अलग पहचान वाली wording हटा दें। [Practice questions को फ़्लैशकार्ड में बदलने की गाइड](/hi/blog/how-to-turn-practice-questions-into-flashcards/) पूरी workflow बताती है।

Official objectives unauthorized third-party material से भी सावधान करते हैं, जिसे आम तौर पर brain dumps कहा जाता है। मौजूदा objectives, authorized training और practice, अपने lab observations और अपनी explanations का इस्तेमाल करें। Leaked questions की wording रटना Network+ की पढ़ाई नहीं है।

## Network+ के लिए एक practical study loop

अच्छा weekly system याददाश्त और networking practice के बीच लगातार चलता है। पहले deck पूरा करके labs को बाद के लिए न टालें।

Objectives के एक छोटे group के लिए:

1. Objective पढ़ें और उसे किसी मौजूदा, legitimate source से सीखें।
2. जिन facts, distinctions और tool choices को साफ़ याद नहीं कर पाते, उनके कुछ cards बनाएँ।
3. Practical block से पहले due cards review करें।
4. Calculation set, configuration task, packet exercise या troubleshooting lab करें।
5. Legitimate scenario questions या PBQ practice का छोटा set पूरा करें।
6. सुधार चुनने से पहले हर miss को classify करें।

| कहाँ चूक हुई | अगला सबसे अच्छा कदम |
| --- | --- |
| एक port, mask, acronym या command का उद्देश्य भूल गए | एक छोटा card जोड़ें या मौजूदा card दोबारा लिखें |
| दो related concepts लगातार गड्डमड्ड हुए | Contrast card जोड़ें |
| Subnetting धीमी या गलत थी | नए networks calculate करें |
| Command output या packet capture गलत पढ़ा | ज़्यादा real output जाँचें और छूटे clue पर note लिखें |
| Feature configure नहीं कर पाए | साफ़ state से lab दोहराएँ |
| कई steps वाले scenario में उलझ गए | एक और troubleshooting exercise या PBQ करें |

Network+ study plan में FSRS तब उपयोगी है, जब cards schedule करने लायक हों। फिर भी card creation चुनिंदा रहनी चाहिए। Scheduler आपकी review history के अनुसार आगे की reviews ढाल सकता है; वह अस्पष्ट prompt या बिना अभ्यास वाली networking skill को competence में नहीं बदल सकता। [FSRS कैसे काम करता है, इसकी गाइड](/hi/blog/what-is-fsrs/) scheduler और उसकी सीमाएँ समझाती है।

Organization सरल रखें: एक `N10-009` deck और उसमें `ports`, `subnetting`, `commands`, `operations`, `security`, `troubleshooting`, `practice-miss` तथा `lab-miss` जैसे tags। Version-sensitive cards पर objective code जोड़ें, अगर उससे audit करना आसान हो। Tags का काम कमजोर area ढूँढना है, पूरे PDF को folder tree की तरह दोहराना नहीं।

## इस workflow में Flashcards Open Source App की भूमिका

> **स्पष्ट जानकारी:** Flashcards Open Source App का CompTIA से कोई संबंध नहीं है और CompTIA ने इसे endorse नहीं किया है। यह official Network+ course, practice exam या PBQ simulator नहीं है।

[Flashcards Open Source App](/hi/features/) इस workflow का memory वाला हिस्सा संभालता है: सामने-पीछे वाले cards, decks और tags, FSRS से due review, offline study और sync, portable exports और self-hosted option। इसमें वे छोटे facts और decisions रखें जिन्हें practical work शुरू करने से पहले तुरंत याद करना है।

यहाँ किसी official या पहले से तैयार N10-009 deck का वादा नहीं है। मौजूदा CompTIA objectives और पढ़ाई के दौरान हुई अपनी legitimate गलतियों से शुरुआत करें। Flashcards में अपना deck बनाना हो, तो [शुरुआत करने की गाइड](/hi/docs/getting-started/) hosted और self-hosted दोनों रास्ते समझाती है।

अगर आप पास की किसी दूसरी certification की तैयारी कर रहे हैं, तो [CompTIA A+ फ़्लैशकार्ड गाइड](/hi/blog/comptia-a-plus-flashcards/) technician के काम में याद करने और अभ्यास के बीच यही सीमा लागू करती है। [CCNA फ़्लैशकार्ड गाइड](/hi/blog/how-to-use-flashcards-for-ccna/) routing, switching और command practice को और गहराई से समझाती है।

## CompTIA Network+ फ़्लैशकार्ड: आम सवाल

### N10-009 फ़्लैशकार्ड में कौन-से ports रखने चाहिए?

मौजूदा official objectives की port और service table से शुरुआत करें। जिन associations को याद करने में दिक्कत होती है, उनके छोटे cards बनाएँ और हर association को उसके practical काम से जोड़ें। ध्यान रखें: objectives के examples पूरी सूची नहीं हैं और port number से यह साबित नहीं होता कि कौन-सी service चल रही है।

### क्या Network+ फ़्लैशकार्ड subnetting के लिए काफ़ी हैं?

नहीं। Prefix-to-mask conversions, block sizes, host counts और बार-बार भूलने वाले rules के लिए cards इस्तेमाल करें। नए networks की calculation अलग से करें, ताकि किसी एक prompt को याद किए बिना network, broadcast और usable range निकाल सकें।

### क्या flashcards Network+ labs या PBQs की जगह ले सकते हैं?

नहीं। Cards ज़रूरी जानकारी जल्दी याद करने में मदद करते हैं। Configuration, calculation, navigation, evidence gathering और कई steps वाले decisions जाँचने के लिए labs और authorized PBQ practice फिर भी ज़रूरी हैं।

### क्या हर N10-009 objective का card बनाना चाहिए?

Objectives को transcription assignment नहीं, coverage map की तरह इस्तेमाल करें। उन्हीं छोटे facts और distinctions के cards बनाएँ जिन्हें बार-बार याद करने की ज़रूरत है। बाकी material के लिए labs, calculations, packet captures, scenarios और practice questions बेहतर हैं।

### Practice में छूटे question को card में कैसे बदलें?

उस छोटे fact, clue या distinction को पहचानें जिसकी वजह से गलती हुई। अपने शब्दों में नया prompt लिखें जो केवल उसी lesson को जाँचे। Original question, answer choices या उसका distinctive scenario copy न करें।

## अगली असली गलती से deck शुरू करें

Official N10-009 objectives खोलें और एक छोटा section चुनें। उसे सीखने के बाद कुछ ऐसा करें जिसमें गलती हो सकती है: subnet calculate करें, DNS query करें, route जाँचें, traffic capture करें, switch configure करें या किसी खराब lab को troubleshoot करें।

Cards केवल उन छोटे points से बनाएँ जहाँ recall ने आपको धीमा किया। Calculation, device, output और scenario को practical session में ही रखें। यह साफ़ बँटवारा ऐसे **N10-009 फ़्लैशकार्ड** देता है जिन्हें review करना सच में उपयोगी है—और ऐसा Network+ study plan भी, जो समस्या के एक card के पीछे लिखे answer से बड़ा होने पर भी काम करता है।
