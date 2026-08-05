---
source_id: blueprints
locale: en
counterpart: ../pt-BR/blueprints.md
workshop_track: facilitator
stability: stable
section_order: concept|workshop|gallery|create|example|compatibility|sharing
---
# Blueprints in WordPress Studio

## What a Blueprint is

A Blueprint is a JSON recipe for building a reproducible WordPress site. It can define versions, install themes and plugins, import content, change options, and run steps. Studio and WordPress Playground use the same underlying schema.

## Workshop use

The facilitator uses Blueprints to reduce environment variation. Participants select **Quick Start** in the interface and do not need to write JSON. The fallback Blueprint can include the content, patterns, and assets needed to continue without Studio Code.

## Gallery options

- **Quick Start:** an accessible foundation similar to a WordPress.com Business site.
- **Development:** tools such as Query Monitor, Plugin Check, Theme Check, and Create Block Theme.
- **Commerce:** WooCommerce and extensions for store projects.
- **Blueprints Gallery:** additional recipes for design, content, development, and testing.

## Create through the interface

1. Select **Add site**.
2. Choose **Build a new site**.
3. Select a gallery Blueprint or **Choose blueprint file**.
4. Name the site and review advanced options.
5. Confirm with **Add site**.

## Minimal example

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

Validate recipes against the schema and test them on a clean installation before distribution.

## Compatibility

The official guide now describes the matrix as of Studio 1.17.0. Most features work as they do in Playground; `features.networking` is an exception because networking remains enabled in Studio. Blueprints v2 is in development, and the documentation states that v1 recipes will remain supported.

Do not reuse the old Studio 1.6 matrix. Run a real test before publishing instructions about credential, directory, and runtime overrides.

## Sharing

Distribute a recipe with the [Open in WordPress Studio button](open-in-studio-button.md). Never include tokens, secrets, or private URLs. Keep a local copy for events with unstable internet access.

