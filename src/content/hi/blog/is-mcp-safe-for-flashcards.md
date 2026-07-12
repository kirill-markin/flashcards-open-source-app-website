---
title: "क्या Flashcards के लिए MCP सुरक्षित है? 2026 में अनुमतियाँ, प्राइवेसी और लिखने की पहुँच"
description: "क्या Flashcards के लिए MCP सुरक्षित है? समझें कि OAuth क्या बचाता है, AI क्लाइंट क्या पढ़ या बदल सकते हैं, और कनेक्ट करने से पहले प्राइवेसी व लिखने के जोखिम कैसे सीमित करें।"
date: "2026-07-12"
image: "/blog/is-mcp-safe-for-flashcards.png"
keywords:
  - "क्या Flashcards के लिए MCP सुरक्षित है"
  - "Flashcards MCP सुरक्षा"
  - "MCP प्राइवेसी"
  - "MCP OAuth सुरक्षा"
  - "MCP रीड-ओनली एक्सेस"
  - "MCP राइट एक्सेस"
  - "AI फ़्लैशकार्ड प्राइवेसी"
  - "MCP प्रॉम्प्ट इंजेक्शन"
---

20 मई 2026 को NSA ने Model Context Protocol की सुरक्षा पर 17 पन्नों की गाइड जारी की। सार्वजनिक शब्दावली से आगे कुछ भी रखने वाले डेक के लिए यह बात सीधे मायने रखती है: Flashcards MCP कनेक्शन किसी AI क्लाइंट को कार्ड, वर्कस्पेस मेटाडेटा और रिव्यू हिस्ट्री लौटा सकता है। पूरी पहुँच देने वाला वही क्रेडेंशियल कार्ड बदलने या उन्हें हटाया हुआ चिह्नित करने वाले टूल को भी कॉल कर सकता है। इसलिए **क्या Flashcards के लिए MCP सुरक्षित है** पूछने वाले किसी भी व्यक्ति को दो बातें जाँचनी चाहिए: क्या उस डेटा का चुने हुए क्लाइंट तक पहुँचना स्वीकार्य है, और क्या क्लाइंट लिखने वाला टूल इस्तेमाल कर सकता है।

OAuth authorization और token exchange को सुरक्षित रखता है, जबकि Flashcards सर्वर अपने टूलों की पहुँच सीमित करता है। मगर दोनों में से कोई भी यह नहीं परख सकता कि सुझाया गया बदलाव समझदारी भरा है या नहीं। वे निकाले गए डेटा को Flashcards के भीतर नहीं रख सकते और न ही यह गारंटी दे सकते हैं कि AI क्लाइंट कुछ लिखने से पहले पूछेगा।

इसलिए असली सीमाएँ साफ़ हैं: हर टूल कहाँ तक पहुँच सकता है, Flashcards कौन-से नियम लागू करता है, और कौन-सी सुरक्षा सिर्फ़ आपके क्लाइंट पर निर्भर है।

![Flashcards MCP में पढ़ने और लिखने की अनुमतियों के लिए अलग-अलग हिस्सों वाला गर्म रोशनी का डेस्क](/blog/is-mcp-safe-for-flashcards.png)

## क्या Flashcards के लिए MCP सुरक्षित है? डेटा का असली रास्ता देखें

किसी रिमोट MCP सेशन में चार भूमिकाएँ हो सकती हैं:

1. आप
2. वह AI ऐप या MCP क्लाइंट जिसमें आप अनुरोध भेजते हैं
3. मॉडल प्रदाता, अगर मॉडल की प्रोसेसिंग उस क्लाइंट के बाहर होती है
4. Flashcards MCP सर्वर और बैकएंड

कुछ उत्पादों में क्लाइंट और मॉडल प्रदाता की भूमिका एक ही सेवा निभाती है। दूसरे उत्पाद टूल के नतीजे किसी अलग सेवा को भेजते हैं। एक बात तय है: Flashcards माँगा गया डेटा प्रमाणित MCP क्लाइंट को लौटाता है। उसके बाद क्या होता है, यह क्लाइंट की बनावट, प्लान और सेटिंग्स पर निर्भर करता है। नतीजा मॉडल के context में जा सकता है, एक ही प्रदाता के infrastructure में रह सकता है, या किसी दूसरे processor तक पहुँच सकता है।

व्यावहारिक जोखिम तीन जगह हैं। पढ़ने वाली कॉल कार्ड का टेक्स्ट, डेक की बनावट, वर्कस्पेस सेटिंग्स या review events उजागर कर सकती है। लिखने वाली कॉल अनचाहे कार्ड बना सकती है, सामग्री बदल सकती है, या कार्ड और डेक को हटाया हुआ चिह्नित कर सकती है। एजेंट आपके अनुरोध को गलत समझ सकता है या इंपोर्ट की गई सामग्री में मिले निर्देशों को कमांड मान सकता है।

[मई 2026 में MCP पर NSA की गाइड](https://www.nsa.gov/Press-Room/Press-Releases-Statements/Press-Release-View/Article/4496698/nsa-releases-security-design-considerations-for-ai-driven-automation-leveraging/) एक उपयोगी फर्क बताती है। Authentication, authorization और validation ज़रूरी हैं, लेकिन dynamic tool calls, shared context और implicit trust ऐसे जोखिम पैदा करते हैं जिन्हें ये controls अपने-आप हल नहीं करते। सार्वजनिक भाषा वाले डेक और किसी ग्राहक के गोपनीय नोट्स से बने डेक के लिए एक जैसा फैसला सही नहीं होगा।

## Flashcards OAuth क्या सुरक्षित करता है

Flashcards interactive MCP clients के लिए PKCE और Dynamic Client Registration वाला authorization-code flow इस्तेमाल करता है। आप browser में connection approve करते हैं, और PKCE code exchange को उसी client से बाँधता है जिसने उसे शुरू किया था। Server यह भी जाँचता है कि access token Flashcards MCP resource के लिए ही जारी किया गया था। [Flashcards MCP connector guide](/hi/docs/mcp-connector/) में endpoint और discovery metadata दिए गए हैं।

ये उपाय login और token exchange को सुरक्षित रखते हैं। [25 नवंबर 2025 की स्थिर MCP authorization specification](https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization) इस flow के लिए PKCE और resource-specific tokens अनिवार्य करती है। वह यह भी कहती है कि हर MCP implementation में authorization अनिवार्य नहीं है। इसलिए किसी एक connector में OAuth मौजूद होने से किसी दूसरे server की सुरक्षा के बारे में कुछ साबित नहीं होता।

Flashcards अभी सिर्फ़ एक OAuth scope घोषित करता है: `flashcards`। वह पढ़ने और पढ़ने-लिखने के लिए अलग OAuth permissions नहीं देता; उसके credentials पूरे connector की पहुँच देते हैं। इसलिए किसी setup को "read-only" कहने का मतलब सिर्फ़ यह है कि AI client ने `sql_execute` को disable या block किया है। Server यह पक्का करता है कि `sql_query` खुद कुछ लिख नहीं सकता। लेकिन client call भेजे तो वही credential `sql_execute` को भी authorize कर सकता है।

Client में किसी tool को block करना उपयोगी operational control है, लेकिन इससे OAuth grant नहीं बदलता। किसी malicious या compromised client के पास वही credential हो, तो यह setting उसे सीमित नहीं करती।

## Flashcards के तीन MCP टूल असल में क्या कर सकते हैं

Connector मनमाने PostgreSQL की जगह parser से लागू की गई सीमित SQL dialect देता है। उसके तीनों टूल की पहुँच अलग है:

| टूल | मौजूदा पहुँच | डेटा बदलता है? | सावधानी के लिए client setting |
| --- | --- | --- | --- |
| `list_workspaces` | उपयोगकर्ता की पहुँच वाले अधिकतम 100 workspaces की सूची देता है; साथ में ID, नाम, सक्रिय कार्डों की संख्या, पिछली गतिविधि और default workspace बताता है | नहीं | इसे तभी चालू करें जब account-level metadata का client तक जाना स्वीकार्य हो |
| `sql_query` | माँगे गए एक workspace में `workspace`, `cards`, `decks` और `review_events` पढ़ता है | नहीं | पढ़ने के किसी तय काम के लिए चालू करें और सिर्फ़ ज़रूरी columns माँगें |
| `sql_execute` | माँगे गए एक workspace में `cards` और `decks` के records जोड़ता, बदलता या deleted के रूप में mark करता है | हाँ | इसे तब तक बंद रखें, जब तक client लिखने की पहुँच को ऐसे सीमित न कर सके जो आपको स्वीकार हो |

[MCP guide](/hi/docs/mcp-connector/) और [API reference](/hi/docs/api/) सार्वजनिक SQL dialect समझाते हैं। इसे लागू करने वाले code में सुरक्षा से जुड़ी कुछ और बातें हैं, जिन्हें भरोसे की सीमा तय करते समय समझना ज़रूरी है।

### Workspace का चुनाव असल में कैसे काम करता है

हर SQL call ठीक एक workspace पर चलती है। Statement चलने से पहले Flashcards फिर जाँचता है कि उपयोगकर्ता के पास अब भी उस workspace की पहुँच है। इससे call करने वाला व्यक्ति किसी और के workspace की ID देकर वहाँ नहीं पहुँच सकता।

चुना हुआ workspace सिर्फ़ default होता है। `workspaceId` न दिया जाए तो tool उसी default को इस्तेमाल करता है; ID देने पर वही connection उपयोगकर्ता की पहुँच वाले किसी भी workspace को target कर सकता है। `list_workspaces` सिर्फ़ लौटाए गए workspaces की IDs दिखाता है; 100 results की सीमा isolation boundary नहीं है, क्योंकि `workspaceId` स्पष्ट रूप से देने पर अब भी उपयोगकर्ता की पहुँच वाले किसी भी workspace को target किया जा सकता है।

कोई test workspace यह समझने के लिए फिर भी उपयोगी है कि client tool calls कैसे दिखाता है। Call वहीं रहे तो किसी ईमानदार गलती का नुकसान कम होगा। लेकिन यह सख़्त isolation boundary नहीं है, क्योंकि वही connection किसी दूसरे accessible workspace की ID दे सकता है। सख़्त अलगाव के लिए ऐसा दूसरा account चाहिए जिसकी असली workspace में membership न हो, या फिर अलग deployment।

### केवल पढ़ने वाली पहुँच फिर भी क्या उजागर कर सकती है

`list_workspaces` और `sql_query` कार्ड की स्थिति नहीं बदल सकते। वे डेटा की मरम्मत या scheduling की दोबारा गणना भी नहीं कर सकते। Server पर लागू इस बँटवारे से, client को `sql_execute` न मिले तो database में गलती से बदलाव होने की आशंका बहुत कम हो जाती है।

लौटाया गया डेटा फिर भी Flashcards backend से बाहर जाता है। कमजोर विषयों की query में कार्ड का टेक्स्ट और review events शामिल हो सकते हैं। किसी छोटे कार्ड में भी मरीज की जानकारी, किसी internal system का नाम, भाषा सीखने का निजी उदाहरण या interview notes हो सकते हैं।

[Flashcards privacy policy](/hi/privacy/) MCP और Agent API से माँगे गए डेटा पर लागू होती है। Protocol की सीमा पर Flashcards नतीजा MCP client को भेजता है। कोई अलग model provider उसे पाएगा या नहीं, कोई उसे कितने समय तक रखेगा, और training के लिए उसका इस्तेमाल हो सकता है या नहीं—यह client setup और provider की शर्तों पर निर्भर करता है। "Read-only" को privacy की मुहर मानने के बजाय ये बातें जाँचें।

### लिखने की पहुँच पूरी database access से कहीं सीमित है

`sql_execute` `INSERT`, `UPDATE` और `DELETE` स्वीकार करता है, लेकिन सिर्फ़ `cards` और `decks` के लिए। `workspace` और `review_events` resources केवल पढ़े जा सकते हैं। कार्ड की scheduling से जुड़े fields—जिनमें due dates, review counts और persisted FSRS state शामिल हैं—भी इस dialect से केवल पढ़े जा सकते हैं। MCP कोई study review दर्ज नहीं कर सकता और न ही सीधे FSRS scheduling state दोबारा लिख सकता है।

`UPDATE` और `DELETE`, दोनों में `WHERE` clause होना अनिवार्य है। इससे बिना filter वाला statement रुक जाता है, हालाँकि कोई valid लेकिन बहुत व्यापक condition फिर भी कई rows से match कर सकती है। Syntax validation यह नहीं बता सकता कि filter आपकी मंशा को सही ढंग से व्यक्त करता है या नहीं।

कार्ड और डेक पर `DELETE` database row को तुरंत मिटाने के बजाय sync में इस्तेमाल होने वाला deletion timestamp, यानी tombstone, set करता है। हटाए गए items active data surface से गायब हो जाते हैं, और MCP connector में undo या restore tool नहीं है। उपयोगकर्ता के नज़रिए से गलत delete को अब भी किसी दूसरे रास्ते या backup से recover करना पड़ेगा।

[सेवा की शर्तें](/hi/terms/) उपयोगकर्ताओं से बदलाव लागू करने से पहले AI से मिला output review करने को कहती हैं। यहाँ यह खास तौर पर ज़रूरी है: Flashcards statement family, resource, columns और row cap validate कर सकता है। वह यह नहीं परख सकता कि आपने बदलाव किस वजह से माँगा था।

## मंज़ूरी AI client की ज़िम्मेदारी है

Flashcards `sql_query` को `readOnlyHint` और `sql_execute` को `destructiveHint` से mark करता है। [25 नवंबर 2025 की स्थिर MCP schema](https://modelcontextprotocol.io/specification/2025-11-25/schema) में tool annotations साफ़ तौर पर hints हैं। वे compatible client को approval policy चुनने में मदद करते हैं; खुद उस policy को लागू नहीं करते।

Flashcards को valid और authenticated `sql_execute` call मिलते ही वह उसे तुरंत चला देता है। Flashcards में दूसरी confirmation screen नहीं आती। इंसानी मंज़ूरी के लिए कोई भी pause, request के server तक पहुँचने से पहले AI client में होता है।

हर client का व्यवहार अलग होता है। उदाहरण के लिए, OpenAI की [developer mode documentation](https://developers.openai.com/api/docs/guides/developer-mode) कहती है कि write actions के लिए default रूप से confirmation चाहिए और users किसी conversation के लिए अपना फैसला याद रख सकते हैं। उसका [MCP apps help page](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt-beta) बताता है कि prompts app permissions, context और workspace controls पर निर्भर करते हैं। दूसरे clients अलग controls दे सकते हैं, या कोई control नहीं भी दे सकते।

आपका client असल में जो सबसे सख़्त विकल्प देता है, उसका इस्तेमाल करें:

- अगर वह अलग-अलग tools disable कर सकता है, तो काम में ज़रूरत पड़ने तक `sql_execute` बंद रखें।
- अगर वह हर बदलाव के लिए approval अनिवार्य कर सकता है, तो वह setting चुनें और writes के लिए remembered approvals से बचें।
- सुझाई गई call दिखने पर `workspaceId`, हर statement, `WHERE` conditions और match होने वाले records की अनुमानित संख्या जाँचें।
- अगर वह write tool block नहीं कर सकता या calls से पहले भरोसेमंद ढंग से रुक नहीं सकता, तो connection को शुरू से write-enabled मानें।

ये settings गलती की संभावना घटाती हैं। Model output को अब भी इंसान को परखना पड़ता है।

## हर statement में 100 rows का असली मतलब

हर statement अधिकतम 100 records लौटा या प्रभावित कर सकता है, और एक batch में अधिकतम 50 statements हो सकते हैं। इसलिए सैद्धांतिक रूप से, हर statement अपनी सीमा तक पहुँचे तो एक authenticated tool call 5,000 records तक प्रभावित कर सकती है। यह एक card पर confirmation देने से कहीं बड़ा असर है।

Mutation batches atomic होते हैं: या तो batch का हर statement सफल होता है, या पूरी transaction fail हो जाती है। किसी statement में error आए तो atomicity batch को आधा लागू होने से रोकती है। वह मंशा नहीं जाँचती, और valid batch commit होने के बाद कोई undo नहीं देती।

Serialized result पर 48,000 characters की cap भी है। यह cap mutation execute होने के बाद लागू होती है और सिर्फ़ MCP response का size सीमित करती है। बहुत बड़ा result reject होने से पहले mutation commit हो सकती है। असर की असली सीमा हर statement की 100-row cap है; लिखने से पहले व्यापक targets को `sql_query` से preview करें।

## Prompt injection पढ़ाई की सामग्री से आ सकता है

फ़्लैशकार्ड्स में आम भाषा लिखी होती है, और AI client ठीक उसी की व्याख्या करता है। Import किए गए notes में छिपे निर्देश, quoted prompts या ऐसे लेखक का text हो सकता है जिस पर भरोसा नहीं किया जा सकता। अगर लिखने वाला tool उपलब्ध रहते हुए agent वह material पढ़ता है, तो वह data को नया command समझ सकता है।

इससे परेशानी होने के लिए OAuth का fail होना ज़रूरी नहीं है। Authorized client को पहले से लिखने की कोशिश करने की अनुमति है।

NSA की [पूरी MCP security report](https://www.nsa.gov/Portals/75/documents/Cybersecurity/CSI_MCP_SECURITY.pdf) tool और model output को pipeline के अगले चरण के लिए untrusted input मानती है। वह सख़्त resource boundaries, parameter validation, output की जाँच और least privilege की सलाह देती है। ये उपाय prompt injection को असंभव नहीं बनाते, लेकिन जोखिम घटाते हैं।

Flashcards server भी उपयोगी guardrails देता है। उसका parser unsupported statement families और resources को reject करता है, और MCP tool shell या unrestricted database connection नहीं बन सकता। Injected instruction फिर भी पहुँच वाले cards में syntactically valid बदलाव माँग सकता है। Server को अनुमति वाली request दिखती है, वह conversation नहीं जिसने model को वह request करने के लिए मनाया।

Sensitive काम के लिए session छोटा रखें: एक trusted source, एक तय workspace और काम के लिए सिर्फ़ ज़रूरी tools। एक ही agent run में untrusted import, unrelated connectors और बिना निगरानी वाले Flashcards writes को साथ न रखें। छोटा session suspicious calls पहचानना आसान बनाता है, हालाँकि वह isolation boundary नहीं देता।

## आगे की privacy boundary आपका client और model setup तय करते हैं

Flashcards source of truth बना रहता है, लेकिन माँगा गया content MCP client तक जाता है। उसके बाद उसे कैसे संभाला जाएगा, यह product पर निर्भर करता है। Client model खुद चला सकता है, अलग provider को call कर सकता है, tool results को conversation history में रख सकता है, workspace administrators को दिखा सकता है, या memory के साथ इस्तेमाल कर सकता है। हर architecture अलग privacy boundary बनाता है।

OpenAI इसका एक ठोस उदाहरण देता है। उसकी मौजूदा [Apps in ChatGPT documentation](https://help.openai.com/en/articles/11487775-connector) कहती है कि apps से मिला data जवाब के context में इस्तेमाल हो सकता है और memory या web search के साथ interact कर सकता है। वह Business, Enterprise और Edu accounts के training defaults को "Improve the model for everyone" enabled वाले personal plans से अलग भी बताती है। ये OpenAI के अपने नियम हैं, MCP का सामान्य behavior नहीं।

आप जिस client, account type, workspace policy, region और settings का सच में इस्तेमाल करेंगे, उन्हें जाँचें। Retention, training, memory, administrator access, subprocessors और deletion की जानकारी देखें। अगर documentation यह नहीं बताती कि confidential source material client से बाहर जा सकता है या नहीं, तो असली deck से उस सवाल को test न करें।

Hosted account delete करना, connector disconnect करना और आगे बनी copies delete करना अलग-अलग काम हैं। [Flashcards privacy](/hi/privacy/) hosted data delete करने का तरीका बताती है। Client या model provider के पास पहले से रखा data Flashcards delete नहीं कर सकता; उसके लिए उस provider के controls भी इस्तेमाल करें।

## Disconnect करना और credential revoke करना अलग कदम हैं

Flashcards का मौजूदा OAuth implementation एक घंटे के access tokens और बिना तय expiry वाले rotating refresh tokens जारी करता है। Flashcards अभी users के लिए OAuth connection revoke करने वाली UI या public revocation endpoint नहीं देता। Connector हटाने पर client अपने credentials discard कर सकता है। Client की यह कार्रवाई server-side token invalidation की गारंटी नहीं देती।

Headless `fca_` Agent API keys अलग तरह के credentials हैं। Flashcards में **Agent Connections** के जरिए इन keys को revoke किया जा सकता है। पहुँच को दर्ज या बंद करते समय authentication के दोनों रास्तों को अलग रखें।

अगर आपके threat model में तुरंत server-side OAuth revocation अनिवार्य है, तो मौजूदा OAuth connector user को वह control नहीं देता। अस्थायी public deck के मुकाबले sensitive और लंबे समय तक चलने वाले connection के लिए यह सीमा ज़्यादा मायने रखती है।

## Connect करने से पहले एक व्यावहारिक checklist

1. Source material की श्रेणी तय करें। Public study notes, निजी जानकारी, employer-confidential content और regulated data को एक ही access policy के तहत नहीं रखना चाहिए। अगर आपको material client और उसके processors को भेजने की अनुमति नहीं है, तो उसे MCP के जरिए expose न करें।
2. Server URL जाँचें। दस्तावेज़ों में दिया endpoint `https://mcp.flashcards-open-source-app.com/mcp` है। उससे मिलते-जुलते domains और unknown sources से copy की गई connector definitions से बचें।
3. दोनों पक्षों की policies पढ़ें। [Flashcards privacy](/hi/privacy/) से शुरू करें, फिर इस्तेमाल होने वाले AI client की retention, training, memory, logging और deletion rules जाँचें।
4. तय करें कि spare workspace काफ़ी है या नहीं। अभ्यास के लिए वह उपयोगी है, लेकिन connection उसी account के दूसरे workspaces को भी target कर सकता है। सख़्त isolation चाहिए तो अलग account या deployment इस्तेमाल करें।
5. Client में `sql_execute` block करके शुरू करें। अगर client उसे block नहीं कर सकता, तो connect करने से पहले मानें कि OAuth credential में लिखने की क्षमता बनी रहती है।
6. कम-से-कम data माँगें। जवाब के लिए सिर्फ़ ज़रूरी columns और rows select करें, और unrelated secrets को conversation से बाहर रखें।
7. Bulk changes से पहले ऐसा backup बनाएँ जिसे आपने जाँचकर देखा हो। [Flashcards backup guide](/hi/blog/how-to-back-up-flashcards/) में पूरा workflow दिया गया है।
8. हर व्यापक update या delete को `sql_query` से preview करें। सटीक card या deck IDs चुनें, match count को अपनी उम्मीद से मिलाएँ और change को छोटे statements में बाँटें।
9. Client approvals उपलब्ध हों तो उनका इस्तेमाल करें। हर बार workspace और पूरा payload confirm करें; यह न मानें कि destructive hint के कारण approval prompt ज़रूर आएगा।
10. Access सोच-समझकर बंद करें। OAuth connector disconnect करें और client से उसके stored credentials हटाएँ, साथ ही मौजूदा server-side revocation की सीमा याद रखें। Agent Connections में `fca_` keys revoke करें और downstream deletion अलग से संभालें।

इन फैसलों के बाद setup steps के लिए [MCP के साथ Flashcards को Claude से कैसे जोड़ें](/hi/blog/how-to-connect-flashcards-to-claude-with-mcp/) देखें। Connection guide हर click समझाती है; यह checklist तय करती है कि किसी खास deck के पास connection होना भी चाहिए या नहीं।

## Open source और self-hosting कहाँ मदद करते हैं

Flashcards connector में कई उपयोगी खूबियाँ हैं: अलग read और write tools, statements की सीमित allowlist, हर call पर workspace membership checks, read-only scheduling fields और public source code। इन controls से connector के दायरे की जाँच करना और उसे सीमित रखना आसान होता है। वे जोखिम घटाते हैं; सुरक्षित client या model के सही फैसले की गारंटी नहीं देते।

[Self-hosted deployment](/hi/docs/self-hosting/) Flashcards storage और operations को ऐसे infrastructure पर ला सकता है जिसे आप नियंत्रित करते हैं। External AI service को भेजी गई queries card data को फिर भी उस deployment से बाहर ले जाती हैं। Model और client वाला रास्ता भी उसी privacy standard पर खरा उतरना चाहिए जो database के लिए है।

## फैसला करने का एक सरल नियम

MCP read tools तभी इस्तेमाल करें, जब माँगा गया data चुने हुए client path के जरिए Flashcards से बाहर जा सकता हो और यह आपको स्वीकार हो, provider की terms ठीक हों, और task उस data को साझा करना उचित ठहराता हो। जब तक client ने सच में `sql_execute` block न किया हो, connection को full-access मानें।

Write tool सिर्फ़ किसी सीमित काम के लिए enable करें, जब client हर अहम call से पहले रुक सकता हो, आपने target rows preview कर ली हों और इस्तेमाल करने लायक backup मौजूद हो। याद रखें, एक batch 100 से कहीं ज़्यादा records छू सकता है और delete के लिए MCP में undo नहीं है।

जब deck को client या उसके processors के साथ share नहीं किया जा सकता, downstream policy साफ़ नहीं है, उसी account में सख़्त workspace isolation चाहिए, तुरंत OAuth revocation अनिवार्य है, या workflow में बिना निगरानी के destructive writes चलाने हैं, तो connection छोड़ दें। ऐसे मामलों में MCP के बिना Flashcards इस्तेमाल करें, या ऐसा deployment और model path चुनें जिसका पूरा data flow आपकी requirements पूरी करता हो।
