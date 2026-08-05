---
source_id: agent-skills
locale: pt-BR
counterpart: ../en/agent-skills.md
workshop_track: challenge
stability: volatile
section_order: concept|catalog|location|installation|workshop|practice
---
# Agent Skills no WordPress Studio

## O que são

Agent Skills são instruções especializadas que o agente lê antes de executar um tipo de trabalho. Elas complementam o modelo com práticas específicas de WordPress; não substituem revisão, testes ou permissões.

## Catálogo

O catálogo muda com frequência. Exemplos relevantes incluem Block Themes, Plugin Development, Block Development, REST API, Studio CLI e WP-CLI & Ops. Consulte o [catálogo oficial](https://developer.wordpress.com/docs/agent-skills/) em vez de congelar uma lista no workshop.

## Onde ficam

Skills de um site ficam em `.agents/skills/`. O Studio pode criar integrações para clientes compatíveis, como o caminho `.claude/skills`, mas `.agents/skills/` é a referência do projeto.

## Instalação

Use **Settings → Skills** para instalação global. Quando a interface oferecer configuração por site, use **Edit site → Overview** para ativar apenas o necessário naquele projeto.

## Uso no workshop

O núcleo não exige instalar skills. Participantes experientes podem ativar Block Themes para aprofundar `theme.json`, templates, patterns e style variations, ou usar uma skill de performance e acessibilidade em um desafio opcional.

## Boas práticas

- Leia o `SKILL.md` antes de autorizar alterações.
- Instale somente skills relevantes e de origem confiável.
- Peça plano e critérios de aceite.
- Revise arquivos, comandos, capturas de tela e resultado no WordPress.
- Trate a lista de skills como informação volátil.
