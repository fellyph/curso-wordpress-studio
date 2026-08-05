# Guion del vídeo 02 — Definir los requisitos del evento

**Duración estimada:** 5 minutos  
**Slides:** [02 · Definir los requisitos del evento](./02-mini-brief.html)  
**Materiales de apoyo:** [notas de la reunión](../../../workshop/es/event-meeting-notes.md) · [`requirements.md`](../../../workshop/es/requirements.md) · [Design System](../../../workshop/es/design-system.md) · [`design.md`](../../../workshop/es/design.md)

## Gancho · antes del slide 1

Antes de pedir a la inteligencia artificial que diseñe una pantalla, necesitamos responder una pregunta: ¿qué decisiones debe respetar? Esto es lo que convierte una idea abierta en un proyecto con alcance, experiencia y límites claros.

## Slide 1 · La conversación se convierte en el brief del evento

En la fase anterior, organizamos la conversación con el equipo del evento. Ahora utilizaremos la inteligencia artificial para encontrar dentro de ese material el alcance y las funcionalidades del proyecto.

Es un proceso sencillo y muy parecido a lo que ya hacemos en una reunión de briefing. La IA puede agrupar necesidades, destacar decisiones y señalar información que falta, pero el equipo sigue siendo responsable de confirmar qué forma parte realmente del proyecto.

En nuestro ejemplo, la comunidad WordPress organiza un evento sobre inteligencia artificial en Faro. Sin embargo, el sitio no debe hablar solamente con personas de la comunidad WordPress. También debe llegar al público general del Algarve y mostrar que el evento es relevante para su realidad.

**Transición:** Para dar foco a este brief, comenzamos con tres decisiones fundamentales.

## Slide 2 · Tres decisiones enfocan el evento

La primera decisión es el propósito: ¿por qué existe este evento? En este caso, queremos acercar la inteligencia artificial a los negocios y a la comunidad local.

La segunda es el público. Hablamos con propietarios de hoteles, restaurantes y agencias de viajes, además de profesionales con curiosidad que quizá no tengan experiencia técnica ni relación previa con WordPress.

La tercera es el tono de voz. La comunicación debe ser acogedora, práctica, clara y sin jerga. Las personas deben sentir que pueden participar en la conversación sobre IA, y no que el evento fue creado solamente para especialistas.

Estas tres decisiones no sirven únicamente para escribir los textos del sitio. Influyen en el enfoque visual, la jerarquía de la información y la manera en que el agente proyectará las pantallas.

**Transición:** Después de definir esta dirección, registramos el acuerdo para que no dependa solamente de la memoria del equipo.

## Slide 3 · Registra el acuerdo

Crear un archivo de requisitos no es una exigencia de la herramienta, pero es una práctica que me gusta adoptar. `requirements.md` funciona como una base compartida para el diseño y, más adelante, para la implementación.

Además del propósito, el público y la voz, puede registrar la experiencia esperada. ¿El sitio tendrá una sola página? ¿Tendrá varias páginas? ¿Alguna información se abrirá en modales? ¿Cuál será el flujo de navegación hasta la inscripción?

También debemos definir la plataforma prioritaria. ¿El proyecto estará pensado para escritorio y móvil, seguirá un enfoque mobile-first o atenderá a un contexto exclusivamente móvil? Esta elección puede cambiar la navegación y la cantidad de información mostrada en cada etapa.

El archivo debe registrar además límites, dudas y criterios de aceptación. Y hay una decisión técnica importante: estamos creando un sitio WordPress. Así, el agente de diseño ya trabaja con un contexto compatible con la plataforma que usaremos después.

**Transición:** Con los requisitos definidos, el diseño debe dejarnos dos artefactos reutilizables.

## Slide 4 · Dos artefactos orientan los borradores

El primer artefacto es el Design System. Reúne colores, tipografía, componentes y patrones de interfaz. Es el conjunto de reglas que aporta consistencia a las pantallas y evita que cada página parezca pertenecer a un proyecto diferente.

El segundo es `design.md`. Allí registramos las decisiones visuales y de interacción adoptadas durante la creación de los borradores.

Herramientas como Claude Design o Google Stitch no siempre producirán exactamente estos archivos de la manera que esperamos. Por eso, debemos solicitar los artefactos de forma explícita, revisar el resultado y completar lo que falte.

En este momento todavía no necesitamos decidir qué partes serán responsabilidad del tema y cuáles deberán convertirse en un plugin. Esa separación se resuelve mejor durante la implementación en Studio Code, donde podremos evaluar cada funcionalidad junto con el agente.

**Transición:** Ahora tenemos contexto suficiente para transformar los requisitos en una propuesta visual.

## Slide 5 · Claude Design convierte requisitos en borradores

Cerramos este ciclo con un `requirements.md` revisado. Este reúne el acuerdo sobre propósito, público, voz, experiencia, plataforma y límites.

El siguiente paso es llevar ese archivo, las referencias disponibles y el Design System a Claude Design. A partir de ese contexto, pedimos los primeros borradores del sitio, comparamos alternativas y registramos las decisiones aprobadas en `design.md`.

Claude Design es la herramienta que utilizaré en la demostración, pero el proceso también puede aplicarse con Google Stitch u otra solución de diseño asistido por IA. La herramienta puede cambiar; la calidad del contexto sigue siendo decisiva.

Esta primera generación no es el resultado final. Es una representación concreta de lo que entendemos hasta ahora, lista para revisarse antes de la construcción.

**Cierre:** Los requisitos claros dan dirección al diseño. En el próximo módulo, crearemos la base local del sitio para preparar la implementación.
