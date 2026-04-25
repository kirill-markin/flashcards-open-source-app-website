---
title: "Configuración de FSRS en 2026: desired retention, learning steps y carga de repaso sin tocar demasiado"
description: "Guía práctica de configuración FSRS en 2026 para flashcards: desired retention, learning steps, maximum interval, límites de tarjetas nuevas y cuándo dejar de ajustar el planificador."
date: "2026-04-25"
keywords:
  - "configuración FSRS"
  - "Anki FSRS configuración"
  - "desired retention FSRS"
  - "FSRS learning steps"
  - "mejores ajustes FSRS"
  - "carga de repaso FSRS"
  - "ajustes repetición espaciada"
  - "flashcards FSRS"
---

El error más raro con FSRS no es poner la retención un poco demasiado alta o demasiado baja. Es pasar tres tardes afinando el planificador mientras la mitad del mazo todavía tiene tarjetas que preguntan cosas como "Explica el capítulo 4".

Entiendo por qué pasa. Cuando alguien decide que FSRS es mejor que SM-2, la siguiente búsqueda suele ser **configuración FSRS** o **Anki FSRS configuración**. El algoritmo suena serio, los ajustes parecen matemáticos y de pronto repasar flashcards se siente como configurar una base de datos en producción.

No hace falta convertirlo en eso.

![Escritorio cálido con flashcards, un pequeño dial de retención y una escena tranquila de estudio nocturno](/blog/fsrs-settings.png)

## La configuración FSRS decide carga, no personalidad

El ajuste más importante de FSRS no es solo un ajuste de memoria.

Es un ajuste de intercambio.

Cuando subes desired retention, dices que quieres que las tarjetas vuelvan antes para olvidar menos. Puede ser buena idea. También significa más repasos. Cuando lo bajas, aceptas más olvido a cambio de una cola más ligera.

Eso no es una pregunta moral. Es una pregunta operativa.

Si tu cola diaria ya pesa, subir la retención porque suena más serio puede empeorar el sistema. Si preparas un examen importante y el mazo está limpio, un pequeño aumento puede tener sentido.

El problema empieza cuando buscas el ajuste "perfecto" sin mirar tu día real.

## Empieza por desired retention

Desired retention es el ajuste que conviene entender primero.

En lenguaje simple, le dice al planificador qué probabilidad quieres tener de recordar una tarjeta cuando vence. Un valor de `0.90` apunta a recordar cerca del 90% en el momento del repaso.

El [manual de Anki](https://docs.ankiweb.net/deck-options.html#desired-retention) explica el intercambio con bastante claridad: una retención deseada más alta acorta intervalos y aumenta repasos, y la carga sube muy rápido cuando el valor se acerca a 1.0.

Esa es la trampa.

Pasar de 90% a 95% no parece gran cosa en una caja de configuración. En la vida diaria puede sentirse como si la app te hubiera conseguido un segundo trabajo.

Yo empezaría de forma aburrida:

- usa el valor normal si tus repasos son manejables
- baja el objetivo solo si la cola pesa demasiado y olvidar un poco más sigue siendo aceptable
- súbelo solo cuando el material justifica el tiempo extra
- cambia poco y observa qué ocurre

El objetivo no es ganar la pantalla de ajustes. El objetivo es seguir repasando.

## El 90% es un buen punto de partida, no una ley

El objetivo por defecto de 90% es un buen centro.

No es un número mágico.

Para aprender idiomas por gusto, quizá un poco menos sea suficiente si mantiene vivo el hábito. Para medicina, derecho, finanzas o certificaciones, quizá quieras un poco más de certeza, sobre todo cerca de un examen. En un mazo desordenado lleno de tarjetas débiles generadas por IA, subir la retención suele hacer que veas malas tarjetas más a menudo.

Eso duele, pero ayuda.

Si una tarjeta está mal escrita, la configuración FSRS no la convierte en buen material de aprendizaje. Solo decide cuándo vuelve esa mala tarjeta.

Antes de subir retención, haría una pregunta más simple: este mazo mejoraría si borrara el 15%?

Muchas veces sí.

## No copies los parámetros FSRS de otra persona

Desired retention lo eliges tú.

Los parámetros FSRS no funcionan igual.

La gracia de optimizar parámetros es que el planificador aprenda de tu historial de repaso. Copiar los números de otra persona porque publicó una captura bonita elimina buena parte del sentido. Sus tarjetas, hábitos de recuerdo, madurez del mazo y forma de usar los botones no son los tuyos.

La [documentación de optimal retention de FSRS](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) es útil porque trata la retención como un equilibrio entre conocimiento y carga, no como un número que se toma prestado de un desconocido.

La versión práctica es sencilla:

- no edites parámetros FSRS a mano si no sabes exactamente por qué
- no pegues parámetros de un foro
- optimiza con tu propio historial cuando la herramienta lo permita
- trata el ajuste de parámetros como mantenimiento, no entretenimiento

Aquí hacer menos suele ser la decisión más profesional.

## Mantén los learning steps aburridos

En learning steps sobreviven muchas costumbres antiguas de SM-2.

La gente añade cadenas largas como `1m 10m 1d 3d` porque parecen cuidadosas. Con FSRS, eso puede estorbar. El planificador debería tomar el control del tiempo a largo plazo después de la fase inicial. Si tus learning steps cruzan varios días, retrasas justo la parte del sistema por la que cambiaste a FSRS.

El manual de Anki recomienda que learning steps y relearning steps duren menos de un día con FSRS, y que el número de pasos sea mínimo.

Es buen consejo.

Para casi todos los mazos, prefiero pasos cortos y usar el tiempo ganado en mejorar tarjetas:

- dividir preguntas sobrecargadas
- acortar respuestas largas
- convertir reconocimiento en recuerdo activo
- borrar tarjetas que existen solo porque la IA las generó con educación

El planificador trabaja mejor cuando la tarjeta merece ser planificada.

## Cuidado con maximum interval

Maximum interval parece inofensivo porque se siente como un límite de seguridad.

También puede crear trabajo extra en silencio.

Si lo limitas demasiado, las tarjetas maduras vuelven aunque FSRS las habría enviado más lejos. Eso puede servir para una ventana corta antes de un examen o para conocimientos críticos. Como ajuste general de ansiedad, suele salir caro.

Un maximum interval muy corto convierte la repetición espaciada en comprobación repetida.

Y eso cuesta tiempo.

Solo lo bajaría con una razón real:

- el examen está cerca
- el material caduca o cambia
- el mazo contiene conocimiento operativo crítico
- mediste la carga y puedes pagarla

Si no, deja que las tarjetas fáciles se alejen lo suficiente para hacer sitio a las que sí te necesitan.

## Mira las tarjetas nuevas antes de culpar a FSRS

La mayoría de problemas de carga son problemas de entrada.

Culpamos al planificador porque es quien aparece por la mañana con la factura. Pero la factura suele venir de las tarjetas nuevas de ayer, de la importación de la semana pasada o del lote de 300 tarjetas de IA que pareció eficiente durante unos doce minutos.

Si los repasos pesan demasiado, revisaría esto antes de tocar FSRS:

- cuántas tarjetas nuevas añades al día
- cuántas tarjetas generadas nunca editaste
- cuántas prueban varias ideas a la vez
- cuántas tarjetas viejas deberían suspenderse o borrarse

Este artículo encaja bien con esa pregunta:

- [How Many New Flashcards Per Day in 2026?](https://flashcards-open-source-app.com/blog/how-many-new-flashcards-per-day/)

FSRS puede programar un buen mazo con más calma. No puede volver pequeño un mazo demasiado grande.

## Qué cambiaría para exámenes

Los mazos de examen son distintos porque la fecha existe de verdad.

Si el examen está cerca, el mejor ajuste FSRS no siempre es el que usarías para un mazo de idiomas a largo plazo. Tal vez aceptes más carga durante unas semanas porque el material importa ahora.

Aun así, evitaría ajustes heroicos.

Para exámenes, cambiaría el flujo antes que el algoritmo:

1. deja de añadir tarjetas nuevas antes de lo que te gustaría
2. mantén desired retention cerca del rango normal salvo que el mazo esté limpio
3. usa etiquetas o repaso filtrado para temas débiles
4. sube la carga solo si el calendario puede absorberla
5. protege la última semana de importaciones gigantes

Esta guía encaja mejor con ese caso:

- [How to Study for an Exam With FSRS in 2026](https://flashcards-open-source-app.com/blog/how-to-study-for-an-exam-with-fsrs/)

Versión corta: los exámenes justifican repasos más estrictos. No justifican caos.

## Dónde encaja Flashcards

[Flashcards](https://flashcards-open-source-app.com/) trata FSRS como parte del contrato del producto, no como una etiqueta de marketing.

La dirección actual del producto encaja con los ajustes importantes para repasar en serio:

- tarjetas frente/reverso en vez de bloques vagos de notas
- borradores con IA, con la expectativa de que los edites
- programación FSRS para el bucle real de repaso
- ajustes de workspace como desired retention, learning steps, relearning steps, maximum interval y fuzz
- app web alojada y código abierto para quien quiere saber cómo funciona el sistema

Eso último importa para usuarios intensivos de FSRS.

Si te interesa buscar **mejores ajustes FSRS**, probablemente también te importa si el producto esconde el planificador detrás de palabras vagas. Yo prefiero una herramienta que ponga el modelo de repaso dentro del diseño real del producto.

## Checklist simple de configuración FSRS

Si configurara un mazo nuevo hoy, mantendría la lista corta:

| Ajuste | Punto de partida práctico | Cuándo revisarlo |
|---|---|---|
| Desired retention | Empieza cerca del valor normal | Los repasos pesan demasiado o el material exige más certeza |
| Parámetros FSRS | Optimiza con tu propio historial | Hay historial suficiente y la herramienta lo permite |
| Learning steps | Cortos y mínimos | El aprendizaje del mismo día se siente demasiado rápido o repetitivo |
| Relearning steps | Simples | Las tarjetas maduras falladas vuelven con un ritmo poco útil |
| Maximum interval | Generoso salvo que haya razón | Exámenes, conocimiento crítico o huecos medidos de retención |
| New cards/day | Más bajo que tu ambición | Los repasos diarios invaden la vida real |

No es glamuroso.

Sirve.

## El mejor ajuste FSRS es el que puedes sostener

La gente busca **configuración FSRS** porque quiere precisión.

Tiene sentido. FSRS suele ser mejor que los planificadores antiguos cuando la implementación está bien hecha y el mazo no está roto. Pero la mejora práctica no viene de ajustar sin parar. Viene de tomar unas pocas decisiones tranquilas, dejar trabajar al planificador y mejorar las tarjetas.

Usa desired retention como una palanca de carga.

Mantén learning steps cortos.

No copies parámetros.

Controla tarjetas nuevas antes de culpar al planificador.

Y si todo sigue pesado, quizá la respuesta no sea otro ajuste. Quizá sea un mazo más pequeño y más limpio.

## Prueba FSRS sin convertir estudiar en mantenimiento

Si quieres probar ese flujo:

- [Abrir Flashcards](https://flashcards-open-source-app.com/)
- [Abrir la app](https://app.flashcards-open-source-app.com/)
- [Leer la página de funciones](https://flashcards-open-source-app.com/features/)
- [Comparar FSRS y SM-2](https://flashcards-open-source-app.com/blog/fsrs-vs-sm-2/)
- [Ver el código en GitHub](https://github.com/kirill-markin/flashcards-open-source-app)
