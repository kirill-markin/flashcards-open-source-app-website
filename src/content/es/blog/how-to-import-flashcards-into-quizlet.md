---
title: "Cómo importar flashcards a Quizlet desde Excel, Sheets o texto"
description: "Importa una lista de dos columnas a Quizlet con tabulaciones y saltos de línea. Corrige definiciones divididas, tarjetas extra y problemas de CSV antes de publicar."
date: "2026-09-15"
image: "/blog/how-to-import-flashcards-into-quizlet.png"
keywords:
  - "cómo importar flashcards a Quizlet"
  - "formato de importación de Quizlet"
  - "importar a Quizlet desde Excel"
  - "de Google Sheets a Quizlet"
  - "importar a Quizlet con tabulaciones"
---

«Red, green, blue» parece una respuesta cualquiera en una tarjeta. Pero si usas comas para separar un término de su definición, ya no queda claro dónde termina cada campo. Unos pocos signos de puntuación pueden obligarte a corregir una lista que ya tenías preparada.

Para importar flashcards a Quizlet desde Excel, Google Sheets o texto, empieza con dos columnas: una para los términos y otra para las definiciones. Copia los datos, pégalos en el formulario de importación del sitio web y elige tabulaciones entre los campos y saltos de línea entre las tarjetas. Prueba primero con cuatro filas para revisar cada pareja antes de importar la lista completa.

![Un alfarero coloca tazas de cerámica junto a sus respectivos platillos en filas separadas antes de llevarlas a una estantería](/blog/how-to-import-flashcards-into-quizlet.png)

## Dónde encontrar el formulario de importación de Quizlet

Quizlet explica cómo importar contenido desde su sitio web. Admite comas, tabulaciones o guiones entre los campos, y puntos y coma o saltos de línea entre las tarjetas. Las [instrucciones oficiales de importación](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) indican estos pasos:

1. Inicia sesión y elige **Create → Flashcard set**.
2. Escribe un título, selecciona **Import** y pega el texto.
3. Ajusta los separadores al formato de tus datos. Para los ejemplos de esta guía, usa **Tab** y **New line**.
4. Selecciona **Import** y después elige los idiomas de los términos y las definiciones.
5. Revisa las tarjetas antes de seleccionar **Create** para guardar y publicar el conjunto.

Estas instrucciones se comprobaron el 15 de septiembre de 2026. Los ejemplos siguientes explican cómo preparar y revisar el texto; no se basan en una prueba dentro de una cuenta de Quizlet.

## Empieza con un rango pequeño de la hoja de cálculo

En Excel o Google Sheets, coloca cada término y su definición en la misma fila. Aquí tienes una prueba con cuatro tarjetas:

| Término | Definición |
| --- | --- |
| rojo | red |
| azul | blue |
| verde | green |
| colores primarios de la luz | red, green, blue |

Copia solo las cuatro filas de datos de las dos columnas. Si los encabezados están en la fila 1, selecciona **A2:B5**. Deja los encabezados fuera del rango que copies.

El resultado esperado son cuatro tarjetas, con términos en español y definiciones en inglés. La última debe conservar «colores primarios de la luz» en una cara y «red, green, blue» en la otra. Las comas forman parte de la respuesta.

Cuando tengas claro el ejemplo, prepara tu propia hoja. Trabaja sobre una copia para poder compararla con el original. Elimina las filas vacías y deja fuera de la selección las notas y las columnas adicionales. Completa los términos o las definiciones que falten antes de copiar.

Al ordenar, mantén las dos columnas juntas. Si ordenas solo los términos, los separarás de sus respuestas: la importación podría tener el número correcto de tarjetas y aun así contener parejas incorrectas.

## El formato de texto plano usa tabulaciones reales

Las mismas cuatro filas tienen este aspecto como texto separado por tabulaciones. La separación entre cada término y su definición corresponde a una única tabulación real:

```text
rojo	red
azul	blue
verde	green
colores primarios de la luz	red, green, blue
```

La tabulación es un carácter específico. Varios espacios pueden tener un aspecto parecido, pero no equivalen a una tabulación. Escribir los caracteres `\t` tampoco inserta una tabulación. Si te cuesta insertarla en el editor de texto, coloca las parejas en dos columnas de una hoja de cálculo y copia esas celdas.

Cada tarjeta debe ocupar una sola línea de texto. Una definición larga puede verse en dos líneas porque la ventana es estrecha; ese ajuste visual no añade un salto de línea al contenido. En cambio, un salto de línea insertado dentro de una celda sí lo añade. Elimina esos saltos internos antes de usar saltos de línea para separar las tarjetas.

Elimina también las tabulaciones que haya dentro de un término o una definición. En este formato, las tabulaciones solo deben aparecer entre los dos campos.

## Si tu lista es un archivo CSV

Abre el CSV en una hoja de cálculo antes de preparar la importación. Un registro como este contiene dos campos cuando se interpreta según las reglas de entrecomillado del formato CSV:

```text
"colores primarios de la luz","red, green, blue"
```

La respuesta entre comillas contiene comas. Un formulario que separa los datos por comas no necesariamente interpreta el formato CSV. No des por hecho que las comillas evitarán que divida la respuesta.

En Excel o Google Sheets, comprueba que el registro ocupe exactamente dos celdas. Después, copia las celdas para obtener texto separado por tabulaciones. Si la respuesta se ha repartido entre columnas adicionales, corrige primero la configuración de importación del CSV en la hoja de cálculo. Si copias esa fila sin corregirla, el problema pasará a las tarjetas.

Revisa también los valores que la hoja de cálculo podría reinterpretar. Si `0012` es un código que necesitas estudiar, convertirlo en `12` cambia la tarjeta. Compara los identificadores, las fechas, las comillas y las palabras con tildes con el archivo original antes de copiar el rango.

## Cuando las tarjetas no coinciden con las filas

Usa la prueba para localizar la primera diferencia. Cambia una sola cosa cada vez y compara el resultado con las mismas cuatro filas originales.

| Síntoma | Posible problema con los separadores | Qué cambiar |
| --- | --- | --- |
| Una respuesta se divide por las comas | Se ha seleccionado la coma como separador entre campos | Prepara dos columnas y selecciona Tab |
| «well-being» se divide dentro del término | Se ha seleccionado el guion como separador entre campos | Conserva el guion y separa los campos con una tabulación |
| Una respuesta se convierte en varias tarjetas | Hay saltos de línea dentro del contenido original | Pon la respuesta en una sola línea de texto |
| «Término» y «Definición» aparecen como una tarjeta | Se ha copiado la fila de encabezados | Selecciona solo las filas de datos |
| Los dos campos quedan en la misma cara | Hay espacios en lugar de una tabulación | Copia un rango de dos columnas de una hoja de cálculo |

Por ejemplo, una respuesta con «first stage» y «second stage» en líneas distintas podría quedar como `first stage; second stage`. Así ambas partes permanecen en una sola línea. Mantén **New line** seleccionado como separador entre tarjetas si usas un punto y coma dentro de una respuesta.

Si las dos etapas merecen preguntas independientes, escribe dos parejas completas. La [guía para hacer mejores flashcards](/blog/how-to-make-better-flashcards/) puede ayudarte a decidir.

## Revisa el resultado antes de publicar

Inspecciona las cuatro tarjetas de prueba. Al importar la lista completa, compara las tarjetas con la versión corregida de los datos de origen:

- ¿El total coincide con el número de filas de datos completas?
- ¿Coinciden la primera y la última pareja, incluidas sus respuestas completas?
- ¿Se han conservado la puntuación, las tildes y los códigos sin cambios?
- ¿Hay caras vacías, encabezados, duplicados o respuestas emparejadas con términos incorrectos?
- ¿Siguen teniendo sentido las respuestas cuyos saltos de línea has editado?

Revisa también varios pares de término y respuesta que parezcan correctos. Que los totales coincidan no basta para detectar una respuesta incorrecta asociada a un término válido. Si algo falla, corrige los datos de origen antes de repetir la importación. Guarda el archivo limpio para futuras correcciones.

## ¿Ya tienes los términos y sus definiciones o quieres generarlos con IA?

Quizlet también describe la creación de tarjetas con ayuda de IA a partir del material que proporciones en su [guía sobre la creación con IA](https://quizlet.com/content/create-flashcards-from-words-and-definitions-with-quizlet-ai). También tendrás que revisar el contenido de las tarjetas generadas. Si ya tienes una lista de términos y definiciones terminada, la importación estructurada te permite comprobar que se han transferido las parejas tal como las escribiste.

¿Tus apuntes todavía están en párrafos? [Convierte tus apuntes en flashcards](/blog/turn-notes-into-flashcards/) antes de preparar el texto para importar. ¿Quieres trasladar un conjunto en sentido contrario? Consulta la [guía para exportar desde Quizlet](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/).
