window.STUDIO_VIDEO_DECKS = {
  seriesTitle: "From brief to Preview · WordPress Studio",
  baseline: "WordPress Studio 1.17.x",
  verifiedOn: "2026-08-05",
  workshopFilesUrl: "https://github.com/fellyph/curso-wordpress-studio/blob/main/workshop",
  locales: {
    "pt-BR": {
      seriesTitle: "Do brief ao Preview · WordPress Studio",
      ui: {
        video: "Vídeo",
        minute: "Minuto",
        seriesIndex: "Índice da série",
        navigation: "Navegação dos slides",
        previous: "Slide anterior",
        next: "Próximo slide",
        nextVideo: "Próximo vídeo",
        openResource: "Abrir arquivo no GitHub",
        speakerNotes: "Notas de apresentação",
        noNotes: "Sem notas adicionais para este slide."
      },
      moduleOrder: [
        "overview",
        "mini-brief",
        "create-site",
        "studio-code",
        "site-editor",
        "annotate",
        "preview",
        "apply-feedback",
        "next-steps",
        "agency-growth",
        "mcp-for-agencies"
      ],
      modules: {
        "overview": {
          number: "01",
          slug: "01-overview.html",
          shortTitle: "Definir e planejar",
          title: "Definir o projeto com IA",
          duration: "5 min",
          promise: "Conversa → notas → perguntas abertas.",
          slides: [
            {
              tone: "cobalt",
              layout: "cover",
              eyebrow: "Fase 1 · Conversa e descoberta",
              title: "Antes de construir, defina o projeto",
              accent: "defina",
              body: "Nesta aula, uma conversa sobre um evento de IA em Faro vira contexto, decisões e perguntas abertas.",
              takeaway: "Você está aqui: conversa e descoberta",
              notes: "Localize esta apresentação no início do percurso. A entrega de hoje são notas confiáveis da conversa. Requisitos, design, construção e revisão aparecem nas fases seguintes."
            },
            {
              tone: "paper",
              layout: "comparison",
              eyebrow: "1 · Ouvir",
              title: "Comece pela conversa",
              accent: "conversa",
              items: [
                { marker: "C", label: "Cenário", text: "Evento de IA em Faro, com duas trilhas e participação da comunidade." },
                { marker: "M", label: "Briefing da conversa", text: "Transcrição fictícia da reunião + briefing da agenda.", resource: "event-meeting-notes.md" }
              ],
              notes: "Apresente a simulação: a turma recebe as notas de uma conversa com a organização do evento e o documento da agenda. O conteúdo é fictício e serve como matéria-prima para praticar descoberta de produto. [Sources] Plano para a agenda evento (1).pdf; workshop/pt-BR/event-meeting-notes.md"
            },
            {
              tone: "frost",
              layout: "steps",
              eyebrow: "2 · Interpretar",
              title: "A IA transforma falas em decisões",
              accent: "decisões",
              items: [
                { label: "Objetivo", text: "O que o evento precisa tornar possível?" },
                { label: "Públicos", text: "Participantes, palestrantes, voluntários e patrocinadores." },
                { label: "Funcionalidades", text: "Agenda, inscrições, formulários, contato e localização." },
                { label: "Dúvidas", text: "Capacidade, tickets, critérios e uso responsável de dados." }
              ],
              notes: "Demonstre um pedido para a ferramenta de IA: separar fatos, necessidades, hipóteses e perguntas em aberto. A IA organiza o material; a equipe confirma as decisões e mantém controle sobre seleção de palestrantes e comunicações. [Sources] workshop/pt-BR/event-meeting-notes.md"
            },
            {
              tone: "ink",
              layout: "flow",
              eyebrow: "O percurso",
              title: "A conversa abre três fases",
              accent: "três fases",
              items: [
                { label: "1 · Descoberta", text: "Ouvir, registrar e esclarecer." },
                { label: "2 · Requisitos", text: "Definir propósito, público e voz." },
                { label: "3 · Design", text: "Explorar a experiência no Claude Design." }
              ],
              notes: "Mostre a progressão sem antecipar a solução: primeiro entendemos a conversa; depois registramos requisitos em Markdown; só então exploramos o design. Construção e revisão vêm depois dessas três fases."
            },
            {
              tone: "terracotta",
              layout: "outro",
              eyebrow: "Entrega da fase 1",
              title: "Boas notas preservam o que a conversa revelou",
              accent: "Boas notas",
              body: "Contexto, decisões, dúvidas e limites ficam prontos para virar requisitos.",
              next: "02 · Criar requirements.md",
              notes: "Feche confirmando que as notas fictícias são a matéria-prima da fase seguinte. Ainda não escolhemos layout nem componentes; primeiro vamos transformar a conversa em requisitos verificáveis."
            }
          ]
        },
        "mini-brief": {
          number: "02",
          slug: "02-mini-brief.html",
          shortTitle: "Requisitos",
          title: "Definir os requisitos do evento",
          duration: "5 min",
          promise: "Propósito, público e voz registrados em requirements.md.",
          slides: [
            {
              tone: "ink",
              layout: "cover",
              eyebrow: "Fase 2 · Requisitos",
              title: "A conversa vira um brief do evento",
              accent: "brief do evento",
              body: "A comunidade WordPress organiza. O público geral do Algarve precisa se reconhecer na proposta.",
              takeaway: "Evento de IA em Faro · aberto para além da comunidade WordPress",
              notes: "Retome as notas da reunião. O evento nasce na comunidade WordPress, mas o site deve acolher pessoas sem vínculo com WordPress que querem compreender e aplicar inteligência artificial. [Sources] workshop/pt-BR/event-meeting-notes.md"
            },
            {
              tone: "paper",
              layout: "steps",
              eyebrow: "O mini-brief",
              title: "Três decisões dão foco ao evento",
              accent: "Três decisões",
              items: [
                { marker: "P", label: "Propósito", text: "Aproximar a IA dos negócios e da comunidade local." },
                { marker: "A", label: "Público", text: "Hotéis, restaurantes, agências de viagens e profissionais curiosos." },
                { marker: "V", label: "Voz", text: "Acolhedora, prática, clara e sem jargão técnico." }
              ],
              notes: "Explique que WordPress é quem reúne a comunidade, não um pré-requisito para participar. Use exemplos do sul de Portugal: proprietários de hotéis, restaurantes e agências de viagens que querem entender usos práticos de IA."
            },
            {
              tone: "cobalt",
              layout: "checklist",
              eyebrow: "Registro do projeto",
              title: "Registre o acordo",
              accent: "acordo",
              items: [
                { marker: "MD", label: "requirements.md", text: "Propósito, público, voz e contexto WordPress.", resource: "requirements.md" },
                { marker: "02", label: "Experiência", text: "Página única ou multipágina, navegação e prioridade mobile." },
                { marker: "03", label: "Limites", text: "Hipóteses, dúvidas e aceite." }
              ],
              takeaway: "Uma fonte de verdade para as próximas fases",
              notes: "Crie requirements.md a partir das notas da primeira conversa. Registre que a implementação será em WordPress e defina a experiência: página única ou multipágina, fluxo de navegação e prioridade entre desktop e mobile. Separe fatos confirmados, decisões, hipóteses, limites e questões abertas. [Sources] workshop/pt-BR/requirements.md"
            },
            {
              tone: "frost",
              layout: "comparison",
              eyebrow: "Fase 3 · Design",
              title: "Dois artefatos orientam os rascunhos",
              accent: "Dois artefatos",
              items: [
                { marker: "DS", label: "Design System", text: "Cores, tipografia, componentes e padrões gerados ou importados no Claude Design.", resource: "design-system.md" },
                { marker: "MD", label: "design.md", text: "Decisões visuais e de interação solicitadas ao Claude Design e revisadas pela equipe.", resource: "design.md" }
              ],
              notes: "As referências oficiais dizem que Claude Design pode extrair um Design System de código, apresentações, documentos e assets de marca. design.md é uma convenção deste workshop: peça à ferramenta que registre ali as decisões e revise o arquivo antes do handoff. [Sources] https://support.claude.com/en/articles/14604397-set-up-your-design-system-in-claude-design; https://support.claude.com/en/articles/14604416-get-started-with-claude-design"
            },
            {
              tone: "cream",
              layout: "outro",
              eyebrow: "Entrega da fase 3",
              title: "Claude Design transforma requisitos em rascunhos",
              accent: "rascunhos",
              body: "Anexe requirements.md e referências. Gere ou importe o Design System e registre as escolhas em design.md.",
              next: "03 · Criar o site",
              notes: "Demonstre o fluxo oficial: criar projeto, anexar ou importar o Design System, adicionar contexto, descrever o que construir, revisar no canvas e iterar. A primeira geração é um ponto de partida, não a solução final. [Sources] https://www.anthropic.com/news/claude-design-anthropic-labs; https://support.claude.com/en/articles/14604416-get-started-with-claude-design"
            }
          ]
        },
        "create-site": {
          number: "03",
          slug: "03-create-site.html",
          shortTitle: "Criar o site",
          title: "Criar um site com Quick Start",
          duration: "5 min",
          promise: "Uma base local pronta para receber o brief.",
          slides: [
            {
              tone: "terracotta",
              layout: "cover",
              eyebrow: "WordPress Studio",
              title: "A mesma base para todos",
              accent: "mesma base",
              body: "Crie um site local com Quick Start e conheça apenas o que será usado no percurso.",
              notes: "Introduza o Studio como ambiente local. A meta não é explorar todos os menus; é obter uma base previsível para construir a página."
            },
            {
              tone: "paper",
              layout: "checklist",
              eyebrow: "Preflight",
              title: "Verifique antes de começar",
              accent: "antes",
              items: [
                { marker: "1", label: "Studio instalado", text: "Use a versão estável indicada pelo workshop." },
                { marker: "2", label: "Conta conectada", text: "Necessária para Studio Code e Preview." },
                { marker: "3", label: "Assets acessíveis", text: "Tenha a pasta do projeto preparada." }
              ],
              notes: "Faça esta verificação antes do evento. Se Studio Code não estiver disponível, mantenha o site inicial de fallback pronto para a continuação no Site Editor."
            },
            {
              tone: "cobalt",
              layout: "flow",
              eyebrow: "Quick Start",
              title: "Do zero ao WordPress local",
              accent: "WordPress local",
              items: [
                { label: "Add site", text: "Inicie um projeto." },
                { label: "Build a new site", text: "Escolha uma base nova." },
                { label: "Quick Start", text: "Use a configuração guiada." },
                { label: "Start", text: "Abra o site local." }
              ],
              notes: "Mostre os rótulos da interface em inglês e explique em português. Nomeie o site de forma curta e reconhecível para evitar confusão na etapa de Preview."
            },
            {
              tone: "ink",
              layout: "split",
              eyebrow: "Tour de 60 segundos",
              title: "Dois lados do mesmo projeto",
              accent: "Dois lados",
              items: [
                { marker: "↗", label: "Site", text: "Veja a experiência pública local." },
                { marker: "W", label: "WP Admin", text: "Entre no Site Editor e revise a estrutura." }
              ],
              notes: "Aponte onde iniciar e parar o site, abrir o WP Admin e visitar a página. Deixe os recursos avançados para referências posteriores."
            },
            {
              tone: "frost",
              layout: "outro",
              eyebrow: "Checkpoint",
              title: "O site abre. O editor abre. O brief está ao lado.",
              accent: "brief",
              body: "Essa é a base mínima para começar a construção assistida.",
              next: "04 · Studio Code",
              notes: "Confirme os três pontos ao vivo. Se algo falhar, troque para o site inicial de fallback em vez de consumir o tempo do percurso com configuração."
            }
          ]
        },
        "studio-code": {
          number: "04",
          slug: "04-studio-code.html",
          shortTitle: "Studio Code",
          title: "Implementar com Studio Code",
          duration: "5 min",
          promise: "Três fontes de contexto, modelo escolhido e execução supervisionada.",
          slides: [
            {
              tone: "cobalt",
              layout: "cover",
              eyebrow: "Fase 4 · Implementação",
              title: "Studio Code conecta conversa e site",
              accent: "Studio Code",
              body: "Abra o site local, entre na aba Studio Code e trabalhe com o agente dentro do projeto.",
              takeaway: "Do projeto aberto para uma implementação assistida",
              notes: "Faça uma apresentação curta: Studio Code é o agente de programação integrado ao app WordPress Studio e também disponível na CLI. No desktop, selecione o site e abra a aba Studio Code; o agente passa a trabalhar no diretório desse projeto. [Sources] https://developer.wordpress.com/docs/developer-tools/studio/studio-code/"
            },
            {
              tone: "paper",
              layout: "steps",
              eyebrow: "Ferramentas básicas",
              title: "O agente trabalha com o site aberto",
              accent: "site aberto",
              items: [
                { marker: "C", label: "Chat", text: "Recebe instruções, arquivos e perguntas." },
                { marker: "F", label: "Arquivos", text: "Lê e edita o diretório do site." },
                { marker: "W", label: "WP-CLI", text: "Executa comandos no WordPress local." },
                { marker: "▣", label: "Capturas", text: "Abre e registra o resultado visual." }
              ],
              notes: "Mostre apenas o essencial da interface: conversa, anexos, seletor de modelo e histórico das ações. A documentação informa que o agente pode ler e escrever arquivos, executar WP-CLI e capturar o site. Operações remotas não fazem parte desta demonstração. [Sources] https://developer.wordpress.com/docs/developer-tools/studio/studio-code/"
            },
            {
              tone: "frost",
              layout: "steps",
              eyebrow: "Modelos disponíveis · 05/08/2026",
              title: "Escolha o modelo para a tarefa",
              accent: "modelo",
              items: [
                { marker: "S5", label: "Claude Sonnet 5", text: "Padrão rápido e eficiente para a maioria das tarefas." },
                { marker: "O", label: "Claude Opus 4.8", text: "Mais capaz para tarefas complexas e com várias etapas." },
                { marker: "G", label: "GPT 5.6 Sol", text: "Opção OpenAI rápida e eficiente para tarefas gerais." }
              ],
              notes: "No desktop, use o menu na parte inferior da conversa; no terminal, use /model. Explique que esta lista muda rapidamente e deve ser conferida no seletor antes do evento. A documentação oficial verificada em 5 de agosto de 2026 lista Sonnet 5 como padrão, Opus 4.8 e GPT 5.6 Sol. [Sources] https://developer.wordpress.com/docs/developer-tools/studio/studio-code/"
            },
            {
              tone: "ink",
              layout: "flow",
              eyebrow: "Contexto de implementação",
              title: "Três fontes guiam o agente",
              accent: "Três fontes",
              items: [
                { marker: "R", label: "requirements.md", text: "Propósito, público, funcionalidades e aceite.", resource: "requirements.md" },
                { marker: "D", label: "design.md", text: "Layout, comportamento e decisões visuais.", resource: "design.md" },
                { marker: "DS", label: "Design System", text: "Cores, tipografia, componentes, tokens e assets.", resource: "design-system.md" }
              ],
              notes: "Anexe os dois arquivos Markdown e indique a pasta ou os assets do Design System. Peça ao agente para ler as três fontes, inspecionar o site atual, apontar conflitos e propor um plano curto antes de editar. Uploads de arquivos são suportados no desktop e na CLI. [Sources] https://developer.wordpress.com/docs/developer-tools/studio/studio-code/"
            },
            {
              tone: "terracotta",
              layout: "outro",
              eyebrow: "Plano aprovado",
              title: "Contexto entregue. Agente em ação.",
              accent: "Agente em ação",
              body: "Autorize a implementação por etapas; depois confira o diff e as capturas em desktop e mobile.",
              next: "05 · Site Editor",
              notes: "Depois que requirements.md, design.md e o Design System forem compreendidos e o plano estiver aprovado, deixe o agente executar. Continue supervisionando: revise permissões, diff e resultado visual antes de seguir ao Site Editor. Se Studio Code estiver indisponível, use o site de fallback."
            }
          ]
        },
        "site-editor": {
          number: "05",
          slug: "05-site-editor.html",
          shortTitle: "Site Editor",
          title: "Revisar no Site Editor",
          duration: "5 min",
          promise: "A página precisa continuar editável e legível.",
          slides: [
            {
              tone: "cream",
              layout: "cover",
              eyebrow: "Revisão visual",
              title: "O agente constrói. Você decide.",
              accent: "Você decide",
              body: "Use o Site Editor para testar estrutura, conteúdo e comportamento em telas menores.",
              notes: "Troque do modo de geração para o modo de decisão. A revisão visual conecta o resultado técnico ao brief e à experiência da pessoa usuária."
            },
            {
              tone: "paper",
              layout: "steps",
              eyebrow: "Estrutura",
              title: "A página continua WordPress?",
              accent: "WordPress",
              items: [
                { label: "Blocos", text: "Elementos podem ser selecionados e editados." },
                { label: "Padrões", text: "A composição tem uma lógica reconhecível." },
                { label: "Styles", text: "Decisões globais não viraram exceções locais." }
              ],
              notes: "Clique em elementos-chave. Um resultado bonito mas difícil de editar não atende ao percurso. Verifique também se estilos globais estão sendo respeitados."
            },
            {
              tone: "cobalt",
              layout: "checklist",
              eyebrow: "Conteúdo",
              title: "Leia como visitante, não como autor",
              accent: "visitante",
              items: [
                { marker: "H", label: "Hierarquia", text: "Títulos revelam a ordem da mensagem." },
                { marker: "→", label: "CTA", text: "A próxima ação aparece sem ambiguidade." },
                { marker: "Aa", label: "Legibilidade", text: "Contraste e tamanho sustentam a leitura." }
              ],
              notes: "Percorra a página sem explicar nada. Se o propósito ou a ação principal só ficam claros com sua narração, a página ainda precisa de revisão."
            },
            {
              tone: "ink",
              layout: "comparison",
              eyebrow: "Responsividade",
              title: "Mesma intenção. Outra largura.",
              accent: "Outra largura",
              items: [
                { marker: "▭", label: "Desktop", text: "Ritmo, respiro e linha de leitura." },
                { marker: "▯", label: "Mobile", text: "Ordem, toque, quebra e foco." }
              ],
              notes: "Não trate mobile como miniatura. Verifique ordem das seções, quebras de texto, tamanho de alvos e se o CTA continua evidente."
            },
            {
              tone: "terracotta",
              layout: "outro",
              eyebrow: "Checkpoint",
              title: "Faça uma mudança manual",
              accent: "manual",
              body: "Ajuste um texto ou estilo e confirme que você mantém controle sobre o resultado.",
              next: "06 · Annotate",
              notes: "Uma pequena edição manual prova que a página não é uma caixa-preta. Depois salve e compare novamente com o mini-brief."
            }
          ]
        },
        "annotate": {
          number: "06",
          slug: "06-annotate.html",
          shortTitle: "Annotate",
          title: "Registrar feedback com Annotate",
          duration: "5 min",
          promise: "Feedback ligado ao elemento, ao problema e ao resultado.",
          slides: [
            {
              tone: "ink",
              layout: "cover",
              eyebrow: "Revisão contextual",
              title: "Feedback específico muda melhor",
              accent: "específico",
              body: "Selecione o elemento, descreva o problema e diga o que deve permanecer.",
              notes: "Apresente Annotate como ponte entre inspeção visual e mudança. O comentário ganha contexto porque está ligado ao ponto exato da página."
            },
            {
              tone: "paper",
              layout: "comparison",
              eyebrow: "Qualidade do pedido",
              title: "Troque opinião por direção",
              accent: "direção",
              items: [
                { marker: "×", label: "“Não gostei”", text: "Sem problema, intenção ou limite." },
                { marker: "✓", label: "“Destaque o CTA”", text: "Explique por quê e preserve o tom." }
              ],
              notes: "Compare um comentário vago com um pedido verificável. O segundo conecta a mudança ao brief e protege características que já funcionam."
            },
            {
              tone: "cobalt",
              layout: "flow",
              eyebrow: "Anotação útil",
              title: "Quatro partes, uma decisão",
              accent: "uma decisão",
              items: [
                { label: "Elemento", text: "Onde mudar." },
                { label: "Problema", text: "O que não funciona." },
                { label: "Resultado", text: "O que deve melhorar." },
                { label: "Restrição", text: "O que preservar." }
              ],
              notes: "Use a fórmula para criar duas anotações, não uma lista enorme. Poucas mudanças coerentes são mais fáceis de revisar e demonstrar."
            },
            {
              tone: "frost",
              layout: "steps",
              eyebrow: "Ciclo de mudança",
              title: "Anote. Proponha. Revise.",
              accent: "Revise",
              items: [
                { label: "Anote", text: "Registre o feedback no contexto." },
                { label: "Proponha", text: "Peça um plano antes da alteração." },
                { label: "Revise", text: "Confira diff e capturas." }
              ],
              notes: "Mantenha o mesmo padrão de checkpoint do Studio Code. A anotação não autoriza qualquer implementação; ela abre uma conversa verificável."
            },
            {
              tone: "cream",
              layout: "outro",
              eyebrow: "Checkpoint",
              title: "Duas mudanças. Uma história mais clara.",
              accent: "mais clara",
              body: "Se a alteração não fortalece o brief, ela não entra nesta rodada.",
              next: "07 · Preview",
              notes: "Finalize exibindo o antes e depois. Nomeie qual mensagem ou ação ficou mais clara, em vez de avaliar apenas se ficou ‘mais bonito’."
            }
          ]
        },
        "preview": {
          number: "07",
          slug: "07-preview.html",
          shortTitle: "Preview",
          title: "Compartilhar um Preview",
          duration: "5 min",
          promise: "Uma URL pública e temporária para colher feedback.",
          slides: [
            {
              tone: "cobalt",
              layout: "cover",
              eyebrow: "Compartilhamento",
              title: "Mostre sem publicar em produção",
              accent: "sem publicar",
              body: "Crie um Preview temporário para que outra pessoa experimente a página no navegador.",
              notes: "Deixe claro desde o início: Preview é compartilhamento temporário, não hospedagem permanente. Use apenas conteúdo fictício ou autorizado."
            },
            {
              tone: "paper",
              layout: "flow",
              eyebrow: "Criar Preview",
              title: "Nomeie, crie, copie",
              accent: "copie",
              items: [
                { label: "Nomear", text: "Use projeto e rodada." },
                { label: "Criar", text: "Gere a versão remota." },
                { label: "Abrir", text: "Teste a URL como visitante." },
                { label: "Copiar", text: "Envie para a dupla." }
              ],
              notes: "Escolha um nome fácil de reconhecer, como ‘portfolio-r1’. Abra a URL fora da sessão de edição para testar a experiência real de quem recebe."
            },
            {
              tone: "terracotta",
              layout: "checklist",
              eyebrow: "Antes de compartilhar",
              title: "Público. Temporário. Intencional.",
              accent: "Intencional",
              items: [
                { marker: "◎", label: "Público", text: "Qualquer pessoa com a URL pode acessar." },
                { marker: "◷", label: "Temporário", text: "Não é o destino final do site." },
                { marker: "✓", label: "Autorizado", text: "Revise dados, imagens e arquivos enviados." }
              ],
              notes: "Faça uma pausa de segurança antes de criar o Preview. Remova informações reais, confidenciais ou não autorizadas e confirme o escopo enviado."
            },
            {
              tone: "ink",
              layout: "steps",
              eyebrow: "Revisão em dupla",
              title: "Dê três lentes ao revisor",
              accent: "três lentes",
              items: [
                { label: "Clareza", text: "Entendi propósito e oferta?" },
                { label: "Ação", text: "Sei o que fazer depois?" },
                { label: "Mobile", text: "A história funciona em uma tela menor?" }
              ],
              notes: "Não peça ‘o que você achou?’. Dê critérios curtos e peça uma evidência para cada comentário. Isso torna a próxima rodada aplicável."
            },
            {
              tone: "frost",
              layout: "outro",
              eyebrow: "Checkpoint",
              title: "Feedback recebido. Nenhuma mudança automática.",
              accent: "Nenhuma mudança automática",
              body: "Registre o comentário e volte ao brief antes de decidir.",
              next: "08 · Aplicar feedback",
              notes: "Feche distinguindo receber de aceitar feedback. A próxima etapa é filtrar cada sugestão pelo objetivo e pelas restrições do projeto."
            }
          ]
        },
        "apply-feedback": {
          number: "08",
          slug: "08-apply-feedback.html",
          shortTitle: "Aplicar feedback",
          title: "Aplicar feedback e atualizar",
          duration: "5 min",
          promise: "Uma segunda rodada coerente, revisada e compartilhada.",
          slides: [
            {
              tone: "terracotta",
              layout: "cover",
              eyebrow: "Segunda rodada",
              title: "Feedback não é ordem automática",
              accent: "não é ordem",
              body: "Use o brief para separar sinais úteis, preferências e mudanças fora de escopo.",
              notes: "Explique que revisão também é decisão. A meta não é obedecer a todos os comentários; é fortalecer o propósito da página."
            },
            {
              tone: "paper",
              layout: "steps",
              eyebrow: "Filtro",
              title: "Passe cada comentário por três perguntas",
              accent: "três perguntas",
              items: [
                { label: "Ajuda o público?", text: "Resolve uma dificuldade real?" },
                { label: "Fortalece o CTA?", text: "Torna a ação mais clara?" },
                { label: "Cabe no escopo?", text: "Evita abrir um novo projeto?" }
              ],
              notes: "Classifique os comentários rapidamente. Aceite o que tem evidência e aderência; registre o que fica para depois; rejeite o que contradiz o brief."
            },
            {
              tone: "cobalt",
              layout: "statement",
              eyebrow: "Mudança coerente",
              title: "Resolva uma causa, não cinco sintomas",
              accent: "uma causa",
              body: "Agrupe comentários relacionados e proponha uma alteração que preserve o restante da página.",
              notes: "Por exemplo, se CTA, hierarquia e texto parecem fracos, talvez a causa seja uma proposta de valor imprecisa. Corrija a mensagem antes de decorar botões."
            },
            {
              tone: "ink",
              layout: "checklist",
              eyebrow: "Revisão local",
              title: "Confira antes de atualizar",
              accent: "antes",
              items: [
                { marker: "B", label: "Brief", text: "A mudança fortalece a intenção." },
                { marker: "D", label: "Desktop", text: "O ritmo continua equilibrado." },
                { marker: "M", label: "Mobile", text: "A ordem e o CTA continuam íntegros." }
              ],
              notes: "Repita os mesmos critérios da primeira versão. Um ciclo de feedback só termina quando a mudança é validada localmente."
            },
            {
              tone: "cream",
              layout: "outro",
              eyebrow: "Checkpoint",
              title: "Update Preview + decisão registrada",
              accent: "decisão registrada",
              body: "Compartilhe a nova versão e diga o que mudou, o que não mudou e por quê.",
              next: "09 · Próximos passos",
              notes: "Use Update no Preview existente, teste a URL novamente e escreva uma nota curta de decisão. Isso fecha o ciclo com transparência."
            }
          ]
        },
        "next-steps": {
          number: "09",
          slug: "09-next-steps.html",
          shortTitle: "Próximos passos",
          title: "Do Preview aos próximos passos",
          duration: "5 min",
          promise: "Um encerramento claro sem transformar Preview em produção.",
          slides: [
            {
              tone: "ink",
              layout: "cover",
              eyebrow: "Fechamento",
              title: "Preview é o começo do handoff",
              accent: "começo",
              body: "Você agora tem um resultado demonstrável e decisões que podem orientar a próxima fase.",
              notes: "Retome a imagem final do primeiro vídeo. Agora o participante sabe como o resultado foi construído, revisado e compartilhado."
            },
            {
              tone: "paper",
              layout: "checklist",
              eyebrow: "O que foi criado",
              title: "Mais que uma página",
              accent: "Mais",
              items: [
                { marker: "1", label: "Site local", text: "Uma base editável e segura para continuar." },
                { marker: "2", label: "Preview revisado", text: "Uma versão acessível para feedback." },
                { marker: "3", label: "Registro de decisões", text: "Contexto para a próxima pessoa ou etapa." }
              ],
              notes: "Mostre que o valor inclui processo e rastreabilidade. Isso reduz retrabalho quando o projeto passa para outra ferramenta, pessoa ou ambiente."
            },
            {
              tone: "cobalt",
              layout: "split",
              eyebrow: "Depois do workshop",
              title: "Escolha o próximo caminho",
              accent: "próximo caminho",
              items: [
                { marker: "↓", label: "Exportar", text: "Leve os arquivos para outro fluxo." },
                { marker: "↗", label: "Hospedar ou sincronizar", text: "Planeje credenciais, backup e revisão antes de produção." }
              ],
              notes: "Cite os caminhos sem demonstrá-los nesta série. Produção, Sync e deploy exigem outro conjunto de permissões, testes e responsabilidades."
            },
            {
              tone: "terracotta",
              layout: "checklist",
              eyebrow: "Guardrails finais",
              title: "Leve estas regras com você",
              accent: "regras",
              items: [
                { marker: "✓", label: "Local primeiro", text: "Teste antes de compartilhar." },
                { marker: "✓", label: "Humano no loop", text: "Revise planos, diffs e resultado." },
                { marker: "✓", label: "Dados autorizados", text: "Preview é público e temporário." }
              ],
              notes: "Essas três regras atravessam qualquer projeto: segurança do ambiente, responsabilidade sobre mudanças e cuidado com o conteúdo compartilhado."
            },
            {
              tone: "cream",
              layout: "outro",
              eyebrow: "Fluxo principal concluído",
              title: "Ideia clara. Site revisável. Próximo passo.",
              accent: "Próximo passo",
              body: "O projeto está pronto para o handoff. Agora conecte esse fluxo à operação e ao crescimento da agência.",
              next: "10 · Escalar com A4A",
              notes: "Encerre o percurso principal convidando a pessoa a explicar o site em três frases: para quem é, o que oferece e qual ação espera. Em seguida, abra a extensão para agências."
            }
          ]
        },
        "agency-growth": {
          number: "10",
          slug: "10-agency-growth.html",
          shortTitle: "Escalar com A4A",
          title: "Escalar a agência com Automattic for Agencies",
          duration: "5 min",
          promise: "Menos fragmentação, novas margens e uma operação conectada.",
          slides: [
            {
              tone: "cobalt",
              layout: "cover",
              eyebrow: "Extensão para agências",
              title: "Escalar exige uma operação mais previsível",
              accent: "operação mais previsível",
              body: "O handoff termina um projeto. A próxima pergunta é como repetir a entrega com mais clientes, menos atrito e margens melhores.",
              takeaway: "Do projeto individual ao portfólio da agência",
              notes: "Faça a ponte com o site criado no workshop. Automattic for Agencies é um programa gratuito para agências e freelancers que reúne incentivos, suporte e gestão de produtos Automattic. [Sources] [PT-BR] Automattic for Agencies.pdf; https://automattic.com/for-agencies/; https://agencieshelp.automattic.com/knowledge-base/automattic-for-agencies-partnership-program-overview/"
            },
            {
              tone: "paper",
              layout: "comparison",
              eyebrow: "O problema de escala",
              title: "Fragmentação consome margem e foco",
              accent: "margem e foco",
              items: [
                { marker: "O", label: "Operação", text: "Painéis, licenças e cobranças dispersos consomem tempo faturável." },
                { marker: "R", label: "Risco", text: "Segurança, desempenho e suporte variam de cliente para cliente." }
              ],
              notes: "Relacione a fragmentação ao cotidiano da agência: cada nova stack adiciona manutenção, suporte e risco operacional. WordPress.com e Jetpack aparecem nos materiais como caminhos diferentes para reduzir esse peso. [Sources] [PT-BR] WordPress.com para Agências.pdf; [PT-BR] Jetpack para Agências.pdf"
            },
            {
              tone: "ink",
              layout: "steps",
              eyebrow: "Automattic for Agencies",
              title: "O programa combina três alavancas",
              accent: "três alavancas",
              items: [
                { marker: "1", label: "Economizar", text: "Até 80% de desconto em ferramentas e hospedagem elegíveis." },
                { marker: "2", label: "Receita recorrente", text: "Comissões de até 50% em ofertas elegíveis." },
                { marker: "3", label: "Visibilidade", text: "Diretórios, leads e suporte avançam conforme o nível." }
              ],
              notes: "Apresente os números como limites máximos, sujeitos à oferta e ao nível do programa, não como garantia. O cadastro é gratuito e não exige exclusividade. [Sources] A4A - TV 43_ 1920×1080 — PT-BR (1).png; https://automattic.com/for-agencies/; https://automattic.com/for-agencies/leads/"
            },
            {
              tone: "frost",
              layout: "comparison",
              eyebrow: "Escolha pela necessidade",
              title: "Uma parceria, bases diferentes",
              accent: "bases diferentes",
              items: [
                { marker: "W", label: "WordPress.com", text: "Hospedagem gerenciada, segurança, backups e desempenho integrados." },
                { marker: "J", label: "Jetpack", text: "Segurança, desempenho e recuperação para sites em diferentes hosts." }
              ],
              notes: "Não trate os produtos como uma escolha única para todo cliente. O programa também conecta WooCommerce, Pressable e WordPress VIP; a solução depende do portfólio e do serviço oferecido. [Sources] [PT-BR] WordPress.com para Agências.pdf; [PT-BR] Jetpack para Agências.pdf; https://automattic.com/for-agencies/"
            },
            {
              tone: "terracotta",
              layout: "outro",
              eyebrow: "Próxima camada",
              title: "Entre sem trocar seu modelo de negócio",
              accent: "sem trocar",
              body: "O cadastro é gratuito e sem exclusividade. Avalie os benefícios aplicáveis ao seu portfólio e preserve a escolha de cada cliente.",
              next: "11 · Skills e MCP",
              notes: "Use a chamada para ação fornecida como referência visual e direcione para agencies.automattic.com/signup. Esclareça que benefícios e uso de marca dependem do nível e das regras vigentes. [Sources] A4A - TV 43_ 1920×1080 — PT-BR (1).png; https://agencieshelp.automattic.com/knowledge-base/sign-up-for-automattic-for-agencies/; https://agencieshelp.automattic.com/knowledge-base/marketing-yourself-as-an-automattic-for-agencies-partner/"
            }
          ]
        },
        "mcp-for-agencies": {
          number: "11",
          slug: "11-mcp-for-agencies.html",
          shortTitle: "Skills e MCP",
          title: "Conectar agentes com Skills e MCP",
          duration: "5 min",
          promise: "Instruções especializadas, integrações autorizadas e controle humano.",
          slides: [
            {
              tone: "ink",
              layout: "cover",
              eyebrow: "IA na operação",
              title: "Skills orientam. MCP conecta.",
              accent: "MCP conecta",
              body: "Agent Skills ensinam como trabalhar. MCP oferece uma interface para acessar dados e ações de sistemas externos.",
              takeaway: "Contexto certo + acesso controlado",
              notes: "Corrija uma imprecisão do material: MCP é um padrão aberto adotado pela Automattic, não um padrão criado pela Automattic. Agent Skills e MCP resolvem problemas diferentes e podem ser usados em conjunto. [Sources] [PT-BR] Model Context Protocol (MCP) na Automattic.pdf; https://automattic.ai/mcp/; https://developer.wordpress.com/docs/agent-skills/"
            },
            {
              tone: "paper",
              layout: "comparison",
              eyebrow: "Papéis diferentes",
              title: "Separe instrução de integração",
              accent: "instrução de integração",
              items: [
                { marker: "S", label: "Agent Skill", text: "Um SKILL.md orienta tarefas WordPress com práticas e guardrails." },
                { marker: "M", label: "MCP", text: "Um padrão conecta o agente a ferramentas, dados e ações autorizadas." }
              ],
              notes: "Skills são arquivos versionáveis, instalados no projeto ou globalmente. MCP conecta clientes compatíveis a implementações específicas de cada produto. Nenhum dos dois elimina revisão, testes ou permissões. [Sources] https://developer.wordpress.com/docs/agent-skills/; https://developer.wordpress.com/docs/developer-tools/studio/agent-skills-wordpress-studio/; https://automattic.ai/mcp/"
            },
            {
              tone: "cobalt",
              layout: "flow",
              eyebrow: "Como a conexão funciona",
              title: "A permissão acompanha cada etapa",
              accent: "permissão",
              items: [
                { label: "1 · Conectar", text: "Escolha o cliente e o produto compatíveis." },
                { label: "2 · Autorizar", text: "Conceda somente dados e ações necessários." },
                { label: "3 · Confirmar", text: "Revise o resultado e as mudanças realizadas." }
              ],
              notes: "Cada produto tem configuração, autorização e capacidades próprias. Algumas integrações são somente leitura; outras podem criar, atualizar ou excluir. Leia a documentação da implementação antes de conectar. [Sources] https://automattic.ai/mcp/"
            },
            {
              tone: "frost",
              layout: "checklist",
              eyebrow: "Primeiros usos",
              title: "Comece por tarefas verificáveis",
              accent: "verificáveis",
              items: [
                { marker: "R", label: "Relatórios", text: "Consultar conteúdo e métricas com escopo definido." },
                { marker: "L", label: "Leitura", text: "Analisar produtos, pedidos ou atividade sem alterar dados." },
                { marker: "A", label: "Ações", text: "Escrever somente com aprovação, backup e ambiente adequado." }
              ],
              notes: "Para uma introdução, priorize leitura e relatórios. Dados de clientes, pedidos e conversas exigem atenção adicional. Não faça escrita remota nem operações de produção durante este workshop. [Sources] [PT-BR] Model Context Protocol (MCP) na Automattic.pdf; https://automattic.ai/mcp/"
            },
            {
              tone: "cream",
              layout: "outro",
              eyebrow: "Série concluída",
              title: "Automatize com governança",
              accent: "governança",
              body: "Skills dão consistência; MCP amplia o acesso. Use privilégio mínimo, dados autorizados e revisão humana.",
              next: "Voltar ao índice",
              notes: "Feche sem demonstrar uma conexão real. A mensagem é um modelo mental: Skills orientam o comportamento; MCP amplia o alcance; a equipe mantém responsabilidade, consentimento e controle."
            }
          ]
        }
      }
    },
    "en": {
      seriesTitle: "From brief to Preview · WordPress Studio",
      ui: {
        video: "Video",
        minute: "Minute",
        seriesIndex: "Series index",
        navigation: "Slide navigation",
        previous: "Previous slide",
        next: "Next slide",
        nextVideo: "Next video",
        openResource: "Open file on GitHub",
        speakerNotes: "Speaker notes",
        noNotes: "No additional notes for this slide."
      },
      moduleOrder: [
        "overview",
        "mini-brief",
        "create-site",
        "studio-code",
        "site-editor",
        "annotate",
        "preview",
        "apply-feedback",
        "next-steps",
        "agency-growth",
        "mcp-for-agencies"
      ],
      modules: {
        "overview": {
          number: "01",
          slug: "01-overview.html",
          shortTitle: "Define and plan",
          title: "Define the project with AI",
          duration: "5 min",
          promise: "Conversation → notes → open questions.",
          slides: [
            {
              tone: "cobalt",
              layout: "cover",
              eyebrow: "Phase 1 · Conversation and discovery",
              title: "Define the project before you build",
              accent: "Define",
              body: "In this lesson, a conversation about an AI event in Faro becomes context, decisions, and open questions.",
              takeaway: "You are here: conversation and discovery",
              notes: "Place this presentation at the beginning of the journey. Today's deliverable is a reliable set of conversation notes. Requirements, design, build, and review appear in later phases."
            },
            {
              tone: "paper",
              layout: "comparison",
              eyebrow: "1 · Listen",
              title: "Start with the conversation",
              accent: "conversation",
              items: [
                { marker: "S", label: "Scenario", text: "An AI event in Faro with two tracks and community participation." },
                { marker: "M", label: "Conversation brief", text: "A fictional meeting transcript + the agenda brief.", resource: "event-meeting-notes.md" }
              ],
              notes: "Introduce the simulation: the class receives notes from a conversation with the event organizers and the agenda document. The content is fictional and serves as raw material for product discovery practice. [Sources] Plano para a agenda evento (1).pdf; workshop/en/event-meeting-notes.md"
            },
            {
              tone: "frost",
              layout: "steps",
              eyebrow: "2 · Interpret",
              title: "AI turns discussion into decisions",
              accent: "decisions",
              items: [
                { label: "Goal", text: "What must the event make possible?" },
                { label: "Audiences", text: "Attendees, speakers, volunteers, and sponsors." },
                { label: "Capabilities", text: "Agenda, registration, forms, contact, and venue." },
                { label: "Questions", text: "Capacity, tickets, criteria, and responsible data use." }
              ],
              notes: "Demonstrate a request to the AI tool: separate facts, needs, hypotheses, and open questions. AI organizes the material; the team confirms decisions and retains control over speaker selection and communications. [Sources] workshop/en/event-meeting-notes.md"
            },
            {
              tone: "ink",
              layout: "flow",
              eyebrow: "The journey",
              title: "The conversation opens three phases",
              accent: "three phases",
              items: [
                { label: "1 · Discovery", text: "Listen, record, and clarify." },
                { label: "2 · Requirements", text: "Define purpose, audience, and voice." },
                { label: "3 · Design", text: "Explore the experience in Claude Design." }
              ],
              notes: "Show the progression without jumping to a solution: first understand the conversation; then record requirements in Markdown; only then explore design. Build and review follow these three phases."
            },
            {
              tone: "terracotta",
              layout: "outro",
              eyebrow: "Phase 1 deliverable",
              title: "Good notes preserve what the conversation revealed",
              accent: "Good notes",
              body: "Context, decisions, questions, and boundaries are ready to become requirements.",
              next: "02 · Create requirements.md",
              notes: "Close by confirming that the fictional meeting notes are the raw material for the next phase. We have not chosen layouts or components yet; first we will turn the conversation into verifiable requirements."
            }
          ]
        },
        "mini-brief": {
          number: "02",
          slug: "02-mini-brief.html",
          shortTitle: "Requirements",
          title: "Define the event requirements",
          duration: "5 min",
          promise: "Purpose, audience, and voice recorded in requirements.md.",
          slides: [
            {
              tone: "ink",
              layout: "cover",
              eyebrow: "Phase 2 · Requirements",
              title: "The conversation becomes an event brief",
              accent: "event brief",
              body: "The WordPress community organizes it. The wider Algarve audience must recognize itself in the proposition.",
              takeaway: "AI event in Faro · open beyond the WordPress community",
              notes: "Return to the meeting notes. The event comes from the WordPress community, but the website must welcome people with no WordPress connection who want to understand and apply artificial intelligence. [Sources] workshop/en/event-meeting-notes.md"
            },
            {
              tone: "paper",
              layout: "steps",
              eyebrow: "The mini-brief",
              title: "Three decisions focus the event",
              accent: "Three decisions",
              items: [
                { marker: "P", label: "Purpose", text: "Bring AI closer to local businesses and the community." },
                { marker: "A", label: "Audience", text: "Hotels, restaurants, travel agencies, and curious professionals." },
                { marker: "V", label: "Voice", text: "Welcoming, practical, clear, and free of technical jargon." }
              ],
              notes: "Explain that WordPress brings the community together; it is not a prerequisite for attending. Use examples from southern Portugal: hotel, restaurant, and travel-agency owners who want to understand practical uses of AI."
            },
            {
              tone: "cobalt",
              layout: "checklist",
              eyebrow: "Project record",
              title: "Record the agreement",
              accent: "agreement",
              items: [
                { marker: "MD", label: "requirements.md", text: "Purpose, audience, voice, and WordPress context.", resource: "requirements.md" },
                { marker: "02", label: "Experience", text: "Single or multiple pages, navigation, and mobile priority." },
                { marker: "03", label: "Boundaries", text: "Hypotheses, questions, and acceptance." }
              ],
              takeaway: "One source of truth for the next phases",
              notes: "Create requirements.md from the first conversation notes. Record that implementation will use WordPress and define the experience: a single or multipage structure, navigation flow, and desktop or mobile priority. Separate confirmed facts, decisions, hypotheses, boundaries, and open questions. [Sources] workshop/en/requirements.md"
            },
            {
              tone: "frost",
              layout: "comparison",
              eyebrow: "Phase 3 · Design",
              title: "Two artifacts guide the drafts",
              accent: "Two artifacts",
              items: [
                { marker: "DS", label: "Design System", text: "Colors, typography, components, and patterns generated or imported in Claude Design.", resource: "design-system.md" },
                { marker: "MD", label: "design.md", text: "Visual and interaction decisions requested from Claude Design and reviewed by the team.", resource: "design.md" }
              ],
              notes: "Official references say Claude Design can extract a Design System from code, slide decks, documents, and brand assets. design.md is a workshop convention: ask the tool to record decisions there and review the file before handoff. [Sources] https://support.claude.com/en/articles/14604397-set-up-your-design-system-in-claude-design; https://support.claude.com/en/articles/14604416-get-started-with-claude-design"
            },
            {
              tone: "cream",
              layout: "outro",
              eyebrow: "Phase 3 deliverable",
              title: "Claude Design turns requirements into drafts",
              accent: "drafts",
              body: "Attach requirements.md and references. Generate or import the Design System and record choices in design.md.",
              next: "03 · Create the site",
              notes: "Demonstrate the official flow: create a project, attach or import the Design System, add context, describe what to build, review on the canvas, and iterate. The first generation is a starting point, not the final solution. [Sources] https://www.anthropic.com/news/claude-design-anthropic-labs; https://support.claude.com/en/articles/14604416-get-started-with-claude-design"
            }
          ]
        },
        "create-site": {
          number: "03",
          slug: "03-create-site.html",
          shortTitle: "Create the site",
          title: "Create a site with Quick Start",
          duration: "5 min",
          promise: "A local base ready to receive the brief.",
          slides: [
            {
              tone: "terracotta",
              layout: "cover",
              eyebrow: "WordPress Studio",
              title: "The same base for everyone",
              accent: "same base",
              body: "Create a local site with Quick Start and learn only what this journey needs.",
              notes: "Introduce Studio as a local environment. The goal is not to explore every menu; it is to create a predictable base for building the page."
            },
            {
              tone: "paper",
              layout: "checklist",
              eyebrow: "Preflight",
              title: "Check before you begin",
              accent: "before",
              items: [
                { marker: "1", label: "Studio installed", text: "Use the stable version specified by the workshop." },
                { marker: "2", label: "Account connected", text: "Required for Studio Code and Preview." },
                { marker: "3", label: "Assets available", text: "Prepare the project folder." }
              ],
              notes: "Run this check before the event. If Studio Code is unavailable, keep the starter fallback site ready for the Site Editor portion."
            },
            {
              tone: "cobalt",
              layout: "flow",
              eyebrow: "Quick Start",
              title: "From zero to local WordPress",
              accent: "local WordPress",
              items: [
                { label: "Add site", text: "Start a project." },
                { label: "Build a new site", text: "Choose a new base." },
                { label: "Quick Start", text: "Use the guided setup." },
                { label: "Start", text: "Open the local site." }
              ],
              notes: "Show the English interface labels. Give the site a short, recognizable name so it remains clear during the Preview step."
            },
            {
              tone: "ink",
              layout: "split",
              eyebrow: "60-second tour",
              title: "Two sides of the same project",
              accent: "Two sides",
              items: [
                { marker: "↗", label: "Site", text: "See the local public experience." },
                { marker: "W", label: "WP Admin", text: "Enter the Site Editor and inspect structure." }
              ],
              notes: "Point out how to start and stop the site, open WP Admin, and visit the page. Save advanced features for later references."
            },
            {
              tone: "frost",
              layout: "outro",
              eyebrow: "Checkpoint",
              title: "The site opens. The editor opens. The brief is beside you.",
              accent: "brief",
              body: "That is the minimum base for assisted construction.",
              next: "04 · Studio Code",
              notes: "Confirm all three points live. If something fails, switch to the fallback starter site rather than spending the journey on configuration."
            }
          ]
        },
        "studio-code": {
          number: "04",
          slug: "04-studio-code.html",
          shortTitle: "Studio Code",
          title: "Implement with Studio Code",
          duration: "5 min",
          promise: "Three context sources, a chosen model, and supervised execution.",
          slides: [
            {
              tone: "cobalt",
              layout: "cover",
              eyebrow: "Phase 4 · Implementation",
              title: "Studio Code connects conversation and site",
              accent: "Studio Code",
              body: "Open the local site, enter the Studio Code tab, and work with the agent inside the project.",
              takeaway: "From the open project to assisted implementation",
              notes: "Give a short introduction: Studio Code is the coding agent built into the WordPress Studio app and also available in the CLI. On desktop, select the site and open the Studio Code tab; the agent then works in that project's directory. [Sources] https://developer.wordpress.com/docs/developer-tools/studio/studio-code/"
            },
            {
              tone: "paper",
              layout: "steps",
              eyebrow: "Core tools",
              title: "The agent works with the open site",
              accent: "open site",
              items: [
                { marker: "C", label: "Chat", text: "Receives instructions, files, and questions." },
                { marker: "F", label: "Files", text: "Reads and edits the site directory." },
                { marker: "W", label: "WP-CLI", text: "Runs commands in local WordPress." },
                { marker: "▣", label: "Screenshots", text: "Opens and captures the visual result." }
              ],
              notes: "Show only the essentials of the interface: conversation, attachments, model picker, and action history. The documentation states that the agent can read and write files, run WP-CLI, and capture the site. Remote operations are outside this demonstration. [Sources] https://developer.wordpress.com/docs/developer-tools/studio/studio-code/"
            },
            {
              tone: "frost",
              layout: "steps",
              eyebrow: "Available models · 2026-08-05",
              title: "Choose the model for the task",
              accent: "model",
              items: [
                { marker: "S5", label: "Claude Sonnet 5", text: "The fast, effective default for most tasks." },
                { marker: "O", label: "Claude Opus 4.8", text: "More capable for complex, multi-step tasks." },
                { marker: "G", label: "GPT 5.6 Sol", text: "A fast, effective OpenAI option for general tasks." }
              ],
              notes: "On desktop, use the menu at the bottom of the conversation; in the terminal, use /model. Explain that this list changes quickly and should be checked in the picker before the event. The official documentation verified on August 5, 2026 lists Sonnet 5 as the default, Opus 4.8, and GPT 5.6 Sol. [Sources] https://developer.wordpress.com/docs/developer-tools/studio/studio-code/"
            },
            {
              tone: "ink",
              layout: "flow",
              eyebrow: "Implementation context",
              title: "Three sources guide the agent",
              accent: "Three sources",
              items: [
                { marker: "R", label: "requirements.md", text: "Purpose, audience, features, and acceptance criteria.", resource: "requirements.md" },
                { marker: "D", label: "design.md", text: "Layout, behavior, and visual decisions.", resource: "design.md" },
                { marker: "DS", label: "Design System", text: "Colors, typography, components, tokens, and assets.", resource: "design-system.md" }
              ],
              notes: "Attach both Markdown files and point to the Design System folder or assets. Ask the agent to read all three sources, inspect the current site, flag conflicts, and propose a short plan before editing. File uploads are supported on desktop and in the CLI. [Sources] https://developer.wordpress.com/docs/developer-tools/studio/studio-code/"
            },
            {
              tone: "terracotta",
              layout: "outro",
              eyebrow: "Plan approved",
              title: "Context delivered. Agent at work.",
              accent: "Agent at work",
              body: "Authorize implementation in stages; then review the diff and desktop and mobile screenshots.",
              next: "05 · Site Editor",
              notes: "Once requirements.md, design.md, and the Design System are understood and the plan is approved, let the agent execute. Keep supervising: review permissions, the diff, and the visual result before continuing to the Site Editor. If Studio Code is unavailable, use the fallback site."
            }
          ]
        },
        "site-editor": {
          number: "05",
          slug: "05-site-editor.html",
          shortTitle: "Site Editor",
          title: "Review in the Site Editor",
          duration: "5 min",
          promise: "The page must remain editable and readable.",
          slides: [
            {
              tone: "cream",
              layout: "cover",
              eyebrow: "Visual review",
              title: "The agent builds. You decide.",
              accent: "You decide",
              body: "Use the Site Editor to test structure, content, and behavior on smaller screens.",
              notes: "Move from generation mode to decision mode. Visual review connects the technical result to the brief and the visitor experience."
            },
            {
              tone: "paper",
              layout: "steps",
              eyebrow: "Structure",
              title: "Is the page still WordPress?",
              accent: "WordPress",
              items: [
                { label: "Blocks", text: "Elements can be selected and edited." },
                { label: "Patterns", text: "The composition has recognizable logic." },
                { label: "Styles", text: "Global decisions did not become local exceptions." }
              ],
              notes: "Click key elements. A beautiful result that is hard to edit does not meet the journey's goal. Check that global styles remain meaningful."
            },
            {
              tone: "cobalt",
              layout: "checklist",
              eyebrow: "Content",
              title: "Read like a visitor, not an author",
              accent: "visitor",
              items: [
                { marker: "H", label: "Hierarchy", text: "Headings reveal the message order." },
                { marker: "→", label: "CTA", text: "The next action is unambiguous." },
                { marker: "Aa", label: "Readability", text: "Contrast and size support reading." }
              ],
              notes: "Move through the page without explaining it. If purpose or primary action only becomes clear through narration, the page still needs work."
            },
            {
              tone: "ink",
              layout: "comparison",
              eyebrow: "Responsiveness",
              title: "Same intention. Different width.",
              accent: "Different width",
              items: [
                { marker: "▭", label: "Desktop", text: "Rhythm, space, and reading line." },
                { marker: "▯", label: "Mobile", text: "Order, touch, wrapping, and focus." }
              ],
              notes: "Do not treat mobile as a miniature. Check section order, text wrapping, target size, and whether the CTA remains clear."
            },
            {
              tone: "terracotta",
              layout: "outro",
              eyebrow: "Checkpoint",
              title: "Make one manual change",
              accent: "manual",
              body: "Adjust copy or style and confirm that you retain control over the result.",
              next: "06 · Annotate",
              notes: "One small manual edit proves the page is not a black box. Save, then compare the result with the mini-brief again."
            }
          ]
        },
        "annotate": {
          number: "06",
          slug: "06-annotate.html",
          shortTitle: "Annotate",
          title: "Capture feedback with Annotate",
          duration: "5 min",
          promise: "Feedback tied to the element, problem, and outcome.",
          slides: [
            {
              tone: "ink",
              layout: "cover",
              eyebrow: "Contextual review",
              title: "Specific feedback creates better change",
              accent: "Specific feedback",
              body: "Select the element, describe the problem, and state what must remain.",
              notes: "Present Annotate as a bridge between visual inspection and change. The comment gains context because it is attached to the exact point on the page."
            },
            {
              tone: "paper",
              layout: "comparison",
              eyebrow: "Request quality",
              title: "Trade opinion for direction",
              accent: "direction",
              items: [
                { marker: "×", label: "“I don't like it”", text: "No problem, intent, or boundary." },
                { marker: "✓", label: "“Emphasize the CTA”", text: "Explain why and preserve the tone." }
              ],
              notes: "Compare a vague comment with a verifiable request. The latter connects change to the brief and protects characteristics that already work."
            },
            {
              tone: "cobalt",
              layout: "flow",
              eyebrow: "Useful annotation",
              title: "Four parts, one decision",
              accent: "one decision",
              items: [
                { label: "Element", text: "Where to change." },
                { label: "Problem", text: "What is not working." },
                { label: "Outcome", text: "What should improve." },
                { label: "Constraint", text: "What to preserve." }
              ],
              notes: "Use the formula to create two annotations, not a giant list. A few coherent changes are easier to review and demonstrate."
            },
            {
              tone: "frost",
              layout: "steps",
              eyebrow: "Change cycle",
              title: "Annotate. Propose. Review.",
              accent: "Review",
              items: [
                { label: "Annotate", text: "Capture feedback in context." },
                { label: "Propose", text: "Ask for a plan before changes." },
                { label: "Review", text: "Inspect the diff and screenshots." }
              ],
              notes: "Keep the same checkpoint pattern used with Studio Code. An annotation does not authorize any implementation; it opens a verifiable conversation."
            },
            {
              tone: "cream",
              layout: "outro",
              eyebrow: "Checkpoint",
              title: "Two changes. One clearer story.",
              accent: "clearer story",
              body: "If a change does not strengthen the brief, it does not enter this round.",
              next: "07 · Preview",
              notes: "Finish by showing before and after. Name which message or action became clearer instead of judging only whether it looks nicer."
            }
          ]
        },
        "preview": {
          number: "07",
          slug: "07-preview.html",
          shortTitle: "Preview",
          title: "Share a Preview",
          duration: "5 min",
          promise: "A public, temporary URL for gathering feedback.",
          slides: [
            {
              tone: "cobalt",
              layout: "cover",
              eyebrow: "Sharing",
              title: "Show it without publishing to production",
              accent: "without publishing",
              body: "Create a temporary Preview so another person can experience the page in a browser.",
              notes: "Be explicit from the start: Preview is temporary sharing, not permanent hosting. Use only fictional or authorized content."
            },
            {
              tone: "paper",
              layout: "flow",
              eyebrow: "Create Preview",
              title: "Name, create, copy",
              accent: "copy",
              items: [
                { label: "Name", text: "Use project and round." },
                { label: "Create", text: "Generate the remote version." },
                { label: "Open", text: "Test the URL as a visitor." },
                { label: "Copy", text: "Send it to your partner." }
              ],
              notes: "Choose a recognizable name such as ‘portfolio-r1’. Open the URL outside the editing session to test the recipient's actual experience."
            },
            {
              tone: "terracotta",
              layout: "checklist",
              eyebrow: "Before sharing",
              title: "Public. Temporary. Intentional.",
              accent: "Intentional",
              items: [
                { marker: "◎", label: "Public", text: "Anyone with the URL can access it." },
                { marker: "◷", label: "Temporary", text: "It is not the site's final destination." },
                { marker: "✓", label: "Authorized", text: "Review the data, images, and files sent." }
              ],
              notes: "Take a safety pause before creating the Preview. Remove real, confidential, or unauthorized information and confirm what will be shared."
            },
            {
              tone: "ink",
              layout: "steps",
              eyebrow: "Peer review",
              title: "Give the reviewer three lenses",
              accent: "three lenses",
              items: [
                { label: "Clarity", text: "Do I understand the purpose and offer?" },
                { label: "Action", text: "Do I know what to do next?" },
                { label: "Mobile", text: "Does the story work on a smaller screen?" }
              ],
              notes: "Do not ask ‘what do you think?’ Give short criteria and ask for evidence behind each comment. This makes the next round actionable."
            },
            {
              tone: "frost",
              layout: "outro",
              eyebrow: "Checkpoint",
              title: "Feedback received. No automatic change.",
              accent: "No automatic change",
              body: "Record the comment and return to the brief before deciding.",
              next: "08 · Apply feedback",
              notes: "Close by separating receiving from accepting feedback. The next step filters each suggestion through the project's goal and constraints."
            }
          ]
        },
        "apply-feedback": {
          number: "08",
          slug: "08-apply-feedback.html",
          shortTitle: "Apply feedback",
          title: "Apply feedback and update",
          duration: "5 min",
          promise: "A coherent second round, reviewed and shared.",
          slides: [
            {
              tone: "terracotta",
              layout: "cover",
              eyebrow: "Second round",
              title: "Feedback is not an automatic order",
              accent: "not an automatic order",
              body: "Use the brief to separate useful signals, preferences, and out-of-scope changes.",
              notes: "Explain that review is also a decision. The goal is not to obey every comment; it is to strengthen the page's purpose."
            },
            {
              tone: "paper",
              layout: "steps",
              eyebrow: "Filter",
              title: "Run each comment through three questions",
              accent: "three questions",
              items: [
                { label: "Does it help the audience?", text: "Does it solve a real difficulty?" },
                { label: "Does it strengthen the CTA?", text: "Does it clarify the action?" },
                { label: "Does it fit the scope?", text: "Does it avoid opening a new project?" }
              ],
              notes: "Classify comments quickly. Accept what has evidence and alignment; record what moves to later; reject what contradicts the brief."
            },
            {
              tone: "cobalt",
              layout: "statement",
              eyebrow: "Coherent change",
              title: "Solve one cause, not five symptoms",
              accent: "one cause",
              body: "Group related comments and propose a change that preserves the rest of the page.",
              notes: "If the CTA, hierarchy, and copy all feel weak, the cause may be an imprecise value proposition. Fix the message before decorating buttons."
            },
            {
              tone: "ink",
              layout: "checklist",
              eyebrow: "Local review",
              title: "Check before you update",
              accent: "before",
              items: [
                { marker: "B", label: "Brief", text: "The change strengthens the intent." },
                { marker: "D", label: "Desktop", text: "The rhythm remains balanced." },
                { marker: "M", label: "Mobile", text: "Order and CTA remain intact." }
              ],
              notes: "Repeat the criteria from version one. A feedback cycle only ends when the change has been validated locally."
            },
            {
              tone: "cream",
              layout: "outro",
              eyebrow: "Checkpoint",
              title: "Update Preview + recorded decision",
              accent: "recorded decision",
              body: "Share the new version and state what changed, what did not, and why.",
              next: "09 · Next steps",
              notes: "Use Update on the existing Preview, test the URL again, and write a short decision note. That closes the cycle transparently."
            }
          ]
        },
        "next-steps": {
          number: "09",
          slug: "09-next-steps.html",
          shortTitle: "Next steps",
          title: "From Preview to next steps",
          duration: "5 min",
          promise: "A clear close without turning Preview into production.",
          slides: [
            {
              tone: "ink",
              layout: "cover",
              eyebrow: "Closing",
              title: "Preview begins the handoff",
              accent: "begins",
              body: "You now have a demonstrable result and decisions that can guide the next phase.",
              notes: "Return to the final image from the first video. The participant now understands how the result was built, reviewed, and shared."
            },
            {
              tone: "paper",
              layout: "checklist",
              eyebrow: "What you created",
              title: "More than a page",
              accent: "More",
              items: [
                { marker: "1", label: "Local site", text: "An editable, safe base for continued work." },
                { marker: "2", label: "Reviewed Preview", text: "An accessible version for feedback." },
                { marker: "3", label: "Decision record", text: "Context for the next person or phase." }
              ],
              notes: "Show that the value includes process and traceability. This reduces rework when the project moves to another tool, person, or environment."
            },
            {
              tone: "cobalt",
              layout: "split",
              eyebrow: "After the workshop",
              title: "Choose the next path consciously",
              accent: "consciously",
              items: [
                { marker: "↓", label: "Export", text: "Move the files into another workflow." },
                { marker: "↗", label: "Host or sync", text: "Plan credentials, backup, and review before production." }
              ],
              notes: "Mention the paths without demonstrating them in this series. Production, Sync, and deployment require another set of permissions, tests, and responsibilities."
            },
            {
              tone: "terracotta",
              layout: "checklist",
              eyebrow: "Final guardrails",
              title: "Take these rules with you",
              accent: "rules",
              items: [
                { marker: "✓", label: "Local first", text: "Test before sharing." },
                { marker: "✓", label: "Human in the loop", text: "Review plans, diffs, and results." },
                { marker: "✓", label: "Authorized data", text: "Preview is public and temporary." }
              ],
              notes: "These three rules travel across projects: environment safety, responsibility for changes, and care with shared content."
            },
            {
              tone: "cream",
              layout: "outro",
              eyebrow: "Core journey complete",
              title: "Clear idea. Reviewable site. Conscious next step.",
              accent: "Conscious next step",
              body: "The project is ready for handoff. Now connect this workflow to agency operations and growth.",
              next: "10 · Scale with A4A",
              notes: "Close the core journey by asking participants to explain the site in three sentences: who it is for, what it offers, and which action it expects. Then open the agency extension."
            }
          ]
        },
        "agency-growth": {
          number: "10",
          slug: "10-agency-growth.html",
          shortTitle: "Scale with A4A",
          title: "Scale with Automattic for Agencies",
          duration: "5 min",
          promise: "Less fragmentation, stronger margins, and connected operations.",
          slides: [
            {
              tone: "cobalt",
              layout: "cover",
              eyebrow: "Agency extension",
              title: "Scale requires more predictable operations",
              accent: "predictable operations",
              body: "Handoff completes one project. The next question is how to repeat delivery for more clients with less friction and stronger margins.",
              takeaway: "From an individual project to an agency portfolio",
              notes: "Connect this lesson to the site built in the workshop. Automattic for Agencies is a free program for agencies and freelancers that brings together incentives, support, and management for Automattic products. [Sources] [PT-BR] Automattic for Agencies.pdf; https://automattic.com/for-agencies/; https://agencieshelp.automattic.com/knowledge-base/automattic-for-agencies-partnership-program-overview/"
            },
            {
              tone: "paper",
              layout: "comparison",
              eyebrow: "The scaling problem",
              title: "Fragmentation consumes margin and focus",
              accent: "margin and focus",
              items: [
                { marker: "O", label: "Operations", text: "Scattered dashboards, licenses, and billing consume billable time." },
                { marker: "R", label: "Risk", text: "Security, performance, and support vary from client to client." }
              ],
              notes: "Relate fragmentation to agency work: each new stack adds maintenance, support, and operational risk. WordPress.com and Jetpack appear in the supplied materials as different ways to reduce this burden. [Sources] [PT-BR] WordPress.com para Agências.pdf; [PT-BR] Jetpack para Agências.pdf"
            },
            {
              tone: "ink",
              layout: "steps",
              eyebrow: "Automattic for Agencies",
              title: "The program combines three levers",
              accent: "three levers",
              items: [
                { marker: "1", label: "Save", text: "Up to 80% off eligible tools and hosting." },
                { marker: "2", label: "Recurring revenue", text: "Commissions of up to 50% on eligible offers." },
                { marker: "3", label: "Visibility", text: "Directories, leads, and support advance with tier." }
              ],
              notes: "Present the figures as maximums subject to the offer and program tier, not guarantees. Registration is free and does not require exclusivity. [Sources] A4A - TV 43_ 1920×1080 — PT-BR (1).png; https://automattic.com/for-agencies/; https://automattic.com/for-agencies/leads/"
            },
            {
              tone: "frost",
              layout: "comparison",
              eyebrow: "Choose for the need",
              title: "One partnership, different foundations",
              accent: "different foundations",
              items: [
                { marker: "W", label: "WordPress.com", text: "Managed hosting with integrated security, backups, and performance." },
                { marker: "J", label: "Jetpack", text: "Security, performance, and recovery for sites across different hosts." }
              ],
              notes: "Do not treat one product as the answer for every client. The program also connects WooCommerce, Pressable, and WordPress VIP; the solution depends on the portfolio and service offered. [Sources] [PT-BR] WordPress.com para Agências.pdf; [PT-BR] Jetpack para Agências.pdf; https://automattic.com/for-agencies/"
            },
            {
              tone: "terracotta",
              layout: "outro",
              eyebrow: "The next layer",
              title: "Join without replacing your business model",
              accent: "without replacing",
              body: "Registration is free and nonexclusive. Evaluate the benefits that apply to your portfolio and preserve each client's choice.",
              next: "11 · Skills and MCP",
              notes: "Use the supplied call to action as a visual reference and point to agencies.automattic.com/signup. Clarify that benefits and brand usage depend on current tiers and rules. [Sources] A4A - TV 43_ 1920×1080 — PT-BR (1).png; https://agencieshelp.automattic.com/knowledge-base/sign-up-for-automattic-for-agencies/; https://agencieshelp.automattic.com/knowledge-base/marketing-yourself-as-an-automattic-for-agencies-partner/"
            }
          ]
        },
        "mcp-for-agencies": {
          number: "11",
          slug: "11-mcp-for-agencies.html",
          shortTitle: "Skills and MCP",
          title: "Connect agents with Skills and MCP",
          duration: "5 min",
          promise: "Specialized instructions, authorized integrations, and human control.",
          slides: [
            {
              tone: "ink",
              layout: "cover",
              eyebrow: "AI in operations",
              title: "Skills guide. MCP connects.",
              accent: "MCP connects",
              body: "Agent Skills teach how to work. MCP provides an interface for accessing data and actions in external systems.",
              takeaway: "The right context + controlled access",
              notes: "Correct an inaccuracy in the supplied material: MCP is an open standard adopted by Automattic, not a standard created by Automattic. Agent Skills and MCP solve different problems and can work together. [Sources] [PT-BR] Model Context Protocol (MCP) na Automattic.pdf; https://automattic.ai/mcp/; https://developer.wordpress.com/docs/agent-skills/"
            },
            {
              tone: "paper",
              layout: "comparison",
              eyebrow: "Different roles",
              title: "Separate instruction from integration",
              accent: "instruction from integration",
              items: [
                { marker: "S", label: "Agent Skill", text: "A SKILL.md guides WordPress tasks with practices and guardrails." },
                { marker: "M", label: "MCP", text: "A standard connects the agent to authorized tools, data, and actions." }
              ],
              notes: "Skills are versionable files installed in a project or globally. MCP connects compatible clients to product-specific implementations. Neither replaces review, testing, or permissions. [Sources] https://developer.wordpress.com/docs/agent-skills/; https://developer.wordpress.com/docs/developer-tools/studio/agent-skills-wordpress-studio/; https://automattic.ai/mcp/"
            },
            {
              tone: "cobalt",
              layout: "flow",
              eyebrow: "How connection works",
              title: "Permission follows every step",
              accent: "Permission",
              items: [
                { label: "1 · Connect", text: "Choose a compatible client and product." },
                { label: "2 · Authorize", text: "Grant only the data and actions required." },
                { label: "3 · Confirm", text: "Review the result and any changes performed." }
              ],
              notes: "Each product has its own setup, authorization, and capabilities. Some integrations are read-only; others may create, update, or delete. Read the implementation documentation before connecting. [Sources] https://automattic.ai/mcp/"
            },
            {
              tone: "frost",
              layout: "checklist",
              eyebrow: "First uses",
              title: "Start with verifiable tasks",
              accent: "verifiable",
              items: [
                { marker: "R", label: "Reports", text: "Query content and metrics with a defined scope." },
                { marker: "R", label: "Read", text: "Analyze products, orders, or activity without changing data." },
                { marker: "A", label: "Actions", text: "Write only with approval, backup, and the right environment." }
              ],
              notes: "For an introduction, prioritize reading and reporting. Customer, order, and conversation data require extra care. Do not perform remote writes or production operations during this workshop. [Sources] [PT-BR] Model Context Protocol (MCP) na Automattic.pdf; https://automattic.ai/mcp/"
            },
            {
              tone: "cream",
              layout: "outro",
              eyebrow: "Series complete",
              title: "Automate with governance",
              accent: "governance",
              body: "Skills add consistency; MCP expands access. Use least privilege, authorized data, and human review.",
              next: "Back to index",
              notes: "Close without demonstrating a real connection. The takeaway is a mental model: Skills guide behavior; MCP extends reach; the team remains responsible for consent and control."
            }
          ]
        }
      }
    },
    "es": {
      seriesTitle: "Del brief al Preview · WordPress Studio",
      ui: {
        video: "Vídeo",
        minute: "Minuto",
        seriesIndex: "Índice de la serie",
        navigation: "Navegación de slides",
        previous: "Slide anterior",
        next: "Siguiente slide",
        nextVideo: "Siguiente vídeo",
        openResource: "Abrir archivo en GitHub",
        speakerNotes: "Notas del presentador",
        noNotes: "No hay notas adicionales para este slide."
      },
      moduleOrder: [
        "overview",
        "mini-brief",
        "create-site",
        "studio-code",
        "site-editor",
        "annotate",
        "preview",
        "apply-feedback",
        "next-steps",
        "agency-growth",
        "mcp-for-agencies"
      ],
      modules: {
        "overview": {
          number: "01",
          slug: "01-overview.html",
          shortTitle: "Definir y planificar",
          title: "Definir el proyecto con IA",
          duration: "5 min",
          promise: "Conversación → notas → preguntas abiertas.",
          slides: [
            {
              tone: "cobalt",
              layout: "cover",
              eyebrow: "Fase 1 · Conversación y descubrimiento",
              title: "Antes de construir, define el proyecto",
              accent: "define",
              body: "En esta clase, una conversación sobre un evento de IA en Faro se convierte en contexto, decisiones y preguntas abiertas.",
              takeaway: "Estás aquí: conversación y descubrimiento",
              notes: "Sitúa esta presentación al comienzo del recorrido. La entrega de hoy son notas fiables de la conversación. Los requisitos, el diseño, la construcción y la revisión aparecen en fases posteriores."
            },
            {
              tone: "paper",
              layout: "comparison",
              eyebrow: "1 · Escuchar",
              title: "Comienza por la conversación",
              accent: "conversación",
              items: [
                { marker: "E", label: "Escenario", text: "Evento de IA en Faro, con dos pistas y participación de la comunidad." },
                { marker: "M", label: "Briefing de la conversación", text: "Transcripción ficticia de la reunión + briefing de la agenda.", resource: "event-meeting-notes.md" }
              ],
              notes: "Presenta la simulación: la clase recibe las notas de una conversación con la organización del evento y el documento de la agenda. El contenido es ficticio y sirve como materia prima para practicar descubrimiento de producto. [Sources] Plano para a agenda evento (1).pdf; workshop/es/event-meeting-notes.md"
            },
            {
              tone: "frost",
              layout: "steps",
              eyebrow: "2 · Interpretar",
              title: "La IA convierte la conversación en decisiones",
              accent: "decisiones",
              items: [
                { label: "Objetivo", text: "¿Qué debe hacer posible el evento?" },
                { label: "Públicos", text: "Participantes, ponentes, voluntarios y patrocinadores." },
                { label: "Funciones", text: "Agenda, inscripciones, formularios, contacto y lugar." },
                { label: "Dudas", text: "Capacidad, tickets, criterios y uso responsable de datos." }
              ],
              notes: "Demuestra una petición a la herramienta de IA: separar hechos, necesidades, hipótesis y preguntas abiertas. La IA organiza el material; el equipo confirma las decisiones y mantiene el control sobre la selección de ponentes y las comunicaciones. [Sources] workshop/es/event-meeting-notes.md"
            },
            {
              tone: "ink",
              layout: "flow",
              eyebrow: "El recorrido",
              title: "La conversación abre tres fases",
              accent: "tres fases",
              items: [
                { label: "1 · Descubrimiento", text: "Escuchar, registrar y aclarar." },
                { label: "2 · Requisitos", text: "Definir propósito, público y voz." },
                { label: "3 · Diseño", text: "Explorar la experiencia en Claude Design." }
              ],
              notes: "Muestra la progresión sin adelantar la solución: primero entendemos la conversación; después registramos requisitos en Markdown; solo entonces exploramos el diseño. La construcción y la revisión vienen después de estas tres fases."
            },
            {
              tone: "terracotta",
              layout: "outro",
              eyebrow: "Entrega de la fase 1",
              title: "Las buenas notas conservan lo que reveló la conversación",
              accent: "buenas notas",
              body: "Contexto, decisiones, dudas y límites quedan listos para convertirse en requisitos.",
              next: "02 · Crear requirements.md",
              notes: "Cierra confirmando que las notas ficticias son la materia prima de la fase siguiente. Todavía no elegimos layouts ni componentes; primero convertiremos la conversación en requisitos verificables."
            }
          ]
        },
        "mini-brief": {
          number: "02",
          slug: "02-mini-brief.html",
          shortTitle: "Requisitos",
          title: "Definir los requisitos del evento",
          duration: "5 min",
          promise: "Propósito, público y voz registrados en requirements.md.",
          slides: [
            {
              tone: "ink",
              layout: "cover",
              eyebrow: "Fase 2 · Requisitos",
              title: "La conversación se convierte en el brief del evento",
              accent: "brief del evento",
              body: "La comunidad WordPress lo organiza. El público general del Algarve debe reconocerse en la propuesta.",
              takeaway: "Evento de IA en Faro · abierto más allá de la comunidad WordPress",
              notes: "Retoma las notas de la reunión. El evento nace en la comunidad WordPress, pero el sitio debe acoger a personas sin relación con WordPress que quieren comprender y aplicar inteligencia artificial. [Sources] workshop/es/event-meeting-notes.md"
            },
            {
              tone: "paper",
              layout: "steps",
              eyebrow: "El mini-brief",
              title: "Tres decisiones enfocan el evento",
              accent: "Tres decisiones",
              items: [
                { marker: "P", label: "Propósito", text: "Acercar la IA a los negocios y a la comunidad local." },
                { marker: "A", label: "Público", text: "Hoteles, restaurantes, agencias de viajes y profesionales con curiosidad." },
                { marker: "V", label: "Voz", text: "Acogedora, práctica, clara y sin jerga técnica." }
              ],
              notes: "Explica que WordPress reúne a la comunidad, pero no es un requisito para participar. Usa ejemplos del sur de Portugal: propietarios de hoteles, restaurantes y agencias de viajes que quieren entender usos prácticos de la IA."
            },
            {
              tone: "cobalt",
              layout: "checklist",
              eyebrow: "Registro del proyecto",
              title: "Registra el acuerdo",
              accent: "acuerdo",
              items: [
                { marker: "MD", label: "requirements.md", text: "Propósito, público, voz y contexto WordPress.", resource: "requirements.md" },
                { marker: "02", label: "Experiencia", text: "Página única o multipágina, navegación y prioridad móvil." },
                { marker: "03", label: "Límites", text: "Hipótesis, dudas y aceptación." }
              ],
              takeaway: "Una fuente de verdad para las próximas fases",
              notes: "Crea requirements.md a partir de las notas de la primera conversación. Registra que la implementación será en WordPress y define la experiencia: página única o multipágina, flujo de navegación y prioridad entre escritorio y móvil. Separa hechos confirmados, decisiones, hipótesis, límites y preguntas abiertas. [Sources] workshop/es/requirements.md"
            },
            {
              tone: "frost",
              layout: "comparison",
              eyebrow: "Fase 3 · Diseño",
              title: "Dos artefactos orientan los borradores",
              accent: "Dos artefactos",
              items: [
                { marker: "DS", label: "Design System", text: "Colores, tipografía, componentes y patrones generados o importados en Claude Design.", resource: "design-system.md" },
                { marker: "MD", label: "design.md", text: "Decisiones visuales y de interacción solicitadas a Claude Design y revisadas por el equipo.", resource: "design.md" }
              ],
              notes: "Las referencias oficiales indican que Claude Design puede extraer un Design System de código, presentaciones, documentos y assets de marca. design.md es una convención de este workshop: pide a la herramienta que registre allí las decisiones y revisa el archivo antes del handoff. [Sources] https://support.claude.com/en/articles/14604397-set-up-your-design-system-in-claude-design; https://support.claude.com/en/articles/14604416-get-started-with-claude-design"
            },
            {
              tone: "cream",
              layout: "outro",
              eyebrow: "Entrega de la fase 3",
              title: "Claude Design convierte requisitos en borradores",
              accent: "borradores",
              body: "Adjunta requirements.md y referencias. Genera o importa el Design System y registra las decisiones en design.md.",
              next: "03 · Crear el sitio",
              notes: "Demuestra el flujo oficial: crear un proyecto, adjuntar o importar el Design System, añadir contexto, describir lo que se quiere construir, revisar en el canvas e iterar. La primera generación es un punto de partida, no la solución final. [Sources] https://www.anthropic.com/news/claude-design-anthropic-labs; https://support.claude.com/en/articles/14604416-get-started-with-claude-design"
            }
          ]
        },
        "create-site": {
          number: "03",
          slug: "03-create-site.html",
          shortTitle: "Crear el sitio",
          title: "Crear un sitio con Quick Start",
          duration: "5 min",
          promise: "Una base local lista para recibir el brief.",
          slides: [
            {
              tone: "terracotta",
              layout: "cover",
              eyebrow: "WordPress Studio",
              title: "La misma base para todos",
              accent: "misma base",
              body: "Crea un sitio local con Quick Start y conoce solamente lo necesario para este recorrido.",
              notes: "Presenta Studio como entorno local. El objetivo no es explorar todos los menús, sino obtener una base predecible para construir la página."
            },
            {
              tone: "paper",
              layout: "checklist",
              eyebrow: "Preflight",
              title: "Comprueba antes de comenzar",
              accent: "antes",
              items: [
                { marker: "1", label: "Studio instalado", text: "Usa la versión estable indicada por el workshop." },
                { marker: "2", label: "Cuenta conectada", text: "Necesaria para Studio Code y Preview." },
                { marker: "3", label: "Assets disponibles", text: "Prepara la carpeta del proyecto." }
              ],
              notes: "Realiza esta comprobación antes del evento. Si Studio Code no está disponible, conserva el sitio inicial de fallback para continuar en Site Editor."
            },
            {
              tone: "cobalt",
              layout: "flow",
              eyebrow: "Quick Start",
              title: "De cero a WordPress local",
              accent: "WordPress local",
              items: [
                { label: "Add site", text: "Inicia un proyecto." },
                { label: "Build a new site", text: "Elige una base nueva." },
                { label: "Quick Start", text: "Usa la configuración guiada." },
                { label: "Start", text: "Abre el sitio local." }
              ],
              notes: "Muestra los rótulos de la interfaz en inglés y explícalos en español. Asigna al sitio un nombre breve y reconocible para evitar confusión en Preview."
            },
            {
              tone: "ink",
              layout: "split",
              eyebrow: "Tour de 60 segundos",
              title: "Dos lados del mismo proyecto",
              accent: "Dos lados",
              items: [
                { marker: "↗", label: "Site", text: "Observa la experiencia pública local." },
                { marker: "W", label: "WP Admin", text: "Entra en Site Editor y revisa la estructura." }
              ],
              notes: "Señala dónde iniciar y detener el sitio, abrir WP Admin y visitar la página. Deja las funciones avanzadas para referencias posteriores."
            },
            {
              tone: "frost",
              layout: "outro",
              eyebrow: "Checkpoint",
              title: "El sitio abre. El editor abre. El brief está al lado.",
              accent: "brief",
              body: "Esta es la base mínima para comenzar la construcción asistida.",
              next: "04 · Studio Code",
              notes: "Confirma los tres puntos en directo. Si algo falla, cambia al sitio inicial de fallback en lugar de consumir el tiempo del recorrido con configuración."
            }
          ]
        },
        "studio-code": {
          number: "04",
          slug: "04-studio-code.html",
          shortTitle: "Studio Code",
          title: "Implementar con Studio Code",
          duration: "5 min",
          promise: "Tres fuentes de contexto, modelo elegido y ejecución supervisada.",
          slides: [
            {
              tone: "cobalt",
              layout: "cover",
              eyebrow: "Fase 4 · Implementación",
              title: "Studio Code conecta conversación y sitio",
              accent: "Studio Code",
              body: "Abre el sitio local, entra en la pestaña Studio Code y trabaja con el agente dentro del proyecto.",
              takeaway: "Del proyecto abierto a una implementación asistida",
              notes: "Haz una presentación breve: Studio Code es el agente de programación integrado en la aplicación WordPress Studio y también disponible en la CLI. En desktop, selecciona el sitio y abre la pestaña Studio Code; el agente pasa a trabajar en el directorio de ese proyecto. [Sources] https://developer.wordpress.com/docs/developer-tools/studio/studio-code/"
            },
            {
              tone: "paper",
              layout: "steps",
              eyebrow: "Herramientas básicas",
              title: "El agente trabaja con el sitio abierto",
              accent: "sitio abierto",
              items: [
                { marker: "C", label: "Chat", text: "Recibe instrucciones, archivos y preguntas." },
                { marker: "F", label: "Archivos", text: "Lee y edita el directorio del sitio." },
                { marker: "W", label: "WP-CLI", text: "Ejecuta comandos en el WordPress local." },
                { marker: "▣", label: "Capturas", text: "Abre y registra el resultado visual." }
              ],
              notes: "Muestra solo lo esencial de la interfaz: conversación, adjuntos, selector de modelo e historial de acciones. La documentación indica que el agente puede leer y escribir archivos, ejecutar WP-CLI y capturar el sitio. Las operaciones remotas quedan fuera de esta demostración. [Sources] https://developer.wordpress.com/docs/developer-tools/studio/studio-code/"
            },
            {
              tone: "frost",
              layout: "steps",
              eyebrow: "Modelos disponibles · 05/08/2026",
              title: "Elige el modelo para la tarea",
              accent: "modelo",
              items: [
                { marker: "S5", label: "Claude Sonnet 5", text: "La opción predeterminada, rápida y eficaz para la mayoría de las tareas." },
                { marker: "O", label: "Claude Opus 4.8", text: "Más capaz para tareas complejas y con varias etapas." },
                { marker: "G", label: "GPT 5.6 Sol", text: "Una opción OpenAI rápida y eficaz para tareas generales." }
              ],
              notes: "En desktop, usa el menú de la parte inferior de la conversación; en el terminal, usa /model. Explica que esta lista cambia rápidamente y debe comprobarse en el selector antes del evento. La documentación oficial verificada el 5 de agosto de 2026 enumera Sonnet 5 como predeterminado, Opus 4.8 y GPT 5.6 Sol. [Sources] https://developer.wordpress.com/docs/developer-tools/studio/studio-code/"
            },
            {
              tone: "ink",
              layout: "flow",
              eyebrow: "Contexto de implementación",
              title: "Tres fuentes guían al agente",
              accent: "Tres fuentes",
              items: [
                { marker: "R", label: "requirements.md", text: "Propósito, público, funcionalidades y criterios de aceptación.", resource: "requirements.md" },
                { marker: "D", label: "design.md", text: "Layout, comportamiento y decisiones visuales.", resource: "design.md" },
                { marker: "DS", label: "Design System", text: "Colores, tipografía, componentes, tokens y assets.", resource: "design-system.md" }
              ],
              notes: "Adjunta los dos archivos Markdown e indica la carpeta o los assets del Design System. Pide al agente que lea las tres fuentes, inspeccione el sitio actual, señale conflictos y proponga un plan breve antes de editar. La carga de archivos está disponible en desktop y en la CLI. [Sources] https://developer.wordpress.com/docs/developer-tools/studio/studio-code/"
            },
            {
              tone: "terracotta",
              layout: "outro",
              eyebrow: "Plan aprobado",
              title: "Contexto entregado. Agente en acción.",
              accent: "Agente en acción",
              body: "Autoriza la implementación por etapas; después revisa el diff y las capturas en desktop y mobile.",
              next: "05 · Site Editor",
              notes: "Cuando requirements.md, design.md y el Design System se hayan comprendido y el plan esté aprobado, deja que el agente ejecute. Continúa supervisando: revisa permisos, diff y resultado visual antes de seguir al Site Editor. Si Studio Code no está disponible, usa el sitio de fallback."
            }
          ]
        },
        "site-editor": {
          number: "05",
          slug: "05-site-editor.html",
          shortTitle: "Site Editor",
          title: "Revisar en Site Editor",
          duration: "5 min",
          promise: "La página debe seguir siendo editable y legible.",
          slides: [
            {
              tone: "cream",
              layout: "cover",
              eyebrow: "Revisión visual",
              title: "El agente construye. Tú decides.",
              accent: "Tú decides",
              body: "Usa Site Editor para probar estructura, contenido y comportamiento en pantallas pequeñas.",
              notes: "Cambia del modo de generación al modo de decisión. La revisión visual conecta el resultado técnico con el brief y la experiencia del visitante."
            },
            {
              tone: "paper",
              layout: "steps",
              eyebrow: "Estructura",
              title: "¿La página sigue siendo WordPress?",
              accent: "WordPress",
              items: [
                { label: "Bloques", text: "Los elementos pueden seleccionarse y editarse." },
                { label: "Patterns", text: "La composición tiene una lógica reconocible." },
                { label: "Styles", text: "Las decisiones globales no se convirtieron en excepciones locales." }
              ],
              notes: "Haz clic en elementos clave. Un resultado bonito pero difícil de editar no cumple el objetivo. Comprueba también que los estilos globales conserven sentido."
            },
            {
              tone: "cobalt",
              layout: "checklist",
              eyebrow: "Contenido",
              title: "Lee como visitante, no como autor",
              accent: "visitante",
              items: [
                { marker: "H", label: "Jerarquía", text: "Los títulos revelan el orden del mensaje." },
                { marker: "→", label: "CTA", text: "La siguiente acción aparece sin ambigüedad." },
                { marker: "Aa", label: "Legibilidad", text: "Contraste y tamaño sostienen la lectura." }
              ],
              notes: "Recorre la página sin explicar nada. Si el propósito o la acción principal solo se entienden con tu narración, la página aún necesita revisión."
            },
            {
              tone: "ink",
              layout: "comparison",
              eyebrow: "Responsive",
              title: "Misma intención. Otro ancho.",
              accent: "Otro ancho",
              items: [
                { marker: "▭", label: "Desktop", text: "Ritmo, espacio y línea de lectura." },
                { marker: "▯", label: "Mobile", text: "Orden, toque, cortes y foco." }
              ],
              notes: "No trates mobile como una miniatura. Revisa el orden de las secciones, cortes de texto, tamaño de objetivos y si la CTA continúa siendo evidente."
            },
            {
              tone: "terracotta",
              layout: "outro",
              eyebrow: "Checkpoint",
              title: "Haz un cambio manual",
              accent: "manual",
              body: "Ajusta un texto o estilo y confirma que mantienes el control del resultado.",
              next: "06 · Annotate",
              notes: "Una pequeña edición manual demuestra que la página no es una caja negra. Guarda y vuelve a comparar con el mini-brief."
            }
          ]
        },
        "annotate": {
          number: "06",
          slug: "06-annotate.html",
          shortTitle: "Annotate",
          title: "Registrar feedback con Annotate",
          duration: "5 min",
          promise: "Feedback ligado al elemento, al problema y al resultado.",
          slides: [
            {
              tone: "ink",
              layout: "cover",
              eyebrow: "Revisión contextual",
              title: "El feedback específico mejora el cambio",
              accent: "específico",
              body: "Selecciona el elemento, describe el problema e indica lo que debe conservarse.",
              notes: "Presenta Annotate como puente entre inspección visual y cambio. El comentario gana contexto porque está ligado al punto exacto de la página."
            },
            {
              tone: "paper",
              layout: "comparison",
              eyebrow: "Calidad de la solicitud",
              title: "Cambia opinión por dirección",
              accent: "dirección",
              items: [
                { marker: "×", label: "“No me gusta”", text: "Sin problema, intención ni límite." },
                { marker: "✓", label: "“Destaca la CTA”", text: "Explica por qué y conserva el tono." }
              ],
              notes: "Compara un comentario vago con una solicitud verificable. La segunda conecta el cambio con el brief y protege lo que ya funciona."
            },
            {
              tone: "cobalt",
              layout: "flow",
              eyebrow: "Anotación útil",
              title: "Cuatro partes, una decisión",
              accent: "una decisión",
              items: [
                { label: "Elemento", text: "Dónde cambiar." },
                { label: "Problema", text: "Qué no funciona." },
                { label: "Resultado", text: "Qué debe mejorar." },
                { label: "Restricción", text: "Qué debe conservarse." }
              ],
              notes: "Usa la fórmula para crear dos anotaciones, no una lista enorme. Pocos cambios coherentes son más fáciles de revisar y demostrar."
            },
            {
              tone: "frost",
              layout: "steps",
              eyebrow: "Ciclo de cambio",
              title: "Anota. Propón. Revisa.",
              accent: "Revisa",
              items: [
                { label: "Anota", text: "Registra el feedback en contexto." },
                { label: "Propón", text: "Pide un plan antes del cambio." },
                { label: "Revisa", text: "Comprueba el diff y las capturas." }
              ],
              notes: "Mantén el mismo patrón de checkpoint de Studio Code. Una anotación no autoriza cualquier implementación; abre una conversación verificable."
            },
            {
              tone: "cream",
              layout: "outro",
              eyebrow: "Checkpoint",
              title: "Dos cambios. Una historia más clara.",
              accent: "más clara",
              body: "Si la modificación no refuerza el brief, no entra en esta ronda.",
              next: "07 · Preview",
              notes: "Termina mostrando el antes y el después. Indica qué mensaje o acción se volvió más claro, en lugar de valorar solamente si se ve más bonito."
            }
          ]
        },
        "preview": {
          number: "07",
          slug: "07-preview.html",
          shortTitle: "Preview",
          title: "Compartir un Preview",
          duration: "5 min",
          promise: "Una URL pública y temporal para recoger feedback.",
          slides: [
            {
              tone: "cobalt",
              layout: "cover",
              eyebrow: "Compartir",
              title: "Muestra sin publicar en producción",
              accent: "sin publicar",
              body: "Crea un Preview temporal para que otra persona experimente la página en el navegador.",
              notes: "Aclara desde el principio: Preview es una forma temporal de compartir, no alojamiento permanente. Usa solamente contenido ficticio o autorizado."
            },
            {
              tone: "paper",
              layout: "flow",
              eyebrow: "Crear Preview",
              title: "Nombra, crea, copia",
              accent: "copia",
              items: [
                { label: "Nombrar", text: "Usa proyecto y ronda." },
                { label: "Crear", text: "Genera la versión remota." },
                { label: "Abrir", text: "Prueba la URL como visitante." },
                { label: "Copiar", text: "Envíala a tu pareja." }
              ],
              notes: "Elige un nombre reconocible, como ‘portfolio-r1’. Abre la URL fuera de la sesión de edición para probar la experiencia real de quien la recibe."
            },
            {
              tone: "terracotta",
              layout: "checklist",
              eyebrow: "Antes de compartir",
              title: "Público. Temporal. Intencional.",
              accent: "Intencional",
              items: [
                { marker: "◎", label: "Público", text: "Cualquier persona con la URL puede acceder." },
                { marker: "◷", label: "Temporal", text: "No es el destino final del sitio." },
                { marker: "✓", label: "Autorizado", text: "Revisa datos, imágenes y archivos enviados." }
              ],
              notes: "Haz una pausa de seguridad antes de crear el Preview. Elimina información real, confidencial o no autorizada y confirma lo que se compartirá."
            },
            {
              tone: "ink",
              layout: "steps",
              eyebrow: "Revisión en pareja",
              title: "Da tres lentes a quien revisa",
              accent: "tres lentes",
              items: [
                { label: "Claridad", text: "¿Comprendo el propósito y la oferta?" },
                { label: "Acción", text: "¿Sé qué hacer después?" },
                { label: "Mobile", text: "¿La historia funciona en una pantalla pequeña?" }
              ],
              notes: "No preguntes ‘¿qué te parece?’. Proporciona criterios breves y pide una evidencia para cada comentario. Así la siguiente ronda puede aplicarse."
            },
            {
              tone: "frost",
              layout: "outro",
              eyebrow: "Checkpoint",
              title: "Feedback recibido. Ningún cambio automático.",
              accent: "Ningún cambio automático",
              body: "Registra el comentario y vuelve al brief antes de decidir.",
              next: "08 · Aplicar feedback",
              notes: "Cierra diferenciando recibir y aceptar feedback. La siguiente etapa filtra cada sugerencia según el objetivo y las restricciones del proyecto."
            }
          ]
        },
        "apply-feedback": {
          number: "08",
          slug: "08-apply-feedback.html",
          shortTitle: "Aplicar feedback",
          title: "Aplicar feedback y actualizar",
          duration: "5 min",
          promise: "Una segunda ronda coherente, revisada y compartida.",
          slides: [
            {
              tone: "terracotta",
              layout: "cover",
              eyebrow: "Segunda ronda",
              title: "El feedback no es una orden automática",
              accent: "no es una orden",
              body: "Usa el brief para separar señales útiles, preferencias y cambios fuera de alcance.",
              notes: "Explica que revisar también es decidir. El objetivo no es obedecer todos los comentarios, sino reforzar el propósito de la página."
            },
            {
              tone: "paper",
              layout: "steps",
              eyebrow: "Filtro",
              title: "Pasa cada comentario por tres preguntas",
              accent: "tres preguntas",
              items: [
                { label: "¿Ayuda al público?", text: "¿Resuelve una dificultad real?" },
                { label: "¿Refuerza la CTA?", text: "¿Aclara la acción?" },
                { label: "¿Cabe en el alcance?", text: "¿Evita abrir un proyecto nuevo?" }
              ],
              notes: "Clasifica los comentarios rápidamente. Acepta lo que tenga evidencia y encaje; registra lo que queda para después; rechaza lo que contradiga el brief."
            },
            {
              tone: "cobalt",
              layout: "statement",
              eyebrow: "Cambio coherente",
              title: "Resuelve una causa, no cinco síntomas",
              accent: "una causa",
              body: "Agrupa comentarios relacionados y propón una modificación que conserve el resto de la página.",
              notes: "Si CTA, jerarquía y texto parecen débiles, la causa puede ser una propuesta de valor imprecisa. Corrige el mensaje antes de decorar botones."
            },
            {
              tone: "ink",
              layout: "checklist",
              eyebrow: "Revisión local",
              title: "Comprueba antes de actualizar",
              accent: "antes",
              items: [
                { marker: "B", label: "Brief", text: "El cambio refuerza la intención." },
                { marker: "D", label: "Desktop", text: "El ritmo continúa equilibrado." },
                { marker: "M", label: "Mobile", text: "El orden y la CTA siguen íntegros." }
              ],
              notes: "Repite los mismos criterios de la primera versión. Un ciclo de feedback solo termina cuando el cambio se ha validado localmente."
            },
            {
              tone: "cream",
              layout: "outro",
              eyebrow: "Checkpoint",
              title: "Update Preview + decisión registrada",
              accent: "decisión registrada",
              body: "Comparte la nueva versión e indica qué cambió, qué no cambió y por qué.",
              next: "09 · Próximos pasos",
              notes: "Usa Update en el Preview existente, prueba la URL de nuevo y escribe una nota breve de decisión. Así se cierra el ciclo con transparencia."
            }
          ]
        },
        "next-steps": {
          number: "09",
          slug: "09-next-steps.html",
          shortTitle: "Próximos pasos",
          title: "Del Preview a los próximos pasos",
          duration: "5 min",
          promise: "Un cierre claro sin convertir Preview en producción.",
          slides: [
            {
              tone: "ink",
              layout: "cover",
              eyebrow: "Cierre",
              title: "Preview inicia el handoff",
              accent: "inicia",
              body: "Ahora tienes un resultado demostrable y decisiones que pueden orientar la siguiente fase.",
              notes: "Vuelve a la imagen final del primer vídeo. El participante ahora sabe cómo se construyó, revisó y compartió el resultado."
            },
            {
              tone: "paper",
              layout: "checklist",
              eyebrow: "Lo que se creó",
              title: "Más que una página",
              accent: "Más",
              items: [
                { marker: "1", label: "Sitio local", text: "Una base editable y segura para continuar." },
                { marker: "2", label: "Preview revisado", text: "Una versión accesible para feedback." },
                { marker: "3", label: "Registro de decisiones", text: "Contexto para la siguiente persona o etapa." }
              ],
              notes: "Muestra que el valor incluye proceso y trazabilidad. Esto reduce retrabajo cuando el proyecto pasa a otra herramienta, persona o entorno."
            },
            {
              tone: "cobalt",
              layout: "split",
              eyebrow: "Después del workshop",
              title: "Elige el siguiente camino",
              accent: "siguiente camino",
              items: [
                { marker: "↓", label: "Exportar", text: "Lleva los archivos a otro flujo." },
                { marker: "↗", label: "Alojar o sincronizar", text: "Planifica credenciales, backup y revisión antes de producción." }
              ],
              notes: "Menciona los caminos sin demostrarlos en esta serie. Producción, Sync y deployment requieren otro conjunto de permisos, pruebas y responsabilidades."
            },
            {
              tone: "terracotta",
              layout: "checklist",
              eyebrow: "Guardrails finales",
              title: "Lleva estas reglas contigo",
              accent: "reglas",
              items: [
                { marker: "✓", label: "Local primero", text: "Prueba antes de compartir." },
                { marker: "✓", label: "Humano en el proceso", text: "Revisa planes, diffs y resultados." },
                { marker: "✓", label: "Datos autorizados", text: "Preview es público y temporal." }
              ],
              notes: "Estas tres reglas atraviesan cualquier proyecto: seguridad del entorno, responsabilidad sobre los cambios y cuidado con el contenido compartido."
            },
            {
              tone: "cream",
              layout: "outro",
              eyebrow: "Recorrido principal completado",
              title: "Idea clara. Sitio revisable. Siguiente paso.",
              accent: "Siguiente paso",
              body: "El proyecto está listo para el handoff. Ahora conecta este flujo con la operación y el crecimiento de la agencia.",
              next: "10 · Escalar con A4A",
              notes: "Cierra el recorrido principal pidiendo a la persona que explique el sitio en tres frases: para quién es, qué ofrece y qué acción espera. Después, abre la extensión para agencias."
            }
          ]
        },
        "agency-growth": {
          number: "10",
          slug: "10-agency-growth.html",
          shortTitle: "Escalar con A4A",
          title: "Escalar con Automattic for Agencies",
          duration: "5 min",
          promise: "Menos fragmentación, mejores márgenes y una operación conectada.",
          slides: [
            {
              tone: "cobalt",
              layout: "cover",
              eyebrow: "Extensión para agencias",
              title: "Escalar exige una operación más predecible",
              accent: "operación más predecible",
              body: "El handoff completa un proyecto. La siguiente pregunta es cómo repetir la entrega para más clientes con menos fricción y mejores márgenes.",
              takeaway: "Del proyecto individual al portafolio de la agencia",
              notes: "Conecta esta lección con el sitio creado en el workshop. Automattic for Agencies es un programa gratuito para agencias y freelancers que reúne incentivos, soporte y gestión de productos Automattic. [Sources] [PT-BR] Automattic for Agencies.pdf; https://automattic.com/for-agencies/; https://agencieshelp.automattic.com/knowledge-base/automattic-for-agencies-partnership-program-overview/"
            },
            {
              tone: "paper",
              layout: "comparison",
              eyebrow: "El problema de escala",
              title: "La fragmentación consume margen y foco",
              accent: "margen y foco",
              items: [
                { marker: "O", label: "Operación", text: "Paneles, licencias y facturación dispersos consumen tiempo facturable." },
                { marker: "R", label: "Riesgo", text: "Seguridad, rendimiento y soporte varían de un cliente a otro." }
              ],
              notes: "Relaciona la fragmentación con el trabajo de agencia: cada nueva stack añade mantenimiento, soporte y riesgo operativo. WordPress.com y Jetpack aparecen en los materiales proporcionados como caminos distintos para reducir ese peso. [Sources] [PT-BR] WordPress.com para Agências.pdf; [PT-BR] Jetpack para Agências.pdf"
            },
            {
              tone: "ink",
              layout: "steps",
              eyebrow: "Automattic for Agencies",
              title: "El programa combina tres palancas",
              accent: "tres palancas",
              items: [
                { marker: "1", label: "Ahorrar", text: "Hasta un 80% de descuento en herramientas y hosting elegibles." },
                { marker: "2", label: "Ingresos recurrentes", text: "Comisiones de hasta un 50% en ofertas elegibles." },
                { marker: "3", label: "Visibilidad", text: "Directorios, leads y soporte avanzan según el nivel." }
              ],
              notes: "Presenta las cifras como máximos sujetos a la oferta y al nivel del programa, no como garantías. El registro es gratuito y no exige exclusividad. [Sources] A4A - TV 43_ 1920×1080 — PT-BR (1).png; https://automattic.com/for-agencies/; https://automattic.com/for-agencies/leads/"
            },
            {
              tone: "frost",
              layout: "comparison",
              eyebrow: "Elige según la necesidad",
              title: "Una alianza, bases diferentes",
              accent: "bases diferentes",
              items: [
                { marker: "W", label: "WordPress.com", text: "Hosting gestionado con seguridad, backups y rendimiento integrados." },
                { marker: "J", label: "Jetpack", text: "Seguridad, rendimiento y recuperación para sitios en distintos hosts." }
              ],
              notes: "No presentes un producto como la respuesta para todos los clientes. El programa también conecta WooCommerce, Pressable y WordPress VIP; la solución depende del portafolio y del servicio ofrecido. [Sources] [PT-BR] WordPress.com para Agências.pdf; [PT-BR] Jetpack para Agências.pdf; https://automattic.com/for-agencies/"
            },
            {
              tone: "terracotta",
              layout: "outro",
              eyebrow: "La siguiente capa",
              title: "Participa sin reemplazar tu modelo de negocio",
              accent: "sin reemplazar",
              body: "El registro es gratuito y sin exclusividad. Evalúa los beneficios aplicables a tu portafolio y conserva la elección de cada cliente.",
              next: "11 · Skills y MCP",
              notes: "Usa la llamada a la acción proporcionada como referencia visual y dirige a agencies.automattic.com/signup. Aclara que los beneficios y el uso de marca dependen de los niveles y reglas vigentes. [Sources] A4A - TV 43_ 1920×1080 — PT-BR (1).png; https://agencieshelp.automattic.com/knowledge-base/sign-up-for-automattic-for-agencies/; https://agencieshelp.automattic.com/knowledge-base/marketing-yourself-as-an-automattic-for-agencies-partner/"
            }
          ]
        },
        "mcp-for-agencies": {
          number: "11",
          slug: "11-mcp-for-agencies.html",
          shortTitle: "Skills y MCP",
          title: "Conectar agentes con Skills y MCP",
          duration: "5 min",
          promise: "Instrucciones especializadas, integraciones autorizadas y control humano.",
          slides: [
            {
              tone: "ink",
              layout: "cover",
              eyebrow: "IA en la operación",
              title: "Skills orientan. MCP conecta.",
              accent: "MCP conecta",
              body: "Agent Skills enseñan cómo trabajar. MCP ofrece una interfaz para acceder a datos y acciones de sistemas externos.",
              takeaway: "Contexto correcto + acceso controlado",
              notes: "Corrige una imprecisión del material proporcionado: MCP es un estándar abierto adoptado por Automattic, no un estándar creado por Automattic. Agent Skills y MCP resuelven problemas distintos y pueden utilizarse juntos. [Sources] [PT-BR] Model Context Protocol (MCP) na Automattic.pdf; https://automattic.ai/mcp/; https://developer.wordpress.com/docs/agent-skills/"
            },
            {
              tone: "paper",
              layout: "comparison",
              eyebrow: "Papeles diferentes",
              title: "Separa instrucción de integración",
              accent: "instrucción de integración",
              items: [
                { marker: "S", label: "Agent Skill", text: "Un SKILL.md orienta tareas WordPress con prácticas y guardrails." },
                { marker: "M", label: "MCP", text: "Un estándar conecta al agente con herramientas, datos y acciones autorizadas." }
              ],
              notes: "Los Skills son archivos versionables instalados en el proyecto o globalmente. MCP conecta clientes compatibles con implementaciones específicas de cada producto. Ninguno reemplaza revisión, pruebas ni permisos. [Sources] https://developer.wordpress.com/docs/agent-skills/; https://developer.wordpress.com/docs/developer-tools/studio/agent-skills-wordpress-studio/; https://automattic.ai/mcp/"
            },
            {
              tone: "cobalt",
              layout: "flow",
              eyebrow: "Cómo funciona la conexión",
              title: "El permiso acompaña cada etapa",
              accent: "permiso",
              items: [
                { label: "1 · Conectar", text: "Elige un cliente y un producto compatibles." },
                { label: "2 · Autorizar", text: "Concede solo los datos y acciones necesarios." },
                { label: "3 · Confirmar", text: "Revisa el resultado y los cambios realizados." }
              ],
              notes: "Cada producto tiene su propia configuración, autorización y capacidades. Algunas integraciones son de solo lectura; otras pueden crear, actualizar o eliminar. Lee la documentación de la implementación antes de conectar. [Sources] https://automattic.ai/mcp/"
            },
            {
              tone: "frost",
              layout: "checklist",
              eyebrow: "Primeros usos",
              title: "Empieza por tareas verificables",
              accent: "verificables",
              items: [
                { marker: "R", label: "Informes", text: "Consultar contenido y métricas con un alcance definido." },
                { marker: "L", label: "Lectura", text: "Analizar productos, pedidos o actividad sin cambiar datos." },
                { marker: "A", label: "Acciones", text: "Escribir solo con aprobación, backup y entorno adecuado." }
              ],
              notes: "Para una introducción, prioriza lectura e informes. Los datos de clientes, pedidos y conversaciones requieren atención adicional. No hagas escrituras remotas ni operaciones de producción durante este workshop. [Sources] [PT-BR] Model Context Protocol (MCP) na Automattic.pdf; https://automattic.ai/mcp/"
            },
            {
              tone: "cream",
              layout: "outro",
              eyebrow: "Serie completa",
              title: "Automatiza con gobernanza",
              accent: "gobernanza",
              body: "Skills aportan consistencia; MCP amplía el acceso. Usa privilegio mínimo, datos autorizados y revisión humana.",
              next: "Volver al índice",
              notes: "Cierra sin demostrar una conexión real. El mensaje es un modelo mental: Skills orientan el comportamiento; MCP amplía el alcance; el equipo mantiene responsabilidad, consentimiento y control."
            }
          ]
        }
      }
    }
  }
};
