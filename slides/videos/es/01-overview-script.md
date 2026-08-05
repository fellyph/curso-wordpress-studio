# Guion del vídeo 01 — Definir el proyecto con IA

**Duración estimada:** 5 minutos  
**Slides:** [01 · Definir el proyecto con IA](./01-overview.html)  
**Material de apoyo:** [notas de la reunión ficticia](../../../workshop/es/event-meeting-notes.md)

## Gancho · antes del slide 1

¿Cuánto cuesta empezar a construir antes de entender el problema? Normalmente, cuesta retrabajo, margen y confianza. Por eso, antes de abrir cualquier herramienta de construcción, la primera tarea es definir claramente qué queremos entregar.

## Slide 1 · Antes de construir, define el proyecto

Quienes dirigen una agencia conocen bien esta situación: muchas veces, la parte más importante de un proyecto ocurre antes de la primera línea de código. Ocurre durante la conversación con el cliente.

Para hacerlo concreto, voy a usar un caso inspirado en un proyecto real en el que trabajé recientemente: el sitio de un evento tecnológico sobre inteligencia artificial en Faro, en el sur de Portugal.

El evento tendría dos pistas. En una reunión con la comunidad organizadora, hablamos sobre la duración, el número esperado de participantes, la ubicación y otras decisiones importantes. A partir de esa experiencia, preparé una conversación ficticia como materia prima para nuestro ejercicio.

En este primer vídeo todavía no vamos a elegir páginas, componentes ni tecnología. Primero, necesitamos entender qué debe construirse y por qué.

**Transición:** El punto de partida para comprenderlo no es un prompt perfecto. Es una buena conversación.

## Slide 2 · Empieza por la conversación

La conversación simulada representa una reunión de descubrimiento con la organización del evento. Reúne el contexto del evento de IA en Faro, la propuesta de dos pistas y decisiones prácticas como tiempo, capacidad y ubicación.

El objetivo no es fingir que ya tenemos todas las respuestas. Es registrar fielmente lo que se dijo y detectar también lo que todavía debe aclararse.

Para el taller, convertimos esa conversación en notas ficticias y seguras para compartir. Así, todos parten del mismo material y pueden observar cómo surgen las decisiones de producto en una reunión sin exponer información privada de un cliente real.

**Transición:** Con la conversación registrada, la IA deja de ser solamente una herramienta para generar texto y empieza a ayudarnos a interpretar el proyecto.

## Slide 3 · La IA transforma intervenciones en decisiones

¿Cómo puede ayudar aquí la inteligencia artificial? Una grabación o transcripción puede organizarse por participante, tema y tipo de información. La IA ayuda a separar quién dijo qué y a clasificar el contenido.

A partir de ahí, podemos identificar cuatro grupos importantes: el objetivo del sitio, los públicos que debe atender, las funcionalidades solicitadas y las preguntas que siguen abiertas.

También podemos pedir a la IA que diferencie hechos confirmados, decisiones, hipótesis y dudas. Por ejemplo: ¿la ubicación ya está decidida o todavía es una posibilidad? ¿La inscripción será gratuita? ¿Quién aprueba la selección de ponentes? ¿Qué datos necesitan recopilarse realmente?

Estas preguntas mejoran el contexto, pero la validación sigue siendo humana. La IA organiza el material y señala vacíos; el equipo confirma qué cuenta como decisión.

**Transición:** Cuando la conversación está clara, podemos avanzar por tres fases sin saltar directamente a la construcción.

## Slide 4 · La conversación abre tres fases

La primera fase es el descubrimiento: escuchar, registrar y aclarar. Aquí reunimos el contexto y hacemos preguntas hasta que los puntos importantes estén claros.

La segunda fase transforma esa comprensión en requisitos. Registraremos el propósito, el público, las funcionalidades, los límites y las preguntas abiertas en un archivo `requirements.md`. Este archivo será la fuente de verdad del proyecto.

La tercera fase explora el diseño. Con los requisitos preparados, podemos usar una herramienta como Claude Design o Google Stitch para producir los primeros borradores de la experiencia.

En mi flujo, elegí Claude Design porque ya utilizaba Claude Max y era la opción más conveniente para el trabajo. Pero la herramienta concreta no es lo esencial: puedes usar otra solución que cumpla el mismo papel.

Como el equipo era pequeño, el primer prototipo ayudó a materializar rápidamente la propuesta. Más adelante, una persona de diseño participó en el proceso y mejoró ese prototipo. La IA no tiene que excluir la participación humana; puede crear una base más concreta para la colaboración.

**Transición:** Todo esto funciona mejor cuando las notas de la conversación son fiables.

## Slide 5 · Las buenas notas preservan lo que reveló la conversación

Las buenas notas convierten la conversación en memoria compartida. Preservan el contexto, las decisiones, las dudas y los límites que deben acompañar al proyecto.

Para quienes trabajan en una agencia, esto también protege el alcance y la rentabilidad. Cuanto mejor definamos el comienzo, menor será la posibilidad de descubrir demasiado tarde que el cliente y el equipo imaginaban entregas diferentes.

Este cuidado reduce el retrabajo y evita ciclos innecesarios con la inteligencia artificial. En lugar de pedir variaciones sin dirección, damos al agente un contexto validado y criterios claros.

Ahora tenemos la materia prima. En el próximo vídeo, convertiremos estas notas en un `requirements.md`: un documento breve, verificable y listo para orientar la fase de diseño.

**Cierre:** Antes de construir, define. Antes de pedir una solución a la IA, entrégale un problema bien comprendido.
