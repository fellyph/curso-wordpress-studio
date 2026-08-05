# Slides para microaulas / Microlearning video slides

Esta pasta contém uma série bilíngue de nove decks HTML, um para cada módulo prático do workshop. Cada deck tem cinco slides, planejados como cinco blocos narrativos de aproximadamente um minuto.

This folder contains a bilingual series of nine HTML decks, one for each practical workshop module. Every deck has five slides, designed as five narrative beats of roughly one minute each.

## Abrir / Open

Abra [`index.html`](./index.html) diretamente no navegador ou sirva a raiz do projeto com um servidor estático. A página inicial reúne as versões em `pt-BR/` e `en/`.

Open [`index.html`](./index.html) directly in a browser or serve the project root with a static server. The index links to the `pt-BR/` and `en/` versions.

## Controles / Controls

| Ação / Action | Controle / Control |
| --- | --- |
| Slide anterior / Previous slide | `←`, `↑`, `Page Up` ou botão esquerdo |
| Próximo slide / Next slide | `→`, `↓`, `Page Down`, `Space` ou botão direito |
| Primeiro / último slide | `Home` / `End` |
| Tela cheia / Fullscreen | `F` |
| Notas do apresentador / Speaker notes | `N` |
| Repetir animação / Replay animation | `R` |
| Celular ou tablet / Touch device | Deslizar horizontalmente / Swipe horizontally |

O hash da URL (`#1` a `#5`) identifica o slide atual e facilita retornar a uma tela específica.

The URL hash (`#1` through `#5`) identifies the current slide and makes it easy to return to a specific screen.

## Estrutura da série / Series structure

| # | PT-BR | EN | Foco / Focus |
| --- | --- | --- | --- |
| 01 | Do brief ao Preview | From brief to Preview | Visão geral do percurso / Journey overview |
| 02 | Criar um mini-brief | Create a mini-brief | Propósito, público, CTA, tom e escopo |
| 03 | Criar um site com Quick Start | Create a site with Quick Start | Base local e tour essencial |
| 04 | Planejar e construir com Studio Code | Plan and build with Studio Code | Contexto, plano e checkpoints humanos |
| 05 | Revisar no Site Editor | Review in the Site Editor | Editabilidade, conteúdo e mobile |
| 06 | Registrar feedback com Annotate | Capture feedback with Annotate | Feedback contextual e verificável |
| 07 | Compartilhar um Preview | Share a Preview | URL pública temporária e revisão em dupla |
| 08 | Aplicar feedback e atualizar | Apply feedback and update | Filtro, segunda rodada e Update |
| 09 | Do Preview aos próximos passos | From Preview to next steps | Handoff, caminhos futuros e guardrails |

## Manutenção / Maintenance

- Edite conteúdo, notas e ordem dos módulos em `shared/content.js`.
- Edite o sistema visual, animações, responsividade e impressão em `shared/deck.css`.
- Edite navegação e atalhos em `shared/deck.js`.
- Edite a página inicial em `index.html`, `shared/index.css` e `shared/index.js`.
- Mantenha cinco slides por módulo e a mesma sequência de `layout` e `tone` nos dois idiomas.
- Preserve nomes de produto e rótulos da interface em inglês: `Add site`, `Build a new site`, `Quick Start`, `Studio Code`, `Site Editor`, `Annotate`, `Preview` e `Update`.
- Execute `node scripts/validate-video-slides.mjs` depois de qualquer alteração estrutural ou bilíngue.
- Para QA no navegador, execute `NODE_PATH=<workspace-node-modules> node scripts/test-video-slides-browser.cjs`; o script testa os 90 slides e gera capturas temporárias.

## Direção visual / Visual direction

O sistema reaproveita os principais sinais do deck original — cobalt blue, ink, white, slate e terracotta — em uma composição editorial mais contemporânea. A tipografia, a escala, a assimetria, os números de fundo e o movimento por camadas formam a identidade compartilhada dos vídeos.

The system carries forward the original deck's core signals — cobalt blue, ink, white, slate, and terracotta — in a more contemporary editorial composition. Typography, scale, asymmetry, background numbers, and layered motion create a consistent identity across the videos.

## Gravação / Recording

Cada slide representa um bloco de aproximadamente um minuto, não uma locução cronometrada palavra por palavra. Use `N` para consultar a intenção narrativa, feche as notas antes de capturar a tela e use `R` quando quiser repetir a entrada dos elementos.

Each slide is an approximately one-minute beat, not a word-for-word timed script. Press `N` to check the narrative intent, close notes before capture, and use `R` to replay the entrance animation.

## Baseline editorial

Conteúdo alinhado ao plano do workshop e à base local de referências para WordPress Studio 1.17.x, verificada em 4 de agosto de 2026. Preview é tratado como URL pública e temporária, não como hospedagem permanente. Sync, MCP, Liberate, criação de plugins e operações em produção permanecem fora do núcleo desta série.

Content follows the workshop plan and the local WordPress Studio 1.17.x reference baseline, verified August 4, 2026. Preview is treated as a public, temporary URL—not permanent hosting. Sync, MCP, Liberate, plugin creation, and production operations remain outside the core series.
