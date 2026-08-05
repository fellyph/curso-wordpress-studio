---
source_id: current-state
locale: pt-BR
counterpart: ../en/current-state.md
workshop_track: facilitator
stability: volatile
section_order: baseline|requirements|models|changes|ui|conflicts|checklist
---
# Estado atual do WordPress Studio

## Baseline editorial

Este projeto usa WordPress Studio 1.17.0 como versão estável de referência. Verificado em 4 de agosto de 2026 com a documentação pública e o release oficial.

## Requisitos que podem bloquear participantes

- Studio Code exige login no WordPress.com e método de pagamento cadastrado.
- O uso gratuito durante o beta tem limite mensal compartilhado na conta.
- Preview exige login no WordPress.com, mas não exige hospedagem paga.
- Sync e MCP do WordPress.com dependem de conta, plano e permissões específicas e não fazem parte do núcleo.

## Modelos documentados

Em 3 de agosto de 2026, a página do Studio Code lista Claude Sonnet 5 como padrão, Claude Opus 4.8 e GPT 5.6 Sol. Essa lista é volátil: confira o seletor de modelos antes de cada evento e não a replique nos slides principais.

## Mudanças relevantes em 1.16 e 1.17

- Imagens podem ser coladas diretamente na conversa.
- Studio Code pode criar temas em branco ou temas descendentes.
- Há instruções globais para o agente e mensagens de limite mais claras.
- O fluxo de criação aceita importações e o changelog registra WXR/XML.
- Configurações ganharam uma visualização Agentic UI com abas e diretório padrão.
- A CLI adicionou `studio ui` e aliases para help, version e path.
- Sites com Xdebug podem mostrar um indicador dedicado.

## Interface clássica e Agentic UI

A documentação passo a passo ainda mistura a interface clássica com recursos da Agentic UI. O núcleo usa o fluxo estável disponível em todas as máquinas. Capturas ou instruções específicas da Agentic UI devem ser rotuladas como variação e verificadas no build do evento.

## Conflitos e testes pendentes

- O changelog 1.17 registra importação WXR/XML, mas a página de Import & Export ainda não refletia esse recurso na verificação.
- A documentação de Preview não declara que o site local precisa estar em execução. Teste o comportamento antes do evento.
- Exceções de credenciais, path e runtime em Blueprints devem ser verificadas antes de virar instrução prática.

## Checklist de atualização

Sete dias antes, confira [changelog](https://developer.wordpress.com/docs/developer-tools/studio/changelog/), [Studio Code](https://developer.wordpress.com/docs/developer-tools/studio/studio-code/), [roadmap](https://developer.wordpress.com/docs/developer-tools/studio/roadmap/) e [beta features](https://developer.wordpress.com/docs/developer-tools/studio/roadmap/beta-features/). Quarenta e oito horas antes, execute o fluxo completo em 1.17.x e registre o teste em `sources.json`.
