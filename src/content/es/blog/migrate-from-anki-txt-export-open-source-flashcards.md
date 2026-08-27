---
title: "Cómo migrar desde Anki en 2026: un proceso seguro de exportación a TXT"
description: "Migra tarjetas de Anki basadas en texto sin poner en riesgo la colección original. Crea una copia .colpkg, exporta las notas a TXT, comprueba los campos y los archivos multimedia y reconstruye un mazo pequeño con seguridad."
date: "2026-03-13"
updated: "2026-08-27"
image: "/blog/migrate-from-anki-txt-export-open-source-flashcards.png"
keywords:
  - "migrar desde Anki"
  - "exportar Anki a TXT"
  - "exportar mazo de Anki"
  - "de Anki a tarjetas de estudio"
  - "migración de Anki"
  - "Notas en texto sin formato"
  - "copia de seguridad .colpkg"
---

La forma más segura de migrar desde Anki comienza con dos exportaciones, no con una. Primero, crea un archivo `.colpkg` con los archivos multimedia para poder recuperar la colección original. Después, exporta como **Notas en texto sin formato** el contenido que quieras trasladar.

Cada archivo resuelve un problema distinto. El paquete de la colección es tu vía de regreso; el TXT, tu copia de trabajo portátil. Si tienes clara esta diferencia, no confundirás una lista con el texto de las tarjetas con una copia de seguridad completa de Anki.

Este proceso está pensado para mazos basados en texto y aplicaciones capaces de trabajar con TXT o CSV. La exportación de texto no conserva el estado de programación de Anki, las plantillas, los complementos ni los archivos multimedia. Primero probarás un mazo representativo, revisarás todos los campos y mantendrás intacta la colección original hasta obtener un resultado que puedas usar con confianza.

> **Aviso:** Soy Kirill Markin y desarrollo [Flashcards](https://flashcards-open-source-app.com/). Esta guía deja claro cuándo conviene seguir usando Anki o elegir una aplicación que importe archivos `.apkg`.

**Información comprobada:** 27 de agosto de 2026.

![Un botánico mantiene intacta la planta original junto a un esqueje de respaldo protegido y tres esquejes de prueba](/blog/migrate-from-anki-txt-export-open-source-flashcards.png)

## Primero, decide si TXT es la vía adecuada

Anki almacena mucho más que las palabras que ves durante un repaso. Una nota puede tener varios campos, y el tipo de nota junto con sus plantillas determina cómo se convierten esos campos en una o más tarjetas. La colección también contiene información de programación, mientras que los archivos multimedia se guardan por separado y se enlazan desde el contenido de las notas.

Una exportación de texto solo extrae una parte de ese sistema. Consulta esta tabla antes de dedicar tiempo a limpiar el archivo:

| Tu configuración de Anki | ¿Tiene sentido migrar mediante TXT? | Decisión más segura |
| --- | --- | --- |
| Notas básicas con anverso y reverso, con pocos archivos multimedia o ninguno | **Sí** | Exporta un mazo representativo, asigna los campos y prueba la aplicación de destino |
| Varios campos de texto predecibles, como término, definición y ejemplo | **Normalmente sí** | Decide qué campos formarán el anverso y el reverso antes de importar |
| Notas de tipo cloze que estás dispuesto a reescribir como preguntas y respuestas normales | **A veces** | Prueba unas cuantas notas cloze y revisa el resultado tarjeta por tarjeta |
| HTML personalizado que solo modifica un formato sencillo | **A veces** | Comprueba si la aplicación de destino interpreta, elimina o muestra el HTML |
| Imágenes o audio útiles, pero no imprescindibles | **A veces** | Traslada primero el texto; después, adjunta y comprueba los archivos multimedia por separado |
| Las plantillas, CSS, JavaScript, los complementos o las tarjetas inversas generadas son imprescindibles | **Normalmente no** | Sigue usando Anki o elige una aplicación con importación compatible de paquetes de Anki |
| Las fechas de vencimiento, el historial de repasos o el estado de programación personalizado son imprescindibles | **No** | Sigue estudiando en Anki o utiliza una vía de migración que conserve expresamente la programación |
| La oclusión de imágenes o las notas con muchos archivos multimedia contienen la información esencial | **No, si solo usas TXT** | Utiliza una aplicación compatible con paquetes y comprueba la fidelidad de los archivos multimedia antes de cambiar |

La pregunta clave es sencilla: si redujeras cada nota a sus campos de texto, ¿seguirías teniendo el material que necesitas? Si la respuesta es no, TXT no es el formato de migración adecuado.

## El modelo de seguridad con dos exportaciones

Haz ambas exportaciones antes de cambiar nada en Anki o de crear un mazo grande en otra aplicación.

| Archivo | Para qué sirve | Qué protege |
| --- | --- | --- |
| `.colpkg` con **Incluir archivos multimedia** activado | Recuperación | Las notas, tarjetas, mazos y tipos de nota de la colección, su información de programación y los archivos multimedia locales incluidos |
| `.txt` de **Notas en texto sin formato** | Portabilidad | El contenido de los campos de las notas exportadas, separado por tabulaciones |

La [documentación de exportación de Anki](https://docs.ankiweb.net/exporting.html) indica que un paquete de colección contiene la colección completa, incluida la programación. La opción de archivos multimedia determina si el paquete incluye las imágenes, los audios y otros archivos locales. La [guía de copias de seguridad de Anki](https://docs.ankiweb.net/backups.html) recomienda guardar manualmente un paquete de la colección en un lugar seguro, como otro dispositivo o un servicio de almacenamiento en la nube.

El archivo TXT tiene un alcance mucho más limitado, y es así a propósito. Anki escribe los campos de las notas en un archivo de texto y los separa mediante tabulaciones. Si incluyes el HTML y las referencias a archivos multimedia, también podrás ver el marcado almacenado en esos campos. Así puedes revisar y reutilizar el contenido, pero el archivo no se convierte por ello en una copia portátil de todo el sistema de Anki.

Un archivo `.colpkg` protege los datos de la colección. No contiene la aplicación Anki ni el código de tus complementos, así que guarda por separado una lista de los complementos de los que dependa tu forma de estudiar.

Si buscas una estrategia de copia de seguridad más amplia que esta migración, consulta [cómo hacer una copia de seguridad de tus tarjetas de estudio](/es/blog/how-to-back-up-flashcards/).

## Exportación 1: crea el archivo `.colpkg` de recuperación

Usa la aplicación de escritorio de Anki y sigue el proceso de recuperación del manual oficial. Si los archivos multimedia son importantes para tus tarjetas, ejecuta antes **Herramientas > Comprobar archivos multimedia**. La [guía de archivos multimedia de Anki](https://docs.ankiweb.net/media.html) explica que esta opción muestra los archivos que las notas mencionan pero que faltan en la carpeta multimedia.

1. Abre **Archivo > Exportar**.
2. Selecciona **Paquete de colección de Anki (`.colpkg`)** como formato de exportación.
3. Activa **Incluir archivos multimedia**.
4. Guarda el archivo fuera de la carpeta del perfil de Anki.
5. Cópialo en una segunda ubicación que no esté en el ordenador donde guardas la colección.

Incluye la fecha en el nombre del archivo; por ejemplo, `anki-collection-2026-08-27.colpkg`. A continuación, comprueba que exista en ambas ubicaciones y que su tamaño no sea cero.

No «pruebes» esta copia de seguridad importándola encima de tu colección activa. Anki advierte que al importar un archivo `.colpkg` se eliminan y sustituyen las tarjetas actuales; los archivos multimedia existentes no se borran. Si algún día necesitas restaurarla, sigue las instrucciones oficiales y ten presente que perderás los cambios realizados en la colección después de crear la copia.

Conserva este archivo incluso si la migración mediante TXT sale bien. Es el que guarda el estado de la colección que la exportación de texto no puede representar.

## Exportación 2: crea una pequeña muestra de Notas en texto sin formato

Empieza con un mazo representativo, no con toda la colección. Elige uno que contenga los casos difíciles que utilizas de verdad: un campo adicional, una etiqueta que te importe, una respuesta con formato, una nota cloze y una referencia a un archivo multimedia, si esos elementos aparecen en el resto de la colección.

Después:

1. Abre de nuevo **Archivo > Exportar**.
2. Elige **Notas en texto sin formato**.
3. Limita la exportación al mazo representativo.
4. Activa **Incluir HTML y referencias a archivos multimedia** para que la muestra deje visibles el formato y las dependencias de archivos. Esta opción conserva las referencias, pero no introduce los archivos multimedia en el TXT.
5. Activa **Incluir etiquetas** si quieres conservarlas. Aun así, tendrás que asignarlas y comprobarlas en la aplicación de destino.
6. Guarda el resultado como archivo `.txt` y no muevas la colección de origen.

Anki lo llama exportación de notas por una razón: exporta los campos almacenados, no una captura de cada tarjeta tal como se muestra. Si una nota genera una tarjeta directa y otra inversa mediante plantillas, el archivo de texto sigue describiendo los campos de la nota; no contiene una lógica portátil que permita a otra aplicación generar esas dos tarjetas de repaso.

Cuando la pequeña muestra funcione, repite el mismo proceso con los demás mazos que se presten a esta migración. Si falla una muestra, solo pierdes un poco de tiempo revisándola. Si falla una migración completa, acabas con todo un proyecto de limpieza.

## Abre el archivo TXT antes de entregárselo a un importador o a una IA

No trates la exportación como un archivo adjunto opaco. Ábrela en un editor de texto que permita ver las tabulaciones o importa una copia en una hoja de cálculo sin sobrescribir el original.

Las exportaciones recientes de Anki pueden empezar con líneas como `#separator:tab`, `#html:true` o `#tags column:...`. Son cabeceras del archivo, no notas. Déjalas en el original intacto, pero exclúyelas si copias unas pocas filas de notas a un archivo de prueba independiente para una aplicación que no entienda las cabeceras de Anki.

Comprueba cinco aspectos:

1. **Número de campos:** Cada fila debe tener la cantidad de campos separados por tabulaciones que esperas. La [guía de importación de archivos de texto de Anki](https://docs.ankiweb.net/importing/text-files.html) explica por qué importan los separadores y cómo asignar cada campo por separado.
2. **Orden de los campos:** Anota qué significa cada columna: Anverso, Reverso, Ejemplo, Fuente u otra cosa. Al mirar las filas sin procesar, quizá no resulte evidente el nombre de cada campo ni en qué lado de la tarjeta aparece.
3. **HTML:** Busca fragmentos como `<b>`, `<br>` o `<div>`. Cuando se incluye en la exportación, Anki guarda el formato como HTML. Otra aplicación puede interpretarlo, eliminarlo o mostrarlo como texto.
4. **Marcado cloze:** Busca cadenas como `{{c1::Paris}}`. Una aplicación genérica de anverso y reverso no heredará el comportamiento de generación de tarjetas cloze por el mero hecho de encontrar ese texto en un campo.
5. **Referencias a archivos multimedia:** Busca `<img src="...">` y `[sound:...]`. La referencia no es el archivo de imagen o audio. Anki guarda esos archivos por separado en su carpeta multimedia.

Revisa también las etiquetas si dependes de ellas. La [guía de importación de archivos de texto de Anki](https://docs.ankiweb.net/importing/text-files.html) admite un campo específico para etiquetas y una cabecera `#tags column`, pero la aplicación de destino podría usar otro formato. La migración solo conservará las etiquetas si las incluyes, las asignas de forma deliberada y compruebas las tarjetas creadas. Nunca des por hecho que una jerarquía como `parent::child` se ha conservado solo porque veas algunos nombres de etiquetas en la muestra.

No sustituyas todas las tabulaciones por comas para limpiar el archivo deprisa. La tabulación marca el límite entre campos. Si cambias los separadores sin aplicar correctamente las comillas de CSV, las comas, las comillas o los saltos de línea del contenido pueden romper las filas.

Yo dejaría junto a la exportación una nota breve con la asignación:

```text
Columna 1 -> anverso
Columna 2 -> reverso
Columna 3 -> añadir al reverso como ejemplo
Columna 4 -> conservar como etiquetas solo después de revisarla
HTML -> eliminar salvo los saltos de línea
Marcado cloze -> reescribir manualmente
```

Esa pequeña nota permite repetir la migración y te da una referencia concreta con la que comparar el resultado en la nueva aplicación.

## Qué se conserva y qué se queda en el límite del TXT

| Datos o comportamiento de Anki | ¿Aparece en Notas en texto sin formato? | Qué hacer |
| --- | --- | --- |
| Texto de los campos de las notas | **Sí** | Asigna de forma deliberada cada columna separada por tabulaciones |
| Formato sencillo | **Como HTML insertado, si lo incluyes** | Comprueba cómo lo gestiona la aplicación de destino; elimínalo o reescríbelo cuando sea necesario |
| Etiquetas | **Solo si se incluyen en la exportación** | Asigna expresamente la columna de etiquetas y comprueba sus nombres y su jerarquía |
| Imágenes y audio | **Pueden aparecer referencias; los archivos no viajan dentro del TXT** | Conserva la copia de recuperación `.colpkg` y traslada por separado los archivos multimedia necesarios |
| Plantillas de tarjeta y CSS | **No** | Reconstruye la estructura de la tarjeta o elige un importador compatible con paquetes |
| JavaScript o comportamiento de complementos | **No** | Sigue usando Anki si ese comportamiento forma parte de tu forma de estudiar |
| Comportamiento cloze | **No** | Convierte la sintaxis cloze en tipos de tarjeta compatibles o en tarjetas normales de pregunta y respuesta |
| Varias tarjetas generadas a partir de una nota | **No como comportamiento de plantilla** | Decide qué direcciones deben convertirse en tarjetas independientes en la aplicación de destino |
| Nombres y jerarquía de los mazos | **Solo si se incluyen como metadatos de exportación** | Asigna los nombres expresamente; no esperes que la nueva aplicación reconstruya la estructura |
| Ajustes predefinidos de los mazos | **No** | Vuelve a crear solo los ajustes que sigas necesitando |
| Fechas de vencimiento, intervalos, historial de repasos y estado del planificador | **No** | Considera que las tarjetas de destino empiezan un historial de repaso nuevo |

La última fila es la que más cuesta. El contenido de las tarjetas y la programación son recursos distintos. Una **exportación de Anki a TXT** correcta puede conservar las palabras y, aun así, reiniciar el estado de aprendizaje de todas las tarjetas.

Que dos aplicaciones utilicen planificadores de la misma familia no hace que los historiales de sus tarjetas sean intercambiables. La nueva aplicación no puede deducir las fechas de vencimiento anteriores, la estabilidad, la dificultad ni los eventos de repaso a partir del texto de las preguntas y respuestas. Si ese historial es importante, lee [qué almacena y calcula FSRS](/es/blog/what-is-fsrs/) antes de decidir si quieres reiniciarlo.

## Haz una prueba reversible en la aplicación de destino

Durante la prueba, mantén Anki como fuente de referencia. Crea un mazo temporal en la aplicación de destino, importa o prepara solo la muestra representativa y revisa todos los resultados. En esta fase no necesitas eliminar, editar ni suspender las notas originales.

La revisión debe responder a estas preguntas:

- ¿Cada nota esperada ha creado el número correcto de tarjetas?
- ¿Los campos correctos han llegado al anverso y al reverso?
- ¿Se han conservado las tabulaciones, las comillas, los saltos de línea, el texto no latino y los fragmentos de código?
- ¿El HTML se interpreta correctamente, se muestra como marcado sin procesar o se elimina?
- ¿Las notas cloze se han convertido de forma deliberada en lugar de copiarse como sintaxis rota?
- ¿Las etiquetas siguen significando lo mismo que en Anki?
- ¿Se entienden las tarjetas que dependen de archivos multimedia y están presentes los archivos necesarios?
- ¿La aplicación de destino ha creado duplicados?
- ¿Está claro que la programación empieza desde cero?

Compara la muestra con Anki, una junto a la otra. No aceptes un «casi todo parece correcto» cuando la ausencia de un solo campo podría afectar a todas las notas de una exportación grande.

Si la prueba falla, elimina las tarjetas temporales mediante el proceso de limpieza de la propia aplicación y modifica la asignación o el proceso de limpieza. Tu colección de Anki y los dos archivos exportados permanecerán intactos. Eso es lo que hace que la prueba sea reversible.

## Cómo usar el archivo TXT con Flashcards Open Source App

Flashcards no tiene un importador directo de Anki. No puede leer archivos `.apkg` o `.colpkg` y reconstruir las plantillas, los archivos multimedia ni el historial de repasos de Anki.

La opción disponible actualmente en la aplicación alojada es crear borradores con ayuda de la IA a partir de archivos adjuntos. Abre la [aplicación alojada siguiendo la guía de primeros pasos](/es/docs/getting-started/), adjunta el TXT o un CSV preparado con cuidado en el chat de IA y pide expresamente un borrador pequeño sin guardar nada. Revisa las tarjetas propuestas en el chat y, solo entonces, pide al asistente que guarde el lote aprobado.

Una primera petición útil debe indicar con precisión la asignación y limitar los efectos secundarios:

```text
Lee la exportación adjunta de Anki en formato Notas en texto sin formato. No
guardes todavía ninguna tarjeta. Trata las tabulaciones como separadores de
campos. Usa la columna 1 como anverso y la columna 2 como reverso. Añade la
columna 3 bajo «Ejemplo». Muestra primero una pequeña muestra, conserva la
redacción original y señala las filas con HTML, marcado cloze, campos ausentes
o referencias a archivos multimedia en lugar de hacer suposiciones.
```

Adapta esa petición a la asignación que hayas anotado después de revisar el archivo. Si los borradores tienen demasiada información o son poco concretos, utiliza la lista para [corregir tarjetas creadas con IA antes de repasarlas](/es/blog/how-to-fix-ai-flashcards/). La IA ayuda a resolver la reestructuración repetitiva, pero no demuestra que la migración haya conservado bien el contenido original.

Cuando apruebes un lote pequeño, guárdalo en un mazo de prueba temporal, añade una etiqueta de migración y repite la misma lista de comprobaciones. El resultado que hayas verificado es la única prueba útil para esa colección concreta de Anki.

## Amplía la migración sin volver irreversible el cambio

Cuando el mazo representativo supere la prueba:

1. Agrupa los mazos restantes según la estructura de sus notas, en lugar de exportarlo todo a un único archivo ambiguo.
2. Exporta y revisa un grupo cada vez.
3. Reutiliza una asignación de campos escrita solo cuando los tipos de nota coincidan de verdad.
4. Revisa cada lote creado antes de pasar al siguiente.
5. Conserva el archivo `.colpkg`, los TXT intactos y el propio Anki.

Si decides estudiar las tarjetas nuevas, elige un momento claro para hacer la transición. Repasar el mismo material en ambas aplicaciones crea dos programaciones independientes que divergen de inmediato. La programación antigua de Anki seguirá disponible en la copia de recuperación, pero no incorporará los repasos que hagas en otro lugar.

No ganas nada por eliminar Anki deprisa. Conserva la colección original hasta que hayas usado el mazo nuevo con normalidad durante un tiempo y estés conforme con todo lo que la vía TXT ha dejado atrás.

## Cuándo no deberías migrar desde Anki de esta manera

Sigue usando Anki o elige una aplicación que importe archivos `.apkg` de forma explícita si tu colección depende de:

- tipos de nota complejos o varias direcciones de tarjeta generadas;
- plantillas personalizadas, CSS, JavaScript o complementos;
- un comportamiento cloze que no quieras reconstruir;
- oclusión de imágenes, audio o imágenes que contengan información esencial;
- ajustes predefinidos y una organización de mazos que deban transferirse con exactitud;
- un historial de repasos o una programación actual que no puedas permitirte reiniciar.

Anki es una opción sólida para esos métodos de estudio. La migración mediante TXT no es un veredicto sobre la aplicación, sino una herramienta limitada para quienes conservan su material más valioso principalmente en el contenido de las notas. La [comparativa más amplia entre Anki y Flashcards](/es/blog/anki-vs-flashcards-open-source-app/) explica las ventajas y los inconvenientes de ambos productos sin dar por hecho que todo el mundo deba cambiar.

## La versión segura es aburrida a propósito

Para migrar desde Anki sin poner en riesgo la colección original, mantén el proceso sencillo:

1. Exporta un archivo `.colpkg` con los archivos multimedia y guárdalo en otro lugar.
2. Exporta un mazo representativo como **Notas en texto sin formato**.
3. Revisa las tabulaciones, los campos, el HTML, las notas cloze, las etiquetas y las referencias a archivos multimedia.
4. Escribe una asignación explícita entre el origen y el destino.
5. Crea un mazo temporal de muestra y comprueba todas las tarjetas.
6. Amplía la migración solo cuando la muestra supere la prueba.
7. Conserva Anki y el paquete de recuperación mientras compruebas que el nuevo método de estudio funciona.

El archivo TXT traslada el contenido. El archivo `.colpkg` protege la colección. Cuando dejas de pedirle a un solo archivo que haga ambas cosas, una migración desde Anki resulta mucho más fácil de entender y de revertir.
