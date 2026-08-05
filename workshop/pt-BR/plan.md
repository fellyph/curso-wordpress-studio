---
locale: pt-BR
counterpart: ../en/plan.md
duration_minutes: 240
baseline_studio: 1.17.x
section_order: objective|outcomes|prerequisites|agenda|brief|exercises|challenges|fallback|guardrails|facilitator|success|slides|sources
---
# Do brief ao Preview: workshop de WordPress Studio

## Objetivo e público

Ao final, pessoas criando um site pela primeira vez e participantes com experiência prévia devem conseguir transformar uma ideia limitada em um site WordPress local, revisar decisões humanas e compartilhar um Preview, porque o Studio reúne criação, inspeção e retorno em um fluxo seguro.

O grupo segue um único percurso iniciante. Quem terminar antes escolhe um desafio opcional, sem dividir a facilitação em duas turmas.

## Resultados e limites

Cada participante termina com:

- um mini-brief próprio;
- um site de uma página no Studio;
- uma primeira versão construída com Studio Code ou pela alternativa manual;
- ajustes verificados no Site Editor e em viewport mobile;
- uma rodada de comentários registrada e aplicada;
- um Preview público atualizado.

Ficam fora do núcleo: terminal, código personalizado obrigatório, plugins, depuração técnica, prática de Sync, Liberate, MCP, plano pago de hospedagem e qualquer ação em produção.

## Pré-requisitos e verificação prévia

Enviar sete dias antes:

- instalar WordPress Studio 1.17.x em macOS, Windows ou Linux;
- confirmar permissão para executar o aplicativo e confiar no certificado local;
- criar e conectar uma conta WordPress.com;
- confirmar acesso ao Studio Code, método de pagamento cadastrado e limite mensal disponível;
- trazer somente textos, imagens e marcas próprias, fictícias ou autorizadas;
- atualizar o navegador.

Na entrada, cada pessoa cria um site de teste, abre WP Admin e confirma que a aba Preview está disponível. Quem não tiver Studio Code recebe imediatamente o caminho alternativo.

## Agenda de 4 horas

| Horário | Minutos | Bloco | Formato e resultado |
| --- | ---: | --- | --- |
| 00:00–00:15 | 15 | Mostrar o resultado | Demo curta, fluxo local/remoto e guardrails. |
| 00:15–00:40 | 25 | Criar o mini-brief | Trabalho individual; brief completo e limitado. |
| 00:40–01:05 | 25 | Criar o site | Quick Start, orientação no Studio e primeira visita ao Site Editor. |
| 01:05–01:50 | 45 | Construir a primeira versão | Plano aprovado no Studio Code e site de uma página. |
| 01:50–02:00 | 10 | Intervalo | Pausa e recuperação técnica. |
| 02:00–02:30 | 30 | Inspecionar e ajustar | Site Editor, conteúdo, estilos, títulos e mobile. |
| 02:30–03:00 | 30 | Aplicar Annotate | Comentários visuais específicos, diff e capturas de tela revisados. |
| 03:00–03:30 | 30 | Compartilhar Preview | URL criada e dois comentários recebidos em dupla. |
| 03:30–03:50 | 20 | Corrigir e atualizar | Comentários aplicados localmente e Preview substituído. |
| 03:50–04:00 | 10 | Fechar o ciclo | Demonstração dos resultados e caminhos de publicação. |

## Mini-brief do participante

O brief deve caber em uma página e responder:

1. Qual é o propósito do site?
2. Para qual público específico ele existe?
3. Qual é a única ação principal ou CTA?
4. Qual tom deve orientar texto e visual?
5. Quais são as três mensagens essenciais?
6. Quais quatro ou cinco seções formam a página?
7. Quais textos, imagens e marca estão disponíveis e autorizados?

Escopo padrão: hero, duas ou três seções de conteúdo e CTA final. Sem loja, login, formulário com dados reais, integrações externas ou múltiplas páginas.

## Exercícios e resultados observáveis

### 1. Mostrar o ciclo completo

**Duração:** 15 minutos. **Entrada:** site final do instrutor. **Resultado observável:** participantes conseguem apontar onde a ideia, a construção, a revisão e o compartilhamento acontecem.

Mostrar primeiro o site final, uma alteração pequena com Annotate e o Preview atualizado. Não ensinar comandos nesta etapa. Explicar que local é o espaço de construção e Preview é uma cópia pública e temporária.

### 2. Criar um brief próprio

**Duração:** 25 minutos. **Entrada:** ficha do mini-brief e pacote opcional de recursos. **Resultado observável:** todas as sete perguntas respondidas e escopo de uma página aprovado por outra pessoa.

Formar duplas apenas para revisão. A pessoa continua responsável pelo próprio projeto. Se o escopo tiver mais de um CTA principal, mais de cinco seções ou depender de integração, reduzir antes de abrir o Studio.

### 3. Criar e conhecer o site

**Duração:** 25 minutos. **Entrada:** Studio 1.17.x e conta conectada. **Resultado observável:** site Quick Start iniciado, WP Admin e Site Editor abertos e local de arquivos identificado.

Usar **Add site → Build a new site → Quick Start**. Não alterar PHP, WordPress ou runtime. O instrutor mostra onde iniciar/parar o site, abrir WP Admin, Site Editor, Studio Code e Preview.

### 4. Planejar e construir com Studio Code

**Duração:** 45 minutos. **Entrada:** brief, recursos e site Quick Start. **Resultado observável:** plano curto aprovado e primeira versão com quatro ou cinco seções.

Prompt-base:

```text
Leia o brief e os recursos antes de editar. Inspecione este site e proponha
um plano curto para uma página com quatro ou cinco seções e um CTA.
Use blocos nativos, presets do tema e estrutura editável no Site Editor.
Preserve acessibilidade, responsividade e hierarquia de títulos.
Não implemente antes de eu aprovar o plano.
```

Depois da aprovação, executar por etapas. Revisar o diff e pedir capturas de tela em desktop e mobile. Não criar plugin nem adicionar dependências sem necessidade.

### 5. Inspecionar no Site Editor

**Duração:** 30 minutos. **Entrada:** primeira versão. **Resultado observável:** todos os blocos são editáveis, há um único H1, o CTA faz sentido em desktop e mobile e não existem textos de exemplo.

Cada pessoa altera manualmente pelo menos um texto e um estilo. Conferir contraste, ordem de leitura, links, texto alternativo, espaçamento e navegação por teclado. Registrar uma decisão que o agente não deve tomar sozinho.

### 6. Aplicar comentários com Annotate

**Duração:** 30 minutos. **Entrada:** site revisado. **Resultado observável:** dois pedidos específicos aplicados, com diff e capturas de tela aceitos conscientemente.

Selecionar dois elementos, descrever resultado esperado e restrição e enviar as anotações juntas. Exemplos: reduzir altura do hero sem esconder o CTA; aumentar contraste usando um preset existente. Rejeitar pedidos vagos como “deixe mais bonito”.

### 7. Criar Preview e revisar em dupla

**Duração:** 30 minutos. **Entrada:** site local sem dados confidenciais. **Resultado observável:** URL `wp.build` criada e dois comentários objetivos recebidos.

Nomear o Preview, compartilhar com a dupla e revisar: clareza do propósito, confiança para clicar no CTA, leitura mobile e conteúdo ausente. Lembrar que a URL é pública, expira e não acompanha mudanças locais automaticamente.

### 8. Corrigir, atualizar e encerrar

**Duração:** 30 minutos, incluindo o fechamento. **Entrada:** comentários recebidos. **Resultado observável:** ao menos uma correção local, Preview atualizado e explicação dos próximos passos.

Aplicar somente comentários coerentes com o brief, revisar novamente no Site Editor e usar **Update** no Preview. Nos dez minutos finais, diferenciar Preview, exportação, Sync e hospedagem sem executar publicação ou produção.

## Desafios opcionais

Quem terminar um bloco antes pode escolher apenas um:

1. Criar uma style variation (variação de estilos) ou aprofundar `theme.json` sem remover editabilidade.
2. Executar auditorias de performance, SEO e acessibilidade, corrigindo um único achado reproduzível.
3. Criar `.deployignore`, explicar cada exclusão e revisar o conteúdo que será enviado ao Preview.

O desafio nunca muda o cronograma da dupla nem se torna pré-requisito para o resultado principal.

## Alternativa manual

O instrutor fornece um Blueprint ou arquivo importável do site inicial, patterns (padrões) das quatro seções, textos de exemplo removíveis e recursos locais. Se Studio Code falhar por login, método de pagamento, limite ou rede:

1. abrir o site inicial fornecido;
2. escolher os patterns (padrões) no Site Editor;
3. substituir textos, imagens, cores e CTA com base no brief;
4. executar a mesma revisão manual, Annotate quando disponível e Preview;
5. se Preview também falhar, trocar a revisão presencialmente e demonstrar o compartilhamento na máquina do instrutor.

A alternativa deve alcançar site local + Preview; somente a automação muda.

## Guardrails

- A IA propõe e executa; a pessoa define escopo, aprova e aceita.
- Pedir plano antes de alterações grandes.
- Revisar diffs, comandos, Site Editor, parte visível do site e capturas de tela.
- Usar apenas conteúdo fictício, próprio ou autorizado.
- Preview é público e temporário.
- Não usar produção, Sync, escrita por MCP, DNS, exclusão remota ou banco de clientes.
- Não compartilhar senhas, tokens, dados pessoais, logs ou backups.
- Conteúdo gerado precisa de revisão factual, editorial, visual e de acessibilidade.

## Preparação do instrutor

### Uma semana antes

- Revisar changelog, Studio Code, Preview e `studio/current-state.md`.
- Fixar Studio 1.17.x nas máquinas de demonstração.
- Enviar preflight e formulário de bloqueios técnicos.
- Preparar recursos licenciados, brief-modelo e site final.
- Validar o Blueprint ou arquivo importável, SSL e alternativa manual.

### Quarenta e oito horas antes

- Executar todo o fluxo em PT-BR, EN e ES sem cache de conversa.
- Confirmar login, método de pagamento, limite e modelos disponíveis.
- Criar, renomear, atualizar e excluir um Preview.
- Testar comportamento com site parado e rede instável.
- Guardar recursos, arquivo importável e capturas de tela localmente.

### No dia

- Confirmar versão, login e Preview antes de começar.
- Formar pares de revisão, sem compartilhar contas.
- Identificar imediatamente quem seguirá a alternativa.
- Projetar o cronômetro dos blocos e proteger o intervalo.
- Remover Previews e dados temporários depois do evento.

## Critérios de sucesso

O workshop é bem-sucedido quando cada participante consegue:

1. explicar o propósito, o público e o CTA do próprio site;
2. mostrar um site local de uma página sem conteúdo de exemplo;
3. indicar uma mudança aceita e uma decisão mantida sob responsabilidade humana;
4. editar conteúdo no Site Editor;
5. explicar a diferença entre site local e Preview;
6. compartilhar um Preview e aplicar comentários verificáveis;
7. dizer que Preview não é hospedagem nem publicação em produção.

## Mapa de migração dos 38 slides

| Slide | Função atual | Decisão | Uso futuro |
| ---: | --- | --- | --- |
| 1 | Título para agências | Reescrever | “Do brief ao Preview”, público misto e quatro horas. |
| 2 | Entregáveis técnicos | Reescrever | Brief, site local, revisão e Preview. |
| 3 | Agenda antiga | Reescrever | Usar a agenda de 240 minutos deste plano. |
| 4 | Formato e duplas | Reescrever | Projeto individual com revisão em pares e alternativa. |
| 5 | Resultado primeiro | Reescrever | Manter a abertura, retirar plugin e publicação. |
| 6 | Mapa de ferramentas | Reescrever | Mostrar apenas Studio, Studio Code, Site Editor, Annotate e Preview. |
| 7 | Blueprint Development | Reescrever | Quick Start para participantes; alternativa do instrutor. |
| 8 | Local e remoto | Manter | Atualizar exemplos e destacar Preview público. |
| 9 | Agent Skills | Mover para apêndice | Desafio opcional para participantes experientes. |
| 10 | Studio CLI | Mover para apêndice | Referência avançada, não demonstrar. |
| 11 | Estratégia de modelos | Mover para apêndice | Nota volátil para instrutores. |
| 12 | Cliente Raiz Urbana | Reescrever | Template das sete perguntas do brief próprio. |
| 13 | Plugin do exercício | Remover | Não existe plugin no núcleo. |
| 14 | Divisor landing page | Reescrever | “Da ideia à primeira versão”. |
| 15 | Forma do prompt | Reescrever | Prompt-base do brief próprio. |
| 16 | Checkpoint da landing | Reescrever | Checklist observável do Site Editor e mobile. |
| 17 | Divisor Annotate | Manter | Ajustar numeração e duração. |
| 18 | Laboratório Annotate | Reescrever | Dois pedidos específicos, diff e capturas de tela. |
| 19 | Plugin spec-driven | Remover | Fora do workshop de quatro horas. |
| 20 | Debug, performance e SEO | Mover para apêndice | Transformar em desafio opcional, sem erro controlado. |
| 21 | Divisor Preview | Manter | Atualizar numeração. |
| 22 | Preview cruzado | Reescrever | Dois critérios de comentário ligados ao brief. |
| 23 | Limites do Preview | Manter | Atualizar fonte, nomenclatura e teste pré-evento. |
| 24 | Divisor Sync | Mover para apêndice | Próximos passos, sem prática. |
| 25 | Sync não faz merge | Mover para apêndice | Guardrail para formação avançada. |
| 26 | Fluxo seguro de Sync | Mover para apêndice | Material avançado do instrutor. |
| 27 | Riscos de Sync | Mover para apêndice | Material avançado do instrutor. |
| 28 | Plano de Sync | Remover | Substituir pelo bloco de correção e Update do Preview. |
| 29 | Liberate | Mover para apêndice | Formação avançada separada. |
| 30 | MCP do WordPress.com | Mover para apêndice | Formação avançada separada. |
| 31 | Pré-requisitos | Reescrever | 1.17.x, SSL, conta, Studio Code e alternativa. |
| 32 | Requisitos de conta | Reescrever | Login, método de pagamento, limite e Preview sem plano pago. |
| 33 | Infraestrutura | Mover para apêndice | Checklist do instrutor e pacote alternativo. |
| 34 | Checklist do instrutor | Mover para apêndice | Usar preparação de 7 dias, 48 horas e dia do evento. |
| 35 | Guardrails | Reescrever | Aplicar os oito guardrails deste plano. |
| 36 | O que não afirmar | Reescrever | Focar em Studio Code, Preview, autoria e produção. |
| 37 | Critérios de sucesso | Reescrever | Usar os sete critérios observáveis. |
| 38 | Próximos passos | Reescrever | Atualizar Preview, exportar e escolher hospedagem depois do workshop. |

## Fontes do plano

- [WordPress Studio](https://developer.wordpress.com/docs/developer-tools/studio/)
- [Studio Code](https://developer.wordpress.com/docs/developer-tools/studio/studio-code/)
- [Preview Sites](https://developer.wordpress.com/docs/developer-tools/studio/preview-sites/)
- [Blueprints](https://developer.wordpress.com/docs/developer-tools/studio/blueprints/)
- [Changelog](https://developer.wordpress.com/docs/developer-tools/studio/changelog/)

Use `studio/sources.json` para datas, status de estabilidade e conflitos oficiais.
