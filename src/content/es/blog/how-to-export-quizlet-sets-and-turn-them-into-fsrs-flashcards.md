---
title: "Cómo exportar sets de Quizlet en 2026: guarda tus tarjetas y migra con seguridad"
description: "Exporta los sets de Quizlet que hayas creado con los pasos exactos de 2026. Guarda una copia UTF-8 y prepara tarjetas en Flashcards o impórtalas en Anki."
image: "/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png"
date: "2026-06-10"
updated: "2026-08-13"
keywords:
  - "cómo exportar sets de Quizlet"
  - "exportar Quizlet"
  - "descargar tarjetas de Quizlet"
  - "migrar de Quizlet"
  - "pasar de Quizlet a Anki"
  - "Quizlet a flashcards"
---

El botón de exportación de Quizlet no descarga un archivo con todo el set. Según la información disponible el 13 de agosto de 2026, el proceso para exportar desde el sitio web un set que hayas creado termina en **Copy text**. Recibes los términos y las definiciones en el portapapeles, pero no las imágenes, el formato, el historial de estudio ni la programación de repasos.

Aun así, ese texto puede convertirse en una copia de seguridad fiable del contenido de las tarjetas. Conserva sin cambios la primera copia que pegues, revisa los separadores y prueba unas pocas tarjetas en el destino antes de trasladar el set completo.

![Conservadora textil que preserva una muestra emparejada intacta y prueba tres segmentos de una copia de trabajo](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png)

## Respuesta rápida: cómo exportar un set de Quizlet

Para exportar un set que hayas creado, inicia sesión en el sitio web de Quizlet y entra en **Your library → Flashcard sets**. Abre el set, selecciona **More → Export**, elige cómo organizar los términos y las definiciones, pulsa **Copy text** y pega el resultado en un editor de texto sin formato.

Si el cuadro de exportación ofrece los separadores adecuados, recomiendo usar una tabulación entre el término y la definición y un salto de línea entre las tarjetas. Guarda la primera copia como un archivo `.txt` con codificación UTF-8 y no la edites. Este proceso no genera un archivo CSV ni una copia de seguridad completa del set. Tampoco exporta imágenes ni sets copiados.

Estas limitaciones aparecen en las [instrucciones oficiales de Quizlet para exportar sets](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets).

## Cómo exportar sets de Quizlet: pasos exactos en 2026

Actualmente, la exportación está disponible en el sitio web, no en las aplicaciones móviles de Quizlet. Abre Quizlet en un navegador y sigue estos pasos:

1. [Inicia sesión en Quizlet](https://quizlet.com/login).
2. Selecciona **Your library**.
3. Selecciona **Flashcard sets**.
4. Abre el set que quieras exportar.
5. Selecciona el menú **More**.
6. Selecciona **Export**.
7. Elige cómo quieres organizar los términos y las definiciones.
8. Selecciona **Copy text**.
9. Pega el texto en un editor de texto sin formato y guárdalo con codificación UTF-8.

Si no ves **Export**, comprueba que estés usando el sitio web y que hayas creado el set original. Según Quizlet, los sets copiados no se pueden exportar, aunque aparezcan en tu biblioteca.

## Elige un formato que puedas revisar después

El cuadro de exportación permite organizar los términos y las definiciones, pero la página de ayuda de Quizlet no indica los nombres actuales de las opciones de separación. Para las tarjetas habituales con anverso y reverso, usa esta estructura si el cuadro te lo permite:

- una tabulación entre el término y la definición;
- un salto de línea entre las tarjetas.

Las tabulaciones suelen funcionar bien porque las definiciones a menudo contienen comas y puntos y coma. Una exportación sencilla tendría este aspecto:

```text
photosynthesis	Process plants use to convert light energy into chemical energy
mitosis	Cell division that produces two genetically identical daughter cells
café	coffee
```

El espacio amplio de cada fila representa una tabulación. Cada tarjeta ocupa una línea.

El resultado es texto separado por tabulaciones, pero Quizlet solo lo ha copiado en el portapapeles: no ha creado ni descargado un archivo `.tsv` o `.csv`. Cambiar el nombre de `cards.txt` a `cards.csv` no convierte el contenido ni corrige los separadores.

## Guarda dos copias antes de corregir nada

Pega la exportación de Quizlet en un editor de texto sin formato y crea dos archivos:

1. **Copia original:** guarda exactamente el texto que has pegado con un nombre como `biology-quizlet-raw.txt` y codificación UTF-8.
2. **Copia de trabajo:** duplica el archivo como `biology-quizlet-clean.txt` y haz las correcciones solo en esta copia.

Conserva los dos archivos como `.txt`; Anki puede importar directamente archivos de texto sin formato. Si luego trabajas con una hoja de cálculo, exporta un CSV o TSV desde ese programa en lugar de limitarte a cambiar la extensión. Los separadores y la codificación UTF-8 importan más que el nombre del archivo.

Guarda la copia original en una ubicación que cuente con copia de seguridad. Si una importación combina campos, pierde una fila o altera un carácter, podrás volver al original sin repetir la exportación desde Quizlet.

## Qué conserva la exportación y qué se queda en Quizlet

Quizlet describe esta función como una exportación de los **términos y las definiciones** de un set que hayas creado. Considera que cualquier otro elemento queda fuera de la transferencia, salvo que puedas comprobar que aparece en el texto pegado.

El texto copiado puede conservar:

- el texto de los términos y las definiciones incluido en el resultado;
- el orden de las filas del resultado;
- los caracteres Unicode, siempre que guardes y vuelvas a abrir el archivo como UTF-8;
- los límites entre campos, siempre que los separadores elegidos no aparezcan también dentro de un término o una definición.

No esperes que conserve:

- las imágenes: Quizlet indica expresamente que no se pueden exportar debido a restricciones de derechos de autor;
- el aspecto del texto enriquecido, las fuentes, el énfasis o la disposición;
- las carpetas del set, la organización de la cuenta, los modos de estudio u otros estados de la interfaz de Quizlet;
- el historial de repasos, el nivel de dominio o la programación;
- un paquete de Quizlet que puedas restaurar.

Por eso, buscar cómo **descargar tarjetas de Quizlet** puede resultar confuso. La exportación conserva el texto de las tarjetas, no una copia restaurable del set de Quizlet ni de su estado de estudio.

## Revisa el texto antes de importarlo

Haz estas comprobaciones mientras el set original siga abierto. Resolver una fila extraña es mucho más fácil cuando puedes compararla con la fuente.

### Haz visibles las tabulaciones y los saltos de línea

Si has elegido tabulaciones, activa **render whitespace**, **show invisible characters** o la opción equivalente del editor. Una fila normal con dos campos debe tener una sola tabulación: el término va antes y la definición, después.

Compara el número de filas no vacías con el número de tarjetas que muestra Quizlet. Esta comprobación solo funciona si cada tarjeta ocupa una fila. Si las cifras no coinciden, busca líneas en blanco, campos vacíos o definiciones que incluyan saltos de línea.

### Revisa las definiciones de varias líneas

Un salto de línea dentro de una definición puede parecer idéntico al que separa dos tarjetas. Por eso, una definición con una lista o varios párrafos puede romper la estructura de una tarjeta por línea.

No modifiques la copia original. Después de comparar la tarjeta con Quizlet, une la definición en una sola línea dentro del archivo de trabajo o llévala a una hoja de cálculo que pueda entrecomillar correctamente los campos de varias líneas. Anki también admite campos multilínea entre comillas y saltos HTML `<br>`, como se explica más adelante.

### Busca separadores dentro del contenido

Una tabulación dentro de un término o una definición crea un tercer campo inesperado. Busca filas que contengan más de una tabulación. Si has elegido comas o puntos y coma, revisa esos separadores con especial cuidado, ya que aparecen con más frecuencia en el texto normal.

### Vuelve a abrir el archivo UTF-8

Cierra el editor y vuelve a abrir el archivo guardado. Comprueba las palabras acentuadas, los alfabetos no latinos, los símbolos matemáticos y los signos de puntuación, como los apóstrofos tipográficos. La palabra de ejemplo `café` debe seguir apareciendo como `café`, no como caracteres de sustitución ni texto dañado.

### Revisa el principio, el centro y el final

Comprueba algunas filas del principio, del centro y del final, además de las definiciones especialmente largas. Antes de importar, busca duplicados exactos, términos repetidos, anversos o reversos vacíos y filas con campos adicionales.

El formato también requiere una revisión manual. No des por hecho que una exportación en texto sin formato conservará la negrita, la cursiva, los colores, la disposición o el contexto de las imágenes. Si el formato cambiaba el significado de una tarjeta, expresa ese significado de forma explícita en el texto.

## Ruta 1: llevar el texto de Quizlet a Flashcards

[Flashcards Open Source App](/features/) no ofrece un importador de Quizlet o CSV con un solo clic. La importación directa solo admite el paquete propio del espacio de trabajo de Flashcards. Sin embargo, puedes usar una exportación de texto de Quizlet como fuente para preparar borradores de tarjetas con ayuda de la IA.

La ruta práctica utiliza el chat con IA para preparar esos borradores:

1. Conserva intacta la copia de seguridad original de Quizlet en formato `.txt`.
2. Adjunta al chat con IA de Flashcards el archivo de trabajo `.txt` ya corregido. También puedes adjuntar un archivo `.csv` real creado por una herramienta de hojas de cálculo si has convertido los datos de manera intencionada.
3. Indica qué separador has usado y pide al asistente que marque las filas mal formadas en vez de adivinar su contenido.
4. Compara con el archivo de trabajo el número de tarjetas propuesto y el contenido de sus anversos y reversos.
5. Guarda únicamente las tarjetas que hayas revisado y que coincidan con la fuente.

Puedes usar este prompt:

> Lee este archivo como pares de término y definición separados por tabulaciones. Prepara el borrador de una tarjeta con anverso y reverso por cada fila válida. Conserva la redacción original y los caracteres no latinos. Enumera por separado las filas mal formadas, vacías o ambiguas y no inventes el texto que falte.

La [guía de introducción](/docs/getting-started/) confirma que la aplicación alojada incluye un chat con IA que permite adjuntar archivos. El chat actual acepta archivos TXT y CSV, pero esta es una forma de preparar borradores: no es una importación directa ni un proceso sin pérdidas. Revisa con especial cuidado las definiciones que ocupen varias líneas o contengan tabulaciones. [Cómo corregir tarjetas generadas por IA](/blog/how-to-fix-ai-flashcards/) incluye una lista de revisión específica.

Transparencia: desarrollo Flashcards Open Source App. Esta ruta explica las funciones y las limitaciones actuales del producto; no es una recomendación neutral ni una afirmación de compatibilidad completa con Quizlet.

## Ruta 2: migrar de Quizlet a Anki

Anki sí permite importar archivos de texto directamente. Su [manual oficial para importar archivos de texto](https://docs.ankiweb.net/importing/text-files.html) admite archivos de texto sin formato en UTF-8 con campos separados por tabulaciones, comas o puntos y coma.

Para importar una copia de trabajo separada por tabulaciones:

1. Abre el proceso de importación de Anki y selecciona el archivo `.txt` en UTF-8.
2. Comprueba en las opciones de importación que Anki haya detectado la tabulación como separador de campos. Si la vista previa no es correcta, cambia el separador.
3. Elige el tipo de nota y el mazo de destino.
4. Asigna el primer campo de texto al anverso y el segundo al reverso.
5. Revisa la vista previa para detectar campos desplazados, vacíos o adicionales.
6. Elige cómo quieres que Anki gestione las coincidencias y los duplicados.
7. Importa una muestra pequeña antes de importar el set completo.

Anki determina el número de campos esperado a partir de la primera línea que no sea un comentario. Los registros posteriores con menos campos reciben valores vacíos y los campos adicionales no se importan. Detecta estos desplazamientos en la vista previa antes de importar.

Para las definiciones de varias líneas, Anki admite campos entre comillas que ocupan más de una línea. También puede interpretar `<br>` como salto de línea cuando está activada la opción **Allow HTML in fields**. Elige deliberadamente uno de los dos métodos y comprueba el resultado en la vista previa. No añadas HTML solo para recuperar un formato que ya se perdió al copiar el texto desde Quizlet.

De forma predeterminada, Anki utiliza el primer campo para identificar notas coincidentes del mismo tipo. Según la opción de importación, una coincidencia puede actualizar una nota existente, ignorarse o importarse como una nota nueva. Revisa los términos repetidos antes de importar todo el set: una actualización accidental puede cambiar los demás campos de una nota existente.

## El historial de repaso y la programación empiezan de cero

La exportación de Quizlet contiene términos y definiciones, pero no los datos necesarios para reproducir qué estudiaste, cuándo lo hiciste o cómo valoró el planificador cada tarjeta.

Las tarjetas nuevas que crees en Flashcards comienzan con un estado inicial en FSRS. Las notas nuevas que importes en Anki también se consideran material nuevo. Si una importación de Anki actualiza una nota coincidente que ya existía, esa nota puede conservar su programación, aunque esos datos tampoco proceden de Quizlet. Ninguna de las dos rutas reconstruye el historial de estudio de Quizlet a partir del texto copiado al portapapeles.

Si ya conoces bien un set grande, los primeros repasos pueden parecerte más fáciles o aparecer con más frecuencia que en tus antiguas sesiones de Quizlet. Traslada primero una muestra representativa y observa cómo funciona la nueva cola antes de migrarlo todo.

## Sets copiados, sets públicos y límites de uso

Quizlet no permite exportar un set que hayas copiado de otro usuario. La visibilidad y el permiso son cuestiones distintas: que un set sea público no significa que tengas derecho a reproducirlo en otro lugar.

La página de Quizlet sobre los [conceptos básicos de los derechos de autor](https://help.quizlet.com/hc/en-us/articles/360029925172-Copyright-basics) recomienda publicar contenido original que hayas creado. También indica que la reutilización puede estar permitida si tienes autorización o una licencia, si el material es de dominio público o si se aplica una excepción legal. Las normas de derechos de autor varían según el país, así que este artículo no constituye asesoramiento jurídico.

Si el set no es tuyo, utiliza tus propios apuntes, pide permiso o un archivo fuente a la persona que lo creó, o redacta con tus palabras un mazo personal más pequeño. No uses la extracción automatizada (scraping) ni la copia manual para sortear la ausencia del botón de exportación.

## No elimines todavía el set de Quizlet

Conserva el set de Quizlet —y no elimines la cuenta a la que pertenece— hasta que se cumplan todas estas condiciones:

- la copia original `.txt` en UTF-8 está guardada en una ubicación con copia de seguridad;
- el archivo de trabajo se abre correctamente después de cerrarlo;
- el número esperado de tarjetas coincide con las filas validadas, teniendo en cuenta las tarjetas multilínea;
- has revisado las tabulaciones, los saltos de línea, los duplicados y los campos vacíos;
- los acentos, los alfabetos no latinos, los símbolos y los signos de puntuación siguen mostrándose correctamente;
- has reconstruido las imágenes necesarias o el significado que aportaba el formato a partir de fuentes que tienes derecho a utilizar;
- una prueba con una muestra pequeña confirma que los anversos y reversos aparecen correctamente en Flashcards o Anki;
- has revisado una muestra en el destino y aceptas que la programación de repasos empieza de cero.

Aunque se cumplan todas las condiciones, conserva el archivo de texto original como una copia de seguridad independiente. Es la versión más fácil de revisar si una importación o una edición posterior sale mal.

Si todavía estás eligiendo un destino, la [comparación de alternativas a Quizlet](/blog/quizlet-alternative/) explica las diferencias generales entre los productos. Si las tarjetas exportadas necesitan mejoras, empieza por [Cómo crear mejores tarjetas de estudio](/blog/how-to-make-better-flashcards/) antes de importar el set completo.
