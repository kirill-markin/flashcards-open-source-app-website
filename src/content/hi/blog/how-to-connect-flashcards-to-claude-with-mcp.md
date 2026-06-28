---
title: "MCP के साथ Flashcards को Claude से कैसे जोड़ें और chat से cards कैसे बनाएं"
description: "Claude में Flashcards MCP custom connector जोड़ने, सही tool permissions review करने, और सीधे अपने Flashcards workspace में study cards बनवाने की practical guide."
date: "2026-06-23"
image: "/blog/how-to-connect-flashcards-to-claude-with-mcp.png"
keywords:
  - "Claude MCP flashcards"
  - "Flashcards को Claude से connect करें"
  - "Claude custom connector flashcards"
  - "Claude में cards बनाएं"
  - "Flashcards MCP connector"
  - "Claude browser flashcards"
  - "Flashcards Claude connector"
  - "Claude MCP cards"
  - "Flashcards remote MCP"
  - "Claude connector Flashcards workspace"
---

कल मैंने Claude के अंदर से लगभग एक मिनट में Flashcards में एक test card बनाकर save कर दिया। दिलचस्प हिस्सा demo नहीं था। काम की बात यह थी कि Claude ने पूछा कौन-सा workspace इस्तेमाल करना है, write action के लिए approval माँगा, और card को chat में अटका छोड़ने के बजाय सीधे असली app में डाल दिया।

यही practical वजह है कि अभी **Claude MCP flashcards** खोजना वाजिब है।

अगर आप चाहते हैं कि Claude सीधे आपके Flashcards workspace में cards बनाए, तो setup छोटा है: Flashcards custom connector जोड़िए, tool permissions review कीजिए, chat में उसे enable कीजिए, और जब Claude card save करने के लिए तैयार हो तब write call approve कीजिए।

![Claude chat से flashcards बनाने के लिए Flashcards MCP server से जुड़ा हुआ](/blog/how-to-connect-flashcards-to-claude-with-mcp.png)

## यह custom connector है, directory listing नहीं

पहले एक बात साफ़ कर लें।

Flashcards, Claude से **custom connector** के रूप में **remote MCP** के जरिए connect होता है।

इसलिए Claude की official connector directory में पहले से listed Flashcards app मत ढूँढिए। सामान्य flow यह है कि Claude का [connector settings page](https://claude.ai/customize/connectors) खोलें, plus button पर click करें, **Add custom connector** चुनें, और Flashcards MCP URL खुद paste करें।

Flashcards connector का exact URL यह है:

`https://mcp.flashcards-open-source-app.com/mcp`

सीधा लिंक: [mcp.flashcards-open-source-app.com/mcp](https://mcp.flashcards-open-source-app.com/mcp)

## Connect करने से पहले

दो बातें उम्मीद से ज़्यादा मायने रखती हैं।

पहली, Claude remote MCP servers तक आपके laptop से नहीं बल्कि Anthropic की cloud infrastructure से पहुँचता है। इसका मतलब है कि server public internet पर reachable होना चाहिए। Flashcards का MCP server पहले से public internet पर available है, इसलिए ऊपर दिया गया endpoint वही है जो आपको चाहिए।

दूसरी, connector permissions को असली tool permissions की तरह treat कीजिए। सिर्फ़ उन्हीं servers से connect करें जिन पर भरोसा हो, हर tool क्या कर सकता है यह review करें, और write actions allow करने से पहले approval request ध्यान से पढ़ें।

## Claude में Flashcards MCP connector कैसे जोड़ें

Individual Claude account के लिए setup flow यह है:

1. [Customize > Connectors](https://claude.ai/customize/connectors) खोलें।
2. `+` पर click करें।
3. **Add custom connector** चुनें।
4. Connector के लिए एक नाम लिखें और `https://mcp.flashcards-open-source-app.com/mcp` paste करें।
5. Connector जोड़ें।
6. **Connect** पर click करें, और अगर Claude कहे तो login flow पूरा करें।
7. Chats में इस्तेमाल करने से पहले tool permissions review करें।

अगर आप Team या Enterprise workspace पर हैं, तो कोई Owner या Primary Owner **Organization settings > Connectors > Add > Custom > Web** के तहत custom connector जोड़ सकता है। उसके बाद भी individual users को अपनी तरफ़ से उसे connect और authenticate करना पड़ता है।

## शुरुआत में permissions को conservative रखें

यहाँ दिखाया गया Flashcards connector छोटा-सा tool surface expose करता है:

- `list_workspaces` available workspaces की सूची के लिए
- `sql_query` read access के लिए
- `sql_execute` write actions के लिए, जैसे cards बनाना

Claude हर tool के लिए **Always allow**, **Needs approval**, या **Blocked** set करने देता है।

पहली बार setup करते समय मैं read-only tools को **Always allow** पर रखूँगा और write tool को **Needs approval** पर। इससे Claude को आपके workspaces inspect करने और data पढ़ने की जगह मिलती है, लेकिन card creation बिना review के background action नहीं बनता।

यही connector settings वाले screenshot में भी दिख रहा है: `list_workspaces` और `sql_query` allowed हैं, जबकि `sql_execute` अभी भी आपके approval का इंतज़ार करता है।

![Claude connector settings में Flashcards MCP permissions, जहाँ read tools हमेशा allowed हैं और write tools approval माँगते हैं](/blog/claude-mcp-flashcards-connector-settings.png)

बाद में चाहें तो इसे ढीला कर सकते हैं। मैं शुरुआत वहीं से नहीं करूँगा।

## जिस chat में इस्तेमाल करना है, उसमें connector चालू करें

Setup के बाद Claude conversation खोलें और पक्का करें कि connector वहाँ available है। मौजूदा flow में आप conversation के अंदर `+` button या `/` menu से connectors enable कर सकते हैं, और ज़रूरत हो तो उसी chat के लिए tool access भी adjust कर सकते हैं।

अगर Claude वहाँ connector use नहीं कर रहा जहाँ करना चाहिए, तो पहले ये सीधी बातें check करें:

- Flashcards connector settings में connected है
- connector current chat के लिए enabled है
- write tool blocked नहीं है

आमतौर पर यही उस problem को ठीक कर देता है जहाँ Claude सिर्फ़ text दे रहा होता है, card बना नहीं रहा होता।

## Claude से क्या कहें

Prompt को plain रखें। यहाँ Claude को किसी ceremony की ज़रूरत नहीं है।

शुरुआत के लिए ये prompts अच्छे हैं:

```text
Flashcards में एक नया flashcard बनाओ।
Front: HTTP 404 का क्या मतलब होता है?
Back: Server पर requested resource नहीं मिला।
Tag: web-basics
अगर तुम्हें यक़ीन न हो तो मुझसे पूछो कि कौन-सा workspace इस्तेमाल करना है।
```

```text
कुछ भी बनाने से पहले, मेरे Flashcards workspaces की list दिखाओ और बताओ कि language study cards के लिए कौन-सा सबसे सही लगता है।
```

```text
Flashcards में Spanish सीखने के लिए एक नया flashcard बनाओ।
Front: Spanish में "I would like a coffee" कैसे कहते हैं?
Back: Me gustaría un café.
Tags: spanish, travel
मेरा Personal workspace इस्तेमाल करो।
```

मैं एक या दो cards से शुरू करूँगा, पचास से नहीं। पहले connector flow, workspace choice, और approval pattern confirm करना ज़्यादा समझदारी है। उसके बाद ही कोई बड़ा batch चलाइए।

## असल में create-card flow कैसा दिखता है

यह हिस्सा काफ़ी सीधा है।

आप Claude से कहते हैं कि Flashcards में card बनाए। अगर आपके पास एक से ज़्यादा workspace हैं और कोई default साफ़ नहीं है, तो Claude पूछ सकता है card कहाँ डालना है। उसके बाद Claude write tool इस्तेमाल करता है, और अगर `sql_execute` अभी भी **Needs approval** पर है तो approval का इंतज़ार करता है।

यही सही behavior है।

आपको write request review करनी चाहिए, उसे approve करना चाहिए, और फिर Claude को finish करने देना चाहिए। नीचे वाले screenshot में Claude ने पूछा कौन-सा workspace इस्तेमाल करना है, Flashcards write action चलाया, और बताया कि test card सफलतापूर्वक add हो गया।

![Claude chat, जिसने workspace पूछने के बाद Flashcards MCP connector के जरिए एक test flashcard बनाया](/blog/claude-mcp-flashcards-create-card.png)

अगर आप tool call को बहुत करीब से inspect नहीं करना चाहते, तो raw SQL की परवाह करने की ज़रूरत नहीं है। असली workflow यह है:

1. Claude से card बनाने को कहें
2. अगर Claude पूछे तो workspace चुनें
3. write action review करके approve करें
4. confirm करें कि saved card सही दिख रहा है

इतना काफ़ी है कि आप **Claude में cards बनाएं** वाला flow इस्तेमाल कर सकें, बिना यह दिखावा किए कि Claude खुद review app है।

## कुछ ईमानदार सीमाएँ

यह setup काम का है, लेकिन जादू नहीं है।

Claude, Flashcards के अंदर cards बनाने में मदद कर सकता है। वह connector से पढ़ सकता है, workspaces inspect कर सकता है, और read tools के जरिए data query कर सकता है। इसका मतलब यह नहीं कि Claude का हर drafted card अच्छा होगा, और यह भी नहीं कि आपको हर write request आँख बंद करके approve कर देनी चाहिए।

मैं फिर भी Claude को drafting और entry layer की तरह ही treat करूँगा, और बाद में अहम काम Flashcards में करूँगा:

- कमज़ोर cards को साफ़ करना
- decks और tags को organize करना
- spaced repetition के साथ review करना
- उन्हीं devices पर अपने असली workspace से पढ़ना जिन्हें आप पहले से इस्तेमाल करते हैं

अगर tool layer जोड़ने से पहले आपको बेहतर card-writing prompts चाहिए, तो [2026 में Claude से फ़्लैशकार्ड्स कैसे बनाएं](/hi/blog/how-to-use-claude-to-make-flashcards/) बेहतर starting point है। अगर आपका goal card creation से बड़ा है, तो [2026 में Claude से पढ़ाई कैसे करें](/hi/blog/how-to-use-claude-for-studying/) बड़ा workflow cover करता है।

## Claude card बना दे, उसके बाद उसे असली app में review करें

मुझे setup का यही हिस्सा सबसे ज़्यादा पसंद है। Card किसी अच्छी दिखने वाली AI transcript में नहीं अटका रहता। वह Flashcards में पहुँच जाता है, जहाँ आप उसे बाद में सच में review कर सकते हैं।

आप hosted web app खोल सकते हैं, mobile पर card check कर सकते हैं, या अपने सामान्य study flow में आगे बढ़ सकते हैं:

- [Flashcards web app](https://app.flashcards-open-source-app.com/)
- [App Store पर iPhone और iPad के लिए Flashcards](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- [Google Play पर Android के लिए Flashcards](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

![Flashcards Open Source App का review अनुभव, hosted web app और mobile apps के across](/home/app-screens-showcase-en.png)

अगर आपने अभी तक product इस्तेमाल नहीं किया है, तो [Getting Started](/hi/docs/getting-started/) सबसे तेज़ रास्ता है।

## Short version

अगर आपने **Flashcards को Claude से जोड़ें** खोजा है, तो असली flow यह है:

1. Claude की [custom connector settings](https://claude.ai/customize/connectors) खोलें
2. `https://mcp.flashcards-open-source-app.com/mcp` जोड़ें
3. connect करें और permissions review करें
4. शुरुआत में read tools खुले रखें और write tools को approval पर रखें
5. अपनी chat में connector enable करें
6. Claude से card बनाने को कहें
7. write call approve करें
8. Flashcards में saved card review करें

इससे आप Claude chat से सीधे असली Flashcards workspace तक पहुँच जाते हैं, बिना किसी fake integration के, बिना manual copy-paste के, और पहले ही दिन write actions पर अपना control खोए बिना।
