---
title: "¿Por qué hay tantos repasos de Anki en 2026? Reduce los picos de repaso sin abandonar la repetición espaciada"
description: "¿Te están saliendo muchos más repasos de Anki de los que esperabas? Aquí tienes una guía práctica de 2026 para entender por qué se disparan los repasos con FSRS, los límites de tarjetas nuevas, los learning steps y la retención deseada, y cómo volver a controlar la cola sin reiniciar el mazo."
date: "2026-07-04"
image: "/blog/why-are-there-so-many-anki-reviews.png"
keywords:
  - "por qué hay tantos repasos en anki"
  - "demasiados repasos anki"
  - "anki muestra más repasos de lo esperado"
  - "fsrs demasiados repasos"
  - "picos de repaso anki"
  - "desired retention anki"
  - "tarjetas nuevas y repasos en anki"
  - "cómo bajar los repasos de anki"
---

El martes pasado, un mazo que normalmente me da unos 140 repasos apareció con 487. El mismo mazo. La misma materia. El mismo móvil. Lo único que había cambiado era la cara que puse.

Ese suele ser el momento en que la gente empieza a buscar **por qué hay tantos repasos en Anki**, **demasiados repasos Anki** o **Anki muestra más repasos de lo esperado**.

La parte molesta es que el pico a menudo parece aleatorio. No importaste 5.000 tarjetas esa mañana. Simplemente cambiaste algunos ajustes, empezaste a usar FSRS, tuviste una semana productiva añadiendo tarjetas o te saltaste un par de días. Luego llegó la factura.

Normalmente hay una razón real para el pico. Normalmente puedes arreglarlo sin reiniciar el mazo.

![Escena de escritorio cálida con una mano ordenando tarjetas tras un pico de repasos en Anki](/blog/why-are-there-so-many-anki-reviews.png)

## Por qué esto empeoró en 2026

Cambiaron dos cosas.

Ahora más gente usa FSRS, y eso es bueno. Para muchos estudiantes es un planificador mejor que el antiguo sistema por defecto, y te da una palanca real de carga de trabajo a través de desired retention.

Al mismo tiempo, crear tarjetas se volvió mucho más barato. La IA puede convertir apuntes, diapositivas, transcripciones, PDFs y material de estudio suelto en un lote grande de tarjetas plausibles antes de que te haya dado tiempo a preguntarte si de verdad quieres repasarlas todas la semana que viene.

Esa combinación produce la misma historia una y otra vez:

- sube el ritmo de entrada de tarjetas
- los primeros repasos siguen pareciendo manejables
- la cola engorda unos días después
- FSRS recibe la culpa por un problema que muchas veces empezó en la entrada

A veces FSRS sí hizo la cola más pesada. Muchas veces solo dejó al descubierto una carga de trabajo que ya venía en camino.

## Empieza con una pregunta: ¿qué cambió en la última semana?

Antes de tocar ajustes, mira hacia atrás.

La mayoría de los picos de repaso vienen de un cambio reciente:

- subiste las tarjetas nuevas
- importaste o generaste un lote
- cambiaste los learning steps o relearning steps
- subiste desired retention
- te saltaste unos días
- mantuviste demasiadas tarjetas flojas que deberías haber limpiado antes

Suena obvio, pero evita la reacción clásica: cambiar seis cosas en una sola sesión y no aprender nada de ello.

## La cola te dice qué problema tienes

No diagnostiques solo por el número grande del encabezado. Mira qué tipo de tarjetas se disparó.

| Si el pico es sobre todo... | La causa habitual | Primer sitio donde mirar |
| --- | --- | --- |
| Tarjetas nuevas y en aprendizaje | Ritmo de entrada o bucle de pasos | Límite de tarjetas nuevas y learning steps |
| Tarjetas jóvenes de repaso | Añadiste demasiado hace poco | Entrada de los últimos días |
| Tarjetas maduras que vuelven antes de lo esperado | Objetivo de retención o expectativas sobre FSRS | Desired retention y calidad del mazo |
| Tarjetas atrasadas tras saltarte días | Acumulación | Plan de recuperación, no ajustes del planificador |

Esa distinción importa.

Si la cola está sobre todo atrasada porque dejaste de repasar durante un tiempo, lee [Cómo ponerse al día con las flashcards después de quedarse atrás en 2026](/es/blog/how-to-catch-up-on-flashcards-after-falling-behind/). Ese es un problema de acumulación. Este artículo es para la versión en la que seguiste usando el mazo y aun así el número de repasos se volvió raro.

## La causa más común sigue siendo simple: demasiadas tarjetas nuevas

Ésta es la respuesta aburrida que hay detrás de muchas búsquedas de **tarjetas nuevas y repasos en Anki**.

Las tarjetas nuevas no son trabajo de una sola vez. Crean:

- el primer paso de aprendizaje
- repeticiones a corto plazo
- repasos jóvenes durante los días siguientes
- una cola estable más grande más adelante si mantienes la misma tasa de entrada

El manual de Anki lo dice bastante claro: si sigues aprendiendo 20 tarjetas nuevas al día, puedes esperar alrededor de 200 repasos diarios cuando la carga se estabilice, y la forma directa de bajar esa carga es reducir las tarjetas nuevas. Esa explicación está en la [sección new cards/day del manual](https://docs.ankiweb.net/deck-options.html#new-cardsday).

Por eso un mazo puede parecer tranquilo el lunes y desagradable el viernes. El coste cae más tarde.

Esto también aparece en reportes reales de usuarios. En [este hilo del foro de Anki sobre más repasos de lo esperado con los ajustes de tarjetas nuevas](https://forums.ankiweb.net/t/many-more-reviews-than-expected-with-new-card-settings/62292), el problema no era un bug misterioso. Las consecuencias de repaso de la tasa de entrada eran simplemente mayores de lo que la persona esperaba.

Si hace poco subiste las tarjetas nuevas, empieza por ahí. Si quieres una regla más limpia para una entrada sostenible, [¿Cuántas flashcards nuevas por día en 2026?](/es/blog/how-many-new-flashcards-per-day/) entra más a fondo.

## FSRS recibe la culpa por el bucle de learning steps todo el tiempo

A veces el pico no tiene tanto que ver con la programación a largo plazo. Tiene que ver con tarjetas que se quedan dando vueltas en aprendizaje o reaprendizaje y se comen el día antes siquiera de convertirse en repasos normales.

El manual de Anki recomienda mantener los learning steps y relearning steps de FSRS por debajo de un día, y además dice explícitamente que los pasos largos de `(re)learning` no se recomiendan con FSRS porque interfieren con el planificador y crean tiempos incómodos. Esa guía está en la [sección de FSRS del manual de opciones de mazo](https://docs.ankiweb.net/deck-options.html#fsrs).

Así que, si tus pasos parecen dramáticos, o si sigues fallando tarjetas borrosas que probablemente habría que reescribir, el mazo puede sentirse como si te estuviera haciendo spam aunque el problema real sea ese churn de bucle corto.

Ésa es una de las razones por las que la gente dice **FSRS demasiados repasos** cuando el problema en realidad empezó antes de FSRS.

## Desired retention es una palanca de carga de trabajo

Esta es la parte que mucha gente subestima después de cambiarse a FSRS.

Un desired retention más alto hace que el planificador intente traer las tarjetas antes para que sea más probable que las recuerdes cuando aparezcan. Eso puede ser útil. También significa más repasos.

La [sección sobre desired retention del manual de Anki](https://docs.ankiweb.net/deck-options.html#desired-retention) dice que una retención más alta acorta los intervalos y aumenta los repasos. La wiki de FSRS sobre [optimal retention](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) explica exactamente lo mismo desde el lado de la carga de trabajo.

Escribir `0.95` en vez de `0.90` parece un cambio pequeño.

Vivir con la diferencia muchas veces no lo parece.

Así que, si tu pregunta real es **desired retention Anki**, y la cola se hizo más pesada justo después de cambiar ese ajuste, la app no se está comportando de forma aleatoria. Está haciendo el trabajo que le pediste.

Si quieres una guía completa de la capa de ajustes, lee [Configuración de FSRS en 2026](/es/blog/fsrs-settings/). Ese artículo va de ajustar. Este va de diagnosticar el pico antes de empezar a ajustar.

## "FSRS me está enseñando las tarjetas demasiado a menudo" puede significar varias cosas

Hay un hilo reciente del foro de Anki llamado [FSRS 6 - Seeing cards too Often](https://forums.ankiweb.net/t/fsrs-6-seeing-cards-too-often/60745), y la queja suena familiar: una persona siente que las tarjetas marcadas como `Good` vuelven mucho antes de lo esperado.

A veces eso significa:

- desired retention está más alto de lo que el horario real de esa persona puede sostener cómodamente
- los learning steps siguen haciendo demasiado trabajo
- el mazo contiene demasiadas tarjetas flojas o duplicadas
- las expectativas siguen marcadas por el comportamiento del planificador antiguo y no por lo que el material realmente necesita

FSRS no es magia. Es solo un planificador. Si le das un mazo hinchado y un objetivo de retención alto, te lo va a programar con toda disciplina.

## Anki no te va a salvar automáticamente de una tasa de entrada agresiva

Muchos estudiantes quieren algo así:

"Si hoy ya tengo 250 repasos pendientes, deja de mostrarme tarjetas nuevas automáticamente".

Es una idea razonable. No es el comportamiento estándar de Anki tal como viene.

Hay todo un debate en el foro pidiendo un [límite diario dinámico de tarjetas nuevas basado en el total de repasos diarios](https://forums.ankiweb.net/t/dynamic-daily-new-card-limit-based-on-total-daily-reviews-count/65120). La gente sigue pidiendo eso porque el flujo por defecto no vincula de forma estricta la entrada con la capacidad diaria.

Así que, si la cola sigue teniendo picos, una solución práctica sigue siendo la menos glamourosa:

- baja el límite de tarjetas nuevas
- mantenlo estable durante una o dos semanas
- súbelo solo después de que la cola demuestre que puede absorberlo

Ese debate del foro sobre [cuántas tarjetas nuevas añadir cada semana](https://forums.ankiweb.net/t/how-to-judge-how-many-new-cards-i-should-be-adding-each-week/66159) llega al mismo sitio: el número correcto depende de tu tiempo de repaso, de la dificultad del tema y de si las tarjetas realmente están limpias.

## Algunos picos de repaso son en realidad picos de tarjetas malas

Esto se pasa por alto porque el número de vencimientos parece un problema de ajustes.

Las tarjetas malas aumentan la carga de trabajo de dos formas:

- tardan más en responderse
- se fallan más a menudo, así que vuelven antes

Eso significa que una tarjeta vaga no te hace perder tiempo una sola vez. Te seguirá pasando factura.

Yo miraría muy de cerca el mazo si sigues viendo:

- tarjetas que evalúan varios datos a la vez
- respuestas lo bastante largas como para dudar al contestarlas
- tarjetas duplicadas generadas por IA
- tarjetas que nunca llegaste a entender bien antes de memorizarlas
- detalles mínimos que no merecen su coste futuro de repaso

Si esto se parece más a tu caso, [Cómo podar un mazo de flashcards en 2026](/es/blog/how-to-prune-a-flashcard-deck/) probablemente sea la mejor lectura siguiente.

## Un diagnóstico de cinco minutos para los picos de repaso en Anki

Si tuviera que diagnosticar **picos de repaso Anki** rápido, usaría esta tabla:

| Síntoma | Causa más probable | Primer arreglo |
| --- | --- | --- |
| El número de vencimientos saltó unos días después de subir las tarjetas nuevas | La entrada superó la capacidad de repaso | Baja las tarjetas nuevas y déjalas ahí |
| Los contadores de aprendizaje y reaprendizaje están inflados | Churn de pasos o tarjetas flojas | Acorta los pasos y arregla las tarjetas malas |
| Las tarjetas maduras se sienten demasiado frecuentes tras cambiar a FSRS | Desired retention está demasiado alto, o las expectativas están desajustadas | Baja un poco la retención y observa |
| Un periodo sin repasar creó una pila enorme | Acumulación | Pausa las tarjetas nuevas y recupera con constancia |
| El tiempo de repaso se siente horrible incluso con un número moderado de vencimientos | Problema de calidad de tarjetas | Reescribe, suspende o borra tarjetas flojas |

Fíjate en lo que no aparece en la columna del primer arreglo.

No dice "reinicia el mazo".

Ese suele ser el error más caro.

## Cómo bajar los repasos de Anki sin reiniciar el mazo

Si tu búsqueda real es **cómo bajar los repasos de Anki**, yo haría esto en este orden.

### 1. Baja primero las tarjetas nuevas

Esto reduce la presión futura sin borrar el historial de programación.

En algunos mazos sobrecargados, poner las tarjetas nuevas a cero durante unos días no es una exageración. Es mantenimiento.

### 2. Mantén cortos los learning steps y relearning steps

Con FSRS, las cadenas largas de pasos suelen crear más fricción que valor.

### 3. Ajusta desired retention solo después de controlar la entrada

La retención es una palanca real de carga de trabajo. Simplemente no es la primera que yo tocaría.

### 4. Quita las tarjetas que siguen haciéndote perder tiempo

Borra las tarjetas de poco valor. Suspende el material que no es prioritario. Reescribe las tarjetas importantes que estén mal redactadas.

### 5. Separa la recuperación de acumulación del ajuste normal

Si el pico ocurrió porque te saltaste días, trátalo como una recuperación de acumulación y no como un problema puro de ajustes.

## El arreglo correcto depende de qué número te está doliendo

Suena a detalle menor, pero mantiene el diagnóstico honesto.

Si el número doloroso es:

- **repasos pendientes**, baja la entrada y quizá también la retención
- **cantidad en aprendizaje**, limpia los pasos y las tarjetas flojas
- **tiempo por sesión**, mejora la calidad de las tarjetas y el flujo de repaso

Ese último caso es muy común. Algunas personas no tienen realmente demasiados repasos. Tienen repasos demasiado lentos y demasiado molestos. Si ése es tu caso, [Cómo repasar flashcards más rápido en 2026](/es/blog/how-to-review-flashcards-faster/) te ayudará más que otra ronda de ajustes del planificador.

## Dónde encaja Flashcards sin fingir que es magia

[Características de Flashcards](/es/features/) ayuda aquí por una razón práctica: el producto cubre tanto la parte anterior al repaso como la parte durante el repaso.

Eso importa porque muchos picos de repaso empiezan antes del primer día de repaso. Empiezan cuando entran demasiadas tarjetas en el mazo activo, o cuando los borradores generados con IA se aceptan sin suficiente edición.

Flashcards puede ayudar con las partes aburridas que sí importan:

- crear borradores de tarjetas a partir del material fuente
- editar tarjetas de anverso y reverso antes de que se conviertan en deuda de repaso permanente
- repasar con FSRS una vez que el mazo ya merece ser programado

Eso es útil. No es una promesa de que el software pueda cancelar las matemáticas de la carga de trabajo. Si le metes a cualquier sistema de repetición espaciada más tarjetas de las que tu semana puede sostener, la cola acabará devolviendo el golpe.

## El arreglo suele ser menos dramático que el pico

Cuando la gente busca **por qué hay tantos repasos en Anki**, a menudo se prepara para una respuesta técnica oculta.

Normalmente la respuesta es más corriente:

- añadiste tarjetas más rápido de lo que tu horario podía sostener
- tus learning steps están creando churn extra
- tu objetivo de retención está pidiendo más trabajo del que quieres
- tu mazo contiene tarjetas que deberías haber limpiado antes

Molesto, sí. Misterioso, normalmente no.

Haz primero el diagnóstico aburrido.

Baja las tarjetas nuevas antes de entrar en pánico.

Mantén cortos los learning steps.

Trata desired retention como una palanca de carga de trabajo.

Borra las tarjetas flojas más rápido.
