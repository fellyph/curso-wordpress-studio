---
source_id: current-state
locale: es
counterpart: ../en/current-state.md
workshop_track: facilitator
stability: volatile
section_order: baseline|requirements|models|changes|ui|conflicts|checklist
---
# Estado actual de WordPress Studio

## Referencia editorial

Este proyecto utiliza WordPress Studio 1.17.0 como versión estable de referencia. Se verificó el 4 de agosto de 2026 con la documentación pública y la release oficial.

## Requisitos que pueden bloquear a los participantes

- Studio Code requiere iniciar sesión en WordPress.com y guardar un método de pago.
- El uso gratuito durante la beta tiene un límite mensual por cuenta.
- Preview requiere iniciar sesión en WordPress.com, pero no un alojamiento de pago.
- Sync y WordPress.com MCP dependen de cuentas, planes y permisos específicos y están fuera del recorrido principal.

## Modelos documentados

El 3 de agosto de 2026, la página de Studio Code enumera Claude Sonnet 5 como modelo predeterminado, Claude Opus 4.8 y GPT 5.6 Sol. Esta lista es volátil: revisa el selector de modelos antes de cada evento y no la repitas en los slides principales.

## Cambios relevantes en 1.16 y 1.17

- Las imágenes pueden pegarse directamente en la conversación.
- Studio Code puede crear temas en blanco o child themes.
- Están disponibles las instrucciones globales del agente y mensajes más claros sobre los límites de uso.
- La creación de sitios acepta importaciones y el changelog registra compatibilidad con WXR/XML.
- Settings incorporó una vista Agentic UI con pestañas y un directorio predeterminado.
- La CLI añadió `studio ui` y aliases para ayuda, versión y ruta.
- Los sitios con Xdebug habilitado pueden mostrar un indicador específico.

## Interfaz clásica y Agentic UI

La documentación paso a paso todavía combina la interfaz clásica y funciones de Agentic UI. El recorrido principal utiliza el flujo estable disponible en todos los equipos. Los screenshots o instrucciones específicos de Agentic UI deben identificarse como una variación y verificarse en la versión del evento.

## Conflictos y pruebas pendientes

- El changelog 1.17 registra la importación WXR/XML, pero la página Import & Export todavía no la había incorporado cuando se realizó la verificación.
- La documentación de Preview no indica que el sitio local deba estar en ejecución. Pruébalo antes del evento.
- Las excepciones de credenciales, rutas y runtime de Blueprints deben verificarse antes de convertirse en instrucciones del workshop.

## Checklist de actualización

Siete días antes del evento, revisa el [changelog](https://developer.wordpress.com/docs/developer-tools/studio/changelog/), [Studio Code](https://developer.wordpress.com/docs/developer-tools/studio/studio-code/), el [roadmap](https://developer.wordpress.com/docs/developer-tools/studio/roadmap/) y las [funciones beta](https://developer.wordpress.com/docs/developer-tools/studio/roadmap/beta-features/). Cuarenta y ocho horas antes del evento, ejecuta el recorrido completo en 1.17.x y registra la prueba en `sources.json`.
