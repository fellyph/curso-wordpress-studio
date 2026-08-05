# Contributing / Como contribuir

This repository treats Portuguese and English content as a single deliverable. Este repositório considera o conteúdo em português e inglês uma única entrega.

## Regra principal / Primary rule

Toda alteração editorial feita em um idioma deve incluir a atualização equivalente nos outros idiomas suportados no mesmo commit ou pull request.

Every editorial change made in one language must include the equivalent update in every other supported language in the same commit or pull request.

## Mapa de contrapartes / Counterpart map

| Conteúdo / Content | Português | English |
| --- | --- | --- |
| Referências do Studio | `studio/pt-BR/<slug>.md` | `studio/en/<slug>.md` |
| Plano do workshop | `workshop/pt-BR/plan.md` | `workshop/en/plan.md` |
| Slides dos vídeos | `locales["pt-BR"].modules` em `slides/videos/shared/content.js` | `locales.en.modules` no mesmo arquivo |
| Decks HTML | `slides/videos/pt-BR/` | `slides/videos/en/` |

Arquivos bilíngues únicos, como `README.md`, `studio/README.md` e `slides/videos/README.md`, devem manter as duas seções atualizadas.

Single bilingual files such as `README.md`, `studio/README.md`, and `slides/videos/README.md` must keep both language sections current.

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

Para verificar se o diff modificou os dois lados de cada par:

```sh
node scripts/validate-bilingual-changes.mjs <base-commit>
```

The GitHub Actions workflow runs the same checks automatically and blocks a change that updates only one side of a bilingual pair.
