---
source_id: wordpress-com-mcp
locale: es
counterpart: ../en/wordpress-com-mcp.md
workshop_track: advanced
stability: volatile
section_order: distinction|requirements|endpoint|clients|permissions|tools|workflow|workshop
---
# WordPress.com MCP

## Diferencia con Studio MCP

WordPress.com MCP lee y mantiene sitios remotos conectados a una cuenta. Studio MCP controla entornos locales. No utilices los nombres como si fueran equivalentes.

## Requisitos

El acceso requiere una cuenta y un plan compatibles, MCP habilitado y autenticación OAuth. Confirma la elegibilidad y los permisos en el sitio desechable utilizado para la demostración.

## Endpoint

```text
https://public-api.wordpress.com/wpcom/v2/mcp/v1
```

Una respuesta HTTP 401 sin OAuth es esperada y no significa que el enlace esté roto.

## Clientes

Los clientes compatibles, incluidos Codex y Claude Code, pueden conectarse por HTTP y completar el login OAuth. No copies tokens en los archivos del workshop.

## Permisos

Las herramientas de solo lectura comienzan habilitadas; el acceso de escritura debe permitirse. Las operaciones de crear, actualizar y eliminar requieren una explicación, confirmación humana y `user_confirmed: true`. Revoca la conexión después de la prueba.

## Catálogo de herramientas

Las familias de herramientas cubren contenido, contexto del Site Editor, sitio y cuenta. Como los esquemas cambian, utiliza `action: list` y `action: describe` en la herramienta correspondiente antes de enviar datos.

## Flujo seguro

1. Lista los sitios sin escribir.
2. Elige un staging desechable.
3. Lee tema, presets, patterns, plugins y actividad.
4. Habilita solamente el acceso de escritura necesario.
5. Propón el contenido antes de crearlo.
6. Crea solamente borradores.
7. Comprueba `_content_warnings` y revisa en WP Admin.
8. Revoca la conexión.

## Uso en el workshop

WordPress.com MCP no forma parte de la sesión de cuatro horas. Conserva esta referencia para formación avanzada y para preparar una demostración independiente.
