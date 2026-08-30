---
title: "Cómo exportar sets de Quizlet en 2026 (y por qué no aparece Export)"
description: "Exporta un set de Quizlet siguiendo los pasos actuales de la web. Si no aparece Export, comprueba si creaste el original, hiciste una copia o estás usando la app móvil."
image: "/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png"
date: "2026-06-10"
updated: "2026-08-30"
keywords:
  - "cómo exportar Quizlet"
  - "cómo exportar tarjetas de Quizlet"
  - "no aparece el botón Export de Quizlet"
  - "descargar tarjetas de Quizlet"
  - "Quizlet a CSV"
  - "Quizlet a Anki"
---

Si no aparece el botón **Export** en Quizlet, comprueba primero dos cosas: ¿creaste el set original y estás usando la web de Quizlet? Solo el creador original puede exportarlo, y la función no está disponible en la app móvil. Las copias tampoco se pueden exportar, aunque ya aparezcan en tu biblioteca.

Si cumples esas condiciones, el resto es rápido: abre el set en la web, selecciona **More → Export**, elige cómo ordenar los términos y las definiciones y pulsa **Copy text**. Quizlet no descarga un archivo con el mazo. Deja el texto en el portapapeles, sin las imágenes.

**Datos verificados:** 30 de agosto de 2026, según las [instrucciones oficiales de Quizlet para exportar sets](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets).

![Una archivera comprueba dos fichas coincidentes antes de entregar tarjetas de texto emparejadas; hay dos carpetas listas y las fotos quedan tras el cristal](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png)

## Primero, ¿debería aparecer el botón Export?

Acláralo antes de intentar descargar las tarjetas de Quizlet por otra vía:

| Tu situación | ¿Debería aparecer Export? | Qué hacer |
| --- | --- | --- |
| Creaste el set original y lo abriste en la web de Quizlet | Sí, según la página de ayuda de Quizlet | Sigue los pasos de la siguiente sección |
| Estás usando la app para iOS o Android | No; solo se puede exportar desde la web | Abre Quizlet en un navegador e inicia sesión |
| Copiaste el set de otro usuario | No; Quizlet indica que las copias no se pueden exportar | La copia no hará que aparezca Export |
| Puedes ver el set, pero no lo creaste | No; tener acceso no equivale a ser su creador | Pide al creador un archivo fuente o reconstruye el set con material que puedas usar |

Si creaste el set original pero el botón de exportación sigue sin aparecer, comprueba que has iniciado sesión con la cuenta propietaria y que abriste el original, no una copia. La página de ayuda de Quizlet no documenta ninguna otra vía de exportación. Llegados a ese punto, contacta con el soporte de Quizlet en vez de confiar en un descargador que prometa saltarse la restricción.

## Cómo exportar tarjetas de Quizlet desde la web

Para exportar un set que hayas creado:

1. Inicia sesión en Quizlet desde el sitio web.
2. Selecciona **Your library**.
3. Selecciona **Flashcard sets**.
4. Abre el set que quieras exportar.
5. Abre el menú **More**.
6. Selecciona **Export**.
7. Elige cómo organizar los términos y las definiciones.
8. Selecciona **Copy text**.
9. Pega el resultado en un editor de texto sin formato.

Ahí termina el proceso actual. No hay un último botón de «descarga».

Para las tarjetas habituales con anverso y reverso, recomiendo poner una tabulación entre el término y la definición, y un salto de línea entre tarjetas. Es un consejo práctico, no un requisito de Quizlet. Las tabulaciones suelen ser más fáciles de revisar que las comas, porque es normal encontrar comas dentro de una definición.

Un archivo limpio con dos tarjetas tendría este aspecto; hay una tabulación en medio de cada fila:

```text
photosynthesis	Process plants use to convert light energy into chemical energy
mitosis	Cell division that produces two genetically identical daughter cells
```

## Qué conserva la exportación de Quizlet

Quizlet define esta función de forma muy concreta: exporta los **términos y las definiciones** de un set creado por ti. También deja claro que las imágenes no se pueden exportar.

Lo único que puedes dar por seguro es lo que aparece al pegar el resultado. Si el texto, el separador o el salto de línea están ahí, puedes conservarlos en un archivo. La página de ayuda de Quizlet no promete transferir carpetas, modos de estudio, formato, nivel de dominio del contenido, historial ni programación de repasos.

En otras palabras, obtienes una copia del texto de las tarjetas, no una copia de seguridad restaurable de Quizlet. La diferencia también importa si llegaste buscando cómo «descargar tarjetas de Quizlet»: Quizlet copia el texto en el portapapeles y el archivo lo creas tú.

## Guarda una copia intacta en UTF-8 antes de limpiar nada

Mantén el proceso reversible:

1. Pega la exportación en un editor de texto sin formato.
2. Guárdala con codificación UTF-8; por ejemplo, como `biology-quizlet-raw.txt`.
3. Haz un duplicado llamado, por ejemplo, `biology-quizlet-working.txt`.
4. Reserva el primer archivo como copia intacta y edita únicamente el segundo.

Antes de importar el archivo de trabajo, revísalo mientras el set de Quizlet siga abierto:

- Activa la visualización de caracteres invisibles y confirma dónde aparecen las tabulaciones y los saltos de línea.
- Busca si el separador elegido también aparece dentro de algún término o definición. Una tabulación de más puede crear un tercer campo inesperado.
- Localiza las definiciones con saltos de línea internos; podrían confundirse con tarjetas adicionales.
- Contrasta con Quizlet el principio, la parte central y el final del archivo, incluidas las definiciones más largas.
- Cierra el archivo, vuelve a abrirlo y comprueba los acentos, los alfabetos no latinos, los símbolos y los signos de puntuación tipográficos.
- Señala los campos vacíos, los duplicados y las filas irregulares en vez de intentar corregirlos a ciegas.

Compara el número de líneas con el de tarjetas solo si cada tarjeta ocupa exactamente una línea. Las definiciones multilínea invalidan ese atajo.

Conserva la copia intacta incluso cuando el archivo de trabajo ya parezca correcto. Si durante la importación un campo se desplaza o se pierde contenido, todavía tendrás una referencia sin modificar.

## De Quizlet a CSV: crea el archivo correctamente

Cambiar la extensión de un archivo `.txt` a `.csv` no basta para convertirlo. Un CSV necesita separadores coherentes y las comillas adecuadas alrededor de los campos que contengan comas, comillas o varias líneas.

Para crear de forma segura un archivo CSV a partir de Quizlet:

1. Mantén intacta la copia con el texto original.
2. Abre el archivo de trabajo en una hoja de cálculo y selecciona exactamente el separador que utilizaste en Quizlet.
3. Confirma que cada registro esperado tenga dos columnas: una para el término y otra para la definición.
4. Revisa las comillas, los separadores y las definiciones multilínea.
5. Exporta el archivo como CSV en UTF-8.
6. Vuelve a abrir el CSV en una vista previa independiente antes de usarlo en otro sitio.

Una hoja de cálculo puede añadir las comillas que necesita el CSV. Una sustitución global de tabulaciones por comas no puede hacerlo de forma fiable.

## Usa el texto en Flashcards como borrador para revisar

[Flashcards Open Source App](/features/) no tiene un importador directo de Quizlet. En la aplicación alojada, los archivos TXT o CSV se pueden adjuntar al chat con IA para preparar un borrador. No es una migración sin pérdidas.

1. Conserva el archivo original de Quizlet fuera de la aplicación.
2. Adjunta al chat con IA de Flashcards el TXT limpio o el CSV que hayas preparado con cuidado.
3. Indica al asistente qué separador y qué campos utiliza el archivo.
4. Pide una vista previa de unas pocas tarjetas y deja claro que todavía no debe guardar ninguna.
5. Compara con el archivo de trabajo el número de tarjetas propuesto, los anversos y los reversos.
6. Guarda únicamente las tarjetas que hayas revisado.

La [guía de introducción](/docs/getting-started/) documenta el chat con IA, incluido el uso de los datos del espacio de trabajo y los archivos adjuntos. Un prompt prudente podría ser:

> Lee este archivo como pares de término y definición separados por tabulaciones. No guardes todavía ninguna tarjeta. Prepara una pequeña muestra, conserva la redacción original y los caracteres no latinos, y enumera por separado las filas mal formadas, vacías o ambiguas en vez de adivinar su contenido.

Este método puede venir bien si las tarjetas antiguas también necesitan una limpieza. Aun así, no demuestra que todas las filas se hayan transferido correctamente. Sigue la lista de comprobación de [Cómo corregir tarjetas generadas por IA](/blog/how-to-fix-ai-flashcards/) y prueba con un mazo pequeño antes de crear el resto.

Las tarjetas creadas en Flashcards empiezan con un historial de aprendizaje nuevo. El texto de Quizlet no incluye los eventos de repaso ni el estado de programación necesarios para seguir con la cola anterior.

> **Aviso de transparencia:** Desarrollo Flashcards Open Source App. Este proceso refleja los límites actuales del producto; no implica una compatibilidad completa con Quizlet.

## De Quizlet a Anki: usa el importador de texto de Anki

Según el [manual oficial de importación de archivos de texto de Anki](https://docs.ankiweb.net/importing/text-files.html), puedes importar archivos de texto sin formato en UTF-8 con los campos separados por comas, puntos y coma o tabulaciones.

Para importar una copia de trabajo separada por tabulaciones:

1. Abre el flujo de importación de Anki y selecciona el archivo de texto en UTF-8.
2. Comprueba en la vista previa que Anki haya detectado la tabulación; si no es así, cambia la opción del separador.
3. Selecciona el tipo de nota y el mazo de destino.
4. Asigna el primer campo al anverso y el segundo al reverso.
5. Revisa la vista previa en busca de campos vacíos, desplazados o adicionales.
6. Revisa la opción de duplicados y actualizaciones antes de importar.

Anki determina el número de campos esperado a partir de la primera línea que no sea un comentario. En los registros posteriores, deja vacíos los campos que falten y descarta los que sobren. Por eso conviene revisar la vista previa: un solo separador fuera de lugar puede alterar toda una fila.

También tendrás que decidir cómo tratar las definiciones multilínea. Anki admite campos entre comillas que abarcan varias líneas. Otra opción es usar `<br>` como salto de línea con **Allow HTML in fields** activado. Elige un solo método y pruébalo con una copia de muestra antes de importar el archivo completo.

De forma predeterminada, Anki puede encontrar una nota existente del mismo tipo por su primer campo y actualizar los demás. Las opciones de importación también permiten ignorar los duplicados o añadirlos como notas nuevas. Si actualizas una nota que ya existía en Anki, su programación de Anki puede conservarse; la programación de repasos de Quizlet, en cambio, no se transfiere en el archivo de texto.

## Conserva el original hasta que funcione el mazo nuevo

La vía oficial de Quizlet termina en **Copy text** para los sets propios abiertos desde la web. Los scripts de scraping, los supuestos endpoints privados y los descargadores de terceros son métodos distintos sin soporte oficial. No convierten un set copiado o de solo lectura en una exportación oficial.

Si necesitas automatizar el proceso en vez de hacer una copia puntual, el artículo sobre el [estado actual de la API de Quizlet](/blog/quizlet-api/) explica dónde están los límites oficiales. Si el set no es tuyo, pide al creador un archivo fuente o reconstruye un mazo más pequeño a partir de tus propios apuntes. [Cómo crear mejores tarjetas de estudio](/blog/how-to-make-better-flashcards/) puede ayudarte a mejorar esa reconstrucción en vez de copiar todas las filas antiguas.

No elimines el set original de Quizlet hasta que:

- la copia intacta en UTF-8 esté guardada en una ubicación con copia de seguridad;
- el archivo de trabajo vuelva a abrirse con los caracteres y separadores esperados;
- hayas revisado los campos multilínea, los campos vacíos, los duplicados y las filas irregulares;
- hayas reconstruido cualquier contexto visual importante a partir de una fuente que puedas usar; y
- una pequeña prueba haya producido los anversos y reversos correctos en el destino.

Conserva después la copia intacta del texto. Es la referencia independiente más sencilla si una importación posterior sale mal. Si todavía estás decidiendo adónde llevar las tarjetas, la [comparación de alternativas a Quizlet](/blog/quizlet-alternative/) explica las diferencias generales.
