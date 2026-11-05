---
title: "Cómo encontrar tarjetas duplicadas en Anki y decidir cuáles conservar"
description: "Encuentra tarjetas duplicadas en Anki, compara las notas y decide qué copia conservar. Practica con un ejemplo y comprueba que se mantiene el historial de repasos."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "tarjetas duplicadas en Anki"
  - "buscar duplicados en Anki"
  - "eliminar notas duplicadas en Anki"
  - "notas duplicadas en Anki"
  - "historial de repasos de Anki"
---

Reconoces una pregunta que ya has repasado, pero Anki te la muestra como nueva. Quizá se coló otra copia durante una importación. También puede ser otra tarjeta generada a partir de la misma nota. Si borras una fila del explorador, puedes eliminar todas las tarjetas de esa nota, incluida la que querías seguir repasando.

Si encuentras **tarjetas duplicadas en Anki**, averigua primero de dónde viene la repetición. Cuando se trata de notas distintas, usa **Notes → Find Duplicates** para localizar las que coinciden en un campo. Compara las notas completas y el historial de cada tarjeta antes de decidir qué copia conservar en cada grupo.

Estas instrucciones para la versión de escritorio se basan en la documentación y el código fuente de la versión publicada de Anki, consultados el 4 de octubre de 2026. El ejercicio en papel ilustra el resultado esperado con datos ficticios.

![Un miembro de un club de ajedrez compara una torre clara que sobra con dos torres desgastadas en un tablero de madera](/blog/anki-duplicate-cards.png)

## Averigua qué se está repitiendo

Una nota guarda campos como **Front** (anverso) y **Back** (reverso). Las plantillas generan las tarjetas a partir de esos campos. Por ejemplo, de una sola nota de vocabulario pueden salir una pregunta de reconocimiento y otra de producción, cada una con su propio calendario de repasos. Son tarjetas hermanas. Consulta la [explicación de Anki sobre las notas y sus campos](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields).

En el explorador (**Browse**), selecciona el modo **Cards** y abre **Cards → Info** para cada fila que quieras investigar. Compara los ID de nota. Si coinciden, las tarjetas pertenecen a la misma nota. Si son distintos, pertenecen a notas distintas. Sustituye `123` en `nid:123` por el ID real para ver todas las tarjetas de esa nota, sin limitar la búsqueda a un mazo. El manual de Anki explica [cómo buscar por ID](https://docs.ankiweb.net/searching.html#object-ids).

| Lo que ves | Explicación probable | Qué hacer |
| --- | --- | --- |
| Misma nota, preguntas en sentidos opuestos | Tarjetas hermanas creadas a propósito | Comprueba si ambas preguntas te sirven |
| Misma nota, preguntas idénticas en la vista previa | Puede haber plantillas de tarjeta duplicadas | Compara las plantillas y las vistas previas |
| Notas distintas, preguntas aparentemente idénticas | Posibles notas duplicadas | Compara las notas completas antes de decidir cuál conservar |

Si las tarjetas hermanas se crearon a propósito, la [guía sobre tarjetas invertidas (en inglés)](/blog/anki-reverse-cards/) explica los dos sentidos. Si quieres dejar de repasar solo una, puedes suspenderla y conservarla en tu colección. [Guía sobre cómo suspender tarjetas (en inglés)](/blog/anki-bury-vs-suspend/)

Si las plantillas son idénticas, sigue las [instrucciones de Anki para identificar el origen de las copias](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html). Quitar una plantilla afecta a todas las notas de ese tipo, incluso si sus tarjetas están en otros mazos. Trata ese cambio por separado, ya que afecta a la estructura de tu colección.

## Delimita la búsqueda de notas duplicadas

Abre **Notes → Find Duplicates** y elige el campo que quieres comparar, por ejemplo **Front**. De forma predeterminada, Anki busca en todos los tipos de nota que tienen ese campo. Usa **Optional filter** para acotar la búsqueda y haz clic en **Search**. El manual de Anki explica [las opciones de Find Duplicates](https://docs.ankiweb.net/browsing.html#finding-duplicates).

Para buscar en un mazo llamado `Cleanup practice`, introduce esta consulta.

```text
deck:"Cleanup practice"
```

La búsqueda por mazo incluye también sus submazos. Aunque no encuentres duplicados en un mazo, puede haber copias en otros. Quita el filtro para buscar en toda la colección. [Sintaxis de Anki para buscar por mazo](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes)

Haz clic en un grupo de resultados para revisar sus notas. **Tag Duplicates** añade la etiqueta `duplicate` a todas las notas de cada grupo, incluida la que quieras conservar. Así funciona el [código publicado de Anki](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py). **No borres todos los resultados de `tag:duplicate`.** Usa la etiqueta para reunir las posibles copias y selecciona una a una las notas que quieres eliminar.

La búsqueda compara el campo elegido. Dos preguntas redactadas de forma distinta pueden evaluar lo mismo y requerir una búsqueda manual. Dos preguntas idénticas pueden pertenecer a idiomas o cursos distintos.

## Practica con tres casos en papel

Imagina que tienes seis notas en `Cleanup practice`, sin submazos. A y B usan las plantillas de **Basic (and reversed card)** sin modificar y generan dos tarjetas cada una. Las notas de C a F usan **Basic** y generan una cada una. Las ocho tarjetas están en ese mazo. Las letras solo sirven para identificar las notas en el ejercicio. En Anki, los ID de notas y tarjetas son números.

| Notas | Anverso → Reverso | Estado de aprendizaje ficticio | Decisión |
| --- | --- | --- | --- |
| A y B | `le vélo` → `bicycle` | A lleva 12 repasos en la tarjeta de reconocimiento y 3 en la de producción. Las dos tarjetas de B son nuevas | Conserva A. Revisa primero si puedes borrar B |
| C y D | `Chemical symbol for silver?` → `Ag` | C tiene 20 repasos y D tiene 6 | Compara ambos historiales y decide con qué tarjeta seguir |
| E y F | E (`bank` → `financial institution`) y F (`bank` → `side of a river`) | Cada nota evalúa un significado distinto | Conserva las dos y añade contexto a las preguntas |

La búsqueda en el campo **Front** puede agrupar las tres parejas. Solo en la primera es fácil decidir. Antes de dar por hecho que B sobra, compara **todos los campos**, los archivos multimedia, las etiquetas, el tipo de nota y cómo se ve cada sentido en la vista previa. Puede que B incluya una grabación de la pronunciación que falte en A o que genere una pregunta distinta.

Si encuentras contenido útil para repasar lo mismo, cópialo a la nota que vas a conservar y comprueba el resultado en la vista previa. Conserva también las etiquetas útiles de la otra nota. Si quieres repasar un dato distinto, crea una pregunta nueva para que el historial anterior siga ligado a lo que ya estudiaste.

En el caso de C y D, tener más repasos es solo una pista. Revisa las fechas y las valoraciones de los repasos, el intervalo actual y cuándo toca volver a repasar cada tarjeta. Puede que una acumule más repasos porque te ha costado más volver a aprenderla. Comprueba que la pregunta y la respuesta te sirven y elige con qué historial quieres seguir. Si las respuestas se contradicen, consulta primero tu material de estudio. La cantidad de repasos no te dice cuál es correcta.

Si conservas C y borras D, **los historiales no se fusionan**. C sigue con su propio estado de aprendizaje. En [Card Info](https://docs.ankiweb.net/stats.html#card-info), Anki muestra el historial de cada tarjeta. Los repasos de las tarjetas de una nota eliminada siguen apareciendo en las estadísticas de toda la colección y desaparecen de las estadísticas del mazo. Esos repasos tampoco se transfieren a la tarjeta que conservas. [Cómo contabiliza Anki los repasos de notas eliminadas](https://docs.ankiweb.net/stats.html#more)

Si aún tienes dudas, deja el borrado para más adelante. Anota qué te falta comprobar y, si hace falta, suspende las tarjetas que pensabas borrar mientras lo aclaras.

## Borra una copia y comprueba qué queda

Antes de borrar material de tu colección, sincroniza los cambios pendientes en tus otros dispositivos. Después sincroniza Anki en el ordenador para incorporar esos cambios. El [manual de sincronización de Anki](https://docs.ankiweb.net/syncing.html) explica el proceso. Ve a **File → Export** y guarda un **Anki Collection Package (`.colpkg`)** con **Include Media** activado. El archivo contiene todos los mazos, la programación de los repasos y su historial. Guárdalo en un lugar seguro. Si lo importas, la colección guardada sustituye las tarjetas actuales del perfil abierto. [Documentación sobre la exportación de colecciones](https://docs.ankiweb.net/exporting.html#collection-colpkg)

Si quieres ensayar el borrado, crea un perfil aparte desde **File → Switch Profile** e importa allí la copia de seguridad. Deja ese perfil sin conectar a AnkiWeb. [Cada perfil tiene su propia colección](https://docs.ankiweb.net/profiles.html). Si conectas ambos perfiles a la misma cuenta, una colección puede sobrescribir la otra. La [guía sobre APKG y COLPKG (en inglés)](/blog/anki-apkg-vs-colpkg/) explica qué guarda cada formato y qué pasa al importarlo.

En el ejercicio, llama A1 a la tarjeta de reconocimiento de A y A2 a la de producción. Las tarjetas correspondientes de B son B1 y B2. En **Cards → Info**, anota los ID reales de las dos tarjetas de A, cuándo toca repasarlas, sus intervalos y algunas entradas del historial que puedas reconocer después. Anota también el ID de la nota B. Haz las comprobaciones de antes y después en la misma sesión, sin repasar ni reprogramar ninguna de las dos copias.

Para eliminar notas duplicadas de Anki una a una, sigue estos pasos.

1. En el explorador, sustituye la búsqueda actual por `nid:` con el ID real de B. En el modo **Cards**, revisa cada resultado y abre la vista previa de las tarjetas en ambos sentidos. Cuando limpies tu colección, comprueba también si hay tarjetas hermanas en otros mazos. Haz esta búsqueda sin filtro de mazo.
2. Cambia al modo **Notes**. Confirma que el único resultado es la nota B que quieres borrar, selecciona solo esa nota y elige **Notes → Delete**. La [opción Delete](https://docs.ankiweb.net/browsing.html#notes) elimina la nota seleccionada y todas sus tarjetas, incluso si la usas desde una sola fila en el modo **Cards**.
3. Vuelve a buscar el ID de la nota B y comprueba que la búsqueda no devuelve resultados. Escribe `cid:` seguido de los dos ID de las tarjetas de A que anotaste, separados por una coma. Abre **Info** para ambas tarjetas y compara los datos con tus apuntes.
4. Busca `deck:"Cleanup practice"` y cuenta las filas en los modos **Notes** y **Cards**. Comprueba las notas que quedan con la tabla siguiente.

Esto es lo que deberías ver tras borrar solo B.

| Comprobación | Antes | Resultado esperado |
| --- | --- | --- |
| Mazo completo del ejercicio | 6 notas y 8 tarjetas | 5 notas y 6 tarjetas |
| Pareja de notas sobre la bicicleta | A1, A2, B1 y B2 | Solo A1 y A2 |
| ID, datos del próximo repaso, intervalos e historial de las tarjetas de A | Los valores que anotaste | Las mismas tarjetas, la misma programación y las mismas entradas del historial |
| Búsqueda por ID de la nota B | Las dos tarjetas de B | Ningún resultado |
| Notas sobre la plata y los significados de «bank» | C, D, E y F | Se conservan las cuatro |

En este caso, borrar una nota elimina dos tarjetas. Si borras A por error, los totales serán iguales y habrás perdido las tarjetas que ya habías estudiado y querías conservar. Comprueba qué tarjetas quedan además de cuántas quedan. Durante la limpieza, evita reiniciar el progreso o reprogramar las tarjetas que conserves.

Un gráfico de repasos de toda la colección puede seguir incluyendo los de las tarjetas eliminadas. Para comprobar que una tarjeta conserva su progreso, verifica su ID y su historial en **Info**. El gráfico general puede seguir igual.

Cuando el resultado coincida con lo que anotaste, pasa al siguiente grupo y decide qué copia conservar en ese caso. Si ensayaste con una copia de seguridad, repite primero en tu perfil habitual la limpieza que ya comprobaste. Una vez revisada esa colección, sincroniza Anki en el ordenador y después en tus otros dispositivos antes de repasar en ellos. Si las copias aparecieron al importar, consulta la [guía para actualizar notas con un CSV (en inglés)](/blog/anki-csv-update-existing-notes/) antes de la próxima importación. Si duplicaste una nota para incluir el mismo dato en varios temas, [puedes usar etiquetas (guía en inglés)](/blog/anki-tags-vs-decks/) y mantener un solo historial de aprendizaje.
