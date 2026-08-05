---
source_id: mcp-server
locale: es
counterpart: ../en/mcp-server.md
workshop_track: advanced
stability: volatile
section_order: distinction|start|capabilities|clients|permissions|workshop|verify
---
# MCP en WordPress Studio

## MCP local y MCP remoto

El servidor MCP de Studio permite que clientes de agentes controlen entornos locales. Es diferente de WordPress.com MCP, que lee y mantiene sitios remotos asociados a una cuenta.

## Iniciar el servidor

```bash
studio mcp
```

Confirma el comando y la configuración del cliente en la versión instalada. No expongas el servidor local a redes que no sean de confianza.

## Capacidades

La documentación y el changelog registran herramientas para listar y controlar sitios, ejecutar WP-CLI, crear un Preview y realizar operaciones push, pull, import y export. El catálogo y los esquemas son volátiles; inspecciona las herramientas realmente expuestas por el servidor.

## Clientes externos

Configura un cliente compatible para iniciar o conectarse al proceso local. Mantén explícitos el directorio y el sitio objetivo, y evita configuraciones globales que concedan acceso innecesario a todos los proyectos.

## Permisos y seguridad

- Comienza con operaciones de lectura.
- Confirma el sitio objetivo antes de cada escritura.
- Revisa comandos y argumentos.
- No utilices credenciales de producción ni de clientes.
- Detén el proceso y elimina la configuración temporal después de la demostración.

## Uso en el workshop

MCP local queda fuera de la agenda de cuatro horas. Puede aparecer en un apéndice del facilitador o en un curso avanzado independiente.

## Verificación obligatoria

Antes de una demostración, lista las herramientas, captura sus esquemas y ejecuta solamente acciones de lectura en un sitio desechable. Mantén push, pull, import y export marcados como dependientes del changelog hasta confirmarlos localmente.
