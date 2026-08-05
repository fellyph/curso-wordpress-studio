---
source_id: import-export
locale: es
counterpart: ../en/import-export.md
workshop_track: facilitator
stability: stable
section_order: formats|new-site|existing-site|export|workshop|conflict
---
# Importar y exportar en WordPress Studio

## Formatos

Para crear un sitio a partir de un backup, la documentación enumera `.tar.gz`, `.zip`, `.wpress`, exportaciones de Local y exportaciones de WordPress Playground. Un sitio existente también puede recibir un archivo `.sql`.

El changelog 1.17 añade la importación de exportaciones de WordPress en formato WXR/XML. Cuando se verificó este proyecto, la página específica de Import & Export todavía no había incorporado esa opción.

## Crear un sitio desde una importación

Selecciona **Add site**, elige la opción de importación, proporciona el archivo, asigna un nombre al sitio y revisa sus ajustes. Studio 1.17 también integra las importaciones en el nuevo flujo de creación de sitios.

## Actualizar un sitio existente

En la pestaña **Import / Export**, arrastra o selecciona el archivo y confirma. ZIP o TAR pueden reemplazar contenido local; SQL modifica la base de datos existente. Exporta el sitio antes de probar un archivo desconocido.

## Exportar

**Export entire site** crea un archivo del sitio; **Export database** crea SQL. Las exportaciones del sitio excluyen `.git` y `node_modules`. Revisa el archivo antes de enviarlo a otra persona.

## Uso en el workshop

Importar y exportar no forman parte del recorrido de los participantes. El facilitador utiliza una importación o un Blueprint para recuperar rápidamente el sitio inicial y conserva una exportación del resultado final como fallback offline.

## Conflicto en la documentación oficial

WXR/XML permanece marcado como `official_conflict` hasta que la página Import & Export y el changelog coincidan. Demuéstralo solamente después de probarlo en la versión 1.17.x del evento.
