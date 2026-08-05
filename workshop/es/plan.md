---
locale: es
counterpart: ../en/plan.md
duration_minutes: 240
baseline_studio: 1.17.x
section_order: objective|outcomes|prerequisites|agenda|brief|exercises|challenges|fallback|guardrails|facilitator|success|slides|sources
---
# Del brief al Preview: workshop de WordPress Studio

## Objetivo y público

Al finalizar, quienes crean un sitio por primera vez y los participantes con experiencia previa deben ser capaces de transformar una idea acotada en un sitio WordPress local, revisar decisiones humanas y compartir un Preview, porque Studio integra creación, inspección y feedback en un flujo seguro.

Todo el grupo sigue un único recorrido para principiantes. Quien termina antes elige un desafío opcional sin dividir la facilitación en dos clases.

## Resultados y límites

Cada participante termina con:

- su propio mini-brief;
- un sitio de una página en Studio;
- una primera versión construida con Studio Code o con el fallback manual;
- ajustes verificados en el Site Editor y en un viewport mobile;
- una ronda de feedback registrada y aplicada;
- un Preview público actualizado.

Fuera del recorrido principal: uso del terminal, código personalizado obligatorio, plugins, depuración técnica, práctica de Sync, Liberate, MCP, un plan de alojamiento de pago y cualquier acción en producción.

## Requisitos y preflight

Enviar siete días antes del evento:

- instalar WordPress Studio 1.17.x en macOS, Windows o Linux;
- confirmar el permiso para ejecutar la aplicación y confiar en su certificado local;
- crear y conectar una cuenta de WordPress.com;
- confirmar el acceso a Studio Code, un método de pago guardado y uso mensual disponible;
- llevar solamente textos, imágenes y assets de marca propios, ficticios o autorizados;
- actualizar el navegador.

Durante el check-in, cada persona crea un sitio de prueba, abre WP Admin y confirma que la pestaña Preview está disponible. Quien no tenga acceso a Studio Code recibe inmediatamente el recorrido de fallback.

## Agenda de cuatro horas

| Tiempo | Minutos | Bloque | Formato y resultado |
| --- | ---: | --- | --- |
| 00:00–00:15 | 15 | Mostrar el resultado | Demostración breve, flujo local/remoto y guardrails. |
| 00:15–00:40 | 25 | Crear el mini-brief | Trabajo individual; brief completo y acotado. |
| 00:40–01:05 | 25 | Crear el sitio | Quick Start, orientación en Studio y primera visita al Site Editor. |
| 01:05–01:50 | 45 | Construir la primera versión | Plan de Studio Code aprobado y sitio de una página. |
| 01:50–02:00 | 10 | Pausa | Descanso y recuperación técnica. |
| 02:00–02:30 | 30 | Inspeccionar y ajustar | Site Editor, contenido, estilos, títulos y mobile. |
| 02:30–03:00 | 30 | Aplicar Annotate | Feedback visual específico, diff revisado y screenshots. |
| 03:00–03:30 | 30 | Compartir un Preview | URL creada y dos comentarios de otra persona recibidos. |
| 03:30–03:45 | 15 | Corregir y actualizar | Feedback aplicado localmente y Preview reemplazado. |
| 03:45–04:00 | 15 | Cerrar y ampliar el ciclo | Handoff, Automattic for Agencies, Agent Skills y MCP sin conexión remota. |

## Mini-brief del participante

El brief debe caber en una página y responder:

1. ¿Cuál es el propósito del sitio?
2. ¿Para qué público específico está pensado?
3. ¿Cuál es la única acción principal o CTA?
4. ¿Qué tono debe orientar los textos y elementos visuales?
5. ¿Cuáles son los tres mensajes esenciales?
6. ¿Qué cuatro o cinco secciones componen la página?
7. ¿Qué textos, imágenes y assets de marca están disponibles y autorizados?

Alcance predeterminado: un hero, dos o tres secciones de contenido y una CTA final. Sin tienda, login, formularios con datos reales, integraciones externas ni varias páginas.

## Ejercicios y resultados observables

### 1. Mostrar el ciclo completo

**Duración:** 15 minutos. **Entrada:** el sitio terminado del facilitador. **Resultado observable:** los participantes pueden señalar dónde suceden la ideación, construcción, revisión y publicación compartida.

Muestra primero el sitio terminado, un pequeño cambio con Annotate y el Preview actualizado. No enseñes comandos en esta etapa. Explica que el entorno local es el espacio de construcción y que Preview es una copia pública y temporal.

### 2. Crear un brief individual

**Duración:** 25 minutos. **Entrada:** hoja de mini-brief y paquete de assets opcional. **Resultado observable:** las siete preguntas respondidas y el alcance de una página aprobado por otra persona.

Forma parejas solamente para la revisión. Cada participante sigue siendo responsable de su propio proyecto. Si el alcance tiene más de una CTA principal, más de cinco secciones o depende de una integración, redúcelo antes de abrir Studio.

### 3. Crear y comprender el sitio

**Duración:** 25 minutos. **Entrada:** Studio 1.17.x y una cuenta conectada. **Resultado observable:** sitio Quick Start en ejecución, WP Admin y Site Editor abiertos, y ubicación de los archivos identificada.

Utiliza **Add site → Build a new site → Quick Start**. No cambies PHP, WordPress ni el runtime. El facilitador muestra dónde iniciar o detener el sitio y cómo abrir WP Admin, Site Editor, Studio Code y Preview.

### 4. Planificar y construir con Studio Code

**Duración:** 45 minutos. **Entrada:** brief, assets y sitio Quick Start. **Resultado observable:** plan breve aprobado y primera versión con cuatro o cinco secciones.

Prompt base:

```text
Lee el brief y los assets antes de editar. Inspecciona este sitio y propón
un plan breve para una página con cuatro o cinco secciones y una CTA.
Utiliza bloques nativos, presets del tema y una estructura editable en el Site Editor.
Conserva la accesibilidad, el comportamiento responsive y la jerarquía de títulos.
No implementes nada antes de que apruebe el plan.
```

Después de la aprobación, ejecuta por etapas. Revisa el diff y solicita screenshots de desktop y mobile. No crees un plugin ni añadas dependencias sin necesidad.

### 5. Inspeccionar en el Site Editor

**Duración:** 30 minutos. **Entrada:** primera versión. **Resultado observable:** todos los bloques son editables, existe un único H1, la CTA funciona en desktop y mobile, y no queda contenido de ejemplo.

Cada persona cambia manualmente al menos un texto y un estilo. Comprueba contraste, orden de lectura, enlaces, texto alternativo, espaciado y navegación por teclado. Registra una decisión que el agente no deba tomar por sí solo.

### 6. Aplicar feedback con Annotate

**Duración:** 30 minutos. **Entrada:** sitio revisado. **Resultado observable:** dos solicitudes específicas aplicadas y el diff y los screenshots aceptados de forma consciente.

Selecciona dos elementos, describe el resultado esperado y la restricción, y envía las anotaciones juntas. Ejemplos: reducir la altura del hero sin ocultar la CTA; aumentar el contraste con un preset existente. Rechaza solicitudes vagas como “hazlo más bonito”.

### 7. Crear un Preview y revisar en pareja

**Duración:** 30 minutos. **Entrada:** sitio local sin datos confidenciales. **Resultado observable:** URL `wp.build` creada y dos comentarios objetivos recibidos.

Asigna un nombre al Preview, compártelo con otra persona y revisa la claridad del propósito, la confianza para hacer clic en la CTA, la lectura mobile y el contenido ausente. Recuerda que la URL es pública, caduca y no incorpora automáticamente los cambios locales.

### 8. Corregir y actualizar

**Duración:** 15 minutos. **Entrada:** feedback recibido. **Resultado observable:** al menos una corrección local y un Preview actualizado.

Aplica solamente el feedback que corresponde al brief, vuelve a revisar en el Site Editor y utiliza **Update** en el Preview.

### 9. Cerrar el ciclo y conectarlo con la operación de la agencia

**Duración:** 15 minutos. **Entrada:** recorrido completo y materiales de Automattic for Agencies. **Resultado observable:** los participantes explican el handoff y distinguen los beneficios del programa, Agent Skills y MCP, incluidos sus límites de permisos.

En los primeros cinco minutos, diferencia Preview, exportación, Sync y alojamiento sin publicar ni tocar producción. Después, presenta los dos vídeos de extensión. Relaciona WordPress.com y Jetpack con diferentes necesidades del portafolio; trata los porcentajes como beneficios máximos sujetos a las reglas vigentes. Explica que Skills orientan al agente y MCP conecta sistemas autorizados. No configures MCP, compartas datos de clientes ni realices escrituras remotas.

## Desafíos opcionales

Quien termine antes un bloque puede elegir uno:

1. Crear una style variation o explorar `theme.json` sin eliminar la capacidad de edición.
2. Ejecutar auditorías de rendimiento, SEO y accesibilidad, corrigiendo un problema reproducible.
3. Crear `.deployignore`, explicar cada exclusión y revisar lo que se enviará a Preview.

El desafío nunca modifica el horario de la pareja ni se convierte en requisito para el resultado principal.

## Fallback manual

El facilitador proporciona un Blueprint o una importación del sitio inicial, patterns para las cuatro secciones, contenido de ejemplo reemplazable y assets locales. Si Studio Code falla por login, método de pago, límite de uso o acceso a la red:

1. abre el sitio inicial proporcionado;
2. elige los patterns en el Site Editor;
3. reemplaza textos, imágenes, colores y CTA según el brief;
4. realiza la misma revisión manual, usa Annotate cuando esté disponible y crea el Preview;
5. si Preview también falla, intercambia la revisión en persona y demuestra cómo compartir en el equipo del facilitador.

El fallback debe llegar igualmente a sitio local + Preview; solamente cambia la automatización.

## Guardrails

- La IA propone y ejecuta; la persona define el alcance, aprueba y acepta.
- Solicita un plan antes de cambios grandes.
- Revisa diffs, comandos, Site Editor, front end y screenshots.
- Utiliza solamente contenido ficticio, propio o autorizado.
- Preview es público y temporal.
- No utilices producción, Sync, escritura MCP, DNS, eliminación remota ni bases de datos de clientes.
- No compartas contraseñas, tokens, datos personales, logs ni backups.
- El contenido generado necesita revisión factual, editorial, visual y de accesibilidad.

## Preparación del facilitador

### Una semana antes

- Revisa el changelog, Studio Code, Preview y `studio/current-state.md`.
- Fija Studio 1.17.x en los equipos de demostración.
- Envía las instrucciones de preflight y un formulario de bloqueos técnicos.
- Prepara assets con licencia, un brief de ejemplo y el sitio terminado.
- Valida el Blueprint o la importación, SSL y el fallback manual.

### Cuarenta y ocho horas antes

- Ejecuta el recorrido completo en PT-BR, EN y ES sin conversaciones almacenadas en caché.
- Confirma login, método de pago, límite de uso y modelos disponibles.
- Crea, cambia el nombre, actualiza y elimina un Preview.
- Prueba el comportamiento con el sitio detenido y condiciones de red inestable.
- Guarda localmente los assets, la importación y los screenshots.

### El día del evento

- Confirma versión, login y Preview antes de comenzar.
- Forma parejas de revisión sin compartir cuentas.
- Identifica inmediatamente a quienes necesitan el fallback.
- Muestra el tiempo de cada bloque y protege la pausa.
- Elimina los Previews y datos temporales después del evento.

## Criterios de éxito

El workshop tiene éxito cuando cada participante puede:

1. explicar el propósito, el público y la CTA de su sitio;
2. mostrar un sitio local de una página sin contenido de ejemplo;
3. identificar un cambio aceptado y una decisión mantenida bajo responsabilidad humana;
4. editar contenido en el Site Editor;
5. explicar la diferencia entre el sitio local y Preview;
6. compartir un Preview y aplicar feedback verificable;
7. afirmar que Preview no es alojamiento ni publicación en producción.

## Mapa de migración de los 38 slides

| Slide | Función actual | Decisión | Uso futuro |
| ---: | --- | --- | --- |
| 1 | Título orientado a agencias | Reescribir | “Del brief al Preview”, público mixto, cuatro horas. |
| 2 | Entregables técnicos | Reescribir | Brief, sitio local, revisión y Preview. |
| 3 | Agenda antigua | Reescribir | Utilizar la agenda de 240 minutos de este plan. |
| 4 | Formato y parejas | Reescribir | Proyecto individual, revisión en pareja y fallback. |
| 5 | Resultado primero | Reescribir | Conservar la apertura; eliminar plugin y publicación. |
| 6 | Mapa de herramientas | Reescribir | Mostrar solamente Studio, Studio Code, Site Editor, Annotate y Preview. |
| 7 | Blueprint Development | Reescribir | Quick Start para participantes; fallback del facilitador. |
| 8 | Local y remoto | Mantener | Actualizar ejemplos y enfatizar que Preview es público. |
| 9 | Agent Skills | Mover al apéndice | Desafío opcional para participantes experimentados. |
| 10 | Studio CLI | Mover al apéndice | Referencia avanzada; no demostrar. |
| 11 | Estrategia de modelos | Mover al apéndice | Nota volátil para el facilitador. |
| 12 | Cliente Raiz Urbana | Reescribir | Plantilla para las siete preguntas del brief individual. |
| 13 | Ejercicio de plugin | Eliminar | Ningún plugin en el recorrido principal. |
| 14 | Separador de landing page | Reescribir | “De la idea a la primera versión”. |
| 15 | Estructura del prompt | Reescribir | Prompt base del brief individual. |
| 16 | Checkpoint de landing page | Reescribir | Checklist observable de Site Editor y mobile. |
| 17 | Separador de Annotate | Mantener | Actualizar numeración y duración. |
| 18 | Laboratorio de Annotate | Reescribir | Dos solicitudes específicas, diff y screenshots. |
| 19 | Plugin guiado por especificación | Eliminar | Fuera del workshop de cuatro horas. |
| 20 | Depuración, rendimiento y SEO | Mover al apéndice | Desafío opcional sin error controlado. |
| 21 | Separador de Preview | Mantener | Actualizar numeración. |
| 22 | Preview entre parejas | Reescribir | Dos criterios de feedback vinculados al brief. |
| 23 | Límites de Preview | Mantener | Actualizar fuente, nombres y prueba previa al evento. |
| 24 | Separador de Sync | Mover al apéndice | Próximos pasos, no práctica. |
| 25 | Sync no fusiona | Mover al apéndice | Guardrail para formación avanzada. |
| 26 | Flujo seguro de Sync | Mover al apéndice | Material avanzado para el facilitador. |
| 27 | Riesgos de Sync | Mover al apéndice | Material avanzado para el facilitador. |
| 28 | Plan de Sync | Eliminar | Reemplazar por corrección y Preview Update. |
| 29 | Liberate | Mover al apéndice | Curso avanzado independiente. |
| 30 | WordPress.com MCP | Mover al apéndice | Curso avanzado independiente. |
| 31 | Requisitos | Reescribir | 1.17.x, SSL, cuenta, Studio Code y fallback. |
| 32 | Requisitos de cuenta | Reescribir | Login, método de pago, límite de uso y Preview sin alojamiento de pago. |
| 33 | Infraestructura | Mover al apéndice | Checklist del facilitador y paquete de fallback. |
| 34 | Checklist del facilitador | Mover al apéndice | Utilizar la preparación de siete días, 48 horas y el día del evento. |
| 35 | Guardrails | Reescribir | Aplicar los ocho guardrails de este plan. |
| 36 | Afirmaciones que deben evitarse | Reescribir | Enfocar Studio Code, Preview, autoría y producción. |
| 37 | Criterios de éxito | Reescribir | Utilizar los siete criterios observables. |
| 38 | Próximos pasos | Reescribir | Actualizar Preview, exportar y elegir alojamiento después del workshop. |

## Fuentes del plan

- [WordPress Studio](https://developer.wordpress.com/docs/developer-tools/studio/)
- [Studio Code](https://developer.wordpress.com/docs/developer-tools/studio/studio-code/)
- [Preview Sites](https://developer.wordpress.com/docs/developer-tools/studio/preview-sites/)
- [Blueprints](https://developer.wordpress.com/docs/developer-tools/studio/blueprints/)
- [Changelog](https://developer.wordpress.com/docs/developer-tools/studio/changelog/)

Utiliza `studio/sources.json` para las fechas, el estado de estabilidad y los conflictos oficiales.
