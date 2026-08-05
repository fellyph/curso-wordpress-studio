---
source_id: studio-code
locale: pt-BR
counterpart: ../en/studio-code.md
workshop_track: core
stability: volatile
section_order: access|capabilities|workflow|inputs|commands|models|safety
---
# Studio Code

## Acesso e requisitos

Studio Code é o agente de código integrado ao WordPress Studio e à Studio CLI. No desktop, abra um site e selecione a aba **Studio Code**.

O acesso atual exige login no WordPress.com e um método de pagamento cadastrado para prevenção de abuso. O recurso permanece gratuito durante o beta, mas tem um limite mensal compartilhado entre os sites da conta. Confirme acesso e saldo antes do evento.

## Capacidades

Studio Code pode ler e editar arquivos do site, criar temas, plugins e conteúdo, executar WP-CLI, validar blocos, fazer capturas de tela, usar Agent Skills e apoiar Preview ou publicação. Essas capacidades podem alterar arquivos e banco de dados; a pessoa continua responsável por escopo, revisão e aceitação.

Desde 1.16, o agente pode criar temas em branco ou temas descendentes. Desde 1.17, ele também pode receber instruções globais e exibe erros de limite mensal de forma mais consistente.

## Fluxo recomendado

1. Entregue contexto, brief e recursos.
2. Peça que o agente inspecione o site e proponha um plano.
3. Aprove o plano antes de permitir alterações.
4. Execute uma etapa pequena por vez.
5. Revise diff, Site Editor, parte visível do site e capturas de tela.
6. Registre decisões pendentes e faça uma nova revisão depois das correções.

## Arquivos, imagens e sessões

No desktop, arraste arquivos, use o botão de anexo ou cole uma imagem diretamente na conversa. Na CLI, informe caminhos. As sessões são persistentes e podem ser listadas, retomadas ou excluídas com `studio code sessions`.

## Slash commands e superfícies

Os comandos disponíveis mudam. No terminal, a documentação atual inclui `/browser`, `/login`, `/logout`, `/api-key`, `/model`, `/provider`, `/clear`, `/exit`, `/preview` e `/publish`. `/annotate`, `/need-for-speed`, `/rank-me-up` e `/taxonomist` são recursos documentados para desktop e terminal.

`/preview` e `/publish` são slash commands do terminal. No desktop, use a interface ou peça a ação na conversa; não ensine esses dois comandos como atalhos do desktop.

## Modelos e informações voláteis

Não fixe modelos em exercícios ou slides. Consulte [Estado atual](current-state.md) e confira o seletor de modelos na véspera. Escolha um modelo pelo tipo de tarefa: iteração rápida, arquitetura complexa ou revisão independente.

## Segurança e alternativa manual

Não use produção no workshop. Limite permissões, revise comandos e nunca inclua segredos em prompts ou recursos. Se Studio Code estiver indisponível por login, método de pagamento, limite ou rede, use o site inicial fornecido e continue no Site Editor.
