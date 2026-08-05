---
source_id: preview-sites
locale: es
counterpart: ../en/preview-sites.md
workshop_track: core
stability: stable
section_order: purpose|requirements|lifecycle|limits|deployignore|safety|test
---
# Preview Sites en WordPress Studio

## Propósito

Un Preview Site es una captura pública y temporal del sitio local en una dirección `wp.build`. Permite revisar el sitio con clientes, colegas o participantes. No es alojamiento permanente ni incorpora automáticamente los cambios locales.

## Requisitos

Preview requiere una cuenta de WordPress.com conectada a Studio. La documentación actual no indica que el sitio deba estar en ejecución antes de crearlo; confirma ese comportamiento durante el smoke test de la versión utilizada en el evento.

## Crear, actualizar y cerrar

En la pestaña **Preview**, crea el Preview, asígnale un nombre claro y copia su URL. Después de realizar cambios locales, utiliza **Update** para reemplazar la captura. La interfaz también permite cambiar el nombre de un Preview, eliminar uno o eliminar todos los Previews de la cuenta.

## Límites actuales

- La URL es pública para cualquier persona que tenga el enlace.
- Un Preview caduca después de siete días sin una actualización.
- Una actualización reinicia el período de siete días.
- Cada cuenta puede mantener hasta diez Previews simultáneos.

## `.deployignore`

Studio envía `wp-content`. Un archivo `.deployignore` en la raíz del sitio excluye rutas con una sintaxis similar a `.gitignore`. Excluye cachés, archivos grandes, backups, secretos y todo lo innecesario.

## Seguridad en el workshop

Utiliza solamente contenido ficticio, propio o autorizado. No incluyas datos personales, credenciales ni material confidencial. El feedback se intercambia mediante la URL, pero todas las correcciones se realizan primero en el sitio local.

## Prueba previa al evento

Crea, cambia el nombre, actualiza y elimina un Preview de prueba. Confirma el login, los límites de la cuenta, el comportamiento con el sitio detenido, el acceso a la URL pública y la caducidad en la versión Studio 1.17.x utilizada para el workshop.
