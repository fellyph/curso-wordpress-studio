---
source_id: open-in-studio-button
locale: es
counterpart: ../en/open-in-studio-button.md
workshop_track: facilitator
stability: stable
section_order: purpose|inputs|behavior|workshop|safety
---
# Botón Open in WordPress Studio

## Propósito

El botón **Open in WordPress Studio** inicia la creación de un sitio local a partir de un Blueprint compartido. Es útil en materiales del workshop, archivos README, vídeos y páginas de recursos.

## Entradas aceptadas

El generador oficial acepta una URL pública de Blueprint, JSON sin procesar o JSON codificado en Base64.

## Comportamiento

Si Studio está instalado, el enlace abre el flujo de creación. En caso contrario, el participante es enviado a la página de descarga y debe volver a abrir el enlace después de la instalación.

## Uso en el workshop

El facilitador prepara un botón para el sitio inicial de fallback. Prueba el enlace en macOS y Windows y proporciona un archivo local equivalente por si falla la red.

## Seguridad

Valida el Blueprint antes de publicarlo. No incluyas secretos, tokens, credenciales ni URLs privadas. Utiliza solamente plugins, temas, contenido y assets que puedan redistribuirse.
