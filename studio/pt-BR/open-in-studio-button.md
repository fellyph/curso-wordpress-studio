---
source_id: open-in-studio-button
locale: pt-BR
counterpart: ../en/open-in-studio-button.md
workshop_track: facilitator
stability: stable
section_order: purpose|inputs|behavior|workshop|safety
---
# Botão Open in WordPress Studio

## Para que serve

O botão **Open in WordPress Studio** inicia a criação de um site local a partir de um Blueprint compartilhado. Ele é útil em materiais do workshop, README, vídeos e páginas de recursos.

## Entradas aceitas

O gerador oficial aceita uma URL pública de Blueprint, JSON bruto ou JSON codificado em Base64.

## Comportamento

Se o Studio estiver instalado, o link abre o fluxo de criação. Caso contrário, a pessoa é direcionada ao download e precisa abrir o link novamente depois da instalação.

## Uso no workshop

O instrutor prepara um botão para o site inicial alternativo. O link deve ser testado em macOS e Windows e acompanhado por um arquivo local equivalente para falhas de rede.

## Segurança

Valide o Blueprint antes de publicar. Não inclua segredos, tokens, credenciais ou URLs privadas. Use apenas plugins, temas, conteúdo e recursos que possam ser redistribuídos.
