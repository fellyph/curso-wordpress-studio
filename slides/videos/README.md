# Slides para microaulas / Microlearning video slides / Slides para microlecciones

Esta pasta contém uma série em português, inglês e espanhol com nove decks HTML por idioma, um para cada módulo prático do workshop. Cada deck tem cinco slides, planejados como cinco blocos narrativos de aproximadamente um minuto.

This folder contains Portuguese, English, and Spanish series with nine HTML decks per language, one for each practical workshop module. Every deck has five slides, designed as five narrative beats of roughly one minute each.

Esta carpeta contiene series en portugués, inglés y español con nueve decks HTML por idioma, uno para cada módulo práctico del workshop. Cada deck tiene cinco slides, diseñados como cinco bloques narrativos de aproximadamente un minuto.

## Abrir / Open

Abra [`index.html`](./index.html) diretamente no navegador ou sirva a raiz do projeto com um servidor estático. A página inicial reúne as versões em `pt-BR/`, `en/` e `es/`.

Open [`index.html`](./index.html) directly in a browser or serve the project root with a static server. The index links to the `pt-BR/`, `en/`, and `es/` versions.

Abre [`index.html`](./index.html) directamente en un navegador o sirve la raíz del proyecto con un servidor estático. El índice enlaza las versiones `pt-BR/`, `en/` y `es/`.

## Publicar no GitHub Pages / Publish to GitHub Pages / Publicar en GitHub Pages

O workflow [`deploy-slides.yml`](../../.github/workflows/deploy-slides.yml) valida o conteúdo e publica somente esta pasta quando mudanças relacionadas chegam à branch `main`. Antes da primeira execução, abra **Settings → Pages → Build and deployment** no repositório e selecione **GitHub Actions** como fonte. Também é possível executar o workflow manualmente pela aba **Actions**. Todo conteúdo publicado no GitHub Pages é público; mantenha apenas dados fictícios ou autorizados nos slides.

The [`deploy-slides.yml`](../../.github/workflows/deploy-slides.yml) workflow validates the content and publishes only this folder when related changes reach the `main` branch. Before the first run, open **Settings → Pages → Build and deployment** in the repository and select **GitHub Actions** as the source. The workflow can also be run manually from the **Actions** tab. Everything published through GitHub Pages is public; keep only fictional or authorized data in the slides.

El workflow [`deploy-slides.yml`](../../.github/workflows/deploy-slides.yml) valida el contenido y publica solamente esta carpeta cuando los cambios relacionados llegan a la rama `main`. Antes de la primera ejecución, abre **Settings → Pages → Build and deployment** en el repositorio y selecciona **GitHub Actions** como fuente. También puedes ejecutar el workflow manualmente desde la pestaña **Actions**. Todo el contenido publicado mediante GitHub Pages es público; conserva únicamente datos ficticios o autorizados en los slides.

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
| Próxima apresentação / Next deck / Siguiente presentación | Link circular no último slide / Circular link on the final slide |

O hash da URL (`#1` a `#5`) identifica o slide atual e facilita retornar a uma tela específica.

The URL hash (`#1` through `#5`) identifies the current slide and makes it easy to return to a specific screen.

El hash de la URL (`#1` a `#5`) identifica el slide actual y facilita volver a una pantalla específica.

## Estrutura da série / Series structure / Estructura de la serie

| # | PT-BR | EN | ES | Foco / Focus |
| --- | --- | --- | --- | --- |
| 01 | Definir o projeto com IA | Define the project with AI | Definir el proyecto con IA | Conversa simulada, decisões e perguntas abertas / Simulated conversation, decisions, and open questions |
| 02 | Definir os requisitos do evento | Define the event requirements | Definir los requisitos del evento | Brief do evento, `requirements.md`, Design System e `design.md` |
| 03 | Criar um site com Quick Start | Create a site with Quick Start | Crear un sitio con Quick Start | Base local e tour essencial |
| 04 | Implementar com Studio Code | Implement with Studio Code | Implementar con Studio Code | Ferramentas, modelos, contexto e execução supervisionada / Tools, models, context, and supervised execution |
| 05 | Revisar no Site Editor | Review in the Site Editor | Revisar en Site Editor | Editabilidade, conteúdo e mobile |
| 06 | Registrar feedback com Annotate | Capture feedback with Annotate | Registrar feedback con Annotate | Feedback contextual e verificável |
| 07 | Compartilhar um Preview | Share a Preview | Compartir un Preview | URL pública temporária e revisão em dupla |
| 08 | Aplicar feedback e atualizar | Apply feedback and update | Aplicar feedback y actualizar | Filtro, segunda rodada e Update |
| 09 | Do Preview aos próximos passos | From Preview to next steps | Del Preview a los próximos pasos | Handoff, caminhos futuros e guardrails |

## Manutenção / Maintenance

- Edite conteúdo, notas e ordem dos módulos em `shared/content.js`.
- Edite o sistema visual, animações, responsividade e impressão em `shared/deck.css`.
- Edite navegação e atalhos em `shared/deck.js`.
- Edite a página inicial em `index.html`, `shared/index.css` e `shared/index.js`.
- Mantenha cinco slides por módulo e a mesma sequência de `layout` e `tone` nos três idiomas.
- Preserve nomes de produto e rótulos da interface em inglês: `Add site`, `Build a new site`, `Quick Start`, `Studio Code`, `Site Editor`, `Annotate`, `Preview` e `Update`.
- Execute `node scripts/validate-video-slides.mjs` depois de qualquer alteração estrutural ou multilíngue.
- Para QA no navegador, execute `NODE_PATH=<workspace-node-modules> node scripts/test-video-slides-browser.cjs`; o script testa os 135 slides e gera capturas temporárias.

## Direção visual / Visual direction

O sistema reaproveita os principais sinais do deck original — cobalt blue, ink, white, slate e terracotta — em uma composição editorial mais contemporânea. A tipografia, a escala, a assimetria, os números de fundo e o movimento por camadas formam a identidade compartilhada dos vídeos.

The system carries forward the original deck's core signals — cobalt blue, ink, white, slate, and terracotta — in a more contemporary editorial composition. Typography, scale, asymmetry, background numbers, and layered motion create a consistent identity across the videos.

El sistema conserva las señales principales del deck original — cobalt blue, ink, white, slate y terracotta — en una composición editorial más contemporánea. La tipografía, escala, asimetría, los números de fondo y el movimiento por capas crean una identidad coherente para los vídeos.

## Gravação / Recording

Cada slide representa um bloco de aproximadamente um minuto, não uma locução cronometrada palavra por palavra. Use `N` para consultar a intenção narrativa, feche as notas antes de capturar a tela e use `R` quando quiser repetir a entrada dos elementos.

Each slide is an approximately one-minute beat, not a word-for-word timed script. Press `N` to check the narrative intent, close notes before capture, and use `R` to replay the entrance animation.

Cada slide representa un bloque de aproximadamente un minuto, no un guion cronometrado palabra por palabra. Pulsa `N` para consultar la intención narrativa, cierra las notas antes de capturar la pantalla y usa `R` para repetir la animación de entrada.

## Baseline editorial

Conteúdo alinhado ao plano do workshop e à base local de referências para WordPress Studio 1.17.x, verificada em 4 de agosto de 2026. Preview é tratado como URL pública e temporária, não como hospedagem permanente. Sync, MCP, Liberate, criação de plugins e operações em produção permanecem fora do núcleo desta série.

Content follows the workshop plan and the local WordPress Studio 1.17.x reference baseline, verified August 4, 2026. Preview is treated as a public, temporary URL—not permanent hosting. Sync, MCP, Liberate, plugin creation, and production operations remain outside the core series.

El contenido sigue el plan del workshop y la base local de referencias de WordPress Studio 1.17.x, verificada el 4 de agosto de 2026. Preview se trata como una URL pública y temporal, no como alojamiento permanente. Sync, MCP, Liberate, creación de plugins y operaciones en producción quedan fuera de la serie principal.
