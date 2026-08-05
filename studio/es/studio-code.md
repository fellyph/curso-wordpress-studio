---
source_id: studio-code
locale: es
counterpart: ../en/studio-code.md
workshop_track: core
stability: volatile
section_order: access|capabilities|workflow|inputs|commands|models|safety
---
# Studio Code

## Acceso y requisitos

Studio Code es el agente de programación integrado en WordPress Studio y Studio CLI. En la aplicación de escritorio, abre un sitio y selecciona la pestaña **Studio Code**.

El acceso actual requiere iniciar sesión en WordPress.com y guardar un método de pago para prevenir abusos. La función continúa siendo gratuita durante la beta, pero tiene un límite mensual compartido entre los sitios de la cuenta. Confirma el acceso y el uso restante antes del evento.

## Capacidades

Studio Code puede leer y editar los archivos del sitio, crear temas, plugins y contenido, ejecutar WP-CLI, validar bloques, capturar screenshots, usar Agent Skills y ayudar con Preview o la publicación. Estas capacidades pueden modificar archivos y la base de datos; el participante sigue siendo responsable del alcance, la revisión y la aceptación.

Desde 1.16, el agente puede crear temas en blanco o child themes. Desde 1.17, también puede recibir instrucciones globales y comunica de forma más consistente los errores relacionados con el límite mensual.

## Flujo recomendado

1. Proporciona contexto, el brief y los assets.
2. Pide al agente que inspeccione el sitio y proponga un plan.
3. Aprueba el plan antes de permitir cambios.
4. Ejecuta un paso pequeño cada vez.
5. Revisa el diff, el Site Editor, el front end y los screenshots.
6. Registra las decisiones pendientes y vuelve a revisar después de las correcciones.

## Archivos, imágenes y sesiones

En la aplicación de escritorio, arrastra archivos, usa el botón de adjuntar o pega una imagen directamente en la conversación. En la CLI, proporciona rutas. Las sesiones se conservan y pueden listarse, reanudarse o eliminarse con `studio code sessions`.

## Slash commands y superficies

Los comandos disponibles pueden cambiar. En el terminal, la documentación actual incluye `/browser`, `/login`, `/logout`, `/api-key`, `/model`, `/provider`, `/clear`, `/exit`, `/preview` y `/publish`. `/annotate`, `/need-for-speed`, `/rank-me-up` y `/taxonomist` están documentados para la aplicación de escritorio y el terminal.

`/preview` y `/publish` son slash commands del terminal. En la aplicación de escritorio, utiliza la interfaz o solicita la acción en la conversación; no enseñes estos dos comandos como atajos del escritorio.

## Modelos e información volátil

No fijes nombres de modelos en ejercicios ni slides. Consulta [Estado actual](current-state.md) y revisa el selector de modelos el día anterior al evento. Selecciona un modelo según el tipo de tarea: iteración rápida, arquitectura compleja o revisión independiente.

## Seguridad y fallback

No utilices producción durante el workshop. Limita los permisos, revisa los comandos y nunca incluyas secretos en prompts o assets. Si Studio Code no está disponible por problemas de login, método de pago, límite de uso o acceso a la red, utiliza el sitio inicial proporcionado y continúa en el Site Editor.
