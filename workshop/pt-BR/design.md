# design.md — site do evento de IA em Faro

> Artefato didático fictício para revisar o resultado do Claude Design antes da implementação. Deve ser usado com `requirements.md` e `design-system.md`.

## 1. Direção da experiência

O site deve apresentar um evento acessível, prático e ligado ao Algarve. A comunidade WordPress organiza a iniciativa, mas a experiência não deve pressupor conhecimento de WordPress ou desenvolvimento.

## 2. Estrutura prioritária

1. Hero com proposta, data, local e CTA de inscrição.
2. Benefícios para hotéis, restaurantes, agências e profissionais locais.
3. Agenda com trilhas Business e Tech comparáveis por horário.
4. Palestrantes e sessões com dados fictícios claramente identificados.
5. Caminhos para inscrição, palestrantes, voluntários e patrocinadores.
6. Local, contato, perguntas frequentes e aviso sobre conteúdo de demonstração.

## 3. Layout responsivo

- Desktop: grade de 12 colunas, conteúdo principal limitado a 1200 px e agenda em duas trilhas.
- Tablet: grade de 8 colunas e agenda com alternância entre visão combinada e por trilha.
- Mobile: uma coluna, CTA principal antecipado e sessões ordenadas cronologicamente.
- Cabeçalho compacto e navegação por âncoras; nenhuma informação depende apenas de hover.

## 4. Comportamentos principais

- Filtros da agenda preservam horário, trilha e sessão visíveis.
- Formulários são demonstrações e terminam em confirmação fictícia.
- Funcionalidades assistidas por IA são rotuladas e oferecem alternativa sem IA.
- Estados de carregamento, vazio, sucesso e erro usam mensagens diretas e acionáveis.

## 5. Conteúdo e dados

- Usar nomes, imagens, preços, contatos e logotipos fictícios ou autorizados.
- Não inventar informações ainda abertas em `requirements.md`; sinalizar “a confirmar”.
- Manter linguagem acolhedora e explicar termos técnicos quando inevitáveis.

## 6. Acessibilidade

- Contraste mínimo WCAG AA, foco visível e navegação completa por teclado.
- Um único `h1`, hierarquia de títulos consistente e links com propósito explícito.
- Imagens informativas com texto alternativo; elementos decorativos ignorados por tecnologias assistivas.
- Alvos de toque com pelo menos 44 × 44 px e respeito a preferência por movimento reduzido.

## 7. Critérios de aceite visual

- A proposta, a data, o local e o CTA são compreendidos em menos de um minuto.
- As duas trilhas podem ser comparadas em desktop e compreendidas em mobile.
- A pessoa identifica onde existe assistência de IA e quem toma a decisão final.
- A página continua editável com blocos e estilos globais do WordPress.

## 8. Decisões em aberto

- Nome final, logotipo e fotografia principal.
- Capacidade de 100 ou 150 pessoas.
- Modalidades e preços dos tickets.
- Funcionalidades assistidas por IA que entram no primeiro protótipo.
