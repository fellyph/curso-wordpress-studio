# Design System — evento de IA em Faro

> Exemplo didático fictício. Tokens e componentes devem ser validados no Claude Design e no WordPress antes da implementação.

## 1. Princípios

- **Acessível:** legível para públicos técnicos e não técnicos.
- **Local:** inspirado na luz, no Atlântico e na arquitetura do Algarve sem recorrer a clichês turísticos.
- **Prático:** ações principais reconhecíveis e conteúdo fácil de percorrer.
- **Humano:** assistência de IA sempre explicada e supervisionada.

## 2. Tokens de cor

| Token | Valor | Uso |
| --- | --- | --- |
| `--color-ink` | `#10182D` | Texto principal e fundos escuros |
| `--color-ocean` | `#2756D8` | Links, foco e ações principais |
| `--color-sun` | `#E8794F` | Destaques e chamadas secundárias |
| `--color-lime` | `#C7E08A` | Sinalização positiva e detalhes |
| `--color-sand` | `#F5F1E8` | Fundo claro |
| `--color-paper` | `#FFFFFF` | Superfícies e conteúdo |

## 3. Tipografia

- Títulos: sans-serif expressiva, peso 700–800 e entrelinha compacta.
- Corpo: sans-serif legível, peso 400–500 e entrelinha mínima de 1.5.
- Dados da agenda: fonte monoespaçada apenas para horários, trilhas e metadados.
- Escala sugerida: 16, 18, 24, 32, 48 e 72 px.

## 4. Espaçamento e forma

- Unidade base: 8 px; escala: 4, 8, 16, 24, 32, 48, 64 e 96 px.
- Raio pequeno: 8 px; médio: 16 px; círculo: 999 px.
- Largura máxima do conteúdo: 1200 px.
- Bordas: 1–2 px; sombra somente quando indicar elevação real.

## 5. Componentes essenciais

- Cabeçalho e navegação por âncoras.
- Botões primário, secundário e textual.
- Hero do evento e faixa de informações essenciais.
- Cartão de sessão, pessoa palestrante e trilha.
- Agenda responsiva e controles de filtro.
- Formulários, mensagens de validação e confirmação.
- Aviso “assistido por IA” com explicação e alternativa humana.
- Rodapé com local, contato, organização e estado fictício do protótipo.

## 6. Estados e interação

- Foco visível com anel de 3 px em `--color-ocean` ou `--color-lime` sobre fundo escuro.
- Hover reforça contraste sem ser a única indicação de ação.
- Desabilitado mantém leitura e informa por que a ação não está disponível.
- Erro explica o problema e a correção; sucesso confirma o próximo passo.

## 7. Imagens e ícones

- Priorizar imagens autorizadas do Algarve, comunidade e situações reais de trabalho.
- Evitar imagens genéricas de robôs, cérebros digitais e interfaces falsas.
- Usar um único conjunto de ícones simples, com rótulo textual quando a ação não for óbvia.

## 8. Acessibilidade e handoff

- Verificar WCAG AA, teclado, zoom de 200%, movimento reduzido e alvos de toque.
- Mapear tokens para `theme.json` e usar blocos/patterns editáveis.
- Registrar exceções e decisões aprovadas em `design.md`.
