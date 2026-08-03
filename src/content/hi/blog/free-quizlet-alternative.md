---
title: "2026 में मुफ़्त Quizlet विकल्प: असल में क्या मुफ़्त है?"
description: "क्या Flashcards एक मुफ़्त Quizlet विकल्प है? जानें कि hosted beta में क्या मिलता है, उसकी सीमाएँ क्या हैं, import-export के नियम कैसे काम करते हैं, self-hosting में कितना खर्च आता है और Quizlet के कौन-से features इसमें नहीं हैं।"
image: "/blog/free-quizlet-alternative.png"
date: "2026-06-20"
updated: "2026-08-03"
keywords:
  - "मुफ़्त Quizlet विकल्प"
  - "Quizlet का मुफ़्त विकल्प"
  - "मुफ़्त flashcards app"
  - "Quizlet Plus का विकल्प"
  - "ओपन सोर्स Quizlet विकल्प"
  - "मुफ़्त FSRS flashcards app"
  - "Flashcards की कीमत"
  - "self-hosted flashcards की लागत"
---

[Flashcards](/) का hosted version beta के दौरान $0 में मिलता है और इसके लिए credit card की ज़रूरत नहीं पड़ती। AI और sync भी इसमें शामिल हैं। Cards, files या कुल storage पर plan के हिसाब से कोई quota नहीं है। इसलिए front/back cards से पढ़ाई करने वालों के लिए यह एक **मुफ़्त Quizlet विकल्प** है। मगर “मुफ़्त” के साथ दो बातें समझना ज़रूरी है: तकनीकी सीमाएँ फिर भी लागू होती हैं, और यह वादा नहीं किया गया है कि hosted version का हर feature हमेशा बिना शुल्क के मिलेगा।

यह software MIT-licensed भी है, इसलिए इसे self-host करने के लिए कोई license fee नहीं देनी पड़ती। फिर भी production deployment चलाने में पैसे लगते हैं। और अगर आपकी पढ़ाई Quizlet के Learn या Test modes, public sets, AI study suite या classroom tools पर निर्भर है, तो Flashcards में इनके हूबहू विकल्प नहीं हैं।

> **खुलासा:** मैं Kirill Markin हूँ और Flashcards बनाता हूँ। यह लेख कीमत और free tier की सीमाओं पर केंद्रित है—उन जगहों पर भी, जहाँ Quizlet ऐसे features देता है जो Flashcards में नहीं हैं।

**तथ्यों की जाँच:** 3 अगस्त, 2026।

![मुफ़्त Quizlet विकल्प को आकार-मापक से गुजरते कार्ड और मीडिया के डिब्बे के रूप में दिखाया गया है, जबकि रिव्यू की स्थिति सेल्फ़-होस्टिंग इन्फ़्रास्ट्रक्चर के पास पीछे रह जाती है](/blog/free-quizlet-alternative.png)

## एक तालिका में मुफ़्त Quizlet विकल्प की लागत

| सवाल | जवाब |
|---|---|
| क्या hosted app मुफ़्त है? | हाँ, beta के दौरान। Credit card की ज़रूरत नहीं है। |
| क्या AI और sync मुफ़्त हैं? | दोनों beta के दौरान शामिल हैं। |
| क्या free plan में cards या storage की कोई सीमा है? | नहीं। Beta के दौरान cards, files या कुल storage पर कोई plan quota नहीं है। हर file और हर operation की तकनीकी सीमाएँ फिर भी लागू होती हैं। |
| क्या self-hosting मुफ़्त है? | Software license मुफ़्त है। AWS services, third-party providers और इसे चलाने में लगने वाला काम मुफ़्त नहीं है। |
| क्या Flashcards Quizlet sets import कर सकता है? | नहीं। यह केवल अपना `flashcards.zip` package import करता है। |
| क्या यह Quizlet के हर अहम feature की जगह ले सकता है? | नहीं। Learn, Test, public set library, Quizlet के AI study suite और classroom tools—इन सभी के मामले में अहम कमियाँ हैं। |

लंबी अवधि का वादा “सब कुछ हमेशा मुफ़्त रहेगा” से कहीं सीमित है। Cards बनाना और उनका review करना मुफ़्त रहेगा। AI का अधिक इस्तेमाल करने के लिए आगे चलकर आपको अपने provider की API key या कोई paid option चाहिए हो सकता है। Beta offer इस बात की गारंटी नहीं देता कि hosted version का हर feature हमेशा मुफ़्त रहेगा।

अगर आप हर feature की अलग-अलग तुलना करके फैसला करना चाहते हैं, तो विस्तृत [Quizlet alternative comparison](/blog/quizlet-alternative/) पढ़ें। इस लेख का दायरा कीमत, सीमाएँ, portability और उन features की कमी तक है जो “मुफ़्त” विकल्प की असली उपयोगिता बदल सकती है।

## Hosted beta में क्या मुफ़्त है?

फिलहाल आप sign up करके बिना भुगतान के पढ़ाई का मुख्य workflow इस्तेमाल कर सकते हैं:

- front/back cards बनाना और edit करना
- FSRS-6 scheduler के साथ review करना
- cards में बदलाव और reviews को पहले local रूप से दर्ज करना, फिर web, iOS और Android पर sync करना
- cards से जुड़ा media जोड़ना
- files attach करके AI chat इस्तेमाल करना
- MCP के ज़रिए AI clients connect करना
- Agent API इस्तेमाल करना
- Flashcards workspace packages import और export करना

Beta के दौरान AI या अलग-अलग devices के बीच sync unlock करने के लिए कोई paid tier नहीं है। Hosted offer और भविष्य में उसकी सीमा के लिए [pricing page](/pricing/) मौजूदा आधिकारिक स्रोत है।

किसी feature के शामिल होने का मतलब यह नहीं है कि वह offline भी काम करता है। Cards में बदलाव और reviews local रूप से दर्ज किए जा सकते हैं और connection लौटने पर sync हो सकते हैं। AI calls और sync के लिए फिर भी network connection चाहिए।

## मुफ़्त hosted app की तकनीकी सीमाएँ

Plan quota न होने का मतलब यह नहीं है कि तकनीकी सीमाएँ भी नहीं हैं। Flashcards beta accounts पर कुल cards, files या इस्तेमाल हुए storage के आधार पर कोई quota नहीं लगाता। फिर भी हर request और transfer की अपनी size limits हैं।

मौजूदा `flashcards.zip` package की सीमाएँ ये हैं:

| Package operation | सीमा |
|---|---:|
| एक package में cards | 5,000 |
| एक package में media files | 10,000 |
| एक media file | 16 MiB |
| एक package में कुल media | 64 MiB |
| Import की जाने वाली ZIP file | 80 MiB |

ये संख्याएँ एक import या export operation की सीमा तय करती हैं। ये पूरे account में मौजूद cards, files या storage की सीमाएँ नहीं हैं और न ही किसी छिपे हुए paid plan की सीमा हैं। बड़े workspace को कई packages में transfer करना पड़ सकता है। AI requests और attachments के लिए भी request की अलग सीमाएँ और supported-file constraints हैं।

## Import और export का दायरा जितना लगता है, उससे छोटा है

Flashcards में data transfer का एक ही native format है: `flashcards.zip` workspace package।

यह Flashcards से export किया गया valid package import कर सकता है। यह Quizlet set, CSV, TSV या सामान्य delimited text import नहीं कर सकता। Quizlet में [delimited text import करके sets बनाए जा सकते हैं](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content); Flashcards में वैसी text-import screen नहीं है।

Package में वह learning content होता है जिसे Flashcards दोबारा बना सकता है:

- cards
- cards के tags
- cards में इस्तेमाल हुआ media

उस content से जुड़ी यह state package में शामिल नहीं होती:

- review history
- FSRS scheduler state
- workspace settings
- decks का पूरा structure
- account data

इसलिए `flashcards.zip` चुनी हुई पढ़ाई की सामग्री को hosted और self-hosted Flashcards workspaces के बीच ले जा सकता है। यह किसी account की हूबहू copy नहीं बना सकता और न ही ठीक वही review schedule जारी रख सकता है। यह disaster-recovery backup भी नहीं है; self-hosting operator को database और media backups फिर भी रखने होंगे।

### मौजूदा Quizlet sets दोबारा बनाने पड़ेंगे

Quizlet creators को website पर अपने बनाए sets से [terms और definitions export करने](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) देता है। यह copied sets या images export नहीं करता।

इस export से text मिलता है, ऐसा package नहीं जिसे Flashcards स्वीकार करता हो। आप चुने हुए cards हाथ से दोबारा बना सकते हैं या उस text को Flashcards AI chat में source material की तरह देकर front/back cards का draft बनवा सकते हैं। दोनों तरीकों में दोबारा बनाए गए cards को जाँचकर save करना ज़रूरी है; इनमें से कोई भी सीधा import नहीं है।

[Quizlet export guide](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/) इस cleanup process को समझाती है। यह lossless migration नहीं है: export में images और study state शामिल नहीं होते, और Flashcards उस text को अपने native transfer format की तरह ingest नहीं कर सकता।

## Self-hosting की license fee नहीं है, मगर खर्च होता है

Flashcards का code MIT-licensed है। आप software license खरीदे बिना इसे देख, बदल और deploy कर सकते हैं। Production servers और उन्हें चलाने का खर्च अलग है।

Production के लिए आधिकारिक रूप से समर्थित रास्ता repository का AWS CDK stack है। Docker और PostgreSQL setup local development के लिए है; यह production deployment का documented shortcut नहीं है।

Production operator इन चीज़ों के लिए ज़िम्मेदार होता है:

- AWS database, storage, compute और network services
- domain और DNS configuration
- email delivery
- monitoring और alerting
- optional AI provider usage और credentials
- secrets management
- database और media backups, जिनमें restore tests भी शामिल हैं
- upgrades, migrations, security work और operator का समय

Stack deployment के कुछ हिस्से automate करता है, मगर इन ज़िम्मेदारियों को खत्म नहीं करता। हर जगह लागू होने वाला कोई उपयोगी monthly estimate नहीं दिया जा सकता: region, traffic, storage, backup policy, email volume, AI usage और operator के फैसले—सभी bill बदलते हैं। [Self-hosting guide](/docs/self-hosting/) में AWS architecture और local development की सीमा दर्ज है।

इसलिए self-hosting में यह बदलता है कि stack का खर्च और संचालन कौन संभालता है। इससे cloud infrastructure मुफ़्त service नहीं बन जाता। अगर infrastructure पर control आपकी ज़रूरत का हिस्सा नहीं है, तो hosted beta जब तक मुफ़्त है, आपको इस operational काम से बचाता है।

## Quizlet के वे अहम features जिनका सीधा विकल्प नहीं है

Flashcards में फिलहाल Quizlet के चार ऐसे हिस्सों का सीधा विकल्प नहीं है, जो कीमत से अधिक मायने रख सकते हैं:

- Learn और Test के अलग modes, जिनमें अपने-आप तैयार होने वाला multiple-choice flow भी शामिल है
- उसके बराबर public study sets library
- Quizlet के AI Study Guides, Practice Tests और Ask Quizlet suite
- Quizlet Live, classes और progress reporting से जुड़ा classroom और teacher ecosystem

Quizlet का overview [Learn, Test, Practice Tests, Study Guides और Quizlet Live](https://help.quizlet.com/hc/en-us/articles/360030841732-Studying-on-Quizlet) के बारे में बताता है। मुफ़्त Quizlet access की अपनी सीमाएँ हैं: जिन users के पास subscription नहीं है, उन्हें Learn के सीमित rounds और हर set के लिए एक practice Test मिलता है। किसी eligible teacher-managed class के students को class sets के लिए [बिना सीमा और विज्ञापनों के Learn तथा Test access](https://help.quizlet.com/hc/en-us/articles/34270983035149-Free-student-access-to-Learn-and-Test-modes) मिल सकता है।

अगर guided modes, तैयार public material या classroom tools आपकी study routine का अहम हिस्सा हैं, तो $0 वाला Flashcards account उनकी जगह नहीं लेता। Free beta एक अलग workflow देता है: front/back cards, FSRS-6 review, offline-first writes और sync, media, AI chat और agent access।

## मुफ़्त Quizlet विकल्प पर सीधा जवाब

Beta के दौरान Flashcards front/back cards, FSRS-6 reviews, web और mobile पर offline-first इस्तेमाल, sync, media और AI सहायता के लिए एक **मुफ़्त Quizlet विकल्प** है। Credit card की ज़रूरत नहीं है और cards, files या कुल storage पर कोई plan quota नहीं है। Package और request की सीमाएँ फिर भी लागू होती हैं।

यह Quizlet के Learn या Test modes, public set library, AI study formats या classroom system का हूबहू विकल्प नहीं है। मौजूदा Quizlet material को सीधे import करने के बजाय eligible text exports से दोबारा बनाना पड़ता है।

अलग-अलग खर्च को अलग करके समझना सबसे आसान है। Hosted beta की आज कीमत $0 है। Core card creation और review मुफ़्त रहेंगे, जबकि AI के अधिक इस्तेमाल के लिए बाद में आपको अपने provider की key या कोई paid option चाहिए हो सकता है। Self-hosting software license fee हटा देता है, लेकिन infrastructure, third-party services, maintenance और operator के समय का खर्च जोड़ देता है। अगर ये सीमाएँ आपकी ज़रूरतों के अनुकूल हैं, तो [Flashcards खोलें](https://app.flashcards-open-source-app.com/) और hosted workflow आज़माएँ।
