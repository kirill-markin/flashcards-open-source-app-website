---
title: गोपनीयता नीति
description: Flashcards के लिए गोपनीयता नीति।
slug: privacy
sections:
  - type: legal_page
    lastUpdated: मार्च 2026
---
## हम क्या एकत्र करते हैं

जब आप hosted cloud beta का उपयोग करते हैं, हम authentication के लिए उपयोग किया गया email address और service चलाने के लिए जरूरी learning data store करते हैं, जिनमें cards, review history, और workspace metadata शामिल हैं। Self-hosted instances हमें data नहीं भेजते जब तक आप अपनी ऐसी copy deploy न करें जो ऐसा करती हो।

## ऑपरेटर

Hosted Flashcards service को Ozma Inc. संचालित करती है। Flashcards को Kirill Markin ने बनाया था, और [ozma.io](https://ozma.io/) hosted service से जुड़ी company website है।

## AI Features

अगर आप hosted app में AI chat का उपयोग करते हैं, तो आपके typed prompts, request के लिए जरूरी card-derived context, uploaded files, uploaded images, और dictated audio या transcription requests server पर configured third-party AI providers को भेजे जा सकते हैं। इस्तेमाल किया गया exact provider request के समय hosted server configuration पर निर्भर करता है।

## हम आपका data कैसे उपयोग करते हैं

आपका data authentication, cloud sync, और optional AI features प्रदान करने के लिए उपयोग होता है। हम आपका data बेचते नहीं हैं और न ही advertising के लिए उपयोग करते हैं। Authentication और workspace access public repository में documented backend services द्वारा संभाले जाते हैं।

## Data Storage

Hosted cloud data AWS infrastructure में store होता है, जिसमें primary application data के लिए Postgres शामिल है। Data transit के दौरान encrypted रहता है, और service operators hosted beta चलाने और debug करने के लिए जरूरी operational logs रख सकते हैं।

## Cookies

हम login flow के लिए `session`, `refresh`, और `logged_in` जैसी authentication cookies का उपयोग करते हैं। Site को काम करने के लिए tracking cookies या third-party analytics की जरूरत नहीं है।

## Data Deletion

Self-hosted instances के लिए आप database को सीधे नियंत्रित करते हैं। Hosted app में आप iOS app से अपना account delete कर सकते हैं, और hosted data removal के लिए अतिरिक्त मदद चाहिए तो support से संपर्क कर सकते हैं।

## Support

Privacy से जुड़े सवालों के लिए [kirill+flashcards@kirill-markin.com](mailto:kirill+flashcards@kirill-markin.com) पर संपर्क करें या [सपोर्ट](/support/) का उपयोग करें।

## Open Source

पूरा codebase open source है। आप ठीक-ठीक audit कर सकते हैं कि application आपके data के साथ क्या करती है।
