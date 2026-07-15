---
title: "2026 में AI Flashcard Tutor: Claude और MCP से due cards का quiz लें"
description: "Claude को MCP के जरिए AI flashcard tutor की तरह इस्तेमाल करें: eligible cards का छोटा snapshot लोड करें, एक बार में एक सवाल पूछें, और FSRS ratings app में दर्ज करें।"
date: "2026-07-15"
image: "/blog/ai-flashcard-tutor-due-cards.png"
keywords:
  - "AI flashcard tutor"
  - "AI से फ्लैशकार्ड अभ्यास"
  - "AI spaced repetition tutor"
  - "Claude flashcards MCP"
  - "अपने flashcards के साथ AI tutor"
  - "AI flashcard review"
  - "AI से due flashcards का quiz"
  - "MCP flashcard tutor"
---

इस समय दस cards review के लिए eligible हैं। स्क्रीन पर एक सवाल है। जब तक आप जवाब नहीं देते, saved answer छिपा रहता है।

2026 में **AI flashcard tutor** का उपयोगी रूप यही है: MCP के जरिए Claude को अपने असली Flashcards data से जोड़िए, अभी review के योग्य cards का छोटा-सा read-only snapshot लोड कीजिए, और उसे हर सवाल के बाद रुकने दीजिए। Session हर saved back दिखा सकता है और आपकी पहली कोशिशों के notes chat में रख सकता है। वह FSRS review पूरा नहीं कर सकता। आपको अब भी Flashcards app में Again, Hard, Good, या Easy दर्ज करना होगा, वरना हर card review के लिए eligible बना रहेगा।

![AI flashcard tutor एक due card पूछता है, जबकि official FSRS review app में इंतज़ार करता है।](/blog/ai-flashcard-tutor-due-cards.png)

## दो मिनट का workflow

Setup की detail में जाने से पहले पूरा routine यह है:

1. Claude में Flashcards remote MCP connector जोड़िए।
2. इस session के लिए `list_workspaces` और `sql_query` allow कीजिए।
3. `sql_execute` block कीजिए, क्योंकि इस अभ्यास में कुछ लिखने की ज़रूरत नहीं है।
4. नीचे दिया tutor prompt paste कीजिए।
5. Workspace confirm कीजिए और Claude को अधिकतम दस eligible cards लाने दीजिए।
6. एक बार में एक front का जवाब दीजिए। Hint सिर्फ़ तभी माँगिए जब सच में ज़रूरत हो, और वह भी एक ही।
7. इसके बाद [Flashcards](https://app.flashcards-open-source-app.com/) खोलिए और अपनी FSRS ratings के साथ official reviews पूरे कीजिए।

आखिरी step workflow का हिस्सा है। MCP session आपके cards पर चलने वाली conversational practice layer है। वह queue clear नहीं करता और न ही किसी card को reschedule करता है।

अगर connector अभी setup नहीं है, तो [Flashcards को Claude से MCP के साथ जोड़ने की guide](/hi/blog/how-to-connect-flashcards-to-claude-with-mcp/) में मौजूदा menu path दिया गया है। Server URL है:

`https://mcp.flashcards-open-source-app.com/mcp`

## Claude को सिर्फ़ quiz लेने वाला AI flashcard tutor बनाएं

Flashcards connector तीन calls उपलब्ध कराता है:

- `list_workspaces({})` उन workspaces की सूची देता है जिन तक आपका account पहुँच सकता है।
- `sql_query({ sql, workspaceId? })` सीमित SQL dialect के जरिए cards पढ़ता है।
- `sql_execute({ sql, workspaceId? })` cards और decks बना, बदल, या delete कर सकता है।

`workspaceId` argument हर call के लिए अलग होता है। जिस workspace को आपने confirm किया है, उसे target करने के लिए यह ID pass कीजिए। इसे छोड़ने पर tool चुना हुआ default इस्तेमाल करता है। ID देने से चुना हुआ default न बदलता है, न कोई नया default save होता है।

पूरा connector read-only नहीं है। Server यह लागू करता है कि `list_workspaces` और `sql_query` कुछ लिख नहीं सकते, जबकि cards और decks में बदलाव करने वाला tool `sql_execute` है। Flashcards फिलहाल सिर्फ़ एक OAuth scope, `flashcards`, इस्तेमाल करता है; वह server की तरफ़ से अलग read-only grant जारी नहीं करता।

इस quiz के लिए Claude की connector permissions में `sql_execute` block कीजिए। यह client policy है, Flashcards द्वारा लागू कोई सीमित OAuth permission नहीं। अगर आपका client hard block की जगह approval का विकल्प देता है, तो `sql_execute` की हर request decline कीजिए। Prompt भी Claude से इसे call न करने को कहता है, लेकिन prompt में लिखा एक वाक्य tool permission से कमज़ोर सुरक्षा है।

Interactive clients OAuth 2.1 के जरिए authorize होते हैं, जिसमें PKCE और Dynamic Client Registration शामिल हैं। आपको Claude में API key paste करने की ज़रूरत नहीं है। मौजूदा authentication और tool contract [MCP connector के दस्तावेज़ों](/hi/docs/mcp-connector/) में दिए गए हैं।

## Due cards का quiz लेने के लिए यह prompt copy करें

नीचे वाला prompt documented tool shapes, card fields, और due rule इस्तेमाल करता है। कोई card तब eligible होता है जब `due_at` null हो या उसका timestamp आ चुका हो। इस contract में null का मतलब ऐसा नया card है जिसे अब तक छुआ नहीं गया।

```text
इस session में Flashcards MCP connector को सिर्फ़ quiz लेने वाले tutor की तरह इस्तेमाल करो।

Tools की सीमा:
- सिर्फ़ list_workspaces और sql_query call करो।
- sql_execute कभी call मत करो।
- कोई card कभी create, update, delete, reschedule, या reviewed mark मत करो।

Setup:
1. list_workspaces({}) call करो।
2. अगर सिर्फ़ एक workspace है, तो उसका नाम बताओ और मुझसे उसे confirm करने को कहो।
3. अगर कई workspaces हैं, तो उनके नाम दिखाओ और मुझसे एक चुनने को कहो।
4. Cards पढ़ने से पहले रुककर मेरे workspace confirmation का इंतज़ार करो।
5. इस call के लिए confirmed workspaceId को sql_query में pass करो। यह दावा मत करो कि इससे मेरा default workspace बदल जाता है।
6. ठीक यही SQL इस्तेमाल करो:

SELECT card_id, front_text, back_text, due_at, created_at
FROM cards
WHERE due_at IS NULL OR due_at <= NOW()
ORDER BY due_at ASC, created_at DESC, card_id ASC
LIMIT 10 OFFSET 0

यह query उन cards का stable snapshot लोड करती है जो इस समय review के लिए eligible हैं। यह Flashcards Review screen का exact order दोबारा नहीं बनाती। due_at IS NULL वाली rows ऐसे नए cards हैं जिन्हें अब तक छुआ नहीं गया, और वे पहले sort होती हैं। Future cards मत लाओ।

अगर query कोई row न लौटाए, तो मुझे बताकर रुक जाओ।

Quiz का तरीका:
- पहले card का सिर्फ़ front_text दिखाओ। back_text पहले से मत दिखाओ।
- एक बार में एक card पूछो और आगे बढ़ने से पहले मेरे जवाब का इंतज़ार करो।
- सवाल को multiple choice में मत बदलो।
- अधिकतम एक छोटा hint दो, और सिर्फ़ तब जब मैं माँगूँ। Hint में answer खुलना नहीं चाहिए।
- मेरे जवाब या “मुझे नहीं पता” कहने के बाद saved back_text दिखाओ और उस पर साफ़ तौर पर “Stored answer” label लगाओ।
- मेरे पहले जवाब की तुलना stored answer से करो। सिर्फ़ इस session के लिए एक note रखो: retrieved, partial, या missed। अगर फैसला साफ़ न हो, तो मुझसे पूछो कि कौन-सा note सही है।
- बाद में hint या correction से मदद मिल जाए, तब भी first-attempt note मत बदलो। उस note को कभी Again, Hard, Good, या Easy में मत बदलो।
- अगले card पर तभी जाओ जब मैं “next” कहूँ या किसी और तरह confirm करूँ कि मैं तैयार हूँ।
- इस session में किसी card को दोबारा मत पूछो।

अंत में हर card के front और उसके first-attempt note की एक छोटी list दिखाओ। साफ़ बताओ कि ये सिर्फ़ chat notes हैं, कोई review दर्ज नहीं हुआ, FSRS scheduling में कोई बदलाव नहीं हुआ, और मुझे official reviews Flashcards app में पूरे करने होंगे।
```

Query में `NOW()` ही रखिए; इस SQL surface पर `CURRENT_TIMESTAMP` supported नहीं है। तीन columns वाला sort भी मायने रखता है। ऐसे नए cards पहले आते हैं जिन्हें अब तक छुआ नहीं गया। उनमें नए बनाए गए cards पहले आते हैं; उसके बाद scheduled cards सबसे पुराने due time से आगे बढ़ते हैं, और बाकी बचे ties को `card_id` तोड़ता है। उसी snapshot पर result दोहराने योग्य है, लेकिन यह app के Review screen का exact order नहीं है।

दस एक अधिकतम सीमा है, target नहीं। Query बदले या कुछ write किए बिना आप पाँच cards के बाद अभ्यास रोक सकते हैं।

## Tutor के साथ एक round कैसे चलना चाहिए

Claude सिर्फ़ एक saved front दिखाता है। आप याद से जवाब देते हैं, हो सके तो ज़ोर से बोलकर। अगर अटक जाएँ, तो एक hint माँग सकते हैं। इसके बाद Claude saved back दिखाता है और उसकी तुलना आपके जवाब से करता है।

Hint से answer साफ़ हो जाने के बाद भी पहली कोशिश session notes में दिखती रहती है। इससे खुद को बहलाने वाली एक आम आदत रुकती है: “चूक गया, फिर explanation समझ आया” को “मुझे आता था” मान लेना। Note जानबूझकर मोटा-मोटा रखा गया है। वह दस cards में patterns पहचानने में मदद करता है; scheduler के input की तरह काम नहीं करता।

हर answer दिखाने से पहले का pause ही ज़्यादातर असली काम कराता है। जो chat सभी fronts और backs एक साथ print कर देती है, वह पढ़ने के लिए बस एक और page बन जाती है। एक सवाल, एक कोशिश, और एक reveal इसे सचमुच का retrieval session बनाते हैं।

## मौखिक अभ्यास official FSRS review नहीं है

यह boundary सीधी भाषा में समझना ज़रूरी है: Flashcards MCP eligible cards पढ़ सकता है, लेकिन review event submit नहीं कर सकता। `review_events` resource और card scheduling fields—जिनमें `due_at`, `reps`, `lapses`, `fsrs_card_state`, और `fsrs_last_reviewed_at` शामिल हैं—agent surface के जरिए read-only हैं। `sql_execute` भी सिर्फ़ cards और decks बदल सकता है। Claude Again, Hard, Good, या Easy rating save नहीं कर सकता, schedule update नहीं कर सकता, और review को complete mark नहीं कर सकता।

इसलिए chat खत्म होने के बाद भी cards due रहेंगे।

Hosted app या किसी दूसरे Flashcards client में official review flow के तहत उन्हीं cards के सवालों का फिर से जवाब दीजिए। उस कोशिश को खुद rate कीजिए। Chat में answer दिख जाने से तुरंत दोबारा करना आसान लग सकता है, इसलिए `retrieved`, `partial`, या `missed` को अपने-आप किसी rating में मत बदलिए। अगर इससे ईमानदार grading मुश्किल लगे, तो सामान्य app review के बाद AI tutor को explanation session की तरह इस्तेमाल कीजिए।

अगर इस फर्क को और विस्तार से समझना हो, तो [active recall जाँचता है कि आप अभी क्या याद से निकाल सकते हैं, जबकि spaced repetition तय करता है कि बाद में क्या लौटना चाहिए](/hi/blog/active-recall-vs-spaced-repetition/)। यह Claude session पहला काम संभालता है। App दूसरा।

## जवाब दिखाने से पहले रुकना क्यों मायने रखता है

काम की constraint वही है जो थोड़ी झुंझलाहट भी पैदा करती है: Claude को इंतज़ार करना होगा। Front पर कोशिश करने से पहले back दिख जाए, तो round reading में बदल जाता है। उसे छिपाने से एक retrieval attempt बनता है जिसे आप सच में परख सकते हैं।

2009 के एक randomized controlled trial में pediatric और emergency medicine के 40 residents को दो medical topics सीखते हुए follow किया गया। Feedback के साथ repeated short-answer testing तुरंत हुई और करीब दो-दो हफ़्ते के अंतर पर दो बार और हुई। छह महीने से ज़्यादा समय बाद average scores बार-बार test किए गए material के लिए 39% और review sheets से बार-बार पढ़े गए material के लिए 26% थे। [प्रकाशित abstract में 13 percentage points का फर्क दिया गया है](https://pubmed.ncbi.nlm.nih.gov/19930508/)।

यह medical education की एक छोटी study थी, AI tutor trial नहीं, और इससे यह साबित नहीं होता कि यही MCP workflow grades बेहतर करता है। यह सिर्फ़ एक सीमित design choice को support करती है: answer देखने से पहले कोशिश कीजिए। Prompt back छिपाकर, hints सीमित रखकर और पहली कोशिश बचाकर इसी boundary का पालन करता है।

## Saved back को reference मानें

जवाब जाँचते समय AI tutor बड़ी आसानी से answer को बेहतर, बड़ा, या चुपचाप किसी दूसरे answer से replace कर सकता है। जब मकसद अपने cards review करना हो, तो यह जोखिम भरा है।

Prompt Claude से saved `back_text` दिखाने और आपके जवाब की तुलना उसी text से करने को कहता है। वह mismatch समझा सकता है, लेकिन अभ्यास के दौरान source of truth सामने ही रहता है। अगर back गलत या अधूरा है, तो session के बाद किसी भरोसेमंद source की मदद से card अलग से ठीक कीजिए। ऐसा न होने दें कि कोई fluent correction chat में गुम हो जाए और original card के ठीक होने का भ्रम पैदा करे।

Question-first workflow को और विस्तार से समझने के लिए [AI से Active Recall कैसे करें](/hi/blog/how-to-use-ai-for-active-recall/) बताता है कि hints और explanations को बहुत जल्दी आने से कैसे रोकें।

## Connect करने से पहले privacy और permissions

जब Claude `sql_query` call करता है, तो Flashcards माँगा गया card data external AI client को लौटाता है। चुना हुआ client या model provider अपनी account settings और terms के मुताबिक उस data को process या retain कर सकता है। Data सिर्फ़ Flashcards के अंदर नहीं रहता।

Private deck इस्तेमाल करने से पहले जाँचिए कि उसका text उस provider को भेजा जा सकता है या नहीं। Vocabulary deck और patient notes, employer documents, या private journal से copy किए गए cards एक जैसे फैसले के लायक नहीं हैं। Session के लिए सिर्फ़ ज़रूरी छोटा set माँगिए, और उसी chat में unrelated connectors या sensitive sources मिलाने से बचिए।

`sql_execute` block करना ऐसे client में writes से बचाता है जो उस block को लागू करता हो। इससे OAuth credential read-only credential नहीं बनता, और लौटाया गया text private भी नहीं हो जाता। अगर आपका client अलग-अलग tools disable नहीं कर सकता या calls को approval के लिए नहीं दिखाता, तो connection को write-capable मानिए।

विस्तृत threat model [क्या Flashcards के लिए MCP सुरक्षित है?](/hi/blog/is-mcp-safe-for-flashcards/) में है। सामान्य quiz के लिए छोटी checklist काफ़ी है: MCP URL verify करें, workspace confirm करें, writes block करें, कम rows माँगें, और जानें कि लौटाया गया data कहाँ जाता है।

## Due-card batch छोटा रखें

“AI, मेरे flashcards से मेरा quiz लो” सुनने में पूरे deck की request लगती है। आम तौर पर पाँच या दस cards माँगना बेहतर काम करता है।

छोटा batch आपको पूरा जवाब देने, hint माँगने, और यह समझने की जगह देता है कि आप कहाँ चूके। इससे external client तक पहुँचने वाला card text भी सीमित रहता है। App में official reviews खत्म करने के बाद ही दूसरा batch शुरू कीजिए, और वह भी तब जब आपका ध्यान अभी बचा हो।

Claude से “सबसे महत्वपूर्ण” cards चुनने को मत कहिए, जब तक importance तय करने का कोई असली rule न हो। Sample query का rule ज़्यादा सीमित है: ऐसे untouched new cards शामिल करो जिनका `due_at` null है, और ऐसे scheduled cards जिनका due time आ चुका है। New cards पहले sort होते हैं, फिर scheduled cards सबसे पुराने due time से आगे आते हैं। यह stable snapshot छोटे अभ्यास के लिए उपयोगी है, लेकिन app के Review screen के order से match करने का दावा नहीं करता। Timing की ज़िम्मेदारी FSRS के पास रहती है; Claude सिर्फ़ सवाल पेश करने का तरीका बदलता है।

## Claude, MCP, और due-card reviews पर FAQ

### क्या Claude मेरे अपने flashcards से मेरा quiz ले सकता है?

हाँ। Flashcards MCP connector के साथ Claude आपके confirm किए workspace से eligible cards का छोटा snapshot पढ़ सकता है, हर card का सिर्फ़ front दिखा सकता है, आपके जवाब का इंतज़ार कर सकता है, और फिर saved back दिखा सकता है। ऊपर वाला prompt session को `list_workspaces` और `sql_query` तक सीमित रखता है।

### क्या मेरे जवाब देने के बाद Claude card को reviewed mark करता है?

नहीं। Agent surface review events submit नहीं कर सकता या FSRS scheduling fields नहीं बदल सकता। [Flashcards app](https://app.flashcards-open-source-app.com/) में वही due reviews पूरे कीजिए, ताकि आपकी ratings दर्ज हों और cards को अगली due dates मिलें।

### क्या यह read-only MCP connection है?

पूरा connector read-only नहीं है। `list_workspaces` और `sql_query` read-only tools हैं; `sql_execute` लिख सकता है। Quiz-only setup client में `sql_execute` को block या decline करने पर निर्भर है। OAuth में फिलहाल अलग read और write grants की जगह सिर्फ़ एक `flashcards` scope है।

### क्या AI मेरे लिए Again, Hard, Good, या Easy चुन सकता है?

उसे ऐसा नहीं करना चाहिए। Claude `retrieved`, `partial`, और `missed` जैसे मोटे session notes रख सकता है, लेकिन ये labels FSRS ratings नहीं हैं। Official rating app में खुद चुनिए।

### क्या prompt की query में नए cards शामिल हैं?

हाँ। Untouched new cards में `due_at IS NULL` होता है, इसलिए documented due rule के तहत वे eligible हैं। इस query में वे scheduled due cards से पहले sort होते हैं। Future `due_at` वाले cards शामिल नहीं होते।

### क्या `workspaceId` मेरा default workspace बदल देता है?

नहीं। `sql_query` में `workspaceId` pass करने से वह workspace सिर्फ़ उस एक call के लिए target होता है। इसे छोड़ने पर selected default इस्तेमाल होता है, जबकि ID देने से कोई नया default save नहीं होता।

## AI flashcard tutor की भूमिका सीमित रखें

**AI flashcard tutor** का उपयोगी रूप एक छोटा काम करता है: कुछ eligible fronts लाता है, आपके answers का इंतज़ार करता है, सीमित मदद देता है, और cards के साथ पहले से saved answers दिखाता है।

Client में `sql_execute` blocked रखिए और snapshot के लिए server द्वारा लागू read-only `sql_query` इस्तेमाल कीजिए। First-attempt labels को अस्थायी chat notes मानिए। फिर Flashcards में official reviews पूरे कीजिए, ताकि FSRS आपकी ratings पाए और cards को दोबारा schedule करे। ऐसा होने तक chat वाला हर card due रहेगा।
