# WordPress Studio Workshop

Materiais em português, inglês e espanhol para um workshop presencial de quatro horas sobre o processo de criação de um site com WordPress Studio — da definição do brief à construção local, revisão e compartilhamento por Preview.

Portuguese, English, and Spanish materials for a four-hour, in-person workshop covering the website creation process with WordPress Studio—from defining the brief to local construction, review, and sharing through Preview.

Materiales en portugués, inglés y español para un workshop presencial de cuatro horas sobre el proceso de creación de un sitio con WordPress Studio: desde la definición del brief hasta la construcción local, revisión y publicación compartida mediante Preview.

## Conteúdo / Contents

| Pasta / Folder | Conteúdo / Contents |
| --- | --- |
| [`workshop/`](./workshop/) | Planos equivalentes em português, inglês e espanhol / Equivalent Portuguese, English, and Spanish workshop plans |
| [`studio/`](./studio/) | Base local multilíngue de referências do WordPress Studio / Multilingual local WordPress Studio reference library |
| [`slides/videos/`](./slides/videos/) | Nove microaulas HTML por idioma, com cinco slides cada / Nine HTML micro-lessons per language, with five slides each |
| [`ref/`](./ref/) | Apresentação e PDF originais preservados como referência / Original presentation and PDF preserved as references |
| [`scripts/`](./scripts/) | Validação de conteúdo, paridade linguística e slides / Content, language parity, and slide validation |

## Contribuição e paridade multilíngue / Contribution and multilingual parity

Toda atualização de conteúdo em um idioma deve incluir a atualização equivalente nos demais idiomas suportados. As regras completas estão em [`AGENTS.md`](./AGENTS.md), e o fluxo para contribuições humanas está em [`CONTRIBUTING.md`](./CONTRIBUTING.md).

Every content update in one language must include the equivalent update in every other supported language. Complete project rules are in [`AGENTS.md`](./AGENTS.md), and the human contribution workflow is in [`CONTRIBUTING.md`](./CONTRIBUTING.md).

Cada actualización de contenido en un idioma debe incluir la actualización equivalente en los demás idiomas compatibles. Las reglas completas están en [`AGENTS.md`](./AGENTS.md) y el flujo de contribución está en [`CONTRIBUTING.md`](./CONTRIBUTING.md).

O GitHub Actions executa validações estruturais e também compara o diff para impedir atualizações isoladas em PT-BR, EN ou ES.

GitHub Actions runs structural checks and compares the diff to prevent isolated updates in PT-BR, EN, or ES.

## Slides HTML / HTML slides

Abra [`slides/videos/index.html`](./slides/videos/index.html) no navegador para acessar os 27 decks. Cada apresentação oferece navegação por setas, atalhos de teclado, gestos, notas do apresentador, animações e suporte a movimento reduzido.

Open [`slides/videos/index.html`](./slides/videos/index.html) in a browser to access all 27 decks. Every presentation supports arrow navigation, keyboard shortcuts, gestures, speaker notes, animation, and reduced motion.

Abre [`slides/videos/index.html`](./slides/videos/index.html) en un navegador para acceder a los 27 decks. Cada presentación admite navegación por flechas, atajos de teclado, gestos, notas del presentador, animaciones y movimiento reducido.

## Workshop

- Duração total: 240 minutos.
- Público: iniciantes criando um site pela primeira vez, com desafios opcionais para participantes experientes.
- Entrega: site local de uma página, baseado em um mini-brief próprio, revisado no Site Editor e compartilhado por Preview.
- Guardrails: sem operações em produção, Sync, MCP write ou dados não autorizados durante o percurso principal.
- Fallback: site inicial fornecido pelo instrutor quando Studio Code estiver indisponível.

The workshop runs for 240 minutes and guides beginners through a one-page local site, while offering optional challenges for experienced participants. The main journey avoids production operations and includes a manual fallback when Studio Code is unavailable.

El workshop dura 240 minutos y guía a principiantes en la creación de un sitio local de una página, con desafíos opcionales para participantes experimentados. El recorrido principal evita operaciones en producción e incluye un fallback manual cuando Studio Code no está disponible.

## Validação / Validation

Execute os validadores com Node.js:

```sh
node scripts/validate-content.mjs
node scripts/validate-video-slides.mjs
node scripts/validate-language-parity.mjs <base-commit>
```

O teste visual usa Playwright quando a dependência está disponível:

```sh
NODE_PATH=<workspace-node-modules> node scripts/test-video-slides-browser.cjs
```

## Baseline editorial

Os materiais usam WordPress Studio 1.17.x como baseline editorial, verificado em 4 de agosto de 2026. Informações voláteis e divergências entre páginas oficiais ficam centralizadas em [`studio/pt-BR/current-state.md`](./studio/pt-BR/current-state.md), [`studio/en/current-state.md`](./studio/en/current-state.md) e [`studio/es/current-state.md`](./studio/es/current-state.md).

The materials use WordPress Studio 1.17.x as the editorial baseline, verified August 4, 2026. Volatile information and official documentation conflicts are centralized in the current-state references above.

Los materiales utilizan WordPress Studio 1.17.x como referencia editorial, verificada el 4 de agosto de 2026. La información volátil y los conflictos de la documentación oficial se centralizan en las referencias de estado actual indicadas arriba.

## Documentação oficial / Official documentation

- [WordPress Studio](https://developer.wordpress.com/docs/developer-tools/studio/)
- [Studio Code](https://developer.wordpress.com/docs/developer-tools/studio/studio-code/)
- [Preview Sites](https://developer.wordpress.com/docs/developer-tools/studio/preview-sites/)

## Licença / License

Nenhuma licença foi definida ainda. Os materiais originais em `ref/` permanecem sujeitos aos direitos de seus respectivos autores.

No license has been selected yet. Original materials under `ref/` remain subject to their respective authors' rights.
