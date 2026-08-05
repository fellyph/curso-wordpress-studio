---
source_id: debugging
locale: pt-BR
counterpart: ../en/debugging.md
workshop_track: challenge
stability: stable
section_order: log|display|database|xdebug|challenge|safety
---
# Depuração no WordPress Studio

## Debug log

Ative `WP_DEBUG_LOG` nas configurações do site para registrar erros em `wp-content/debug.log`. Reproduza o problema, leia a evidência e desative logs desnecessários depois do teste.

## Exibir erros

`WP_DEBUG_DISPLAY` mostra erros na página e pode expor caminhos ou detalhes técnicos. Use apenas localmente. Para demonstrações, prefira o arquivo de log e uma falha pequena e controlada.

## phpMyAdmin

O Studio oferece phpMyAdmin para inspecionar o banco local. Não altere dados sem exportação prévia e não use exemplos com informações reais de clientes.

## Xdebug

Xdebug permite breakpoints e inspeção detalhada. A versão 1.17 adiciona um indicador para sites com Xdebug. Esse fluxo exige preparação do editor e fica fora do exercício iniciante.

## Desafio opcional

Participantes experientes podem executar uma auditoria de performance, SEO ou acessibilidade, registrar uma evidência reproduzível, corrigir apenas um problema e validar novamente. Não introduza erros no site de outra pessoa.

## Segurança

Logs, dumps e capturas de tela podem conter caminhos, tokens ou dados pessoais. Revise antes de compartilhar e exclua artefatos temporários do Preview com `.deployignore`.
