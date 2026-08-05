# design.md — sitio del evento de IA en Faro

> Artefacto didáctico ficticio para revisar el resultado de Claude Design antes de la implementación. Debe usarse con `requirements.md` y `design-system.md`.

## 1. Dirección de la experiencia

El sitio debe presentar un evento accesible, práctico y vinculado al Algarve. La comunidad WordPress organiza la iniciativa, pero la experiencia no debe presuponer conocimientos de WordPress o desarrollo.

## 2. Estructura prioritaria

1. Hero con propuesta, fecha, lugar y CTA de inscripción.
2. Beneficios para hoteles, restaurantes, agencias y profesionales locales.
3. Agenda con pistas Business y Tech comparables por horario.
4. Ponentes y sesiones con datos ficticios claramente identificados.
5. Caminos para inscripción, ponentes, voluntariado y patrocinio.
6. Lugar, contacto, preguntas frecuentes y aviso sobre contenido de demostración.

## 3. Layout responsive

- Desktop: cuadrícula de 12 columnas, contenido principal limitado a 1200 px y agenda en dos pistas.
- Tablet: cuadrícula de 8 columnas y agenda con alternancia entre vista combinada y por pista.
- Mobile: una columna, CTA principal anticipado y sesiones ordenadas cronológicamente.
- Cabecera compacta y navegación por anclas; ninguna información depende solo del hover.

## 4. Comportamientos principales

- Los filtros de agenda mantienen visibles horario, pista y sesión.
- Los formularios son demostraciones y terminan en una confirmación ficticia.
- Las funciones asistidas por IA están etiquetadas y ofrecen una alternativa sin IA.
- Los estados de carga, vacío, éxito y error usan mensajes directos y accionables.

## 5. Contenido y datos

- Usar nombres, imágenes, precios, contactos y logotipos ficticios o autorizados.
- No inventar información aún abierta en `requirements.md`; indicar “por confirmar”.
- Mantener un lenguaje acogedor y explicar los términos técnicos cuando sean inevitables.

## 6. Accesibilidad

- Contraste mínimo WCAG AA, foco visible y navegación completa por teclado.
- Un único `h1`, jerarquía de títulos consistente y enlaces con propósito explícito.
- Las imágenes informativas tienen texto alternativo; los elementos decorativos son ignorados por tecnologías de asistencia.
- Objetivos táctiles de al menos 44 × 44 px y respeto por la preferencia de movimiento reducido.

## 7. Criterios de aceptación visual

- La propuesta, la fecha, el lugar y la CTA se entienden en menos de un minuto.
- Las dos pistas pueden compararse en desktop y comprenderse en mobile.
- La persona identifica dónde asiste la IA y quién toma la decisión final.
- La página sigue siendo editable con bloques y estilos globales de WordPress.

## 8. Decisiones abiertas

- Nombre final, logotipo y fotografía principal.
- Capacidad de 100 o 150 personas.
- Modalidades y precios de los tickets.
- Funciones asistidas por IA incluidas en el primer prototipo.
