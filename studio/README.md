# WordPress Studio workshop references

This directory contains concise, workshop-oriented references for WordPress Studio in Brazilian Portuguese and English. They summarize official documentation and record workshop-specific cautions; they are not a replacement for the official docs.

Esta pasta contém referências concisas e orientadas ao workshop sobre o WordPress Studio em português do Brasil e inglês. Elas resumem a documentação oficial e registram cuidados específicos do treinamento; não substituem a documentação oficial.

## Editorial baseline / Base editorial

- Stable baseline / versão estável de referência: **WordPress Studio 1.17.0**.
- Verified / verificado em: **2026-08-04**.
- The locally installed `1.18.0-dev79` build is not an authoritative source for the core workshop.
- A versão local `1.18.0-dev79` não é fonte autoritativa para o núcleo do workshop.
- Volatile facts live in [`current-state.md`](pt-BR/current-state.md) and [`current-state.md`](en/current-state.md).
- Canonical source metadata lives in [`sources.json`](sources.json).
- In `sources.json`, `official_last_updated` is the most recent update date among an entry's `official_urls`; page-specific dates remain discoverable at the sources. `tested_with_studio: null` means the editorial claim is documented but still awaits the event-build smoke test.

## Reference index / Índice de referências

| Reference | Track | Stability | Português | English |
| --- | --- | --- | --- | --- |
| Overview | `core` | `stable` | [Visão geral](pt-BR/overview.md) | [Overview](en/overview.md) |
| Sites | `core` | `stable` | [Sites](pt-BR/sites.md) | [Sites](en/sites.md) |
| Studio Code | `core` | `volatile` | [Studio Code](pt-BR/studio-code.md) | [Studio Code](en/studio-code.md) |
| Preview Sites | `core` | `stable` | [Preview Sites](pt-BR/preview-sites.md) | [Preview Sites](en/preview-sites.md) |
| SSL | `core` | `stable` | [SSL](pt-BR/ssl.md) | [SSL](en/ssl.md) |
| FAQ | `core` | `volatile` | [Perguntas frequentes](pt-BR/faq.md) | [FAQ](en/faq.md) |
| Current state | `facilitator` | `volatile` | [Estado atual](pt-BR/current-state.md) | [Current state](en/current-state.md) |
| Blueprints | `facilitator` | `stable` | [Blueprints](pt-BR/blueprints.md) | [Blueprints](en/blueprints.md) |
| Import and export | `facilitator` | `stable` | [Importar e exportar](pt-BR/import-export.md) | [Import and export](en/import-export.md) |
| Open in Studio | `facilitator` | `stable` | [Botão Open in Studio](pt-BR/open-in-studio-button.md) | [Open in Studio button](en/open-in-studio-button.md) |
| Agent Skills | `challenge` | `volatile` | [Agent Skills](pt-BR/agent-skills.md) | [Agent Skills](en/agent-skills.md) |
| Debugging | `challenge` | `stable` | [Depuração](pt-BR/debugging.md) | [Debugging](en/debugging.md) |
| Studio CLI | `advanced` | `volatile` | [Studio CLI](pt-BR/cli.md) | [Studio CLI](en/cli.md) |
| Custom Blueprints | `advanced` | `beta` | [Blueprints personalizados](pt-BR/custom-blueprints-guide.md) | [Custom Blueprints](en/custom-blueprints-guide.md) |
| MCP in Studio | `advanced` | `volatile` | [MCP no Studio](pt-BR/mcp-server.md) | [MCP in Studio](en/mcp-server.md) |
| Studio Sync | `advanced` | `stable` | [Studio Sync](pt-BR/sync.md) | [Studio Sync](en/sync.md) |
| WordPress.com MCP | `advanced` | `volatile` | [MCP do WordPress.com](pt-BR/wordpress-com-mcp.md) | [WordPress.com MCP](en/wordpress-com-mcp.md) |
| Studio Assistant legacy note | `advanced` | `volatile` | [Referência legada](pt-BR/assistant.md) | [Legacy reference](en/assistant.md) |

## Track policy / Política de trilhas

- `core`: required for the four-hour beginner path / necessário para o percurso iniciante de quatro horas.
- `challenge`: optional stretch work / desafio opcional.
- `facilitator`: setup, fallback, and maintenance / preparação, fallback e manutenção.
- `advanced`: outside the core agenda / fora da agenda principal.

## Terminology / Terminologia

Product names, commands, paths, and visible interface labels stay in English. Portuguese explanatory prose follows the WordPress pt-BR glossary: **bloco** for “block”, **configurações** for “settings”, **rascunho** for “draft”, and **pré-visualização** only for the generic noun. **Preview Sites**, **Studio Code**, **Site Editor**, **Agent Skills**, and **Quick Start** remain product or interface names.

## Maintenance workflow / Fluxo de manutenção

1. Review the official changelog and Studio Code docs seven days before each event.
2. Update `sources.json` before changing facts in localized files.
3. Keep the same `section_order` and heading-level sequence in both locales.
4. Mark unresolved documentation conflicts as `official_conflict`; mark behavior that requires a real 1.17.x smoke test as `needs_local_test`.
5. Run `node scripts/validate-content.mjs` after every edit. Use `--check-links` when network access is available.
6. Smoke-test the complete participant flow on Studio 1.17.x 48 hours before the event, then record `tested_with_studio` and `verified_on`.
