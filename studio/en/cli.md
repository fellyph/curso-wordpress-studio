---
source_id: cli
locale: en
counterpart: ../pt-BR/cli.md
workshop_track: advanced
stability: volatile
section_order: install|structure|auth|sites|blueprints|preview|wpcli|code|ui|help|workshop
---
# Studio CLI

## Installation

Studio CLI can be enabled in **Settings → Studio CLI** or installed through the official method. The npm package remains available:

```bash
npm install -g wp-studio
```

It is not a requirement for the four-hour workshop.

## Command structure

Use `studio <resource> <action>`. Resources cover sites, Blueprints, Preview, authentication, Sync, import/export, WP-CLI, and Studio Code. Options and aliases change; always confirm with `--help`.

## Authentication

```bash
studio auth login
studio auth logout
```

Login enables operations connected to the WordPress.com account. Do not store tokens in scripts or shared materials.

## Local sites

```bash
studio site list
studio site create
studio site start
studio site stop
studio site status
```

Use `--format=json` only when automation consumes the output.

## Blueprints

```bash
studio blueprint list
studio blueprint use quick-start --name "Workshop site"
```

Confirm the actual slug in the installed version.

## Preview Sites

```bash
studio preview create
studio preview update <host>
studio preview list
```

Preview requires authentication. The `--all` option can list Previews beyond the current site when available.

## WP-CLI

```bash
studio wp option get blogname
studio wp plugin list
```

The command runs WP-CLI in the site's context. Confirm the target before any write operation.

## Studio Code

```bash
studio code
studio code --path /path/to/site
studio code sessions list
studio code sessions resume latest
```

Slash commands such as `/preview` and `/publish` belong to the terminal.

## UI and aliases in 1.17

The 1.17 changelog records `studio ui` in release builds and aliases for help, version, and path. Keep these items marked `needs_local_test` until they are confirmed in a stable 1.17.x installation.

## Installed-version help

```bash
studio --version
studio --help
studio site --help
studio preview --help
```

This output is the operational source for flags and aliases.

## Workshop use

CLI appears only as an advanced reference. The core path uses the desktop interface to reduce prerequisites and the risk of running a command against the wrong site.
