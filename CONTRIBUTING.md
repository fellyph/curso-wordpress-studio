# Contributing / Como contribuir / Cómo contribuir

This repository treats Portuguese, English, and Spanish content as a single deliverable. Este repositório considera o conteúdo em português, inglês e espanhol uma única entrega.

Este repositorio considera el contenido en portugués, inglés y español una única entrega.

## Regra principal / Primary rule

Toda alteração editorial feita em um idioma deve incluir a atualização equivalente nos outros idiomas suportados no mesmo commit ou pull request.

Every editorial change made in one language must include the equivalent update in every other supported language in the same commit or pull request.

Cada cambio editorial realizado en un idioma debe incluir la actualización equivalente en todos los demás idiomas compatibles en el mismo commit o pull request.

## Mapa de contrapartes / Counterpart map

| Conteúdo / Content | Português | English | Español |
| --- | --- | --- | --- |
| Referências do Studio | `studio/pt-BR/<slug>.md` | `studio/en/<slug>.md` | `studio/es/<slug>.md` |
| Plano do workshop | `workshop/pt-BR/plan.md` | `workshop/en/plan.md` | `workshop/es/plan.md` |
| Slides dos vídeos | `locales["pt-BR"].modules` | `locales.en.modules` | `locales.es.modules` |
| Decks HTML | `slides/videos/pt-BR/` | `slides/videos/en/` | `slides/videos/es/` |

Arquivos multilíngues únicos, como `README.md`, `studio/README.md` e `slides/videos/README.md`, devem manter todas as seções atualizadas.

Single multilingual files such as `README.md`, `studio/README.md`, and `slides/videos/README.md` must keep every language section current.

Los archivos multilíngües únicos, como `README.md`, `studio/README.md` y `slides/videos/README.md`, deben mantener actualizadas todas sus secciones de idioma.

## Checklist

- [ ] Atualizei todas as contrapartes linguísticas afetadas.
- [ ] Mantive slugs, ordem, títulos estruturais, links e metadados equivalentes.
- [ ] Atualizei `studio/sources.json` quando uma fonte ou informação volátil mudou.
- [ ] Preservei os rótulos da interface e nomes de produto em inglês.
- [ ] Não alterei os arquivos originais em `ref/` sem solicitação explícita.
- [ ] Executei os validadores locais.

```sh
node scripts/validate-content.mjs
node scripts/validate-video-slides.mjs
```

Para verificar se o diff modificou todas as versões localizadas:

```sh
node scripts/validate-language-parity.mjs <base-commit>
```

The GitHub Actions workflow runs the same checks automatically and blocks a change that updates only part of a multilingual set.
