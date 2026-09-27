---
title: "Les millors aplicacions de targetes de codi obert el 2026: comparativa de 6 opcions FOSS"
description: "Compara sis aplicacions de targetes de codi obert amb manteniment: codi publicat, dades locals, sincronització, importació d'Anki, exportació, autoallotjament i recuperació."
date: "2026-08-02"
updated: "2026-09-05"
image: "/blog/best-open-source-flashcard-apps-2026-v2.png"
keywords:
  - "millors aplicacions de targetes de codi obert"
  - "aplicació de targetes de codi obert"
  - "repetició espaiada de codi obert"
  - "targetes autoallotjades"
  - "aplicació de targetes sense connexió"
  - "alternativa a Anki de codi obert"
  - "targetes FOSS"
---

Anki continua sent la millor aplicació de targetes de codi obert per a la majoria de persones el 2026. La part interessant comença quan el codi obert no és l'únic requisit irrenunciable.

Potser necessites una aplicació de navegador al teu servidor. O una baralla que puguis llegir com a text Markdown. O un sistema privat de notes que generi targetes. Aquests requisits porten a productes diferents, i un repositori públic a GitHub no basta per decidir.

Un client d'escriptori de codi obert pot conviure amb una aplicació d'iPhone de codi tancat. Un contenidor Docker pot allotjar una interfície de navegador sense sincronitzar els clients natius. Una importació pot recuperar les paraules i perdre les plantilles, els fitxers multimèdia i els anys d'historial de repassos que feien útil la col·lecció.

Sis projectes han superat aquesta revisió. He comparat el codi publicat i la seva llicència, l'última versió estable, les dades locals, la programació dels repassos, la sincronització, la migració des d'Anki, l'exportació i què es pot autoallotjar exactament. Aquest últim punt pesa més del que solen reconèixer les llistes de funcions.

> **Declaració d'interessos:** Soc Kirill Markin i desenvolupo [Nibomo](https://nibomo.com/), una de les sis aplicacions següents. El seu repositori MIT inclou l'aplicació web, els clients natius, el backend, la sincronització i la infraestructura. No l'he situat en primer lloc. Anki és l'opció més segura per defecte, Mnemosyne té una via de migració des d'Anki més consolidada i diverses opcions d'aquesta llista són molt més fàcils d'administrar.

**Dades comprovades:** 5 de setembre de 2026. Les versions estables es distingeixen de la feina que només existeix a la branca predeterminada.

![Un excursionista compara sis motxilles obertes i prova un equip de reserva abans de triar una aplicació de targetes de codi obert](/blog/best-open-source-flashcard-apps-2026-v2.png)

## La resposta curta

| El teu requisit principal | L'opció més adequada | Per què | Què cal provar primer |
| --- | --- | --- | --- |
| Un sistema fiable d'ús general o una col·lecció existent complexa | [Anki](https://apps.ankiweb.net/) | Targetes i plantilles consolidades, FSRS, complements, molts clients i exportacions de paquets completes | L'aplicació oficial d'iOS i AnkiWeb no formen part del codi obert d'escriptori; l'autoallotjament ofereix sincronització, no AnkiWeb |
| Una alternativa d'escriptori centrada en l'estudi amb importació d'Anki consolidada | [Mnemosyne](https://mnemosyne-proj.org/) | Estudi local, importació de tipus de targeta i dades d'aprenentatge d'Anki i un servidor de sincronització que pots administrar | La 2.11 continua sent l'última versió estable; Android permet repassar però no editar |
| Notes i targetes en una mateixa base de coneixement local | [SiYuan](https://b3log.org/siyuan/en/) | Aplicacions natives sense connexió, FSRS integrat i una aplicació de navegador real allotjada amb Docker | Els clients Docker no es poden sincronitzar amb les aplicacions natives i diverses ordres d'importació i exportació no estan disponibles amb Docker |
| El codi del web, el mòbil, el backend i la infraestructura | [Nibomo](https://github.com/kirill-markin/flashcards-open-source-app) | Un únic monorepositori MIT amb un desplegament de producció documentat | La pila de producció admesa se centra en AWS i la migració des d'Anki perd informació |
| Una aplicació d'escriptori més jove que prioritzi les dades locals i importi APKG directament | [Recall](https://github.com/Madlezz/Recall) | FSRS, versions d'escriptori, PWA, bases de dades locals i un servei de retransmissió xifrat opcional | La importació només conserva una instantània de la programació, tracta els dos primers camps de la nota i omet l'àudio |
| Baralles en Markdown llegibles sense dependència de la xarxa | [Essentialist](https://github.com/essentialist-app/essentialist) | Fitxers de baralla de text pla i una aplicació d'escriptori i Android expressament sense connexió | No hi ha sincronització i el progrés es desa en una base de dades oculta separada |

La comparativa no puntua les funcions. Comença pel problema que no et pots permetre tenir. Si tens deu anys de repassos a Anki, la fidelitat de la migració pesa més que una interfície més neta. Si administres un desplegament escolar, l'accés des del navegador i una restauració comprovada poden pesar més que els complements.

## Què he considerat una aplicació de targetes de codi obert

He aplicat quatre criteris:

1. **L'experiència bàsica d'estudi té el codi publicat i una llicència explícita de codi obert.** Un directori d'integracions al voltant d'un nucli no publicat no compta.
2. **La repetició espaiada funciona avui.** Una entrada al full de ruta o un mode de qüestionari genèric no són suficients.
3. **Hi ha una versió distribuïda o un desplegament oficial clarament documentat.** Els commits recents, per si sols, no converteixen un prototip en una recomanació segura.
4. **Les fonts oficials expliquen prou bé com es tracten les dades per poder-ho auditar.** Calien respostes concretes sobre l'emmagatzematge sense connexió, la sincronització, la importació i l'exportació o l'allotjament; una promesa vaga que els usuaris «són propietaris de les seves dades» no bastava.

No he exigit un nombre mínim d'estrelles a GitHub. Premien tant l'antiguitat i la difusió com l'adequació del producte. La maduresa, però, sí que importa. Anki, Mnemosyne i SiYuan tenen versions i models de funcionament consolidats. Recall i Essentialist s'han guanyat un lloc per a usos més concrets perquè el comportament de les versions publicades està prou documentat per fer-ne una recomanació específica.

Dir que un projecte «té manteniment» també exigeix dues comprovacions. Una versió etiquetada diu què poden instal·lar els usuaris; la branca predeterminada diu cap on va el projecte. Essentialist n'és l'exemple més clar. La versió estable documenta SM-2, mentre que la branca actual documenta FSRS. La taula següent indica SM-2.

## Comparativa de sis aplicacions de targetes FOSS

| Aplicació | Versió estable comprovada | Plataformes | Dades sense connexió | Programació dels repassos | Sincronització | Migració des d'Anki i opcions per treure'n les dades | Què es pot autoallotjar |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Anki** | [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1), 5 d'agost de 2026 | Windows, macOS, Linux; clients separats per a Android i iOS; AnkiWeb | Els clients instal·lats permeten estudiar amb col·leccions locals | FSRS o SM-2 clàssic | AnkiWeb o el servidor oficial de sincronització autoallotjat | Importa text, APKG/COLPKG i bases de dades de Mnemosyne; exporta text o paquets amb opcions per incloure fitxers multimèdia i programació | **Només el servidor de sincronització.** No hi ha AnkiWeb autoallotjat ni interfície d'estudi al navegador |
| **Mnemosyne** | [2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11), 12 de novembre de 2023; el repositori va continuar actiu el 2026 | Windows, macOS, Linux, Android; repàs limitat al navegador | Dades locals a l'escriptori; Android permet repassar sense connexió, però no editar | Valoració adaptativa del record de 0 a 5 | Sincronització integrada amb una instància d'escriptori o sense interfície gràfica | Documenta oficialment la importació completa d'Anki amb tipus de targeta personalitzats i dades d'aprenentatge; l'exportació per compartir no és una còpia de seguretat completa | **Sincronització i repàs limitat al navegador.** El servidor de navegador no té funcions de seguretat |
| **SiYuan** | [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2), 30 d'agost de 2026 | Windows, macOS, Linux, Android, iOS, HarmonyOS; navegador mitjançant Docker | Els clients natius desen l'espai de treball localment | FSRS | Sincronització oficial de pagament amb xifratge d'extrem a extrem o integració de pagament amb S3/WebDAV de tercers | L'aplicació general importa Markdown i dades i exporta diversos formats de documents i dades; no hi ha cap importador APKG documentat | **Aplicació de navegador completa.** Docker no pot sincronitzar els clients natius i prescindeix d'algunes ordres d'importació i exportació |
| **Nibomo** | [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0), 1 de setembre de 2026 | Web, iOS, Android | IndexedDB al web; SQLite a iOS; Room sobre SQLite a Android; les escriptures locals entren en una cua de sincronització | FSRS | Backend allotjat o desplegat per qui l'administra | El ZIP propi mou targetes, etiquetes, metadades d'origen i fitxers multimèdia referenciats, però no baralles, estat d'aprenentatge, configuració ni comptes; no hi ha importador APKG | **Pila web i backend completa.** El desplegament de producció se centra en AWS; les compilacions natives privades es fan a part |
| **Recall** | [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0), 31 de juliol de 2026 | Windows, macOS, Linux; PWA instal·lable | SQLite a l'escriptori; IndexedDB al navegador; sense compte ni telemetria per defecte | FSRS | Sincronització de carpetes a l'escriptori o servei opcional de retransmissió xifrat amb Cloudflare Worker/R2 | La importació APKG d'escriptori llegeix els dos primers camps, baralles, etiquetes, una instantània aproximada de la programació i imatges; exporta JSON i arxius de Recall | **Només el servei de retransmissió d'instantànies xifrades.** No allotja la PWA |
| **Essentialist** | [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22), 10 d'octubre de 2025; el codi va continuar rebent canvis el 2026 | APK d'Android, DMG de macOS, Flatpak de Linux; Windows compilat des del codi | Sense accés a la xarxa; el contingut de les baralles és Markdown | Versió estable: SM-2; branca predeterminada: FSRS | Cap | El Markdown conserva el contingut de les targetes; una base de dades oculta associada conserva el progrés | **Res per allotjar.** Cal fer una còpia conjunta del fitxer Markdown i la base de dades associada |

## 1. Anki és l'opció més segura per defecte

Anki guanya en les parts menys vistoses. Pot representar tipus de nota complexos, generar diverses targetes a partir de les plantilles d'una mateixa nota, conservar els fitxers multimèdia amb la col·lecció i mantenir anys de dades de programació. La versió estable d'escriptori d'aquesta revisió és la [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1). La 26.09b2, més nova, està marcada com a beta i, per tant, no és la referència aquí.

L'abast del codi obert varia segons el component. El [repositori d'escriptori té llicència AGPL-3.0-or-later](https://github.com/ankitects/anki/blob/26.08.1/LICENSE), amb excepcions indicades per a components inclosos. [AnkiDroid](https://github.com/ankidroid/Anki-Android) és un projecte de codi obert independent per a Android. AnkiMobile i AnkiWeb són productes oficials, però el seu codi no està inclòs en aquests repositoris. Ho explico amb més detall a [Anki és de codi obert?](/blog/is-anki-open-source/).

Els clients instal·lats conserven col·leccions locals, de manera que el repàs habitual funciona sense connexió. AnkiWeb és la part en línia. Si el factor decisiu és el comportament sense connexió, [Anki funciona sense connexió?](/blog/does-anki-work-offline/) distingeix què es queda al dispositiu i què ha d'esperar la sincronització.

Anki admet [FSRS i el seu algorisme de programació anterior](https://docs.ankiweb.net/deck-options.html). Els seus formats d'exportació són el punt de partida més complet per migrar dins d'aquest grup. Un [COLPKG conté tota la col·lecció amb la programació](https://docs.ankiweb.net/exporting.html), mentre que les exportacions APKG poden incloure informació de programació i fitxers multimèdia si selecciones aquestes opcions. Anki també importa text, paquets d'Anki i bases de dades de Mnemosyne 2.0.

Disposar d'un paquet d'origen tan complet no garanteix una importació perfecta en un altre sistema. La destinació ha d'entendre les plantilles, les regles de generació de targetes, les referències multimèdia i els camps de programació que conté. Simplement té més informació amb què treballar que amb un CSV.

El [servidor oficial autoallotjat](https://docs.ankiweb.net/sync-server.html) té un abast expressament reduït. Sincronitza clients d'Anki compatibles; no ofereix AnkiWeb, repàs al navegador ni un portal de comptes. Per defecte escolta peticions HTTP sense xifrar, i la guia recomana mantenir-lo en una xarxa local o posar-hi al davant una VPN o un servidor intermediari invers amb HTTPS. Les versions del client i del servidor també han de continuar sent compatibles.

Tria Anki si la prioritat és conservar fidelment la col·lecció, les plantilles, els complements o la compatibilitat amb molts clients. Busca una altra opció només quan pesi més un límit concret, com ara necessitar una interfície de navegador autoallotjada o tenir publicat tot el codi de la pila mòbil.

## 2. Mnemosyne se centra en l'estudi local

Mnemosyne sembla una eina d'estudi d'escriptori perquè és exactament això. No hi afegeix una base de coneixement ni una plataforma al núvol. Tens una base de dades local, un flux tradicional de repetició espaiada, una aplicació complementària per repassar a Android i un servidor de sincronització que pot funcionar en un ordinador d'escriptori o sense interfície gràfica.

L'última versió estable continua sent la [2.11, de novembre de 2023](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11). El repositori va rebre canvis el 2026, però això no els converteix en un instal·lador estable. Prova la 2.11 amb els sistemes operatius que vulguis mantenir els pròxims anys.

La llicència també requereix més que una etiqueta. El [mapa de llicències a l'arrel](https://github.com/mnemosyne-proj/mnemosyne/blob/master/LICENSE) assigna LGPL v3 a openSM2sync i condicions separades a la resta de Mnemosyne. La [llicència del programa principal](https://github.com/mnemosyne-proj/mnemosyne/blob/master/mnemosyne/LICENSE) aplica AGPL v3 més una disposició addicional que exigeix mantenir el nom Mnemosyne clarament visible a les obres derivades i acordar amb els responsables del manteniment com ha d'aparèixer exactament. Llegeix el text abans de redistribuir una compilació modificada.

El [client d'Android permet repassar sense connexió, però no editar targetes](https://mnemosyne-proj.org/help/android-client). Altres dispositius poden fer servir un servidor de repàs al navegador iniciat des de l'aplicació d'escriptori, però la pàgina oficial de funcions adverteix que el servidor no té funcions de seguretat. És una interfície pràctica per a una xarxa local, no una aplicació web pública acabada.

La migració és el millor argument de Mnemosyne per no quedar-se simplement a Anki. La pàgina oficial de funcions documenta la [importació completa d'Anki, inclosos els tipus de targeta personalitzats i les dades d'aprenentatge](https://mnemosyne-proj.org/features). La [sincronització integrada](https://mnemosyne-proj.org/help/syncing) combina targetes i dades d'aprenentatge i pot utilitzar una màquina que controles.

L'ordre habitual d'exportació pot enganyar si la fas servir com a còpia de seguretat. Està pensada per compartir targetes seleccionades i omet les dades d'aprenentatge. Per moure o recuperar tot el sistema, la [guia d'ús en diversos ordinadors](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers) indica que cal copiar tot el directori de dades.

Mnemosyne és l'alternativa de codi obert centrada en l'estudi més sòlida d'aquesta llista. A canvi, les versions estables arriben a poc a poc, l'edició al mòbil és limitada i la interfície de navegador necessita un entorn de xarxa ben delimitat.

## 3. SiYuan encaixa quan el sistema real són les notes

SiYuan és una aplicació de gestió del coneixement que prioritza la privacitat, amb targetes integrades en el mateix model de blocs i documents. És útil quan les notes generen el material de repàs. És força infraestructura si només vols una cua de targetes.

El [repositori AGPL-3.0](https://github.com/siyuan-note/siyuan) enllaça la interfície, el nucli, les aplicacions mòbils, la capa de dades i el component FSRS. La [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2) és la versió estable comprovada aquí. Els clients d'escriptori i mòbils desen l'espai de treball localment i continuen funcionant sense connexió.

La sincronització no forma part del nivell gratuït d'emmagatzematge local. La [pàgina oficial de preus](https://b3log.org/siyuan/en/pricing.html) ofereix sincronització oficial amb xifratge d'extrem a extrem dins de la subscripció, mentre que les funcions Pro de pagament afegeixen integracions amb el teu propi emmagatzematge S3 o WebDAV. El projecte també adverteix que no s'ha de posar un espai de treball en ús en una carpeta genèrica de sincronització de fitxers, perquè les edicions simultànies poden corrompre o sobreescriure les dades.

Docker executa una aplicació de navegador real, però no es converteix en un servidor de sincronització per a les aplicacions instal·lades. La [documentació de Docker de la v3.8.2](https://github.com/siyuan-note/siyuan/blob/v3.8.2/README.md#docker-hosting) diu que els clients d'escriptori i mòbils no s'hi poden connectar. Docker també prescindeix de la importació de Markdown i l'exportació a PDF, HTML i Word. Aquestes ordres existeixen a l'aplicació nativa més completa, de manera que copiar la llista general de funcions en un pla de desplegament Docker seria enganyós.

No he trobat cap importador oficial d'APKG. SiYuan pot moure Markdown i els seus propis formats de dades, però una col·lecció d'Anki exigeix una reconstrucció més planificada.

Tria SiYuan quan la base de coneixement sigui el producte principal i les targetes n'hagin de formar part. Si vols substituir Anki directament, Mnemosyne i Anki defineixen amb més claredat què es pot migrar.

## 4. Nibomo publica més parts de la pila, i et demana que les administris

Nibomo publica més parts del producte que cap altra opció d'aquesta comparativa. El monorepositori MIT inclou l'aplicació web, els clients d'iOS i Android, el backend, el servei d'autenticació, la sincronització, l'aplicació d'administració, les migracions de la base de dades i la infraestructura d'AWS. La versió estable utilitzada aquí és la [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0). La feina posterior de la branca predeterminada no es compta com a funcionalitat publicada.

L'[arquitectura](/docs/architecture/) prioritza el funcionament sense connexió, però això significa una cosa lleugerament diferent a cada client. L'aplicació web manté la seva font de dades local de referència a IndexedDB. iOS fa servir SQLite i Android, Room sobre SQLite. Els canvis s'escriuen localment i s'afegeixen a una cua de sortida abans de sincronitzar-se. Aquest disseny gestiona les interrupcions de connexió; no fa permanent l'emmagatzematge del navegador ni elimina la necessitat de provar una arrencada de zero a cada dispositiu.

El paquet ZIP propi de Nibomo és un format per transferir contingut, no una còpia de seguretat del compte. A la v1.23.0, el seu [esquema de paquet](https://github.com/kirill-markin/flashcards-open-source-app/blob/v1.23.0/apps/backend/src/workspacePackages/types.ts) conté el contingut de l'anvers i el revers, etiquetes, tipus de targeta, metadades d'origen i metadades del paquet; els fitxers multimèdia referenciats s'hi adjunten per separat. No conté l'estructura de baralles, l'historial de repassos, l'estat de FSRS, la configuració de l'espai de treball ni els comptes.

La v1.23.0 no té cap importador d'APKG. El [flux documentat de migració amb TXT/CSV d'Anki](/blog/migrate-from-anki-txt-export-open-source-flashcards/) fa servir text exportat per reconstruir les targetes i requereix una revisió humana. Les plantilles, l'estat de programació, l'estructura de baralles i els fitxers multimèdia inclosos no sobreviuen automàticament a aquesta via. És raonable per a una baralla senzilla de text i una mala opció per a una col·lecció molt personalitzada.

La [guia d'autoallotjament](/docs/self-hosting/) és igual d'explícita. Producció fa servir una pila d'AWS CDK amb RDS, Cognito, API Gateway i Lambda, S3 i CloudFront, secrets, alarmes i còpies de seguretat. El DNS de Cloudflare, el correu de Resend i la configuració de Sentry queden fora d'AWS. Docker Compose executa l'entorn de desenvolupament local; no és el paquet de producció admès. Qui vulgui binaris privats d'iOS o Android els ha de compilar i distribuir per separat.

Tria Nibomo quan tenir tot el codi del web, els clients natius i el backend justifiqui aquesta feina d'administració. Tria Anki o Mnemosyne quan el requisit més exigent sigui conservar una col·lecció existent.

## 5. Recall és modern, però cal mirar de prop l'importador

Recall és el projecte més jove de les recomanacions principals. Ha entrat a la llista perquè la [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0) ofereix compilacions d'escriptori amb versió, una PWA instal·lable, emmagatzematge local explícit, FSRS, exportació de dades i un disseny documentat de sincronització autoallotjada.

L'aplicació d'escriptori amb llicència MIT fa servir SQLite; la PWA fa servir IndexedDB. Cap de les dues necessita un compte i el projecte diu que la telemetria està desactivada per defecte. Hi ha versions d'escriptori per a Windows, macOS i Linux.

L'importador d'APKG és útil, però l'expressió «historial de repassos» del README és massa generosa per a la implementació etiquetada. El [codi de l'importador de la v1.3.0](https://github.com/Madlezz/Recall/blob/v1.3.0/src-tauri/src/anki_import.rs) no llegeix el registre de repassos d'Anki. Llegeix l'estat actual de la targeta, l'interval, el nombre de repeticions i d'oblits, i l'estabilitat i la dificultat de FSRS quan Anki les ha desat. Per a targetes antigues sense aquests camps FSRS, Recall els estima a partir dels valors SM-2.

La conversió del contingut també té limitacions importants. L'importador fa servir els dos primers camps de la nota com a anvers i revers, en comptes de reproduir els tipus de nota i les plantilles d'Anki. Conserva els noms de les baralles i les etiquetes. Extreu formats d'imatge habituals i reescriu les referències, però omet l'àudio i altres fitxers multimèdia. Com que l'importador és una ordre de Tauri, la migració directa d'APKG és una funció d'escriptori, no de la PWA al navegador.

És molt millor que reconstruir-ho tot a partir de text pla, però no equival a conservar fidelment la col·lecció. Prova els buits per completar, les targetes generades a partir d'una mateixa nota, els camps addicionals, l'HTML/CSS, les imatges, l'àudio, les dates de venciment i les notes repetides abans de confiar-hi una migració gran.

Recall té dues vies de sincronització. L'aplicació d'escriptori pot escriure una instantània en una carpeta gestionada per Dropbox, Drive o una altra eina de sincronització de fitxers. El servei de retransmissió opcional fa servir un Cloudflare Worker i un bucket R2. Segons el [disseny de sincronització de la versió publicada](https://github.com/Madlezz/Recall/blob/v1.3.0/docs/SYNC.md), els clients xifren les instantànies amb AES-GCM abans de pujar-les; el servei veu text xifrat, no les dades de les targetes ni la clau. Les actualitzacions fan servir control de concurrència optimista i, en cas de conflicte, ho tornen a intentar una vegada. Tot i això, continuen combinant instantànies completes en lloc de camps. No hi ha cap servei públic de retransmissió finançat pels responsables del projecte: el desplegues tu i n'introdueixes l'URL.

Les exportacions JSON i els arxius de Recall ofereixen una via per treure'n les dades. Restaura'n una en un perfil net abans de considerar-la una còpia de seguretat.

Tria Recall quan vulguis una experiència moderna d'escriptori i PWA que prioritzi les dades locals, i puguis acceptar un projecte jove i un importador que conserva una instantània útil en lloc de tot el sistema d'Anki.

## 6. Essentialist fa llegible la baralla, però no tot l'estat

Essentialist és l'opció d'abast més reduït. Cada baralla és un fitxer Markdown que pots obrir en un editor de text, guardar en un sistema de control de versions o copiar amb eines de fitxers normals. L'aplicació no fa cap petició de xarxa per disseny.

L'última versió estable és la [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22). Els fitxers distribuïts inclouen compilacions per a Android, macOS i Linux; els usuaris de Windows han de compilar des del codi font. El [README etiquetat](https://github.com/essentialist-app/essentialist/blob/v0.3.22/README.md) identifica SM-2 com a algorisme de programació.

El [README de la branca predeterminada](https://github.com/essentialist-app/essentialist/blob/main/README.md) ara indica FSRS, i el repositori va rebre canvis de codi el 2026. Això ajuda a veure'n la direcció, però no permet dir que el binari de 2025 utilitza FSRS.

El Markdown també cobreix menys del que sembla a primera vista. El text de les targetes és al fitxer visible, mentre que el progrés es desa en una base de dades oculta anomenada `.<deck file>.db`. Copiar `sample.md` sense `.sample.md.db` conserva les preguntes i les respostes, però perd l'estat d'aprenentatge.

No hi ha sincronització integrada entre dispositius ni servidor. Pots posar els fitxers a la teva pròpia carpeta sincronitzada, però llavors la gestió dels conflictes i la recuperació són responsabilitat teva.

Tria Essentialist quan l'objectiu sigui tenir Markdown llegible i treballar sense xarxa. No és un sistema multidispositiu sense entrebancs, i un sol fitxer visible no és una còpia de seguretat completa.

## Quatre projectes actius que val la pena seguir

Aquests projectes tenen feina real feta el 2026. Es queden fora dels sis principals perquè una recomanació necessita més que un codi font interessant.

| Projecte | Què ja és concret | Què impedeix recomanar-lo a la llista principal |
| --- | --- | --- |
| [HSK Nest](https://github.com/s-mberli/hsknest) | Codi AGPL, algorismes FSRS/SM-2/Leitner, desplegament amb Docker, servei gestionat, importació CSV i exportació de dades | Creat el juliol de 2026; sense cap versió numerada de l'aplicació. La publicació de GitHub és un paquet d'àudio, no una versió de l'aplicació |
| [Openlet](https://github.com/ChloeVPin/openlet) | Aplicació web MIT amb FSRS, importació CSV, ocultació d'imatges i arquitectura Supabase/Vercel documentada | Sense cap versió etiquetada, i la documentació oficial encara no defineix completament el funcionament sense connexió, l'exportació i la recuperació en un desplegament autoallotjat |
| [Prep](https://github.com/Zamua/prep-app) | Codi MIT, FSRS, servei allotjat i desplegament documentat sobre l'entorn d'execució autoallotjable celld | Sense cap versió etiquetada; autoallotjar-lo també implica administrar celld i emmagatzematge d'objectes, no desplegar un binari independent de targetes |
| [Kado](https://github.com/LisandroDiMeo/kado-app) | Aplicació mòbil Kotlin amb GPLv3, FSRS/SM-2, una versió per a Android i importació APKG amb plantilles i fitxers multimèdia | Creat el 2026; iOS requereix compilar des del codi, i la documentació oficial no defineix una sincronització general entre telèfons |

Diversos noms coneguts queden fora per motius més senzills. El [repositori de codi obert](https://github.com/mochi-cards/open-source) de Mochi és una col·lecció d'integracions, no l'aplicació principal. [Scholarsome](https://github.com/hwgilbert16/scholarsome#features-coming-soon) és de codi obert i es pot autoallotjar, però el README oficial encara situa la repetició espaiada a «Features coming soon», les funcions previstes. [OpenCards](https://github.com/holgerbrandl/opencards) no ha publicat cap versió des de la [v2.5.1, de gener de 2017](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1), i el repositori no ha rebut cap canvi de codi des de 2018.

Si l'accés al codi és opcional, la [comparativa més àmplia d'alternatives a Anki](/ca/blog/best-anki-alternatives/) inclou productes que responen a una altra pregunta.

## Prova la migració en cinc capes separades

«Importa Anki» diu ben poca cosa sense la frase següent. Una migració pot funcionar en una capa i fallar en les altres quatre.

| Capa | Què cal comparar | El senyal d'èxit enganyós |
| --- | --- | --- |
| Contingut de les targetes | Cada camp, marcador de buit per completar, etiqueta, caràcter especial i nota repetida | El nombre total de targetes s'hi acosta |
| Estructura | Tipus de nota, plantilles, targetes generades a partir d'una mateixa nota i baralles imbricades | El text de l'anvers i el revers ha aparegut en algun lloc |
| Fitxers multimèdia | Les imatges i l'àudio s'han copiat, les referències funcionen localment i es reprodueixen sense connexió | L'importador ha reconegut els noms dels fitxers |
| Estat d'aprenentatge | Registre de repassos, estat, data de venciment, interval, oblits i paràmetres de programació | Les targetes importades hi són, però tornen a començar com a noves sense avisar |
| Sortida i recuperació | Una exportació o còpia de seguretat documentada permet reconstruir el mateix sistema en un altre lloc | Una exportació de text llegible es tracta com una còpia de seguretat completa |

Prepara una baralla de prova expressament complicada abans de moure la col·lecció real. Inclou-hi camps addicionals, buits per completar, plantilles directes i inverses, baralles imbricades, etiquetes, imatges, àudio i prou historial de repassos per detectar si la destinació l'ha conservat.

Conserva intacta la còpia de seguretat d'origen. Després d'importar, compara per separat el nombre de notes, targetes i fitxers multimèdia. Inspecciona les dates de venciment en lloc de confiar en un missatge de «programació importada». Repassa sense connexió en tots els dispositius que vulguis fer servir. Després crea edicions de prova en conflicte en dos dispositius i observa què fa la sincronització.

Fes servir tots dos sistemes durant uns dies. Eliminar la col·lecció antiga és l'últim pas, no la prova que la nova hagi funcionat.

## L'autoallotjament només és complet després d'una restauració

Els productes anteriors fan servir «autoallotjat» per a coses molt diferents:

- Anki i Mnemosyne executen **serveis de sincronització**, mentre que els clients instal·lats continuen sent la interfície d'estudi.
- SiYuan amb Docker executa una **aplicació de navegador** que els clients natius no poden fer servir com a servidor de sincronització.
- Recall executa un **servei de retransmissió d'instantànies xifrades**, no la PWA mateixa.
- Nibomo desplega una **pila web i backend completa**, mentre que les aplicacions natives continuen sent compilacions separades.
- Essentialist **no té servidor**; el que controles són els fitxers locals.

Un cop aclarit què pots autoallotjar, prova allò que se sol ajornar en administrar un sistema:

1. Crea targetes, adjunta fitxers multimèdia, completa repassos i sincronitza des de dos clients.
2. Desa totes les bases de dades, buckets d'emmagatzematge d'objectes, fitxers locals, secrets i valors de configuració documentats.
3. Restaura-ho en un compte buit, una màquina buida o un desplegament aïllat.
4. Compara el nombre de targetes, els fitxers multimèdia, l'historial de repassos, l'estat dels venciments, l'inici de sessió i la sincronització dels clients.
5. Actualitza la còpia restaurada i completa un altre cicle de repàs.

Si la reconstrucció encara depèn de la màquina antiga, tens un servei en funcionament. No tens una còpia de seguretat verificada.

## Preguntes freqüents

### Quina és la millor aplicació de targetes de codi obert el 2026?

Anki és la millor opció per defecte per a la majoria d'estudiants. Combina un model de col·lecció madur, FSRS, una àmplia cobertura de clients i els formats propis de còpia de seguretat i exportació més complets. Cal matisar que les versions oficials d'iOS i web no estan incloses en el repositori d'escriptori de codi obert, i que el servidor autoallotjat ofereix sincronització, no estudi al navegador.

### Quina és la millor alternativa a Anki de codi obert?

Mnemosyne és l'alternativa centrada en l'estudi més consolidada i documenta oficialment la importació de tipus de targeta personalitzats i dades d'aprenentatge d'Anki. Recall té un aspecte més modern i importa fitxers APKG directament a l'escriptori, però converteix els dos primers camps de la nota, només conserva una instantània de la programació, importa imatges però no àudio i no transfereix el registre complet de repassos.

### Puc autoallotjar Anki?

Sí, pots executar el servidor oficial de sincronització d'Anki per a clients compatibles. No és, però, un substitut autoallotjat d'AnkiWeb: no té cap interfície d'estudi al navegador.

### Codi obert vol dir que funciona sense connexió?

No. El codi obert descriu la llicència i l'accés al codi font. El funcionament sense connexió depèn d'on desa les dades el client i de quines accions necessiten un servei. La relació inversa tampoc no és automàtica: una aplicació pot conservar les dades localment sense publicar el codi principal.

### L'autoallotjament garanteix la portabilitat?

No. L'autoallotjament et permet controlar on s'executa un servei. La portabilitat depèn de les exportacions, les còpies de seguretat completes i una restauració que hagis provat realment. Una base de dades al teu servidor pot continuar sent difícil de migrar, i una baralla Markdown llegible pot ometre l'estat dels repassos desat al costat.

## La meva recomanació

Queda't amb **Anki** o tria'l, tret que algun dels seus límits et causi un problema real. Tria **Mnemosyne** per a l'estudi local d'escriptori centrat en les targetes i una importació d'Anki consolidada. Fes servir **SiYuan** quan les targetes hagin de formar part d'una base de coneixement més àmplia. Considera **Nibomo** quan tenir tot el codi del web, els clients natius i el backend justifiqui una pila de producció a AWS. Tria **Recall** si vols un client modern que prioritzi les dades locals, després de provar-ne els límits de conversió. Tria **Essentialist** quan el Markdown de text pla i l'absència d'accés a la xarxa pesin més que la sincronització.

La millor aplicació de targetes de codi obert no és el repositori amb la llista de funcions més llarga. És aquella en què el codi disponible, les dades sense connexió, la migració, la sincronització, l'allotjament i la recuperació encaixen amb el sistema del qual realment vols fer-te càrrec.
