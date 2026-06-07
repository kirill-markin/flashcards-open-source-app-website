---
title: "2026 में फ्लैशकार्ड्स से टर्मिनल कमांड्स कैसे सीखें: Bash, Git, और CLI वर्कफ़्लो जो याद रह जाएँ"
description: "2026 में टर्मिनल कमांड्स सीखने के लिए एक व्यावहारिक फ्लैशकार्ड वर्कफ़्लो। Bash help, Git docs, CLI की गलतियाँ, और छोटे FSRS decks की मदद से वही कमांड्स याद रखें जिन्हें आप सच में बार-बार इस्तेमाल करते हैं।"
date: "2026-06-07"
image: "/blog/how-to-learn-terminal-commands-with-flashcards.png"
keywords:
  - "टर्मिनल कमांड्स कैसे सीखें"
  - "टर्मिनल कमांड फ्लैशकार्ड्स"
  - "Bash फ्लैशकार्ड्स"
  - "Git कमांड फ्लैशकार्ड्स"
  - "CLI स्टडी वर्कफ़्लो"
  - "टर्मिनल कमांड्स याद कैसे रखें"
  - "डेवलपर्स के लिए स्पेस्ड रिपीटिशन"
  - "डेवलपर्स के लिए FSRS"
---

मंगलवार को मैं `git restore --staged README.md` पर अटक गया। मुझे पता था कि करना क्या है: फ़ाइल को unstage करना, बदलाव बचाए रखना, और आगे बढ़ जाना। फिर भी मुझे रुककर वही flag फिर से देखना पड़ा।

यह लेख उसी छोटी लेकिन परेशान करने वाली रुकावट के बारे में है। 2026 में टर्मिनल से मदद लेना पहले से आसान है। [ChatGPT का Study Mode](https://help.openai.com/en/articles/11780217-chatgpt-study-mode-faq), 16 अप्रैल 2026 का [Codex update](https://openai.com/index/codex-for-almost-everything/), और 25 फ़रवरी 2026 की [GitHub Copilot CLI GA release](https://github.blog/changelog/2026-02-25-github-copilot-cli-is-now-generally-available/) सब आपको जल्दी फँसाव से बाहर निकाल देते हैं। लेकिन अगले हफ्ते वही कमांड याद रहना अब भी एक अलग काम है।

यहीं **टर्मिनल कमांड फ्लैशकार्ड्स** काम आते हैं। असली काम कीजिए, जो कमांड्स आप बार-बार भूलते हैं उन्हें पकड़िए, सिर्फ़ उन्हीं से छोटे कार्ड बनाइए, और review का समय FSRS पर छोड़ दीजिए। आपको पूरा shell याद नहीं करना है। आपको बस कमांड से जुड़े वही 30 से 50 फैसले दोबारा सीखने से बचना है जो बार-बार काम रोकते हैं।

![टर्मिनल कमांड फ्लैशकार्ड्स, नोटबुक, और हल्के धुंधले लैपटॉप टर्मिनल वाला गर्म डेवलपर डेस्क](/blog/how-to-learn-terminal-commands-with-flashcards.png)

## 2026 में यह और ज़्यादा महत्वपूर्ण क्यों है

पहले टर्मिनल सीखने का मतलब आम तौर पर man pages, सेव किए हुए snippets, और उस एक cheat sheet का मिश्रण होता था जिसे आप बाद में पढ़ने का वादा करते थे।

अब मदद हर जगह है:

- AI tutors सिर्फ़ समझाते नहीं, quiz भी कर सकते हैं
- coding agents आपके असली repo के भीतर दो commands का फर्क दिखा सकते हैं
- `--help`, `help`, और `git help` को card-writing workflow में paste करना आसान है
- terminal assistants command lookup को इतना आसान बना देते हैं कि लोग जानबूझकर याद बनाना भूल जाते हैं

आख़िरी बिंदु सबसे ज़्यादा महत्वपूर्ण है।

अगर lookup तुरंत हो जाए, तो तकलीफ़ इतनी महसूस ही नहीं होती कि आप उसे ठीक करें। फिर वही छोटी command problem बार-बार काम रोकती रहती है:

- कौन-सा Git command edits हटाए बिना फ़ाइल को unstage करता है
- क्या `grep -R` वही recursive option है जिसकी आपको ज़रूरत है
- `git status --short` में `??` का मतलब क्या है
- आपको `source ~/.zshrc` चलाना चाहिए या नई shell खोलनी चाहिए

तेज़ मदद उपयोगी है। लेकिन वह याद से सही कमांड निकाल पाने की जगह नहीं लेती।

## किस चीज़ पर कार्ड बनाना चाहिए

ज़्यादातर लोग दो में से एक गलती करते हैं।

या तो वे Bash या Git की पूरी cheat sheet AI में डाल देते हैं और 200 कार्ड स्वीकार कर लेते हैं, या फिर कुछ भी याद करने से इनकार कर देते हैं क्योंकि "ज़रूरत होगी तो देख लेंगे।" दोनों तरीके एक ही फ़िल्टर को नज़रअंदाज़ करते हैं: बार-बार ज़रूरत पड़ना और भूलने की कीमत।

कार्ड तब बनाइए जब ये दोनों बातें सच हों:

1. संभावना है कि आपको वह command फिर चाहिए होगी।
2. उसे भूलना असली काम को धीमा कर देता है।

अच्छे **Bash फ्लैशकार्ड्स** और **Git कमांड फ्लैशकार्ड्स** आम तौर पर इन तरह की स्थितियों से आते हैं:

- task decisions: जिस काम को करना है उसके लिए कौन-सा command सही है
- close-command confusion: `git switch` बनाम `git checkout`
- flag meaning: `-R`, `-c`, या `--staged` जोड़ने पर क्या बदलता है
- output reading: कोई symbol या status line क्या बताती है
- repeated environment setup: shell config reload करना, variable export करना, script को executable बनाना
- failure recovery: वह गलती ठीक करना जो आप दबाव में बार-बार करते हैं

कमज़ोर कार्ड्स आम तौर पर ऐसे दिखते हैं:

- `tar --help` के हर flag पर card
- पूरी man page का line-by-line summary
- ऐसे commands जिन्हें आप साल में एक बार इस्तेमाल करते हैं
- लंबे syntax blocks जिनका किसी task से संबंध नहीं है
- ऐसे cards जो सिर्फ़ recognition test करते हैं क्योंकि prompt में ही जवाब झलक जाता है

अगर अगले हफ्ते उसे भूलने से आपको फर्क नहीं पड़ेगा, तो वह शायद deck में नहीं होना चाहिए।

## कमांड्स याद रखने के लिए कौन-से कार्ड फ़ॉर्मैट सबसे अच्छे चलते हैं

टर्मिनल commands प्रक्रिया-आधारित होते हैं। इन्हें पास-पास वाले commands से भ्रमित करना आसान है। इसलिए कार्ड किसी trivia की तरह नहीं, बल्कि असली terminal decision की तरह लगना चाहिए।

### Task-first prompts इस्तेमाल करें

यह सबसे भरोसेमंद format है:

- Front: आप `fix/login-loop` नाम की नई Git branch बनाकर उसी पर switch करना चाहते हैं। कौन-सा command चलाएँगे?
- Back: `git switch -c fix/login-loop`

Prompt काम से शुरू होता है, क्योंकि असली काम के बीच कमांड इसी तरह भूलते हैं।

### Compare-and-choose cards इस्तेमाल करें

यह format Git और shell के उन commands के लिए बहुत अच्छा है जो एक जैसे दिखते हैं:

- Front: आप `README.md` को unstage करना चाहते हैं, लेकिन file changes रखना चाहते हैं। `git restore` चलाएँगे या `git restore --staged`?
- Back: `git restore --staged README.md`

### Output-reading cards इस्तेमाल करें

कई डेवलपर्स command तो जल्दी याद कर लेते हैं, लेकिन output पढ़ने में अटक जाते हैं।

- Front: `git status --short` में `?? notes.txt` का क्या मतलब है?
- Back: फ़ाइल untracked है।

- Front: `ls -l` में `drwxr-xr-x` की शुरुआत वाला `d` क्या बताता है?
- Back: वह entry एक directory है।

### Error-and-fix cards इस्तेमाल करें

कई बार पूरी समस्या सिर्फ़ एक character की होती है:

- Front: आप `deploy.sh` को executable बनाना चाहते हैं। कौन-सा command चलाएँगे?
- Back: `chmod +x deploy.sh`

- Front: `.zshrc` edit करने के बाद current shell में बदलाव लाने का आम तरीका क्या है?
- Back: `source ~/.zshrc`

### हर कार्ड इतना छोटा रखें कि उसे तुरंत grade किया जा सके

टर्मिनल वाला कार्ड आम तौर पर सिर्फ़ एक चीज़ test करे:

- एक command
- एक flag
- एक output symbol
- एक distinction

अगर back पर एक paragraph चाहिए, तो कार्ड को तोड़ दीजिए। Card-writing के ज़्यादा सख्त नियमों के लिए [बेहतर फ्लैशकार्ड्स कैसे बनाएँ](/hi/blog/how-to-make-better-flashcards/) सबसे अच्छा companion article है।

## पाँच ठोस उदाहरण जिन्हें मैं सच में deck में रखूँगा

ये वही तरह के कार्ड्स हैं जो review में टिकते हैं, क्योंकि वे रोज़मर्रा की terminal रुकावटों से आते हैं:

- Front: आप current directory के अंदर `TODO` को `grep` से recursively ढूँढना चाहते हैं। कौन-सा flag सबसे ज़्यादा ज़रूरी है?
  Back: `-R`
- Front: `git status --short` में ` M README.md` में second-column `M` का क्या मतलब है?
  Back: फ़ाइल working tree में modified है।
- Front: आप environment variable से current shell type print करना चाहते हैं। कौन-सा command इस्तेमाल करेंगे?
  Back: `echo $SHELL`
- Front: आप सभी local branches की list देखना चाहते हैं। कौन-सा Git command चलाएँगे?
  Back: `git branch`
- Front: आप current directory के नीचे `notes.md` नाम की files ढूँढना चाहते हैं। कमांड का बुनियादी रूप क्या है?
  Back: `find . -name "notes.md"`

इनमें कुछ भी असाधारण नहीं है। बात यही है। उपयोगी command decks रोज़मर्रा की रुकावटों से बनते हैं।

## कार्ड्स याददाश्त के दिखावे से नहीं, असली sources से बनाइए

खराब cards बनाने का सबसे आसान तरीका है कि work session खत्म होने के बाद धुँधली याददाश्त से उन्हें लिखना।

बेहतर sources पहले से आपके सामने हैं:

- Bash builtins के लिए `help`
- command-specific `--help` output
- Git docs के लिए [`git help`](https://git-scm.com/docs/git-help)
- आधिकारिक [GNU Bash Reference Manual](https://www.gnu.org/software/bash/manual/bash.html)
- आपकी अपनी shell history
- repo setup steps जिन्हें आप बार-बार दोहराते हैं
- वे commands जिन्हें किसी AI assistant ने एक हफ्ते में दो बार याद दिलाया

यहाँ एक आसान source check है:

```bash
help cd
help export
grep --help
git help restore
git help switch
git status --short
```

आपको इन sources को पूरा deck बनाने में नहीं बदलना है। आपको सिर्फ़ वे हिस्से चाहिए जो बार-बार होने वाली confusion साफ़ करें।

### पहले अपनी गलतियों को खंगालिए

अब भी यही सबसे भरोसेमंद source है।

उदाहरण:

- आप भूल गए कि `git restore .` working tree changes हटा देता है या नहीं
- आपने `git fetch` और `git pull` को मिला दिया
- आपको `find . -name` फिर से देखना पड़ा
- `chmod +x` देखते ही पहचान लेते हैं, लेकिन जल्दी याद नहीं आता
- current session में shell config reload करने का तरीका बार-बार भूलते हैं

कार्ड बनाने के लिए ये शुरुआती बिंदु किसी भी "top 100 terminal commands" list से बेहतर हैं, क्योंकि ये पहले ही साबित कर चुके हैं कि आपकी workflow में इनकी अहमियत है।

अगर आपकी study loop में पहले से tutor-style AI sessions शामिल हैं, तो [2026 में active recall के लिए AI कैसे इस्तेमाल करें](/hi/blog/how-to-use-ai-for-active-recall/) flashcard वाले चरण से ठीक पहले स्वाभाविक रूप से फिट बैठता है।

## AI से candidate cards बनवाइए, फिर सख्ती से काटिए

यहाँ AI उपयोगी है, लेकिन ज़्यादातर एक formatter की तरह।

उसे छोटा input और छोटा काम दीजिए:

> इन command mistakes और help snippets को plain front/back flashcards में बदलिए। हर card में एक command decision हो। task-first prompts, compare-and-choose prompts, और output-reading prompts को प्राथमिकता दीजिए। low-frequency, duplicated, या obvious चीज़ें छोड़ दीजिए।

यह तरीका इन inputs के साथ अच्छा चलता है:

- `git help` का pasted excerpt
- इस हफ्ते जिन commands को आपको फिर देखना पड़ा उनकी छोटी list
- pairing session के notes
- agent-assisted coding session का transcript

जो चीज़ आम तौर पर fail होती है, वह है "पूरी Bash deck" या "सारे ज़रूरी Git commands" माँगना। इससे आपको बड़ा deck मिलता है जो एक दोपहर के लिए productive लगता है और अगले छह महीनों तक बोझ बन जाता है।

उपयोगी तरीका यह है कि AI आपका typing time बचाए, फिर आप deck को तब तक काटें जब तक वह लगभग बहुत छोटा न लगने लगे।

अगर AI ने पहले ही बहुत ज़्यादा दे दिया है, तो [फ्लैशकार्ड्स को तेज़ी से कैसे review करें](/hi/blog/how-to-review-flashcards-faster/) और [एक दिन में कितने नए फ्लैशकार्ड्स जोड़ने चाहिए](/hi/blog/how-many-new-flashcards-per-day/) सही follow-up लेख हैं।

## Alphabet के हिसाब से नहीं, task के हिसाब से organize करें

Alphabetical command lists साफ़-सुथरी लगती हैं, लेकिन review में अच्छा काम नहीं करतीं।

असल काम ज़्यादा करीब इस तरह होता है:

- Git recovery
- branch management
- file permissions
- shell setup
- log search
- फ़ाइलें ढूँढना
- repo onboarding

"Git recovery" cluster में ये चीज़ें हो सकती हैं:

- edits बचाकर unstage करना
- local file changes discard करना
- reset करने से पहले देखना कि क्या बदला
- गलत branch checkout करने के बाद recovery

"shell setup" cluster में ये चीज़ें हो सकती हैं:

- `.zshrc` reload करना
- environment variable print करना
- current session के लिए value export करना
- यह देखना कि कौन-सी shell active है

यह structure उन्हीं situations से मेल खाता है जहाँ recall मायने रखता है। अगर आपका deck बार-बार बिखरने लगे, तो [फ्लैशकार्ड्स को organize कैसे करें](/hi/blog/how-to-organize-flashcards/) tagging वाले हिस्से को और गहराई से समझाता है।

## FSRS के साथ review करें, लेकिन उसमें बेकार cards मत भरें

FSRS उपयोगी है क्योंकि वह इस आधार पर review intervals तय करता है कि आपको हर card कितना अच्छी तरह याद है। अगर आप scheduling details देखना चाहते हैं, तो आधिकारिक [FSRS wiki](https://github.com/open-spaced-repetition/fsrs4anki/wiki) सबसे अच्छा शुरुआती point है।

लेकिन scheduler की quality कमजोर cards को बचा नहीं सकती।

अगर command card vague है, बहुत कुछ एक साथ पूछता है, या इतना rare है कि कोई फर्क ही नहीं पड़ता, तो FSRS उसे बहुत खूबसूरती से schedule करेगा और review फिर भी बेकार लगेगा।

बेहतर loop सीधा है:

1. असली काम के दौरान command misses पकड़िए।
2. सिर्फ़ बार-बार होने वाली misses को cards में बदलिए।
3. हर दिन थोड़ी संख्या में नए cards review कीजिए।
4. कुछ reviews के बाद जो cards कभी काम नहीं आए, उन्हें delete कर दीजिए।
5. नए cards तभी जोड़िए जब वही command problem फिर लौटे।

यही आख़िरी कदम deck को ईमानदार रखता है।

## एक व्यावहारिक 20-minute workflow

अगर मैं इसे शुरुआत से सेट कर रहा होता, तो हफ्ते में एक या दो बार यही करता।

### 1. हाल की पाँच misses इकट्ठा करें

इन्हें यहाँ से उठाइए:

- shell history
- repo setup notes
- वे commands जिन्हें आपने फिर से lookup किया
- AI या agent sessions जहाँ आपको command help चाहिए थी

### 2. असली source जाँचें

कार्ड लिखने से पहले असली source खोलिए:

- Bash builtins के लिए `help`
- आम CLI tools के लिए `--help`
- Git के लिए `git help <command>`

यह उस क्लासिक गलती से बचाता है जहाँ आप सोचते हैं, "मुझे लगता है इस flag का मतलब यही है..."

### 3. 5 से 10 candidate cards draft करें

उन्हें छोटा रखिए। जो cards ज़्यादा भरे हुए लगें, उन्हें तुरंत तोड़ दीजिए।

### 4. जो चीज़ भूलने पर आपको झुंझलाहट नहीं होगी, उसे हटा दीजिए

ज़्यादातर quality यहीं से आती है।

### 5. बचे हुए cards उसी deck में डालिए जिस पर आप पहले से भरोसा करते हैं

टर्मिनल commands के लिए दूसरा review system मत बनाइए, जब तक छोड़े हुए study systems को maintain करना आपका शौक न हो।

## Flashcards Open Source App इसमें कहाँ फिट बैठता है

[Flashcards Open Source App](/hi/) यहाँ अच्छी तरह काम करता है, क्योंकि terminal study पहले से सीमित भी है और text-heavy भी।

आप इसका उपयोग इन कामों के लिए कर सकते हैं:

- command decisions के लिए plain front/back cards बनाना
- intervals का अंदाज़ा लगाने के बजाय FSRS के साथ review करना
- जब source messy हो तो pasted text या file attachments के साथ AI chat इस्तेमाल करना
- Git, shell setup, API work, या repo onboarding के लिए अलग decks रखना

अगर पहले product overview चाहिए, तो [Features](/hi/features/) से शुरू करें। अगर सबसे तेज़ setup path चाहिए, तो [Getting Started](/hi/docs/getting-started/) देखें। अगर agent-oriented setup details चाहिए, तो पूरा flow [API Reference](/hi/docs/api/) में दर्ज है। और अगर आप stack खुद चलाना चाहते हैं, तो [Self-Hosting Guide](/hi/docs/self-hosting/) भी मौजूद है।

यह developer study के लिए अच्छा विकल्प है, क्योंकि कमांड्स याद रखना polished notes से शुरू नहीं होता। वह repo instructions, terminal mistakes, copied help text, और उस एक झुंझलाने वाले command से शुरू होता है जिसे आप बार-बार भूलकर थक चुके हैं।

## याद रखने लायक नियम

पूरा terminal याद करने की कोशिश मत कीजिए।

उन command decisions को याद कीजिए जो बार-बार आपका काम रोकते हैं।

तभी **टर्मिनल कमांड्स सीखना** का मतलब "एक और cheat sheet save कर लो" नहीं रहता। उसका मतलब यह होता है कि blinking cursor के सामने आपको सही command सच में याद आ जाए।

अगर यह interview prep से भी जुड़ता है, तो साइट पर सबसे नज़दीकी workflow [कोडिंग इंटरव्यू के लिए फ्लैशकार्ड्स कैसे इस्तेमाल करें](/hi/blog/how-to-use-flashcards-for-coding-interviews/) है।
