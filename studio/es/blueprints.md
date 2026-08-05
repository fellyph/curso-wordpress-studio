---
source_id: blueprints
locale: es
counterpart: ../en/blueprints.md
workshop_track: facilitator
stability: stable
section_order: concept|workshop|gallery|create|example|compatibility|sharing
---
# Blueprints en WordPress Studio

## Qué es un Blueprint

Un Blueprint es una receta JSON para construir un sitio WordPress reproducible. Puede definir versiones, instalar temas y plugins, importar contenido, cambiar opciones y ejecutar pasos. Studio y WordPress Playground utilizan el mismo esquema base.

## Uso en el workshop

El facilitador utiliza Blueprints para reducir las variaciones del entorno. Los participantes seleccionan **Quick Start** en la interfaz y no necesitan escribir JSON. El Blueprint de fallback puede incluir el contenido, los patrones y los assets necesarios para continuar sin Studio Code.

## Opciones de la galería

- **Quick Start:** una base accesible parecida a un sitio WordPress.com Business.
- **Development:** herramientas como Query Monitor, Plugin Check, Theme Check y Create Block Theme.
- **Commerce:** WooCommerce y extensiones para proyectos de tienda.
- **Blueprints Gallery:** recetas adicionales para diseño, contenido, desarrollo y pruebas.

## Crear mediante la interfaz

1. Selecciona **Add site**.
2. Elige **Build a new site**.
3. Selecciona un Blueprint de la galería o **Choose blueprint file**.
4. Asigna un nombre al sitio y revisa las opciones avanzadas.
5. Confirma con **Add site**.

## Ejemplo mínimo

```json
{
  "$schema": "https://playground.wordpress.net/blueprint-schema.json",
  "preferredVersions": {
    "php": "8.3",
    "wp": "latest"
  },
  "steps": [
    {
      "step": "setSiteOptions",
      "options": {
        "blogname": "Workshop site"
      }
    }
  ]
}
```

Valida las recetas con el esquema y pruébalas en una instalación limpia antes de distribuirlas.

## Compatibilidad

La guía oficial presenta la matriz vigente en Studio 1.17.0. La mayoría de las funciones se comportan igual que en Playground; `features.networking` es una excepción porque la red permanece habilitada en Studio. Blueprints v2 está en desarrollo y la documentación indica que las recetas v1 continuarán siendo compatibles.

No reutilices la antigua matriz de Studio 1.6. Ejecuta una prueba real antes de publicar instrucciones sobre credenciales, directorios y overrides del runtime.

## Compartir

Distribuye una receta con el [botón Open in WordPress Studio](open-in-studio-button.md). Nunca incluyas tokens, secretos ni URLs privadas. Conserva una copia local para eventos con acceso inestable a internet.
