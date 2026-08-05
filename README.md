# WordPress Studio Workshop

Materiais bilíngues para um workshop presencial de quatro horas sobre o processo de criação de um site com WordPress Studio — da definição do brief à construção local, revisão e compartilhamento por Preview.

Bilingual materials for a four-hour, in-person workshop covering the website creation process with WordPress Studio—from defining the brief to local construction, review, and sharing through Preview.

## Conteúdo / Contents

| Pasta / Folder | Conteúdo / Contents |
| --- | --- |
| [`workshop/`](./workshop/) | Planos equivalentes do workshop em português e inglês / Equivalent Portuguese and English workshop plans |
| [`studio/`](./studio/) | Base local bilíngue de referências do WordPress Studio / Bilingual local WordPress Studio reference library |
| [`slides/videos/`](./slides/videos/) | Nove microaulas HTML por idioma, com cinco slides cada / Nine HTML micro-lessons per language, with five slides each |
| [`ref/`](./ref/) | Apresentação e PDF originais preservados como referência / Original presentation and PDF preserved as references |
| [`scripts/`](./scripts/) | Validação de conteúdo, paridade linguística e slides / Content, language parity, and slide validation |

## Contribuição e paridade bilíngue / Contribution and bilingual parity

Toda atualização de conteúdo em um idioma deve incluir a atualização equivalente nos demais idiomas suportados. As regras completas estão em [`AGENTS.md`](./AGENTS.md), e o fluxo para contribuições humanas está em [`CONTRIBUTING.md`](./CONTRIBUTING.md).

Every content update in one language must include the equivalent update in every other supported language. Complete project rules are in [`AGENTS.md`](./AGENTS.md), and the human contribution workflow is in [`CONTRIBUTING.md`](./CONTRIBUTING.md).

O GitHub Actions executa validações estruturais e também compara o diff para impedir que apenas um lado de um par PT-BR/EN seja alterado.

GitHub Actions runs structural checks and compares the diff to prevent changes that update only one side of a PT-BR/EN pair.

## Slides HTML / HTML slides

Abra [`slides/videos/index.html`](./slides/videos/index.html) no navegador para acessar os 18 decks. Cada apresentação oferece navegação por setas, atalhos de teclado, gestos, notas do apresentador, animações e suporte a movimento reduzido.

Open [`slides/videos/index.html`](./slides/videos/index.html) in a browser to access all 18 decks. Every presentation supports arrow navigation, keyboard shortcuts, gestures, speaker notes, animation, and reduced motion.

## Workshop

- Duração total: 240 minutos.
- Público: iniciantes criando um site pela primeira vez, com desafios opcionais para participantes experientes.
- Entrega: site local de uma página, baseado em um mini-brief próprio, revisado no Site Editor e compartilhado por Preview.
- Guardrails: sem operações em produção, Sync, MCP write ou dados não autorizados durante o percurso principal.
- Fallback: site inicial fornecido pelo instrutor quando Studio Code estiver indisponível.

The workshop runs for 240 minutes and guides beginners through a one-page local site, while offering optional challenges for experienced participants. The main journey avoids production operations and includes a manual fallback when Studio Code is unavailable.

## Validação / Validation

Execute os validadores com Node.js:

```sh
node scripts/validate-content.mjs
node scripts/validate-video-slides.mjs
node scripts/validate-bilingual-changes.mjs <base-commit>
```

O teste visual usa Playwright quando a dependência está disponível:

```sh
NODE_PATH=<workspace-node-modules> node scripts/test-video-slides-browser.cjs
```

## Baseline editorial

Os materiais usam WordPress Studio 1.17.x como baseline editorial, verificado em 4 de agosto de 2026. Informações voláteis e divergências entre páginas oficiais ficam centralizadas em [`studio/pt-BR/current-state.md`](./studio/pt-BR/current-state.md) e [`studio/en/current-state.md`](./studio/en/current-state.md).

The materials use WordPress Studio 1.17.x as the editorial baseline, verified August 4, 2026. Volatile information and official documentation conflicts are centralized in the current-state references above.

## Documentação oficial / Official documentation

- [WordPress Studio](https://developer.wordpress.com/docs/developer-tools/studio/)
- [Studio Code](https://developer.wordpress.com/docs/developer-tools/studio/studio-code/)
- [Preview Sites](https://developer.wordpress.com/docs/developer-tools/studio/preview-sites/)

## Licença / License

Nenhuma licença foi definida ainda. Os materiais originais em `ref/` permanecem sujeitos aos direitos de seus respectivos autores.

No license has been selected yet. Original materials under `ref/` remain subject to their respective authors' rights.
