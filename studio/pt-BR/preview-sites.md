---
source_id: preview-sites
locale: pt-BR
counterpart: ../en/preview-sites.md
workshop_track: core
stability: stable
section_order: purpose|requirements|lifecycle|limits|deployignore|safety|test
---
# Preview Sites no WordPress Studio

## Para que serve

Um Preview Site é um snapshot público e temporário do site local em um endereço `wp.build`. Ele serve para revisão com clientes, colegas ou participantes. Não é hospedagem permanente e não acompanha mudanças locais automaticamente.

## Requisitos

Preview exige uma conta WordPress.com conectada ao Studio. A documentação atual não afirma que o site precisa estar em execução antes da criação; confirme esse comportamento no smoke test da versão usada no evento.

## Criar, atualizar e encerrar

Na aba **Preview**, crie o Preview, dê um nome claro e copie a URL. Depois de alterações locais, use **Update** para substituir o snapshot. A interface também permite renomear, excluir um Preview e excluir todos os Previews da conta.

## Limites atuais

- A URL é pública para quem tiver o link.
- O Preview expira após sete dias sem atualização.
- Atualizar reinicia o período de sete dias.
- Cada conta pode manter até dez Previews simultâneos.

## `.deployignore`

O Studio envia `wp-content`. Um arquivo `.deployignore` na raiz do site exclui caminhos usando sintaxe semelhante a `.gitignore`. Exclua caches, arquivos grandes, backups, segredos e qualquer conteúdo desnecessário.

## Segurança no workshop

Use somente conteúdo fictício, próprio ou autorizado. Não inclua dados pessoais, credenciais ou materiais confidenciais. A troca de comentários ocorre por URL, mas todas as correções são feitas primeiro no site local.

## Teste antes do evento

Crie, renomeie, atualize e exclua um Preview de teste. Confirme login, limite da conta, comportamento do site parado, URL pública e expiração na versão 1.17.x usada no workshop.
