---
title: "La millor configuració de FSRS per a Anki el 2026: retenció, passos i càrrega de repàs"
description: "Tria una configuració prudent de FSRS per a la retenció desitjada, els passos d'aprenentatge, l'optimització, la reprogramació i la càrrega de repàs a Anki 26.08 amb FSRS-6."
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "configuració FSRS"
  - "millor configuració FSRS"
  - "configuració FSRS Anki"
  - "retenció desitjada FSRS"
  - "passos d'aprenentatge FSRS"
  - "simulador FSRS"
  - "optimitzar paràmetres FSRS"
  - "FSRS-6"
---

Passar la retenció desitjada d'Anki del 90% al 95% sembla un canvi petit. Però no significa un augment del 5% de la feina. FSRS ha d'escurçar els intervals a mesura que augmenta l'objectiu, i una col·lecció amb un llarg historial pot acabar amb una cua de repàs molt més carregada. Si també actives **Reschedule cards on change** —reprogramar les targetes quan es modifica la configuració—, part d'aquesta feina pot arribar de cop.

Per això, la millor configuració de FSRS no és una cadena de paràmetres per copiar. És una seqüència de decisions: establir una càrrega de feina que puguis mantenir, triar un objectiu de record dins d'aquest marge, ajustar el model al teu historial i conservar les dates de repàs existents, tret que les vulguis recalcular expressament.

Els noms de les opcions i el comportament que s'expliquen a continuació corresponen a la [versió 26.08 d'Anki](https://github.com/ankitects/anki/releases/tag/26.08) i als seus controls de FSRS-6. Si primer necessites entendre el model, abans de configurar-lo, llegeix [Què és FSRS?](/blog/what-is-fsrs/). Si encara estàs triant un planificador, comença per [FSRS o SM-2](/blog/fsrs-vs-sm-2/).

> **Declaració d'interessos:** soc Kirill Markin i desenvolupo [Nibomo](/ca/features/). Anki ofereix un ajust personalitzat dels paràmetres i simuladors experimentals de càrrega de feina que Nibomo encara no té. La comparació cap al final de l'article exposa aquestes diferències.

**Dades comprovades:** 8 de setembre de 2026.

![Un operador d'una resclosa de canal prova el cabal d'aigua en una maqueta abans de modificar la resclosa real](/blog/fsrs-settings-v2.png)

## La resposta breu: comença per aquí

Per a la majoria d'usuaris d'Anki, aquestes són opcions de partida prudents, no pas una configuració universal:

| Opció o hàbit | Punt de partida prudent | Per què |
| --- | --- | --- |
| Retenció desitjada | `0.90` | És el valor predeterminat d'Anki i equilibra el record amb la càrrega de repàs. |
| Paràmetres de FSRS | Fes servir **Optimize Current Preset**; no enganxis ni editis els pesos a mà | L'optimitzador ajusta el model al teu historial de repàs. |
| Freqüència d'optimització | Com a màxim un cop al mes; normalment n'hi ha prou amb un cop cada pocs mesos | Anki no recomana optimitzar sovint. |
| Passos d'aprenentatge | Mantén pocs passos que es puguin completar el mateix dia | Les seqüències llargues de passos retarden la planificació basada en el model. |
| Passos de reaprenentatge | Redueix-los al mínim i fes que durin menys d'un dia | El mateix límit s'aplica quan falles una targeta de repàs. |
| Reprogramar les targetes quan es modifica la configuració | Desactivat | La configuració nova pot aplicar-se als repassos futurs sense refer la cua d'avui. |
| Interval màxim | Conserva el valor predeterminat de 100 anys | Un límit més curt fa tornar més sovint les targetes ben apreses. |
| Targetes noves al dia | Tria el nombre a partir d'una càrrega que puguis mantenir | Cada targeta nova genera feina d'aprenentatge ara i repassos més endavant. |
| Again i Hard | Again indica que has fallat; Hard, que has recordat la resposta amb dificultat | Les valoracions incorrectes donen al model un historial incorrecte. |

Si pots assumir els repassos i la teva configuració ja s'assembla a aquesta, potser no cal canviar res. Mantenir la configuració al dia no és estudiar.

## Separa tres decisions

Sovint es barregen la retenció desitjada, els paràmetres de FSRS i la càrrega diària com si fossin una sola cosa. Cada element controla un aspecte diferent:

- **La retenció desitjada** és el teu objectiu de record. La tries segons els teus objectius i el temps que tens per estudiar.
- **Els paràmetres de FSRS** ajusten el model de memòria a l'historial de repàs. Els calcula l'optimitzador d'Anki.
- **Els límits de targetes noves i repassos** controlen quant material entra al sistema i quanta feina pendent pot mostrar Anki cada dia.

Aquesta separació fa que sigui molt més fàcil detectar problemes. Una cua llarga no implica necessàriament que els paràmetres siguin incorrectes. Una baralla amb contingut important no necessita necessàriament un preajust de paràmetres separat. I abaixar la retenció desitjada no arreglarà un ritme d'incorporació de targetes que mai no ha estat sostenible.

## Tria la retenció desitjada segons la càrrega, no l'ambició

La retenció desitjada indica a FSRS quina probabilitat vols tenir de recordar una targeta quan arribi el moment de repassar-la. Amb `0.90`, FSRS programa els repassos al voltant d'una probabilitat prevista de record del 90%. És un objectiu del model, no una garantia que encertaràs exactament el 90% de les respostes en cada sessió o examen.

L'equilibri funciona en tots dos sentits:

- Si augmentes la retenció desitjada, els intervals s'escurcen i augmenten els repassos.
- Si l'abaixes, els intervals s'allarguen i augmenten els errors.
- Si l'abaixes massa, el reaprenentatge addicional després dels errors pot consumir part del temps que volies estalviar.

El valor predeterminat d'Anki és el 90%. La seva [guia sobre la retenció desitjada](https://docs.ankiweb.net/deck-options.html#desired-retention) avisa que la càrrega creix de pressa quan l'objectiu s'acosta al 100% i recomana mantenir-se per sota del 97%. L'[explicació oficial de la retenció òptima](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) tracta l'altre extrem de la corba: una retenció molt baixa també pot ser ineficient perquè les targetes oblidades necessiten més feina.

Comença amb `0.90` i canvia-ho només després de comprovar la càrrega. Un objectiu més alt pot tenir sentit quan oblidar el contingut té un cost real. Un objectiu més baix pot convenir si els repassos resten temps a altres formes d'estudi més valuoses. Cap dels dos canvis arregla les targetes ambigües, les valoracions poc sinceres o un excés de targetes noves.

### La retenció de la baralla i els paràmetres del preajust tenen àmbits diferents

A Anki 26.08, l'opció de retenció desitjada (**Desired retention**) es pot aplicar al preajust compartit (**Shared Preset**) o només a la baralla actual (**This deck**). Així pots mantenir baralles relacionades en un mateix preajust de paràmetres i donar a una baralla concreta el seu propi objectiu de retenció.

Fes servir aquest ajust específic quan el cost d'oblidar sigui diferent. Una baralla per preparar un examen d'habilitació professional pot justificar un objectiu més alt que una baralla de consulta de baixa prioritat, encara que totes dues facin servir el mateix model ajustat.

Triar **This deck** no fa que els paràmetres de FSRS siguin específics d'aquella baralla. Per defecte, Anki ajusta els paràmetres amb l'historial de repàs de totes les baralles assignades al preajust actual. Si uns grups de baralles tenen una dificultat subjectiva molt diferent d'altres, la manera prevista d'ajustar-los per separat és fer servir preajustos diferents.

## Fes servir Help Me Decide i el simulador per a preguntes diferents

Anki 26.08 ofereix dos controls experimentals separats:

- **Help Me Decide (Experimental)** mostra una corba personalitzada de retenció i càrrega. Serveix per preguntar-te: «Quin objectiu de retenció encaixa amb el nombre de repassos o els minuts que hi puc dedicar de manera sostinguda?»
- **FSRS Simulator (Experimental)** estima com es pot comportar una configuració al llarg del temps. Serveix per comparar canvis en la retenció, el ritme de targetes noves, els límits de repassos i l'interval màxim.

La [documentació del simulador FSRS](https://docs.ankiweb.net/deck-options.html#the-simulator) enumera les dades principals que rep:

- dies que cal simular
- targetes noves addicionals que cal simular
- targetes noves al dia
- màxim de repassos al dia
- interval màxim
- retenció desitjada i paràmetres de FSRS del preajust

La simulació també fa servir els estats de memòria reals de les targetes del preajust. Això la fa més útil per a una col·lecció amb historial que no pas multiplicar el nombre de targetes pendents d'avui per un percentatge genèric.

Simula tres escenaris abans de canviar la configuració real:

1. La retenció i el ritme de targetes noves actuals.
2. L'objectiu de retenció que estàs considerant.
3. El mateix objectiu amb menys targetes noves al dia.

El tercer escenari prova una alternativa habitual: mantenir l'objectiu de record i frenar l'entrada de material nou. Si això dona una previsió assumible, no cal que acceptis oblidar més coses només per alleugerir la cua. La guia [Quantes targetes noves al dia?](/blog/how-many-new-flashcards-per-day/) aprofundeix en aquest ritme d'incorporació.

Totes dues eines fan estimacions. Els dies sense repassar, les targetes editades, el material nou i els canvis en els hàbits de valoració poden fer que la càrrega real s'allunyi del gràfic. Fes servir la comparació per triar una direcció, no per prometre una cua exacta d'aquí a uns mesos.

Les guies antigues poden parlar de **Compute Minimum Recommended Retention**, o CMRR. Anki va eliminar aquesta funció a la versió 25.07. Ja no és el procediment actual per triar la retenció desitjada.

## Optimitza els paràmetres de FSRS amb el teu historial

La retenció desitjada expressa el teu objectiu. Els paràmetres de FSRS descriuen com s'ajusta el model als teus repassos.

A Anki 26.08, fes servir **Optimize Current Preset** per ajustar els paràmetres del preajust actiu. Per defecte, Anki inclou l'historial de repàs de totes les baralles que fan servir aquell preajust; pots ajustar la cerca si cal limitar el conjunt de dades per a l'ajust. **Optimize All Presets** actualitza tots els preajustos en una sola operació.

No introdueixis els pesos a mà ni els copiïs de Reddit, d'un vídeo o de la baralla d'una altra persona. Les seves targetes, els moments en què repassa i els seus hàbits de valoració no són el teu historial. Una llista ben endreçada de [pesos de FSRS-6](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) no és una estratègia d'estudi que es pugui traslladar a qualsevol persona.

Torna a optimitzar només quan hagis acumulat una quantitat significativa d'historial de repàs nou. El manual d'Anki diu que un cop al mes és suficient, mentre que les indicacions de l'aplicació 26.08 diuen que n'hi ha prou amb un cop cada pocs mesos. La conclusió pràctica és la mateixa: no cal optimitzar cada setmana, i encara menys després de cada sessió.

### Comprova l'estat del preajust actual

Activa **Check health when optimizing (slow)** quan vulguis que Anki avaluï fins a quin punt FSRS pot adaptar-se a l'historial del preajust actual. Aquesta comprovació s'executa amb **Optimize Current Preset**, no amb **Optimize All Presets**.

Si el resultat és dolent, examina les dades abans de tocar els pesos. La [guia d'Anki sobre els paràmetres de FSRS](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) esmenta causes habituals: tenir menys d'uns quants centenars de repassos, prémer Hard després d'un error i no prémer Again quan no recordes la resposta. Si tens poc historial útil, conserva els valors predeterminats i optimitza més endavant en lloc d'agafar els paràmetres d'un altre usuari.

## Again vol dir que has fallat; Hard és un encert

Aquest hàbit importa tant com qualsevol opció de configuració.

Fes servir **Again** quan no hagis pogut donar la resposta requerida o t'hagis equivocat. Fes servir **Hard** només quan l'hagis recordat correctament, però amb molt d'esforç o dubtes. Good i Easy també indiquen encerts.

Prémer Hard per evitar l'interval curt d'Again registra un encert després d'un error. FSRS aprèn aleshores a partir d'un fet incorrecte. Tria el botó que descriu com has recordat la resposta, no el que mostra l'interval que voldries obtenir.

Les targetes ambigües dificulten una valoració sincera. Si una pregunta demana cinc dades i en recordes quatre, el problema de planificació ha començat a l'editor. Divideix o reescriu la targeta. Per a les targetes que continues fallant malgrat repassar-les repetidament, consulta [Com arreglar les targetes que s'encallen](/blog/how-to-fix-leech-flashcards/).

## Mantén curts els passos d'aprenentatge de FSRS, o deixa'ls buits expressament

Els passos d'aprenentatge i reaprenentatge determinen quan torna a aparèixer una targeta a curt termini, abans que s'apliqui la planificació habitual a llarg termini. No són un altre objectiu de retenció.

La guia d'Anki sobre FSRS recomana dues restriccions:

- cada pas ha de durar menys d'un dia i s'ha de poder completar el mateix dia
- el nombre de repeticions dins d'un mateix dia ha de ser petit

Les seqüències llargues com ara `1m 10m 1d 3d` traslladen un vell hàbit de SM-2 a FSRS. Els passos d'un dia o més retarden la planificació basada en el model i poden generar etiquetes de botons confuses, com ara que Hard mostri un interval més llarg que Good.

Una seqüència curta com ara `1m 10m`, amb un pas de reaprenentatge de `10m`, és una base prudent si encaixa amb les teves sessions. Fer més repeticions el mateix dia no és automàticament millor.

Anki 26.08 també permet deixar buit qualsevol dels camps de passos d'aprenentatge o reaprenentatge. Amb FSRS activat, un camp buit delega aquesta planificació a curt termini a FSRS. És una funció experimental, i l'interval d'Again pot ser d'un dia o més. Conserva passos manuals curts si necessites que la targeta torni a aparèixer el mateix dia en un moment previsible; buida un camp només si acceptes expressament que FSRS en triï el moment.

## Deixa desactivada la reprogramació en canviar la configuració per fer una transició gradual

Amb **Reschedule cards on change** desactivat, que és el valor predeterminat, activar FSRS o canviar la retenció desitjada o els paràmetres no modifica immediatament les dates de repàs existents. La configuració nova s'aplica quan repasses les targetes més endavant, de manera que la cua canvia gradualment.

Si deses un d'aquests canvis de FSRS amb l'opció activada, les dates es recalculen immediatament. Segons el nou objectiu i els estats de les targetes, moltes poden quedar pendents de repàs alhora. Anki també afegeix entrades a l'historial per a les targetes reprogramades, cosa que augmenta la mida de la col·lecció.

Aquesta opció només és útil quan realment vols recalcular la planificació de manera retroactiva. Per a una col·lecció amb un llarg historial:

1. Crea una còpia de seguretat nova i confirma que saps com desfer el canvi o restaurar-la.
2. Executa el simulador amb la configuració proposada.
3. Tria un sol canvi de configuració; no combinis diversos experiments.
4. Quan el desis, activa la reprogramació només si vols recalcular immediatament les dates de repàs i pots assumir-ne el resultat.

Anki recomana explícitament fer una còpia de seguretat quan passes de SM-2 a FSRS amb reprogramació. La [guia de còpies de seguretat de targetes](/blog/how-to-back-up-flashcards/) explica per què saber com recuperar les dades importa tant com el fitxer de la còpia.

## Mantén un interval màxim ampli

L'interval màxim predeterminat d'Anki és de 100 anys. Sembla estrany fins que recordes que és un límit superior, no una promesa que cada targeta ben apresa desapareixerà durant un segle.

Abaixar el límit obliga les targetes que coneixes bé a tornar abans i augmenta la càrrega de feina. Quan s'arriba al límit, Hard, Good i Easy poden mostrar el mateix interval perquè cap no pot superar el màxim.

Un interval màxim més curt pot ser raonable quan un examen fixa un termini real, el material canvia sovint o una norma professional exigeix tornar a veure el contingut independentment del record previst. Coordina aquest límit amb el calendari i el simulador en lloc de triar una xifra petita per neguit. [Com estudiar per a un examen amb FSRS](/blog/how-to-study-for-an-exam-with-fsrs/) tracta aquest cas concret.

Per a l'aprenentatge habitual a llarg termini, mantén un límit ampli. La retenció desitjada ja controla quan la probabilitat prevista de record ha de donar lloc a un repàs.

## El ritme de targetes noves forma part de la decisió sobre la càrrega

FSRS pot distribuir els repassos; no pot fer sostenible una entrada il·limitada de material. Cada targeta nova genera feina d'aprenentatge ara i feina de repàs més endavant.

Quan la cua és massa carregada, revisa aquests punts abans d'abaixar la retenció desitjada:

- targetes noves al dia
- importacions grans o lots de targetes generades
- un límit màxim de repassos que amaga contínuament feina pendent
- targetes que s'encallen i targetes poc clares que obliguen a repetir intents
- dies sense repassar

Fes servir **Additional new cards to simulate** quan sàpigues que una baralla creixerà. Una previsió basada només en la col·lecció d'avui no representarà la càrrega després d'una importació gran.

Si el resultat és massa alt, redueix el ritme de targetes noves i torna a simular. Així conserves l'objectiu de record sense demanar al planificador que toleri més oblits.

## Anki i Nibomo ofereixen controls de FSRS diferents

Tots dos productes fan servir FSRS-6, però les opcions de FSRS d'Anki no tenen una correspondència exacta amb les de Nibomo.

| Funció | Anki 26.08 | Nibomo |
| --- | --- | --- |
| Retenció desitjada | **Shared Preset** o **This deck** | Configurable per espai de treball; valor predeterminat `0.90` |
| Paràmetres de FSRS | **Optimize Current Preset** o **Optimize All Presets** a partir de l'historial de repàs | Els pesos predeterminats oficials de FSRS-6 són fixos i l'usuari no els pot configurar a la v1 |
| Passos d'aprenentatge | Configurables; deixar el camp buit perquè FSRS els planifiqui és experimental | Configurables per espai de treball; valor predeterminat `1m 10m` |
| Passos de reaprenentatge | Configurables; deixar el camp buit perquè FSRS els planifiqui és experimental | Configurables per espai de treball; valor predeterminat `10m` |
| Interval màxim | Valor predeterminat de 100 anys | Valor predeterminat de 36.500 dies, també 100 anys |
| Canvis de configuració | S'apliquen als repassos futurs per defecte; reprogramació retroactiva opcional | Només s'apliquen als repassos futurs; no es recalculen les dates existents |
| Eines de càrrega de feina | **Help Me Decide (Experimental)** i **FSRS Simulator (Experimental)** | Cap simulador de càrrega equivalent a la v1 |

Nibomo fa servir les valoracions habituals Again, Hard, Good i Easy, i conserva l'estat de memòria de FSRS de cada targeta. Els seus planificadors de backend, iOS i Android són implementacions independents que es mantenen perquè es comportin de la mateixa manera; el flux de repàs web reutilitza el planificador del backend en lloc d'afegir-ne una quarta còpia.

Aquests límits i valors predeterminats estan documentats a l'[especificació pública de planificació amb FSRS de Nibomo](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md). La diferència és clara: Nibomo ofereix una configuració pràctica de FSRS-6 per espai de treball, mentre que Anki ofereix més precisió en l'àmbit d'aplicació, ajust personalitzat i simulació. Si aquests controls són essencials, Anki és l'opció més adequada.

## Un procediment més segur per a una col·lecció amb historial

Si ja tens mesos o anys d'historial de repàs, segueix aquest ordre:

1. **Fes servir correctament les valoracions.** Again és un error; Hard és un encert amb dificultat.
2. **Optimitza el preajust actual.** Ajusta'l al teu historial en lloc d'editar o copiar pesos.
3. **Fes la comprovació d'estat si cal.** Tracta un historial escàs o inconsistent com un problema de dades.
4. **Fes servir Help Me Decide.** Tria un rang de retenció segons el nombre de repassos o els minuts que hi puguis dedicar de manera sostinguda.
5. **Executa el simulador.** Compara la configuració actual, l'objectiu proposat i un ritme menor de targetes noves.
6. **Canvia una sola variable de la configuració real.** Ajusta primer la retenció o el ritme de targetes noves i després observa la cua real.
7. **Mantén curts els passos.** Elimina les seqüències d'aprenentatge i reaprenentatge amb passos d'un dia o més; fes servir camps buits només com a experiment.
8. **Conserva un interval màxim ampli.** Escurça'l només si tens un termini o un requisit definit.
9. **Mantén la reprogramació desactivada.** Si necessites recalcular les dates immediatament, fes primer una còpia de seguretat i preveu la cua que en resultarà.

Aquest ordre permet desfer els canvis en la planificació d'una col·lecció amb historial durant tant de temps com sigui possible. També evita que tres problemes diferents —l'ajust del model, l'objectiu de record i el flux de material nou— es converteixin en un sol embolic de configuració.

## Preguntes freqüents sobre la millor configuració de FSRS

### El 90% és la millor retenció desitjada per a FSRS?

És el punt de partida general més prudent perquè és el valor predeterminat d'Anki i evita el tram de creixement més pronunciat de la càrrega amb una retenció alta. El millor valor per a cada baralla depèn del cost d'oblidar i de la feina que puguis mantenir. Consulta **Help Me Decide (Experimental)** abans de canviar-lo.

### Hauria d'establir la retenció desitjada al 95%?

Només després de comprovar els repassos o minuts addicionals. Una baralla ben feta amb contingut important pot justificar el 95%; una col·lecció gran d'ús ocasional pot tornar-se innecessàriament feixuga. No activis la reprogramació retroactiva al mateix temps, tret que vulguis recalcular expressament i de manera immediata les dates de repàs.

### Amb quina freqüència hauria d'optimitzar els paràmetres de FSRS?

Un cop al mes ja és prou freqüent, i les indicacions d'Anki 26.08 diuen que n'hi ha prou amb un cop cada pocs mesos. Optimitza després d'haver acumulat una quantitat significativa d'historial nou, no seguint una rutina diària o setmanal.

### Cal deixar buits els passos d'aprenentatge de FSRS?

Deixar buits els passos d'aprenentatge o reaprenentatge permet a Anki 26.08 delegar la planificació a curt termini corresponent a FSRS. La funció és experimental i si prems Again, el repàs es pot programar per a un dia o més endavant. Mantenir pocs passos dins del mateix dia continua sent l'opció prudent.

### Canviar la configuració de FSRS reprograma les targetes existents d'Anki?

No, per defecte. Amb **Reschedule cards on change** desactivat, la configuració nova afecta els repassos futurs sense refer immediatament la cua. Activar-lo modifica les dates i pot deixar moltes targetes pendents de repàs, així que fes primer una còpia de seguretat.

### CMRR encara forma part d'Anki?

No. Anki va eliminar Compute Minimum Recommended Retention a la versió 25.07. A Anki 26.08, fes servir **Help Me Decide (Experimental)** i **FSRS Simulator (Experimental)** per comparar la retenció amb la càrrega estimada.

### Nibomo fa servir la mateixa configuració que Anki?

Fa servir FSRS-6 i permet configurar la retenció desitjada, els passos d'aprenentatge, els de reaprenentatge, l'interval màxim i la variació aleatòria dels intervals (*fuzz*) per espai de treball. No copia tot el model de configuració d'Anki: els pesos són fixos a la v1, els canvis només s'apliquen als repassos futurs i no hi ha optimització personalitzada dels paràmetres ni simulador de càrrega.

## Decideix la càrrega abans que el percentatge

Una bona configuració de FSRS posa la cua de repàs al servei d'un pla d'estudi real. Comença amb el 90%, estima la feina, controla l'entrada de targetes noves i augmenta la retenció només quan recordar més compensi els repassos addicionals. Mantén curts els passos, ampli l'interval màxim i sinceres les valoracions.

Després, surt de la pantalla de configuració. El planificador necessita repassos constants més que una altra tarda d'ajustos.
