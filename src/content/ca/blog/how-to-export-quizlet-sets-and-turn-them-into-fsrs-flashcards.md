---
title: "Com exportar conjunts de Quizlet el 2026 (i per què no apareix el botó Exporta)"
description: "Exporta un conjunt de Quizlet amb els passos actuals del web. Si no apareix Exporta, comprova si el conjunt és teu, si n'has fet una còpia o si fas servir l'app mòbil."
image: "/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png"
date: "2026-06-10"
updated: "2026-08-30"
keywords:
  - "com exportar Quizlet"
  - "com exportar targetes de Quizlet"
  - "no apareix el botó d'exportació de Quizlet"
  - "descarregar targetes de Quizlet"
  - "Quizlet a CSV"
  - "Quizlet a Anki"
---

Si no apareix el botó **Exporta (Export)** a Quizlet, comença per dues comprovacions: vas crear el conjunt original i fas servir el web de Quizlet? Quizlet limita l'exportació al creador original d'un conjunt, i aquesta funció només està disponible al web. No es pot exportar un conjunt copiat, encara que la còpia ara aparegui a la teva biblioteca.

Si compleixes els requisits, l'exportació és ràpida: obre el conjunt al web, tria **Més → Exporta (More → Export)**, configura com s'organitzen els termes i les definicions i selecciona **Copia el text (Copy text)**. Quizlet no descarrega cap fitxer de baralla. Copia el text al porta-retalls, sense imatges.

**Informació verificada:** 30 d'agost de 2026, amb les [instruccions oficials d'exportació de Quizlet](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets).

![Un empleat d'arxiu comprova les fitxes de propietat abans de lliurar targetes de text aparellades, amb dues carpetes de documents preparades i les fotografies darrere del vidre](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png)

## Primer: hauria d'aparèixer el botó Exporta?

Fes aquesta comprovació abans de provar de descarregar les targetes de Quizlet d'una altra manera:

| La teva situació | Hauria d'estar disponible Exporta? | Pas següent |
| --- | --- | --- |
| Vas crear el conjunt original i l'has obert al web de Quizlet | Sí, segons la pàgina d'ajuda de Quizlet | Segueix els passos de més avall |
| Fas servir l'app d'iOS o Android | No; només es pot exportar des del web | Obre Quizlet en un navegador web i inicia sessió |
| Has copiat el conjunt d'un altre usuari | No; Quizlet indica que els conjunts copiats no es poden exportar | No esperis que la còpia desbloquegi Exporta |
| Pots veure el conjunt, però no el vas crear | No; poder-lo veure no et converteix en el creador | Demana un fitxer d'origen al creador o refes el conjunt amb material que puguis utilitzar |

Si vas crear el conjunt original però el botó d'exportació de Quizlet encara no apareix, confirma que has iniciat sessió amb el compte al qual pertany i que has obert l'original, no una còpia. La pàgina d'ajuda de Quizlet no documenta cap altra via d'exportació. Arribat a aquest punt, contacta amb el servei d'assistència de Quizlet en lloc de confiar en una eina de descàrrega que prometi saltar-se la restricció.

## Com exportar targetes de Quizlet al web

Per a un conjunt que hagis creat tu:

1. Inicia sessió al web de Quizlet.
2. Selecciona **La teva biblioteca (Your library)**.
3. Selecciona **Conjunts de targetes (Flashcard sets)**.
4. Obre el conjunt que vols exportar.
5. Obre el menú **Més (More)**.
6. Selecciona **Exporta (Export)**.
7. Tria com s'han d'organitzar els termes i les definicions.
8. Selecciona **Copia el text (Copy text)**.
9. Enganxa el resultat en un editor de text pla.

Aquest és tot el procés actual. No hi ha cap botó final de descàrrega.

Per a targetes habituals amb anvers i revers, recomano una tabulació entre el terme i la definició i un salt de línia entre targetes. Aquesta tria de separadors és un consell pràctic, no un requisit de Quizlet. Les tabulacions solen ser més fàcils de revisar que les comes, perquè les comes apareixen molt sovint dins de les definicions.

Un fitxer ben format amb dues targetes tindria aquest aspecte, amb una tabulació al mig de cada fila:

```text
photosynthesis	Process plants use to convert light energy into chemical energy
mitosis	Cell division that produces two genetically identical daughter cells
```

## Què conserva l'exportació de Quizlet

Quizlet descriu aquesta funció de manera limitada: exporta els **termes i les definicions** d'un conjunt creat pel mateix usuari. També indica que no es poden exportar les imatges.

El resultat enganxat és la referència més segura per saber què es pot conservar. Si un text, un separador o un salt de línia hi apareix, el pots desar en un fitxer. La pàgina d'ajuda de Quizlet no promet transferir carpetes, modes d'estudi, format, nivell de domini, historial de repassos ni programació.

Per tant, és una còpia del text de les targetes, no una còpia de seguretat de Quizlet que puguis restaurar. La mateixa distinció importa si has cercat «descarregar targetes de Quizlet»: Quizlet copia text al porta-retalls, i tu mateix crees el fitxer.

## Desa una còpia original en UTF-8 abans de netejar res

Assegura't de poder desfer els canvis:

1. Enganxa l'exportació en un editor de text pla.
2. Desa-la en UTF-8, per exemple com a `biology-quizlet-raw.txt`.
3. Duplica-la amb el nom `biology-quizlet-working.txt`.
4. Deixa intacte el fitxer original i edita només la còpia de treball.

Abans d'importar el fitxer de treball, revisa'l amb el conjunt de Quizlet encara obert:

- Activa la visualització dels espais en blanc i comprova on apareixen les tabulacions i els salts de línia.
- Cerca el separador que has triat dins dels termes i les definicions. Una tabulació de més pot crear un tercer camp inesperat.
- Busca definicions amb salts de línia propis; es podrien interpretar com a targetes addicionals.
- Compara el principi, el mig i el final del fitxer amb Quizlet, incloent-hi les definicions més llargues.
- Tanca el fitxer i torna'l a obrir; després comprova els accents, les escriptures no llatines, els símbols i les cometes i els apòstrofs tipogràfics.
- Marca els camps buits, els duplicats i les files irregulars en lloc de donar per fet com s'han de corregir.

Compara el nombre de línies amb el de targetes només quan cada targeta ocupi exactament una línia. Aquesta drecera no funciona amb definicions de diverses línies.

Conserva el fitxer original encara que la còpia de treball sembli correcta. Si una importació desplaça un camp o perd contingut, encara tindràs una referència intacta.

## De Quizlet a CSV: crea el fitxer amb cura

Canviar l'extensió d'un fitxer de `.txt` a `.csv` no el converteix. Un CSV necessita separadors coherents i l'ús correcte de cometes per delimitar contingut que contingui comes, cometes o diverses línies.

Per crear un fitxer CSV a partir de Quizlet amb seguretat:

1. Conserva intacta la còpia de seguretat del text original.
2. Obre la còpia de treball en un full de càlcul i selecciona exactament el separador que has fet servir a Quizlet.
3. Confirma que cada registre previst té dues columnes: terme i definició.
4. Revisa les cometes, els separadors i les definicions de diverses línies.
5. Exporta el fitxer com a CSV en UTF-8.
6. Torna a obrir el CSV en una previsualització nova abans de fer-lo servir en un altre lloc.

Un full de càlcul pot afegir les cometes que necessita el CSV. Una substitució global de tabulacions per comes no ho pot fer de manera fiable.

## Porta el text a Nibomo per crear esborranys i revisar-los

[Nibomo](/ca/features/) no té cap importador directe de Quizlet. A la versió allotjada de Nibomo, pots adjuntar fitxers TXT o CSV perquè la IA generi esborranys; no és una migració sense pèrdues.

1. Conserva el fitxer original de Quizlet fora de l'app.
2. Adjunta el TXT netejat o el CSV preparat amb cura al xat d'IA de Nibomo.
3. Indica a l'assistent quin separador i quins camps fa servir el fitxer.
4. Demana una petita mostra i digues explícitament que encara no desi cap targeta.
5. Compara el nombre de targetes proposades, els anversos i els reversos amb el fitxer de treball.
6. Desa només les targetes que hagis revisat.

La [guia de primers passos](/docs/getting-started/) explica com fer servir el xat d'IA amb les dades de l'espai de treball i fitxers adjunts. Una petició prudent podria ser:

> Llegeix aquest fitxer com a parelles de terme i definició separades per tabulacions. Encara no desis cap targeta. Prepara una petita mostra, conserva la redacció original i els caràcters no llatins, i enumera per separat les files mal formades, buides o ambigües en lloc de fer suposicions.

Això pot ser útil quan les targetes antigues també necessiten una revisió. No demostra que totes les files s'hagin transferit correctament. Fes servir la llista de comprovació de [Com corregir targetes creades amb IA](/blog/how-to-fix-ai-flashcards/) i prova una baralla petita abans de crear la resta.

Les targetes creades a Nibomo comencen amb un historial d'aprenentatge nou. El text de Quizlet no conté els registres dels repassos ni l'estat de la programació necessaris per continuar la cua de repassos anterior.

> **Transparència:** desenvolupo Nibomo. Aquest procés descriu els límits actuals del producte; no afirma que hi hagi una compatibilitat completa amb Quizlet.

## De Quizlet a Anki: fes servir l'importador de text d'Anki

Segons el [manual oficial d'importació de text](https://docs.ankiweb.net/importing/text-files.html), Anki admet fitxers de text pla en UTF-8 amb els camps separats per comes, punts i comes o tabulacions.

Per a una còpia de treball separada per tabulacions:

1. Obre el procés d'importació d'Anki i selecciona el fitxer de text en UTF-8.
2. Confirma a la previsualització que Anki ha detectat una tabulació; canvia l'opció del separador si no ho ha fet.
3. Selecciona el tipus de nota i la baralla de destinació.
4. Assigna el primer camp a l'anvers i el segon al revers.
5. Revisa la previsualització per detectar camps buits, desplaçats o de més.
6. Revisa la configuració de duplicats i actualitzacions abans d'importar.

Anki determina el nombre de camps previst a partir de la primera línia que no és un comentari. Als registres posteriors, els camps que falten queden buits i els camps de més no s'importen. Per això la previsualització és important, sobretot quan un sol separador fora de lloc pot canviar l'estructura d'una fila.

Les definicions de diverses línies també requereixen una decisió explícita. Anki admet camps entre cometes que ocupen diverses línies. Com a alternativa, pot interpretar `<br>` com un salt de línia si s'activa **Permet HTML als camps (Allow HTML in fields)**. Fes servir un sol mètode i revisa una mostra copiada abans d'importar el fitxer complet.

Per defecte, Anki pot identificar una nota existent del mateix tipus pel primer camp i actualitzar-ne la resta. Les opcions d'importació permeten ignorar els duplicats o afegir-los com a notes noves. Actualitzar una nota existent d'Anki pot conservar-ne la programació a Anki, però el fitxer de text no transfereix cap programació de Quizlet.

## Conserva l'original fins que la nova baralla funcioni

La via oficial de Quizlet acaba a **Copia el text (Copy text)** per als conjunts creats pel mateix usuari, al web. Els scripts d'extracció de dades, els endpoints privats deduïts i les eines de descàrrega de tercers són processos separats, sense suport oficial. No converteixen un conjunt copiat o que només pots consultar en una exportació oficial.

Si necessites una automatització recurrent en lloc d'una còpia puntual, l'article sobre l'[estat actual de l'API de Quizlet](/blog/quizlet-api/) explica què té suport oficial. Si el conjunt no és teu, demana al creador un fitxer d'origen o refes una baralla més petita a partir dels teus apunts. [Com crear millors targetes d'estudi](/blog/how-to-make-better-flashcards/) et pot ajudar a millorar aquesta nova versió en lloc de copiar totes les files antigues.

No esborris el conjunt original de Quizlet fins que:

- hagis desat el fitxer original en UTF-8 en un lloc del qual es facin còpies de seguretat;
- el fitxer de treball es torni a obrir amb els caràcters i els separadors previstos;
- hagis revisat els camps de diverses línies, els buits, els duplicats i les files irregulars;
- hagis reconstruït qualsevol context visual important a partir d'una font que puguis utilitzar; i
- una petita prova hagi produït els anversos i els reversos correctes a la destinació.

Conserva el fitxer de text original també després de la importació. És la referència independent més senzilla quan una importació posterior sembla incorrecta. Si encara estàs decidint on portar les targetes, la [comparativa d'alternatives a Quizlet](/blog/quizlet-alternative/) tracta els avantatges i els inconvenients més generals.
