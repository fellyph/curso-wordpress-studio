---
source_id: cli
locale: es
counterpart: ../en/cli.md
workshop_track: advanced
stability: volatile
section_order: install|structure|auth|sites|blueprints|preview|wpcli|code|ui|help|workshop
---
# Studio CLI

## Instalación

Studio CLI puede habilitarse en **Settings → Studio CLI** o instalarse mediante el método oficial. El paquete npm continúa disponible:

```bash
npm install -g wp-studio
```

No es un requisito del workshop de cuatro horas.

## Estructura de comandos

Utiliza `studio <resource> <action>`. Los recursos cubren sitios, Blueprints, Preview, autenticación, Sync, importación/exportación, WP-CLI y Studio Code. Las opciones y los aliases cambian; confirma siempre con `--help`.

## Autenticación

```bash
studio auth login
studio auth logout
```

El login habilita operaciones conectadas con la cuenta de WordPress.com. No guardes tokens en scripts ni materiales compartidos.

## Sitios locales

```bash
studio site list
studio site create
studio site start
studio site stop
studio site status
```

Utiliza `--format=json` solamente cuando una automatización consuma el resultado.

## Blueprints

```bash
studio blueprint list
studio blueprint use quick-start --name "Workshop site"
```

Confirma el slug real en la versión instalada.

## Preview Sites

```bash
studio preview create
studio preview update <host>
studio preview list
```

Preview requiere autenticación. La opción `--all` puede listar Previews fuera del sitio actual cuando esté disponible.

## WP-CLI

```bash
studio wp option get blogname
studio wp plugin list
```

El comando ejecuta WP-CLI en el contexto del sitio. Confirma el objetivo antes de cualquier operación de escritura.

## Studio Code

```bash
studio code
studio code --path /path/to/site
studio code sessions list
studio code sessions resume latest
```

Los slash commands como `/preview` y `/publish` pertenecen al terminal.

## UI y aliases en 1.17

El changelog 1.17 registra `studio ui` en las releases y aliases para ayuda, versión y ruta. Mantén estos elementos marcados como `needs_local_test` hasta que se confirmen en una instalación estable de 1.17.x.

## Ayuda de la versión instalada

```bash
studio --version
studio --help
studio site --help
studio preview --help
```

Este resultado es la fuente operativa para flags y aliases.

## Uso en el workshop

La CLI aparece solamente como referencia avanzada. El recorrido principal utiliza la interfaz de escritorio para reducir requisitos y el riesgo de ejecutar un comando en el sitio equivocado.
