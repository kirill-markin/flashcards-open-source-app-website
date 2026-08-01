---
title: "Flashcards de CompTIA A+ en 2026: Core 1, Core 2 y PBQ"
description: "Crea flashcards útiles de CompTIA A+ V15 para Core 1 (220-1201), Core 2 (220-1202), resolución de problemas, comandos y repaso después de las PBQ."
date: "2026-08-01"
image: "/blog/comptia-a-plus-flashcards.png"
keywords:
  - "flashcards de CompTIA A+"
  - "flashcards de A+ Core 1"
  - "flashcards de A+ Core 2"
  - "flashcards de 220-1201"
  - "flashcards de 220-1202"
  - "guía de estudio CompTIA A+ 2026"
  - "práctica de PBQ CompTIA A+"
  - "puertos y comandos CompTIA A+"
  - "estudiar CompTIA A+ con FSRS"
---

Un PC de escritorio pierde la hora cuando lo desenchufas. Un portátil se asigna una dirección `169.254.x.x`. Un usuario puede iniciar sesión, pero no editar un archivo compartido. CompTIA A+ convierte pequeñas pistas como estas en decisiones propias de un técnico, repartidas entre dos exámenes con un máximo de 90 preguntas cada uno.

Las buenas **flashcards de CompTIA A+** facilitan recordar la pista, la decisión y el motivo. Son útiles para puertos, conectores, comandos, síntomas, conceptos de seguridad y procedimientos de soporte. Sirven mucho menos para instalar una unidad, interpretar la salida de un comando que no conoces o resolver una pregunta basada en el desempeño (PBQ) con varios pasos. Para eso todavía necesitas un equipo o un laboratorio.

![Estudiante de soporte de TI organizando flashcards de CompTIA A+ sobre hardware y redes de Core 1, y sistemas operativos y seguridad de Core 2](/blog/comptia-a-plus-flashcards.png)

## Estudia los exámenes actuales CompTIA A+ V15

Al 1 de agosto de 2026, la serie A+ vigente es V15:

- Core 1: `220-1201`
- Core 2: `220-1202`

CompTIA lanzó ambos exámenes el 25 de marzo de 2025 y actualmente estima que se retirarán en 2028. Debes aprobar los dos para obtener A+. La [página oficial de Core 1](https://www.comptia.org/en-us/certifications/a/core-1-v15/) y la [página oficial de Core 2](https://www.comptia.org/en-us/certifications/a/core-2-v15/) son las referencias más seguras para volver a comprobar los códigos antes de comprar un bono de examen.

| Examen | Número máximo de preguntas | Tiempo | Puntuación mínima para aprobar |
| --- | ---: | ---: | ---: |
| Core 1 (`220-1201`) | 90 | 90 minutos | 675 en una escala de 100–900 |
| Core 2 (`220-1202`) | 90 | 90 minutos | 700 en una escala de 100–900 |

Las páginas de los exámenes enumeran preguntas de respuesta única y múltiple, ejercicios de arrastrar y soltar y preguntas basadas en el desempeño. Los PDF de objetivos usan la descripción más breve «preguntas de opción múltiple y basadas en el desempeño». Ambas descripciones se refieren a los mismos exámenes V15.

Hay otro número de versión que conviene aclarar. El [PDF actual de objetivos de Core 1](https://lecbyo.files.cmp.optimizely.com/download/34be017cb73211ef8985a6f347fbf652) y el [PDF de objetivos de Core 2](https://lecbyo.files.cmp.optimizely.com/download/cefedfb2b8a511ef809306d06d323538) se identifican como **Exam Objectives Document Version 4.0** («Versión 4.0 del documento de objetivos del examen»). Esa es la revisión del documento descargable; **V15** es la serie de exámenes. Usa los códigos de examen y los enlaces vigentes de CompTIA como referencia si la revisión del PDF vuelve a cambiar.

Los exámenes retirados `220-1101` Core 1 y `220-1102` Core 2 pertenecen a V14. Algunos fundamentos se mantienen, pero los objetivos anteriores ya no son una lista de comprobación fiable para los exámenes vigentes.

## Separa el mazo según las tareas que evalúa cada core

Core 1 y Core 2 se solapan al resolver un ticket de soporte real, pero sus temarios dan más peso a áreas distintas.

| Core 1 (`220-1201`) | Peso | Core 2 (`220-1202`) | Peso |
| --- | ---: | --- | ---: |
| Dispositivos móviles | 13% | Sistemas operativos | 28% |
| Redes | 23% | Seguridad | 28% |
| Hardware | 25% | Resolución de problemas de software | 23% |
| Virtualización y computación en la nube | 11% | Procedimientos operativos | 21% |
| Resolución de problemas de hardware y redes | 28% |  |  |

En la práctica, Core 1 te pide relacionar dispositivos, componentes, comportamiento de la red y síntomas físicos. Core 2 se centra más en las herramientas de los sistemas operativos, la seguridad, los fallos de software, la documentación, el control de cambios y el soporte a usuarios.

Usa dos mazos o etiqueta cada tarjeta con `core-1` o `core-2`. Incluye el código del objetivo cuando facilite revisar la tarjeta: por ejemplo, `220-1201:5.6` para la resolución de problemas de impresoras. Una etiqueta de origen como `lab-miss`, `practice-miss` u `objective-check` explica por qué existe la tarjeta.

Los porcentajes sirven para comprobar la cobertura, no para fijar una cuota de tarjetas. Si un dominio representa el 28% de un examen y tu mazo apenas lo toca, revísalo con más atención. No necesitas crear decenas de tarjetas sobre material que ya recuerdas y aplicas con soltura.

## Crea tarjetas de A+ en torno a una decisión técnica

Una tarjeta debe ser fácil de evaluar: sabías la respuesta antes de mostrarla o no. Las preguntas más claras para A+ suelen pedir una de estas cuatro cosas.

### Distingue dos conceptos cercanos

Core 1 agrupa interfaces, factores de forma, cables, servicios de red y modelos de nube. Pregunta por la diferencia que evita un error real.

```text
Anverso: ¿«M.2 SSD» indica si la unidad usa SATA o PCIe/NVMe?

Reverso: No. M.2 describe el factor de forma. Consulta las especificaciones de
la unidad y de la placa base para conocer la interfaz y el protocolo compatibles.
```

```text
Anverso: ¿Qué diferencia a un hipervisor de tipo 1 de uno de tipo 2?

Reverso: El tipo 1 se ejecuta directamente sobre el hardware del host. El tipo 2
se ejecuta sobre el sistema operativo de un host.
```

Estas tarjetas son más útiles que copiar una definición porque la pregunta te obliga a elegir.

### Relaciona un síntoma con el siguiente paso

Las tarjetas de resolución de problemas necesitan una redacción precisa. Un síntoma rara vez demuestra una sola causa.

```text
Anverso: Un equipo cliente con Windows tiene una dirección 169.254.x.x y no puede acceder a
la red local. ¿Qué indica la dirección y qué deberías comprobar a continuación?

Reverso: El equipo se asignó una dirección APIPA porque no recibió una concesión
DHCP. Comprueba su conexión por cable o inalámbrica y después la conectividad con el servidor DHCP.
```

```text
Anverso: Un ordenador de escritorio mantiene la hora correcta mientras recibe
alimentación, pero pierde la fecha y la hora cuando se corta toda la corriente.
¿Qué componente conviene comprobar primero?

Reverso: La batería CMOS/RTC, sin descartar otros fallos del firmware o de la
placa base como posibles causas.
```

«¿Qué sugiere esto?» suele ser mejor que «¿Qué causó esto?». La primera formulación deja margen para valorar la evidencia; la segunda puede transmitir una certeza falsa.

### Recuerda un servicio junto con su pista

Aprende cada puerto en ambos sentidos y relaciónalo después con una situación de soporte.

```text
Anverso: Un técnico necesita acceso remoto cifrado por línea de comandos a un host.
¿Qué servicio y puerto estándar son adecuados?

Reverso: SSH, normalmente por el puerto TCP 22.
```

```text
Anverso: El puerto TCP 22 está abierto en un servidor. ¿Qué servicio deberías
investigar?

Reverso: SSH es la asociación estándar. Confirma qué proceso está escuchando
realmente; el número de puerto por sí solo no demuestra qué servicio se ejecuta.
```

Así evitas que un mazo de puertos se convierta en una recitación de números. Si quieres profundizar en las tarjetas de protocolos, consulta la [guía de flashcards para Security+](/blog/how-to-use-flashcards-for-security-plus/). Mantén el mazo de A+ dentro de los límites de los objetivos de A+.

### Elige la herramienta que aporta la evidencia

Los objetivos 1.4 y 1.5 de Core 2 abarcan las herramientas de administración y de línea de comandos de Windows, y te piden usar la adecuada en cada situación. Formula las preguntas desde la tarea hacia la herramienta.

```text
Anverso: Antes de probar DNS o una ruta, ¿qué comando de Windows muestra la
configuración IP actual del cliente?

Reverso: ipconfig
```

```text
Anverso: ¿Qué comando de Windows comprueba directamente si un nombre de host se
resuelve en una dirección IP?

Reverso: nslookup
```

```text
Anverso: ¿Dónde consultarías los eventos de aplicaciones y del sistema
relacionados con un fallo de Windows?

Reverso: Visor de eventos (eventvwr.msc)
```

Ejecuta el comando o abre la herramienta después del repaso. La tarjeta te ayuda a recordar el primer paso; el equipo te enseña las opciones, la salida, los permisos y los estados de error. La [guía de flashcards para comandos de terminal](/blog/how-to-learn-terminal-commands-with-flashcards/) explica este ciclo con más detalle.

## Core 2 también evalúa límites, secuencia y criterio profesional

Core 2 puede parecer una lista de herramientas de Windows y términos de seguridad. Las mejores tarjetas sitúan esos datos dentro de una decisión concreta de soporte.

En seguridad, compara controles que resuelven problemas distintos:

```text
Anverso: ¿En qué se diferencia quitar los privilegios de administrador a un usuario
de activar la autenticación multifactor?

Reverso: Quitar los privilegios de administrador restringe lo que el usuario está
autorizado a hacer después de iniciar sesión. La autenticación multifactor refuerza la verificación de identidad
al iniciar sesión.
```

En los procedimientos operativos, conserva el orden que protege al sistema y al cliente:

```text
Anverso: Antes de implementar un cambio aprobado en una estación de trabajo,
¿qué dos planes deben estar claros por si falla?

Reverso: El plan de copia de seguridad y el plan de reversión. El registro del
cambio también debe recoger el alcance, el riesgo, la aprobación, el momento previsto,
los sistemas afectados, la implementación y los resultados.
```

En la atención al cliente, plantea una situación concreta:

```text
Anverso: Un usuario describe un problema de forma imprecisa. ¿Qué debe hacer el
técnico antes de proponer una solución?

Reverso: Hacer preguntas específicas y abiertas, y reformular el problema para
confirmar que ambos lo entienden igual.
```

El objetivo 4.10 de Core 2 también incluye conceptos básicos de IA: política de uso adecuado, plagio, sesgo, alucinaciones, exactitud y cuestiones relacionadas con los datos públicos y privados. Merece unas pocas tarjetas específicas, no un segundo curso de IA:

```text
Anverso: Antes de pegar el registro de diagnóstico de un cliente en un servicio
público de IA, ¿qué debe comprobar un técnico?

Reverso: La política de la organización sobre IA y tratamiento de datos, si el
registro contiene datos privados o regulados y si el servicio está autorizado
para tratar esos datos.
```

## La práctica con PBQ debe ir más allá de una flashcard

CompTIA describe las [preguntas basadas en el desempeño](https://www.comptia.org/en-us/resources/test-policies/exam-development/performance-based-questions-explained/) como ejercicios de resolución de problemas presentados mediante simulaciones o entornos virtuales, y actualmente incluye A+ entre las certificaciones con PBQ de simulación. Una PBQ puede exigir varias observaciones y acciones dentro de un mismo contexto técnico. Una tarjeta de una línea no puede reproducir todo ese contexto.

Usa tarjetas antes y después de practicar PBQ o trabajar en un laboratorio:

1. Antes de practicar, recuerda conocimientos previos concretos como un puerto, un conector, la función de un comando, un permiso o una pista de diagnóstico.
2. Durante la práctica, trabaja en la interfaz completa e inspecciona la evidencia disponible.
3. Después de un error, anota la pista que pasaste por alto y la suposición que te desvió.
4. Crea una tarjeta solo si un pequeño fallo de memoria contribuyó al error.
5. Pon a prueba lo aprendido en una situación distinta.

Supón que recordabas para qué sirve DNS, pero perdiste tiempo decidiendo si fallaba la resolución de nombres. Una tarjeta que pregunte cuándo usar `nslookup` puede corregir esa laguna de memoria. El siguiente laboratorio debería usar otro host y un tipo de fallo distinto para que todavía tengas que razonar.

No reduzcas un error a una tarjeta cuando el verdadero problema fue la navegación, la salida de un comando, la instalación de un componente, la gestión del tiempo o una recopilación incompleta de evidencia. Esos problemas requieren más práctica con PBQ, un laboratorio virtual, hardware de repuesto o un ejercicio de resolución de problemas más largo.

Los documentos de objetivos también advierten a los candidatos contra materiales no autorizados de terceros, conocidos habitualmente como brain dumps. Usa los objetivos vigentes, formación y prácticas autorizadas, y tus propias notas de laboratorio. [Cómo convertir preguntas de práctica en flashcards](/blog/how-to-turn-practice-questions-into-flashcards/) explica cómo conservar la lección reutilizable sin copiar la pregunta.

## Crea un ciclo de estudio centrado en un core

Elige el examen que piensas hacer primero y mantén sus tarjetas en primer plano. Para cada dominio:

1. Aprende un pequeño grupo de objetivos con una fuente vigente y autorizada.
2. Realiza una tarea práctica o una serie legítima de ejercicios.
3. Convierte en tarjetas solo las dudas, las respuestas que acertaste por poco y los errores.
4. Repasa con FSRS las tarjetas pendientes mientras continúas con el trabajo práctico.

Una vez por semana, compara tu mazo con la tabla de dominios. Esto permite detectar puntos ciegos sin llenar la cola de puntos copiados de los objetivos. Cuando se acerque el examen, reduce la creación de tarjetas nuevas y dedica más tiempo a preguntas cronometradas, PBQ y situaciones nuevas de resolución de problemas.

CompTIA recomienda 12 meses de experiencia práctica en un puesto de especialista en soporte de TI para ambos exámenes V15. Es una recomendación, no un requisito de certificación adicional, pero sirve para recordar el nivel de contexto práctico que exigen los objetivos.

## Dónde encaja Flashcards Open Source App

[Flashcards Open Source App](/features/) se ocupa de la parte de memorización: tarjetas sencillas de anverso y reverso, mazos y etiquetas, repaso de las tarjetas pendientes con FSRS, ayuda opcional de IA para crear borradores de tarjetas, estudio sin conexión en el móvil con sincronización y exportaciones transferibles. La aplicación alojada es gratuita durante la beta actual y el proyecto se puede autoalojar.

Una configuración sencilla para A+ puede limitarse a esto:

- un mazo para `220-1201` y otro para `220-1202`
- etiquetas de objetivo y origen en las tarjetas sensibles a la versión
- un breve registro de errores después de los laboratorios y la práctica
- IA para mejorar la redacción de las tarjetas, comprobando cada respuesta técnica antes de guardarla

La aplicación no es un producto oficial de CompTIA, un curso de A+, un simulador de examen ni un entorno de PBQ. Su función es guardar los pequeños datos y decisiones que quieres que FSRS te ayude a recordar. Reserva los equipos, las situaciones completas y la práctica autorizada del examen para las herramientas adecuadas. La guía de [primeros pasos](/docs/getting-started/) explica las modalidades alojada y autoalojada.

## Preguntas frecuentes sobre las flashcards para CompTIA A+

### ¿Para qué exámenes CompTIA A+ debo prepararme en 2026?

Prepárate para A+ V15 Core 1 `220-1201` y Core 2 `220-1202`. Ambos se lanzaron el 25 de marzo de 2025 y CompTIA actualmente estima que se retirarán en 2028. Vuelve a consultar las páginas oficiales de los exámenes antes de reservar fecha.

### ¿Necesito Core 1 y Core 2 para obtener A+?

Sí. CompTIA exige aprobar ambos exámenes V15 para obtener la certificación A+. La puntuación mínima de Core 1 es 675 y la de Core 2 es 700. Ambos usan una escala de 100–900.

### ¿Bastan las flashcards para las PBQ de CompTIA A+?

No. Las tarjetas pueden ayudarte a recordar comandos, puertos, diferencias entre componentes, conceptos de permisos y pistas. Las PBQ de A+ siguen exigiendo que resuelvas una simulación, así que combina el mazo con prácticas autorizadas de PBQ y laboratorios prácticos.

### ¿Debo crear una flashcard para cada objetivo?

Usa los objetivos como límite y mapa de cobertura. Crea tarjetas para la información que necesitas recordar con rapidez y que sigues olvidando. Practica la instalación, la configuración, la interpretación de salidas y la resolución de problemas con varios pasos fuera del mazo.

## Empieza con veinte tarjetas y una tarea real

Abre los objetivos oficiales del core que vayas a hacer primero. Elige un dominio, estudia un apartado breve y haz algo con él: ejecuta el comando, inspecciona el hardware, configura el ajuste o diagnostica un problema nuevo.

Crea un máximo de veinte tarjetas a partir de los puntos en los que dudaste. Es suficiente para descubrir si las preguntas son claras antes de construir una cola grande. Las **flashcards de CompTIA A+** útiles mantienen al alcance las piezas pequeñas. La tarea real demuestra si sabes unirlas.
