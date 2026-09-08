---
title: "Mejores ajustes de FSRS para Anki en 2026: retención, pasos y carga de repaso"
description: "Configura con seguridad la retención deseada, los pasos de aprendizaje, la optimización, la reprogramación y la carga de trabajo de FSRS-6 en Anki 26.08."
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "ajustes de FSRS"
  - "mejores ajustes de FSRS"
  - "ajustes de FSRS en Anki"
  - "retención deseada FSRS"
  - "pasos de aprendizaje FSRS"
  - "simulador de FSRS"
  - "optimizar parámetros de FSRS"
  - "FSRS-6"
---

Subir la retención deseada de Anki del 90 % al 95 % parece un cambio pequeño. Pero no implica trabajar solo un cinco por ciento más. Cuanto mayor es el objetivo, más debe acortar FSRS los intervalos; en una colección madura, eso puede traducirse en una cola de repasos mucho más pesada. Y si además activas **Reschedule cards on change** (reprogramar las tarjetas al cambiar los ajustes), parte de esa carga puede aparecer de inmediato.

Por eso, los mejores ajustes de FSRS no son una cadena de parámetros que puedas copiar. Son una serie de decisiones: partir de una carga de trabajo sostenible, elegir un objetivo de recuerdo que encaje en ese presupuesto, adaptar el modelo a tu propio historial y dejar intactas las fechas de repaso existentes, salvo que quieras reconstruirlas a propósito.

Las etiquetas y el comportamiento que se explican a continuación corresponden a la [versión 26.08 de Anki](https://github.com/ankitects/anki/releases/tag/26.08) y a sus controles de FSRS-6. Si antes de configurar nada necesitas entender el modelo, lee [¿Qué es FSRS?](/blog/what-is-fsrs/). Si aún estás decidiendo qué planificador usar, empieza por [FSRS frente a SM-2](/blog/fsrs-vs-sm-2/).

> **Aviso:** Soy Kirill Markin y desarrollo [Flashcards Open Source App](/features/). Anki ofrece un ajuste personalizado de parámetros y simuladores experimentales de carga de trabajo que Flashcards todavía no incluye. La comparación hacia el final del artículo deja claras estas diferencias.

**Datos verificados:** 8 de septiembre de 2026.

![Un operador de esclusa prueba el flujo del agua en una maqueta antes de cambiar la esclusa real](/blog/fsrs-settings-v2.png)

## La respuesta corta: empieza por aquí

Para la mayoría de quienes usan Anki, estas son opciones iniciales seguras, no ajustes universales:

| Ajuste o hábito | Opción inicial segura | Por qué |
| --- | --- | --- |
| **Desired retention** (retención deseada) | `0.90` | Es el valor predeterminado de Anki y equilibra el recuerdo con la carga de repaso. |
| **FSRS parameters** (parámetros de FSRS) | Usa **Optimize Current Preset** (optimizar el preajuste actual); no pegues ni edites los pesos a mano | El optimizador adapta el modelo a tu historial de repasos. |
| Frecuencia de optimización | Como máximo una vez al mes; normalmente basta con hacerlo cada pocos meses | Anki no recomienda optimizar con frecuencia. |
| **Learning steps** (pasos de aprendizaje) | Usa pocos pasos y complétalos el mismo día | Las cadenas largas retrasan la programación basada en el modelo. |
| **Relearning steps** (pasos de reaprendizaje) | Redúcelos al mínimo y mantenlos por debajo de un día | El mismo límite se aplica después de fallar una tarjeta de repaso. |
| **Reschedule cards on change** (reprogramar las tarjetas al cambiar los ajustes) | Desactivado | Los nuevos ajustes pueden aplicarse en repasos futuros sin reconstruir la cola de hoy. |
| **Maximum interval** (intervalo máximo) | Mantén el valor predeterminado de 100 años | Un límite más corto obliga a repasar con mayor frecuencia las tarjetas maduras. |
| **New cards/day** (tarjetas nuevas al día) | Fija la cantidad a partir de una carga de trabajo que puedas mantener | Cada tarjeta nueva exige aprendizaje ahora y repasos más adelante. |
| **Again** frente a **Hard** | **Again** significa que no recordaste; **Hard**, que recordaste con dificultad | Una valoración incorrecta proporciona al modelo un historial incorrecto. |

Si la carga de repasos es manejable y tu configuración ya se parece a esta, quizá no haya nada que corregir. Mantener los ajustes no es estudiar.

## Separa estas tres decisiones

Es fácil mezclar la retención deseada, los parámetros de FSRS y la carga diaria como si fueran una sola cosa. En realidad, controlan aspectos distintos:

- La **retención deseada** es tu objetivo de recuerdo. La eliges según tus metas y el tiempo que puedas dedicar al estudio.
- Los **parámetros de FSRS** adaptan el modelo de memoria al historial de repasos. El optimizador de Anki se encarga de calcularlos.
- Los **límites de tarjetas nuevas y repasos** controlan cuánto material entra en el sistema y cuánto trabajo pendiente puede mostrar Anki cada día.

Separarlos simplifica mucho el diagnóstico. Una cola grande no significa por sí sola que los parámetros estén mal. Un mazo importante no necesita necesariamente un preajuste de parámetros propio. Y bajar la retención deseada no arreglará un ritmo de entrada que nunca fue sostenible.

## Elige la retención deseada según la carga, no según la ambición

La retención deseada indica a FSRS qué probabilidad quieres tener de recordar una tarjeta cuando llegue el momento de repasarla. Con `0.90`, FSRS programa los repasos en torno a una probabilidad estimada de recuerdo del 90 %. Es el objetivo del modelo, no una garantía de que acertarás exactamente el 90 % en cada sesión o examen.

La relación funciona en ambos sentidos:

- Si subes la retención deseada, los intervalos se acortan y aumentan los repasos.
- Si la bajas, los intervalos se alargan y aumentan los fallos.
- Si la bajas demasiado, el reaprendizaje adicional tras los fallos puede consumir parte del tiempo que esperabas ahorrar.

Anki usa el 90 % de forma predeterminada. Sus [recomendaciones sobre la retención deseada](https://docs.ankiweb.net/deck-options.html#desired-retention) advierten que la carga de trabajo crece con rapidez cuando el objetivo se acerca al 100 % y aconsejan mantenerse por debajo del 97 %. La explicación oficial sobre la [retención óptima](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) cubre el otro extremo de la curva: una retención muy baja también puede ser ineficiente, porque las tarjetas olvidadas requieren más trabajo.

Empieza con `0.90` y no lo cambies hasta haber comprobado la carga de trabajo. Un objetivo mayor puede tener sentido cuando olvidar el material tiene un coste real. Uno menor puede ser razonable si los repasos están desplazando otras formas de estudio más valiosas. Ninguno de los dos cambios arreglará tarjetas vagas, valoraciones poco sinceras o un exceso de tarjetas nuevas.

### La retención del mazo y los parámetros del preajuste tienen ámbitos distintos

En Anki 26.08, **Desired retention** (retención deseada) ofrece dos ámbitos: **Shared Preset** (preajuste compartido) y **This deck** (este mazo). Así puedes mantener varios mazos relacionados en un mismo preajuste de parámetros y asignar a uno de ellos su propio objetivo de retención.

Usa esa excepción cuando el coste de olvidar no sea el mismo. Por ejemplo, un mazo para un examen de habilitación profesional puede justificar un objetivo mayor que un mazo de consulta de baja prioridad, aunque ambos usen el mismo modelo adaptado.

Elegir **This deck** no hace que los parámetros de FSRS pasen a ser específicos de ese mazo. De forma predeterminada, Anki los adapta con el historial de repaso de todos los mazos asignados al preajuste actual. Si varios grupos de mazos difieren mucho en dificultad subjetiva, la opción admitida para adaptar cada grupo por separado es usar preajustes distintos.

## Usa Help Me Decide y el Simulator para preguntas distintas

Anki 26.08 incluye dos controles experimentales independientes:

- **Help Me Decide (Experimental)** (ayúdame a decidir) muestra una curva personalizada de retención y carga de trabajo. Úsalo para responder: «¿Qué objetivo de retención encaja con la cantidad de repasos o minutos que puedo mantener?».
- **FSRS Simulator (Experimental)** (simulador de FSRS) estima cómo puede comportarse una configuración con el paso del tiempo. Úsalo para comparar cambios en la retención, la entrada de tarjetas nuevas, los límites de repaso y el intervalo máximo.

La [documentación de FSRS Simulator](https://docs.ankiweb.net/deck-options.html#the-simulator) enumera sus datos principales:

- **Days to simulate** (días que se van a simular)
- **Additional new cards to simulate** (tarjetas nuevas adicionales que se van a simular)
- **New cards per day** (tarjetas nuevas al día)
- **Maximum reviews per day** (número máximo de repasos al día)
- **Maximum interval** (intervalo máximo)
- **Desired retention** (retención deseada) y los parámetros de FSRS del preajuste

La simulación también utiliza los estados reales de memoria de las tarjetas del preajuste. Para una colección madura, esto resulta más útil que multiplicar la cantidad de tarjetas pendientes de hoy por un porcentaje genérico.

Antes de tocar la configuración real, ejecuta tres escenarios:

1. La retención y la entrada de tarjetas nuevas que tienes ahora.
2. El objetivo de retención que estás considerando.
3. Ese mismo objetivo, pero con menos tarjetas nuevas al día.

La tercera simulación prueba una alternativa habitual: conservar el objetivo de recuerdo y reducir el ritmo al que entra material nuevo. Si la previsión pasa a ser manejable, no necesitas aceptar más olvidos solo para aliviar la cola. La guía detallada sobre este ritmo de entrada es [¿Cuántas tarjetas nuevas al día?](/blog/how-many-new-flashcards-per-day/).

Las dos herramientas ofrecen estimaciones. Los días sin estudiar, las tarjetas editadas, el material nuevo y los cambios en tus hábitos de valoración pueden hacer que la carga real se aleje del gráfico. Usa la comparación para decidir en qué dirección avanzar, no para prometerte una cantidad exacta de tarjetas en la cola dentro de varios meses.

Algunas guías antiguas mencionan **Compute Minimum Recommended Retention**, o CMRR (calcular la retención mínima recomendada). Anki eliminó esa función en la versión 25.07. Ya no forma parte del flujo actual para elegir la retención deseada.

## Optimiza los parámetros de FSRS con tu propio historial

La retención deseada expresa tu objetivo. Los parámetros de FSRS describen cómo se adapta el modelo a tus repasos.

En Anki 26.08, usa **Optimize Current Preset** (optimizar el preajuste actual) para adaptar los parámetros del preajuste activo. De forma predeterminada, Anki incluye el historial de repaso de todos los mazos que utilizan ese preajuste; puedes ajustar la búsqueda si necesitas un conjunto de datos más reducido. **Optimize All Presets** (optimizar todos los preajustes) actualiza todos los preajustes en una sola operación.

No escribas los pesos a mano ni los copies de Reddit, de un vídeo o del mazo de otra persona. Sus tarjetas, sus horarios de repaso y sus hábitos de valoración no son los tuyos. Una fila impecable de [pesos de FSRS-6](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) no es una estrategia de estudio transferible.

Vuelve a optimizar solo cuando hayas acumulado una cantidad significativa de historial de repaso nuevo. El manual de Anki indica que una vez al mes es suficiente; la guía integrada de la versión 26.08 dice que basta con hacerlo cada pocos meses. La conclusión práctica es la misma: no hay motivo para optimizar cada semana, y mucho menos después de cada sesión.

### Usa la comprobación de estado con el preajuste actual

Activa **Check health when optimizing (slow)** (comprobar el estado al optimizar; lento) cuando quieras que Anki evalúe hasta qué punto FSRS puede adaptarse al historial del preajuste actual. Esta comprobación funciona con **Optimize Current Preset**, no con **Optimize All Presets**.

Si el resultado es malo, revisa los datos antes de tocar los pesos. Las [recomendaciones de Anki sobre los parámetros de FSRS](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) señalan varias causas habituales: tener menos de unos cientos de repasos, pulsar **Hard** después de un fallo y no pulsar **Again** cuando no recuerdas la respuesta. Si aún tienes poco historial útil, conserva los valores predeterminados y optimiza más adelante en lugar de tomar prestados los parámetros de otra persona.

## Again significa que no recordaste; Hard es un acierto

Este hábito importa tanto como cualquier ajuste.

Usa **Again** cuando no hayas podido dar la respuesta esperada o te hayas equivocado. Usa **Hard** solo si la has recordado correctamente, pero con mucho esfuerzo o vacilación. **Good** y **Easy** también cuentan como aciertos.

Pulsar **Hard** para evitar el intervalo corto de **Again** registra un acierto después de un fallo. FSRS aprende entonces del evento equivocado. Elige el botón que describa lo que ocurrió al intentar recordar, no el intervalo que quieras conseguir según las etiquetas situadas sobre los botones.

Las tarjetas ambiguas dificultan una valoración sincera. Si una pregunta pide cinco datos y recuerdas cuatro, el problema de programación empezó en el editor. Divide o reescribe la tarjeta. Para las tarjetas que sigan fallando pese a repasarlas una y otra vez, consulta [Cómo arreglar las tarjetas sanguijuela](/blog/how-to-fix-leech-flashcards/).

## Mantén cortos los pasos de aprendizaje de FSRS, o déjalos vacíos a propósito

Los pasos de aprendizaje y reaprendizaje controlan los repasos a corto plazo antes de que tome el relevo la programación habitual a largo plazo. No son otro objetivo de retención.

Las recomendaciones de Anki sobre FSRS marcan dos límites:

- cada paso debe durar menos de un día y poder completarse ese mismo día
- el número de repeticiones en un mismo día debe ser reducido

Las cadenas largas como `1m 10m 1d 3d` trasladan a FSRS una vieja costumbre de SM-2. Los pasos de un día o más retrasan la programación basada en el modelo y pueden producir etiquetas confusas en los botones, como que **Hard** muestre un intervalo mayor que **Good**.

Una secuencia compacta como `1m 10m`, con un paso de reaprendizaje de `10m`, es un punto de partida conservador cuando encaja con tus sesiones. Añadir más repeticiones el mismo día no produce automáticamente mejores resultados.

Anki 26.08 también permite dejar vacío cualquiera de los campos de pasos de aprendizaje o reaprendizaje. Con FSRS activado, un campo vacío delega esa programación a corto plazo en FSRS. Es una función experimental, y el intervalo de **Again** puede ser de un día o más. Conserva pasos manuales cortos si necesitas volver a ver la tarjeta ese mismo día de forma predecible; deja un campo vacío solo si aceptas expresamente que FSRS decida cuándo mostrarla.

## Mantén desactivado Reschedule cards on change para que la transición sea gradual

Con **Reschedule cards on change** (reprogramar las tarjetas al cambiar los ajustes) desactivado —la opción predeterminada—, activar FSRS o cambiar la retención deseada o los parámetros no reescribe de inmediato las fechas de repaso existentes. La nueva configuración se aplica a medida que repasas las tarjetas en el futuro, de modo que la cola cambia poco a poco.

Si guardas uno de esos cambios de FSRS con la opción activada, las fechas de repaso se recalculan de inmediato. Según el nuevo objetivo y el estado de las tarjetas, muchas pueden quedar pendientes a la vez. Anki también añade entradas de repaso para las tarjetas reprogramadas, lo que aumenta el tamaño de la colección.

Esta opción solo resulta útil cuando de verdad quieres reconstruir la programación de forma retroactiva. En una colección madura:

1. Crea una copia de seguridad reciente y asegúrate de saber cómo deshacer el cambio o restaurarla.
2. Ejecuta el **Simulator** con los ajustes propuestos.
3. Elige un único cambio de configuración; no combines varios experimentos.
4. Al guardar, activa la reprogramación solo si quieres reescribir las fechas de repaso de inmediato y puedes asumir el resultado.

Anki recomienda expresamente hacer una copia de seguridad al pasar desde SM-2 con la reprogramación activada. La guía más amplia sobre [copias de seguridad de tarjetas](/blog/how-to-back-up-flashcards/) explica por qué el proceso de recuperación importa tanto como el propio archivo de copia de seguridad.

## Mantén un intervalo máximo amplio

El intervalo máximo predeterminado de Anki es de 100 años. Puede sonar extraño, hasta que recuerdas que es un límite, no una promesa de que todas las tarjetas maduras vayan a desaparecer durante un siglo.

Acortar ese límite hace que las tarjetas que ya conoces bien vuelvan antes y aumenta la carga de trabajo. Al alcanzar el máximo, **Hard**, **Good** y **Easy** pueden mostrar el mismo intervalo porque ninguno de ellos puede superarlo.

Un intervalo máximo más corto puede ser razonable si un examen marca un horizonte real, el material cambia a menudo o una norma profesional exige exponerte a él periódicamente, al margen de la memoria estimada. Coordina ese límite con el calendario y el **Simulator**, en vez de elegir un número pequeño por ansiedad. [Cómo estudiar para un examen con FSRS](/blog/how-to-study-for-an-exam-with-fsrs/) aborda ese caso más concreto.

Para el aprendizaje habitual a largo plazo, deja un límite amplio. La retención deseada ya controla cuándo debe programarse un repaso según la probabilidad de recordar.

## La entrada de tarjetas nuevas también forma parte de la carga de trabajo

FSRS puede distribuir los repasos, pero no puede hacer sostenible una entrada ilimitada. Cada tarjeta nueva exige aprendizaje ahora y repasos más adelante.

Si la cola pesa demasiado, revisa estos puntos antes de bajar la retención deseada:

- la cantidad de tarjetas nuevas al día
- las importaciones grandes o los lotes de tarjetas generadas
- un límite máximo de repasos que siga ocultando trabajo pendiente
- las tarjetas sanguijuela y las tarjetas ambiguas que consumen intentos una y otra vez
- los días de repaso que te hayas saltado

Usa **Additional new cards to simulate** (tarjetas nuevas adicionales que se van a simular) cuando sepas que un mazo va a crecer. Una previsión basada únicamente en la colección actual no reflejará la carga de trabajo posterior a una importación grande.

Si el resultado es demasiado alto, reduce la entrada y vuelve a simular. Así conservas el objetivo de recuerdo sin pedir al planificador que tolere más olvidos.

## Anki y Flashcards ofrecen controles de FSRS distintos

Ambos productos utilizan FSRS-6, pero los ajustes de FSRS de Anki no se corresponden uno a uno con los de Flashcards Open Source App.

| Función | Anki 26.08 | Flashcards Open Source App |
| --- | --- | --- |
| Retención deseada | **Shared Preset** o **This deck** | Configurable por espacio de trabajo; valor predeterminado `0.90` |
| Parámetros de FSRS | **Optimize Current Preset** u **Optimize All Presets** a partir del historial de repaso | Los pesos predeterminados oficiales de FSRS-6 están fijados y no se pueden configurar en la versión 1 |
| Pasos de aprendizaje | Configurables; la programación mediante FSRS con el campo vacío es experimental | Configurables por espacio de trabajo; valores predeterminados `1m 10m` |
| Pasos de reaprendizaje | Configurables; la programación mediante FSRS con el campo vacío es experimental | Configurables por espacio de trabajo; valor predeterminado `10m` |
| Intervalo máximo | Valor predeterminado de 100 años | Valor predeterminado de 36 500 días, también 100 años |
| Cambios en los ajustes | Se aplican a repasos futuros de forma predeterminada; reprogramación retroactiva opcional | Solo se aplican a repasos futuros; las fechas de repaso existentes no se reconstruyen |
| Herramientas de carga de trabajo | **Help Me Decide (Experimental)** y **FSRS Simulator (Experimental)** | No hay un simulador de carga de trabajo equivalente en la versión 1 |

Flashcards utiliza las valoraciones estándar **Again**, **Hard**, **Good** y **Easy**, y mantiene el estado de memoria de FSRS de cada tarjeta. Sus planificadores del backend, iOS y Android son implementaciones independientes que mantienen el mismo comportamiento; el flujo de repaso web reutiliza el planificador del backend en lugar de añadir una cuarta implementación.

Estos límites y valores predeterminados están documentados en la [especificación pública de programación FSRS de Flashcards](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md). La diferencia práctica es clara: Flashcards ofrece una configuración funcional de FSRS-6 por espacio de trabajo, mientras que Anki proporciona ámbitos más precisos, ajuste personalizado y simulación. Si esos controles son imprescindibles para ti, Anki es la opción más adecuada.

## Un flujo de trabajo más seguro para una colección madura

Si ya tienes meses o años de historial de repaso, sigue este orden:

1. **Corrige el significado de las valoraciones.** **Again** es un fallo; **Hard**, un acierto con dificultad.
2. **Optimiza el preajuste actual.** Adapta el modelo a tu propio historial en lugar de editar o copiar pesos.
3. **Ejecuta la comprobación de estado si hace falta.** Trata un historial escaso o incoherente como un problema de datos.
4. **Usa Help Me Decide.** Elige un rango de retención según la cantidad de repasos o minutos que puedas mantener.
5. **Ejecuta el Simulator.** Compara la configuración actual, el objetivo propuesto y una entrada menor de tarjetas nuevas.
6. **Cambia una sola variable de la configuración real.** Ajusta primero la retención o la entrada y observa después la cola real.
7. **Mantén cortos los pasos.** Elimina las cadenas de aprendizaje y reaprendizaje de un día o más; usa campos vacíos solo a modo de experimento.
8. **Mantén amplio el intervalo máximo.** Acórtalo únicamente si tienes un horizonte o requisito definidos.
9. **Mantén desactivada la reprogramación.** Si necesitas una reconstrucción inmediata, haz antes una copia de seguridad y prepárate para la cola resultante.

Este orden mantiene reversible la programación de una colección madura durante el mayor tiempo posible. También evita convertir tres problemas distintos —el ajuste del modelo, el objetivo de recuerdo y el flujo de material nuevo— en un único rompecabezas de configuración.

## Preguntas frecuentes sobre los mejores ajustes de FSRS

### ¿Es el 90 % la mejor retención deseada para FSRS?

Es el punto de partida general más seguro porque se trata del valor predeterminado de Anki y evita la parte más pronunciada de la curva de carga de trabajo con una retención alta. El mejor valor para cada mazo depende del coste de olvidar y de la carga que puedas mantener. Consulta **Help Me Decide (Experimental)** antes de cambiarlo.

### ¿Debería fijar la retención deseada en el 95 %?

Solo después de comprobar cuántos repasos o minutos adicionales implica. Un mazo bien elaborado para un examen importante puede justificar el 95 %; una colección grande para estudiar por interés puede volverse innecesariamente pesada. No actives a la vez la reprogramación retroactiva, salvo que quieras reconstruir de inmediato las fechas de repaso.

### ¿Con qué frecuencia debería optimizar los parámetros de FSRS?

Una vez al mes ya es suficiente, y la guía integrada de Anki 26.08 indica que basta con hacerlo cada pocos meses. Optimiza cuando hayas acumulado una cantidad significativa de historial nuevo, no a diario ni cada semana.

### ¿Deberían estar vacíos los pasos de aprendizaje de FSRS?

Dejar vacíos los pasos de aprendizaje o reaprendizaje permite que Anki 26.08 delegue en FSRS la programación a corto plazo correspondiente. La función es experimental, y **Again** puede programarse para dentro de un día o más. Mantener pocos pasos que se completen el mismo día sigue siendo la opción conservadora.

### ¿Cambiar los ajustes de FSRS reprograma las tarjetas existentes de Anki?

No de forma predeterminada. Con **Reschedule cards on change** desactivado, los nuevos ajustes se aplican a los repasos futuros sin reconstruir la cola de inmediato. Al activarlo, cambian las fechas de repaso y muchas tarjetas pueden quedar pendientes, así que haz primero una copia de seguridad.

### ¿CMRR sigue formando parte de Anki?

No. Anki eliminó **Compute Minimum Recommended Retention** en la versión 25.07. En Anki 26.08, usa **Help Me Decide (Experimental)** y **FSRS Simulator (Experimental)** para comparar la retención con la carga de trabajo estimada.

### ¿Flashcards usa los mismos ajustes que Anki?

Utiliza FSRS-6 y ofrece retención deseada, pasos de aprendizaje, pasos de reaprendizaje, intervalo máximo y fuzz (variación aleatoria) por espacio de trabajo. No reproduce todo el modelo de ajustes de Anki: los pesos están fijados en la versión 1, los cambios solo se aplican en adelante y no hay optimización personalizada de parámetros ni simulador de carga de trabajo.

## Fija la carga de trabajo antes que el porcentaje

Una buena configuración de FSRS pone la cola de repasos al servicio de un plan de estudio real. Empieza con un 90 %, calcula el trabajo, controla la entrada de tarjetas nuevas y sube la retención solo cuando recordar más compense los repasos adicionales. Mantén cortos los pasos, amplio el intervalo máximo y sinceros los datos de valoración.

Después, sal de la pantalla de ajustes. El planificador necesita repasos constantes más que otra tarde entera de retoques.
