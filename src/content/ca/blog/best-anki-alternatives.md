---
title: "Alternatives a Anki el 2026: què conserves, què perds i què guanyes amb el canvi"
description: "Compara set alternatives a Anki segons què conserven en migrar, l’ús sense connexió, la programació de repassos, el preu, el codi i l’autoallotjament. Quan convé quedar-se a Anki?"
date: "2026-03-14"
updated: "2026-08-28"
image: "/blog/best-anki-alternatives.png"
keywords:
  - "alternatives a Anki"
  - "alternativa a Anki"
  - "aplicacions com Anki"
  - "alternativa a Anki de codi obert"
  - "alternatives gratuïtes a Anki"
  - "alternativa a Anki per a iOS"
  - "migrar des d'Anki"
---

Una importació d'Anki pot acabar sense cap error i, tot i així, eliminar allò que fa que la teva baralla funcioni. El text hi és. Les targetes s'obren. Després t'adones que falta el CSS, que un camp d'àudio és buit, que totes les targetes són noves o que una nota ja no genera les targetes en els sentits que esperaves.

Aquí és on equivocar-se en triar una alternativa a Anki pot sortir car. Un editor més net o un pla més barat es veuen fàcilment abans de canviar. El comportament de les plantilles, l'historial de repassos, les dates de venciment, els complements, la disponibilitat dels fitxers multimèdia sense connexió i les opcions per tornar a exportar les dades són aspectes que sovint només es comproven quan el mal ja està fet.

Aquesta comparativa parteix del que es conserva i del que es perd en migrar. Examina set aplicacions com Anki, què pot aprofitar cadascuna d'una col·lecció existent, què canvia després d'importar-la i quan quedar-se a Anki és l'opció més segura.

> **Declaració d'interessos:** Soc Kirill Markin i desenvolupo [Nibomo](https://nibomo.com/), un dels productes que apareixen a continuació. L'he inclòs pel codi obert, l'autoallotjament i els fluxos de treball amb agents. No és el guanyador per defecte: no té cap importador directe de `.apkg`, la migració des d'Anki perd informació i mantenir tota la infraestructura autoallotjada comporta feina real.

**Dades comprovades:** 28 d'agost de 2026. Els preus són els preus públics dels Estats Units o els preus locals indicats disponibles en aquella data. Els impostos, la regió, les ofertes educatives i la facturació a través de les botigues d'aplicacions poden canviar l'import.

![Un rellotger comprova si el mecanisme d'un rellotge de butxaca amb anys de funcionament encaixarà en una altra caixa](/blog/best-anki-alternatives.png)

## La resposta curta abans de moure res

D'entrada, queda't amb Anki. Canvia només quan una altra aplicació resolgui un problema recurrent i la millora compensi la migració.

Tres productes accepten paquets d'Anki amb dades d'aprenentatge, però les garanties de cadascun arriben fins a un punt diferent:

- **Mnemosyne** documenta una importació completa d'Anki amb tipus de targeta personalitzats i dades d'aprenentatge. És l'opció que més s'acosta a un flux tradicional d'escriptori, local i de codi obert, tot i que no té aplicació nativa per a iOS.
- **Mochi** importa fitxers `.apkg` amb l'historial de repassos. Converteix l'HTML a Markdown, elimina el CSS i el JavaScript i substitueix els quatre botons de repàs d'Anki per Remembered o Forgot.
- **RemNote** importa fitxers `.apkg`, la majoria de tipus de nota i l'historial de repassos. La guia actual també diu que les targetes importades van a una cua separada, **Need to Learn**. Per tant, no interpretis «historial de repassos importat» com «cua d'Anki d'avui copiada exactament».

Les altres quatre opcions impliquen reconstruir el contingut, no migrar la col·lecció:

- **Quizlet** és útil per a conjunts públics, classes, jocs i pràctica guiada.
- **Brainscape** ofereix als grups un cicle de repàs més senzill, basat en valoracions de confiança de l'1 al 5.
- **SuperMemo** implica passar al seu mètode propietari i al seu catàleg de cursos.
- **Nibomo** t'ofereix clients web i natius amb llicència MIT, un backend autoallotjat i accés a l'API i a MCP. El seu flux de treball amb TXT o CSV, que requereix revisió, no conserva l'estat d'aprenentatge d'Anki.

Si les teves targetes depenen d'una representació exacta, dels complements o de la cua de repassos actual, quedar-te a Anki no és indecisió. És la resposta.

## Primer, fes inventari del que conté realment la teva col·lecció d'Anki

Una «baralla» no és un únic objecte que puguis traslladar tal qual. Abans de comparar productes, separa els elements que potser hauràs de moure.

| Part de la col·lecció | Què pot incloure Anki en un paquet | Què ha d'admetre explícitament l'aplicació de destinació |
| --- | --- | --- |
| **Contingut de les notes** | Camps de text i HTML desat | Correspondència de camps, buits per completar, text en sistemes d’escriptura no llatins, codi i salts de línia |
| **Generació de targetes** | Tipus de nota i plantilles de targeta | Targetes en sentit directe i invers, camps personalitzats, CSS i comportament del JavaScript |
| **Fitxers multimèdia** | Imatges locals, àudio i altres fitxers quan s'activa **Include media** | Extracció de fitxers, referències, formats admesos i sincronització entre dispositius |
| **Organització** | Baralles, subbaralles, etiquetes i, opcionalment, predefinicions de baralla | Jerarquia, significat de les etiquetes, predefinicions i àmbits d'estudi |
| **Estat d'aprenentatge** | Informació de programació i historial de repassos, si s'hi inclouen | Dates de venciment, intervals, oblits i conversió al sistema de programació de repassos de destinació |
| **Codi del flux de treball** | Els complements no s'inclouen en el paquet de la baralla | Una alternativa a les eines del navegador de targetes, les edicions en bloc, la generació de notes i les altres funcions dels complements |

El [manual d'exportació d'Anki](https://docs.ankiweb.net/exporting.html) documenta totes aquestes opcions dels paquets. Un importador de text només veu la primera fila i, potser, les etiquetes. Un importador directe de `.apkg` en pot veure més, però cada producte decideix què converteix i què descarta.

Per això, «importa d'Anki» és massa vague per decidir un canvi. Fes-te tres preguntes diferents:

1. **La targeta continua volent dir el mateix?** Comprova els camps, els sentits de les targetes generades, els buits per completar, els fitxers multimèdia i la representació visual.
2. **L'aplicació de destinació sap què he après?** Comprova els esdeveniments de repàs, l'estat actual, les dates de venciment i la primera cua real.
3. **En podré tornar a sortir?** Exporta des de l'aplicació de destinació i inspecciona què conté realment el format de sortida.

Un importador pot complir el primer requisit i fallar en els altres dos.

## Què sobreviu a la migració

| Producte | Via d'importació des d'Anki | Estat d'aprenentatge | Pèrdua principal que cal comprovar |
| --- | --- | --- | --- |
| [RemNote](https://www.remnote.com/) | [Importació directa de `.apkg`](https://help.remnote.com/en/articles/6751471-importing-from-anki) per a la majoria de tipus de nota, fitxers multimèdia i historial de repassos | L'historial arriba, però les targetes importades entren a la cua separada **Need to Learn** de RemNote | CSS complex, JavaScript personalitzat, part de la síntesi de veu generada i camps d'oclusió d'imatges reanomenats |
| [Mochi](https://mochi.cards/) | [Importació directa de `.apkg`](https://mochi.cards/docs/import-and-export/importing/), inclòs l'historial de repassos | L'historial arriba; la documentació no promet una cua ni unes dates de venciment idèntiques a les d'Anki | L'HTML es converteix a Markdown; s'eliminen el CSS i el JavaScript; les valoracions futures són binàries |
| [Mnemosyne](https://mnemosyne-proj.org/) | El projecte documenta una [importació completa d'Anki](https://mnemosyne-proj.org/features) amb tipus de targeta personalitzats i dades d'aprenentatge | Les dades d'aprenentatge s'importen a un sistema de programació de repassos diferent | Cal provar igualment el comportament exacte de les plantilles, els venciments convertits i la representació de les targetes |
| [Quizlet](https://quizlet.com/) | [Enganxar termes i definicions](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) | Cap dada d'Anki | Tipus de nota, plantilles, baralles, estructura multimèdia i totes les dades de programació |
| [Brainscape](https://www.brainscape.com/) | [CSV, TXT, XLSX o ODS](https://brainscape.zendesk.com/hc/en-us/articles/115002369931-How-do-I-import-various-files-to-create-flashcards) | Cap dada d'Anki | Plantilles, complements, regles multimèdia i totes les dades de programació |
| [SuperMemo](https://www.supermemo.com/) | [Enganxar files de preguntes i respostes amb delimitadors](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), fins a 100 alhora | Cap dada d'Anki | Estructura de la col·lecció, fitxers multimèdia, plantilles i totes les dades de programació |
| [Nibomo](https://nibomo.com/) | Creació d'esborranys assistida per IA, amb revisió, a partir de TXT o CSV d'Anki | Cap dada d'Anki | No admet `.apkg`; queden enrere les plantilles, la fidelitat multimèdia, la jerarquia de baralles i totes les dades de programació |

## Preu, ús sense connexió, programació i control

| Producte | Preu comprovat el 28 d'agost de 2026 | Límits de l'ús sense connexió | Sistema de programació de repassos | Codi font i autoallotjament |
| --- | --- | --- | --- | --- |
| **RemNote** | [Gratuït; Pro per 8 $/mes, amb un pagament anual de 96 $](https://www.remnote.com/pricing) | Les aplicacions instal·lades permeten editar i repassar sense connexió després d'iniciar sessió. L'escriptori conserva tots els fitxers multimèdia de la base de coneixement; el mòbil només desa a la memòria cau algunes imatges recents. Al web cal que la pestanya continuï oberta. | [Anki SM-2 o FSRS v6 en beta](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) | Nucli propietari; no hi ha cap via d'autoallotjament admesa documentada |
| **Mochi** | [Gratuït sense connexió; sincronització Pro per 5 $/mes](https://mochi.cards/#pricing-section) | Les aplicacions instal·lades funcionen completament sense connexió i sense compte. L'emmagatzematge del navegador es pot esborrar. | [Algoritme de Mochi o FSRS](https://mochi.cards/docs/reviewing/fsrs/), tots dos amb Remembered / Forgot | Nucli propietari; els repositoris públics contenen integracions, no una aplicació autoallotjable |
| **Mnemosyne** | Gratuït | [Ús local a l'escriptori i repàs sense connexió a Android](https://mnemosyne-proj.org/download-mnemosyne.php); Android no permet editar. No té aplicació nativa per a iOS. | Programació adaptativa a partir de valoracions del grau de record del 0 al 5 | Llicències de codi específiques per component; servidor de sincronització propi en un ordinador d'escriptori o sense interfície gràfica |
| **Quizlet** | Ús bàsic gratuït; [Plus per 35,99 $/any, Plus Unlimited per 44,99 $/any](https://quizlet.com/upgrade?source=signup) | Els conjunts descarregats funcionen sense connexió a les aplicacions d'iOS i Android amb Flashcards i Match. | [Repetició espaiada al web](https://quizlet.com/features/spaced-repetition) per a conjunts de 100 termes o més; la versió mòbil encara s’anuncia com a disponible properament. Learn és una pràctica adaptativa separada. | Servei allotjat propietari; sense via d'autoallotjament admesa |
| **Brainscape** | [Gratuït; Pro per 7,99 $/mes amb facturació anual](https://www.brainscape.com/pricing) | [El mòbil pot conservar la feina feta sense connexió i sincronitzar després les classes descarregades prèviament](https://brainscape.zendesk.com/hc/en-us/articles/115002369711-How-do-Brainscape-s-website-mobile-app-interact-with-each-other); la documentació no promet una biblioteca local completa. | [Confidence-Based Repetition](https://www.brainscape.com/academy/confidence-based-repetition-definition/), amb valoracions de l'1 al 5 | Servei allotjat propietari; sense via d'autoallotjament admesa |
| **SuperMemo** | Compte gratuït amb límits; [35,99 PLN/mes o 359 PLN/any](https://www.supermemo.com/en/premium-subscription) | Els cursos descarregats al mòbil funcionen sense connexió; l'edició, la IA, la cerca, els enregistraments i les estadístiques, no. | [Mètode propietari de SuperMemo](https://www.supermemo.com/en/supermemo-method) | Servei allotjat propietari; sense via d'autoallotjament admesa |
| **Nibomo** | [Funcions bàsiques allotjades gratuïtes durant la beta; programari gratuït per autoallotjar](/ca/pricing/), més les despeses de la teva infraestructura | Les aplicacions natives escriuen localment després d'iniciar sessió amb connexió i de carregar inicialment l'espai de treball; els fitxers multimèdia remots ja han de ser a la memòria cau. | [FSRS](/docs/architecture/#scheduling) | MIT; el desplegament de producció admès és una pila completa centrada en AWS |

Aquestes taules no són una classificació per punts. Un importador directe pot pesar més que totes les altres funcions si tens 30.000 targetes amb un llarg historial d'aprenentatge. Una aplicació nativa per a iPhone pot decidir el resultat si és on repasses. L'accés al codi només importa quan tu o algú de confiança el mantindrà.

Tots aquests productes tenen una opció d'entrada gratuïta, però migrar a alternatives gratuïtes a Anki no surt de franc. El preu de la subscripció és fàcil de calcular. Reconstruir plantilles, comprovar fitxers multimèdia i començar de nou l'historial de repassos solen tenir un cost més alt.

## RemNote: integrar les targetes en notes connectades

RemNote canvia l'origen de les targetes. En lloc de mantenir una baralla separada al costat dels apunts de classe, crees les targetes dins d'un esquema, un document o un flux de treball amb PDF. És un bon motiu per deixar Anki si copiar material entre una aplicació de notes i una de targetes s'ha convertit en la part costosa.

La importació conserva molts elements, però cal precisar què passa amb la cua de repassos. La [guia actual d'importació d'Anki](https://help.remnote.com/en/articles/6751471-importing-from-anki) de RemNote indica que exportis un `.apkg` amb informació de programació, predefinicions de baralla i fitxers multimèdia. Importa l'historial de repassos i la majoria de tipus de nota, incloses les bàsiques, les de buits per completar i les d'oclusió d'imatges més habituals.

La mateixa guia diu que les targetes acabades d'importar van a una cua separada, **Need to Learn**. És a dir, RemNote té l'historial disponible, però la documentació no promet que la cua actual de venciments d'Anki reaparegui sense canvis. També es descarta el CSS complex, no s'admet JavaScript personalitzat, algunes funcions de síntesi de veu en temps real no funcionen i les importacions d'oclusió d'imatges depenen dels noms de nota i de camp esperats.

Prova-ho amb una baralla representativa i inspecciona tant les targetes com la primera cua. Que la importació tingui bon aspecte només és la meitat de la prova.

Les aplicacions d'escriptori i mòbil funcionen sense connexió després d'instal·lar-les i iniciar-hi sessió. La [guia d'ús sense connexió](https://help.remnote.com/en/articles/6752029-offline-mode) marca un límit important pel que fa als fitxers multimèdia: l'escriptori desa totes les imatges i els PDF de la base de coneixement, mentre que el mòbil només manté a la memòria cau algunes imatges recents. L'aplicació web pot continuar en una pestanya ja oberta, però no es pot obrir de zero sense connexió.

Fes servir RemNote quan les notes connectades compensin el canvi de model de col·lecció. Queda't amb Anki si les plantilles i els complements són la base del teu sistema, i no simples accessoris.

## Mochi: Markdown local amb una exportació nativa completa

Mochi és una destinació de migració més senzilla per a qui vol dades locals, targetes en Markdown i menys controls a la pantalla. Les aplicacions instal·lades funcionen a totes les principals plataformes d'escriptori i mòbil i es poden utilitzar [completament sense connexió i sense compte](https://mochi.cards/docs/getting-started/download-and-install/). La part de pagament és la sincronització, a 5 dòlars al mes.

L'importador directe d'Anki incorpora l'historial de repassos, cosa que situa Mochi força per davant de les opcions que només accepten text. La conversió també és especialment explícita: Mochi elimina el CSS i el JavaScript i converteix l'HTML a Markdown. Això funciona quan el significat és al text i als adjunts convencionals. És un avís quan el significat depèn de la plantilla.

Mochi ara ofereix dos algoritmes de programació de repassos. El seu propi algoritme continua sent el predeterminat, però [es pot activar FSRS](https://mochi.cards/docs/reviewing/fsrs/) sense reiniciar el progrés existent a Mochi. FSRS calcula l'estat de les targetes a partir de l'historial de repassos que té Mochi. Les valoracions continuen sent binàries —Remembered o Forgot— fins i tot amb FSRS. Per tant, els usuaris d'Anki que fan servir Hard i Easy com a senyals diferents han d'esperar un ritme diari diferent.

Les opcions per exportar-ne les dades són més clares que en la majoria d'aplicacions propietàries. Una [exportació nativa `.mochi`](https://mochi.cards/docs/import-and-export/exporting/) conté targetes, plantilles, adjunts, etiquetes, estructura de baralles i historial de repassos. Markdown i CSV són més fàcils d'inspeccionar en altres eines, però ometen l'historial de repassos i altres metadades.

Els repositoris públics de Mochi a GitHub contenen [integracions i eines relacionades](https://github.com/mochi-cards/open-source), no el nucli de l'aplicació ni un servidor de sincronització admès. Tria'l per l'ús sense connexió i la portabilitat, no pel control del codi font.

## Mnemosyne: la via d'escriptori de codi obert

Mnemosyne és l'opció que més s'acosta al model tradicional de «programa i base de dades local». La versió actual admet Windows, macOS i Linux, amb un client Android per repassar sense connexió. La pàgina de funcions documenta targetes amb contingut enriquit, etiquetes jeràrquiques, complements, una escala de repàs del 0 al 5 i la importació completa d'Anki amb tipus de targeta personalitzats i dades d'aprenentatge.

És la migració de codi obert més directa d'aquesta comparativa si vols deixar Anki sense passar a un gran sistema de notes o a un servei al núvol. També té un [servidor de sincronització integrat](https://mnemosyne-proj.org/help/syncing) que es pot executar en un ordinador d'escriptori o sense interfície gràfica i combinar dades d'aprenentatge de diversos clients.

Les limitacions també formen part de la decisió. El client Android [no pot editar targetes](https://mnemosyne-proj.org/help/android-client). Els usuaris d'iOS han de repassar a través del navegador, amb un servidor que s'executa en una altra màquina, i la pàgina oficial de funcions d'aquest servidor avisa que no té funcions de seguretat. Gestionar la sincronització també implica mantenir el servidor accessible, configurar la xarxa i fer còpies de seguretat del directori de dades.

Les llicències són més específiques que una simple etiqueta «GPL»: el [fitxer de llicència del projecte](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE) remet a condicions diferents segons el component. La [llicència del nucli](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE) fa servir AGPL v3 amb una clàusula addicional sobre el nom i l'atribució, mentre que [openSM2sync](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE) fa servir LGPL v3. Llegeix aquests fitxers si tens previst modificar o redistribuir el programari.

## Quizlet: canviar per l'aula, no per la fidelitat de la col·lecció

Quizlet destaca en un altre àmbit. Els conjunts públics d'estudi, les classes de professors, les opcions per compartir, Match, Test, Learn i les activitats de grup són més fàcils de posar a disposició d'una classe que un perfil d'Anki personalitzat.

El límit de la migració és el text pla. Quizlet pot convertir files enganxades en termes i definicions, però no llegeix un `.apkg` per reconstruir tipus de nota, plantilles, programació o historial de repassos. Els creadors poden [exportar els seus propis conjunts com a text copiat](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets), sense imatges; els conjunts copiats d'altres usuaris no es poden exportar. És portabilitat del contingut, no de la col·lecció.

La programació de repassos de Quizlet està canviant. El nou flux [Spaced Repetition](https://quizlet.com/features/spaced-repetition) s'activa automàticament al web per als conjunts amb almenys 100 termes i fa servir les valoracions Repeat, Hard, Okay i Easy. Quizlet encara anuncia que la compatibilitat amb mòbils arribarà properament. Learn continua sent una via separada de pràctica adaptativa amb límits d'ús vinculats al pagament.

L'ús sense connexió també es limita a les aplicacions mòbils, no al lloc web. Quizlet desa automàticament vuit conjunts recents i et permet descarregar-ne més; [Flashcards i Match funcionen sense connexió](https://help.quizlet.com/hc/en-us/articles/360030565412-Studying-offline-with-Quizlet-mobile-apps) i després sincronitzen el progrés quan et tornes a connectar.

Canvia-hi quan l'objectiu sigui distribuir material i fer activitats a l'aula. Reconstruir una programació personal consolidada només per obtenir aquestes funcions acostuma a sortir poc a compte.

## Brainscape: menys decisions de programació, una migració menys completa

Brainscape demana una valoració de confiança de l'1 al 5 i fa servir aquest senyal per tornar a mostrar abans les targetes que domines menys. La fórmula completa no és pública, però la interacció és fàcil d'ensenyar en una classe compartida.

Accepta fitxers CSV, TXT, XLSX i ODS. Això és pràctic per a targetes amb anvers i revers, però implica deixar enrere les plantilles, els complements, les regles multimèdia i les dades d'aprenentatge d'Anki. Exportar una còpia de seguretat personal és una funció Pro i produeix fitxers que es poden obrir en un full de càlcul i tornar a importar més endavant.

El centre d'ajuda actual de Brainscape diu que el lloc web i les aplicacions mòbils ja comparteixen les mateixes funcions bàsiques de cerca, creació, ús compartit i estudi. També descriu l'ús del mòbil sense connexió, la resincronització manual i les actualitzacions de les classes ja descarregades al dispositiu. Això indica que es pot reprendre la sincronització en reconnectar-se, però no garanteix que tot el compte sigui una biblioteca local completa.

L'exportació de baralles personals continua sent una [funció Pro](https://brainscape.zendesk.com/hc/en-us/articles/115002383872-How-can-I-export-a-backup-of-my-flashcards). No hi ha cap publicació oficial del codi font ni cap via d'autoallotjament.

Val la pena considerar Brainscape quan Anki exigeix massa configuració per a les persones que han d'estudiar. No és una bona sortida per a qui ja aprofita bé aquesta configuració.

## SuperMemo: triar el mètode i acceptar un nou començament

El servei actual SuperMemo.com és una plataforma d'aprenentatge d'idiomes per a web, iOS i Android basada en el mètode propietari de programació de SuperMemo. És independent del producte antic per a Windows que potser coneixen els usuaris de fa anys.

És una decisió sobre el mètode i el catàleg, no una migració neta d'Anki. SuperMemo admet la [creació en bloc enganxant files de preguntes i respostes amb delimitadors](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), amb un límit de 100 targetes per importació. No he trobat cap importador oficial actual de `.apkg` ni cap via d'exportació per a usuaris del servei allotjat. Per tant, les plantilles, els complements, l'estructura multimèdia i l'historial de repassos no es transfereixen per aquesta via documentada.

Els cursos descarregats es poden estudiar sense connexió a les aplicacions mòbils. La [guia d'ús sense connexió](https://www.supermemo.com/en/faq/can-i-use-supermemo-offline) n'exclou les funcions d'IA, l'addició de MemoCards, la cerca, els enregistraments, les estadístiques i l'editor de cursos. Prepara, doncs, el material i sincronitza'l abans de desconnectar-te.

Tria SuperMemo si el seu mètode o el seu catàleg de cursos et compensen haver de començar una programació de repassos nova. Si la prioritat és conservar la programació existent, no resol el problema que tens.

## Nibomo: accés al codi de tota la pila, amb la importació d'Anki més limitada

Nibomo ofereix un control ampli sobre el sistema. El [repositori amb llicència MIT](https://github.com/kirill-markin/flashcards-open-source-app) conté l'aplicació web, els clients d'iOS i Android, el backend, la sincronització sense connexió, la infraestructura, l'[API pública](/docs/api/) i el [servidor MCP](/docs/mcp-connector/). Els repassos fan servir [FSRS](/docs/architecture/#scheduling). Els clients web, iOS i Android desen primer les dades localment, afegeixen els canvis a una cua de sortida i sincronitzen quan es recupera la connexió.

Això no el fa compatible amb Anki. Nibomo no pot llegir `.apkg` ni `.colpkg`. La [migració admesa amb TXT d'Anki](/blog/migrate-from-anki-txt-export-open-source-flashcards/) és un flux de creació d'esborranys assistit per IA i amb revisió, pensat per a targetes principalment de text. No conserva plantilles, complements, jerarquia de baralles, dates de venciment, intervals ni esdeveniments de repàs. Les referències multimèdia d'un TXT no són fitxers multimèdia, de manera que les baralles amb molts d'aquests fitxers requereixen una reconstrucció i una verificació separades.

El paquet propi `flashcards.zip` de Nibomo tampoc no equival a una còpia de seguretat completa. Mou targetes, etiquetes i fitxers multimèdia relacionats entre espais de treball de Nibomo. No mou l'historial de repassos, l'estat de FSRS, les estructures completes de baralles, la configuració de l'espai de treball ni els comptes.

Les funcions bàsiques allotjades són [gratuïtes durant la beta](/ca/pricing/). Autoallotjar la pila de producció no és instal·lar Docker amb una sola ordre: la [guia d'autoallotjament](/docs/self-hosting/) fa servir AWS CDK i requereix serveis d'AWS, a més de Cloudflare, Resend, Sentry, secrets, migracions, còpies de seguretat, restauracions i actualitzacions. Docker Compose és la via de desenvolupament, no el desplegament de producció admès.

Fes servir Nibomo quan l'accés a tot el codi i el control del backend siguin el motiu del canvi, i les teves targetes siguin prou senzilles per reconstruir-les amb seguretat. [Obre l'aplicació allotjada](https://app.nibomo.com/) per provar una petita baralla temporal. Queda't amb Anki —o prova RemNote, Mochi o Mnemosyne— quan la fidelitat de l'estat d'aprenentatge sigui la prioritat.

## Quina alternativa a Anki funciona a iOS sense sorpreses desagradables en migrar?

Una «alternativa a Anki per a iOS» pot voler dir dues coses diferents: una aplicació nativa per a iPhone o una alternativa a la [compra única d'AnkiMobile per 24,99 $](https://apps.apple.com/us/app/ankimobile-flashcards/id373493387).

RemNote, Mochi, Quizlet, Brainscape, SuperMemo i Nibomo tenen aplicacions per a iOS. Mnemosyne, no. Però encara queda la qüestió de la migració:

- **Mochi** conserva més que les opcions d'iOS que només accepten text: importa l'historial de repassos de `.apkg`, amb conversió a Markdown i valoracions binàries.
- **RemNote** també importa l'historial de repassos de `.apkg`, però prova la cua **Need to Learn** en lloc de donar per fet que es conserva la programació d'Anki d'avui.
- **Quizlet** encaixa en la distribució de material a l'aula, però la via des d'Anki només és de text i el nou flux de repetició espaiada encara no és al mòbil.
- **Nibomo** és l'opció amb codi font disponible i client natiu per a iOS, però la migració des d'Anki reinicia l'estat d'aprenentatge.
- **Brainscape** i **SuperMemo** només tenen sentit si el seu mètode de repàs compensa haver de reconstruir les targetes i la programació.

Abans de deixar AnkiMobile pel preu, compara'l amb el cost d'una subscripció i les hores necessàries per reparar una migració. Una compra única d'una aplicació pot sortir més barata que una aplicació gratuïta que converteix una col·lecció consolidada en un projecte manual.

## Quan és més segur quedar-se a Anki

Quedar-s'hi també és una decisió; no vol dir que no sàpigues triar una opció més nova. Mantén Anki si es dona alguna d'aquestes situacions:

- la teva col·lecció depèn de plantilles personalitzades, CSS, JavaScript o complements;
- Image Occlusion, l'àudio o altres fitxers multimèdia aporten significat essencial;
- una nota genera targetes en diversos sentits que han de continuar vinculades;
- els anys d'historial de repassos i les dates de venciment actuals valen més que un editor nou;
- depens d'un flux d'escriptori o d'una combinació de plataformes que l'alternativa no cobreix;
- el mode sense connexió del substitut només funciona en una plataforma o interfície que no faràs servir;
- t'atrau la idea de l'autoallotjament, però no vols administrar, protegir, fer còpies de seguretat i actualitzar un servidor;
- l'alternativa no resol cap problema recurrent més enllà de tenir un aspecte més net.

Anki continua oferint un ecosistema consolidat de complements, plantilles flexibles de notes i targetes, FSRS i controls de programació clàssics, clients locals instal·lats i formats de paquet que poden contenir la col·lecció. Cap dels productes anteriors no reprodueix tot això.

Per a una comparació més concreta dels límits del control sobre el programari, llegeix la [guia d'aplicacions de targetes de codi obert](/blog/best-open-source-flashcard-apps-2026/). Si el factor decisiu és el comportament sense connexió, la [comparativa de targetes sense connexió](/blog/best-offline-flashcards-app/) distingeix entre aplicacions instal·lades, contingut a la memòria cau i pestanyes del navegador.

## Una llista de comprovació abans de migrar que encara pot acabar amb un «no»

No comencis amb tota la col·lecció. Prepara una prova que pugui fallar.

1. **Crea un paquet de recuperació.** Exporta un `.colpkg` amb els fitxers multimèdia, desa'l fora del perfil d'Anki i conserva'n una segona còpia en un altre lloc.
2. **Tria la baralla complicada.** Inclou-hi buits per completar, camps personalitzats, targetes directes i inverses, baralles imbricades, etiquetes, imatges, àudio i prou historial de repassos per veure com es converteix la programació.
3. **Exporta el format que la destinació admet realment.** Fes servir `.apkg` amb programació, predefinicions i fitxers multimèdia per a un importador directe. Fes servir Notes in Plain Text només si acceptes reconstruir únicament el contingut.
4. **Anota l'estat de partida.** Registra el nombre de notes i targetes, els noms d'etiquetes i baralles, el nombre de fitxers multimèdia, algunes dates de venciment i intervals, i el nombre esperat de targetes generades per cada tipus de nota.
5. **Importa en un espai temporal.** No sobreescriguis el perfil d'origen ni integris la primera prova en una biblioteca de destinació permanent.
6. **Inspecciona per separat el contingut i l'estat d'aprenentatge.** Que l'anvers i el revers siguin correctes no demostra que s'hagin conservat els buits per completar, els fitxers multimèdia, les targetes generades a partir d'una mateixa nota, l'historial de repassos o la data del proper venciment.
7. **Obre l'aplicació de zero sense connexió en tots els dispositius que faràs servir.** Repassa, edita, tanca completament l'aplicació, torna-la a obrir sense connexió i després reconnecta't i comprova un altre dispositiu.
8. **Comprova la cua abans que les dues programacions se separin.** Compara el primer conjunt de targetes vençudes i una mostra d'intervals abans de valorar les mateixes targetes de la col·lecció real en totes dues aplicacions. Després del primer repàs a l'altra aplicació, les dues programacions són independents.
9. **Prova la sortida abans de decidir-te.** Exporta des de la destinació i inspecciona què podries recuperar si la deixessis l'any vinent.
10. **Conserva Anki i la còpia de seguretat intacta.** No eliminis cap dels dos fins que el substitut hagi resistit l'ús habitual i hagis acceptat conscientment totes les pèrdues.

Si la destinació només accepta text, segueix el [flux complet d'exportació segura a TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/). Separa el `.colpkg` de recuperació del fitxer de treball que pots importar en una altra aplicació i deixa explícit que l'aprenentatge es reinicia.

## Pren la decisió en aquest ordre

Comença pel que no et pots permetre perdre:

1. Si les plantilles exactes, els complements o la cua actual són essencials, queda't a Anki tret que una prova amb un `.apkg` representatiu demostri el contrari.
2. Si les notes i les targetes haurien de formar un sol sistema, prova RemNote. Comprova la cua **Need to Learn**, no només les pàgines importades.
3. Si valores més el Markdown local i les exportacions inspeccionables que la representació d'Anki, prova Mochi.
4. Si vols una aplicació d'escriptori de codi obert centrada en les targetes i amb importació directa d'Anki, prova Mnemosyne i confirma que les limitacions al mòbil encaixen amb la teva rutina.
5. Si el problema real és distribuir material a l'aula o tenir un cicle de repàs compartit més senzill, reconstrueix un conjunt petit a Quizlet o Brainscape.
6. Si vols específicament el mètode de SuperMemo, accepta una programació nova. Si vols específicament el codi de tota la pila, autoallotjament i accés a l'API i a MCP, accepta la reconstrucció de contingut amb pèrdues de Nibomo i la feina d'administració.

Per comparar funció per funció tres models molt diferents, consulta [Anki, Quizlet i Nibomo cara a cara](/blog/anki-vs-quizlet-vs-open-source-flashcards-app/).

La regla útil és senzilla: canvia quan el guany sigui concret i hagis comprovat les pèrdues en una prova real. Si la baralla representativa no es pot transferir bé, quedar-te a Anki no és una sortida conservadora per defecte. És el resultat de la comparació.
