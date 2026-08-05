---
source_id: sync
locale: pt-BR
counterpart: ../en/sync.md
workshop_track: advanced
stability: stable
section_order: rule|requirements|connect|pull|push|database|deployignore|guardrails|workshop
---
# Studio Sync

## Regra principal

**Sync substitui os itens selecionados; não faz merge.** Isso vale para Pull e Push. Mudanças paralelas podem ser perdidas.

## Requisitos

WordPress.com exige site em plano compatível e acesso de administrador. Pressable exige uma conexão Jetpack compatível. A elegibilidade, o limite de 5 GB e o backup devem ser confirmados na conta usada para a demonstração.

## Conectar um site

Na aba **Sync**, faça login, selecione **Connect site**, escolha o ambiente remoto e confirme. Use apenas staging ou um site descartável.

## Pull

Pull substitui no site local os arquivos, pastas ou banco selecionados. Faça uma cópia local e confira mudanças recentes no remoto antes da operação.

## Push

Push substitui no ambiente remoto os itens escolhidos. Selecione somente o tema, plugin ou pasta alterada. Confirme o destino e o backup antes de continuar.

## Banco de dados

Incluir Database substitui o banco remoto, com exceções documentadas para tabelas de usuários. Em WooCommerce, isso pode apagar pedidos, clientes e estoque criados depois do último Pull. Banco de produção nunca entra no exercício.

## `.deployignore`

Sync respeita `.deployignore` na raiz e também exclui arquivos internos do Studio. Revise o conjunto real de arquivos antes do envio.

## Guardrails

- Use staging descartável.
- Faça Pull recente e backup verificável.
- Envie um componente por vez, sem Database.
- Coordene alterações paralelas.
- Saiba restaurar antes de executar.

## Uso no workshop

Não há prática de Sync nas quatro horas. O encerramento mostra apenas o mapa de opções depois do Preview e reforça que publicar exige hospedagem e um fluxo próprio de aprovação.
