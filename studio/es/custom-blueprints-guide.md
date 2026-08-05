---
source_id: custom-blueprints-guide
locale: es
counterpart: ../en/custom-blueprints-guide.md
workshop_track: advanced
stability: beta
section_order: purpose|structure|process|compatibility|networking|v2|workshop|tests
---
# Cómo crear Blueprints personalizados

## Cuándo crear un Blueprint

Crea una receta personalizada cuando un equipo necesite reproducir versiones, plugins, temas, contenido y opciones. Para el workshop de principiantes, prefiere Quick Start y conserva el JSON como infraestructura del facilitador.

## Estructura recomendada

Un Blueprint normalmente contiene `$schema`, `preferredVersions`, `features` y `steps`. Utiliza recursos portátiles y URLs públicas estables; los archivos locales relativos deben viajar con la receta.

## Proceso de creación

1. Define el resultado reproducible.
2. Comienza con pocos pasos.
3. Valida con el esquema público.
4. Prueba en WordPress Playground.
5. Prueba en un sitio nuevo de Studio 1.17.x.
6. Documenta dependencias, assets, resultado esperado y recuperación.

## Compatibilidad con Studio 1.17

La guía oficial presenta su matriz como válida para Studio 1.17.0. La mayoría de las funciones siguen el comportamiento de Playground. No mantengas listas históricas reconstruidas a partir de versiones anteriores.

## Red y overrides

En Studio, `features.networking` permanece habilitado. El comportamiento de credenciales, directorios y runtime requiere una prueba local antes de describirse como regla, porque la interfaz puede aplicar los valores del sitio.

## Blueprints v2

Blueprints v2 está en desarrollo. La documentación indica que los Blueprints v1 continuarán siendo compatibles. No utilices funciones de v2 en el material principal antes de que existan una release estable y documentación equivalente.

## Uso en el workshop

El facilitador mantiene dos artefactos: un Blueprint Quick Start validado y un paquete de fallback que restaura el sitio inicial. Los participantes no editan el Blueprint durante la sesión de cuatro horas.

## Pruebas obligatorias

Confirma la creación online y offline, assets, rutas relativas, versiones, `landingPage`, contenido inicial, credenciales, dominio, runtime y recuperación después de un fallo. Registra la prueba en `sources.json`.
