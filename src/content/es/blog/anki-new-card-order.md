---
title: "El orden de las tarjetas nuevas en Anki. Cómo se eligen, se ordenan y se comprueban"
description: "Descubre cómo Anki selecciona y ordena las tarjetas nuevas con un ejemplo de seis tarjetas. Comprueba los límites de los submazos, las posiciones en la cola y el mazo elegido para estudiar."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "orden de las tarjetas nuevas en Anki"
  - "orden de selección de tarjetas nuevas en Anki"
  - "orden de presentación de tarjetas nuevas en Anki"
  - "posición ascendente en Anki"
  - "tarjetas de Anki fuera de orden"
---

En Anki, una tarjeta nueva en la posición 10 puede aparecer después de otra en la posición 60. Si estudias un mazo padre con **Mazo** (*Deck*) como ajuste de selección y **Orden de selección** (*Order gathered*) como ajuste de presentación, Anki puede terminar de seleccionar las tarjetas de un submazo anterior antes de pasar al que contiene la tarjeta de la posición 10. Ordenar el explorador por fecha de creación no cambia la cola de estudio.

Anki decide el orden de las tarjetas nuevas en dos pasos. Primero **selecciona** las que caben dentro de los límites de hoy. Después **ordena** las que ha seleccionado. Empieza por comprobar si entran tarjetas distintas de las que esperabas o si entran las correctas y aparecen en un orden inesperado.

Estas instrucciones se aplican a los mazos normales de Anki de escritorio. El ejemplo de seis tarjetas es un cálculo original sobre el papel, comprobado el 6 de octubre de 2026 a partir del manual vigente y de la versión publicada de [Anki 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3). El ejemplo se calculó sin ejecutar una sesión de estudio en Anki.

![Un hombre sostiene un cuarto disco de vinilo sobre un compartimento vacío de un expositor, junto a otros tres discos. Detrás de él hay dos cajas con álbumes que quedaron fuera de la selección.](/blog/anki-new-card-order.png)

## Elige el orden en que quieres estudiar

Abre las **Opciones** (*Options*) del mazo que eliges para estudiar y busca la sección **Orden de visualización** (*Display Order*). Cuando estudias un mazo padre, sus ajustes de visualización rigen toda la sesión, incluidas las tarjetas de sus submazos.

| Resultado que buscas | Orden de selección de tarjetas nuevas (*New Card Gather Order*) | Orden de presentación de tarjetas nuevas (*New Card Sort Order*) |
| --- | --- | --- |
| Seguir las posiciones de menor a mayor en todo el conjunto que forman el mazo elegido y sus submazos | Posición ascendente (*Ascending position*) | Orden de selección |
| Recorrer los submazos por orden alfabético y seguir las posiciones dentro de cada uno | Mazo | Orden de selección |
| Mantener las tarjetas elegidas y mostrarlas en un orden aleatorio | El ajuste de selección que hayas elegido | Aleatorio (*Random*) |

Estas combinaciones siguen las definiciones de [selección](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order) y [ordenación](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order) del manual de Anki, en inglés. **Posición ascendente** sigue la posición guardada de cada tarjeta nueva. El orden de inserción y el reposicionamiento manual pueden cambiar esas posiciones, así que el resultado puede diferir del orden de creación.

Antes de tocar los ajustes, comprueba qué preajuste tiene asignado el mazo y qué otros mazos lo usan. El orden de visualización se configura en el preajuste. Si el cambio debe afectar solo a ese mazo, sigue primero la [guía para usar un preajuste exclusivo para un mazo](/blog/anki-deck-options-presets/) (en inglés). Los límites diarios admiten ajustes específicos para **Este mazo** (*This deck*) o **Solo hoy** (*Today only*). El orden de visualización se comparte entre los mazos que usan el mismo preajuste.

## Calcula qué cuatro tarjetas entran en la cola

Imagina un mazo padre normal llamado `OrderLab`, con dos submazos y solo estas seis tarjetas. Cada una viene de una nota distinta de tipo **Básica** (*Basic*) que genera una sola tarjeta. Por eso, las seis tienen el mismo número de tipo de tarjeta y ninguna tiene tarjetas hermanas.

| Tarjeta | Mazo | Posición guardada como tarjeta nueva |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Supón que las seis son nuevas, que ninguna está enterrada ni suspendida y que ninguna está en un mazo filtrado. Al empezar, no hay otras tarjetas ni repeticiones de aprendizaje ni repasos pendientes. Aún no has estudiado nada hoy. `OrderLab` no tiene ningún mazo por encima y los límites de repaso aplicables dejan margen para las seis tarjetas nuevas.

Selecciona **OrderLab** para estudiar. Su límite efectivo de tarjetas nuevas es **4**. El de `01 First` es **3** y el de `02 Second` es **2**, sin ajustes temporales. Mantén **Orden de selección** como ajuste de presentación en las dos comparaciones. Parte del mismo estado inicial de la colección en ambos casos y haz la cuenta sobre el papel, sin responder tarjetas entre una comparación y la otra.

Con **Mazo** como ajuste de selección, Anki sigue estos pasos.

1. Pasa por `01 First` antes que por `02 Second` porque sigue el orden alfabético.
2. Selecciona **A, B, C** por orden de posición. `01 First` ya ha aportado tres tarjetas y queda sitio para una más en el mazo padre.
3. Selecciona **D** de `02 Second` y alcanza el límite de cuatro tarjetas del mazo padre.

El orden esperado de primera aparición es **A → B → C → D**. E y F quedan fuera de la selección.

Con **Posición ascendente**, Anki considera las tarjetas de ambos submazos en este orden. **D → A → E → B → F → C**. Las primeras cuatro caben dentro de todos los límites. Entran dos de `02 Second` y dos de `01 First`, cuatro en total. Ahí termina la selección.

El orden esperado es **D → A → E → B**. C y F quedan fuera. El [código de selección de la versión publicada](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs) aplica los límites del mazo y del mazo padre a medida que incorpora tarjetas.

El límite de `02 Second` permite que aporte hasta dos tarjetas. Con el ajuste **Mazo**, aporta una sola porque `01 First` ya ha ocupado tres de los cuatro lugares disponibles. Con **Posición ascendente** entran dos de cada submazo por las posiciones concretas de estas tarjetas. En otra colección, el reparto puede ser distinto.

## Deja entrar las seis para ver qué cambia en la secuencia

Para la segunda comparación sobre el papel, pon límites que permitan admitir las seis tarjetas. Fija el del mazo padre en **6**, el de `01 First` en **3** y el de `02 Second` en **3**. Mantén **Orden de selección**.

| Ajuste de selección | Límites del mazo padre / 01 First / 02 Second | Orden esperado de primera aparición |
| --- | --- | --- |
| Mazo | 6 / 3 / 3 | A → B → C → D → E → F |
| Posición ascendente | 6 / 3 / 3 | D → A → E → B → F → C |

Con ambos ajustes entran las seis tarjetas. Ahora solo cambia el orden en que aparecen. Si subieras únicamente a seis el límite del mazo padre y mantuvieras en dos el de `02 Second`, entrarían cinco y F seguiría fuera. Esos aumentos son solo para el cálculo del ejemplo.

## Cambiar el orden no recupera las tarjetas que quedaron fuera

Vuelve a los límites originales de **4 / 3 / 2** y cambia solo el **Orden de presentación de tarjetas nuevas** a **Aleatorio**.

| Ajuste de selección | Tarjetas que se pueden mezclar | Tarjetas que el ajuste aleatorio no puede añadir |
| --- | --- | --- |
| Mazo | A, B, C, D | E, F |
| Posición ascendente | D, A, E, B | C, F |

Las tarjetas se mezclan dentro de cada grupo. Con estos datos puedes saber cuáles entran, pero no en qué orden concreto saldrán al mezclarlas. El [código de ordenación de la versión publicada de Anki](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs) reorganiza las tarjetas que ya se han seleccionado.

**Por tipo de tarjeta y luego por orden de selección** (*Card type, then order gathered*) también se aplica a las tarjetas ya elegidas. Las seis tarjetas de tipo **Básica** tienen el mismo número de tipo de tarjeta, así que en este ejemplo conservan el orden en que se seleccionaron.

Para ver qué hace la ordenación por sí sola, imagina que Anki ya ha seleccionado cuatro tarjetas de notas con varias plantillas en este orden. **W (tipo 2), X (tipo 1), Y (tipo 2), Z (tipo 1)**. Al ordenar por tipo de tarjeta, la secuencia queda **X → Z → W → Y**. Primero va el tipo 1 y, dentro de cada tipo, se conserva el orden de selección. El ejemplo da por hecha la selección. Para saber qué tarjetas hermanas entrarían, tendrías que tener en cuenta los ajustes de enterrado.

El número indica la posición de la plantilla de tarjeta dentro de su tipo de nota. Que una tarjeta sea de «reconocimiento» o de «producción» depende de cómo estén configuradas las plantillas. Comprueba las preguntas antes de dar por hecho que ordenar por tipo pondrá primero todas las que van en el sentido directo.

## Comprueba las posiciones en el explorador antes de cambiarlas

Abre **Explorar** (*Browse*), selecciona el modo **Tarjetas** (*Cards*) y busca en el mazo y sus submazos. Para el ejemplo, usa esta búsqueda.

```text
deck:OrderLab is:new
```

Desde el menú de los encabezados de columna, muestra **Pregunta** (*Question*), **Tarjeta** (*Card*), **Mazo** (*Deck*), **Vencimiento** (*Due*) y **Fecha de creación** (*Created*). Para una tarjeta nueva, **Vencimiento** muestra su posición en la cola y **Fecha de creación** indica cuándo se creó su nota. **Campo de ordenación** (*Sort Field*) muestra el contenido del campo de la nota elegido para ordenar. Ordenar por una columna del explorador solo cambia cómo se muestra la tabla. Las posiciones guardadas y el ajuste de selección para el estudio se mantienen. El manual de Anki explica qué muestra cada una de las [columnas del explorador](https://docs.ankiweb.net/manual/browsing#columns) (en inglés).

La búsqueda `is:new` puede incluir tarjetas nuevas suspendidas o enterradas. Sus valores de **Vencimiento** aparecen entre corchetes. Esta búsqueda más específica excluye esas tarjetas y las que están en mazos filtrados.

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

El manual de Anki documenta las [búsquedas por estado](https://docs.ankiweb.net/manual/searching#card-state) y las [búsquedas por mazo](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes) en inglés. Si el nombre del mazo contiene espacios, ponlo entre comillas, como en `deck:"My Deck"`. Los resultados sirven para revisar las tarjetas candidatas. Los límites y el enterrado automático de tarjetas hermanas aún pueden dejar algunas fuera de la cola de hoy. La [guía sobre enterrar y suspender tarjetas](/blog/anki-bury-vs-suspend/) (en inglés) explica por qué esas tarjetas pueden quedar fuera.

Si las posiciones ya reflejan el orden que quieres, déjalas como están. Si de verdad necesitas cambiarlas, anota las posiciones anteriores, selecciona solo el grupo pequeño de tarjetas nuevas que quieres mover y usa **Tarjetas → Reposicionar** (*Cards → Reposition*). Revisa el cuadro de diálogo antes de aplicar el cambio. **Desplazar las posiciones de las tarjetas existentes** (*Shift position of existing cards*) también puede mover tarjetas con posiciones más altas que estén fuera de la selección. Si dejas esa opción desactivada, las posiciones nuevas pueden coincidir con otras ya asignadas. En caso de empate, la posición por sí sola no permite saber qué tarjeta aparecerá primero. Consulta la [acción Reposicionar en el manual de Anki](https://docs.ankiweb.net/manual/browsing#cards) (en inglés).

Puedes cambiar los ajustes de selección y presentación conservando el historial de aprendizaje y repaso. Para diagnosticar el problema, céntrate en las posiciones de las tarjetas nuevas y en el orden de visualización.

## Comprueba qué mazo eliges y cuánto margen queda hoy

En el ejemplo original, si eliges directamente `OrderLab::02 Second`, las únicas candidatas son D, E y F. Con su límite de dos tarjetas, **Posición ascendente** y **Orden de selección**, el orden esperado es **D → E**. Aunque se apliquen los límites de los mazos superiores, el mazo padre aún tiene sus cuatro lugares disponibles, de sobra para esas dos tarjetas. Si eliges el mazo padre con **Mazo** y los límites **4 / 3 / 2**, el orden es **A → B → C → D**.

Si inicias la sesión desde `OrderLab`, se aplican sus ajustes de visualización aunque hayas cambiado los de `02 Second`. El mazo que eliges determina el orden de visualización y fija el límite total. También cuentan los límites aplicables de los submazos. **Aplicar los límites desde el mazo superior** (*Limits start from top*) determina si se tienen en cuenta los límites de los mazos superiores cuando estudias un submazo directamente. El manual de Anki explica en inglés las [reglas de los submazos](https://docs.ankiweb.net/manual/deck-options#subdecks) y el [ajuste de los límites de los mazos superiores](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top).

Comprueba también los límites de repaso. De forma predeterminada, el límite de repasos restringe cuántas tarjetas nuevas pueden entrar. **Las tarjetas nuevas ignoran el límite de repasos** (*New cards ignore review limit*) cambia ese comportamiento. Este ajuste y **Aplicar los límites desde el mazo superior** afectan a toda la colección, como muestra la [interfaz de límites diarios de la versión publicada](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte). Anota cómo están configurados antes de calcular cuántas tarjetas nuevas puedes ver hoy.

Usa **Vista previa** (*Preview*) en el explorador para ver las preguntas sin responderlas. En tu próxima sesión normal de estudio, anota estos datos.

| Qué anotar | Qué aclara |
| --- | --- |
| Mazo que eliges para estudiar, su preajuste y sus ajustes de selección y presentación | ¿Qué orden de visualización rige la sesión? |
| Tarjetas que esperas ver y sus posiciones guardadas | ¿El problema está en qué tarjetas entran o en el orden en que aparecen? |
| Límites de tarjetas nuevas y de repasos, ajustes específicos para el mazo o para hoy y lo que ya has estudiado hoy | ¿Cuánto margen queda? |
| Límites de los mazos superiores y los dos ajustes de límites que afectan a toda la colección | ¿Qué límites adicionales se aplican? |
| Tarjetas enterradas, suspendidas, en mazos filtrados o hermanas | ¿Qué tarjetas candidatas podrían quedar fuera? |
| Orden en que aparecen por primera vez las tarjetas nuevas, por separado de las repeticiones de aprendizaje | ¿Coincide la secuencia de tarjetas nuevas con la prevista? |

Después de responder una tarjeta nueva, las repeticiones de aprendizaje pueden interrumpir la secuencia. El **Orden de tarjetas nuevas y repasos** (*New/Review Order*) sitúa las tarjetas nuevas antes, después o entre los repasos. Los ajustes de selección y presentación siguen determinando qué tarjetas nuevas entran y en qué orden aparecen. El [código que construye la cola en la versión publicada](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs) combina esas categorías después de ordenar las tarjetas nuevas.

La comprobación termina cuando la selección prevista y el orden de primera aparición explican lo que ves. Si todavía hay diferencias, guarda las posiciones, los ajustes, el mazo elegido, la versión de Anki y el orden que observaste. Anota también los complementos pertinentes para acotar el diagnóstico. Si quieres practicar un tema una vez más, sigue la [guía para practicar con un mazo filtrado](/blog/anki-filtered-decks-without-rescheduling/) (en inglés).
