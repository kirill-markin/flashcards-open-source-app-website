---
title: "Anàlisi de les targetes d'estudi de Mochi (2026): pla gratuït, ús sense connexió i comparativa amb Anki"
description: "Una anàlisi de les targetes d'estudi de Mochi contrastada amb fonts: pla gratuït, apps sense connexió, notes Markdown, FSRS, sincronització, importació d'Anki, exportacions i límits d'allotjament propi."
date: "2026-03-18"
updated: "2026-09-07"
image: "/blog/mochi-alternative-v3.png"
keywords:
  - "targetes d'estudi Mochi"
  - "targetes Mochi"
  - "Mochi o Anki"
  - "Anki o Mochi"
  - "Mochi és gratuït"
  - "Mochi sense connexió"
  - "preus de Mochi"
  - "allotjament de Mochi"
  - "targetes d'estudi Markdown"
  - "repetició espaiada amb Mochi"
---

Mochi parteix d'un document Markdown, no del formulari habitual amb anvers i revers. Afegeix-hi una línia amb tres guionets i el document passa a tenir cares per repassar. També el pots deixar com a nota, enllaçar-lo a una altra targeta o arxivar-lo perquè continuï apareixent a les cerques sense entrar a la cua de repassos.

Aquest petit separador explica a qui li poden encaixar les **targetes d'estudi de Mochi**. Mochi és una bona opció per a qui vol notes i repetició espaiada en una mateixa app que prioritza les dades locals, sobretot si li resulten naturals Markdown, els enllaços de retorn i un repàs senzill amb les opcions Recordat/Oblidat. És menys convincent per a qui ja fa servir Anki i té una col·lecció que depèn de variants de targetes generades automàticament, HTML/CSS personalitzat, JavaScript, complements o controls detallats de programació dels repassos.

Si treballes amb un sol dispositiu, el pla gratuït és més que una prova: no cal registrar-s'hi i Mochi documenta un ús il·limitat sense connexió. La condició és que la sincronització entre dispositius forma part del **pla Pro de 5 USD al mes**. Per a un usuari d'Anki, el cost més difícil d'assumir és el que es perd en migrar. Mochi pot importar un paquet d'Anki i el seu historial de repassos, però no pot conservar totes les plantilles, els estils, els scripts, les configuracions de programació ni els comportaments dels complements.

> **Declaració d'interessos:** Soc Kirill Markin i desenvolupo [Nibomo](/ca/). Aquesta és una anàlisi de la manera de treballar amb l'app contrastada amb fonts; no afirmo haver provat personalment el producte. No hi ha enllaços d'afiliació. La comparativa se centra en Mochi i Anki; el meu producte només apareix cap al final com una alternativa clarament identificada.

**Dades comprovades:** 7 de setembre de 2026. L'última [versió de Mochi](https://mochi.cards/changelog/) visible en aquella data era la 26.8.2, del 10 d'agost de 2026. Els preus i els detalls de les botigues d'aplicacions poden canviar.

![Un restaurador de llibres prova un petit acordió de targetes enllaçades mentre l'arxiu original es conserva protegit dins d'una capsa](/blog/mochi-alternative-v3.png)

## L'anàlisi en poques paraules

- **Tria Mochi** si vols notes Markdown i targetes juntes, ús sense connexió ni compte en un sol dispositiu, enllaços de retorn i una decisió binària en repassar.
- **Tria Anki** si necessites tipus de notes consolidats, plantilles HTML/CSS, complements, sincronització allotjada gratuïta, quatre valoracions de repàs o controls més detallats de l'FSRS.
- **Encara no canviïs** si ja repasses amb constància i no pots concretar quin problema de la teva manera de treballar resoldrà Mochi. Una interfície nova no és prou motiu per posar en risc anys de dades de programació i targetes personalitzades.
- **Fes una prova abans de migrar** si Anki ja és on mantens la teva col·lecció a llarg termini. Mochi accepta fitxers `.apkg` i pot importar l'historial de repassos, però converteix l'HTML a Markdown i elimina el CSS i el JavaScript.

## Mochi i Anki d'un cop d'ull

| Criteri | Mochi | Anki |
|---|---|---|
| A qui s'adapta millor | Usuaris de notes enllaçades i Markdown que volen notes al costat de les targetes de repàs | Estudiants que volen un sistema de targetes consolidat i configurable |
| Creació de targetes | Un document Markdown passa a tenir diverses cares quan hi afegeixes `---`; també hi ha camps i plantilles | Les notes contenen camps; les plantilles HTML/CSS generen una o més targetes |
| Procés de repàs | Les targetes noves entren primer en una fase d'aprenentatge; les apreses fan servir Oblidat / Recordat | Les targetes fan servir De nou / Difícil / Bé / Fàcil |
| Programació dels repassos | Algoritme propi de Mochi per defecte; FSRS opcional | FSRS o l'antic SM-2, amb més eines per ajustar l'FSRS |
| Ús gratuït | Sense registre i amb ús il·limitat sense connexió | Apps d'ordinador i sincronització amb AnkiWeb gratuïtes; l'app oficial d'iOS és de pagament |
| Sincronització entre dispositius | Pro, 5 USD al mes | Gratuïta amb AnkiWeb |
| Plataformes | Web, macOS, Windows, Linux, iOS, Android | Windows, macOS, Linux, AnkiWeb, AnkiMobile oficial i AnkiDroid independent |
| Formats portables | Exportacions natives `.mochi`, Markdown i CSV | Formats natius `.colpkg` i `.apkg`, més text separat per tabulacions |
| Límits de dades i allotjament | Prioritza les dades locals; l'app principal no es presenta com a codi obert i no es documenta cap servei de sincronització amb allotjament propi admès oficialment | El repositori principal té llicència AGPL; es documenta un servidor oficial de sincronització que pots allotjar pel teu compte |

La distinció útil és entre **la simplicitat centrada en les notes i el control de tota la col·lecció**.

## Com s'organitza la interfície de Mochi

La interfície de Mochi s'entén millor si segueixes el recorregut d'una targeta.

Cada targeta pertany a una baralla. Fes clic a **New Card** (Targeta nova) i trobaràs un espai per escriure en Markdown en lloc de quadres fixos de pregunta i resposta. Una sola targeta pot contenir encapçalaments, llistes, codi, imatges, camps estructurats i enllaços. Afegeix `---` entre blocs per crear dues o més cares de repàs. Afegeix `[[double brackets]]` —claudàtors dobles— per fer referència a una altra targeta; Mochi crea automàticament un enllaç de retorn. La [descripció oficial de les targetes](https://mochi.cards/docs/cards/) també documenta plantilles amb marcadors de posició que mostren els valors dels camps estructurats.

Les targetes poden tenir dues funcions sense haver d'estar en sistemes separats:

- una targeta de repàs fa servir cares i entra en la repetició espaiada;
- una nota de consulta pot quedar-se a la mateixa baralla i arxivar-se, cosa que la treu de les cues de targetes noves i pendents de repàs sense eliminar-ne el contingut, les etiquetes, els enllaços ni l'historial.

Les [vistes de baralla](https://mochi.cards/docs/decks/custom-views/) són combinacions desades de filtres, ordenació i disposició. Pots mantenir una quadrícula per explorar el contingut habitualment i crear una altra vista per a una etiqueta, l'estat de repàs pendent, una retenció baixa o un repàs recent. Mochi també permet convertir una vista en una sessió d'estudi intensiu sense alterar la programació normal ni l'historial de repassos. Això és més concret que dir que la interfície és «neta»: una mateixa baralla pot fer de quadern, de base de dades filtrada i de cua d'estudi.

El [repàs diari](https://mochi.cards/docs/getting-started/reviewing-cards/) té dues etapes. A **New cards** (Targetes noves), pots afegir una targeta al calendari de repassos o triar Again (De nou) per tornar-la a veure al cap de poc. Un cop apresa, quan li toca repàs, la targeta mostra la cara següent i et demana que triïs **Forgot** (Oblidat) o **Remembered** (Recordat). Si l'oblides, Mochi fa servir una cua de repàs addicional abans de reiniciar-ne el progrés. El resultat és una decisió expressament limitada a l'hora de repassar.

## Mochi és gratuït? Què funciona sense connexió?

Sí, però «gratuït» i «sense connexió» volen dir coses diferents segons on el facis servir. Els [preus de Mochi](https://mochi.cards/) indiquen:

- **Free (Gratuït):** 0 USD per sempre, sense necessitat de registre i amb ús il·limitat sense connexió.
- **Pro:** 5 USD al mes; hi afegeix sincronització entre dispositius, publicació de baralles, camps dinàmics, integració amb IA i assistència per correu electrònic.

Mochi funciona a macOS, Windows, Linux, iOS, Android i al web. La seva [guia de descàrrega i instal·lació](https://mochi.cards/docs/getting-started/download-and-install/) en delimita l'ús pràctic:

| Entorn | Què volen dir gratuït i sense connexió |
|---|---|
| App instal·lada a l'ordinador o al mòbil | Pots fer servir Mochi sense connexió ni compte. Les dades es desen al dispositiu, de manera que una sola app instal·lada pot cobrir tota una rutina gratuïta. |
| App web sense Pro | El contingut es desa a l'emmagatzematge sense connexió del navegador. Mochi adverteix que el navegador pot esborrar aquestes dades sense avisar. |
| La mateixa col·lecció en diversos dispositius | La sincronització automàtica entre dispositius és una funció Pro, tot i que cada app instal·lada pot funcionar sense connexió. |

L'ús sense connexió i la sincronització són prestacions diferents. No necessites Pro només per crear targetes o repassar en una app descarregada. Sí que el necessites si vols que la mateixa col·lecció actualitzada passi automàticament del portàtil al mòbil. Per a les dades importants del pla gratuït, conserva una còpia de seguretat nativa en lloc de confiar en un dispositiu —i especialment en l'emmagatzematge del navegador— com a única còpia.

Si el funcionament sense connexió és el factor decisiu, compara l'ús concret dels teus dispositius a [Anki funciona sense connexió?](/blog/does-anki-work-offline/) i a la [guia general d'apps de targetes sense connexió](/blog/best-offline-flashcards-app/).

## Les targetes Markdown són el motiu principal per triar Mochi

L'avantatge real de Mochi és com Markdown canvia el material de base que mantens.

Una targeta de Mochi continua sent llegible com a text. El mateix document pot contenir una explicació breu, un bloc de codi, enllaços a idees relacionades i separadors entre les cares de repàs. Les targetes també poden fer servir camps i plantilles quan cal repetir una estructura. Quan s'aplica una plantilla, Mochi en mostra el Markdown amb els marcadors de posició dels camps i ignora el Markdown propi de la targeta en mostrar-la, sense eliminar-lo.

Anki parteix d'un model diferent. Una nota desa camps i les [plantilles de targeta](https://docs.ankiweb.net/templates/intro.html) decideixen quins camps apareixen i quines targetes es generen. Les plantilles fan servir HTML, amb CSS per als estils. Així, una sola nota de vocabulari pot generar targetes de reconeixement i de producció mentre manté les dades de base en un únic lloc.

Aquesta estructura dona a Anki més marge per a disposicions condicionals, variants de targetes generades automàticament, respostes escrites, estils personalitzats i maneres de treballar ampliades amb complements. També vol dir que Anki no és una app de targetes Markdown nativa. Per treballar amb Markdown a Anki cal una capa addicional de conversió o un complement.

La pregunta pràctica és senzilla: vols una nota que es pugui convertir en targeta o un tipus de nota estructurat que pugui generar diverses targetes? Mochi prioritza la primera opció. Anki, la segona.

## La repetició espaiada de Mochi ja inclou FSRS

Les comparatives que diuen que Mochi no té FSRS han quedat desfasades. Mochi hi va afegir una versió preliminar d'FSRS el 2025 i ha continuat publicant correccions relacionades amb la programació dels repassos. Tot i així, [l'algoritme propi de Mochi continua sent el predeterminat](https://mochi.cards/docs/reviewing/fsrs/).

L'algoritme predeterminat modifica els intervals amb multiplicadors fixos després de cada repàs, segons si has recordat o oblidat la resposta. Si actives FSRS a Review Settings (Configuració dels repassos), les targetes que ja has après passen a fer servir FSRS sense perdre l'historial. Pots definir la retenció objectiu, introduir paràmetres personalitzats i tornar a l'algoritme anterior més endavant.

Mochi manté les valoracions binàries amb qualsevol dels dos algoritmes:

- **Forgot** (Oblidat) correspon a Again (De nou) de l'FSRS.
- **Remembered** (Recordat) correspon a Good (Bé) de l'FSRS.

La documentació de Mochi diu que la valoració binària funciona amb FSRS, tot i que es perd part de la informació que aportarien Hard (Difícil) i Easy (Fàcil). Accepta paràmetres personalitzats optimitzats, però no té cap optimitzador integrat; per generar paràmetres personals cal un optimitzador extern d'FSRS i l'historial de repassos de Mochi.

La [configuració d'FSRS d'Anki](https://docs.ankiweb.net/deck-options.html#fsrs) va més enllà. La retenció desitjada i els paràmetres es poden vincular a configuracions predefinides, l'optimitzador integrat pot ajustar els paràmetres a l'historial de repassos i el simulador estima el nombre de repassos o els minuts d'estudi amb diferents configuracions. Anki també registra quatre resultats: Again (De nou), Hard (Difícil), Good (Bé) i Easy (Fàcil).

Aquests botons addicionals només ajuden si els fas servir amb coherència. El manual d'Anki considera Hard una resposta recordada correctament. Si prems Hard quan has oblidat la resposta, dones informació incorrecta a l'FSRS i pots obtenir intervals massa llargs.

Tria el repàs binari de Mochi si decidir entre recordar i oblidar et facilita la sessió. Tria Anki si vols la informació addicional de les quatre valoracions i faràs servir l'optimitzador, els controls de retenció, les configuracions predefinides o el simulador de càrrega d'estudi. Per comparar els algoritmes en lloc de les apps, consulta [FSRS o SM-2](/blog/fsrs-vs-sm-2/).

## Els preus de Mochi i Anki cobreixen costos diferents

Per estudiar en un sol ordinador, totes dues apps poden sortir gratis. El cost apareix en un lloc diferent quan afegeixes més dispositius a la rutina.

Mochi cobra **5 USD al mes** per la sincronització Pro i la combina amb publicació, camps dinàmics, integració amb IA i assistència. Les apps d'ordinador d'Anki són gratuïtes i el [web oficial d'Anki](https://apps.ankiweb.net/) descriu la sincronització amb AnkiWeb com a gratuïta. AnkiMobile és l'app oficial de pagament per a iPhone i iPad; AnkiDroid és un client gratuït per a Android desenvolupat de manera independent.

Per tant, la resposta a «Quina surt més barata?» depèn dels teus dispositius:

- un ordinador: totes dues poden ser gratuïtes;
- diversos ordinadors o dispositius Android: la sincronització allotjada gratuïta d'Anki evita una subscripció;
- iPhone o iPad: Anki hi afegeix una compra única de l'app, mentre que Mochi reserva la sincronització entre dispositius per al seu pla Pro de pagament recurrent;
- els usuaris de Mochi que ja volen publicar baralles, fer servir camps dinàmics o integrar-hi IA poden considerar la sincronització una part del paquet i no pas l'únic motiu del cost.

Consulta l'App Store de la teva regió abans de comparar els imports exactes a iOS. Aquesta anàlisi no fixa com a permanent un preu de botiga que pot variar segons el mercat.

## Allotjar Mochi no és el mateix que treballar amb dades locals

Sovint es confonen tres etiquetes:

- **Prioritat local** vol dir que la còpia de treball és al teu dispositiu i l'app pot continuar funcionant sense el seu servei al núvol.
- **Codi obert** vol dir que el codi font està disponible sota una llicència que permet examinar-lo i modificar-lo.
- **Allotjament propi** vol dir que el producte documenta una via admesa oficialment per executar el servei corresponent a la teva infraestructura.

Mochi documenta clarament el funcionament amb prioritat local. No presenta l'app principal com a codi obert: l'enllaç «Open source» (Codi obert) del peu del seu web públic porta a [un conjunt d'integracions](https://github.com/mochi-cards/open-source), no a l'aplicació principal. El seu web oficial tampoc no documenta cap substitut de la sincronització Pro amb allotjament propi admès oficialment.

Si cerques **allotjament de Mochi** perquè vols fer servir el teu servidor, aquest és el límit: pots conservar dades locals i còpies de seguretat natives, però la via documentada per treballar entre dispositius és Mochi Pro. La prioritat local ofereix un control útil sobre les dades; no equival a allotjar el servei pel teu compte.

El repositori principal d'Anki té [llicència AGPL versió 3 o posterior](https://github.com/ankitects/anki/blob/main/LICENSE), amb excepcions indicades per a alguns components. El manual oficial també documenta un [servidor de sincronització amb allotjament propi](https://docs.ankiweb.net/sync-server.html) per a usuaris avançats. Aquest servidor substitueix la sincronització d'AnkiWeb per als clients compatibles; no és una còpia del web d'AnkiWeb que puguis allotjar tu mateix, i Anki espera que qui l'operi s'encarregui de la línia d'ordres, les xarxes, el tallafoc, el protocol i les actualitzacions.

## Què conserva una importació d'Anki i què canvia

La [documentació d'importació de Mochi](https://mochi.cards/docs/import-and-export/importing/) admet fitxers `.apkg` d'Anki, inclòs l'historial de repassos. Però «importat» i «equivalent» no són el mateix resultat.

Durant la importació, Mochi converteix l'HTML a Markdown i elimina el CSS i el JavaScript. És una conversió de format entre dos models de targeta diferents. El material senzill d'anvers i revers és el cas més fàcil. Cal revisar després de la importació qualsevol targeta que depengui dels estils, la lògica de les plantilles, les interaccions amb respostes escrites o el JavaScript.

L'historial de repassos també requereix una tria explícita en exportar. El [manual d'exportació d'Anki](https://docs.ankiweb.net/exporting.html) diu que **Include Scheduling Information** (Inclou la informació de programació) controla si el paquet conté l'historial de repassos. Si no actives aquesta opció, Mochi no pot recuperar un historial que el `.apkg` mai no ha contingut.

Encara que l'historial s'importi, no esperis que les futures dates de repàs siguin idèntiques. Les dues apps poden fer servir algoritmes, valoracions, retencions objectiu, paràmetres, passos d'aprenentatge i configuracions de baralla diferents. Els esdeveniments conservats aporten dades al nou algoritme; no fan que els sistemes siguin idèntics.

## Les còpies natives i el text portable tenen funcions diferents

Abans de traslladar res, conserva una còpia de seguretat que pugui restaurar el sistema original. Una exportació llegible és útil, però no sempre permet restaurar-lo.

La [guia de còpies de seguretat de Mochi](https://mochi.cards/docs/getting-started/backing-up/) documenta dues opcions natives de protecció:

- Copiar tot el directori d'usuari conserva el contingut, l'historial de repassos, els adjunts, la configuració de l'app i l'estat de la sessió iniciada.
- Una exportació `.mochi` conserva les baralles, les targetes, les plantilles i els camps, els adjunts, les etiquetes i les metadades, l'historial de repassos, l'ordre de les targetes i l'estructura de les baralles.

Les [exportacions Markdown i CSV de Mochi](https://mochi.cards/docs/import-and-export/exporting/) són formats de portabilitat. Markdown crea un fitxer per targeta i carpetes per a les subbaralles, però perd l'historial de repassos, l'ordre de les targetes, les plantilles i les etiquetes de metadades, tret que les etiquetes siguin al Markdown. CSV pot exportar els camps de les plantilles o el contingut visible de l'anvers i el revers, però no conserva l'historial de repassos, les plantilles ni les etiquetes de metadades, tret que aquestes estiguin incorporades al contingut.

Anki fa una distinció semblant:

- Un `.colpkg` exporta tota la col·lecció amb la programació dels repassos i pot incloure fitxers multimèdia. Importar-lo substitueix les targetes de la col·lecció d'Anki de destinació.
- Un `.apkg` exporta una baralla i les seves subbaralles, amb opcions per incloure informació de programació, configuracions predefinides i fitxers multimèdia.
- Les notes en text pla fan servir camps separats per tabulacions amb format HTML incorporat. Conserven el contingut editable, no tot el comportament de la col·lecció.

Tornar de Mochi a Anki normalment implica fer servir CSV. Anki pot [assignar columnes de text als camps de les notes](https://docs.ankiweb.net/importing/text-files.html), però els enllaços de Mochi, el comportament de les targetes amb diverses cares, les plantilles i l'historial de repassos no es converteixen en objectes equivalents d'Anki a través d'aquest fitxer. Conserva l'exportació `.mochi` encara que la còpia d'Anki sembli correcta.

## Fes una prova reversible amb una baralla representativa

Un quadre de diàleg de migració demostra que s'ha acceptat un fitxer. No demostra que la teva col·lecció real continuï funcionant ni que en puguis recuperar contingut aprofitable. Prova les dues direccions sense tocar el perfil habitual d'Anki.

1. **Fes una còpia de seguretat de tot Anki.** Exporta un `.colpkg` amb fitxers multimèdia i desa'l fora del perfil de treball.
2. **Comprova que la còpia s'obre.** Crea un perfil temporal buit d'Anki i importa-hi el `.colpkg`. Importar un paquet de col·lecció substitueix la col·lecció de destinació; per això és important fer-ho al perfil temporal.
3. **Prepara una baralla representativa dins d'aquest perfil temporal.** Fes-la prou petita per revisar-la targeta per targeta, però inclou-hi tot allò de què depens: targetes bàsiques i invertides, text amb buits (cloze), plantilles personalitzades, CSS, JavaScript, imatges, àudio, equacions, etiquetes, baralles imbricades i historial de repassos.
4. **Exporta aquesta baralla com a `.apkg`.** Inclou-hi informació de programació, configuracions predefinides i fitxers multimèdia quan siguin rellevants. Aquestes opcions introdueixen les dades al paquet d'Anki; no prometen que Mochi reprodueixi tota la configuració.
5. **Importa-la en una baralla nova de Mochi.** Mantén intactes el teu perfil habitual d'Anki i la seva cua de repassos pendents.
6. **Revisa el resultat abans de repassar.** Compara el contingut, el format, els camps, els fitxers multimèdia, les etiquetes, l'estructura de la baralla i l'historial. Fixa't especialment en tot allò que depenia d'HTML, CSS, JavaScript o variants de targetes generades automàticament.
7. **Tria conscientment l'algoritme de repàs.** Mochi comença amb el seu propi algoritme. Activa FSRS només si és el que vols fer servir després de la prova.
8. **Repassa la còpia durant una setmana normal.** Valora el procés d'edició en Markdown, l'etapa de targetes noves, la decisió Recordat/Oblidat, el funcionament sense connexió i, si l'has pagada, la sincronització als dispositius que realment portes a sobre.
9. **Prova el camí de tornada.** Exporta la baralla de prova de Mochi com a `.mochi` per tenir una còpia nativa i com a CSV per a Anki. Fes servir CSV amb valors dels camps quan necessitis camps reutilitzables; fes servir CSV amb el contingut de les cares tal com es mostren quan necessitis principalment el contingut visible de l'anvers i el revers. Importa aquest CSV en un altre perfil buit d'Anki i assigna'n les columnes a un tipus de nota adequat.
10. **Anota cada pèrdua que acceptes.** Comprova per separat el trajecte d'anada i el de tornada. Els estils exactes, el comportament de les targetes amb diverses cares, els complements, les variants generades, les valoracions de repàs, l'historial o les futures dates de repàs poden importar més en l'ús diari que en una taula comparativa.

La tornada amb CSV és una migració de contingut, no una restauració completa de Mochi: no inclou l'historial de repassos, les plantilles ni les etiquetes de metadades, tret que aquestes etiquetes estiguin incorporades al contingut. Si Mochi no resol el problema que havies concretat, elimina la baralla de prova i continua amb el perfil original d'Anki. Si el resol, migra les baralles reals d'una en una i conserva les còpies `.colpkg` d'Anki i `.mochi` de Mochi durant diversos cicles normals de repàs.

## Per a qui són adequades les targetes d'estudi de Mochi?

Mochi és una bona opció quan:

- ja fas servir Markdown per escriure i pensar;
- vols les notes i les targetes de repàs en un mateix espai de treball enllaçat;
- prefereixes una decisió senzilla entre Recordat i Oblidat en lloc de quatre valoracions;
- l'ús sense connexió en un sol dispositiu cobreix la teva rutina gratuïta, o la sincronització Pro et compensa per 5 USD al mes;
- la teva col·lecció és nova o prou senzilla perquè convertir-la des d'Anki impliqui poc risc.

Queda't amb Anki quan:

- els teus tipus de notes generen diverses variants de targeta importants;
- les plantilles HTML/CSS, el JavaScript, els complements o les baralles compartides formen part del teu sistema;
- la sincronització gratuïta entre dispositius t'importa més que escriure en Markdown;
- vols l'optimitzador d'FSRS d'Anki, els controls de configuracions predefinides, les quatre valoracions i el simulador de càrrega d'estudi;
- ja et funcionen bé anys de dades de repàs i de comportaments personalitzats.

L'alternativa més raonable a Mochi depèn del motiu pel qual cap de les dues opcions t'encaixa. Per a una col·lecció nova i més senzilla, les [funcions de Nibomo](/ca/features/) inclouen repassos amb FSRS, estudi sense connexió i sincronització, transferència de targetes, etiquetes i fitxers multimèdia en formats portables, accés per a agents i una via documentada d'allotjament propi. El desenvolupo jo, i els seus límits importen: no substitueix el quadern Markdown connectat de Mochi ni el sistema consolidat de plantilles i complements d'Anki. La [guia per començar](/docs/getting-started/) mostra les vies actuals d'ús allotjat, mòbil, amb agents i amb allotjament propi.

## Què convé tenir present per decidir

Mochi és més que una interfície d'Anki més bonica. La seva idea central és que una nota Markdown, un registre de coneixement enllaçat i una targeta de repetició espaiada poden ser el mateix objecte. El pla gratuït cobreix el treball sense compte ni connexió; Pro hi afegeix les funcions allotjades, inclosa la sincronització entre dispositius.

És un bon compromís per a qui comença una col·lecció nova centrada en Markdown. També pot compensar canviar des d'Anki si la prova amb una baralla representativa demostra que el Markdown natiu i els repassos binaris eliminen dificultats reals.

Per a qui ja té una col·lecció consolidada a Anki, cal demostrar que el canvi val la pena. Fes una còpia de seguretat de la col·lecció, prova les targetes amb més comportaments personalitzats i queda't amb Anki tret que Mochi millori prou la teva rutina setmanal per justificar les funcions concretes de format, plantilles, programació i ecosistema que deixes enrere.
