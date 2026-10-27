---
title: "Com importar targetes d'estudi a Quizlet des d'Excel, Sheets o text"
description: "Importa una llista de paraules de dues columnes a Quizlet, tria tabulacions i salts de línia i corregeix definicions dividides, targetes sobrants i problemes de CSV abans de publicar."
date: "2026-09-15"
image: "/blog/how-to-import-flashcards-into-quizlet.png"
keywords:
  - "com importar targetes d'estudi a Quizlet"
  - "format d'importació de Quizlet"
  - "importar a Quizlet des d'Excel"
  - "de Google Sheets a Quizlet"
  - "importar a Quizlet amb tabulacions"
---

«Red, green, blue» sembla una resposta qualsevol d'una targeta. Però si fas servir comes per separar un terme de la seva definició, aquestes mateixes comes fan que la fila sigui ambigua. Uns quants signes de puntuació poden convertir una llista de paraules ja preparada en una feina de correcció.

Per importar targetes a Quizlet des d'Excel, Google Sheets o text, comença amb dues columnes: una per als termes i una altra per a les definicions. Copia les dades, enganxa-les al formulari d'importació del web i tria tabulacions entre camps i salts de línia entre targetes. Prova primer amb quatre files per poder revisar cada parella abans de traslladar tota la llista.

![Un terrissaire aparella tasses de ceràmica amb els platets corresponents en files separades abans de posar-les en un prestatge](/blog/how-to-import-flashcards-into-quizlet.png)

## On trobar el formulari d'importació de Quizlet

Quizlet documenta la importació al seu web, amb comes, tabulacions o guions entre camps i punts i coma o salts de línia entre targetes. Les [instruccions oficials d'importació](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) indiquen aquesta seqüència:

1. Inicia sessió i tria **Crea → Conjunt de targetes (Create → Flashcard set)**.
2. Escriu un títol, selecciona **Importa (Import)** i enganxa-hi el text.
3. Ajusta els separadors al text d'entrada. Per als exemples d'aquí, fes servir **Tabulació (Tab)** i **Salt de línia (New line)**.
4. Selecciona **Importa (Import)** i, després, tria les llengües dels termes i de les definicions.
5. Revisa les targetes abans de seleccionar **Crea (Create)** per desar i publicar el conjunt.

Les instruccions es van comprovar el 15 de setembre de 2026. Els exemples següents expliquen com preparar i revisar el text; no descriuen una prova feta amb la sessió iniciada.

## Comença amb un rang petit del full de càlcul

A Excel o Google Sheets, posa una parella de terme i definició a cada fila. Aquí tens una prova de quatre targetes:

| Terme | Definició |
| --- | --- |
| rojo | red |
| azul | blue |
| verde | green |
| colores primarios de la luz | red, green, blue |

Copia només les quatre files de dades de les dues columnes. Si les capçaleres són a la fila 1, selecciona **A2:B5**. Deixa les capçaleres fora del rang que copies.

El resultat esperat són quatre targetes, amb termes en castellà i definicions en anglès. L'última targeta ha de mantenir «colores primarios de la luz» tot junt en una cara i «red, green, blue» tot junt a l'altra. Les comes formen part de la resposta.

Quan tinguis clar l'exemple, prepara el teu full. Treballa en una còpia per conservar l'original i poder comparar-los. Elimina les files buides i deixa fora de la selecció les notes i les columnes addicionals. Completa qualsevol terme o definició que falti abans de copiar.

Quan ordenis les dades, mantén les dues columnes juntes. Si ordenes només els termes, els separaràs de les respostes, i una importació amb el nombre correcte de targetes encara podria contenir parelles incorrectes.

## El format de text pla fa servir tabulacions reals

Les mateixes quatre files tenen aquest aspecte com a text separat per tabulacions. Cada espai entre un terme i la seva definició conté un caràcter de tabulació real:

```text
rojo	red
azul	blue
verde	green
colores primarios de la luz	red, green, blue
```

Una tabulació és un caràcter concret. Diversos espais poden tenir un aspecte semblant, però no funcionen com una tabulació per separar els camps. Escriure els caràcters `\t` tampoc no insereix cap tabulació. Si el teu editor de text t'ho posa difícil, posa les parelles en dues columnes d'un full de càlcul i copia'n les cel·les.

Cada targeta ha d'ocupar una sola línia física. Una definició llarga pot continuar en una segona línia visible perquè la finestra és estreta; això no afegeix cap salt de línia al contingut. En canvi, un salt de línia inserit dins d'una cel·la del full de càlcul sí que ho fa. Elimina aquests salts interns abans de fer servir els salts de línia com a separadors de targetes.

Elimina també qualsevol tabulació que hi hagi dins d'un terme o d'una definició. En aquest format, les tabulacions només han d'anar entre els dos camps.

## Si la teva llista és un fitxer CSV

Obre el CSV en un full de càlcul abans de preparar la importació. Un registre CSV com aquest té dos camps si s'interpreta segons les regles d'ús de les cometes:

```text
"colores primarios de la luz","red, green, blue"
```

La resposta entre cometes conté comes. Un camp de text que divideix l'entrada per comes no és necessàriament un lector de CSV, així que no confiïs que les cometes hi protegeixin la resposta.

A Excel o Google Sheets, comprova que el registre ocupa exactament dues cel·les. Després, copia les cel·les per obtenir text separat per tabulacions. Si la resposta s'ha repartit en columnes addicionals, corregeix primer els paràmetres d'importació de CSV del full de càlcul. Copiar la fila malmesa trasllada el problema a la importació.

Revisa també els valors que el full de càlcul podria reinterpretar. Si `0012` és un codi que has d'estudiar, convertir-lo en `12` canvia la targeta. Compara els identificadors, les dates, les cometes i les paraules accentuades amb el fitxer original abans de copiar el rang.

## Quan les targetes no coincideixen amb les files

Fes servir la prova per trobar la primera discrepància. Canvia una sola cosa cada vegada i compara el resultat amb les mateixes quatre files d'origen.

| Símptoma | Problema probable amb els separadors | Què has de canviar |
| --- | --- | --- |
| Una resposta es divideix per les comes | S'ha triat la coma com a separador entre camps | Prepara dues columnes i selecciona Tabulació (Tab) |
| «well-being» es divideix dins del terme | S'ha triat el guió com a separador entre camps | Conserva el guionet i separa els camps amb una tabulació |
| Una resposta es converteix en diverses targetes | Hi ha salts de línia interns a l'origen | Posa la resposta en una sola línia física |
| «Terme» i «Definició» apareixen com una targeta | S'ha copiat la fila de capçalera | Selecciona només les files de dades |
| Tots dos camps queden a la mateixa cara | Hi ha espais en lloc d'una tabulació | Copia un rang de dues columnes d'un full de càlcul |

Per exemple, una resposta amb «first stage» i «second stage» en línies separades es podria convertir en `first stage; second stage`. Això manté totes dues parts en una sola línia. Mantén **Salt de línia (New line)** com a separador entre targetes quan facis servir un punt i coma dins d'una resposta.

Si les dues etapes mereixen preguntes separades, escriu dues parelles completes. La [guia per crear targetes millors (en anglès)](/blog/how-to-make-better-flashcards/) et pot ajudar a decidir-ho.

## Comprova el resultat abans de publicar

Revisa les quatre targetes de prova. Per a la llista completa, compara les targetes importades amb la llista d'origen un cop corregida:

- El total coincideix amb el nombre de files de dades completes?
- La primera i l'última parella coincideixen, amb les respostes senceres?
- S'han conservat la puntuació, els accents i els codis sense canvis?
- Hi ha cares buides, capçaleres, duplicats o respostes aparellades amb termes incorrectes?
- Totes les respostes on has modificat salts de línia continuen tenint sentit?

Llegeix diverses parelles normals, a més de les que semblen sospitoses. Que els recomptes coincideixin no permet detectar una resposta incorrecta aparellada amb un terme vàlid. Si alguna cosa falla, corregeix la llista d'origen abans de repetir la importació. Conserva el fitxer corregit per a futures correccions.

## Parelles ja escrites o targetes generades amb IA?

Quizlet també descriu la creació de targetes amb ajuda d'IA a partir de material proporcionat a la seva [presentació de la creació amb IA](https://quizlet.com/content/create-flashcards-from-words-and-definitions-with-quizlet-ai). Cal revisar també el contingut del text generat. Si ja tens una llista de termes i definicions acabada, el procés d'importació estructurada et permet comprovar que les parelles que ja has escrit s'han transferit correctament.

Comences amb paràgrafs? [Converteix les teves notes en targetes (en anglès)](/blog/turn-notes-into-flashcards/) abans de preparar el text d'importació. Vols traslladar un conjunt en el sentit contrari? Fes servir la [guia d'exportació de Quizlet](/ca/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/).
