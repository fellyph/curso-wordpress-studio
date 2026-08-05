# Design System — evento de IA en Faro

> Ejemplo didáctico ficticio. Los tokens y componentes deben validarse en Claude Design y WordPress antes de la implementación.

## 1. Principios

- **Accesible:** legible para públicos técnicos y no técnicos.
- **Local:** inspirado en la luz, el Atlántico y la arquitectura del Algarve sin clichés turísticos.
- **Práctico:** acciones principales reconocibles y contenido fácil de recorrer.
- **Humano:** la asistencia de IA siempre se explica y supervisa.

## 2. Tokens de color

| Token | Valor | Uso |
| --- | --- | --- |
| `--color-ink` | `#10182D` | Texto principal y fondos oscuros |
| `--color-ocean` | `#2756D8` | Enlaces, foco y acciones principales |
| `--color-sun` | `#E8794F` | Destacados y llamadas secundarias |
| `--color-lime` | `#C7E08A` | Señales positivas y detalles |
| `--color-sand` | `#F5F1E8` | Fondo claro |
| `--color-paper` | `#FFFFFF` | Superficies y contenido |

## 3. Tipografía

- Títulos: sans-serif expresiva, peso 700–800 e interlineado compacto.
- Cuerpo: sans-serif legible, peso 400–500 e interlineado mínimo de 1.5.
- Datos de agenda: fuente monoespaciada solo para horarios, pistas y metadatos.
- Escala sugerida: 16, 18, 24, 32, 48 y 72 px.

## 4. Espaciado y forma

- Unidad base: 8 px; escala: 4, 8, 16, 24, 32, 48, 64 y 96 px.
- Radio pequeño: 8 px; medio: 16 px; círculo: 999 px.
- Ancho máximo del contenido: 1200 px.
- Bordes: 1–2 px; usar sombras solo cuando indiquen elevación real.

## 5. Componentes esenciales

- Cabecera y navegación por anclas.
- Botones primario, secundario y textual.
- Hero del evento y franja de información esencial.
- Tarjetas de sesión, ponente y pista.
- Agenda responsive y controles de filtro.
- Formularios, mensajes de validación y confirmación.
- Aviso “asistido por IA” con explicación y alternativa humana.
- Pie con lugar, contacto, organización y estado ficticio del prototipo.

## 6. Estados e interacción

- Foco visible con anillo de 3 px en `--color-ocean`, o `--color-lime` sobre fondos oscuros.
- Hover refuerza el contraste sin ser la única indicación de acción.
- Los estados deshabilitados siguen siendo legibles y explican por qué la acción no está disponible.
- El error explica el problema y la corrección; el éxito confirma el siguiente paso.

## 7. Imágenes e iconos

- Priorizar imágenes autorizadas del Algarve, la comunidad y situaciones reales de trabajo.
- Evitar robots genéricos, cerebros digitales e interfaces falsas.
- Usar un único conjunto de iconos simples, con etiqueta textual cuando la acción no sea obvia.

## 8. Accesibilidad y handoff

- Verificar WCAG AA, teclado, zoom del 200%, movimiento reducido y objetivos táctiles.
- Mapear tokens a `theme.json` y usar bloques y patterns editables.
- Registrar excepciones y decisiones aprobadas en `design.md`.
