---
title: "Bestu opnu námsspjaldaöppin 2026: 6 FOSS-valkostir bornir saman"
description: "Berðu saman sex opin námsspjaldaöpp sem enn er unnið að: umfang frumkóða, gögn án nets, samstillingu, Anki-innflutning, útflutning, eigin hýsingu og endurheimt."
date: "2026-08-02"
updated: "2026-09-05"
image: "/blog/best-open-source-flashcard-apps-2026-v2.png"
keywords:
  - "bestu opnu námsspjaldaöppin"
  - "opið námsspjaldaapp"
  - "opinn hugbúnaður fyrir dreifða upprifjun"
  - "námsspjöld í eigin hýsingu"
  - "námsspjaldaapp án nets"
  - "opinn valkostur við Anki"
  - "FOSS námsspjöld"
---

Anki er enn besta opna námsspjaldaappið fyrir flesta árið 2026. Samanburðurinn verður áhugaverðari þegar opinn frumkóði er ekki eina ófrávíkjanlega krafan þín.

Kannski þarftu vefapp á eigin þjóni. Eða spjaldastokk sem þú getur lesið sem venjulegan Markdown-texta. Eða einkaglósukerfi sem býr til námsspjöld. Þessar kröfur leiða þig að ólíkum vörum og opin GitHub-kóðageymsla sker ekki úr um valið.

Opið skjáborðsforrit getur verið hluti af vörufjölskyldu með lokuðu iPhone-appi. Docker-gámur getur hýst vefviðmót án þess að samstilla við uppsett öpp. Við innflutning getur textinn skilað sér þótt sniðmát, margmiðlun og margra ára upprifjunarsaga sem gerði safnið gagnlegt glatist.

Sex verkefni stóðust þessa yfirferð. Ég bar saman frumkóða þeirra og leyfi, nýjustu stöðugu útgáfu, staðbundin gögn, upprifjunarkerfi, samstillingu, flutning úr Anki, útflutning og nákvæmlega hvaða hluta má hýsa sjálfur. Síðasta atriðið skiptir meira máli en flestir eiginleikalistar gefa til kynna.

> **Upplýsingar um tengsl höfundar:** Ég heiti Kirill Markin og þróa [Nibomo](https://nibomo.com/), eitt af öppunum sex hér að neðan. MIT-kóðageymsla þess nær yfir vefappið, öpp fyrir einstök stýrikerfi, bakenda, samstillingu og innviði. Ég set það ekki í fyrsta sæti. Anki er öruggara grunnval, Mnemosyne hefur rótgrónari leið fyrir flutning úr Anki og nokkrir valkostir hér eru mun einfaldari í rekstri.

**Staðreyndir yfirfarnar:** 5. september 2026. Gerður er greinarmunur á stöðugum útgáfum og vinnu sem aðeins er til á aðalgrein kóðageymslu.

![Göngumaður ber saman sex opna bakpoka og prófar varabúnað áður en hann velur opið námsspjaldaapp](/blog/best-open-source-flashcard-apps-2026-v2.png)

## Stutta svarið

| Helsta krafan þín | Besti kosturinn | Ástæðan | Hvað þarf að prófa fyrst |
| --- | --- | --- | --- |
| Áreiðanlegt almennt kerfi eða flókið safn sem þegar er til | [Anki](https://apps.ankiweb.net/) | Rótgróið spjalda- og sniðmátakerfi, FSRS, viðbætur, stuðningur við mörg tæki og ítarlegir útflutningspakkar | Opinbera iOS-appið og AnkiWeb eru ekki hluti af opnum skjáborðskóðanum; eigin hýsing veitir samstillingu en ekki AnkiWeb |
| Sérhæfður valkostur fyrir skjáborð með rótgrónum Anki-innflutningi | [Mnemosyne](https://mnemosyne-proj.org/) | Staðbundið nám, innflutningur á Anki-spjaldategundum og námsgögnum og samstillingarþjónn sem þú getur rekið sjálfur | Útgáfa 2.11 er enn nýjasta stöðuga útgáfan; á Android má rifja upp en ekki breyta spjöldum |
| Glósur og námsspjöld í einum staðbundnum þekkingargrunni | [SiYuan](https://b3log.org/siyuan/en/) | Uppsett öpp sem virka án nets, innbyggt FSRS og fullbúið vefapp í Docker | Docker-útgáfan samstillist ekki við uppsettu öppin og nokkrar inn- og útflutningsaðgerðir eru ekki í boði í Docker |
| Frumkóði fyrir vef, síma, bakenda og innviði | [Nibomo](https://github.com/kirill-markin/flashcards-open-source-app) | Ein sameiginleg MIT-kóðageymsla með skjalfestri uppsetningu fyrir rekstur | Studda rekstrarumhverfið byggist á AWS og gögn tapast við flutning úr Anki |
| Nýrra skjáborðsapp sem byggir á staðbundnum gögnum og flytur APKG beint inn | [Recall](https://github.com/Madlezz/Recall) | FSRS, skjáborðsútgáfur, PWA, staðbundnir gagnagrunnar og valfrjáls dulkóðuð miðlun | Innflutningur varðveitir aðeins stöðumynd upprifjunaráætlunar, vinnur úr fyrstu tveimur reitum færslu og sleppir hljóði |
| Læsilegir Markdown-stokkar sem eru óháðir nettengingu | [Essentialist](https://github.com/essentialist-app/essentialist) | Einfaldar stokkskrár og skjáborðs-/Android-app sem er sérstaklega hannað til notkunar án nets | Engin samstilling er innbyggð og framvinda er vistuð í sérstökum földum gagnagrunni |

Þetta er ekki stigagjöf fyrir eiginleika. Byrjaðu á því sem má ekki bregðast. Ef þú átt tíu ára upprifjunarsögu í Anki skiptir varðveisla gagna meira máli en snyrtilegra viðmót. Ef þú rekur kerfi fyrir skóla geta aðgangur í vafra og sannreynd endurheimt skipt meira máli en viðbætur.

## Hvað taldist opið námsspjaldaapp

Ég notaði fjögur skilyrði:

1. **Frumkóði kjarnans í námsvirkninni er birtur með skýru opnu hugbúnaðarleyfi.** Safn samþættinga utan um óbirtan kjarna telst ekki með.
2. **Dreifð upprifjun virkar nú þegar.** Atriði á þróunaráætlun eða almennur spurningaleikur duga ekki.
3. **Til er útgefin forritsútgáfa eða skýrt skjalfest opinber uppsetningarleið.** Nýlegar kóðabreytingar einar og sér gera frumgerð ekki að öruggri ráðleggingu.
4. **Opinberar heimildir lýsa gagnavinnslunni nægilega vel til að hægt sé að yfirfara hana.** Ég þurfti skýr svör um staðbundna geymslu, samstillingu, inn- og útflutning eða hýsingu, ekki óljóst loforð um að notendur „eigi gögnin sín“.

Fjöldi stjarna réð ekki úrslitum. Stjörnur umbuna aldri og kynningu ekki síður en því hversu vel vara hentar. Þroski skiptir þó máli. Anki, Mnemosyne og SiYuan hafa rótgrónar útgáfur og rekstrarfyrirkomulag. Recall og Essentialist fengu afmarkaðri hlutverk því virkni útgefinna útgáfa þeirra er nægilega vel skjalfest til að hægt sé að mæla með þeim við ákveðnar aðstæður.

Það þarf líka að athuga tvennt áður en fullyrt er að verkefni sé enn haldið við. Útgáfumerki segir til um hvað notendur geta sett upp; aðalgreinin sýnir hvert verkefnið stefnir. Essentialist er skýrasta dæmið. Handbók stöðugu útgáfunnar nefnir SM-2 en núverandi aðalgrein nefnir FSRS. Þess vegna er SM-2 skráð fyrir stöðugu útgáfuna í töflunni hér að neðan.

## Sex FOSS-námsspjaldaöpp borin saman

| App | Stöðug útgáfa sem var yfirfarin | Stýrikerfi og viðmót | Gögn án nets | Upprifjunarkerfi | Samstilling | Flutningur úr Anki og leið út aftur | Hvað má hýsa sjálfur |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Anki** | [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1), 5. ágúst 2026 | Windows, macOS, Linux; sérstök Android- og iOS-öpp; AnkiWeb | Uppsett öpp nota staðbundin söfn við nám | FSRS eða eldra SM-2 | AnkiWeb eða opinberi samstillingarþjónninn í eigin hýsingu | Flytur inn texta, APKG/COLPKG og Mnemosyne-gagnagrunna; flytur út texta eða pakka með valfrjálsri margmiðlun og upprifjunargögnum | **Aðeins samstillingarþjónn.** Ekkert AnkiWeb eða námsviðmót í vafra í eigin hýsingu |
| **Mnemosyne** | [2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11), 12. nóvember 2023; vinna í kóðageymslu hélt áfram 2026 | Windows, macOS, Linux, Android; takmörkuð upprifjun í vafra | Skjáborðsforritið geymir gögn staðbundið; Android býður upprifjun án nets en ekki breytingar | Aðlögun byggð á mati á því hversu vel svarið mundist, á kvarðanum 0–5 | Innbyggð samstilling við skjáborðstölvu eða vél án skjáviðmóts | Opinber gögn lýsa fullum Anki-innflutningi með sérsniðnum spjaldategundum og námsgögnum; útflutningur til deilingar er ekki fullt öryggisafrit | **Samstilling og takmörkuð upprifjun í vafra.** Vefþjónninn hefur enga öryggiseiginleika |
| **SiYuan** | [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2), 30. ágúst 2026 | Windows, macOS, Linux, Android, iOS, HarmonyOS; vafri í gegnum Docker | Uppsett öpp geyma vinnusvæðið staðbundið | FSRS | Greidd opinber samstilling með enda-í-enda dulkóðun eða greidd S3/WebDAV-samþætting við ytri geymslu | Almenna appið flytur inn Markdown/gögn og flytur út nokkur skjala- og gagnasnið; enginn skjalfestur APKG-innflutningur | **Fullt vefapp.** Docker samstillist ekki við uppsett öpp og þar vantar sumar inn- og útflutningsaðgerðir |
| **Nibomo** | [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0), 1. september 2026 | Vefur, iOS, Android | IndexedDB á vefnum; SQLite á iOS; Room yfir SQLite á Android; staðbundnar breytingar bíða í röð eftir samstillingu | FSRS | Hýstur bakendi eða bakendi sem rekstraraðili setur upp | Eigin ZIP-snið flytur spjöld, merki, lýsigögn um uppruna og tengda margmiðlun, en ekki stokka, námsstöðu, stillingar eða reikninga; enginn APKG-innflutningur | **Allur vefurinn og bakendinn.** Rekstraruppsetning byggist á AWS; eigin útgáfur af símaöppum eru byggðar sérstaklega |
| **Recall** | [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0), 31. júlí 2026 | Windows, macOS, Linux; uppsetjanlegt PWA | SQLite á skjáborði; IndexedDB í vafra; enginn reikningur nauðsynlegur og fjarmælingar óvirkar sjálfgefið | FSRS | Samstilling möppu á skjáborði eða valfrjáls dulkóðuð miðlun með Cloudflare Worker/R2 | APKG-innflutningur á skjáborði les fyrstu tvo reitina, stokka, merki, nálgaða stöðumynd upprifjunaráætlunar og myndir; útflutningur í JSON og Recall-safnskrá | **Aðeins dulkóðuð miðlun stöðumynda.** Hún hýsir ekki PWA-appið |
| **Essentialist** | [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22), 10. október 2025; vinna við frumkóða hélt áfram 2026 | Android APK, macOS DMG, Linux Flatpak; Windows byggt úr frumkóða | Enginn netaðgangur; efni stokka er Markdown | Stöðug útgáfa: SM-2; aðalgrein: FSRS | Engin | Markdown varðveitir spjaldaefni; falinn fylgigagnagrunnur varðveitir framvindu | **Ekkert að hýsa.** Taktu afrit af Markdown-skránni og fylgigagnagrunninum saman |

## 1. Anki er öruggasta grunnvalið

Anki stendur sig best í atriðunum sem vekja minnsta athygli. Það getur geymt flóknar færslugerðir, búið til fleiri en eitt spjald úr sömu færslu með sniðmátum, haldið margmiðlun með safninu og varðveitt margra ára upprifjunargögn. Stöðuga skjáborðsútgáfan í þessari yfirferð er [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1). Nýrri útgáfan 26.09b2 er merkt sem beta og er því ekki viðmiðið hér.

Það er misjafnt hvað er opið. [Skjáborðskóðageymslan er með AGPL-3.0-or-later-leyfi](https://github.com/ankitects/anki/blob/26.08.1/LICENSE), með tilgreindum undantekningum fyrir íhluti sem fylgja með. [AnkiDroid](https://github.com/ankidroid/Anki-Android) er sjálfstætt opið Android-verkefni. AnkiMobile og AnkiWeb eru opinberir hlutar vörunnar en frumkóði þeirra er ekki í þessum kóðageymslum. Nánari skýring er í [Er Anki opinn hugbúnaður?](/blog/is-anki-open-source/).

Uppsett öpp geyma söfn staðbundið, svo venjuleg upprifjun virkar án tengingar. AnkiWeb er vefhlutinn. Ef notkun án nets ræður valinu greinir [Virkar Anki án nets?](/blog/does-anki-work-offline/) á milli þess sem helst staðbundið og þess sem bíður eftir samstillingu.

Anki styður [FSRS og eldra upprifjunarkerfið sitt](https://docs.ankiweb.net/deck-options.html). Útflutningssnið þess gefa besta grunninn að gagnaflutningi meðal þessara appa. [COLPKG inniheldur allt safnið ásamt upprifjunaráætlunum](https://docs.ankiweb.net/exporting.html), en APKG-útflutningur getur innihaldið upprifjunargögn og margmiðlun þegar þeir valkostir eru valdir. Anki flytur líka inn texta, Anki-pakka og Mnemosyne 2.0-gagnagrunna.

Þótt upprunapakkinn innihaldi mikið tryggir það ekki fullkominn innflutning annars staðar. Móttökukerfið þarf enn að skilja sniðmát, reglur um spjaldagerð, margmiðlunartilvísanir og reiti upprifjunarkerfisins. Það hefur einfaldlega meiri upplýsingar til að vinna með en úr CSV-skrá.

[Opinberi þjónninn fyrir eigin hýsingu](https://docs.ankiweb.net/sync-server.html) er vísvitandi einfaldur. Hann samstillir samhæf Anki-öpp; hann býður hvorki AnkiWeb, upprifjun í vafra né reikningagátt. Hann hlustar sjálfgefið á ódulkóðuðu HTTP og leiðbeiningarnar mæla með því að hafa hann á staðarneti eða setja VPN eða HTTPS-baklægan milliþjón fyrir framan hann. Útgáfur biðlara og þjóns þurfa líka að vera samhæfar.

Veldu Anki þegar varðveisla safnsins, sniðmát, viðbætur eða stuðningur við mörg tæki eru í forgangi. Leitaðu annað þegar afmörkuð krafa, svo sem vefviðmót í eigin hýsingu eða að allur frumkóði símaappanna sé birtur, skiptir meira máli.

## 2. Mnemosyne heldur staðbundnu námi einföldu

Mnemosyne er námsforrit fyrir skjáborð og gerir ekki tilraun til að vera annað. Þekkingargrunnur eða skýjaþjónusta fylgja ekki með í kaupbæti. Þú færð staðbundinn gagnagrunn, hefðbundna dreifða upprifjun, Android-app til upprifjunar og samstillingarþjón sem getur keyrt á skjáborðstölvu eða vél án skjáviðmóts.

Nýjasta stöðuga útgáfan er enn [2.11 frá nóvember 2023](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11). Kóðageymslan fékk breytingar árið 2026 en þær eru ekki þar með komnar í stöðugan uppsetningarpakka. Prófaðu 2.11 á stýrikerfunum sem þú ætlar að nota næstu árin.

Eitt leyfismerki segir heldur ekki alla söguna. [Leyfisyfirlitið í rótinni](https://github.com/mnemosyne-proj/mnemosyne/blob/master/LICENSE) tilgreinir LGPL v3 fyrir openSM2sync en aðra skilmála fyrir afganginn af Mnemosyne. [Leyfi aðalforritsins](https://github.com/mnemosyne-proj/mnemosyne/blob/master/mnemosyne/LICENSE) notar AGPL v3 með viðbótarákvæði um að nafnið Mnemosyne haldist vel sýnilegt í afleiddum verkum og að nánari útfærsla sé rædd við viðhaldsaðila. Lestu þann texta áður en þú dreifir breyttri útgáfu.

[Android-appið býður upprifjun án nets en getur ekki breytt spjöldum](https://mnemosyne-proj.org/help/android-client). Önnur tæki geta notað upprifjun í vafra í gegnum þjón sem er ræstur úr skjáborðsforritinu, en opinbera eiginleikasíðan varar við að þjónninn hafi enga öryggiseiginleika. Þetta er handhægt viðmót á staðarneti, ekki fullbúið opinbert vefapp.

Innflutningurinn er sterkasta ástæðan til að velja Mnemosyne í stað þess að halda sig við Anki. Opinbera eiginleikasíðan lýsir [fullum Anki-innflutningi, þar á meðal sérsniðnum spjaldategundum og námsgögnum](https://mnemosyne-proj.org/features). [Innbyggð samstilling](https://mnemosyne-proj.org/help/syncing) sameinar spjöld og námsgögn og getur notað vél undir þinni stjórn.

Venjulega útflutningsskipunin getur villt um fyrir þeim sem vilja taka öryggisafrit. Hún er ætluð til að deila völdum spjöldum og sleppir námsgögnunum þínum. Til að flytja eða endurheimta allt kerfið segja [leiðbeiningarnar um margar tölvur](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers) þér að afrita alla gagnamöppuna.

Mnemosyne er sterkasti opni valkosturinn hér fyrir þá sem vilja námsspjaldaapp í stað Anki. Á móti kemur að langt er á milli stöðugra útgáfa, möguleikar á breytingum í síma eru takmarkaðir og vefviðmótið þarf að afmarka vandlega á netinu.

## 3. SiYuan hentar þegar glósurnar eru grunnurinn

SiYuan er þekkingarstjórnunarapp sem leggur áherslu á friðhelgi og hefur námsspjöld innbyggð í sama kerfi efnisblokka og skjala. Það er gagnlegt þegar glósurnar þínar verða að upprifjunarefni. Það er hins vegar mikið kerfi ef þú vilt bara spjaldaröð.

[AGPL-3.0-kóðageymslan](https://github.com/siyuan-note/siyuan) tengir saman viðmót, kjarna, símaöpp, gagnalag og FSRS-hluta. [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2) er stöðuga útgáfan sem var yfirfarin hér. Skjáborðs- og símaöpp geyma vinnusvæðið staðbundið og halda áfram að virka án nets.

Samstilling er ekki innifalin í ókeypis leiðinni með staðbundinni geymslu. [Opinbera verðskráin](https://b3log.org/siyuan/en/pricing.html) býður opinbera samstillingu með enda-í-enda dulkóðun í áskrift, en greiddir Pro-eiginleikar bæta við samþættingu við þína eigin S3- eða WebDAV-geymslu. Verkefnið varar líka við að setja vinnusvæði sem er í notkun í almenna skráasamstillingarmöppu, því samtímabreytingar geta skemmt eða yfirskrifað gögn.

Docker keyrir fullbúið vefapp en verður ekki að samstillingarþjóni fyrir uppsettu öppin. [Docker-leiðbeiningarnar fyrir v3.8.2](https://github.com/siyuan-note/siyuan/blob/v3.8.2/README.md#docker-hosting) segja að skjáborðs- og símaöpp geti ekki tengst honum. Í Docker vantar líka Markdown-innflutning og útflutning í PDF, HTML og Word. Þessar aðgerðir eru til í uppsetta forritinu, svo það væri villandi að afrita almenna eiginleikalistann yfir í áætlun um Docker-uppsetningu.

Ég fann enga opinbera leið til að flytja APKG inn. SiYuan getur flutt Markdown og eigin gagnasnið, en Anki-safn þarf að byggja upp aftur með meiri yfirlegu.

Veldu SiYuan þegar þekkingargrunnurinn er aðalatriðið og námsspjöldin eiga heima inni í honum. Ef þú vilt beinan staðgengil fyrir Anki er skýrara hvað færist milli kerfa hjá Mnemosyne og Anki.

## 4. Nibomo birtir stærri hluta kerfisins og felur þér reksturinn

Nibomo birtir frumkóða stærri hluta vörunnar en aðrir í þessum samanburði. Sameiginlega MIT-kóðageymslan inniheldur vefappið, iOS- og Android-öpp, bakenda, auðkenningarþjónustu, samstillingu, stjórnunarapp, gagnagrunnsbreytingar og AWS-innviði. Stöðuga útgáfan sem er notuð hér er [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0). Síðari vinna á aðalgrein telst ekki til útgefinnar virkni.

[Kerfishönnunin](/docs/architecture/) miðar við staðbundna notkun fyrst, en „án nets“ merkir ekki alveg það sama í öllum öppunum. Í vefappinu eru gögnin í IndexedDB grunnurinn sem staðbundin notkun byggist á. iOS notar SQLite og Android notar Room yfir SQLite. Breytingar eru skrifaðar staðbundið og settar í útsendingarröð áður en þær samstillast. Þessi hönnun ræður við rofna tengingu; hún gerir ekki vafrageymslu varanlega og leysir þig ekki undan því að prófa ræsingu frá grunni á hverju tæki.

Eigin ZIP-pakki Nibomo er snið til að flytja efni, ekki öryggisafrit af reikningi. Í v1.23.0 inniheldur [pakkaskemað](https://github.com/kirill-markin/flashcards-open-source-app/blob/v1.23.0/apps/backend/src/workspacePackages/types.ts) efni fram- og bakhliðar, merki, spjaldategund, lýsigögn um uppruna og lýsigögn pakkans; margmiðlun sem vísað er í fylgir sérstaklega. Það inniheldur ekki skipulag stokka, upprifjunarsögu, FSRS-stöðu, vinnusvæðisstillingar eða reikninga.

Enginn APKG-innflutningur er í v1.23.0. Skjalfesta [leiðin fyrir flutning úr Anki með TXT/CSV](/blog/migrate-from-anki-txt-export-open-source-flashcards/) notar útfluttan texta til að byggja spjöld upp aftur og krefst þess að notandi fari yfir niðurstöðuna. Sniðmát, staða upprifjunaráætlunar, skipulag stokka og margmiðlun í pakkanum flytjast ekki sjálfkrafa með þessari leið. Hún er skynsamleg fyrir einfaldan textastokk en lélegur kostur fyrir mikið sérsniðið safn.

[Leiðbeiningarnar um eigin hýsingu](/docs/self-hosting/) eru jafn skýrar. Rekstraruppsetningin notar AWS CDK-kerfi með RDS, Cognito, API Gateway og Lambda, S3 og CloudFront, leyndarmálum, viðvörunum og öryggisafritum. Cloudflare DNS, Resend-tölvupóstur og Sentry-stillingar eru utan AWS. Docker Compose keyrir staðbundið þróunarumhverfi; það er ekki studdi rekstrarpakkinn. Rekstraraðilar sem vilja eigin iOS- eða Android-útgáfur byggja þær og dreifa þeim sérstaklega.

Veldu Nibomo þegar aðgangur að öllum frumkóðanum fyrir vef, uppsett öpp og bakenda réttlætir rekstrarvinnuna. Veldu Anki eða Mnemosyne þegar varðveisla núverandi safns er strangari krafa.

## 5. Recall er nútímalegt, en skoðaðu innflutninginn vandlega

Recall er yngsta verkefnið meðal aðalráðlegginganna. Það komst á listann vegna þess að [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0) býður númeraðar skjáborðsútgáfur, uppsetjanlegt PWA, skýrt skilgreinda staðbundna geymslu, FSRS, gagnaútflutning og skjalfesta hönnun samstillingar í eigin hýsingu.

Skjáborðsappið með MIT-leyfi notar SQLite; PWA-appið notar IndexedDB. Hvorugt krefst reiknings og verkefnið segir fjarmælingar óvirkar sjálfgefið. Skjáborðsútgáfur eru til fyrir Windows, macOS og Linux.

APKG-innflutningurinn er gagnlegur en orðalagið „review history“ (upprifjunarsaga) í README lofar of miklu miðað við útfærsluna í útgáfunni. [Frumkóði innflutningsins í v1.3.0](https://github.com/Madlezz/Recall/blob/v1.3.0/src-tauri/src/anki_import.rs) les ekki upprifjunarskrá Anki. Hann les núverandi stöðu spjalds, bil milli upprifjana, fjölda endurtekninga og tilvika þar sem áður lært spjald gleymdist, auk FSRS-gilda fyrir stöðugleika og erfiðleika þegar Anki vistaði þau. Fyrir eldri spjöld án þessara FSRS-reita áætlar Recall gildin út frá SM-2-gildum.

Umbreyting efnis hefur líka takmarkanir. Innflutningurinn notar fyrstu tvo reiti færslu sem fram- og bakhlið í stað þess að endurgera færslugerðir og sniðmát Anki. Hann heldur nöfnum stokka og merkjum. Hann pakkar út myndum á algengum sniðum og endurskrifar tilvísanir í þær, en sleppir hljóði og annarri margmiðlun. Þar sem innflutningurinn er Tauri-skipun er beinn APKG-flutningur skjáborðseiginleiki, ekki eiginleiki PWA-appsins í vafra.

Þetta er mun betra en að byggja allt upp aftur úr hreinum texta en varðveitir ekki safnið að fullu. Prófaðu eyðufyllingar, fleiri spjöld úr sömu færslu, aukareiti, HTML/CSS, myndir, hljóð, dagsetningar næstu upprifjana og endurteknar færslur áður en þú treystir á stóran flutning.

Recall hefur tvær samstillingarleiðir. Skjáborðsappið getur skrifað stöðumynd í möppu sem Dropbox, Drive eða annað skráasamstillingarverkfæri sér um. Valfrjálsi miðlunarþjónninn notar Cloudflare Worker og R2-geymsluhólf. Samkvæmt [samstillingarhönnun útgáfunnar](https://github.com/Madlezz/Recall/blob/v1.3.0/docs/SYNC.md) dulkóða öppin stöðumyndir með AES-GCM fyrir upphleðslu; miðlunarþjónninn sér dulkóðaðan texta en hvorki spjaldagögn né lykilinn. Við uppfærslur er notuð bjartsýn stýring á samtímabreytingum (optimistic concurrency) og reynt einu sinni aftur ef árekstur verður, en þær sameina samt heilar stöðumyndir í stað einstakra reita. Enginn opinber miðlunarþjónn er fjármagnaður af viðhaldsaðilum; þú setur hann upp og slærð inn slóðina.

Útflutningur í JSON og Recall-safnskrá gefur þér leið út aftur. Endurheimtu slíka skrá í hreint notandasnið áður en þú kallar hana öryggisafrit.

Veldu Recall þegar þú vilt nútímalegt skjáborðs-/PWA-app sem byggir á staðbundnum gögnum og sættir þig við ungt verkefni og innflutning sem varðveitir gagnlega stöðumynd fremur en allt Anki-kerfið.

## 6. Essentialist gerir stokkinn læsilegan, en námsstaðan fylgir ekki í sömu skrá

Essentialist er umfangsminnsti kosturinn hér. Hver stokkur er Markdown-skrá sem þú getur opnað í textaritli, geymt í útgáfustýringu eða afritað með venjulegum skráaverkfærum. Forritið sendir vísvitandi engar netbeiðnir.

Nýjasta stöðuga útgáfan er [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22). Henni fylgja Android-, macOS- og Linux-útgáfur; Windows-notendur byggja úr frumkóða. [README útgáfunnar](https://github.com/essentialist-app/essentialist/blob/v0.3.22/README.md) tilgreinir SM-2 sem upprifjunarkerfið.

[README á aðalgrein](https://github.com/essentialist-app/essentialist/blob/main/README.md) tilgreinir nú FSRS og breytingar voru gerðar á frumkóðanum árið 2026. Það sýnir hvert verkefnið stefnir en er ekki ástæða til að merkja tilbúna útgáfu frá 2025 sem FSRS-útgáfu.

Markdown geymir líka minna en virðist í fyrstu. Spjaldatextinn er í sýnilegu skránni en framvindan í földum gagnagrunni sem heitir `.<deck file>.db`. Ef þú afritar `sample.md` án `.sample.md.db` varðveitast spurningar og svör en námsstaðan glatast.

Hvorki er innbyggð samstilling milli tækja né þjónn. Þú getur sett skrárnar í eigin samstillta möppu en þá verður það þitt verkefni að leysa árekstra og endurheimta gögn.

Veldu Essentialist þegar læsilegt Markdown og vinna án netnotkunar eru aðalatriðin. Þetta er ekki hnökralaust fjöltækjakerfi og ein sýnileg skrá er ekki fullt öryggisafrit.

## Fjögur virk verkefni sem vert er að fylgjast með

Unnið var að þessum verkefnum árið 2026. Þau eru utan aðallistans því áhugaverður frumkóði einn nægir ekki til að mæla með vöru.

| Verkefni | Hvað er þegar til staðar | Hvað kemur enn í veg fyrir sæti á aðallistanum |
| --- | --- | --- |
| [HSK Nest](https://github.com/s-mberli/hsknest) | AGPL-frumkóði, FSRS/SM-2/Leitner-upprifjunarkerfi, Docker-uppsetning, rekin þjónusta, CSV-innflutningur og gagnaútflutningur | Stofnað í júlí 2026; engin númeruð forritsútgáfa. Útgáfan á GitHub er hljóðpakki en ekki útgáfa af appinu |
| [Openlet](https://github.com/ChloeVPin/openlet) | MIT-vefapp með FSRS, CSV-innflutningi, myndahulu og skjalfestri Supabase/Vercel-hönnun | Engin merkt útgáfa og opinber gögn skilgreina ekki enn að fullu notkun án nets, útflutning og endurheimt í eigin hýsingu |
| [Prep](https://github.com/Zamua/prep-app) | MIT-frumkóði, FSRS, hýst notkun og skjalfest uppsetning á celld-keyrsluumhverfinu sem má hýsa sjálfur | Engin merkt útgáfa; eigin hýsing krefst líka reksturs celld og hlutageymslu, ekki aðeins uppsetningar á sjálfstæðu námsspjaldaappi |
| [Kado](https://github.com/LisandroDiMeo/kado-app) | Kotlin-símaapp með GPLv3-leyfi, FSRS/SM-2, Android-útgáfa og APKG-innflutningur með sniðmátum og margmiðlun | Stofnað árið 2026; iOS þarf að byggja úr frumkóða og opinber gögn skilgreina ekki almenna samstillingu milli síma |

Nokkur kunnugleg nöfn falla á einfaldari skilyrðum. [Opna kóðageymsla Mochi](https://github.com/mochi-cards/open-source) er safn samþættinga en ekki kjarni appsins. [Scholarsome](https://github.com/hwgilbert16/scholarsome#features-coming-soon) er opið og má hýsa sjálfur, en opinbert README setur dreifða upprifjun enn undir „Features coming soon“. [OpenCards](https://github.com/holgerbrandl/opencards) hefur ekki gefið út nýja útgáfu síðan [v2.5.1 kom í janúar 2017](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1) og engin kóðabreyting hefur borist í kóðageymsluna síðan 2018.

Ef aðgangur að frumkóða er ekki skilyrði nær [víðari samanburðurinn á valkostum við Anki](/is/blog/best-anki-alternatives/) yfir vörur sem svara annarri spurningu.

## Prófaðu gagnaflutning á fimm aðskildum sviðum

„Flytur inn úr Anki“ segir nánast ekkert án nánari skýringar. Flutningur getur tekist á einu sviði en brugðist á fjórum öðrum.

| Svið | Hvað á að bera saman | Villandi merki um árangur |
| --- | --- | --- |
| Efni spjalda | Hvern reit, eyðufyllingarmerkingu, hvert merki, sértákn og endurtekna færslu | Heildarfjöldi spjalda er svipaður |
| Skipulag | Færslugerðir, sniðmát, fleiri spjöld sem verða til úr sömu færslu og undirstokka | Texti fram- og bakhliða birtist einhvers staðar |
| Margmiðlun | Að myndir og hljóð hafi verið afrituð, tilvísanir virki staðbundið og efnið virki án nets | Innflutningurinn þekkti skráarnöfnin |
| Námsstaða | Upprifjunarskrá, stöðu, dagsetningu næstu upprifjunar, bil, tilvik þar sem áður lært spjald gleymdist og stika upprifjunarkerfisins | Innflutt spjöld birtast en byrja aftur sem ný án þess að það sé tekið fram |
| Leið út og endurheimt | Að skjalfestur útflutningur eða öryggisafrit geti endurbyggt sama kerfi annars staðar | Læsilegur textaútflutningur er tekinn sem fullt öryggisafrit |

Búðu til einn vísvitandi erfiðan prófunarstokk áður en þú flytur raunverulega safnið. Hafðu með aukareiti, eyðufyllingar, sniðmát í báðar áttir, undirstokka, merki, myndir, hljóð og næga upprifjunarsögu til að sjá hvort móttökukerfið varðveitti hana.

Haltu óbreyttu öryggisafriti af upprunanum. Eftir innflutning skaltu bera sérstaklega saman fjölda færslna, spjalda og margmiðlunarskráa. Skoðaðu dagsetningar næstu upprifjana í stað þess að treysta skilaboðum um að „upprifjunaráætlun hafi verið flutt inn“. Rifjaðu upp án nets á hverju tæki sem þú ætlar að nota. Gerðu síðan tímabundnar prófunarbreytingar sem stangast á á tveimur tækjum og fylgstu með samstillingunni.

Notaðu bæði kerfin í nokkra daga. Að eyða gamla safninu er síðasta skrefið, ekki sönnun þess að nýja kerfið hafi virkað.

## Eigin hýsing er ekki fullreynd fyrr en endurheimt tekst

Vörurnar hér að ofan nota „eigin hýsingu“ um mjög ólíka hluti:

- Anki og Mnemosyne keyra **samstillingarþjónustur**, en uppsett öpp eru áfram námsviðmótið.
- SiYuan Docker keyrir **vefapp** sem uppsettu öppin geta ekki notað sem samstillingarþjón.
- Recall keyrir **dulkóðaða miðlun stöðumynda**, ekki PWA-appið sjálft.
- Nibomo setur upp **heilt vef- og bakendakerfi**, en öpp fyrir einstök stýrikerfi eru byggð sérstaklega.
- Essentialist hefur **engan þjón**; það sem þú átt og heldur utan um eru staðbundnu skrárnar.

Þegar þetta er ljóst skaltu prófa hlutann sem rekstraraðilar fresta gjarnan:

1. Búðu til spjöld, hengdu við margmiðlun, kláraðu upprifjanir og samstilltu úr tveimur öppum.
2. Taktu afrit af öllum skjalfestum gagnagrunnum, hlutageymsluhólfum, staðbundnum skrám, leyndarmálum og stillingagildum.
3. Endurheimtu í tóman reikning, tóma vél eða einangraða uppsetningu.
4. Berðu saman fjölda spjalda, margmiðlun, upprifjunarsögu, stöðu væntanlegra upprifjana, innskráningu og samstillingu appanna.
5. Uppfærðu endurheimta afritið og kláraðu aðra umferð upprifjunar.

Ef endurheimtin er enn háð gömlu vélinni ertu með þjónustu í gangi. Þú ert ekki með sannreynt öryggisafrit.

## Algengar spurningar

### Hvert er besta opna námsspjaldaappið árið 2026?

Anki er besta grunnvalið fyrir flesta námsmenn. Það sameinar rótgróið safnkerfi, FSRS, stuðning við mörg tæki og ítarlegustu innbyggðu öryggisafrita- og útflutningssniðin. Fyrirvarinn er að opinbera iOS-appið og vefhlutinn falla ekki undir opnu skjáborðskóðageymsluna og þjónninn fyrir eigin hýsingu veitir samstillingu en ekki nám í vafra.

### Hver er besti opni valkosturinn við Anki?

Mnemosyne er rótgrónasti valkosturinn sem einbeitir sér að þessu verkefni og skjalfestir opinberlega innflutning á sérsniðnum spjaldategundum og námsgögnum úr Anki. Recall er nútímalegra í útliti og flytur APKG-skrár beint inn á skjáborði, en það umbreytir fyrstu tveimur reitum færslu, varðveitir aðeins stöðumynd upprifjunaráætlunar, flytur inn myndir en ekki hljóð og tekur ekki með alla upprifjunarskrána.

### Get ég hýst Anki sjálfur?

Já, þú getur keyrt opinbera samstillingarþjón Anki fyrir samhæf öpp. Hann er hins vegar ekki staðgengill AnkiWeb í eigin hýsingu: ekkert námsviðmót í vafra fylgir honum.

### Þýðir opinn frumkóði að app virki án nets?

Nei. Opinn frumkóði lýsir leyfisskilmálum og aðgangi að kóðanum. Notkun án nets fer eftir því hvar appið geymir gögn og hvaða aðgerðir þurfa þjónustu. Hið gagnstæða gildir líka: app getur geymt gögn staðbundið án þess að birta frumkóða kjarnans.

### Tryggir eigin hýsing að hægt sé að flytja gögnin?

Nei. Eigin hýsing ræður því hvar þjónusta keyrir. Flutningshæfni veltur á útflutningi, fullum öryggisafritum og endurheimt sem þú hefur raunverulega prófað. Gagnagrunnur á þínum þjóni getur samt verið erfiður í flutningi og læsilegan Markdown-stokk getur enn vantað upprifjunarstöðuna sem er geymd í annarri skrá við hliðina á honum.

## Mín ráðlegging

Haltu þig við **Anki** eða veldu það nema einhver takmörkun þess valdi raunverulegu vandamáli. Veldu **Mnemosyne** fyrir markvisst staðbundið nám á skjáborði og rótgróinn Anki-innflutning. Notaðu **SiYuan** þegar námsspjöld eiga heima í stærri þekkingargrunni. Íhugaðu **Nibomo** þegar aðgangur að öllum frumkóða vefs, uppsettra appa og bakenda réttlætir rekstrarumhverfi á AWS. Veldu **Recall** fyrir nútímalegt app sem byggir á staðbundnum gögnum, eftir að þú hefur prófað takmarkanir umbreytingarinnar. Veldu **Essentialist** þegar venjulegt Markdown og engin netnotkun skipta meira máli en samstilling.

Besta opna námsspjaldaappið er ekki kóðageymslan með lengsta eiginleikalistann. Það er appið þar sem umfang frumkóða, gögn án nets, gagnaflutningur, samstilling, hýsing og endurheimt passa við kerfið sem þú ert í raun tilbúinn að bera ábyrgð á.
