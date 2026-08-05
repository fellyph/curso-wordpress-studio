---
source_id: agent-skills
locale: es
counterpart: ../en/agent-skills.md
workshop_track: challenge
stability: volatile
section_order: concept|catalog|location|installation|workshop|practice
---
# Agent Skills en WordPress Studio

## Qué son

Los Agent Skills son instrucciones especializadas que el agente lee antes de realizar un tipo de trabajo. Complementan el modelo con prácticas específicas de WordPress; no reemplazan la revisión, las pruebas ni los permisos.

## Catálogo

El catálogo cambia con frecuencia. Algunos ejemplos relevantes son Block Themes, Plugin Development, Block Development, REST API, Studio CLI y WP-CLI & Ops. Utiliza el [catálogo oficial](https://developer.wordpress.com/docs/agent-skills/) en lugar de fijar una lista en el workshop.

## Dónde se encuentran

Los skills del sitio se encuentran en `.agents/skills/`. Studio puede crear integraciones para clientes compatibles, como una ruta `.claude/skills`, pero `.agents/skills/` es la referencia del proyecto.

## Instalación

Utiliza **Settings → Skills** para la instalación global. Cuando la interfaz permita la configuración por sitio, utiliza **Edit site → Overview** para habilitar solamente lo necesario para ese proyecto.

## Uso en el workshop

El recorrido principal no requiere instalar skills. Los participantes experimentados pueden habilitar Block Themes para explorar `theme.json`, templates, patterns y style variations, o utilizar un skill de rendimiento y accesibilidad en un desafío opcional.

## Buenas prácticas

- Lee el `SKILL.md` antes de autorizar cambios.
- Instala solamente skills relevantes de fuentes de confianza.
- Solicita un plan y criterios de aceptación.
- Revisa archivos, comandos, screenshots y el resultado en WordPress.
- Trata la lista de skills disponibles como información volátil.
